"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { GHL } from "@/lib/site-config";

/**
 * Certification opt-in form that swaps to a brochure CTA after the visitor
 * submits the GHL form. The form is configured to top-redirect to /schedule
 * on submit; we sandbox the iframe (no allow-top-navigation) so the redirect
 * is denied and the leadCollected postMessage gets a chance to fire instead.
 */
export default function BrochureOptin({
  brochureHref = "/brochure",
  brochureLabel = "Download Your Brochure",
}: {
  brochureHref?: string;
  brochureLabel?: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const loadCountRef = useRef(0);
  const readyAtRef = useRef(0);

  const formId = GHL.forms.certManus.id;
  const formName = GHL.forms.certManus.name;
  const formHeight = GHL.forms.certManus.height;

  useEffect(() => {
    readyAtRef.current = Date.now() + 1500;
  }, []);

  useEffect(() => {
    const TRUSTED_SUBSTRINGS = ["awakenedacademy", "msgsndr", "leadconnectorhq", "gohighlevel"];
    const isTrusted = (origin: string) => {
      try {
        const h = new URL(origin).hostname.toLowerCase();
        return TRUSTED_SUBSTRINGS.some((s) => h.includes(s));
      } catch {
        return false;
      }
    };
    const stringify = (v: unknown): string => {
      if (typeof v === "string") return v;
      if (v && typeof v === "object") {
        try { return JSON.stringify(v); } catch { return ""; }
      }
      return "";
    };
    const indicatesSubmit = (payload: unknown) => {
      const s = stringify(payload).toLowerCase();
      if (s.includes("leadcollected")) return true;
      if (Date.now() >= readyAtRef.current && (s.includes("thank you for") || s.includes("form-submission") || s.includes("formsubmitsuccess"))) {
        return true;
      }
      return false;
    };
    const onMessage = (e: MessageEvent) => {
      if (!isTrusted(e.origin)) return;
      if (!indicatesSubmit(e.data)) return;
      setSubmitted(true);
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  const handleIframeLoad = () => {
    loadCountRef.current += 1;
    if (loadCountRef.current >= 2 && Date.now() >= readyAtRef.current) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
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
    );
  }

  return (
    <div className="overflow-hidden rounded-lg bg-white p-6 shadow-[0_2px_12px_-4px_rgba(42,26,15,0.08)] ring-1 ring-ink/5 md:p-7">
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
          onLoad={handleIframeLoad}
        />
      </div>
      <p className="mt-2 text-center text-[11.5px] tracking-wide text-ink2">
        Instant access · No spam · Unsubscribe anytime
      </p>
    </div>
  );
}
