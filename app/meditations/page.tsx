import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: { absolute: "Meditation with Michael Mackintosh & Arielle Hecht" },
  description:
    "Free meditations from Michael Mackintosh and Arielle Hecht on Insight Timer. 125,000+ five-star reviews. Listen now.",
  alternates: { canonical: "/meditations" },
  openGraph: { title: "Meditation with Michael Mackintosh & Arielle Hecht", description: "200+ free guided meditations on Insight Timer." },
};

const MEDITATIONS = [
  { name: "Pain Relief Meditation", url: "https://insig.ht/gm_16493", image: "/images/meditations/pain-relief.jpeg" },
  { name: "Advanced Law of Attraction Meditation for Wealth &amp; Abundance", url: "https://insig.ht/gm_44963", image: "/images/meditations/law-of-attraction.jpeg" },
  { name: "Letting Go Emotional Release", url: "https://insig.ht/gm_23162", image: "/images/meditations/letting-go.jpeg" },
  { name: "The Gratitude Meditation", url: "https://insig.ht/gm_30756", image: "/images/meditations/gratitude.jpeg" },
  { name: "Moving Beyond the Past, Becoming Your Highest Self", url: "https://insig.ht/gm_46304", image: "/images/meditations/beyond-the-past.jpeg" },
  { name: "Hand of Blessings", url: "https://insig.ht/gm_6096", image: "/images/meditations/hand-of-blessings.jpeg" },
  { name: "Total Anxiety Cure", url: "https://insig.ht/gm_30399", image: "/images/meditations/anxiety-cure.jpeg" },
  { name: "7 Color Rays Meditation for Balance", url: "https://insig.ht/gm_6405", image: "/images/meditations/color-rays.jpeg" },
  { name: "Soul Consciousness Meditation", url: "https://insig.ht/gm_12162", image: "/images/meditations/soul-consciousness.jpeg" },
  { name: "Releasing &amp; Letting Go Into Peace", url: "https://insig.ht/gm_83968", image: "/images/meditations/releasing-peace.jpeg" },
];

export default function MeditationsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate w-full overflow-hidden">
        <Image src="/images/meditations-hero-cliff.jpg" alt="Woman in lotus pose on a cliff at sunrise" fill priority sizes="100vw" className="-z-10 object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/45 via-black/30 to-black/60" />
        <div className="mx-auto max-w-widest px-6 py-24 text-center text-white md:py-32">
          <Reveal>
            <span className="eyebrow !text-gold-lt">Free Meditations</span>
            <h1 className="mt-4 font-serif text-[clamp(32px,6vw,56px)] font-light leading-[1.1]">
              Meditate with Michael &amp; Arielle<br /><em>on Insight Timer</em>
            </h1>
            <div className="mx-auto mt-9 flex max-w-2xl flex-wrap items-center justify-center gap-x-10 gap-y-4 font-serif text-[clamp(20px,3vw,30px)]">
              <div>
                <span className="text-gold-lt">8M+</span>{" "}
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">Plays</span>
              </div>
              <div>
                <span className="text-gold-lt">125,000+</span>{" "}
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">Five-Star Reviews</span>
              </div>
              <div>
                <span className="text-gold-lt">200+</span>{" "}
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/80">Free Meditations</span>
              </div>
            </div>
            <p className="mx-auto mt-8 max-w-2xl text-[clamp(15px,1.8vw,17px)] leading-[1.7] text-white/90 drop-shadow">
              The complete library of free guided meditations from the founders of Awakened Academy.
              Available on Insight Timer, free forever, no signup required to listen.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FEATURED MEDITATIONS */}
      <section className="bg-bg">
        <div className="mx-auto max-w-widest px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">Featured Meditations</span>
              <h2 className="mt-3 font-serif text-[clamp(26px,4vw,38px)] font-light text-ink">
                Start here, <em>our most-played meditations</em>
              </h2>
              <div className="gold-line mt-6" />
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {MEDITATIONS.map((m, i) => (
              <Reveal key={m.url}>
                <a
                  href={m.url}
                  target="_blank"
                  rel="noopener"
                  className="group flex h-full flex-col overflow-hidden rounded-md border border-ink/10 bg-white shadow-sm transition hover:border-teal/40 hover:shadow-md"
                >
                  <div className="relative aspect-square w-full overflow-hidden">
                    <Image
                      src={m.image}
                      alt={m.name.replace(/&amp;/g, "&")}
                      fill
                      className="object-cover transition group-hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                    <div className="absolute left-4 top-4">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cream-paper/95 font-serif text-[16px] leading-none text-gold-deep shadow-md backdrop-blur-sm">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="absolute right-4 top-4">
                      <span className="rounded-full bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                        Insight Timer
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-serif text-[19px] leading-[1.3] text-ink group-hover:text-teal" dangerouslySetInnerHTML={{ __html: m.name }} />
                    <div className="mt-6 inline-flex items-center gap-2 text-[12px] font-medium text-teal">
                      Listen Free
                      <span className="transition group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TEACHERS */}
      <section className="bg-warm">
        <div className="mx-auto max-w-widest px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">Your Teachers</span>
              <h2 className="mt-3 font-serif text-[clamp(26px,4vw,38px)] font-light text-ink">
                Follow Michael &amp; Arielle <em>on Insight Timer</em>
              </h2>
              <div className="gold-line mt-6" />
              <p className="mx-auto mt-6 max-w-xl text-[16px] leading-[1.7] text-ink2">
                Subscribe to either profile for new meditations as they're released, plus
                guided practices, sound healings, and longer journeys.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal>
              <article className="flex h-full flex-col rounded-md border border-ink/10 bg-white p-8 text-center shadow-sm">
                <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full border-2 border-gold/30 shadow-sm">
                  <Image src="/images/michael-beach.jpg" alt="Michael Mackintosh" fill className="object-cover" />
                </div>
                <h3 className="mt-6 font-serif text-[24px] font-light text-ink">Michael Mackintosh</h3>
                <div className="mt-2 text-[10px] uppercase tracking-[0.24em] text-teal">31+ Free Meditations</div>
                <p className="mx-auto mt-4 flex-1 max-w-sm text-[14.5px] leading-[1.7] text-ink2">
                  Spiritual teacher, success coach, and creator of Awakened Academy. Michael's
                  meditations focus on awakening, the law of attraction, and inner mastery.
                </p>
                <a
                  href="https://insighttimer.com/michaelmackintosh"
                  target="_blank"
                  rel="noopener"
                  className="mt-7 inline-block self-center rounded bg-teal px-7 py-3 text-[12px] font-medium text-white transition hover:bg-teal-soft"
                >
                  Meditate Now →
                </a>
              </article>
            </Reveal>

            <Reveal>
              <article className="flex h-full flex-col rounded-md border border-ink/10 bg-white p-8 text-center shadow-sm">
                <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full border-2 border-gold/30 shadow-sm">
                  <Image src="/images/arielle.jpeg" alt="Arielle Hecht" fill className="object-cover" />
                </div>
                <h3 className="mt-6 font-serif text-[24px] font-light text-ink">Arielle Hecht</h3>
                <div className="mt-2 text-[10px] uppercase tracking-[0.24em] text-teal">54+ Free Meditations</div>
                <p className="mx-auto mt-4 flex-1 max-w-sm text-[14.5px] leading-[1.7] text-ink2">
                  Higher Self mentor, author of <em>3 Seconds to Being Your Higher Self</em>, and
                  globally regarded meditation teacher. Arielle's meditations explore presence,
                  release, and connection to the One.
                </p>
                <a
                  href="https://insighttimer.com/ariellehecht"
                  target="_blank"
                  rel="noopener"
                  className="mt-7 inline-block self-center rounded bg-teal px-7 py-3 text-[12px] font-medium text-white transition hover:bg-teal-soft"
                >
                  Meditate Now →
                </a>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal text-white">
        <div className="mx-auto max-w-wide px-6 py-20 text-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(28px,5vw,42px)] font-light">
              Ready to go <em className="text-gold-lt">deeper?</em>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[16px] leading-[1.7] text-white/85">
              If our meditations have moved you and you want to learn how to do this work for others,
              explore the Spiritual Life Coach Certification.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link href="/download-free-brochure" className="inline-block rounded bg-gold px-7 py-3.5 text-[13px] font-medium text-white transition hover:bg-gold-dark">Download Free Brochure</Link>
              <Link href="/schedule" className="inline-block rounded border-2 border-white px-7 py-3 text-[13px] font-medium text-white transition hover:bg-white hover:text-teal">Book a Discovery Call</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
