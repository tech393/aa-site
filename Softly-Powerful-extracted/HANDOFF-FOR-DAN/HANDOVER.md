# Softly Powerful Funnel — Handover for Dan

Everything you need to put the **Softly Powerful** funnel live. This folder is self-contained: three pages, all images, all audio. Pages are pre-linked to each other — you only need to wire up the three integration points listed below.

---

## What this funnel is

A free audio mini-course for **introverts and empaths** ("Softly Powerful — The Introvert's Guide to Success"). It builds trust with the 16-session audio course, then invites the right people onto a free Sacred Session call about becoming a paid spiritual coach, author, or course creator.

**The flow:**

1. **1-optin.html** — landing/opt-in page. Visitor enters first name + email.
2. **2-course.html** — the mini-course. Plays the intro + 16 sessions, one at a time. Has a "Watch the Free Webinar" button and ends with a soft CTA.
3. **3-sacred-session.html** — books the free call (GHL calendar).
4. **4-webinar.html** — the bonus webinar page (opened from the course button). Hosts the Vimeo talk + a "Talk to a Coach" CTA.

```
Opt-in  →  (GHL adds contact + sends email)  →  Course page  →  Sacred Session booking  →  you close
```

---

## Folder contents

```
HANDOFF-FOR-DAN/
├── 1-optin.html            ← opt-in page
├── 2-course.html           ← audio mini-course (17 sessions)
├── 3-sacred-session.html   ← Sacred Session booking page
├── images/                 ← 3 images used by the pages
│   ├── sp-original-banner.jpg
│   ├── sp-reading.jpg
│   └── sp-tea.jpg
└── audio/                  ← 17 MP3 sessions (the course)
```

The pages reference assets with relative paths (`images/...` and `audio/...`). Keep the folder structure intact and they'll work as-is.

---

## THREE things to wire up (the only setup needed)

### 1. Opt-in form → GHL  (in `1-optin.html`)

Near the bottom of the file, find this line:

```js
var CONFIG = { GHL_WEBHOOK_URL: 'YOUR_GHL_INBOUND_WEBHOOK_URL_HERE', THANK_YOU_URL: '2-course.html', ... };
```

- Replace `YOUR_GHL_INBOUND_WEBHOOK_URL_HERE` with the **GHL inbound webhook URL** for this funnel's workflow.
- The form sends `first_name`, `email`, and `source: 'optin-softly-powerful'` as JSON.
- `THANK_YOU_URL` is already set to the course page. If you host the course page at a different URL, update this to the full live URL.
- While the webhook is still the placeholder, the form runs in **test mode** (logs to console, still forwards to the course page) so you can preview the flow.

### 2. Sacred Session calendar  (in `3-sacred-session.html`)

Find the calendar embed block (marked with a comment). Replace **both** `PASTE_CALENDAR_ID` spots with the Sacred Session calendar ID:

```html
<iframe src="https://api.leadconnectorhq.com/widget/booking/PASTE_CALENDAR_ID" ... id="PASTE_CALENDAR_ID_booking"></iframe>
<script src="https://link.msgsndr.com/js/form_embed.js"></script>
```

In GHL: **Calendars → the Sacred Session calendar → Share → Embed**, copy the ID. The `form_embed.js` script is already included and auto-resizes the widget.

### 3. Host the audio + images

- Upload the **`audio/`** folder and **`images/`** folder wherever the pages are hosted (alongside the HTML), so the relative paths resolve. 
- If you'd rather serve the MP3s from a CDN or the WordPress media library, upload the 17 files and update the `src` paths in `2-course.html` (they're in the `SESSIONS` list near the bottom — each `f:` value is the filename without `.mp3`).

---

## Notes / things that are already done

- **Cross-page links are set:** opt-in forwards to the course page; the course CTA links to the Sacred Session page.
- **Footer links** point to `awakenedacademy.com/privacy-policy` and `/earnings-disclaimer` — confirm those live pages exist.
- **The audio player** is custom (one session at a time, progress ring, auto-advances to the next session). No plugin needed — it's plain HTML/JS.
- **Bonus webinar is its own page** (`4-webinar.html`). The course page has a "Watch the Free Webinar" button that opens it; it is NOT embedded inline. On the webinar page: the Vimeo talk "The Spiritual Introvert's Guide to a Meaningful, Prosperous Online Career" (https://vimeo.com/227722488), an honest note that it's an older video we've updated since, and a "Talk to a Coach" CTA inviting them to hear about everything added since. It streams from Vimeo — no setup needed. Feel free to link the same `4-webinar.html` from other pages too.
- **Mobile:** all three pages are responsive (the course player stacks to a single column).
- **Source tag** on opt-in submissions is `optin-softly-powerful` — use it to trigger the right GHL workflow / email sequence.

---

## Suggested GHL workflow (for reference)

1. Inbound webhook receives the opt-in (name + email, tag `optin-softly-powerful`).
2. Add/Update contact, apply tag `softly-powerful`.
3. Send the welcome email with the link to the course page.
4. (Optional) short follow-up sequence nudging them to listen and, when ready, book a Sacred Session.
5. Sacred Session bookings flow into the calendar → notify the closer.

---

*Funnel: Softly Powerful (introvert audio course → Sacred Session). Package generated 2026-05-29. Source pages live in `02-FUNNELS/awakenedacademy-site/06-optin-pages/02-softly-powerful/`.*
