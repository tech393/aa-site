import type { Config } from "tailwindcss";

/**
 * Awakened Academy® — Brand-Tokens-Round1 (Michael, May 2026)
 * Source of truth: /dan-package/DAN-PACKAGE/Brand-Tokens-Round1.md
 *
 * Backwards-compat aliases preserved for legacy class names already used in /app and /components:
 *   bg, warm, ink2, soft, gold-lt, gold-dark, teal-dark, magenta*, font-serif, font-sans, max-w-page/wide/widest
 */
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // === Brand colors v2.1 (Brand-Spec.html, May 2026) ===
        teal: {
          DEFAULT: "#0F5F55",
          deep: "#0A4F46",
          soft: "#2D9085",
          // legacy aliases used in existing code
          dark: "#0A4F46",
        },
        gold: {
          DEFAULT: "#C9A04C",
          deep: "#9F7E38",
          pale: "#E8D4A0",
          light: "#DCBA70",
          // legacy aliases used in existing code
          lt: "#DCBA70",
          dark: "#9F7E38",
        },
        cream: { DEFAULT: "#F2E8D5", paper: "#FBF5E8" },
        ink: {
          DEFAULT: "#2A1A0F",
          soft: "rgba(42,26,15,0.72)",
          muted: "rgba(42,26,15,0.55)",
        },
        navy: "#0F1A38",
        plum: "#421E33", // utility bar bg
        purple: { DEFAULT: "#6B1157", deep: "#1f001f", soft: "#4a1148" },
        rose: "#C47E7E",
        blush: { DEFAULT: "#F8DCDC", mist: "#FCF0F0" },
        line: "rgba(42,26,15,0.12)",
        success: "#0F5F55",
        error: "#B95555",
        warning: "#C9A04C",
        info: "#2D3A8C",
        // Product line accents
        aw: {
          you: "#6B1157",
          dharma: "#0F5F55",
          coach: "#B89148",
          creator: "#C7117A",
          money: "#2D3A8C",
          business: "#1A2747",
        },

        // === Backwards-compat aliases for legacy class names ===
        bg: "#F2E8D5",      // legacy `bg-bg` → new cream
        warm: "#FBF5E8",    // legacy `bg-warm` → new cream-paper
        ink2: "rgba(42,26,15,0.72)", // legacy `text-ink2` → new ink-soft
        soft: "rgba(42,26,15,0.55)", // legacy `text-soft` → new ink-muted
        magenta: { DEFAULT: "#421E33", deep: "#2a1322", soft: "#5a2842" }, // legacy → plum (utility bar)
      },
      fontFamily: {
        // New (canonical)
        display: ['"Fraunces"', 'Georgia', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        script: ['"BonVivant"', '"Allison"', 'cursive'],
        // Backwards-compat aliases — keep existing `font-serif` / `font-sans` working
        serif: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ["clamp(3rem, 7vw, 5.5rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        hero: ["clamp(2.5rem, 5vw, 4rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "h1-aa": ["clamp(2rem, 4vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        "h2-aa": ["clamp(1.625rem, 3vw, 2.25rem)", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "h3-aa": ["clamp(1.25rem, 2vw, 1.5rem)", { lineHeight: "1.3" }],
        lede: ["1.1875rem", { lineHeight: "1.6" }],
        body: ["1.0625rem", { lineHeight: "1.65" }],
        prose: ["1.125rem", { lineHeight: "1.75" }],
        small: ["0.9375rem", { lineHeight: "1.55" }],
        caption: ["0.8125rem", { lineHeight: "1.5" }],
        micro: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.28em" }],
      },
      maxWidth: {
        // New canonical
        reading: "62ch",
        container: "1180px",
        // Backwards-compat
        page: "660px",
        wide: "820px",
        widest: "1200px",
      },
      borderRadius: {
        none: "0",
        sm: "4px",
        DEFAULT: "8px",
        md: "8px",
        lg: "16px",
        full: "9999px",
      },
      boxShadow: {
        none: "none",
        1: "0 1px 2px rgba(42, 26, 15, 0.04)",
        2: "0 4px 12px -2px rgba(42, 26, 15, 0.06)",
        3: "0 12px 32px -8px rgba(42, 26, 15, 0.12)",
        focus: "0 0 0 3px rgba(26, 122, 112, 0.18)",
      },
      transitionDuration: {
        fast: "120ms",
        base: "200ms",
        slow: "320ms",
        reveal: "600ms",
      },
      transitionTimingFunction: {
        "out-soft": "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
        soft: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
      animation: {
        "fade-up": "fadeUp 1s ease both",
        "fade-down": "fadeDown .9s ease both",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(22px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeDown: {
          from: { opacity: "0", transform: "translateY(-10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
