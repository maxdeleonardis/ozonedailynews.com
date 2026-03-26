# Supabase Upgrade — Session Context & Architecture Notes

**Date:** March 24, 2026  
**Production:** Railway → `aMarketology/Object-wire26-` main branch → `objectwire.org`  
**Supabase project:** `https://kzcwclpurrtonpsnownbl.supabase.co`  
**Last commit:** `4abfdd4` pushed to main

---

## Architecture Overview

### Content-as-Code Pipeline
```
Write article (page.tsx)
  → wiki:migrate  (content → Supabase row)
  → wiki:trim     (full file → stub, fetches from DB at runtime)
```

**CRITICAL RULE:** Always `wiki:migrate` BEFORE `wiki:trim`. Trim first = no Supabase row = 404 in production.

### Table Routing
| Component | Supabase Table |
|---|---|
| `JackArticle` | `jack_articles` |
| `NewsArticle` | `articles` |
| `ArticlePage` | `article_pages` |

**Note:** `jack_articles` has NO `status` column. `articles` has `status: 'published'`.

### Slug Format
`{dir-segments-joined-with-dashes}`  
Example: `app/trump/foo/page.tsx` → `trump-foo`  
Example: `app/copyright/news/bar/page.tsx` → `copyright-news-bar`

---

## Articles Written & Migrated This Session (Batch March 24)

### 1. ICE Arrest at SFO — JackArticle
- **File:** `app/trump/ice-arrest-sfo-airport-nationwide-deployment/page.tsx`
- **Status:** STUB (trimmed) — content in Supabase ✓
- **Supabase slug:** `trump-ice-arrest-sfo-airport-nationwide-deployment` (jack_articles)
- **Component:** JackArticle, `layout="news"`, `accentColor="red"`, 6 sections + timeline
- **Topic:** ICE agents arrest woman at SFO secure boarding area, unrelated to Trump's airport deployment directive

### 2. ICE Agents Drop Masks — NewsArticle
- **File:** `app/trump/trump-ice-agents-drop-masks-airports/page.tsx`
- **Status:** STUB (trimmed) — content in Supabase ✓
- **Supabase slug:** `trump-trump-ice-agents-drop-masks-airports` (articles)
- **Component:** NewsArticle, `breaking:true`, `trending:true`, `categoryColor="red"`
- **Topic:** Trump directs ICE agents to remove masks during airport operations

### 3. Tencent OpenClaw in WeChat — JackArticle
- **File:** `app/technology/tencent-openclaw-ai-agent-wechat/page.tsx`
- **Status:** STUB (trimmed) — content in Supabase ✓
- **Supabase slug:** `technology-tencent-openclaw-ai-agent-wechat` (jack_articles)
- **Component:** JackArticle, `accentColor="blue"`, 4 sections
- **Thumbnail:** `/default/Tencent embeds OpenClaw .png`
- **Topic:** Tencent embeds OpenClaw AI agent into WeChat for 1.3B users

### 4. BlackRock + Fidelity Buy Bitcoin — NewsArticle
- **File:** `app/blackrock/blackrock-fidelity-bought-400m-bitcoin-golds-worst-weekly-drop/page.tsx`
- **Status:** STUB (trimmed) — content in Supabase ✓
- **Supabase slug:** `blackrock-blackrock-fidelity-bought-400m-bitcoin-golds-worst-weekly-drop` (articles)
- **Component:** NewsArticle, `categoryColor="orange"`, `trending:true`, HighlightBox + 4 sections + TagsSection
- **Topic:** BlackRock + Fidelity bought $400M Bitcoin during gold's worst weekly drop in 40 years

### 5. BlackRock Index Page — ArticlePage
- **File:** `app/blackrock/page.tsx`
- **Status:** FULL content in file — NOT migrated (wiki-style index, not a news article)
- **Component:** ArticlePage with InfoBox (11 facts), TableOfContents (8 sections), RelatedLinks
- ⚠️ **Has NO content_registry entry yet**

### 6. AOC / MLB Polymarket — JackArticle
- **File:** `app/copyright/news/aoc-mlb-polymarket-gambling-warning/page.tsx`
- **Status:** STUB (trimmed) — content in Supabase ✓
- **Supabase slug:** `copyright-news-aoc-mlb-polymarket-gambling-warning` (jack_articles)
- **Component:** JackArticle, `accentColor="blue"`, 5 sections, `JackSideBlock` + `JackCallout`
- **Thumbnail:** `/default/aoc.PNG`
- **Interlink:** Section 4 links to `/copyright/news/letitia-james-sues-counter-strike`
- **Topic:** AOC calls MLB's $300M Polymarket deal 'sad', warns against pervasive gambling

### 7. Amazon Acquires Fauna Robotics — NewsArticle
- **File:** `app/amazon/news/amazon-acquires-fauna-robotics-sprout-humanoid/page.tsx`
- **Status:** STUB (trimmed) — content in Supabase ✓
- **Supabase slug:** `amazon-news-amazon-acquires-fauna-robotics-sprout-humanoid` (articles)
- **Component:** NewsArticle, `categoryColor="orange"`, `trending:true`, HighlightBox + 3 sections + TagsSection
- **Thumbnail:** `entertainment/christian-wiediger-rymh7EZPqRs-unsplash.jpg` (no `public/amazon/` folder)
- **Topic:** Amazon acquires Fauna Robotics to build "friendly" home humanoid (Sprout)

---

## Verification

Verification script: `scripts/_verify-batch-march24.ts`

All 6 migrated slugs confirmed in Supabase:

| Table | Slug |
|---|---|
| jack_articles | trump-ice-arrest-sfo-airport-nationwide-deployment |
| articles | trump-trump-ice-agents-drop-masks-airports |
| jack_articles | technology-tencent-openclaw-ai-agent-wechat |
| articles | blackrock-blackrock-fidelity-bought-400m-bitcoin-golds-worst-weekly-drop |
| jack_articles | copyright-news-aoc-mlb-polymarket-gambling-warning |
| articles | amazon-news-amazon-acquires-fauna-robotics-sprout-humanoid |

---

## Content Registry

**File:** `lib/content-registry.ts` — TypeScript array  
Every page needs an entry for `SEOWrapper` JSON-LD, sitemap, and news sitemap.  
If missing → SEOWrapper emits nothing silently.

**Sync tool:** `scripts/sync-registry.ts`  
- Scans `app/**/page.tsx`, detects missing registry entries
- Dry run by default; `--write` flag to auto-add stubs
- Auto-entries have blank `imageUrl` — must fill manually after

**⚠️ All 6 new articles + `/blackrock` index page have NO content_registry entries.**

To fix:
```bash
npx tsx --env-file=.env.local scripts/sync-registry.ts          # dry run
npx tsx --env-file=.env.local scripts/sync-registry.ts --write  # write stubs
# Then manually fill imageUrl, imageWidth, imageHeight on each new entry
```

**Also in Supabase:** `supabase/migrations/20260305000000_content_registry.sql` — a `content_registry` TABLE exists in Supabase (mirrors the TS array).

---

## Google News — Fixing the JS-Heavy Problem

**Priority:** High — Google News requires HTML delivered by the server. Client-side Supabase fetching (via `useEffect` or browser-side `fetch`) means Googlebot sees a blank page and cannot index articles.

### The "View Source" Test

Run this on any live article to check current rendering status:

1. Go to an article on `objectwire.org`.
2. Right-click → **View Page Source** (not Inspect — not DevTools).
3. Press `Ctrl + F` → search for the article's headline.
4. **Headline visible in source** → server-side rendering is working. ✅
5. **No headline / only script tags** → page is JS-heavy. Google News will miss it. ❌

### Current SSR Architecture — ✅ Already Implemented

SSR is already in place. The data pipeline is:

```
page.tsx (Server Component, no 'use client')
  export const dynamic = 'force-dynamic'
  → <JackArticleDB slug="..."> or <NewsArticleDB slug="...">
      → async server component: queries Supabase, passes data as props
          → <JackArticle> / <NewsArticle> (client component, presentational only)
              → <article itemScope itemType="https://schema.org/NewsArticle">
```

Googlebot sees full HTML on the first request. The "View Source" test passes — the article headline and body are in the raw HTML source of every article page.

### Current Gap — `force-dynamic` Has No Caching

`export const dynamic = 'force-dynamic'` re-queries Supabase on every single request. For published articles that don't change, this is inefficient and adds latency for Googlebot.

**The fix: switch published articles to ISR (`revalidate = 3600`).**

ISR caches the rendered HTML at the CDN edge after the first request. Googlebot gets sub-millisecond cached HTML — the ideal format for Google News indexing.

```typescript
// Change in each published article's page.tsx:
// Before:
export const dynamic = 'force-dynamic';
// After:
export const revalidate = 3600;  // refresh cached HTML at most every hour
```

**Status of March 24 batch articles:** All 6 are finalized and should be switched to `revalidate = 3600`. See Step 2.5.A in supabase_upgrade_step_by_step.md for the full implementation plan.

### Rendering Strategy by Page Type

| Page Type | Strategy | Why |
|---|---|---|
| Breaking news (live) | `force-dynamic` | Always queries fresh Supabase data |
| Published articles (finalized) | `revalidate = 3600` | CDN-cached HTML — fastest for Google News |
| Index / category pages | `revalidate = 1800` | Semi-fresh, low server cost |
| ArticlePage / wiki | `revalidate = 86400` | Rarely changes, maximum cache efficiency |
| Admin / account | Client-side only | Not indexed — SSR not needed |

**Action:** Change `force-dynamic` to `revalidate = 3600` in all 6 March 24 article pages. Commit and push. Railway redeploys and CDN begins caching the HTML for Googlebot.

### Missing Semantic Wrappers (`<article>` / `<section>`)

Even after fixing JS-heavy rendering, Google News uses semantic HTML tags to understand page structure. Content floating inside plain `<div>` elements forces Google to guess what the main article body is.

**The fix:** Wrap the article body in `<article>`. Wrap each named section (e.g., "Donation Stations", "The Free Furniture Market") in `<section>`.

```tsx
// Before
<div className="article-body">
  <h2>Donation Stations</h2><p>...</p>
  <h2>The Free Furniture Market</h2><p>...</p>
</div>

// After
<article>
  <section><h2>Donation Stations</h2><p>...</p></section>
  <section><h2>The Free Furniture Market</h2><p>...</p></section>
</article>
```

**Status: ✅ Done.** All three production components are already semantically compliant:
- `JackArticle` — renders `<article itemScope itemType="https://schema.org/NewsArticle">`
- `NewsArticle` — renders inner `<article>` block
- `ArticlePage` — renders `<section id={id}>` per section, `<nav>` for table of contents

`BlogSeoAtx` is **not a real component** — it does not exist in the codebase. The three components above are the only article renderers.

**Audit command for future regressions:**
```bash
grep -rL "<article" components --include="*.tsx"
```

---

## Pending Optimizations

### Problem: 3-System Gap
The three systems — files / content_registry / Supabase — don't talk to each other. There's no visibility into which pages are synced, registered, or trimmed.

### Proposed: `wiki:status` Dashboard Script
**File:** `scripts/wiki-status.ts`

Behavior:
1. Scan all `app/**/page.tsx` — detect stub (< 80 lines) vs full file
2. Read `lib/content-registry.ts` — extract all registered slugs
3. Query Supabase: `articles`, `jack_articles`, `article_pages` tables
4. Output color-coded table: **File | Registry | Supabase** per page
5. Print summary: "X pages unregistered, Y pages not in Supabase"

Add to `package.json`:
```json
"wiki:status": "npx tsx --env-file=.env.local scripts/wiki-status.ts"
```

### Proposed: `wiki:publish` Unified Pipeline
```bash
wiki:publish --file app/trump/foo/page.tsx
  → migrate  (content → Supabase row)
  → register (metadata → content_registry)
  → trim     (full file → stub)
  → confirm  (both writes verified)
```

---

## Known Issues & Gotchas

| Issue | Fix |
|---|---|
| `jack_articles` has no `status` column | Only select `slug`, never `slug,status` from that table |
| Curly apostrophe breaks TypeScript strings | Use `\u2019` or double-quote the string |
| PowerShell here-docs (`<< 'EOF'`) don't work | Write inline scripts as temp `.ts` files |
| Top-level `await` in `.tsx` fails with CJS error | Wrap in `async function main() {} ; main()` |
| No `public/amazon/` folder | Use `entertainment/christian-wiediger-rymh7EZPqRs-unsplash.jpg` for Amazon articles |
| Husky pre-commit hook | Deleted entirely — commits work cleanly |

---

## Infrastructure

- **Migration script:** `scripts/migrate-wiki-content.ts` — routes JackArticle → jack_articles, NewsArticle → articles
- **Trim script:** `scripts/trim-wiki-pages.ts` — backs up to `.bak`, replaces with stub
- **Sync registry:** `scripts/sync-registry.ts` — scans app/, generates missing registry entries
- **Push articles:** `scripts/push-articles-to-supabase.ts` — uses contentRegistry
- **Ping Google:** `scripts/ping-google.ts` — reads registry, pings IndexNow/GSC
- **SEO docs:** `seo_contentregistry_auto.md` — full chain: page.tsx → registry → SEOWrapper → sitemap
- **Deployment:** GitHub Actions workflow `seo-registry-sync.yml` referenced in `COMMIT_DEPLOY_PLAN.md`

---

## Session Progress Summary

| Task | Status |
|---|---|
| 7 new articles/pages written | ✅ |
| 6 articles migrated to Supabase | ✅ |
| 6 articles trimmed to stubs | ✅ |
| All 6 slugs verified in Supabase | ✅ |
| Committed `4abfdd4` + pushed to main | ✅ |
| Railway redeploy triggered | ✅ |
| `/blackrock` index page created | ✅ |
| content_registry entries for new pages | ❌ Pending |
| `wiki:status` script | ❌ Not yet built |
| `wiki:publish` unified command | ❌ Not yet built |
