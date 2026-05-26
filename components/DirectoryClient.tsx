"use client";

import { useState, useMemo } from "react";
import { coaches } from "@/lib/coaches";
import CoachCard from "@/components/CoachCard";
import DirectoryHero from "@/components/DirectoryHero";

export default function DirectoryClient() {
  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const filtered = useMemo(() => {
    return coaches.filter((coach) => {
      const matchName = !search || coach.name.toLowerCase().includes(search.toLowerCase());
      const matchLocation = !locationFilter || coach.location.toLowerCase().includes(locationFilter.toLowerCase());
      const matchCategory = !categoryFilter || coach.categories.includes(categoryFilter);
      return matchName && matchLocation && matchCategory;
    });
  }, [search, locationFilter, categoryFilter]);

  const featured = coaches.filter((c) => c.tier === "premium").slice(0, 3);
  const hasFilters = !!(search || locationFilter || categoryFilter);

  function reset() {
    setSearch("");
    setLocationFilter("");
    setCategoryFilter("");
  }

  return (
    <>
      <DirectoryHero
        search={search}
        setSearch={setSearch}
        locationFilter={locationFilter}
        setLocationFilter={setLocationFilter}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        onReset={reset}
      />

      {/* Featured coaches, hidden while filtering */}
      {!hasFilters && featured.length > 0 && (
        <section className="bg-bg border-b border-ink/5 py-16 md:py-20">
          <div className="mx-auto max-w-widest px-6">
            <div className="mb-8">
              <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-teal mb-3">
                Community spotlight
              </div>
              <h2 className="font-serif text-[clamp(22px,3.5vw,30px)] font-light text-ink">
                Featured Coaches
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((coach) => (
                <CoachCard key={coach.id} coach={coach} featured />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All / filtered listings */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-widest px-6">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              {hasFilters ? (
                <>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-teal mb-2">
                    Search results
                  </div>
                  <h2 className="font-serif text-[clamp(20px,3vw,26px)] font-light text-ink">
                    {filtered.length} coach{filtered.length !== 1 ? "es" : ""} found
                  </h2>
                </>
              ) : (
                <>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-teal mb-2">
                    All practitioners
                  </div>
                  <h2 className="font-serif text-[clamp(20px,3vw,26px)] font-light text-ink">
                    Browse All Coaches
                  </h2>
                </>
              )}
            </div>
            <a
              href="https://directory.awakenedacademy.com/apply-now/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded bg-gold px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-gold-deep"
            >
              Submit Your Listing →
            </a>
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-md border border-ink/10 bg-bg p-12 text-center">
              <p className="font-serif text-lg text-ink-soft">No coaches match your search.</p>
              <button
                onClick={reset}
                className="mt-4 text-sm font-medium text-teal underline underline-offset-4 hover:text-gold transition"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filtered.map((coach) => (
                <CoachCard key={coach.id} coach={coach} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-teal text-white">
        <div className="mx-auto max-w-wide px-6 py-20 text-center">
          <div className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold-light mb-4">
            Join the community
          </div>
          <h2 className="font-serif text-[clamp(26px,5vw,40px)] font-light">
            Are you a <em className="text-gold-light">Spiritual Life Coach?</em>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[16px] leading-[1.7] text-white/80">
            List your practice in the Awakened Academy directory and get discovered by people looking for exactly what you offer.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://directory.awakenedacademy.com/apply-now/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded bg-gold px-8 py-3.5 text-[13px] font-medium text-white transition hover:bg-gold-deep"
            >
              Apply Now
            </a>
            <a
              href="/spiritual-life-coach-certification"
              className="inline-block rounded border-2 border-white/70 px-8 py-3 text-[13px] font-medium text-white transition hover:bg-white hover:text-teal"
            >
              Get Certified First
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
