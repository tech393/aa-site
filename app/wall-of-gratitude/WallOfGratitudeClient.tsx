'use client';

/**
 * Wall of Gratitude, interactive client component (Tier 1 + Tier 2 abundance).
 *
 * Page structure:
 *   1. Hero (script accent, stats row)
 *   2. Featured video testimonials (3 self-hosted MP4s)
 *   3. Insight Timer reviews abundance, 125,000+ visualized
 *   4. Sticky filter bar (search + program + country + theme chips)
 *   5. Featured Stories (the 7 long-form anchors)
 *   6. Amazon book reviews
 *   7. The whole wall, masonry with big pull-quote dividers every 12 cards
 *   8. Faces mosaic, community avatar grid
 *   9. Final CTA to certification
 */

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from '@/components/Reveal';
import {
  TESTIMONIALS,
  PROGRAM_FILTERS,
  THEME_FILTERS,
  COUNTRY_FILTERS,
  VIDEO_TESTIMONIALS,
  INSIGHT_TIMER_SAMPLES,
  AMAZON_REVIEWS,
  INSIGHT_TIMER_LIVE_REVIEWS,
  locationToCountry,
  type Testimonial,
  type TestimonialTheme,
  type TestimonialProgram
} from './testimonials-data';

const STATS = [
  { value: '650+',    label: 'Certified coaches' },
  { value: '25+',     label: 'Countries' },
  { value: '22',      label: 'Years' },
  { value: '125,000+', label: '5-star reviews' }
] as const;

const HERO_KICKER = '';
const HERO_TITLE  = 'Real graduates. Real coaching practices. Real lives changed.';
const HERO_LEDE   = '';

// ───────────────────────────────────────────────────────────────────────────
// Filter helpers
// ───────────────────────────────────────────────────────────────────────────
function matchesSearch(t: Testimonial, q: string): boolean {
  if (!q.trim()) return true;
  const needle = q.trim().toLowerCase();
  return (
    t.quote.toLowerCase().includes(needle) ||
    t.name.toLowerCase().includes(needle) ||
    (t.role ?? '').toLowerCase().includes(needle) ||
    (t.location ?? '').toLowerCase().includes(needle)
  );
}
function matchesProgram(t: Testimonial, p: TestimonialProgram | 'All'): boolean {
  return p === 'All' || t.program === p;
}
function matchesTheme(t: Testimonial, themes: Set<TestimonialTheme>): boolean {
  if (themes.size === 0) return true;
  return Array.from(themes).every((th) => t.themes.includes(th));
}
function matchesCountry(t: Testimonial, country: string | 'All'): boolean {
  if (country === 'All') return true;
  return locationToCountry(t.location) === country;
}
function wordCount(s: string): number { return s.trim().split(/\s+/).length; }
function initials(name: string): string {
  return name.split(/[\s,]+/).slice(0, 2).map((w) => w[0] ?? '').join('').toUpperCase().slice(0, 2);
}

// ───────────────────────────────────────────────────────────────────────────
// Cards
// ───────────────────────────────────────────────────────────────────────────
function FeaturedCard({ t }: { t: Testimonial }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = wordCount(t.quote) > 140;
  const paragraphs = t.quote.split('\n\n');
  const previewParagraphs = expanded ? paragraphs : paragraphs.slice(0, 2);

  return (
    <article className="bg-cream-paper border border-line rounded-lg p-8 md:p-12 shadow-1">
      <div className="grid md:grid-cols-[140px_1fr] gap-8 items-start">
        <div className="hidden md:block">
          {t.photoSrc ? (
            <div className="relative w-[140px] h-[140px] rounded-full overflow-hidden border border-line">
              <Image src={t.photoSrc} alt={t.name} fill sizes="140px" className="object-cover" />
            </div>
          ) : (
            <div aria-hidden className="w-[140px] h-[140px] rounded-full bg-cream border border-line flex items-center justify-center">
              <span className="font-display text-[2.5rem] text-teal">{initials(t.name)}</span>
            </div>
          )}
        </div>
        <div>
          {t.pullQuote && (
            <p className="font-display italic text-[clamp(1.5rem,2.6vw,2rem)] leading-[1.25] text-teal mb-6">
              &ldquo;{t.pullQuote}&rdquo;
            </p>
          )}
          <div className="space-y-5 text-[17px] leading-[1.7] text-ink">
            {previewParagraphs.map((p, i) => (<p key={i}>{p}</p>))}
          </div>
          {isLong && (
            <button onClick={() => setExpanded((v) => !v)} className="mt-6 text-[13px] uppercase tracking-[0.28em] text-teal hover:text-teal-deep transition-colors">
              {expanded ? 'Read less' : 'Read full story'}
            </button>
          )}
          <footer className="mt-8 pt-6 border-t border-line">
            <div className="font-body font-semibold text-ink">{t.name}</div>
            <div className="font-body text-[15px] text-ink-soft mt-1">{[t.role, t.location].filter(Boolean).join(' · ')}</div>
            <div className="font-body text-[12px] uppercase tracking-[0.28em] text-gold-deep mt-3">{t.program}</div>
          </footer>
        </div>
      </div>
    </article>
  );
}

function MasonryCard({ t }: { t: Testimonial }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = wordCount(t.quote) > 90;
  const paragraphs = t.quote.split('\n\n');
  const previewParagraphs = expanded || !isLong ? paragraphs : [paragraphs[0]];
  const accentClass =
    t.program === 'Certification' || t.program === 'Coaching Masterclass'
      ? 'border-l-teal'
      : t.program === 'Sacred Session Call'
      ? 'border-l-gold'
      : t.program === 'Meditations / Insight Timer'
      ? 'border-l-rose'
      : 'border-l-line';
  return (
    <article className={`break-inside-avoid mb-6 bg-cream-paper border border-line border-l-2 ${accentClass} rounded p-6 md:p-7 transition-shadow hover:shadow-2`}>
      {t.pullQuote && (
        <p className="font-display italic text-[1.25rem] leading-[1.3] text-teal mb-4">&ldquo;{t.pullQuote}&rdquo;</p>
      )}
      <div className="space-y-4 text-[17px] leading-[1.7] text-ink">
        {previewParagraphs.map((p, i) => (<p key={i}>{p}</p>))}
      </div>
      {isLong && (
        <button onClick={() => setExpanded((v) => !v)} className="mt-5 text-[12px] uppercase tracking-[0.28em] text-teal hover:text-teal-deep transition-colors">
          {expanded ? 'Less' : 'Read full story'}
        </button>
      )}
      <footer className="mt-6 pt-4 border-t border-line flex items-center gap-3">
        {t.photoSrc ? (
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-line shrink-0">
            <Image src={t.photoSrc} alt={t.name} fill sizes="40px" className="object-cover" />
          </div>
        ) : (
          <div aria-hidden className="w-10 h-10 rounded-full bg-cream border border-line flex items-center justify-center shrink-0">
            <span className="font-display text-[15px] text-teal">{initials(t.name)}</span>
          </div>
        )}
        <div className="min-w-0">
          <div className="font-body font-semibold text-[15px] text-ink truncate">{t.name}</div>
          <div className="font-body text-[12px] text-ink-muted truncate">{[t.role, t.location].filter(Boolean).join(' · ') || t.program}</div>
        </div>
      </footer>
    </article>
  );
}

// Star row for Insight Timer / Trustpilot style cards
function StarRow() {
  return (
    <div className="flex gap-1" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} className="w-4 h-4 text-gold" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// Insight Timer section, renders 150 real reviews from Michael's Publisher
// Dashboard export, in a 3-column grid, with show-more pagination.
// ───────────────────────────────────────────────────────────────────────────
function InsightTimerSection() {
  const [visible, setVisible] = useState(24);
  const totalCurated = INSIGHT_TIMER_LIVE_REVIEWS.length;
  const visibleReviews = INSIGHT_TIMER_LIVE_REVIEWS.slice(0, visible);

  return (
    <section className="border-b border-line bg-cream-paper">
      <div className="max-w-[1180px] mx-auto px-6 md:px-8 py-16 md:py-24">
        <Reveal>
          <div className="font-body text-[12px] uppercase tracking-[0.28em] font-semibold text-gold-deep mb-3">Insight Timer</div>
          <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.2] tracking-[-0.01em] text-ink mb-3">
            <span className="text-teal">125,000+</span> five-star reviews. And counting daily.
          </h2>
          <p className="font-body text-[17px] leading-[1.65] text-ink-soft max-w-2xl mb-12">
            Michael and Arielle&rsquo;s meditations have been played 8&nbsp;million times on Insight Timer.
            Below, {totalCurated} real reviews, each from a real listener, every word verbatim from the
            Insight Timer Publisher dashboard.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleReviews.map((r, i) => (
            <Reveal key={`${r.name}-${i}`} delay={Math.min(i * 0.02, 0.3)}>
              <div className="bg-cream border border-line rounded p-5 h-full flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <StarRow />
                  <span className="font-body text-[11px] uppercase tracking-[0.18em] text-rose truncate ml-2 max-w-[180px]" title={r.track}>
                    {r.track}
                  </span>
                </div>
                <p className="font-body text-[15px] leading-[1.55] text-ink mb-4 flex-1 whitespace-pre-line">
                  &ldquo;{r.text}&rdquo;
                </p>
                <div className="font-body text-[12px] text-ink-muted">
                  {r.name}{r.location ? <span className="text-ink-muted/70"> · {r.location}</span> : null}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        {visible < totalCurated && (
          <Reveal delay={0.1}>
            <div className="mt-10 text-center">
              <button
                onClick={() => setVisible((v) => Math.min(v + 24, totalCurated))}
                className="inline-flex items-center justify-center px-6 py-3 bg-cream border border-line text-teal font-body font-semibold text-[14px] rounded-sm hover:bg-cream-paper hover:border-teal transition"
              >
                Show 24 more reviews ({totalCurated - visible} remaining of {totalCurated} shown · 125,000+ on Insight Timer)
              </button>
            </div>
          </Reveal>
        )}
        <Reveal delay={0.2}>
          <p className="mt-10 text-center font-body text-[14px] text-ink-muted">
            <a
              href="https://insighttimer.com/michaelmackintosh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal hover:text-teal-deep underline underline-offset-4"
            >
              See all 125,000+ reviews on Insight Timer →
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// ───────────────────────────────────────────────────────────────────────────
// Page
// ───────────────────────────────────────────────────────────────────────────
export default function WallOfGratitudeClient() {
  const [query, setQuery]     = useState('');
  const [program, setProgram] = useState<TestimonialProgram | 'All'>('All');
  const [country, setCountry] = useState<string | 'All'>('All');
  const [themes, setThemes]   = useState<Set<TestimonialTheme>>(new Set());

  const toggleTheme = (th: TestimonialTheme) => {
    setThemes((prev) => {
      const next = new Set(prev);
      if (next.has(th)) next.delete(th);
      else next.add(th);
      return next;
    });
  };
  const clearAll = () => {
    setQuery(''); setProgram('All'); setCountry('All'); setThemes(new Set());
  };

  const filtered = useMemo(
    () => TESTIMONIALS.filter((t) =>
      matchesSearch(t, query) && matchesProgram(t, program) && matchesCountry(t, country) && matchesTheme(t, themes)
    ),
    [query, program, country, themes]
  );
  const featured = filtered.filter((t) => t.length === 'feature');
  const rest     = filtered.filter((t) => t.length !== 'feature');
  const totalCount    = TESTIMONIALS.length;
  const filteredCount = filtered.length;

  // Collect photo paths for the Faces mosaic
  const facesWithPhotos = TESTIMONIALS.filter((t) => t.photoSrc).slice(0, 24);
  const facesPlaceholderCount = Math.max(0, 36 - facesWithPhotos.length);

  return (
    <main className="bg-cream text-ink min-h-screen">
      {/* ─────────────────────────── HERO ─────────────────────────── */}
      <section className="relative border-b border-line overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at top, rgba(248,220,220,0.4) 0%, rgba(252,240,240,0.15) 35%, transparent 70%)' }}
        />
        <div className="relative max-w-[1180px] mx-auto px-6 md:px-8 py-20 md:py-32">
          <Reveal>
            <div className="font-body text-[12px] uppercase tracking-[0.28em] font-semibold text-gold-deep mb-6">{HERO_KICKER}</div>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="font-script text-rose text-[clamp(2.5rem,5vw,4rem)] leading-none mb-2">Thank you</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-[-0.02em] text-ink max-w-3xl mb-8">{HERO_TITLE}</h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="font-body text-[1.1875rem] leading-[1.6] text-ink-soft max-w-2xl">{HERO_LEDE}</p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-8 pt-10 border-t border-line">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-[clamp(1.75rem,3vw,2.5rem)] text-teal leading-none mb-2">{s.value}</div>
                  <div className="font-body text-[13px] uppercase tracking-[0.18em] text-ink-muted">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────────────────────── FEATURED VIDEO TESTIMONIALS ─────────────────────────── */}
      <section className="border-b border-line bg-cream-paper">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8 py-16 md:py-20">
          <Reveal>
            <div className="text-center mb-10">
              <div className="font-body text-[12px] uppercase tracking-[0.28em] font-semibold text-gold-deep mb-3">In their own words</div>
              <h2 className="font-display text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.15] tracking-[-0.015em] text-ink">
                Hear from <em className="italic text-teal">our graduates</em>
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            <Reveal delay={0.05}>
              <figure className="overflow-hidden rounded-md border border-line bg-white shadow-sm">
                <video
                  controls
                  preload="metadata"
                  poster="/img/videos/andrew-crawford.jpg"
                  className="block w-full bg-navy"
                  playsInline
                >
                  <source src="/video/andrew-crawford.mp4" type="video/mp4" />
                </video>
                <figcaption className="p-5">
                  <div className="font-display text-[18px] text-ink">Andrew Crawford</div>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={0.1}>
              <figure className="overflow-hidden rounded-md border border-line bg-white shadow-sm">
                <video
                  controls
                  preload="metadata"
                  poster="/img/videos/testimonial-3.jpg"
                  className="block w-full bg-navy"
                  playsInline
                >
                  <source src="/video/testimonial-3.mp4" type="video/mp4" />
                </video>
                <figcaption className="p-5">
                  <div className="font-display text-[18px] text-ink">Mia Garces</div>
                </figcaption>
              </figure>
            </Reveal>
            {VIDEO_TESTIMONIALS.map((v, i) => (
              <Reveal key={v.id} delay={0.15 + i * 0.05}>
                <figure className="overflow-hidden rounded-md border border-line bg-white shadow-sm">
                  <div className="relative aspect-video bg-navy">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}`}
                      title={`Video testimonial, ${v.name}`}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <figcaption className="p-5">
                    <div className="font-display text-[18px] text-ink">{v.name}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────── INSIGHT TIMER ABUNDANCE ─────────────────────────── */}
      <InsightTimerSection />

      {/* ─────────────────────────── STICKY FILTER BAR ─────────────────────────── */}
      <section className="sticky top-0 z-20 bg-cream/95 backdrop-blur border-b border-line">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8 py-5">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="relative flex-1 max-w-md">
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search a name, country, story or word…"
                aria-label="Search the wall of gratitude"
                className="w-full bg-cream-paper border border-line rounded-sm py-3 px-4 pl-10 font-body text-[15px] text-ink placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal transition"
              />
              <svg aria-hidden xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-muted">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <div className="flex items-center gap-3">
              <label htmlFor="program-filter" className="font-body text-[12px] uppercase tracking-[0.18em] text-ink-muted whitespace-nowrap">Program</label>
              <select id="program-filter" value={program} onChange={(e) => setProgram(e.target.value as TestimonialProgram | 'All')} className="bg-cream-paper border border-line rounded-sm py-2 px-3 font-body text-[14px] text-ink focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal">
                <option value="All">All programs</option>
                {PROGRAM_FILTERS.map((p) => (<option key={p} value={p}>{p}</option>))}
              </select>
            </div>
            <div className="flex items-center gap-3">
              <label htmlFor="country-filter" className="font-body text-[12px] uppercase tracking-[0.18em] text-ink-muted whitespace-nowrap">Country</label>
              <select id="country-filter" value={country} onChange={(e) => setCountry(e.target.value)} className="bg-cream-paper border border-line rounded-sm py-2 px-3 font-body text-[14px] text-ink focus:outline-none focus:ring-2 focus:ring-teal/30 focus:border-teal">
                <option value="All">All countries</option>
                {COUNTRY_FILTERS.map((c) => (<option key={c} value={c}>{c}</option>))}
              </select>
            </div>
            <div className="md:ml-auto font-body text-[13px] text-ink-muted">
              Showing <span className="font-semibold text-ink">{filteredCount}</span> of {totalCount} written stories
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {THEME_FILTERS.map((th) => {
              const active = themes.has(th.value);
              return (
                <button key={th.value} onClick={() => toggleTheme(th.value)} aria-pressed={active}
                  className={`px-3 py-1.5 rounded-full text-[13px] font-body border transition-colors ${active ? 'bg-teal text-cream-paper border-teal' : 'bg-cream-paper text-ink-soft border-line hover:border-teal hover:text-teal'}`}>
                  {th.label}
                </button>
              );
            })}
            {(themes.size > 0 || program !== 'All' || country !== 'All' || query) && (
              <button onClick={clearAll} className="px-3 py-1.5 text-[13px] font-body text-ink-muted underline underline-offset-4 hover:text-ink">
                Clear all
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ─────────────────────────── FEATURED STORIES ─────────────────────────── */}
      {featured.length > 0 && (
        <section className="border-b border-line bg-cream">
          <div className="max-w-[1180px] mx-auto px-6 md:px-8 py-16 md:py-24">
            <Reveal>
              <div className="font-body text-[12px] uppercase tracking-[0.28em] font-semibold text-gold-deep mb-3">Featured Stories</div>
              <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.2] tracking-[-0.01em] text-ink mb-12">The long stories. Read one all the way through.</h2>
            </Reveal>
            <div className="space-y-8">
              {featured.map((t, i) => (<Reveal key={t.id} delay={i * 0.06}><FeaturedCard t={t} /></Reveal>))}
            </div>
          </div>
        </section>
      )}

      {/* ─────────────────────────── AMAZON BOOK REVIEWS ─────────────────────────── */}
      <section className="border-b border-line bg-cream">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="font-body text-[12px] uppercase tracking-[0.28em] font-semibold text-gold-deep mb-3">Verified Book Reviews</div>
            <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.2] tracking-[-0.01em] text-ink mb-3">
              Amazon. Verified Purchase. Five-star.
            </h2>
            <p className="font-body text-[17px] leading-[1.65] text-ink-soft max-w-2xl mb-12">
              Real readers reviewing Michael&rsquo;s books on Amazon. Independently verified. Click any review to view it live on Amazon.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {AMAZON_REVIEWS.map((r, i) => (
              <Reveal key={r.id} delay={i * 0.08}>
                <a
                  href={r.reviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-cream-paper border border-line rounded-lg p-6 md:p-7 h-full transition-shadow hover:shadow-2 no-underline text-ink"
                >
                  <div className="flex items-center justify-between mb-4">
                    <StarRow />
                    {r.verifiedPurchase && (
                      <span className="font-body text-[11px] uppercase tracking-[0.18em] text-teal">Verified</span>
                    )}
                  </div>
                  <h3 className="font-display text-[1.25rem] leading-[1.3] text-ink mb-3">{r.title}</h3>
                  <p className="font-body text-[15px] leading-[1.6] text-ink-soft mb-5">&ldquo;{r.body.length > 280 ? r.body.slice(0, 280) + '…' : r.body}&rdquo;</p>
                  <footer className="pt-4 border-t border-line">
                    <div className="font-body font-semibold text-[14px] text-ink">{r.reviewer}</div>
                    <div className="font-body text-[12px] text-ink-muted mt-1">Reviewing: <em>{r.book}</em></div>
                    <div className="font-body text-[12px] text-ink-muted mt-1">{r.date}</div>
                  </footer>
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <p className="mt-10 text-center font-body text-[14px] text-ink-muted">
              <a
                href="https://www.amazon.com/stores/Michael-Mackintosh/author/B00J7XA8S0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal hover:text-teal-deep underline underline-offset-4"
              >
                See all Michael&rsquo;s books on Amazon →
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─────────────────────────── THE WHOLE WALL (with pull-quote dividers) ─────────────────────────── */}
      <section className="bg-cream-paper border-b border-line">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="font-body text-[12px] uppercase tracking-[0.28em] font-semibold text-gold-deep mb-3">The Whole Wall</div>
            <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.2] tracking-[-0.01em] text-ink mb-3">Everyone&rsquo;s here. None curated out.</h2>
            <p className="font-body text-[17px] leading-[1.65] text-ink-soft max-w-2xl mb-12">
              Use the filters above to find someone like you. Read a story all the way through.
              The visitor who scrolls a 600-word testimonial is usually the buyer.
            </p>
          </Reveal>

          <AnimatePresence mode="popLayout">
            {rest.length > 0 ? (
              <motion.div key="wall" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}>
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
                  {rest.map((t, i) => (
                    <Reveal key={t.id} delay={Math.min(i * 0.02, 0.25)}>
                      <MasonryCard t={t} />
                    </Reveal>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center py-20">
                <p className="font-display italic text-[1.5rem] text-ink-soft mb-4">No stories match these filters.</p>
                <button onClick={clearAll} className="font-body text-[14px] uppercase tracking-[0.28em] text-teal hover:text-teal-deep underline underline-offset-4">
                  Clear filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ─────────────────────────── FACES MOSAIC ─────────────────────────── */}
      <section className="border-b border-line bg-cream">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="font-body text-[12px] uppercase tracking-[0.28em] font-semibold text-gold-deep mb-3">Faces of the Community</div>
            <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.2] tracking-[-0.01em] text-ink mb-3 text-center md:text-left">Real people. Real practice. 25+ countries.</h2>
            <p className="font-body text-[17px] leading-[1.65] text-ink-soft max-w-2xl mb-12">
              A small sample of the soul tribe. Want yours in this mosaic?{' '}
              <Link href="/share-your-story" className="text-teal hover:text-teal-deep underline underline-offset-4">Send a photo →</Link>
            </p>
          </Reveal>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-3">
            {facesWithPhotos.map((t, i) => (
              <Reveal key={t.id} delay={Math.min(i * 0.02, 0.3)}>
                <div className="relative aspect-square rounded-full overflow-hidden border border-line bg-cream-paper" title={t.name}>
                  <Image src={t.photoSrc!} alt={t.name} fill sizes="120px" className="object-cover" />
                </div>
              </Reveal>
            ))}
            {Array.from({ length: facesPlaceholderCount }).map((_, i) => {
              // Pseudo-random selection of testimonials without photos for initials placeholders
              const noPhotoEntries = TESTIMONIALS.filter((t) => !t.photoSrc && t.isFullName);
              const t = noPhotoEntries[i % noPhotoEntries.length];
              return (
                <Reveal key={`ph-${i}`} delay={Math.min((facesWithPhotos.length + i) * 0.02, 0.4)}>
                  <div className="relative aspect-square rounded-full bg-cream-paper border border-line flex items-center justify-center" title={t?.name ?? ''}>
                    <span className="font-display text-[clamp(0.9rem,1.5vw,1.25rem)] text-teal">{initials(t?.name ?? 'AA')}</span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────────────────── FINAL CTA ─────────────────────────── */}
      <section className="bg-navy text-cream-paper">
        <div className="max-w-[1180px] mx-auto px-6 md:px-8 py-20 md:py-32 text-center">
          <Reveal>
            <div className="font-body text-[12px] uppercase tracking-[0.28em] font-semibold text-gold-light mb-6">Ready to write your own?</div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-[1.15] tracking-[-0.015em] text-cream-paper mb-6 max-w-3xl mx-auto">
              These weren&rsquo;t born coaches. They started where you are.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-body text-[1.1875rem] leading-[1.6] text-cream-paper/80 max-w-2xl mx-auto mb-12">
              Awakened Academy Spiritual Life Coach Certification. Pioneering spiritual life coaching since 2004.
              13 progressive transformation modules. The certification that transforms you first, then equips you
              to guide others through the same journey.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/spiritual-life-coach-certification" className="inline-flex items-center justify-center px-8 py-4 bg-gold text-navy font-body font-semibold text-[15px] rounded-sm hover:bg-gold-light transition-colors duration-200">
                See the certification →
              </Link>
              <Link href="/brochure" className="inline-flex items-center justify-center px-8 py-4 border border-cream-paper/40 text-cream-paper font-body font-semibold text-[15px] rounded-sm hover:bg-cream-paper/10 transition-colors duration-200">
                Download the free brochure
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
