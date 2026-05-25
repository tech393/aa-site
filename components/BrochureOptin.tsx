"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { GHL } from "@/lib/site-config";

/**
 * Certification opt-in form for /cert-manus-optin. Same crash-avoidance
 * pattern as BrochureFormReveal: the iframe is rendered once and stays
 * mounted forever, hidden via CSS after submit, because GHL's form_embed.js
 * mutates the DOM around it and unmounting via conditional render crashes
 * React reconciliation with a removeChild NotFoundError.
 */
export default function BrochureOptin({
  brochureHref = "/brochure",
  brochureLabel = "Download Your Brochure",
}: {
  brochureHref?: string;
  brochureLabel?: string;
}) {
  const [submitted, setSubmitted] = useState(false);

  const formId = GHL.forms.certManus.id;
  const formName = GHL.forms.certManus.name;
  const formHeight = GHL.forms.certManus.height;

  useEffect(() => {
    const TRUSTED_SUBSTRINGS = ["awakenedacademy", "msgsndr", "leadconnectorhq", "gohighlevel"];
    const isTrusted = (origin: string) => {
      try {
        const h = new URL(origin).hostname.toLowerCase();
        return TRUSTED_SUBSTRINGS.some((s) => h.includes(s));
      } catch { return false; }
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
      {/* Form card — always mounted, hidden via CSS once submitted. */}
      <div
        className="overflow-hidden rounded-lg bg-white p-6 shadow-[0_2px_12px_-4px_rgba(42,26,15,0.08)] ring-1 ring-ink/5 md:p-7"
        style={{ display: submitted ? "none" : "block" }}
      >
        <div className="text-center">
          <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-teal">
            ✦&nbsp;&nbsp;Free Brochure&nbsp;&nbsp;✦
          </div>
          <h3 className="mt-3 font-serif text-[clamp(22px,2.8vw,28px)] leading-[1.2] text-ink">
            Download the full <em className="italic text-gold">Academy Brochure</em>
          </h3>
          <p className="mt-2 text-[13.5px] leading-[1.6] text-ink2">
            Curriculum, tuition, and how the certification works end-to-end.
          </p>
        </div>
        <div className="-mt-6 overflow-hidden">
          <iframe
            src={`https://links.awakenedacademy.com/widget/form/${formId}`}
            style={{ width: "100%", height: "100%", border: "none", borderRadius: 3, minHeight: formHeight }}
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
        <p className="mt-2 text-center text-[11.5px] tracking-wide text-ink2">
          Instant access · No spam · Unsubscribe anytime
        </p>
      </div>

      {/* Post-submit reveal — mounted only after submitted. */}
      {submitted && (
        <div className="rounded-lg bg-white p-8 text-center shadow-[0_2px_12px_-4px_rgba(42,26,15,0.08)] ring-1 ring-ink/5">
          <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-teal">
            ✦&nbsp;&nbsp;You&apos;re in&nbsp;&nbsp;✦
          </div>
          <h3 className="mt-4 font-serif text-[clamp(22px,3vw,30px)] leading-[1.2] text-ink">
            Your brochure is <em className="italic text-gold">ready</em>.
          </h3>
          <p className="mx-auto mt-3 max-w-md text-[14.5px] leading-[1.7] text-ink2">
            A copy has been sent to your inbox. You can also download it right now below.
          </p>
          <Link
            href={brochureHref}
            className="mt-7 inline-flex items-center gap-2 rounded bg-gold px-9 py-4 text-[13px] font-semibold uppercase tracking-[0.14em] text-ink transition hover:bg-gold-deep hover:text-white"
          >
            {brochureLabel} <span aria-hidden>↓</span>
          </Link>
        </div>
      )}
    </>
  );
}
