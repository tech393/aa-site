"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import GHLForm from "@/components/GHLForm";
import { GHL } from "@/lib/site-config";

/**
 * Certification opt-in form that reveals a brochure download button after the
 * GHL form posts a submission message to the parent window.
 *
 * GHL/LeadConnector embed iframes are hosted at links.awakenedacademy.com and
 * post a message on submit. Listen broadly across that origin family, since the
 * exact payload schema isn't versioned and has changed historically.
 */
export default function BrochureOptin({
  brochureHref = "/brochure",
  brochureLabel = "Download Your Brochure",
}: {
  brochureHref?: string;
  brochureLabel?: string;
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
        const candidates = ["type", "event", "eventName", "action", "status"];
        const obj = payload as Record<string, unknown>;
        for (const k of candidates) {
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
        <GHLForm
          formId={GHL.forms.certification.id}
          formName={GHL.forms.certification.name}
          height={GHL.forms.certification.height}
        />
      </div>
      <p className="mt-2 text-center text-[11.5px] tracking-wide text-ink2">
        Instant access · No spam · Unsubscribe anytime
      </p>
    </div>
  );
}
