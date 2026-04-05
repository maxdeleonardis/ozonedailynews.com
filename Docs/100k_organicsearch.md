# 100K Organic Search | ObjectWire Growth Plan

> **Goal:** Reach 100,000 monthly organic search sessions within 12 months.
> **Last updated:** April 4, 2026
> **Starting baseline (March 2026):** ~330 indexed pages, 25+ verticals.
> **Current state (April 2026):** 560 pages, 5 active Hub pages, full GA4 + custom tracking, registry migrated to Supabase.

---

## Implementation Status | April 2026 Audit

### What Has Been Built (Completed)

| Feature | Status | Details |
|---|---|---|
| Content Registry | ✅ Done | Migrated from local TS to Supabase `content_registry` table. Auto-synced on every build via `prebuild` script. |
| Sitemap (main) | ✅ Done | Dynamic, registry-driven, sorted by priority, 24h revalidation. `app/sitemap.ts` |
| News Sitemap | ✅ Done | 2-day rolling window, auto-feeds from registry. `app/news-sitemap.xml/route.ts` |
| JSON-LD Structured Data | ✅ Done | `NewsArticle` + `BreadcrumbList` schema on every article. |
| Breadcrumbs | ✅ Done | Visual + JSON-LD `BreadcrumbList` schema. Accessible. `components/nav/Breadcrumb.tsx` |
| RelatedArticles | ✅ Done | Automatic client component. Reads user `localStorage` reading history, matches by category + tags, ranks by overlap + recency. Zero manual curation. |
| GA4 Integration | ✅ Done | Client-side page views on every navigation. Measurement ID: `G-9FM4W3K6GV`. `components/GoogleAnalytics.tsx` |
| Custom Event Tracking | ✅ Done | `article_engagement`, `time_spent`, `article_reaction`, `email_signup` events via `lib/tracking.ts`. |
| Server-Side Analytics | ✅ Done | Measurement Protocol API at `/api/analytics/identify`. Hashed email, visitor identity persisted. |
| Article View Tracking | ✅ Done | `ArticleViewTracker` component logs per-user views to `article_view_history` table (slug, title, url, image, category). Max 50 items, 7-day TTL. |
| Scroll Depth + Time on Page | ✅ Done | `usePageTracking()` hook captures scroll milestones and dwell time. |
| Author Pages | ✅ Done | 5 named authors (Jack Sterling, Jack Wang, Jack Brennan, Conan Boyle, Alfansa) + authors index. |
| Hub Pages | ✅ Partial | 5 active hubs built with `Hub.tsx`: Video Games, Crypto, MLS, Influencer, MHA. 50+ hub slugs defined but pages not yet created. |
| Definition Pages | ✅ Partial | 16+ pages in `/define/`. Target is 100+. |
| Newsletter | ✅ Done | `NewsletterSignupInline` on every `NewsArticle` page. |
| Article Components | ✅ Done | Full system: `NewsArticle`, `JackArticle`, `CreatorArticle`, `ArticlePage` + DB variants. |
| Admin Editor | ✅ Done | `/admin/editor` → Supabase → `/blog/[slug]` for non-developer publishing. |
| wiki:publish Pipeline | ✅ Done | Single command upserts to Supabase, adds registry entry, trims to stub. |
| Page Count | ✅ 560 pages | Up from ~330 baseline. Growth of 70% in 3 weeks. |

### What Still Needs to Be Done

| Gap | Priority | Impact | Effort |
|---|---|---|---|
| **Expand Hub pages to all pillars** | P1 | High | 2-3 days |
| **Fix registry images for top 50 articles** | P1 | Unlocks Google Top Stories | 1-2 days |
| **Register Google Publisher Center** | P1 | Required for Google News | 30 min |
| **Register Bing News PubHub** | P1 | Free distribution channel | 10 min |
| **Category consolidation (Tech/Technology, Gaming/Video Games)** | P2 | Cleaner topical signals | 1 day |
| **Scale definition pages to 100+** | P2 | Low-competition long-tail captures | Ongoing |
| **Build GTA 6, Switch 2, OpenAI clusters** | P1 | Highest search volume targets | 1-2 weeks |
| **Rewrite generic meta descriptions on top 30 pages** | P2 | Better CTR | 1 day |
| **Submit to Apple News** | P3 | Mobile traffic channel | 30 min |
| **Build custom analytics dashboard** | P2 | Internal traffic visibility | 2-3 days |

---

## Phase 1 | Foundation Fixes (Weeks 1-3) — MOSTLY COMPLETE

### 1.1 Registry Data Quality Pass — ✅ DONE (Supabase migration)

Registry moved to Supabase `content_registry` table. All fields available: `description`, `imageUrl`, `imageWidth`, `imageHeight`, `imageAlt`. Auto-synced on build.

**Remaining action:** Run a query against the registry to find entries still missing `imageUrl` and fix the top 50 by traffic. Use Unsplash API for sourcing images (key stored in user memory).

---

## Phase 2 | Hub Page Expansion + Content Engine (Weeks 3-8)

**Target: Build hub pages for every pillar vertical using `Hub.tsx`, then fill each with 5-7 cluster articles.**

### 2.1 Hub Page Strategy

The `Hub.tsx` component is battle-tested (Video Games, Crypto, MLS, Influencer, MHA all use it). Every pillar needs its own hub page with:
- `Hub.InfoGrid` for coverage stats
- `Hub.Section` + `Hub.CardGrid` for featured articles
- `Hub.LinkGrid` for sub-topic navigation
- `Hub.Table` for data (standings, timelines, comparisons)
- `Hub.StatBar` for key metrics
- Auto-discovered articles via `scanAllContent()` + `filterByCategory()`

### 2.2 Hub Pages to Build (Priority Order)

#### Tier 1 | High Volume, Existing Content Base

| Hub | Path | Search Volume | Existing Pages | Status | Sub-Articles Needed |
|---|---|---|---|---|---|
| **Video Games** | `/video-games` | 5M+/mo combined | 28 | ✅ Hub exists | GTA 6 cluster (7), Switch 2 cluster (5), Forza (5) |
| **Crypto** | `/crypto` | 1M+/mo | 15+ | ✅ Hub exists | Bitcoin halving, stablecoin regulation, DeFi protocol deep-dives |
| **MLS** | `/mls` | 500K+/mo seasonal | 4 | ✅ Hub exists | Team profiles, transfer tracker, match previews, standings updates |

#### Tier 2 | High Volume, Needs Hub Page

| Hub | Path | Search Volume | Existing Pages | Action |
|---|---|---|---|---|
| **Tech / AI** | `/tech` | 3M+/mo combined | 54 scattered | Build hub, consolidate `/open-ai`, `/google`, `/nvidia`, `/apple` as sub-hubs |
| **Finance** | `/finance` | 500K+/mo | 17 | Build hub with market data, earnings calendar, rate decision tracker |
| **Entertainment** | `/entertainment` | Seasonal | 21 | Build hub with streaming news, studio deals, awards coverage |
| **Sports** | `/sports` | 2M+/mo combined | Growing | Build hub linking to `/mls`, `/world-cup`, `/winter-olympics`, `/formula-1` |
| **World Cup 2026** | `/world-cup` | 5M+ seasonal peak | Started | Build hub before pre-event coverage begins (June ramp) |

#### Tier 3 | Authority Building, Lower Volume

| Hub | Path | Search Volume | Action |
|---|---|---|---|
| **OpenAI** | `/open-ai` | 3M+/mo | Expand from 3 to 10+ pages (GPT-5, o3, Sora, pricing, enterprise) |
| **Google** | `/google` | 2M+/mo | Expand from 3 to 8+ pages (Gemini 3.0, Pixel 11, AI Plus, I/O 2026) |
| **Nvidia** | `/nvidia` | 800K+/mo | Expand from 2 to 6+ pages (RTX 5090, CUDA, GTC 2026, Blackwell) |
| **Apple** | `/apple` | 1M+/mo | Good base (11 pages). Add WWDC 2026 preview, iPhone 18 rumors |

### 2.3 Practical Hub Build Pattern

Every new hub follows this exact pattern (copy from `/mls/page.tsx`):

```tsx
import { Hub } from '@/components/Hub';
import { Breadcrumb } from '@/components/nav/Breadcrumb';
import { SEOWrapper } from '@/components/SEOWrapper';
import { scanAllContent, filterByCategory } from '@/lib/content-scanner';

export default async function HubPage() {
  const allArticles = await scanAllContent();
  const filtered = filterByCategory(allArticles, 'CATEGORY');
  return (
    <SEOWrapper slug="/hub-path">
      <Breadcrumb items={[...]} />
      <Hub badge="LABEL" badgeColor="from-X to-Y" title="Hub Title" subtitle="...">
        <Hub.InfoGrid ... />
        <Hub.Section title="Featured" variant="card">
          <Hub.CardGrid>
            {/* Curated featured articles */}
          </Hub.CardGrid>
        </Hub.Section>
        <Hub.Section title="All Coverage">
          {/* Auto-discovered articles from scanAllContent */}
        </Hub.Section>
      </Hub>
    </SEOWrapper>
  );
}
```

### 2.4 Content Cadence

| Day | Article Type | Pillar | Example |
|---|---|---|---|
| Monday | Breaking news | Tech/AI | "OpenAI Announces GPT-5 Pricing" |
| Tuesday | Deep-dive / analysis | Gaming | "GTA 6 Pre-Orders Tracker | Every Edition, Price, Platform" |
| Wednesday | Breaking news | Entertainment | "Netflix Reports Q1 2026 Subscribers | 310M Milestone" |
| Thursday | Evergreen guide | Gaming/Tech | "Best Gaming Monitors 2026 | 4K 240Hz Buyer's Guide" |
| Friday | Breaking news | Finance | "Fed Holds Rates at 4.75% | March 2026 FOMC Decision" |
| Saturday | Weekend feature | Sports/Any | "MLS 2026 | Transfer Window Analysis" |
| Sunday | Update / roundup | Any | "This Week in AI | April 1-7 2026" |

### 2.5 SEO-First Article Checklist (Every Article Ships With)

```
✅ metadata.title       | keyword + specific detail (max 60 chars, no brand suffix)
✅ metadata.description | 130-155 chars, primary keyword in first 60 chars
✅ metadata.keywords    | 10-15 long-tail keywords
✅ canonical URL        | always set in alternates
✅ openGraph            | title, description, image (1200x675), publishedTime, section
✅ NewsArticleSchema    | matches registry entry exactly
✅ SEOWrapper           | slug pointed at registry
✅ Breadcrumb           | 3-4 levels deep
✅ H2 headings          | one per major section, keyword-rich, uses | separator
✅ Internal links       | 4-6 interlinks to related ObjectWire pages
✅ thumbnail + imageUrl | real Unsplash image, 1200px+ wide
```

---

## Phase 3 | Keyword Clusters + Topic Authority (Weeks 4-12)

**Target: Build deep clusters around 10 high-volume keyword families.**

### 3.1 Cluster Architecture — ✅ PROVEN

Each cluster follows this pattern (already working on Video Games, MLS, Crypto):

```
Hub Page (Hub.tsx, high authority, broad keyword)
 ├── Sub-article 1 (NewsArticle, specific long-tail)
 ├── Sub-article 2 (NewsArticle, specific long-tail)
 ├── Sub-article 3 (JackArticle, deep investigation)
 └── Sub-article N
```

All sub-articles link back to the hub. The hub auto-discovers sub-articles via `scanAllContent()`. Internal linking is **the single highest-leverage SEO tactic** for a new publisher.

### 3.2 Priority Clusters (Updated April 2026)

| # | Hub URL | Hub Keyword (monthly vol) | Status | Sub-Articles Needed |
|---|---|---|---|---|
| 1 | `/video-games/gta-6` | "GTA 6" (5M+/mo) | ✅ Hub exists | Pre-orders, price by country, PC release, map size, characters, online mode, system requirements |
| 2 | `/video-games/switch2` | "Nintendo Switch 2" (2M+/mo) | Needs hub | Switch 2 specs, launch games, price, backwards compatibility, Joy-Con 2 |
| 3 | `/video-games/forza-horizon-6` | "Forza Horizon 6" (500K+/mo) | Needs hub | Car list, map breakdown, editions comparison, Japan routes, PC specs |
| 4 | `/open-ai` | "OpenAI" (3M+/mo) | 3 pages, needs hub | GPT-5, ChatGPT Pro, o3 model, Sora video, pricing changes |
| 5 | `/google` | "Google news" (2M+/mo) | 3 pages, needs hub | Gemini 3, Google AI Plus, Agentic Vision, Pixel 11 |
| 6 | `/nvidia` | "Nvidia news" (800K+/mo) | 2 pages, needs hub | RTX 5090, CUDA updates, AI hardware, Blackwell B200 |
| 7 | `/apple` | "Apple news" (1M+/mo) | 11 pages, hub exists | iPhone 18, WWDC 2026, Core AI framework, Mac Mini M5 |
| 8 | `/mls` | "MLS" (500K+/mo) | ✅ Hub + 3 articles | Team profiles (28 remaining), transfer tracker, match previews, standings |
| 9 | `/world-cup` | "2026 World Cup" (5M+ seasonal) | Needs hub | Groups, schedule, venues, USA cities, ticket prices |
| 10 | `/winter-olympics` | "2026 Winter Olympics" (1M+ seasonal) | 32 pages, strong | Medal tracker, event schedule, maintain coverage |
| 11 | `/crypto` | "Crypto" (1M+/mo) | ✅ Hub exists | Bitcoin halving, stablecoin regulation, DeFi deep-dives |
| 12 | `/finance` | "Finance news" (500K+/mo) | Needs hub | Fed decisions, bank earnings, IPO tracker |

### 3.3 Cluster Completion Targets

| Month | Clusters Complete | Total New Articles | Cumulative Site Pages |
|---|---|---|---|
| Month 1 | 2 (GTA 6, Forza) | 30 | 360 |
| Month 2 | 4 (+Switch 2, Apple) | 60 | 390 |
| Month 3 | 6 (+Google, Nvidia) | 90 | 420 |
| Month 4 | 8 (+OpenAI, Olympics) | 120 | 450 |
| Month 5 | 10 (+World Cup, Finance) | 150 | 480 |
| Month 6–12 | Expand + maintain | 300+ | 630+ |

---

## Phase 4 | Google News Acceleration (Ongoing) — PARTIALLY COMPLETE

### 4.1 Top Stories Eligibility Checklist

| Requirement | Status | Notes |
|---|---|---|
| Published within last 2 days | ✅ Done | Auto via `publishDate` filter in news-sitemap |
| `NewsArticle` JSON-LD on page | ✅ Done | `NewsArticleSchema` component on every article |
| Listed in news sitemap | ✅ Done | Auto from content registry, 2-day window |
| `imageUrl` >= 1200px wide | ⚠️ Partial | Fixed on new articles (Unsplash API), legacy articles still need images |
| Publisher registered in Google Publisher Center | ❌ Not done | **Must do this week** |
| Transparent authorship | ✅ Done | 5 named authors with profile pages |
| Original reporting | ✅ Done | All content is original analysis + sourcing |

### 4.2 Breaking News Velocity

Google News rewards **first-to-publish**. When a story breaks:

1. Publish a 300-word stub within 30 minutes using the admin editor
2. Set `status: 'published'` immediately, it enters the news sitemap
3. Update the article with depth over the next 2 hours
4. Google re-crawls news sitemaps every 5–15 minutes

The Supabase CMS supports this workflow, no build/deploy needed for new articles.

### 4.3 Recency Signal

Google News devalues articles after 48 hours. Strategy:

- **Update articles** when new facts emerge, change `modifiedDate` in the registry
- **Publish follow-up articles** under the same hub rather than updating a stale URL
- **Weekly roundups** ("This Week in AI") capture tail-end traffic from multiple keywords

---

## Phase 5 | Technical SEO & Performance (Weeks 2–6)

### 5.1 Internal Linking Automation

Build a `RelatedArticles` component that reads the content registry and auto-suggests articles by matching `tags[]`:

```
Current article tags: ["GTA 6", "Rockstar Games", "Pre-orders"]
        ↓ scan registry for tag overlap
Suggested: GTA 6 hub, GTA 6 pre-orders tracker, Take-Two earnings
```

Place this at the bottom of every article automatically. Target: 4–6 internal links per article, zero manual effort.

### 5.2 Breadcrumb Depth

Current: Most articles have 2–3 breadcrumb levels.
Target: Every article has 3–4+ levels reflecting the hub/cluster hierarchy.

```
Home → Video Games → Racing → Forza Horizon 6
Home → Video Games → GTA 6 → Pre-Orders Tracker
Home → Technology → Google → Gemini 3 Flash
```

### 5.3 Page Speed

Current: Static pages via Next.js are fast. Ensure:
- All images use `next/image` with proper `width`/`height` to avoid CLS
- Lazy-load non-critical images below fold
- Keep first paint under 1.5s (Turbopack SSG already achieves this)

### 5.4 Mobile Optimization

- Verify all tables use `overflow-x-auto` (already done on NewsArticle tables)
- Test stat grids on 320px viewport
- Ensure YouTube embeds are lazy-loaded (`loading="lazy"` on iframe)

---

## Phase 6 | Programmatic Content (Months 3–6)

### 6.1 Definition Pages

The `/define/` section (13 pages) is a programmatic SEO goldmine. Scale to 200+ definition pages:

- "What is CUDA" → `/define/cuda`
- "What is LLM" → `/define/llm`
- "What is Tokamak" → `/define/tokamak`
- Template: 300-word definition + related ObjectWire articles + schema.org `DefinedTerm` markup

Each definition page:
- Targets a "what is X" keyword (high volume, low competition)
- Links to 3–5 related ObjectWire articles
- Takes < 10 minutes to create with a standard template

### 6.2 Company Profiles

Expand the SaaS/Tech profiles (`/saas/cognyte`, `/saas/hashicorp`) to cover 100+ companies:

- Template: Overview, Key Facts table, Recent News, Stock/Funding data, Related Coverage
- These pages capture "[company name] wiki" and "[company name] overview" searches year-round
- Each profile links to news articles mentioning that company

### 6.3 Event Pages

Scale `/events/` before major 2026 events:
- WWDC 2026
- E3 / Summer Game Fest 2026
- GTC 2026 (Nvidia)
- Google I/O 2026
- 2026 World Cup (pre-event content)
- 2026 Winter Olympics (already strong, maintain)

---

## Phase 7 | Distribution & Amplification (Ongoing)

### 7.1 Google Discover

Google Discover (mobile feed) drives massive traffic for publishers. Requirements:
- High-quality hero images (1200px+) ← Phase 1 image fix
- Engaging titles (not clickbait, but compelling)
- E-E-A-T signals (author pages, about page, editorial standards)

ObjectWire already has `/about`, `/editorial-standards`, `/authors/*`, these are E-E-A-T signals. Ensure they're linked from every article footer (already done via the `NewsArticle` author card).

### 7.2 Bing News

- Register at [Bing News PubHub](https://www.bing.com/webmasters/pubhub)
- Submit the same news sitemap
- Bing indexes faster than Google for new publishers

### 7.3 Apple News

- Register at [Apple News Publisher](https://developer.apple.com/news-publisher/)
- RSS feed (`/rss.xml/`) is already built, submit it
- Apple News drives significant mobile traffic for news publishers

---

## Milestone Projections

| Month | Est. Monthly Organic Sessions | Indexed Pages | Key Driver |
|---|---|---|---|
| 1 | 2,000–5,000 | 360 | Foundation fixes + registry cleanup + Publisher Center |
| 2 | 5,000–12,000 | 400 | Gaming cluster completion (GTA 6, Forza, Switch 2) |
| 3 | 12,000–25,000 | 450 | Google News inclusion + tech cluster + first Discover hits |
| 4 | 20,000–40,000 | 500 | Compound growth from clusters + breaking news velocity |
| 5 | 30,000–50,000 | 550 | World Cup pre-event content + definition pages scaling |
| 6 | 40,000–65,000 | 600+ | Seasonal peaks (E3, WWDC) + programmatic content |
| 8 | 60,000–80,000 | 700+ | Topical authority established in 3+ verticals |
| 10 | 80,000–95,000 | 800+ | Google Discover traffic + Bing/Apple News |
| 12 | **100,000+** | 900+ | Compound authority across all pillars |

---

## Key Metrics to Track Weekly

| Metric | Tool | Target |
|---|---|---|
| Indexed pages | Google Search Console → Coverage | 100% of published pages |
| Average position | GSC → Performance → Queries | < 20 for pillar keywords |
| Click-through rate | GSC → Performance | > 3% (improve titles if below) |
| Top Stories appearances | GSC → Performance → Search Appearance | 10+/week by month 3 |
| News sitemap articles | `/news-sitemap.xml` | 3–5 articles within 2-day window at all times |
| Internal links per page | Manual audit / Screaming Frog | 4–6 minimum |
| Core Web Vitals | GSC → Core Web Vitals | All green (LCP < 2.5s, CLS < 0.1) |
| Registry completeness | `scripts/audit-registry.ts` | 0 entries with missing image/description |

---

## Immediate Action Items (This Week)

1. **Register ObjectWire in Google Publisher Center**, unlocks Google News eligibility
2. **Run registry audit script**, identify all entries missing `imageUrl` and fix top 50
3. **Consolidate "Tech" → "Technology" and "Gaming" → merge with "Video Games"** in registry + sync script
4. **Write 3 GTA 6 cluster sub-articles**, pre-orders, PC release, system requirements
5. **Submit sitemaps in Google Search Console**, both `/sitemap.xml` and `/news-sitemap.xml`
6. **Register on Bing News PubHub**, free, takes 10 minutes
7. **Add `loading="lazy"` to YouTube iframe embeds** across all articles

---

*This plan builds on ObjectWire's existing technical infrastructure — the content registry, auto-sync, news sitemap, structured data, and Supabase CMS are all operational. The gap is content volume and data completeness, not tooling.*

---

## Deferred Items (Do Last)

### D.1 Category Consolidation

Still need to merge:

| Merge From | Merge To |
|---|---|
| Tech | Technology |
| Gaming, Video Games | Gaming |
| SaaS | Technology |
| Social Media | Technology |
| Blog | (use actual topic category) |
| General | News |

**Action:** Write a migration script against the Supabase `content_registry` and `articles` tables.

### D.2 Google News Publisher Center

- Register at [Google Publisher Center](https://publishercenter.google.com/)
- Verify `objectwire.org` ownership
- Submit `/news-sitemap.xml` as the news feed
- Label sections: Technology, Gaming, Entertainment, Finance, Science
- Upload publisher logo (min 1000x1000 square)

### D.3 Google Search Console Validation

- Verify sitemap coverage (all 560+ URLs indexed)
- Check for soft 404s on thin hub pages
- Submit news sitemap separately
- Fix any coverage issues flagged
