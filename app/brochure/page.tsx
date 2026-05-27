import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: { absolute: "The Awakened Academy Brochure — Become a Spiritual Life Coach, Author and Awakened Leader" },
  description:
    "The Original Spiritual Life Coaching Certification. Since 2004. 1,000+ certified coaches in 25+ countries. 5M+ Insight Timer plays. 85,000+ five-star reviews. Read the full brochure online or download the PDF.",
  alternates: { canonical: "/brochure" },
  openGraph: {
    title: "The Awakened Academy Brochure — Become a Spiritual Life Coach, Author and Awakened Leader",
    description:
      "The Original Spiritual Life Coaching Certification. Since 2004. 1,000+ coaches · 25+ countries · 5M+ plays · 85,000+ reviews.",
    images: ["/brochure/pages/page-01.jpg"],
  },
};

const BROCHURE_PDF = "/downloads/awakened-academy-brochure.pdf";
const SCHEDULE_URL = "/schedule";
const BROCHURE_PAGE_COUNT = 46;
const CORRECTED_FAQ_PAGE = 41;
const BROCHURE_PAGES = Array.from({ length: BROCHURE_PAGE_COUNT }, (_, i) => ({
  num: i + 1,
  src: `/brochure/pages/page-${String(i + 1).padStart(2, "0")}.jpg`,
}));

const TRUST_SIGNALS = [
  "Since 2004",
  "1,000+ Certified Coaches",
  "25+ Countries",
  "5M+ Insight Timer Plays",
  "85,000+ Five-Star Reviews",
];

const INSIDE_BULLETS = [
  "The 3 Pillars of an Awakened Life — meaningful work, great living, time to live",
  "14 transformation modules across 6 phases — inner work, coaching mastery, business",
  "4 levels of certification · 8 official badges + 4 bonus",
  "1,000+ graduates in 25+ countries — real student stories",
  "Tuition options ($3K, $5K–$6K, $9K) and the Stacked Guarantee",
];

export default function BrochurePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative isolate w-full overflow-hidden">
        <Image
          src="/images/machu-picchu-sunset.jpg"
          alt="Machu Picchu at sunset"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/45 via-black/35 to-black/65" />

        <div className="mx-auto flex min-h-[82vh] max-w-widest items-center px-6 py-20 md:py-28">
          <div className="mx-auto w-full">
            <Reveal>
              <p className="text-center text-[11px] uppercase tracking-[0.28em] text-gold/90">
                The Awakened Academy Brochure
              </p>
              <h1 className="mt-5 text-center font-serif text-[clamp(34px,6vw,58px)] font-light leading-[1.08] text-gold-lt">
                Become a Spiritual Life Coach,<br />
                <span className="text-gold">Author &amp; Awakened Leader</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-center text-[15px] leading-[1.7] text-white/85">
                The Original Spiritual Life Coaching Certification. Since 2004.
                Total holistic life transformation — not just coaching techniques.
              </p>
            </Reveal>

            <Reveal>
              <ul className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[12px] uppercase tracking-[0.14em] text-white/80">
                {TRUST_SIGNALS.map((s, i) => (
                  <li key={s} className="flex items-center gap-5">
                    <span>{s}</span>
                    {i < TRUST_SIGNALS.length - 1 && (
                      <span aria-hidden className="text-gold/60">·</span>
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <div className="mx-auto mt-12 max-w-xl">
                <div className="rounded-md bg-teal/90 p-8 text-center shadow-2xl backdrop-blur-sm md:p-10">
                  <h2 className="font-serif text-[clamp(22px,3vw,30px)] font-light leading-[1.2] text-white">
                    Read the brochure — or book a call
                  </h2>
                  <p className="mt-4 text-[14px] leading-[1.7] text-white/90">
                    All {BROCHURE_PAGE_COUNT} pages of the Academy brochure are on this page.
                    Read it through, then book a free Sacred Session to see if this is your path.
                  </p>
                  <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                    <a
                      href={SCHEDULE_URL}
                      className="inline-block rounded bg-gold px-7 py-3.5 text-[13px] font-medium text-white transition hover:bg-gold-dark"
                    >
                      Schedule Your Call →
                    </a>
                    <a
                      href="#read-brochure"
                      className="inline-block rounded border border-white/60 px-7 py-3.5 text-[13px] font-medium text-white transition hover:bg-white/10"
                    >
                      Read brochure below
                    </a>
                  </div>
                  <p className="mt-5 text-[12px] tracking-wide text-white/75">
                    <a
                      href={BROCHURE_PDF}
                      download
                      className="underline decoration-white/40 underline-offset-4 hover:text-white"
                    >
                      Download the PDF (~14 MB)
                    </a>
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="mx-auto mt-10 max-w-2xl">
                <p className="text-center text-[11px] uppercase tracking-[0.22em] text-gold/80">
                  Inside this brochure
                </p>
                <ul className="mx-auto mt-4 max-w-xl space-y-1.5 text-[14px] leading-[1.65] text-white/85">
                  {INSIDE_BULLETS.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span aria-hidden className="mt-2 inline-block h-1 w-1 flex-none rounded-full bg-gold" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ THE BROCHURE — PAGES ============ */}
      <section id="read-brochure" className="w-full bg-teal-deep py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4">
          <Reveal>
            <div className="mb-10 text-center md:mb-14">
              <p className="text-[12px] uppercase tracking-[0.22em] text-gold/80">
                The Full Brochure
              </p>
              <h2 className="mt-3 font-serif text-[clamp(26px,4vw,42px)] font-light leading-[1.15] text-gold-lt">
                Read every page below
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[14px] leading-[1.7] text-white/70">
                All {BROCHURE_PAGE_COUNT} pages of the Awakened Academy brochure — curriculum,
                faculty, tuition, and what makes this certification different.
              </p>
            </div>
          </Reveal>

          <div className="space-y-5 md:space-y-7">
            {BROCHURE_PAGES.map(({ num, src }, i) => {
              if (num === CORRECTED_FAQ_PAGE) {
                return <CorrectedFAQCard key={src} num={num} total={BROCHURE_PAGE_COUNT} />;
              }
              return (
                <figure
                  key={src}
                  className="relative overflow-hidden rounded-sm bg-black shadow-2xl ring-1 ring-white/10"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src}
                    alt={`Awakened Academy brochure — page ${num} of ${BROCHURE_PAGE_COUNT}`}
                    width={1240}
                    height={1600}
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
                    className="block h-auto w-full"
                  />
                  <figcaption className="absolute bottom-2 right-3 rounded bg-black/55 px-2 py-0.5 text-[10px] tracking-wide text-white/70">
                    {num} / {BROCHURE_PAGE_COUNT}
                  </figcaption>
                </figure>
              );
            })}
          </div>

          {/* What's New Since 2024 */}
          <Reveal>
            <WhatsNewCard />
          </Reveal>

          {/* Closing CTA */}
          <Reveal>
            <div className="mt-14 text-center">
              <p className="text-[12px] uppercase tracking-[0.22em] text-gold/80">
                Your next step
              </p>
              <h3 className="mt-3 font-serif text-[clamp(24px,3.5vw,34px)] font-light leading-[1.15] text-gold-lt">
                Ready to talk it through?
              </h3>
              <p className="mx-auto mt-4 max-w-md text-[14px] leading-[1.7] text-white/75">
                Book a free Sacred Session with our team to see if the Awakened Academy
                is the right path for you.
              </p>
              <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <a
                  href={SCHEDULE_URL}
                  className="inline-block rounded bg-gold px-8 py-3.5 text-[13px] font-medium text-black transition hover:bg-gold-lt"
                >
                  Schedule Your Call →
                </a>
                <a
                  href={BROCHURE_PDF}
                  download
                  className="inline-block rounded border border-white/40 px-8 py-3.5 text-[13px] font-medium text-white transition hover:bg-white/10"
                >
                  Download the PDF
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

/* ============ Corrected FAQ — replaces stale page-41 ============ */
function CorrectedFAQCard({ num, total }: { num: number; total: number }) {
  return (
    <figure className="relative overflow-hidden rounded-sm bg-cream-paper p-8 shadow-2xl ring-1 ring-white/10 md:p-12">
      <p className="text-[11px] uppercase tracking-[0.24em] text-gold-deep">
        Frequently asked — updated 2026
      </p>
      <h3 className="mt-4 font-serif text-[clamp(22px,2.6vw,30px)] font-light leading-[1.2] text-ink">
        Do I have direct access to Michael and Arielle?
      </h3>
      <div className="mt-5 space-y-4 text-[15px] leading-[1.75] text-ink-soft">
        <p>
          Yes. You&rsquo;ll have direct access to Michael through{" "}
          <strong className="text-ink">bi-weekly live coaching calls — for life.</strong>{" "}
          Personal 1-on-1 sessions with Michael are available at the higher levels of the Academy.
        </p>
        <p>
          Arielle&rsquo;s full body of work — her meditations, teachings, courses on the
          feminine path, and bi-weekly live satsangs — is woven through the program.
        </p>
        <p className="text-[13px] italic text-ink-muted">
          This corrects an older brochure page. The current cohort experience reflects
          Michael &amp; Arielle&rsquo;s 2026 teaching cadence.
        </p>
      </div>
      <figcaption className="absolute bottom-2 right-3 rounded bg-ink/10 px-2 py-0.5 text-[10px] tracking-wide text-ink-muted">
        {num} / {total}
      </figcaption>
    </figure>
  );
}

/* ============ What's New Since 2024 ============ */
function WhatsNewCard() {
  const items = [
    {
      label: "The Stacked Guarantee",
      body:
        "14-day unconditional refund + 12-month Practising-Graduate Guarantee. We keep mentoring you until you&rsquo;re a working coach.",
    },
    {
      label: "4 levels · 8 + 4 badges · 13 methodologies",
      body:
        "Four levels of certification, 8 official badges plus 4 bonus, and 13 proprietary methodologies.",
    },
    {
      label: "3 public tiers — $3K / $5K–6K / $9K",
      body:
        "Awaken You ($3K) · The Three Pillars ($5K–6K) · Awakened Dharma Full Program ($9K). VIP &amp; Elite by application.",
    },
    {
      label: "The numbers, updated",
      body:
        "Since 2004 · 1,000+ certified coaches · 25+ countries · 5M+ Insight Timer plays · 85,000+ five-star reviews · 8 published books.",
    },
  ];
  return (
    <div className="mt-14 rounded-md bg-cream-paper p-8 shadow-2xl ring-1 ring-gold/30 md:p-12">
      <p className="text-[11px] uppercase tracking-[0.24em] text-gold-deep">
        What&rsquo;s new since the printed brochure
      </p>
      <h3 className="mt-4 font-serif text-[clamp(22px,2.8vw,32px)] font-light leading-[1.2] text-ink">
        Updates to the 2026 Academy
      </h3>
      <p className="mt-3 max-w-2xl text-[14px] leading-[1.7] text-ink-soft">
        The pages above are the printed brochure. A few things have evolved since
        it went to press — these supersede any older numbers or claims on the pages above.
      </p>
      <ul className="mt-7 grid gap-5 md:grid-cols-2">
        {items.map((it) => (
          <li key={it.label} className="rounded bg-white/60 p-5 ring-1 ring-line">
            <p className="font-serif text-[16px] font-medium text-ink">{it.label}</p>
            <p
              className="mt-2 text-[14px] leading-[1.65] text-ink-soft"
              dangerouslySetInnerHTML={{ __html: it.body }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
