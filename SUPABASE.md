# ObjectWire — Supabase Reference
**Last updated:** March 26, 2026  
**Production:** Railway → `Autolab350/Objectwire-Frontend` main → `objectwire.org`  
**Supabase:** `https://kzcwclprrtonpsnownbl.supabase.co`

---

## 1. Current State (March 26, 2026)

| System | Status |
|---|---|
| `lib/supabase/server.ts` — server client | ✅ Done |
| `lib/supabase/client.ts` — browser client | ✅ Done |
| `lib/blog-service.ts` — CRUD layer | ✅ Done |
| `lib/registry-service.ts` — async registry reads from DB | ✅ Done |
| `articles` table + schema | ✅ Live in Supabase |
| `jack_articles` table + schema | ✅ Live in Supabase |
| `article_pages` table + schema | ✅ Live in Supabase |
| `content_registry` table + schema | ✅ Live — migrated March 26 (465 entries) |
| `components/NewsArticleDB.tsx` | ✅ SSR — queries `articles` by slug |
| `components/JackArticleDB.tsx` | ✅ SSR — queries `jack_articles` by slug |
| `components/ArticlePageDB.tsx` | ✅ SSR — queries `article_pages` by slug |
| `app/blog/[slug]/page.tsx` — two-step fetch | ✅ Upgraded March 26 — registry → articles |
| `scripts/migrate-registry.ts` + `npm run registry:migrate` | ✅ Done March 26 |
| SSR "View Source" test | ✅ All articles deliver full HTML to Googlebot |
| `npm run build` — 793/793 pages, 0 errors | ✅ Passing |
| ISR (`revalidate`) on finalized articles | ⏳ Pending — still on `force-dynamic` |
| `wiki:status` diagnostic script | ⏳ Not built yet |
| `wiki:publish` unified pipeline command | ⏳ Not built yet |
| On-demand revalidation via Supabase webhook | ⏳ Phase 3 future task |

---

## 2. Architecture

### Table Routing

Every article belongs to exactly one table. Routing is determined by which component the page uses:

| Component | Table | Use Case |
|---|---|---|
| `NewsArticle` → `NewsArticleDB` | `articles` | News, breaking, gaming, tech, features |
| `JackArticle` → `JackArticleDB` | `jack_articles` | Research reports, investigations, long-form |
| `ArticlePage` → `ArticlePageDB` | `article_pages` | Profiles, wiki-style, evergreen guides |
| `blog/[slug]/page.tsx` | `articles` (+ `content_registry`) | Admin-editor articles, `npm run content:publish` |

### SSR Pipeline

All article fetching happens server-side. Zero client-side Supabase calls in page components.

```
Request → page.tsx (Next.js Server Component)
  export const dynamic = 'force-dynamic'
  return <NewsArticleDB slug="my-slug" />
        ↓
  NewsArticleDB.tsx (async Server Component)
    const supabase = await createClient()
    const { data } = await supabase.from('articles').select('*').eq('slug', slug)
        ↓
  NewsArticle.tsx (presentational — 'use client' for interactions only)
    <article itemScope itemType="https://schema.org/NewsArticle">
      <div dangerouslySetInnerHTML={{ __html: row.content_html }} />
    </article>
        ↓
  Response: complete HTML — Googlebot sees full article on first byte ✅
```

### Slug Format

Slugs for `wiki:migrate` articles are formed from the directory path:
```
app/trump/foo/page.tsx           → trump-foo
app/copyright/news/bar/page.tsx  → copyright-news-bar
```

Slugs for `content/articles/*.ts` articles are set manually in the file and match the URL path minus the leading slash.

### content_registry vs articles

| | `content_registry` | `articles` |
|---|---|---|
| Purpose | SEO metadata, sitemap, JSON-LD routing | Article body content |
| Who writes it | `sync-registry.ts` auto-generate + manual hydration, or `registry:migrate` | `content:publish` script or `wiki:migrate` |
| Drives | `SEOWrapper`, `sitemap.ts`, `news-sitemap.xml`, feeds | `blog/[slug]/page.tsx`, `NewsArticleDB` |
| Row count | 465 (March 26) | Grows with each published article |

---

## 3. Writing and Publishing Articles

### Three Workflows

**Workflow A — `content/articles/*.ts` → `npm run content:publish`**  
Best for: news articles, features, anything using `NewsArticle` layout.

```bash
# 1. Copy template
cp content/articles/_template.ts content/articles/[category]/your-slug.ts

# 2. Fill in fields, write content_html
# Minimum required: title, slug, category, status: 'published', content_html

# 3. Dry run
npm run content:dry-run

# 4. Publish
npm run content:publish
```

The article lands in the `articles` table and is live at `objectwire.org/blog/your-slug`.

---

**Workflow B — Write inline in `page.tsx` → `wiki:migrate` → `wiki:trim`**  
Best for: existing static pages being migrated to DB-backed rendering.

```bash
npm run wiki:migrate              # extract JSX → HTML → Supabase (ALWAYS first)
npm run wiki:trim                 # replace full file with 3-line stub (ALWAYS second)
npm run registry:write            # add missing entries to content_registry
```

⚠️ **Critical rule:** Always `wiki:migrate` BEFORE `wiki:trim`. Trim first = no Supabase row = 404 in production.

---

**Workflow C — `/admin/editor` UI**  
Exists at `/admin/editor`. Not the primary workflow. Use only for quick edits or non-developer contributors. Articles appear in `articles` table with `status: 'draft'` until published.

---

### Article Fields — `articles` table

| Column | Type | Required | Notes |
|---|---|---|---|
| `slug` | TEXT | ✅ | URL path slug — no leading slash |
| `title` | TEXT | ✅ | Full headline |
| `subtitle` | TEXT | — | Deck / subheadline |
| `category` | TEXT | ✅ | e.g. `Gaming`, `Tech`, `Finance` |
| `category_color` | TEXT | — | `red` `blue` `green` `purple` `orange` |
| `topic_tag` | TEXT | — | `technology` `news` `finance` `gaming` `crypto` `ai` `politics` etc. |
| `publish_date` | TEXT | ✅ | Display string: `"March 18, 2026"` |
| `published_at` | TIMESTAMPTZ | — | ISO for sorting: `2026-03-18T18:00:00Z` |
| `status` | TEXT | ✅ | `'draft'` or `'published'` |
| `content_html` | TEXT | ✅ | Full HTML body — rendered by NewsArticleDB |
| `read_time` | TEXT | — | `"6 min read"` |
| `author_name` | TEXT | — | `"Conan Boyle"` |
| `author_role` | TEXT | — | `"Gaming Reporter"` |
| `author_slug` | TEXT | — | `"conan-boyle"` → links to `/authors/conan-boyle` |
| `author_bio` | TEXT | — | Short bio sentence |
| `author_avatar` | TEXT | — | `/authors/conan-boyle.jpg` |
| `author_twitter` | TEXT | — | `"@conanboyle"` |
| `hero_image_src` | TEXT | — | `/fortnite/fortnite-vbucks.jpg` |
| `hero_image_alt` | TEXT | — | Alt text |
| `hero_image_caption` | TEXT | — | Caption below hero |
| `hero_image_credit` | TEXT | — | Photo credit |
| `thumbnail_src` | TEXT | — | Card thumbnail if different from hero |
| `tags` | TEXT[] | — | `['AI', 'layoffs', 'california']` |
| `trending` | BOOLEAN | — | Show in trending section |
| `featured` | BOOLEAN | — | Pin at top of homepage feed |
| `breaking` | BOOLEAN | — | Red "BREAKING" badge |
| `exclusive` | BOOLEAN | — | "EXCLUSIVE" badge |
| `url` | TEXT | — | Canonical path override e.g. `/california/my-article` |

**Note:** `jack_articles` has **no `status` column**. Never query `status` from `jack_articles` — Supabase will error.

---

### content_registry Fields

| Column | Type | Notes |
|---|---|---|
| `slug` | TEXT PK | Full path e.g. `/california/...` |
| `title` | TEXT | Page title used in JSON-LD and `<title>` |
| `description` | TEXT | Meta description — max 160 chars |
| `publish_date` | TIMESTAMPTZ | Used for sitemap `lastmod` and OG `publishedTime` |
| `modified_date` | TIMESTAMPTZ | Used for OG `modifiedTime` |
| `category` | TEXT | Primary section label |
| `tags` | TEXT[] | Topic tags for related-article matching |
| `author` | TEXT | Byline display name |
| `author_slug` | TEXT | e.g. `conan-boyle` |
| `priority` | NUMERIC | Sitemap priority 0.0–1.0 |
| `change_frequency` | TEXT | `daily` `weekly` `monthly` etc. |
| `featured` | BOOLEAN | Homepage hero/featured slot |
| `component_type` | TEXT | `standard_article` (default) |
| `image_url` | TEXT | OG / hero image |
| `image_width` / `image_height` | INTEGER | Required for Google Top Stories (min 1200×675) |
| `image_alt` | TEXT | Alt text for hero |
| `image_credit` | TEXT | Attribution string |

---

## 4. Live Scripts Reference

| Command | What it does |
|---|---|
| `npm run content:publish` | Push `content/articles/*.ts` → Supabase `articles` |
| `npm run content:dry-run` | Preview — no writes |
| `npm run registry:migrate` | Upsert all `contentRegistry` entries → Supabase `content_registry` |
| `npm run registry:migrate-dry` | Preview registry migration |
| `npm run registry:sync` | Scan `app/**/page.tsx` → detect missing registry entries (dry run) |
| `npm run registry:write` | Same but writes stubs to `lib/content-registry.ts` |
| `npm run wiki:migrate` | Extract inline page JSX → HTML → Supabase (run BEFORE trim) |
| `npm run wiki:trim` | Replace full `page.tsx` with 3-line DB stub (run AFTER migrate) |
| `npm run wiki:sync` | Full bidirectional sync: migrate + trim + delete orphans |
| `npm run build` | Next.js build — currently 793/793 pages, 0 errors ✅ |

---

## 5. `blog/[slug]/page.tsx` — Two-Step Fetch (March 26 upgrade)

`app/blog/[slug]/page.tsx` now performs a two-step fetch on every request:

1. **STEP A** — query `content_registry` for `component_type`, `title`, `image_url` using the full slug `/blog/${slug}`
2. **STEP B** — query `articles` for the full row, gated to `status = 'published'`

**`component_type` dispatch:**
| Value | Renderer |
|---|---|
| `standard_article` (default) | `ArticleRenderer` — renders `blocks[]` (admin-editor format) |
| `news_article` | `dangerouslySetInnerHTML` on `content_html` |

**`generateMetadata` now emits:**
- Canonical URL: `https://www.objectwire.org/blog/${slug}`
- `openGraph.publishedTime` from `content_registry.publish_date`
- `openGraph.modifiedTime` from `content_registry.modified_date`  
- `openGraph.images` from `content_registry.image_url`
- Falls back to `articles` table if slug not in registry

---

## 6. Known Issues & Gotchas

| Issue | Fix |
|---|---|
| `jack_articles` has no `status` column | Only `SELECT slug` — never `SELECT slug, status` |
| Curly apostrophes break TypeScript strings | Use `\u2019` or straight quotes |
| Top-level `await` in `.tsx` files | Wrap in `async function main() {} ; main()` |
| No `public/amazon/` image folder | Use `entertainment/christian-wiediger-rymh7EZPqRs-unsplash.jpg` for Amazon articles |
| Tencent thumbnail has trailing space | `/default/Tencent embeds OpenClaw .png` — copy exactly |
| AOC thumbnail has uppercase extension | `/default/aoc.PNG` — Linux is case-sensitive on Railway |
| `content_registry` `trending` column | Does NOT exist in table — `trending` is only in `content-registry.ts` TS type |

---

## 7. What Is Left To Do

### High Priority

**A — ISR on finalized articles**  
Six March 24 batch articles are still on `force-dynamic`. Switch to `revalidate = 3600` for CDN caching:

| File | Table |
|---|---|
| `app/trump/ice-arrest-sfo-airport-nationwide-deployment/page.tsx` | jack_articles |
| `app/trump/trump-ice-agents-drop-masks-airports/page.tsx` | articles |
| `app/technology/tencent-openclaw-ai-agent-wechat/page.tsx` | jack_articles |
| `app/blackrock/blackrock-fidelity-bought-400m-bitcoin-golds-worst-weekly-drop/page.tsx` | articles |
| `app/copyright/news/aoc-mlb-polymarket-gambling-warning/page.tsx` | jack_articles |
| `app/amazon/news/amazon-acquires-fauna-robotics-sprout-humanoid/page.tsx` | articles |

```bash
# After editing:
git commit -m "perf: switch March 24 articles to ISR revalidate=3600"
git push origin main
```

**B — Deploy current changes**
```bash
git add -A
git commit -m "feat: content_registry in Supabase, two-step blog fetch, registry:migrate script"
git push origin main
```

---

### Medium Priority

**C — `wiki:status` diagnostic script**  
`scripts/wiki-status.ts` — not yet built. Would scan `app/**/page.tsx`, check `content_registry`, and query all three Supabase tables in one pass, printing a CLI table:

```
PATH                                    FILE   REGISTRY  SUPABASE
app/trump/ice-arrest-sfo/page.tsx       STUB   ✅        ✅
app/blackrock/page.tsx                  FULL   ❌        —
```

Add to `package.json`: `"wiki:status": "npx tsx scripts/wiki-status.ts"`

**D — `wiki:publish` unified command**  
`scripts/wiki-publish.ts` — replaces the three-step `migrate → register → trim` sequence with one atomic command. Validates thumbnail exists before writing, restores from `.bak` on failure.

Add to `package.json`: `"wiki:publish": "npx tsx scripts/wiki-publish.ts -- --file app/..."`

---

### Low Priority / Future

**E — On-demand revalidation via Supabase webhook**  
When an article is updated in Supabase, instantly flush the CDN cache for that path. Requires:
1. `app/api/revalidate/route.ts` — calls `revalidatePath(path)`, protected by `REVALIDATION_SECRET`
2. Supabase Database Webhook on `articles` UPDATE → `POST https://objectwire.org/api/revalidate`
3. Add `REVALIDATION_SECRET` to Railway environment variables

**F — Google News sitemap ping after each publish**  
Run `npm run sitemap:ping` after each `content:publish` or `registry:migrate` to notify Google/Bing of updated sitemaps.

---

## 8. Rendering Strategy Reference

| Page Type | Strategy | Why |
|---|---|---|
| Breaking news (live story) | `force-dynamic` | Always fresh from Supabase |
| Published articles (finalized) | `revalidate = 3600` | CDN-cached HTML — fastest for Google News |
| Index / category pages | `revalidate = 1800` | Semi-fresh, low crawl cost |
| ArticlePage / wiki pages | `revalidate = 86400` | Rarely changes, maximum speed |
| Admin / account pages | Client-side only | Not indexed — SSR not needed |

---

## 9. Infrastructure Files

| File | Purpose |
|---|---|
| `lib/supabase/server.ts` | Async server client (anon key + dev write logging) |
| `lib/supabase/client.ts` | Browser client (anon key) |
| `lib/blog-service.ts` | All `articles` table CRUD functions |
| `lib/registry-service.ts` | Async `content_registry` reads — replaces static TS array at runtime |
| `lib/content-registry.ts` | TypeScript metadata array (465 entries) + `ContentEntry` type |
| `scripts/publish-content.ts` | Push `content/articles/*.ts` → `articles` table |
| `scripts/migrate-registry.ts` | Upsert `contentRegistry` → `content_registry` table |
| `scripts/migrate-wiki-content.ts` | Extract inline page JSX → `articles` / `jack_articles` |
| `scripts/trim-wiki-pages.ts` | Replace full `page.tsx` with 3-line stub |
| `scripts/sync-registry.ts` | Auto-detect and write missing `contentRegistry` stubs |
| `scripts/push-articles-to-supabase.ts` | One-time migration (184 legacy articles) |
| `components/NewsArticleDB.tsx` | Server component — queries `articles` by slug |
| `components/JackArticleDB.tsx` | Server component — queries `jack_articles` by slug |
| `components/ArticlePageDB.tsx` | Server component — queries `article_pages` by slug |
| `app/blog/[slug]/page.tsx` | Public article route — two-step registry + articles fetch |
| `sql/content_registry.sql` | Live Supabase schema definition for `content_registry` |
| `supabase/migrations/` | Migration history |
