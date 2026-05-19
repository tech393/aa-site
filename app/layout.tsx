import type { Metadata } from "next";
import Script from "next/script";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { GHL, SITE } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Become a certified spiritual life coach. Train with Awakened Academy, pioneering spiritual life coaching since 2004.",
  openGraph: {
    title: SITE.name,
    description: SITE.tagline,
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.tagline,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: { icon: "/icon.png" },
  // Google Search Console domain verification, set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION env var in Vercel
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION && {
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  }),
};

// GA4 Measurement ID, set NEXT_PUBLIC_GA_ID env var in Vercel (format: G-XXXXXXXXXX)
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: SITE.name,
  alternateName: "Awakened Academy",
  url: SITE.url,
  logo: `${SITE.url}/images/logo-white.png`,
  description: SITE.founded.statement,
  foundingDate: String(SITE.founded.institute),
  founders: [
    { "@type": "Person", name: SITE.founders.primary, url: `${SITE.url}/about` },
    { "@type": "Person", name: SITE.founders.secondary, url: `${SITE.url}/about` },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "PO BOX 441",
    addressLocality: "Sedona",
    addressRegion: "AZ",
    postalCode: "86336",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: SITE.phone,
    email: SITE.email,
    contactType: "customer service",
    availableLanguage: ["English"],
  },
  sameAs: [
    "https://insighttimer.com/michaelmackintosh",
    "https://insighttimer.com/ariellehecht",
    "https://insighttimer.com/awakenedacademy",
    "https://podcasts.apple.com/us/podcast/spiritual-recharge-meditations-and-talks-to-recharge/id1580259632",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: SITE.url,
  publisher: { "@type": "Organization", name: SITE.name },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT,WONK@0,9..144,300..900,0..100,0..1;1,9..144,300..900,0..100,0..1&family=Inter:wght@300;400;500;600;700&family=Allison&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Script src={GHL.scriptUrl} strategy="afterInteractive" />
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
