import type { Metadata } from "next";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: { absolute: "Privacy Policy | Awakened Academy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <section className="relative px-6 py-20">
      <div className="mx-auto max-w-page">
        <span className="eyebrow">Privacy</span>
        <h1 className="mt-4 font-serif text-[clamp(28px,5vw,42px)] font-light text-ink">Privacy Policy</h1>
        <p className="mt-3 text-[12.5px] text-soft">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="prose prose-headings:font-serif prose-headings:font-light prose-headings:text-ink mt-10 max-w-none text-ink2">
          <p>
            We are updating this privacy policy as part of a platform migration. A revised version will be
            published shortly.
          </p>

          <h2>What we collect</h2>
          <p>
            When you opt in to a form on this site, we collect the information you provide
            (name, email, phone if given). We use this to send you the program materials you requested
            and to follow up about working with us.
          </p>

          <h2>How we use it</h2>
          <p>
            We use your data only to communicate with you about our programs and deliver the materials
            you've requested. We do not sell your information to third parties.
          </p>

          <h2>Service providers</h2>
          <p>
            We use GoHighLevel for our forms and scheduling, Kajabi for course delivery, and Vercel for
            hosting. Each is subject to their own privacy policies.
          </p>

          <h2>Your rights</h2>
          <p>
            You may request access to, correction of, or deletion of your data at any time by emailing{" "}
            <a href={`mailto:${SITE.email}`} className="text-teal">{SITE.email}</a>.
          </p>

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
