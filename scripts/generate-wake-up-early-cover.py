"""Generate placeholder cover for 'How to Wake Up Early'.

Matches the site palette: navy background, gold accents, cream text.
2:3 aspect ratio (800x1200) to match the books grid Image component.
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

# Site palette (from tailwind.config.ts / globals.css)
NAVY = (15, 32, 51)        # bg-navy
NAVY_DARK = (10, 22, 36)
GOLD = (201, 169, 97)      # #C9A961
GOLD_LT = (220, 186, 112)  # #DCBA70
CREAM = (245, 240, 230)    # cream-paper

W, H = 800, 1200

def find_font(candidates, size):
    for name in candidates:
        try:
            return ImageFont.truetype(name, size)
        except OSError:
            continue
    return ImageFont.load_default()

serif_bold = find_font([
    "georgiab.ttf", "GeorgiaB.ttf",
    "C:/Windows/Fonts/georgiab.ttf",
    "C:/Windows/Fonts/times.ttf",
], 78)
serif = find_font([
    "C:/Windows/Fonts/georgia.ttf",
    "C:/Windows/Fonts/times.ttf",
], 64)
sans_sm = find_font([
    "C:/Windows/Fonts/arial.ttf",
], 24)
sans_xs = find_font([
    "C:/Windows/Fonts/ariali.ttf",
    "C:/Windows/Fonts/arial.ttf",
], 20)

img = Image.new("RGB", (W, H), NAVY)
d = ImageDraw.Draw(img)

# Subtle vertical gradient (navy -> slightly darker at bottom)
for y in range(H):
    t = y / H
    r = int(NAVY[0] * (1 - t) + NAVY_DARK[0] * t)
    g = int(NAVY[1] * (1 - t) + NAVY_DARK[1] * t)
    b = int(NAVY[2] * (1 - t) + NAVY_DARK[2] * t)
    d.line([(0, y), (W, y)], fill=(r, g, b))

# Inner gold border frame
margin = 50
d.rectangle([margin, margin, W - margin, H - margin], outline=GOLD, width=3)

# Inner thin line inset
inset = margin + 18
d.rectangle([inset, inset, W - inset, H - inset], outline=GOLD_LT, width=1)

# Decorative sunrise glyph (semi-circle + rays)
cx, cy = W // 2, 360
sun_r = 80
# rays
import math
for i in range(12):
    angle = -math.pi + i * (math.pi / 11)  # only upper rays
    x1 = cx + math.cos(angle) * (sun_r + 24)
    y1 = cy + math.sin(angle) * (sun_r + 24)
    x2 = cx + math.cos(angle) * (sun_r + 70)
    y2 = cy + math.sin(angle) * (sun_r + 70)
    d.line([(x1, y1), (x2, y2)], fill=GOLD, width=3)
# horizon line
d.line([(cx - 200, cy), (cx + 200, cy)], fill=GOLD_LT, width=2)
# half-sun (filled arc)
d.pieslice([cx - sun_r, cy - sun_r, cx + sun_r, cy + sun_r], 180, 360, fill=GOLD)

# Eyebrow "A Short Book By" (sm caps style, gold)
eyebrow = "A SHORT BOOK BY MICHAEL MACKINTOSH"
bbox = d.textbbox((0, 0), eyebrow, font=sans_sm)
tw = bbox[2] - bbox[0]
d.text(((W - tw) // 2, 560), eyebrow, fill=GOLD_LT, font=sans_sm)

# Title (two lines, centered, cream serif)
title_l1 = "How to"
title_l2 = "Wake Up Early"
bbox = d.textbbox((0, 0), title_l1, font=serif_bold)
tw = bbox[2] - bbox[0]
d.text(((W - tw) // 2, 640), title_l1, fill=CREAM, font=serif_bold)
bbox = d.textbbox((0, 0), title_l2, font=serif_bold)
tw = bbox[2] - bbox[0]
d.text(((W - tw) // 2, 740), title_l2, fill=CREAM, font=serif_bold)

# Divider ornament
d.line([(W // 2 - 60, 880), (W // 2 + 60, 880)], fill=GOLD, width=1)
d.text((W // 2 - 8, 870), "*", fill=GOLD, font=sans_sm)

# Subtitle (italic, cream/70)
sub = "The simple practice that changes everything."
bbox = d.textbbox((0, 0), sub, font=sans_xs)
tw = bbox[2] - bbox[0]
d.text(((W - tw) // 2, 920), sub, fill=(220, 215, 200), font=sans_xs)

# Brand at bottom
brand = "AWAKENED ACADEMY"
bbox = d.textbbox((0, 0), brand, font=sans_sm)
tw = bbox[2] - bbox[0]
d.text(((W - tw) // 2, H - 130), brand, fill=GOLD_LT, font=sans_sm)

out = Path(__file__).resolve().parent.parent / "public" / "images" / "books" / "how-to-wake-up-early.jpg"
out.parent.mkdir(parents=True, exist_ok=True)
img.save(out, "JPEG", quality=88, optimize=True)
print(f"wrote {out} ({out.stat().st_size} bytes)")
