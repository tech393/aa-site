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
            <span className="eyebrow !text-gold-lt">A Free Kit · Awakened Academy</span>
            <h1 className="mt-4 font-serif text-[clamp(30px,5.5vw,52px)] font-light leading-[1.1]">
              Building Wealth and Abundance as a Spiritual Life Coach
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-[clamp(15px,2vw,18px)] leading-[1.7] text-white/95 drop-shadow">
              A complete kit to align with wealth, attract high-paying clients, and transform your money story — four pieces, free.
            </p>
            <p className="mt-5 font-serif italic text-[clamp(14px,1.8vw,17px)] text-gold-lt/90">
              May you serve many &amp; be wealthy always.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="opt-in" className="bg-bg">
        <div className="mx-auto max-w-wide px-6 py-20">
          <div className="grid gap-12 md:grid-cols-2 md:items-start">
            <Reveal>
              <span className="eyebrow">Inside the kit</span>
              <h2 className="mt-3 font-serif text-[clamp(24px,4vw,32px)] font-light leading-[1.2] text-ink">Four pieces, one path to prosperity</h2>
              <div className="gold-line mt-6" />
              <ul className="mt-8 space-y-5">
                <li className="flex gap-4">
                  <span aria-hidden className="mt-1 select-none text-gold">→</span>
                  <div>
                    <div className="font-serif text-[18px] text-ink">5 Ways to Make Money Online for Spiritual &amp; Empathic People</div>
                    <p className="mt-1.5 text-[15px] leading-[1.7] text-ink2">The proven methods, the simple tools you need, how to align with soul purpose, and how to get paid while you sleep.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span aria-hidden className="mt-1 select-none text-gold">→</span>
                  <div>
                    <div className="font-serif text-[18px] text-ink">The Advanced Manifestation Meditation</div>
                    <p className="mt-1.5 text-[15px] leading-[1.7] text-ink2">Experience yourself wealthy and abundant now. Expand consciousness and start attracting wealth and opportunities today.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span aria-hidden className="mt-1 select-none text-gold">→</span>
                  <div>
                    <div className="font-serif text-[18px] text-ink">5 Keys to Attract High-Paying Clients</div>
                    <p className="mt-1.5 text-[15px] leading-[1.7] text-ink2">A short audio and one-page guide to becoming a magnet for peace, prosperity, and higher purpose — and aligning yourself for success.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span aria-hidden className="mt-1 select-none text-gold">→</span>
                  <div>
                    <div className="font-serif text-[18px] text-ink">Transforming Your Money Story</div>
                    <p className="mt-1.5 text-[15px] leading-[1.7] text-ink2">A three-part mini-course to uncover hidden money beliefs, forgive and cancel old programming, and align money with your true values.</p>
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

      <section className="bg-warm">
        <div className="mx-auto max-w-wide px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">The deep work</span>
              <h2 className="mt-3 font-serif text-[clamp(26px,4.2vw,36px)] font-light leading-[1.15] text-ink">Transforming Your Money Story</h2>
              <div className="gold-line mx-auto mt-6" />
              <p className="mx-auto mt-7 max-w-2xl text-[clamp(15px,1.9vw,17px)] leading-[1.75] text-ink2">
                Most of what blocks prosperity is not strategy. It is the story you absorbed before you were old enough to question it. This three-part mini-course brings that story into the light so it can change.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Reveal>
              <div className="h-full rounded-md border-l-2 border-gold bg-white p-7 shadow-sm md:p-8">
                <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-gold-deep">Part 1</div>
                <h3 className="mt-3 font-serif text-[clamp(19px,2.4vw,22px)] font-light text-ink">Uncover the hidden stories</h3>
                <p className="mt-4 text-[15px] leading-[1.7] text-ink2">
                  Look back into childhood and surface the money beliefs you witnessed and absorbed — the ones still running quietly underneath every income decision.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-md border-l-2 border-gold bg-white p-7 shadow-sm md:p-8">
                <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-gold-deep">Part 2</div>
                <h3 className="mt-3 font-serif text-[clamp(19px,2.4vw,22px)] font-light text-ink">Forgive and cancel the beliefs</h3>
                <p className="mt-4 text-[15px] leading-[1.7] text-ink2">
                  Forgive the people inside the old stories so you are no longer bound to the past. Then consciously cancel the inherited beliefs and create space for something new.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="h-full rounded-md border-l-2 border-gold bg-white p-7 shadow-sm md:p-8">
                <div className="text-[11px] font-bold uppercase tracking-[0.28em] text-gold-deep">Part 3</div>
                <h3 className="mt-3 font-serif text-[clamp(19px,2.4vw,22px)] font-light text-ink">Align money with your values</h3>
                <p className="mt-4 text-[15px] leading-[1.7] text-ink2">
                  Name what you actually care about — and connect your money to it. When money becomes a means to a fuller life, the whole relationship shifts.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mt-12 text-center">
            <a
              href="#opt-in"
              className="inline-block rounded-md bg-teal px-8 py-4 font-serif text-[16px] text-white shadow-md transition hover:bg-teal-deep"
            >
              Get the free kit
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
