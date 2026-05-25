# Ozone Network News | Domain Architecture & CMS Integration Guide

**Legal entity:** Ozone Network News LLC (ONN)
**Document scope:** Every domain in the ONN network, its editorial niche, how it fits the hub-and-spoke SEO model, and exactly how each domain maps to the shared Next.js / static JSON CMS.

---

## Network Overview

```
ozonenetwork.news          ← FLAGSHIP: Gaming · Finance · Startups (niched flagship)
    │
    │  Overflow verticals — each niche housed on a dedicated authority domain:
    │
    │  ── PURCHASED ──────────────────────────────────────────────────────────
    ├── ozonedailynews.com     ← YouTube, creator economy, viral content news  [LIVE]
    ├── objectivewire.org      ← Investigations, private intelligence, civic watchdog  [LIVE]
    ├── basilnews.com          ← Foodtech, restaurants - local resuratn directories , food tech, agriculture  [Purchased]
    ├── micanewspaper.com      ← Science, climate, space exploration, research  [Purchased]
    ├── cloverheadlines.com    ← Personal finance, consumer money, deals  [Purchased]
    ├── obsidianpaper.com      ← Niche TBD  [Purchased]
    ├── onyxtimes.org          ← Luxury lifestyle, fashion, art, premium entertainment  [Purchased]
    │
    │  ── ON HOLD ─────────────────────────────────────────────────────────────
    ├── halonews.com           ← Cybersecurity / Niche under review  [On Hold]
    │
    │  ── NEED TO PURCHASE ───────────────────────────────────────────────────
    ├── statusnews.com         ← Business earnings, markets, executive profiles  [Buy next]
    ├── sagenews.com           ← Health, wellness, longevity, biohacking  [Buy next]
    └── grovenews.com          ← Local news, real estate, city development  [Buy later]
```

**Flagship niche rule (post-March 2026 Core Update):** `ozonenetwork.news` is no longer a generalist site. It publishes original content only within three pillars: **Gaming**, **Finance**, and **Startups**. All other verticals (health, cybersecurity, food, science, local, luxury) are covered exclusively on their dedicated sub-brand domains. The flagship aggregates those verticals via hub cards that link out — no body text duplication.

**Google's March 2026 Core Update directive: niche down.** Broad generalist sites are penalized. The network model answers this by housing topical authority on dedicated domains while the flagship aggregates and cross-links. Authority flows bidirectionally: sub-brand articles link to the flagship hub, flagship hubs link to the sub-brand.

---

## How the CMS Works Across Domains

Every domain in the network runs on the same codebase. Understanding the data layer is essential before configuring any new domain.

### Static JSON Content Store

All article content lives on-prem in `content/static/`:

```
content/static/
    articles/              ← NewsArticleDB articles (news, gaming, tech, breaking)
    jack_articles/         ← JackArticleDB articles (investigations, premium long-form)
    article_pages/         ← ArticlePageDB articles (evergreen, wiki-style, profiles)
    creator_articles/      ← CreatorArticleDB articles (creator profiles)
    wiki_articles/         ← WikiArticleDB articles (reference, glossary)
    content_registry.json  ← Master index used by sitemap, JSON-LD, Top Stories
```

The primary read function is `readStaticDir<T>(table)` in `lib/article-service.ts` (lines 13-25):

```typescript
function readStaticDir<T>(table: string): T[] {
  const dir = path.join(STATIC_BASE, table);
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.json') && f !== '_index.json')  // ← _index.json is EXCLUDED
    .map(f => JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')) as T)
    .filter((x): x is T => x !== null);
}
```

`_index.json` is excluded because it is a JSON **array** used for metadata lookups — parsing it as an article object produces a phantom ghost entry in the carousel.

### Registry Service

`lib/registry-service.ts` is the single source of truth for sitemaps, JSON-LD, and Top Stories. It reads from `content/static/content_registry.json` (local-first), with Supabase as a last-resort fallback:

```typescript
// lib/registry-service.ts — lines 34-44
const LOCAL_REGISTRY_PATH = path.join(process.cwd(), 'content', 'static', 'content_registry.json');

function loadLocalRegistry(): ContentEntry[] | null {
  const raw = JSON.parse(fs.readFileSync(LOCAL_REGISTRY_PATH, 'utf8'));
  return raw.map(rowToEntry);
}
```

Every new article must have a registry entry. Missing entry = invisible to Google (no sitemap URL, no JSON-LD, no Top Stories eligibility).

### Site Config

`lib/site-config.ts` exports `SITE_CONFIG` — the single object that controls the brand name, domain URL, logo, and social handles used everywhere in the app (OG tags, JSON-LD, RSS, sitemaps, author schema):

```typescript
// lib/site-config.ts
export const SITE_CONFIG = {
  name:           "OzoneNews",
  legalName:      "Ozone Network News LLC",
  publisherName:  "Ozone Network News",
  url:            "https://www.ozonenetwork.news",
  logo:           "https://www.ozonenetwork.news/ozonenews-logo.png",
  email:          "editorial@ozonenetwork.news",
  twitter:        "@ozonenetwork",
  sameAs: [
    "https://twitter.com/ozonenetwork",
    "https://www.linkedin.com/company/ozonenetwork",
  ],
};
```

**For a new sub-brand domain:** override `SITE_CONFIG` values via environment variables in Railway:
```
NEXT_PUBLIC_SITE_NAME=SageNews
NEXT_PUBLIC_SITE_URL=https://www.sagenews.com
NEXT_PUBLIC_SITE_LOGO=https://www.sagenews.com/sagenews-logo.png
NEXT_PUBLIC_SITE_EMAIL=editorial@sagenews.com
NEXT_PUBLIC_SITE_TWITTER=@sagenews
```

Then update `lib/site-config.ts` to read from env:
```typescript
export const SITE_CONFIG = {
  name: process.env.NEXT_PUBLIC_SITE_NAME ?? "OzoneNews",
  url:  process.env.NEXT_PUBLIC_SITE_URL  ?? "https://www.ozonenetwork.news",
  // etc.
};
```

This means one codebase deploys to all domains — only the Railway env vars change per service.

### Author Profiles

`lib/author-profiles.ts` is the centralized author entity registry. Every byline author must appear here with at least one `sameAs` external URL — required by Google's E-E-A-T rules post-March 2026 Core Update:

```typescript
// lib/author-profiles.ts
export const AUTHOR_PROFILES: Record<string, AuthorProfile> = {
  "jack-sterling": {
    slug: "jack-sterling",
    name: "Jack Sterling",
    jobTitle: "Senior Reporter, Politics & Federal Investigations",
    email: "j.sterling@ozonenetwork.news",
    sameAs: [
      "https://twitter.com/jacksterling_on",
      "https://www.linkedin.com/in/jack-sterling-ozonenews",
    ],
  },
  // ...
};
```

Sub-brand authors must be added here before their first article publishes.

### News Sitemap

`app/news-sitemap.xml/route.ts` reads directly from `content/static/articles/` and `content/static/jack_articles/`. The 48-hour freshness window is enforced here:

```typescript
// app/news-sitemap.xml/route.ts
const NEWS_WINDOW_HOURS = 48;
const MAX_NEWS_ENTRIES  = 1000;
```

Articles with `lifecycle: "review"`, `lifecycle: "feature"`, or `lifecycle: "pruned"` are filtered out of the news sitemap automatically. Only `lifecycle: "news"` (or unset, which defaults to news) appears in Google News.

Timestamps use Central Time with explicit UTC offset (e.g. `2026-05-18T18:00:00-05:00`), not bare `Z` — the route calculates this dynamically via `getCentralTimeOffset()`.

### Main Sitemap

`app/sitemap.ts` reads from `registry-service.ts` (`getAllEntries()`) and filters against `VALID_SLUG_PREFIXES`. When adding a new domain vertical, add its route prefix to the array:

```typescript
// app/sitemap.ts
const VALID_SLUG_PREFIXES = [
  '/', '/news', '/youtube/', '/video-games/', '/apple', '/entertainment/',
  '/anime/', '/technology/', '/tech/', '/nvidia/', '/california/',
  '/crypto', '/amazon', '/anime/',
  // Add new verticals here as pages are created:
  // '/creator/', '/investigations/', etc.
];
```

### Lifecycle System

Every article JSON should carry a `lifecycle` field:

| Value | News Sitemap | Main Sitemap | Displayed |
|---|---|---|---|
| `"news"` (or omitted) | Yes, 48h window | Yes | Yes |
| `"review"` | No | Yes | Yes |
| `"feature"` | No | Yes, priority 0.9 | Yes |
| `"pruned"` | No | No | No |

Managed via:
```bash
npm run lifecycle:check    # news → review after 48h
npm run lifecycle:promote  # review → feature if ranked
npm run lifecycle:prune    # delete all pruned articles from disk + registry
```

Script: `scripts/lifecycle-manager.ts`

---

## Domain 1 | ozonenetwork.news

**Role:** Flagship. Covers all verticals. Aggregates the sub-brand network.
**Repo:** Separate repo (to be scaffolded — `Autolab350/OzoneDailyNews`)
**Live:** `https://www.ozonenetwork.news`
**Site config:** `lib/site-config.ts` — already set correctly

### What it covers

**Three niched pillars — original content published only within these:**

| Pillar | Hub | Category values in play |
|---|---|---|
| Gaming | `/video-games` | `Gaming`, `Entertainment` |
| Finance | `/finance`, `/crypto` | `Finance`, `Crypto`, `News` |
| Startups | `/tech` | `Tech`, `News` |

**Overflow verticals** — the flagship publishes aggregate hub cards linking to sub-brand articles. No original body content on these topics at `ozonenetwork.news`:

| Topic | Sub-brand that owns it | Flagship hub (aggregate only) |
|---|---|---|
| Company earnings, markets | `statusnews.com` _(buy next)_ | `/finance` aggregate card |
| Cybersecurity, privacy | `halonews.com` _(on hold)_ | `/security` aggregate card |
| Health, wellness | `sagenews.com` _(buy next)_ | `/health` aggregate card |
| Science, space exploration | `micanewspaper.com` | `/science` aggregate card |
| Creator economy, YouTube | `ozonedailynews.com` | `/creators` aggregate card |
| Investigations, civic | `objectivewire.org` | `/investigations` aggregate card |
| Personal finance | `cloverheadlines.com` | `/personal-finance` aggregate card |
| Food | `basilnews.com` | `/food` aggregate card |
| Local / real estate | `grovenews.com` _(buy later)_ | `/local` aggregate card |
| Luxury, fashion | `onyxtimes.org` | `/luxury` aggregate card |
| Niche TBD | `obsidianpaper.com` | TBD |

### How to show sub-brand content WITHOUT cannibalizing

The cannibalization risk is real: if `ozonenetwork.news` and `sagenews.com` publish the same article, Google will pick one and demote the other. The solution is **aggregation without duplication**:

**Rule 1 — Flagship never duplicates sub-brand body text.** The flagship can publish a brief (150-300 word) summary card that links to the full article on the sub-brand domain. The summary must contain a `rel="canonical"` pointing to the sub-brand URL, not to itself.

**Rule 2 — Hub pages aggregate, not republish.** The flagship's `/health`, `/cybersecurity`, `/food` hub pages display cards (title, subtitle, image, link) that point to the sub-brand article URL. No body text is duplicated.

**Rule 3 — Original flagship content covers angles the sub-brand does not.** If `sagenews.com` covers a health study from a clinical angle, `ozonenetwork.news` covers the policy or regulatory angle of the same news. Different angle = different article = no cannibalization.

**Rule 4 — Use `ContentEntry.href` to cross-link.** The registry's `href` field stores the canonical URL including domain. When `getAllEntries()` is called on the flagship, sub-brand entries can be loaded from a shared registry feed and rendered as external cards.

### Flagship hub pages to create

| Hub URL | Aggregates From | Status |
|---|---|---|
| `/health` | sagenews.com | Planned |
| `/security` | halonews.com | Planned |
| `/food` | basilnews.com | Planned |
| `/personal-finance` | cloverheadlines.com | Planned |
| `/local` | grovenews.com | Planned |
| `/markets` | statusnews.com | Planned |
| `/science` | micanewspaper.com | Planned |
| `/luxury` | onyxtimes.org | Planned |
| `/creators` | ozonedailynews.com | Planned |
| `/investigations` | objectivewire.org | Planned |

### Priority pillars already built

| Pillar | Hub | Monthly Search Volume |
|---|---|---|
| `/video-games/gta-6` | GTA 6 hub | 5M+ |
| `/video-games/switch2` | Nintendo Switch 2 | 2M+ |
| `/open-ai` | OpenAI hub | 3M+ |
| `/google` | Google news | 2M+ |
| `/nvidia` | Nvidia hub | 800K+ |
| `/crypto` | Crypto hub | 500K+ |
| `/anime` | Anime hub | 400K+ |

---

## Domain 2 | ozonedailynews.com

**Role:** Creator economy and YouTube news desk. Quick-turnaround articles (300-600 words). High publishing velocity.
**Repo:** This repo — `ozonedailynews` branch
**Live:** `https://www.ozonedailynews.com`
**Niche:** YouTube, TikTok, creator news, viral content, platform policy, streaming

### Why this niche

YouTube gets 500 hours of video uploaded per minute. Creator drama, channel terminations, monetization policy changes, and platform algorithm updates are searched millions of times per week. This niche has almost no dedicated news-site competition — most coverage lives in YouTube videos or Reddit threads, not indexed news articles.

### Core verticals

- **YouTube news** — Creator Studio updates, algorithm changes, ad revenue reports, YouTube Shorts policy
- **Creator drama** — ban appeals, copyright strikes, community guidelines violations
- **Platform policy** — TikTok ban developments, Twitch/Kick moves, Instagram Reels vs YouTube Shorts
- **Viral content** — trending video breakdowns, viral moment context and attribution
- **Monetization** — AdSense CPM reports, Patreon/Substack trends, brand deal market news
- **Creator economy data** — follower counts, subscriber milestones, agency signings

### Publishing cadence: 5x/week

| Day | Content Type | Example |
|---|---|---|
| Monday | Platform policy | "YouTube Removes 2.5M Videos in Q1 2026 | Policy Enforcement Report" |
| Tuesday | Creator news | "MrBeast Hits 500M Subscribers | The Channel Metrics Behind the Milestone" |
| Wednesday | Monetization | "YouTube AdSense CPM Drops 12% in May 2026 | Data and Creator Reactions" |
| Thursday | Platform battle | "TikTok vs YouTube Shorts | 2026 Data Comparison" |
| Friday | Viral breakdown | "The Most Watched YouTube Video This Week | Full Context" |

### CMS configuration for ozonedailynews.com

**Component:** `NewsArticleDB` — all articles are `NewsArticle` type
**Store:** `content/static/articles/`
**Slug pattern:** `youtube-[topic]-[detail]`, `creator-[name]-[event]`, `tiktok-[topic]-[detail]`

**Article JSON example:**
```json
{
  "slug": "youtube-adsense-cpm-may-2026",
  "title": "YouTube AdSense CPM Falls 12% in May 2026 | Creator Revenue Data",
  "subtitle": "Platform-wide CPM drop hits mid-tier creators hardest, according to aggregated dashboard data",
  "category": "Tech",
  "topic_tag": "entertainment",
  "published_at": "2026-05-25T09:00:00-05:00",
  "publish_date": "May 25, 2026",
  "lifecycle": "news",
  "author_name": "OzoneNews Editorial Team",
  "author_slug": "ozonews-editorial-team",
  "tags": ["YouTube", "AdSense", "Creator Economy", "CPM"],
  "url": "/youtube/adsense-cpm-may-2026"
}
```

**`SITE_CONFIG` overrides (Railway env vars):**
```
NEXT_PUBLIC_SITE_NAME=OzoneDaily
NEXT_PUBLIC_SITE_URL=https://www.ozonedailynews.com
NEXT_PUBLIC_SITE_EMAIL=editorial@ozonedailynews.com
NEXT_PUBLIC_SITE_TWITTER=@ozonedaily
```

**Sitemap prefix to add in `app/sitemap.ts`:**
```typescript
'/youtube/', '/creator/', '/tiktok/', '/twitch/', '/streaming/',
```

**Target keywords:** YouTube news today, creator news 2026, YouTube policy update, MrBeast news, TikTok news today, CPM YouTube 2026

---

## Domain 3 | objectivewire.org

**Role:** Investigations, civic watchdog, private intelligence reporting, public records journalism.
**Original site** — doubles as a private detective agency resource.
**Live:** `https://www.objectivewire.org`
**Niche:** FOIA-sourced reporting, court records, law enforcement, missing persons, local crime, consumer fraud, public records tutorials

### Why this niche

`objectivewire.org` has a dual identity: it is simultaneously a news outlet and a resource for people navigating private investigation, background checks, and public records. The keyword overlap between "private detective near me" and "public records journalism" is significant and underserved. Google treats `.org` domains with civic/public interest content favorably for E-E-A-T scoring.

The private detective angle is NOT a conflict — it is a feature. Every news article about a FOIA request or court record also ranks for investigative services searches. Every private detective resource page links back to the relevant news article for authority.

### Core verticals

**News desk:**
- **FOIA and public records** — new FOIA requests filed, request outcomes, government transparency
- **Court records** — indictments, civil suit filings, sentencing, appeals outcomes
- **Law enforcement news** — police department policy, misconduct cases, federal agency actions
- **Missing persons** — NamUs database updates, case developments, awareness coverage
- **Consumer fraud** — FTC actions, scam alerts, class action settlements

**Private detective resource desk (evergreen `ArticlePage` type):**
- How to find public records by state
- Background check services comparison
- How to hire a licensed private investigator
- FOIA request templates by agency type
- Court record lookup guides by jurisdiction
- Austin private detective agency directory (`/austin-private-detective-agency` — already built)

### Publishing cadence: 3x/week (depth over volume — every piece is sourced and verifiable)

| Day | Content Type | Example |
|---|---|---|
| Tuesday | Court / legal news | "Federal Grand Jury Indicts Austin Developer on Wire Fraud Charges | Case Documents" |
| Thursday | Public records / FOIA | "FBI Releases 2,400 Pages on 1990s Case via FOIA | What the Documents Show" |
| Saturday | Resource / guide | "How to File a FOIA Request with the DOJ in 2026 | Step-by-Step Template" |

### CMS configuration for objectivewire.org

**Components used:**
- `JackArticleDB` — for investigations and court record coverage (depth, timeline, sources array)
- `ArticlePageDB` — for evergreen resource guides (FOIA templates, PI guides, state records)
- `NewsArticleDB` — for breaking court filings and quick FOIA news

**Store locations:**
- Investigations → `content/static/jack_articles/`
- Resource guides → `content/static/article_pages/`
- Breaking news → `content/static/articles/`

**Slug patterns:**
- Investigations: `investigations-[subject]-[event]-[year]`
- Resource guides: `guide-[state]-public-records-[type]`
- Austin PI: `austin-private-detective-[topic]`

**`SITE_CONFIG` overrides (Railway env vars):**
```
NEXT_PUBLIC_SITE_NAME=ObjectiveWire
NEXT_PUBLIC_SITE_URL=https://www.objectivewire.org
NEXT_PUBLIC_SITE_EMAIL=tips@objectivewire.org
NEXT_PUBLIC_SITE_TWITTER=@objectivewire
```

**Already-built routes to preserve:**
- `app/austin-private-detective-agency/` — live, do not delete
- `app/missing-persons/` — live, do not delete
- `app/investigations/` — live, do not delete
- `app/lawsuit/` — live, do not delete

**Sitemap prefix to verify in `app/sitemap.ts`:**
```typescript
'/investigations/', '/missing-persons/', '/austin-private-detective-agency',
'/lawsuit/', '/guide-', '/public-records-',
```

**Target keywords:** FOIA news today, court records news, private detective Austin TX, public records lookup guide, missing persons news 2026, federal indictment news

**E-E-A-T note:** ObjectiveWire is a YMYL-adjacent site (legal, law enforcement). Every article must cite primary sources (court documents, FOIA releases, official press releases). Author bylines must have real `sameAs` profiles in `lib/author-profiles.ts`. No anonymous sourcing without editorial justification logged in `app/corrections/`.

---

## Sub-Brand Domains (Phase Launch Sequence)

Full niche detail for each sub-brand is in `Docs/NEWSNETWORK.md`. This section covers only the CMS-specific configuration for each.

---

### basilnews.com — Food, Restaurants, Food Tech

**Component:** `NewsArticleDB` (breaking food news) + `ArticlePageDB` (restaurant profiles, guides)
**Slug prefix:** `food-`, `restaurant-`, `farm-`, `recipe-tech-`
**Topic tag:** `"culture"` for culinary, `"technology"` for food tech, `"finance"` for agriculture markets
**SITE_CONFIG name:** `BasilNews`
**Sitemap prefixes:** `/food/`, `/restaurants/`, `/agriculture/`, `/food-tech/`

---

### cloverheadlines.com — Personal Finance, Consumer Money

**Component:** `NewsArticleDB` (rate news, deal alerts) + `JackArticleDB` (deep policy analysis)
**Slug prefix:** `finance-`, `debt-`, `deals-`, `rates-`
**Topic tag:** `"finance"` — nearly all content
**SITE_CONFIG name:** `CloverHeadlines`
**Sitemap prefixes:** `/finance/`, `/deals/`, `/rates/`, `/debt/`, `/investing/`
**YMYL note:** Personal finance is YMYL. All articles require named authors with real `sameAs` profiles. No generic advice — only reported news and data.

---

### grovenews.com — Local News, Real Estate, Cities

**Component:** `NewsArticleDB` (local breaking) + `ArticlePageDB` (city profiles, neighborhood guides)
**Slug prefix:** `[city]-`, `real-estate-`, `zoning-`, `local-`
**Topic tag:** `"news"` for local breaking, `"finance"` for real estate data
**SITE_CONFIG name:** `GroveNews`
**Sitemap prefixes:** `/local/`, `/real-estate/`, `/cities/`, `/[city-name]/`

---

### sagenews.com — Health, Wellness, Longevity

**Component:** `NewsArticleDB` (FDA news, study results) + `JackArticleDB` (deep clinical analysis)
**Slug prefix:** `health-`, `fda-`, `longevity-`, `mental-health-`, `biohacking-`
**Topic tag:** `"science"` for research, `"lifestyle"` for wellness
**SITE_CONFIG name:** `SageNews`
**Sitemap prefixes:** `/health/`, `/wellness/`, `/longevity/`, `/mental-health/`, `/biohacking/`
**YMYL note:** Health is the strictest YMYL category. Every article must cite peer-reviewed sources or official agency publications (FDA, NIH, CDC, WHO). `lib/author-profiles.ts` entries for health beat reporters must include credentials in `jobTitle`.

---

### halonews.com — Cybersecurity, Privacy, Data Breaches

**Component:** `NewsArticleDB` (breach alerts, CVE news) + `JackArticleDB` (deep policy / enterprise analysis)
**Slug prefix:** `breach-`, `cve-`, `privacy-`, `ransomware-`, `security-`
**Topic tag:** `"technology"` for enterprise, `"news"` for consumer breach alerts
**SITE_CONFIG name:** `HaloNews`
**Sitemap prefixes:** `/security/`, `/privacy/`, `/breach/`, `/ransomware/`
**Note:** Breach articles must link to the official company disclosure or regulatory filing as the primary source. Never report unverified breach claims.

---

### statusnews.com — Business, Markets, Executive, Luxury

**Component:** `JackArticleDB` (earnings, M&A, executive profiles) + `NewsArticleDB` (daily market context)
**Slug prefix:** `earnings-`, `markets-`, `executive-`, `luxury-`, `mergers-`
**Topic tag:** `"finance"` for markets/earnings, `"entertainment"` for luxury
**SITE_CONFIG name:** `StatusNews`
**Sitemap prefixes:** `/markets/`, `/earnings/`, `/executive/`, `/luxury/`, `/mergers/`

---

### micanewspaper.com — Science, Climate, Space, Research

**Component:** `JackArticleDB` (deep research analysis) + `NewsArticleDB` (breaking findings)
**Slug prefix:** `climate-`, `space-`, `research-`, `nasa-`, `science-`
**Topic tag:** `"science"` — all content
**SITE_CONFIG name:** `MicaNewspaper`
**Sitemap prefixes:** `/science/`, `/climate/`, `/space/`, `/research/`
**Note:** Every article citing a study must include the DOI or PubMed link in the `sources` array of the JackArticle JSON.

---

### onyxtimes.org — Luxury Lifestyle, Fashion, Art, Premium Entertainment

**Component:** `NewsArticleDB` (fashion week, auction results, film festival) + `ArticlePageDB` (designer profiles, venue guides)
**Slug prefix:** `fashion-`, `art-`, `film-`, `luxury-travel-`, `auction-`
**Topic tag:** `"entertainment"` for film/fashion, `"culture"` for art/design
**SITE_CONFIG name:** `OnyxTimes`
**Sitemap prefixes:** `/fashion/`, `/art/`, `/film/`, `/luxury-travel/`, `/auctions/`

---

### obsidianpaper.com — Niche TBD

**Status:** Domain purchased. Vertical not yet assigned. Do not deploy until niche is decided.
**Component:** TBD
**Slug prefix:** TBD
**Topic tag:** TBD
**SITE_CONFIG name:** `ObsidianPaper`
**Note:** When niche is assigned, update this section, the Domain Registry Table, the Network Overview tree, and `app/network/page.tsx` BRANDS array entry.

---

## Domain Registry Table

| Domain | SITE_CONFIG name | Primary component | Content store | Railway service |
|---|---|---|---|---|
| `ozonenetwork.news` | `OzoneNews` | All components | `content/static/` (all stores) | `onn-flagship` |
| `ozonedailynews.com` | `OzoneDaily` | `NewsArticleDB` | `content/static/articles/` | `onn-daily` |
| `objectivewire.org` | `ObjectiveWire` | `JackArticleDB` + `ArticlePageDB` | `content/static/jack_articles/` + `article_pages/` | `onn-wire` |
| `basilnews.com` | `BasilNews` | `NewsArticleDB` | `content/static/articles/` | `onn-basil` |
| `micanewspaper.com` | `MicaNewspaper` | `JackArticleDB` | `content/static/jack_articles/` | `onn-mica` |
| `cloverheadlines.com` | `CloverHeadlines` | `NewsArticleDB` + `JackArticleDB` | `content/static/articles/` + `jack_articles/` | `onn-clover` |
| `obsidianpaper.com` | `ObsidianPaper` | TBD — niche not yet assigned | TBD | `onn-obsidian` |
| `onyxtimes.org` | `OnyxTimes` | `NewsArticleDB` + `ArticlePageDB` | `content/static/articles/` + `article_pages/` | `onn-onyx` |
| `halonews.com` | `HaloNews` _(on hold)_ | `NewsArticleDB` + `JackArticleDB` | `content/static/articles/` + `jack_articles/` | `onn-halo` |
| `statusnews.com` | `StatusNews` _(buy next)_ | `JackArticleDB` + `NewsArticleDB` | `content/static/jack_articles/` + `articles/` | `onn-status` |
| `sagenews.com` | `SageNews` _(buy next)_ | `NewsArticleDB` + `JackArticleDB` | `content/static/articles/` + `jack_articles/` | `onn-sage` |
| `grovenews.com` | `GroveNews` _(buy later)_ | `NewsArticleDB` + `ArticlePageDB` | `content/static/articles/` + `article_pages/` | `onn-grove` |

---

## Checklist: Spinning Up a New Domain

Complete all steps before the domain goes live:

### Code changes (this repo)

- [ ] Add `NEXT_PUBLIC_SITE_NAME`, `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_SITE_LOGO`, `NEXT_PUBLIC_SITE_EMAIL`, `NEXT_PUBLIC_SITE_TWITTER` to Railway env vars for the new service
- [ ] Update `lib/site-config.ts` to read `NEXT_PUBLIC_SITE_*` env vars with OzoneNews as fallback
- [ ] Add route prefixes to `VALID_SLUG_PREFIXES` in `app/sitemap.ts`
- [ ] Add author entries to `lib/author-profiles.ts` for all planned bylines — must have real `sameAs` URLs
- [ ] Create all four trust pages: `/about`, `/editorial-standards`, `/corrections`, `/contact`
- [ ] Verify `NewsMediaOrganization` schema in `app/layout.tsx` points to new domain trust URLs

### Content (minimum before launch)

- [ ] 15+ published articles in `content/static/` with valid `published_at` ISO-8601 timestamps
- [ ] All articles have `lifecycle: "news"` (or omit — defaults to news)
- [ ] All articles have `url` field set to the correct canonical path
- [ ] `content/static/content_registry.json` updated with all new entries
- [ ] `content/static/{type}/_index.json` updated for each store used
- [ ] Run `npm run wiki:sync -- --write` to sync registry

### SEO / search infrastructure

- [ ] Google Search Console property created for the new domain
- [ ] `sitemap.xml` submitted in GSC
- [ ] `news-sitemap.xml` submitted in GSC (if publishing news content)
- [ ] `robots.ts` verified — no `public/robots.txt` file exists (would override the dynamic handler)
- [ ] Canonical URLs in all `page.tsx` files point to the new domain URL, not to `ozonenetwork.news`
- [ ] `NewsArticleSchema` JSON-LD uses new domain URLs throughout (not `ozonenetwork.news`)
- [ ] At least one `ozonenetwork.news` hub page links to the new sub-brand (no orphan domains)

### Prebuild validation (runs automatically on `npm run build`)

- `validate-public.ts` — blocks if `public/robots.txt` or `public/sitemap.xml` exist
- `validate-canonicals.ts` — blocks if hardcoded canonical found in `app/layout.tsx`
- `sync-registry.ts --write` — syncs `content_registry.json` with filesystem

---

## Cross-Domain Linking Rules

| Link direction | Rule |
|---|---|
| Sub-brand → flagship hub | Every sub-brand article links to the relevant flagship hub within the first 3 paragraphs. Example: a SageNews article on longevity drugs links to `ozonenetwork.news/health`. |
| Flagship hub → sub-brand article | Every flagship hub page displays cards (title, image, link) pointing to the sub-brand article URL. No body text duplication. |
| Sub-brand → sub-brand | Allowed when topics overlap. One link per article maximum. Example: MicaNews climate article linking to SageNews on heat-health risks. |
| ozonedailynews → flagship | Every creator article links to the relevant flagship hub (e.g. `/youtube`, `/entertainment`). |
| objectivewire → flagship | Every investigation links to the relevant flagship hub (e.g. `/politics`, `/tech`, `/finance`). |

All links in article prose must be blue and underlined (`class="text-blue-600 hover:text-blue-800 underline"`). External links must include `target="_blank" rel="noopener noreferrer"`.

---

## Suggested Domain Registrar Notes

All domains should be registered through the same registrar for unified DNS management. Recommended nameserver: Cloudflare (free tier handles DNS, DDoS protection, and CDN for all domains).

| Domain | Status | Notes |
|---|---|---|
| `ozonenetwork.news` | **Live** | Primary flagship — deployed |
| `ozonedailynews.com` | **Live** | Creator economy desk — deployed |
| `objectivewire.org` | **Live** | Investigations — preserve existing routes |
| `basilnews.com` | **Purchased** | Food & Agriculture — configure and launch |
| `micanewspaper.com` | **Purchased** | Science & Space — configure and launch |
| `cloverheadlines.com` | **Purchased** | Personal Finance — configure and launch |
| `obsidianpaper.com` | **Purchased** | Niche TBD — do not deploy until niche is decided |
| `onyxtimes.org` | **Purchased** | Luxury & Fashion — configure and launch |
| `halonews.com` | **On Hold** | Cybersecurity niche under review — do not deploy |
| `statusnews.com` | Buy next | Phase 2 — Business & Markets, high CPM vertical |
| `sagenews.com` | Buy next | Phase 2 — Health & Longevity, high search volume |
| `grovenews.com` | Buy later | Phase 3 — Local news, requires local editorial investment |

---

*Last updated: May 25, 2026*
*See also: `Docs/NEWSNETWORK.md` (sub-brand niche details + editorial calendars), `Docs/OZONEDAILYNEWS.md` (CMS standards + publishing rules)*
