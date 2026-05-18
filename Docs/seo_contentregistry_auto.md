# SEO Content Registry | Automatic Ranking Chain

> Every time a new article is published on OzoneNews, a chain of SEO systems must fire in the correct order, at lightning speed, for the article to have the **highest possible chance of ranking #1 in Google**. This document defines that chain, what each link does, and the hard requirements at every step.

---

## The Chain (in order)

```
Article page.tsx created
        ↓
  1. metadata export           → Google reads <title>, <meta description>, canonical, OG tags
        ↓
  2. Content Registry entry    → Powers sitemap, news sitemap, SEOWrapper JSON-LD, related articles
        ↓
  3. prebuild auto-sync        → `scripts/sync-registry.ts --write` runs before every build
        ↓
  4. SEOWrapper renders        → Injects NewsArticle + BreadcrumbList JSON-LD on the live page
        ↓
  5. NewsArticleSchema fires   → Separate structured data component for Google News / Top Stories
        ↓
  6. Sitemap includes URL      → `/sitemap.xml` pulls from registry, Googlebot discovers the URL
        ↓
  7. News Sitemap includes URL → `/news-sitemap.xml` pulls from registry, Googlebot-News discovers it
        ↓
  8. robots.txt allows it      → Googlebot + Googlebot-News have explicit allow rules
        ↓
  9. Internal links point in   → Other articles link to this one via interlinks grid + hub pages
        ↓
  INDEXED → RANKED → TOP STORIES
```

If **any link in this chain is broken or missing**, the article's ranking ceiling drops dramatically.

---

## Link 1 | `metadata` Export (In the Page File)

Every `page.tsx` must export a `metadata` object. This is what Google reads first.

### Hard Requirements

| Field | Requirement | Why |
|---|---|---|
| `title` | Primary keyword first, `\| OzoneNews` at end, ≤ 60 chars | Google truncates at ~60. Keyword-first = highest weight |
| `description` | 130–155 chars. Primary keyword in the first 60 chars. Unique per page | This is the snippet in search results. Dupes = demotion |
| `keywords` | 10–15 long-tail keyword phrases as an array | Google ignores the meta tag, but Bing and AI crawlers use it |
| `canonical` | Always set to `https://www.OzoneNews.org/[slug]` | Prevents duplicate content penalties |
| `openGraph.title` | Same as `title` or slightly reworded for social | Social shares and Google Discover use this |
| `openGraph.description` | Same as `description` | Social shares use this |
| `openGraph.images` | Array with `url` (1200×675+), `width`, `height`, `alt` | **Mandatory for Google Top Stories and Discover** |
| `openGraph.publishedTime` | ISO 8601 datetime string | Google News requires this to determine recency |
| `openGraph.section` | Category string (e.g. "Technology", "Gaming") | Feeds Google News section labeling |
| `robots` | `index, follow` (default) unless draft | Never noindex a published article |

### Example

```tsx
export const metadata = {
  title: 'GTA 6 Pre-Orders Open on PlayStation Store | OzoneNews',
  description: 'GTA 6 pre-order listings appear on the PlayStation Store database with product IDs PPSA01547_00 and PPSA29660_00, confirming digital editions ahead of the Fall 2025 launch.',
  keywords: ['GTA 6 pre-orders', 'GTA 6 PlayStation Store', 'GTA 6 release date', ...],
  openGraph: {
    title: 'GTA 6 Pre-Orders Open on PlayStation Store | OzoneNews',
    description: '...',
    url: 'https://www.OzoneNews.org/video-games/news/gta6-pre-orders',
    type: 'article',
    publishedTime: '2026-03-04T12:00:00Z',
    section: 'Gaming',
    images: [{
      url: 'https://www.OzoneNews.org/images/gta6-preorders.jpg',
      width: 1200,
      height: 675,
      alt: 'GTA 6 pre-order page on PlayStation Store',
    }],
  },
  alternates: { canonical: 'https://www.OzoneNews.org/video-games/news/gta6-pre-orders' },
};
```

---

## Link 2 | Content Registry Entry

The content registry ([lib/content-registry.ts](lib/content-registry.ts)) is the **single source of truth** that drives every downstream SEO system.

### Hard Requirements per Entry

| Field | Required | Notes |
|---|---|---|
| `slug` | YES | Must exactly match the page's URL path (e.g. `/video-games/news/gta6-pre-orders`) |
| `title` | YES | Must match the `metadata.title` minus the `\| OzoneNews` suffix |
| `description` | YES | 130–155 chars, unique, contains primary keyword, NOT "OzoneNews coverage of..." |
| `publishDate` | YES | ISO format `YYYY-MM-DD`. Determines news sitemap inclusion (2-day window) |
| `modifiedDate` | YES | Update this every time the article content changes |
| `category` | YES | One of the canonical categories: Technology, Gaming, Sports, Entertainment, Finance, Science, News, YouTube, Reference, Meta |
| `tags` | YES | 5–10 topic tags. These become `<news:keywords>` in the news sitemap |
| `author` | YES | Real name preferred. "OzoneNews Editorial" only for unsigned content |
| `priority` | YES | `0.9` breaking/featured, `0.7` standard news, `0.5` evergreen/reference |
| `changeFrequency` | YES | `daily` for news, `weekly` for evergreen, `monthly` for reference |
| `imageUrl` | **CRITICAL** | Full URL to hero image. Min 1200px wide. **Without this, article is ineligible for Google Top Stories** |
| `imageWidth` | **CRITICAL** | Exact pixel width (e.g. 1200). Google requires this for Top Stories |
| `imageHeight` | **CRITICAL** | Exact pixel height (e.g. 675). Must be specified |
| `imageAlt` | YES | Descriptive alt text for the image |
| `featured` | optional | Set `true` for homepage hero placement |

### What Breaks If the Entry Is Wrong

| Problem | Consequence |
|---|---|
| Missing `imageUrl` | Blocked from Google Top Stories, Discover, and rich results carousel |
| `publishDate` older than 2 days | Not included in news sitemap → Google News won't find it |
| Generic description ("OzoneNews coverage of...") | Google devalues duplicate/thin descriptions across the site |
| Wrong `slug` | SEOWrapper can't find the entry → no JSON-LD on the page |
| Missing `tags` | No `<news:keywords>` in news sitemap → weaker topical signal |

---

## Link 3 | Prebuild Auto-Sync

The `prebuild` npm script runs automatically before every `npm run build`:

```
"prebuild": "npx tsx scripts/sync-registry.ts --write"
```

### What It Does

1. Scans every `app/**/page.tsx` in the project
2. Reads the `metadata` export via regex
3. Compares slugs against existing content registry entries
4. For any missing page, generates a new `ContentEntry` with:
   - Category auto-detected from slug prefix (50+ rules in `CATEGORY_MAP`)
   - Tags generated from slug segments
   - `publishDate` = today
   - `priority` derived from slug depth/category

### Lightning-Speed Rules

- **You don't need to manually register articles**, the sync script catches them
- **BUT auto-synced entries have generic descriptions and missing images**, you must go back and fill `imageUrl`, `imageWidth`, `imageHeight`, and write a proper `description`
- Run `npm run registry:sync` (dry-run) anytime to see what's missing
- Run `npm run registry:write` to sync immediately without building

---

## Link 4 | SEOWrapper

`<SEOWrapper slug="/your/article/slug">` wraps the page content and injects two `<script type="application/ld+json">` blocks:

1. **NewsArticle JSON-LD**, headline, datePublished, dateModified, author, publisher, image, articleSection
2. **BreadcrumbList JSON-LD**, auto-generated from the slug path segments

### Rules

- The `slug` prop must **exactly match** the `slug` field in the content registry
- If there's no matching registry entry, **no JSON-LD is injected** and the page is invisible to structured data parsers
- SEOWrapper wraps children, it is **not** self-closing:
  ```tsx
  <SEOWrapper slug="/video-games/news/gta6-pre-orders">
    <NewsArticle ...>
      {/* article content */}
    </NewsArticle>
  </SEOWrapper>
  ```

---

## Link 5 | NewsArticleSchema Component

Separate from SEOWrapper. Provides a more detailed `NewsArticle` JSON-LD with:
- `publisher.logo` (required for Google News)
- `publisher.sameAs` (social profiles)
- `isAccessibleForFree: true`
- `inLanguage: "en-US"`

### Required Props

| Prop | Notes |
|---|---|
| `title` | Headline exactly as published |
| `description` | Same as meta description |
| `author` | Author's display name |
| `publishedTime` | ISO 8601 datetime |
| `imageUrl` | Same image as OG and registry, consistency is critical |
| `articleUrl` | Full canonical URL |
| `section` | Category string |
| `keywords` | Array of keyword strings |

Google cross-checks the JSON-LD against the visible page content. If the headline in JSON-LD doesn't match the `<h1>`, trust signals drop.

---

## Link 6 | Sitemap (`/sitemap.xml`)

Generated from the content registry. Every registered page appears here with:
- `<loc>`, full URL
- `<lastmod>`, from `modifiedDate`
- `<changefreq>`, from `changeFrequency`
- `<priority>`, from `priority`

**If an article isn't in the registry, it's not in the sitemap, and Google is slower to discover it.**

---

## Link 7 | News Sitemap (`/news-sitemap.xml`)

Dynamic route that pulls from the content registry in real-time.

### Inclusion Rules

- Article must have a `publishDate` within the last **2 days** (`NEWS_WINDOW_DAYS = 2`)
- Also pulls CMS-published articles from Supabase (status = `published`)
- Each entry includes `<news:title>`, `<news:publication_date>`, and `<news:keywords>` (from `tags[]`)

### Speed Requirements

- Google News crawls news sitemaps every **5–15 minutes**
- A new article must be in the registry **before the build deploys** (the prebuild script handles this)
- For breaking news via Supabase CMS: publish immediately, no build needed, the dynamic route picks it up live

### What Kills News Sitemap Eligibility

| Problem | Result |
|---|---|
| `publishDate` not set or older than 2 days | Article excluded from news sitemap entirely |
| Empty `tags[]` | No `<news:keywords>` → weaker topic signal for Google News |
| Article not deployed / build not triggered | Static page doesn't exist → 404 → Google drops it |

---

## Link 8 | robots.txt

The `robots.ts` file allows all content paths for Googlebot and Googlebot-News. Key rules already in place:

- Googlebot: `allow: /` with `crawlDelay: 1`
- Googlebot-News: `allow: /` with `crawlDelay: 0` (fastest possible)
- Blocked: `/api/`, `/admin/`, `/preview/`
- Sitemaps declared: `/sitemap.xml` and `/news-sitemap.xml`

**No action needed per article** — this is global. Just don't put articles under `/api/` or `/admin/`.

---

## Link 9 | Internal Links

Google ranks pages higher when other pages on the same domain link to them. The more internal links pointing at an article, the more authority it inherits.

### Per-Article Requirements

| Element | Count | Implementation |
|---|---|---|
| Interlinks grid at bottom | 4–6 links | Manual `<Link>` cards to related OzoneNews pages |
| Hub page link to this article | 1 | Add a card on the parent hub page (e.g. `/video-games/gta-6`) |
| Breadcrumb links | 3–4 levels | `Breadcrumb` component (auto from slug) |
| Newsletter mention | 1 | `NewsletterSignupInline` component (already on every article) |

### Cluster Rule

If the article belongs to a cluster (e.g. GTA 6 pre-orders is under the GTA 6 hub):
1. The hub page must link to the article
2. The article must link back to the hub
3. Sibling articles in the cluster should cross-link

This creates a **link web** that tells Google "this site owns this topic."

---

## Speed Checklist | New Article in Under 5 Minutes

For a static `page.tsx` article:

```
□ 1. Create page.tsx with metadata export (title, desc, OG, canonical)
□ 2. Use NewsArticle + SEOWrapper + NewsArticleSchema + Breadcrumb components
□ 3. Include hero image (1200×675+, hosted on OzoneNews.org)
□ 4. Add 4–6 interlinks to related OzoneNews pages
□ 5. npm run build (prebuild auto-registers in content registry)
□ 6. Verify: open /news-sitemap.xml, article should be listed
□ 7. Push to GitHub → deploy
□ 8. Go back and fill imageUrl + imageWidth + imageHeight in registry if auto-synced with defaults
```

For a Supabase CMS article (breaking news):

```
□ 1. Open /admin/editor
□ 2. Write article with blocks (heading, paragraph, image, quote)
□ 3. Set status to "published", immediately enters news sitemap via dynamic route
□ 4. No build needed, /blog/[slug] is a dynamic route
□ 5. Article is live in < 1 minute
```

---

## The Non-Negotiables

These are the things that **must be right on every single article, no exceptions**:

| # | Requirement | If Missing |
|---|---|---|
| 1 | `metadata.title` with primary keyword first | Won't rank for target keyword |
| 2 | `metadata.description`, unique, 130–155 chars | Low CTR in search results, possible demotion |
| 3 | `openGraph.images` with 1200×675+ image | Blocked from Top Stories, Discover, and rich results |
| 4 | `canonical` URL set | Duplicate content risk across www / non-www |
| 5 | Content registry entry with all fields filled | No JSON-LD, no sitemap, no news sitemap = invisible |
| 6 | `imageUrl` + `imageWidth` + `imageHeight` in registry | Ineligible for Google Top Stories carousel |
| 7 | `publishDate` set to actual publish date | Wrong news sitemap window / wrong recency signal |
| 8 | `tags[]` with 5–10 relevant keywords | Weak topical signal in news sitemap |
| 9 | `NewsArticleSchema` component with matching data | No structured data for Google News |
| 10 | `SEOWrapper` with correct slug | No JSON-LD injected on page |
| 11 | `Breadcrumb` with 3+ levels | Missing BreadcrumbList rich result |
| 12 | 4–6 internal links to related OzoneNews pages | Low internal PageRank flow |
| 13 | `H1` matches `metadata.title` headline | Google cross-checks, mismatch = trust drop |
| 14 | Real author name (not generic) | E-E-A-T signal weakened |
| 15 | Hero image uses `next/image` with width/height | CLS penalty in Core Web Vitals |

---

## Ranking Velocity Formula

```
Ranking Speed = (Content Quality × Technical Completeness × Internal Links × Publishing Speed)
                ÷ Competition Level
```

**You control the numerator. This document is the checklist for maximizing it on every article.**

---

*Reference: Full strategic plan in [100k_organicsearch.md](100k_organicsearch.md). Component types in [components/NewsArticle.tsx](components/NewsArticle.tsx). Registry schema in [lib/content-registry.ts](lib/content-registry.ts).*
