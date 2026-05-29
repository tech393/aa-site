# DHARMA KEYS — STYLE GUIDE

*The visual spec for the Dharma Keys funnel: opt-in page, sales page, both thank-you pages, free reading, full reading.*

*v1 — 2026-05-26. Built off `Context/brand-design.md` + `PHOTO-STYLE-GUIDE.md`. Locks the brown-to-near-black text change Michael called for.*

---

## ONE-LINE RULE

**Two families, on purpose. Night sky for the pages. Lavender parchment for the readings. Same gold, same amethyst, same logic — different skins for different jobs.**

The pages are the doorway — public, mystical, indigo, gold. The readings are the document she holds — private, sacred, lavender parchment with amethyst purple accents and near-black text. She moves from the doorway into the document and the two feel like one mystical journey.

---

## THE TWO FAMILIES

### Family A — Night Sky (pages)

Used on: free opt-in page, paid sales page, free thank-you page, paid thank-you page.

Why: public-facing, mystical, lead-magnet energy. Astrological theme without astrology-speak. Pulls the reader in.

### Family B — Lavender Parchment (readings)

Used on: free reading PDF, full reading PDF.

Why: this is the document she holds, prints, returns to. Sacred-text feel. Near-black text for readability over 7–27 pages.

---

## COLOUR TOKENS — LOCKED

### Family A — Night Sky

| Token | Hex | Where it's used |
|---|---|---|
| `--bg-base` | `#1E0E3A` | Deep indigo — primary background |
| `--bg-mid` | `#2A1555` | Mid purple — gradient stop, card backgrounds |
| `--amethyst` | `#A864C7` | Accent — sparingly, for glows and emphasis |
| `--amethyst-deep` | `#6B2D8E` | Darker amethyst — borders, secondary accents |
| `--gold` | `#D4A94F` | Primary gold — CTAs, accents, dividers |
| `--gold-bright` | `#F2D08A` | Highlight gold — hover, glow, hero buttons |
| `--gold-deep` | `#9E7C35` | Muted gold — small text, labels |
| `--cream` | `#FCF5E8` | Body text colour on dark — high readability |
| `--cream-muted` | `#E5D8BD` | Secondary text on dark |
| `--muted` | `#A697B8` | Tertiary text — fine print, meta |
| `--rose` | `#D4A5B8` | Error/alert states only |

### Family B — Lavender Parchment (the readings)

| Token | Hex | Where it's used |
|---|---|---|
| `--cream` | `#ECE4EA` | Primary background — every page of every reading. Cool lavender-cream. Replaces old warm `#F2E8D5` (which read brown). |
| `--cream-paper` | `#F4EEF1` | Explainer panels, pullquote / callout backgrounds |
| `--ink` | `#0F0A06` | **Body text** — near-black with a faint warm undertone. Replaces old `#2A1A0F` (brown) |
| `--ink-soft` | `rgba(15,10,6,0.80)` | Secondary text — leads, supporting copy |
| `--ink-muted` | `rgba(15,10,6,0.60)` | Tertiary text — captions, footer, page numbers |
| `--line` | `rgba(74,31,102,0.18)` | Rules, separators — faint amethyst, not brown |
| `--amethyst` | `#6B2D8E` | Section headings, gift names, sparkle dividers, eyebrows — primary accent. Replaces teal in the readings. |
| `--amethyst-deep` | `#4A1F66` | Big titles, leads — deeper purple for emphasis |
| `--amethyst-soft` | `#9B6BBA` | Sparkle dividers — softer purple |
| `--gold` | `#C9A04C` | Secondary upgrade-CTA accents, the rare gold highlight |
| `--gold-deep` | `#9F7E38` | "Or — go deeper" small label, statline numbers |
| `--rose` | `#C47E7E` | Optional warm accent (currently unused) |

**The change that just shipped:**

- Background moved from warm cream `#F2E8D5` (which read brown) to cool lavender `#ECE4EA`. The whole reading no longer reads brown — it reads soft mystical purple-cream that matches the night-sky opt-in page family.
- Primary accent moved from teal `#0F5F55` to amethyst `#6B2D8E`. Titles, gift names, eyebrows, sparkle dividers, pullquote rules, page numbers — all amethyst.
- `--ink` text colour now near-black `#0F0A06` (was the old brown `#2A1A0F`).
- Body text size up from 11.5pt to 12.2pt. Intro paragraphs to 12.4pt. Titles up to 28pt. Bigger and easier to read.
- Booking URL is now a live, clickable link inside the PDF: `https://awakenedacademy.com/schedule`. No more "check your email."
- Free reading's last page now carries the paid $17 upgrade as a secondary CTA underneath the primary free-call CTA.

---

## TYPOGRAPHY

### Family A — Night Sky pages

| Role | Stack | Notes |
|---|---|---|
| Display / hero | `'Cormorant Garamond', Georgia, serif` | Light weight, italic for emotion, large tracking |
| Eyebrow / label | `'Cinzel', serif` | All-caps, wide tracking, gold |
| Body | `'Inter', sans-serif` | 400–500 weight, 16–18px |

### Family B — Lavender Parchment readings

| Role | Stack | Notes |
|---|---|---|
| Display / hero | `'Fraunces', 'Lora', Georgia, serif` | 400–500 weight, very slight optical-size tuning |
| Eyebrow / label | `'Inter', sans-serif` | 600 weight, 0.3em letter-spacing, gold-deep |
| Body | `'Inter', sans-serif` | 400 weight, 11.5pt, 1.74 line-height |
| Italic leads / pullquotes | `'Fraunces', serif italic` | The reading's voice — used for setup lines and resonant turns |

---

## DESIGN PRIMITIVES

These appear in both families.

| Primitive | Family A | Family B |
|---|---|---|
| **Logo mark** | Gold sacred-geometry on indigo | Gold sacred-geometry on cream |
| **Sparkle divider** (`✦`) | Gold, centred between sections | Gold, centred between sections |
| **Pullquote** | Indigo card with gold rule, cream italic text | Cream-paper card with gold side-rules, gold-deep italic text |
| **CTA button** | Gold-bright fill, indigo text, glow on hover | Cream-paper card with gold left rule — readings are not transactional, the "CTA" is an invitation |
| **Eyebrow over title** | Gold, all caps, wide tracking | Gold-deep, all caps, wide tracking |

---

## VISUAL FEEL — WHAT EACH FAMILY ASKS THE VIEWER

### Family A — Night Sky asks:
*"What if I could finally see what makes me different?"*

The page is the night sky just before dawn. Stars, gold light, possibility. Mystical but grounded. The reader feels she has arrived somewhere real.

### Family B — Lavender Parchment asks:
*"What if this was always true about me — and I just needed someone to name it?"*

The reading is a sacred letter. Warm, intimate, slow. The reader feels she's been given a real thing she can return to.

---

## WHAT'S OUT — AUTO-NAY ON BOTH FAMILIES

- **True cold black `#000`** — too sharp against cream, too corporate against indigo. Use `#0F0A06` on cream, `#FCF5E8` (cream) text on indigo.
- **Pure white `#FFF`** anywhere — always cream/parchment instead.
- **Cool blue or grey-blue gradients** — the brand is warm. Indigo is warm-purple, not cold-blue.
- **Neon, electric, oversaturated** anything.
- **Sans-serif only.** Always pair Inter with a serif (Fraunces on readings, Cormorant on pages).
- **Em-dashes for style** in body copy. (Em-dashes for grammar are fine.)
- **Brown body text on cream.** Replaced as of 2026-05-26.

---

## PHOTOGRAPHY — REFERENCE

The full photography spec lives at `/PHOTO-STYLE-GUIDE.md` (workspace root). For Dharma Keys specifically:

### One-line rule

*Warm golden-hour light. Vast contemplative space. The viewer projects herself INTO the picture — she is never being looked at by it.*

### The 5-question filter

| # | Question | YAY | NAY |
|---|---|---|---|
| 1 | **Light** | Golden hour, sunset, stars over horizon | Midday, fluorescent, cold daylight |
| 2 | **Palette** | Gold, orange, pink, deep purple, navy-to-pink | Cold blue-white, stark grey, corporate |
| 3 | **Subject** | Vast nature, or person NOT facing camera | Person facing lens, posed, smiling at camera |
| 4 | **Framing** | Wide negative space, subject small in big world | Tight, busy, edge-to-edge |
| 5 | **Vibe** | Quiet, contemplative, sacred, inviting | Loud, kinetic, sales-y, "look at me" |

All YES → in. One NO → second opinion. Two+ NO → out.

### Canon shots used in the Dharma Keys funnel

| Shot | Where it appears |
|---|---|
| Shot 3 — Stars over horizon | Opt-in hero, sales page hero (the cosmic / mystical anchor) |
| Shot 1 — Sunset sky / atmosphere | Section dividers, background overlays |
| Shot 5 — Woman from behind in landscape | Sales page mid-section, "this could be you" |
| Shot 8 — Hands / mudra / meditation detail | Sales page meditation-content sections |
| Shot 11 — Sacred object (book glowing in hands) | Anywhere the "reading itself" is referenced |

### Auto-NAY for this funnel

- Headshots, eye contact with camera, posed coaching stock
- Office, desk, meeting room
- "Diverse smiling team," handshakes, group shots
- Anyone holding a clipboard or laptop
- Bright corporate clothing, blazers, headsets
- Stock that doesn't pass the 5-question filter

### AI image generation

Three paths, per `PHOTO-STYLE-GUIDE.md`:
- **Path A — Upscale existing photos** (this week, ~4 hours, near-zero risk)
- **Path B — Train Michael LoRA** for atmospheric/distance shots only (next 30 days)
- **Path D — Real photo shoot** for founder portraits (Q3 budget)

**Never use AI for founder portraits.** Atmospheric and silhouette only.

---

## QUALITY GATE — RUN BEFORE SHIPPING ANY DHARMA KEYS ASSET

| # | Check | Pass = |
|---|---|---|
| 1 | Which family is this? | Night Sky OR Lavender Parchment — never mixed |
| 2 | Are the tokens locked? | Hex values match the tables above exactly |
| 3 | Body text on cream | `#0F0A06` (near-black) — NOT brown |
| 4 | Type stack | Fraunces+Inter on readings, Cormorant+Cinzel+Inter on pages |
| 5 | Sparkle divider, eyebrow, pullquote | Match the primitives table |
| 6 | Photography | Passes the 5-question filter |
| 7 | Logo | Awakened Academy® mark, gold, with circle motif |
| 8 | Print test (readings) | Holds up at 100% on Letter paper — no muddy text, no orphan lines |

If any check fails → fix before showing Michael.

---

## CHANGELOG

| Date | What | Why |
|---|---|---|
| 2026-05-26 | v1 built. Locked two-family system. Swapped `--ink` from `#2A1A0F` (brown) to `#0F0A06` (near-black). Documented all tokens, type stacks, primitives. Referenced PHOTO-STYLE-GUIDE.md for photography. | Michael flagged brown text reading muddy on cream. Locked the change across both reading PDFs. |
| 2026-05-26 | v2. Shifted readings from warm cream (`#F2E8D5`) to cool lavender (`#ECE4EA`). Replaced teal accents with amethyst purple (`#6B2D8E`). Bigger body text — 12.2pt body, 12.4pt intro, 28pt titles. Live booking link wired into Next Step page (`awakenedacademy.com/schedule`). Added paid $17 upgrade as secondary CTA on the free reading's last page. | Michael flagged the readings still read brown — the warm-cream background was the cause. Cool lavender removes the brown read and pulls the readings into the same mystical purple family as the opt-in page. |

---

*Source of truth for the Dharma Keys funnel. Update only when the canon shifts. Keep all other AA products consistent with `Context/brand-design.md` and `PHOTO-STYLE-GUIDE.md`.*
