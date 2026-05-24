"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Suppress the header brochure CTA only on /cert-manus.
const SUPPRESS_PATHS = new Set(["/cert-manus"]);

export default function HeaderBrochureCTA() {
  const pathname = usePathname() ?? "";
  if (SUPPRESS_PATHS.has(pathname)) {
    return null;
  }

  return (
    <Link
      href="/spiritual-life-coach-certification#program-info"
      className="hidden rounded bg-gold px-5 py-2.5 text-[12px] font-medium text-white transition hover:bg-gold-dark sm:block"
    >
      Download Free Brochure
    </Link>
  );
}
