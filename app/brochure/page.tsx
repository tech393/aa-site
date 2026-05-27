import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: { absolute: "Download Free Brochure | Awakened Academy Certification" },
  description:
    "Get the full brochure on the Awakened Academy Spiritual Life Coach Certification. Curriculum, pricing, and what makes us different.",
  alternates: { canonical: "/brochure" },
  openGraph: { title: "Awakened Academy Brochure", description: "Download the full brochure, curriculum, tuition, and program details." },
};

const BROCHURE_PDF = "/downloads/awakened-academy-brochure.pdf";
const BROCHURE_PAGE_COUNT = 49;
const BROCHURE_PAGES = Array.from({ length: BROCHURE_PAGE_COUNT }, (_, i) =>
  `/images/brochure/page-${String(i + 1).padStart(2, "0")}.webp`,
);

export default function BrochurePage() {
  return (
    <>
      <section className="relative isolate w-full overflow-hidden">
        <Image
          src="/images/machu-picchu-sunset.jpg"
          alt="Machu Picchu at sunset"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/35 via-black/25 to-black/55" />

        <div className="mx-auto flex min-h-[78vh] max-w-widest items-center px-6 py-20 md:py-28">
          <div className="mx-auto w-full">
            <Reveal>
              <h1 className="text-center font-serif text-[clamp(34px,6vw,58px)] font-light leading-[1.1] text-gold-lt">
                Do spiritual work<br />
                <span className="text-gold">&amp; Create Abundance</span>
              </h1>
            </Reveal>

            <Reveal>
              <div className="mx-auto mt-14 max-w-xl">
                <div className="rounded-md bg-teal/90 p-8 text-center shadow-2xl backdrop-blur-sm md:p-10">
                  <h2 className="font-serif text-[clamp(22px,3vw,30px)] font-light leading-[1.2] text-white">
                    Download the Awakened Academy Brochure
                  </h2>
                  <p className="mt-4 text-[14px] leading-[1.7] text-white/90">
                    The full curriculum, tuition options, and how the certification program works,
                    delivered as a PDF.
                  </p>
                  <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                    <a
                      href={BROCHURE_PDF}
                      download
                      className="inline-block rounded bg-gold px-7 py-3.5 text-[13px] font-medium text-white transition hover:bg-gold-dark"
                    >
                      Download My Academy Brochure
                    </a>
                    <a
                      href="#read-brochure"
                      className="inline-block rounded border border-white/60 px-7 py-3.5 text-[13px] font-medium text-white transition hover:bg-white/10"
                    >
                      Read it here
                    </a>
                  </div>
                  <p className="mt-4 text-[11px] tracking-wide text-white/75">
                    PDF · ~14 MB · Updated 2026
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="read-brochure" className="w-full bg-teal-deep py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4">
          <Reveal>
            <div className="mb-10 text-center md:mb-14">
              <p className="text-[12px] uppercase tracking-[0.22em] text-gold/80">
                The Full Brochure
              </p>
              <h2 className="mt-3 font-serif text-[clamp(26px,4vw,42px)] font-light leading-[1.15] text-gold-lt">
                Read every page below
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[14px] leading-[1.7] text-white/70">
                All {BROCHURE_PAGE_COUNT} pages of the Awakened Academy brochure — curriculum,
                faculty, tuition, and what makes this certification different.
              </p>
            </div>
          </Reveal>

          <div className="space-y-5 md:space-y-7">
            {BROCHURE_PAGES.map((src, i) => (
              <figure
                key={src}
                className="relative overflow-hidden rounded-sm bg-black shadow-2xl ring-1 ring-white/10"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`Awakened Academy brochure — page ${i + 1} of ${BROCHURE_PAGE_COUNT}`}
                  width={1268}
                  height={980}
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className="block h-auto w-full"
                />
                <figcaption className="absolute bottom-2 right-3 rounded bg-black/55 px-2 py-0.5 text-[10px] tracking-wide text-white/70">
                  {i + 1} / {BROCHURE_PAGE_COUNT}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-14 text-center">
            <a
              href={BROCHURE_PDF}
              download
              className="inline-block rounded bg-gold px-8 py-3.5 text-[13px] font-medium text-black transition hover:bg-gold-lt"
            >
              Download the PDF
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
