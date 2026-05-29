import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { MONEY_COURSE } from "@/lib/money-story";
import { SITE } from "@/lib/site-config";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return MONEY_COURSE.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const lesson = MONEY_COURSE.find((l) => l.slug === slug);
  if (!lesson) return {};
  return {
    title: { absolute: `${lesson.title} | Transforming Your Money Story` },
    description: lesson.subtitle,
    alternates: { canonical: `/money-story/${lesson.slug}` },
    openGraph: {
      title: `${lesson.title}, Transforming Your Money Story`,
      description: lesson.subtitle,
      url: `${SITE.url}/money-story/${lesson.slug}`,
    },
  };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const lesson = MONEY_COURSE.find((l) => l.slug === slug);
  if (!lesson) notFound();
  const idx = MONEY_COURSE.findIndex((l) => l.slug === lesson.slug);
  const prev = idx > 0 ? MONEY_COURSE[idx - 1] : null;
  const next = idx < MONEY_COURSE.length - 1 ? MONEY_COURSE[idx + 1] : null;
  const total = MONEY_COURSE.length;

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
              href="/money-story"
              className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-deep transition hover:text-teal"
            >
              ← Transforming Your Money Story
            </Link>
            <div className="mt-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-teal">
              Lesson {lesson.number} of {total}
            </div>
            <h1 className="mt-4 font-serif text-[clamp(28px,5vw,46px)] leading-[1.1] text-ink">
              {lesson.title}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl font-serif text-[clamp(17px,2.2vw,22px)] italic leading-[1.45] text-ink2">
              {lesson.subtitle}
            </p>
          </Reveal>
        </div>
      </section>

      {/* AUDIO */}
      <section className="bg-warm">
        <div className="mx-auto max-w-wide px-6 py-14">
          <Reveal>
            <div className="rounded-md border border-ink/10 bg-white p-6 shadow-sm">
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
                Listen to this lesson
              </div>
              <audio controls preload="none" className="mt-4 w-full" src={lesson.audio}>
                Your browser does not support the audio element.
              </audio>
              <p className="mt-3 text-[12.5px] text-soft">
                Best with headphones. Right-click the player to download.
              </p>
            </div>
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

      {/* PREV/NEXT NAV */}
      <section className="bg-warm">
        <div className="mx-auto max-w-wide px-6 py-12">
          <div className="grid gap-4 sm:grid-cols-2">
            {prev ? (
              <Link
                href={`/money-story/${prev.slug}`}
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
                href={`/money-story/${next.slug}`}
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
