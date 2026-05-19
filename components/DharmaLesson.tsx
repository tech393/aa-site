import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { DHARMA_COURSE, type DharmaLesson as Lesson } from "@/lib/dharma-course";

export default function DharmaLesson({ lesson }: { lesson: Lesson }) {
  const idx = DHARMA_COURSE.findIndex((l) => l.slug === lesson.slug);
  const prev = idx > 0 ? DHARMA_COURSE[idx - 1] : null;
  const next = idx < DHARMA_COURSE.length - 1 ? DHARMA_COURSE[idx + 1] : null;
  const total = DHARMA_COURSE.length;
  const lessonLabel = `Lesson ${lesson.number} of ${total}`;

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
              href="/dharma/course"
              className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-deep transition hover:text-teal"
            >
              ← Discover Your Dharma Course
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

      {/* VIDEO or BODY */}
      <section className="bg-warm">
        <div className="mx-auto max-w-wide px-6 py-14">
          <Reveal>
            {lesson.vimeoId ? (
              <div className="rounded-md border border-ink/10 bg-white p-3 shadow-sm">
                <div className="relative aspect-video w-full overflow-hidden rounded-sm">
                  <iframe
                    src={`https://player.vimeo.com/video/${lesson.vimeoId}?dnt=1&title=0&byline=0&portrait=0`}
                    title={lesson.title}
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full border-0"
                  />
                </div>
              </div>
            ) : lesson.body && lesson.body.length > 0 ? (
              <div className="rounded-md border border-ink/10 bg-white p-7 shadow-sm md:p-9">
                <div className="space-y-5 text-[17px] leading-[1.85] text-ink2">
                  {lesson.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            ) : (
              <div className="rounded-md border border-dashed border-ink/20 bg-white/60 p-7 text-center">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-soft">
                  Content coming back online soon
                </div>
              </div>
            )}
          </Reveal>
        </div>
      </section>

      {/* PREV/NEXT NAV */}
      <section className="bg-bg">
        <div className="mx-auto max-w-wide px-6 py-12">
          <div className="grid gap-4 sm:grid-cols-2">
            {prev ? (
              <Link
                href={`/dharma/${prev.slug}`}
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
                href={`/dharma/${next.slug}`}
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
                href="/schedule"
                className="group flex h-full flex-col rounded-md border border-teal/30 bg-white p-5 text-right shadow-sm transition hover:border-teal hover:shadow-md"
              >
                <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-teal">
                  You've finished the course
                </div>
                <div className="mt-2 font-serif text-[17px] leading-[1.3] text-ink group-hover:text-teal">
                  Book a free discovery call →
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
