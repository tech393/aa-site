import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: { absolute: "Watch the Awakened Academy Open House Replay" },
  description: "Watch the recording of our Awakened Academy Open House. See inside the Spiritual Life Coach Certification.",
  alternates: { canonical: "/watch-open-house" },
  openGraph: {
    title: "Open House Replay",
    description: "Watch the recording of our Awakened Academy Open House. See inside the Spiritual Life Coach Certification.",
    url: `${SITE.url}/watch-open-house`,
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
            <span className="eyebrow !text-gold-lt">Replay</span>
            <h1 className="mt-4 font-serif text-[clamp(32px,5.5vw,52px)] font-light leading-[1.1]">
              Watch the Open House Replay
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg">
        <div className="mx-auto max-w-reading px-6 py-20">
          <Reveal>
            <p className="text-[17px] leading-[1.85] text-ink2">If you missed the live Open House, the replay is the next best thing. Michael walks through the certification, the seven pillars, the 14 modules, the tuition and payment plans, and what becoming a certified spiritual life coach looks like in practice.</p>
            <div className="mt-10 text-center">
              <Link href="/schedule" className="inline-block rounded bg-teal px-7 py-3.5 text-[13px] font-medium text-white transition hover:bg-teal-soft">
                Request the replay
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
