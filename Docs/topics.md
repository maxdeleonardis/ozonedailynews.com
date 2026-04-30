# Content Topics — April 2026

---

## Female Influencer / YouTuber Article Targets

### Tier 1 — High Search Volume, Strong SEO

| Creator | Angle | Est. Monthly Search |
|---|---|---|
| **SSSniperWolf (Alia Shelesh)** | Gaming reactions, YouTube controversy, 35M subs | 800K+ |
| **Pokimane (Imane Anys)** | Retired from Twitch 2024, new projects, net worth | 600K+ |
| **Alix Earle** | TikTok rise, "GRWM girl", brand deals, dating life | 500K+ |
| **Charli D'Amelio** | Post-TikTok era, dance career, family show | 900K+ |
| **Emma Chamberlain** | YouTube evolution, Chamberlain Coffee, Met Gala | 400K+ |
| **Valkyrae (Rachel Hofstetter)** | 100 Thieves co-owner, YouTube Gaming, RLYRAE brand | 300K+ |

### Tier 2 — Good Traffic, Less Competitive

| Creator | Angle |
|---|---|
| **Addison Rae** | Acting career, "He's All That", music pivot 2026 |
| **QTCinderella** | Twitch streamer, The Streamer Awards host |
| **Loserfruit (Kathleen Belsten)** | Has a Fortnite Icon skin — high SEO crossover with Fortnite |
| **Brooke Monk** | TikTok couple content, 20M+ following |
| **Liza Koshy** | YouTube comeback arc |
| **Hannah Stocking** | Comedy, Vine-to-YouTube-to-TikTok arc |
| **Ironmouse** | VTuber, VShojo president, Crohn's disease advocacy |

### Recommended First Article
**Valkyrae** — hits gaming + influencer + business ownership angles simultaneously. Cross-links to `/influencer`, `/video-games`, and streaming articles. High authority, lower competition than Charli or Pokimane.

---

## Fortnite Article Targets (2026)

### Chapter 6 Season 2 — "Lawless" (Active Season)

| Topic | Search Angle |
|---|---|
| **Chapter 6 Season 2 map changes** | Japanese/yakuza aesthetic, Shogun POI, cherry blossoms |
| **Season 2 Battle Pass breakdown** | All skins, secret styles, bonus rewards |
| **New weapons tier list** | Katanas, SMGs, LMGs added this season |
| **Ranked mode changes S2** | New ranked system, lobbies rebalance |

### Creator Collaborations (Recent)

| Collab | Notes |
|---|---|
| **Fortnite x Naruto (Season returns)** | Perennial high-search rerun — every return gets search spike |
| **Fortnite Icon Series 2026** | New creator skins announced — Loserfruit crossover angle |
| **Fortnite x MrBeast** | Any ongoing or announced tie-ins |
| **Fortnite Festival Season** | Current music lineup, how to unlock songs |
| **FNCS 2026 Spring** | Competitive scene, prize pool, bracket results |

### "Moves Into Movies" Cluster (extend the gold standard article at `/entertainment/news/fortnite-moves-into-movies`)

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

**Hub:** `/video-games/gta-6` — must link to every sub-article below. Every sub-article must link back to the hub.

### High-Priority Sub-Articles

| Article | Slug | Angle |
|---|---|---|
| **GTA 6 release date** | `gta-6-release-date` | Official window, delay history, platform availability |
| **GTA 6 trailer breakdown** | `gta-6-trailer-2-breakdown` | Every confirmed detail from Trailer 2 |
| **GTA 6 map size** | `gta-6-map-size-vice-city` | Leaked footage comparisons, Leonida state details |
| **GTA 6 characters** | `gta-6-characters-jason-lucia` | Jason and Lucia, confirmed cast, voice actors |
| **GTA 6 price** | `gta-6-price-standard-edition` | $70 vs $80, editions, pre-order bonuses |
| **GTA 6 PC release** | `gta-6-pc-release-date` | Console-first window, PC delay history from GTA 5 |
| **GTA 6 multiplayer** | `gta-6-multiplayer-online` | What we know about GTA Online successor |
| **GTA Online 2026 updates** | `gta-online-2026-updates` | Still-active GTA Online — seasonal content, DLCs |

### Cluster Rules
- Every article: `category: 'Gaming'`, `tags` must include `'GTA 6'`, `'Rockstar Games'`
- Hub link text: `"GTA 6 release date and everything we know"`
- Internal cross-links: GTA 6 articles should also link to `/video-games` hub

---

## Nintendo Switch 2 Cluster — `/video-games/switch2` (2M+/mo)

**Hub:** `/video-games/switch2`

### High-Priority Sub-Articles

| Article | Slug | Angle |
|---|---|---|
| **Switch 2 release date** | `nintendo-switch-2-release-date` | June 5, 2026 confirmed launch, pre-order dates |
| **Switch 2 price** | `nintendo-switch-2-price` | $449.99, bundle options, Joy-Con pricing |
| **Switch 2 games lineup** | `nintendo-switch-2-launch-games` | Mario Kart World, Donkey Kong Bananza, third-party |
| **Switch 2 vs Switch specs** | `nintendo-switch-2-vs-switch-specs` | 4K docked, 1080p handheld, DLSS, larger screen |
| **Switch 2 GameChat** | `nintendo-switch-2-gamechat` | New social feature, camera attachment, use cases |
| **Switch 2 backwards compatibility** | `nintendo-switch-2-backwards-compatible` | Which Switch 1 games work, upgrade pricing |
| **Mario Kart World** | `mario-kart-world-switch-2` | Launch title, open-world racing, 24-player |

### Cluster Rules
- `category: 'Gaming'`, tags include `'Nintendo Switch 2'`, `'Nintendo'`
- Link to `/video-games` hub and `/video-games/switch2` from every sub-article

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

These are time-sensitive and should be published within the next 2–4 weeks to capture current search demand.

| Article | Priority | Why Now |
|---|---|---|
| Nintendo Switch 2 pre-order guide | URGENT | Launch June 5 — search spiking now |
| Switch 2 launch games full list | URGENT | Most-searched Switch 2 query |
| GPT-5 features and release date | HIGH | Expected announcement Q2 2026 |
| GTA 6 trailer 2 breakdown | HIGH | Perennial evergreen, always ranking |
| World Cup 2026 schedule | HIGH | 6 weeks out — search starting to climb |
| Netflix Q2 2026 earnings recap | MEDIUM | Publish within 24h of earnings release |
| Nvidia RTX 5090 review | MEDIUM | Hardware cycle, affiliate potential |
