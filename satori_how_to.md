# Satori Thumbnail System | How-To Guide

**Updated:** June 20, 2026  
**Satori local port:** `3001`  
**Network:** `ozone`  
**Token:** `satori_0c00f62203a65529f7dac2f75b74e684f3806484f23724a3`

---

## What Satori Does

Satori is a local thumbnail generation server running at `http://localhost:3001`. For every article we publish it:

1. Finds a relevant Unsplash background photo
2. Renders a branded 1200×630 PNG (title, subtitle, logo, gradient overlay)
3. Returns the raw PNG bytes via `/api/v1/generate`

That PNG gets saved to `public/thumbnails/[slug].jpg` and wired into the article's `page.tsx` as a **static local file** — not a live CDN URL.

---

## The Golden Rule

> **Always download and save the PNG. Never link to the Satori CDN URL directly.**

| ❌ Wrong | ✅ Correct |
|---|---|
| `OG_IMAGE = 'https://satori-neon.vercel.app/api/v1/generate?...'` | `OG_IMAGE = '/thumbnails/my-article-slug.jpg'` |
| Live render on every request | Static file served from `/public` |
| Breaks if Satori is down | Always works |
| Slow for social crawlers | Instant |

---

## Prerequisites

Satori must be running locally before you mint anything:

```bash
# In a separate terminal — keep it running
cd ~/path/to/satori
npm run dev
# → listening on http://localhost:3001
```

Verify it's healthy:
```bash
curl http://localhost:3001/api/health
# → {"status":"healthy",...}
```

---

## The Correct Minting Flow

Every new article needs **three things** done in order:

```
1. Write the article  →  page.tsx with title, subtitle, slug
2. Mint thumbnail     →  npx tsx scripts/mint-thumbnails.ts --file <path>
3. Sync registry      →  npx tsx scripts/sync-registry.ts --write
```

That's it. The mint script handles everything in step 2 automatically.

---

## mint-thumbnails.ts — The Universal Minter

Located at `scripts/mint-thumbnails.ts`. This is the **only** script you should use to generate thumbnails.

### Mint one specific article

```bash
npx tsx scripts/mint-thumbnails.ts \
  --file app/world-cup/2026/germany-7-curacao-1-group-e/page.tsx
```

### Mint all articles in a section

```bash
npx tsx scripts/mint-thumbnails.ts --dir app/world-cup/2026
npx tsx scripts/mint-thumbnails.ts --dir app/cars
npx tsx scripts/mint-thumbnails.ts --dir app/premier-league
```

### Mint everything that's missing a thumbnail

```bash
npx tsx scripts/mint-thumbnails.ts
```
Skips any article that already has `OG_IMAGE = '/thumbnails/...'`.

### Force re-mint (replace existing thumbnails)

```bash
npx tsx scripts/mint-thumbnails.ts --dir app/world-cup/2026 --force
```

### Preview without writing any files

```bash
npx tsx scripts/mint-thumbnails.ts --dir app/cars --dry-run
```

### Limit to N articles (useful when testing)

```bash
npx tsx scripts/mint-thumbnails.ts --limit 3
```

---

## What the Script Does Per Article

For each `page.tsx` it finds:

| Step | Action |
|---|---|
| 1 | Reads `title`, `subtitle`, `category` from the file |
| 2 | Builds a context-aware Unsplash query (e.g. `"Germany soccer football stadium World Cup match"`) |
| 3 | Fetches the best landscape photo from Unsplash |
| 4 | Calls `GET localhost:3001/api/v1/generate?network=ozone&title=...&image_url=...&layout=breaking` |
| 5 | Downloads the PNG bytes (typically 600KB–1.3MB) |
| 6 | Saves to `public/thumbnails/[slug].jpg` |
| 7 | Registers the article in Satori DB via `POST /api/v1/quick-generate` |
| 8 | Patches `page.tsx` — sets `OG_IMAGE = '/thumbnails/[slug].jpg'` |
| 9 | Adds `thumbnail={{ src: OG_IMAGE, alt: '...' }}` prop to `<NewsArticle>` |

---

## What Changes in page.tsx

The script makes exactly two changes to each article file:

### 1. OG_IMAGE becomes a local path

```tsx
// Before (wrong — live CDN URL)
const OG_IMAGE = 'https://satori-neon.vercel.app/api/v1/generate?network=ozone&title=...';

// After (correct — static local file)
const OG_IMAGE = '/thumbnails/world-cup-2026-germany-7-curacao-1-group-e.jpg';
```

### 2. thumbnail prop is wired into `<NewsArticle>`

```tsx
// Added after url={URL_PATH}
thumbnail={{ src: OG_IMAGE, alt: 'Germany 7–1 Curaçao: A Statement Scoreline...' }}
```

The `thumbnail` prop activates the **genie float animation** in the article header — the floating, glowing image that appears on the right side of the gradient header. Without it, the header is just a flat colour gradient.

---

## After Minting — Always Sync the Registry

`registry-data.json` is what the homepage, hub pages, and sitemaps read. It must be rebuilt after every mint:

```bash
npx tsx scripts/sync-registry.ts --write
```

Until you run this, the new thumbnail won't show on:
- Homepage article cards
- Hub page article grids
- Related article sidebars
- Google News / sitemap image tags

### What sync-registry does with images

It reads the `OG_IMAGE` constant from each `page.tsx` and writes it as `imageUrl` in `registry-data.json`. If the path starts with `/thumbnails/`, it is stored **as-is** (relative). This means:

- `localhost:3000/thumbnails/...` → works locally ✅
- `objectivewire.com/thumbnails/...` → works in production ✅

---

## Slug Naming Rules

The thumbnail filename **must match** the article's route slug. The script derives this automatically from the file path:

| File path | Slug | Thumbnail saved as |
|---|---|---|
| `app/world-cup/2026/germany-7-curacao-1-group-e/page.tsx` | `world-cup-2026-germany-7-curacao-1-group-e` | `public/thumbnails/world-cup-2026-germany-7-curacao-1-group-e.jpg` |
| `app/cars/ferrari/ferrari-f80-hypercar-price-specs-2026/page.tsx` | `cars-ferrari-ferrari-f80-hypercar-price-specs-2026` | `public/thumbnails/cars-ferrari-ferrari-f80-hypercar-price-specs-2026.jpg` |

---

## The Full New Article Workflow

```bash
# 1. Write the article
#    Create app/[section]/[slug]/page.tsx
#    Include: title, subtitle, category, metadata block

# 2. Mint the thumbnail (Satori must be running on :3001)
npx tsx scripts/mint-thumbnails.ts --file app/[section]/[slug]/page.tsx

# 3. Sync the registry
npx tsx scripts/sync-registry.ts --write

# 4. Verify locally
#    Open http://localhost:3000/[section]/[slug]
#    — Header should show the animated thumbnail (genie float)
#    — Homepage card should show the thumbnail image

# 5. Commit
git add app/[section]/[slug]/page.tsx public/thumbnails/[slug].jpg lib/registry-data.json
git commit -m "feat: [slug] + thumbnail"
```

---

## Satori API Reference (Local)

Base URL: `http://localhost:3001`

### Health check
```bash
curl http://localhost:3001/api/health
```

### Generate PNG directly (preview in browser)
```
http://localhost:3001/api/v1/generate?network=ozone&title=My+Title&layout=breaking
```

Parameters:

| Param | Required | Notes |
|---|---|---|
| `network` | ✅ | Always `ozone` for this project |
| `title` | ✅ | URL-encoded headline |
| `subtitle` | — | URL-encoded deck text |
| `image_url` | — | URL-encoded Unsplash photo URL |
| `layout` | — | `breaking` (default for news), `standard`, `cinematic`, `minimal` |

### Register in Satori DB (quick-generate)
```bash
curl -X POST http://localhost:3001/api/v1/quick-generate \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer satori_0c00f62203a65529f7dac2f75b74e684f3806484f23724a3" \
  -d '{
    "network": "ozone",
    "slug": "my-article-slug",
    "title": "My Article Title",
    "subtitle": "Short deck text",
    "layout": "breaking"
  }'
```

### Look up a saved thumbnail URL
```bash
curl "http://localhost:3001/api/v1/og?network=ozone&slug=my-article-slug"
```

---

## Troubleshooting

### "Cannot reach Satori at localhost:3001"
Satori is not running. Start it first:
```bash
cd ~/path/to/satori && npm run dev
```

### Thumbnail saves but doesn't show on homepage cards
The registry is stale. Run:
```bash
npx tsx scripts/sync-registry.ts --write
```
Then hard-refresh the browser (`Cmd+Shift+R`).

### Article header shows flat colour, no image
The `thumbnail` prop is missing from `<NewsArticle>`. Re-run the minter with `--force`:
```bash
npx tsx scripts/mint-thumbnails.ts --file app/[path]/page.tsx --force
```

### OG_IMAGE still points to `satori-neon.vercel.app`
The article was written before the new workflow. Fix with:
```bash
npx tsx scripts/mint-thumbnails.ts --file app/[path]/page.tsx --force
```

### Wrong domain showing as `objectwire.org`
Run the global domain fix (only needed if files pre-date June 20, 2026):
```bash
grep -r "objectwire\.org" --include="*.ts" --include="*.tsx" --include="*.json" -l \
  | grep -v "node_modules\|.next" \
  | xargs sed -i '' 's/objectwire\.org/objectivewire\.com/g'
npx tsx scripts/sync-registry.ts --write
```
