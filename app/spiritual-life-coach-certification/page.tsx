import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import GHLForm from "@/components/GHLForm";
import FAQ from "@/components/FAQ";
import BenefitBand from "@/components/BenefitBand";
import StickyCTABar from "@/components/StickyCTABar";
import { GHL, SITE } from "@/lib/site-config";
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

export const metadata: Metadata = {
  title: { absolute: "Spiritual Life Coach Certification — Become Certified | Awakened Academy" },
  description:
    "Become a certified spiritual life coach online. 650+ coaches certified in 25+ countries since 2012. 14 transformation modules. 100% self-paced. Download the free brochure.",
  alternates: { canonical: "/spiritual-life-coach-certification" },
  openGraph: {
    title: "Spiritual Life Coach Certification — Become Certified | Awakened Academy",
    description:
      "Become a certified spiritual life coach online. 650+ coaches certified in 25+ countries since 2012. 14 transformation modules. 100% self-paced. Download the free brochure.",
    url: `${SITE.url}/spiritual-life-coach-certification`,
  },
};

// 17 image-bands, one image per benefit (sourced from the WP cert page).
// `side` controls which side the white card sits on so the subject stays visible.
const BANDS: { image: string; side: "left" | "right"; imagePosition?: string; imageAlt: string }[] = [
  { image: "/images/bands/woman-on-mountain-top.jpg",                          side: "left",  imagePosition: "center top", imageAlt: "Woman standing on a mountain peak at sunrise" },
  { image: "/images/bands/Michael-Chair-2.jpg",                                side: "left",  imagePosition: "right top",  imageAlt: "Michael Mackintosh seated during a one-on-one coaching session" },
  { image: "/images/bands/group-meditation.jpg",                               side: "left",  imagePosition: "center top", imageAlt: "Group of people in a seated outdoor meditation circle" },
  { image: "/images/bands/hands-over.jpg",                                     side: "right",                              imageAlt: "Two pairs of hands held gently together" },
  { image: "/images/bands/woman-on-grass-2.jpg",                               side: "left",  imagePosition: "center top", imageAlt: "Woman sitting on grass in peaceful contemplation" },
  { image: "/images/bands/coffee-sunset.jpg",                                  side: "right",                              imageAlt: "Person enjoying coffee at golden hour with a scenic view" },
  { image: "/images/bands/shutterstock_117237259-e1778524710805.jpg",          side: "left",                               imageAlt: "Person in a mindful moment of self-reflection outdoors" },
  { image: "/images/bands/Arielle_Writing-Hero-2.png",                         side: "right", imagePosition: "left top",   imageAlt: "Arielle Hecht writing at a desk" },
  { image: "/images/bands/purple-pink-mountains.jpg",                          side: "left",                               imageAlt: "Purple and pink mountain range at dusk" },
  { image: "/images/bands/wave-sunset.jpg",                                    side: "right",                              imageAlt: "Ocean wave rolling in at sunset" },
  { image: "/images/bands/woman-on-mac.jpg",                                   side: "left",  imagePosition: "center top", imageAlt: "Woman working on a laptop from a bright home workspace" },
  { image: "/images/bands/team-success.jpg",                                   side: "right",                              imageAlt: "Team celebrating a shared achievement together" },
  { image: "/images/bands/plains-sunset.jpg",                                  side: "left",                               imageAlt: "Wide open plains lit by a golden sunset" },
  { image: "/images/bands/WOMAN-LOTUS-POOL.jpg",                               side: "right", imagePosition: "center top", imageAlt: "Woman in lotus meditation pose by a still pool" },
  { image: "/images/bands/shutterstock_648757249-e1778524833119.jpg",          side: "left",                               imageAlt: "Person in a reflective posture with sunlight streaming in" },
  { image: "/images/bands/tablet.jpg",                                         side: "right",                              imageAlt: "Tablet displaying digital course materials" },
  { image: "/images/bands/woman-with-tablet.jpg",                              side: "left",  imagePosition: "center top", imageAlt: "Woman reading course content on a tablet" },
];

export default function CertPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO, split: title + trust badges left, brochure form panel right */}
      <section className="relative isolate w-full overflow-hidden">
        <Image
          src="/images/cert-hero-sedona.jpg"
          alt="Sedona red rock formations at sunset"
          fill
          priority
          className="-z-10 object-cover"
          style={{ objectPosition: "center" }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/55 to-black/40" />

        <div className="mx-auto grid max-w-widest gap-12 px-6 py-20 md:grid-cols-[1.05fr_minmax(380px,440px)] md:items-center md:py-24 lg:py-28">
          {/* LEFT, title + subtitle + CTAs + trust badges */}
          <div className="text-white">
            <Reveal>
              <div className="text-[12px] font-semibold uppercase tracking-[0.28em] text-gold-light">
                Spiritual Life Coach Certification
              </div>
            </Reveal>
            <Reveal>
              <h1 className="mt-6 font-serif text-[clamp(36px,5.8vw,60px)] leading-[1.05]">
                Spiritual Life Coach Certification — Transform Your <em className="text-gold-light">Calling</em> Into a Career
              </h1>
            </Reveal>
            <Reveal>
              <p className="mt-7 max-w-xl text-[clamp(15px,1.8vw,18px)] leading-[1.7] text-white/95">
                Learn to harness your experiences and emotional intelligence to support and guide others through their spiritual transitions, and create a prosperous career doing what you love.
              </p>
            </Reveal>
            <Reveal>
              <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-[13.5px] text-white/95">
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
          </div>

          {/* RIGHT, brochure form panel */}
          <Reveal>
            <div id="program-info" className="scroll-mt-24 rounded-lg bg-bg p-6 shadow-2xl ring-1 ring-gold/30 md:p-7">
              <div className="text-center">
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-gold-deep">
                  Free brochure
                </div>
                <h2 className="mt-3 font-serif text-[clamp(22px,2.8vw,28px)] leading-[1.2] text-ink">
                  Download the full <em className="text-teal">Academy Brochure</em>
                </h2>
                <p className="mt-3 text-[13.5px] leading-[1.6] text-ink2">
                  Curriculum, tuition, and how the certification works end-to-end.
                </p>
              </div>
              <div className="-mt-6 overflow-hidden">
                <GHLForm
                  formId={GHL.forms.certification.id}
                  formName={GHL.forms.certification.name}
                  height={GHL.forms.certification.height}
                />
              </div>
              <p className="mt-2 text-center text-[11.5px] tracking-wide text-ink2">
                Instant access · No spam · Unsubscribe anytime
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOUNDING STATEMENT */}
      <section className="bg-bg">
        <div className="mx-auto max-w-wide px-6 py-16 text-center">
          <Reveal>
            <p className="font-serif text-[clamp(20px,3vw,26px)] leading-relaxed text-ink2">
              {SITE.founded.statement}
            </p>
            <p className="mx-auto mt-8 max-w-2xl text-[16px] leading-[1.85] text-ink2">
              Our Spiritual Life Coach Certification exceeds the limits of basic coaching certifications
              and generic online business courses. This isn't a training process, it's an{" "}
              <em className="text-teal">adventure</em> to reclaim your freedom, do meaningful work,
              and learn to make a nourishing income from anywhere in the world.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHAT IS SPIRITUAL LIFE COACH CERTIFICATION */}
      <section className="bg-bg">
        <div className="mx-auto max-w-wide px-6 py-20">
          <Reveal>
            <div className="mx-auto max-w-3xl">
              <span className="eyebrow">The Certification</span>
              <h2 className="mt-3 font-serif text-[clamp(28px,5vw,42px)] text-ink">
                What Is Spiritual Life Coach Certification?
              </h2>
              <div className="gold-line mt-6" />
              <div className="mt-8 space-y-5 text-[17px] leading-[1.85] text-ink2">
                <p>
                  Spiritual life coach certification is a structured training that qualifies you to guide
                  others through spiritual transitions — purpose discovery, life direction, inner work,
                  and building a coaching practice that reflects your values.
                </p>
                <p>
                  It differs from general life coaching in focus. Where traditional coaching tends to
                  target goals and performance, spiritual life coaching works with a person's relationship
                  to meaning, calling, and the deeper questions that drive how they live and work.
                </p>
                <p>
                  Awakened Academy's certification trains you across seven dimensions of this work: your
                  inner foundation, the coaching craft, your dharma, creative expression, wealth, business
                  systems, and client enrollment — everything needed to become a practising coach, not
                  just a certificate holder.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOW TO BECOME A CERTIFIED SPIRITUAL LIFE COACH */}
      <section className="bg-warm">
        <div className="mx-auto max-w-wide px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">Your Path</span>
              <h2 className="mt-3 font-serif text-[clamp(28px,5vw,42px)] text-ink">
                How To Become A Certified Spiritual Life Coach
              </h2>
              <div className="gold-line mt-6" />
            </div>
          </Reveal>

          <ol className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "1",
                label: "Book a discovery call",
                body: "Talk with us. We'll walk through your situation, what you're called to, and whether Awakened Academy is the right fit. No pressure.",
              },
              {
                step: "2",
                label: "Enrol and begin the 7-pillar curriculum",
                body: "Start with Pillar I at your own pace. The curriculum is 100% self-paced — 3–18 months depending on how fast you move.",
              },
              {
                step: "3",
                label: "Complete, get certified, start coaching",
                body: "Finish the program, receive your certification, and start taking clients. Most students see their first paying client within 60 days of starting.",
              },
            ].map((item) => (
              <Reveal key={item.step}>
                <li className="flex flex-col rounded-md border border-ink/10 bg-white p-8 shadow-sm">
                  <div className="font-serif text-[42px] leading-none text-gold/50">{item.step}</div>
                  <div className="mt-4 font-serif text-[20px] leading-[1.3] text-ink">{item.label}</div>
                  <p className="mt-3 flex-1 text-[15px] leading-[1.7] text-ink2">{item.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal>
            <p className="mt-12 text-center text-[16px] text-ink2">
              Ready to take the first step?{" "}
              <Link href="/schedule" className="font-medium text-teal underline-offset-2 hover:underline">
                Book a discovery call →
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHAT YOU'LL EXPERIENCE, 17 image bands */}
      <section className="bg-warm">
        <div className="mx-auto max-w-widest px-6 py-16 text-center">
          <Reveal>
            <span className="eyebrow">What You'll Experience</span>
            <h2 className="mt-3 font-serif text-[clamp(28px,5vw,42px)] text-ink">
              What You'll Learn in This <em>Spiritual Life Coach Certification</em>
            </h2>
            <div className="gold-line mt-6" />
          </Reveal>
        </div>

        <div className="space-y-8 pb-8 md:space-y-10">
          {BENEFITS.map((b, i) => (
            <BenefitBand
              key={b.title}
              image={BANDS[i].image}
              imageAlt={BANDS[i].imageAlt}
              title={b.title}
              body={b.body}
              side={BANDS[i].side}
              imagePosition={BANDS[i].imagePosition}
            />
          ))}
        </div>
      </section>

      {/* TRANSFORMATION TIMELINE */}
      <section className="bg-bg">
        <div className="mx-auto max-w-wide px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">Transformation Timeline</span>
              <h2 className="mt-3 font-serif text-[clamp(28px,5vw,42px)] text-ink">
                What's possible <em>at each stage</em>
              </h2>
              <div className="gold-line mt-6" />
            </div>
          </Reveal>

          <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {TIMELINE.map((t) => (
              <Reveal key={t.when}>
                <li className="flex h-full flex-col overflow-hidden rounded-md bg-white shadow-sm">
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    <Image
                      src={t.image}
                      alt=""
                      fill
                      className="object-cover"
                      style={{ objectPosition: t.imagePosition ?? "center" }}
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col border-l-2 border-teal p-6">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal">{t.when}</div>
                    <p className="mt-4 flex-1 text-[15px] leading-[1.7] text-ink2">{t.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* SEVEN PILLARS */}
      <section id="curriculum" className="scroll-mt-20 bg-warm">
        <div className="mx-auto max-w-widest px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">The Curriculum</span>
              <h2 className="mt-3 font-serif text-[clamp(28px,5vw,42px)] text-ink">
                The Certification Curriculum: <em>Seven Awakened Pillars</em>
              </h2>
              <div className="gold-line mt-6" />
              <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-[1.7] text-ink2">
                Most coach trainings teach a single method. We train you across the seven dimensions of a complete
                spiritual coaching life: the inner foundation, the craft, the business, and the dharma to do this work for the long run.
              </p>
            </div>
          </Reveal>

          <ol className="mt-12 grid gap-6 md:grid-cols-2">
            {PILLARS.map((p) => (
              <Reveal key={p.title}>
                <li className="grid h-full grid-cols-[160px_1fr] items-stretch overflow-hidden rounded-md border border-ink/10 bg-white shadow-sm transition hover:border-teal/40 hover:shadow-md">
                  <div className="relative h-full w-full overflow-hidden">
                    <Image
                      src={p.image}
                      alt=""
                      fill
                      className="object-cover"
                      style={{ objectPosition: p.imagePosition ?? "center" }}
                      sizes="160px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/0" />
                  </div>
                  <div className="flex items-start gap-5 p-6">
                    <div className="font-serif text-[32px] leading-none text-gold">{p.roman}</div>
                    <div>
                      <div className="font-serif text-[19px] text-ink">{p.title}</div>
                      <p className="mt-2 text-[14.5px] leading-[1.65] text-ink2">{p.body}</p>
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* WHAT IS POSSIBLE FOR YOU */}
      <section className="bg-bg">
        <div className="mx-auto max-w-wide px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">What Is Possible For You</span>
              <h2 className="mt-3 font-serif text-[clamp(28px,5vw,42px)] text-ink">
                Imagine waking up to a life where…
              </h2>
              <div className="gold-line mt-6" />
            </div>
          </Reveal>

          <ul className="mx-auto mt-12 max-w-3xl space-y-5 text-[16px] leading-[1.8] text-ink2">
            {POSSIBLE.map((p) => (
              <Reveal key={p}>
                <li className="flex items-start gap-4">
                  <span className="mt-1 select-none text-gold">→</span>
                  <span>{p}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-warm">
        <div className="mx-auto max-w-widest px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">Student Stories</span>
              <h2 className="mt-3 font-serif text-[clamp(28px,5vw,42px)] text-ink">
                What graduates <em>say</em>
              </h2>
              <div className="gold-line mt-6" />
              <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-[1.7] text-ink2">
                Real stories from real graduates building real lives on the work.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
            {TESTIMONIALS.map((t) => (
              <Reveal key={t.name}>
                <figure className="flex h-full flex-col rounded-md border border-ink/10 bg-white p-7 shadow-sm">
                  <div className="font-serif text-[36px] leading-none text-gold/60">&ldquo;</div>
                  <blockquote className="mt-2 flex-1 font-serif text-[16.5px] italic leading-[1.65] text-ink">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-4 border-t border-ink/10 pt-5">
                    {t.photo ? (
                      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-gold/40">
                        <Image
                          src={t.photo}
                          alt={t.name}
                          fill
                          className="object-cover"
                          sizes="56px"
                        />
                      </div>
                    ) : (
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gold/15 text-[18px] font-serif text-gold-deep ring-2 ring-gold/40">
                        {t.initials}
                      </div>
                    )}
                    <div>
                      <div className="font-serif text-[16px] text-ink">{t.name}</div>
                      <div className="mt-1 text-[11.5px] font-semibold uppercase tracking-[0.18em] text-teal">{t.role}</div>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/wall-of-gratitude" className="inline-flex items-center gap-2 text-[14px] font-medium text-teal transition hover:text-teal-deep">
              See more graduate stories <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SECONDARY CTA, book a call */}
      <section className="bg-teal text-white">
        <div className="mx-auto max-w-wide px-6 py-20 text-center">
          <Reveal>
            <span className="eyebrow !text-gold-light">Ready to begin?</span>
            <h2 className="mt-4 font-serif text-[clamp(28px,5vw,42px)] leading-[1.15]">
              If you feel called, <em className="text-gold-light">let's talk.</em>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[16px] leading-[1.75] text-white/90">
              Book a free discovery call to see if the certification is the right next step for you.
              Every certification student receives 1-on-1 access to Michael as part of the program.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link href="#program-info" className="btn-gold">Download free brochure</Link>
              <Link href="/schedule" className="btn-ghost-teal !border-white !text-white hover:!bg-white hover:!text-teal">Book a discovery call</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <FAQ items={FAQ_ITEMS} title="Spiritual Coaching Certification FAQs" />

      <StickyCTABar
        title="Become a Certified Spiritual Life Coach"
        subtitle="Free brochure · No commitment · 25+ countries"
        ctaLabel="Download free brochure"
        ctaHref="#program-info"
      />
    </>
  );
}
