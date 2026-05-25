import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import { SITE } from "@/lib/site-config";
import {
  PILLARS,
  BENEFITS,
  TIMELINE,
  POSSIBLE,
  TESTIMONIALS,
  FAQ_ITEMS,
  faqSchema,
  courseSchema,
} from "@/lib/cert-data";

// 1:1 rebuild of the Manus mockup at awakencert-nf84fpsy.manus.space.
// Hero is kept verbatim; the rest of the page replaces Manus' light-teal
// placeholders with the real /images/bands/* photos from the live cert page.

export const metadata: Metadata = {
  title: "Spiritual Life Coach Certification (Manus Mockup)",
  description:
    "1:1 rebuild of the Manus certification page mockup with real imagery, no lead-capture form.",
  alternates: { canonical: "/cert-manus" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Spiritual Life Coach Certification (Manus Mockup)",
    description: "1:1 rebuild of the Manus certification page mockup.",
    url: `${SITE.url}/cert-manus`,
  },
};

// Image for each of the 17 BENEFITS cards (mapped to live cert page imagery).
// Ordering MUST match the BENEFITS array in lib/cert-data.tsx.
const BENEFIT_IMAGES: { src: string; alt: string; position?: string }[] = [
  { src: "/images/bands/woman-on-mountain-top.jpg",                 alt: "Woman standing on a mountain peak at sunrise",        position: "center top" },
  { src: "/images/bands/Michael-Chair-2.jpg",                       alt: "Michael Mackintosh seated during a coaching session", position: "right top" },
  { src: "/images/bands/group-meditation.jpg",                      alt: "Group of people in an outdoor meditation circle",     position: "center top" },
  { src: "/images/bands/hands-over.jpg",                            alt: "Two pairs of hands held gently together" },
  { src: "/images/bands/woman-on-grass-2.jpg",                      alt: "Woman sitting on grass in peaceful contemplation",    position: "center top" },
  { src: "/images/bands/coffee-sunset.jpg",                         alt: "Person enjoying coffee at golden hour" },
  { src: "/images/bands/shutterstock_117237259-e1778524710805.jpg", alt: "Person in a mindful moment of self-reflection outdoors" },
  { src: "/images/bands/Arielle_Writing-Hero-2.png",                alt: "Arielle Hecht writing at a desk",                     position: "left top" },
  { src: "/images/bands/purple-pink-mountains.jpg",                 alt: "Purple and pink mountain range at dusk" },
  { src: "/images/bands/wave-sunset.jpg",                           alt: "Ocean wave rolling in at sunset" },
  { src: "/images/bands/woman-on-mac.jpg",                          alt: "Woman working on a laptop from a bright workspace",   position: "center top" },
  { src: "/images/bands/team-success.jpg",                          alt: "Team celebrating a shared achievement" },
  { src: "/images/bands/plains-sunset.jpg",                         alt: "Wide open plains lit by a golden sunset" },
  { src: "/images/bands/WOMAN-LOTUS-POOL.jpg",                      alt: "Woman in lotus meditation pose by a still pool",      position: "center top" },
  { src: "/images/bands/shutterstock_648757249-e1778524833119.jpg", alt: "Person in a reflective posture with sunlight streaming in" },
  { src: "/images/bands/tablet.jpg",                                alt: "Tablet displaying digital course materials" },
  { src: "/images/bands/woman-with-tablet.jpg",                     alt: "Woman reading course content on a tablet",            position: "center top" },
];

const PRESS = ["ABC", "NBC", "CBS", "Fox News", "Good Morning America", "The Huffington Post"];

const TRUST_STATS = [
  { value: "650+",      label: "Certified coaches" },
  { value: "25+",       label: "Countries" },
  { value: "125,000+",  label: "5-star reviews" },
  { value: "Since 2004", label: "Pioneering spiritual coaching" },
];

const TIMELINE_LABELS = ["Within 30 days", "Within 60 days", "Within 90 days", "Within 6 months"];

export default function CertManusPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* =================================================================
          HERO  —  kept exactly the same per request
          ================================================================= */}
      <section className="relative isolate w-full overflow-hidden">
        <Image
          src="/images/cert-hero-meditation-sedona.webp"
          alt="Woman in white robes meditating in lotus pose on a wooden deck overlooking misty mountains at sunset"
          fill
          priority
          className="-z-10 object-cover"
          style={{ objectPosition: "center" }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/55 to-black/35" />

        <div className="mx-auto max-w-widest px-6 py-24 md:py-32 lg:py-36">
          <div className="max-w-3xl text-white">
            <Reveal>
              <div className="text-[12px] font-semibold uppercase tracking-[0.28em] text-gold-light">
                ✦&nbsp;&nbsp;Spiritual Life Coach Certification&nbsp;·&nbsp;Since 2004&nbsp;&nbsp;✦
              </div>
            </Reveal>
            <Reveal>
              <h1 className="mt-6 font-serif text-[clamp(38px,6vw,64px)] leading-[1.05]">
                Spiritual Life Coach Certification <em className="text-gold-light">in Sedona</em>
              </h1>
            </Reveal>
            <Reveal>
              <p className="mt-7 max-w-2xl text-[clamp(15px,1.8vw,18px)] leading-[1.7] text-white/95">
                Learn to harness your experiences and emotional intelligence to support and guide others through their spiritual transitions, and create a prosperous career doing what you love.
              </p>
            </Reveal>
            <Reveal>
              <ul className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-[13.5px] text-white/95">
                {[
                  "100% online & self-paced",
                  "650+ certified coaches in 25+ countries",
                  "Pioneering since 2004",
                ].map((label) => (
                  <li key={label} className="flex items-center gap-2.5">
                    <span aria-hidden className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-gold-light/70 text-[11px] text-gold-light">✓</span>
                    {label}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal>
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <Link
                  href="/schedule"
                  className="inline-flex items-center gap-2 rounded bg-gold px-7 py-3.5 text-[13.5px] font-semibold uppercase tracking-[0.12em] text-ink shadow-lg transition hover:bg-gold-deep hover:text-white"
                >
                  Book a Discovery Call
                </Link>
                <Link
                  href="#curriculum"
                  className="inline-flex items-center gap-2 rounded border border-white/45 px-7 py-3.5 text-[13.5px] font-medium uppercase tracking-[0.12em] text-white transition hover:border-white hover:bg-white/10"
                >
                  Explore the Program <span aria-hidden>↓</span>
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =================================================================
          TRUST STATS  —  italic founding statement + 4 gold stat tiles
          ================================================================= */}
      <section className="bg-teal text-white">
        <div className="mx-auto max-w-widest px-6 pt-14 pb-12 md:pt-16 md:pb-14">
          <Reveal>
            <div className="text-center text-[11px] font-semibold uppercase tracking-[0.32em] text-gold-light">
              Trusted Worldwide
            </div>
          </Reveal>
          <Reveal>
            <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
              {TRUST_STATS.map((s) => (
                <li key={s.label} className="text-center">
                  <div className="font-serif text-[clamp(36px,5vw,56px)] leading-none text-gold-light">
                    {s.value}
                  </div>
                  <div className="mt-3 text-[11.5px] font-semibold uppercase tracking-[0.22em] text-white/75">
                    {s.label}
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* AS FEATURED IN strip, slightly darker teal band */}
        <div className="border-t border-white/10 bg-teal-deep">
          <div className="mx-auto max-w-widest px-6 py-7 text-center">
            <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold-light/80">
              As Featured In
            </div>
            <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 font-serif text-[15px] italic text-white/70">
              {PRESS.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* =================================================================
          WHAT IS  —  cream centered explainer
          ================================================================= */}
      <section className="bg-bg">
        <div className="mx-auto max-w-wide px-6 py-24 text-center">
          <Reveal>
            <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-teal">
              ✦&nbsp;&nbsp;The Certification&nbsp;&nbsp;✦
            </div>
            <h2 className="mt-5 font-serif text-[clamp(32px,5.5vw,52px)] leading-[1.1] text-ink">
              What Is Spiritual Life Coach Certification?
            </h2>
          </Reveal>
          <div className="mx-auto mt-10 max-w-3xl space-y-6 text-left text-[16.5px] leading-[1.85] text-ink2">
            <Reveal>
              <p>
                Spiritual life coach certification is a structured training that qualifies you to guide others through spiritual transitions: purpose discovery, life direction, inner work, and building a coaching practice that reflects your values.
              </p>
            </Reveal>
            <Reveal>
              <p>
                It differs from general life coaching in focus. Where traditional coaching tends to target goals and performance, spiritual life coaching works with a person&apos;s relationship to meaning, calling, and the deeper questions that drive how they live and work.
              </p>
            </Reveal>
            <Reveal>
              <p>
                Awakened Academy&apos;s certification trains you across seven dimensions of this work: your inner foundation, the coaching craft, your dharma, creative expression, wealth, business systems, and client enrollment — everything needed to become a practising coach, not just a certificate holder.
              </p>
            </Reveal>
          </div>
          <Reveal>
            <div className="mt-12 flex justify-center">
              <Link
                href="/schedule"
                className="inline-flex items-center gap-2 rounded bg-gold px-9 py-4 text-[13px] font-semibold uppercase tracking-[0.14em] text-ink transition hover:bg-gold-deep hover:text-white"
              >
                Book a Discovery Call <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =================================================================
          HOW TO BECOME  —  teal bg, 3 cards
          ================================================================= */}
      <section className="bg-teal text-white">
        <div className="mx-auto max-w-widest px-6 py-24">
          <Reveal>
            <div className="text-center">
              <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold-light">
                ✦&nbsp;&nbsp;Your Path&nbsp;&nbsp;✦
              </div>
              <h2 className="mt-5 font-serif text-[clamp(30px,5vw,46px)] leading-[1.15] text-white">
                How To Become A Certified Spiritual Life Coach
              </h2>
            </div>
          </Reveal>

          <ol className="mt-14 grid gap-7 md:grid-cols-3">
            {[
              {
                step: "1",
                label: "Book a discovery call",
                body: "Talk with us. We'll walk through your situation, what you're called to, and whether Awakened Academy is the right fit. No pressure.",
              },
              {
                step: "2",
                label: "Enrol and begin the 7-pillar curriculum",
                body: "Start with Pillar I at your own pace. The curriculum is 100% self-paced, 3 to 18 months depending on how fast you move.",
              },
              {
                step: "3",
                label: "Complete, get certified, start coaching",
                body: "Finish the program, receive your certification, and start taking clients.",
              },
            ].map((item) => (
              <Reveal key={item.step}>
                <li className="flex h-full flex-col rounded-md border border-white/15 bg-white/[0.04] p-8 transition hover:border-gold-light/40 hover:bg-white/[0.07]">
                  <div className="font-serif text-[44px] italic leading-none text-gold-light/85">{item.step}</div>
                  <div className="mt-5 font-serif text-[20px] leading-[1.3] text-white">{item.label}</div>
                  <p className="mt-3 flex-1 text-[14.5px] leading-[1.75] text-white/80">{item.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal>
            <p className="mt-12 text-center text-[15px]">
              <Link href="/schedule" className="font-medium text-gold-light underline-offset-4 hover:underline">
                Ready to take the first step? Book a discovery call →
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* =================================================================
          WHAT YOU'LL LEARN  —  3-col grid, 17 image cards (placeholders → real images)
          ================================================================= */}
      <section className="bg-bg">
        <div className="mx-auto max-w-widest px-6 py-24">
          <Reveal>
            <div className="text-center">
              <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-teal">
                ✦&nbsp;&nbsp;What You&apos;ll Experience&nbsp;&nbsp;✦
              </div>
              <h2 className="mt-5 font-serif text-[clamp(28px,4.5vw,42px)] leading-[1.15] text-ink">
                What You&apos;ll Learn in This <em className="text-gold italic">Spiritual Life Coach Certification</em>
              </h2>
            </div>
          </Reveal>

          <ul className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((b, i) => {
              const img = BENEFIT_IMAGES[i];
              return (
                <Reveal key={b.title}>
                  <li className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-[0_2px_12px_-4px_rgba(42,26,15,0.08)] ring-1 ring-ink/5 transition hover:shadow-[0_8px_24px_-8px_rgba(42,26,15,0.18)] hover:ring-ink/10">
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-teal/10">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                        style={{ objectPosition: img.position ?? "center" }}
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <h3 className="font-serif text-[19px] font-normal leading-[1.3] text-ink">
                        {b.title}
                      </h3>
                      <p className="mt-3 flex-1 text-[14.5px] leading-[1.7] text-ink2">{b.body}</p>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ul>

          <Reveal>
            <div className="mt-16 flex justify-center">
              <Link
                href="/schedule"
                className="inline-flex items-center gap-2 rounded bg-gold px-9 py-4 text-[13px] font-semibold uppercase tracking-[0.14em] text-ink transition hover:bg-gold-deep hover:text-white"
              >
                Book a Discovery Call <span aria-hidden>→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =================================================================
          TRANSFORMATION TIMELINE  —  dark ink bg, horizontal 4-step
          ================================================================= */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-widest px-6 py-24">
          <Reveal>
            <div className="text-center">
              <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold-light">
                ✦&nbsp;&nbsp;Transformation Timeline&nbsp;&nbsp;✦
              </div>
              <h2 className="mt-5 font-serif text-[clamp(30px,5vw,46px)] leading-[1.15] text-white">
                What&apos;s possible <em className="text-gold-light italic">at each stage</em>
              </h2>
            </div>
          </Reveal>

          {/* Horizontal connector line + 4 circles */}
          <div className="relative mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4">
            {/* gold connector line, only on md+ */}
            <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-gold-light/40 md:block" aria-hidden />
            {TIMELINE.map((t, i) => (
              <Reveal key={t.when}>
                <div className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold-light bg-ink font-serif text-[20px] text-gold-light">
                    {i + 1}
                  </div>
                  <div className="mt-5 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-gold-light">
                    {TIMELINE_LABELS[i] ?? t.when}
                  </div>
                  <p className="mt-4 max-w-[220px] text-[14px] leading-[1.7] text-white/80">
                    {t.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          SEVEN PILLARS  —  cream, 3-col text cards (no images)
          ================================================================= */}
      <section id="curriculum" className="scroll-mt-20 bg-bg">
        <div className="mx-auto max-w-widest px-6 py-24">
          <Reveal>
            <div className="text-center">
              <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-teal">
                ✦&nbsp;&nbsp;The Curriculum&nbsp;&nbsp;✦
              </div>
              <h2 className="mt-5 font-serif text-[clamp(30px,5vw,46px)] leading-[1.15] text-ink">
                The Certification Curriculum: <em className="text-gold italic">Seven Awakened Pillars</em>
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-[15.5px] leading-[1.8] text-ink2">
                Most coach trainings teach a single method. We train you across the seven dimensions of a complete spiritual coaching life: the inner foundation, the craft, the business, and the dharma to do this work for the long run.
              </p>
            </div>
          </Reveal>

          <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((p) => (
              <Reveal key={p.title}>
                <li className="flex h-full items-start gap-5 rounded-md border border-ink/10 bg-white p-7 transition hover:border-teal/40 hover:shadow-md">
                  <div className="font-serif text-[34px] italic leading-none text-gold">{p.roman}</div>
                  <div>
                    <h3 className="font-serif text-[19px] font-normal text-ink">{p.title}</h3>
                    <p className="mt-2.5 text-[14.5px] leading-[1.7] text-ink2">{p.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* =================================================================
          WHAT IS POSSIBLE  —  teal bg, arrow list
          ================================================================= */}
      <section className="bg-teal text-white">
        <div className="mx-auto max-w-wide px-6 py-24">
          <Reveal>
            <div className="text-center">
              <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold-light">
                ✦&nbsp;&nbsp;What Is Possible For You&nbsp;&nbsp;✦
              </div>
              <h2 className="mt-5 font-serif text-[clamp(30px,5vw,46px)] leading-[1.15] text-white">
                Imagine waking up to a life where…
              </h2>
            </div>
          </Reveal>

          <ul className="mx-auto mt-14 max-w-3xl divide-y divide-white/15 text-[15.5px] leading-[1.7] text-white/90">
            {POSSIBLE.map((p) => (
              <Reveal key={p}>
                <li className="flex items-start gap-5 py-5">
                  <span aria-hidden className="mt-0.5 shrink-0 font-serif text-[20px] leading-none text-gold-light">→</span>
                  <span>{p}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* =================================================================
          TESTIMONIALS  —  cream, 3 cards with quote icon + avatar
          ================================================================= */}
      <section className="bg-bg">
        <div className="mx-auto max-w-widest px-6 py-24">
          <Reveal>
            <div className="text-center">
              <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-teal">
                ✦&nbsp;&nbsp;Student Stories&nbsp;&nbsp;✦
              </div>
              <h2 className="mt-5 font-serif text-[clamp(30px,5vw,46px)] leading-[1.15] text-ink">
                What graduates <em className="text-gold italic">say</em>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-[15.5px] leading-[1.7] text-ink2">
                Real stories from real graduates building real lives on the work.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
            {TESTIMONIALS.map((t) => (
              <Reveal key={t.name}>
                <figure className="flex h-full flex-col rounded-lg bg-white p-8 shadow-[0_2px_12px_-4px_rgba(42,26,15,0.08)] ring-1 ring-ink/5">
                  <div className="font-serif text-[44px] leading-none text-gold-light">&ldquo;</div>
                  <blockquote className="mt-3 flex-1 font-serif text-[16px] italic leading-[1.7] text-ink2">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-4 border-t border-ink/10 pt-5">
                    {t.photo ? (
                      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-1 ring-gold/30">
                        <Image src={t.photo} alt={t.name} fill className="object-cover" sizes="48px" />
                      </div>
                    ) : (
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/15 text-[15px] font-serif text-gold-deep">
                        {t.initials}
                      </div>
                    )}
                    <div>
                      <div className="font-serif text-[15.5px] text-ink">{t.name}</div>
                      <div className="mt-0.5 text-[12px] text-ink2">{t.role}</div>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================
          FINAL CTA  —  dark ink bg, two-column: copy left, brochure thumbnail right
          ================================================================= */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-widest px-6 py-24">
          <div className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
            <div>
              <Reveal>
                <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold-light">
                  ✦&nbsp;&nbsp;Ready To Begin?&nbsp;&nbsp;✦
                </div>
                <h2 className="mt-5 font-serif text-[clamp(32px,5vw,52px)] leading-[1.1] text-white">
                  If you feel called, <em className="text-gold-light italic">let&apos;s talk.</em>
                </h2>
                <p className="mt-6 max-w-xl text-[15.5px] leading-[1.75] text-white/80">
                  Book a free discovery call to see if the certification is the right next step for you.
                  Every certification student receives 1-on-1 access to Michael as part of the program.
                </p>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <Link
                    href="/schedule"
                    className="inline-flex items-center gap-2 rounded bg-gold px-9 py-4 text-[13px] font-semibold uppercase tracking-[0.14em] text-ink transition hover:bg-gold-deep hover:text-white"
                  >
                    Book a Discovery Call
                  </Link>
                  <Link
                    href="/brochure-optin"
                    className="inline-flex items-center gap-2 rounded border border-white/40 px-9 py-4 text-[13px] font-medium uppercase tracking-[0.12em] text-white transition hover:border-white hover:bg-white/10"
                  >
                    Download Free Brochure
                  </Link>
                </div>
              </Reveal>
            </div>
            <Reveal>
              <div className="relative mx-auto w-full max-w-[360px]">
                <Image
                  src="/images/cert-brochure.webp"
                  alt="Awakened Academy Spiritual Life Coach Certification brochure"
                  width={720}
                  height={540}
                  className="h-auto w-full rounded-md shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]"
                  sizes="(min-width: 768px) 360px, 100vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =================================================================
          FAQ  —  uses shared accordion
          ================================================================= */}
      <FAQ items={FAQ_ITEMS} title="Spiritual Coaching Certification FAQs" eyebrow="✦  FAQ  ✦" />

      {/* =================================================================
          CTA AFTER FAQ  —  centered solo gold button on cream
          ================================================================= */}
      <section className="bg-bg">
        <div className="mx-auto max-w-widest px-6 pb-24 text-center">
          <Reveal>
            <Link
              href="/schedule"
              className="inline-flex items-center gap-2 rounded bg-gold px-9 py-4 text-[13px] font-semibold uppercase tracking-[0.14em] text-ink transition hover:bg-gold-deep hover:text-white"
            >
              Book a Discovery Call <span aria-hidden>→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
