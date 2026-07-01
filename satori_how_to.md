# Satori Thumbnail System | How-To Guide

**Updated:** June 30, 2026  
**Satori local port:** `3001`  
**Network:** `ozone`  
**Token:** `satori_0c00f62203a65529f7dac2f75b74e684f3806484f23724a3`

---

## What Satori Does

Satori is a local thumbnail generation server running at `http://localhost:3000`. For every article we publish it:

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

## Custom Thumbnails — Live Editor & Grok AI

The **Live Editor** is a browser-based Canva-style dashboard built directly into Satori. It lets you craft a thumbnail visually — no command line needed — and gives you access to every customization option including Grok-powered AI prompts.

Open it at:
```
http://localhost:3001
```
_(Satori must be running. Same `npm run dev` as above.)_

---

### Live Editor: Quick Start

1. Open `http://localhost:3001` in your browser
2. Either:
   - **Paste an article URL** into the URL import bar and click **Import** — Satori auto-fills title, subtitle, and finds a background photo
   - **Type a prompt** (flip toggle to ✨ Prompt mode) — e.g. `"Breaking: Spain wins Euro 2026"` — and Satori uses Grok to generate everything
3. Tweak any field in the sidebar
4. Click **Save to Satori** to register it in the DB

> The saved URL (`/api/v1/og?network=ozone&slug=...`) is what your minting script reads — the visual is locked in at that point.

---

### Game Articles — Grok-Powered Game Customization

For game coverage (reviews, previews, guides), the **Game Customization** panel unlocks a full set of game-specific options powered by the Grok AI.

Scroll to the **Game Customization** section in the sidebar and expand it.

#### Step 1 — Fill in the game details

| Field | What to enter | Example |
|---|---|---|
| Game Title | The exact title | `Elden Ring: Nightreign` |
| Franchise | Parent series if applicable | `Elden Ring` |
| Developer | Studio name | `FromSoftware` |
| Publisher | Publisher name | `Bandai Namco` |
| Genre | Pick from dropdown | `Soulslike` |

#### Step 2 — Select platforms

Toggle any platforms that apply. Each badge appears on the thumbnail corner:

| Badge | Colour |
|---|---|
| 🖥️ PC | Slate |
| 🎮 PS5 | Blue |
| 🎯 Xbox | Green |
| 🕹️ Switch | Red |
| 📱 Mobile | Grey |
| 🥽 VR | Purple |

#### Step 3 — Choose an overlay badge

Pick the label that stamps across your thumbnail banner:

| Badge | Use when… |
|---|---|
| ⭐ REVIEW | You're scoring the game |
| 🎮 GAMEPLAY | Hands-on / Let's Play |
| 👁️ FIRST LOOK | Early access / preview |
| 🔥 EXCLUSIVE | You have an exclusive angle |
| ⚡ BREAKING | News flash / announcement |
| 💭 OPINION | Op-ed / editorial |
| 📖 GUIDE | Walkthrough / tips |
| _(none)_ | Clean thumbnail, no badge |

#### Step 4 — Set a review score (optional)

Drag the **Review Score** slider (0–100). A colour-coded score badge appears:
- **80–100** → Gold (excellent)
- **60–79** → Green (good)
- **40–59** → Yellow (mixed)
- **0–39** → Red (poor)

Leave the slider off if this is not a scored review.

#### Step 5 — Generate a visual prompt with Grok

Click **🤖 Generate Game Visual with Grok**. The system sends your game details to `grok-3-mini` and gets back:

- A cinematic art-direction prompt for the background image
- Suggested Unsplash search keywords
- A colour palette suggestion
- An art style descriptor (e.g. `"Neon cyberpunk city streets with rain reflections"`)

The generated prompt auto-fills the **Enhance Image** text box. You can edit it before clicking **Mint Image**.

> **Grok API is live** — no extra setup needed. The `GROK_API_KEY` is already configured in the environment.

#### Full Game Review Example

```
Game Title:     Elden Ring: Nightreign
Franchise:      Elden Ring
Developer:      FromSoftware
Genre:          Soulslike
Platforms:      PS5, PC
Overlay Badge:  ⭐ REVIEW
Review Score:   88
```

→ Click **Generate Game Visual with Grok** → Edit prompt if needed → Click **Mint Image** → **Save to Satori**

---

### Custom Accent Colour

Every brand has a default accent colour but you can override it per-thumbnail in the **Advanced** section of the sidebar.

1. Scroll to **Advanced** at the bottom of the sidebar
2. Click the **colour swatch** (or type a hex code like `#e53e3e`) in the **Accent Color** field
3. Choose from the six preset swatches or pick any colour
4. The live preview updates in real time

The accent colour affects the gradient overlay band and the logo text glow. Use this when:
- Covering a game with a strong brand colour (e.g. PlayStation blue `#003087`)
- Matching a sponsor or event's palette
- Creating a series of thumbnails with a consistent look

> Accent colour is saved with the thumbnail via `custom_accent` in the Supabase DB. The `/api/v1/generate?accent=%23e53e3e` parameter accepts any 6-digit hex.

---

### Overlay Strength

Control how dark the image gradient overlay appears — useful when the background photo has important detail you don't want to obscure.

1. In the **Advanced** section, drag the **Overlay Strength** slider
2. `100` = full overlay (default — best readability)
3. `50` = semi-transparent overlay (photo detail shows through)
4. `0` = no overlay (photo only — use with caution, text may be hard to read)

> The overlay is the dark gradient that sits between the background photo and the title text. Reducing it makes photos more visible but can hurt headline legibility on bright images. A value of `70–85` works well for most game screenshots.

---

### Uploading Original Media (Screenshots & Photos)

For first-hand game screenshots, press photos, or event photography — upload the original file directly into Satori instead of relying on Unsplash.

1. Scroll to **Original Media** in the sidebar
2. Either **drag-and-drop** a file onto the upload zone, or click to **browse**
3. Supported formats: JPEG, PNG, WebP, GIF (max 10 MB)
4. Satori uploads the file to secure storage and sets it as the background image

Once uploaded, a coloured **source badge** appears below the image URL:

| Badge | Meaning |
|---|---|
| 🟢 Original Upload | Your first-hand media — highest E-E-A-T value |
| 🔵 Unsplash | Stock photo pulled by the AI |
| 🟣 AI Generated | FLUX/Replicate-generated image |
| 🟠 External URL | Image linked from another site |

> **E-E-A-T tip:** Google rewards original, first-hand images. An "Original Upload" badge means the image is credited as `"Original — First-hand Media"` in the DB. Aim for at least 20% original media across your articles.

#### Accepted uploads

- Press-kit screenshots provided by the developer/publisher ✅
- Your own gameplay captures ✅
- Event photography you took yourself ✅
- Images scraped from another outlet ❌ (use Unsplash instead)

---

### Putting It All Together — Custom Game Thumbnail Workflow

```bash
# 1. Start Satori
cd ~/path/to/satori && npm run dev

# 2. Open the editor
#    http://localhost:3001

# 3. Paste the article URL or type a prompt → Import

# 4. In Game Customization:
#    - Fill in game title, genre, platforms
#    - Pick overlay badge (REVIEW / GAMEPLAY / etc.)
#    - Set review score if applicable
#    - Click "Generate Game Visual with Grok"

# 5. In Original Media:
#    - Drag in your screenshot or press-kit image (optional but recommended)

# 6. In Advanced:
#    - Adjust accent colour to match the game's brand
#    - Tweak overlay strength if the image is dark/bright

# 7. Click "Save to Satori"
#    → Registers in DB with all custom settings

# 8. Back in the article repo — mint with the saved settings
npx tsx scripts/mint-thumbnails.ts --file app/[section]/[slug]/page.tsx
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
