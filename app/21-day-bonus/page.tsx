import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site-config";

const KAJABI_FREE_COURSE_URL = "https://www.awakened.academy/offers/m48vaN6w";

export const metadata: Metadata = {
  title: { absolute: "Your Get It Done 21 Day Bonus | Awakened Academy" },
  description:
    "The free 21 day companion course for readers of Get It Done by Michael Mackintosh. Activate the mind hack system and finish what you started.",
  alternates: { canonical: "/21-day-bonus" },
  openGraph: {
    title: "Your Get It Done 21 Day Bonus | Awakened Academy",
    description:
      "The free 21 day companion course for readers of Get It Done by Michael Mackintosh.",
    url: `${SITE.url}/21-day-bonus`,
    images: [
      {
        url: `${SITE.url}/images/books/get-it-done.jpg`,
        width: 800,
        height: 1200,
        alt: "Get It Done by Michael Mackintosh — the 21-day mind hack system",
      },
    ],
  },
};

export default function TwentyOneDayBonusPage() {
  return (
    <>
      <section className="relative w-full bg-[#ef6a1a]">
        <a
          href={KAJABI_FREE_COURSE_URL}
          aria-label="Get the free Get It Done bonus course"
          className="block"
        >
          <Image
            src="/images/21-day-bonus-hero.jpg"
            alt="Get It Done — Your 21 Day Challenge. Double your productivity and finish what you start. By Michael Mackintosh."
            width={1280}
            height={720}
            priority
            sizes="100vw"
            className="mx-auto h-auto w-full max-w-[1280px] object-contain"
          />
        </a>
        <div className="mx-auto max-w-3xl px-6 pb-14 pt-6 text-center text-white sm:pb-16">
          <Reveal>
            <p className="font-serif text-[clamp(18px,2.4vw,22px)] leading-[1.55] text-white/95">
              The free 21 day companion course for readers of <em>Get It Done</em>.
              Activate the mind hack system from the book and finally finish what you started.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={KAJABI_FREE_COURSE_URL}
                className="inline-flex items-center justify-center rounded bg-white px-8 py-4 text-[15px] font-semibold text-[#ef6a1a] shadow-md transition hover:bg-warm"
              >
                Get The Free Course
              </a>
              <span className="text-[13px] text-white/85">
                Hosted in your Awakened Academy library
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <Reveal>
            <p className="font-serif text-[clamp(20px,3vw,26px)] italic leading-relaxed text-ink">
              "The book gives you the system. This bonus walks you through it,
              day by day, until the thing you've been carrying is finally done."
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
                How to finish what you started in 21 days
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-[1.75] text-white/85">
                Michael walks through the heart of the system and how to use the bonus alongside the book.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-md border border-white/15 bg-black shadow-2xl">
              <div className="relative aspect-video w-full">
                <iframe
                  src="https://player.vimeo.com/video/138700321?title=0&byline=0&portrait=0"
                  title="Get It Done 21 Day Bonus video with Michael Mackintosh"
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
              <span className="eyebrow">What's inside the bonus</span>
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
              body="Choose the one project with the strongest life force behind it and define a simple outcome you can actually complete in 21 days."
            />
            <Card
              roman="02"
              title="Structure"
              body="Apply the mind hack system from the book through a daily rhythm: small focused actions, honest reflection, and enough structure to stop drifting."
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
        <div className="mx-auto max-w-widest px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">The rhythm</span>
              <h2 className="mt-3 font-serif text-[clamp(28px,5vw,42px)] text-ink">
                A simple path from idea to completion
              </h2>
              <div className="gold-line mt-6" />
              <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-[1.8] text-ink2">
                The 21 days move you through the actual inner and outer stages of getting something done.
                Not just planning. Not just feeling inspired. <em>Completing.</em>
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
              body="Turn the idea into visible work. Draft the page, record the lesson, shape the offer, or create the first version."
            />
            <Phase
              range="Days 15-21"
              title="Complete and share"
              body="Refine, finish, and let the work leave your private world. Completion is part of the spiritual practice."
            />
          </div>
        </div>
      </section>

      <section className="bg-warm">
        <div className="mx-auto grid max-w-widest gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <div className="relative mx-auto w-full max-w-xs lg:max-w-sm">
              <div className="relative aspect-[2/3] w-full overflow-hidden rounded-md shadow-xl ring-1 ring-ink/10">
                <Image
                  src="/images/books/get-it-done.jpg"
                  alt="Get It Done by Michael Mackintosh"
                  fill
                  sizes="(max-width: 1024px) 60vw, 380px"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div>
              <span className="eyebrow">About the book</span>
              <h2 className="mt-3 font-serif text-[clamp(28px,5vw,42px)] leading-tight text-ink">
                Get It Done — the 21-day mind hack system
              </h2>
              <div className="gold-line mt-6 !mx-0" />
              <p className="mt-7 text-[16px] leading-[1.85] text-ink2">
                <em>Get It Done</em> teaches you how to double your productivity, beat procrastination,
                and finish what you start — the spiritual entrepreneur's way. No hustle, no selling out,
                just a clear daily rhythm for turning the work in your heart into something real.
              </p>
              <p className="mt-5 text-[16px] leading-[1.85] text-ink2">
                This 21 day bonus course brings the book to life. Each day you get a short video,
                a guided practice, and a simple action to keep your project moving.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={KAJABI_FREE_COURSE_URL}
                  className="inline-flex items-center justify-center rounded bg-gold px-7 py-3.5 text-[15px] font-medium text-white shadow-md transition hover:bg-gold-deep"
                >
                  Get The Free Course
                </a>
                <Link
                  href="/books"
                  className="inline-flex items-center justify-center rounded border border-ink/20 bg-white px-7 py-3.5 text-[15px] font-medium text-ink transition hover:border-teal/40"
                >
                  See all books
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-plum text-white">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <Reveal>
            <span className="eyebrow !text-gold-lt">Start today</span>
            <h2 className="mt-3 font-serif text-[clamp(28px,5vw,42px)] leading-tight">
              Activate your <em>21 day bonus</em>
            </h2>
            <div className="gold-line mt-6" />
            <p className="mx-auto mt-7 max-w-xl text-[16px] leading-[1.8] text-white/85">
              The course lives inside your Awakened Academy library. Click below to claim it
              and we'll send the first day straight to your inbox.
            </p>
            <div className="mt-9">
              <a
                href={KAJABI_FREE_COURSE_URL}
                className="inline-flex items-center justify-center rounded bg-gold px-8 py-4 text-[15px] font-medium text-white shadow-md transition hover:bg-gold-deep"
              >
                Get The Free Course
              </a>
            </div>
            <p className="mt-5 text-[12px] tracking-wide text-white/60">
              100% free for readers of Get It Done.
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
            <Link
              href="/dharma"
              className="group block rounded-md border border-ink/10 bg-white p-7 text-center shadow-sm transition hover:border-teal/40 hover:shadow-md"
            >
              <div className="font-serif text-[18px] text-ink group-hover:text-teal">
                Discover Your Dharma
              </div>
              <p className="mt-3 text-[14px] leading-[1.65] text-ink2">
                Find the work your soul came here to do.
              </p>
              <div className="mt-5 text-[12px] font-medium text-teal">Get the guide</div>
            </Link>
            <Link
              href="/ep"
              className="group block rounded-md border border-ink/10 bg-white p-7 text-center shadow-sm transition hover:border-teal/40 hover:shadow-md"
            >
              <div className="font-serif text-[18px] text-ink group-hover:text-teal">
                Enlightenedpreneurs
              </div>
              <p className="mt-3 text-[14px] leading-[1.65] text-ink2">
                Build a spiritual business that supports your life.
              </p>
              <div className="mt-5 text-[12px] font-medium text-teal">Learn more</div>
            </Link>
            <Link
              href="/spiritual-life-coach-certification"
              className="group block rounded-md border border-ink/10 bg-white p-7 text-center shadow-sm transition hover:border-teal/40 hover:shadow-md"
            >
              <div className="font-serif text-[18px] text-ink group-hover:text-teal">
                Get Certified
              </div>
              <p className="mt-3 text-[14px] leading-[1.65] text-ink2">
                The full Spiritual Life Coach training.
              </p>
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
