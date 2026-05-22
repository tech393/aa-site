import type { NextConfig } from "next";

const config: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.pexels.com" },
    ],
  },
  /**
   * 182 per-URL 301 rules from dan-package/NEXT-CONFIG-REDIRECTS.js (Michael ratified 2026-05-17).
   * Auto-generated from REDIRECT-MAP.csv. Re-export from the migration source rather than editing inline.
   * Security hardening rules for WP-admin paths appended at the bottom.
   */
  async redirects() {
    return [

    // Podcast rebrand: theawakenedlife -> dont-die-with-your-song-inside (May 2026)
    { source: "/theawakenedlife", destination: "/dont-die-with-your-song-inside", permanent: true },
    // Reviews consolidated into Wall of Gratitude (May 2026 — 47-card grid replaced by 313-testimonial WOG rebuild)
    { source: "/awakened-academy-reviews", destination: "/wall-of-gratitude", permanent: true },
    // Spiritual business ideas consolidated to canonical SEO slug (May 2026 — pillar post per SEO content calendar)
    { source: "/15-profitable-spiritual-business-ideas-for-modern-entrepreneurs", destination: "/spiritual-business-ideas", permanent: true },
    // Sacred Session CTA target (Two Mindsets post) routes to booking page until a dedicated page exists. Temporary 302.
    { source: "/sacred-session", destination: "/book-a-call", permanent: false },
    // Affiliate program retired until sales page exists; restore URL when ready
    { source: "/awakened-academy-affiliate-program", destination: "/", permanent: true },
    // Cleaner URL
    { source: "/meditation-with-michael-mackintosh-arielle-hecht", destination: "/meditations", permanent: true },
    // Active offer; consolidating both mentoring URLs to /mentoring-with-michael
    { source: "/spiritual-mentoring", destination: "/mentoring-with-michael", permanent: true },
    // Canonical mentoring URL
    { source: "/mentoring-with-michael-mackintosh", destination: "/mentoring-with-michael", permanent: true },
    // Byte-identical duplicate
    { source: "/spiritual-life-coach-certification-bkp", destination: "/spiritual-life-coach-certification", permanent: true },
    // Byte-identical duplicate
    { source: "/spiritual-life-coach-certification-original", destination: "/spiritual-life-coach-certification", permanent: true },
    // Byte-identical duplicate
    { source: "/spiritual-life-coach-certification-original-b", destination: "/spiritual-life-coach-certification", permanent: true },
    // Byte-identical duplicate
    { source: "/spiritual-life-coach-certification-original-b-2", destination: "/spiritual-life-coach-certification", permanent: true },
    // Broken redirect loop
    { source: "/spiritual-life-coach-certification-v2-2", destination: "/spiritual-life-coach-certification", permanent: true },
    // Already redirected
    { source: "/apply", destination: "/spiritual-life-coach-certification", permanent: true },
    // Old discount variant
    { source: "/apply-2", destination: "/spiritual-life-coach-certification", permanent: true },
    // Old application page
    { source: "/sacred-application-call-experience", destination: "/book-a-call", permanent: true },
    { source: "/wealth-and-abundance-2", destination: "/wealth-and-abundance", permanent: true },
    { source: "/wealth-and-abundance-2-2", destination: "/wealth-and-abundance", permanent: true },
    { source: "/wealth-and-abundance-kit", destination: "/wealth-and-abundance", permanent: true },
    { source: "/enlightenedpreneurs", destination: "/ep", permanent: true },
    { source: "/ep-template", destination: "/ep", permanent: true },
    { source: "/gift-card", destination: "/meditation-gifts", permanent: true },
    { source: "/giftcard", destination: "/meditation-gifts", permanent: true },
    { source: "/giftcardspecial", destination: "/meditation-gifts", permanent: true },
    { source: "/giftcardspecial-2", destination: "/meditation-gifts", permanent: true },
    { source: "/specialgiftcard", destination: "/meditation-gifts", permanent: true },
    { source: "/bring-your-project-to-life", destination: "/ep", permanent: true },
    { source: "/bring-your-project-to-life-2", destination: "/ep", permanent: true },
    { source: "/bring-your-project-to-life-3", destination: "/ep", permanent: true },
    { source: "/softly-powerful-home", destination: "/introvert", permanent: true },
    { source: "/softly-powerful-fb-thank-page", destination: "/introvert", permanent: true },
    // Already 301d
    { source: "/coaches", destination: "/featured-coaches", permanent: true },
    { source: "/jobs-new", destination: "/jobs", permanent: true },
    // Old EP article
    { source: "/3-mistakes-you-dont-want-to-make-in-business", destination: "/ep", permanent: true },
    { source: "/are-you-3-feet-away-from-gold", destination: "/ep", permanent: true },
    { source: "/are-you-creating-your-art", destination: "/ep", permanent: true },
    { source: "/become-rich-by-giving-your-free-gifts", destination: "/ep", permanent: true },
    { source: "/do-what-you-love-and-get-paid", destination: "/ep", permanent: true },
    { source: "/do-you-know-the-most-dangerous-and-powerful-word-in-the-world", destination: "/ep", permanent: true },
    { source: "/how-to-easily-and-quickly-publish-your-book-get-funding", destination: "/ep", permanent: true },
    { source: "/how-to-find-your-perfect-partner-for-business-success", destination: "/ep", permanent: true },
    { source: "/how-to-get-more-wealth-and-abundance-back-into-your-life", destination: "/wealth-and-abundance", permanent: true },
    { source: "/how-to-keep-your-head-quiet-in-a-crazy-world", destination: "/free-meditations", permanent: true },
    { source: "/how-to-make-people-understand-you-and-your-ideas", destination: "/ep", permanent: true },
    { source: "/how-to-overcome-self-doubt", destination: "/ep", permanent: true },
    { source: "/how-to-start-your-project-and-stop-going-to-bed-late", destination: "/ep", permanent: true },
    { source: "/how-to-stay-successful", destination: "/ep", permanent: true },
    { source: "/how-to-turn-your-ideas-into-a-career", destination: "/ep", permanent: true },
    { source: "/time-schedule-for-enlightenedpreneurs", destination: "/ep", permanent: true },
    { source: "/too-many-projects-not-enough-focus", destination: "/ep", permanent: true },
    { source: "/want-to-learn-exactly-how-to-get-your-message-out-and-get-paid", destination: "/ep", permanent: true },
    { source: "/what-to-do-to-create-money-to-pay-the-bills-in-a-bad-economy", destination: "/ep", permanent: true },
    { source: "/what-to-do-while-you-wait-for-your-projects", destination: "/ep", permanent: true },
    { source: "/why-are-only-some-people-are-successful-in-business-and-life", destination: "/ep", permanent: true },
    { source: "/why-some-people-are-successful-in-business-and-life-and-most-are-not", destination: "/ep", permanent: true },
    { source: "/stop-the-overwhelm-confusion-dead-in-its-tracks-special-episode", destination: "/blog", permanent: true },
    // /freedom is now the v13 Awakened Life video 4 (was a 2017 EP article)
    { source: "/freedom-from-other-peoples-b-s-control", destination: "/ep", permanent: true },
    { source: "/freedom-from-overwhelm-and-overwork", destination: "/ep", permanent: true },
    { source: "/freedom-from-your-own-b-s-negativity", destination: "/ep", permanent: true },
    { source: "/sp/business-success-for-introverts", destination: "/introvert", permanent: true },
    { source: "/sp/deep-questions-to-discover-your-dharma", destination: "/dharma", permanent: true },
    { source: "/sp/defining-introverts-for-a-better-future", destination: "/introvert", permanent: true },
    { source: "/sp/disover-who-you-are", destination: "/introvert", permanent: true },
    { source: "/sp/how-to-deal-with-extrovert-situations", destination: "/introvert", permanent: true },
    { source: "/sp/how-to-overcome-being-triggered-hooponopono", destination: "/introvert", permanent: true },
    { source: "/sp/how-to-overcome-oversensitivy", destination: "/introvert", permanent: true },
    { source: "/sp/intro", destination: "/introvert", permanent: true },
    { source: "/sp/introversion-101-dos-and-donts", destination: "/introvert", permanent: true },
    { source: "/sp/introverts-versus-extroverts", destination: "/introvert", permanent: true },
    { source: "/sp/overcoming-the-lizard-brain-that-stops-you-from-doing-things", destination: "/introvert", permanent: true },
    { source: "/sp/quiz", destination: "/introvert", permanent: true },
    { source: "/sp/the-growth-of-the-extrovert-ideal", destination: "/introvert", permanent: true },
    { source: "/sp/the-power-of-energy-exercise", destination: "/introvert", permanent: true },
    { source: "/sp/the-power-of-introverts", destination: "/introvert", permanent: true },
    { source: "/sp/the-secret-formula-to-lasting-happiness", destination: "/introvert", permanent: true },
    { source: "/sp/what-to-do-on-a-rainy-day-when-youre-feeling-down", destination: "/introvert", permanent: true },
    { source: "/sp/when-to-say-yes", destination: "/introvert", permanent: true },
    { source: "/sp/why-its-okay-to-say-no", destination: "/introvert", permanent: true },
    { source: "/less", destination: "/ep", permanent: true },
    { source: "/less/6-channels", destination: "/ep", permanent: true },
    { source: "/less/get-more-done-in-a-day-than-you-normally-achieve-in-a-month-special-interview-with-pete-williams", destination: "/ep", permanent: true },
    { source: "/less/my-evil-friend", destination: "/ep", permanent: true },
    { source: "/less/secrets-to-claim-back-80-of-your-time", destination: "/ep", permanent: true },
    { source: "/less/the-system-intro", destination: "/ep", permanent: true },
    { source: "/less/time-schedule", destination: "/ep", permanent: true },
    { source: "/less/too-many-projects", destination: "/ep", permanent: true },
    { source: "/less/why-some-people-are-successful", destination: "/ep", permanent: true },
    { source: "/free-binaural-beats", destination: "/free-meditations", permanent: true },
    { source: "/free-gift-guided-meditation", destination: "/free-meditations", permanent: true },
    { source: "/free-gift-guided-meditation-completely-relaxed", destination: "/free-meditations", permanent: true },
    { source: "/free-gift-guided-meditation-hand-of-blessings", destination: "/free-meditations", permanent: true },
    { source: "/get-up-early-meditations", destination: "/free-meditations", permanent: true },
    { source: "/heart-of-presence-meditation", destination: "/free-meditations", permanent: true },
    { source: "/advanced-lawof-attraction-meditation", destination: "/free-meditations", permanent: true },
    { source: "/dear-woman", destination: "/free-meditations", permanent: true },
    { source: "/already-perfect", destination: "/free-meditations", permanent: true },
    { source: "/self-compassion-worthiness", destination: "/free-meditations", permanent: true },
    { source: "/realize-your-dharma-your-best-life-ever", destination: "/dharma", permanent: true },
    { source: "/survey-gifts", destination: "/free-gifts-for-you", permanent: true },
    { source: "/gifts", destination: "/free-gifts-for-you", permanent: true },
    { source: "/3-worlds", destination: "/the-3-worlds", permanent: true },
    // /the-3-worlds, /unique-soul-purpose, /video-1 are now the v13 Awakened Life video pages (static HTML in /public/)
    // /awakened-life is the opt-in landing; its old [slug] subpaths redirect to the new root video URLs
    { source: "/awakened-life/video-1", destination: "/video-1", permanent: true },
    { source: "/awakened-life/the-3-worlds", destination: "/the-3-worlds", permanent: true },
    { source: "/awakened-life/unique-soul-purpose", destination: "/unique-soul-purpose", permanent: true },
    { source: "/awakened-life/freedom", destination: "/freedom", permanent: true },
    // Old Ascension Toolkit lead magnet
    { source: "/ascension", destination: "/dharma", permanent: true },
    // Old group mentoring page; direct to canonical
    { source: "/awakened-group-mentoring", destination: "/mentoring-with-michael", permanent: true },
    // Old waiting list page; direct to canonical
    { source: "/coaching-application-form-waiting-list", destination: "/mentoring-with-michael", permanent: true },
    { source: "/coaching-for-students-special-offer", destination: "/spiritual-life-coach-certification", permanent: true },
    // Old brochure page; direct to canonical
    { source: "/spiritual-mentoring-experience-brochure", destination: "/mentoring-with-michael", permanent: true },
    { source: "/how-being-late-can-cost-you-your-life", destination: "/blog", permanent: true },
    { source: "/working-with-awakened-academy", destination: "/jobs", permanent: true },
    // Matrix opt-in page
    { source: "/welcome-to-awakened-academy-you", destination: "/", permanent: true },
    // Known hack-spam URLs are handled by middleware with 410 Gone.
    // WordPress default placeholder
    { source: "/sample-page", destination: "/", permanent: true },
    // Lorem ipsum test page
    { source: "/article", destination: "/", permanent: true },
    // Dev template
    { source: "/opt-in-example", destination: "/", permanent: true },
    // Empty shell
    { source: "/opt-in-next-chapter", destination: "/", permanent: true },
    // Empty shell
    { source: "/opt-in-softly", destination: "/", permanent: true },
    { source: "/opt-in-spiritual", destination: "/", permanent: true },
    { source: "/upviral-template", destination: "/", permanent: true },
    { source: "/upviral-big-green-button", destination: "/", permanent: true },
    { source: "/upviral-expanded-consiousness", destination: "/", permanent: true },
    { source: "/upviral-thank-page-expanded-consciousness", destination: "/", permanent: true },
    // Test page
    { source: "/big-green-button", destination: "/", permanent: true },
    { source: "/google-form-test", destination: "/", permanent: true },
    { source: "/new-minimal-homepage", destination: "/", permanent: true },
    { source: "/new", destination: "/", permanent: true },
    { source: "/yes", destination: "/", permanent: true },
    { source: "/vision", destination: "/", permanent: true },
    { source: "/video", destination: "/blog", permanent: true },
    { source: "/inspired", destination: "/", permanent: true },
    { source: "/about-video", destination: "/about", permanent: true },
    { source: "/about/quotes", destination: "/about", permanent: true },
    { source: "/quotes", destination: "/about", permanent: true },
    { source: "/question-and-answer", destination: "/contact", permanent: true },
    // Already redirects
    { source: "/products", destination: "https://my.awakenedacademy.com/dashboard", permanent: true },
    // Kajabi handles
    { source: "/login", destination: "https://my.awakenedacademy.com/login", permanent: true },
    { source: "/amy-miller", destination: "/featured-coaches", permanent: true },
    { source: "/diary", destination: "/blog", permanent: true },
    { source: "/god-book", destination: "/free-gifts-for-you", permanent: true },
    { source: "/you-ebook", destination: "/free-gifts-for-you", permanent: true },
    { source: "/review-books", destination: "/books", permanent: true },
    // Dated 2016
    { source: "/review-copy", destination: "/", permanent: true },
    // Defunct merch
    { source: "/awakened-academy-apparel", destination: "/", permanent: true },
    { source: "/events", destination: "/", permanent: true },
    { source: "/calendar-events", destination: "/", permanent: true },
    { source: "/donation", destination: "/", permanent: true },
    { source: "/creation-survey", destination: "/", permanent: true },
    { source: "/for-you", destination: "/book-a-call", permanent: true },
    { source: "/welcome", destination: "/", permanent: true },
    { source: "/how-to-download-sync-mp3", destination: "/free-meditations", permanent: true },
    { source: "/referral-gifts", destination: "/", permanent: true },
    // Internal SOP
    { source: "/guests", destination: "/", permanent: true },
    { source: "/privacy-policy", destination: "/privacy", permanent: true },
    { source: "/terms-of-service", destination: "/terms", permanent: true },
    // Old book sales
    { source: "/getitdone", destination: "/ep", permanent: true },
    { source: "/snow-day", destination: "/", permanent: true },
    { source: "/kauai-aloha", destination: "/", permanent: true },
    // 2019 event
    { source: "/blessed-2019-new-year-transformation-call", destination: "/", permanent: true },
    { source: "/new-year-call-2", destination: "/", permanent: true },
    { source: "/newyear", destination: "/", permanent: true },
    { source: "/your-new-year", destination: "/", permanent: true },
    { source: "/your-birthday", destination: "/", permanent: true },
    { source: "/your-birthday-gift", destination: "/", permanent: true },
    { source: "/the-power-of-creation-exclusive-group", destination: "/", permanent: true },
    { source: "/surrender-remember-group", destination: "/", permanent: true },
    { source: "/sacred-next-chapter-select-invite-mobile", destination: "/", permanent: true },
    { source: "/your-sacred-next-chapter-mobile", destination: "/", permanent: true },
    { source: "/your-sacred-next-chapter-select-invite", destination: "/", permanent: true },
    { source: "/special-invitation", destination: "/", permanent: true },
    { source: "/whitelist", destination: "/", permanent: true },
    { source: "/free-from-burden", destination: "/free-meditations", permanent: true },
    { source: "/your-divine-intentions", destination: "/free-gifts-for-you", permanent: true },
    { source: "/your-transformation", destination: "/", permanent: true },
    { source: "/success", destination: "/", permanent: true },
    // GHL handles thank-yous
    { source: "/confirmation", destination: "/", permanent: true },
    // GHL handles
    { source: "/congratulations", destination: "/", permanent: true },
    { source: "/follow-up-congratulations", destination: "/", permanent: true },
    { source: "/thank-you", destination: "/", permanent: true },
    { source: "/thank-you-2", destination: "/", permanent: true },
    { source: "/thank-you-for-signing-up", destination: "/", permanent: true },
    { source: "/thank-you-for-your-interest", destination: "/", permanent: true },
    { source: "/thank-you-special-soul", destination: "/", permanent: true },
    { source: "/thank-you-eternal-freedom", destination: "/", permanent: true },
    { source: "/thanks-from-michael", destination: "/", permanent: true },
    { source: "/ep-template/too-many-projects-but-no-real-focus-or-results", destination: "/ep", permanent: true },
      // === Renamed essay: 2025 → 2026 ===
      { source: "/why-the-world-desperately-needs-spiritual-coaches-in-2025", destination: "/why-the-world-desperately-needs-spiritual-coaches-in-2026", permanent: true },
      // === Year-based comparison posts consolidated into evergreen slug (May 2026) ===
      { source: "/top-spiritual-coaching-programs-for-2026-transform-your-life", destination: "/best-spiritual-life-coach-certification-programs", permanent: true },
      { source: "/top-rated-spiritual-life-coach-certification-programs-of-2025", destination: "/best-spiritual-life-coach-certification-programs", permanent: true },
      { source: "/top-spiritual-life-coach-training-programs-for-2026", destination: "/best-spiritual-life-coach-certification-programs", permanent: true },
      // Residual WordPress paths are handled by middleware with 410 Gone.
    ];
  },
  /**
   * Clean-URL rewrites for standalone static landing pages served from /public.
   * /sleep-naturally -> public/sleep-naturally/index.html (Sleep Naturally sales page).
   */
  async rewrites() {
    return [
      { source: "/sleep-naturally", destination: "/sleep-naturally/index.html" },
    ];
  },
};

export default config;
