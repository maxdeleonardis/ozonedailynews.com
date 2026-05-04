# AlfasaAutoSEO — Phase 1 Audit Report

**Date:** May 4, 2026  
**Auditor:** Automated scan + manual review  
**Scope:** All `app/` page.tsx files for `force-dynamic`, double DB calls, Supabase over-use

---

## Executive Summary

- **34 pages** have `force-dynamic` — most are hubs or article spokes that should be ISR cached
- **Only 2 pages** have `scanAllContent()` — the worst offender (`trump/page.tsx`, `search/page.tsx`)
- **Most hubs are already using the right data source** (`getAllEntries()` from local JSON) but are destroying the cache benefit with `force-dynamic` — this is the primary crawl budget drain
- **0 hub pages** query Supabase directly for their article list (good)
- **3 pages** use `generateArticleMetadata()` async — double DB call pattern

---

## Category 1 — Hubs Using Local Registry But `force-dynamic` (WRONG CACHE MODE)

These pages already read from `getAllEntries()` (local JSON file, zero Supabase), but `force-dynamic` forces Next.js to skip the ISR cache entirely and re-render on EVERY request. Googlebot hammering these pages = re-render on every crawl hit = no benefit from the local file speed.

**Fix: Remove `force-dynamic`, add `export const revalidate = 3600`**

| Page | Current | Fix |
|---|---|---|
| `app/crypto/page.tsx` | `force-dynamic` + `getAllEntries()` | `revalidate = 3600` |
| `app/tech/page.tsx` | `force-dynamic` + `getAllEntries()` | `revalidate = 3600` |
| `app/finance/page.tsx` | `force-dynamic` + `getAllEntries()` | `revalidate = 3600` |
| `app/video-games/page.tsx` | `force-dynamic` + `getAllEntries()` | `revalidate = 3600` |
| `app/entertainment/page.tsx` | `force-dynamic` + `getAllEntries()` | `revalidate = 3600` |
| `app/google/page.tsx` | `force-dynamic` + `getAllEntries()` | `revalidate = 3600` |
| `app/news/page.tsx` | `force-dynamic` + `getAllEntries()` | `revalidate = 3600` |
| `app/microsoft/page.tsx` | `force-dynamic` + `getAllEntries()` | `revalidate = 3600` |
| `app/meta/page.tsx` | `force-dynamic` + `getAllEntries()` | `revalidate = 3600` |
| `app/amazon/page.tsx` | `force-dynamic` + `getAllEntries()` | `revalidate = 3600` |
| `app/california/page.tsx` | `force-dynamic` + `getAllEntries()` | `revalidate = 3600` |
| `app/claude/page.tsx` | `force-dynamic` + `getAllEntries()` | `revalidate = 3600` |
| `app/cursor/page.tsx` | `force-dynamic` + `getAllEntries()` | `revalidate = 3600` |
| `app/tiktok/page.tsx` | `force-dynamic` + `getAllEntries()` | `revalidate = 3600` |
| `app/youtube/page.tsx` | `force-dynamic` + `getAllEntries()` | `revalidate = 3600` |
| `app/saas/page.tsx` | `force-dynamic` + `getAllEntries()` | `revalidate = 3600` |
| `app/shopify/page.tsx` | `force-dynamic` + `getAllEntries()` | `revalidate = 3600` |
| `app/social/page.tsx` | `force-dynamic` + `getAllEntries()` | `revalidate = 3600` |
| `app/events/page.tsx` | `force-dynamic` + `getAllEntries()` | `revalidate = 3600` |
| `app/bio-hacking/page.tsx` | `force-dynamic` + `getAllEntries()` | `revalidate = 3600` |
| `app/redbull/page.tsx` | `force-dynamic` (check data source) | `revalidate = 3600` |
| `app/copyright/page.tsx` | `force-dynamic` + `getAllEntries()` | `revalidate = 86400` (legal, rarely changes) |
| `app/austin-private-detective-agency/page.tsx` | `force-dynamic` | `revalidate = 86400` |
| `app/site-index/page.tsx` | `force-dynamic` | `revalidate = 3600` |
| `app/technology/page.tsx` | `force-dynamic` | `revalidate = 3600` |
| `app/technology/terrapower/page.tsx` | `force-dynamic` | `revalidate = 3600` |
| `app/tech/oracle/page.tsx` | `force-dynamic` | `revalidate = 3600` |
| `app/equipment/dji/page.tsx` | `force-dynamic` | `revalidate = 3600` |
| `app/equipment/hasselblad/page.tsx` | `force-dynamic` | `revalidate = 3600` |

**Impact:** Every one of these is a hub or sub-hub. Googlebot crawls hubs frequently. Each crawl currently triggers a full re-render. With `revalidate=3600`, the first crawl in any hour renders once; every subsequent crawl within that hour is served from cache at ~10ms. This is the single highest-leverage fix in this audit.

---

## Category 2 — Critical: `scanAllContent()` Usage (WORST OFFENDER)

`scanAllContent()` does a live filesystem scan of the entire `app/` directory on every request. It is slow, non-deterministic, and completely bypasses the optimized `content_registry.json`. It must be replaced everywhere.

| Page | Issue | Fix |
|---|---|---|
| `app/trump/page.tsx` | `scanAllContent()` + `force-dynamic` | Replace with `getAllEntries()` filtered by slug prefix, add `revalidate = 3600` |
| `app/search/page.tsx` | `scanAllContent()` + `generateMetadata()` | Replace with `getAllEntries()`, acceptable to keep `force-dynamic` for search UX |

---

## Category 3 — Double DB Call (generateMetadata async)

These pages fire one Supabase query for metadata + another for page content = 2 DB round trips per cache miss.

| Page | Issue | Fix |
|---|---|---|
| `app/github/page.tsx` | `generateMetadata()` async | Determine if hub or stub — if hub, replace with static `metadata` export |
| `app/[...path]/page.tsx` | `generateMetadata()` async | Acceptable — catch-all has no other way to know the title. Keep with ISR. |
| `app/search/page.tsx` | `generateMetadata()` async | Static metadata is fine for search page |

---

## Category 4 — News Spoke Pages With `force-dynamic` (WRONG)

These are article pages that should be ISR, not live-rendered:

| Page | Fix |
|---|---|
| `app/airlines/jetblue/jetblue-surveillance-pricing-lawsuit-personal-data-2026/page.tsx` | `revalidate = 3600` |
| `app/apple/news/apple-post-iphone-gurman-6-secret-products-ambient-ai-2026/page.tsx` | `revalidate = 3600` |
| `app/disney/news/bob-iger-thrive-capital-josh-kushner-advisor-2026/page.tsx` | `revalidate = 3600` |
| `app/news/samsung-labor-crisis-pyeongtaek-protest-hbm-chips-2026/page.tsx` | `revalidate = 3600` |
| `app/nvidia/news/nvidia-earth-day-2026-ai-climate-initiatives/page.tsx` | `revalidate = 3600` |
| `app/technology/terrapower/natrium-kemmerer-groundbreaking-wyoming-2026/page.tsx` | `revalidate = 3600` |
| `app/world-cup/news/italy-rejects-iran-replacement-world-cup-2026-zampolli/page.tsx` | `revalidate = 3600` |

---

## Category 5 — Legitimate `force-dynamic` (KEEP AS-IS)

These are correct uses of `force-dynamic`:

| Page | Reason |
|---|---|
| `app/(admin)/layout.tsx` | Admin panel must never be cached |
| `app/news-sitemap.xml/route.ts` | Google News requires freshness, 15min CDN cache |
| `app/auth/**` | Auth routes must be dynamic |
| `app/api/**` | API routes must be dynamic |
| `app/search/page.tsx` | Search UX requires live results (acceptable exception) |

---

## What Supabase Should Store (Minimum Viable SEO Fields)

The user's question: **"what SEO information do we actually need Supabase to store?"**

For the `articles` table (news spokes — the ONLY table queried at runtime), these are the required fields:

### Core rendering fields
```
slug              — routing key, must match page.tsx
title             — H1, og:title fallback
subtitle          — lede paragraph, meta description fallback
content_html      — full article body
status            — 'published' gate
category          — section tag, OG section
tags              — keywords array, news sitemap keywords
published_at      — ISO-8601, Google News requires this
author_name       — byline display
author_slug       — /authors/[slug] link
```

### Image SEO fields (CRITICAL for Google Discover + Top Stories)
```
thumbnail_src         — card thumbnail, og:image fallback (min 1200px wide for Top Stories)
thumbnail_alt         — alt text for thumbnail (required for accessibility + Google image index)
hero_image_src        — full-width header image
hero_image_alt        — alt text for hero
og_image_url          — explicit OG image (overrides thumbnail if set)
og_image_width        — must be 1200 (Google Top Stories minimum)
og_image_height       — must be 675 (16:9 preferred) or 630
og_image_alt          — alt text for OG image
```

**Why image SEO in Supabase matters:**
Google Discover and Top Stories both require a large image (min 1200×675px, max-image-preview:large). An article with no OG image or an image smaller than 1200px wide is **ineligible for Discover and Top Stories** — this is a major traffic source. Storing image metadata in Supabase means editors can update og_image_url and og_image_alt without a new deploy.

### Optional SEO fields (recommended)
```
meta_title            — override for <title> tag (max 60 chars)
meta_description      — override for meta description (130–155 chars)
canonical_url         — explicit canonical (use when slug path differs from desired URL)
read_time             — "7 min read" — E-E-A-T signal, improves CTR
breaking              — boolean — triggers "BREAKING" badge in OG card
trending              — boolean — triggers "TRENDING" badge
exclusive             — boolean — triggers "EXCLUSIVE" badge
topic_tag             — maps to hub page (e.g. "gaming" → /video-games)
```

### What does NOT need to be in Supabase
```
hub page article lists    — use content_registry.json (local, fast)
JackArticle content       — static content/ files (Phase 2 migration)
sitemap data              — use content_registry.json
canonical URLs for hubs   — hardcoded in page.tsx metadata
OG image for hubs         — hardcoded in page.tsx metadata
```

---

## Fix Priority Order

| Priority | File(s) | Change | Estimated Impact |
|---|---|---|---|
| 🔴 1 | `app/trump/page.tsx` | `scanAllContent()` → `getAllEntries()` + `revalidate=3600` | Eliminates worst individual offender |
| 🔴 2 | All 24 hub pages (Category 1) | `force-dynamic` → `revalidate=3600` | Eliminates Googlebot re-render on every crawl hit across all hubs |
| 🟡 3 | 7 article spoke pages (Category 4) | `force-dynamic` → `revalidate=3600` | Reduces spoke page re-renders |
| 🟡 4 | `app/github/page.tsx` | Static `metadata` export, remove `generateMetadata()` async | Eliminates one double DB call |
| 🟢 5 | `articles` table — add missing image fields | Add `og_image_width`, `og_image_height`, `og_image_alt` columns | Unlocks Google Discover eligibility |

---

## Implementation: Changes Applied This Session

- [x] `app/trump/page.tsx` — replaced `scanAllContent()` with `getAllEntries()`, removed `force-dynamic`, added `revalidate = 3600`
- [x] All 29 Category 1 hub pages — `force-dynamic` → `revalidate = 3600`
- [x] All 7 Category 4 article spoke pages — `force-dynamic` → `revalidate = 3600`
- [x] `app/apple/page.tsx` — `force-dynamic` → `revalidate = 3600`
- [x] **Phase 2: `scripts/enrich-jack-articles.ts`** — enriches all 89 static JackArticle JSON files with breadcrumbs, related_articles, footer_links, and owire.org cross-links
- [x] **`components/ui/SisterSiteLink.tsx`** — new cross-site link components (`SisterSiteLink`, `SisterSiteCallout`)
- [x] **`JackArticleDB`** — renders `SisterSiteCallout` when static JSON has `owire_link` field
- [x] **13 articles** auto-tagged with owire.org cross-links (entertainment, creator, Netflix, HBO, MrBeast)
- [x] npm scripts: `jack:enrich`, `jack:enrich-dry`, `jack:enrich-force`

---

*AlfasaAutoSEO Audit — Phase 1. See AlfasaAutoSEO.md for full architecture.*
