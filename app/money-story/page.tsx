import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { MONEY_COURSE, MONEY_LIBRARY } from "@/lib/money-story";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: { absolute: "Transforming Your Money Story | Awakened Academy" },
  description:
    "A 4-part free audio course on changing your relationship with money from the inside out. Plus a library of standalone teachings on manifestation, wealth, and the law of attraction.",
  alternates: { canonical: "/money-story" },
  openGraph: {
    title: "Transforming Your Money Story",
    description:
      "Free 4-part audio course on changing your relationship with money — plus 9 standalone teachings on manifestation and wealth.",
    url: `${SITE.url}/money-story`,
  },
};

export default function MoneyStoryPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate w-full overflow-hidden">
        <Image
          src="/images/golden-light.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/55 via-black/40 to-black/65" />
        <div className="mx-auto max-w-widest px-6 py-24 text-center text-white md:py-32">
          <Reveal>
            <span className="eyebrow !text-gold-lt">The free audio course</span>
            <h1 className="hero-text mt-4 font-serif text-[clamp(34px,6vw,60px)] leading-[1.05]">
              Transforming Your Money Story
            </h1>
            <p className="hero-text mx-auto mt-7 max-w-2xl text-[clamp(15px,2vw,18px)] leading-[1.7] text-white/95">
              A 4-part audio course on changing your relationship with money from the inside
              out — recovered from Michael's 2022 teachings, free to listen here.
            </p>
            <div className="mt-9">
              <Link
                href={`/money-story/${MONEY_COURSE[0].slug}`}
                className="inline-flex items-center justify-center rounded bg-gold px-7 py-3.5 text-[15px] font-medium text-white shadow-md transition hover:bg-gold-deep"
              >
                Start with Lesson 1 →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="bg-bg">
        <div className="mx-auto max-w-wide px-6 py-16 text-center">
          <Reveal>
            <div className="space-y-5 font-serif text-[clamp(20px,3vw,26px)] italic leading-relaxed text-ink">
              <p>Have you noticed money is harder than it should be — even when the work is good?</p>
              <p>Do the same old patterns keep showing up no matter how much you grow?</p>
            </div>
            <p className="mx-auto mt-8 max-w-2xl text-[clamp(17px,2.4vw,22px)] leading-relaxed text-ink">
              The story you carry about money is doing more of the work than your strategy is.
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-[1.85] text-ink2">
              This 4-part course walks you through finding the inherited stories that are still
              running, forgiving and cancelling the old programming, and writing a new money
              story that actually reflects who you are now.
            </p>
          </Reveal>
        </div>
      </section>

      {/* COURSE INDEX */}
      <section className="bg-warm">
        <div className="mx-auto max-w-widest px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">The 4 lessons</span>
              <h2 className="mt-3 font-serif text-[clamp(28px,5vw,42px)] text-ink">
                The full <em>course path</em>
              </h2>
              <div className="gold-line mt-6" />
              <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-[1.7] text-ink2">
                Work through them in order. Each builds on the one before.
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
                    <span className="font-serif text-[28px] leading-none text-gold">
                      {String(l.number).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-teal">
                      Audio
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-[18px] leading-[1.3] text-ink group-hover:text-teal">
                    {l.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[14px] leading-[1.65] text-ink2">{l.subtitle}</p>
                  <div className="mt-5 text-[12px] font-medium text-teal">Listen →</div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LIBRARY */}
      <section className="bg-bg">
        <div className="mx-auto max-w-wide px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">More teachings</span>
              <h2 className="mt-3 font-serif text-[clamp(26px,4vw,38px)] font-light text-ink">
                Standalone <em>money & manifestation teachings</em>
              </h2>
              <div className="gold-line mt-6" />
              <p className="mx-auto mt-6 max-w-xl text-[16px] leading-[1.7] text-ink2">
                Long-form recordings from 2014-2022 on the law of attraction, manifestation,
                wealth, and breaking free of the money game. Free to listen here.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {MONEY_LIBRARY.map((m) => (
              <Reveal key={m.audio}>
                <article className="flex h-full flex-col rounded-md border border-ink/10 bg-white p-6 shadow-sm">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-deep">
                    Teaching
                  </div>
                  <h3 className="mt-2 font-serif text-[20px] leading-[1.3] text-ink">{m.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-[1.6] text-ink2">{m.subtitle}</p>
                  <audio controls preload="none" className="mt-5 w-full" src={m.audio}>
                    Your browser does not support the audio element.
                  </audio>
                  <p className="mt-3 text-[12px] text-soft">
                    Best with headphones. Right-click the player to download.
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal text-white">
        <div className="mx-auto max-w-wide px-6 py-20 text-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(28px,5vw,42px)]">
              Ready to go <em className="text-gold-lt">deeper?</em>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[16px] leading-[1.7] text-white/85">
              If this work moved you and you want to learn how to do this kind of inner work
              for others, explore the Spiritual Life Coach Certification.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link href="/download-free-brochure" className="btn-gold">
                Download Free Brochure
              </Link>
              <Link href="/schedule" className="btn-ghost-teal !border-white !text-white hover:!bg-white hover:!text-teal">
                Book a Discovery Call
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
