#!/usr/bin/env python3
"""
Generate Birdsong Realty Team logo candidates via OpenRouter image models.

Usage:
    OPENROUTER_API_KEY=sk-or-... python3 scripts/generate-logos.py

Reads the API key from the OPENROUTER_API_KEY environment variable ONLY.
Never hardcode the key here. Output PNGs are written to public/images/logo-ai/.
"""
import os
import sys
import json
import base64
import urllib.request

API_URL = "https://openrouter.ai/api/v1/chat/completions"
MODEL = os.environ.get("LOGO_MODEL", "google/gemini-3-pro-image-preview")
OUT_DIR = os.environ.get("LOGO_OUT", os.path.join("public", "images", "logo-ai"))

BRAND = (
    "Brand: 'Birdsong Realty Team', a premium Austin Texas real estate team. "
    "Colors: deep navy blue (#10295A) and emerald green accent (#1A9175). "
    "Style: clean, modern, professional, flat vector, high contrast, centered, "
    "generous padding, plain white background, no photographic texture, no gradients meshes, "
    "suitable as a scalable brand mark."
)

# (filename, prompt) — a spread of directions
CONCEPTS = [
    ("01-songbird-minimal",
     "A minimalist single-line songbird icon mid-song, simple geometric, navy blue. No text. " + BRAND),
    ("02-songbird-seal",
     "A circular seal/badge logo: a songbird in the center, the words 'BIRDSONG REALTY TEAM' "
     "curved around the inside of a double-ring border, navy blue on white. Classic, established. " + BRAND),
    ("03-coin-emblem",
     "A solid navy circular coin emblem with a clean white songbird silhouette reversed out of the center. "
     "Bold, modern, works as an app icon. No text. " + BRAND),
    ("04-monogram-b",
     "An elegant serif letter 'B' monogram inside a thin circle, with a tiny musical note accent, "
     "navy blue. Refined and luxurious. No extra text. " + BRAND),
    ("05-bird-house",
     "A clever combination mark blending a songbird with a subtle house/roof shape, geometric, "
     "navy with a green accent. No text. " + BRAND),
    ("06-abstract-wing",
     "An abstract modern mark made of clean overlapping shapes suggesting a bird's wing in flight, "
     "navy and emerald green, geometric, tech-forward. No text. " + BRAND),
    ("07-songnote-bird",
     "A simple bird formed together with a musical note, single weight line art, navy blue, "
     "playful but professional. No text. " + BRAND),
    ("08-full-lockup",
     "A complete logo lockup: a clean songbird icon above the wordmark 'Birdsong' in an elegant serif, "
     "with 'REALTY TEAM' in small spaced uppercase beneath, navy blue, centered, balanced. " + BRAND),
]


def generate(name: str, prompt: str, api_key: str) -> bool:
    body = json.dumps({
        "model": MODEL,
        "modalities": ["image", "text"],
        "messages": [{"role": "user", "content": prompt}],
    }).encode()
    req = urllib.request.Request(
        API_URL,
        data=body,
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
            "HTTP-Referer": "https://birdsongrealtyteam.com",
            "X-Title": "Birdsong Logo Generation",
        },
    )
    try:
        with urllib.request.urlopen(req, timeout=120) as resp:
            data = json.load(resp)
    except Exception as e:
        print(f"  ! {name}: request failed: {e}")
        return False

    if "error" in data:
        print(f"  ! {name}: api error: {str(data['error'])[:200]}")
        return False

    msg = data.get("choices", [{}])[0].get("message", {})
    imgs = msg.get("images") or []
    if not imgs:
        print(f"  ! {name}: no image returned (keys={list(msg.keys())})")
        return False

    url = imgs[0]["image_url"]["url"]
    b64 = url.split(",", 1)[1]
    path = os.path.join(OUT_DIR, f"{name}.png")
    with open(path, "wb") as f:
        f.write(base64.b64decode(b64))
    print(f"  \u2713 {name}.png ({len(b64)//1024}kb)")
    return True


def main():
    api_key = os.environ.get("OPENROUTER_API_KEY")
    if not api_key:
        print("ERROR: set OPENROUTER_API_KEY in the environment.")
        sys.exit(1)
    os.makedirs(OUT_DIR, exist_ok=True)
    # allow filtering: pass concept name prefixes as args
    wanted = sys.argv[1:]
    concepts = [c for c in CONCEPTS if not wanted or any(c[0].startswith(w) for w in wanted)]
    print(f"Generating {len(concepts)} logo(s) with {MODEL} -> {OUT_DIR}")
    ok = 0
    for name, prompt in concepts:
        if generate(name, prompt, api_key):
            ok += 1
    print(f"Done: {ok}/{len(concepts)} succeeded.")


if __name__ == "__main__":
    main()
