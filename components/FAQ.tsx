import { ReactNode } from "react";

type QA = { q: string; a: ReactNode };

/**
 * FAQ accordion (Brand-Spec.html v2.1 §15).
 * Question: Fraunces 500 19px. Answer: Fraunces 17px / 1.7 line-height.
 * Closed: cream-paper bg + + icon. Open: white bg + × icon, gold left border accent.
 * Native <details> for accessibility, no JS required for collapse/expand.
 */
export default function FAQ({
  items,
  title = "Frequently Asked Questions",
  eyebrow = "FAQ",
}: {
  items: QA[];
  title?: string;
  eyebrow?: string;
}) {
  return (
    <section className="bg-bg">
      <div className="mx-auto max-w-wide px-6 py-20">
        <div className="text-center">
          <span className="eyebrow">{eyebrow}</span>
          <h2 className="mt-3 font-serif text-[clamp(28px,5vw,42px)] text-ink">{title}</h2>
          <div className="gold-line mt-6" />
        </div>

        <div className="mt-12 overflow-hidden rounded-md border border-ink/10">
          {items.map((item, i) => (
            <details
              key={i}
              className="group border-b border-ink/10 bg-warm transition-colors last:border-b-0 open:bg-white open:shadow-[inset_3px_0_0_var(--gold)]"
            >
              <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 px-6 py-5 font-serif text-[19px] font-medium text-ink transition hover:text-teal sm:px-8 [&::-webkit-details-marker]:hidden">
                <span className="flex-1">{item.q}</span>
                <span className="shrink-0 text-[22px] leading-none text-ink/40 transition group-open:text-teal group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="px-6 pb-6 font-serif text-[17px] leading-[1.7] text-ink2 sm:px-8">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
