"""Dedup near-duplicate testimonials by (name, first 80 chars of quote).

When the same person appears twice with the same opening, keep the entry
with the longest quote (most complete version); tiebreak by lowest line.
Same logic for cases where one entry uses real name and other is role-only,
matched purely by first 80 chars of quote.
"""
import re
from pathlib import Path
from collections import defaultdict

PATH = Path("app/wall-of-gratitude/testimonials-data.ts")
src = PATH.read_text(encoding="utf-8")
lines = src.split("\n")

start = end = None
for i, l in enumerate(lines):
    if "export const TESTIMONIALS" in l and start is None:
        start = i
    elif start is not None and l.startswith("export const ") and i > start:
        end = i
        break
if end is None:
    end = len(lines)

blocks = []
i = start
while i < end:
    if re.match(r"^  \{\s*$", lines[i]):
        bs = i
        j = i + 1
        while j < end and not re.match(r"^  \},?\s*$", lines[j]):
            j += 1
        if j < end:
            blocks.append({"start": bs, "end": j, "text": "\n".join(lines[bs:j+1])})
            i = j + 1
            continue
    i += 1

def quoted(block, key):
    m = re.search(r"^\s*" + re.escape(key) + r"\s*:\s*", block, re.M)
    if not m: return None
    j = m.end()
    if j < len(block) and block[j] in ('"', "'", '`'):
        q = block[j]; out = []; j += 1
        while j < len(block):
            if block[j] == '\\' and j + 1 < len(block):
                out.append(block[j+1]); j += 2; continue
            if block[j] == q:
                return ''.join(out)
            out.append(block[j]); j += 1
    return None

for b in blocks:
    b["id"] = quoted(b["text"], "id")
    b["name"] = quoted(b["text"], "name")
    b["quote"] = quoted(b["text"], "quote") or ""
    b["qn"] = re.sub(r"\s+", " ", b["quote"]).strip().lower()
    b["qlen"] = len(b["qn"])
    b["isFullName"] = bool(re.search(r"isFullName\s*:\s*true", b["text"]))

# Group by 80-char prefix (ignoring name) — these are content-duplicate candidates
groups = defaultdict(list)
for b in blocks:
    if b["qlen"] >= 80:
        groups[b["qn"][:80]].append(b)
    elif b["qlen"] > 0:
        groups[b["qn"]].append(b)

to_delete = set()
log = []
for prefix, lst in groups.items():
    if len(lst) <= 1: continue
    # Sort: longest quote first (keep), then real name with isFullName, then lowest start
    lst_sorted = sorted(lst, key=lambda b: (-b["qlen"], not b["isFullName"], b["start"]))
    keeper = lst_sorted[0]
    drops = lst_sorted[1:]
    log.append((keeper, drops))
    for d in drops:
        to_delete.add(d["start"])

print(f"Total blocks: {len(blocks)}")
print(f"Near-duplicate groups: {len([g for g in groups.values() if len(g) > 1])}")
print(f"Blocks to delete: {len(to_delete)}")

# Remove lines
delete_ranges = sorted((b["start"], b["end"]) for b in blocks if b["start"] in to_delete)
new_lines = []; cursor = 0
for s, e in delete_ranges:
    new_lines.extend(lines[cursor:s])
    cursor = e + 1
new_lines.extend(lines[cursor:])
PATH.write_text("\n".join(new_lines), encoding="utf-8")

for keeper, drops in log:
    print(f"\n  KEEP line {keeper['start']+1}: {keeper['name']!r} (qlen={keeper['qlen']}, id={keeper['id']!r})")
    for d in drops:
        print(f"    DROP line {d['start']+1}: {d['name']!r} (qlen={d['qlen']}, id={d['id']!r})")

print(f"\nOriginal: {len(blocks)}  Remaining: {len(blocks) - len(to_delete)}")
