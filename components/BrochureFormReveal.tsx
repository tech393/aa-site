"use client";

import { useEffect, useRef, useState } from "react";
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
  const loadCountRef = useRef(0);
  const readyAtRef = useRef(0);

  const formId = GHL.forms.certManus.id;
  const formName = GHL.forms.certManus.name;
  const formHeight = GHL.forms.certManus.height;

  // After mount, mark the iframe as "ready to count submission loads". Any
  // iframe-load event arriving before this timestamp is part of the initial
  // render (React strict-mode double-mount, slow CDN, etc.) and ignored.
  useEffect(() => {
    readyAtRef.current = Date.now() + 1500;
  }, []);

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
    const stringify = (v: unknown): string => {
      if (typeof v === "string") return v;
      if (v && typeof v === "object") {
        try {
          return JSON.stringify(v);
        } catch {
          return "";
        }
      }
      return "";
    };
    // GHL's "leadCollected" is the canonical event. But with inline-thank-you
    // configured, the iframe sometimes only posts the thank-you copy via a
    // mutationObserver size update — so also accept any post-warmup message
    // mentioning the thank-you string.
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
    // GHL's "inline thank you" config replaces the form HTML inside the iframe
    // when the visitor submits, which fires `load` again. After the warmup
    // window any further load = a real submission.
    if (loadCountRef.current >= 2 && Date.now() >= readyAtRef.current) {
      setSubmitted(true);
    }
  };

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
        onLoad={handleIframeLoad}
      />
    </div>
  );
}
