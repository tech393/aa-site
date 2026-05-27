import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { SP_COURSE, type SPLesson as Lesson } from "@/lib/sp-course";

export default function SPLesson({ lesson }: { lesson: Lesson }) {
  const idx = SP_COURSE.findIndex((l) => l.slug === lesson.slug);
  const prev = idx > 0 ? SP_COURSE[idx - 1] : null;
  const next = idx < SP_COURSE.length - 1 ? SP_COURSE[idx + 1] : null;
  const totalAudio = SP_COURSE.length - 1; // excluding intro
  const lessonLabel =
    lesson.number === 0 ? "Welcome" : `Lesson ${lesson.number} of ${totalAudio}`;

  return (
    <>
      {/* HERO */}
      <section className="relative isolate w-full overflow-hidden bg-bg">
        <Image
          src="/images/golden-light.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-center opacity-30"
        />
        <div className="mx-auto max-w-wide px-6 py-16 text-center md:py-20">
          <Reveal>
            <Link
              href="/sp"
              className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-deep transition hover:text-teal"
            >
              ← Softly Powerful Course
            </Link>
            <div className="mt-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-teal">
              {lessonLabel}
            </div>
            <h1 className="mt-4 font-serif text-[clamp(28px,5vw,46px)] leading-[1.1] text-ink">
              {lesson.title}
            </h1>
            {lesson.subtitle && (
              <p className="mx-auto mt-5 max-w-2xl font-serif text-[clamp(17px,2.2vw,22px)] italic leading-[1.45] text-ink2">
                {lesson.subtitle}
              </p>
            )}
          </Reveal>
        </div>
      </section>

      {/* AUDIO */}
      <section className="bg-warm">
        <div className="mx-auto max-w-wide px-6 py-14">
          <Reveal>
            {lesson.audio ? (
              <div className="rounded-md border border-ink/10 bg-white p-6 shadow-sm">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
                  Listen to this lesson
                </div>
                <audio
                  controls
                  preload="none"
                  className="mt-4 w-full"
                  src={lesson.audio}
                >
                  Your browser does not support the audio element.
                </audio>
                <p className="mt-3 text-[12.5px] text-soft">
                  Best with headphones. Right-click the player to download.
                </p>
              </div>
            ) : (
              <div className="rounded-md border border-dashed border-ink/20 bg-white/60 p-7 text-center">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-soft">
                  Audio coming back online soon
                </div>
                <p className="mt-3 text-[14px] leading-[1.65] text-ink2">
                  This lesson is being restored from the original 2014 recordings.
                </p>
              </div>
            )}
          </Reveal>
        </div>
      </section>

      {/* WHAT YOU'LL LEARN */}
      <section className="bg-bg">
        <div className="mx-auto max-w-wide px-6 py-16">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">In this lesson</span>
              <h2 className="mt-3 font-serif text-[clamp(24px,4vw,32px)] text-ink">
                What you'll discover
              </h2>
              <div className="gold-line mt-6" />
            </div>
            <ul className="mx-auto mt-10 max-w-2xl space-y-4 text-[17px] leading-[1.75] text-ink2">
              {lesson.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span aria-hidden className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* BROCHURE CTA */}
      <section className="relative isolate w-full overflow-hidden">
        <Image
          src="/images/machu-picchu-sunset.jpg"
          alt=""
          fill
          sizes="100vw"
          className="-z-10 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        <div className="mx-auto max-w-wide px-6 py-16 md:py-20">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-lt">
                Ready for the full path?
              </span>
              <h2 className="mt-3 font-serif text-[clamp(24px,3.6vw,34px)] leading-[1.15] text-white">
                Download the <em className="italic text-gold">Academy Brochure</em>
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-[14.5px] leading-[1.65] text-white/85">
                The full Spiritual Life Coach Certification — curriculum, tuition, and how it works.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/download-free-brochure"
                  className="inline-block rounded bg-gold px-7 py-3.5 text-[13px] font-medium text-white transition hover:bg-gold-dark"
                >
                  Download Free Brochure →
                </Link>
                <Link
                  href="/book-a-call"
                  className="inline-block rounded border border-white/60 px-7 py-3.5 text-[13px] font-medium text-white transition hover:bg-white/10"
                >
                  Book a Call
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PREV/NEXT NAV */}
      <section className="bg-warm">
        <div className="mx-auto max-w-wide px-6 py-12">
          <div className="grid gap-4 sm:grid-cols-2">
            {prev ? (
              <Link
                href={`/sp/${prev.slug}`}
                className="group flex h-full flex-col rounded-md border border-ink/10 bg-white p-5 shadow-sm transition hover:border-teal/40 hover:shadow-md"
              >
                <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-soft">
                  ← Previous
                </div>
                <div className="mt-2 font-serif text-[17px] leading-[1.3] text-ink group-hover:text-teal">
                  {prev.title}
                </div>
              </Link>
            ) : (
              <div />
            )}
            {next ? (
              <Link
                href={`/sp/${next.slug}`}
                className="group flex h-full flex-col rounded-md border border-ink/10 bg-white p-5 text-right shadow-sm transition hover:border-teal/40 hover:shadow-md"
              >
                <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-teal">
                  Next →
                </div>
                <div className="mt-2 font-serif text-[17px] leading-[1.3] text-ink group-hover:text-teal">
                  {next.title}
                </div>
              </Link>
            ) : (
              <Link
                href="/spiritual-life-coach-certification"
                className="group flex h-full flex-col rounded-md border border-teal/30 bg-white p-5 text-right shadow-sm transition hover:border-teal hover:shadow-md"
              >
                <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-teal">
                  You've finished the course
                </div>
                <div className="mt-2 font-serif text-[17px] leading-[1.3] text-ink group-hover:text-teal">
                  See the full Spiritual Life Coach Certification →
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
