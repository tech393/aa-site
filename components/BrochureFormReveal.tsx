"use client";

import { useEffect, useRef, useState } from "react";
import { GHL } from "@/lib/site-config";

/**
 * Brochure opt-in form that swaps to a direct PDF download button after the
 * visitor submits. GHL's form is configured to redirect the parent window to
 * /schedule on submit, which blew away the reveal. To block that, we render
 * the embed iframe with sandbox flags that drop allow-top-navigation; the
 * form's hardcoded top.location.href call is then denied by the browser.
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

  const formId = GHL.forms.certification.id;
  const formName = GHL.forms.certification.name;
  const formHeight = GHL.forms.certification.height;

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
    const SUBMIT_KEYWORDS = ["leadcollected", "submit", "success", "thank"];
    const indicatesSubmit = (payload: unknown) => {
      const s = stringify(payload).toLowerCase();
      return SUBMIT_KEYWORDS.some((k) => s.includes(k));
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
        sandbox="allow-scripts allow-same-origin allow-forms"
        referrerPolicy="strict-origin"
        style={{ width: "100%", height: "100%", border: "none", minHeight: formHeight, background: "transparent" }}
        id={`inline-${formId}`}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name={formName}
        data-height={String(formHeight)}
        data-layout-iframe-id={`inline-${formId}`}
        data-form-id={formId}
        title={formName}
        onLoad={handleIframeLoad}
      />
    </div>
  );
}
