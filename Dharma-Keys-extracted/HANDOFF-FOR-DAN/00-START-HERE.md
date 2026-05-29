# DHARMA KEYS FUNNEL — DAN HANDOFF

*Everything you need to take the Dharma Keys funnel from "content ready" to "live and capturing leads." Estimated total work: 8–12 hours.*

*Last updated: 2026-05-26. v1.*

---

## TL;DR

Open this doc, work top to bottom. Nine numbered steps. When you finish step 9, the funnel is live.

The CONTENT is done — six pages, two PDFs, one PDF-rendering service, one Make.com blueprint. **Your job is the integration layer** — webhooks, deployments, Make.com scenarios, API keys.

---

## THE FUNNEL IN ONE PICTURE

```
                  Cold visitor
                       │
                       ▼
        ┌──────────────────────────────┐
        │  FREE OPT-IN PAGE             │  Step 1: paste GHL webhook URL here
        │  dharma-code-free-optin.html  │  Step 7: add Cloudflare Turnstile
        └──────────────┬───────────────┘
                       │  form POST
                       ▼
        ┌──────────────────────────────┐
        │  GHL INBOUND WEBHOOK          │  Step 1: you create this
        │  + GHL WORKFLOW               │  Step 1: triggers Make.com
        └──────────────┬───────────────┘
                       │  POST
                       ▼
        ┌──────────────────────────────┐
        │  MAKE.COM SCENARIO #1 (FREE)  │  Step 5: you build this (8 modules)
        │  Webhook → AstrologyAPI →     │       per MAKE-COM-SCENARIO-SPEC.md
        │  Claude → PDF service →       │
        │  Gmail → GHL tag              │
        └──────────────┬───────────────┘
                       │  PDF emailed
                       ▼
        ┌──────────────────────────────┐
        │  FREE THANK-YOU PAGE          │  Already built. $17 upgrade block
        │  dharma-code-free-thankyou    │  is wired and live.
        └──────────────┬───────────────┘
                       │  some users click $17
                       ▼
        ┌──────────────────────────────┐
        │  PAID SALES PAGE              │  Checkout URL already wired.
        │  dharma-code-sales-page.html  │
        └──────────────┬───────────────┘
                       │  payment via Stripe/GHL link
                       ▼
        ┌──────────────────────────────┐
        │  PAID THANK-YOU PAGE          │  Birth-data form already built.
        │  dharma-code-paid-thankyou    │  Posts to second GHL webhook.
        └──────────────┬───────────────┘
                       │  POST
                       ▼
        ┌──────────────────────────────┐
        │  MAKE.COM SCENARIO #2 (PAID)  │  Step 6: you build this (9 modules)
        │  Webhook → confirmation email │       per MAKE-COM-SCENARIO-SPEC.md
        │  → wait 30min → AstrologyAPI  │
        │  → Claude (full) → PDF →      │
        │  Gmail → GHL tag              │
        └──────────────┬───────────────┘
                       │  full PDF emailed
                       ▼
                   Customer reads
                  her 27-page reading
```

---

## WHAT'S IN THIS PACKAGE

Everything you need is in this folder. Nothing outside this folder is required.

### Folder structure

```
HANDOFF-FOR-DAN/
├── 00-START-HERE.md                  ← this file
├── 01-pages/                         ← the 4 HTML pages you deploy
│   ├── 01-free-opt-in.html
│   ├── 02-free-thank-you.html
│   ├── 03-paid-sales-page.html
│   └── 04-paid-thank-you.html
├── 02-reading-samples/               ← what the production PDFs should look like
│   ├── free-reading-sample.pdf       (7 pages, Michael's chart)
│   └── full-reading-sample.pdf       (27 pages, Michael's chart)
├── 03-pdf-service/                   ← deploy this to Railway
│   ├── dharma_keys_pdf_service.py
│   ├── Dockerfile
│   ├── requirements.txt
│   └── SAMPLE-free-reading-input.txt (format reference)
└── 04-docs/
    ├── MAKE-COM-SCENARIO-SPEC.md     ← the technical blueprint
    └── Dharma-Keys-Style-Guide.md    ← visual reference
```

### File index

| File | What it is | Lives at (once deployed) |
|---|---|---|
| `01-pages/01-free-opt-in.html` | Free opt-in — captures birth data | `awakenedacademy.com/dharma-keys` (or your chosen URL) |
| `01-pages/02-free-thank-you.html` | "Your reading is on its way" + $17 upgrade block | `/dharma-keys/thank-you` |
| `01-pages/03-paid-sales-page.html` | $17 paid sales page (live design + ten Keys) | `/dharma-code` |
| `01-pages/04-paid-thank-you.html` | Post-payment birth-data form + 24h promise | `/dharma-code/thank-you` |
| `02-reading-samples/free-reading-sample.pdf` | Sample free reading output (Michael's chart) | Reference — service generates per user |
| `02-reading-samples/full-reading-sample.pdf` | Sample full reading output (Michael's chart) | Reference — service generates per user |
| `03-pdf-service/dharma_keys_pdf_service.py` | Flask + WeasyPrint, the PDF renderer | Railway |
| `03-pdf-service/Dockerfile` | Production deploy config | Railway uses this |
| `03-pdf-service/requirements.txt` | Python deps, pinned versions | Railway uses this |
| `03-pdf-service/SAMPLE-free-reading-input.txt` | Exact format Claude must produce | Reference for Make.com prompt |
| `04-docs/MAKE-COM-SCENARIO-SPEC.md` | **The master Make.com blueprint** — both scenarios | Your build guide |
| `04-docs/Dharma-Keys-Style-Guide.md` | Visual + photography reference | Reference only |

---

## STEP-BY-STEP — DO THESE IN ORDER

### STEP 1 — GHL inbound webhook + workflow (15 min)

1. GHL → **Settings → Integrations → Inbound Webhooks → Create New**.
   - Name: `Dharma Keys Free Opt-In`
   - Method: `POST`
   - Field mapping: `first_name` → First Name, `email` → Email, `date_of_birth` → custom field, `time_of_birth` → custom field, `birth_place` → custom field.
   - Save. **Copy the webhook URL.**
2. Paste the URL into `01-pages/01-free-opt-in.html` at line ~432:
   - Find: `GHL_WEBHOOK_URL: 'YOUR_GHL_INBOUND_WEBHOOK_URL_HERE'`
   - Replace with: `GHL_WEBHOOK_URL: 'https://services.leadconnectorhq.com/hooks/...'` (your real URL)
3. GHL → **Automation → Workflows → New Workflow**:
   - Trigger: Inbound Webhook (the one you just created)
   - Action 1: Add tag `dharma-keys-free-pending`
   - Action 2: Send Webhook (this will be Make.com's URL — fill in after Step 5)
4. Add the three custom fields if they don't exist:
   - "Date of Birth" (date field)
   - "Time of Birth" (text field)
   - "Birth Place" (text field)

**Also create a SECOND GHL inbound webhook for the paid flow:**
- Name: `Dharma Keys Paid Birth Data`
- Same field mapping plus `order_id` (text)
- Paste the URL into `01-pages/04-paid-thank-you.html` (look for the form action)
- Create a second GHL Workflow triggered by this webhook → tag `dharma-keys-paid-pending` → send to Make.com paid scenario

---

### STEP 2 — Deploy PDF service to Railway (30 min)

1. Create a private GitHub repo. Call it `dharma-keys-pdf-service`.
2. Copy the entire `pdf-service/` folder contents into the repo root.
   - `dharma_keys_pdf_service.py`
   - `Dockerfile`
   - `requirements.txt`
3. Push to GitHub.
4. Sign in at `railway.app`. Click **New Project → Deploy from GitHub repo**. Select the repo.
5. Railway will auto-detect the Dockerfile and build. Watch the build log — should take 3–5 min.
6. Once deployed, Railway gives you a public URL (e.g. `https://dharma-keys-pdf-production.up.railway.app`).
7. Test it:
   ```bash
   curl https://YOUR-RAILWAY-URL/health
   ```
   Should return: `{"status": "ok", "service": "Dharma Keys PDF Generator"}`

**Save the URL — you'll paste it into Make.com as the `PDF_SERVICE_URL` env variable.**

---

### STEP 3 — Sign up for the APIs (20 min)

You need three accounts. All have free tiers or low monthly costs.

| Service | URL | Cost | What for |
|---|---|---|---|
| **Anthropic Claude** | `console.anthropic.com` | Pay-as-you-go (~$15/mo at 1,000 readings on Sonnet) | Writes the reading text |
| **AstrologyAPI.com** | `astrologyapi.com` | $30/mo unlimited | Calculates real natal charts |
| **Cloudflare Turnstile** | `dash.cloudflare.com` → Turnstile | Free | CAPTCHA on the form |

For each:
1. Sign up.
2. Generate an API key (or for Cloudflare, a site key + secret key).
3. Save them somewhere secure — you'll paste them into Make.com env variables in Step 5.

---

### STEP 4 — Add Cloudflare Turnstile to the opt-in form (15 min)

Without this, bots will spam the form and rack up Claude API costs.

1. In Cloudflare Turnstile dashboard: **Add Site → enter your domain → get site key + secret key**.
2. In `dharma-code-free-optin.html`, add to the `<head>`:
   ```html
   <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
   ```
3. In the form, just above the submit button, add:
   ```html
   <div class="cf-turnstile" data-sitekey="YOUR_CLOUDFLARE_SITE_KEY"></div>
   ```
4. In Make.com scenario #1 (the free scenario), add a first module that POSTs to `https://challenges.cloudflare.com/turnstile/v0/siteverify` with the token to verify it. Block the scenario if verification fails.

---

### STEP 5 — Build Make.com scenario #1 (FREE reading) — 4–6 hours

Follow `MAKE-COM-SCENARIO-SPEC.md` exactly. Section "STEP-BY-STEP: BUILDING THE MAKE.COM SCENARIO."

Set these 4 env variables in Make.com first:

| Variable | Value |
|---|---|
| `ANTHROPIC_API_KEY` | from console.anthropic.com |
| `ASTROLOGY_API_KEY` | from astrologyapi.com |
| `PDF_SERVICE_URL` | from Step 2 (your Railway URL) |
| `ALERT_EMAIL` | `vip@awakenedacademy.com` |

Build the 8 modules in order:

1. Webhook (Custom) — receives form data
2. Cloudflare Turnstile verify — REQUIRED, blocks bots
3. AstrologyAPI HTTP call — calculates real chart
4. Anthropic Claude — writes the reading text (use the prompt in the spec, **claude-sonnet-4-6** for free)
5. HTTP POST to PDF service `/generate-file` — returns the PDF
6. Gmail (or SendGrid) — sends email with PDF attached
7. GHL API — updates contact tag → `dharma-keys-free-sent`
8. Webhook Response 200 — back to GHL

**Add a rate-limit router** between modules 1 and 2: look up contact in GHL, abort if `dharma-keys-free-sent` exists within last 24h.

**Add an error route** off module 3 (PDF service): tag contact `dharma-keys-free-failed`, email yourself the error, response 500.

Once built — copy the Make.com webhook URL (from module 1) and paste it into the GHL workflow from Step 1 ("Send Webhook" action).

---

### STEP 6 — Build Make.com scenario #2 (PAID reading) — 2–3 hours

Follow `MAKE-COM-SCENARIO-SPEC.md` section "PAID READING FLOW — SECOND MAKE.COM SCENARIO."

9 modules. Use **claude-opus-4-6** for paid (quality matters more, margin still healthy at $0.30/reading).

Critical differences from free scenario:
- Module 2 is an **immediate confirmation email** (so the user has receipt before the 24h wait).
- Module 3 is a **Make.com Sleep module** — set to 30 minutes (or longer) so reading doesn't arrive instantly.
- The paid reading uses `tier: "full"` in the PDF service call.
- No CAPTCHA needed (they already paid — bots don't pay $17).
- Add the same GHL webhook URL from Step 1's second webhook to the GHL workflow trigger.

---

### STEP 7 — Final wiring (15 min)

Verify all URLs are pasted in the right places:

| Asset | URL to paste | Currently |
|---|---|---|
| `dharma-code-free-optin.html` line ~432 | GHL Inbound Webhook URL (Step 1) | `YOUR_GHL_INBOUND_WEBHOOK_URL_HERE` placeholder |
| `dharma-code-paid-thankyou.html` (form action) | GHL second webhook (Step 1) | Check this |
| GHL workflow "Send Webhook" actions | Make.com scenario URLs (Step 5 + 6) | Empty until you build |

Deploy the 4 HTML pages to wherever you host them (likely GHL native page builder, or Hostinger, or whatever you're using).

---

### STEP 8 — End-to-end test (30 min)

Before going live publicly:

1. Open the free opt-in page in incognito.
2. Submit your own birth data.
3. Open Make.com — watch the execution log. Every module should turn green.
4. Check your inbox — the PDF should arrive within 2–5 minutes.
5. Open the PDF — verify it's branded, has your name, has the right structure (You Are an Awakened Guide / Your Superpowers / Your Shadow Key / What You Need / Your Next Step).
6. Click the booking link in the PDF — should go to `awakenedacademy.com/schedule`.
7. Click the $17 upgrade link in the PDF — should go to the live payment link.
8. Go back to the free thank-you page — click the $17 button there too.
9. Test the paid flow: buy with a real card (or a Stripe test card if testing through Stripe), submit birth data on paid thank-you, verify confirmation email arrives, verify the full 27-page reading arrives within 24h.

If any step fails: Make.com execution log will tell you exactly which module. Most common failures:
- Claude returns malformed text → adjust the prompt in module 4
- PDF service 500 → check the format markers match (`=== OPENING ===`, etc.)
- Gmail OAuth expired → reconnect
- GHL tag not added → check API key

---

### STEP 9 — Go live (5 min)

1. Update the opt-in page URL in any ads, social posts, or email signatures.
2. Turn off "TEST MODE" — remove the placeholder console.log warnings from the opt-in JS if you want.
3. Send Michael a test reading from your own account so he can see the production output.
4. Hand the front-end URL to Michael.

---

## COSTS

| Service | Monthly | Per reading |
|---|---|---|
| Make.com Pro | $16 | — |
| Anthropic Claude (Sonnet for free, Opus for paid) | ~$15 at 1K free + 50 paid | ~$0.003 (free) / ~$0.30 (paid) |
| AstrologyAPI.com | $30 (unlimited) | $0 |
| Railway (PDF service) | $5 | $0 |
| Cloudflare Turnstile | $0 | $0 |
| Gmail | $0 | $0 |
| **Total** | **~$66/mo** at 1,000 free + 50 paid readings | |

Per paid sale: ~$0.30 cost → $16.70 margin on $17.

---

## OPEN DECISIONS (waiting on Michael, not on you)

These don't block you from finishing your work. Michael answers them as needed:

1. **Final Claude model choice** — Sonnet vs Opus for free. Test both and report back.
2. **Email sender** — Gmail vs SendGrid. Recommend Gmail first.
3. **Whether to add a "team review" step** to the paid scenario (between PDF gen and email send). Currently no human review.

---

## IF SOMETHING'S NOT CLEAR

Three places to look:

1. `MAKE-COM-SCENARIO-SPEC.md` — the detailed module-by-module spec.
2. The actual files in this folder — code is the source of truth.
3. Ping Michael with the specific question (not "this isn't working" — name the module and the error).

---

## WHEN YOU'RE DONE

Drop Michael a message:
> *"Dharma Keys funnel is live. Tested end-to-end with my own birth data. Free reading delivered in X minutes, paid reading scheduled for delivery in Y. Here's the live URL: ..."*

That's the green light.

*— Ship it.*
