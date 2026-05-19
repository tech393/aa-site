"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * Sticky CTA bar (Brand-Spec.html v2.1 §15).
 *
 * Appears bottom of viewport after the user scrolls past the first hero CTA,
 * hides again when they reach the page-bottom CTA. Dark ink background, gold
 * primary button (different from inline teal so it reads as "persistent").
 */
export default function StickyCTABar({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  showAfterScroll = 600,
  hideNearBottom = 800,
}: {
  title: string;
  subtitle?: string;
  ctaLabel: string;
  ctaHref: string;
  /** Show after this many pixels of vertical scroll. */
  showAfterScroll?: number;
  /** Hide when within this many pixels of the page bottom. */
  hideNearBottom?: number;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const past = y > showAfterScroll;
      const nearBottom = max - y < hideNearBottom;
      setVisible(past && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [showAfterScroll, hideNearBottom]);

  return (
    <div
      aria-hidden={!visible}
      className={`pointer-events-none fixed bottom-0 left-0 right-0 z-40 px-4 pb-4 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="pointer-events-auto mx-auto flex max-w-3xl items-center justify-between gap-4 rounded-md bg-ink px-5 py-3 shadow-[0_8px_24px_-8px_rgba(42,26,15,0.35)] sm:px-6 sm:py-4">
        <div className="min-w-0 flex-1">
          <div className="truncate font-serif text-[15px] leading-[1.3] text-cream sm:text-[16px]">
            {title}
          </div>
          {subtitle && (
            <div className="mt-0.5 truncate text-[11.5px] text-cream/70 sm:text-[12px]">
              {subtitle}
            </div>
          )}
        </div>
        <Link
          href={ctaHref}
          className="shrink-0 whitespace-nowrap rounded bg-gold px-4 py-2.5 text-[13px] font-medium text-ink transition hover:bg-gold-deep hover:text-white sm:px-5 sm:py-3 sm:text-[14px]"
        >
          {ctaLabel} →
        </Link>
      </div>
    </div>
  );
}
