# ObjectWire — Step-by-Step Action Plan

> Distilled from `seo_contentregistry_auto.md` + `SEO_NEXTSTEPS_CONTEXT.md`.
> These are the highest-impact actions executable directly in this codebase, in priority order.

---

## Stage 1 — Fix the Foundation (Do These First)

### 1. Audit & Fix Registry Entries Missing Images

The single biggest blocker for Google Top Stories eligibility.

```bash
npm run registry:sync   # dry-run — shows all missing/broken entries
```

For every entry missing `imageUrl`, `imageWidth`, `imageHeight`:
- Open `lib/content-registry.ts`
- Add the actual hosted image URL (must be on `objectwire.org`, min 1200px wide)
- Set `imageWidth: 1200`, `imageHeight: 675`
- Set `imageAlt` to a descriptive string

**Priority: fix the top 50 most-visited articles first.**

---

### 2. Write `scripts/audit-registry.ts`

Creates a self-running check that flags bad entries before they go live.

```ts
// scripts/audit-registry.ts
// For every entry in contentRegistry, flag:
//   - missing imageUrl / imageWidth / imageHeight
//   - description shorter than 130 chars or longer than 155 chars
//   - description containing "ObjectWire coverage of"
//   - slug that doesn't start with /
//   - duplicate slugs
//   - tags[] with fewer than 5 items
//   - author === "ObjectWire Editorial" on category === "News"
```

Add to `package.json`:
```json
"audit": "npx tsx scripts/audit-registry.ts"
```

Run: `npm run audit` — zero issues should be the target before every deploy.

---

### 3. Consolidate Categories in the Registry

Current: `Tech`, `Technology`, `SaaS`, `General`, `Gaming`, `Video Games` are split.

Open `lib/content-registry.ts` and do a find-replace:
- `category: 'Tech'` → `category: 'Technology'`
- `category: 'SaaS'` → `category: 'Technology'`
- `category: 'General'` → `category: 'News'`
- `category: 'Video Games'` → `category: 'Gaming'`

Then update `scripts/sync-registry.ts` CATEGORY_MAP to use the consolidated names so new auto-synced entries are consistent.

**Canonical categories: Technology | Gaming | Sports | Entertainment | Finance | Science | News | YouTube | Reference | Meta**

---

### 4. Fix All Descriptions in the Registry

Any description that:
- Is fewer than 130 characters
- Is a generic stub like "ObjectWire coverage of..."
- Is a duplicate of another entry

...must be rewritten with:
- Primary keyword in the first 60 characters
- 130–155 total characters
- Unique, article-specific language

Run `npm run audit` (after step 2) to find them all at once.

---

## Stage 2 — Per-Article Components (Every New Article)

Every article page must include all of these. Use this as a copy-paste checklist.

### Required Component Stack

```tsx
// app/[section]/[slug]/page.tsx

export const metadata = {
  title: '[Primary Keyword] — Exact Headline | ObjectWire',   // ≤ 60 chars, keyword first
  description: '[Unique, 130–155 chars, keyword in first 60]',
  keywords: ['keyword 1', 'keyword 2', ...],                  // 10–15 phrases
  openGraph: {
    title: '...',
    description: '...',
    url: 'https://www.objectwire.org/[full/slug]',
    type: 'article',
    publishedTime: '2026-MM-DDTHH:MM:SSZ',
    section: 'Technology',                                     // Canonical category
    images: [{ url: '...', width: 1200, height: 675, alt: '...' }],
  },
  alternates: { canonical: 'https://www.objectwire.org/[full/slug]' },
};

export default function ArticlePage() {
  return (
    <SEOWrapper slug="/[full/slug]">          {/* must exactly match registry slug */}
      <Breadcrumb />                           {/* 3–4 levels minimum */}
      <NewsArticleSchema
        title="..."
        description="..."
        author="First Last"                    {/* real name — not generic */}
        publishedTime="2026-MM-DDTHH:MM:SSZ"
        imageUrl="https://www.objectwire.org/images/..."
        articleUrl="https://www.objectwire.org/[full/slug]"
        section="Technology"
        keywords={['keyword 1', 'keyword 2']}
      />
      <article>
        <h1>[Title — must match metadata.title headline exactly]</h1>
        {/* content */}
        {/* 4–6 <Link> internal links to related pages at the bottom */}
      </article>
    </SEOWrapper>
  );
}
```

### Component Checklist per Article

- [ ] `metadata` export — title (≤60 chars, keyword first), description (130–155), canonical, OG image 1200×675
- [ ] `<SEOWrapper slug="...">` — slug matches registry exactly
- [ ] `<NewsArticleSchema>` — all props filled with real data
- [ ] `<Breadcrumb>` — 3+ levels
- [ ] `<h1>` — matches metadata title headline exactly
- [ ] Hero image — `next/image`, width + height set (prevents CLS)
- [ ] 4–6 internal `<Link>` cards to related ObjectWire pages
- [ ] Real author name in both `NewsArticleSchema` and registry entry

---

## Stage 3 — Content Registry Entry (After Every New Article)

After `npm run build` auto-syncs the entry, go back and patch:

```ts
{
  slug: '/[full/slug]',
  title: '[Title without | ObjectWire]',
  description: '[Unique 130–155 char description]',  // ← patch this
  publishDate: 'YYYY-MM-DD',
  modifiedDate: 'YYYY-MM-DD',
  category: 'Technology',                             // ← use canonical category
  tags: ['tag1', 'tag2', 'tag3', 'tag4', 'tag5'],    // ← 5–10 tags
  author: 'First Last',                               // ← real name
  priority: 0.9,                                      // 0.9 breaking, 0.7 news, 0.5 evergreen
  changeFrequency: 'daily',                           // daily|weekly|monthly
  imageUrl: 'https://www.objectwire.org/images/...', // ← CRITICAL — patch this
  imageWidth: 1200,                                   // ← CRITICAL
  imageHeight: 675,                                   // ← CRITICAL
  imageAlt: 'Descriptive alt text',
}
```

**Verify inclusion:** after build + deploy, open `/news-sitemap.xml` — the slug must appear if `publishDate` is within 2 days.

---

## Stage 4 — Build Automation Improvements

### 4a. Build `RelatedArticles` Component

Auto-suggest related articles from registry `tags[]` overlap instead of hardcoding links.

```ts
// components/RelatedArticles.tsx
// Props: currentSlug, maxResults (default 4)
// Logic: fetch all registry entries, score by tags[] intersection with current entry, return top N
```

Replace manual interlink grids in existing articles once built.

---

### 4b. Enforce Breadcrumb Depth

Add a lint check in `scripts/audit-registry.ts` (or a separate script) that verifies every route has a `<Breadcrumb>` with 3+ levels. Quick check: grep all `page.tsx` files for `<Breadcrumb` and flag any missing.

---

### 4c. Add `loading="lazy"` to YouTube Embeds

Find all YouTube `<iframe>` elements in the codebase:

```bash
# In terminal:
Select-String -Path "app/**/*.tsx" -Pattern "<iframe" -Recurse
```

Add `loading="lazy"` to every one that doesn't already have it. This directly impacts Core Web Vitals (LCP/FID).

---

## Stage 5 — Cluster Buildout (Priority Content)

Build hub → sub-article clusters. Every sub-article links back to hub; hub links to all sub-articles.

### Cluster 1 — `/video-games/gta-6` (7 articles)
- [ ] Hub: `/video-games/gta-6`
- [ ] Pre-orders, Price, PC release, Map, Characters, Online, System Requirements

### Cluster 2 — `/video-games/forza-horizon-6` (5 articles)
- [ ] Hub + Cars, Map, Editions, Routes, PC Specs

### Cluster 3 — `/video-games/switch2` (5 articles)
- [ ] Hub + Specs, Games, Price, Compatibility, Joy-Con

### Cluster 4 — `/apple` (5 articles)
- [ ] Hub + iPhone 18, WWDC 2026, Core AI, Mac Mini M5, Apple TV F1

### Cluster 5 — `/google` (4 articles)
- [ ] Hub + Gemini 3, AI Plus, Agentic Vision, Pixel 11

**Rule:** every article in a cluster must have a link TO the hub AND the hub must have a link card TO the article. No orphan sub-articles.

---

## Stage 6 — Programmatic Scaling (Month 2–3)

### 6a. Scale `/define/` Pages

Current: ~13 pages. Target: 200+.

Pattern: `/define/[term]` — "What is [term]", short reference article, no date dependency, `changeFrequency: 'monthly'`, `priority: 0.5`. Auto-generate from a terms array + template.

Priority terms: CUDA, LLM, Transformer, RAG, LoRA, Diffusion Model, API, Tokenizer, VRAM, Fine-Tuning, Inference, RLHF, Embedding, Vector Database, ...

### 6b. Scale Company Profiles

Current: ~12 profiles. Target: 100+.

Pattern: `/saas/[company]` — overview, products, funding, team.

### 6c. Pre-Build Event Pages

Build before the event so Google indexes them in advance:
- `/events/wwdc-2026`
- `/events/google-io-2026`
- `/events/e3-2026`
- `/events/ces-2027`

---

## Quick-Reference: New Article in Under 5 Minutes

```
□ 1. Create page.tsx with metadata (title, desc, OG image, canonical)
□ 2. Add SEOWrapper + NewsArticleSchema + Breadcrumb + h1 components
□ 3. Include hero image (1200×675+, next/image)
□ 4. Add 4–6 internal <Link> cards to related pages
□ 5. npm run build  (prebuild auto-registers entry in registry)
□ 6. Open /news-sitemap.xml — verify slug appears
□ 7. Patch registry entry: imageUrl + imageWidth + imageHeight + description
□ 8. Push to GitHub → deploy
```

For breaking news via Supabase CMS (no build):
```
□ 1. Open /admin/editor
□ 2. Write article with heading, paragraph, image blocks
□ 3. Set status: published → live in < 1 minute
□ 4. Entry auto-enters news sitemap via dynamic route
```

---

## Non-Negotiables — Zero Exceptions

| # | Requirement | Consequence if Missing |
|---|---|---|
| 1 | `metadata.title` — keyword first, ≤ 60 chars | Won't rank for target keyword |
| 2 | `metadata.description` — unique, 130–155 chars | Low CTR, possible demotion |
| 3 | OG image 1200×675+ in metadata | Blocked from Top Stories, Discover |
| 4 | `canonical` URL set | Duplicate content penalty |
| 5 | Registry entry — all fields complete | No JSON-LD, no sitemap, invisible to Google |
| 6 | `imageUrl` + `imageWidth` + `imageHeight` in registry | Ineligible for Top Stories carousel |
| 7 | `publishDate` accurate | Wrong news sitemap window |
| 8 | `tags[]` with 5–10 items | Weak topical signal |
| 9 | `NewsArticleSchema` on page | No structured data for Google News |
| 10 | `SEOWrapper` with correct slug | No JSON-LD injected |
| 11 | `Breadcrumb` 3+ levels | No BreadcrumbList rich result |
| 12 | 4–6 internal links | Low internal PageRank flow |
| 13 | `<h1>` matches metadata title | Trust signal drop (Google cross-checks) |
| 14 | Real author name | E-E-A-T weakened |
| 15 | `next/image` with width + height | CLS penalty in Core Web Vitals |

---

## Weekly Tracking

| Metric | Source | Target |
|---|---|---|
| Indexed pages | Google Search Console → Coverage | 100% |
| Avg position (pillar keywords) | GSC → Performance | < 20 |
| CTR | GSC → Performance | > 3% |
| Top Stories appearances | GSC → Search Appearance | 10+/week by month 3 |
| Registry completeness | `npm run audit` | 0 issues |
| Core Web Vitals | GSC → CWV | All green |

---

## Milestones

| Month | Target Sessions | Pages Live |
|---|---|---|
| 1 | 2K–5K | 360 |
| 3 | 12K–25K | 450 |
| 6 | 40K–65K | 600 |
| 12 | **100K+** | 900+ |

---

*Source documents: [seo_contentregistry_auto.md](seo_contentregistry_auto.md) · [SEO_NEXTSTEPS_CONTEXT.md](SEO_NEXTSTEPS_CONTEXT.md) · Full strategy: [100k_organicsearch.md](100k_organicsearch.md)*
