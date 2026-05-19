"use client";

import { useEffect, useRef, ReactNode } from "react";

export default function Reveal({
  children,
  className = "",
  delay,
}: {
  children: ReactNode;
  className?: string;
  /** Optional reveal delay in seconds (Framer-style). Applied as CSS transition-delay. */
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          obs.unobserve(e.target);
        }
      }),
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const style = typeof delay === "number" ? { transitionDelay: `${delay}s` } : undefined;
  return (
    <div ref={ref} className={`fade-in ${className}`} style={style}>
      {children}
    </div>
  );
}
