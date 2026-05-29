import Link from "next/link";
import { SITE } from "@/lib/site-config";

const STARS: Array<{ top: string; left: string; size: number; delay: number }> = [
  { top: "6%", left: "8%", size: 2, delay: 0 },
  { top: "11%", left: "42%", size: 1.5, delay: 1.5 },
  { top: "14%", left: "78%", size: 2, delay: 3 },
  { top: "18%", left: "22%", size: 1, delay: 2.2 },
  { top: "22%", left: "62%", size: 1.5, delay: 4 },
  { top: "24%", left: "92%", size: 1, delay: 1 },
  { top: "32%", left: "4%", size: 2, delay: 3.4 },
  { top: "36%", left: "48%", size: 1, delay: 0.6 },
  { top: "42%", left: "88%", size: 1.5, delay: 2.8 },
  { top: "48%", left: "18%", size: 1, delay: 4.4 },
  { top: "55%", left: "72%", size: 2, delay: 1.8 },
  { top: "62%", left: "6%", size: 1, delay: 3.6 },
  { top: "68%", left: "38%", size: 1.5, delay: 0.4 },
  { top: "72%", left: "94%", size: 1, delay: 5 },
  { top: "78%", left: "62%", size: 2, delay: 2.4 },
  { top: "84%", left: "14%", size: 1, delay: 4.6 },
  { top: "88%", left: "48%", size: 1.5, delay: 1.2 },
  { top: "92%", left: "82%", size: 1, delay: 3.2 },
  { top: "96%", left: "32%", size: 1, delay: 0.9 },
];

const SPARKLES = [
  { className: "hs1", top: "18%", left: "8%", fontSize: 18, delay: 0 },
  { className: "hs2", top: "24%", right: "12%", fontSize: 14, delay: 1.5 },
  { className: "hs3", top: "62%", left: "6%", fontSize: 16, delay: 3 },
  { className: "hs4", top: "70%", right: "9%", fontSize: 20, delay: 0.8 },
  { className: "hs5", top: "42%", left: "14%", fontSize: 12, delay: 2.4 },
  { className: "hs6", top: "50%", right: "16%", fontSize: 14, delay: 3.8 },
] as const;

const CSS = `
.page-gone-section {
  --teal: #1A7A70;
  --teal-deep: #14635B;
  --gold: #C9A961;
  --gold-light: #DCBA70;
  --cream: #F2E8D5;
  --cream-paper: #FBF5E8;
  --navy: #0F1A38;
  --ink: #1A1814;
  --font-display: 'Fraunces', Georgia, serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --radius-sm: 4px;
  position: relative;
  isolation: isolate;
  overflow: hidden;
  font-family: var(--font-body);
  color: var(--cream-paper);
  background: var(--navy);
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  padding: 48px 0 64px;
}

.page-gone-section .pg-bg-image {
  position: absolute;
  inset: 0;
  background-image: url('/images/cert-hero-meditation-sedona.webp');
  background-size: cover;
  background-position: center;
  z-index: -2;
}

.page-gone-section .pg-bg-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(15, 26, 56, 0.5) 0%, rgba(15, 26, 56, 0.78) 100%);
  z-index: -1;
}

.page-gone-section .pg-stars {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.page-gone-section .pg-star {
  position: absolute;
  background: var(--cream-paper);
  border-radius: 50%;
  opacity: 0;
  animation: pgTwinkle 6s ease-in-out infinite;
}

@keyframes pgTwinkle {
  0%, 100% { opacity: 0.15; }
  50% { opacity: 0.7; }
}

.page-gone-section .pg-hero-sparkle {
  position: absolute;
  color: var(--gold-light);
  font-family: serif;
  pointer-events: none;
  animation: pgFloatSparkle 5s ease-in-out infinite;
  z-index: 1;
}

@keyframes pgFloatSparkle {
  0%, 100% { opacity: 0.4; transform: translateY(0) scale(1); }
  50% { opacity: 0.95; transform: translateY(-6px) scale(1.2); }
}

.page-gone-section .pg-glow-behind {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 600px;
  height: 600px;
  transform: translate(-50%, -55%);
  background: radial-gradient(circle, rgba(220, 186, 112, 0.18) 0%, transparent 55%);
  pointer-events: none;
  z-index: 0;
  animation: pgGlowPulse 7s ease-in-out infinite;
}

@keyframes pgGlowPulse {
  0%, 100% { opacity: 0.7; transform: translate(-50%, -55%) scale(1); }
  50% { opacity: 1; transform: translate(-50%, -55%) scale(1.08); }
}

@media (max-width: 768px) {
  .page-gone-section .pg-glow-behind { width: 400px; height: 400px; }
  .page-gone-section .pg-hero-sparkle.hs5,
  .page-gone-section .pg-hero-sparkle.hs6 { display: none; }
}

@media (prefers-reduced-motion: reduce) {
  .page-gone-section .pg-star,
  .page-gone-section .pg-hero-sparkle,
  .page-gone-section .pg-glow-behind { animation: none !important; }
}

.page-gone-section .pg-container {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 32px;
  width: 100%;
  position: relative;
  z-index: 2;
  flex: 1;
  display: flex;
  align-items: center;
}

@media (max-width: 768px) {
  .page-gone-section .pg-container { padding: 0 20px; }
}

.page-gone-section .pg-hero-inner {
  max-width: 680px;
  margin: 0 auto;
  text-align: center;
  animation: pgRise 900ms cubic-bezier(0.16, 1, 0.3, 1) both;
}

@keyframes pgRise {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

.page-gone-section .pg-eyebrow {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: var(--gold-light);
  margin-bottom: 20px;
  opacity: 0.85;
}

.page-gone-section .pg-h1 {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: clamp(2.25rem, 5vw, 3.5rem);
  line-height: 1.08;
  letter-spacing: -0.025em;
  color: var(--cream-paper);
  margin: 0 0 20px;
}

.page-gone-section .pg-lede {
  font-size: 1.0625rem;
  line-height: 1.6;
  color: rgba(251, 245, 232, 0.85);
  max-width: 52ch;
  margin: 0 auto 32px;
}

.page-gone-section .pg-reach-out {
  background: rgba(15, 26, 56, 0.55);
  border: 1px solid rgba(220, 186, 112, 0.35);
  border-radius: 12px;
  padding: 24px 28px;
  margin-bottom: 24px;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.page-gone-section .pg-reach-label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--gold-light);
  margin: 0 0 14px;
}

.page-gone-section .pg-reach-options {
  display: flex;
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
}

.page-gone-section .pg-reach-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-body);
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--cream-paper);
  text-decoration: none;
  transition: color 200ms cubic-bezier(0.16, 1, 0.3, 1);
}

.page-gone-section .pg-reach-link:hover { color: var(--gold-light); }

.page-gone-section .pg-reach-link .pg-icon {
  font-size: 1.1rem;
  color: var(--gold-light);
}

.page-gone-section .pg-reach-sep {
  color: rgba(251, 245, 232, 0.25);
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .page-gone-section .pg-reach-out { padding: 20px 18px; }
  .page-gone-section .pg-reach-link { font-size: 1rem; }
  .page-gone-section .pg-reach-sep { display: none; }
  .page-gone-section .pg-reach-options { flex-direction: column; gap: 14px; }
}

.page-gone-section .pg-actions {
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
}

.page-gone-section .pg-action-link {
  color: rgba(251, 245, 232, 0.7);
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: var(--radius-sm);
  transition: all 200ms cubic-bezier(0.16, 1, 0.3, 1);
}

.page-gone-section .pg-action-link:hover {
  color: var(--cream-paper);
  background: rgba(251, 245, 232, 0.08);
}

.page-gone-section .pg-action-sep {
  color: rgba(251, 245, 232, 0.3);
  font-size: 0.875rem;
}

.page-gone-section .pg-blessing {
  margin-top: 40px;
  padding-top: 28px;
  border-top: 1px solid rgba(220, 186, 112, 0.15);
  text-align: center;
}

.page-gone-section .pg-blessing-text {
  font-family: 'Allison', cursive;
  font-size: 1.875rem;
  color: var(--gold-light);
  line-height: 1.15;
  opacity: 0.9;
  margin: 0;
}

@media (max-width: 600px) {
  .page-gone-section .pg-blessing-text { font-size: 1.5rem; }
}

@media (prefers-reduced-motion: reduce) {
  .page-gone-section .pg-hero-inner { animation: none !important; }
}
`;

export default function PageGoneUI({ eyebrow = "Page not found" }: { eyebrow?: string }) {
  return (
    <section className="page-gone-section" aria-labelledby="page-gone-heading">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <div className="pg-bg-image" />
      <div className="pg-bg-overlay" />

      <div className="pg-stars" aria-hidden>
        {STARS.map((s, i) => (
          <span
            key={i}
            className="pg-star"
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

      {SPARKLES.map((s) => (
        <span
          key={s.className}
          className={`pg-hero-sparkle ${s.className}`}
          style={{
            top: s.top,
            ...("left" in s ? { left: s.left } : { right: s.right }),
            fontSize: `${s.fontSize}px`,
            animationDelay: `${s.delay}s`,
          }}
          aria-hidden
        >
          ✦
        </span>
      ))}

      <div className="pg-glow-behind" aria-hidden />

      <div className="pg-container">
        <div className="pg-hero-inner">
          <p className="pg-eyebrow">{eyebrow}</p>

          <h1 id="page-gone-heading" className="pg-h1">
            Oops. That page doesn&apos;t exist.
          </h1>

          <p className="pg-lede">
            We&apos;ve upgraded our site, and some older pages were retired.
          </p>

          <div className="pg-reach-out">
            <p className="pg-reach-label">
              Looking for something? We&apos;ll find it for you.
            </p>
            <div className="pg-reach-options">
              <a
                href={`mailto:${SITE.email}?subject=Help%20finding%20something%20on%20the%20site`}
                className="pg-reach-link"
              >
                <span className="pg-icon">✉</span>
                {SITE.email}
              </a>
              <span className="pg-reach-sep" aria-hidden>·</span>
              <a href={SITE.phoneHref} className="pg-reach-link">
                <span className="pg-icon">☎</span>
                {SITE.phone}
              </a>
            </div>
          </div>

          <div className="pg-actions">
            <Link href="/" className="pg-action-link">
              Go to Home
            </Link>
            <span className="pg-action-sep" aria-hidden>·</span>
            <Link href="/schedule" className="pg-action-link">
              Book a Call
            </Link>
          </div>

          <div className="pg-blessing">
            <p className="pg-blessing-text">
              You&apos;re a beautiful soul. Thank you for your presence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
