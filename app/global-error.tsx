"use client";

import { SITE } from "@/lib/site-config";

const CSS = `
:root {
  --teal: #1A7A70;
  --gold: #C9A961;
  --gold-light: #DCBA70;
  --cream: #F2E8D5;
  --cream-paper: #FBF5E8;
  --navy: #0F1A38;
  --navy-mid: #1A2747;
  --purple: #2D1B4E;
  --ink: #1A1814;
  --font-display: 'Fraunces', Georgia, serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --radius-sm: 4px;
}

* { margin: 0; padding: 0; box-sizing: border-box; }
html, body { height: 100%; }

body {
  font-family: var(--font-body);
  color: var(--cream-paper);
  background:
    radial-gradient(ellipse 800px 600px at 50% 30%, rgba(75, 50, 110, 0.45) 0%, transparent 60%),
    radial-gradient(ellipse 600px 400px at 80% 80%, rgba(26, 122, 112, 0.18) 0%, transparent 60%),
    radial-gradient(ellipse 700px 500px at 20% 70%, rgba(201, 169, 97, 0.12) 0%, transparent 60%),
    linear-gradient(180deg, #0a1230 0%, #0F1A38 50%, #1A2747 100%);
  background-attachment: fixed;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
}

.stars { position: fixed; inset: 0; pointer-events: none; z-index: 0; }
.stars .star { position: absolute; background: var(--cream-paper); border-radius: 50%; opacity: 0; animation: twinkle 6s ease-in-out infinite; }
@keyframes twinkle { 0%, 100% { opacity: 0.15; } 50% { opacity: 0.7; } }

a { color: var(--gold-light); text-decoration: none; transition: color 200ms cubic-bezier(0.16, 1, 0.3, 1); }
a:hover { color: var(--cream-paper); }
img { max-width: 100%; display: block; }

.container { max-width: 1180px; margin: 0 auto; padding: 0 32px; width: 100%; position: relative; z-index: 1; }
@media (max-width: 768px) { .container { padding: 0 20px; } }

.site-header { padding: 18px 0; position: relative; z-index: 5; }
.header-inner { display: flex; justify-content: space-between; align-items: center; gap: 32px; }
.logo img { height: 34px; width: auto; }
.nav { display: flex; gap: 24px; align-items: center; }
.nav a { color: rgba(251, 245, 232, 0.85); font-size: 0.9375rem; font-weight: 500; }
.nav a:hover { color: var(--cream-paper); }
.nav .nav-cta { background: var(--gold); color: var(--ink); padding: 9px 18px; border-radius: var(--radius-sm); font-weight: 600; }
.nav .nav-cta:hover { background: var(--gold-light); color: var(--ink); }
@media (max-width: 768px) { .nav a:not(.nav-cta) { display: none; } }

.hero { flex: 1; display: flex; align-items: center; padding: 24px 0 32px; position: relative; z-index: 1; }
.hero-inner {
  max-width: 1180px; margin: 0 auto;
  display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: center; text-align: left;
  animation: rise 900ms cubic-bezier(0.16, 1, 0.3, 1) both;
}
@media (max-width: 900px) { .hero-inner { grid-template-columns: 1fr; gap: 16px; text-align: center; } }
.hero-text { display: flex; flex-direction: column; align-items: flex-start; }
@media (max-width: 900px) { .hero-text { align-items: center; } }
.hero-visual { display: flex; justify-content: center; }
@keyframes rise { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }

.meditating-computer { width: 100%; max-width: 440px; height: auto; aspect-ratio: 1 / 1; display: block; }
@media (max-width: 900px) { .meditating-computer { max-width: 280px; } }

.mandala-outer { transform-origin: center; animation: spinSlow 120s linear infinite; }
@keyframes spinSlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

.halo-breathe { transform-origin: 200px 195px; animation: breathe 5s ease-in-out infinite; }
@keyframes breathe { 0%, 100% { transform: scale(1); opacity: 0.5; } 50% { transform: scale(1.05); opacity: 0.85; } }

.aura { transform-origin: 200px 195px; animation: auraGlow 6s ease-in-out infinite; }
@keyframes auraGlow { 0%, 100% { opacity: 0.2; } 50% { opacity: 0.4; } }

.sparkle-float { transform-origin: center; animation: floatSparkle 4s ease-in-out infinite; }
.sparkle-float.s1 { animation-delay: 0s; }
.sparkle-float.s2 { animation-delay: 1.2s; }
.sparkle-float.s3 { animation-delay: 2.4s; }
.sparkle-float.s4 { animation-delay: 0.6s; }
.sparkle-float.s5 { animation-delay: 1.8s; }
.sparkle-float.s6 { animation-delay: 3.2s; }
.sparkle-float.s7 { animation-delay: 0.9s; }
.sparkle-float.s8 { animation-delay: 2.7s; }
@keyframes floatSparkle { 0%, 100% { opacity: 0.4; transform: translateY(0) scale(1); } 50% { opacity: 1; transform: translateY(-5px) scale(1.2); } }

h1 { font-family: var(--font-display); font-weight: 400; font-size: clamp(2rem, 4vw, 3.25rem); line-height: 1.08; letter-spacing: -0.025em; color: var(--cream-paper); margin-bottom: 16px; }
h1 em { font-style: italic; color: var(--gold-light); }

.hero-lede { font-size: 1.0625rem; line-height: 1.55; color: rgba(251, 245, 232, 0.82); max-width: 44ch; margin: 0 0 32px; }
@media (max-width: 900px) { .hero-lede { margin: 0 auto 28px; } }

.button-cluster { position: relative; display: inline-block; padding-top: 50px; }

.cue {
  position: absolute; top: -8px; right: -100px;
  display: flex; flex-direction: column; align-items: center; gap: 2px;
  animation: cueWiggle 3s ease-in-out infinite;
  pointer-events: none;
}
.cue-label { font-family: 'Allison', cursive; font-size: 1.875rem; color: var(--gold-light); line-height: 1; transform: rotate(6deg); white-space: nowrap; }
.cue-arrow { width: 64px; height: 52px; transform: rotate(8deg) translateX(-12px); color: var(--gold-light); }
@keyframes cueWiggle { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-4px) rotate(-2deg); } }
@media (max-width: 900px) {
  .cue { top: -52px; left: 50%; right: auto; transform: translateX(-50%); flex-direction: row; gap: 8px; }
  .cue-arrow { transform: rotate(80deg); width: 40px; height: 36px; }
  .cue-label { font-size: 1.5rem; transform: rotate(0deg); }
}

.btn-wake {
  display: inline-flex; align-items: center; gap: 12px;
  background: var(--gold); color: var(--ink);
  font-family: var(--font-body); font-weight: 700; font-size: 1.1875rem;
  padding: 20px 44px; border-radius: var(--radius-sm);
  text-decoration: none; border: 0; cursor: pointer;
  position: relative; letter-spacing: -0.005em;
  transition: all 200ms cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow:
    0 0 0 1px rgba(220, 186, 112, 0.4),
    0 0 24px rgba(220, 186, 112, 0.35),
    0 0 48px rgba(220, 186, 112, 0.2),
    0 0 80px rgba(220, 186, 112, 0.1);
  animation: buttonGlow 3.5s ease-in-out infinite;
}
@keyframes buttonGlow {
  0%, 100% { box-shadow: 0 0 0 1px rgba(220, 186, 112, 0.4), 0 0 24px rgba(220, 186, 112, 0.35), 0 0 48px rgba(220, 186, 112, 0.2), 0 0 80px rgba(220, 186, 112, 0.1); }
  50% { box-shadow: 0 0 0 1px rgba(220, 186, 112, 0.55), 0 0 32px rgba(220, 186, 112, 0.55), 0 0 64px rgba(220, 186, 112, 0.35), 0 0 120px rgba(220, 186, 112, 0.2); }
}
.btn-wake:hover {
  background: var(--gold-light); color: var(--ink);
  transform: translateY(-2px); animation: none;
  box-shadow:
    0 0 0 1px rgba(251, 245, 232, 0.5),
    0 0 36px rgba(220, 186, 112, 0.7),
    0 0 80px rgba(220, 186, 112, 0.5),
    0 0 140px rgba(220, 186, 112, 0.3);
}
.btn-wake .icon { font-size: 1.25rem; display: inline-block; }
.btn-wake:hover .icon { animation: spinIcon 600ms cubic-bezier(0.16, 1, 0.3, 1); }
@keyframes spinIcon { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

.secondary-line { font-size: 0.875rem; color: rgba(251, 245, 232, 0.6); margin-top: 20px; margin-bottom: 0; }
.secondary-line a { color: rgba(251, 245, 232, 0.85); font-weight: 500; border-bottom: 1px solid rgba(251, 245, 232, 0.3); padding-bottom: 1px; }
.secondary-line a:hover { color: var(--gold-light); border-bottom-color: var(--gold-light); }

.contact-line { font-size: 0.8125rem; color: rgba(251, 245, 232, 0.5); margin-top: 24px; padding-top: 18px; border-top: 1px solid rgba(220, 186, 112, 0.18); }
.contact-line a { color: rgba(251, 245, 232, 0.78); font-weight: 500; }
.contact-line a:hover { color: var(--cream-paper); }
.contact-sep { display: inline-block; margin: 0 10px; color: rgba(251, 245, 232, 0.25); }
@media (max-width: 600px) { .contact-sep { display: block; height: 4px; margin: 0; } }

@media (prefers-reduced-motion: reduce) {
  .hero-inner, .halo-breathe, .sparkle-float, .stars .star, .btn-wake, .mandala-outer, .aura { animation: none !important; }
}
`;

const STARS = [
  { top: "8%", left: "12%", size: 2, delay: 0 },
  { top: "14%", left: "78%", size: 1.5, delay: 1.5 },
  { top: "22%", left: "5%", size: 2, delay: 3 },
  { top: "30%", left: "90%", size: 1, delay: 2 },
  { top: "42%", left: "8%", size: 1.5, delay: 4 },
  { top: "55%", left: "92%", size: 2, delay: 1 },
  { top: "68%", left: "3%", size: 1, delay: 3.5 },
  { top: "75%", left: "85%", size: 2, delay: 0.5 },
  { top: "82%", left: "18%", size: 1.5, delay: 2.5 },
  { top: "88%", left: "65%", size: 1, delay: 4.5 },
  { top: "18%", left: "42%", size: 1, delay: 1.8 },
  { top: "88%", left: "38%", size: 1.5, delay: 3.2 },
  { top: "6%", left: "32%", size: 1, delay: 0.8 },
  { top: "11%", left: "58%", size: 2, delay: 2.2 },
  { top: "16%", left: "88%", size: 1, delay: 4.2 },
  { top: "25%", left: "24%", size: 1.5, delay: 3.8 },
  { top: "28%", left: "62%", size: 1, delay: 1.2 },
  { top: "35%", left: "48%", size: 2, delay: 5.2 },
  { top: "38%", left: "96%", size: 1, delay: 2.8 },
  { top: "46%", left: "35%", size: 1, delay: 0.3 },
  { top: "48%", left: "72%", size: 1.5, delay: 4.8 },
  { top: "52%", left: "14%", size: 1, delay: 2.6 },
  { top: "58%", left: "54%", size: 2, delay: 1.6 },
  { top: "62%", left: "28%", size: 1, delay: 5.5 },
  { top: "65%", left: "96%", size: 1.5, delay: 0.9 },
  { top: "72%", left: "48%", size: 1, delay: 3.6 },
  { top: "78%", left: "6%", size: 1.5, delay: 4.4 },
  { top: "79%", left: "72%", size: 1, delay: 1.4 },
  { top: "84%", left: "52%", size: 1, delay: 2.9 },
  { top: "92%", left: "25%", size: 1.5, delay: 5.8 },
  { top: "94%", left: "82%", size: 1, delay: 0.6 },
  { top: "95%", left: "48%", size: 1, delay: 3.4 },
  { top: "5%", left: "96%", size: 1, delay: 4.7 },
  { top: "4%", left: "48%", size: 1, delay: 2.1 },
];

const PETAL_OUTER = "M 0,-115 Q 14,-145 0,-175 Q -14,-145 0,-115 Z";
const PETAL_INNER = "M 0,-65 Q 18,-90 0,-110 Q -18,-90 0,-65 Z";
const OUTER_DOTS: Array<[number, number]> = [
  [200, 13], [236, 17], [272, 27], [305, 43], [333, 64], [357, 91], [375, 121], [386, 155],
  [387, 200], [383, 236], [373, 272], [357, 305], [336, 333], [309, 357], [279, 375], [245, 386],
  [200, 387], [164, 383], [128, 373], [95, 357], [67, 336], [43, 309], [25, 279], [14, 245],
  [13, 200], [17, 164], [27, 128], [43, 95], [64, 67], [91, 43], [121, 25], [155, 14],
];

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <head>
        <title>Our site is taking a moment — Awakened Academy</title>
        <meta name="robots" content="noindex, follow" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Fraunces:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Allison&display=swap"
        />
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </head>
      <body>
        <div className="stars" aria-hidden>
          {STARS.map((s, i) => (
            <span
              key={i}
              className="star"
              style={{
                top: s.top,
                left: s.left,
                width: `${s.size}px`,
                height: `${s.size}px`,
                animationDelay: `${s.delay}s`,
              }}
            />
          ))}
        </div>

        <header className="site-header">
          <div className="container header-inner">
            <a href="/" className="logo">
              <img src="/images/logo-white.png" alt="Awakened Academy" />
            </a>
            <nav className="nav">
              <a href="/about">About</a>
              <a href="/spiritual-life-coach-certification">Get Certified</a>
              <a href="/free-gifts-for-you">Free Gifts</a>
              <a href="/schedule" className="nav-cta">Book a Call</a>
            </nav>
          </div>
        </header>

        <main className="hero">
          <div className="container">
            <div className="hero-inner">
              <div className="hero-text">
                <h1>
                  Our website is taking a moment to <em>recenter</em>.
                </h1>

                <p className="hero-lede">
                  Take a breath with it. A refresh usually brings it back.
                </p>

                <div className="button-cluster">
                  <div className="cue" aria-hidden>
                    <span className="cue-label">tap here</span>
                    <svg
                      className="cue-arrow"
                      viewBox="0 0 64 52"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M 58 6 Q 36 4, 22 22 Q 10 36, 10 48" />
                      <path d="M 4 40 L 10 48 L 18 44" />
                    </svg>
                  </div>
                  <button
                    type="button"
                    className="btn-wake"
                    onClick={() => reset()}
                  >
                    <span className="icon">↻</span>
                    Bring it back
                  </button>
                </div>

                <p className="secondary-line">
                  Or <a href="/">go back home</a>
                </p>

                <p className="contact-line">
                  Still stuck? We&apos;re here:{" "}
                  <a href={`mailto:${SITE.email}?subject=Site%20error%20-%20need%20help`}>
                    {SITE.email}
                  </a>
                  <span className="contact-sep">·</span>
                  <a href={SITE.phoneHref}>{SITE.phone}</a>
                </p>
              </div>

              <div className="hero-visual">
                <svg
                  className="meditating-computer"
                  viewBox="0 0 400 400"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-label="A computer monitor sitting in meditation pose with mandala behind"
                >
                  <g className="mandala-outer" transform-origin="200 200" stroke="#DCBA70" fill="none" strokeWidth="0.5" opacity="0.5">
                    <circle cx="200" cy="200" r="196" />
                    <circle cx="200" cy="200" r="192" />
                    <circle cx="200" cy="200" r="178" />

                    <g fill="#DCBA70" stroke="none">
                      {OUTER_DOTS.map(([cx, cy], i) => (
                        <circle key={i} cx={cx} cy={cy} r="1.8" />
                      ))}
                    </g>

                    <g transform="translate(200 200)" strokeWidth="0.7">
                      {Array.from({ length: 16 }).map((_, i) => (
                        <path
                          key={i}
                          d={PETAL_OUTER}
                          transform={i === 0 ? undefined : `rotate(${i * 22.5})`}
                        />
                      ))}
                    </g>

                    <circle cx="200" cy="200" r="115" />
                    <circle cx="200" cy="200" r="111" />

                    <g transform="translate(200 200)" strokeWidth="0.65">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <path
                          key={i}
                          d={PETAL_INNER}
                          transform={i === 0 ? undefined : `rotate(${i * 45})`}
                        />
                      ))}
                    </g>

                    <circle cx="200" cy="200" r="60" />
                    <circle cx="200" cy="200" r="56" />

                    <path d="M 200,148 L 245,228 L 155,228 Z" strokeWidth="0.8" />
                    <path d="M 200,252 L 245,172 L 155,172 Z" strokeWidth="0.8" />

                    <rect x="172" y="172" width="56" height="56" transform="rotate(45 200 200)" strokeWidth="0.6" />

                    <circle cx="200" cy="200" r="16" />

                    <circle cx="200" cy="200" r="3.5" fill="#DCBA70" stroke="none" />
                  </g>

                  <defs>
                    <radialGradient id="auraGrad" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#DCBA70" stopOpacity="0.35" />
                      <stop offset="40%" stopColor="#DCBA70" stopOpacity="0.12" />
                      <stop offset="100%" stopColor="#DCBA70" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  <circle className="aura" cx="200" cy="195" r="130" fill="url(#auraGrad)" />

                  <g className="halo-breathe" stroke="#DCBA70" fill="none" strokeWidth="0.6">
                    <circle cx="200" cy="195" r="150" />
                    <circle cx="200" cy="195" r="128" />
                    <circle cx="200" cy="195" r="108" />
                  </g>

                  <g stroke="#DCBA70" fill="rgba(15, 18, 48, 0.7)" strokeWidth="1.6" strokeLinejoin="round">
                    <rect x="115" y="130" width="170" height="130" rx="10" />
                    <rect x="130" y="145" width="140" height="100" rx="4" fill="rgba(220, 186, 112, 0.06)" />
                  </g>

                  <g stroke="#DCBA70" fill="none" strokeWidth="2.2" strokeLinecap="round">
                    <path d="M 155 185 Q 165 195 175 185" />
                    <path d="M 225 185 Q 235 195 245 185" />
                    <path d="M 175 218 Q 200 228 225 218" />
                  </g>

                  <circle cx="200" cy="172" r="2.2" fill="#DCBA70" />

                  <g stroke="#DCBA70" fill="none" strokeWidth="1.5" strokeLinejoin="round">
                    <path d="M 188 260 L 188 290 L 212 290 L 212 260" />
                    <path d="M 165 300 Q 200 295 235 300" />
                  </g>

                  <g fill="#DCBA70">
                    <circle cx="180" cy="100" r="2" opacity="0.4" />
                    <circle cx="200" cy="85" r="2.8" opacity="0.6" />
                    <circle cx="220" cy="100" r="2" opacity="0.4" />
                    <circle cx="200" cy="62" r="3.5" opacity="0.8" />
                    <circle cx="195" cy="40" r="2.2" opacity="0.5" />
                  </g>

                  <g fill="#DCBA70" fontFamily="serif">
                    <text x="55" y="135" className="sparkle-float s1" fontSize="18">✦</text>
                    <text x="330" y="140" className="sparkle-float s2" fontSize="16">✦</text>
                    <text x="42" y="240" className="sparkle-float s3" fontSize="12">✦</text>
                    <text x="346" y="250" className="sparkle-float s4" fontSize="14">✦</text>
                    <text x="80" y="305" className="sparkle-float s5" fontSize="10">✦</text>
                    <text x="320" y="310" className="sparkle-float s6" fontSize="11">✦</text>
                    <text x="155" y="55" className="sparkle-float s7" fontSize="9">✦</text>
                    <text x="240" y="55" className="sparkle-float s8" fontSize="10">✦</text>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
