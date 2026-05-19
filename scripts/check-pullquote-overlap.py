"""Check if BIG_PULL_QUOTES text is verbatim inside any TESTIMONIAL quote."""
import re
from pathlib import Path

src = Path("app/wall-of-gratitude/testimonials-data.ts").read_text(encoding="utf-8")

# Extract BIG_PULL_QUOTES entries
m = re.search(r"export const BIG_PULL_QUOTES[^=]*=\s*\[(.*?)\];", src, re.S)
if not m:
    print("Could not locate BIG_PULL_QUOTES"); raise SystemExit(0)
pq_body = m.group(1)

pqs = []
for line in pq_body.split("\n"):
    tm = re.search(r"text:\s*'(.*?)'", line)
    am = re.search(r"attribution:\s*'(.*?)'", line)
    if tm:
        pqs.append({"text": tm.group(1), "attribution": am.group(1) if am else ""})

print(f"Parsed {len(pqs)} BIG_PULL_QUOTES.")

# Get the TESTIMONIALS body text
m2 = re.search(r"export const TESTIMONIALS[^=]*=\s*\[", src)
start = m2.end()
depth = 1
i = start
while i < len(src) and depth > 0:
    if src[i] == '[': depth += 1
    elif src[i] == ']': depth -= 1
    i += 1
tests_body = src[start:i-1]
tests_body_norm = re.sub(r"\s+", " ", tests_body).lower()

for pq in pqs:
    needle = re.sub(r"\s+", " ", pq["text"]).strip().lower()
    # Replace escaped chars
    needle = needle.replace("\\'", "'").replace('\\"', '"')
    found = needle in tests_body_norm
    print(f"  [{'DUP' if found else 'OK '}] {pq['attribution'][:40]:<40} :: {pq['text'][:70]}")
