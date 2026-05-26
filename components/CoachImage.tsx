"use client";

import type { CSSProperties } from "react";

const FALLBACK =
  "https://directory.awakenedacademy.com/wp-content/themes/directorytheme/images/Listing-Placeholder.png";

type Props = { src: string; alt: string; className?: string; style?: CSSProperties };

export default function CoachImage({ src, alt, className, style }: Props) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onError={(e) => {
        (e.currentTarget as HTMLImageElement).src = FALLBACK;
      }}
    />
  );
}
