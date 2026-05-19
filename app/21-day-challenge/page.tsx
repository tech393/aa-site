import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import GHLForm from "@/components/GHLForm";
import { GHL, SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: { absolute: "21 Day Challenge | Awakened Academy" },
  description:
    "Don't leave this world behind with your best work inside you. The 21 Day Challenge with Michael Mackintosh, bring your project to life in 21 days or less.",
  alternates: { canonical: "/21-day-challenge" },
  openGraph: {
    title: "21 Day Challenge | Awakened Academy",
    description: "Bring your project to life in 21 days. A free challenge with Michael Mackintosh.",
    url: `${SITE.url}/21-day-challenge`,
  },
};

export default function TwentyOneDayChallengePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate w-full overflow-hidden">
        <Image
          src="/images/bands/woman-on-mountain-top.jpg"
          alt="Woman standing on a mountain top at sunset"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover"
          style={{ objectPosition: "center 30%" }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/65 via-black/45 to-black/65" />
        <div className="mx-auto max-w-widest px-6 py-24 text-center text-white md:py-32">
          <Reveal>
            <span className="eyebrow !text-gold-lt">A free challenge</span>
            <h1 className="hero-text mt-5 font-serif text-[clamp(34px,6vw,60px)] leading-[1.05]">
              Don't leave this world behind<br />
              with your <em>best work</em> inside you.
            </h1>
            <p className="hero-text mx-auto mt-7 max-w-2xl text-[clamp(15px,2vw,18px)] leading-[1.7] text-white/95">
              The 21 Day Challenge. Bring your project to life in 21 days or less, the spiritual entrepreneur's way.
              No hustle. No selling out. Real momentum, sacred timing.
            </p>
            <p className="mt-6 text-[13px] font-semibold uppercase tracking-[0.2em] text-gold-lt">
              with Michael Mackintosh
            </p>
            <div className="mt-9">
              <a href="#challenge-form" className="inline-flex items-center justify-center rounded bg-gold px-7 py-3.5 text-[15px] font-medium text-white shadow-md transition hover:bg-gold-deep">
                I'm ready to bring my project to life →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-bg">
        <div className="mx-auto max-w-wide px-6 py-16 text-center">
          <Reveal>
            <p className="font-serif text-[clamp(20px,3vw,26px)] italic leading-relaxed text-ink">
              Most spiritual people have a project, a book, a course, a coaching practice, a calling, that's
              been waiting years to come into the world.
            </p>
            <p className="mx-auto mt-7 max-w-2xl text-[16px] leading-[1.85] text-ink2">
              The 21 Day Challenge is a free, focused container to <em className="text-teal">finish what you started</em>
              {" "}or finally start what's been calling you. 21 days of guidance, structure, and accountability,
              so the thing inside you actually gets built.
            </p>
          </Reveal>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="bg-warm">
        <div className="mx-auto max-w-widest px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">What's inside</span>
              <h2 className="mt-3 font-serif text-[clamp(28px,5vw,42px)] text-ink">
                21 days, <em>one finished project</em>
              </h2>
              <div className="gold-line mt-6" />
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <Card
              roman="01"
              title="Clarity"
              body="Get crystal-clear on the ONE project that wants to come through you. No more spinning between five ideas."
            />
            <Card
              roman="02"
              title="Structure"
              body="A simple daily rhythm that fits busy lives. Small focused actions that compound across the 21 days."
            />
            <Card
              roman="03"
              title="Momentum"
              body="By day 21, you have something real, a launched offer, a finished draft, a recorded course, a working practice."
            />
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="challenge-form" className="scroll-mt-20 bg-bg">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">Join free</span>
              <h2 className="mt-3 font-serif text-[clamp(26px,4vw,38px)] text-ink">
                Step into the <em>21 days</em>
              </h2>
              <div className="gold-line mt-6" />
              <p className="mx-auto mt-6 max-w-xl text-[16px] leading-[1.7] text-ink2">
                Enter your details below. We'll send the first day's guidance to your inbox and walk with you for 21 days.
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-xl overflow-hidden rounded-md border border-teal/20 bg-white p-5 shadow-md md:p-6">
              {/* Using EP form as placeholder until a dedicated 21-day-challenge GHL form is set up */}
              <GHLForm
                formId={GHL.forms.enlightenedpreneurs.id}
                formName="21 Day Challenge"
                height={GHL.forms.enlightenedpreneurs.height}
              />
            </div>
            <p className="mt-5 text-center text-[12px] tracking-wide text-soft">
              100% free · No spam · Your privacy is protected
            </p>
          </Reveal>
        </div>
      </section>

      {/* MORE FROM AA */}
      <section className="bg-warm">
        <div className="mx-auto max-w-widest px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">More from Awakened Academy</span>
              <h2 className="mt-3 font-serif text-[clamp(26px,4vw,38px)] text-ink">
                Keep going <em>deeper</em>
              </h2>
              <div className="gold-line mt-6" />
            </div>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            <Link href="/dharma" className="group block rounded-md border border-ink/10 bg-white p-7 text-center shadow-sm transition hover:border-teal/40 hover:shadow-md">
              <div className="font-serif text-[18px] text-ink group-hover:text-teal">Discover Your Dharma</div>
              <p className="mt-3 text-[14px] leading-[1.65] text-ink2">Find the work your soul came here to do.</p>
              <div className="mt-5 text-[12px] font-medium text-teal">Get the Guide →</div>
            </Link>
            <Link href="/ep" className="group block rounded-md border border-ink/10 bg-white p-7 text-center shadow-sm transition hover:border-teal/40 hover:shadow-md">
              <div className="font-serif text-[18px] text-ink group-hover:text-teal">Enlightenedpreneurs</div>
              <p className="mt-3 text-[14px] leading-[1.65] text-ink2">Build a spiritual business that supports your life.</p>
              <div className="mt-5 text-[12px] font-medium text-teal">Learn More →</div>
            </Link>
            <Link href="/spiritual-life-coach-certification" className="group block rounded-md border border-ink/10 bg-white p-7 text-center shadow-sm transition hover:border-teal/40 hover:shadow-md">
              <div className="font-serif text-[18px] text-ink group-hover:text-teal">Get Certified</div>
              <p className="mt-3 text-[14px] leading-[1.65] text-ink2">The full Spiritual Life Coach training.</p>
              <div className="mt-5 text-[12px] font-medium text-teal">Learn More →</div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Card({ roman, title, body }: { roman: string; title: string; body: string }) {
  return (
    <Reveal>
      <article className="flex h-full flex-col rounded-md border border-ink/10 bg-white p-7 shadow-sm">
        <div className="font-serif text-[32px] leading-none text-gold">{roman}</div>
        <h3 className="mt-4 font-serif text-[20px] text-ink">{title}</h3>
        <p className="mt-3 flex-1 text-[15px] leading-[1.7] text-ink2">{body}</p>
      </article>
    </Reveal>
  );
}
