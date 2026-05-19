"""Remove duplicate-quote testimonial entries from testimonials-data.ts.

Strategy: for each group of entries with the same (normalised) quote text,
keep the one with the lowest line number that has isFullName: true; if none,
keep the lowest-line entry. Delete the rest.
"""
import re
from pathlib import Path
from collections import defaultdict

PATH = Path("app/wall-of-gratitude/testimonials-data.ts")
src = PATH.read_text(encoding="utf-8")
lines = src.split("\n")

# Locate TESTIMONIALS array
start = end = None
for i, l in enumerate(lines):
    if "export const TESTIMONIALS" in l and start is None:
        start = i
    elif start is not None and l.startswith("export const ") and i > start:
        end = i
        break
if end is None:
    end = len(lines)

# Parse each entry block
blocks = []  # list of {start, end, text, id, name, quote, isFullName}
i = start
while i < end:
    if re.match(r"^  \{\s*$", lines[i]):
        bs = i
        j = i + 1
        while j < end and not re.match(r"^  \},?\s*$", lines[j]):
            j += 1
        if j < end:
            text = "\n".join(lines[bs:j+1])
            blocks.append({"start": bs, "end": j, "text": text})
            i = j + 1
            continue
    i += 1

def extract_quoted(block, key):
    m = re.search(r"^\s*" + re.escape(key) + r"\s*:\s*", block, re.M)
    if not m:
        return None
    j = m.end()
    if j < len(block) and block[j] in ('"', "'", '`'):
        q = block[j]
        out = []; j += 1
        while j < len(block):
            if block[j] == '\\' and j + 1 < len(block):
                out.append(block[j+1]); j += 2; continue
            if block[j] == q:
                return ''.join(out)
            out.append(block[j]); j += 1
    return None

def has_full_name(block):
    return bool(re.search(r"isFullName\s*:\s*true", block))

for b in blocks:
    b["id"] = extract_quoted(b["text"], "id")
    b["name"] = extract_quoted(b["text"], "name")
    b["quote"] = extract_quoted(b["text"], "quote") or extract_quoted(b["text"], "pullQuote") or ""
    b["isFullName"] = has_full_name(b["text"])
    b["qn"] = re.sub(r"\s+", " ", b["quote"]).strip().lower()

# Group by normalised quote
groups = defaultdict(list)
for b in blocks:
    if b["qn"]:
        groups[b["qn"]].append(b)

to_delete = set()  # set of block indices
kept_for_dup = []  # log

# index blocks by their start line for selecting "first occurrence"
for qn, lst in groups.items():
    if len(lst) <= 1:
        continue
    # Pick the keeper: prefer isFullName true, else first occurrence; tie-break by lowest start
    lst_sorted = sorted(lst, key=lambda b: (not b["isFullName"], b["start"]))
    keeper = lst_sorted[0]
    drops = lst_sorted[1:]
    kept_for_dup.append((keeper, drops))
    for d in drops:
        to_delete.add(d["start"])

print(f"Total blocks: {len(blocks)}")
print(f"Duplicate-quote groups: {sum(1 for v in groups.values() if len(v) > 1)}")
print(f"Blocks to delete: {len(to_delete)}")

# Now produce new file: remove the lines covered by each to-delete block
delete_ranges = []
for b in blocks:
    if b["start"] in to_delete:
        delete_ranges.append((b["start"], b["end"]))
# Sort and merge
delete_ranges.sort()

new_lines = []
cursor = 0
for s, e in delete_ranges:
    # include lines [cursor, s)
    new_lines.extend(lines[cursor:s])
    cursor = e + 1
new_lines.extend(lines[cursor:])

# Write back
PATH.write_text("\n".join(new_lines), encoding="utf-8")

print("\nDeleted entries summary (keeper -> drops):")
for keeper, drops in kept_for_dup:
    print(f"  KEEP line {keeper['start']+1}: id={keeper['id']!r} name={keeper['name']!r} isFullName={keeper['isFullName']}")
    for d in drops:
        print(f"    DROP line {d['start']+1}: id={d['id']!r} name={d['name']!r} isFullName={d['isFullName']}")

print(f"\nOriginal entries: {len(blocks)}")
print(f"Remaining entries: {len(blocks) - len(to_delete)}")
