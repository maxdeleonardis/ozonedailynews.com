# Supabase Library — ObjectWire

> **How articles written in `/admin/editor` go from input to live page, and how it scales to 1000+ articles without a single extra file.**

Related: [googlenews-seo.md](googlenews-seo.md) — How the two content systems drive Google News placement and topical authority.

---

## Table of Contents

1. [The Big Picture](#1-the-big-picture)
2. [Database Schema](#2-database-schema)
3. [Block Content System](#3-block-content-system)
4. [Server Client](#4-server-client)
5. [Blog Service API](#5-blog-service-api)
6. [The Admin Editor](#6-the-admin-editor)
7. [The Public Article Page](#7-the-public-article-page)
8. [Row Level Security (RLS)](#8-row-level-security-rls)
9. [Static Pages vs Dynamic Articles](#9-static-pages-vs-dynamic-articles)
10. [How to Add a New Article](#10-how-to-add-a-new-article)
11. [Environment Variables](#11-environment-variables)
12. [Useful Commands](#12-useful-commands)

---

## 1. The Big Picture

ObjectWire runs **two parallel content systems**. Knowing which to use is the most important publishing decision:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  TIER 1 — STATIC REGISTRY PAGES         TIER 2 — SUPABASE ARTICLES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  app/**/page.tsx                         /blog/[slug]  (one route)
  + lib/content-registry.ts              + Supabase `articles` table

  Purpose: Topical authority anchors      Purpose: News velocity
  Examples: /technology/cursor            Examples: Daily briefings,
            /entertainment/hulu                     breaking news,
            /authors/jack-wang                      event coverage

  Edit: Code change + deploy              Edit: /admin/editor (no deploy)
  Scale: ~1,500 pages comfortably         Scale: Unlimited rows
  News sitemap: content-registry.ts       News sitemap: published_at column
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Supabase write/read path (Tier 2):**

```
WRITE PATH
──────────
  /admin/editor  →  createBlogPost()  →  Supabase `articles` table

READ PATH
─────────
  /blog/[slug]  →  createClient()  →  `articles` table  →  ArticleRenderer  →  HTML
```

There is **one** dynamic route ([`app/blog/[slug]/page.tsx`](app/blog/[slug]/page.tsx)) that handles every Supabase article. Zero extra files per article. At 1,000 articles the build still produces the same number of route files — only the Supabase rows grow.

> For the full Google News SEO strategy — how both tiers feed the news sitemap, `NewsArticleSchema` structured data, and crawl priority — see [googlenews-seo.md](googlenews-seo.md).

---

## 2. Database Schema

**Table: `articles`** — defined in [`supabase/setup.sql`](supabase/setup.sql)

| Column | Type | Notes |
|---|---|---|
| `id` | `UUID` | Auto-generated primary key |
| `slug` | `TEXT UNIQUE` | URL path, e.g. `iran-cyber-attacks-march-2026` → lives at `/blog/iran-cyber-attacks-march-2026` |
| `title` | `TEXT` | Article headline |
| `excerpt` | `TEXT` | Used for meta description + card previews |
| `content` | `JSONB` | Array of content blocks (see §3) |
| `category` | `TEXT` | E.g. `Technology`, `News`, `Entertainment` |
| `author` | `TEXT` | Byline display name |
| `featured` | `BOOLEAN` | Appears in homepage hero when `true` |
| `status` | `TEXT` | `'draft'` or `'published'` — controls visibility |
| `published_at` | `TIMESTAMPTZ` | `NULL` = draft; set to `NOW()` when published |
| `created_at` | `TIMESTAMPTZ` | Auto-set on insert |
| `updated_at` | `TIMESTAMPTZ` | Auto-updated by trigger on every `UPDATE` |
| `image_url` | `TEXT` | Hero / OG image URL |
| `view_count` | `INTEGER` | Incremented by `increment_view_count()` SQL function |

**Indexes** (for performance at scale):

```sql
idx_articles_slug          -- fast single-article lookups
idx_articles_category      -- category page filtering
idx_articles_published_at  -- chronological feeds
idx_articles_featured      -- homepage featured slot
idx_articles_status        -- draft/published split
```

---

## 3. Block Content System

`content` is a **JSONB array of blocks**. This is the entire article body — structured, not raw HTML. The admin editor builds this array; `ArticleRenderer` turns it into HTML.

### Block Types

Every block has at minimum `{ "id": "...", "type": "..." }`.

| `type` | What it renders | Key fields |
|---|---|---|
| `paragraph` | `<p>` — supports bold/italic/link inline | `content: string` |
| `heading` | `<h2>` | `content: string` |
| `quote` | Styled blockquote with left border | `content: string`, `author?: string` |
| `list` | `<ul>` bullet list | `items: string[]` |
| `code` | Monospace code block | `content: string`, `language?: string` |
| `image` | Full-width image | `url: string`, `alt: string`, `caption?: string` |
| `divider` | `<hr>` section break | _(no extra fields)_ |
| `highlight` | Coloured callout box | `content: string`, `variant: 'info'│'warning'│'success'` |
| `stat-grid` | Row of metric cards | `stats: { label, value, change? }[]` |
| `timeline` | Vertical event list | `events: { date, title, description }[]` |
| `table` | Data table | `headers: string[]`, `rows: string[][]` |
| `embed` | YouTube / iframe embed | `url: string` |

### Example `content` value stored in Supabase

```json
[
  { "id": "1", "type": "heading",   "content": "Why This Deal Matters" },
  { "id": "2", "type": "paragraph", "content": "The $110B acquisition marks..." },
  { "id": "3", "type": "stat-grid", "stats": [
      { "label": "Deal Value",    "value": "$110B" },
      { "label": "Closing Date",  "value": "Q3 2026" }
  ]},
  { "id": "4", "type": "quote",     "content": "This is a once-in-a-generation...", "author": "CEO, Skydance" }
]
```

---

## 4. Server Client

**File:** [`lib/supabase/server.ts`](lib/supabase/server.ts)

```ts
import { createClient as createSupabaseClient } from '@supabase/supabase-js';

export async function createClient() {
  // Reads NEXT_PUBLIC_SUPABASE_URL + NEXT_PUBLIC_SUPABASE_ANON_KEY from .env.local
  return createSupabaseClient(url, key);
}
```

- Async so callers can `await createClient()` uniformly across server components and API routes.
- Uses the **anon key** — RLS policies on the table gate what can actually be read or written (see §8).
- Import path: `@/lib/supabase/server`

---

## 5. Blog Service API

**File:** [`lib/blog-service.ts`](lib/blog-service.ts)

This is the only place that touches Supabase directly. All other code calls these functions.

### Read functions

```ts
getAllBlogPosts()
// Returns every article (draft + published) — used by /admin/dashboard
// → BlogPost[]

getPublishedBlogPosts()
// Returns only published articles, sorted by published_at DESC
// → BlogPost[]

getBlogPostBySlug(slug: string)
// Single article by URL slug — used by /blog/[slug]
// → BlogPostFull | null

getBlogPostById(id: string)
// Single article by UUID — used by /admin/editor/[id]
// → BlogPostFull | null
```

### Write functions

```ts
createBlogPost(post: Partial<BlogPostFull>)
// Called by /admin/editor on first Save/Publish
// Sets status, published_at, auto-generates slug from title if not provided
// → BlogPost (returns id + slug on success)

updateBlogPost(id: string, post: Partial<BlogPostFull>)
// Called by /admin/editor/[id] on re-save
// Sets updated_at automatically
// → BlogPost

deleteBlogPost(id: string)
// Called by /admin/dashboard delete button
// → void
```

### Helper functions

```ts
generateSlug(title: string)
// "My Hero Ultra Rumble" → "my-hero-ultra-rumble"
// Lowercases, removes special chars, trims dashes

calculateReadTime(blocks: ArticleBlock[])
// Counts words across all text blocks, divides by 200 (avg WPM)
// Returns minutes as a number
```

### Internal mapper: `toSupabaseRow()`

Translates the block-editor payload into the flat Supabase column shape:

```ts
{
  title, slug, excerpt, author, category,
  content: post.blocks,    // blocks[] → JSONB
  image_url: post.featured_image,
  status,
  published_at: status === 'published' ? new Date().toISOString() : null,
}
```

---

## 6. The Admin Editor

**Route:** `/admin/editor` → [`app/(admin)/admin/editor/page.tsx`](app/(admin)/admin/editor/page.tsx)  
**Edit existing:** `/admin/editor/[id]` → [`app/(admin)/admin/editor/[id]/page.tsx`](app/(admin)/admin/editor/[id]/page.tsx)

The editor is a `'use client'` Next.js page. It:

1. Lets you set title, slug, excerpt, author, category, featured image
2. Builds the `blocks[]` array visually — add/remove/reorder blocks by type
3. Supports a **sidebar** (`sidebar_blocks[]`) for a 2-column layout
4. On **Save Draft** → calls `createBlogPost({ ..., status: 'draft' })`
5. On **Publish** → calls `createBlogPost({ ..., status: 'published' })` which sets `published_at = NOW()`

After saving, it redirects to `/admin/dashboard`.

---

## 7. The Public Article Page

**Route:** `/blog/[slug]` → [`app/blog/[slug]/page.tsx`](app/blog/[slug]/page.tsx)

```ts
const supabase = await createClient();
const { data: article } = await supabase
  .from('articles')
  .select('*')
  .eq('slug', slug)
  .eq('status', 'published')   // ← only published articles reach readers
  .single();

if (!article) notFound();      // → 404 if draft or missing

return <ArticleRenderer blocks={article.content} />;
```

`ArticleRenderer` ([`components/article-renderer.tsx`](components/article-renderer.tsx)) maps each block in `content` to a React component. You never write any rendering code per article — the renderer handles all block types automatically.

### SEO / Metadata

`generateMetadata()` in the same file queries the `title` and `excerpt` columns to populate `<title>` and `<meta name="description">` for Google.

---

## 8. Row Level Security (RLS)

Defined in [`supabase/setup.sql`](supabase/setup.sql). RLS runs on Supabase's Postgres — it filters rows before they leave the database, so even if someone calls the API directly they can't access drafts.

| Operation | Who | Policy |
|---|---|---|
| `SELECT` | Public (anyone) | Only rows where `status = 'published'` |
| `INSERT` | Anon key | Allowed (the admin editor uses the anon key) |
| `UPDATE` | Anon key | Allowed |
| `DELETE` | Anon key | Allowed |

> **Note:** The anon write policies are intentionally open right now — the admin is protected by the session check in `middleware.ts` before requests even reach Supabase. Harden this by switching to `authenticated` role + Supabase Auth when you add real user accounts.

---

## 9. Static Pages vs Dynamic Articles

ObjectWire uses **two content systems** — know when to use each:

| | Static `page.tsx` files | Supabase `articles` table |
|---|---|---|
| **Location** | `app/**/page.tsx` | `/blog/[slug]` (one route handles all) |
| **Registered in** | `lib/content-registry.ts` | Not in registry — separate sitemap feed |
| **Edit workflow** | Code change + deploy | `/admin/editor` — no deploy needed |
| **Best for** | Hub pages, author profiles, evergreen reference, interlinked topic pages | Breaking news, daily editorial, event coverage, opinion |
| **At 1,000 pages** | Build time grows; registry file bloats | No build impact — rows are just data |
| **Google News sitemap** | `publishDate` in registry entry | `published_at` column in DB |
| **Scale ceiling** | ~1,500 pages before build pain | Unlimited |
| **Custom layouts** | Full React component control | Block renderer (14 block types) |

**Rule of thumb:** Anything you write more than once a week belongs in Supabase. Static registry pages are for structured hub pages that anchor topical authority and get cited permanently.

### Migration trigger — move to Supabase when:
- Publishing 5+ articles per day
- Registry file exceeds ~10,000 lines (~1,500 entries)
- Build time exceeds 3 minutes
- You need to publish or edit without a code deploy

### What stays in the registry permanently
- Author profile pages (`/authors/*`)
- Topic hub pages (`/technology`, `/entertainment/hulu`)
- Company and product profiles (`/technology/cursor`, `/open-ai`)
- Evergreen reference pages (`/define/*`)
- Site structure pages (about, privacy, team, sitemap)

> See [googlenews-seo.md § 4 — The Two-Tier Content Strategy](googlenews-seo.md#4-the-two-tier-content-strategy) for the full decision framework and the competitive case for splitting content this way.

---

## 10. How to Add a New Article

### Via the admin editor (recommended)

1. Go to `/admin/editor`
2. Fill in title, slug, excerpt, author, category
3. Add blocks to build the body
4. Choose **Save Draft** or **Publish**
5. If published, it's live at `/blog/[your-slug]` immediately

### Via SQL (bulk import / migration)

```sql
INSERT INTO articles (slug, title, excerpt, content, category, author, status, published_at, image_url)
VALUES (
  'my-article-slug',
  'My Article Title',
  'Short summary for meta description.',
  '[{"id":"1","type":"paragraph","content":"First paragraph..."}]',
  'Technology',
  'Jane Smith',
  'published',
  NOW(),
  '/images/my-article.jpg'
);
```

---

## 11. Environment Variables

Add to `.env.local` (never commit this file):

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOi...
```

Get both from: **Supabase Dashboard → Project Settings → API**

---

## 12. Useful Commands

```bash
# Push migrations to live Supabase project
npm run supabase:push

# Generate TypeScript types from DB schema
npm run supabase:types

# Run setup.sql manually (Supabase Dashboard → SQL Editor)
# Copy/paste contents of supabase/setup.sql

# View all articles in DB (Supabase Dashboard → Table Editor → articles)

# Auto-sync content registry before build (runs automatically via prebuild)
npx tsx scripts/sync-registry.ts --write
```

---

## File Map

```
lib/
  supabase/server.ts              ← Supabase client factory
  blog-service.ts                 ← All DB read/write functions
  content-registry.ts             ← Static page metadata (Tier 1)

app/
  blog/[slug]/page.tsx            ← Public article page (ONE file, infinite articles)
  news-sitemap.xml/route.ts       ← Google News sitemap — reads registry + DB
  sitemap.ts                      ← Full site sitemap — reads registry
  robots.ts                       ← Googlebot rules, sitemap links
  (admin)/
    admin/editor/page.tsx         ← Create new Supabase article
    admin/editor/[id]/page.tsx    ← Edit existing Supabase article
    admin/dashboard/page.tsx      ← List all articles

components/
  article-renderer.tsx            ← Renders blocks[] → HTML
  DynamicNewsArticle.tsx          ← NewsArticle shell for DB-driven content
  NewsArticleSchema.tsx           ← Emits NewsArticle JSON-LD structured data
  SEOWrapper.tsx                  ← Emits BreadcrumbList JSON-LD, reads registry

supabase/
  setup.sql                       ← Full table + RLS setup (run in SQL Editor)
  migrations/
    20260110070138_create_articles_table.sql
    20260113000000_create_blog_posts.sql

Docs/
  supabase-library.md             ← This file — Supabase pipeline reference
  googlenews-seo.md               ← Google News SEO strategy + registry reference
```
