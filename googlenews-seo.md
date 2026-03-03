# Google News SEO — ObjectWire

> **How `content-registry.ts`, the Supabase articles table, and structured data work together to compete with IGN, CNN, and established media for Google News placement.**

Related: [supabase-library.md](supabase-library.md)

---

## Table of Contents

1. [What Is the Content Registry?](#1-what-is-the-content-registry)
2. [How the Registry Drives Google News SEO](#2-how-the-registry-drives-google-news-seo)
3. [Will the Registry Keep Growing?](#3-will-the-registry-keep-growing)
4. [The Two-Tier Content Strategy](#4-the-two-tier-content-strategy)
5. [Competing With IGN, CNN, and Established Media](#5-competing-with-ign-cnn-and-established-media)
6. [Google News Eligibility Checklist](#6-google-news-eligibility-checklist)
7. [Structured Data Reference](#7-structured-data-reference)
8. [Registry Entry Best Practices](#8-registry-entry-best-practices)
9. [Scaling Plan: When to Migrate to Supabase](#9-scaling-plan-when-to-migrate-to-supabase)

---

## 1. What Is the Content Registry?

**File:** [`lib/content-registry.ts`](lib/content-registry.ts)

The content registry is ObjectWire's **sitemap brain** — a single TypeScript array where every static page on the site is declared with title, description, publish date, author, image, and topic tags.

It is **not** a CMS. It is metadata. The actual page content lives in `app/**/page.tsx` files. The registry tells Google everything about those pages that HTML alone cannot.

### What a registry entry contains

```ts
{
  slug: "/technology/cursor",
  title: "Cursor Hits $2 Billion ARR — Anysphere Doubles Revenue in Three Months | ObjectWire",
  description: "Anysphere reported $2 billion in annual recurring revenue for Cursor in February 2026...",
  publishDate: "2026-03-02",       // ISO date — drives news sitemap freshness
  modifiedDate: "2026-03-02",      // Updated when article content changes
  category: "Technology",
  tags: ["Technology", "Cursor", "Anysphere", "SaaS", "ARR"],
  author: "Jack Wang",
  authorSlug: "jack-wang",         // Links to /authors/jack-wang
  priority: 0.9,                   // Sitemap crawl priority (0.0–1.0)
  changeFrequency: "weekly",
  featured: true,                  // Appears in homepage hero slot
  imageUrl: "https://www.objectwire.org/news/cursor.PNG",   // Required for Top Stories
  imageAlt: "Cursor AI code editor — Anysphere $2 billion ARR milestone",
}
```

Every field has a job. None are cosmetic.

---

## 2. How the Registry Drives Google News SEO

### Connection 1 — News Sitemap XML

`app/news-sitemap.xml` reads the registry and generates the XML that Google News crawler consumes. Only articles that meet **all** of these conditions are eligible for the **Top Stories carousel** (the box above organic results on news.google.com and in web search):

| Requirement | Where it comes from |
|---|---|
| Published within the last 48 hours | `publishDate` in registry entry |
| Valid hero image (min 1200×675 px, 16:9) | `imageUrl` + `imageWidth` + `imageHeight` in registry |
| `NewsArticle` structured data on the page | `NewsArticleSchema` component on each page |
| Unique, descriptive `<title>` tag | `title` in registry → page `metadata.title` |
| Author byline | `author` + optional `authorSlug` in registry |
| Publisher name matches Google News registration | Hardcoded as ObjectWire in schema components |

If any of these are missing, the article is invisible to Google News regardless of how good the content is.

### Connection 2 — JSON-LD NewsArticle Schema

Every article page includes a `NewsArticleSchema` component that emits structured data Google uses to verify:

- **Authorship** — who wrote it and when
- **Freshness** — `publishedTime` and `modifiedTime` in ISO 8601
- **Topic relevance** — `keywords[]` array
- **Image** — `imageUrl` with dimensions
- **Publisher** — site name, logo, URL

This is separate from the registry but fed by the same data. The registry entry ensures the sitemap is correct; the schema component ensures the on-page signal is correct. Both are required.

### Connection 3 — Crawl Priority and Budget

`priority: 0.9` + `featured: true` in a registry entry signals to Google's crawler: *spend crawl budget here first, re-check this often*. A new article at `priority: 0.9` with a fresh `publishDate` will be re-crawled within hours of deploy on an established domain.

`changeFrequency: "weekly"` tells the crawler it doesn't need to check back every hour, conserving crawl budget for your newer articles at `priority: 0.9`.

---

## 3. Will the Registry Keep Growing?

**Yes — and there is a size ceiling you need to plan around.**

### Growth trajectory

| Articles | Registry size | Build time impact | Risk |
|---|---|---|---|
| 0–500 | ~3,000 lines | Negligible | None |
| 500–1,500 | ~9,000 lines | Minor (+5–10s) | Low |
| 1,500–5,000 | ~30,000 lines | Significant (+30–60s) | Medium |
| 5,000+ | 150,000+ lines | Build breaks or times out | High |

### The real constraint

The registry requires a **code deploy** to add an article. That means:
- Writing the article → editing a TypeScript file → committing → pushing → waiting for build
- One syntax error in the file fails the **entire build** — every page goes down

This is acceptable at current scale. It becomes a liability at velocity publishing (5+ articles/day).

### The solution is already built

The Supabase `articles` table (see [supabase-library.md](supabase-library.md)) handles unlimited articles with zero registry entries and zero deploys. The registry should stay focused on **structural hub pages** — the ones that anchor topic authority. Breaking news and high-frequency editorial content belongs in Supabase.

---

## 4. The Two-Tier Content Strategy

ObjectWire runs two parallel content systems. Understanding which to use for each article is the most important publishing decision you make.

```
STATIC REGISTRY PAGES                    SUPABASE ARTICLES
─────────────────────────────────────    ─────────────────────────────────────
app/**/page.tsx + content-registry.ts    Supabase `articles` table + /blog/[slug]

Purpose: Topical authority anchors       Purpose: News velocity + daily editorial
Examples:                                Examples:
  /technology/cursor                       Breaking news within 48 hours
  /entertainment/hulu                      Daily briefings
  /video-games/racing/gran-turismo         Opinion pieces
  /authors/jack-wang                       Event recaps

Edited by: Code change + deploy          Edited by: /admin/editor (no deploy)
Scales to: ~2,000 pages comfortably      Scales to: Unlimited (rows, not files)
Google News: Via news-sitemap.xml        Google News: Via DB-driven sitemap feed
```

### Decision rule

| Signal | Use static registry | Use Supabase |
|---|---|---|
| Will this page be linked to permanently? | ✅ | — |
| Is this time-sensitive (< 48 hours)? | — | ✅ |
| Will you update it within a week? | — | ✅ |
| Is it a hub / profile / evergreen reference? | ✅ | — |
| Publishing more than once a day? | — | ✅ |
| Needs custom layout components? | ✅ | — |

---

## 5. Competing With IGN, CNN, and Established Media

### Their structural constraints

| Legacy media constraint | ObjectWire structural advantage |
|---|---|
| Editorial approval chains (hours to days per story) | `/admin/editor` publishes in minutes with no deploy |
| Legacy CMS emitting messy HTML | Native `NewsArticleSchema` JSON-LD — Google reads it cleaner |
| Generalist coverage across every vertical | Deep vertical drilling on niche topics faster than any generalist desk |
| Rigid URL structures from 1990s CMS design | Clean semantic URLs (`/technology/cursor`, `/video-games/racing/gran-turismo`) |
| Static ad revenue dependencies | Full-stack ownership — no platform intermediation tax |
| Slow schema adoption (many still not on NewsArticle JSON-LD) | Structured data baked into every component by default |

### The compounding authority model

Google News ranking is determined by two factors: **relevance** (does the article match the query?) and **authority** (is this source trusted for this topic?). Authority compounds:

```
Publish deep article on topic X
  → Google crawls it, indexes it
  → Reader clicks through from News
  → Dwell time signals quality
  → Other sites cite it
  → Google increases authority for topic X
  → Next ObjectWire article on topic X ranks faster and higher
  → Repeat
```

IGN took 30 years to build topic authority on gaming. The gap closes from the bottom up by **owning niches they under-cover** — racing games, AI developer tools, SaaS revenue milestones, Nintendo Switch 2 exclusives — and publishing faster and more accurately than their generalist desks can staff.

### The velocity advantage in practice

In a single afternoon (March 2, 2026), ObjectWire published:
- Cursor $2B ARR story (`/technology/cursor`)
- Hulu Mike & Nick & Nick & Alice trailer coverage (`/entertainment/hulu`)
- Pokémon Pokopia franchise-record review (`/video-games/switch2/pokemon-pokopia`)
- Polyphony Digital hiring + Gran Turismo review (`/video-games/racing/polyphony-gran-turismo`)

A CNN gaming desk or IGN news team requires separate writers and editors for each of those verticals. ObjectWire's architecture — registry + Supabase + reusable article components — compresses that to a single publishing session.

**Sustained over months, this velocity builds topical authority that Google treats as primary source status, not secondary citation.**

---

## 6. Google News Eligibility Checklist

Run through this for every article before publishing:

### Required (article will not appear in Google News without these)

- [ ] `publishDate` set to today's date in registry entry (or `published_at = NOW()` in Supabase)
- [ ] `imageUrl` present and resolving (test in browser)
- [ ] `imageWidth` ≥ 1200 and `imageHeight` ≥ 675 in registry entry (16:9 ratio for Top Stories)
- [ ] `NewsArticleSchema` component included on the page with `publishedTime` in ISO 8601
- [ ] `author` field filled (not "ObjectWire Editorial" for Google News — use a real byline when possible)
- [ ] `<title>` tag is unique — no two pages with identical titles
- [ ] `canonical` URL in metadata matches the actual page URL

### Strongly recommended (affects ranking, not eligibility)

- [ ] `priority: 0.9` for breaking/featured stories
- [ ] `featured: true` for stories you want in the homepage hero
- [ ] `authorSlug` linking to a real `/authors/[name]` profile page
- [ ] `description` under 160 characters
- [ ] Tags array includes at least 3–5 specific topic terms
- [ ] `modifiedDate` updated whenever the article is edited

---

## 7. Structured Data Reference

Every ObjectWire article page should include both of these:

### NewsArticleSchema component

```tsx
<NewsArticleSchema
  title="Article Title"
  description="Article excerpt under 160 chars."
  author="Jack Wang"
  authorUrl="https://www.objectwire.org/authors/jack-wang"
  publishedTime="2026-03-02T12:00:00Z"   // ISO 8601 — required
  modifiedTime="2026-03-02T12:00:00Z"
  imageUrl="https://www.objectwire.org/news/cursor.PNG"
  articleUrl="https://www.objectwire.org/technology/cursor"
  section="Technology"
  keywords={['Cursor', 'Anysphere', 'ARR', 'SaaS']}
/>
```

### SEOWrapper component

```tsx
<SEOWrapper slug="/technology/cursor">
  {/* page content */}
</SEOWrapper>
```

`SEOWrapper` reads the registry entry for this slug and emits `BreadcrumbList` JSON-LD automatically, which improves click-through rate in search results by showing the breadcrumb path under the title.

---

## 8. Registry Entry Best Practices

### Priority values

| Use case | `priority` |
|---|---|
| Breaking news, featured homepage story | `0.9` |
| Standard article, recent news | `0.7` |
| Evergreen reference, hub pages | `0.6` |
| Archive, secondary pages | `0.5` |

### Tag strategy

Tags power the related-article matching system. Use:
- 1 broad category tag (`"Technology"`, `"Gaming"`)
- 2–3 brand/entity tags (`"Cursor"`, `"Anysphere"`)
- 1–2 topic tags (`"ARR"`, `"SaaS"`, `"AI Developer Tools"`)

Avoid duplicating the category as a tag — it wastes a slot.

### Image requirements for Top Stories carousel

Google mandates a minimum image size of **1200×675 px (16:9)** for Top Stories placement. Thumbnails that are smaller or the wrong aspect ratio disqualify the article from the carousel regardless of content quality.

Always include `imageWidth` and `imageHeight` in the registry entry:

```ts
imageUrl: "https://www.objectwire.org/news/cursor.PNG",
imageWidth: 1200,
imageHeight: 675,
imageAlt: "Cursor AI code editor interface screenshot",
```

---

## 9. Scaling Plan: When to Migrate to Supabase

The registry should **stop growing** when it reaches ~1,500 entries. Before that point, any article that falls into the "write more than once a week" category should move to the Supabase pipeline.

### Migration trigger checklist

Start routing to Supabase when any of these are true:
- Publishing 5+ articles per day
- Registry file exceeds 10,000 lines
- Build time exceeds 3 minutes
- You need to publish without a code deploy

### What stays in the registry forever

- Author profile pages (`/authors/*`)
- Topic hub pages (`/technology`, `/entertainment/hulu`)
- Company profiles (`/technology/cursor`, `/open-ai`)
- Evergreen reference pages (`/define/*`)
- Site structure pages (about, privacy, team)

### What moves to Supabase

- Daily news briefings
- Event coverage (ongoing tournament updates, conference days)
- Opinion / editorial pieces
- Any article where you need to edit it after publish without a deploy

See [supabase-library.md § 9 — Static Pages vs Dynamic Articles](supabase-library.md#9-static-pages-vs-dynamic-articles) for the full breakdown.

---

## Related Files

```
lib/
  content-registry.ts          ← The registry itself (source of truth for static pages)

app/
  news-sitemap.xml/route.ts    ← Reads registry → generates Google News sitemap XML
  sitemap.ts                   ← Reads registry → generates full site sitemap
  robots.ts                    ← Allows Googlebot, links to both sitemaps

components/
  NewsArticleSchema.tsx        ← Emits NewsArticle JSON-LD on every article page
  SEOWrapper.tsx               ← Emits BreadcrumbList JSON-LD, reads registry by slug

Docs/
  supabase-library.md          ← Supabase pipeline, admin editor, DB-driven articles
  googlenews-seo.md            ← This file
```
