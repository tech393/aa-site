/** Parse a wall-of-text markdown blob into testimonial blocks {quote, attribution}. */

export type Testimonial = {
  quote: string;
  attribution: string;
};

// Heuristic: an attribution line is short, role-flavored, lacks curly quotes.
const ATTRIBUTION_KEYWORDS = [
  "founder", "director", "ceo", "president", "owner", "coach", "teacher",
  "designer", "entrepreneur", "yogi", "therapist", "consultant", "manager",
  "mother", "father", "wife", "husband", "rn", "lmt", "md", "phd",
  "artist", "writer", "author", "speaker", "leader", "healer",
  "mentor", "student", "professor", "doctor", "nurse", "musician",
  "chef", "instructor", "specialist", "professional", "practitioner",
];

function looksLikeAttribution(line: string): boolean {
  const t = line.trim();
  if (t.length === 0 || t.length > 160) return false;
  const stripped = t.replace(/[*"'""''_]/g, "");
  if (stripped.length === 0) return false;
  if (t.includes("“") || t.includes("”")) return false;
  const lower = stripped.toLowerCase();
  if (ATTRIBUTION_KEYWORDS.some((k) => lower.includes(k))) return true;
  // First-name-only (e.g. "Nikki"), single capitalized word, <25 chars
  if (/^[A-Z][a-z]+(?:\s[A-Z][a-z]+)?$/.test(stripped) && stripped.length < 25) return true;
  return false;
}

/**
 * Pull a name attached to the closing quote (e.g. `…I love you.”Nikki` or
 * `…—Lyne Johnson`). Returns { quote, name } where `quote` has the trailing
 * name stripped. Conservative: only accepts 1-3 capitalised tokens.
 */
function extractTrailingName(quote: string): { quote: string; name: string | null } {
  const trimmed = quote.replace(/\s+$/u, "");
  const m = trimmed.match(
    /(?:[”"]|—|–|-{1,2})\s*([A-Z][a-zA-Z'’-]+(?:\s+[A-Z][a-zA-Z'’-]+){0,2})\s*$/u
  );
  if (!m) return { quote, name: null };
  const name = m[1].trim();
  if (ATTRIBUTION_KEYWORDS.some((k) => name.toLowerCase().includes(k))) {
    return { quote, name: null };
  }
  const stripped = trimmed.slice(0, trimmed.length - m[1].length).replace(/\s+$/u, "");
  return { quote: stripped, name };
}

function startsAsQuote(line: string): boolean {
  return line.trim().startsWith("“");
}

/**
 * Walk paragraphs; each curly-quote-opened paragraph starts a new testimonial.
 * Subsequent paragraphs (until the next quote-opener or attribution) extend the
 * current testimonial. Attribution paragraphs close the current testimonial.
 */
export function parseTestimonials(body: string): Testimonial[] {
  // Normalize Windows CRLF / lone CR to LF before any regex work
  body = body.replace(/\r\n?/g, "\n");
  body = body.replace(/^\*\*Have a Story\?.*?\*\*\s*\n+/m, "");
  body = body.replace(/\*\*Have a Story\?.*?\*\*/gm, "");

  const paragraphs = body.split(/\n\n+/).map((p) => p.trim()).filter(Boolean);
  const testimonials: Testimonial[] = [];
  let current: { lines: string[]; attribution: string } | null = null;

  const flush = () => {
    if (current && current.lines.length > 0) {
      testimonials.push({
        quote: current.lines.join("\n\n"),
        attribution: current.attribution,
      });
    }
    current = null;
  };

  for (const p of paragraphs) {
    if (looksLikeAttribution(p)) {
      if (current) {
        current.attribution = p.replace(/^[*_]+|[*_]+$/g, "").trim();
        flush();
      }
      continue;
    }
    if (startsAsQuote(p)) {
      // New testimonial starts
      flush();
      current = { lines: [p], attribution: "" };
    } else if (current) {
      // Continuation of current
      current.lines.push(p);
    } else {
      // Non-quoted standalone testimonial after an attribution (e.g. paragraph 3)
      current = { lines: [p], attribution: "" };
    }
  }
  flush();

  // Clean each testimonial's quote, strip enclosing curly quotes, and promote
  // any name buried at the end of the last paragraph (e.g. `…I love you.”Nikki`)
  // up to the attribution slot when no explicit attribution was found.
  return testimonials.map((t) => {
    let attribution = t.attribution;
    let quote = t.quote;
    if (!attribution) {
      const { quote: stripped, name } = extractTrailingName(quote);
      if (name) {
        attribution = name;
        quote = stripped;
      }
    }
    quote = quote
      .replace(/^[“”"'\s]+/, "")
      .replace(/[“”"'\s]+$/, "")
      .trim();
    // Collapse "*foo *" stray-italic patterns into "*foo*" so markdown emphasis
    // renders correctly instead of leaving a literal asterisk in the body.
    quote = quote.replace(/\*([^*\n]+?)\s+\*/g, "*$1*");
    return {
      quote,
      attribution: attribution || "Awakened Academy graduate",
    };
  }).filter((t) => t.quote.length > 20);
}
