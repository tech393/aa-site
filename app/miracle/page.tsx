/**
 * Awakened Academy, The Miracle Journal (bonus training delivery page).
 *
 * Route: /miracle
 *
 * Server component that owns SEO metadata + JSON-LD schema (Book + Course).
 * Interactive audio playback lives in MiracleClient.tsx so the metadata
 * export stays in a server file (Next 14 requirement).
 *
 * Rebuild of the WP /miracle page (extracted from
 * https://4ea5621ec44199858a125ea2f02cc024.wpxtemp.com/miracle/).
 *
 * Page purpose: bonus content delivery for buyers of The Miracle Journal
 * (Michael's Amazon manifestation journal). Eight short audio trainings on
 * how to use the journal, plus one advanced Law of Attraction bonus audio,
 * the book cover with an Amazon link for new buyers, and a final cert CTA.
 *
 * 1:1 recreation. No invented copy, no added testimonials. Same words,
 * same sections, new styles.
 *
 * Brand tokens (Awakened Academy, from /DAN-PACKAGE/Brand-Tokens-Round1.md):
 *   teal #0F5F55, gold #C9A04C, cream #F2E8D5, cream-paper #FBF5E8,
 *   ink #2A1A0F, navy #0F1A38, rose #C47E7E, blush #F8DCDC, line 0.12.
 *   Display: Fraunces. Body: Inter 17px / 1.65. Allison script reserved
 *   for the single eyebrow accent (per brand rule, one Allison use per page).
 */

import type { Metadata } from 'next';
import MiracleClient from './MiracleClient';

export const metadata: Metadata = {
  title: 'The Miracle Journal, Sacred Bonus Manifestation Training | Awakened Academy',
  description:
    "Bonus audio trainings for buyers of The Miracle Journal by Michael Mackintosh. " +
    "Nine short, powerful teachings on accessing miracle consciousness and using the " +
    "journal to its full depth. Free access, lifetime.",
  alternates: { canonical: '/miracle' },
  openGraph: {
    title: 'The Miracle Journal, Sacred Bonus Manifestation Training',
    description:
      "Nine short audio trainings on accessing miracle consciousness and using The Miracle Journal to its full depth.",
    type: 'website',
    url: '/miracle'
  },
  robots: {
    // This is a bonus-buyer page; we still let it be indexed so people searching
    // "Miracle Journal" find the trainings (and the Amazon link for new buyers).
    index: true,
    follow: true
  }
};

export default function MiraclePage() {
  // JSON-LD: Book schema for the Miracle Journal + Course schema for the
  // bonus training series. Helps Google / Perplexity / ChatGPT cite this page
  // correctly when someone searches for the journal or its companion trainings.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Book',
        '@id': 'https://awakenedacademy.com/miracle#book',
        name: 'The Miracle Journal',
        author: { '@type': 'Person', name: 'Michael Mackintosh' },
        publisher: { '@type': 'Organization', name: 'Awakened Academy' },
        url: 'https://amzn.to/3ep1cKq',
        image:
          'https://awakenedacademy.com/img/miracle/Miracle-Journal.png',
        description:
          'A guided manifestation journal for accessing miracle consciousness and bringing your sacred intentions into form.'
      },
      {
        '@type': 'Course',
        '@id': 'https://awakenedacademy.com/miracle#course',
        name: 'Sacred Bonus Manifestation Training',
        description:
          'Nine short audio teachings on how to use The Miracle Journal, sacred intentions, gratitude, inspired action, weekly reflection, and the missing manifestation secret.',
        provider: { '@type': 'Organization', name: 'Awakened Academy', sameAs: 'https://awakenedacademy.com' },
        about: { '@id': 'https://awakenedacademy.com/miracle#book' },
        isAccessibleForFree: true,
        inLanguage: 'en'
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <MiracleClient />
    </>
  );
}
