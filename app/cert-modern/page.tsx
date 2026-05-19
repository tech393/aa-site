import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import GHLForm from "@/components/GHLForm";
import FAQ from "@/components/FAQ";
import { GHL, SITE } from "@/lib/site-config";
import { courseSchema, faqSchema, FAQ_ITEMS, PILLARS } from "@/lib/cert-data";

export const metadata: Metadata = {
  title: "Spiritual Life Coach Certification, Since 2004",
  description:
    "Become a certified spiritual life coach online. Train with the pioneer since 2004. Self-paced curriculum, business systems, and 1-on-1 founder mentorship.",
  alternates: { canonical: "/cert-modern" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Spiritual Life Coach Certification (Modern)",
    description: "Train with the pioneer since 2004. Self-paced, business systems, founder mentorship.",
    url: `${SITE.url}/cert-modern`,
  },
};

export default function CertModernPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO, modern split: text + buttons on left, form panel on right, Sedona behind */}
      <section className="relative isolate w-full overflow-hidden">
        <Image
          src="/images/cert-hero-sedona.jpg"
          alt="Sedona red rock formations at sunset"
          fill
          priority
          className="-z-10 object-cover"
          style={{ objectPosition: "center" }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/80 via-black/60 to-black/55" />

        <div className="mx-auto grid max-w-widest gap-12 px-6 py-20 md:grid-cols-[1.05fr_minmax(360px,420px)] md:items-center md:py-24 lg:py-28">
          {/* LEFT, title + subtitle + CTAs + trust badges */}
          <div className="text-white">
            <Reveal>
              <div className="text-[11px] uppercase tracking-[0.3em] text-gold-lt">
                ✦&nbsp;&nbsp;Spiritual Life Coach Certification &nbsp;·&nbsp; Since 2004&nbsp;&nbsp;✦
              </div>
            </Reveal>
            <Reveal>
              <h1 className="mt-7 font-serif text-[clamp(34px,5.5vw,58px)] font-light leading-[1.08]">
                Transform Your <em className="text-gold-lt">Spiritual Journey</em> into a Mentorship
              </h1>
            </Reveal>
            <Reveal>
              <p className="mt-7 max-w-xl text-[clamp(15px,1.8vw,18px)] leading-[1.7] text-white/95 [text-shadow:0_1px_3px_rgba(0,0,0,0.6)]">
                Learn to harness your experiences and emotional intelligence to support and guide others through their spiritual transitions, and create a prosperous career doing what you love.
              </p>
            </Reveal>
            <Reveal>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <Link
                  href="#curriculum"
                  className="inline-flex items-center gap-1 text-[13px] font-medium text-white underline-offset-4 hover:underline"
                >
                  Explore the Program <span aria-hidden>↓</span>
                </Link>
              </div>
            </Reveal>
            <Reveal>
              <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-[13px] text-white/95">
                {[
                  "Founded 2014",
                  "650+ certified coaches",
                  "25+ countries",
                ].map((label) => (
                  <li key={label} className="flex items-center gap-2.5">
                    <span aria-hidden className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-gold-lt/70 text-[11px] text-gold-lt">✓</span>
                    {label}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* RIGHT, form panel with subtle dark scrim for legibility */}
          <Reveal>
            <div id="program-info" className="scroll-mt-24 rounded-lg bg-black/30 p-6 backdrop-blur-md md:p-7">
              <div className="text-center text-white">
                <h2 className="font-serif text-[clamp(22px,2.8vw,28px)] font-light leading-[1.2]">
                  Download the Free Brochure
                </h2>
                <p className="mt-2 text-[12px] text-gold-lt [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">
                  Instant access · No spam · Unsubscribe anytime
                </p>
              </div>
              <div className="-mt-10 overflow-hidden">
                <GHLForm
                  formId={GHL.forms.certification.id}
                  formName={GHL.forms.certification.name}
                  height={GHL.forms.certification.height}
                />
              </div>
              {/* Solid block to hide the GHL form's internal bottom divider line, then the trailing text */}
              <div className="relative z-10 -mt-6 h-3 bg-transparent" />
              <p className="-mt-1 text-center text-[11.5px] tracking-wide text-white/85 [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]">
                Free. Instant. No spam, ever.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DEEP RELIEF & PEACE */}
      <section className="bg-warm">
        <div className="mx-auto max-w-wide px-6 py-20 text-center">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.3em] text-gold">
              ✦&nbsp;&nbsp;Deep Relief &amp; Peace&nbsp;&nbsp;✦
            </div>
            <h2 className="mt-5 font-serif text-[clamp(26px,4.5vw,40px)] font-light leading-[1.2] text-ink">
              The moment you know <em>this is the path</em>
            </h2>
            <div className="gold-line mt-6" />
            <p className="mx-auto mt-8 max-w-2xl text-[clamp(16px,2vw,18px)] leading-[1.85] text-ink2">
              Many students tell us that just <em className="text-teal">minutes</em> after joining they felt deep
              relief, because they were finally on the path. Once you're on the right path, everything else just falls
              into place. All it takes is one small step: download the free brochure and see if this is for you.
            </p>
            <div className="mt-9">
              <Link href="#program-info" className="inline-block rounded bg-gold px-7 py-3.5 text-[13px] font-medium text-white transition hover:bg-gold-dark">
                Yes, Download the Free Brochure
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TWO THINGS THAT CHANGE EVERYTHING */}
      <section className="bg-bg">
        <div className="mx-auto max-w-widest px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">Two Things That Change Everything</span>
              <h2 className="mt-3 font-serif text-[clamp(28px,5vw,42px)] font-light text-ink">
                The life you actually came here for
              </h2>
              <div className="gold-line mt-6" />
            </div>
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-2">
            <Reveal>
              <article className="rounded-md border border-ink/10 bg-white p-8 shadow-sm">
                <div className="text-[20px] text-gold">✨</div>
                <h3 className="mt-2 font-serif text-[clamp(22px,3vw,28px)] font-light leading-[1.25] text-ink">
                  Live a deeply <em className="text-gold">spiritual life</em>
                </h3>
                <div className="mt-4 h-px w-10 bg-gold" />
                <p className="mt-5 text-[15.5px] leading-[1.8] text-ink2">
                  Wake up to a morning of meditation, prayer, and connection with the Divine. Do meaningful work
                  that makes a real difference. Experience the magic of synchronicities and flow, every single day.
                </p>
                <Link href="#program-info" className="mt-6 inline-block text-[12px] text-teal underline-offset-4 hover:underline">
                  Get the full picture in the brochure →
                </Link>
              </article>
            </Reveal>
            <Reveal>
              <article className="rounded-md border border-ink/10 bg-white p-8 shadow-sm">
                <div className="text-[20px] text-teal">💚</div>
                <h3 className="mt-2 font-serif text-[clamp(22px,3vw,28px)] font-light leading-[1.25] text-ink">
                  Make a <em className="text-gold">great living</em> doing it
                </h3>
                <div className="mt-4 h-px w-10 bg-gold" />
                <p className="mt-5 text-[15.5px] leading-[1.8] text-ink2">
                  Get paid while you sleep from your courses, books, and coaching clients. Build a freedom-based
                  income from anywhere in the world, without compromising your values or your peace.
                </p>
                <Link href="#program-info" className="mt-6 inline-block text-[12px] text-teal underline-offset-4 hover:underline">
                  Get the full picture in the brochure →
                </Link>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CURRICULUM, Seven Awakened Pillars */}
      <section id="curriculum" className="scroll-mt-20 bg-warm">
        <div className="mx-auto max-w-widest px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">The Curriculum</span>
              <h2 className="mt-3 font-serif text-[clamp(28px,5vw,42px)] font-light text-ink">
                The <em>Seven Awakened Pillars</em>
              </h2>
              <div className="gold-line mt-6" />
              <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-[1.7] text-ink2">
                Most coach trainings teach a single method. We train you across the seven dimensions of a
                complete spiritual coaching life, the inner foundation, the craft, the business, and the
                dharma to do this work for the long run.
              </p>
            </div>
          </Reveal>
          <ol className="mt-12 grid gap-5 md:grid-cols-2">
            {PILLARS.map((p) => (
              <Reveal key={p.title}>
                <li className="flex h-full items-start gap-5 rounded-md border border-ink/10 bg-white p-6 shadow-sm transition hover:border-teal/40 hover:shadow-md">
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

      {/* MEET YOUR FOUNDERS */}
      <section className="bg-bg">
        <div className="mx-auto max-w-widest px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">Meet Your Founders</span>
              <h2 className="mt-3 font-serif text-[clamp(28px,5vw,42px)] font-light text-ink">
                Trained by <em>Michael &amp; Arielle</em>
              </h2>
              <div className="gold-line mt-6" />
            </div>
          </Reveal>
          <div className="mt-14 grid gap-12 md:grid-cols-2">
            <Reveal>
              <article className="space-y-5">
                <div className="relative aspect-[4/5] overflow-hidden rounded-md shadow-xl">
                  <Image src="/images/michael-beach.jpg" alt="Michael Mackintosh, Founder of Awakened Academy" fill className="object-cover" sizes="(min-width: 768px) 40vw, 100vw" />
                </div>
                <h3 className="font-serif text-[22px] font-light text-ink">Michael Mackintosh</h3>
                <div className="text-[10px] uppercase tracking-[0.2em] text-teal">Founder · Lead Mentor</div>
                <p className="text-[15px] leading-[1.75] text-ink2">
                  Pioneer of spiritual life coaching since 2004. Bestselling author, spiritual teacher and
                  mentor for spiritual entrepreneurs. Co-founder of Awakened Academy, Superhero
                  Training, Ombar Chocolate and Liberated Life Productions. Every certification student
                  receives 1-on-1 access to Michael.
                </p>
                <Link href="/about/michael-mackintosh" className="inline-block text-[12px] text-teal underline-offset-4 hover:underline">
                  Read Michael's full bio →
                </Link>
              </article>
            </Reveal>
            <Reveal>
              <article className="space-y-5">
                <div className="relative aspect-[4/5] overflow-hidden rounded-md shadow-xl">
                  <Image src="/images/arielle.jpeg" alt="Arielle Hecht, Co-Founder of Awakened Academy" fill className="object-cover" sizes="(min-width: 768px) 40vw, 100vw" />
                </div>
                <h3 className="font-serif text-[22px] font-light text-ink">Arielle Hecht</h3>
                <div className="text-[10px] uppercase tracking-[0.2em] text-teal">Co-Founder · Higher Self Mentor</div>
                <p className="text-[15px] leading-[1.75] text-ink2">
                  Higher Self mentor who supports authentic spirituality and living from truth, service, and
                  wealth. Singer/songwriter, globally regarded meditation teacher, and author of{" "}
                  <em>3 Seconds to Being Your Higher Self</em>. Co-founder of Awakened Academy and guide for
                  the transformational group work alongside the certification.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-warm">
        <div className="mx-auto max-w-wide px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">Their Words, Not Ours</span>
              <h2 className="mt-3 font-serif text-[clamp(28px,5vw,42px)] font-light text-ink">
                Real students, <em>real lives changed</em>
              </h2>
              <div className="gold-line mt-6" />
            </div>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Reveal>
              <figure className="flex h-full flex-col rounded-md border border-ink/10 bg-white p-7 shadow-sm">
                <div className="flex items-start gap-5">
                  <div className="relative h-20 w-20 flex-none overflow-hidden rounded-full">
                    <Image src="/images/rita.jpg" alt="Rita Andorinho" fill className="object-cover" sizes="80px" />
                  </div>
                  <div>
                    <div className="font-serif text-[18px] text-ink">Rita Andorinho</div>
                    <div className="mt-1 text-[11px] text-teal">Certified Spiritual Life Coach</div>
                  </div>
                </div>
                <blockquote className="mt-6 flex-1 font-serif text-[16px] italic leading-[1.65] text-ink2">
                  &ldquo;I left my corporate job, started coaching, bought my dream house, lost 30 lbs, wrote a book, attracted a loving new relationship, and so much more. I highly recommend Awakened Academy.&rdquo;
                </blockquote>
              </figure>
            </Reveal>
            <Reveal>
              <figure className="flex h-full flex-col rounded-md border border-ink/10 bg-white p-7 shadow-sm">
                <div className="flex items-start gap-5">
                  <div className="relative h-20 w-20 flex-none overflow-hidden rounded-full">
                    <Image src="/images/lyne.jpg" alt="Lyne Johnson" fill className="object-cover" sizes="80px" />
                  </div>
                  <div>
                    <div className="font-serif text-[18px] text-ink">Lyne Johnson</div>
                    <div className="mt-1 text-[11px] text-teal">Spiritual Life Coach & Course Creator</div>
                  </div>
                </div>
                <blockquote className="mt-6 flex-1 font-serif text-[16px] italic leading-[1.65] text-ink2">
                  &ldquo;I am now a successful spiritual mentor who helps beautiful souls find their way back home. I do my sacred work full-time. I've published four online courses and several guided meditations played 900,000 times.&rdquo;
                </blockquote>
              </figure>
            </Reveal>
            <Reveal>
              <figure className="flex h-full flex-col rounded-md border border-ink/10 bg-white p-7 shadow-sm">
                <div className="flex items-start gap-5">
                  <div className="relative h-20 w-20 flex-none overflow-hidden rounded-full">
                    <Image src="/img/testimonials/Rakhee-Patel.jpg" alt="Rakhee Patel" fill className="object-cover" sizes="80px" />
                  </div>
                  <div>
                    <div className="font-serif text-[18px] text-ink">Rakhee Patel</div>
                    <div className="mt-1 text-[11px] text-teal">Certified Spiritual Life Coach</div>
                  </div>
                </div>
                <blockquote className="mt-6 flex-1 font-serif text-[16px] italic leading-[1.65] text-ink2">
                  &ldquo;Three months ago, I was stuck in a job I didn't love, disconnected from my spiritual practice, and feeling off, like I was out of alignment with my Dharma and true purpose. Then I enrolled in Awakened Academy and everything changed. Through the program, I discovered so much about myself, my calling, and how to truly coach others from a place of love and alignment. Today, I'm working with 3 clients a day, feeling genuinely happy most of the time, and I finally have the freedom to enjoy life. No more 9–5 grind. I'm living my Dharma and it feels like a dream come true. It's amazing how far I've come in such a short time. I honestly feel like a completely different person.&rdquo;
                </blockquote>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FINAL CTA, Free · Instant · No spam */}
      <section className="bg-teal text-white">
        <div className="mx-auto max-w-2xl px-6 py-20 text-center">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.3em] text-gold-lt">
              ✦&nbsp;&nbsp;Free · Instant · No spam&nbsp;&nbsp;✦
            </div>
            <h2 className="mt-5 font-serif text-[clamp(28px,5vw,42px)] font-light leading-[1.15]">
              Everything you need to know is <em className="text-gold-lt">inside the brochure</em>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[16px] leading-[1.75] text-white/90">
              Download it now and discover exactly what's possible for you, the life, the income, the freedom,
              and the meaningful work you've been called to do.
            </p>
            <div className="mx-auto mt-10 max-w-xl rounded-md bg-white p-5 text-left shadow-2xl md:p-6">
              <h3 className="text-center font-serif text-[clamp(20px,2.6vw,24px)] font-light text-ink">
                Download the Free Brochure
              </h3>
              <p className="mt-2 text-center text-[12px] text-soft">
                All about Becoming a Spiritual Life Coach, Author &amp; Awakened Leader
              </p>
              <div className="-mt-10 overflow-hidden rounded">
                <GHLForm
                  formId={GHL.forms.certification.id}
                  formName={GHL.forms.certification.name}
                  height={GHL.forms.certification.height}
                />
              </div>
              {/* White block to cover the GHL form's internal bottom divider line */}
              <div className="relative z-10 -mt-6 h-3 bg-white" />
              <p className="-mt-1 text-center text-[11.5px] tracking-wide text-soft">
                Free. Instant. No spam, ever.
              </p>
            </div>
            <div className="mt-8">
              <Link href="/schedule" className="inline-block text-[12px] text-white/85 underline-offset-4 hover:underline">
                Or book a discovery call instead →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <FAQ items={FAQ_ITEMS} />

      {/* Sticky floating CTA, follows the scroll */}
      <Link
        href="#program-info"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3.5 text-[12px] font-medium text-white shadow-2xl ring-1 ring-white/20 transition hover:bg-gold-dark sm:bottom-6 sm:right-6 sm:px-6 sm:text-[13px]"
        aria-label="Download the free brochure"
      >
        <span aria-hidden>📥</span>
        Download Free Brochure
      </Link>
    </>
  );
}
