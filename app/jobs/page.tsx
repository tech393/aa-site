import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: { absolute: "Careers at Awakened Academy | Sacred Work Opportunities" },
  description: "Join the team supporting spiritual life coach training globally. Open roles at Awakened Academy.",
  alternates: { canonical: "/jobs" },
  openGraph: {
    title: "Careers at Awakened Academy",
    description: "Join the team supporting spiritual life coach training globally. Open roles at Awakened Academy.",
    url: `${SITE.url}/jobs`,
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
            <span className="eyebrow !text-gold-lt">Careers</span>
            <h1 className="mt-4 font-serif text-[clamp(32px,5.5vw,52px)] font-light leading-[1.1]">
              Sacred Work at Awakened Academy
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg">
        <div className="mx-auto max-w-reading px-6 py-20">
          <Reveal>
            <p className="text-[17px] leading-[1.85] text-ink2">We are a small, dedicated team supporting the global community of awakened coaches and spiritual entrepreneurs being trained through Awakened Academy. The people we hire share the work of bringing spiritual life coaching to those who need it most.</p>
            <p className="mt-6 text-[16px] leading-[1.85] text-ink2">There are no open roles right now. If you feel called to be part of this work, send your story and what you'd love to contribute to <a href={`mailto:${SITE.email}`} className="text-teal underline-offset-2 hover:underline">{SITE.email}</a>.</p>
            <div className="mt-10 text-center">
              <Link href="mailto:vip@awakenedacademy.com" className="inline-block rounded bg-teal px-7 py-3.5 text-[13px] font-medium text-white transition hover:bg-teal-soft">
                Email the team
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
