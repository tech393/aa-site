"use client";

import { useEffect, useState } from "react";
import { GHL } from "@/lib/site-config";

/**
 * Brochure opt-in form that swaps to a direct PDF download button after the
 * visitor submits. Listens for GHL's `leadCollected` postMessage to fire the
 * reveal. (The form's redirect-on-submit was removed in the GHL dashboard, so
 * the iframe no longer needs to be sandboxed.)
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

    // Warmup before we trust height-based detection. The form re-flows as it
    // mounts (focus events, font load, captcha box appearing), so heights
    // captured in the first ~3s should not be compared to.
    let armedAt = Date.now() + 3000;
    let peakHeight = 0;

    // iFrameSizer payload: "[iFrameSizer]<id>:<height>:<width>:<type>".
    const parseHeight = (raw: unknown): number | null => {
      if (typeof raw !== "string") return null;
      const m = raw.match(/^\[iFrameSizer\][^:]+:(\d+):/);
      return m ? parseInt(m[1], 10) : null;
    };

    const onMessage = (e: MessageEvent) => {
      if (!isTrusted(e.origin)) return;

      // Path 1: explicit lead-capture event (rarely fires with inline-thank-you).
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

      // Path 2: iframe height collapse. When the form is replaced by the small
      // inline "Thank you for taking the time..." message, height drops sharply.
      const h = parseHeight(e.data);
      if (h !== null) {
        if (h > peakHeight) peakHeight = h;
        const armed = Date.now() >= armedAt;
        if (armed && peakHeight >= 400 && h < peakHeight * 0.55 && h < 380) {
          setSubmitted(true);
        }
      }
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  if (submitted) {
    return (
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
    );
  }

  return (
    <div className="-mt-2 mb-[-12px] overflow-hidden rounded bg-transparent">
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
  );
}
