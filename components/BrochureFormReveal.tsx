"use client";

import { useEffect, useRef, useState } from "react";
import { GHL } from "@/lib/site-config";

/**
 * Form-then-download widget for the brochure-optin page.
 *
 * Shows the GHL opt-in form first; once the form posts a submission signal,
 * swaps to the direct PDF download button.
 *
 * Important: the GHL form for this funnel is configured (in their dashboard)
 * with a thank-you URL that redirects the *parent* window to /schedule. That
 * navigation would blow away the reveal before it can run. We block it by
 * sandboxing the iframe without `allow-top-navigation`, so the redirect call
 * inside the iframe is denied by the browser while everything else (the
 * postMessage that signals lead capture, the form submit) still works.
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
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const loadCountRef = useRef(0);

  const formId = GHL.forms.certification.id;
  const formName = GHL.forms.certification.name;
  const formHeight = GHL.forms.certification.height;

  useEffect(() => {
    const TRUSTED_HOSTS = [
      "links.awakenedacademy.com",
      "msgsndr.com",
      "leadconnectorhq.com",
      "gohighlevel.com",
    ];
    const isTrusted = (origin: string) => {
      try {
        const h = new URL(origin).hostname;
        return TRUSTED_HOSTS.some((d) => h === d || h.endsWith(`.${d}`));
      } catch {
        return false;
      }
    };

    // GHL signals lead capture via postMessage with type "leadCollected"
    // (event name lifted from links.awakenedacademy.com/js/form_embed.js).
    // Also accept generic submit/success keywords as a defensive fallback in
    // case the payload shape changes.
    const SUBMIT_KEYWORDS = ["leadcollected", "submit", "success", "thank"];
    const indicatesSubmit = (payload: unknown): boolean => {
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

  // Backup detection: the iframe may navigate internally to a thank-you URL
  // after submission (since top-navigation is sandboxed out). Counting load
  // events catches that path even if no postMessage fires.
  const handleIframeLoad = () => {
    loadCountRef.current += 1;
    if (loadCountRef.current >= 2) setSubmitted(true);
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
        ref={iframeRef}
        src={`https://links.awakenedacademy.com/widget/form/${formId}`}
        // No allow-top-navigation: blocks the form's hardcoded redirect to /schedule.
        // No allow-popups: blocks any new-tab escape attempt.
        sandbox="allow-scripts allow-same-origin allow-forms"
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
