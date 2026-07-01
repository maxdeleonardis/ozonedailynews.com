# OzoneNews | Copilot Instructions (OStandard)
# Layer 4 — Editorial gate enforced at the writing stage.
# These rules apply to EVERY Copilot request in this workspace.

applyTo: "**"

---

## Em Dash Zero-Tolerance (ABSOLUTE — no exceptions)

NEVER use em dashes (—) or en dashes (–) anywhere:
- Titles, headings, subtitles
- metadata.title, metadata.description
- Article body prose
- JSX string literals
- openGraph.title, openGraph.description
- JSON content fields
- Code comments

CORRECT alternatives:
| Wrong | Correct |
|---|---|
| `Title — Subtitle` | `Title \| Subtitle` |
| `The update — which ships Friday — adds X` | `The update, which ships Friday, adds X` |
| `Record sales — 5M in 48h` | `Record sales, 5M in 48 hours` |
| `New feature — here's what changed` | `New feature, here is what changed` |

---

## metadata.title Rules

- Max 60 characters
- Format: `Primary Keyword | Specific Detail`
- No brand suffix (no "| OzoneNews" at the end)
- No em dashes, no en dashes
- `&` is ALLOWED in metadata.title only

## metadata.description Rules

- 130-155 characters (hard limits)
- Primary keyword must appear in first 60 characters
- No generic phrases ("learn more", "find out", "comprehensive guide")
- No AI boilerplate

## Banned AI Boilerplate Phrases (build fails on any occurrence)

These phrases trigger Google's HCU classifier. Never write them:
- "In conclusion"
- "It is important to note"
- "It is important to remember"
- "Furthermore, it is crucial"
- "In today's fast-paced world"
- "In the ever-evolving landscape"
- "It is worth noting that"
- "Moreover, it should be noted"
- "Navigating the complex"
- "Delve into"
- "In summary"

---

## Link Styling (Non-Negotiable)

Every link in article prose must be blue and underlined:

```tsx
// Internal links
<Link href="/path" className="text-blue-600 hover:text-blue-800 underline">
  Link text
</Link>

// External links
<a href="https://source.com" target="_blank" rel="noopener noreferrer"
   className="text-blue-600 hover:text-blue-800 underline">
  Source text
</a>
```

Inside content_html strings, use `class=` not `className=`.
NEVER render linked text as unstyled or black.
NEVER omit `target="_blank" rel="noopener noreferrer"` on external links.

---

## Author Rules

- Every article needs a named author (author_name + author_slug)
- author_slug must point to an existing /authors/[slug] page
- If author has no external footprint, use "OzoneNews Editorial Team" (slug: ozonedailynews-editorial-team)
- Author schema: `{ "@type": "Person", "name": "...", "url": "...", "sameAs": [...] }`

## Timestamp Rules

- published_at: full ISO-8601 with timezone offset
  CORRECT: `2026-05-25T14:00:00-05:00`
  WRONG: `2026-05-25` (date-only is banned)
- publish_date: display string `"May 25, 2026"` (for UI only)

---

## Article Minimum Requirements

Every published article must have:
1. author_name + author_slug
2. published_at (ISO-8601 with timezone offset)
3. 300+ words in content_html
4. At least one <h2> in content_html
5. metadata.description: 130-155 chars
6. canonical URL in metadata.alternates.canonical
7. 4+ internal links
8. 1+ external source link
9. 4-8 tags (proper nouns only)
10. thumbnail_src pointing to a local `/thumbnails/` file (Google Top Stories requirement)

---

## GEO Article Structure (always follow this order)

```
1. <DirectAnswer answer="[2-4 sentences answering the core question]" />
2. <KeyTakeaways items={["Specific fact 1", "Specific fact 2", "Specific fact 3"]} />
3. Opening context paragraph
4. <h2>[Specific Sub-Question | Data Point]</h2>
   Body with named sources, specific figures
5. <CitationBlock question="..." answer="..." type="stat|definition|etc" source="..." sourceUrl="..." />
6. More body sections with H2s
7. <h2>Frequently Asked Questions</h2>
   <FAQAccordion items={[{ question: "...", answer: "..." }]} />
8. <SourcesInterlink sources={[...]} internalLinks={[...]} />
```

---

## Heading Rules

- Use `|` as separator, NEVER `:`
- Subheadings must be specific: "GTA 6 Release Date | Confirmed by Rockstar" not "Overview"
- Banned heading words: "Background", "Overview", "Introduction", "Conclusion"
- No `&` in H1/H2/H3 headings (only in metadata.title/openGraph.title)

---

## Category Values (only these are valid)

News, Tech, Finance, Entertainment, World, Politics, Science, Sports, Culture, Crypto, Gaming

## URL / Slug Rules

- Lowercase, hyphen-only, no stop words
- Static JSON filename slug: `category-article-name-2026`
- URL slug: `/category/article-name-2026`
- The JSON filename base and the `slug` field in the JSON must be consistent

---

## Publishing Workflow (Static JSON is source of truth)

```
1. Write static JSON at content/static/articles/YYYY/MM/{slug}.json
   OR content/static/jack_articles/YYYY/MM/{slug}.json (long-form / JackArticleDB)
2. Run: npm run wiki:sync -- --write    (registers in content_registry.json)
3. Mint thumbnail via local Satori      (see Satori section below)
4. Run: npm run wiki:sync -- --write    (updates imageUrl in registry)
5. Commit: git add -A && git commit -m "publish: [title]" && git push
```

NEVER generate per-article page.tsx stubs. All routing is dynamic via app/[...slug]/page.tsx.

---

## Satori Thumbnail System (LOCAL — localhost:3000)

Satori is the local branded thumbnail generation server.
It renders 1200x630 PNG images with title, subtitle, logo, gradient overlay, and Unsplash backgrounds.

**Always use localhost:3000. NEVER call satori-neon.vercel.app in minting code (returns 502).**

### Connection

```
Local URL : http://localhost:3000
Token     : satori_0c00f62203a65529f7dac2f75b74e684f3806484f23724a3
Network   : ozone
```

### The Golden Rule

Always download and save the PNG. Never store a live CDN URL in thumbnail_src.

| Wrong | Correct |
|---|---|
| `"thumbnail_src": "https://satori-neon.vercel.app/..."` | `"thumbnail_src": "/thumbnails/my-slug.jpg"` |

### Minting — Always Use Python (never multi-line curl with shell variables)

```python
import urllib.request, urllib.parse, json, os

SATORI_BASE = "http://localhost:3000"
TOKEN = "satori_0c00f62203a65529f7dac2f75b74e684f3806484f23724a3"
SLUG = "category-article-slug-2026"
TITLE = "Article Title Here"
SUBTITLE = "Short deck text"
LAYOUT = "breaking"     # breaking | cinematic | standard | minimal
ACCENT = "#00d4ff"      # optional — see accent color guide below
OUT_PATH = f"public/thumbnails/{SLUG}.jpg"

# Step 1: Register in Satori DB + get auto-selected Unsplash image
payload = json.dumps({
    "network": "ozone",
    "slug": SLUG,
    "title": TITLE,
    "subtitle": SUBTITLE,
    "layout": LAYOUT
}).encode()

req = urllib.request.Request(
    f"{SATORI_BASE}/api/v1/quick-generate",
    data=payload,
    headers={"Content-Type": "application/json", "Authorization": f"Bearer {TOKEN}"},
    method="POST"
)
with urllib.request.urlopen(req) as resp:
    data = json.loads(resp.read())

image_url = data.get("image_url", "")

# Step 2: Render PNG (pass accent to override brand default)
params = urllib.parse.urlencode({
    "network": "ozone",
    "title": TITLE,
    "subtitle": SUBTITLE,
    "image_url": image_url,
    "layout": LAYOUT,
    "accent": ACCENT    # remove line if not overriding
})

req2 = urllib.request.Request(f"{SATORI_BASE}/api/v1/generate?{params}")
with urllib.request.urlopen(req2) as resp:
    png_bytes = resp.read()

os.makedirs("public/thumbnails", exist_ok=True)
with open(OUT_PATH, "wb") as f:
    f.write(png_bytes)

print(f"Saved: {OUT_PATH} ({len(png_bytes)//1024} KB)")
```

### Layouts

| Layout | Use when |
|---|---|
| `breaking` | Breaking news, time-sensitive stories, announcements |
| `cinematic` | Science, space, deep-dive features — visually dramatic |
| `standard` | General news, everyday articles |
| `minimal` | Opinion, editorial, text-heavy content |

### Accent Color Guide

| Story type | Color | Hex |
|---|---|---|
| Space / quantum / physics | Electric cyan | `#00d4ff` |
| Tech / AI / software | Vivid blue | `#2563eb` |
| Finance / crypto | Emerald green | `#10b981` |
| Breaking / danger | Alert red | `#ef4444` |
| Science / biology | Teal | `#0d9488` |
| Gaming | Violet | `#7c3aed` |
| Politics / world | Rose | `#f43f5e` |
| No override | Omit `accent` param | — |

### Overlay Strength (optional)

Add `&overlay=85` to the generate URL (0-100, default 100).
Use 70-85 when background detail should show through; lower values hurt headline legibility.

### API Reference (localhost:3000)

```bash
# Health
curl http://localhost:3000/api/health

# Look up saved thumbnail URL
curl "http://localhost:3000/api/v1/og?network=ozone&slug=my-article-slug"

# Preview in browser
http://localhost:3000/api/v1/generate?network=ozone&title=My+Title&layout=breaking
```

### Live Editor (browser-based, full visual control)

Open `http://localhost:3000` to use the Canva-style dashboard. Features:
- URL import bar — paste article URL, Satori auto-fills title, subtitle, background
- Prompt mode — type a prompt, Grok AI generates everything
- Drag-and-drop original media upload (JPEG/PNG/WebP, max 10MB)
- Custom accent color picker + overlay strength slider
- Game Customization panel (Grok-powered): title, franchise, developer, publisher, genre, platforms, overlay badge, review score slider
- Platform badges: PC, PS5, Xbox, Switch, Mobile, VR
- Overlay badges: REVIEW, GAMEPLAY, FIRST LOOK, EXCLUSIVE, BREAKING, OPINION, GUIDE
- Review score 0-100 with color badge (Gold 80-100, Green 60-79, Yellow 40-59, Red 0-39)
- Source badges: Original Upload (green), Unsplash (blue), AI Generated (purple), External URL (orange)

Click **Save to Satori** after editing to lock the design in the DB.

### After Every Mint — Run This

```bash
npm run wiki:sync -- --write
```

Updates `imageUrl` in `content_registry.json` so homepage cards, hub pages, and sitemaps show the thumbnail.

### Troubleshooting

| Problem | Fix |
|---|---|
| `Connection refused` on localhost:3000 | Satori is not running — start it in the Satori repo with `npm run dev` |
| `HTTP 502` from remote Satori | Use localhost:3000 — remote is unreliable. Never use satori-neon.vercel.app |
| Thumbnail not showing on homepage | Run `npm run wiki:sync -- --write` then hard-refresh (`Cmd+Shift+R`) |
| Article header shows flat color | `thumbnail_src` is missing or wrong — re-mint with correct slug |
| Wrong photo for topic | Run `quick-generate` first to get the Unsplash image_url, then pass it to `generate` |

---

## Trust Pages (must exist and be linked in footer)

- /about
- /editorial-standards
- /corrections
- /contact

All four must be visible blue-underlined links in the global footer "Newsroom Policies" row.

---

## Never Do

- NEVER add canonical to app/layout.tsx or any shared layout
- NEVER put robots.txt or sitemap.xml in /public
- NEVER use lib/seo.ts (deleted — use @/lib/site-config)
- NEVER use Supabase for new article writes (static JSON is source of truth)
- NEVER use any *DB component without a matching static JSON file
- NEVER publish without a content_registry.json entry
- NEVER generate per-article page.tsx stubs (routing is via app/[...slug]/page.tsx)
- NEVER store a live CDN URL in thumbnail_src — always save PNG to public/thumbnails/ first
- NEVER use multi-line curl with shell variables to call Satori — use Python urllib instead
- NEVER call satori-neon.vercel.app for minting (returns 502) — always use localhost:3000
