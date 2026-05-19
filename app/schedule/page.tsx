import type { Metadata } from "next";
import Image from "next/image";
import GHLCalendar from "@/components/GHLCalendar";
import Reveal from "@/components/Reveal";
import { GHL, SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Spiritual Life Coach Certification (Online Training Program)",
  description:
    "Become a certified spiritual life coach. Our Spiritual Life Coach Certification and Sacred Online Business Academy exceeds the limits of basic life coach training. Schedule your Sacred Alignment Call.",
  alternates: { canonical: "/schedule" },
  openGraph: {
    title: "Schedule Your Sacred Alignment Call, Awakened Academy",
    description: "Become a certified spiritual life coach. Book a free clarity call to see if Awakened Academy is the right next step.",
    url: `${SITE.url}/schedule`,
  },
};

const TESTIMONIALS = [
  {
    name: "Pearl Fidler",
    quote: "It felt like a call with an old friend and I felt absolutely lit up inside.",
  },
  {
    name: "Kyli Vandemark",
    quote: "I have literally jumped timelines in my healing and my business in a matter of 6 months.",
  },
  {
    name: "Anonymous",
    quote: "The call changed my trajectory. She just saw me. She heard me, and she felt my spirit.",
  },
];

export default function SchedulePage() {
  return (
    <>
      {/* HERO with full-bleed sunrise/mountain background + scarcity copy */}
      <section className="relative isolate w-full overflow-hidden">
        <Image
          src="/images/freedom-img.webp"
          alt="Sunrise over the mountains"
          fill
          priority
          className="-z-10 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/15 via-black/25 to-black/55" />

        <div className="mx-auto max-w-widest px-6 pb-24 pt-24 text-center md:pb-32 md:pt-32">
          <Reveal>
            <div className="mx-auto inline-flex flex-col items-center">
              <div className="font-serif text-[10px] uppercase tracking-[0.36em] text-white/90">
                Awakened Academy<span className="text-gold-lt">®</span>
              </div>
              <div className="mt-3 font-serif text-[clamp(20px,3vw,30px)] font-light text-white">
                Spiritual Coaching
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-white/80">
                Certification &amp; Online Business Academy
              </div>
              <div className="mt-3 h-px w-24 bg-white/40" />
              <div className="mt-3 text-[10px] uppercase tracking-[0.28em] text-white/70">
                For deep, empathic souls who are ready for freedom
              </div>
            </div>
          </Reveal>

          <Reveal>
            <h1 className="mx-auto mt-16 max-w-4xl font-serif text-[clamp(28px,5.5vw,52px)] font-light leading-[1.15] text-white">
              Live A Spiritual Life, <em className="text-white">Do Meaningful Work</em> and Make A Great Living
            </h1>
          </Reveal>

          <Reveal>
            <p className="mx-auto mt-7 max-w-3xl text-[clamp(15px,2vw,18px)] leading-[1.65] text-white/95 drop-shadow">
              <a href="#calendar" className="font-semibold text-white underline decoration-white/60 underline-offset-4 hover:decoration-white">
                2026 June Enrolment Open Now
              </a>
              {" — "}
              Only 2 spots available, apply now to step into a life of purpose, abundance, and freedom.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CALENDAR, large white card overlapping the hero */}
      <section id="calendar" className="relative scroll-mt-20 bg-bg">
        <div className="mx-auto -mt-16 max-w-widest px-6 md:-mt-24">
          <Reveal>
            <div className="overflow-hidden rounded-lg border border-ink/10 bg-white p-4 shadow-2xl md:p-8">
              <div className="mb-6 text-center">
                <span className="eyebrow">Sacred Alignment Call</span>
                <h2 className="mt-3 font-serif text-[clamp(22px,3vw,30px)] font-light text-ink">
                  Choose your <em>date &amp; time</em>
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-[14.5px] leading-[1.7] text-ink2">
                  1-hour call. No pressure. Real conversation about where you are
                  and whether Awakened Academy is the right next step.
                </p>
              </div>
              <GHLCalendar calendarId={GHL.calendars.bookACall.id} title="Schedule Your Sacred Alignment Call" />
            </div>
          </Reveal>

          <p className="mt-6 text-center text-[12.5px] text-soft">
            Trouble loading the calendar? Email{" "}
            <a href="mailto:success@awakenedacademy.com" className="text-teal underline hover:text-teal-soft">
              success@awakenedacademy.com
            </a>{" "}
            and we'll book you manually.
          </p>
        </div>
      </section>

      {/* WHAT HAPPENS ON THE CALL */}
      <section className="bg-warm">
        <div className="mx-auto max-w-widest px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">What to expect</span>
              <h2 className="mt-3 font-serif text-[clamp(28px,5vw,42px)] font-light text-ink">
                What happens on the call
              </h2>
              <div className="gold-line mt-6" />
            </div>
          </Reveal>

          <Reveal>
            <ul className="mx-auto mt-12 max-w-2xl space-y-5 text-[16.5px] leading-[1.7] text-ink2">
              <li className="flex gap-4">
                <span aria-hidden className="mt-1.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full border border-gold/70 text-[11px] text-gold">✓</span>
                <span>Get clear on how to turn your spiritual gifts into a real income.</span>
              </li>
              <li className="flex gap-4">
                <span aria-hidden className="mt-1.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full border border-gold/70 text-[11px] text-gold">✓</span>
                <span>Discover how to build a coaching practice that gives you total freedom.</span>
              </li>
              <li className="flex gap-4">
                <span aria-hidden className="mt-1.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full border border-gold/70 text-[11px] text-gold">✓</span>
                <span>We'll talk about where you are, what you need, and how we can support you.</span>
              </li>
            </ul>
          </Reveal>

          <Reveal>
            <div className="mt-16 text-center">
              <span className="eyebrow">From recent students</span>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <Reveal key={t.name}>
                <figure className="flex h-full flex-col rounded-md border border-ink/10 bg-white p-7 shadow-sm">
                  <div className="text-3xl font-serif leading-none text-gold">"</div>
                  <blockquote className="mt-2 flex-1 text-[15.5px] leading-[1.7] text-ink2">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-6 text-[12px] font-medium text-teal">
                    {t.name}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECONDARY SCARCITY / FINAL CTA */}
      <section className="bg-teal text-white">
        <div className="mx-auto max-w-wide px-6 py-16 text-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(24px,4vw,36px)] font-light">
              Enroll now to secure your place.<br />
              <em className="text-gold-lt">Only 8 spots open per month.</em>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-[1.7] text-white/85">
              The Sacred Alignment Call is the first step. From there, if it feels like a fit,
              we'll talk about what enrollment looks like.
            </p>
            <div className="mt-8">
              <a
                href="#calendar"
                className="inline-block rounded bg-gold px-8 py-3.5 text-[13px] font-medium text-white transition hover:bg-gold-dark"
              >
                Book Your Free Call
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
