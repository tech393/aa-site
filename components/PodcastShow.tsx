import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import type { Podcast } from "@/lib/podcasts";

function renderTitle(title: string, emphasis?: string) {
  if (!emphasis || !title.includes(emphasis)) return title;
  const [before, ...rest] = title.split(emphasis);
  const after = rest.join(emphasis);
  return (
    <>
      {before}
      <em>{emphasis}</em>
      {after}
    </>
  );
}

export default function PodcastShow({ podcast }: { podcast: Podcast }) {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate w-full overflow-hidden">
        <Image
          src="/gifts/hero-mountains.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/55 via-black/40 to-black/65" />
        <div className="mx-auto grid max-w-widest items-center gap-10 px-6 py-20 text-white md:grid-cols-[minmax(0,260px)_minmax(0,1fr)] md:py-28">
          <Reveal>
            <div className="relative mx-auto aspect-square w-full max-w-[260px] overflow-hidden rounded-lg shadow-2xl ring-1 ring-white/10">
              <Image
                src={podcast.cover}
                alt={podcast.coverAlt}
                fill
                priority
                sizes="260px"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal>
            <div className="text-center md:text-left">
              <span className="eyebrow !text-gold-lt">{podcast.eyebrow}</span>
              <h1 className="mt-4 hero-text font-serif text-[clamp(34px,6vw,56px)] leading-[1.05]">
                {renderTitle(podcast.title, podcast.titleEmphasis)}
              </h1>
              <p className="mt-5 text-[13px] font-semibold uppercase tracking-[0.2em] text-white/90">
                {podcast.attribution}
              </p>
              <p className="hero-text mt-6 max-w-xl text-[clamp(15px,2vw,18px)] leading-[1.7] text-white/95 md:mx-0">
                {podcast.description}
              </p>
              <div className="mt-7 flex flex-wrap items-center justify-center gap-4 md:justify-start">
                <a
                  href={podcast.apple}
                  target="_blank"
                  rel="noopener"
                  className="btn-teal !bg-white !text-ink hover:!bg-cream-paper"
                >
                  Apple Podcasts →
                </a>
                {podcast.spotify && (
                  <a
                    href={podcast.spotify}
                    target="_blank"
                    rel="noopener"
                    className="btn-ghost-teal !border-white !text-white hover:!bg-white hover:!text-ink"
                  >
                    Spotify →
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* LISTEN ON */}
      <section className="bg-bg">
        <div className="mx-auto max-w-wide px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">Listen free</span>
              <h2 className="mt-3 font-serif text-[clamp(26px,4vw,38px)] text-ink">
                Available on <em>Apple Podcasts</em>
                {podcast.spotify && (
                  <>
                    {" "}&amp; <em>Spotify</em>
                  </>
                )}
              </h2>
              <div className="gold-line mt-6" />
            </div>
          </Reveal>

          <div className={`mt-12 grid gap-6 ${podcast.spotify ? "md:grid-cols-2" : ""}`}>
            <Reveal>
              <a
                href={podcast.apple}
                target="_blank"
                rel="noopener"
                className="group flex h-full items-center gap-6 rounded-md border border-ink/10 bg-white p-7 shadow-sm transition hover:border-teal/40 hover:shadow-md"
              >
                <div className="relative h-20 w-20 shrink-0">
                  <Image src="/gifts/apple-podcasts.png" alt="Apple Podcasts" fill className="object-contain" sizes="80px" />
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-teal">Apple Podcasts</div>
                  <div className="mt-2 font-serif text-[20px] leading-tight text-ink group-hover:text-teal">Listen on Apple</div>
                  <p className="mt-2 text-[13.5px] leading-[1.6] text-ink2">
                    Subscribe and get every new episode delivered to your library.
                  </p>
                  <div className="mt-3 text-[12px] font-medium text-teal">Open Apple Podcasts →</div>
                </div>
              </a>
            </Reveal>

            {podcast.spotify && (
              <Reveal>
                <a
                  href={podcast.spotify}
                  target="_blank"
                  rel="noopener"
                  className="group flex h-full items-center gap-6 rounded-md border border-ink/10 bg-white p-7 shadow-sm transition hover:border-teal/40 hover:shadow-md"
                >
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center">
                    <svg viewBox="0 0 168 168" className="h-20 w-20" role="img" aria-label="Spotify">
                      <path
                        fill="#1ED760"
                        d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 01-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 01-6.249-3.93 5.213 5.213 0 013.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 014.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 015.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 012.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-teal">Spotify</div>
                    <div className="mt-2 font-serif text-[20px] leading-tight text-ink group-hover:text-teal">Listen on Spotify</div>
                    <p className="mt-2 text-[13.5px] leading-[1.6] text-ink2">
                      Follow the show and stream every episode on Spotify.
                    </p>
                    <div className="mt-3 text-[12px] font-medium text-teal">Open Spotify →</div>
                  </div>
                </a>
              </Reveal>
            )}
          </div>
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
        <div className="mx-auto max-w-wide px-6 py-20 md:py-24">
          <Reveal>
            <div className="mx-auto grid max-w-4xl items-center gap-10 md:grid-cols-[minmax(0,300px)_minmax(0,1fr)]">
              <Image
                src="/images/brochure-preview.png"
                alt="Awakened Academy Brochure preview"
                width={700}
                height={576}
                className="mx-auto h-auto w-full max-w-[300px] rounded-sm shadow-2xl"
              />
              <div className="text-center md:text-left">
                <span className="eyebrow !text-gold-lt">Ready to go deeper?</span>
                <h2 className="mt-3 font-serif text-[clamp(26px,4vw,38px)] leading-[1.15] text-white">
                  Download the <em className="italic text-gold">Academy Brochure</em>
                </h2>
                <p className="mt-4 max-w-lg text-[15px] leading-[1.7] text-white/85 md:mx-0">
                  Curriculum, tuition, and how the Spiritual Life Coach Certification works
                  end-to-end — delivered as a PDF.
                </p>
                <div className="mt-7 flex flex-wrap items-center justify-center gap-4 md:justify-start">
                  <Link
                    href="/download-free-brochure"
                    className="inline-block rounded bg-gold px-7 py-3.5 text-[13px] font-medium text-white transition hover:bg-gold-dark"
                  >
                    Download Free Brochure →
                  </Link>
                  <Link
                    href="/schedule"
                    className="inline-block rounded border border-white/60 px-7 py-3.5 text-[13px] font-medium text-white transition hover:bg-white/10"
                  >
                    Book a Call
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MORE FROM AA */}
      <section className="bg-warm">
        <div className="mx-auto max-w-widest px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">More from Awakened Academy</span>
              <h2 className="mt-3 font-serif text-[clamp(26px,4vw,38px)] text-ink">
                Keep going <em>deeper</em>
              </h2>
              <div className="gold-line mt-6" />
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            <Link href="/meditations" className="group block rounded-md border border-ink/10 bg-white p-7 text-center shadow-sm transition hover:border-teal/40 hover:shadow-md">
              <div className="font-serif text-[18px] text-ink group-hover:text-teal">Free Meditations Library</div>
              <p className="mt-3 text-[14px] leading-[1.65] text-ink2">200+ guided meditations on Insight Timer.</p>
              <div className="mt-5 text-[12px] font-medium text-teal">Listen Now →</div>
            </Link>
            <Link href="/dharma" className="group block rounded-md border border-ink/10 bg-white p-7 text-center shadow-sm transition hover:border-teal/40 hover:shadow-md">
              <div className="font-serif text-[18px] text-ink group-hover:text-teal">Discover Your Dharma</div>
              <p className="mt-3 text-[14px] leading-[1.65] text-ink2">Find the work your soul came here to do.</p>
              <div className="mt-5 text-[12px] font-medium text-teal">Get the Guide →</div>
            </Link>
            <Link href="/spiritual-life-coach-certification" className="group block rounded-md border border-ink/10 bg-white p-7 text-center shadow-sm transition hover:border-teal/40 hover:shadow-md">
              <div className="font-serif text-[18px] text-ink group-hover:text-teal">Get Certified</div>
              <p className="mt-3 text-[14px] leading-[1.65] text-ink2">The full Spiritual Life Coach training.</p>
              <div className="mt-5 text-[12px] font-medium text-teal">Learn More →</div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
