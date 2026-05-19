import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import GHLForm from "@/components/GHLForm";
import { GHL, SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: { absolute: "Wealth and Abundance Kit | Free from Awakened Academy" },
  description: "Free wealth and abundance toolkit. Reset your money story and align with prosperity. From Michael Mackintosh and the AA team.",
  alternates: { canonical: "/wealth-and-abundance" },
  openGraph: {
    title: "Wealth and Abundance Kit",
    description: "Free wealth and abundance toolkit. Reset your money story and align with prosperity. From Michael Mackintosh and the AA team.",
    url: `${SITE.url}/wealth-and-abundance`,
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
            <span className="eyebrow !text-gold-lt">Free Spiritual Guide</span>
            <h1 className="mt-4 font-serif text-[clamp(30px,5.5vw,52px)] font-light leading-[1.1]">
              5 Ways to Make Money Online for Spiritual &amp; Empathic People
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-[clamp(15px,2vw,18px)] leading-[1.7] text-white/95 drop-shadow">
              A free guide and meditation pack to align with wealth, attract high-paying clients, and transform your money story.
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
                  <div className="font-serif text-[18px] text-ink">The 5 most proven ways</div>
                  <p className="mt-1.5 text-[15px] leading-[1.7] text-ink2">Turn your gifts into a sustainable income, with the methods that work best for empathic and spiritual people.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span aria-hidden className="mt-1 select-none text-gold">→</span>
                <div>
                  <div className="font-serif text-[18px] text-ink">Choose your path</div>
                  <p className="mt-1.5 text-[15px] leading-[1.7] text-ink2">How to pick which method fits your unique situation, gifts, and what makes you come alive.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span aria-hidden className="mt-1 select-none text-gold">→</span>
                <div>
                  <div className="font-serif text-[18px] text-ink">The simple tools you need</div>
                  <p className="mt-1.5 text-[15px] leading-[1.7] text-ink2">Less than you think. Most of what you need to start, you already have.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span aria-hidden className="mt-1 select-none text-gold">→</span>
                <div>
                  <div className="font-serif text-[18px] text-ink">Align with your soul purpose</div>
                  <p className="mt-1.5 text-[15px] leading-[1.7] text-ink2">Money flows easily when the work itself is the right work for you.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span aria-hidden className="mt-1 select-none text-gold">→</span>
                <div>
                  <div className="font-serif text-[18px] text-ink">Get paid while you sleep</div>
                  <p className="mt-1.5 text-[15px] leading-[1.7] text-ink2">Stop trading every hour for a dollar. Productize your wisdom.</p>
                </div>
              </li>
              </ul>
        <Reveal>
          <div className="mt-10 rounded-md border-l-2 border-gold bg-warm p-7 md:p-8">
            <span className="eyebrow">Bonus</span>
            <h3 className="mt-2 font-serif text-[clamp(20px,3vw,26px)] font-light text-ink">Bonus: The Advanced Manifestation Meditation</h3>
            <ul className="mt-5 space-y-3 text-[15px] leading-[1.7] text-ink2">
                <li className="flex items-start gap-3"><span className="mt-1 text-gold">✦</span><span>Experience yourself wealthy and abundant now</span></li>
                <li className="flex items-start gap-3"><span className="mt-1 text-gold">✦</span><span>Expand your consciousness around money</span></li>
                <li className="flex items-start gap-3"><span className="mt-1 text-gold">✦</span><span>Start attracting wealth and opportunities into your life today</span></li>
            </ul>
          </div>
        </Reveal>
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
