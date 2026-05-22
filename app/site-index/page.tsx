import type { Metadata } from "next";
import Link from "next/link";
import { buildSiteMap } from "@/lib/site-map";

// Hidden internal page: not linked in nav/footer, excluded from the XML
// sitemap, and noindex'd + Disallow'd in robots.txt. It exists only so the
// team can see every page the site ships at a glance.
export const metadata: Metadata = {
  title: { absolute: "Site Index (internal)" },
  robots: { index: false, follow: false, nocache: true },
};

export default function SiteIndexPage() {
  const { sections, total } = buildSiteMap();

  return (
    <section className="bg-bg">
      <div className="mx-auto max-w-wide px-6 py-20">
        <span className="eyebrow">Internal</span>
        <h1 className="mt-3 font-serif text-[clamp(28px,4.5vw,44px)] font-light leading-[1.1] text-ink">
          Site Index
        </h1>
        <p className="mt-4 max-w-reading text-[16px] leading-[1.8] text-ink2">
          Every page this site ships, auto-generated at build time from the real
          routing tree and content files. This page is hidden from search engines
          and not linked anywhere public.{" "}
          <span className="font-medium text-ink">{total} pages total.</span>
        </p>

        <div className="mt-12 grid gap-x-12 gap-y-12 md:grid-cols-2">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-serif text-[20px] font-light text-ink">
                {section.title}{" "}
                <span className="text-[14px] text-ink2/70">({section.links.length})</span>
              </h2>
              {section.note && (
                <p className="mt-1 text-[13px] text-ink2/70">{section.note}</p>
              )}
              <ul className="mt-4 space-y-1.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-teal underline-offset-2 hover:underline"
                    >
                      {link.label}
                    </Link>
                    <span className="ml-2 text-[12px] text-ink2/50">{link.href}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
