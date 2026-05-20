"use client";

const FALLBACK =
  "https://directory.awakenedacademy.com/wp-content/themes/directorytheme/images/Listing-Placeholder.png";

type Props = { src: string; alt: string; className?: string };

export default function CoachImage({ src, alt, className }: Props) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        (e.currentTarget as HTMLImageElement).src = FALLBACK;
      }}
    />
  );
}
