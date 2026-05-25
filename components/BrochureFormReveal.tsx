"use client";

import { useEffect, useState } from "react";
import { GHL } from "@/lib/site-config";

/**
 * Brochure opt-in widget. Renders the GHL form iframe and a download button;
 * uses CSS to swap which is visible after submit.
 *
 * We never unmount the iframe once it's rendered, because GHL's form_embed.js
 * mutates the DOM around it (iframe-resizer wrappers, attribute changes).
 * Conditionally rendering it crashed React with "Failed to execute removeChild
 * on Node: The node to be removed is not a child of this node" when state
 * flipped from form → button.
 *
 * Detection signals (any of them flips `submitted`):
 *   - postMessage payload containing `leadCollected` (GHL's official event).
 *   - iFrameSizer height collapse < 55% of peak and < 380px after 3s warmup
 *     (catches the inline thank-you swap GHL does instead of leadCollected).
 *   - Window blur with focus on the iframe, followed by 8s of inactivity
 *     (visitor clicked into the form, stopped interacting because the
 *     thank-you replaced the inputs).
 */
export default function BrochureFormReveal({
  pdfHref,
  buttonLabel = "Download My Academy Brochure",
  meta = "PDF · ~14 MB · Updated 2026",
}: {
  pdfHref: string;
  buttonLabel?: string;
  meta?: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  const formId = GHL.forms.certManus.id;
  const formName = GHL.forms.certManus.name;
  const formHeight = GHL.forms.certManus.height;

  useEffect(() => {
    const TRUSTED_SUBSTRINGS = [
      "awakenedacademy",
      "msgsndr",
      "leadconnectorhq",
      "gohighlevel",
    ];
    const isTrusted = (origin: string) => {
      try {
        const h = new URL(origin).hostname.toLowerCase();
        return TRUSTED_SUBSTRINGS.some((s) => h.includes(s));
      } catch {
        return false;
      }
    };

    let armedAt = Date.now() + 3000;
    let peakHeight = 0;

    const parseHeight = (raw: unknown): number | null => {
      if (typeof raw !== "string") return null;
      const m = raw.match(/^\[iFrameSizer\][^:]+:(\d+):/);
      return m ? parseInt(m[1], 10) : null;
    };

    const onMessage = (e: MessageEvent) => {
      if (!isTrusted(e.origin)) return;
      if (typeof e.data === "string" && e.data.toLowerCase().includes("leadcollected")) {
        setSubmitted(true);
        return;
      }
      if (e.data && typeof e.data === "object") {
        try {
          if (JSON.stringify(e.data).toLowerCase().includes("leadcollected")) {
            setSubmitted(true);
            return;
          }
        } catch {}
      }
      const h = parseHeight(e.data);
      if (h !== null) {
        if (h > peakHeight) peakHeight = h;
        if (Date.now() >= armedAt && peakHeight >= 400 && h < peakHeight * 0.55 && h < 380) {
          setSubmitted(true);
        }
      }
    };
    window.addEventListener("message", onMessage);

    let interactionTimer: ReturnType<typeof setTimeout> | null = null;
    const isFocusInIframe = () =>
      !!document.activeElement && document.activeElement.tagName === "IFRAME";
    const onBlur = () => {
      if (Date.now() < armedAt) return;
      setTimeout(() => {
        if (!isFocusInIframe()) return;
        if (interactionTimer) clearTimeout(interactionTimer);
        interactionTimer = setTimeout(() => setSubmitted(true), 8000);
      }, 0);
    };
    const onFocus = () => {
      if (interactionTimer) {
        clearTimeout(interactionTimer);
        interactionTimer = null;
      }
    };
    window.addEventListener("blur", onBlur);
    window.addEventListener("focus", onFocus);

    return () => {
      window.removeEventListener("message", onMessage);
      window.removeEventListener("blur", onBlur);
      window.removeEventListener("focus", onFocus);
      if (interactionTimer) clearTimeout(interactionTimer);
    };
  }, []);

  return (
    <>
      {/* Iframe stays mounted forever (see component-level note about
          form_embed.js DOM mutations); we just hide it via CSS after submit. */}
      <div
        className="-mt-2 mb-[-12px] overflow-hidden rounded bg-transparent"
        style={{ display: submitted ? "none" : "block" }}
      >
        <iframe
          src={`https://links.awakenedacademy.com/widget/form/${formId}`}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: 3,
            minHeight: formHeight,
            background: "transparent",
            display: "block",
          }}
          id={`inline-${formId}`}
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name={formName}
          data-height="undefined"
          data-layout-iframe-id={`inline-${formId}`}
          data-form-id={formId}
          title={formName}
        />
      </div>

      {submitted && (
        <>
          <div className="mt-7">
            <a
              href={pdfHref}
              download
              className="inline-block rounded bg-teal px-7 py-3.5 text-[13px] font-medium text-white transition hover:bg-teal-soft"
            >
              {buttonLabel}
            </a>
          </div>
          <p className="mt-4 text-[11px] tracking-wide text-white/75">
            {meta} · Sent to your inbox too
          </p>
        </>
      )}
    </>
  );
}
