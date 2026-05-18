# Satori Premium Thumbnail Pipeline | OzoneNews

**Created:** May 16, 2026
**Scope:** Forward-only. Every NEW article published from terminal/code gets a premium, unique, branded 1200×675 thumbnail automatically. No backfill of legacy articles.
**Assets:** OzoneNews logo (export from Canva as SVG + PNG) + Unsplash API (`Xf48MkOY-E_ughjz6FJ1d_heBKDy0YcF_qpIDoVi1FQ`) + Canva for brand kit design source.
**Status:** Planning → Implementation

---

## The Goal

Every new article we ship has a thumbnail that:

1. **Looks designed** — real photography background, editorial typography, actual brand logo. Not auto-generated.
2. **Loads instantly** via Edge + CDN.
3. **Requires zero manual design work** in the publish flow.
4. **Outperforms** every generic Unsplash stock card we've shipped so far.
5. **Looks like a magazine cover**, not a developer template.

Legacy articles are out of scope. We do not touch the 466 entries without `image_url`. The win is forward inventory only.

---

## How Unsplash + Canva + Logo Change Everything

### Without these assets (old plan)
Solid `#0a0a0a` background + white text. Clean but flat. Identifiable as auto-generated to any trained eye.

### With these assets (upgraded plan)
1. **Unsplash** — every article gets a contextually relevant real photograph as the full-bleed background, auto-queried by article title + category at publish time. The image fills 100% of the 1200×675 canvas.
2. **Dark gradient overlay** — a `linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.15) 100%)` overlay sits over the photo. Text anchored at the bottom reads over the darkest zone. Photography bleeds through at the top.
3. **Real OzoneNews logo** — exported from Canva as a white-on-transparent SVG, encoded as base64 and embedded directly into Satori. The actual brand mark, not a text substitute.
4. **Canva as design source** — design the exact OG card layout, typography, spacing, and color system inside Canva first. Get it pixel-perfect visually. Then translate those exact measurements into Satori JSX. Canva is the mockup tool, Satori is the renderer. Canva's API is **not** used programmatically — it is gated behind Enterprise and autofill is still in preview. Use Canva for what it does best: visual design decisions.

### Result
Photo thumbnail that looks like The Atlantic or Wired social share cards. Real imagery, real logo, real brand. Indistinguishable from a human-designed card.

---

## The Three-Layer System

Every thumbnail is built from three layers stacked in Satori:

```
Layer 3 (top):    Text + logo + badge        ← Fraunces + Inter + base64 logo SVG
Layer 2 (mid):    Dark gradient overlay      ← linear-gradient, bottom-heavy
Layer 1 (base):   Full-bleed Unsplash photo  ← fetched at request time, 1200×675
```

This is identical to how The Atlantic, Wired, NYT, and every premium publication builds social share cards.

---

## The Premium Satori Stack

### Core Library
```bash
npm install satori @vercel/og
# next/og is built-in to Next.js 15 — preferred wrapper
```

### Canva Workflow (Design Source, Not API)

> Canva's Connect API requires Enterprise + autofill is preview-gated. We do NOT call Canva programmatically. Canva is used for design decisions only.

**What to do in Canva before coding:**
1. Create a new design at **1200 × 675px** (custom size)
2. Set background to a placeholder dark photo
3. Apply the gradient overlay (bottom 60% darkens to `rgba(0,0,0,0.90)`)
4. Place the OzoneNews logo (white version) — decide exact position and size
5. Place a mock category badge (◆ GAMING in the category accent color)
6. Place a mock headline in your chosen font — decide size, line height, margin
7. Place mock subtitle, byline, date
8. Get it exactly right visually — screenshot or export as reference PNG
9. **Export the OzoneNews logo** as `SVG` (white on transparent) — this goes into `public/og-assets/`
10. Those exact pixel measurements become the Satori JSX

This is the highest-leverage 30 minutes: nail the design in Canva so the code matches it exactly.

### Typography — The Single Biggest Quality Lever

Serif + sans pairing. Magazine industry standard.

| Font | Weight | Use |
|---|---|---|
| **Fraunces** (serif) | 900 Black | Massive headline (72–88px) |
| **Fraunces** (serif) | 600 Semibold | Subtitle / dek (28–32px) |
| **Inter** (sans) | 700 Bold | Category badge (16px tracked) |
| **Inter** (sans) | 500 Medium | Byline, date, domain (15px) |

Fraunces is free (SIL OFL) — NYT Magazine / The Atlantic feel. Inter is the cleanest free sans.

```
public/fonts/
  Fraunces-Black.ttf      ← headline
  Fraunces-Semibold.ttf   ← subtitle
  Inter-Bold.ttf          ← badges
  Inter-Medium.ttf        ← metadata

public/og-assets/
  OzoneNews-logo-white.svg   ← exported from Canva, white on transparent
  OzoneNews-logo-black.svg   ← for light backgrounds (future use)
  grain.svg                   ← optional noise texture overlay at 2% opacity
```

### Visual Layout

```
┌─────────────────────────────────────────────────────────┐
│  [UNSPLASH PHOTO — full bleed, contextual]               │  Layer 1
│                                                          │
│  ░░░░░░░░░░░░░░░░░░░░░ gradient overlay ░░░░░░░░░░░░░░  │  Layer 2
│                                                          │
│  [OzoneNews logo SVG]               ◆ GAMING           │  Layer 3 — top
│                                                          │
│                                                          │
│  Subnautica 2 Early Access                               │  Fraunces Black 84px
│  Hits 2 Million Sales in 12 Hours                        │  white, left-aligned
│                                                          │
│  UE5 underwater survival sequel shatters                 │  Fraunces Semi 30px
│  Steam early-access record                               │  gray-300
│                                                          │
│  Max DeLeonardis · May 15, 2026 · OzoneNews.org         │  Inter Medium 15px
└─────────────────────────────────────────────────────────┘
```

Key principles:
- **Full-bleed photo background** — Unsplash auto-queried by title + category
- **Gradient overlay** — `linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.1) 100%)`. Photography is visible at top, text zone is readable at bottom.
- **Logo top-left** — actual exported SVG from Canva, not a text substitute
- **Category badge top-right** — geometric mark + category name, color-coded
- **Headline bottom-left** — Fraunces Black, 84px, two-line max, smart truncation
- **Text sits above the darkest gradient zone** — always readable regardless of photo

### Category Accent Colors (for badge mark)

### Category Accent Colors (for badge mark)

| Category | Accent |
|---|---|
| Gaming | `#3b82f6` blue |
| Tech | `#10b981` emerald |
| Crypto | `#f97316` orange |
| Finance | `#eab308` gold |
| Entertainment | `#a855f7` purple |
| Politics | `#ef4444` red |
| Sports | `#22c55e` green |
| Science | `#6366f1` indigo |
| Investigations | `#dc2626` crimson |
| Influencer | `#ec4899` pink |

Restraint is what makes it look premium. Color only in the badge mark. Everything else is white on dark photo.

### Unsplash Auto-Query System

At request time, the Edge function queries Unsplash for a contextually relevant photo:

```ts
// lib/og/unsplash.ts
const UNSPLASH_KEY = process.env.UNSPLASH_ACCESS_KEY; // Xf48MkOY-...

export async function fetchOGBackground(
  title: string,
  category: string
): Promise<string> {
  // Build a query from the article title (first 4-5 content words) + category
  const query = buildQuery(title, category);

  const res = await fetch(
    `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape&client_id=${UNSPLASH_KEY}`,
    { next: { revalidate: 86400 } }  // cache 24hrs per unique query
  );
  const data = await res.json();

  // Return the raw URL with 1200×675 fit params, or fallback dark image
  return data?.results?.[0]?.urls?.raw
    ? `${data.results[0].urls.raw}&w=1200&h=675&fit=crop&auto=format`
    : FALLBACK_DARK_IMAGE;
}

function buildQuery(title: string, category: string): string {
  // Strip OStandard separators, stop words, get content nouns
  const titleWords = title
    .replace(/\|/g, ' ')
    .split(' ')
    .filter(w => w.length > 4)
    .slice(0, 4)
    .join(' ');
  return `${titleWords} ${category}`;
}
```

**Query examples:**
| Article Title | Generated Query | Photo Result |
|---|---|---|
| `Subnautica 2 Early Access | 2 Million Sales in 12 Hours` | `subnautica early access gaming` | Underwater / ocean |
| `OpenAI GPT-5 Released | What Changes for Developers` | `openai developers changes tech` | Server rooms / abstract tech |
| `Bitcoin Breaks $150K | Institutional Demand Surges` | `bitcoin breaks institutional crypto` | Digital abstract / gold |
| `Anchorage USAT Expands to Celo Network` | `anchorage expands network crypto` | Blockchain / finance abstract |

**Fallback chain:**
1. Unsplash query result → use it
2. No results → retry with just `category` as query (always returns something)
3. API down → hardcoded base64 dark texture image embedded in Edge function

**Important:** Unsplash photos in Satori require fetching the image bytes and converting to base64 inside the Edge function, since Satori cannot load external URLs directly. Cache this at the slug level.

### Smart Variants (Same as Before, Upgraded)

1. **Default** — photo background + gradient overlay + headline
2. **Pull quote** — photo background + large italic quote (if `pull_quote` field set)
3. **Stat** — photo background + giant number (if `key_stat` field set, e.g. `"2M / 12hrs"`)
4. **Breaking** — red "● LIVE" indicator in top-right if `breaking: true`
5. **Investigations** — darker gradient (95% opacity), crimson badge, noir feel

---

## Architecture

```
app/api/og/route.tsx                          ← Edge function, returns PNG
lib/og/
  ├── unsplash.ts                             ← Unsplash photo fetch + query builder + fallback
  ├── load-fonts.ts                           ← Edge-safe font loader (fetch + module-level cache)
  ├── load-logo.ts                            ← Reads OzoneNews-logo-white.svg → base64
  ├── theme.ts                                ← Category accent resolver
  ├── truncate.ts                             ← Smart headline truncation, no orphans
  ├── url.ts                                  ← getOGImageUrl(slug, modifiedAt?)
  └── templates/
      ├── HeadlineCard.tsx                    ← Default (photo + gradient + headline)
      ├── QuoteCard.tsx                       ← Pull quote variant
      ├── StatCard.tsx                        ← Big number variant
      └── shared.tsx                          ← Logo, Badge, Byline — shared across templates

public/fonts/
  Fraunces-Black.ttf
  Fraunces-Semibold.ttf
  Inter-Bold.ttf
  Inter-Medium.ttf

public/og-assets/
  OzoneNews-logo-white.svg     ← EXPORT FROM CANVA — actual brand logo, white on transparent
  OzoneNews-logo-black.svg     ← EXPORT FROM CANVA — for future light-bg variants
  fallback-dark.jpg             ← Used if Unsplash API is down (dark texture, 1200×675)
  grain.svg                     ← Optional 2% opacity noise overlay
```

### Environment Variable Required

```bash
# .env.local and Railway env
UNSPLASH_ACCESS_KEY=Xf48MkOY-E_ughjz6FJ1d_heBKDy0YcF_qpIDoVi1FQ
```

### Edge Function (Core Handler)

```ts
// app/api/og/route.tsx
export const runtime = 'edge';

import { ImageResponse } from 'next/og';
import { getEntryBySlug } from '@/lib/registry-service';
import { loadFonts } from '@/lib/og/load-fonts';
import { loadLogo } from '@/lib/og/load-logo';
import { fetchOGBackground } from '@/lib/og/unsplash';
import { resolveAccent } from '@/lib/og/theme';
import { HeadlineCard, QuoteCard, StatCard } from '@/lib/og/templates';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const slug = searchParams.get('slug');
  if (!slug) return new Response('Missing slug', { status: 400 });

  const [entry, fonts, logo] = await Promise.all([
    getEntryBySlug(slug),
    loadFonts(),
    loadLogo(),
  ]);
  if (!entry) return new Response('Not found', { status: 404 });

  // Fetch background photo — cached 24hrs per query
  const bgImage = await fetchOGBackground(entry.title, entry.category);
  const accent = resolveAccent(entry.category);

  const variantParam = searchParams.get('variant') ?? 'auto';
  const variant = variantParam === 'auto'
    ? (entry.pull_quote ? 'quote' : entry.key_stat ? 'stat' : 'headline')
    : variantParam;

  const Template = variant === 'quote' ? QuoteCard
                 : variant === 'stat'  ? StatCard
                 : HeadlineCard;

  return new ImageResponse(
    <Template entry={entry} bgImage={bgImage} logo={logo} accent={accent} />,
    {
      width: 1200,
      height: 675,
      fonts,
      headers: {
        'Cache-Control': 'public, immutable, max-age=31536000, s-maxage=31536000',
      },
    }
  );
}
```

### HeadlineCard Template (Core Design)

```tsx
// lib/og/templates/HeadlineCard.tsx
export function HeadlineCard({ entry, bgImage, logo, accent }) {
  return (
    <div style={{
      display: 'flex',
      width: 1200,
      height: 675,
      position: 'relative',
      fontFamily: 'Inter',
    }}>
      {/* Layer 1: Full-bleed Unsplash photo */}
      <img
        src={bgImage}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
      />

      {/* Layer 2: Bottom-heavy gradient overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.93) 0%, rgba(0,0,0,0.60) 45%, rgba(0,0,0,0.12) 100%)',
      }} />

      {/* Layer 3: Content */}
      <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', padding: '52px 64px', justifyContent: 'space-between' }}>

        {/* Top bar: Logo + Category badge */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <img src={logo} style={{ height: 28 }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: accent, fontFamily: 'Inter', fontWeight: 700, fontSize: 15, letterSpacing: 2, textTransform: 'uppercase' }}>
            <span style={{ fontSize: 10 }}>◆</span>
            <span>{entry.category}</span>
            {entry.breaking && <span style={{ color: '#ef4444', marginLeft: 16 }}>● LIVE</span>}
          </div>
        </div>

        {/* Bottom zone: Headline + subtitle + byline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ fontFamily: 'Fraunces', fontWeight: 900, fontSize: 78, lineHeight: 1.05, color: '#ffffff', maxWidth: 980 }}>
            {truncate(entry.title, 2)}
          </div>
          {entry.subtitle && (
            <div style={{ fontFamily: 'Fraunces', fontWeight: 600, fontSize: 28, color: '#d1d5db', maxWidth: 860, lineHeight: 1.3 }}>
              {truncate(entry.subtitle, 1)}
            </div>
          )}
          <div style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: 15, color: '#9ca3af', letterSpacing: 0.3 }}>
            {entry.author_name}  ·  {entry.publish_date}  ·  OzoneNews.org
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Wired Into Articles (Zero Friction)

```ts
// lib/seo-utils.ts or generateArticleMetadata
const ogImage = entry.hero_image_src
  ?? `${SITE_URL}/api/og?slug=${entry.slug}${entry.modified_at ? `&v=${encodeURIComponent(entry.modified_at)}` : ''}`;
```

Every new article published from terminal/code gets the premium thumbnail automatically. No additional fields to populate.

---

## Quality Upgrades Over Vanilla Satori

| Upgrade | What It Buys Us | Effort |
|---|---|---|
| **Unsplash contextual photography** | Real imagery matched to article topic. Indistinguishable from human-designed cards. | 1 hr |
| **Bottom-heavy gradient overlay** | Text always readable over any photo. Photo bleeds through at top for visual depth. | 30 min |
| **Real OzoneNews logo (from Canva)** | Actual brand mark, not text substitute. Embedded as base64 SVG, renders crisp at all sizes. | 30 min (export from Canva) |
| **Editorial serif typography (Fraunces)** | Magazine gravitas. NYT / Atlantic feel, not generic tech blog. | 30 min |
| **Canva as design source** | Every pixel measurement in the Satori JSX matches an approved visual design. No guessing. | 30 min design session |
| **Three smart variants** | Default / Pull quote / Stat — article type drives the strongest visual | 2 hrs |
| **Smart truncation** | No mid-word ellipses, no orphan words on headline line 2 | 1 hr |
| **Category accent badge** | Restrained color — only in the small ◆ mark. Everything else is white on photo. | 30 min |
| **Breaking/live indicator** | `● LIVE` in red if `breaking: true` | 15 min |
| **Grain texture** | 2% opacity noise overlay removes the flat digital feel | 15 min |
| **Unsplash 24hr query cache** | Same query reuses cached photo — no redundant API hits | 30 min |
| **Edge + CDN caching** | <100ms cold render, <10ms cached at CDN. Railway Edge functions. | included |
| **Cache-busting by `modified_at`** | Re-renders only when article actually changes | 15 min |

Total build time: **~8–10 hours** for the full premium pipeline.

---

## Build Order (Forward-Only)

| Phase | Build | Time |
|---|---|---|
| **0 — Pre-code** | Design the exact OG card in Canva at 1200×675. Export the OzoneNews logo as white SVG. Screenshot approved design as spec reference. | 30 min |
| **1** | `/api/og` Edge route + `HeadlineCard` + Unsplash integration + fonts + logo | 4 hrs |
| **2** | Wire into `generateArticleMetadata` so all new articles use it by default | 30 min |
| **3** | Add `QuoteCard` + `StatCard` variants | 2 hrs |
| **4** | Add `unsplash.ts` query caching, fallback chain, `UNSPLASH_ACCESS_KEY` env var in Railway | 1 hr |
| **5** | Polish: grain texture, breaking indicator, `modified_at` cache-busting | 1 hr |

---

## What We Are NOT Building

- ❌ No backfill of legacy 466 articles
- ❌ No bulk image generation script
- ❌ No DALL·E / AI image generation
- ❌ No Canva API calls (Enterprise-gated, preview-only — not viable for code pipeline)
- ❌ No admin review UI

Canva is used for visual design decisions only (Phase 0). Satori + Unsplash + real logo is the full stack.

---

## Pre-Code Steps (Do These First)

**Step 1 — Canva design session (30 min)**
1. New Canva design → Custom size → 1200 × 675px
2. Add a placeholder dark photo as background
3. Apply the gradient overlay (use Canva's gradient tool, bottom-heavy)
4. Place your OzoneNews logo top-left — decide exact size and position
5. Add a mock `◆ GAMING` badge top-right
6. Add a mock headline in Fraunces Black — decide font size, line height, margin from bottom
7. Add mock subtitle in Fraunces Semibold — decide size, color (`#d1d5db`)
8. Add mock byline in Inter Medium — decide size, color (`#9ca3af`)
9. Get it exactly right. Screenshot as spec.
10. Export OzoneNews logo as **SVG** (white on transparent) → save to `public/og-assets/OzoneNews-logo-white.svg`
11. Export OzoneNews logo as **PNG** (white on transparent, 2x resolution) → save to `public/og-assets/OzoneNews-logo-white@2x.png`

**Step 2 — Download fonts**
```bash
# Fraunces from Google Fonts
# Inter from Google Fonts or Fontsource
# Save to public/fonts/
```

**Step 3 — Add UNSPLASH_ACCESS_KEY to Railway env vars**

Once these three pre-code steps are done, Phase 1 implementation starts.

---

## Success Criteria

After Phases 1–5 ship, every new article published from terminal/code:

- ✅ Has a unique 1200×675 thumbnail at `https://www.OzoneNews.org/api/og?slug={slug}`
- ✅ Renders in <150ms on Edge, <10ms cached
- ✅ Looks designed, not generated
- ✅ Eligible for Google Top Stories carousel
- ✅ Eligible for Google Discover
- ✅ Produces large-image cards on Twitter, LinkedIn, Facebook, Discord
- ✅ Requires zero design work in the publish flow

---

## Implementation Checklist

**Phase 0 — Pre-code (Canva + assets)**
- [ ] Design OG card spec in Canva at 1200×675 — get it visually perfect
- [ ] Export OzoneNews logo white SVG → `public/og-assets/OzoneNews-logo-white.svg`
- [ ] Export OzoneNews logo white PNG @2x → `public/og-assets/OzoneNews-logo-white@2x.png`
- [ ] Download Fraunces Black + Semibold TTF → `public/fonts/`
- [ ] Download Inter Bold + Medium TTF → `public/fonts/`
- [ ] Add `UNSPLASH_ACCESS_KEY` to `.env.local` + Railway env vars
- [ ] Create `public/og-assets/fallback-dark.jpg` (1200×675, dark textured background for API fallback)

**Phase 1 — Core build**
- [ ] `lib/og/unsplash.ts` — query builder, Unsplash fetch, 24hr cache, fallback chain, base64 encoding
- [ ] `lib/og/load-fonts.ts` — edge-safe, cached at module scope
- [ ] `lib/og/load-logo.ts` — reads SVG from public/og-assets, returns base64
- [ ] `lib/og/theme.ts` — category accent color map
- [ ] `lib/og/truncate.ts` — word-break aware, no orphans, 2-line max for headlines
- [ ] `lib/og/templates/HeadlineCard.tsx` — three-layer design (photo + gradient + content)
- [ ] `lib/og/templates/shared.tsx` — Logo, Badge, Byline components
- [ ] `app/api/og/route.tsx` — Edge handler, parallel asset fetching, ImageResponse

**Phase 2 — Wire in**
- [ ] `lib/og/url.ts` — `getOGImageUrl(slug, modifiedAt?)` helper
- [ ] Wire `getOGImageUrl` into `generateArticleMetadata` / `lib/seo-utils.ts`
- [ ] Verify 3 sample new articles generate correct OG images
- [ ] Test with Twitter Card Validator + LinkedIn Post Inspector + Facebook Sharing Debugger

**Phase 3–5 — Variants + polish**
- [ ] `lib/og/templates/QuoteCard.tsx`
- [ ] `lib/og/templates/StatCard.tsx`
- [ ] Breaking/live indicator in `shared.tsx`
- [ ] Grain texture overlay in `shared.tsx`
- [ ] Variant auto-routing in `route.tsx`

**Deploy**
- [ ] Commit all of the above
- [ ] Push to Railway
- [ ] Validate 5 live article OG images in Card Validator tools

---

*Forward-only, magazine-quality, powered by Unsplash + OzoneNews logo + Satori. No AI, no bulk scripts, no backfill.*
