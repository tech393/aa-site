import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import GHLForm from "@/components/GHLForm";
import { GHL, SITE } from "@/lib/site-config";
import { MONEY_COURSE, MONEY_LIBRARY } from "@/lib/money-story";

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
                    formId={GHL.forms.moneyMagic.id}
                    formName={GHL.forms.moneyMagic.name}
                    height={GHL.forms.moneyMagic.height}
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* COURSE — 4 actual lessons, listenable here */}
      <section className="bg-warm">
        <div className="mx-auto max-w-wide px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">The deep work</span>
              <h2 className="mt-3 font-serif text-[clamp(26px,4.2vw,36px)] font-light leading-[1.15] text-ink">Transforming Your Money Story</h2>
              <div className="gold-line mx-auto mt-6" />
              <p className="mx-auto mt-7 max-w-2xl text-[clamp(15px,1.9vw,17px)] leading-[1.75] text-ink2">
                Most of what blocks prosperity is not strategy. It is the story you absorbed before you were old enough to question it. This four-part audio course brings that story into the light so it can change. Listen free — no opt-in required.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {MONEY_COURSE.map((l) => (
              <Reveal key={l.slug}>
                <Link
                  href={`/money-story/${l.slug}`}
                  className="group flex h-full flex-col rounded-md border border-ink/10 bg-white p-6 shadow-sm transition hover:border-teal/40 hover:shadow-md"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-serif text-[28px] leading-none text-gold">{String(l.number).padStart(2, "0")}</span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-teal">Audio</span>
                  </div>
                  <h3 className="mt-4 font-serif text-[18px] leading-[1.3] text-ink group-hover:text-teal">{l.title}</h3>
                  <p className="mt-3 flex-1 text-[14px] leading-[1.65] text-ink2">{l.subtitle}</p>
                  <div className="mt-5 text-[12px] font-medium text-teal">Listen →</div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="#opt-in"
              className="inline-block rounded-md bg-teal px-8 py-4 font-serif text-[16px] text-white shadow-md transition hover:bg-teal-deep"
            >
              Get the full Wealth Kit (4 pieces, free)
            </a>
          </div>
        </div>
      </section>

      {/* LIBRARY — standalone money / manifestation teachings */}
      <section className="bg-bg">
        <div className="mx-auto max-w-wide px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">More teachings</span>
              <h2 className="mt-3 font-serif text-[clamp(24px,3.6vw,32px)] font-light text-ink">Standalone <em>money &amp; manifestation</em> talks</h2>
              <div className="gold-line mx-auto mt-6" />
              <p className="mx-auto mt-6 max-w-xl text-[15px] leading-[1.7] text-ink2">
                Long-form recordings from 2014-2022 on the law of attraction, manifestation, wealth, and breaking free of the money game. Free to listen here.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {MONEY_LIBRARY.map((m) => (
              <Reveal key={m.audio}>
                <article className="flex h-full flex-col rounded-md border border-ink/10 bg-white p-6 shadow-sm">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-deep">Teaching</div>
                  <h3 className="mt-2 font-serif text-[20px] leading-[1.3] text-ink">{m.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-[1.6] text-ink2">{m.subtitle}</p>
                  <audio controls preload="none" className="mt-5 w-full" src={m.audio}>
                    Your browser does not support the audio element.
                  </audio>
                  <p className="mt-3 text-[12px] text-soft">Best with headphones. Right-click the player to download.</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
