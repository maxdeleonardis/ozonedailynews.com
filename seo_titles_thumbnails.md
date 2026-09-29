# OzoneNews SEO Guide — Titles, Standards & Thumbnails

**Updated:** September 24, 2026
**Applies to:** Every article published on OzoneNews.

---

## Part 1 — Title Standards (OStandard / Alfanso)

### metadata.title Rules

- Max **60 characters** (hard limit — Google truncates beyond this)
- Format: `Primary Keyword | Specific Detail`
- No brand suffix — never add `| OzoneNews` at the end
- No em dashes (`—`), no en dashes (`–`)
- `&` is ALLOWED in metadata.title **only** — never in H1/H2/H3
- Front-load the primary keyword: crawlers and readers scan the first words first
- Never truncate mid-thought — if the full title is long, compress to a coherent ≤60-char string

### H1 / Article `title` field Rules

- **Sentence case:** capitalize only the first word and proper nouns
- Max **70 characters** for scannability
- Front-load the subject/keyword — do NOT bury it behind a creative metaphor
- NO "Creative Phrase | Detail" two-part format — the title must state the point directly
- NO colon-joined two-part headlines (e.g. "Toxic Relics of the Cold War: ...")
- The H1 (`title`) and metadata.title must be contextually aligned — for Google News they should be as close to identical as length allows
- Subheads (H2/H3) stay specific: `Specific Sub-Question | Data Point`

### Examples

| Wrong | Right |
|---|---|
| `Healing the Shield \| Antarctic Ozone Hole Reaches One of Its Smallest States in Decades` | `Antarctic ozone hole reaches smallest size in decades` |
| `Out of Europe \| Landmark Genetic Study Rewrites the Evolutionary Origin of Bats` | `Bats originated in Europe 65 million years ago, study finds` |
| `Into the Cosmic Void \| SpaceX Falcon Heavy Launches NASA's $4.3B Roman Space Telescope` | `Falcon Heavy launches NASA's Roman Space Telescope` |
| `A Cosmic Beacon: Astronomers Detect Low-Frequency Radio Signals from Exoplanet Beta Pictoris b` | `Astronomers detect radio signals from exoplanet Beta Pictoris b` |
| `Toxic Relics of the Cold War: Deep-Sea Expeditions Uncover Leaking Radioactive Waste` | `Deep-sea expeditions uncover leaking radioactive waste across the ocean floor` |

### Title Authority

The Alfanso / Alfasa (OStandard) title and formatting rules **always take precedence** over any "SEO Meta Blueprint", "SEO Title Option 1/2", or article body headline pasted into a prompt. When a blueprint proposes a violating title (colon-joined, over 70 chars, metaphor-first), rewrite it to comply and note the change.

### Default Author

If not specified, attribute to **Max DeLeonardis** (Founder, Publisher & Editor-in-Chief). Explicit author requests always win over the default.

---

## Part 2 — Metadata & Description

### metadata.description Rules

- **130–155 characters** (hard limits)
- Primary keyword must appear in the **first 60 characters**
- No generic phrases: `learn more`, `find out`, `comprehensive guide`, `this article explores`
- No AI boilerplate: `in conclusion`, `it is important to note`, `in today's fast-paced world`, `delve into`

### Banned AI Boilerplate (build fails on any occurrence)

These trigger Google's HCU classifier. Never use:
`in conclusion` · `it is important to note` · `it is important to remember` · `furthermore, it is crucial` · `in today's fast-paced world` · `in the ever-evolving landscape` · `it is worth noting that` · `moreover, it should be noted` · `navigating the complex` · `delve into` · `in summary`

### Link Styling (Non-Negotiable)

Every link must be blue and underlined:

```tsx
// Internal
<Link href="/path" className="text-blue-600 hover:text-blue-800 underline">text</Link>

// External
<a href="https://source.com" target="_blank" rel="noopener noreferrer"
   className="text-blue-600 hover:text-blue-800 underline">text</a>
```

In `content_html` strings use `class=` not `className=`. NEVER render links as unstyled or black. NEVER omit `target="_blank" rel="noopener noreferrer"` on external links.

---

## Part 3 — GEO Article Structure (Every Article)

Always use this order:

```
1. <DirectAnswer answer="[2-4 sentences answering the core question]" />
2. <KeyTakeaways items={["Fact 1", "Fact 2", "Fact 3", "Fact 4", "Fact 5"]} />
3. Opening context paragraph
4. <h2>[Specific Sub-Question | Data Point]</h2>
   Body with named sources, specific figures
5. <CitationBlock question="..." answer="..." type="stat|definition|verdict" source="..." sourceUrl="..." />
6. More body sections with H2s
7. <h2>Frequently Asked Questions</h2>
   <FAQAccordion items={[{ question: "...", answer: "..." }]} />
8. <SourcesInterlink sources={[...]} internalLinks={[...]} />
```

### Minimum Requirements (every article)

1. `author_name` + `author_slug`
2. `published_at` (ISO-8601 with timezone — e.g. `2026-09-24T09:00:00-05:00`)
3. 300+ words in `content_html`
4. At least one `<h2>` in `content_html`
5. `metadata.description`: 130–155 chars
6. `canonical` URL in `metadata.alternates.canonical`
7. 4+ internal links (to other OzoneNews articles)
8. 1+ external source link
9. 4–8 tags (proper nouns only)
10. `thumbnail_src` pointing to a local `/thumbnails/` file

### `publish_at` Scheduling

- `publish_at`: the scheduling gate — when set to a future timestamp, the article is hidden from all surfaces until that instant. No cron needed (checked at render time).
- `published_at`: canonical ISO timestamp (display date)
- `publish_date`: human display string ("September 24, 2026")
- `modified_date_iso`: last correction/update timestamp (maps to registry `modifiedDate`)

---

## Part 4 — Thumbnail Minting with Satori

### The Golden Rule

**Always download and save the PNG to `public/thumbnails/`. Never store a live Satori URL in `thumbnail_src`.**

| Wrong | Correct |
|---|---|
| `"thumbnail_src": "https://www.fshot.one/api/v1/generate?..."` | `"thumbnail_src": "/thumbnails/my-slug.jpg"` |
| Live render on every request — breaks if Satori is down | Static file served from `/public` — always works |

### The Two-Step Minting Flow (Python urllib)

Copy this template for every new article. Fill in the variables at the top.

```python
import urllib.request, urllib.parse, json, os

SATORI_BASE = "http://localhost:4444"   # production: https://www.fshot.one
TOKEN       = "satori_0c00f62203a65529f7dac2f75b74e684f3806484f23724a3"
SLUG        = "category-article-slug-2026"
TITLE       = "Article title sentence case"      # H1, max 70 chars
SUBTITLE    = "One to two line deck summarizing the finding"
LAYOUT      = "cinematic"    # cinematic | breaking
ACCENT      = "#0d9488"      # hex — see accent guide below
OVERLAY     = "75"           # 0–100 — see overlay guide below
OUT_PATH    = f"public/thumbnails/{SLUG}.jpg"

# Step 1: Register + get contextual Unsplash photo
payload = json.dumps({"network":"ozone","slug":SLUG,"title":TITLE,"subtitle":SUBTITLE,"layout":LAYOUT}).encode()
req = urllib.request.Request(f"{SATORI_BASE}/api/v1/quick-generate", data=payload,
    headers={"Content-Type":"application/json","Authorization":f"Bearer {TOKEN}"}, method="POST")
with urllib.request.urlopen(req, timeout=30) as resp:
    image_url = json.loads(resp.read()).get("image_url", "")
print(f"image_url: {image_url[:60]}...")

# Step 2: Render PNG
params = urllib.parse.urlencode({"network":"ozone","title":TITLE,"subtitle":SUBTITLE,
    "image_url":image_url,"layout":LAYOUT,"accent":ACCENT,"overlay":OVERLAY})
req2 = urllib.request.Request(f"{SATORI_BASE}/api/v1/generate?{params}")
with urllib.request.urlopen(req2, timeout=60) as resp:
    png_bytes = resp.read()

os.makedirs("public/thumbnails", exist_ok=True)
with open(OUT_PATH, "wb") as f:
    f.write(png_bytes)
print(f"Saved: {OUT_PATH} ({len(png_bytes)//1024} KB)")
```

**After minting, always run:**
```bash
npm run wiki:sync -- --write
```

### Accent Color Guide

| Story type | Hex |
|---|---|
| Space, quantum, physics | `#00d4ff` (cyan) |
| Spacecraft, rockets | `#2563eb` (blue) |
| Science, biology, archaeology, atmosphere | `#0d9488` (teal) |
| Oceans, Earth, climate | `#0d9488` (teal) |
| Geology, paleontology | `#7c3aed` (violet) |
| Archaeology, human origins | `#f43f5e` (rose) |
| Breaking news, danger, explosions | `#ef4444` (red) |
| No override needed | Omit `accent` param |

### Overlay Guide

| Value | Effect |
|---|---|
| `85` | Slight darkening — breaking news |
| `80` | Standard overlay — most articles |
| `75` | Cinematic — photo detail shows through (science, space, dramatic landscapes) |
| `70` | Photo-forward — strong backgrounds that add context |

### Layout Selection

| Layout | Use when |
|---|---|
| `cinematic` | Science, space, archaeology, biology, deep-dive features |
| `breaking` | Breaking news, time-sensitive stories, launches, events |

---

## Part 5 — The Full Article Workflow

```
1. Write static JSON  → content/static/articles/YYYY/MM/{slug}.json
2. Mint thumbnail     → Python urllib two-step (template above)
3. Sync registry      → npm run wiki:sync -- --write
4. Verify locally     → http://localhost:3000/[slug-path]
5. Commit
   git add content/static/articles/... public/thumbnails/... 
   git commit -m "publish: article slug"
   git push
```

---

## Part 6 — Common SEO Traps (Don't Do These)

- **Never** put `robots.txt` or `sitemap.xml` in `/public` — they are generated by `app/robots.ts` and `app/sitemap.ts`.
- **Never** add `canonical` to `app/layout.tsx` or any shared layout — each page sets its own.
- **Never** generate per-article `page.tsx` stubs — routing is dynamic via `app/[...slug]/page.tsx`.
- **Never** use `lib/seo.ts` — it does not exist. Use `@/lib/site-config`.
- **Never** store a live Satori URL in `thumbnail_src` — always save the PNG first.
- **Never** use em dashes (`—`) or en dashes (`–`) in any content field.
- **Never** skip `npm run wiki:sync -- --write` after minting or title changes.
- **Never** use `mint-thumbnails.ts` for individual articles — it uses bare defaults and overlay=100.
- **Never** use multi-line curl with shell variables for thumbnail minting — use Python urllib.
- **Never** call `satori-neon.vercel.app` — it is decommissioned. Use `www.fshot.one` (prod) or `localhost:4444` (dev).