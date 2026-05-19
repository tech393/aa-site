import re
from pathlib import Path

src = Path("app/wall-of-gratitude/testimonials-data.ts").read_text(encoding="utf-8")
lines = src.split("\n")

# Find TESTIMONIALS array start and the next "export const" after it (end)
start = None
end = None
for i, l in enumerate(lines):
    if "export const TESTIMONIALS" in l:
        start = i
    elif start is not None and l.startswith("export const ") and i > start:
        end = i
        break
if end is None:
    end = len(lines)

print(f"TESTIMONIALS array: lines {start+1}..{end+1}")

# Find each entry: lines from "^  {" to matching "^  },"
entries = []
i = start
while i < end:
    if re.match(r"^  \{\s*$", lines[i]):
        block_start = i
        # find closing
        j = i + 1
        while j < end and not re.match(r"^  \},?\s*$", lines[j]):
            j += 1
        if j < end:
            entries.append((block_start, j, "\n".join(lines[block_start:j+1])))
            i = j + 1
            continue
    i += 1

print(f"Parsed {len(entries)} entries.")

def field(block, key):
    # find `    key:` or `key:` line
    m = re.search(r"^\s*" + re.escape(key) + r"\s*:\s*", block, re.M)
    if not m:
        return None
    j = m.end()
    if j < len(block) and block[j] in ('"', "'", '`'):
        quote = block[j]
        out = []; j += 1
        while j < len(block):
            if block[j] == '\\' and j + 1 < len(block):
                out.append(block[j+1]); j += 2; continue
            if block[j] == quote:
                # Check if continued by + on next line, but we'll just take this string
                return ''.join(out)
            out.append(block[j]); j += 1
    return None

# Extract id, name, quote
records = []
for line_start, _, block in entries:
    tid = field(block, 'id')
    name = field(block, 'name')
    quote = field(block, 'quote')
    pullQuote = field(block, 'pullQuote')
    if not quote and pullQuote:
        # quote may span multi-line as concatenated strings — fall back
        quote = pullQuote
    records.append({
        'line': line_start + 1,
        'id': tid,
        'name': name,
        'quote': quote,
        'pullQuote': pullQuote,
    })

# Build dup detection
from collections import defaultdict
by_id = defaultdict(list)
by_name = defaultdict(list)
by_quote = defaultdict(list)
by_quote_prefix = defaultdict(list)

for r in records:
    if r['id']:
        by_id[r['id']].append(r)
    if r['name']:
        by_name[r['name'].strip().lower()].append(r)
    if r['quote']:
        qn = re.sub(r'\s+', ' ', r['quote']).strip().lower()
        by_quote[qn].append(r)
        by_quote_prefix[qn[:80]].append(r)

print("\n=== Duplicate IDs ===")
any_dup_id = False
for tid, lst in by_id.items():
    if len(lst) > 1:
        any_dup_id = True
        print(f"  id={tid!r}")
        for r in lst:
            print(f"     line {r['line']}: name={r['name']!r}")
if not any_dup_id:
    print("  (none)")

print("\n=== Duplicate NAMES (may be legitimate — same person, different testimonial) ===")
for name, lst in by_name.items():
    if len(lst) > 1:
        print(f"  name={name!r}")
        for r in lst:
            print(f"     line {r['line']}: id={r['id']!r}  quote[:80]={(r['quote'] or '')[:80]!r}")

print("\n=== Exact duplicate quotes ===")
dq = [(k, lst) for k, lst in by_quote.items() if len(lst) > 1]
for k, lst in dq:
    print(f"  quote[:80]={k[:80]!r}")
    for r in lst:
        print(f"     line {r['line']}: id={r['id']!r} name={r['name']!r}")
print(f"Total exact-quote duplicate groups: {len(dq)}")

print("\n=== Same 80-char quote prefix (likely near-duplicates) ===")
dp = [(k, lst) for k, lst in by_quote_prefix.items() if len(lst) > 1]
for k, lst in dp:
    print(f"  prefix={k!r}")
    for r in lst:
        print(f"     line {r['line']}: id={r['id']!r} name={r['name']!r}")
print(f"Total prefix-duplicate groups: {len(dp)}")
