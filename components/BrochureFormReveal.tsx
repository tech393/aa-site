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
    // Only react to GHL's official lead-capture event. Earlier broader
    // keywords (submit/success/thank) were false-triggering on init-time
    // messages and revealing the download button before the user submitted.
    const indicatesSubmit = (payload: unknown) => {
      return stringify(payload).toLowerCase().includes("leadcollected");
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
    <div className="mt-6 overflow-hidden rounded bg-white/95">
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
  );
}
