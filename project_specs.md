# Awakened Academy — Emergency MVP Migration

## What this is
A Next.js app that replaces the hacked WordPress install at awakenedacademy.com **today**. Same-day cutover to a clean static site. Full ~54-page migration ships next week as v1.1.

## Who it's for
1. **Prospective coaching students** — discover the certification, opt in, book a call
2. **Existing leads / lookalikes** — re-engage via the program/sub-program pages (Dharma, EP, Introvert)
3. **Search engines** — preserve SEO equity from the WordPress install

## Goal of v1.0 (today)
Kill the hacked WP install. Preserve the conversion path: **page → GHL form opt-in → workflow email → /book-a-call/ → sales conversation**.

Every dropped URL 301-redirects to homepage. No broken links. No lost SEO juice (links flow to /).

## Tech stack

- **Framework:** Next.js 15 (App Router) — matches CCH (SEO Site project)
- **Styling:** Tailwind CSS v3
- **Hosting:** Vercel
- **Forms/calendar/checkout:** GoHighLevel (embed registry at `migration/ghl-integrations.md`)
- **LMS:** Kajabi (untouched, links out to existing Kajabi member URL)
- **Subdomain:** `directory.awakenedacademy.com` already handles coach directory (external)
- **Affiliate:** stays on SamCart (external)

## v1.0 page list (8 pages)

1. `/` — Home
2. `/spiritual-life-coach-certification/` — main offer (GHL form `o7aHhza1LwO05HOinyNz`)
3. `/dharma/` — sub-program (GHL form `aOOIbE3NIvQrAmKp7h5K`)
4. `/ep/` — enlightenedpreneurs (GHL form `6rTeJbPFUr4A0xDtch2Y`)
5. `/introvert/` — softly powerful (GHL form `XMpfPDgqmz2fjd45bhYc`)
6. `/book-a-call/` — calendar (GHL calendar `9G3lOXbWVOP5TmT6xy5r`)
7. `/about/` — Michael, mission, philosophy
8. `/contact/` — contact info (GHL form deferred to v1.1)

## v1.0 redirects (everything else → /)

All ~232 dropped/dedupe URLs 301 → `/` for emergency cut. Proper per-URL redirect map ships in v1.1.

Exceptions handled specifically in v1.0:
- `/coaches/`, `/featured-coaches/` → `https://directory.awakenedacademy.com/`
- `/apply/` → `/spiritual-life-coach-certification/`
- `/open-house/`, `/watch-open-house/` → `/book-a-call/`

## What v1.0 does NOT include (ships in v1.1, target 3-7 days)

- Blog (`/blog/` + 22 SEO posts) — protected slug, 301s to / temporarily
- All other sub-program / lead-magnet pages (mentoring, wealth-and-abundance, free-meditations, 21-day-challenge, etc.)
- HTML curriculum page (replacing 2018 PDF)
- Michael Mackintosh bio page
- Gated brochure download
- Contact form (page exists, just no form embed yet)
- Reviews / success-stories / affiliate-program / jobs / legal pages
- Full per-URL 301 redirect map (instead of catch-all to /)

## Canonical facts (per project memory)

- Founded copy: **"Pioneering spiritual life coaching since 2004. Certifying coaches since 2011. Awakened Academy founded 2014."**
- Curriculum: **7 pillars** (NOT 4) — body copy must reflect
- Tuition: $3,000–$9,000 (payment plans)
- **NO accreditation claims** (ICA not live yet)
- **NO "Lifetime Guarantee"** — 14-day refund policy only
- Founders: Michael Mackintosh + Arielle Hecht; 1-on-1 access is **Michael only**
- Contact: `success@awakenedacademy.com` · `+1 928-963-7286` · `PO BOX 441, Sedona, AZ 86336`
- Author bylines (when blog ships): **"Michael Mackintosh"** (full name)

## File structure

```
aa-site/
├── app/
│   ├── layout.tsx          # global shell w/ <SiteHeader> + <SiteFooter>
│   ├── page.tsx            # home
│   ├── globals.css         # Tailwind + theme
│   ├── spiritual-life-coach-certification/page.tsx
│   ├── dharma/page.tsx
│   ├── ep/page.tsx
│   ├── introvert/page.tsx
│   ├── book-a-call/page.tsx
│   ├── about/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── GHLForm.tsx         # iframe + form_embed.js loader
│   ├── GHLCalendar.tsx     # iframe + form_embed.js loader (booking variant)
│   ├── SiteHeader.tsx      # logo + nav + CTA
│   ├── SiteFooter.tsx      # canonical contact info + links
│   ├── Hero.tsx            # H1 + subheadline + CTA pattern
│   └── Section.tsx         # consistent body section wrapper
├── lib/
│   └── site-config.ts      # canonical facts (contact, founders, dates)
├── public/
│   └── (logo + assets — needs upload)
├── next.config.ts          # redirects[] for all 232 dropped URLs
├── tailwind.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

## Done definition for v1.0

- [ ] `npm install && npm run build` passes with no errors
- [ ] All 8 pages render in dev (`npm run dev` on localhost:3000)
- [ ] GHL forms load and accept submissions (verified by Michael clicking through one)
- [ ] All redirects fire correctly (sample 5 URLs)
- [ ] Vercel preview deploys
- [ ] Michael does final UAT in browser
- [ ] DNS cutover (Michael handles)

## Open items deferred to v1.1

Tracked in `migration/page-inventory.md` (Open questions section) and todo list.

## v1.0 cutover order

1. Build locally → preview branch → Vercel preview URL → Michael UAT → merge to main → Vercel prod
2. DNS cutover (Michael's call — point `awakenedacademy.com` A/CNAME at Vercel)
3. Verify spam injection is gone (live)
4. Verify GHL forms submit successfully
5. Sanity-check Sucuri SiteCheck post-cutover
