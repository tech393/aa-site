import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EssayLayout from "@/components/EssayLayout";
import { getEssay } from "@/lib/essays";
import { SITE } from "@/lib/site-config";

const SLUG = "why-the-world-needs-you-part-3";
const TITLE = "Why The World Needs YOU (Part 3) | Awakened Academy";
const DESC = "Part 3, the role of conscious coaches in world transformation. Why now. What's required. By Michael Mackintosh.";

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
  const PREV = { slug: "why-the-world-needs-you-part-2", title: "Why The World Needs YOU (Part 2)" };
  const NEXT = undefined;
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
      <EssayLayout
        essay={essay}
        prev={PREV}
        next={NEXT}
        heroImage="/images/machu-picchu-sunset.jpg"
        heroEyebrow="The Foundational Essay · A Three-Part Series"
        series={{ part: 3, total: 3, label: "Leading the New Paradigm" }}
      />
    </>
  );
}
