import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { EP_COURSE } from "@/lib/ep-course";
import { SITE } from "@/lib/site-config";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return EP_COURSE.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const lesson = EP_COURSE.find((l) => l.slug === slug);
  if (!lesson) return {};
  return {
    title: { absolute: `${lesson.title} | EnlightenedPreneurs` },
    description: lesson.subtitle,
    alternates: { canonical: `/ep/${lesson.slug}` },
    openGraph: {
      title: `${lesson.title}, EnlightenedPreneurs`,
      description: lesson.subtitle,
      url: `${SITE.url}/ep/${lesson.slug}`,
    },
  };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const lesson = EP_COURSE.find((l) => l.slug === slug);
  if (!lesson) notFound();
  const idx = EP_COURSE.findIndex((l) => l.slug === lesson.slug);
  const prev = idx > 0 ? EP_COURSE[idx - 1] : null;
  const next = idx < EP_COURSE.length - 1 ? EP_COURSE[idx + 1] : null;
  const total = EP_COURSE.length;

  return (
    <>
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
              href="/ep/series"
              className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-deep transition hover:text-teal"
            >
              ← EnlightenedPreneurs Video Series
            </Link>
            <div className="mt-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-teal">
              Video {lesson.number} of {total}
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

      <section className="bg-warm">
        <div className="mx-auto max-w-wide px-6 py-14">
          <Reveal>
            <div className="rounded-md border border-ink/10 bg-white p-3 shadow-sm">
              <div className="relative aspect-video w-full overflow-hidden rounded-sm">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${lesson.youtubeId}?rel=0`}
                  title={lesson.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {lesson.body && (
        <section className="bg-bg">
          <div className="mx-auto max-w-wide px-6 py-14">
            <Reveal>
              <div className="space-y-5 text-[17px] leading-[1.85] text-ink2">
                {lesson.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <section className="bg-warm">
        <div className="mx-auto max-w-wide px-6 py-12">
          <div className="grid gap-4 sm:grid-cols-2">
            {prev ? (
              <Link
                href={`/ep/${prev.slug}`}
                className="group flex h-full flex-col rounded-md border border-ink/10 bg-white p-5 shadow-sm transition hover:border-teal/40 hover:shadow-md"
              >
                <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-soft">
                  ← Previous video
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
                href={`/ep/${next.slug}`}
                className="group flex h-full flex-col rounded-md border border-ink/10 bg-white p-5 text-right shadow-sm transition hover:border-teal/40 hover:shadow-md"
              >
                <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-teal">
                  Next video →
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
                  Done with the series?
                </div>
                <div className="mt-2 font-serif text-[17px] leading-[1.3] text-ink group-hover:text-teal">
                  Book a free clarity call →
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
