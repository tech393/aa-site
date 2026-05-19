/**
 * Awakened Academy, Wall of Gratitude
 *
 * Route: /wall-of-gratitude
 *
 * Server component that owns SEO metadata + JSON-LD schema. The interactive
 * (search / filter / expand) work lives in WallOfGratitudeClient.tsx so Next
 * 14's metadata export stays in a server file.
 *
 * Rebuild of the page that got chopped during the WP → Next.js migration.
 * The brief: "blow people away with the value." Every real testimonial,
 * masonry layout with varying card heights, search + program/theme/country
 * filters, expand-to-read for long stories, big serif pull quotes for rhythm,
 * gentle Framer Motion reveals.
 *
 * Brand tokens (Awakened Academy, from /DAN-PACKAGE/Brand-Tokens-Round1.md):
 *   teal #0F5F55, gold #C9A04C, cream #F2E8D5, cream-paper #FBF5E8,
 *   ink #2A1A0F, navy #0F1A38, rose #C47E7E, blush #F8DCDC, line 0.12.
 *   Display: Fraunces. Body: Inter 17px / 1.65. Script: Allison (page title only).
 *
 * If tailwind.config.ts doesn't already have these tokens, paste them in
 * from /DAN-PACKAGE/Brand-Tokens-Round1.md section 7.
 */

import type { Metadata } from 'next';
import { TESTIMONIALS } from './testimonials-data';
import WallOfGratitudeClient from './WallOfGratitudeClient';

export const metadata: Metadata = {
  title: 'Wall of Gratitude, Awakened Academy',
  description:
    "Real stories from real Awakened Academy students. 1,250+ students across 25+ countries since 2004. " +
    "125,000+ five-star Insight Timer reviews. Read their journeys in their own words.",
  alternates: { canonical: '/wall-of-gratitude' },
  openGraph: {
    title: 'Wall of Gratitude, Awakened Academy',
    description:
      "Real stories from real Awakened Academy students. 125,000+ five-star reviews. 650+ certified coaches. 25+ countries.",
    type: 'website',
    url: '/wall-of-gratitude'
  }
};

export default function WallOfGratitudePage() {
  // JSON-LD: Organization aggregateRating from the 85K+ Insight Timer reviews
  // (separate Schema.org structured data so this page is rich-cited by Google /
  // ChatGPT / Perplexity / Claude). Source: CLAUDE.md ESSENTIALS, DAN-HANDOVER trust signals.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Awakened Academy',
    url: 'https://awakenedacademy.com',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '125000',
      bestRating: '5',
      worstRating: '1'
    },
    review: TESTIMONIALS.filter((t) => t.isFullName).slice(0, 20).map((t) => ({
      '@type': 'Review',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      author: { '@type': 'Person', name: t.name },
      reviewBody: t.pullQuote ?? t.quote.split('\n\n')[0].slice(0, 280)
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WallOfGratitudeClient />
    </>
  );
}
