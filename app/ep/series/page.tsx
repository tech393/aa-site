import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { EP_COURSE } from "@/lib/ep-course";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: { absolute: "EnlightenedPreneurs Video Series | Awakened Academy" },
  description:
    "The original EnlightenedPreneurs video series, recovered from the archive. Free training for spiritual entrepreneurs building a meaningful business.",
  alternates: { canonical: "/ep/series" },
  openGraph: {
    title: "EnlightenedPreneurs Video Series",
    description:
      "Free training for spiritual entrepreneurs building a meaningful business.",
    url: `${SITE.url}/ep/series`,
  },
};

export default function EPSeriesIndex() {
  return (
    <>
      <section className="relative isolate w-full overflow-hidden">
        <Image
          src="/images/ep-hero-balcony.jpg"
          alt="Woman working from balcony at sunset"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/55 via-black/40 to-black/65" />
        <div className="mx-auto max-w-widest px-6 py-24 text-center text-white md:py-32">
          <Reveal>
            <span className="eyebrow !text-gold-lt">A free video series</span>
            <h1 className="hero-text mt-4 font-serif text-[clamp(34px,6vw,60px)] leading-[1.05]">
              EnlightenedPreneurs
            </h1>
            <p className="hero-text mx-auto mt-7 max-w-2xl text-[clamp(15px,2vw,18px)] leading-[1.7] text-white/95">
              The original video training for spiritual entrepreneurs building a meaningful business
              without selling out. Recovered from the archive.
            </p>
            <div className="mt-9">
              <Link
                href={`/ep/${EP_COURSE[0].slug}`}
                className="inline-flex items-center justify-center rounded bg-gold px-7 py-3.5 text-[15px] font-medium text-white shadow-md transition hover:bg-gold-deep"
              >
                Watch Video 1 →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg">
        <div className="mx-auto max-w-widest px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">The lessons</span>
              <h2 className="mt-3 font-serif text-[clamp(28px,5vw,42px)] text-ink">
                The <em>video series</em>
              </h2>
              <div className="gold-line mt-6" />
            </div>
          </Reveal>

          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {EP_COURSE.map((l) => (
              <Reveal key={l.slug}>
                <Link
                  href={`/ep/${l.slug}`}
                  className="group flex h-full flex-col rounded-md border border-ink/10 bg-white p-7 shadow-sm transition hover:border-teal/40 hover:shadow-md"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-serif text-[36px] leading-none text-gold">
                      {String(l.number).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-teal">
                      Video
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-[20px] leading-[1.3] text-ink group-hover:text-teal">
                    {l.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[14.5px] leading-[1.7] text-ink2">{l.subtitle}</p>
                  <div className="mt-5 text-[12px] font-medium text-teal">Watch →</div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-teal text-white">
        <div className="mx-auto max-w-wide px-6 py-20 text-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(28px,5vw,42px)]">
              Want to go <em className="text-gold-lt">deeper?</em>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[16px] leading-[1.7] text-white/85">
              The full Spiritual Life Coach Certification builds out the inner work, the coaching
              craft, and the business systems that turn this series into a livelihood.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link href="/brochure-download" className="btn-gold">
                Download Free Brochure
              </Link>
              <Link href="/schedule" className="btn-ghost-teal !border-white !text-white hover:!bg-white hover:!text-teal">
                Book a Discovery Call
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
