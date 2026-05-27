import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import { SITE } from "@/lib/site-config";

const APPLY_URL = "https://forms.gle/L3LyFGPc4otvYrZ57";

export const metadata: Metadata = {
  title: { absolute: "Private Mentoring with Michael Mackintosh" },
  description:
    "Apply for private 1-on-1 mentoring with Michael Mackintosh. A sustained container of deep work for people ready to stop putting off the life they came here for.",
  alternates: { canonical: "/mentoring-with-michael" },
  openGraph: {
    title: "Private Mentoring with Michael Mackintosh",
    description:
      "Apply for private 1-on-1 mentoring with Michael Mackintosh. A sustained container of deep work for people ready to live their dharma.",
    url: `${SITE.url}/mentoring-with-michael`,
  },
};

const FOR_YOU = [
  "You've already done the courses, retreats, and books, and you're done with another round of the same.",
  "You know what you're called to, and the gap between knowing it and living it is what's hurting.",
  "You're ready to be honest about what's actually in the way, even the parts you've been protecting.",
  "You want a real mentor in your corner for a sustained season, not another one-off session.",
];

const NOT_FOR_YOU = [
  "You're looking for a quick fix, a hack, or a single breakthrough call.",
  "You want someone to tell you what to do instead of doing the inner work yourself.",
  "You're not in a position to commit time, attention, and resources to this season of your life.",
  "You'd be better served right now by our group programs or the Certification path.",
];

const PROCESS = [
  {
    n: "01",
    title: "Submit your application",
    body: "A short application so I understand where you are, what you're called to, and what you've already tried. This is how I decide whether mentoring is the right next step for you.",
  },
  {
    n: "02",
    title: "We talk, honestly",
    body: "If your application is a fit, we book a real conversation. No pitch, no script. We look at what's actually happening in your life and whether private mentoring is the right container for it.",
  },
  {
    n: "03",
    title: "Begin the work",
    body: "If we both feel it's a yes, we begin. From the first session, the work is yours, your dharma, your blocks, your next move. Held in a container where nothing is rushed and nothing is performative.",
  },
];

const FAQ_ITEMS = [
  {
    q: "Is this 1-on-1 or a group?",
    a: "Private 1-on-1 with me directly. This is not a group container, not a course, and not delegated to another coach. You work with me.",
  },
  {
    q: "How long is the engagement?",
    a: "Mentoring runs as a sustained container, not a single session. The exact length and rhythm depend on what you're working on; we shape it together once we both decide it's a fit. The application and our conversation are where we figure that out.",
  },
  {
    q: "What does it cost?",
    a: "Private mentoring with me is a real investment, and the specifics depend on the scope of the work. I share that openly once I've read your application and we've spoken. If you're at a stage where this would be a financial stretch, the Certification or our group programs are likely the better next step.",
  },
  {
    q: "How is this different from booking a Sacred Alignment Call?",
    a: (
      <>
        The <Link href="/schedule" className="text-teal underline-offset-4 hover:underline">Sacred Alignment Call</Link>{" "}
        is for people exploring the Certification path. Private mentoring is a separate offering, sustained 1-on-1 work
        with me, by application only. Different door, different conversation.
      </>
    ),
  },
  {
    q: "Will you reply to every application?",
    a: "Yes. Every application gets a real response from my team or from me directly, whether or not it's a fit right now.",
  },
  {
    q: "What if I'm not sure I'm ready?",
    a: "Apply anyway and say so. Half of the people I end up working with weren't sure they were ready when they applied. Being honest about the doubt is part of the work.",
  },
];

const TESTIMONIALS = [
  {
    name: "Disha Mookherjee",
    role: "Awakened Academy Student",
    quote:
      "Michael is an excellent teacher for meditation and personal development and really helps break down complicated concepts into easy, digestible pieces and teaches us how to make it actionable in our lives. He's also quite funny and loves to overdeliver. A very generous soul and I feel grateful to have him as a teacher and mentor.",
  },
  {
    name: "Heath Crumbacker",
    role: "West Virginia, USA",
    quote:
      "My Awakened Coach saw in me what I hadn't seen in myself. I left feeling inspired and aligned with my path. I now feel like I have a place in this world, and it's a wonderful feeling.",
  },
  {
    name: "Frank Weilack",
    role: "Coach, Mentor & Teacher",
    quote:
      "I genuinely feel empowered and enabled now to follow my path as a Coach, Mentor & Teacher. Each opportunity to help others shall be taken with a humble and loving heart.",
  },
];

export default function MentoringPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate w-full overflow-hidden">
        <Image src="/images/golden-light.jpg" alt="" fill priority className="-z-10 object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/55 via-black/40 to-black/65" />
        <div className="mx-auto max-w-wide px-6 py-24 text-center text-white md:py-28">
          <Reveal>
            <span className="eyebrow !text-gold-lt">Private Mentoring · By Application</span>
            <h1 className="mt-4 font-serif text-[clamp(32px,5.5vw,52px)] font-light leading-[1.1]">
              Stop putting off <em className="text-gold-lt">the life you came here for</em>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-[clamp(15px,2vw,18px)] leading-[1.7] text-white/95 drop-shadow">
              Private 1-on-1 mentoring with Michael Mackintosh. A sustained container of deep work for those ready to
              stop rehearsing their awakening and actually live it.
            </p>
            <div className="mt-9">
              <a
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded bg-gold px-7 py-3.5 text-[13px] font-medium text-white transition hover:bg-gold-dark"
              >
                Apply for Mentoring
              </a>
            </div>
            <p className="mt-4 text-[12px] text-white/70">
              A short written application. I personally read every one.
            </p>
          </Reveal>
        </div>
      </section>

      {/* INVITATION */}
      <section className="bg-bg">
        <div className="mx-auto max-w-reading px-6 py-20 text-[17px] leading-[1.85] text-ink2">
          <Reveal>
            <p className="font-serif text-[clamp(22px,3vw,28px)] italic leading-[1.4] text-ink">
              You already know what you came here to do.
            </p>
            <p className="mt-8">
              That's the part that won't leave you alone. The work, the calling, the version of your life you can almost
              taste but can't quite step into. You've read the books. You've done the retreats. You've started, stopped,
              restarted. And the gap between what you know and what you're actually living is still there.
            </p>
            <p className="mt-6">
              At some point, more information stops being the answer. More inspiration stops being the answer. What
              you need is someone in your corner who can see you clearly, hold you to what you said you wanted, and
              walk with you while you do the actual work of becoming it.
            </p>
            <blockquote className="my-10 border-l-2 border-gold pl-6 font-serif text-[clamp(20px,2.8vw,24px)] italic leading-[1.4] text-ink">
              I help you stop rehearsing your awakening and finally live it. Not next year. Not after one more course.
              Starting now.
            </blockquote>
            <p>
              That's what private mentoring is. It's not a session. It's not a course. It's a season of focused work,
              just you and me, on what your life is actually asking of you.
            </p>
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
                <span className="eyebrow">Who you'd be working with</span>
                <h2 className="mt-3 font-serif text-[clamp(26px,4vw,38px)] font-light leading-[1.2] text-ink">
                  Twenty years of <em>this work</em>
                </h2>
                <div className="gold-line mt-6" />
                <div className="mt-6 space-y-5 text-[16px] leading-[1.85] text-ink2">
                  <p>
                    At 18 I had a profound spiritual awakening that changed my world forever. I spent the next 7 years
                    in deep inner transformation, traveling often to India and living with some of the world's most
                    powerful yogis.
                  </p>
                  <p>
                    Over the last 20 years I've mentored people from more than 75 countries, one on one. Mothers,
                    coaches, entrepreneurs, executives, therapists, designers, authors, musicians, healers. People at
                    18 and people at 78. People with everything and people starting over.
                  </p>
                  <p>
                    I draw from my own life as a meditation teacher, spiritual practitioner, and entrepreneur who has
                    built companies from nothing. I don't work from a script. I work from what's actually in the room
                    with you.
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

      {/* IS THIS FOR YOU? */}
      <section className="bg-bg">
        <div className="mx-auto max-w-widest px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">Honest filter</span>
              <h2 className="mt-3 font-serif text-[clamp(28px,5vw,42px)] font-light text-ink">
                Is this <em>actually</em> for you?
              </h2>
              <div className="gold-line mt-6" />
              <p className="mx-auto mt-6 max-w-xl text-[15.5px] leading-[1.75] text-ink2">
                Private mentoring is not for everyone. The honest version is more useful than the marketing one.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-md border border-ink/10 bg-warm p-8">
                <span className="eyebrow !text-teal">This is for you if</span>
                <ul className="mt-6 space-y-4 text-[15.5px] leading-[1.7] text-ink2">
                  {FOR_YOU.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden className="mt-1.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full border border-gold/70 text-[11px] text-gold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal>
              <div className="h-full rounded-md border border-ink/10 bg-warm p-8">
                <span className="eyebrow !text-soft">This is not for you if</span>
                <ul className="mt-6 space-y-4 text-[15.5px] leading-[1.7] text-ink2">
                  {NOT_FOR_YOU.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden className="mt-1.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full border border-ink/15 text-[11px] text-ink/40">×</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* HOW I WORK */}
      <section className="bg-warm">
        <div className="mx-auto max-w-wide px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">How I work</span>
              <h2 className="mt-3 font-serif text-[clamp(28px,5vw,42px)] font-light text-ink">
                No scripts. No agenda. <em>Just you and the work.</em>
              </h2>
              <div className="gold-line mt-6" />
            </div>
          </Reveal>
          <div className="mt-12 space-y-6 text-[16.5px] leading-[1.85] text-ink2">
            <Reveal>
              <p>
                I don't run a curriculum on you. I don't push you toward a pre-decided outcome. I listen, deeply, and
                I work with what's actually present, your real life, your real fears, your real edge.
              </p>
            </Reveal>
            <Reveal>
              <p>
                Some weeks the work is practical, the next move on a business, a book, a relationship. Other weeks
                it's interior, sitting with what you've been avoiding, dissolving what you've been carrying. Both
                matter. Both are the work.
              </p>
            </Reveal>
            <Reveal>
              <p className="font-serif italic text-ink">
                What you'll get is a steady, loving, uncompromising presence that holds you to what you said you came
                here for, and refuses to let you settle for less.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* APPLICATION PROCESS */}
      <section className="bg-bg">
        <div className="mx-auto max-w-widest px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">How to apply</span>
              <h2 className="mt-3 font-serif text-[clamp(28px,5vw,42px)] font-light text-ink">
                Three steps. <em>No surprises.</em>
              </h2>
              <div className="gold-line mt-6" />
            </div>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {PROCESS.map((step) => (
              <Reveal key={step.n}>
                <div className="h-full rounded-md border border-ink/10 bg-warm p-8">
                  <div className="font-serif text-[42px] leading-none text-gold">{step.n}</div>
                  <h3 className="mt-4 font-serif text-[20px] font-medium text-ink">{step.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.7] text-ink2">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-12 text-center">
              <a
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded bg-gold px-7 py-3.5 text-[13px] font-medium text-white transition hover:bg-gold-dark"
              >
                Start your application
              </a>
              <p className="mt-3 text-[12px] text-soft">Opens the application form in a new tab.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-warm">
        <div className="mx-auto max-w-widest px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">From people I've worked with</span>
              <h2 className="mt-3 font-serif text-[clamp(28px,5vw,42px)] font-light text-ink">
                In their own words
              </h2>
              <div className="gold-line mt-6" />
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <Reveal key={t.name}>
                <figure className="flex h-full flex-col rounded-md border border-ink/10 bg-white p-7 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-gold/20 font-serif text-2xl text-gold-dark">
                      {t.name.charAt(0)}
                    </div>
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

      {/* FAQ */}
      <FAQ items={FAQ_ITEMS} title="Honest answers" eyebrow="Questions" />

      {/* FINAL CTA */}
      <section className="bg-teal text-white">
        <div className="mx-auto max-w-wide px-6 py-20 text-center">
          <Reveal>
            <span className="eyebrow !text-gold-lt">Ready?</span>
            <h2 className="mt-4 font-serif text-[clamp(28px,5vw,42px)] font-light leading-[1.15]">
              Apply for <em className="text-gold-lt">private mentoring</em>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[16px] leading-[1.75] text-white/90">
              The application takes about 10 minutes. If it's a fit, we'll talk. If it isn't, I'll tell you where to
              look next. Either way, you'll get a real reply.
            </p>
            <div className="mt-9">
              <a
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded bg-gold px-8 py-3.5 text-[13px] font-medium text-white transition hover:bg-gold-dark"
              >
                Apply Now
              </a>
            </div>
            <p className="mt-6 text-[12.5px] text-white/70">
              Questions before you apply? Email{" "}
              <a href={`mailto:${SITE.email}`} className="underline-offset-4 hover:underline">
                {SITE.email}
              </a>
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
