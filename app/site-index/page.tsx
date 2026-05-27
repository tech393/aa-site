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
  const liveSections = sections.filter((s) => !s.pending);
  const pendingSections = sections.filter((s) => s.pending);
  const pendingTotal = pendingSections.reduce((sum, s) => sum + s.links.length, 0);

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
          <span className="font-medium text-ink">{total} pages live.</span>
          {pendingTotal > 0 && (
            <>
              {" "}
              <span className="font-medium text-ink">{pendingTotal} pending</span> from
              the WordPress migration — see bottom of page.
            </>
          )}
        </p>

        <div className="mt-12 grid gap-x-12 gap-y-12 md:grid-cols-2">
          {liveSections.map((section) => (
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

        {pendingSections.length > 0 && (
          <div className="mt-20 border-t border-ink2/15 pt-12">
            <span className="eyebrow text-gold">Pending Migration</span>
            <h2 className="mt-3 font-serif text-[clamp(22px,3.5vw,32px)] font-light leading-[1.15] text-ink">
              Still to bring over from the old WordPress site
            </h2>
            <p className="mt-3 max-w-reading text-[14px] leading-[1.7] text-ink2">
              Cross-checked against the SiteSucker extract in{" "}
              <code className="text-[12px]">
                /dan-package/DAN-PACKAGE/EXTRACTED-CONTENT/
              </code>
              . Excluded on purpose: spam doorways (modafinil), off-brand legacy posts
              (Whole Foods, vegetarian-bulletproof-diet), and dated posts already
              superseded by 2026 versions. When an item ships, it falls off this list
              automatically.
            </p>

            <div className="mt-10 grid gap-x-12 gap-y-12 md:grid-cols-2">
              {pendingSections.map((section) => (
                <div key={section.title}>
                  <h3 className="font-serif text-[18px] font-light text-ink">
                    {section.title}{" "}
                    <span className="text-[14px] text-ink2/70">
                      ({section.links.length})
                    </span>
                  </h3>
                  {section.note && (
                    <p className="mt-1 text-[13px] text-ink2/70">{section.note}</p>
                  )}
                  <ul className="mt-4 space-y-1.5">
                    {section.links.map((link) => {
                      const [label, source] = link.label.split("  ·  ");
                      return (
                        <li key={link.href} className="text-[14px]">
                          <span className="text-ink2">{label}</span>
                          <span className="ml-2 text-[12px] text-ink2/50">
                            → would live at {link.href}
                          </span>
                          {source && (
                            <div className="mt-0.5 text-[11px] text-ink2/40">
                              <code>{source}</code>
                            </div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
