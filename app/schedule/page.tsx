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

type Testimonial = { name: string; role: string; quote: string; photo?: string };

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Kyli Vandemark",
    role: "Booked a call → now certified",
    quote:
      "I instantly felt at home. They helped me find my soul purpose, and I've jumped timelines in just 6 months! If you're debating scheduling your alignment call, do it!",
    photo: "/img/testimonials/Kyli-Vandemark.jpg",
  },
  {
    name: "Dina Andrews",
    role: "Energy Healing Practitioner, California",
    quote:
      "They are fully present when I speak to them. I feel really heard. They really care about ME. What a wonderful feeling!",
    photo: "/img/testimonials/Dina-Andrews.jpg",
  },
  {
    name: "Rakhee C. Patel",
    role: "Pharmacist of 17 years → Spiritual Life Coach",
    quote:
      "I'm working with 3 clients a day. No more 9-5. I'm living my Dharma and it feels like a dream come true.",
    photo: "/img/testimonials/Rakhee-Patel.jpg",
  },
];

// Real graduate photos (from /public/images/grads) for the hero social-proof row.
const GRAD_AVATARS = [
  "/images/grads/grad-1104758.jpg",
  "/images/grads/grad-2530364.jpg",
  "/images/grads/grad-3776447.jpg",
  "/images/grads/grad-4560483.jpg",
  "/images/grads/grad-676629.jpg",
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
        {/* Stronger overlay so the white type stays legible over the bright sunrise. */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/45 via-black/40 to-black/65" />

        <div className="mx-auto max-w-widest px-6 pb-28 pt-20 text-center md:pb-36 md:pt-24">
          <Reveal>
            <div className="mx-auto inline-flex flex-col items-center">
              <div className="font-serif text-[12px] uppercase tracking-[0.34em] text-white">
                Awakened Academy<span className="text-gold-lt">®</span>
              </div>
              <div className="mt-2.5 text-[11px] uppercase tracking-[0.24em] text-white/80">
                Spiritual Coaching Certification &amp; Online Business Academy
              </div>
            </div>
          </Reveal>

          <Reveal>
            <h1 className="hero-text mx-auto mt-10 max-w-4xl font-serif text-[clamp(30px,5.5vw,54px)] font-light leading-[1.12] text-white">
              Live a spiritual life, <em className="text-gold-lt">do meaningful work</em> and make a great living
            </h1>
          </Reveal>

          <Reveal>
            <p className="hero-text mx-auto mt-6 max-w-2xl text-[clamp(15px,2vw,18px)] leading-[1.65] text-white/90">
              For deep, empathic souls who are ready for freedom. Book your free
              Sacred Alignment Call and discover whether Awakened Academy is your next step.
            </p>
          </Reveal>

          <Reveal>
            <a
              href="#calendar"
              className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-gold-lt/70 bg-black/20 px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.16em] text-white backdrop-blur-sm transition hover:bg-black/30"
            >
              <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-gold-lt" />
              2026 June enrolment open · only 8 spots per month
            </a>
          </Reveal>

          <Reveal>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
              <div className="flex -space-x-3">
                {GRAD_AVATARS.map((src) => (
                  <div
                    key={src}
                    className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white/85 shadow-md"
                  >
                    <Image src={src} alt="" fill sizes="40px" className="object-cover" />
                  </div>
                ))}
              </div>
              <span className="hero-text text-[13.5px] text-white/90">
                Join 650+ certified coaches in 25+ countries
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CALENDAR, large white card overlapping the hero */}
      <section id="calendar" className="relative scroll-mt-20 bg-bg">
        <div className="mx-auto -mt-12 max-w-widest px-6 pb-16 md:-mt-16 md:pb-20">
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
        </div>
      </section>

      {/* WHAT HAPPENS ON THE CALL */}
      <section className="bg-warm">
        <div className="mx-auto max-w-widest px-6 py-20">
          <p className="mb-16 text-center text-[12.5px] text-soft">
            Trouble loading the calendar? Email{" "}
            <a href="mailto:success@awakenedacademy.com" className="text-teal underline hover:text-teal-soft">
              success@awakenedacademy.com
            </a>{" "}
            and we'll book you manually.
          </p>

          <Reveal>
            <div className="text-center">
              <span className="eyebrow">What to expect</span>
              <h2 className="mt-3 font-serif text-[clamp(28px,5vw,42px)] font-light text-ink">
                What happens on the call
              </h2>
              <div className="gold-line mt-6" />
              <p className="mx-auto mt-8 max-w-2xl text-[15.5px] leading-[1.75] text-ink2">
                This is a real conversation, not a sales pitch. We listen first.
                You talk through where you are, what's calling you forward, and
                what's in the way. Then together we look at whether Awakened
                Academy is the right next step, or whether something else is.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <ul className="mx-auto mt-12 max-w-2xl space-y-5 text-[16.5px] leading-[1.7] text-ink2">
              <li className="flex gap-4">
                <span aria-hidden className="mt-1.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full border border-gold/70 text-[11px] text-gold">✓</span>
                <span><strong className="font-medium text-ink">We hear your story.</strong> Where you are now, what's been calling you toward coaching or spiritual work, and what you've already tried.</span>
              </li>
              <li className="flex gap-4">
                <span aria-hidden className="mt-1.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full border border-gold/70 text-[11px] text-gold">✓</span>
                <span><strong className="font-medium text-ink">We get clear on the vision.</strong> The kind of life and practice you actually want to build, and how your gifts could become a real income doing meaningful work.</span>
              </li>
              <li className="flex gap-4">
                <span aria-hidden className="mt-1.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full border border-gold/70 text-[11px] text-gold">✓</span>
                <span><strong className="font-medium text-ink">We answer your questions.</strong> About the certification, the curriculum, the community, the time commitment, the investment — anything you need to make a clear decision.</span>
              </li>
              <li className="flex gap-4">
                <span aria-hidden className="mt-1.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full border border-gold/70 text-[11px] text-gold">✓</span>
                <span><strong className="font-medium text-ink">We decide together if it's a fit.</strong> If it's right, we'll talk about enrollment. If it isn't, you'll leave with clarity and pointers toward what is. Either way, you win.</span>
              </li>
            </ul>
          </Reveal>

          <Reveal>
            <p className="mx-auto mt-12 max-w-2xl text-center text-[13.5px] leading-[1.7] text-soft">
              The call is 1 hour, by phone or video, and completely free. You
              will not be sold to. We've built this practice for 20+ years by
              listening first.
            </p>
          </Reveal>

          <Reveal>
            <div className="mt-16 text-center">
              <span className="eyebrow">From students who started with a call</span>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <Reveal key={t.name}>
                <figure className="flex h-full flex-col rounded-md border border-ink/10 bg-white p-7 shadow-sm">
                  <div className="flex items-center gap-4">
                    {t.photo ? (
                      <div className="relative h-14 w-14 flex-none overflow-hidden rounded-full border-2 border-gold/30 shadow-sm">
                        <Image src={t.photo} alt={t.name} fill sizes="56px" className="object-cover" />
                      </div>
                    ) : (
                      <div className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-gold/20 font-serif text-2xl text-gold-dark">
                        {t.name.charAt(0)}
                      </div>
                    )}
                    <figcaption>
                      <div className="text-[14px] font-medium text-ink">{t.name}</div>
                      <div className="mt-0.5 text-[11.5px] leading-tight text-soft">{t.role}</div>
                    </figcaption>
                  </div>
                  <div className="mt-5 text-3xl font-serif leading-none text-gold">"</div>
                  <blockquote className="mt-1 flex-1 text-[15px] leading-[1.7] text-ink2">
                    {t.quote}
                  </blockquote>
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
