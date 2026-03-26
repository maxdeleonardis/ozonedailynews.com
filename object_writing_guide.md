# ObjectWire Writing & Publishing Guide

**Last updated:** March 26, 2026  
**Production:** Railway → `objectwire.org`  
**Supabase:** `https://kzcwclpurrtonpsnownbl.supabase.co`

---

## Table of Contents

1. [How Articles Work (The SSR Pipeline)](#1-how-articles-work-the-ssr-pipeline)
2. [Article Components — Which One to Use](#2-article-components--which-one-to-use)
3. [Writing & Publishing a NewsArticle (Supabase)](#3-writing--publishing-a-newsarticle-supabase)
4. [Writing a JackArticle (Supabase)](#4-writing-a-jackarticle-supabase)
5. [Slug Format Rules](#5-slug-format-rules)
6. [Content Registry — SEO & Sitemap](#6-content-registry--seo--sitemap)
7. [Authors](#7-authors)
8. [Available Topic Tags & Category Colors](#8-available-topic-tags--category-colors)
9. [Content Block Types](#9-content-block-types)
10. [npm Scripts Reference](#10-npm-scripts-reference)
11. [Rendering Strategy by Page Type](#11-rendering-strategy-by-page-type)
12. [The "View Source" Test](#12-the-view-source-test)
13. [Complete Publish Checklist](#13-complete-publish-checklist)

---

## 1. How Articles Work (The SSR Pipeline)

ObjectWire uses **Next.js Server Components + Supabase** to deliver fully-rendered HTML to every reader and to Googlebot — no JavaScript required to read an article.

### What happens when someone visits an article URL

```
Reader / Googlebot → objectwire.org/california/california-tech-layoffs-2026-...
        │
        ▼
app/.../page.tsx   (Next.js Server Component — runs on Railway)
  export const dynamic = 'force-dynamic'   ← re-queries Supabase on every request
  return <NewsArticleDB slug="california-california-tech-layoffs-..." />
        │
        ▼
components/NewsArticleDB.tsx   (async Server Component)
  const supabase = await createClient()
  const { data: row } = await supabase
    .from('articles')
    .select('*')
    .eq('slug', slug)
    .single()
  // row contains: title, subtitle, content_html, author_name, publish_date, tags...
        │
        ▼
components/NewsArticle.tsx   (renders the row into semantic HTML)
  <article itemScope itemType="https://schema.org/NewsArticle">
    <h1>{row.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: row.content_html }} />
  </article>
        │
        ▼
Next.js serialises the React tree → pure HTML string → sent to browser

✅ Googlebot reads the headline and body in the first byte of the response
✅ Zero JavaScript required
✅ Supabase keys never exposed to the browser
```

### Why this matters for SEO

- Google News requires **fully-formed HTML** in the server response. If content is fetched client-side (via `useEffect`), Googlebot sees a blank page and cannot index the article.
- The `<article itemScope itemType="https://schema.org/NewsArticle">` wrapper tells Google exactly what it is reading.
- Full `metadata` export in `page.tsx` produces OG tags, Twitter cards, and canonical URLs in the `<head>`.

---

## 2. Article Components — Which One to Use

| Component | Supabase Table | Use For |
|---|---|---|
| `NewsArticleDB` | `articles` | News stories, analysis, data-driven reports, breaking news |
| `JackArticleDB` | `jack_articles` | Deep investigative pieces, premium long-form with sidebar layouts |
| `ArticlePageDB` | `article_pages` | Wiki-style reference pages, company profiles, index pages |

**The component in `page.tsx` determines which Supabase table is queried.** Do not mix them.

---

## 3. Writing & Publishing a NewsArticle (Supabase)

This is the standard pipeline for all news articles.

### Step 1 — Create the page.tsx stub

Create `app/{section}/{slug}/page.tsx`:

```tsx
import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/section/your-article-slug';
const FULL_URL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Your Article Title | ObjectWire',
  description: 'Two-sentence description for search engines.',
  alternates: { canonical: FULL_URL },
  openGraph: {
    title: 'Your Article Title',
    description: 'Two-sentence description.',
    type: 'article',
    url: FULL_URL,
    siteName: 'ObjectWire',
    publishedTime: '2026-03-26T15:00:00Z',
    section: 'Technology',
    tags: ['Tag1', 'Tag2'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Article Title',
    description: 'Description for Twitter.',
  },
};

export default function YourArticlePage() {
  return <NewsArticleDB slug="section-your-article-slug" />;
}
```

> **Slug rule:** Join the path segments with dashes. `app/california/my-article/page.tsx` → slug `california-my-article`. See [Section 5](#5-slug-format-rules).

---

### Step 2 — Write the content file

Create `content/articles/your-slug.ts`:

```typescript
import type { Article } from '../../content/types';

const article: Article = {
  // ── Required ──────────────────────────────────────────────────────────────
  title: 'Your Full Article Title',
  slug: 'section-your-article-slug',   // must match the slug in page.tsx exactly
  category: 'Technology',
  status: 'published',

  // ── Meta ──────────────────────────────────────────────────────────────────
  subtitle: 'Optional bold deck line shown under the headline.',
  excerpt: 'One or two sentences used on cards and in meta descriptions.',
  tags: ['Tag1', 'Tag2', 'Tag3'],
  topic_tag: 'technology',             // see Section 8 for valid values
  category_color: 'blue',             // red | blue | green | purple | orange | pink | yellow
  read_time: '5 min read',
  publish_date: 'March 26, 2026',      // display string shown on the article
  published_at: '2026-03-26T15:00:00Z', // ISO — used for sorting and schema

  // ── Author ────────────────────────────────────────────────────────────────
  author_name: 'Conan Boyle',
  author_role: 'Science & Technology Writer',
  author_slug: 'conan-boyle',
  author_bio: 'Short bio shown in the author card on the article.',

  // ── Images ────────────────────────────────────────────────────────────────
  hero_image_src: '/default/your-image.jpg',   // path under /public/
  hero_image_alt: 'Alt text for the hero image',
  thumbnail_src: '/default/your-thumb.jpg',
  thumbnail_alt: 'Alt text for thumbnail',

  // ── URL ───────────────────────────────────────────────────────────────────
  url: '/section/your-article-slug',    // canonical path — used by ArticleViewTracker

  // ── Flags ─────────────────────────────────────────────────────────────────
  featured: false,
  trending: false,
  breaking: false,
  exclusive: false,

  // ── Legacy (leave empty — use content_html instead) ───────────────────────
  content: [],

  // ── Body — write all article HTML here ────────────────────────────────────
  content_html: `
<div class="prose prose-lg max-w-none">

  <p class="text-lg leading-relaxed">
    <strong>LOCATION, STATE</strong> — Lead paragraph here. Keep it 2-3 sentences.
    Establish the news, the actors, and the significance.
  </p>

  <h2 class="text-2xl font-bold mt-10 mb-4">Section Heading</h2>

  <p>Body paragraph. Supports full HTML: <strong>bold</strong>, <em>italic</em>,
  <a href="/related-article">internal links</a>.</p>

  <blockquote class="border-l-4 border-gray-400 pl-6 my-8 italic text-gray-700">
    <p>"Direct quote from a source."</p>
    <footer class="text-sm text-gray-500 mt-2 not-italic">
      — Name, Title, Organization
    </footer>
  </blockquote>

  <hr class="my-10 border-gray-200" />

  <div class="text-sm text-gray-500">
    <p class="font-semibold text-gray-700 mb-2">SOURCES &amp; CITATIONS</p>
    <ul class="list-disc list-inside space-y-1">
      <li>Source 1 — description</li>
      <li>Source 2 — description</li>
    </ul>
  </div>

</div>
  `.trim(),
};

export default article;
```

---

### Step 3 — Dry-run to validate

```bash
npx tsx scripts/publish-content.ts --file your-slug --dry-run
```

Expected output:
```
[DRY RUN] Found 1 article file(s)
  ✓  your-slug.ts
     slug: section-your-article-slug | status: published | category: Technology
[DRY RUN] Done — 1 upserted, 0 skipped, 0 failed
```

---

### Step 4 — Push to Supabase

```bash
npx tsx scripts/publish-content.ts --file your-slug
```

Or using the npm script:
```bash
npm run content:publish -- --file your-slug
```

---

### Step 5 — Register in content-registry

Open `lib/content-registry.ts` and add or update the entry for this article:

```typescript
{
  slug: "/section/your-article-slug",
  title: "Your Full Article Title",
  description: "Two-sentence SEO description matching the excerpt.",
  publishDate: "2026-03-26",
  modifiedDate: "2026-03-26",
  category: "Technology",
  tags: ["Tag1", "Tag2"],
  author: "Conan Boyle",
  authorSlug: "conan-boyle",
  imageUrl: "/default/your-image.jpg",
  imageAlt: "Alt text",
  imageWidth: 1200,
  imageHeight: 630,
  priority: 0.7,
  changeFrequency: "weekly",
  trending: true,   // optional
},
```

> **This step is required** for `SEOWrapper` to emit JSON-LD, and for the article to appear in `sitemap.ts` and `news-sitemap.xml`. Missing entries = invisible to Google.

---

## 4. Writing a JackArticle (Supabase)

JackArticles live in `jack_articles` table. The workflow is different — content is written directly into the `page.tsx` and then **migrated** and **trimmed**.

### Pipeline

```
Write full article in page.tsx
  → npm run wiki:migrate     (migrates content → jack_articles Supabase row)
  → npm run wiki:trim        (replaces page.tsx with a small stub that fetches from DB)
```

**CRITICAL ORDER:** Always migrate BEFORE trim. Trimming first = empty DB row = 404 in production.

### page.tsx structure for JackArticle

```tsx
import { JackArticleDB } from '@/components/JackArticleDB';

export const dynamic = 'force-dynamic';

export default function YourPage() {
  return (
    <JackArticleDB slug="section-your-article-slug" />
  );
}
```

After trimming, the full content is in Supabase under `jack_articles` and page.tsx becomes the small stub above.

---

## 5. Slug Format Rules

The slug in `page.tsx` and in `content/articles/*.ts` **must match exactly**.

**Formula:** Join all directory segments between `app/` and `page.tsx` with dashes.

| Page file path | Supabase slug |
|---|---|
| `app/california/my-article/page.tsx` | `california-my-article` |
| `app/copyright/news/aoc-mlb-warning/page.tsx` | `copyright-news-aoc-mlb-warning` |
| `app/trump/ice-arrest-sfo/page.tsx` | `trump-ice-arrest-sfo` |
| `app/technology/tencent-openclaw/page.tsx` | `technology-tencent-openclaw` |

The **content-registry slug** uses the full URL path with a leading slash:
```
/california/my-article
/copyright/news/aoc-mlb-warning
```

---

## 6. Content Registry — SEO & Sitemap

**File:** `lib/content-registry.ts`

Every page needs an entry here. `SEOWrapper` reads this file to:
- Emit `<script type="application/ld+json">` — NewsArticle / BreadcrumbList structured data
- Populate `app/sitemap.ts` — general sitemap
- Populate `app/news-sitemap.xml/` — Google News sitemap

### Key fields

| Field | Required | Notes |
|---|---|---|
| `slug` | ✅ | Full URL path with leading slash |
| `title` | ✅ | Full SEO title |
| `description` | ✅ | 150–160 char meta description |
| `publishDate` | ✅ | `YYYY-MM-DD` format |
| `category` | ✅ | Used for sitemap section grouping |
| `author` | ✅ | Display name |
| `authorSlug` | ✅ | Links to `/authors/{slug}` |
| `imageUrl` | ✅ | Path under `/public/` or absolute URL |
| `imageWidth` | ✅ | Default: `1200` |
| `imageHeight` | ✅ | Default: `630` |
| `tags` | ✅ | Array of topic strings |
| `trending` | — | Adds to trending feeds |
| `featured` | — | Adds to featured sections |
| `priority` | — | Sitemap priority 0.0–1.0. Default: `0.6` |

### Sync tool

```bash
# See which pages are missing registry entries
npx tsx scripts/sync-registry.ts

# Auto-add stubs (blank imageUrl — fill manually after)
npx tsx scripts/sync-registry.ts --write
```

---

## 7. Authors

### Active Authors

| Name | Slug | Desk | Location |
|---|---|---|---|
| Jack Sterling | `jack-sterling` | Technology & Politics | Austin, TX |
| Conan Boyle | `conan-boyle` | Science & Technology | Austin, TX |
| Alfansa | `alfansa` | Finance & Markets / Anime & Gaming | New York, NY |

### Author profile pages

Each author has a full profile at `/authors/{slug}` with:
- Auto-loading article feed (pulls from both `content_registry` AND `jack_articles` tables via `AuthorArticlesServer`)
- Stats, beats, bio, highlights
- Editorial standards links

### Using author fields in articles

Always set both `author_name` and `author_slug`. The `author_slug` powers:
1. The linked author byline on the article page
2. The article appearing on the author's profile page feed
3. The `AuthorArticlesServer` auto-loading component

```typescript
author_name: 'Conan Boyle',
author_role: 'Science & Technology Writer',
author_slug: 'conan-boyle',
```

---

## 8. Available Topic Tags & Category Colors

### `topic_tag` values (used in `articles` table and `NewsArticle` component)

```
technology | news | finance | sports | entertainment
lifestyle  | investigations | world | politics | science
gaming     | crypto | ai | automotive | education | culture
```

### `category_color` values

```
red | blue | green | purple | orange | pink | yellow
```

### Category → default color mapping (from `push-articles-to-supabase.ts`)

| Category | Color |
|---|---|
| Technology | blue |
| Finance | yellow |
| Politics | red |
| Sports | green |
| Entertainment | purple |
| Gaming | orange |
| Crypto | blue |
| Science | purple |
| Business | blue |
| Investigations | orange |

---

## 9. Content Block Types

When using the block-based `content: []` array (legacy — prefer `content_html` for new articles):

| Block type | Key fields |
|---|---|
| `paragraph` | `content: string` (supports inline HTML) |
| `heading` | `content: string`, `level: 2 | 3 | 4` |
| `quote` | `content`, `author?`, `role?` |
| `list` | `items: string[]`, `ordered?: boolean` |
| `image` | `src`, `alt?`, `caption?`, `credit?` |
| `divider` | _(no extra fields)_ |
| `callout` | `content`, `style?: 'info' | 'warning' | 'tip' | 'danger'` |
| `stat-grid` | `stats: { value, label, note? }[]` |
| `timeline` | `events: { date, title, description }[]` |
| `table` | `headers: string[]`, `rows: string[][]`, `caption?` |
| `embed` | `url`, `provider?: 'youtube' | 'twitter' | 'instagram' | 'tiktok'` |
| `sources` | `items: { label, url }[]` |

### Preferred approach for new articles: `content_html`

Write the article body directly as an HTML string in `content_html`. Use semantic Tailwind prose classes:

```html
<div class="prose prose-lg max-w-none">
  <p class="text-lg leading-relaxed">Lead paragraph...</p>
  <h2 class="text-2xl font-bold mt-10 mb-4">Section</h2>
  <p>Body text with <strong>bold</strong> and <a href="/link">links</a>.</p>
  <blockquote class="border-l-4 border-gray-400 pl-6 my-8 italic text-gray-700">
    <p>"Quote text."</p>
    <footer class="text-sm text-gray-500 mt-2 not-italic">— Source, Title</footer>
  </blockquote>
</div>
```

**Useful HTML patterns:**

```html
<!-- Stat grid -->
<div class="grid grid-cols-2 md:grid-cols-4 gap-4 my-10 not-prose">
  <div class="bg-gray-50 border border-gray-200 p-5 text-center">
    <p class="text-3xl font-black text-gray-900">26,283</p>
    <p class="text-xs uppercase tracking-wider text-gray-500 mt-1 font-semibold">Jobs cut YTD</p>
  </div>
</div>

<!-- Colored callout section -->
<div class="border-l-4 border-blue-500 pl-6">
  <h3 class="font-bold text-lg text-gray-900 mb-2">Key Point Title</h3>
  <p class="text-gray-700">Body text here.</p>
</div>

<!-- Data table -->
<div class="overflow-x-auto my-8">
  <table class="w-full text-sm border-collapse border border-gray-200">
    <thead class="bg-gray-50">
      <tr>
        <th class="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Column</th>
      </tr>
    </thead>
    <tbody>
      <tr class="hover:bg-gray-50">
        <td class="border border-gray-200 px-4 py-3">Value</td>
      </tr>
    </tbody>
  </table>
</div>

<!-- Sources footer -->
<hr class="my-10 border-gray-200" />
<div class="text-sm text-gray-500">
  <p class="font-semibold text-gray-700 mb-2">SOURCES &amp; CITATIONS</p>
  <ul class="list-disc list-inside space-y-1">
    <li>Source — description, date</li>
  </ul>
</div>
```

---

## 10. npm Scripts Reference

| Command | What it does |
|---|---|
| `npm run content:publish` | Pushes all `content/articles/*.ts` marked `published` to Supabase `articles` table |
| `npm run content:publish -- --file my-slug` | Pushes a single article file |
| `npm run content:publish -- --dry-run` | Preview only — no writes |
| `npm run content:publish -- --status published` | Only push `status: 'published'` files |
| `npm run wiki:migrate` | Migrates JackArticle `page.tsx` content → `jack_articles` Supabase row |
| `npm run wiki:trim` | Replaces full `page.tsx` with stub after migration |
| `npm run registry:sync` | Dry-run scan for missing `content-registry.ts` entries |
| `npm run registry:write` | Auto-write stub entries to `content-registry.ts` |
| `npm run dev` | Start local dev server (Turbopack) |
| `npm run build` | Build for production (runs `sync-registry` first) |

**Safe order for a new NewsArticle:**
```bash
# 1. Write content/articles/your-slug.ts
# 2. Dry-run
npx tsx scripts/publish-content.ts --file your-slug --dry-run
# 3. Push live
npx tsx scripts/publish-content.ts --file your-slug
# 4. Update lib/content-registry.ts manually
```

**Safe order for a new JackArticle:**
```bash
# 1. Write full article in page.tsx
# 2. Migrate to Supabase FIRST
npm run wiki:migrate
# 3. Then trim the file
npm run wiki:trim
# 4. Update lib/content-registry.ts manually
```

---

## 11. Rendering Strategy by Page Type

| Page Type | Export | Why |
|---|---|---|
| Breaking news (live + updating) | `export const dynamic = 'force-dynamic'` | Always queries fresh Supabase data |
| Published articles (finalized) | `export const revalidate = 3600` | CDN-cached HTML — fastest for Google News |
| Index / category pages | `export const revalidate = 1800` | Semi-fresh, low server cost |
| ArticlePage / wiki | `export const revalidate = 86400` | Rarely changes, maximises cache |
| Admin / account pages | Client-side only | Not indexed — SSR not needed |

Switch `force-dynamic` → `revalidate = 3600` on any article once it is final and no longer live-updating.

---

## 12. The "View Source" Test

Run this on any live article to confirm SSR is working:

1. Open `objectwire.org/{your-article-path}` in a browser
2. Right-click → **View Page Source** (not DevTools — actual source)
3. `Ctrl + F` → search for the article headline
4. **Headline visible in source** → SSR working ✅ — Googlebot can index it
5. **No headline / only `<script>` tags** → JS-heavy ❌ — content is not indexed

All ObjectWire articles using `NewsArticleDB`, `JackArticleDB`, or `ArticlePageDB` pass this test — the Supabase fetch runs on the server before the HTML is sent.

---

## 13. Complete Publish Checklist

Before committing and pushing any new article:

- [ ] `page.tsx` exists with correct `slug` passed to `NewsArticleDB` (or `JackArticleDB`)
- [ ] `metadata` export in `page.tsx` has `title`, `description`, `canonical`, `openGraph`, `twitter`
- [ ] Content file in `content/articles/your-slug.ts` (for NewsArticle)
  - [ ] `slug` matches the one in `page.tsx` exactly
  - [ ] `status: 'published'`
  - [ ] `content_html` filled with full article body
  - [ ] `author_name` + `author_slug` set
  - [ ] `publish_date` (display string) + `published_at` (ISO) set
  - [ ] `url` set to canonical path
- [ ] Dry-run passes: `npx tsx scripts/publish-content.ts --file your-slug --dry-run`
- [ ] Live push succeeds: `npx tsx scripts/publish-content.ts --file your-slug`
- [ ] `lib/content-registry.ts` entry added/updated with `imageUrl`, `author`, `authorSlug`, `tags`
- [ ] Hero image exists in `/public/` at the path specified in `hero_image_src`
- [ ] View Source test passes on production after deploy

---

## Architecture Summary

```
┌─────────────────────────────────────────────────────────────────┐
│                    OBJECTWIRE CONTENT PIPELINE                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                   │
│  WRITE                  STORE                    RENDER           │
│                                                                   │
│  content/articles/      Supabase                 app/.../         │
│  *.ts                   articles table           page.tsx          │
│  (NewsArticle)    ───►  (content_html,     ───►  NewsArticleDB    │
│                          author, tags...)         NewsArticle      │
│                                                                   │
│  app/.../page.tsx        Supabase                app/.../         │
│  (full JackArticle) ──►  jack_articles     ───►  page.tsx (stub)  │
│  wiki:migrate            table                   JackArticleDB    │
│  wiki:trim                                        JackArticle      │
│                                                                   │
│  lib/content-registry.ts                                          │
│  (SEO / sitemap layer)  ◄──────────────────────────────────────── │
│  populated manually                                               │
│  after every new page                                             │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

**Three tables. One rule per table:**

| Table | Written by | `status` column? | Fetched by |
|---|---|---|---|
| `articles` | `publish-content.ts` | ✅ `draft` / `published` | `NewsArticleDB` |
| `jack_articles` | `wiki:migrate` | ❌ none | `JackArticleDB` |
| `article_pages` | `wiki:migrate` | ❌ none | `ArticlePageDB` |
