# AlfasaAutoSEO — ObjectWire Automated SEO Architecture

**Version:** 2.1  
**Updated:** May 13, 2026  
**Status:** Active — Known Homepage Pipeline Bugs Documented Below

---

## What Is AlfasaAutoSEO

AlfasaAutoSEO is the internal name for ObjectWire's end-to-end automated SEO pipeline. It covers:

- How article metadata is generated and served
- How Supabase is queried and when it is not
- How the sitemap, news-sitemap, JSON-LD, and canonical tags are produced
- The hub-and-spoke content architecture
- The rules that prevent Google crawl throttling, canonical mismatches, and indexing drops

The April 22, 2026 impressions drop was caused by violations of rules defined in this document. These rules are now enforced by prebuild validators. This document defines the full upgraded architecture going forward.

---

## Homepage Article Pipeline (May 2026)

This is how `app/page.tsx` sources articles for the homepage carousel, "More Stories" grid, and headline list.

### Three sources merged in order

```
1. getAllArticles()      → content/static/articles/*.json  (individual files only)
2. getJackArticles()    → content/static/jack_articles/*.json
3. getAllEntries()       → content/static/content_registry.json (via registry-service.ts)
```

All three are merged and deduplicated by `href`. Articles from source 1 and 2 are added first. If source 3 has the same `href`, the blog/jack article entry wins and registry backfills any missing fields (image, excerpt).

### Sort — newest first

```typescript
merged.sort((a, b) => {
  const ta = a.publishDate ? new Date(a.publishDate).getTime() : 0;
  const tb = b.publishDate ? new Date(b.publishDate).getTime() : 0;
  return tb - ta;
});
```

Articles with no `publishDate` (empty string or null) get `time = 0` and sort to the **bottom**. New articles only appear at the top of the homepage if they have a valid, parseable `publishDate` value from at least one of the three sources.

### How each source contributes a `publishDate`

| Source | Field read | Format | Parsed as |
|---|---|---|---|
| `getAllArticles()` | `row.published_at` | ISO-8601 (`2026-05-11T23:00:00Z`) | Valid, sorts correctly |
| `getJackArticles()` | `row.publish_date` | Display string (`"May 12, 2026"`) | Parseable in V8/Node, but non-ISO — fragile |
| `getAllEntries()` / registry | `row.publish_date` | Display string (`"May 11, 2026"`) | Same as above |

**Critical:** If a new article has no individual JSON file in `content/static/articles/` (it's only in `content_registry.json`), its date comes from the registry `publish_date` field only. If that field is missing or null, the article sorts to the bottom and will NOT appear in the carousel.

### Known bugs in the pipeline (as of May 13, 2026)

#### Bug 1 — `readStaticDir('articles')` reads `_index.json` as an article

`content/static/articles/_index.json` is an array file (metadata index). `readStaticDir()` scans all `*.json` files including `_index.json`. The array is parsed and treated as a single `Record<string, unknown>` object. This creates a garbage article with:
- `id = ""`
- `title = ""`
- `url = "/"` (resolves to homepage path)
- `status = "published"` (passes the published filter)

This entry gets into `blogArticles`, deduped against anything at href="/", and appears in `merged` with an empty title and no date. It sorts to the bottom so it's not visible in the carousel, but it is junk in the pipeline.

**Fix:** Add an exclusion in `readStaticDir()` or in `getAllArticles()`:
```typescript
.filter(f => f.endsWith('.json') && f !== '_index.json')
```

#### Bug 2 — Registry has 662 entries; many hub and duplicate pages slip through the homepage filter

`app/page.tsx` filters registry entries:
```typescript
if (e.slug.split('/').filter(Boolean).length < 2) return false;
```

This only excludes single-segment slugs (e.g. `/tech`, `/nvidia`). Hub pages with two or more path segments (like `/video-games/switch2`, `/nvidia/news`) still pass. Additionally, the same article can appear under two different URL structures if the registry has both variants.

Result: the "More Stories" grid and headline list fill with hub pages, sub-hub pages, and duplicate links — making the homepage look like a generic sitemap rather than a curated news feed.

**Fix needed:** The homepage filter should require `description.length > 80` AND the category must be a valid editorial category (not `Meta`, `Services`, `Legal`, `Support`, `Education`, `Reference`).

#### Bug 3 — Malformed registry slugs

Some entries in `content_registry.json` have double-slash slugs like `//events/gdc-2026/...` or encoding bugs like `â€"` in titles (mangled em dash). These create broken links and garbled text in the homepage.

**Fix:** Run `npm run wiki:sync -- --write` which re-scans and rebuilds clean entries. Also add a validation step to reject slugs with `//` or entries with non-ASCII corruption.

#### Bug 4 — New NewsArticle pages have no individual content JSON

Articles like GitLab restructuring (`tech-news-gitlab-restructuring-may-2026-workforce-agentic-ai-pivot`) have:
- A `page.tsx` stub using `NewsArticleDB`
- An entry in `content/static/articles/_index.json`
- An entry in `content_registry.json`

But NO individual JSON file at `content/static/articles/tech-news-gitlab-restructuring-may-2026-workforce-agentic-ai-pivot.json`.

`getAllArticles()` reads individual files, not `_index.json`. So these articles only appear on the homepage via the registry (`getAllEntries()`). Their content renders via `NewsArticleDB` which reads the individual JSON file — if that file doesn't exist, the page will 404 at read time.

**Fix:** Every article page that uses `NewsArticleDB` MUST have a matching individual JSON file in `content/static/articles/[slug].json`. The `_index.json` is metadata-only — it does not serve content.

### Correct publish workflow (all article types)

**NewsArticle (uses `NewsArticleDB`):**
1. Write `content/static/articles/[slug].json` — full article content with `published_at` ISO-8601
2. Add entry to `content/static/articles/_index.json` with `published_at` ISO-8601
3. Write `app/[path]/page.tsx` stub pointing at slug
4. Run `npm run wiki:sync -- --write` to add registry entry with correct `publish_date`
5. **Do not skip step 1.** Without the individual JSON file, `NewsArticleDB` has nothing to render.

**JackArticle (uses `JackArticleDB`):**
1. Write `content/static/jack_articles/[slug].json` — full article with `publish_date` (display) AND `published_at` (ISO-8601) AND `article_url` (canonical path)
2. Add entry to `content/static/jack_articles/_index.json`
3. Write `app/[path]/page.tsx` stub
4. Run `npm run jack:enrich` to auto-populate breadcrumbs and related articles
5. Run `npm run wiki:sync -- --write` to add/update registry entry

**Registry entry date field:**
The registry stores `publish_date` as a display string (e.g. `"May 11, 2026"`). When `sync-registry.ts` creates an entry, it extracts `openGraph.publishedTime` from `page.tsx` and converts it to `YYYY-MM-DD` format. If `publishedTime` is missing from the page metadata, the script falls back to TODAY, which may be wrong.

**Always include `openGraph.publishedTime` in every `page.tsx` metadata block.** This is the only reliable source for `publish_date` in the registry.

### Homepage layout sections

```
merged[0]                  → lead article (carousel feature slot)
merged[1]                  → second story
merged[2]                  → third story
merged[0..9]               → popularArticles (carousel + Popular Now rail)
merged[3..50]              → moreStories (4-col grid, 4 pages)
merged[51..93]             → headlineArticles (compact list overflow)
```

If your article doesn't appear in the carousel, check:
1. Does it have a valid `publishDate` from at least one source?
2. Is its `href` correct (matches the actual route path)?
3. Is it excluded by `EXCLUDED_CATEGORIES` or `EXCLUDED_PREFIXES`?

---

## The Core Problem We Solved (And Must Never Repeat)

### What caused the Google impressions drop

1. **`force-dynamic` on the catch-all route** — every Googlebot request triggered a live Supabase query with no cache. Hundreds of concurrent crawl requests saturated the connection pool.
2. **Sequential Supabase probes** — the catch-all was checking 4 tables one after another (4 round trips per page load, up to 5 with metadata).
3. **Hardcoded layout canonical** — `app/layout.tsx` had `<link rel="canonical" href="https://www.objectwire.org">` applied globally, telling Google every page was a duplicate of the homepage.
4. **`generate-article-metadata.ts` double fetch** — any stub using `generateMetadata()` fired a second Supabase query just for metadata, independent of the content fetch.
5. **`sitemap.ts` querying Supabase** — the daily sitemap regeneration hit `content_registry` directly instead of reading the local JSON file.

### What was fixed

- Catch-all: `force-dynamic` → `revalidate = 3600`, sequential probes → `Promise.all`
- Layout canonical: removed entirely. Each `page.tsx` sets its own.
- Sitemap: now reads local `content_registry.json` via `registry-service.ts` (zero Supabase calls)
- Prebuild validators: `validate-canonicals.ts`, `validate-public.ts` block bad deploys

### What is still broken and addressed in this doc

- High-traffic hub pages still use `force-dynamic` + `scanAllContent()` (hits filesystem + Supabase on every request)
- JackArticles live in Supabase — our most in-depth evergreen content should never depend on a live DB fetch
- No clear separation between static evergreen hubs and dynamic news feeds
- `generate-article-metadata.ts` still fires a second DB query on every cache miss for stubs

---

## Architecture: The New Rule

```
EVERGREEN / HUB CONTENT    →  Static files (.tsx, .mdx, or content/ TS files)  →  ZERO Supabase at runtime
QUICK NEWS / SPOKES        →  Supabase (articles table, NewsArticleDB)          →  ISR revalidate=3600
```

### Why

- Hubs are the pages Google must index perfectly. They are the authority. If they are slow, dynamic, or dependent on a DB that might saturate, Google reduces crawl rate for the entire domain.
- News spokes are published fast and updated frequently. They benefit from Supabase because content editors can push updates without a deploy. ISR at 1 hour is acceptable for news.
- JackArticles are long-form research. They are the highest-value pages on the site. They must never 404, never be slow, and never depend on Supabase uptime. They become static.

---

## Content Architecture: Hub and Spoke

```
HUB (JackArticle, static file)
  └── Spoke: NewsArticle (Supabase, revalidate=3600)
  └── Spoke: NewsArticle (Supabase, revalidate=3600)
  └── Spoke: NewsArticle (Supabase, revalidate=3600)
  └── Sub-Hub: ArticlePage or JackArticle (static)
        └── Spoke: NewsArticle
        └── Spoke: NewsArticle
```

### Hub rules

- Every vertical has exactly one root hub (e.g. `/open-ai`, `/video-games/gta-6`, `/trump`)
- Hubs are static `.tsx` files. No DB fetch at runtime. Content is hardcoded or read from local content files.
- Hubs link to all published spokes. Spokes link back to their hub.
- Hubs are the Google Top Stories anchor — they must have clean canonical, schema, breadcrumbs, and internal links.

### Spoke rules

- Spokes are `NewsArticleDB` components reading from `articles` Supabase table
- `revalidate = 3600` — cached for 1 hour, not `force-dynamic`
- Spokes always have a hub backlink in the first 3 paragraphs
- Spokes appear in the hub's article list (auto-populated by category or tag)

### JackArticle rules (NEW)

- JackArticles are **no longer stored in or fetched from Supabase at runtime**
- Each JackArticle lives as a static `.tsx` file with hardcoded content or reads from a local `content/jack/[slug].ts` file
- The `jack_articles` Supabase table is deprecated for runtime use — it may remain as an authoring workspace or archive, but page rendering must not depend on it
- `JackArticleDB` component is retired for new articles. New JackArticles use `JackArticle` (the static JSX component) directly
- Existing `JackArticleDB` stubs are migrated to static files as part of this upgrade plan

---

## Supabase Usage Policy (Updated May 2026)

| Use Case | Allowed | Notes |
|---|---|---|
| `articles` table (news spokes) | ✅ Yes | ISR `revalidate=3600` only. Never `force-dynamic`. |
| `creator_articles` table | ✅ Yes | ISR `revalidate=3600`. Influencer profiles update rarely. |
| `article_pages` table | ✅ Yes | ISR `revalidate=86400`. Evergreen wiki-style. |
| `jack_articles` table (runtime) | ❌ No | Deprecated for runtime. Static files only going forward. |
| `content_registry` (runtime page render) | ❌ No | Read local `content_registry.json` only. |
| `content_registry` (sitemap) | ❌ No | Fixed May 2026. Use `getAllEntries()` from `registry-service.ts`. |
| `content_registry` (news-sitemap) | ✅ Yes | Must be fresh. `force-dynamic` + 15-min CDN cache is correct. |
| Hub pages (any `force-dynamic` + DB query) | ❌ No | Hubs must be static. No exceptions. |
| `generateArticleMetadata()` in stubs | ⚠️ Caution | Adds a second DB query. Replace with hardcoded `metadata` where possible. |

### The one-line rule

> **If it is a hub or evergreen page, it must not hit Supabase at runtime. Period.**

---

## Sitemap Architecture

### `app/sitemap.ts` (main sitemap)

- Source: `getAllEntries()` from `lib/registry-service.ts` → reads `content/static/content_registry.json`
- Zero Supabase calls ✅ (fixed May 4, 2026)
- `revalidate = 86400` (daily regeneration)
- Deduplicates entries, sorts by priority then date

### `app/news-sitemap.xml/route.ts` (Google News sitemap)

- Source: Supabase `content_registry` table, filtered to last 3 days
- `force-dynamic` is correct here — Google News requires freshness
- 15-minute CDN cache header is correct
- This is the only legitimate `force-dynamic` + Supabase pattern on the site

### Upgrade needed: news-sitemap should query `articles` table directly

Currently the news-sitemap queries `content_registry` which is synced at build time. Articles published between builds will not appear until the next deploy. The upgrade: query `articles` table directly, filter by `published_at >= NOW() - INTERVAL '3 days'`, so new articles appear in Google News within minutes of being pushed to Supabase.

---

## Metadata Generation Policy

### Current problem

`lib/generate-article-metadata.ts` fires a Supabase query per page load (on cache miss) just to build `<head>` metadata. This doubles DB pressure during crawl bursts.

### Correct approach (upgraded)

**Tier 1 — Static metadata (hubs, JackArticles, ArticlePages):**
```tsx
// In page.tsx — hardcoded, no DB query, renders instantly
export const metadata: Metadata = {
  title: 'GTA 6 Release Date | Everything Confirmed So Far',
  description: '155 char description...',
  alternates: { canonical: 'https://www.objectwire.org/video-games/gta-6/release-date' },
  openGraph: { ... },
};
```

**Tier 2 — DB-backed metadata (news spokes only, acceptable):**
```tsx
// In a NewsArticleDB stub — one DB call total (content fetch + metadata merged)
export async function generateMetadata(): Promise<Metadata> {
  return generateArticleMetadata('my-slug', 'articles');
}
```

**Rule:** `generateArticleMetadata()` is only acceptable for `articles` table (news spokes). It must never be used for hubs, JackArticles, or any page that is supposed to be static.

### Upgrade: `wiki:publish` writes static metadata

When `wiki:publish` processes a JackArticle `.tsx` file, the script must:
1. Extract `title`, `description`, `openGraph`, `twitter` from the JSX
2. Write a hardcoded `export const metadata: Metadata = { ... }` block into the stub
3. Remove the `generateMetadata()` async function
4. Result: zero DB calls for metadata on every JackArticle page

---

## Canonical URL Rules (Non-Negotiable)

These rules exist because a canonical violation can tank an entire domain's impressions in 24 hours (confirmed April 22, 2026).

1. **Never add `<link rel="canonical">` to `app/layout.tsx` or any shared layout.**
2. Every `page.tsx` sets its own canonical via `metadata.alternates.canonical`.
3. The canonical URL must exactly match the `url` field in the Supabase row and the `content_registry` entry.
4. All canonical URLs must use `https://www.objectwire.org` (with www).
5. `scripts/validate-canonicals.ts` runs at `prebuild` and fails the build on violations.

---

## The Google Crawl Budget Protection Rules

These rules protect ObjectWire's crawl allocation. Violating them risks reduced crawl rate, deindexing of new articles, or impressions drops.

### Never do these

- `export const dynamic = 'force-dynamic'` on any hub or evergreen page
- Sequential Supabase probes (always use `Promise.all` if multiple tables must be checked)
- More than 1 Supabase query per page render (metadata + content = 2 queries = banned pattern)
- Static files in `/public` that shadow dynamic App Router handlers (`robots.txt`, `sitemap.xml`)
- Hardcoded canonicals in layouts
- 301 redirect chains longer than 1 hop
- Hub pages with no `metadata.alternates.canonical` set

### Always do these

- ISR (`revalidate = N`) on all content pages. Minimum 1 hour for news, 24 hours for evergreen.
- `Promise.all` for any parallel Supabase queries
- `export const dynamic = 'force-dynamic'` ONLY on: API routes, auth routes, the news-sitemap, and the admin panel
- Local JSON file read for registry lookups (never query `content_registry` at runtime for non-news pages)
- Test crawl behavior with `wiki:status` before pushing new hub structures

---

## Cross-Site Interlinking — ObjectWire ↔ owire.org

**owire.org** is ObjectWire's sister site. It covers entertainment, creators, influencers, and pop culture. Cross-linking between the two sites passes authority bidirectionally and helps each site rank for its respective keyword set.

### When to link to owire.org

| ObjectWire article topic | Link to owire.org |
|---|---|
| Entertainment (film, TV, streaming, HBO, Netflix, Disney) | `https://owire.org/entertainment` |
| Creator economy (MrBeast, TikTok creators, YouTube channels) | `https://owire.org/creators` |
| Gaming culture, esports personalities, streamers | `https://owire.org/gaming` |
| Athlete brands, sports personalities | `https://owire.org/sports` |
| Music artists, celebrity news | `https://owire.org/entertainment` |

**Do NOT cross-link for:** pure finance, crypto, tech policy, government news, or business articles with no entertainment/creator angle.

### How to add a cross-link

**Automatic (via `jack:enrich` script):**

The `scripts/enrich-jack-articles.ts` script auto-detects entertainment/creator articles using keyword matching and adds an `owire_link` object to the static JSON. `JackArticleDB` renders this as a `SisterSiteCallout` block above the article content.

Add new owire.org pages to the `OWIRE_LINK_MAP` array in the script as owire.org publishes more content.

**Manual (in `content_html` or JSX):**

```html
<!-- In content_html (raw HTML in Supabase or static JSON) -->
<p>
  For creator profiles and entertainment coverage, see our sister site
  <a href="https://owire.org/creators" target="_blank" rel="noopener noreferrer"
     class="text-blue-600 hover:text-blue-800 underline">
    owire.org
  </a>.
</p>
```

```tsx
// In JSX (hub pages or JackArticle static files)
import { SisterSiteLink, SisterSiteCallout } from '@/components/ui/SisterSiteLink';

// Inline link in prose
<SisterSiteLink href="https://owire.org/creators/mrbeast" label="MrBeast Creator Profile" context="Creator" />

// Full callout block at article bottom
<SisterSiteCallout
  heading="Creator Economy Coverage on owire.org"
  description="Full creator profiles, follower counts, and platform analysis."
  href="https://owire.org/creators"
/>
```

### owire.org link rules

- All owire.org links must be `target="_blank" rel="noopener noreferrer"`
- Use `https://owire.org` (no www)
- The `[owire]` badge on inline links is intentional — it signals to readers it's a sister site
- owire.org links in `content_html` use `class=` not `className=` (raw HTML rules apply)
- Never link to owire.org from within `<head>` metadata, canonical tags, or JSON-LD
- Cross-links should appear in article body or callout blocks — not in navigation or breadcrumbs

---

These upgrades are listed in order of priority. Do not skip steps. Complete each one fully before starting the next.

---

### Phase 1 — Stop the Bleeding (Do First)

**Status: Partially done**

- [x] Catch-all: `Promise.all` + `revalidate=3600`
- [x] Sitemap: uses local registry, zero Supabase
- [x] Prebuild validators: canonicals, public dir
- [ ] **Audit all hub pages for `force-dynamic`** — every hub using `force-dynamic` + `scanAllContent()` must be converted to static or ISR
- [ ] **Audit all pages using `generateArticleMetadata()`** — replace with hardcoded `metadata` exports on non-news pages
- [ ] **Remove `force-dynamic` from `app/trump/page.tsx`** and all other hub pages using it

**How to audit:**
```bash
grep -r "force-dynamic" app/ --include="*.tsx" -l
grep -r "generateArticleMetadata" app/ --include="*.tsx" -l
```

---

### Phase 2 — Migrate JackArticles to Static

**Goal:** Zero Supabase reads for JackArticle pages at runtime.

**Status: ✅ COMPLETE (May 4, 2026)**

`JackArticleDB` already had a static file fallback. All 89 existing JackArticle pages have corresponding JSON files in `content/static/jack_articles/`. The static layer was already the source of truth.

**What was completed this session:**

- `scripts/enrich-jack-articles.ts` — enriches all static JSON files with:
  - `breadcrumbs` — auto-generated from `article_url` path segments
  - `related_articles` — auto-selected from `content_registry.json` by category + tag scoring
  - `footer_links` — standard ObjectWire editorial nav
  - `owire_link` — owire.org cross-link for 13 entertainment/creator/sports articles
- 84 of 89 files were missing breadcrumbs/related articles — all now populated
- `JackArticleDB` updated to render `SisterSiteCallout` when `owire_link` field is present
- npm scripts added: `jack:enrich`, `jack:enrich-dry`, `jack:enrich-force`

**Re-run after publishing new JackArticles:**
```bash
npm run jack:enrich       # only updates empty fields
npm run jack:enrich-force # overwrites all fields (use after category changes)
```

**Static file fallback order in `JackArticleDB`:**
1. `content/static/jack_articles/[slug].json` → served instantly, zero DB
2. Supabase `jack_articles` table → fallback only if static file is missing

New articles: run `wiki:publish` to push to Supabase, then immediately run `jack:enrich` to create/update the static file. Once the static file exists, Supabase is never queried for that article again.

**Step 2.3 — Deprecate `JackArticleDB` for new articles**

- `JackArticleDB` remains for existing stubs — it works correctly via static files
- New articles MAY still use `JackArticleDB` as long as a static JSON file is created at publish time
- The `jack_articles` Supabase table is no longer the source of truth — static JSON is

Each JackArticle gets a `.ts` file:
```
content/jack/crypto-news-anchorage-usat-expands-to-celo-network.ts
content/jack/tech-nvidia-blackwell-supply-chain.ts
...
```

The content file exports a typed object matching the `JackArticle` component props:
```ts
// content/jack/your-slug.ts
import type { JackArticleProps } from '@/components/JackArticle';

const article: JackArticleProps = {
  slug: 'your-slug',
  title: '...',
  subtitle: '...',
  content: [ /* JackSection array */ ],
  sources: [ /* sources array */ ],
  // ...
};

export default article;
```

**Step 2.2 — Create static page stubs**

```tsx
// app/crypto/news/anchorage-usat-expands/page.tsx
import type { Metadata } from 'next';
import { JackArticle } from '@/components/JackArticle';
import article from '@/content/jack/crypto-news-anchorage-usat-expands-to-celo-network';

export const revalidate = 86400; // 24hr ISR — content changes are rare

export const metadata: Metadata = {
  title: article.metaTitle,
  description: article.metaDescription,
  alternates: { canonical: `https://www.objectwire.org${article.url}` },
  // ...
};

export default function Page() {
  return <JackArticle {...article} />;
}
```

**Step 2.3 — Deprecate `JackArticleDB` for new articles**

- `JackArticleDB` remains in the codebase for existing stubs during migration
- New articles never use `JackArticleDB`
- Once all existing stubs are migrated, `JackArticleDB` is deleted

**Step 2.4 — Run `wiki:status` to confirm no orphan Supabase-only JackArticle pages**

---

### Phase 3 — Hub Page Static Conversion

**Goal:** All top-20 traffic hubs render with zero Supabase at runtime.

**Hub list (priority order):**

| Hub | Current | Target |
|---|---|---|
| `/trump` | `force-dynamic` + `scanAllContent()` | Static ISR `revalidate=3600` |
| `/open-ai` | Unknown | Audit + convert |
| `/video-games/gta-6` | Unknown | Audit + convert |
| `/video-games` | Unknown | Audit + convert |
| `/google` | Unknown | Audit + convert |
| `/crypto` | Unknown | Audit + convert |
| `/nvidia` | Unknown | Audit + convert |
| `/entertainment` | Unknown | Audit + convert |
| `/tech` | Unknown | Audit + convert |
| `/finance` | Unknown | Audit + convert |

**Conversion pattern:**

Instead of `scanAllContent()` (dynamic filesystem scan), hubs use `getAllEntries()` from `registry-service.ts` (local JSON, instant) filtered by category or slug prefix:

```tsx
// Before (bad)
export const dynamic = 'force-dynamic';
const articles = await scanAllContent('/trump');

// After (good)
export const revalidate = 3600;
import { getAllEntries } from '@/lib/registry-service';
const allEntries = await getAllEntries();
const articles = allEntries.filter(e => e.slug.startsWith('/trump/'));
```

---

### Phase 4 — News-Sitemap Upgrade

**Goal:** New articles appear in Google News within minutes of publishing, not at next deploy.

**Current:** Queries `content_registry` (synced at build). Articles published between builds are invisible to Google News for hours.

**Upgrade:** Query `articles` table directly for the news-sitemap only.

```ts
// app/news-sitemap.xml/route.ts (upgraded)
const { data } = await supabase
  .from('articles')
  .select('url, title, published_at, tags, category')
  .eq('status', 'published')
  .gte('published_at', cutoff.toISOString())
  .order('published_at', { ascending: false });
```

This is the correct and only place where `force-dynamic` + Supabase is legitimate.

---

### Phase 5 — `wiki:publish` Static Metadata

**Goal:** Stubs for JackArticles and ArticlePages write hardcoded `metadata` blocks, not `generateMetadata()`.

**Change to `scripts/wiki-publish.ts`:**

When trimming a JackArticle or ArticlePage file to a stub:
1. Extract `title`, `description` from the JSX content
2. Generate the `metadata` object based on the article's fields
3. Write it as `export const metadata: Metadata = { ... }` — static, no async
4. Only `NewsArticleDB` stubs keep `export async function generateMetadata()`

Result: the only pages that fire a metadata Supabase query are `NewsArticleDB` stubs (news spokes), which is acceptable.

---

### Phase 6 — Evergreen Content Expansion

**Goal:** Every priority vertical has a JackArticle hub with 5+ static spokes before new news spokes are published.

**Target hub inventory (build in this order):**

| Vertical | Hub JackArticle Target | Spokes Target |
|---|---|---|
| GTA 6 | `/video-games/gta-6` — "GTA 6 Release Date, Story, and Everything Confirmed" | 8 news spokes |
| OpenAI | `/open-ai` — "OpenAI: GPT-5, Products, and Corporate Structure 2026" | 6 news spokes |
| Trump | `/trump` — "Trump 2026: Executive Orders, Tariffs, and Policy Tracker" | 10 news spokes |
| Nintendo Switch 2 | `/video-games/switch2` — "Nintendo Switch 2: Specs, Price, and Launch Library" | 5 news spokes |
| Nvidia | `/nvidia` — "Nvidia Blackwell: GPU Architecture and Supply Chain 2026" | 5 news spokes |
| Crypto | `/crypto` — "Crypto 2026: Bitcoin, Ethereum, and Regulatory Landscape" | 6 news spokes |
| World Cup 2026 | `/world-cup` — "2026 FIFA World Cup: Schedule, Groups, and Host Cities" | 8 news spokes |
| Winter Olympics | `/winter-olympics` — "2026 Winter Olympics: Events, Athletes, and Schedule" | 5 news spokes |

Each hub JackArticle must:
- Be a static file (Phase 2 pattern)
- Have breadcrumbs: Home → Vertical → Hub Article
- Link to all published spokes
- Be linked from the vertical hub page (e.g. `/trump` links to the JackArticle)
- Have `NewsArticleSchema` JSON-LD
- Target the exact head keyword for the vertical (5M+ monthly searches)

---

## File Structure After Full Implementation

```
app/
  trump/
    page.tsx                        ← Hub page. Static ISR. No Supabase.
    executive-orders/
      page.tsx                      ← JackArticle hub. Static file.
      [news-spokes]/
        page.tsx                    ← NewsArticleDB spokes. Supabase ISR.
  video-games/
    gta-6/
      page.tsx                      ← Hub. Static ISR.
      release-date/
        page.tsx                    ← JackArticle hub. Static file.
        [news-spokes]/
          page.tsx                  ← NewsArticleDB spokes.

content/
  jack/
    trump-executive-orders-2026.ts  ← JackArticle data file
    gta-6-release-date-confirmed.ts
    openai-gpt5-features-2026.ts
    ...

components/
  JackArticle.tsx                   ← Static JSX component (existing)
  JackArticleDB.tsx                 ← DEPRECATED — kept for migration only
```

---

## Monitoring and Validation

### Before every deploy

```bash
npm run prebuild   # runs validate-canonicals + validate-public + sync-registry
npm run wiki:status  # shows sync state: filesystem vs registry vs Supabase
```

### Weekly checks

- Google Search Console: Impressions trend, crawl stats, coverage errors
- `scripts/audit-internal-links.ts` — find orphan pages with no inbound links
- `scripts/audit-metadata.ts` — flag pages missing canonical, OG image, or description

### Red flags that indicate Supabase over-querying

- Supabase dashboard: connection pool usage above 60% during Googlebot crawl window (2am-6am UTC)
- Next.js logs: slow TTFB on article pages (>800ms = likely DB bottleneck)
- Google Search Console: "Server errors (5xx)" spike correlates with crawl burst

### Crawl budget health indicators

- All hub pages: TTFB < 200ms (served from ISR cache, no DB)
- All news spokes: TTFB < 600ms (ISR cache hit), < 2s (cache miss, Supabase fetch)
- Sitemap: returns in < 500ms (local JSON, no DB)
- News-sitemap: returns in < 1.5s (live Supabase query, acceptable)

---

## Summary: The New Rules in One Place

```
Hub pages          →  static file or ISR, zero Supabase, revalidate >= 3600
JackArticles       →  static content files, zero Supabase at runtime
NewsArticles       →  Supabase articles table, ISR revalidate=3600
CreatorArticles    →  Supabase creator_articles, ISR revalidate=3600
Sitemap            →  local registry JSON, zero Supabase, revalidate=86400
News-sitemap       →  Supabase articles table, force-dynamic, 15min CDN cache
Metadata (hubs)    →  hardcoded export const metadata, no async, zero DB
Metadata (news)    →  generateArticleMetadata() acceptable, one DB call max
Canonicals         →  every page.tsx sets its own, never in layout.tsx
force-dynamic      →  API routes, auth, news-sitemap, admin only
```

---

*AlfasaAutoSEO v2.0 — ObjectWire internal architecture document. Do not publish publicly.*
