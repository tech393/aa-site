# Pre-Cutover Checklist — Awakened Academy

*Status as of 2026-05-18. Staging site: **https://aa-site-one.vercel.app**. Built on Dan's handover package (`/dan-package/DAN-PACKAGE/`) and Michael's locked decisions.*

---

## ✅ DONE — Ready for cutover

### Infrastructure
- ✅ **Tailwind brand tokens applied** from `Brand-Tokens-Round1.md`. Teal `#1A7A70`, Gold `#C9A961`, Cream, Navy, Blush, Fraunces + Inter. Backwards-compat aliases kept so existing class names still resolve.
- ✅ **182 per-URL 301 redirects** from `NEXT-CONFIG-REDIRECTS.js` deployed in `next.config.ts`, plus 6 security-hardening rules for residual WP paths (`/wp-admin`, `/wp-login.php`, `/wp-content`, `/wp-includes`, `/xmlrpc.php`).
- ✅ **Spot-checks verified** (308 = modern equivalent of 301; SEO equity preserved):
  - `/apply` → `/spiritual-life-coach-certification`
  - `/modafinil-top-user-stories` → `/` (the hack-spam page)
  - `/awakened-academy-affiliate-program` → `/` (killed per Michael)
  - `/spiritual-mentoring` → `/mentoring-with-michael`
  - `/sp/quiz` → `/introvert`
- ✅ **`/llms.txt`** at site root with AA summary, key URLs, citable authority signals, contact info, "how to cite" guidance for ChatGPT / Claude / Perplexity / Google AI Overviews.
- ✅ **`/sitemap.xml`** auto-generates 75 URLs including all cornerstone essays, lead magnets, mentoring, curriculum, book-a-call, /about/michael-mackintosh, etc.
- ✅ **`/robots.txt`** allows all crawlers, references the sitemap.

### Content (per page-by-page audit)
- ✅ **All 12 core brand pages** live: `/`, `/about`, `/origin-story`, `/where-we-are-coming-from`, `/wall-of-gratitude`, `/awakened-academy-reviews`, `/awakened-academy-success-stories`, `/featured-coaches`, `/contact`, `/privacy`, `/terms`, `/earnings-disclaimer`. Plus the dedicated `/about/michael-mackintosh` author page.
- ✅ **All 4 main offer pages live**: `/spiritual-life-coach-certification`, `/curriculum` (7 pillars + 14 modules), `/brochure`, `/book-a-call` (slim Sacred Session version — see Open Items).
- ✅ **All 10 lead magnets**: `/dharma`, `/ep`, `/introvert`, `/miracle`, `/wealth-and-abundance`, `/free-meditations` (→ `/meditations`), `/meditation-gifts`, `/free-gifts-for-you`, `/meditations`, `/theawakenedlife`.
- ✅ **Mentoring**: `/mentoring-with-michael` (canonical). `/spiritual-mentoring` redirects here per Michael's locked decision.
- ✅ **Open house URLs both live**: `/open-house` + `/watch-open-house` as functional stubs (full webinar treatment is an open item — see below).
- ✅ **5 cornerstone essays live** with TOC, author bio, BreadcrumbList schema, inter-essay nav:
  - `/masters` (11,245 words — ICF Certification vs Spiritual Coaching)
  - `/why-the-world-needs-you-part-1` (2,495 words)
  - `/why-the-world-needs-you-part-2` (1,698 words, recovered from Wayback)
  - `/why-the-world-needs-you-part-3` (3,758 words)
  - `/why-the-world-desperately-needs-spiritual-coaches-in-2026` (862 words; **renamed** from 2025 with 301 redirect)
- ✅ **`/wall-of-gratitude` page exists** as a route. Content currently stubbed (3,132-word extracted source available in `/dan-package/EXTRACTED-CONTENT/01-CORE-BRAND/04-wall-of-gratitude.md` — see Open Items).
- ✅ **29 blog posts live** with unique Pexels hero + body images, byline links to `/about/michael-mackintosh`.
- ✅ **2 cert page variants for A/B**: `/cert-classic` (WP-faithful, image bands, indexed `noindex`) and `/cert-modern` (manus-mockup style, indexed `noindex`). Canonical remains `/spiritual-life-coach-certification`.

### Forms (GHL embeds)
- ✅ **`form_embed.js`** loaded globally in root layout — every page that embeds a GHL form hydrates correctly.
- ✅ **GHL iframe pattern** standardised on `links.awakenedacademy.com/widget/form/{id}` (custom-domain subdomain).
- ✅ **Certification form** (`o7aHhza1LwO05HOinyNz`) embedded on `/spiritual-life-coach-certification`, `/brochure`, and in the hero of both cert variants.
- ✅ **Dharma form** (`aOOIbE3NIvQrAmKp7h5K`) on `/dharma`.
- ✅ **EP form** (`6rTeJbPFUr4A0xDtch2Y`) on `/ep`.
- ✅ **Softly Powerful form** (`XMpfPDgqmz2fjd45bhYc`) on `/introvert`.
- ✅ **Single discovery-call calendar** (`9G3lOXbWVOP5TmT6xy5r`) embedded on `/schedule` and `/book-a-call`.

### SEO basics
- ✅ **Every page has canonical** `<link rel="canonical">` pointing at the page's own URL.
- ✅ **Every page has OG title + description** for social sharing.
- ✅ **Exactly 1 H1 per page** verified on sample of 13 pages.
- ✅ **Meta titles + descriptions** for 20 priority pages applied verbatim from `META-TITLES-DESCRIPTIONS.csv`. Used `{ absolute: ... }` so the root template `%s | Awakened Academy` doesn't double-brand pages whose CSV titles already include the brand.
- ✅ **Trust-signal numbers** consistent (per `reference_aa_canonical_trust_signals.md`):
  - Pioneering spiritual life coaching since **2004**
  - Certifying coaches since **2012**
  - Awakened Academy founded **2014**
  - **650+ certified AA coaches** (1,250+ across all programs)
  - **25+ countries**
  - **14 transformation modules**
  - **85,000+ Insight Timer reviews**
- ✅ **No `noindex` accidentally left** on production canonical pages. Variants (`/cert-classic`, `/cert-modern`) are correctly `noindex` so they don't compete with the canonical cert URL.
- ✅ **Em-dash style sweep** — AI-prose tells (em-dashes as parenthetical asides) replaced with commas across cert pages, essays, shared body components, and Michael's bio.

### Schema
- ✅ **`EducationalOrganization`** schema on every page (root layout) with founders, contact, sameAs links.
- ✅ **`WebSite`** schema on every page (root layout).
- ✅ **`Course`** schema on `/spiritual-life-coach-certification` with $3,000–$9,000 price range and "Professional" educational level.
- ✅ **`FAQPage`** schema on `/spiritual-life-coach-certification` and `/cert-classic`.
- ✅ **`Article`** schema on all 5 cornerstone essays.
- ✅ **`Person`** schema on `/about` (Michael + Arielle) and `/about/michael-mackintosh`.
- ✅ **`BreadcrumbList`** schema on all 5 essays and `/about/michael-mackintosh`.

### Discoverability
- ✅ **Footer "Cornerstone Essays" column** on every page links to all 5 authority pieces.
- ✅ **Blog index "Cornerstone Essays" feature row** above the post grid.
- ✅ **Cert page FAQ** links to `/masters` from the "What does 'accredited' actually mean?" question.
- ✅ **Michael's bio page** has a "Selected Writing" card grid for all 5 essays.

### Quality audit
- ✅ **75/75 sitemap URLs return 200**.
- ✅ **54/54 internal nav links return 200** (homepage + blog + cert + Michael's bio).
- ✅ **All sampled JSON-LD parses validly**.
- ✅ **Page weights healthy**: lightest 48KB, heaviest 260KB (Masters essay), most 50–150KB.
- ✅ **All images use `next/image`** — no raw `<img>` tags with unoptimized assets.

---

## ⬜ OPEN — Needs Michael / external

### Things Michael needs to do
- ⬜ **Build the 2-3 multi-step GHL funnels** per the handover plan:
  - Discovery Call booking sequence (probably already partly there)
  - Certification application flow: opt-in → application form → confirmation → calendar booking → close
  - Any active launch funnel (3-3-3 Method, etc. — only build if currently running)
- ⬜ **Create dedicated GHL forms** for these lead magnets (each currently uses the certification form as a placeholder — leads are captured but they get the cert brochure instead of the right asset):
  - `/wealth-and-abundance` (Wealth Kit form needed)
  - `/miracle` (Miracle Journal form needed)
  - `/meditation-gifts` (Sacred Meditation Gift Pack form needed)
  - `/open-house` (Webinar registration form needed)
  - `/watch-open-house` (Replay request form needed)
  - When created, add the new IDs to `aa-site/lib/site-config.ts` under `GHL.forms` and swap on each page.
- ⬜ **`/open-house` webinar treatment** — Michael's locked decision says these need a design refresh and proper webinar treatment, not a static page. Currently a functional stub. Treat as a real funnel build when ready.
- ⬜ **Confirm 1-on-1 mentoring access claim** — `/about/michael-mackintosh` and cert page state "Every certification student receives 1-on-1 access to Michael." Verify this is still accurate and Michael wants it stated this strongly.
- ⬜ **DNS access** — confirm who controls the registrar for `awakenedacademy.com` and the WP host (WPX Cloud) when ready to cut over.

### Things still to build in code (not blockers — Phase 3 polish)
- ⬜ **`/book-a-call` long-form version** — current is slim (hero + 3-step + calendar). Full 6,334-word Sacred Session content in `/dan-package/EXTRACTED-CONTENT/02-MAIN-OFFER/03-book-a-call-Sacred-Session.md` ready to splice in.
- ⬜ **`/wall-of-gratitude` content** — page exists but body is stubbed. Source: `/dan-package/EXTRACTED-CONTENT/01-CORE-BRAND/04-wall-of-gratitude.md` (3,132 words of testimonial gold).
- ⬜ **Cornerstone essay H2 reinsertion** — the WP source extraction stripped section headings out of the prose. Body renders as a continuous sequence of paragraphs; readable but flat. Manual H2 reinsertion at the right paragraph boundaries would improve scannability on `/masters` and the `why-the-world-needs-you` series.
- ⬜ **Blog post backlog** — 29 posts live; `/dan-package/EXTRACTED-CONTENT/06-BLOG-POSTS/` has 72 more from SiteSucker. Cherry-pick the best for week-4-onward backlog.
- ⬜ **Comments preservation** — Existing WP comments not yet imported. Per Dan's handover: parse from SiteSucker HTML and render as static "Comments" section at the bottom of relevant blog posts. Default decision: no new commenting (audience engages via email and Discovery Calls). Reconsider Disqus only if engagement data suggests demand.

### Things needing browser-based verification (can't be tested headlessly)
- ⬜ **Lighthouse mobile 80+ / desktop 90+** on `/`, `/spiritual-life-coach-certification`, `/blog`. Page weights and image optimization look healthy; need a real run from `pagespeed.web.dev` or DevTools.
- ⬜ **No JavaScript errors in console** on any priority page. Spot-check in Chrome DevTools.
- ⬜ **Mobile responsive sweep** — every priority page on iPhone SE (375px), iPhone 14 Pro, iPad portrait. CTAs tap-friendly (44×44px minimum). No horizontal scroll.
- ⬜ **Cross-browser** — Chrome desktop, Safari desktop, Safari iOS, Chrome Android, Firefox / Edge quick checks.
- ⬜ **Real form submission test** — submit through each GHL form on the live site (not just verify the iframe loads). Confirm leads arrive in GHL CRM and the correct email sequence fires.

### Analytics & monitoring (set up before cutover)
- ⬜ **Google Analytics 4** installed (currently no analytics code in the codebase).
- ⬜ **Google Search Console** verified for `awakenedacademy.com` — need to add the verification meta tag to `app/layout.tsx`.
- ⬜ **Vercel Analytics** (optional) enabled — one-click in the Vercel dashboard.
- ⬜ **Sentry or error tracking** (recommended) — catches JavaScript errors in production.

---

## DNS Cutover Day — Run In Order

1. **Final sanity sweep** — work through this whole checklist one more time.
2. **Snapshot the current Vercel deployment** — note the deployment ID so you can revert if launch breaks. (Vercel Dashboard → Deployments → pin the current Ready one.)
3. **Lower DNS TTL** on `awakenedacademy.com` A record to 300 seconds. Do this **24+ hours in advance** so resolvers pick up the short TTL before the swap.
4. **Cutover** — change A record at the DNS registrar from the WP host IPs (`194.1.147.28` / `194.1.147.42` — WPX Cloud) to **Vercel anycast** (`216.198.79.1`).
5. **Watch propagation** — check from multiple regions via [whatsmydns.net](https://whatsmydns.net/) until ≥90% global propagation.
6. **Verify site loads** at `awakenedacademy.com` from a fresh incognito browser (avoids any local DNS cache).
7. **Test a real form submission** through the live cert page. Confirm it arrives in GHL and the email sequence fires.
8. **Submit the new sitemap** to Google Search Console: `https://awakenedacademy.com/sitemap.xml`.
9. **Submit URL removal requests** in Search Console for hack/spam doorways:
   - `/modafinil-top-user-stories/` (the explicit one we know about)
   - Any other suspicious doorway pages Sucuri or the WP audit surfaces
10. **Set Search Console alerts** for crawl errors, security issues, and manual actions.
11. **Monitor closely** for 24 hours — every form submission, every page load, error tracker dashboard.
12. **Keep WordPress hosting active** for 2–4 weeks as fallback. Do **not** cancel WPX on cutover day — wait until organic traffic is stable.

---

## Post-Launch Monitoring (rolling)

- ⬜ **Daily (first week)** — Check Search Console for crawl errors, manual actions, security warnings.
- ⬜ **Daily (first week)** — Check GHL: leads arriving correctly, sequences firing as expected, no broken automation triggers.
- ⬜ **Weekly (first month)** — Lighthouse audit on top 5 pages; address regressions.
- ⬜ **Weekly (first month)** — Broken-link sweep (Screaming Frog or Ahrefs Site Audit) to catch anything the migration missed.
- ⬜ **30-day mark** — Compare organic traffic to pre-cutover baseline. Acceptable to be down 5–15% temporarily. If down >20%, audit the redirect map for missing URLs.
- ⬜ **60–90 day mark** — Full Lighthouse + SEO audit. Document baseline for ongoing optimization. Cancel WordPress hosting if not already.
- ⬜ **Quarterly** — Refresh `/llms.txt` with any new authority signals, new cornerstone essays, updated trust numbers.

---

## Rollback Plan

If something breaks badly within the first 24 hours after cutover:

1. **Switch DNS back** to WPX Cloud IPs (`194.1.147.28` / `194.1.147.42`). With TTL=300s, takes 5–15 minutes globally.
2. **Diagnose** what broke on Vercel (Vercel Dashboard → Function Logs / Runtime Logs).
3. **Fix in code**, redeploy via `vercel --prod`, verify on `aa-site-one.vercel.app`.
4. **Re-cut DNS** back to Vercel when fixed.

The hacked WP install is still on the public internet during this window (as fallback), but the gambling-spam injection will be visible again until cutover. Tradeoff acknowledged.

---

## Sign-off

- **Date of cutover:** ____________________
- **Dan** _____________________________ (technical sign-off — checklist complete)
- **Michael** _________________________ (authorize cutover)

---

*Staging URL: https://aa-site-one.vercel.app · Repo: `aa-site/` · Production target: `awakenedacademy.com` (currently still on WPX Cloud / WordPress)*
