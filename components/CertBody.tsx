import Link from "next/link";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import { SITE } from "@/lib/site-config";
import { BENEFITS, TIMELINE, PILLARS, POSSIBLE, TESTIMONIALS, FAQ_ITEMS } from "@/lib/cert-data";

type Props = { hideExperience?: boolean };

export default function CertBody({ hideExperience = false }: Props) {
  return (
    <>
      {/* INTRO / FOUNDING STATEMENT */}
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

      {/* WHAT YOU'LL EXPERIENCE, 17 benefit blocks (hidden on cert-classic which uses image bands instead) */}
      {!hideExperience && (
      <section className="bg-warm">
        <div className="mx-auto max-w-widest px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">What You'll Experience</span>
              <h2 className="mt-3 font-serif text-[clamp(28px,5vw,42px)] font-light text-ink">
                A complete training across <em>every dimension</em>
              </h2>
              <div className="gold-line mt-6" />
            </div>
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((b) => (
              <Reveal key={b.title}>
                <article className="flex h-full flex-col rounded-md border border-ink/10 bg-white p-6 shadow-sm transition hover:border-teal/40 hover:shadow-md">
                  <h3 className="font-serif text-[18px] font-light leading-[1.3] text-ink">{b.title}</h3>
                  <div className="mt-3 h-px w-8 bg-gold" />
                  <p className="mt-4 flex-1 text-[14.5px] leading-[1.7] text-ink2">{b.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* TRANSFORMATION TIMELINE */}
      <section className="bg-bg">
        <div className="mx-auto max-w-wide px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">Transformation Timeline</span>
              <h2 className="mt-3 font-serif text-[clamp(28px,5vw,42px)] font-light text-ink">
                What's possible <em>at each stage</em>
              </h2>
              <div className="gold-line mt-6" />
            </div>
          </Reveal>
          <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {TIMELINE.map((t) => (
              <Reveal key={t.when}>
                <li className="flex h-full flex-col rounded-md border-l-2 border-teal bg-warm p-6 shadow-sm">
                  <div className="text-[11px] uppercase tracking-[0.2em] text-teal">{t.when}</div>
                  <p className="mt-4 text-[15px] leading-[1.7] text-ink2">{t.body}</p>
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
              <h2 className="mt-3 font-serif text-[clamp(28px,5vw,42px)] font-light text-ink">
                The <em>Seven Awakened Pillars</em>
              </h2>
              <div className="gold-line mt-6" />
              <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-[1.7] text-ink2">
                Most coach trainings teach a single method. We train you across the seven dimensions of a complete
                spiritual coaching life: the inner foundation, the craft, the business, and the dharma to do this work for the long run.
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

      {/* WHAT IS POSSIBLE FOR YOU */}
      <section className="bg-bg">
        <div className="mx-auto max-w-wide px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">What Is Possible For You</span>
              <h2 className="mt-3 font-serif text-[clamp(28px,5vw,42px)] font-light text-ink">
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
        <div className="mx-auto max-w-wide px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">Student Stories</span>
              <h2 className="mt-3 font-serif text-[clamp(28px,5vw,42px)] font-light text-ink">
                What graduates say
              </h2>
              <div className="gold-line mt-6" />
            </div>
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <Reveal key={t.name}>
                <figure className="flex h-full flex-col rounded-md border border-ink/10 bg-white p-7 shadow-sm">
                  <blockquote className="flex-1 font-serif text-[17px] italic leading-[1.6] text-ink">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 border-t border-ink/10 pt-4">
                    <div className="font-serif text-[16px] text-ink">{t.name}</div>
                    <div className="mt-1 text-[12px] text-teal">{t.role}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECONDARY CTA */}
      <section className="bg-teal text-white">
        <div className="mx-auto max-w-wide px-6 py-20 text-center">
          <Reveal>
            <span className="eyebrow !text-gold-lt">Ready to Begin?</span>
            <h2 className="mt-4 font-serif text-[clamp(28px,5vw,42px)] font-light leading-[1.15]">
              If you feel called, <em className="text-gold-lt">let's talk.</em>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[16px] leading-[1.75] text-white/90">
              Book a free discovery call to see if the certification is the right next step for you.
              Every certification student receives 1-on-1 access to Michael as part of the program.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="#program-info"
                className="inline-block rounded bg-gold px-7 py-3.5 text-[13px] font-medium text-white transition hover:bg-gold-dark"
              >
                Download Free Brochure
              </Link>
              <Link
                href="/schedule"
                className="inline-block rounded border-2 border-white px-7 py-3 text-[13px] font-medium text-white transition hover:bg-white hover:text-teal"
              >
                Book a Discovery Call
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <FAQ items={FAQ_ITEMS} />
    </>
  );
}
