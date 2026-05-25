import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { DHARMA_COURSE } from "@/lib/dharma-course";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: { absolute: "Discover Your Dharma Course, Free 8-Lesson Series | Awakened Academy" },
  description:
    "The original Discover Your Dharma video course from Michael Mackintosh. 5 video lessons + 3 written deep-dives. Uncover your life's purpose and success will follow you.",
  alternates: { canonical: "/dharma/course" },
  openGraph: {
    title: "Discover Your Dharma Course, Free 8-Lesson Series",
    description:
      "5 video lessons + 3 written deep-dives. Uncover your life's purpose and success will follow you.",
    url: `${SITE.url}/dharma/course`,
  },
};

export default function DharmaCoursePage() {
  return (
    <>
      <section className="relative isolate w-full overflow-hidden">
        <Image
          src="/images/golden-light.jpg"
          alt="Golden sunlight"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/55 via-black/40 to-black/65" />
        <div className="mx-auto max-w-widest px-6 py-24 text-center text-white md:py-32">
          <Reveal>
            <span className="eyebrow !text-gold-lt">The free 8-lesson course</span>
            <h1 className="hero-text mt-4 font-serif text-[clamp(34px,6vw,60px)] leading-[1.05]">
              Discover Your <em>Dharma</em>
            </h1>
            <p className="hero-text mx-auto mt-7 max-w-2xl text-[clamp(15px,2vw,18px)] leading-[1.7] text-white/95">
              The original course from Michael Mackintosh, recovered from the archive. 5 video
              lessons + 3 written deep-dives on uncovering your true life's path.
            </p>
            <div className="mt-9">
              <Link
                href={`/dharma/${DHARMA_COURSE[0].slug}`}
                className="inline-flex items-center justify-center rounded bg-gold px-7 py-3.5 text-[15px] font-medium text-white shadow-md transition hover:bg-gold-deep"
              >
                Start with Lesson 1, Why Dharma →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg">
        <div className="mx-auto max-w-widest px-6 py-20">
          <Reveal>
            <div className="text-center">
              <span className="eyebrow">The 8 lessons</span>
              <h2 className="mt-3 font-serif text-[clamp(28px,5vw,42px)] text-ink">
                The full <em>course path</em>
              </h2>
              <div className="gold-line mt-6" />
            </div>
          </Reveal>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {DHARMA_COURSE.map((l) => (
              <Reveal key={l.slug}>
                <Link
                  href={`/dharma/${l.slug}`}
                  className="group flex h-full flex-col rounded-md border border-ink/10 bg-white p-6 shadow-sm transition hover:border-teal/40 hover:shadow-md"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-serif text-[28px] leading-none text-gold">
                      {String(l.number).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-teal">
                      {l.vimeoId ? "Video" : "Written"}
                    </span>
                  </div>
                  <h3 className="mt-4 font-serif text-[18px] leading-[1.3] text-ink group-hover:text-teal">
                    {l.title}
                  </h3>
                  {l.subtitle && (
                    <p className="mt-3 flex-1 text-[14px] leading-[1.65] text-ink2">{l.subtitle}</p>
                  )}
                  <div className="mt-5 text-[12px] font-medium text-teal">
                    {l.vimeoId ? "Watch" : "Read"} →
                  </div>
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
              Want to go <em className="text-gold-lt">deeper</em> than the course?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[16px] leading-[1.7] text-white/85">
              The Awakened Academy Spiritual Life Coach Certification is the full path,
              ten years of dharma teaching distilled into a complete training and business.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link href="/download-free-brochure" className="btn-gold">
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
