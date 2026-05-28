import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import GHLForm from "@/components/GHLForm";
import FAQ from "@/components/FAQ";
import { GHL, SITE } from "@/lib/site-config";

// TODO: swap to a dedicated "Replay Request" form once GHL form ID exists.
// Tracked in aa-site/PRE-CUTOVER-CHECKLIST.md. certManus is the closest fit today.
const REPLAY_FORM = GHL.forms.certManus;

// TODO: replace with the actual Open House replay video ID once Michael uploads it.
const REPLAY_VIMEO_ID = "REPLACE_WITH_VIMEO_ID";

export const metadata: Metadata = {
  title: { absolute: "Watch the Awakened Academy Open House Replay" },
  description:
    "Watch the replay of the Awakened Academy Open House with Michael Mackintosh. See inside the Spiritual Life Coach Certification — the seven pillars, the 14 modules, tuition, and what becoming a certified coach actually looks like.",
  alternates: { canonical: "/watch-open-house" },
  openGraph: {
    title: "Open House Replay | Awakened Academy",
    description:
      "Watch the replay of the Awakened Academy Open House with Michael Mackintosh. See inside the Spiritual Life Coach Certification.",
    url: `${SITE.url}/watch-open-house`,
  },
};

const WHAT_YOULL_LEARN = [
  {
    h: "Who this work is for",
    p: "Why so many sensitive, seeking people end up here — and the signs that spiritual coaching is genuinely your path (not just another idea you'll talk yourself out of).",
  },
  {
    h: "The Seven Awakened Pillars",
    p: "The full curriculum walkthrough — the inner foundation, the craft of coaching, the business systems, and the dharma that holds it all together.",
  },
  {
    h: "The 14 modules, end to end",
    p: "What you actually study, in what order, and the deliverables that turn study into a real practice with real clients.",
  },
  {
    h: "Tuition, payment plans, what's included",
    p: "Straight talk on cost, payment options, the founder mentorship, the lifetime community, and what's bundled at no extra charge.",
  },
  {
    h: "What certification opens up",
    p: "The certification itself, the directory listing, and the typical paths graduates take — 1:1 coaching, group programs, retreats, books, courses.",
  },
  {
    h: "Live Q&A — the questions Michael keeps getting",
    p: "Time, money, whether your background 'counts,' what happens after you certify, and the honest answer on who shouldn't enroll.",
  },
];

const FAQ_ITEMS = [
  {
    q: "How long is the replay?",
    a: (
      <p>
        Roughly 75 minutes of teaching plus the live Q&amp;A. You can watch it in one sitting or come back to it
        — the replay link is yours for as long as we host it.
      </p>
    ),
  },
  {
    q: "I want to enroll. What's the next step after watching?",
    a: (
      <p>
        Book a private call with our team at{" "}
        <Link href="/schedule" className="text-teal underline-offset-4 hover:underline">
          /schedule
        </Link>
        . We'll answer your specific questions, walk you through the program in detail, and — if it's a fit on
        both sides — get you enrolled. No pressure, no scripts.
      </p>
    ),
  },
  {
    q: "When is the next live Open House?",
    a: (
      <p>
        Michael runs the live Open House about once a month. To reserve a seat for the next one, visit{" "}
        <Link href="/open-house" className="text-teal underline-offset-4 hover:underline">
          /open-house
        </Link>
        . The live version includes real-time Q&amp;A with Michael.
      </p>
    ),
  },
  {
    q: "Is this a sales pitch?",
    a: (
      <p>
        It's a real teaching session. Michael shows you what the certification is, who it's for, and who it
        isn't for. There's an honest invitation to enroll at the end — and you're welcome to take it or leave
        it.
      </p>
    ),
  },
  {
    q: "Can I share the replay with someone?",
    a: (
      <p>
        Yes — share away. Anyone interested can request their own replay link on this page so we can stay in
        touch with answers, updates, and the next live session.
      </p>
    ),
  },
];

export default function Page() {
  return (
    <>
      {/* HERO — replay-positioned, gold/sedona feel */}
      <section className="relative isolate w-full overflow-hidden">
        <Image
          src="/images/golden-light.jpg"
          alt=""
          fill
          priority
          className="-z-10 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 via-black/55 to-black/75" />

        <div className="mx-auto max-w-wide px-6 py-24 text-center text-white md:py-28">
          <Reveal>
            <span className="text-[11px] uppercase tracking-[0.3em] text-gold-lt">
              ✦&nbsp;&nbsp;Open House Replay&nbsp;·&nbsp;Awakened Academy&nbsp;&nbsp;✦
            </span>
          </Reveal>
          <Reveal>
            <h1 className="mx-auto mt-7 max-w-4xl font-serif text-[clamp(32px,5.5vw,56px)] font-light leading-[1.08]">
              Watch the <em className="text-gold-lt">full Open House</em> — inside the Spiritual Life Coach
              Certification
            </h1>
          </Reveal>
          <Reveal>
            <p className="mx-auto mt-7 max-w-2xl text-[clamp(15px,1.8vw,18px)] leading-[1.75] text-white/95 [text-shadow:0_1px_3px_rgba(0,0,0,0.55)]">
              Michael Mackintosh walks you through the certification — the seven pillars, the 14 modules, the
              tuition and payment plans, and what becoming a certified spiritual life coach actually looks
              like in practice.
            </p>
          </Reveal>
          <Reveal>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[12.5px] text-white/90">
              {["~75 minutes", "Full Q&A included", "Watch anytime"].map((label) => (
                <span key={label} className="flex items-center gap-2">
                  <span
                    aria-hidden
                    className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-gold-lt/70 text-[11px] text-gold-lt"
                  >
                    ✓
                  </span>
                  {label}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="#replay"
                className="inline-block rounded bg-gold px-7 py-3.5 text-[13px] font-medium text-white transition hover:bg-gold-dark"
              >
                Watch the Replay
              </Link>
              <Link
                href="#request"
                className="inline-flex items-center gap-1 text-[13px] font-medium text-white underline-offset-4 hover:underline"
              >
                Or have it emailed to you <span aria-hidden>↓</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VIDEO PLAYER */}
      <section id="replay" className="scroll-mt-20 bg-bg">
        <div className="mx-auto max-w-wide px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">The Replay</span>
              <h2 className="mt-3 font-serif text-[clamp(26px,4.5vw,40px)] font-light leading-[1.2] text-ink">
                Press play and settle in
              </h2>
              <div className="gold-line mt-6" />
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-12 overflow-hidden rounded-lg bg-black shadow-3">
              <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                <iframe
                  src={`https://player.vimeo.com/video/${REPLAY_VIMEO_ID}?dnt=1&title=0&byline=0&portrait=0`}
                  title="Awakened Academy Open House Replay"
                  className="absolute inset-0 h-full w-full"
                  frameBorder={0}
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  allowFullScreen
                />
              </div>
            </div>
            <p className="mt-4 text-center text-[12px] text-ink-muted">
              Trouble with playback? Use the form below and we'll email the replay link directly to you.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHAT YOU'LL LEARN */}
      <section className="bg-warm">
        <div className="mx-auto max-w-widest px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">What's Inside the Replay</span>
              <h2 className="mt-3 font-serif text-[clamp(28px,5vw,42px)] font-light text-ink">
                What you'll walk away with
              </h2>
              <div className="gold-line mt-6" />
            </div>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {WHAT_YOULL_LEARN.map((item, i) => (
              <Reveal key={item.h}>
                <article className="h-full rounded-md border border-ink/10 bg-white p-8 shadow-sm">
                  <div className="font-script text-[28px] leading-none text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-3 font-serif text-[22px] font-light leading-[1.25] text-ink">{item.h}</h3>
                  <div className="mt-4 h-px w-10 bg-gold" />
                  <p className="mt-5 text-[15.5px] leading-[1.8] text-ink2">{item.p}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MICHAEL — short authority strip */}
      <section className="bg-bg">
        <div className="mx-auto grid max-w-wide items-center gap-12 px-6 py-20 md:grid-cols-[280px_1fr]">
          <Reveal>
            <div className="relative mx-auto h-[280px] w-[280px] overflow-hidden rounded-full shadow-3">
              <Image
                src="/images/michael-beach.jpg"
                alt="Michael Mackintosh, founder of Awakened Academy"
                fill
                className="object-cover"
                sizes="280px"
              />
            </div>
          </Reveal>
          <Reveal>
            <div>
              <span className="eyebrow">Your Host</span>
              <h2 className="mt-3 font-serif text-[clamp(26px,4vw,36px)] font-light leading-[1.2] text-ink">
                Michael Mackintosh — founder, lead teacher
              </h2>
              <div className="gold-line mt-6 !mx-0" />
              <p className="mt-7 text-[16px] leading-[1.85] text-ink2">
                Michael has been coaching spiritual seekers since 2004 and certifying coaches since 2012. He
                founded Awakened Academy in 2014 and has personally trained over 650 certified coaches across
                25+ countries. He'll walk you through the program the same way he would in a private call —
                slowly, honestly, and with room for your real questions.
              </p>
              <p className="mt-5 text-[16px] leading-[1.85] text-ink2">
                {SITE.founded.statement}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* REPLAY REQUEST FORM + BOOK-A-CALL — twin CTAs */}
      <section id="request" className="scroll-mt-20 bg-warm">
        <div className="mx-auto max-w-widest px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">Two Ways Forward</span>
              <h2 className="mt-3 font-serif text-[clamp(28px,5vw,42px)] font-light text-ink">
                Get the replay — or skip ahead and talk to us
              </h2>
              <div className="gold-line mt-6" />
            </div>
          </Reveal>

          <div className="mt-14 grid gap-10 md:grid-cols-2">
            {/* Replay request form */}
            <Reveal>
              <div className="rounded-lg bg-white p-8 shadow-3 md:p-10">
                <div className="text-[11px] font-bold uppercase tracking-[0.32em] text-teal">
                  Send Me the Replay
                </div>
                <p className="mt-3 font-serif text-[22px] font-light leading-[1.25] text-ink">
                  Email me the link so I can watch it on my own time.
                </p>
                <p className="mt-2 text-[13px] text-ink-muted">
                  Instant access · No spam · Unsubscribe anytime
                </p>
                <div className="mt-6 overflow-hidden">
                  <GHLForm
                    formId={REPLAY_FORM.id}
                    formName={REPLAY_FORM.name}
                    height={REPLAY_FORM.height}
                  />
                </div>
              </div>
            </Reveal>

            {/* Book a call */}
            <Reveal>
              <div className="flex h-full flex-col justify-between rounded-lg border border-gold/40 bg-gradient-to-br from-warm to-bg p-8 shadow-3 md:p-10">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.32em] text-gold-deep">
                    Or — Book a Private Call
                  </div>
                  <p className="mt-3 font-serif text-[22px] font-light leading-[1.25] text-ink">
                    If you already know spiritual coaching is your path, skip the replay and let's talk
                    directly.
                  </p>
                  <ul className="mt-6 space-y-3 text-[15px] leading-[1.6] text-ink2">
                    {[
                      "30 minutes, one-on-one with our team",
                      "Your specific questions, answered straight",
                      "Full program walk-through if it's a fit",
                      "No pressure — you decide if it's right",
                    ].map((b) => (
                      <li key={b} className="relative pl-7">
                        <span aria-hidden className="absolute left-0 top-[6px] text-gold">
                          ✦
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/schedule"
                  className="mt-8 inline-block rounded bg-teal px-7 py-3.5 text-center text-[13px] font-medium text-white transition hover:bg-teal-soft"
                >
                  Book a Call with Our Team
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={FAQ_ITEMS} title="Questions about the replay" eyebrow="FAQ" />

      {/* CLOSING BAND */}
      <section className="bg-bg">
        <div className="mx-auto max-w-reading px-6 py-20 text-center">
          <Reveal>
            <p className="font-serif text-[clamp(20px,3vw,26px)] font-light italic leading-[1.4] text-ink">
              "Watch the replay. Sit with it. If something inside you says <em className="text-teal">yes</em>,
              that's worth listening to."
            </p>
            <p className="mt-5 text-[13px] uppercase tracking-[0.28em] text-gold-deep">
              — Michael Mackintosh
            </p>
            <div className="mt-10">
              <Link
                href="/schedule"
                className="inline-block rounded bg-gold px-7 py-3.5 text-[13px] font-medium text-white transition hover:bg-gold-dark"
              >
                When you're ready — book a call
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
