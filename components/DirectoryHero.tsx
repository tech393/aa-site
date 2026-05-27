"use client";

import { DIRECTORY_CATEGORIES } from "@/lib/coaches";

type Props = {
  search: string;
  setSearch: (v: string) => void;
  locationFilter: string;
  setLocationFilter: (v: string) => void;
  categoryFilter: string;
  setCategoryFilter: (v: string) => void;
  onReset: () => void;
};

export default function DirectoryHero({
  search,
  setSearch,
  locationFilter,
  setLocationFilter,
  categoryFilter,
  setCategoryFilter,
  onReset,
}: Props) {
  const hasFilters = search || locationFilter || categoryFilter;

  return (
    <section className="bg-teal text-white">
      {/* eyebrow utility bar */}
      <div className="bg-plum text-white/80 text-[12.5px]">
        <div className="mx-auto flex max-w-widest items-center justify-between gap-6 px-6 py-2">
          <span className="text-white/60">
            Certified Coaches · 25+ Countries · Pioneering Since 2004
          </span>
          <a
            href="https://directory.awakenedacademy.com/apply-now/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-light hover:text-white transition"
          >
            List Your Practice →
          </a>
        </div>
      </div>

      {/* hero */}
      <div className="mx-auto max-w-widest px-6 py-16 md:py-20 text-center">
        <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold-light mb-4">
          Awakened Academy
        </div>
        <h1 className="font-serif text-[clamp(30px,5vw,52px)] font-light leading-[1.15]">
          Find a <em className="text-gold-light">Spiritual Life Coach</em>
        </h1>
        <p className="mt-4 text-white/75 text-[16px] leading-[1.7] max-w-xl mx-auto">
          Browse certified coaches, healers and wellness practitioners trained and verified by the Awakened Academy community.
        </p>

        {/* search panel */}
        <div className="mt-10 mx-auto max-w-3xl rounded-md bg-white/10 border border-white/20 backdrop-blur-sm p-5 md:p-6">
          <div className="grid gap-3 sm:grid-cols-3">
            <div>
              <label htmlFor="dir-search" className="sr-only">Search by name</label>
              <input
                id="dir-search"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Business name…"
                className="w-full rounded border-0 bg-white px-4 py-3 text-sm text-ink placeholder-ink-soft shadow-sm outline-none ring-1 ring-white/40 focus:ring-2 focus:ring-gold transition"
              />
            </div>
            <div>
              <label htmlFor="dir-location" className="sr-only">Search by location</label>
              <input
                id="dir-location"
                type="text"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                placeholder="Location…"
                className="w-full rounded border-0 bg-white px-4 py-3 text-sm text-ink placeholder-ink-soft shadow-sm outline-none ring-1 ring-white/40 focus:ring-2 focus:ring-gold transition"
              />
            </div>
            <div>
              <label htmlFor="dir-category" className="sr-only">Filter by category</label>
              <select
                id="dir-category"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="w-full appearance-none rounded border-0 bg-white px-4 py-3 text-sm text-ink shadow-sm outline-none ring-1 ring-white/40 focus:ring-2 focus:ring-gold transition"
              >
                <option value="">All categories</option>
                {DIRECTORY_CATEGORIES.map((cat) => (
                  <option key={cat.value} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {hasFilters && (
            <div className="mt-3 flex justify-end">
              <button
                onClick={onReset}
                className="text-xs text-white/60 underline underline-offset-4 hover:text-white transition"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
