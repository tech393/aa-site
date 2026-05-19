import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EssayLayout from "@/components/EssayLayout";
import { getEssay } from "@/lib/essays";
import { SITE } from "@/lib/site-config";

const SLUG = "why-the-world-needs-you-part-2";
const TITLE = "Why The World Needs YOU (Part 2) | Awakened Academy";
const DESC = "Part 2 of the foundational essay. Stop waiting for the government, non-profits, or activists. The world is waiting for you.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: { canonical: `/${SLUG}` },
  openGraph: {
    title: TITLE,
    description: DESC,
    url: `${SITE.url}/${SLUG}`,
    type: "article",
  },
};

export default function Page() {
  const essay = getEssay(SLUG);
  if (!essay) notFound();
  const PREV = { slug: "why-the-world-needs-you-part-1", title: "Why The World Needs YOU (Part 1)" };
  const NEXT = { slug: "why-the-world-needs-you-part-3", title: "Why The World Needs YOU (Part 3)" };
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: essay.title,
    description: essay.description,
    author: { "@type": "Person", name: essay.author, url: `${SITE.url}/about/michael-mackintosh` },
    publisher: { "@type": "Organization", name: SITE.name, logo: { "@type": "ImageObject", url: `${SITE.url}/images/logo-white.png` } },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE.url}/${SLUG}` },
    wordCount: essay.word_count,
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <EssayLayout essay={essay} prev={PREV} next={NEXT} />
    </>
  );
}
