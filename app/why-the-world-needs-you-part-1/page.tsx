import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EssayLayout from "@/components/EssayLayout";
import { getEssay } from "@/lib/essays";
import { SITE } from "@/lib/site-config";

const SLUG = "why-the-world-needs-you-part-1";
const TITLE = "Why The World Needs YOU (Part 1) | Awakened Academy";
const DESC = "Part 1 of Michael Mackintosh's foundational essay on why spiritual coaches are needed now. The transition from Kali Yuga to Sat Yuga.";

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
  const NEXT = { slug: "why-the-world-needs-you-part-2", title: "Why The World Needs YOU (Part 2)" };
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
        heroImage="/images/blog/spiritual-awakening-above-clouds.jpg"
        heroEyebrow="The Foundational Essay · A Three-Part Series"
        series={{ part: 1, total: 3, label: "The Times We're Living In" }}
      />
    </>
  );
}
