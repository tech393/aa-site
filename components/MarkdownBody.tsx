import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

/**
 * Premium long-form body styling per Brand-Spec.html v2.1 §24.
 * Fraunces serif body @ 20px / 1.8, max 62ch reading column,
 * gold-sparkle (✦) bullets, rose-bordered Fraunces-italic blockquotes,
 * H2/H3 in Fraunces, drop-cap optional via .has-drop-cap parent class.
 */
export default function MarkdownBody({ children }: { children: string }) {
  return (
    <div className="article-body prose prose-lg mx-auto max-w-[62ch] font-serif text-ink prose-headings:font-serif prose-headings:text-ink prose-h2:text-[clamp(26px,4vw,32px)] prose-h2:font-medium prose-h2:mt-12 prose-h2:mb-4 prose-h2:leading-[1.2] prose-h2:tracking-[-0.015em] prose-h3:font-sans prose-h3:text-[clamp(20px,3vw,24px)] prose-h3:font-semibold prose-h3:mt-10 prose-h3:mb-3 prose-p:font-serif prose-p:text-ink prose-p:text-[20px] prose-p:leading-[1.8] prose-a:text-teal prose-a:underline prose-a:decoration-1 prose-a:underline-offset-[4px] hover:prose-a:text-teal-deep prose-strong:text-ink prose-strong:font-semibold prose-em:text-ink prose-em:italic prose-blockquote:border-l-[3px] prose-blockquote:border-rose prose-blockquote:bg-rose/5 prose-blockquote:rounded-r-md prose-blockquote:py-5 prose-blockquote:px-6 prose-blockquote:not-italic prose-blockquote:font-serif prose-blockquote:text-[26px] prose-blockquote:leading-[1.4] prose-blockquote:text-ink prose-blockquote:[&_p]:italic prose-blockquote:[&_p]:font-medium prose-li:font-serif prose-li:text-ink prose-li:text-[20px] prose-li:leading-[1.75] prose-li:marker:text-gold prose-li:marker:text-[14px] prose-img:rounded-md prose-img:shadow-sm">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{children}</ReactMarkdown>
    </div>
  );
}
