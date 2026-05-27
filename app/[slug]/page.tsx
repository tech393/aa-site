import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import MarkdownBody from "@/components/MarkdownBody";
import {
  getAllBlogSlugs,
  getAllProgramSlugs,
  getBlogPost,
  getProgramPage,
} from "@/lib/content";
import { SITE } from "@/lib/site-config";

export async function generateStaticParams() {
  return [
    ...getAllBlogSlugs().map((slug) => ({ slug })),
    ...getAllProgramSlugs().map((slug) => ({ slug })),
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  const program = getProgramPage(slug);
  const content = post || program;
  if (!content) return {};
  const description = post?.description || `${content.title}, Awakened Academy`;
  return {
    title: `${content.title} - Awakened Academy®`,
    description,
    alternates: { canonical: `/${slug}` },
    openGraph: {
      title: content.title,
      description,
      url: `${SITE.url}/${slug}`,
      type: post ? "article" : "website",
      images: content.hero_image ? [{ url: `${SITE.url}${content.hero_image}` }] : undefined,
    },
  };
}

export default async function ContentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (post) return <BlogPostView post={post} />;
  const program = getProgramPage(slug);
  if (program) return <ProgramPageView program={program} />;
  notFound();
}

// Split the article body at the H2 heading nearest the midpoint so the free-gifts
// CTA can sit mid-article. Returns [top, bottom]; bottom is "" when the post is too
// short to split cleanly (the CTA then falls after the body).
function splitBodyAtMiddle(body: string): [string, string] {
  const lines = body.split("\n");
  const headings: number[] = [];
  let inFence = false;
  for (let i = 0; i < lines.length; i++) {
    if (/^```/.test(lines[i])) inFence = !inFence;
    if (!inFence && /^##\s+/.test(lines[i])) headings.push(i);
  }
  const candidates = headings.filter((i) => i > 0);
  if (candidates.length === 0) return [body, ""];
  const mid = lines.length / 2;
  let best = candidates[0];
  for (const i of candidates) {
    if (Math.abs(i - mid) < Math.abs(best - mid)) best = i;
  }
  return [lines.slice(0, best).join("\n"), lines.slice(best).join("\n")];
}

function BlogPostView({ post }: { post: ReturnType<typeof getBlogPost> & {} }) {
  const [bodyTop, bodyBottom] = splitBodyAtMiddle(post.body);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: post.hero_image ? `${SITE.url}${post.hero_image}` : undefined,
    author: { "@type": "Person", name: post.author, url: `${SITE.url}/about/michael-mackintosh` },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: `${SITE.url}/images/logo-white.png` },
    },
    datePublished: post.date || undefined,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE.url}/${post.slug}` },
  };

  const authorInitials = post.author
    .split(" ")
    .map((w) => w[0])
    .filter(Boolean)
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article className="bg-bg pb-16 pt-12 md:pb-20">
        <div className="mx-auto max-w-[760px] px-6">
          {/* HERO IMAGE, 16:9 at top of article, no text overlay */}
          {post.hero_image && (
            <Reveal>
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-md shadow-sm">
                <Image
                  src={post.hero_image}
                  alt={post.title}
                  fill
                  priority
                  sizes="(min-width: 768px) 760px, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          )}

          {/* CATEGORY EYEBROW */}
          <div className="mt-10 text-center">
            <Reveal>
              <span className="eyebrow">Article</span>
            </Reveal>
          </div>

          {/* TITLE */}
          <Reveal>
            <h1 className="mt-5 text-center font-serif text-[clamp(32px,5.2vw,52px)] leading-[1.08] tracking-[-0.02em] text-ink">
              {post.title}
            </h1>
          </Reveal>

          {/* SUBTITLE / DEK */}
          {post.description && (
            <Reveal>
              <p className="mx-auto mt-5 max-w-[56ch] text-center font-serif text-[clamp(18px,2.4vw,22px)] font-light italic leading-[1.45] text-ink2">
                {post.description}
              </p>
            </Reveal>
          )}

          {/* BYLINE STRIP */}
          <Reveal>
            <div className="mx-auto mt-9 flex max-w-[62ch] items-center gap-4 border-y border-ink/10 py-5">
              <Link href="/about/michael-mackintosh" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-deep text-[15px] font-semibold text-white">
                {authorInitials}
              </Link>
              <div className="flex-1 min-w-0">
                <Link href="/about/michael-mackintosh" className="block text-[15px] font-semibold text-ink hover:text-teal">
                  {post.author}
                </Link>
                <div className="text-[13px] text-ink2">
                  Founder · Awakened Academy
                  {post.date && (
                    <>
                      <span className="mx-1.5 text-ink2/60">·</span>
                      <time>{post.date}</time>
                    </>
                  )}
                </div>
              </div>
              <Link
                href="/spiritual-life-coach-certification"
                className="hidden rounded border border-teal px-4 py-2 text-[13px] font-medium text-teal transition hover:bg-teal hover:text-white sm:inline-block"
              >
                Get certified
              </Link>
            </div>
          </Reveal>

          {/* BODY, top half (drop cap on first paragraph) */}
          <div className="mt-10 has-drop-cap">
            <MarkdownBody>{bodyTop}</MarkdownBody>
          </div>

          {/* FREE GIFTS CTA, placed mid-article */}
          <Reveal>
            <div className="mx-auto my-14 flex max-w-[62ch] flex-col items-center gap-5 rounded-md border border-gold/30 bg-gradient-to-br from-gold/10 to-warm p-7 text-center sm:flex-row sm:text-left">
              <div className="flex-1">
                <span className="eyebrow">Free gifts for you</span>
                <h3 className="mt-2 font-serif text-[clamp(20px,2.6vw,24px)] leading-[1.25] text-ink">
                  Free guided meditations &amp; soul-purpose guides
                </h3>
                <p className="mt-2 text-[14.5px] leading-[1.6] text-ink2">
                  A handpicked collection to help you uncover your purpose and begin the inner work. Free, no cost.
                </p>
              </div>
              <Link href="/free-gifts-for-you" className="btn-teal shrink-0">Get your free gifts</Link>
            </div>
          </Reveal>

          {/* BODY, bottom half */}
          {bodyBottom && (
            <div>
              <MarkdownBody>{bodyBottom}</MarkdownBody>
            </div>
          )}

          {/* INLINE CTA, mid-article style break-out card */}
          <Reveal>
            <div className="mx-auto mt-16 max-w-[62ch] rounded-md border border-teal/30 bg-gradient-to-br from-teal/5 to-gold/10 p-8 text-center">
              <span className="eyebrow">Want to learn more?</span>
              <h3 className="mt-3 font-serif text-[clamp(22px,3vw,28px)] leading-[1.25] text-ink">
                Become a certified spiritual life coach with <em>Awakened Academy</em>
              </h3>
              <p className="mx-auto mt-4 max-w-md text-[15px] leading-[1.65] text-ink2">
                Download the brochure or book a free discovery call to see if the certification is the right next step.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <Link href="/download-free-brochure" className="btn-teal">Download Free Brochure</Link>
                <Link href="/schedule" className="btn-ghost-teal">Book a Discovery Call</Link>
              </div>
            </div>
          </Reveal>

          {/* AUTHOR BIO BLOCK */}
          <Reveal>
            <div className="mx-auto mt-14 flex max-w-[62ch] items-start gap-5 rounded-md border border-ink/10 bg-warm p-6 md:p-7">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-deep text-[26px] font-semibold text-white">
                {authorInitials}
              </div>
              <div className="flex-1">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-deep">
                  Written by
                </div>
                <h4 className="mt-2 font-serif text-[22px] leading-[1.2] text-ink">{post.author}</h4>
                <p className="mt-2 text-[15px] leading-[1.55] text-ink2">
                  Founder of Awakened Academy. Certifying spiritual coaches since 2012. Pioneering spiritual life coaching since 2004. Host of <em>Your Wish Fulfilled</em> and <em>Don't Die With Your Song Inside</em>.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link href="/about/michael-mackintosh" className="rounded bg-teal px-4 py-2 text-[13px] font-medium text-white transition hover:bg-teal-deep">
                    Read full bio
                  </Link>
                  <Link href="/schedule" className="rounded border border-teal px-4 py-2 text-[13px] font-medium text-teal transition hover:bg-teal hover:text-white">
                    Book a call
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </article>

      <BlogFooter currentSlug={post.slug} />
    </>
  );
}

function ProgramPageView({ program }: { program: ReturnType<typeof getProgramPage> & {} }) {
  return (
    <>
      {/* HERO */}
      {program.hero_image ? (
        <section className="relative isolate w-full overflow-hidden">
          <Image src={program.hero_image} alt={program.title} fill priority className="-z-10 object-cover object-center" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/25 to-black/55" />
          <div className="mx-auto max-w-wide px-6 py-24 text-center text-white md:py-28">
            <Reveal>
              <span className="eyebrow !text-gold-lt">Awakened Academy</span>
              <h1 className="mt-4 font-serif text-[clamp(32px,6vw,52px)] font-light leading-[1.15]">
                {program.title}
              </h1>
              {program.primary_cta && (
                <div className="mt-9">
                  <Link
                    href={program.primary_cta.destination.startsWith("http") ? program.primary_cta.destination : "/schedule"}
                    className="inline-block rounded bg-gold px-7 py-3.5 text-[13px] font-medium text-white transition hover:bg-gold-dark"
                  >
                    {program.primary_cta.label}
                  </Link>
                </div>
              )}
            </Reveal>
          </div>
        </section>
      ) : (
        <section className="bg-warm">
          <div className="mx-auto max-w-wide px-6 py-20 text-center">
            <Reveal>
              <h1 className="font-serif text-[clamp(32px,6vw,52px)] font-light leading-[1.15] text-ink">{program.title}</h1>
            </Reveal>
          </div>
        </section>
      )}

      {/* BODY */}
      <section className="bg-bg">
        <div className="mx-auto max-w-wide px-6 py-16">
          <MarkdownBody>{program.body}</MarkdownBody>

          {/* CTA */}
          <Reveal>
            <div className="mt-16 flex flex-wrap justify-center gap-4">
              <Link href="/download-free-brochure" className="btn-teal">Download Free Brochure</Link>
              <Link href="/schedule" className="btn-ghost-teal">Book a Discovery Call</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function BlogFooter({ currentSlug }: { currentSlug: string }) {
  const all = getAllBlogSlugs().filter((s) => s !== currentSlug);
  const related = all.slice(0, 3).map((slug) => getBlogPost(slug)).filter((p) => p) as NonNullable<ReturnType<typeof getBlogPost>>[];
  return (
    <section className="bg-warm">
      <div className="mx-auto max-w-widest px-6 py-16">
        <Reveal>
          <div className="text-center">
            <span className="eyebrow">Keep Reading</span>
            <h3 className="mt-3 font-serif text-[clamp(22px,3vw,28px)] font-light text-ink">More from the <em>Awakened Academy</em> blog</h3>
            <div className="gold-line mt-5" />
          </div>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {related.map((p) => (
            <Reveal key={p.slug}>
              <Link href={`/${p.slug}`} className="group block h-full rounded-md border border-ink/10 bg-white p-6 shadow-sm transition hover:border-teal/40 hover:shadow-md">
                {p.hero_image && (
                  <div className="relative aspect-[16/10] overflow-hidden rounded">
                    <Image src={p.hero_image} alt={p.title} fill className="object-cover" />
                  </div>
                )}
                <h4 className="mt-4 font-serif text-[17px] leading-tight text-ink group-hover:text-teal">{p.title}</h4>
                <div className="mt-4 text-[12px] font-medium text-teal">Read article →</div>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/blog" className="btn-ghost-teal">All Articles →</Link>
        </div>
      </div>
    </section>
  );
}
