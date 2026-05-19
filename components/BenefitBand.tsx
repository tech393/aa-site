import Image from "next/image";
import Reveal from "@/components/Reveal";

type Props = {
  image: string;
  imageAlt?: string;
  title: string;
  body: string;
  side?: "left" | "right";
  /** CSS object-position value, e.g. "center", "top", "right top". Defaults to "center". */
  imagePosition?: string;
};

export default function BenefitBand({ image, imageAlt = "", title, body, side = "left", imagePosition = "center" }: Props) {
  const cardPos =
    side === "left"
      ? "md:left-[6%] md:right-auto"
      : "md:right-[6%] md:left-auto";
  return (
    <section className="relative isolate w-full overflow-hidden">
      <div className="relative h-[420px] w-full md:h-[440px]">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          style={{ objectPosition: imagePosition }}
          sizes="100vw"
        />
        {/* Mobile soft scrim so card stays readable */}
        <div className="absolute inset-0 bg-black/15 md:hidden" />
      </div>
      <div className={`absolute inset-x-4 top-1/2 -translate-y-1/2 md:inset-x-auto md:max-w-[420px] ${cardPos}`}>
        <Reveal>
          <article className="rounded-md bg-white/95 p-7 shadow-xl backdrop-blur-sm md:p-8">
            <h3 className="font-serif text-[clamp(20px,2.4vw,24px)] font-light leading-[1.25] text-ink">
              {title}
            </h3>
            <div className="mt-3 h-px w-10 bg-gold" />
            <p className="mt-4 text-[14.5px] leading-[1.7] text-ink2">{body}</p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
