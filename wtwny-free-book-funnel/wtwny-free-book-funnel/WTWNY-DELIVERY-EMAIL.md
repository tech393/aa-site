# Why The World Needs You — Delivery Email
*The transactional email GHL sends the instant someone submits the opt-in form. Delivers the ebook + soft Sacred Session bridge.*

*Written in Michael's voice (short, warm, direct, single-line paragraphs). Two things stay Michael's last-15%: the opening line and the sign-off line — read them aloud before sending and confirm they sound like you.*

---

## SETUP NOTES FOR DAN

**From name:** Michael Mackintosh
**From email:** support@awakenedacademy.com (or whatever you use for transactional sends)
**Reply-to:** support@awakenedacademy.com
**Trigger:** Opt-in form submitted on the WTWNY opt-in page (tagged `wtwny-free-book`)
**Send:** Immediately (this is the delivery — don't delay it)

**Two placeholders to replace in the HTML before sending:**

1. `[EBOOK-HOSTED-URL]` → the hosted URL of `Why-The-World-Needs-You-FREE-EBOOK.pdf` on GHL (or wherever lead-magnet files live). Use the same URL Dan sets on the thank-you-page download button — host the PDF once, link it twice.
2. `{{contact.first_name}}` → confirm this matches your GHL merge tag syntax. If GHL uses something different (`{{first_name}}` or `{{contact.firstName}}`), find-and-replace.

---

## SUBJECT LINE

**Primary:**
> Here's your book, {{contact.first_name}}

**Two alternates if A/B testing:**
> {{contact.first_name}}, the book is inside
> Your copy of Why The World Needs You

---

## PREVIEW TEXT (the inbox-snippet)

> The 165-page PDF, plus one thing I want you to know before you open it.

---

## PLAIN-TEXT VERSION

```
{{contact.first_name}},

Thanks for picking this up.

Here's the book:

[ DOWNLOAD THE BOOK ]
( 165 pages · PDF )
[EBOOK-HOSTED-URL]

I wrote this for the person who's quietly carried a sense that they're here to do something that matters. Maybe for years. Maybe forever.

If that's you, this book will speak to you.

Read at your own pace. Underline what hits. Let it work on you.

A few things to know about what's inside:

The Two Paths. The moment, in 1997, when my own life split open.

The 6 Myths that keep your calling on hold.

The 7 Golden Keys to actually living what you're here for.

Real stories of people who finally said yes.

One more thing.

When you're ready to talk about what's actually calling you, and what your specific path forward looks like, that's what a Sacred Session is for. A free conversation with someone on our team. No pitch. You bring what's alive in you, we listen, we point you toward your next step.

[ Schedule a Sacred Session ]
https://awakenedacademy.com/schedule

Or read the book first. It's there when you want it.

Lots of love 🙏

Michael

---

Awakened Academy
support@awakenedacademy.com
```

---

## HTML VERSION

*(Paste this into the GHL email body. Brand tokens match the opt-in + thank-you pages. Tested for inbox-safe rendering — table-based layout, inline-friendly, no exotic CSS.)*

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Here's your book</title>
</head>
<body style="margin:0;padding:0;background:#F2E8D5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Inter,sans-serif;color:#2A1A0F;line-height:1.6;">

<!-- preheader (inbox preview text, hidden in body) -->
<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">
  The 165-page PDF, plus one thing I want you to know before you open it.
</div>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#F2E8D5;">
  <tr>
    <td align="center" style="padding:48px 16px;">

      <!-- main container -->
      <table role="presentation" width="560" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;background:#FBF5E8;border-radius:14px;padding:40px 36px;">

        <!-- greeting -->
        <tr><td style="font-size:17px;color:#2A1A0F;padding-bottom:18px;">
          {{contact.first_name}},
        </td></tr>

        <tr><td style="font-size:17px;color:#2A1A0F;padding-bottom:18px;">
          Thanks for picking this up.
        </td></tr>

        <tr><td style="font-size:17px;color:#2A1A0F;padding-bottom:22px;">
          Here's the book:
        </td></tr>

        <!-- download button -->
        <tr><td align="center" style="padding-bottom:10px;">
          <a href="[EBOOK-HOSTED-URL]" style="display:inline-block;background:#1A7A70;color:#FBF5E8;text-decoration:none;font-weight:600;font-size:16px;padding:15px 36px;border-radius:8px;">Download the Book</a>
        </td></tr>
        <tr><td align="center" style="font-size:13px;color:rgba(42,26,15,.55);padding-bottom:30px;">
          165 pages &middot; PDF
        </td></tr>

        <!-- divider -->
        <tr><td style="border-top:1px solid rgba(42,26,15,.12);padding-top:24px;"></td></tr>

        <!-- body -->
        <tr><td style="font-size:17px;color:#2A1A0F;padding-bottom:18px;">
          I wrote this for the person who's quietly carried a sense that they're here to do something that matters. Maybe for years. Maybe forever.
        </td></tr>

        <tr><td style="font-size:17px;color:#2A1A0F;padding-bottom:18px;">
          If that's you, this book will speak to you.
        </td></tr>

        <tr><td style="font-size:17px;color:#2A1A0F;padding-bottom:22px;">
          Read at your own pace. Underline what hits. Let it work on you.
        </td></tr>

        <tr><td style="font-size:17px;color:#2A1A0F;padding-bottom:14px;">
          A few things to know about what's inside:
        </td></tr>

        <tr><td style="font-size:16px;color:#2A1A0F;padding-bottom:10px;line-height:1.55;">
          The Two Paths. The moment, in 1997, when my own life split open.
        </td></tr>
        <tr><td style="font-size:16px;color:#2A1A0F;padding-bottom:10px;line-height:1.55;">
          The 6 Myths that keep your calling on hold.
        </td></tr>
        <tr><td style="font-size:16px;color:#2A1A0F;padding-bottom:10px;line-height:1.55;">
          The 7 Golden Keys to actually living what you're here for.
        </td></tr>
        <tr><td style="font-size:16px;color:#2A1A0F;padding-bottom:26px;line-height:1.55;">
          Real stories of people who finally said yes.
        </td></tr>

        <!-- divider -->
        <tr><td style="border-top:1px solid rgba(42,26,15,.12);padding-top:24px;"></td></tr>

        <!-- soft Sacred Session bridge -->
        <tr><td style="font-size:17px;color:#2A1A0F;padding-bottom:18px;font-style:italic;font-family:Georgia,'Fraunces',serif;">
          One more thing.
        </td></tr>

        <tr><td style="font-size:17px;color:#2A1A0F;padding-bottom:22px;">
          When you're ready to talk about what's actually calling you, and what your specific path forward looks like, that's what a Sacred Session is for. A free conversation with someone on our team. No pitch. You bring what's alive in you, we listen, we point you toward your next step.
        </td></tr>

        <tr><td align="center" style="padding-bottom:22px;">
          <a href="https://awakenedacademy.com/schedule" style="display:inline-block;color:#1A7A70;text-decoration:none;font-weight:600;font-size:15px;padding:12px 28px;border:1.5px solid #1A7A70;border-radius:8px;">Schedule a Sacred Session</a>
        </td></tr>

        <tr><td style="font-size:15px;color:rgba(42,26,15,.72);padding-bottom:30px;">
          Or read the book first. It's there when you want it.
        </td></tr>

        <!-- signoff -->
        <tr><td style="font-size:17px;color:#2A1A0F;padding-bottom:6px;">
          Lots of love 🙏
        </td></tr>
        <tr><td style="font-size:17px;color:#2A1A0F;padding-bottom:0;">
          Michael
        </td></tr>

      </table>

      <!-- footer -->
      <table role="presentation" width="560" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;padding:18px 36px 0;">
        <tr><td align="center" style="font-size:12px;color:rgba(42,26,15,.55);line-height:1.6;">
          Awakened Academy &middot; <a href="mailto:support@awakenedacademy.com" style="color:rgba(42,26,15,.55);text-decoration:underline;">support@awakenedacademy.com</a>
        </td></tr>
      </table>

    </td>
  </tr>
</table>

</body>
</html>
```

---

## QUALITY CHECK (Pre-send)

- [ ] Subject line preview-tests well on mobile (under 40 chars to avoid truncation in iOS Mail). Primary subject is 38 chars + first name.
- [ ] `{{contact.first_name}}` merge-tag fires correctly in GHL preview before activating.
- [ ] `[EBOOK-HOSTED-URL]` replaced with the hosted PDF URL (same URL as the thank-you-page download button).
- [ ] From-name reads "Michael Mackintosh" (not "Awakened Academy Team" — this is a personal delivery email).
- [ ] Test send to a real inbox before activating the automation. Click the Download button, click the Schedule button, confirm both resolve.
- [ ] Confirm the email triggers ONLY when the WTWNY form is submitted (not other AA forms).

---

## WHAT'S STILL MICHAEL'S — the 15%

Two lines to read aloud and confirm they sound like you, before this goes live:

1. **The opening:** *"{{contact.first_name}}, Thanks for picking this up."* — if "picking this up" feels off, swap to "grabbing this" or "downloading this."
2. **The bridge paragraph:** *"When you're ready to talk about what's actually calling you, and what your specific path forward looks like…"* — if the Sacred Session pitch feels too much for a delivery email, the whole "One more thing" block can be cut and the email still works. It's a soft bridge, not a hard sell.

Everything else traces to your verified voice patterns (`Templates/michael-emails.md`) and the opt-in promises (`WTWNY-OPTIN-PAGE.html`).
