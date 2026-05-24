"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Header "Download Free Brochure" CTA. On /cert-manus we override the href to
// route into the form-gated /brochure-optin page; everywhere else it keeps
// the existing destination on the live cert page hero form.
const DEFAULT_HREF = "/spiritual-life-coach-certification#program-info";
const ROUTE_OVERRIDES: Record<string, string> = {
  "/cert-manus": "/brochure-optin",
};

export default function HeaderBrochureCTA() {
  const pathname = usePathname() ?? "";
  const href = ROUTE_OVERRIDES[pathname] ?? DEFAULT_HREF;

  return (
    <Link
      href={href}
      className="hidden rounded bg-gold px-5 py-2.5 text-[12px] font-medium text-white transition hover:bg-gold-dark sm:block"
    >
      Download Free Brochure
    </Link>
  );
}
