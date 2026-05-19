import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: { absolute: "Featured Awakened Academy Coaches | Find Your Coach" },
  description: "Browse our directory of certified Awakened Academy spiritual life coaches. Find a coach who fits your needs in 25+ countries.",
  alternates: { canonical: "/featured-coaches" },
  openGraph: {
    title: "Featured Coaches",
    description: "Browse our directory of certified Awakened Academy spiritual life coaches. Find a coach who fits your needs in 25+ countries.",
    url: `${SITE.url}/featured-coaches`,
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
            <span className="eyebrow !text-gold-lt">Find a Coach</span>
            <h1 className="mt-4 font-serif text-[clamp(32px,5.5vw,52px)] font-light leading-[1.1]">
              Awakened Academy Certified Coaches
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg">
        <div className="mx-auto max-w-reading px-6 py-20">
          <Reveal>
            <p className="text-[17px] leading-[1.85] text-ink2">Our certified coaches serve clients in 25+ countries. Each one has completed the full Awakened Academy certification and walks the path themselves. Browse the full directory to find a coach whose work resonates with what you are looking for.</p>
            <div className="mt-10 text-center">
              <Link href="https://directory.awakenedacademy.com/" className="inline-block rounded bg-teal px-7 py-3.5 text-[13px] font-medium text-white transition hover:bg-teal-soft">
                Open the Coach Directory →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
