import Link from "next/link";

/**
 * Header "Download Free Brochure" CTA, sitewide. Points at /download-free-brochure
 * (the form-gated brochure page). /brochure remains the no-gate direct
 * download endpoint.
 */
export default function HeaderBrochureCTA() {
  return (
    <Link
      href="/download-free-brochure"
      className="hidden rounded bg-gold px-5 py-2.5 text-[12px] font-medium text-white transition hover:bg-gold-dark sm:block"
    >
      Download Free Brochure
    </Link>
  );
}
