import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import GHLForm from "@/components/GHLForm";
import { GHL, SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: { absolute: "Sacred Meditation Gift Pack | Free Download" },
  description: "7 special guided meditations from Awakened Academy. Free download. Perfect for daily spiritual practice.",
  alternates: { canonical: "/meditation-gifts" },
  openGraph: {
    title: "Sacred Meditation Gift Pack",
    description: "7 special guided meditations from Awakened Academy. Free download. Perfect for daily spiritual practice.",
    url: `${SITE.url}/meditation-gifts`,
  },
};

export default function Page() {
  return (
    <>
      <section className="relative isolate w-full overflow-hidden">
        <Image src="/images/hero-meditation.webp" alt="" fill priority className="-z-10 object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/55 via-black/40 to-black/65" />
        <div className="mx-auto max-w-wide px-6 py-24 text-center text-white md:py-28">
          <Reveal>
            <span className="eyebrow !text-gold-lt">Free Audio Pack</span>
            <h1 className="mt-4 font-serif text-[clamp(30px,5.5vw,52px)] font-light leading-[1.1]">
              Sacred Meditation Gift Pack
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-[clamp(15px,2vw,18px)] leading-[1.7] text-white/95 drop-shadow">
              Seven guided meditations from Michael Mackintosh and Arielle Hecht. Free to download and keep, for your daily practice.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="opt-in" className="bg-bg">
        <div className="mx-auto max-w-wide px-6 py-20">
          <div className="grid gap-12 md:grid-cols-2 md:items-start">
            <Reveal>
              <span className="eyebrow">In this free guide</span>
              <h2 className="mt-3 font-serif text-[clamp(24px,4vw,32px)] font-light leading-[1.2] text-ink">What you will receive</h2>
              <div className="gold-line mt-6" />
              <ul className="mt-8 space-y-5">
              <li className="flex gap-4">
                <span aria-hidden className="mt-1 select-none text-gold">→</span>
                <div>
                  <div className="font-serif text-[18px] text-ink">Heart of Presence</div>
                  <p className="mt-1.5 text-[15px] leading-[1.7] text-ink2">Drop into the present moment, anywhere, any time.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span aria-hidden className="mt-1 select-none text-gold">→</span>
                <div>
                  <div className="font-serif text-[18px] text-ink">Advanced Manifestation</div>
                  <p className="mt-1.5 text-[15px] leading-[1.7] text-ink2">Experience yourself already living the life you're calling in.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span aria-hidden className="mt-1 select-none text-gold">→</span>
                <div>
                  <div className="font-serif text-[18px] text-ink">Self-Compassion &amp; Worthiness</div>
                  <p className="mt-1.5 text-[15px] leading-[1.7] text-ink2">Heal the inner critic. Receive what you deserve.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span aria-hidden className="mt-1 select-none text-gold">→</span>
                <div>
                  <div className="font-serif text-[18px] text-ink">Hand of Blessings</div>
                  <p className="mt-1.5 text-[15px] leading-[1.7] text-ink2">A practice of blessing yourself and those around you.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span aria-hidden className="mt-1 select-none text-gold">→</span>
                <div>
                  <div className="font-serif text-[18px] text-ink">Completely Relaxed</div>
                  <p className="mt-1.5 text-[15px] leading-[1.7] text-ink2">For the days when your nervous system needs a reset.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span aria-hidden className="mt-1 select-none text-gold">→</span>
                <div>
                  <div className="font-serif text-[18px] text-ink">Already Perfect</div>
                  <p className="mt-1.5 text-[15px] leading-[1.7] text-ink2">A reminder of who you already are, before any work begins.</p>
                </div>
              </li>
              </ul>
            </Reveal>
            <Reveal>
              <div className="rounded-md border border-teal/20 bg-white p-5 shadow-md md:p-6">
                <div className="text-center">
                  <span className="eyebrow !text-teal">Free Download</span>
                  <h3 className="mt-2 font-serif text-[clamp(20px,2.6vw,24px)] font-light text-ink">Get instant access</h3>
                  <p className="mt-2 text-[13px] text-soft">Sent to your inbox. No spam. Unsubscribe anytime.</p>
                </div>
                <div className="mt-5">
                  <GHLForm
                    formId={GHL.forms.certification.id}
                    formName="Lead Magnet Opt-In"
                    height={GHL.forms.certification.height}
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
