"use client";

import { useEffect, useState } from "react";
import GHLForm from "@/components/GHLForm";
import { GHL } from "@/lib/site-config";

/**
 * Brochure-page widget: shows the GHL opt-in form first, then swaps to the
 * direct PDF download button once the GHL iframe posts a submission message.
 *
 * Intended to drop straight into the existing brochure-page gold card without
 * altering its container styling.
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
    const indicatesSubmit = (payload: unknown): boolean => {
      if (typeof payload === "string") {
        const s = payload.toLowerCase();
        return s.includes("submit") || s.includes("success") || s.includes("thankyou") || s.includes("thank-you");
      }
      if (payload && typeof payload === "object") {
        const obj = payload as Record<string, unknown>;
        for (const k of ["type", "event", "eventName", "action", "status"]) {
          const v = obj[k];
          if (typeof v === "string") {
            const s = v.toLowerCase();
            if (s.includes("submit") || s.includes("success") || s.includes("thankyou") || s.includes("thank-you")) {
              return true;
            }
          }
        }
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
      <GHLForm
        formId={GHL.forms.certification.id}
        formName={GHL.forms.certification.name}
        height={GHL.forms.certification.height}
      />
    </div>
  );
}
