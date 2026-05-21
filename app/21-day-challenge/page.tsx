import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import GHLForm from "@/components/GHLForm";
import { GHL, SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: { absolute: "21 Day Challenge | Awakened Academy" },
  description:
    "A free 21 day challenge with Michael Mackintosh to help spiritual entrepreneurs bring a meaningful project, offer, book, course, or body of work to life.",
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
              No hustle. No selling out. Just a clear daily rhythm for turning the work in your heart into something real.
            </p>
            <p className="mt-6 text-[13px] font-semibold uppercase tracking-[0.2em] text-gold-lt">
              with Michael Mackintosh
            </p>
            <div className="mt-9">
              <a href="#challenge-form" className="inline-flex items-center justify-center rounded bg-gold px-7 py-3.5 text-[15px] font-medium text-white shadow-md transition hover:bg-gold-deep">
                I'm ready to bring my project to life
              </a>
            </div>
          </Reveal>
        </div>
      </section>

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
            <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-[1.85] text-ink2">
              It is for the person who has outgrown waiting for perfect confidence, perfect timing, or perfect conditions.
              You do not need another year of thinking about it. You need a sacred container that helps you choose the work,
              simplify the next step, and keep moving.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-plum text-white">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow !text-gold-lt">Watch first</span>
              <h2 className="mt-3 font-serif text-[clamp(28px,5vw,42px)] leading-tight">
                How to bring your project to life in 21 days or less
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-[1.75] text-white/85">
                Michael explains the heart of the challenge and why completion is a spiritual practice.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-md border border-white/15 bg-black shadow-2xl">
              <div className="relative aspect-video w-full">
                <iframe
                  src="https://player.vimeo.com/video/138700321?title=0&byline=0&portrait=0"
                  title="21 Day Challenge video with Michael Mackintosh"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

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
              body="Choose the one project that has the strongest life force behind it, then define a simple outcome you can actually complete."
            />
            <Card
              roman="02"
              title="Structure"
              body="Use a daily rhythm that fits real life. Small focused actions, honest reflection, and enough structure to stop drifting."
            />
            <Card
              roman="03"
              title="Momentum"
              body="By day 21, you have something real in motion: a launched offer, a finished draft, a recorded course, or a working practice."
            />
          </div>
        </div>
      </section>

      <section className="bg-bg">
        <div className="mx-auto grid max-w-widest gap-10 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <div>
              <span className="eyebrow">Who it's for</span>
              <h2 className="mt-3 font-serif text-[clamp(28px,5vw,42px)] leading-tight text-ink">
                For spiritual creatives with unfinished soul work
              </h2>
              <div className="gold-line mt-6 !mx-0" />
              <p className="mt-7 text-[16px] leading-[1.85] text-ink2">
                This challenge is for coaches, healers, teachers, writers, course creators, artists, and conscious entrepreneurs
                who know they have something useful to share, but keep getting stopped by overthinking, self-doubt, scattered focus,
                or the pressure to make everything perfect before they begin.
              </p>
              <p className="mt-5 text-[16px] leading-[1.85] text-ink2">
                The goal is not to force your calling into a harsh productivity system. The goal is to bring devotion, simplicity,
                and completion into the work your soul already knows matters.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-md border border-ink/10 bg-white p-7 shadow-sm md:p-9">
              <h3 className="font-serif text-[24px] text-ink">You can use the 21 days to create:</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <MiniItem title="A coaching offer" body="Shape the promise, audience, and first clear invitation." />
                <MiniItem title="A course or workshop" body="Map the lessons and create the first usable version." />
                <MiniItem title="A book or guide" body="Outline, draft, and move from idea into pages." />
                <MiniItem title="A body of content" body="Build a small library of posts, emails, talks, or teachings." />
                <MiniItem title="A personal practice" body="Commit to the habit that supports the next chapter of your life." />
                <MiniItem title="A creative project" body="Finish the piece, recording, page, product, or ritual you keep delaying." />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-warm">
        <div className="mx-auto max-w-widest px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">The rhythm</span>
              <h2 className="mt-3 font-serif text-[clamp(28px,5vw,42px)] text-ink">
                A simple path from idea to completion
              </h2>
              <div className="gold-line mt-6" />
              <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-[1.8] text-ink2">
                The 21 days are designed to move you through the actual inner and outer stages of getting something done.
                Not just planning. Not just feeling inspired. Completing.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <Phase
              range="Days 1-7"
              title="Choose and clear"
              body="Decide what you are bringing to life, remove unnecessary complexity, and create the conditions for focused action."
            />
            <Phase
              range="Days 8-14"
              title="Build the real thing"
              body="Turn the idea into visible work. Draft the page, record the lesson, shape the offer, write the pages, or create the first version."
            />
            <Phase
              range="Days 15-21"
              title="Complete and share"
              body="Refine, finish, and let the work leave your private world. Completion is part of the spiritual practice."
            />
          </div>
        </div>
      </section>

      <section className="bg-bg">
        <div className="mx-auto grid max-w-widest gap-10 px-6 py-20 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <div>
              <span className="eyebrow">What gets in the way</span>
              <h2 className="mt-3 font-serif text-[clamp(28px,5vw,40px)] leading-tight text-ink">
                The real obstacle is rarely lack of ideas
              </h2>
              <div className="gold-line mt-6 !mx-0" />
              <p className="mt-7 text-[16px] leading-[1.85] text-ink2">
                Most people who are called to serve already have more ideas than they can handle. The real block is choosing,
                trusting, finishing, and letting the work be seen before it feels flawless.
              </p>
              <p className="mt-5 text-[16px] leading-[1.85] text-ink2">
                This challenge helps you interrupt the old loop of inspiration followed by delay. You practice making one clear promise
                to yourself, keeping it for 21 days, and proving that your calling can move through your ordinary life.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-md bg-plum p-8 text-white shadow-md md:p-10">
              <p className="font-serif text-[clamp(24px,4vw,34px)] italic leading-relaxed">
                "Your best work does not need to stay hidden until everything feels perfect."
              </p>
              <p className="mt-6 text-[15px] leading-[1.8] text-white/85">
                The 21 Day Challenge gives you a clean place to begin, finish, and discover what happens when your soul work becomes visible.
              </p>
              <a href="#challenge-form" className="mt-8 inline-flex items-center justify-center rounded bg-gold px-6 py-3 text-[14px] font-medium text-white transition hover:bg-gold-deep">
                Join the free challenge
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-warm">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">What you'll practice</span>
              <h2 className="mt-3 font-serif text-[clamp(28px,5vw,42px)] text-ink">
                Spiritual productivity without self-punishment
              </h2>
              <div className="gold-line mt-6" />
              <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-[1.8] text-ink2">
                This is not about becoming a machine. It is about becoming faithful to the thing you say matters.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <Practice title="One project at a time" body="You stop splitting your energy between too many half-open loops." />
            <Practice title="Daily sacred action" body="You make real progress through small actions that can be repeated." />
            <Practice title="Completion over perfection" body="You learn to finish a version that exists instead of worshiping an imaginary perfect one." />
            <Practice title="Creative courage" body="You build the capacity to be seen, heard, and useful through your work." />
          </div>
        </div>
      </section>

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
                Enter your details below. We'll send the first day's guidance to your inbox and help you bring one meaningful project into motion.
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-xl overflow-hidden rounded-md border border-teal/20 bg-white p-5 shadow-md md:p-6">
              <GHLForm
                formId={GHL.forms.enlightenedpreneurs.id}
                formName="21 Day Challenge"
                height={GHL.forms.enlightenedpreneurs.height}
              />
            </div>
            <p className="mt-5 text-center text-[12px] tracking-wide text-soft">
              100% free. No spam. Your privacy is protected.
            </p>
          </Reveal>
        </div>
      </section>

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
              <div className="mt-5 text-[12px] font-medium text-teal">Get the guide</div>
            </Link>
            <Link href="/ep" className="group block rounded-md border border-ink/10 bg-white p-7 text-center shadow-sm transition hover:border-teal/40 hover:shadow-md">
              <div className="font-serif text-[18px] text-ink group-hover:text-teal">Enlightenedpreneurs</div>
              <p className="mt-3 text-[14px] leading-[1.65] text-ink2">Build a spiritual business that supports your life.</p>
              <div className="mt-5 text-[12px] font-medium text-teal">Learn more</div>
            </Link>
            <Link href="/spiritual-life-coach-certification" className="group block rounded-md border border-ink/10 bg-white p-7 text-center shadow-sm transition hover:border-teal/40 hover:shadow-md">
              <div className="font-serif text-[18px] text-ink group-hover:text-teal">Get Certified</div>
              <p className="mt-3 text-[14px] leading-[1.65] text-ink2">The full Spiritual Life Coach training.</p>
              <div className="mt-5 text-[12px] font-medium text-teal">Learn more</div>
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

function MiniItem({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-md border border-ink/10 bg-bg p-5">
      <h4 className="font-serif text-[18px] text-ink">{title}</h4>
      <p className="mt-2 text-[14px] leading-[1.65] text-ink2">{body}</p>
    </div>
  );
}

function Phase({ range, title, body }: { range: string; title: string; body: string }) {
  return (
    <Reveal>
      <article className="h-full rounded-md border border-ink/10 bg-white p-7 shadow-sm">
        <div className="text-[12px] font-semibold uppercase tracking-[0.18em] text-teal">{range}</div>
        <h3 className="mt-4 font-serif text-[22px] text-ink">{title}</h3>
        <p className="mt-3 text-[15px] leading-[1.75] text-ink2">{body}</p>
      </article>
    </Reveal>
  );
}

function Practice({ title, body }: { title: string; body: string }) {
  return (
    <Reveal>
      <article className="rounded-md border border-ink/10 bg-white p-6 shadow-sm">
        <h3 className="font-serif text-[20px] text-ink">{title}</h3>
        <p className="mt-3 text-[15px] leading-[1.7] text-ink2">{body}</p>
      </article>
    </Reveal>
  );
}
