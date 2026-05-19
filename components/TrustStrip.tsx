import Reveal from "@/components/Reveal";

const STATS: { value: string; label: string }[] = [
  { value: "650+",     label: "Certified coaches" },
  { value: "25+",      label: "Countries" },
  { value: "125,000+", label: "5-star reviews" },
  { value: "Since 2004", label: "Pioneering spiritual coaching" },
];

type Variant = "cream" | "warm" | "white";

export default function TrustStrip({ variant = "warm", kicker = "Trusted worldwide" }: { variant?: Variant; kicker?: string }) {
  const bg = variant === "cream" ? "bg-bg" : variant === "white" ? "bg-white" : "bg-warm";
  return (
    <section className={`${bg} border-y border-ink/5`}>
      <div className="mx-auto max-w-widest px-6 py-12 md:py-14">
        <Reveal>
          <div className="text-center">
            <div className="eyebrow">{kicker}</div>
          </div>
        </Reveal>
        <Reveal>
          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
            {STATS.map((s) => (
              <li key={s.label} className="text-center">
                <div className="font-serif text-[clamp(22px,3vw,32px)] leading-none text-teal">
                  {s.value}
                </div>
                <div className="mt-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-ink2">
                  {s.label}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
