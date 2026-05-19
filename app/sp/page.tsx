import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { SP_COURSE } from "@/lib/sp-course";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: { absolute: "Softly Powerful, The Free Mini-Course | Awakened Academy" },
  description:
    "The original Softly Powerful audio course from Michael Mackintosh, 17 lessons for introverts, empaths, and old souls building a life and business on their own terms.",
  alternates: { canonical: "/sp" },
  openGraph: {
    title: "Softly Powerful, The Free Mini-Course",
    description:
      "17 audio lessons for introverts, empaths, and old souls. Build a life and business without selling out.",
    url: `${SITE.url}/sp`,
  },
};

const intro = SP_COURSE.find((l) => l.slug === "intro");
const lessons = SP_COURSE.filter((l) => l.slug !== "intro");

export default function SPCoursePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate w-full overflow-hidden">
        <Image
          src="/images/woman-lotus-beach-gold.jpg"
          alt="A woman in quiet reflection at sunrise"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/55 via-black/40 to-black/65" />
        <div className="mx-auto max-w-widest px-6 py-24 text-center text-white md:py-32">
          <Reveal>
            <span className="eyebrow !text-gold-lt">The free mini-course</span>
            <h1 className="hero-text mt-4 font-serif text-[clamp(34px,6vw,60px)] leading-[1.05]">
              Softly Powerful
            </h1>
            <p className="hero-text mx-auto mt-7 max-w-2xl text-[clamp(15px,2vw,18px)] leading-[1.7] text-white/95">
              The secrets to dealing with social situations in a world that doesn't 'get' you. The
              original 17-lesson audio course from Michael Mackintosh, recovered and rebuilt.
            </p>
            <div className="mt-9">
              <Link
                href={`/sp/${intro?.slug ?? "intro"}`}
                className="inline-flex items-center justify-center rounded bg-gold px-7 py-3.5 text-[15px] font-medium text-white shadow-md transition hover:bg-gold-deep"
              >
                Start with Lesson 0, Welcome →
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
              <p>Do you need plenty of time to yourself to recharge and just be?</p>
              <p>Does too much stimulation make you feel stressed and drained?</p>
            </div>
            <p className="mx-auto mt-8 max-w-2xl text-[clamp(17px,2.4vw,22px)] leading-relaxed text-ink">
              If you said <strong className="font-semibold text-teal">yes</strong>, this mini-course is for you.
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-[1.85] text-ink2">
              You're about to discover the hard-earned secrets to overcome anxiety, overwhelm, and
              feeling too sensitive, so you can uncover your own unique way of being in the world.
              We created this program because we're introverts ourselves.
            </p>
          </Reveal>
        </div>
      </section>

      {/* COURSE INDEX */}
      <section className="bg-warm">
        <div className="mx-auto max-w-widest px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">The 17 lessons</span>
              <h2 className="mt-3 font-serif text-[clamp(28px,5vw,42px)] text-ink">
                The full <em>course path</em>
              </h2>
              <div className="gold-line mt-6" />
              <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-[1.7] text-ink2">
                Work through them in order, or jump to whichever lesson you need right now.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {SP_COURSE.map((l) => (
              <Reveal key={l.slug}>
                <Link
                  href={`/sp/${l.slug}`}
                  className="group flex h-full flex-col rounded-md border border-ink/10 bg-white p-6 shadow-sm transition hover:border-teal/40 hover:shadow-md"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-serif text-[28px] leading-none text-gold">
                      {l.number === 0 ? "00" : String(l.number).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-teal">
                      {l.number === 0 ? "Intro" : "Audio"}
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-[18px] leading-[1.3] text-ink group-hover:text-teal">
                    {l.title}
                  </h3>
                  {l.subtitle && (
                    <p className="mt-3 flex-1 text-[14px] leading-[1.65] text-ink2">{l.subtitle}</p>
                  )}
                  <div className="mt-5 text-[12px] font-medium text-teal">Listen →</div>
                </Link>
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
              Want the full <em className="text-gold-lt">Softly Powerful path?</em>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[16px] leading-[1.7] text-white/85">
              The free mini-course is one taste. The Awakened Academy Spiritual Life Coach Certification
              is the full path, designed for introverts, empaths, and old souls building real
              practices in the world.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link href="/spiritual-life-coach-certification#program-info" className="btn-gold">
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
