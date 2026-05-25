import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { getAllBlogPosts } from "@/lib/content";
import { SITE } from "@/lib/site-config";

export const metadata: Metadata = {
  title: { absolute: "Spiritual Coaching Blog | Awakened Academy" },
  description:
    "Articles on spiritual life coaching, awakening, dharma, and the inner work of being a spiritual leader. By Michael Mackintosh and the AA team.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Spiritual Coaching Blog | Awakened Academy",
    description: "Articles on spiritual life coaching, awakening, dharma, and the inner work of being a spiritual leader. By Michael Mackintosh and the AA team.",
    url: `${SITE.url}/blog`,
  },
};

export default function BlogIndexPage() {
  const posts = getAllBlogPosts();
  return (
    <>
      {/* HERO */}
      <section className="relative isolate w-full overflow-hidden">
        <Image src="/images/golden-light.jpg" alt="Golden light" fill priority className="-z-10 object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/25 to-black/55" />
        <div className="mx-auto max-w-widest px-6 py-24 text-center text-white md:py-28">
          <Reveal>
            <span className="eyebrow !text-gold-lt">Blog</span>
            <h1 className="mt-4 font-serif text-[clamp(32px,5.5vw,52px)] font-light leading-[1.15]">
              Articles on the <em className="text-gold-lt">spiritual coaching life</em>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-[clamp(15px,2vw,18px)] leading-[1.7] text-white/95 drop-shadow">
              Writing on spiritual life coaching, awakening, dharma, sacred business, and the inner work
              of being a spiritual leader, by Michael Mackintosh and the Awakened Academy team.
            </p>
          </Reveal>
        </div>
      </section>

      {/* POSTS GRID */}
      <section className="bg-bg">
        <div className="mx-auto max-w-widest px-6 py-20">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-[clamp(22px,3vw,28px)] font-light text-ink">From the blog</h2>
          </div>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <Reveal key={p.slug}>
                <Link
                  href={`/${p.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-md border border-ink/10 bg-white shadow-sm transition hover:border-teal/40 hover:shadow-md"
                >
                  {p.hero_image && (
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image src={p.hero_image} alt={p.title} fill className="object-cover transition group-hover:scale-105" />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="font-serif text-[18px] leading-[1.3] text-ink group-hover:text-teal">{p.title}</h2>
                    {p.description && (
                      <p className="mt-3 line-clamp-3 flex-1 text-[14px] leading-[1.6] text-ink2">{p.description}</p>
                    )}
                    <div className="mt-5 flex items-center justify-between text-[11.5px]">
                      <span className="text-soft">{p.author}</span>
                      <span className="text-teal">Read →</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal text-white">
        <div className="mx-auto max-w-wide px-6 py-20 text-center">
          <Reveal>
            <h2 className="font-serif text-[clamp(28px,5vw,42px)] font-light">
              Reading is just the <em className="text-gold-lt">starting point</em>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[16px] leading-[1.7] text-white/85">
              If our writing has resonated, the next step is the certification, the full path to
              becoming a working spiritual coach.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link href="/brochure-download" className="inline-block rounded bg-gold px-7 py-3.5 text-[13px] font-medium text-white transition hover:bg-gold-dark">Download Free Brochure</Link>
              <Link href="/schedule" className="inline-block rounded border-2 border-white px-7 py-3 text-[13px] font-medium text-white transition hover:bg-white hover:text-teal">Book a Discovery Call</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
