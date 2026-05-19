import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: { absolute: "Awakened Academy Open House | Free Live Webinar" },
  description: "Join our free live Open House webinar. Learn how Awakened Academy trains spiritual life coaches. Q&A with Michael Mackintosh.",
  alternates: { canonical: "/open-house" },
  openGraph: {
    title: "Open House",
    description: "Join our free live Open House webinar. Learn how Awakened Academy trains spiritual life coaches. Q&A with Michael Mackintosh.",
    url: `${SITE.url}/open-house`,
  },
};

export default function Page() {
  return (
    <>
      <section className="relative isolate w-full overflow-hidden">
        <Image src="/images/golden-light.jpg" alt="" fill priority className="-z-10 object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/55 via-black/40 to-black/65" />
        <div className="mx-auto max-w-wide px-6 py-24 text-center text-white md:py-28">
          <Reveal>
            <span className="eyebrow !text-gold-lt">Free Live Webinar</span>
            <h1 className="mt-4 font-serif text-[clamp(32px,5.5vw,52px)] font-light leading-[1.1]">
              The Awakened Academy Open House
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg">
        <div className="mx-auto max-w-reading px-6 py-20">
          <Reveal>
            <p className="text-[17px] leading-[1.85] text-ink2">Once a month, Michael Mackintosh opens the doors and walks you through what the Awakened Academy Spiritual Life Coach Certification actually is, who it's for, how the curriculum works, and what becoming a certified coach makes possible. Live Q&amp;A throughout.</p>
            <div className="mt-10 text-center">
              <Link href="/schedule" className="inline-block rounded bg-teal px-7 py-3.5 text-[13px] font-medium text-white transition hover:bg-teal-soft">
                Reserve your seat
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
