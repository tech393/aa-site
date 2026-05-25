// "As Featured In" press-logo marquee.
// Auto-scrolls left, pauses on hover, respects prefers-reduced-motion.
// Styles live in app/globals.css under the .aa-fb namespace.

type Size = "sm" | "md" | "lg";

const LOGOS: { src: string; alt: string }[] = [
  { src: "/images/press/insight-timer.svg",       alt: "Insight Timer" },
  { src: "/images/press/spirituality-health.svg", alt: "Spirituality & Health" },
  { src: "/images/press/aura.webp",               alt: "Aura" },
  { src: "/images/press/yoga-journal.svg",        alt: "Yoga Journal" },
  { src: "/images/press/ap-news.svg",             alt: "AP News" },
  { src: "/images/press/apple-news.png",          alt: "Apple News" },
  { src: "/images/press/nbc.svg",                 alt: "NBC" },
  { src: "/images/press/cbs.svg",                 alt: "CBS" },
  { src: "/images/press/abc.svg",                 alt: "ABC" },
  { src: "/images/press/digital-journal.svg",     alt: "Digital Journal" },
];

export default function FeaturedInBanner({
  size = "md",
  dark = false,
  label = "As Featured In",
}: {
  size?: Size;
  dark?: boolean;
  label?: string;
}) {
  const classes = ["aa-fb", `aa-fb--${size}`];
  if (dark) classes.push("aa-fb--dark");

  // The track renders the logo set twice back-to-back so the keyframe (which
  // translates the track by -50%) loops seamlessly. The duplicate set is
  // aria-hidden so screen readers only announce each publication once.
  return (
    <section className={classes.join(" ")}>
      <span className="aa-fb__label">{label}</span>
      <div className="aa-fb__marquee">
        <div className="aa-fb__track">
          {LOGOS.map((l) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={l.src} src={l.src} alt={l.alt} loading="lazy" />
          ))}
          {LOGOS.map((l) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={`${l.src}-dup`} src={l.src} alt="" aria-hidden loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  );
}
