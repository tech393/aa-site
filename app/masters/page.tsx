import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EssayLayout from "@/components/EssayLayout";
import { getEssay } from "@/lib/essays";
import { SITE } from "@/lib/site-config";

const SLUG = "masters";
const TITLE = "The Masters Series | ICF Certification vs Spiritual Coaching";
const DESC = "What ICF certification actually is, what it isn't, and what matters for transformational spiritual coaching. From Awakened Academy.";

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
  const PREV = undefined;
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
      <EssayLayout essay={essay} prev={PREV} next={NEXT} />
    </>
  );
}
