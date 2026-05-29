# Dan Handoff — The /books Page + the Free-Book Funnel
*Prepared for Dan. Updated 2026-05-26. This is the single document you need to put everything live.*

---

## WHAT YOU'RE BUILDING

Three pages + one transactional email + one PDF, all in this folder. They form the free-book funnel for *Why The World Needs You*.

**The funnel flow:**
`/books` page → visitor picks *Why The World Needs You* → **opt-in page** → submits name + email → GHL tags the contact, sends the **delivery email** (with the ebook download), adds the contact to the Dharma Code nurture sequence → visitor is redirected to the **thank-you / download page** → downloads the book there too.

Host the ebook PDF **once** and use that one URL in both the delivery email AND the thank-you-page download button.

---

## YOUR BUILD CHECKLIST (in order)

1. [ ] **Host the ebook PDF** — `Why-The-World-Needs-You-FREE-EBOOK.pdf` (in this folder). Upload to GHL or wherever lead-magnet files live. Note the hosted URL.
2. [ ] **Build the thank-you page** in GHL. Use `WTWNY-THANKYOU-PAGE.html` as the design+content spec. Set the Download button `href` to the ebook hosted URL.
3. [ ] **Build the opt-in page** in GHL. Use `WTWNY-OPTIN-PAGE.html` as the design+content spec. Replace the placeholder form (between the `GHL-EMBED START` / `GHL-EMBED END` markers) with the real GHL form embed.
4. [ ] **Configure the opt-in form:**
   - Fields: First Name + Email
   - Tag the contact: `wtwny-free-book`
   - Post-submit redirect: the thank-you page URL (from step 2)
   - Trigger automation (next step)
5. [ ] **Build the delivery-email automation.** Trigger: opt-in form submitted with tag `wtwny-free-book`. Action: send the delivery email — copy the subject line, preview text and HTML from `WTWNY-DELIVERY-EMAIL.md`. Replace `[EBOOK-HOSTED-URL]` with the same hosted URL from step 1.
6. [ ] **Add the contact to the Dharma Code nurture sequence** as part of the same automation.
7. [ ] **Build the `/books` page** in GHL/Next.js. Use `PREVIEW.html` as the design+content spec. Once the opt-in page (step 3) has a real URL, point the *Why The World Needs You* card to it (the placeholder `/free-book` link appears in **two places** on that card — cover link AND button).
8. [ ] **Test the full path end-to-end.** Submit the form with a real email. Confirm: delivery email arrives, Download button works, thank-you page loads, contact gets tagged + added to the nurture, Schedule button on thank-you page resolves.
9. [ ] **Publish.** Replace any old `/books` and `/free-book` versions.

---

## PAGE 1 — `/books`

**File:** `PREVIEW.html`
**Goes live at:** `awakenedacademy.com/books`
**Important:** `/books` is a KEEP page. The URL is printed inside the back matter of Michael's published paperbacks — it must exist and must not 404.

**The 8 books, in order, with verified links:**

| # | Book | Button | Link | Status |
|---|------|--------|------|--------|
| 1 | Why The World Needs YOU | Read it Free | the opt-in page (Page 2) | placeholder `/free-book` — **set to real URL** |
| 2 | Get It Done | Get on Amazon | amazon.com/dp/1631610635 | ✅ verified |
| 3 | Do Nothing, Achieve Everything | Get on Amazon | amazon.com/dp/1499577915 | ✅ verified (2026-05-26) |
| 4 | Change Your Thoughts, Change Your Life | Get on Amazon | amazon.com/dp/B08QW2ZM5G | ✅ verified |
| 5 | Let Go & Awaken | Get on Amazon | amazon.com/dp/B01MTZMDP0 | ✅ verified |
| 6 | My Miracle Journal | Get on Amazon | amazon.com/dp/B0991J7DRV | ✅ verified (2026-05-26) |
| 7 | How to Know God | Get on Amazon | amazon.com/dp/B00IHTRH6G | ✅ verified |
| 8 | Overcoming Ego & Connecting to Your True Self | Get on Amazon | amazon.com/dp/B00JYLH53G | ✅ verified (2026-05-26) |

**All 8 Amazon links confirmed live on amazon.com as of 2026-05-26.** The 3 that were previously flagged ⚠️ have been click-checked.

**Covers** — all 8 are in the `covers/` folder:

| Book | Cover file | Size |
|------|-----------|------|
| Why The World Needs YOU | `why-the-world-needs-you.jpg` | 972×1500 |
| Get It Done | `get-it-done.jpg` | 348×522 |
| Do Nothing, Achieve Everything | `do-nothing-achieve-everything.jpg` | 324×500 |
| Change Your Thoughts, Change Your Life | `divine-affirmation-mantras.png` | 348×522 |
| Let Go & Awaken | `let-go-and-awaken.jpg` | 972×1500 |
| My Miracle Journal | `my-miracle-journal.png` | 504×754 |
| How to Know God | `how-to-know-god.jpg` | 450×724 |
| Overcoming Ego | `overcoming-ego.jpg` | 450×724 |

*The `covers/` folder also contains unused files. Ignore them; only the 8 above are used by the page.*

**Bottom-of-page CTAs (already wired in the file):**
- Primary button → `awakenedacademy.com/spiritual-life-coach-certification`
- Secondary link → `awakenedacademy.com/free-gifts-for-you`

**Hero photo:** the hero is wired to show a background photo of someone reading — file `covers/hero-reading.jpg`. That photo has not been provided yet. Until it's added, the hero falls back to a warm gradient (not broken). Publish without it, or wait for Michael to supply the photo.

---

## PAGE 2 — THE OPT-IN PAGE

**File:** `WTWNY-OPTIN-PAGE.html`
**Goes live at:** a URL you choose — e.g. `awakenedacademy.com/free-book`.
**Purpose:** capture an email in exchange for the free *Why The World Needs You* ebook.

**THE FORM — your main build job.** In the HTML, find the markers:

```
===== GHL-EMBED START =====
... placeholder form ...
===== GHL-EMBED END =====
```

Replace that placeholder with the real **GoHighLevel form embed**. The GHL form must:

1. Collect **First Name + Email**.
2. Tag the contact `wtwny-free-book`.
3. Set the post-submit redirect to the **thank-you page URL** (Page 3).
4. Trigger the **delivery-email automation** (next section).
5. Add the contact to the **Dharma Code nurture sequence**.

**Design notes:** no top navigation, no footer escape routes. Keep it that way. The proof bar and book cover are already in the file.

**Proof bar — Michael's confirmation still needed before publishing.** The opt-in shows: *20+ Years Teaching · 85,000+ 5-Star Reviews · 1,000+ Certified Coaches · 25+ Countries.* The first three cross-check directly against the book's About the Author. The "25+ Countries" line is true (it's in CLAUDE.md / AA's standard credibility set) but is not stated inside the book itself — a reader who downloads the ebook to verify won't find it. Michael's call on whether to keep it, swap it, or drop to 3 stats.

---

## PAGE 3 — THE THANK-YOU / DOWNLOAD PAGE

**File:** `WTWNY-THANKYOU-PAGE.html`
**Goes live at:** the redirect URL set on the opt-in form — e.g. `awakenedacademy.com/free-book-download`.
**Purpose:** what the visitor sees the instant they submit the opt-in form. Hands them the book.

**YOUR MAIN BUILD JOB:** find the `<a class="btn" ...>` element. Set its `href` to the hosted URL of the ebook PDF (same URL the delivery email uses). The current default points at the relative file in this folder so the button works locally as a fallback.

**The secondary CTA** below the download — *"Want to jump ahead?"* with a "Schedule Your Free Call" button — already links to `https://awakenedacademy.com/schedule`. No Dan action needed on that link.

**Design notes:** like the opt-in page — no top nav, no escape routes. Two CTAs only: get the book (primary), schedule a call if they want to jump ahead (secondary).

---

## THE DELIVERY EMAIL

**File:** `WTWNY-DELIVERY-EMAIL.md` — contains the full subject line, preview text, plain-text version, ready-to-paste HTML, plus pre-send QA checklist.

**Triggers:** opt-in form submitted with tag `wtwny-free-book`.
**Sends:** immediately (no delay).
**From:** Michael Mackintosh · support@awakenedacademy.com (personal-feeling delivery, not "team")
**Two placeholders to fill before activating:**
- `[EBOOK-HOSTED-URL]` → the hosted ebook URL (same as the thank-you-page download button)
- `{{contact.first_name}}` → confirm syntax matches your GHL merge tags

The email body is short and warm. Delivers the book. Soft Sacred Session bridge at the bottom. Sign-off in Michael's voice.

---

## OUTSTANDING — NEEDS MICHAEL (the last gates)

1. **Read the book through once and approve it.** Pure Michael — no one else can do this. Couple of hours, one sitting.
2. **Proof-bar numbers** — confirm the *25+ Countries* line on the opt-in is okay despite not being in the book (or swap/drop it). The other 3 stats are fine.
3. **Hero photo for `/books`** — supply `covers/hero-reading.jpg` or publish without it. Not a blocker either way.
4. **Final read of `WTWNY-DELIVERY-EMAIL.md`** — two lines flagged inside that file for Michael's last-15% review (opening line + the optional Sacred Session bridge paragraph). Two-minute read.

---

## FILE MANIFEST (this folder)

| File | What it is | Status |
|------|-----------|--------|
| `DAN-HANDOFF.md` | This file — single source of truth for the build | ✅ Current |
| `PREVIEW.html` | The `/books` page | ✅ Final |
| `WTWNY-OPTIN-PAGE.html` | The opt-in page | ✅ Final |
| `WTWNY-THANKYOU-PAGE.html` | The thank-you / download page | ✅ Final |
| `WTWNY-DELIVERY-EMAIL.md` | The delivery email (subject + preview + plain-text + HTML) | ✅ Final |
| `Why-The-World-Needs-You-FREE-EBOOK.pdf` | The free ebook — finalized 165-page edition. **Host it once; link that URL from both the delivery email and the download button.** | ✅ Final, byte-identical to the master PDF in `/products/why-the-world-needs-you-2026/designed/` |
| `covers/` | All cover images (8 used + some unused — see table above) | ✅ Final |
| `BOOKS-CATALOG.md` | Older 12-book research file | ⚠️ Superseded by this document — ignore |

---

## ESCALATION

- Questions on intent, copy, voice, or the book itself → Michael.
- Questions on the build itself → this doc covers it. If something's not in here, default to whatever ships fastest without diverging from the design.

---

*Last updated 2026-05-26. If you're reading this and something's drifted from the live state, ask Michael for the latest.*
