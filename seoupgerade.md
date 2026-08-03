# OzoneNews | SEO Upgrade Plan

**Goal:** Make every dynamically published CMS article receive the same crawlable internal-link structure, schema, editorial validation, and topical relationship as the best existing static articles.

**Status:** Planning complete. Implementation not yet started.

---

## Phase 1: Internal-Link Engine & Interlinking Automation

### Objective
Ensure every dynamically rendered article automatically receives a server-rendered internal linking grid (`moreFromHub`, breadcrumbs, category hub links, and cluster sibling links) in HTML on the server.

### Key Actions

1. **Unify `news_article` Rendering Path**
   - **Current State:** `app/[...slug]/page.tsx` calls `<NewsArticle>` directly for `news_article`, leaving `moreFromHub` and derived breadcrumbs empty.
   - **Plan:** Route `news_article` in `app/[...slug]/page.tsx` through `<NewsArticleDB slug={article.slug} />` or a shared helper function in `lib/article-service.ts`.

2. **Server-Rendered `moreFromHub` Cluster Links**
   - Extract `moreFromHub` calculations into a reusable helper in `lib/registry-service.ts` or `lib/article-service.ts`.
   - Compute 6 relevant cluster articles based on:
     1. Exact sub-hub URL prefix match (e.g. `/tech/intel/` or `/space/rockets/`).
     2. Matching `topic_tag` (e.g. `ai`, `gaming`, `science`).
     3. Category fallback.
   - Ensure these render as standard `<a>` tags with absolute or relative URLs, title, date, category badge, and thumbnail.

3. **Structured Breadcrumbs**
   - Ensure `deriveBreadcrumbs` automatically parses 3- to 4-level URL paths (e.g. `Home > Tech > Intel > Article Title`) and passes both the HTML UI breadcrumb and `BreadcrumbList` schema.

---

## Phase 2: Schema & Structured Data Standardization

### Objective
Ensure 100% schema parity across static and dynamically published content.

### Key Actions

1. **Centralize Article Schema Generation**
   - Ensure `app/[...slug]/page.tsx` injects a complete, valid set of schemas:
     - `NewsArticle` or `Article` (via `buildArticleSchema` in `lib/article-schema.ts`)
     - `BreadcrumbList` matching the visible trail
     - Author `Person` entity referencing `lib/authors.ts` (with `@id`, `jobTitle`, `sameAs`, `knowsAbout`)
     - `FAQPage` (when `faqItems` or `<CitationBlock>` / `<FAQAccordion>` exist in content)
     - `NewsMediaOrganization` publisher logo and trust policies

2. **Canonical & OpenGraph Alignment**
   - Verify `metadata.alternates.canonical`, `openGraph.url`, `openGraph.images`, and `twitter.images` always resolve to full HTTPS canonical URLs.

---

## Phase 3: Automated Quality & Editorial Validation

### Objective
Prevent thin, un-linked, or improperly formatted content from publishing or staying live unnoticed.

### Key Actions

1. **Create Static Content Corpus Validator**
   - Create `scripts/validate-static-articles.ts` to scan every JSON file in `content/static/` (not just `page.tsx` stubs).
   - Check every article against:
     - Word count >= 300 (target 600+)
     - 4+ internal links (`<a href="/...">`)
     - 1+ external source link (`<a href="https://...">`)
     - 1+ `<h2>` heading
     - Zero em dashes (`|`, not `-` and not the banned dash characters) in title or body
     - Valid `author_slug` registered in `lib/authors.ts`
     - No AI boilerplate phrases ("delve into", "in conclusion", "it is important to note")
     - Meta description length (130-155 chars)

2. **Strict CMS Publish Gate**
   - Update `app/api/cms/publish/route.ts` to enforce hard checks before committing to GitHub, or return explicit actionable feedback in the editor sidebar.

3. **Clean Existing Metadata Warnings**
   - Resolve the 31 static metadata warnings reported by `npm run validate:eeat` (truncating long titles over 60 chars and descriptions over 155 chars).

---

## Phase 4: Topical Clustering & Entity Authority

### Objective
Build explicit, crawlable content clusters that signal topical authority to Google Search and AI crawlers.

### Key Actions

1. **Hub-and-Spoke Linking Structure**
   - Enforce that every article in a topic cluster includes:
     - 1 link up to the hub page (e.g., `/space`)
     - 2 links across to sibling articles in the same cluster
     - 1 link to the author profile page (`/authors/[slug]`)

2. **Topic Hub Aggregation**
   - Upgrade category and topic hub pages (such as `/space`, `/tech`, `/science`) to query the registry dynamically by `category` and `topic_tag` so newly published CMS articles instantly appear on category hub pages upon publish.

---

## Summary Checklist

- [ ] 1. Unify dynamic route (`app/[...slug]/page.tsx`) with `NewsArticleDB`
- [ ] 2. Server-render `moreFromHub` 6-article cluster links for all articles
- [x] 3. Add static JSON article validator script (`scripts/validate-static-articles.ts`) — integrated into `prebuild.ts`
- [ ] 4. Enforce publish gate in CMS publish route
- [ ] 5. Fix 31 current metadata warnings — partially resolved (5 BluePink entries fixed, 31 E-E-AAT warnings remain on hub pages)
