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
