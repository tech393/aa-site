# MAKE.COM SCENARIO SPEC — DHARMA KEYS FREE READING

*The end-to-end automation that turns a free opt-in form submission into a personalised Dharma Keys PDF in the reader's inbox. Built so Dan can wire this exactly as written, no guessing.*

*v1 — 2026-05-26.*

---

## ONE-LINE SUMMARY

`Opt-in form → GHL → Make.com (Claude writes the reading + PDF service renders it) → Email with PDF → GHL tag updated.`

Eight modules in Make.com. Estimated build time: 4–6 hours. Estimated monthly cost: ~$30 (Claude API + Make.com plan; everything else is free or already paid).

---

## PIPELINE DIAGRAM

```
┌──────────────────────────────────────────────────────────────────┐
│  STEP 1.  Free opt-in form submission                            │
│           (name, email, date_of_birth, time_of_birth, place)     │
└──────────────┬───────────────────────────────────────────────────┘
               │
               ▼  POST (JSON)
┌──────────────────────────────────────────────────────────────────┐
│  STEP 2.  GHL Inbound Webhook                                    │
│           Creates / updates contact with tag                     │
│           "dharma-keys-free-pending"                             │
└──────────────┬───────────────────────────────────────────────────┘
               │  Workflow trigger
               ▼
┌──────────────────────────────────────────────────────────────────┐
│  STEP 3.  GHL Workflow → Webhook → Make.com                      │
│           Sends contact fields to Make.com scenario              │
└──────────────┬───────────────────────────────────────────────────┘
               │
               ▼
┌══════════════════════════════════════════════════════════════════┐
║  MAKE.COM SCENARIO — 8 MODULES                                   ║
║                                                                  ║
║  1. Webhook (Custom)         receive form data                   ║
║  2. Anthropic Claude          write the personalised reading     ║
║  3. HTTP                      POST to PDF service /generate-file ║
║  4. Tools > Set Variable      filename, email subject, etc.      ║
║  5. Email (Gmail/SendGrid)    send with PDF attached             ║
║  6. GHL API                   update contact tag → "sent"        ║
║  7. Router error path         on failure: tag → "failed" + alert ║
║  8. Webhook Response          200 OK back to GHL                 ║
╚══════════════════════════════════════════════════════════════════╝
```

---

## STEP-BY-STEP: BUILDING THE MAKE.COM SCENARIO

### Prerequisites

Before Dan opens Make.com, three things need to exist:

1. **GHL Inbound Webhook URL** — created in GHL, pasted into the opt-in page's `CONFIG.GHL_WEBHOOK_URL`.
2. **PDF Service deployed to Railway** — the `pdf-service/` folder pushed, returning a public URL like `https://dharma-keys-pdf-XXXX.up.railway.app`.
3. **Anthropic API key** — generated at console.anthropic.com.

### MODULE 1 — Webhook (Custom Webhook)

Make.com's "Webhooks > Custom webhook" module.

- **Method:** POST
- **Expected body (JSON):**
  ```json
  {
    "first_name": "Annie",
    "email": "annie@example.com",
    "date_of_birth": "1985-03-14",
    "time_of_birth": "07:23",
    "birth_place": "Vancouver, Canada"
  }
  ```
- **Determine data structure:** click "Re-determine data structure" and submit one test payload. Save the URL Make.com gives you — that's what GHL's workflow will POST to.

### MODULE 2 — Anthropic Claude (HTTP module)

Make.com's "HTTP > Make a request" module pointed at the Claude Messages API.

- **URL:** `https://api.anthropic.com/v1/messages`
- **Method:** POST
- **Headers:**
  - `x-api-key`: `{{anthropic_api_key}}` (store as a Make.com env variable)
  - `anthropic-version`: `2023-06-01`
  - `Content-Type`: `application/json`
- **Body type:** Raw, application/json
- **Body:**
  ```json
  {
    "model": "claude-opus-4-6",
    "max_tokens": 4000,
    "messages": [
      {
        "role": "user",
        "content": "[PROMPT — see below]"
      }
    ]
  }
  ```

**The Claude prompt for the FREE reading** (drop in as the `content` value, with Make.com variables interpolated):

```
You are writing a personalised Dharma Keys free reading for a real person, based on her birth chart and the dharma framework in Michael Mackintosh's book The Dharma Keys. The reading is delivered as a PDF and feels like a sacred letter, not a marketing piece.

HER BIRTH DATA:
- Name: {{1.first_name}}
- Date of birth: {{1.date_of_birth}}
- Time of birth: {{1.time_of_birth}} (if "unknown" or empty, use the chart's noon default and lean on sun-sign + life-stage rather than house/rising specifics)
- Place of birth: {{1.birth_place}}

WRITE THE FREE READING IN EXACTLY THIS FORMAT. The PDF service requires these section markers, verbatim. Do not add other markers, do not skip any markers.

=== OPENING ===
A 5–7 paragraph opening that describes who she is as a guide, written second-person ("You..."). Warm, specific, grounded. Translate astrological wiring into plain human terms — what she experiences, how she moves through the world, what others feel in her presence. Name what she carries that the world is short of.
End with one short italic-style line on its own paragraph, prefixed with [[LEAD]]:
[[LEAD]] One closing line that names her path with a heart in a single image.

=== KEY: Your Power Key | <three named gifts, separated by commas — e.g. "The Teacher, The Seer, The Translator"> ===
4–6 paragraphs naming her real gifts. Three of them. Each gift gets its own named identity (capitalised). Describe what each gift LOOKS like in her life — what people experience when they meet it, how it shows up in her work, what its professional value is. Then end with which one is THE one to build her life on — the Diamond.

=== QUESTION ===
One contemplation question for the gift section.

=== KEY: Your Shadow Key | <one evocative subtitle, max 6 words> ===
4–6 paragraphs naming the ONE pattern that has been quietly holding her back. Compassionate, specific, no judgement. Name what the pattern sounds like in her head (internal script). Name what it has cost her in BOTH intimacy AND income. Name the gift hidden inside the shadow. Do not soften — the discomfort IS the accuracy.

=== QUESTION ===
One contemplation question for the shadow section.

=== CLOSE ===
A 3-4 paragraph synthesis. What she already has (be specific — name 2-3 things). What she needs to learn or finish. The single most important move ahead of her. Warm. Generous. Not a paywall — a real takeaway.
End with one [[LEAD]] line that gives her a sentence to hold.

VOICE RULES:
- Second person ("You..."), never third person.
- No planet names, no zodiac signs, no astrology jargon, no "you have Saturn in...". Translate every astrological detail into plain human terms.
- Short sentences. Warm but precise. No flowery openings, no AI triplets ("clarity, purpose, and vision"), no "embark", no "journey", no "unlock", no "step into your power".
- Tie the shadow pattern to BOTH intimacy AND income.
- Italicise resonant phrases by wrapping them in single asterisks: *like this*.
- No invented stats, no testimonials, no quotes from her, no claims about specific events in her life. Only describe wiring and patterns.
- If birth time is unknown: skip rising-sign / house specifics, lean on sun sign + life-stage. Don't fabricate.

LENGTH TARGET: 1400–1800 words total. The PDF service handles layout — just produce the text in the format above. The PDF will render this as: Cover → Intro letter → "You Are an Awakened Guide" (the Opening) → "Your Superpowers" (the Power Key) → "Your Shadow Key" → "What You Need" (the Close) → "Your Next Step" page (fixed in template, with booking link + paid upgrade).
```

- **Parse response:** Make.com will get back a JSON object. The reading text lives at `body.content[0].text`. In subsequent modules, reference it as `{{2.body.content[].text}}` (Make.com flattens the array).

### MODULE 3 — HTTP: POST to PDF Service

The deployed Railway service's `/generate-file` endpoint.

- **URL:** `{{PDF_SERVICE_URL}}/generate-file`  (e.g. `https://dharma-keys-pdf-XXXX.up.railway.app/generate-file`)
- **Method:** POST
- **Headers:** `Content-Type: application/json`
- **Body type:** Raw, application/json
- **Body:**
  ```json
  {
    "name": "{{1.first_name}}",
    "birth_date": "{{1.date_of_birth}}",
    "birth_time": "{{1.time_of_birth}}",
    "birth_place": "{{1.birth_place}}",
    "tier": "free",
    "reading_text": "{{2.body.content[].text}}"
  }
  ```
- **Parse response:** check **"Get a file"** so Make.com receives the response as a binary file attachment. The PDF comes back as the response body with `Content-Type: application/pdf`.

### MODULE 4 — Set Variable (Tools)

- **Variable: `pdf_filename`** = `Dharma-Keys-Reading-{{1.first_name}}.pdf`
- **Variable: `email_subject`** = `Your Dharma Keys Reading, {{1.first_name}}`

### MODULE 5 — Send Email (Gmail OR SendGrid OR GHL email)

Pick one — Gmail is fastest to set up. Recommend **Gmail** through Make.com's native Gmail integration unless deliverability becomes a problem, then move to SendGrid.

- **From:** `michael@awakenedacademy.com` (or chosen sender)
- **From name:** `Michael Mackintosh, Awakened Academy`
- **To:** `{{1.email}}`
- **Subject:** `{{4.email_subject}}`
- **Body (HTML):**
  ```html
  <p>{{1.first_name}},</p>

  <p>Your Dharma Keys reading is attached.</p>

  <p>Read it slowly. Find somewhere you will not be interrupted. The chart it is built from is yours alone — there is no one else on earth with this exact reading.</p>

  <p>When you're ready, the next step is one conversation:<br>
  <a href="https://awakenedacademy.com/schedule">awakenedacademy.com/schedule</a></p>

  <p>Lots of love,<br>Michael 🙏</p>

  <p style="font-size:0.85em;color:#888;margin-top:24px;">P.S. If you want to go deeper on your own first, the full ten-Key reading is available here: <a href="https://awakenedacademy.com/dharma-code">awakenedacademy.com/dharma-code</a></p>
  ```
- **Attachments:** add module 3's response body as a file. Set filename to `{{4.pdf_filename}}`.

### MODULE 6 — GHL: Update Contact Tag

- **Find contact** by `{{1.email}}`
- **Add tag:** `dharma-keys-free-sent`
- **Remove tag:** `dharma-keys-free-pending`
- **Set custom field (optional):** `reading_sent_at` = `{{now}}`

### MODULE 7 — Error Handler Route (Router)

After Module 3, attach a Router. The main path is success; the error path is for when the PDF service returns 500 or Claude times out.

On error:
- Update GHL contact tag: `dharma-keys-free-failed`
- Send email to `vip@awakenedacademy.com` with the error details
- Webhook response: 500 (so GHL knows to retry)

### MODULE 8 — Webhook Response

Final module. Sends a 200 OK back to GHL so the workflow knows the scenario completed.

- **Status:** 200
- **Body:** `{"status": "sent", "email": "{{1.email}}"}`

---

## GHL SETUP — what Dan does in GHL

### 1. Create the Inbound Webhook

In GHL: **Settings → Integrations → Inbound Webhooks → Create New**

- Name: `Dharma Keys Free Opt-In`
- Method: POST
- Trigger field mapping:
  - `first_name` → Contact First Name
  - `email` → Contact Email
  - `date_of_birth` → Custom field "Date of Birth"
  - `time_of_birth` → Custom field "Time of Birth"
  - `birth_place` → Custom field "Birth Place"
- Save. Copy the webhook URL.

Paste that URL into the free opt-in page's `CONFIG.GHL_WEBHOOK_URL` (line ~432 in `dharma-code-free-optin.html`).

### 2. Create a GHL Workflow

In GHL: **Automation → Workflows → New Workflow**

- **Trigger:** Inbound Webhook received (the one created above)
- **Action 1:** Add tag `dharma-keys-free-pending`
- **Action 2:** Send Webhook (this is the one to Make.com)
  - URL: (the Make.com Custom Webhook URL from Module 1)
  - Method: POST
  - Body: JSON with `first_name`, `email`, `date_of_birth`, `time_of_birth`, `birth_place`

### 3. Add the custom fields if they don't exist

- Date of Birth (date field)
- Time of Birth (text field)
- Birth Place (text field)

---

## ENV VARIABLES TO STORE IN MAKE.COM

Set these once as Make.com env variables so Dan doesn't paste keys inline:

| Variable | Value |
|---|---|
| `ANTHROPIC_API_KEY` | (from console.anthropic.com) |
| `PDF_SERVICE_URL` | `https://dharma-keys-pdf-XXXX.up.railway.app` |
| `GHL_API_KEY` | (from GHL → Settings → API) |
| `ALERT_EMAIL` | `vip@awakenedacademy.com` |

---

## DEPLOYING THE PDF SERVICE TO RAILWAY

The service lives at `pdf-service/` in this workspace. It's already Docker-ready.

### Steps

1. Push the `pdf-service/` folder to a GitHub repo (private).
2. On Railway: **New Project → Deploy from GitHub repo** → select the repo.
3. Railway will detect the Dockerfile and build automatically.
4. Once deployed, Railway gives you a public URL — copy it into Make.com's `PDF_SERVICE_URL`.
5. Test: `curl https://your-railway-url.up.railway.app/health` should return `{"status":"ok"}`.

### What's in the service

- `dharma_keys_pdf_service.py` — Flask + WeasyPrint, three endpoints (`/generate-file`, `/generate`, `/health`).
- `requirements.txt` — Flask, WeasyPrint, gunicorn.
- `Dockerfile` — installs the WeasyPrint system libs.

The service is **renderer-only**. It does NOT calculate charts. It does NOT call Claude. It receives the reading text already written (by the Make.com Claude step) and turns it into the branded PDF.

---

## TESTING THE PIPELINE END TO END

Before going live, run one test:

1. Open the free opt-in page in a browser.
2. Submit a test entry with your own birth data.
3. Watch Make.com's scenario execution log.
4. Check your inbox for the PDF.
5. Check GHL — your contact should have tag `dharma-keys-free-sent`.

If any module fails, Make.com's execution log will tell you exactly where. Most common failures:

- **Claude returns an error** → API key wrong, or request body malformed.
- **PDF service returns 500** → reading_text doesn't match the expected `=== OPENING === / === KEY: ... ===` format. Check the Claude prompt.
- **Email doesn't send** → Gmail OAuth expired, or attachment is too big (PDFs are ~50-80KB so this should not happen).
- **GHL tag not added** → GHL API key wrong, or contact email not found.

---

## ESTIMATED COSTS (monthly)

| Service | Cost |
|---|---|
| Make.com (Pro plan, 10,000 ops/mo) | $16/mo |
| Anthropic Claude API (~$0.015 per reading at Opus rates) | $15/mo at 1,000 readings |
| Railway (PDF service hosting) | $5/mo |
| Gmail / SendGrid (free tier handles thousands/mo) | $0 |
| **Total** | **~$36/mo** at 1,000 free readings/month |

Per reading cost: ~$0.04 — meaning a free reading that converts to a $17 sale at 1% conversion still has 425x ROI on direct cost.

---

## OPEN DECISIONS BEFORE GOING LIVE

1. **Pick the email sender** — Gmail vs SendGrid vs GHL email module. Recommend Gmail for speed; move to SendGrid if deliverability becomes an issue.
2. **Pick the Claude model** — **Recommend `claude-sonnet-4-6` for the free reading** (~5x cheaper than Opus at ~$0.003 per reading vs $0.015). Reserve Opus for the paid full reading where quality matters more. Test five readings on each first; if Sonnet quality holds, switch all to Sonnet.
3. **Credibility stats are now locked at 650+ certified coaches** (matches workspace canonical). All assets have been updated. No further action needed.

---

## CRITICAL ADDITIONS — RATE LIMITING, CAPTCHA, CHART CALC

These are production safeguards. Skip them and the funnel ships with real risk.

### A. Rate limiting per email (REQUIRED before launch)

Add a router check BEFORE Module 2 (Claude). Look up the contact in GHL by email. If a `dharma-keys-free-sent` tag exists from within the last 24 hours, abort the scenario and respond 429 to GHL. Otherwise proceed.

**Why this matters:** without it, one bad actor can submit 10,000 readings overnight and rack up $40+ in Claude API costs. Cheap to prevent, expensive to discover.

### B. CAPTCHA on the opt-in form (REQUIRED before launch)

Add **Cloudflare Turnstile** to `dharma-code-free-optin.html` — it's free, invisible to most users, and stops bots cold.

Steps:
1. Sign up at `dash.cloudflare.com/?to=/:account/turnstile`. Create a site. Get a site key.
2. In `dharma-code-free-optin.html`, add `<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>` to `<head>`.
3. In the form, add `<div class="cf-turnstile" data-sitekey="YOUR_SITE_KEY" data-callback="onCaptchaSuccess"></div>` above the submit button.
4. Block the submit handler until `onCaptchaSuccess` fires.
5. On Make.com side, verify the token via Cloudflare's siteverify endpoint at the very start of the scenario.

### C. Chart calculation step (STRONGLY RECOMMENDED)

Without this, Claude is writing based on birth-data text strings, not a real natal chart. The reading will be sun-sign personalised at best — not chart-precise. **Add an astrology API call between Module 1 (webhook) and Module 2 (Claude).**

Recommend: **AstrologyAPI.com** — $30/mo for unlimited charts, returns full natal data (Sun/Moon/rising, planets, houses, aspects) as clean JSON.

- **Module 1.5 (new HTTP module):** POST to `https://json.astrologyapi.com/v1/western_horoscope` with birth data. Receive chart JSON.
- **Module 2 (Claude):** include the chart JSON in the prompt as `CHART DATA: {{1.5.body}}` so Claude has real placements to translate.

The Claude prompt above already says "translate astrological wiring into plain human terms" — now Claude has actual placements to translate FROM instead of guessing.

---

## PAID READING FLOW — SECOND MAKE.COM SCENARIO

The free reading scenario above only handles the free path. The paid $17 reading needs its own (shorter) scenario, triggered by the **paid thank-you page form submission** (which collects birth details after payment).

### Paid scenario modules

1. **Webhook receives:** name, email, dob, time_of_birth, birth_place, order_id (from GHL or Stripe webhook).
2. **Immediate confirmation email** — send IMMEDIATELY so the user has receipt:
   - Subject: `Your Dharma Keys Reading — order confirmed, {{first_name}}`
   - Body:
     ```
     {{first_name}},

     Your $17 Dharma Keys reading is ordered. Order #{{order_id}}.

     We have your birth details. Your full ten-Key reading is being created from your chart — twenty-seven pages, written for you, in your inbox within 24 hours.

     Read your free reading in the meantime if you haven't yet — the full reading goes much deeper, but the free reading sets the ground.

     Lots of love,
     Michael 🙏
     ```
3. **GHL tag update:** add `dharma-keys-paid-pending`.
4. **Wait** — Make.com "Sleep" module, set to ~30 minutes (so the paid reading doesn't arrive *instantly* and undermine the "within 24 hours" promise; also gives buffer for any review step you choose to add later).
5. **Astrology API call** — same as free scenario, but more detail (full chart, transits, dasha).
6. **Anthropic Claude (Opus recommended for paid)** — a much longer prompt that produces the full 10-Key reading text in the format the PDF service expects (`=== OPENING === / === KEY: ... === / === BLESSING ===`).
7. **HTTP POST to PDF service** with `tier: "full"`.
8. **Email with PDF attached.** Same template as free, just "Your Full Dharma Keys reading is ready" + Sacred Session invitation + nothing else (no $17 upsell — they already bought).
9. **GHL tag update:** add `dharma-keys-paid-sent`, remove `dharma-keys-paid-pending`.

### Estimated paid reading cost per delivery

| Component | Cost |
|---|---|
| AstrologyAPI call | ~$0.001 |
| Claude Opus prompt (~6000 tokens out) | ~$0.30 |
| PDF rendering | $0 (Railway flat fee) |
| Email | $0 |
| **Total per paid reading** | **~$0.30** |

Margin on a $17 sale = ~$16.70. Healthy.

---

---

*This scenario can ship today once Dan has the GHL webhook URL pasted, the PDF service deployed, and the four env variables set in Make.com.*
