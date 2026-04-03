# Components | ObjectWire

> **What every file in `/components` does, how the content registry connects to each one, and the full gap analysis between the current system and IGN/CNN-scale organic traffic.**

Related: [googlenews-seo.md](googlenews-seo.md) · [supabase-library.md](supabase-library.md)

---

## Table of Contents

1. [How the Content Registry Connects to Components](#1-how-the-content-registry-connects-to-components)
2. [Article Layout Components](#2-article-layout-components)
3. [SEO & Structured Data Components](#3-seo--structured-data-components)
4. [Hub & Navigation Components](#4-hub--navigation-components)
5. [Rich Content Block Components](#5-rich-content-block-components)
6. [Content Discovery Components](#6-content-discovery-components)
7. [Auth & User Components](#7-auth--user-components)
8. [Newsletter Components](#8-newsletter-components)
9. [Vertical-Specific Components](#9-vertical-specific-components)
10. [Infrastructure Components](#10-infrastructure-components)
11. [UI Primitive Components](#11-ui-primitive-components)
12. [What Is Missing, IGN & CNN Traffic Gap Analysis](#12-what-is-missing--ign--cnn-traffic-gap-analysis)

---

## 1. How the Content Registry Connects to Components

`lib/content-registry.ts` is not a data store, it is **the connection layer between page metadata and every component that does SEO or navigation work**. Understanding this prevents the most common mistake: writing metadata twice.

```
content-registry.ts entry
         │
         ├── SEOWrapper.tsx
         │     reads: title, description, publishDate, author, authorSlug,
         │             imageUrl, imageWidth, imageHeight, modifiedDate
         │     emits: NewsArticle JSON-LD + BreadcrumbList JSON-LD
         │
         ├── app/news-sitemap.xml/route.ts
         │     reads: slug, title, publishDate, imageUrl, imageWidth, imageHeight
         │     emits: <url> entries for Google News crawler
         │
         ├── app/sitemap.ts
         │     reads: slug, priority, changeFrequency, modifiedDate
         │     emits: full sitemap.xml
         │
         ├── ServiceInterlinks.tsx
         │     reads: tags, category, slug (to exclude current page)
         │     emits: "Related Coverage" internal link block
         │
         └── NewsLibrary.tsx
               reads: publishDate, title, description, imageUrl, category
               emits: article grid / archive list
```

### The rule: never hardcode metadata on a page that is already in the registry

If a page is registered in `content-registry.ts`, its title, description, author, dates, and image are already declared. `SEOWrapper` reads them automatically, do not duplicate them inside a `NewsArticleSchema` block on the same page. One source of truth.

Conversely: if a page is **not** registered, `SEOWrapper` emits nothing and the article earns zero structured data credit with Google. Every published article needs a registry entry.

---

## 2. Article Layout Components

These are the "templates", the React wrappers that define what a page looks like. Choosing the right one for the article type is the most important decision per publish.

### `JackArticle.tsx` | 1,286 lines

**Use for:** Tech / gaming / finance news and reports.

Two modes controlled by `layout` prop:
- `layout="news"`, hero image, right sidebar, category badge, byline, section navigation
- `layout="report"`, full-width monochrome, serif-heavy, research document aesthetic

**Sub-components exported:**

| Export | Purpose |
|---|---|
| `JackArticle` | Main wrapper, schema, header, sidebar, body, footer |
| `JackSection` | Numbered section heading + content wrapper |
| `JackSubheading` | Subsection heading (H3 level) |
| `JackCallout` | Left-border callout box (insight/warning/data) |
| `JackCard` | Bordered data/asset card |
| `JackCardGrid` | Responsive grid of `JackCard`s |
| `JackCaseOverview` | Key facts summary box (dark header) |
| `JackStats` | Statistics display box with review scores |
| `JackProcess` | Step-by-step numbered process diagram |
| `JackQuote` | Attributed blockquote |
| `JackImage` | Image with caption and credit line |
| `JackVideo` | YouTube / Vimeo embed |
| `JackIndicatorGrid` | Strategic indicator summary grid |
| `JackSideBlock` | Thick left-border indented content block |

**Registry connection:** `JackArticle` accepts `author`, `publishDate`, `category` as direct props — these should be pulled from the registry entry, not hardcoded independently.

---

### `NewsArticle.tsx` | 770 lines

**Use for:** Entertainment / breaking news / event coverage.

Flashy editorial aesthetic: large hero, gradient header, bold category tags.

**Sub-components exported:**

| Export | Purpose |
|---|---|
| `NewsArticle` | Main wrapper, hero image, header bar, body |
| `HighlightBox` | Colored callout for key quotes or data points |
| `EmbedBox` | Social media / iframe embed container |
| `ImageGallery` | Multi-image hover-zoom gallery |
| `Timeline` | Vertical event timeline |
| `TagsSection` | Hashtag cloud at article bottom |
| `RelatedStories` | Related article card grid |
| `TopicTag` | Colored topic flag badge |
| `NewsHeader` | Standalone header bar (used in composite layouts) |

---

### `ObjectDesign.tsx` | 1,032 lines

**Use for:** Long-form profiles, deep-dives, flagship evergreen articles that need both reference structure and visual impact. Think: Wikipedia article aesthetics with ObjectWire design polish.

**Sub-components exported:**

| Export | Purpose |
|---|---|
| `ObjectDesign` | Main layout wrapper |
| `ObjInfoBox` | Dark-header sidebar infobox with thumbnail (like Wikipedia's) |
| `ObjTOC` | Numbered table of contents with smooth scroll |
| `ObjSection` | Content section with styled heading |
| `ObjHighlight` | Pull-quote / key stat callout card |
| `ObjQuote` | Large editorial pull-quote |
| `ObjCallout` | Alert / insight / breaking callout box |
| `ObjTimeline` | Vertical event timeline |
| `ObjStat` | Inline stat highlight |
| `ObjStatGrid` | Grid of stat cards |
| `ObjImageGallery` | Hover-zoom image gallery |
| `ObjEmbed` | Social embed placeholder |
| `ObjTags` | Tag cloud |
| `ObjRelated` | Related article card grid |
| `ObjExternalLinks` | External links list |

---

### `ArticlePage.tsx` | 502 lines

**Use for:** Evergreen Wikipedia-style reference articles. Older pattern, predates `ObjectDesign`. Still used on citation-heavy pages like definitions and company histories.

**Sub-components:** `InfoBox`, `TableOfContents`, `ArticleSection`, `RelatedLinks`, `ExternalLinks`, `BreadcrumbNav`.

---

### `ArticleLayout.tsx`

**Use for:** Thin shell wrapper for articles that need the standard page chrome (nav, footer, max-width container) without opinionated inner layout. Used when building completely custom article bodies.

---

### `CreatorArticle.tsx`

**Use for:** Creator / influencer-focused editorial content. Designed around profile + content format for creator profiles and associated coverage.

---

### `DynamicNewsArticle.tsx`

**Use for:** Wrapping Supabase-sourced articles (`/blog/[slug]`) with the `NewsArticle` shell. This is the bridge between the DB-driven content system (see [supabase-library.md](supabase-library.md)) and the visual layout layer. Takes `ArticleRenderer` output and frames it as a `NewsArticle` page.

---

## 3. SEO & Structured Data Components

These components emit JSON-LD structured data that Google reads directly. They are **not visible to users**, they live in the `<head>` or as `<script type="application/ld+json">` blocks.

### `SEOWrapper.tsx` | 129 lines

**The primary SEO component.** Wrap any registered page with this and it automatically injects:

1. `NewsArticle` JSON-LD, from the registry entry (title, description, author, dates, image, keywords)
2. `BreadcrumbList` JSON-LD, auto-generated from the page slug

```tsx
<SEOWrapper slug="/technology/cursor">
  {/* page content */}
</SEOWrapper>
```

**Registry dependency:** Will emit nothing if the slug is not registered. Every article must be in `content-registry.ts` for this to work.

---

### `NewsArticleSchema.tsx`

Three named exports, use when you need finer control than `SEOWrapper` provides, or for pages not in the registry.

| Export | JSON-LD type emitted |
|---|---|
| `NewsArticleSchema` | `NewsArticle`, article-level structured data |
| `OrganizationSchema` | `Organization`, publisher/brand signal |
| `WebSiteSchema` | `WebSite`, sitelinks searchbox eligibility |

`OrganizationSchema` and `WebSiteSchema` should be mounted once at the root layout, not on individual pages.

---

### `FAQAccordion.tsx`

**Use for:** Any page with a Q&A section. Emits `FAQPage` JSON-LD automatically, which gives Google the FAQ expandable results directly in SERP (significant CTR lift on informational queries).

```tsx
<FAQAccordion items={[{ question: "...", answer: "..." }]} />
```

**Sub-components:** `FAQAccordion` (visible), `FAQSchema` (invisible JSON-LD only — use when you want the schema without the accordion UI).

---

### `Breadcrumb.tsx`

Renders visible breadcrumb navigation. Note: `SEOWrapper` emits `BreadcrumbList` JSON-LD automatically, `Breadcrumb.tsx` is the **visible** companion, not a duplicate.

---

## 4. Hub & Navigation Components

### `Hub.tsx` | 360 lines

**Use for:** Topic landing pages — the aggregator pages for each vertical (Winter Olympics, Formula 1, etc.).

**Sub-components:**
- `Hub`, root dark-gradient wrapper
- `Hub.Section`, titled content section with icon
- `Hub.InfoGrid`, stat/info grid
- `Hub.Card`, linked story card with badge and emoji
- `Hub.Table`, data table

---

### `MobileNav.tsx`

Mobile slide-out navigation drawer. Mounted in the root layout. Handles vertical navigation links for all major topic sections.

---

### `SearchBar.tsx`

Site search input. Routes to `/search?q=...`. Should be present in hub pages and the main header for discoverability.

---

## 5. Rich Content Block Components

### `CoverageMap.tsx`

Interactive geographic coverage map. Used on investigative/world news articles to show where events are happening. Visual differentiation from text-only competitors.

### `ReactionBar.tsx`

User reaction button strip (emoji votes attached to an article slug). Drives micro-engagement signals. Data stored in Supabase. Exported from both `ReactionBar.tsx` directly and re-exported from `NewsArticle.tsx` for convenience.

### `discord-comments.tsx`

Embeds a Discord comment thread keyed to an article slug. Used as the comment system. Requires active Discord server integration.

---

## 6. Content Discovery Components

### `ServiceInterlinks.tsx`

Reads `content-registry.ts` and emits an internal link block ("Related Coverage") for the current page. Matches on `tags` and `category`. Critical for SEO, internal linking passes PageRank between related articles and signals topical depth to Google.

**Props:**
- `currentPath`, slug of the current page (excluded from results)
- `limit`, number of related links to show (default: 4–6)

### `NewsLibrary.tsx`

Full article archive / grid component. Reads registry data to render filterable lists of articles by category, date, or tag. Used on hub pages and the `/index` archive.

---

## 7. Auth & User Components

| Component | Purpose |
|---|---|
| `AuthProvider.tsx` | Supabase auth context wrapper, mounts at root layout |
| `AuthButton.tsx` | Sign in / sign out toggle button |
| `AuthTracker.tsx` | Tracks auth state changes, syncs to analytics |
| `SignInButton.tsx` | Standalone sign-in CTA button |
| `UserProfile.tsx` | Logged-in user avatar + menu dropdown |

These power the gated admin editor and future personalization features.

---

## 8. Newsletter Components

| Component | Purpose |
|---|---|
| `NewsletterDropdown.tsx` | Email capture dropdown (header trigger → panel) |
| `NewsletterSignupInline.tsx` | Inline email capture embed for use mid-article |

Both connect to the mailing list integration. `NewsletterSignupInline` is the one to embed inside article bodies for list growth.

---

## 9. Vertical-Specific Components

These are dedicated header/sidebar/stats components for content verticals. Each vertical gets its own visual identity.

### `finance/`

| Component | Purpose |
|---|---|
| `FinanceHeader.tsx` | Finance section header with market-style branding |
| `FinanceSidebar.tsx` | Finance article sidebar (related stories, market context) |
| `TickerGrid.tsx` | Live or static stock/crypto ticker grid |

### `tech/`

| Component | Purpose |
|---|---|
| `TechHeader.tsx` | Technology section header |
| `TechSidebar.tsx` | Tech article sidebar |
| `TechStatsBar.tsx` | Stats bar for tech metrics (ARR, users, valuation, etc.) |

**Missing verticals that need equivalent component sets:** Gaming, Entertainment, Sports, World News — each is currently borrowing `JackArticle` or `NewsArticle` without vertical-specific headers/sidebars. IGN has a distinct visual identity per sub-section (reviews, news, video, wiki). So does CNN (politics, business, entertainment, sport). ObjectWire's vertical components need to match that differentiation at scale.

---

## 10. Infrastructure Components

| Component | Purpose |
|---|---|
| `GoogleAnalytics.tsx` | Injects GA4 tracking script (mounted in root layout) |
| `CookieConsent.tsx` | GDPR/CCPA cookie consent banner |
| `ImageUploader.tsx` | Admin-side image upload to storage (used in editor) |

---

## 11. UI Primitive Components

Located in `components/ui/` — these are [shadcn/ui](https://ui.shadcn.com/) primitives. They are the raw building blocks used inside other components. Don't use them directly in article pages — always go through the article layout components.

| Component | Purpose |
|---|---|
| `badge.tsx` | Small label/badge pill |
| `button.tsx` | Button with variants (default, outline, ghost, destructive) |
| `card.tsx` | Card container with header/content/footer slots |
| `dropdown-menu.tsx` | Accessible dropdown menu |
| `input.tsx` | Form text input |
| `label.tsx` | Form label |
| `select.tsx` | Dropdown select |
| `separator.tsx` | Horizontal/vertical divider line |
| `tabs.tsx` | Tab navigation |
| `textarea.tsx` | Multi-line form input |

---

## 12. What Is Missing | IGN & CNN Traffic Gap Analysis

This section maps the exact structural gaps between ObjectWire's current component library and what IGN (120M+ monthly visitors) and CNN (150M+ monthly visitors) run to capture search traffic at scale. Each gap has a traffic mechanism explaining *why* it drives clicks.

---

### Gap 1 | `VideoObject` Schema Component

**Traffic mechanism:** YouTube-embedded and natively-hosted video content with `VideoObject` JSON-LD qualifies for the **Video carousel** in Google Search — a second top-of-page slot separate from the main text results and Google News. IGN gets enormous traffic from game trailers and gameplay videos being indexed with proper video schema.

**Current state:** `JackVideo` and `EmbedBox` embed YouTube iframes. No `VideoObject` JSON-LD is emitted. Google cannot identify these as indexable video content.

**Component needed:** `VideoSchema.tsx` — emits `VideoObject` JSON-LD with `name`, `description`, `thumbnailUrl`, `uploadDate`, `duration`, `contentUrl`, `embedUrl`, `publisher`.

---

### Gap 2 | `Review` + `Rating` Schema Component

**Traffic mechanism:** Every "[Game] Review" and "[Product] Review" query in Google shows star ratings in the SERP for sites that emit `Review` + `aggregateRating` JSON-LD. IGN owns the first page of nearly every game review query in part because their review pages emit this schema. The stars increase CTR by ~30% over plain blue links.

**Current state:** `JackStats` displays review score numbers visually. No `Review` JSON-LD is emitted. Google cannot surface star ratings in search results for ObjectWire reviews.

**Component needed:** `ReviewSchema.tsx` — emits `Review` + `AggregateRating` JSON-LD attached to a `VideoGame`, `Movie`, `Product`, or `CreativeWork` item type.

---

### Gap 3 | Tag Archive Pages

**Traffic mechanism:** For every tag (`#cursor`, `#gran-turismo`, `#pokemon`), IGN and CNN have a live archive page (`/ign/tag/gran-turismo`) that aggregates all articles about that topic. These pages rank for broad topic queries ("gran turismo news", "pokemon news 2026") where single articles don't — they're topical index pages that compound with every new article added. For CNN, tag pages drive millions of monthly sessions on evergreen topic queries.

**Current state:** Tags exist in `content-registry.ts` entries and are displayed via `TagsSection` / `ObjTags`. There are **no corresponding routable archive pages** that Google can crawl and index.

**Component needed:** Tag hub component + dynamic route at `app/tags/[tag]/page.tsx` that reads the registry, filters by tag, and renders a paginated article list. Each tag page needs `CollectionPage` JSON-LD.

---

### Gap 4 | Pagination Component

**Traffic mechanism:** Archive pages, tag pages, and category hubs need paginated navigation with proper `rel="next"` / `rel="prev"` link tags. Without pagination, Google only sees the first N articles on any list page. IGN's category archives run to 1,000+ pages per genre — each page is an indexed entry point for a cluster of articles.

**Current state:** No pagination component exists. `NewsLibrary.tsx` renders a flat list with no page breaks.

**Component needed:** `Pagination.tsx` with `rel="next"` / `rel="prev"` head injection.

---

### Gap 5 | `HowTo` Schema Component

**Traffic mechanism:** "How to" queries trigger a rich result in Google with step-by-step UI directly in the SERP. These are some of the highest-impression placements in search. CNN's tech section and IGN's wiki/guide sections own large volumes of these.

**Current state:** How-to content can be written in `JackSection`s but no `HowTo` JSON-LD is emitted.

**Component needed:** `HowToSchema.tsx` — emits `HowTo` JSON-LD with `name`, `step[]` (each with `name`, `text`, optional `image`), `totalTime`, optional `tool[]` and `supply[]`.

---

### Gap 6 | `Event` Schema Component

**Traffic mechanism:** Event listings (`Formula 1 race schedule`, `Nintendo Direct date`) with `Event` JSON-LD appear in the **Events rich result** above organic results. CNN's entertainment and sports coverage drives significant traffic from event queries. IGN deploys event schema for game launches, Nintendo Directs, and esports tournaments.

**Current state:** Events are covered editorially (Winter Olympics hub, Formula 1 pages) but no `Event` JSON-LD is emitted. ObjectWire's event pages are invisible to the Events carousel.

**Component needed:** `EventSchema.tsx` — emits `Event` JSON-LD with `name`, `startDate`, `endDate`, `location`, `organizer`, `eventStatus`, `eventAttendanceMode`.

---

### Gap 7 | `Podcast` / `AudioObject` Schema Component

**Traffic mechanism:** Google surfaces podcasts in a dedicated Podcast app and in search results with `PodcastEpisode` / `PodcastSeries` JSON-LD. ObjectWire has a podcasts section (`/podcasts`) but no structured data for episodes.

**Current state:** `/podcasts` hub exists. No `PodcastEpisode` or `AudioObject` JSON-LD is emitted on episode pages.

**Component needed:** `PodcastSchema.tsx` — emits `PodcastEpisode` and `PodcastSeries` JSON-LD.

---

### Gap 8 | Author Expertise Pages (E-E-A-T)

**Traffic mechanism:** Google's E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) guidelines place heavy weight on verified author credentials for YMYL (finance, health) and news content. CNN contributors have Wikipedia pages, external citations, and full `Person` JSON-LD profiles. IGN's reviewers have years of byline history. Thin or missing author pages suppress ranking for topically sensitive queries.

**Current state:** Author pages exist at `/authors/[name]` but are minimal. No `Person` JSON-LD is emitted. No author article lists, credential sections, social profiles, or publication counts.

**Component needed:** `AuthorPageSchema.tsx` + a full author profile page template with `Person` JSON-LD, byline article history list, expertise areas, and external credentials section.

---

### Gap 9 | Trending / Popular Articles Sidebar Widget

**Traffic mechanism:** "Most popular" and "Trending now" sidebar widgets drive internal traffic from high-traffic articles to mid-tier articles, distributing PageRank across the site and reducing bounce rate. CNN and IGN both run these. Sites without them see high bounce on viral/news articles — traffic hits the article and exits.

**Current state:** `ServiceInterlinks.tsx` provides related links by tags. No trending/popular widget driven by actual read counts or Supabase analytics.

**Component needed:** `TrendingWidget.tsx` — queries Supabase for most-read articles in the last 48 hours (or uses `ReactionBar` count as proxy), renders a 5-item trending list in the article sidebar.

---

### Gap 10 | Live Score / Live Data Widgets

**Traffic mechanism:** IGN's biggest recurring traffic days align with game launches, review embargoes, and Nintendo Directs — but sustained daily traffic comes from wiki pages, leaderboards, and live game stats. CNN's largest sustained traffic driver is live election results and sports scores. Live data pages earn return visitors and bookmark behavior that static articles cannot.

**Current state:** `TickerGrid.tsx` exists for finance. No equivalent for sports scores, esports standings, or game launch countdowns.

**Component needed:** Vertical-specific live data components — `SportScoreWidget`, `EsportsStandingsWidget`, `LaunchCountdownWidget`.

---

### Summary | Gap Priority Matrix

| Gap | Traffic mechanism | Build complexity | Priority |
|---|---|---|---|
| Tag archive pages | Topical index, longtail cluster traffic | Medium | 🔴 High |
| `Review` + `Rating` schema | Star ratings in SERP, CTR lift | Low | 🔴 High |
| `VideoObject` schema | Video carousel placement | Low | 🔴 High |
| E-E-A-T author pages | Trust signals, YMYL ranking boost | Medium | 🔴 High |
| `HowTo` schema | How-to rich results, step UI in SERP | Low | 🟡 Medium |
| Trending sidebar widget | Bounce reduction, internal PageRank | Medium | 🟡 Medium |
| `Event` schema | Events carousel placement | Low | 🟡 Medium |
| Pagination | Archive depth, crawl coverage | Medium | 🟡 Medium |
| `Podcast` schema | Podcast app indexing | Low | 🟢 Low |
| Live data widgets | Return visitor behavior | High | 🟢 Low |

The four "High" items, tag archives, review schema, video schema, and E-E-A-T author pages, are the ones IGN and CNN invested in earliest and that drive the largest share of their sustained organic traffic. Building these in order closes the structural gap between ObjectWire's current footprint and the component surface area that search engines reward at scale.

---

## Related Files

```
components/
  JackArticle.tsx              ← Primary layout for tech/gaming/finance articles
  NewsArticle.tsx              ← Primary layout for entertainment/breaking news
  ObjectDesign.tsx             ← Long-form profile / deep-dive layout
  ArticlePage.tsx              ← Legacy evergreen reference layout
  DynamicNewsArticle.tsx       ← Supabase → NewsArticle bridge
  SEOWrapper.tsx               ← NewsArticle + BreadcrumbList JSON-LD (reads registry)
  NewsArticleSchema.tsx        ← Manual schema control (NewsArticle, Organization, WebSite)
  FAQAccordion.tsx             ← FAQ accordion + FAQPage JSON-LD
  Hub.tsx                      ← Topic hub landing page layout
  ServiceInterlinks.tsx        ← Internal link block (reads registry by tag)
  NewsLibrary.tsx              ← Article grid/archive (reads registry)
  finance/                     ← Finance vertical header/sidebar/ticker
  tech/                        ← Tech vertical header/sidebar/statsbar
  ui/                          ← shadcn primitives

lib/
  content-registry.ts          ← Source of truth for all static page metadata

Docs/
  components.md                ← This file
  googlenews-seo.md            ← Google News SEO strategy
  supabase-library.md          ← Supabase / dynamic article pipeline
```
