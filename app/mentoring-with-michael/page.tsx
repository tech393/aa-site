import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: { absolute: "Spiritual Mentoring with Michael Mackintosh" },
  description:
    "Work 1-on-1 with Michael Mackintosh. Personal spiritual mentoring for those ready to deepen their practice and step into their dharma.",
  alternates: { canonical: "/mentoring-with-michael" },
  openGraph: {
    title: "Spiritual Mentoring with Michael Mackintosh",
    description:
      "Work 1-on-1 with Michael Mackintosh. Personal spiritual mentoring for those ready to step into their dharma.",
    url: `${SITE.url}/mentoring-with-michael`,
  },
};

export default function MentoringPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate w-full overflow-hidden">
        <Image src="/images/golden-light.jpg" alt="" fill priority className="-z-10 object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/55 via-black/40 to-black/65" />
        <div className="mx-auto max-w-wide px-6 py-24 text-center text-white md:py-28">
          <Reveal>
            <span className="eyebrow !text-gold-lt">1-on-1 Mentoring</span>
            <h1 className="mt-4 font-serif text-[clamp(32px,5.5vw,52px)] font-light leading-[1.1]">
              Spiritual Mentoring with <em className="text-gold-lt">Michael Mackintosh</em>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-[clamp(15px,2vw,18px)] leading-[1.7] text-white/95 drop-shadow">
              For those ready to deepen their practice, step into their dharma, and stop putting off the life they came here for.
            </p>
            <div className="mt-9">
              <Link href="/schedule" className="inline-block rounded bg-gold px-7 py-3.5 text-[13px] font-medium text-white transition hover:bg-gold-dark">
                Apply for Mentoring
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INVITATION */}
      <section className="bg-bg">
        <div className="mx-auto max-w-reading px-6 py-20 text-[17px] leading-[1.85] text-ink2">
          <Reveal>
            <p className="font-serif text-[clamp(22px,3vw,28px)] italic leading-[1.4] text-ink">
              You are invited.
            </p>
            <p className="mt-8">
              What do you want to experience before you leave this planet? You came here for a reason. What do you want to experience in the time you have left?
            </p>
            <p className="mt-6">Is there anything missing in your life?</p>
            <p className="mt-6">If you could bring your dreams to life, what would you create?</p>
            <p className="mt-6">
              Maybe you've wanted to create your own company that allows you to express your unique gifts and makes the world a better place. Maybe you've always wanted to write a book and be an author, but haven't found the time. Or maybe you keep starting projects but something keeps stopping you from finishing.
            </p>
            <p className="mt-6">
              No two people are the same, but we live in a world where we're asked to conform, follow the rules, and do what we're told. The problem is, there's no cookie-cutter road to success. No one except you can discover and live your true purpose.
            </p>
            <p className="mt-6">
              Until you do, there will always be an itching inside that something is wrong. A pain in your heart that never quite goes away. Deep down, you know if you're not living the life you came here for.
            </p>
            <p className="mt-6">
              Most people will tell you to stop fretting, keep your head down, distract yourself. But if you're reading this, you know something has to change. You need to break free from what isn't working. You need someone to believe in you, hold a loving and solid space for you, and guide you to that limitless place inside where you have all the confidence and power you need.
            </p>
            <blockquote className="my-10 border-l-2 border-gold pl-6 font-serif text-[clamp(20px,2.8vw,24px)] italic leading-[1.4] text-ink">
              I help you awaken to who you truly are and finally embrace your heart's true calling. Starting now. Not tomorrow, next month, next year, or "some time after."
            </blockquote>
            <p>You have a mission. And you can begin it today. If you're ready, I'll show you how.</p>
          </Reveal>
        </div>
      </section>

      {/* WHO MICHAEL IS */}
      <section className="bg-warm">
        <div className="mx-auto max-w-widest px-6 py-20">
          <Reveal>
            <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-md shadow-xl">
                <Image src="/images/michael-beach.jpg" alt="Michael Mackintosh" fill className="object-cover" sizes="(min-width: 768px) 40vw, 100vw" />
              </div>
              <div>
                <span className="eyebrow">Who I Am</span>
                <h2 className="mt-3 font-serif text-[clamp(26px,4vw,38px)] font-light leading-[1.2] text-ink">
                  Twenty years of <em>this work</em>
                </h2>
                <div className="gold-line mt-6" />
                <div className="mt-6 space-y-5 text-[16px] leading-[1.85] text-ink2">
                  <p>
                    At 18 I had a profound spiritual awakening that changed my world forever. I spent the next 7 years dedicated to deep inner transformation, traveling often to India and living with some of the world's most powerful yogis.
                  </p>
                  <p>
                    Over the last 20 years, I've served as a mentor and advisor to people from over 75 countries, through personal mentoring, books, courses, and live programs. I've worked with men and women of all ages, from 18 to 78. Mothers, coaches, entrepreneurs, executives, multi-millionaires, therapists, designers, authors, musicians, raw chefs, actors, healers, and everything in between.
                  </p>
                  <p>
                    Clients call in from Australia, Canada, the UK, Ireland, across Europe, New Zealand, the US, and around the world. If you're ready, you can be next.
                  </p>
                </div>
                <Link href="/about/michael-mackintosh" className="mt-7 inline-block text-[12px] text-teal underline-offset-4 hover:underline">
                  Read Michael's full bio →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOW I WORK */}
      <section className="bg-bg">
        <div className="mx-auto max-w-wide px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">How I Work</span>
              <h2 className="mt-3 font-serif text-[clamp(28px,5vw,42px)] font-light text-ink">
                No scripts. No agenda. <em>Just you and the work.</em>
              </h2>
              <div className="gold-line mt-6" />
            </div>
          </Reveal>
          <div className="mt-12 space-y-6 text-[16.5px] leading-[1.85] text-ink2">
            <Reveal>
              <p>
                Unlike many coaches, I don't rely on scripts or pre-rehearsed, cookie-cutter formulas. I have no set agenda. I'm here for you, as you are, with whatever you're going through.
              </p>
            </Reveal>
            <Reveal>
              <p>
                I draw from my own experience as a meditation teacher, spiritual practitioner, and entrepreneur who has built companies generating millions of dollars from nothing. I share from my heart and I listen, deeply. I don't try to force you in any specific direction. I allow your own genesis and inner power to emerge, and support you in living your true dharma.
              </p>
            </Reveal>
            <Reveal>
              <p className="font-serif italic text-ink">
                My mentoring isn't for everyone. It's for those who are genuinely ready to do the work, drop the distractions, and step into the life they came here to live.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal text-white">
        <div className="mx-auto max-w-wide px-6 py-20 text-center">
          <Reveal>
            <span className="eyebrow !text-gold-lt">Ready?</span>
            <h2 className="mt-4 font-serif text-[clamp(28px,5vw,42px)] font-light leading-[1.15]">
              Apply for <em className="text-gold-lt">1-on-1 mentoring</em>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[16px] leading-[1.75] text-white/90">
              Book a free Discovery Call to see if working together is the right next step. We'll talk through where you are, what you're called to, and whether this is a fit.
            </p>
            <div className="mt-9">
              <Link href="/schedule" className="inline-block rounded bg-gold px-7 py-3.5 text-[13px] font-medium text-white transition hover:bg-gold-dark">
                Book a Discovery Call
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
