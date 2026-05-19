import type { Metadata } from "next";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: { absolute: "Terms of Service | Awakened Academy" },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <section className="relative px-6 py-20">
      <div className="mx-auto max-w-page">
        <span className="eyebrow">Terms</span>
        <h1 className="mt-4 font-serif text-[clamp(28px,5vw,42px)] font-light text-ink">Terms of Service</h1>
        <p className="mt-3 text-[12.5px] text-soft">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="prose prose-headings:font-serif prose-headings:font-light prose-headings:text-ink mt-10 max-w-none text-ink2">
          <p>
            We are in the process of updating these terms as part of a platform migration.
            A revised version will be published shortly.
          </p>
          <p>
            For questions about our terms, refund policy (14 days from program start), or program details,
            please contact <a href={`mailto:${SITE.email}`} className="text-teal">{SITE.email}</a>.
          </p>

          <h2>Refund Policy</h2>
          <p>Our refund policy is 14 days from program start. No refunds after that period.</p>

          <h2>Contact</h2>
          <p>
            {SITE.name}<br />
            {SITE.address}<br />
            Email: <a href={`mailto:${SITE.email}`} className="text-teal">{SITE.email}</a><br />
            Phone: <a href={SITE.phoneHref} className="text-teal">{SITE.phone}</a>
          </p>
        </div>
      </div>
    </section>
  );
}
