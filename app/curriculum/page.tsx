import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site-config";
import { PILLARS } from "@/lib/cert-data";

export const metadata: Metadata = {
  title: { absolute: "Spiritual Life Coach Certification Curriculum | 14 Modules" },
  description:
    "The complete Awakened Academy certification curriculum. 14 progressive transformation modules covering coaching, business, and spiritual mastery.",
  alternates: { canonical: "/curriculum" },
  openGraph: {
    title: "Spiritual Life Coach Certification Curriculum | 14 Modules",
    description:
      "The complete Awakened Academy certification curriculum. 14 progressive transformation modules.",
    url: `${SITE.url}/curriculum`,
  },
};

const MODULES = [
  { n: "01", title: "Foundation & Awakening", pillar: "Awakened You", body: "The personal foundation. Daily practice. The lifestyle that sustains a coaching career." },
  { n: "02", title: "Inner Mastery", pillar: "Awakened You", body: "Working with your own patterns so you can hold space for clients without losing yourself." },
  { n: "03", title: "Discovering Your Dharma", pillar: "Awakened Dharma", body: "The unique work your soul came here to do. Why you, why this work, why now." },
  { n: "04", title: "The Coaching Craft", pillar: "Awakened Coaching", body: "Presence, transformational conversation, and the skills that produce real client results." },
  { n: "05", title: "Holding Sacred Space", pillar: "Awakened Coaching", body: "How to receive someone's truth without flinching. The container that makes transformation possible." },
  { n: "06", title: "Spiritual Methods & Tools", pillar: "Awakened Coaching", body: "Meditation as a coaching tool. Working with intuition, energy, and the parts beneath the story." },
  { n: "07", title: "Become a Published Author", pillar: "Awakened Creator", body: "Write the book that establishes you as an authority. Outline, draft, edit, publish." },
  { n: "08", title: "Build Your First Online Course", pillar: "Awakened Creator", body: "Productize your wisdom. Course design, recording, delivery, scale beyond 1-on-1." },
  { n: "09", title: "Heal Your Money Story", pillar: "Awakened Wealth", body: "The inner work around money that most coaches skip. Worth, receiving, charging, ease." },
  { n: "10", title: "Build Real Wealth", pillar: "Awakened Wealth", body: "Outer wealth that supports the work, not distracts from it. Pricing, savings, investing." },
  { n: "11", title: "Business Foundations", pillar: "Awakened Business Success Systems", body: "Packages, contracts, niche, infrastructure, systems. The operating system of a sustainable practice." },
  { n: "12", title: "Marketing With Soul", pillar: "Awakened Business Success Systems", body: "Marketing that doesn't compromise your integrity. Content, audience, alignment." },
  { n: "13", title: "Spiritual Sales & Enrollment", pillar: "Awakened Enrollment & Sales", body: "The spiritual approach to client attraction. Sales conversations that feel like service, not pressure." },
  { n: "14", title: "Launch & Beyond", pillar: "Awakened Enrollment & Sales", body: "Launch your practice with confidence. Working with your first 10 clients. Building from there." },
];

export default function CurriculumPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate w-full overflow-hidden">
        <Image src="/images/cert-hero-pink-mountains.jpg" alt="" fill priority className="-z-10 object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/55 via-black/35 to-black/55" />
        <div className="mx-auto max-w-wide px-6 py-24 text-center text-white md:py-28">
          <Reveal>
            <span className="eyebrow !text-gold-lt">The Curriculum</span>
            <h1 className="mt-4 font-serif text-[clamp(32px,5.5vw,52px)] font-light leading-[1.1]">
              <em className="text-gold-lt">14 transformation modules</em> across seven awakened pillars
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-[clamp(15px,2vw,18px)] leading-[1.7] text-white/95 [text-shadow:0_1px_3px_rgba(0,0,0,0.6)]">
              A complete training in spiritual life coaching: the inner foundation, the coaching craft, the business, and the dharma to do this work for the long run.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SEVEN PILLARS */}
      <section className="bg-warm">
        <div className="mx-auto max-w-widest px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">The Pillars</span>
              <h2 className="mt-3 font-serif text-[clamp(28px,5vw,42px)] font-light text-ink">
                Seven <em>Awakened Pillars</em>
              </h2>
              <div className="gold-line mt-6" />
              <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-[1.7] text-ink2">
                Most coach trainings teach a single method. We train across every dimension of a complete spiritual coaching life.
              </p>
            </div>
          </Reveal>
          <ol className="mt-12 grid gap-5 md:grid-cols-2">
            {PILLARS.map((p) => (
              <Reveal key={p.title}>
                <li className="flex h-full items-start gap-5 rounded-md border border-ink/10 bg-white p-6 shadow-sm">
                  <div className="font-serif text-[32px] font-light leading-none text-gold">{p.roman}</div>
                  <div>
                    <div className="font-serif text-[19px] text-ink">{p.title}</div>
                    <p className="mt-2 text-[14.5px] leading-[1.65] text-ink2">{p.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 14 MODULES */}
      <section className="bg-bg">
        <div className="mx-auto max-w-widest px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">The Modules</span>
              <h2 className="mt-3 font-serif text-[clamp(28px,5vw,42px)] font-light text-ink">
                <em>14 progressive modules</em>
              </h2>
              <div className="gold-line mt-6" />
              <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-[1.7] text-ink2">
                Each module builds on the last. Self-paced delivery. 3-6 months on a fast track, 6-12 months at typical pace.
              </p>
            </div>
          </Reveal>
          <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {MODULES.map((m) => (
              <Reveal key={m.n}>
                <li className="flex h-full flex-col rounded-md border border-ink/10 bg-white p-6 shadow-sm transition hover:border-teal/40 hover:shadow-md">
                  <div className="flex items-baseline gap-3">
                    <div className="font-serif text-[24px] font-light leading-none text-gold">{m.n}</div>
                    <div className="text-[10px] text-teal">{m.pillar}</div>
                  </div>
                  <h3 className="mt-3 font-serif text-[18px] leading-[1.3] text-ink">{m.title}</h3>
                  <div className="mt-3 h-px w-8 bg-gold" />
                  <p className="mt-4 flex-1 text-[14.5px] leading-[1.7] text-ink2">{m.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal text-white">
        <div className="mx-auto max-w-wide px-6 py-20 text-center">
          <Reveal>
            <span className="eyebrow !text-gold-lt">Get the full picture</span>
            <h2 className="mt-4 font-serif text-[clamp(28px,5vw,42px)] font-light leading-[1.15]">
              Download the <em className="text-gold-lt">full brochure</em>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[16px] leading-[1.75] text-white/90">
              Module-by-module curriculum, tuition, and how the certification works end-to-end. Sent straight to your inbox.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link href="/spiritual-life-coach-certification#program-info" className="inline-block rounded bg-gold px-7 py-3.5 text-[13px] font-medium text-white transition hover:bg-gold-dark">
                Download Free Brochure
              </Link>
              <Link href="/schedule" className="inline-block rounded border-2 border-white px-7 py-3 text-[13px] font-medium text-white transition hover:bg-white hover:text-teal">
                Book a Discovery Call
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
