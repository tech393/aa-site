import type { Metadata } from "next";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: { absolute: "Earnings Disclaimer | Awakened Academy" },
  robots: { index: false, follow: true },
};

export default function EarningsDisclaimerPage() {
  return (
    <section className="relative px-6 py-20">
      <div className="mx-auto max-w-page">
        <span className="eyebrow">Earnings Disclaimer</span>
        <h1 className="mt-4 font-serif text-[clamp(28px,5vw,42px)] font-light text-ink">Earnings Disclaimer</h1>
        <p className="mt-3 text-[12.5px] text-soft">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="prose prose-headings:font-serif prose-headings:font-light prose-headings:text-ink mt-10 max-w-none text-ink2">
          <p>
            Any income claims, testimonials, or examples of results shared on this site or in our
            programs are not typical and are not guarantees of future results. Your results will depend
            on your effort, your skills, your market, and many factors outside our control or yours.
          </p>
          <p>
            We do not make any representation that you will earn any specific amount of money,
            replace your current income, or build a profitable coaching practice. Building a coaching
            business takes time, work, and adaptation.
          </p>
          <p>
            By engaging with our content or programs, you accept that you are responsible for your own
            results and that we make no warranties about future earnings.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this disclaimer? Email{" "}
            <a href={`mailto:${SITE.email}`} className="text-teal">{SITE.email}</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
