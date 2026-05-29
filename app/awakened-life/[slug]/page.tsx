import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { AWAKENED_LIFE } from "@/lib/awakened-life";
import { SITE } from "@/lib/site-config";

type Params = { slug: string };

const ROMAN = ["I", "II", "III", "IV"];
const THUMBS: Record<string, string> = {
  "video-1": "/images/V1-nav.jpg",
  "the-3-worlds": "/images/V2-nav.jpg",
  "unique-soul-purpose": "/images/unique-soul-purpose.jpg",
  freedom: "/images/V3-nav.jpg",
};

export function generateStaticParams(): Params[] {
  return AWAKENED_LIFE.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<Params> },
): Promise<Metadata> {
  const { slug } = await params;
  const video = AWAKENED_LIFE.find((v) => v.slug === slug);
  if (!video) return {};
  return {
    title: { absolute: `${video.title} | The Awakened Life Series` },
    description: video.subtitle,
    alternates: { canonical: `/awakened-life/${video.slug}` },
    openGraph: {
      title: `${video.title}, The Awakened Life`,
      description: video.subtitle,
      url: `${SITE.url}/awakened-life/${video.slug}`,
    },
  };
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const video = AWAKENED_LIFE.find((v) => v.slug === slug);
  if (!video) notFound();
  const idx = AWAKENED_LIFE.findIndex((v) => v.slug === video.slug);
  const prev = idx > 0 ? AWAKENED_LIFE[idx - 1] : null;
  const next = idx < AWAKENED_LIFE.length - 1 ? AWAKENED_LIFE[idx + 1] : null;
  const isFinal = idx === AWAKENED_LIFE.length - 1;

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
        <div className="mx-auto max-w-wide px-6 py-14 text-center md:py-16">
          <Reveal>
            <Link
              href="/awakened-life"
              className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold-deep transition hover:text-teal"
            >
              ← The Awakened Life Series
            </Link>
            <div className="mt-5 text-[11px] font-semibold uppercase tracking-[0.22em] text-teal">
              Video {ROMAN[idx]} of {AWAKENED_LIFE.length}
            </div>
            <h1 className="mt-4 font-serif text-[clamp(28px,5vw,46px)] leading-[1.1] text-ink">
              {video.title}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl font-serif text-[clamp(17px,2.2vw,22px)] italic leading-[1.45] text-ink2">
              {video.subtitle}
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERIES STRIP — 4-up nav, current highlighted */}
      <section className="bg-warm">
        <div className="mx-auto max-w-wide px-6 pt-10">
          <nav aria-label="Video series" className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {AWAKENED_LIFE.map((v, i) => {
              const isCurrent = v.slug === video.slug;
              return (
                <Link
                  key={v.slug}
                  href={`/awakened-life/${v.slug}`}
                  aria-current={isCurrent ? "page" : undefined}
                  className={`group block ${isCurrent ? "pointer-events-none" : ""}`}
                >
                  <div
                    className={`relative aspect-[145/99] overflow-hidden rounded ${
                      isCurrent ? "ring-2 ring-gold" : "opacity-70 group-hover:opacity-100"
                    } transition`}
                  >
                    <Image
                      src={THUMBS[v.slug]}
                      alt=""
                      fill
                      sizes="(min-width: 640px) 25vw, 50vw"
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/15" />
                    <span className="absolute left-3 top-2 font-serif text-[18px] italic text-white drop-shadow">
                      {ROMAN[i]}
                    </span>
                  </div>
                  <div
                    className={`mt-2 text-center font-serif text-[13px] italic leading-[1.3] ${
                      isCurrent ? "text-ink" : "text-soft"
                    }`}
                  >
                    {v.title}
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>
      </section>

      {/* PRIMARY VIDEO */}
      <section className="bg-warm">
        <div className="mx-auto max-w-wide px-6 py-10">
          <Reveal>
            <div className="rounded-md border border-ink/10 bg-white p-3 shadow-sm">
              <div className="relative aspect-video w-full overflow-hidden rounded-sm">
                <iframe
                  src={`https://player.vimeo.com/video/${video.vimeoId}?dnt=1`}
                  title={video.title}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECONDARY VIDEO — only some lessons have a follow-on */}
      {video.vimeoIdSecondary && (
        <section className="bg-warm">
          <div className="mx-auto max-w-wide px-6 pb-10">
            <Reveal>
              <div className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-gold-deep">
                Continue with part two
              </div>
              <div className="rounded-md border border-ink/10 bg-white p-3 shadow-sm">
                <div className="relative aspect-video w-full overflow-hidden rounded-sm">
                  <iframe
                    src={`https://player.vimeo.com/video/${video.vimeoIdSecondary}?dnt=1`}
                    title={`${video.title} — part two`}
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full border-0"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {video.body && (
        <section className="bg-bg">
          <div className="mx-auto max-w-wide px-6 py-14">
            <Reveal>
              <div className="mx-auto max-w-2xl space-y-5 text-[17px] leading-[1.85] text-ink2">
                {video.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* FINAL VIDEO CTA — book a call */}
      {isFinal && (
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
                  Ready for the next step?
                </span>
                <h2 className="mt-3 font-serif text-[clamp(24px,3.6vw,34px)] leading-[1.15] text-white">
                  Book a free <em className="italic text-gold">clarity call</em>
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-[14.5px] leading-[1.65] text-white/85">
                  If the series landed for you, the next step is a conversation. We&rsquo;ll walk what an awakened life looks like for your specific situation.
                </p>
                <div className="mt-6">
                  <Link
                    href="/schedule"
                    className="inline-block rounded bg-gold px-7 py-3.5 text-[13px] font-medium text-white transition hover:bg-gold-dark"
                  >
                    Book a Call →
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* PREV/NEXT */}
      <section className="bg-warm">
        <div className="mx-auto max-w-wide px-6 py-12">
          <div className="grid gap-4 sm:grid-cols-2">
            {prev ? (
              <Link
                href={`/awakened-life/${prev.slug}`}
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
                href={`/awakened-life/${next.slug}`}
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
                href="/spiritual-life-coach-certification"
                className="group flex h-full flex-col rounded-md border border-teal/30 bg-white p-5 text-right shadow-sm transition hover:border-teal hover:shadow-md"
              >
                <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-teal">
                  Done with the series?
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
