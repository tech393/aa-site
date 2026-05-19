import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

type HeroProps = {
  image: string;
  imageAlt: string;
  title: ReactNode;
  subtitle?: ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryHref?: string;
  align?: "left" | "right" | "center";
  overlayOpacity?: number;
};

export default function Hero({
  image,
  imageAlt,
  title,
  subtitle,
  ctaLabel,
  ctaHref = "/schedule",
  ctaSecondaryLabel,
  ctaSecondaryHref,
  align = "right",
  overlayOpacity = 0.25,
}: HeroProps) {
  const alignment =
    align === "right" ? "md:items-end md:text-right md:ml-auto"
      : align === "left" ? "md:items-start md:text-left md:mr-auto"
      : "items-center text-center mx-auto";

  return (
    <section className="relative isolate min-h-[68vh] w-full overflow-hidden md:min-h-[78vh]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/15 to-black/40"
        style={{ opacity: overlayOpacity * 2 }}
      />

      <div className="relative z-10 mx-auto flex min-h-[68vh] max-w-widest items-center px-6 py-20 md:min-h-[78vh]">
        <div className={`flex w-full flex-col gap-6 text-white ${alignment} md:max-w-[560px]`}>
          <h1 className="hero-text font-serif text-[clamp(32px,6vw,58px)] font-light leading-[1.1]">
            {title}
          </h1>
          {subtitle && (
            <p className="hero-text max-w-[520px] text-[clamp(15px,2vw,18px)] leading-[1.6] text-white/90">
              {subtitle}
            </p>
          )}
          {ctaLabel && (
            <div className={`mt-2 flex flex-wrap gap-3 ${align === "right" ? "md:justify-end" : align === "center" ? "justify-center" : ""}`}>
              <Link
                href={ctaHref}
                className="inline-flex items-center justify-center rounded bg-gold px-7 py-3.5 text-[15px] font-medium text-white shadow-md transition hover:bg-gold-deep"
              >
                {ctaLabel}
              </Link>
              {ctaSecondaryLabel && ctaSecondaryHref && (
                <Link
                  href={ctaSecondaryHref}
                  className="inline-flex items-center justify-center rounded border-2 border-white/90 bg-white/5 px-7 py-3 text-[15px] font-medium text-white backdrop-blur-sm transition hover:bg-white hover:text-ink"
                >
                  {ctaSecondaryLabel}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
