import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: { absolute: "Contact Awakened Academy | Get In Touch" },
  description: "Questions about spiritual life coach certification? Contact the Awakened Academy team. We respond within 24 hours.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact", description: "Get in touch with Awakened Academy." },
};

export default function ContactPage() {
  return (
    <section className="bg-bg">
      <div className="mx-auto max-w-widest px-6 py-20">
        <Reveal>
          <div className="text-center">
            <span className="eyebrow">Contact</span>
            <h1 className="mt-4 font-serif text-[clamp(32px,6vw,52px)] font-light leading-[1.1] text-ink">
              Get in <em>touch.</em>
            </h1>
            <div className="gold-line mt-7" />
            <p className="mx-auto mt-7 max-w-2xl text-[17px] leading-[1.7] text-ink2">
              The fastest way to a real conversation is to book a discovery call.
              For anything else, here's how to reach us.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <ContactTile label="Email" value={SITE.email} href={`mailto:${SITE.email}`} note="Program inquiries, press, general questions." />
          <ContactTile label="Phone" value={SITE.phone} href={SITE.phoneHref} note="Mon–Fri. Voicemail response within 1 business day." />
          <ContactTile label="Mailing Address" value={SITE.address} note="" />
          <ContactTile label="Book a Call" value="Schedule Now →" href="/schedule" note="No-pressure discovery call with our team." />
        </div>
      </div>
    </section>
  );
}

function ContactTile({ label, value, href, note }: { label: string; value: string; href?: string; note: string }) {
  const inner = (
    <>
      <div className="text-[10px] uppercase tracking-[0.24em] text-teal">{label}</div>
      <div className="mt-3 font-serif text-[22px] text-ink">{value}</div>
      {note && <p className="mt-3 text-[13.5px] leading-[1.6] text-ink2">{note}</p>}
    </>
  );
  const baseClass = "block rounded-md border border-ink/10 bg-white p-7 shadow-sm transition";
  if (href) {
    const isInternal = href.startsWith("/");
    if (isInternal) {
      return <Link href={href} className={`${baseClass} hover:border-teal/40 hover:shadow-md`}>{inner}</Link>;
    }
    return <a href={href} className={`${baseClass} hover:border-teal/40 hover:shadow-md`}>{inner}</a>;
  }
  return <div className={baseClass}>{inner}</div>;
}
