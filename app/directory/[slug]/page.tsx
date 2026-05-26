import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { coaches, DIRECTORY_CATEGORIES } from "@/lib/coaches";
import { SITE } from "@/lib/site-config";
import CoachImage from "@/components/CoachImage";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return coaches.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const coach = coaches.find((c) => c.slug === slug);
  if (!coach) return {};
  const description = coach.bio
    ? coach.bio.slice(0, 155).replace(/\n/g, " ") + "…"
    : `${coach.name} is a certified spiritual life coach listed in the Awakened Academy directory.`;
  return {
    title: { absolute: `${coach.name} | Awakened Academy Coach Directory` },
    description,
    alternates: { canonical: `/directory/${coach.slug}` },
    openGraph: {
      title: `${coach.name} | Awakened Academy Coach Directory`,
      description,
      url: `${SITE.url}/directory/${coach.slug}`,
    },
  };
}

function categoryLabel(s: string) {
  return DIRECTORY_CATEGORIES.find((c) => c.value === s)?.label ?? s;
}

export default async function CoachProfilePage({ params }: Props) {
  const { slug } = await params;
  const coach = coaches.find((c) => c.slug === slug);
  if (!coach) notFound();

  const bioParagraphs = coach.bio ? coach.bio.split("\n\n").filter(Boolean) : [];

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-plum text-white/70 text-[12.5px]">
        <div className="mx-auto flex max-w-widest items-center gap-2 px-6 py-2.5">
          <Link href="/" className="hover:text-gold-light transition">Home</Link>
          <span className="text-white/30">/</span>
          <Link href="/directory" className="hover:text-gold-light transition">Directory</Link>
          <span className="text-white/30">/</span>
          <span className="text-white/90">{coach.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section
        className="relative overflow-hidden bg-teal text-white"
        style={
          coach.imageUrl
            ? { backgroundImage: `url(${coach.imageUrl})`, backgroundSize: "cover", backgroundPosition: "center" }
            : undefined
        }
      >
        <div className="absolute inset-0 bg-gradient-to-r from-teal/95 via-teal/80 to-teal/60" />

        <div className="relative mx-auto max-w-widest px-6 py-16 md:py-20">
          <div className="max-w-xl">
            <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold-light mb-4">
              Awakened Academy · Certified Coach
            </div>
            <h1 className="font-serif text-[clamp(28px,5vw,48px)] font-light leading-[1.1]">
              {coach.name}
              {coach.tier === "premium" && (
                <span className="ml-3 align-middle rounded bg-gold px-2.5 py-0.5 text-[12px] font-semibold text-white">
                  ★ Featured
                </span>
              )}
            </h1>
            {coach.location && (
              <p className="mt-3 flex items-center gap-2 text-white/75 text-[15px]">
                <svg className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {coach.location}
              </p>
            )}
            {coach.categories.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {coach.categories.map((cat) => (
                  <span
                    key={cat}
                    className="rounded bg-white/15 px-3 py-1 text-[12px] font-medium text-white/90"
                  >
                    {categoryLabel(cat)}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              {coach.ctaUrl && (
                <a
                  href={coach.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded bg-gold px-7 py-3.5 text-[14px] font-medium text-white shadow-md transition hover:bg-gold-deep"
                >
                  {coach.ctaLabel ?? "Book a Call"}
                </a>
              )}
              {coach.website && (
                <a
                  href={coach.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded border-2 border-white/70 px-7 py-3 text-[14px] font-medium text-white transition hover:bg-white hover:text-teal"
                >
                  Visit Website →
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-bg py-16 md:py-20">
        <div className="mx-auto max-w-widest px-6">
          <div className="grid gap-12 md:grid-cols-[1fr_360px]">

            {/* LEFT — bio */}
            <div>
              {bioParagraphs.length > 0 ? (
                <>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-teal mb-4">
                    About {coach.name}
                  </div>
                  <div className="space-y-5 text-[17px] leading-[1.85] text-ink-soft">
                    {bioParagraphs.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </>
              ) : (
                <div className="rounded-md border border-ink/10 bg-white p-8 text-center text-ink-soft">
                  <p>Visit {coach.name}&apos;s profile for full details.</p>
                  {coach.directoryUrl && (
                    <a
                      href={coach.directoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-teal underline underline-offset-4 hover:text-gold transition"
                    >
                      View full listing →
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* RIGHT — contact card */}
            <aside className="space-y-6">
              {coach.logoUrl && (
                <div className="overflow-hidden rounded-md border border-ink/10 bg-white p-4 shadow-sm">
                  <CoachImage
                    src={coach.logoUrl}
                    alt={`${coach.name} logo`}
                    className="w-full object-contain max-h-28"
                  />
                </div>
              )}

              <div className="space-y-4 rounded-md border border-ink/10 bg-white p-6 shadow-sm">
                <h2 className="font-serif text-base font-medium text-teal">Contact</h2>

                {coach.phone && (
                  <a href={`tel:${coach.phone}`} className="group flex items-center gap-3 text-sm text-ink-soft transition hover:text-teal">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-teal/10 transition group-hover:bg-teal group-hover:text-white">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </span>
                    {coach.phone}
                  </a>
                )}

                {coach.email && (
                  <a href={`mailto:${coach.email}`} className="group flex items-center gap-3 text-sm text-ink-soft transition hover:text-teal">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-teal/10 transition group-hover:bg-teal group-hover:text-white">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    {coach.email}
                  </a>
                )}

                {coach.website && (
                  <a href={coach.website} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-sm text-ink-soft transition hover:text-teal">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-teal/10 transition group-hover:bg-teal group-hover:text-white">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                    </span>
                    {coach.website.replace(/^https?:\/\//, "")}
                  </a>
                )}

                {coach.location && (
                  <div className="flex items-center gap-3 text-sm text-ink-soft">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-teal/10">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </span>
                    {coach.location}
                  </div>
                )}
              </div>

              {coach.social && Object.values(coach.social).some(Boolean) && (
                <div className="rounded-md border border-ink/10 bg-white p-6 shadow-sm">
                  <h2 className="mb-4 font-serif text-base font-medium text-teal">Connect</h2>
                  <div className="flex gap-3">
                    {coach.social.facebook && (
                      <a href={coach.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                        className="flex h-9 w-9 items-center justify-center rounded bg-teal/10 text-teal transition hover:bg-teal hover:text-white">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                    )}
                    {coach.social.instagram && (
                      <a href={coach.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                        className="flex h-9 w-9 items-center justify-center rounded bg-teal/10 text-teal transition hover:bg-teal hover:text-white">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                    )}
                    {coach.social.linkedin && (
                      <a href={coach.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                        className="flex h-9 w-9 items-center justify-center rounded bg-teal/10 text-teal transition hover:bg-teal hover:text-white">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                    )}
                    {coach.social.twitter && (
                      <a href={coach.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter / X"
                        className="flex h-9 w-9 items-center justify-center rounded bg-teal/10 text-teal transition hover:bg-teal hover:text-white">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              )}

              {coach.ctaUrl && (
                <a
                  href={coach.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded bg-gold py-3.5 text-center text-[14px] font-medium text-white shadow-sm transition hover:bg-gold-deep"
                >
                  {coach.ctaLabel ?? "Book a Free Call"}
                </a>
              )}
            </aside>
          </div>
        </div>
      </section>

      {/* Bottom strip */}
      <section className="bg-teal text-white">
        <div className="mx-auto flex max-w-widest flex-col items-center justify-between gap-6 px-6 py-12 md:flex-row">
          <Link href="/directory" className="flex items-center gap-2 text-sm text-white/75 transition hover:text-white">
            ← Back to Directory
          </Link>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/spiritual-life-coach-certification"
              className="inline-block rounded bg-gold px-6 py-3 text-[13px] font-medium text-white transition hover:bg-gold-deep"
            >
              Get Certified
            </Link>
            <Link
              href="/schedule"
              className="inline-block rounded border-2 border-white/70 px-6 py-2.5 text-[13px] font-medium text-white transition hover:bg-white hover:text-teal"
            >
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
