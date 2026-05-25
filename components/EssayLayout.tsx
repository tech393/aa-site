import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import MarkdownBody from "@/components/MarkdownBody";
import { type Essay } from "@/lib/essays";
import { SITE } from "@/lib/site-config";

type NavLink = { slug: string; title: string };
type Props = {
  essay: Essay;
  prev?: NavLink;
  next?: NavLink;
};

export default function EssayLayout({ essay, prev, next }: Props) {
  // Show TOC when there are >=3 H2 entries; truncate to first 12 if too many
  const showToc = essay.toc_h2s.length >= 3;
  const tocItems = essay.toc_h2s.slice(0, 12);
  const tocTruncated = essay.toc_h2s.length > 12;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      { "@type": "ListItem", position: 2, name: "Essays", item: `${SITE.url}/blog` },
      { "@type": "ListItem", position: 3, name: essay.title, item: `${SITE.url}/${essay.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section className="relative isolate w-full overflow-hidden">
        <Image src="/images/golden-light.jpg" alt="" fill priority className="-z-10 object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/55 via-black/40 to-black/65" />
        <div className="mx-auto max-w-wide px-6 py-24 text-center text-white md:py-28">
          <Reveal>
            <span className="eyebrow !text-gold-lt">Cornerstone Essay</span>
            <h1 className="mt-4 font-serif text-[clamp(28px,5vw,52px)] font-light leading-[1.1]">
              {essay.title}
            </h1>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[12.5px] text-white/85">
              <span>
                By{" "}
                <Link href="/about/michael-mackintosh" className="underline-offset-4 hover:underline">
                  {essay.author}
                </Link>
              </span>
              <span>·</span>
              <span>{essay.reading_time} min read</span>
              <span>·</span>
              <span>{essay.word_count.toLocaleString()} words</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TOC */}
      {showToc && (
        <section className="bg-warm">
          <div className="mx-auto max-w-wide px-6 py-10">
            <Reveal>
              <div className="rounded-md border border-ink/10 bg-white p-6 shadow-sm md:p-8">
                <div className="text-[11px] uppercase tracking-[0.2em] text-teal">In this essay</div>
                <ol className="mt-4 list-decimal space-y-2 pl-5 text-[15px] leading-[1.6] text-ink2 marker:text-gold">
                  {tocItems.map((h, i) => (
                    <li key={i} className="font-serif italic">{h}</li>
                  ))}
                </ol>
                {tocTruncated && (
                  <p className="mt-4 text-[12px] italic text-ink2/70">
                    + {essay.toc_h2s.length - 12} more sections below
                  </p>
                )}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* BODY, no Reveal wrapper; long essays are taller than the IntersectionObserver threshold can detect */}
      <section className="bg-bg">
        <div className="mx-auto max-w-reading px-6 py-16 md:py-20">
          <MarkdownBody>{essay.body}</MarkdownBody>
        </div>
      </section>

      {/* INTER-ESSAY NAV */}
      {(prev || next) && (
        <section className="bg-bg">
          <div className="mx-auto max-w-wide px-6 pb-16">
            <Reveal>
              <div className="flex flex-col gap-4 border-t border-ink/10 pt-8 sm:flex-row sm:items-stretch sm:justify-between">
                {prev ? (
                  <Link href={`/${prev.slug}`} className="group flex-1 rounded-md border border-ink/10 bg-white p-5 shadow-sm transition hover:border-teal/40 hover:shadow-md">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-teal">← Previous</div>
                    <div className="mt-2 font-serif text-[18px] leading-[1.3] text-ink group-hover:text-teal">{prev.title}</div>
                  </Link>
                ) : <div className="flex-1" />}
                {next ? (
                  <Link href={`/${next.slug}`} className="group flex-1 rounded-md border border-ink/10 bg-white p-5 text-right shadow-sm transition hover:border-teal/40 hover:shadow-md">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-teal">Next →</div>
                    <div className="mt-2 font-serif text-[18px] leading-[1.3] text-ink group-hover:text-teal">{next.title}</div>
                  </Link>
                ) : <div className="flex-1" />}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* AUTHOR BIO */}
      <section className="bg-warm">
        <div className="mx-auto max-w-wide px-6 py-16">
          <Reveal>
            <div className="grid items-center gap-8 md:grid-cols-[160px_1fr]">
              <Link href="/about/michael-mackintosh" className="block">
                <div className="relative aspect-square w-40 overflow-hidden rounded-full shadow-xl">
                  <Image src="/images/michael-beach.jpg" alt="Michael Mackintosh" fill className="object-cover" sizes="160px" />
                </div>
              </Link>
              <div>
                <span className="eyebrow">About the Author</span>
                <h2 className="mt-2 font-serif text-[clamp(22px,3vw,28px)] font-light text-ink">
                  <Link href="/about/michael-mackintosh" className="hover:text-teal">Michael Mackintosh</Link>
                </h2>
                <p className="mt-4 text-[15.5px] leading-[1.8] text-ink2">
                  Pioneering spiritual life coaching since 2004. Founder of Awakened Academy. 28 years of personal practice.
                  Bestselling author and mentor to awakened entrepreneurs in 25+ countries. Every certification
                  student receives 1-on-1 access to Michael as part of the program.
                </p>
                <Link href="/about/michael-mackintosh" className="mt-5 inline-block text-[12px] text-teal underline-offset-4 hover:underline">
                  Read the full bio →
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal text-white">
        <div className="mx-auto max-w-wide px-6 py-20 text-center">
          <Reveal>
            <span className="eyebrow !text-gold-lt">If This Resonates</span>
            <h2 className="mt-4 font-serif text-[clamp(28px,5vw,42px)] font-light leading-[1.15]">
              Become a certified <em className="text-gold-lt">spiritual life coach</em>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[16px] leading-[1.75] text-white/90">
              If you feel called to do this work, the next step is the Awakened Academy Spiritual Life Coach
              Certification. 14 transformation modules. 650+ certified coaches in 25+ countries. 1-on-1 access to Michael.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link href="/download-free-brochure" className="inline-block rounded bg-gold px-7 py-3.5 text-[13px] font-medium text-white transition hover:bg-gold-dark">
                Download Free Brochure
              </Link>
              <Link href="/schedule" className="inline-block rounded border-2 border-white px-7 py-3 text-[13px] font-medium text-white transition hover:bg-white hover:text-teal">
                Book a Discovery Call
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
