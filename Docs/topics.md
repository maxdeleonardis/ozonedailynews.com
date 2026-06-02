# Content Topics — Main Branch

**Branch:** `main` | **Site:** `objectwire.org` | **Last updated:** May 4, 2026

---



Let me pull up that article and review the current content landscape first. 

Using "Fetch Web Page"

Fetched https://www.ozonenetwork.news/youtube/adsense-cpm-rates-may-2026

Read [](file:///Users/thelegendofzjui/Documents/GitHub/Object-Network26-/content/static/articles)

Let me check the article's JSON file to update the byline to Rudy: 

Read [](file:///Users/thelegendofzjui/Documents/GitHub/Object-Network26-/content/static/articles/youtube-adsense-cpm-rates-may-2026-niche-breakdown.json#1-1), lines 1 to 40

Now I'll update the byline to Rudy Sinigur: 

Using "Replace String in File"


```

```
Also update the page.tsx for the article to reflect the new author. Let me find it: 

Searched for files matching `**/app/youtube/adsense-cpm-rates-may-2026*`, 1 match

Read [](file:///Users/thelegendofzjui/Documents/GitHub/Object-Network26-/app/youtube/adsense-cpm-rates-may-2026/page.tsx#1-1), lines 1 to 50

Using "Replace String in File"


```

```
Done. Now here's the full content plan for creator economy articles in this same vein:

---

## Rudy Sinigur | Byline Updated on AdSense CPM Article

The `/youtube/adsense-cpm-rates-may-2026` article is now bylined to **Rudy Sinigur** in both the static JSON and page.tsx metadata. His author page at `/authors/rudy-sinigur` will auto-populate his article feed.

---

## Creator Economy Content Plan | Same Lens as the CPM Article

The AdSense CPM article works because it answers **a real dollar question creators are actively Googling** with specific data, named figures, and a forward-looking strategy section. Here are 12 articles in the same vein, organized by cluster:

---

### Cluster 1 | YouTube Monetization Data (Hub: `/youtube`)
Assign to: **Rudy Sinigur**

| Title | Slug | Search Intent |
|---|---|---|
| YouTube AdSense CPM Rates June 2026, Niche Breakdown and Q3 Outlook | `/youtube/adsense-cpm-rates-june-2026` | Monthly recurring — publish 1st of every month |
| YouTube RPM Calculator 2026, How to Estimate Your Real Creator Income | `/youtube/rpm-calculator-how-to-estimate-creator-income-2026` | High evergreen, 40K+ searches/mo |
| YouTube Shorts RPM vs Long-Form 2026, Which Format Pays More | `/youtube/shorts-rpm-vs-long-form-revenue-comparison-2026` | Huge creator debate, very searchable |
| YouTube Channel Membership Pricing 2026, Tiers, Revenue Split, Strategy | `/youtube/channel-membership-pricing-revenue-strategy-2026` | Growing search term as creators diversify |

---

### Cluster 2 | Platform Monetization Comparisons (Hub: `/youtube` or `/finance`)
Assign to: **Rudy Sinigur** or **Alfasa**

| Title | Slug | Search Intent |
|---|---|---|
| TikTok Creator Fund vs YouTube AdSense 2026, Which Platform Pays More | `/youtube/tiktok-creator-fund-vs-youtube-adsense-2026` | Direct comparison, massive search volume |
| Instagram Reels Bonus Program 2026, Payout Rates, Eligibility, How It Compares to YouTube | `/tech/instagram-reels-bonus-payout-rates-2026` | Facebook/Meta just expanded this program |
| Twitch Payout Rates 2026, Affiliate vs Partner Revenue Breakdown | `/tech/twitch-payout-rates-affiliate-partner-2026` | Twitch creators actively search this |

---

### Cluster 3 | Creator Business and Economics (Hub: `/finance` or `/youtube`)
Assign to: **Rudy Sinigur**

| Title | Slug | Search Intent |
|---|---|---|
| How Much YouTube Pays Per 1,000 Views in 2026, Real Creator Data by Niche | `/youtube/how-much-youtube-pays-per-1000-views-2026` | The single highest-volume search in creator economy |
| YouTube Super Thanks and Super Chat Revenue 2026, Are Fan Funding Features Worth It | `/youtube/super-thanks-super-chat-revenue-worth-it-2026` | Active creator question, no good data articles |
| Creator Economy Revenue Mix 2026, AdSense vs Memberships vs Brand Deals vs Merch | `/youtube/creator-economy-revenue-mix-2026-breakdown` | Analysis piece, information gain angle |

---

### Cluster 4 | Adjacent Creator Platform News (Hub: `/tech` or `/youtube`)
Assign to: **William Rodriguez** (news) or **Rudy** (data)

| Title | Slug | Search Intent |
|---|---|---|
| YouTube Premium Price Increase Impact on Creators 2026, RPM Shift Explained | `/youtube/premium-price-increase-creator-rpm-impact-2026` | Spin-off from the CPM article, already referenced in it |
| YouTube Ad Revenue Q2 2026 Results, What Creator Earnings Data Shows | `/youtube/ad-revenue-q2-2026-creator-earnings-data` | Publish when Alphabet Q2 earnings drop (late July) |

---

## Pruning Plan Preview

Before starting the prune, the articles most clearly **outside OzoneNews scope** based on what I can see are:

- Winter Olympics athlete profiles (`winter-olympics-mikaela-shiffrin.json`, etc.) — these read as evergreen wiki pieces, not breaking news
- `video-games-new-windrose.json` — unclear relevance
- `entertainment-hulu.json` — possibly thin content
- The `/clothing` vertical (`new-balance-energy-arc`) — doesn't fit news scope

**Recommended pruning workflow:**
1. Audit each article for: word count, internal links, primary source citation, byline
2. Articles under 400 words with no named source = candidate for deletion or redirect
3. Redirect deleted slugs to the relevant hub (e.g. `/video-games` for game articles, `/youtube` for YouTube articles)
4. Update `content_registry.json` and `_index.json` after each deletion

**Want to start with the CPM June 2026 monthly update article first, then move into pruning?**

Made changes.

## What This Branch Covers

ObjectWire main branch publishes verified news and analysis across these verticals. Every article uses `NewsArticleDB` (standard news) or `JackArticleDB` (premium research/investigations). No creator profiles, no influencer content — those live in `creator_articles` and are out of scope here.

| Vertical | Hub | Primary Keywords |
|---|---|---|
| **Tech / AI** | `/tech`, `/open-ai`, `/google`, `/apple`, `/nvidia`, `/microsoft`, `/claude`, `/cursor` | OpenAI, Gemini, iPhone, RTX, Copilot |
| **Gaming** | `/video-games`, `/video-games/gta-6`, `/video-games/fortnite`, `/video-games/switch2` | GTA 6, Fortnite, Nintendo Switch 2 |
| **Finance** | `/finance` | Markets, earnings, economic policy |
| **Crypto** | `/crypto` | Bitcoin, Ethereum, stablecoins, regulation |
| **Entertainment** | `/entertainment`, `/disney`, `/netflix` | Streaming, box office, studio deals |
| **Politics** | `/trump`, `/politics` | US policy, executive orders, elections |
| **Science** | `/nasa`, `/bio-hacking`, `/earth` | Space, climate, health research |
| **World News** | `/news`, `/world-cup`, `/winter-olympics` | Global events, sports, seasonal |
| **Sports** | `/formula-1`, `/mls`, `/redbull`, `/world-cup` | F1, World Cup, Olympics |
| **Investigations** | `/investigations` | Jack Sterling long-form, sourced reporting |
| **Business** | `/elon-musk`, `/amazon`, `/meta`, `/shopify`, `/saas` | Big tech, enterprise, startups |

---

## Article Types on This Branch

| Component | Table | Use For |
|---|---|---|
| `NewsArticleDB` | `articles` | Breaking news, gaming, tech, features |
| `JackArticleDB` | `jack_articles` | Research reports, premium long-form, investigations |

`ArticlePageDB` (wiki/evergreen) and `CreatorArticleDB` (influencer) exist in the codebase but are **not part of active main branch content sessions**.

---



## Session Log — April 29, 2026

### Transparency and Trust Overhaul

**Problem identified:** ObjectWire lacked visible editorial policies, named author credentials, ownership disclosure, and funding transparency — all factors that reduce credibility and hurt Google's E-E-A-T scoring on news sites.

**Changes made:**

#### Author pages — real headshots replacing initials
All three author pages converted from placeholder initials to real photos using `next/image`:
- `/authors/jack-sterling` — `public/influncer/author/jack_sterling.jpg`
- `/authors/jack-brennan` — `public/influncer/author/jack_brennen.JPG`
- `/authors/conan-boyle` — `public/influncer/author/conan_doyle.jpg`

Meta titles simplified from SEO-stuffed pipe-separated strings to plain human names:
- `Jack Sterling, ObjectWire Reporter`
- `Jack Brennan, ObjectWire Investigations Reporter`
- `Conan Boyle, ObjectWire Science Writer`

OG/Twitter card images now include author headshot URLs so social previews show faces.

#### Footer — sitewide ownership disclosure
`app/layout.tsx` footer updated:
- Added a visible "Ownership and funding" paragraph on every page disclosing: self-funded nonprofit, no advertising, no sponsored content, no political donations, with links to about / editorial-standards / corrections.
- Bottom bar updated from "© 2026 ObjectWire News. All rights reserved." to "© 2026 ObjectWire. Self-funded nonprofit newsroom."

#### OrganizationSchema — JSON-LD updated
`components/articles/NewsArticleSchema.tsx` `OrganizationSchema`:
- Added `additionalType: "https://schema.org/NGO"`
- Added `nonprofitStatus: "Nonprofit501c3"`
- Added `funder` object with self-funded disclosure
- Added `diversityPolicy`
- Updated `description` to lead with "independent, self-funded nonprofit newsroom"

Ships on every page in the site's `<head>`.

---

### Static Page Migration (Supabase → Codebase)

**Problem identified:** `about`, `editorial-standards`, and `corrections` were all `force-dynamic` Supabase fetches. Googlebot received no content on the first byte. Content lived in a database table (`wiki_articles`) that was invisible to crawlers.

**Strategy:** Pages that are purely evergreen and don't change based on user state should be `force-static` codebase pages, prerendered at build time.

**Pages migrated:**

#### `/about` — `app/about/page.tsx`
- `force-static`, no Supabase
- Full ownership and funding disclosure (self-funded, nonprofit, no ads/sponsorships/affiliates/political donations)
- Lists all 3 authors with profile links
- Explains editorial accountability rules
- Contact info: `editorial@objectwire.org`
- Datestamped April 29, 2026

#### `/editorial-standards` — `app/editorial-standards/page.tsx`
- `force-static`, no Supabase
- 10 numbered standards: accuracy over speed, primary sources only, attribution, news vs analysis, conflicts of interest, AI use in newsroom, corrections, right of reply, source protection, diversity of coverage
- Explicitly states AI is not used to write published copy
- Contact: `editorial@objectwire.org`

#### `/corrections` — `app/corrections/page.tsx`
- `force-static`, no Supabase
- Defines what gets corrected, how a correction looks on the page (original text preserved, timestamped), what is NOT a correction (routine updates), how to report an error, right of reply, removals/unpublishing policy
- Contact: `corrections@objectwire.org`

**Why this matters for SEO:**
- `force-static` pages are prerendered HTML — Googlebot gets full content instantly
- `force-dynamic` on evergreen pages prevents proper caching and hurts TTFB
- Real, substantive content in page source (not a `<WikiArticle>` shell) signals quality to crawlers
- E-E-A-T scoring for YMYL/news: Google's Quality Rater Guidelines specifically look for ownership, funding, named authors, and correction policies

**Orphaned rows:** `wiki_articles` rows for `about`, `editorial-standards`, `corrections` still exist in Supabase. Nothing reads them. No action needed — they do not affect SEO or crawling.

**Policy going forward:** What is already in Supabase stays in Supabase. Only future evergreen pages that would otherwise be `force-dynamic` purely for content (not personalization) are candidates for codebase migration. No mass migration.

---

---

## Female Influencer / YouTuber Article Targets

> ⚠️ **NOT for this branch.** Creator and influencer profiles use `CreatorArticleDB` and `creator_articles` Supabase table. They are managed separately. Do not plan, assign, or write creator profiles as part of main branch content sessions.
>
> Main branch covers: **News, Tech, AI, Gaming, Finance, Crypto, Entertainment, Politics, Science, World, Sports.**

---


## Fortnite Article Targets (2026)

### Chapter 6 Season 2 — "Lawless" (Active Season)

| Topic | Search Angle | Status |
|---|---|---|
| **Chapter 6 Season 2 map changes** | Japanese/yakuza aesthetic, Shogun POI, cherry blossoms | **LIVE** — `app/video-games/fortnite/chapter-6-season-2-map-changes/` |
| **Season 2 Battle Pass breakdown** | All skins, secret styles, bonus rewards | **LIVE** — `app/video-games/fortnite/chapter-6-season-2-battle-pass/` |
| **New weapons tier list** | Katanas, SMGs, LMGs added this season | **LIVE** — `app/video-games/fortnite/chapter-6-season-2-weapons-tier-list/` |
| **Ranked mode changes S2** | New ranked system, lobbies rebalance | Not started |

**Hub:** `app/video-games/fortnite/page.tsx` — **LIVE**

### Creator Collaborations (Next)

| Collab | Notes |
|---|---|
| **Fortnite x Naruto (Season returns)** | Perennial high-search rerun — every return gets search spike |
| **Fortnite Icon Series 2026** | New creator skins announced — Loserfruit crossover angle |
| **Fortnite x MrBeast** | Any ongoing or announced tie-ins |
| **Fortnite Festival Season** | Current music lineup, how to unlock songs |
| **FNCS 2026 Spring** | Competitive scene, prize pool, bracket results |

### "Moves Into Movies" Cluster (extend `/entertainment/news/fortnite-moves-into-movies`)

| Article | Angle |
|---|---|
| **Fortnite film casting rumors** | Who could be cast in a live-action adaptation |
| **Fortnite x Hollywood collabs history** | Timeline of every major IP crossover (Marvel, DC, Star Wars) |
| **Epic Games revenue model 2026** | How creator collabs and Icon Series drive V-Buck sales |

---

## Image SEO — How to Do It Right

Every article must have at least one optimized image. These rules apply to both `thumbnail_src` (Supabase field) and any images inside `content_html`.

### 1. File Name
Name the file with the primary keyword before uploading. Google reads the filename.
- Good: `valkyrae-100-thieves-youtube-gaming-2026.jpg`
- Bad: `IMG_4921.jpg` or `image1.png`

### 2. Alt Text
Every `<img>` tag needs descriptive `alt` text containing the primary keyword. Do not stuff — one natural keyword phrase is enough.
```html
<img
  src="/influncer/valkyrae-profile.jpg"
  alt="Valkyrae (Rachel Hofstetter) 100 Thieves co-owner and YouTube Gaming creator"
/>
```
In Supabase: populate `thumbnail_alt` and `hero_image_alt` fields — these map directly to the rendered `alt` attribute.

### 3. Dimensions and Format
- Minimum 1200 x 675px for hero/OG images (required for Google Top Stories rich cards)
- Use `.webp` wherever possible — 25-35% smaller than JPEG, same quality
- Fallback `.jpg` for creator portrait shots if `.webp` conversion unavailable

### 4. Open Graph Image
Set `openGraph.images` in `page.tsx` metadata with explicit `width`, `height`, and `alt`:
```ts
openGraph: {
  images: [{
    url: 'https://www.objectwire.org/influncer/valkyrae-profile.jpg',
    width: 1200,
    height: 675,
    alt: 'Valkyrae YouTube Gaming profile 2026',
  }],
},
```
Missing `width`/`height` causes Google to skip the image in rich snippets.

### 5. Supabase Fields to Always Populate
| Field | Rule |
|---|---|
| `thumbnail_src` | Full URL or `/public`-relative path. Triggers the animated genie header in NewsArticleDB. |
| `thumbnail_alt` | Descriptive alt text, primary keyword included. |
| `hero_image_src` | For CreatorArticleDB — portrait, min 800px wide. |
| `hero_image_alt` | For CreatorArticleDB — name + role. |
| `schema_image_url` | Full `https://www.objectwire.org/...` URL. Used in JSON-LD. Must be absolute. |

### 6. Image Placement in Content
- Hero/thumbnail: above the fold, handled automatically by the component
- Supporting images: place after the second or third paragraph, not at the top
- For CreatorArticle: `<CreatorImageGallery>` goes **after** the `<CreatorQuote>` block, not at the top (per gold standard)
- Caption every image — Google surfaces captions in Google Images and Discover

### 7. Structured Data
The `NewsArticleSchema` component reads `imageUrl`, `imageWidth`, `imageHeight` from the `content_registry` entry. Always set these three fields in the registry row when publishing. Missing values = ineligible for Google Top Stories.

---

## GTA 6 Cluster — `/video-games/gta-6` (5M+/mo)

**Hub:** `app/video-games/gta-6/page.tsx` — **LIVE** (migrated to codebase, force-static)

### Sub-Articles

| Article | Path | Status |
|---|---|---|
| **GTA 6 Trailer 2 breakdown** | `app/video-games/gta-6/gta-6-trailer-2-breakdown/` | **LIVE** |
| **Take-Two AI team shake-up 2026** | `app/video-games/gta-6/news/take-two-ai-team-shake-up-2026/` | **LIVE** |
| **GTA 6 release date** | `gta-6-release-date` | Not started |
| **GTA 6 map size** | `gta-6-map-size-vice-city` | Not started |
| **GTA 6 characters** | `gta-6-characters-jason-lucia` | Not started |
| **GTA 6 price** | `gta-6-price-standard-edition` | Not started |
| **GTA 6 PC release** | `gta-6-pc-release-date` | Not started |
| **GTA 6 multiplayer** | `gta-6-multiplayer-online` | Not started |
| **GTA Online 2026 updates** | `gta-online-2026-updates` | Not started |

### Cluster Rules
- Every article: `category: 'Gaming'`, `tags` must include `'GTA 6'`, `'Rockstar Games'`
- Hub link text: `"GTA 6 release date and everything we know"`
- Internal cross-links: GTA 6 articles should also link to `/video-games` hub

---

## Nintendo Switch 2 Cluster — `/video-games/switch2`

> **Note:** Switch 2 launched June 5, **2025** (not 2026). The original hub and launch/pre-order articles were deleted April 29, 2026 after containing inaccurate dates. Do not rebuild those pages without verifying current facts.

**Hub:** `app/video-games/switch2/` — exists but stripped back

### Sub-Articles Currently Live

| Article | Path | Notes |
|---|---|---|
| **Pokemon Pokopia (Switch 2)** | `app/video-games/switch2/pokemon-pokopia/` | LIVE |
| **Super Mario Wonder Switch 2 edition** | `app/video-games/switch2/super-mario-wonder-switch2-edition-bellabel-park/` | LIVE |

### Deleted (inaccurate — do not recreate without fact-checking)
- `nintendo-switch-2-launch-games` — had wrong launch year
- `nintendo-switch-2-pre-order-guide` — had wrong launch year

### Future targets (verify facts first)
- Switch 2 game reviews as they release
- Switch 2 accessory guides
- Nintendo Direct recaps

---

## OpenAI / AI Cluster — `/open-ai` (3M+/mo)

**Hub:** `/open-ai` — covers OpenAI news, GPT releases, Sora, safety controversies

### High-Priority Sub-Articles

| Article | Slug | Angle |
|---|---|---|
| **GPT-5 release** | `gpt-5-release-date-features` | What's confirmed, benchmark comparisons, pricing |
| **OpenAI o3 model** | `openai-o3-reasoning-model` | o3 vs o1, reasoning breakthroughs, ARC-AGI results |
| **ChatGPT vs Gemini 2026** | `chatgpt-vs-gemini-2026` | Feature comparison, who's winning the AI assistant war |
| **Sora video AI** | `openai-sora-video-generator` | How it works, access, use cases, limitations |
| **Sam Altman net worth** | `sam-altman-net-worth-2026` | OpenAI equity, Y Combinator, Worldcoin |
| **OpenAI valuation 2026** | `openai-valuation-funding-2026` | $300B+ valuation, Microsoft stake, latest funding |
| **Claude vs ChatGPT** | `claude-vs-chatgpt-2026` | Anthropic's Claude 3.5/4 head-to-head |
| **AI image generators compared** | `best-ai-image-generators-2026` | Midjourney, DALL-E, Flux, Stable Diffusion |

### Related Hub Pages Already Existing
- `/claude` — Anthropic Claude coverage
- `/google` — Gemini updates
- `/nvidia` — AI hardware

---

## Tech Cluster — Apple, Google, Nvidia, Microsoft

### Apple — `/apple` (1M+/mo)

| Article | Slug | Angle |
|---|---|---|
| **iPhone 17 release date** | `iphone-17-release-date` | September 2026 launch, new features, price |
| **Apple Intelligence 2026** | `apple-intelligence-features-2026` | What shipped, what's delayed, Siri overhaul |
| **WWDC 2026 recap** | `wwdc-2026-announcements` | iOS 20, macOS, new hardware reveals |
| **Mac with M5 chip** | `apple-m5-chip-macbook-pro` | Performance uplift, MacBook Pro specs |

### Google — `/google` (2M+/mo)

| Article | Slug | Angle |
|---|---|---|
| **Google I/O 2026 recap** | `google-io-2026-announcements` | Gemini updates, Android 16, Search AI Mode |
| **Gemini 2.0 Ultra** | `gemini-2-ultra-features` | Context window, coding benchmarks, vs GPT-5 |
| **Google Search AI Mode** | `google-search-ai-mode-2026` | AI Overviews rollout, what it means for SEO |
| **Google Pixel 10** | `google-pixel-10-specs-price` | Release window, Tensor G5, camera upgrades |

### Nvidia — `/nvidia` (800K+/mo)

| Article | Slug | Angle |
|---|---|---|
| **Nvidia RTX 5090 review** | `nvidia-rtx-5090-review` | Blackwell architecture, 4K gaming, AI performance |
| **Nvidia stock 2026** | `nvidia-stock-price-2026` | AI demand, data center revenue, market cap |
| **Nvidia GB200 NVL72** | `nvidia-gb200-rack-ai-server` | Enterprise AI rack, Microsoft/Google/Meta buyers |
| **Jensen Huang net worth** | `jensen-huang-net-worth-2026` | Estimated $120B+, how Nvidia's rise built his wealth |

---

## Crypto Cluster — `/crypto` 

### Active Article Targets

| Article | Slug | Angle |
|---|---|---|
| **Bitcoin price 2026** | `bitcoin-price-prediction-2026` | Post-halving trajectory, ETF demand, institutional buying |
| **Ethereum ETF launch** | `ethereum-spot-etf-2026` | SEC approval, inflows vs Bitcoin ETF |
| **Solana vs Ethereum 2026** | `solana-vs-ethereum-2026` | DeFi TVL, transaction speed, developer activity |
| **Coinbase stock 2026** | `coinbase-stock-price-2026` | Regulatory clarity, Q1 earnings, retail vs institutional |
| **Crypto regulation 2026** | `crypto-regulation-us-2026` | FIT21 Act, SEC stance shift, stablecoin legislation |

---

## Entertainment Cluster — `/entertainment`

### Streaming Wars 2026

| Article | Slug | Angle |
|---|---|---|
| **Netflix subscribers 2026** | `netflix-subscribers-2026` | Q1/Q2 numbers, ad-tier growth, password crackdown impact |
| **Disney+ vs Netflix** | `disney-plus-vs-netflix-2026` | Content spend, subscriber counts, bundling strategy |
| **Best Netflix shows 2026** | `best-netflix-shows-2026` | SEO-optimized roundup, updated monthly |
| **Squid Game Season 3** | `squid-game-season-3-release` | Release date, trailer, cast, what happens |

### Box Office

| Article | Slug | Angle |
|---|---|---|
| **Highest grossing movies 2026** | `highest-grossing-movies-2026` | Running tracker, updated weekly |
| **Avatar 3 release date** | `avatar-3-release-date` | December 2026, production status |
| **Mission Impossible 8** | `mission-impossible-dead-reckoning-2` | Cast, plot, release date |

---

## Seasonal Clusters

### 2026 FIFA World Cup — `/world-cup`

| Article | Slug | Angle |
|---|---|---|
| **World Cup 2026 schedule** | `world-cup-2026-schedule-dates` | Group stage, knockout rounds, final date |
| **World Cup 2026 host cities** | `world-cup-2026-host-cities-usa` | US/Canada/Mexico stadiums, capacity |
| **England World Cup squad** | `england-world-cup-2026-squad` | Predicted lineup, key players |
| **World Cup 2026 favorites** | `world-cup-2026-favorites-odds` | France, England, Brazil, Argentina betting odds |

### 2026 Winter Olympics — `/winter-olympics`

| Article | Slug | Angle |
|---|---|---|
| **Winter Olympics 2026 schedule** | `winter-olympics-2026-schedule` | Milan-Cortina dates, event calendar |
| **Team USA Winter Olympics** | `team-usa-winter-olympics-2026` | Athletes to watch, medal predictions |
| **Figure skating 2026** | `figure-skating-2026-winter-olympics` | Top contenders, Ilia Malinin, Alysa Liu |

---

## Politics Cluster — `/trump`

### Active Article Targets

| Article | Slug | Angle |
|---|---|---|
| **Trump executive orders 2026** | `trump-executive-orders-2026` | Full tracker, signed orders, status |
| **Trump tariffs 2026 impact** | `trump-tariffs-2026-economic-impact` | Trade war escalation, retaliatory tariffs |
| **DOGE cuts 2026** | `doge-department-government-efficiency-2026` | Musk-led cuts, what was eliminated |
| **2026 midterm elections** | `2026-midterm-elections-preview` | Key races, Senate map, House control |

---

## Content Velocity Targets — April/May 2026

These are time-sensitive. Publish within the next 2–4 weeks to capture current search demand.

| Article | Priority | Status | Why Now |
|---|---|---|---|
| GTA 6 trailer 2 breakdown | HIGH | **LIVE** | Perennial evergreen |
| Fortnite C6S2 map changes | HIGH | **LIVE** | Active season |
| Fortnite C6S2 battle pass | HIGH | **LIVE** | Active season |
| Fortnite C6S2 weapons tier list | HIGH | **LIVE** | Active season |
| ~~Nintendo Switch 2 pre-order guide~~ | ~~URGENT~~ | **DELETED** (wrong year) | — |
| ~~Switch 2 launch games full list~~ | ~~URGENT~~ | **DELETED** (wrong year) | — |
| GPT-5 features and release date | HIGH | Not started | Expected announcement Q2 2026 |
| World Cup 2026 schedule | HIGH | Not started | June start — search climbing |
| Netflix Q2 2026 earnings recap | MEDIUM | Not started | Publish within 24h of earnings |
| Nvidia RTX 5090 review | MEDIUM | Not started | Hardware cycle |
