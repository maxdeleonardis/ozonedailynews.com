# ObjectWire Content Plan | Tech, Gaming & Anime Verticals

**Version:** 1.0  
**Date:** May 4, 2026  
**Status:** Active — Ready to write

---

## Page Review: What's Working, What Needs Fixing

### AMD Ryzen 9950X3D2 Cooling Guide ✅ Gold Standard
`/tech/newegg/amd-ryzen-9-9950x3d2-dual-edition-cooling-build-guide-2026`

This is one of the best articles on the site. Deep technical content, spec comparison tables, 5 numbered sections, primary sources cited, timeline, cooling tier guide, quotes. The JackArticle format is doing exactly what it should. **This is the template every new hardware/tech article should match.**

What it's missing:
- Hub backlink to `/tech/newegg` or `/tech` is text-only, buried at the bottom of Section 5. Should be a prominent link in the first paragraph.
- No cluster siblings — needs 2-3 more AMD/CPU articles it can link to
- No `meta_title` override — default `title + " | ObjectWire"` is 72 chars, over the 60-char limit

---

### Video Games Hub `/video-games` ✅ Strong
83 registered articles. Good breadth: GTA 6, Switch 2, MHA, Forza, Battlefield, Dragon Ball, RE Requiem, Windrose, Crimson Desert, Pokemon Pokopia, Unreal Engine 5.7, Mario Kart.

What's missing:
- **No hub JackArticles** for top-volume verticals. GTA 6 has a stub page at `/video-games/gta-6` but no deep evergreen hub JackArticle that ranks for "GTA 6 release date" (5M+/mo)
- **Nintendo Switch 2 hub** — dozens of articles but no `/video-games/switch2` hub page
- **MHA hub** — `/video-games/mha` has a layout.tsx but no actual hub article at `/video-games/mha/page.tsx`
- **Anime games hub** — `/anime/page.tsx` exists but has minimal content

---

### MHA Ultra Rumble Season 16 ⚠️ Content Good, Related Articles BROKEN
`/video-games/mha/ultra-rumble/season-16`

The article itself is excellent — season recap, character breakdown, event timeline, how-to guide. However:

**CRITICAL PROBLEM: Related articles sidebar shows completely wrong content.**
Showing: Nvidia class action, DLSS 5 boycott, Square Bitcoin payments, Qwen 3.6, Apple removes app — all tech/finance articles with zero relevance to a gaming/anime audience.

This happens because `related_articles` in the static JSON is empty, so `JackArticle` falls back to a generic registry query without enough category filtering. The anime/gaming audience hitting this article is getting served content that will send them away immediately.

Fix: the static JSON `related_articles` field needs gaming/anime-specific entries. The `enrich-jack-articles` script now handles this — run `jack:enrich-force` to rebuild it once more gaming articles are in the registry.

---

## Supabase Safety Pre-Flight ✅ GREEN — Safe to Write

Before publishing any new articles, confirm this checklist passes:

| Check | Status | Detail |
|---|---|---|
| `force-dynamic` on hub pages | ✅ 0 violations | All 30+ hubs now `revalidate=3600` |
| `force-dynamic` on article spokes | ✅ 0 violations | All article pages ISR or static |
| Sitemap queries Supabase | ✅ Fixed | Uses local `content_registry.json` |
| JackArticles hit Supabase at runtime | ✅ Fixed | Static JSON first, 89 files populated |
| `scanAllContent()` in use | ✅ Removed | All instances replaced with `getAllEntries()` |
| Double metadata DB call | ✅ Minimal | Only `[...path]` catch-all uses `generateMetadata()` |
| Canonical in layout.tsx | ✅ Clear | Prebuild validator blocks this |
| News-sitemap | ✅ Correct | `force-dynamic` + 15min CDN cache — only legitimate use |

**Publishing rules for new articles:**
- `NewsArticleDB` spokes → Supabase `articles` table → ISR `revalidate=3600` → ✅ safe
- `JackArticleDB` → run `npm run jack:enrich` after `wiki:publish` to create static JSON → ✅ safe
- Hub pages → static `page.tsx`, no DB calls → ✅ safe
- Never use `force-dynamic` on any content page → enforced

**Max safe publish rate:** Unlimited. With ISR + static JSON, Googlebot can crawl every page on the site without triggering a single Supabase query on the second crawl of any page. The only DB calls are on first renders (cache warm) and the news-sitemap.

---

## Content Plan: 3 Verticals, 3 Months

### Vertical 1 — GAMING (Priority: 🔴 Highest)

#### Cluster A: GTA 6 (5M+/mo search volume)

**Hub JackArticle (write first):**
```
Title: GTA 6 Release Date, Story, Map, and Everything Confirmed 2026
Slug:  video-games-gta-6-release-date-everything-confirmed-2026
URL:   /video-games/gta-6/release-date
Type:  JackArticleDB (static JSON)
```
This is the highest-value single article ObjectWire can write. "GTA 6 release date" gets 5M+ searches/month. A comprehensive hub JackArticle covering: release date, platforms, Vice City map, protagonist Lucia, online mode, price, system requirements, Take-Two statements, delay history. Target: 2,500 words, 6 numbered sections, spec comparison table, timeline.

**Spoke NewsArticles (write after hub):**
- GTA 6 trailer breakdown | Every confirmed detail from Trailers 1 and 2
- GTA 6 online mode | What Rockstar has and hasn't confirmed
- GTA 6 PC release window | Why it's likely 2027
- GTA 6 vs GTA 5 | 12 years of open world evolution
- Take-Two earnings | GTA 6 budget, marketing spend, projected revenue

---

#### Cluster B: Nintendo Switch 2 (2M+/mo)

**Hub JackArticle (write second):**
```
Title: Nintendo Switch 2 | Specs, Price, Launch Library, and Release Date 2026
Slug:  video-games-switch2-nintendo-switch-2-specs-price-launch-2026
URL:   /video-games/switch2
Type:  JackArticleDB (static JSON)
```
Covers: confirmed specs (CPU/GPU, screen size, RAM), Joy-Con 2 magnetic attachment, $449 price, June 5 launch date, backwards compatibility rules, launch titles (Mario Kart World, Donkey Kong Bananza, Pokémon Pokopia). Links to all existing Switch 2 spokes.

**Spoke NewsArticles:**
- Nintendo Switch 2 vs Steam Deck OLED | Which is worth buying in 2026
- Mario Kart World | All 48 courses and 30 racers confirmed
- Switch 2 backwards compatibility | The full list of what works and what doesn't
- Switch 2 launch sales | First weekend numbers vs Switch 1

---

#### Cluster C: My Hero Academia Games (anime crossover)

**Hub JackArticle:**
```
Title: My Hero Ultra Rumble | Complete Game Guide, Season 16, and Tier List 2026
Slug:  video-games-mha-ultra-rumble-complete-guide-season-16-2026
URL:   /video-games/mha/ultra-rumble
Type:  JackArticleDB (static JSON)
```
Covers: what the game is, all seasons recap, current meta, character tier list, how to get free crystals, season 16 star and stripe, upcoming season 17 predictions. This anchors ALL existing MHA Ultra Rumble content.

**Spoke NewsArticles:**
- My Hero Ultra Rumble Season 17 | All confirmed characters and events
- My Hero Ultra Rumble | Best characters tier list May 2026
- My Hero Ultra Rumble Star and Stripe | How to play her kit
- Cluster Bakugo Season 16 | Full skill breakdown (spoke already exists)

---

#### Cluster D: Dragon Ball Xenoverse 3 (growing fast, anime crossover)

**Hub JackArticle:**
```
Title: Dragon Ball Xenoverse 3 | Release Date, Characters, and Age 1000 World 2026
Slug:  video-games-dragon-ball-xenoverse-3-hub-release-characters-2026
URL:   /video-games/dragon-ball/xenoverse-3
Type:  JackArticleDB (static JSON)
```
Covers everything confirmed: Age 1000 setting, West City destructible environments, PS5 exclusivity window, release window 2027, character roster hints, story premise, what's new vs XV2.

**Spoke NewsArticles:**
- Dragon Ball Xenoverse 3 characters | Every confirmed fighter so far
- Dragon Ball Xenoverse 3 vs XV2 | What Dimps is changing
- Dragon Ball Xenoverse 3 release date | All trailers and leaks analyzed

---

#### Cluster E: Indie Breakouts (quick traffic spikes)

**Quick NewsArticles (fast turnaround, trending searches):**
- Windrose | Everything we know about the pirate survival game
- Crimson Desert | Review round-up and launch week numbers
- Slay the Spire 2 | What changed from the original
- Bellwright 1 million sales | The medieval survival RPG story

---

### Vertical 2 — ANIME GAMES (Priority: 🟡 High)

Anime gaming is one of the fastest-growing segments on YouTube and TikTok. ObjectWire has an `/anime` route but almost no content in it. This is a wide-open gap.

#### Anime Games Hub

**Hub page:** `/anime` — currently mostly empty. Need to build this out.

**Target articles:**

| Article | URL | Type | Volume |
|---|---|---|---|
| Top Anime Battle Royale Games 2026 | `/anime/top-anime-battle-royale-2026` | JackArticle | High |
| Best Anime Games on Switch 2 | `/anime/best-anime-games-switch-2-2026` | JackArticle | High |
| Dragon Ball Xenoverse 3 hub | `/video-games/dragon-ball/xenoverse-3` | JackArticle | Growing |
| MHA Ultra Rumble hub | `/video-games/mha/ultra-rumble` | JackArticle | Established |
| Arknights Endfield review | `/video-games/arknights-endfield/review` | NewsArticle | Medium |
| One Piece Odyssey 2 confirmed | `/anime/one-piece-odyssey-2` | NewsArticle | Medium |
| Naruto x Boruto Ultimate Ninja STORM Connections | `/anime/naruto-storm-connections-2026` | NewsArticle | Medium |

---

### Vertical 3 — TECH/HARDWARE (Priority: 🟡 High)

The AMD Ryzen article proves there's a real hardware-enthusiast audience on the site. Build more of these.

#### Cluster A: CPU/GPU Build Guides (Newegg partnership content)

**Spoke articles (JackArticle format, all link to `/tech`):**

| Article | Target Keyword | Volume |
|---|---|---|
| Intel Core Ultra 9 285K vs Ryzen 9 9950X3D2 | "intel vs amd 2026" | High |
| Best GPUs for gaming 2026 | "best gpu 2026" | Very High |
| Nvidia RTX 5090 review | "rtx 5090" | Very High |
| AMD RX 9070 XT review | "rx 9070 xt" | High |
| Best AM5 motherboards 2026 | "am5 motherboard" | Medium |
| DDR5 vs DDR4 in 2026 | "ddr5 vs ddr4" | Medium |

#### Cluster B: AI-Adjacent Tech (feeds from existing OpenAI/tech coverage)

| Article | Target Keyword | Type |
|---|---|---|
| Best GPUs for local AI in 2026 | "gpu for ai" | JackArticle hub |
| RTX 5090 vs 4090 for AI workloads | "rtx 5090 ai" | NewsArticle |
| AMD Instinct MI300X vs Nvidia H200 | "ai accelerator 2026" | JackArticle |

---

## owire.org Cross-Link Plan

These articles should include `SisterSiteCallout` pointing to owire.org:

| ObjectWire Article | owire.org Link | Context |
|---|---|---|
| MHA Ultra Rumble hub | `owire.org/anime/my-hero-academia` | Anime culture |
| Dragon Ball Xenoverse 3 hub | `owire.org/anime/dragon-ball` | Anime culture |
| Top Anime Games 2026 | `owire.org/anime` | Anime culture |
| Any Fortnite article | `owire.org/gaming/fortnite` | Creator culture crossover |
| Gaming industry layoffs | `owire.org/entertainment` | Entertainment crossover |

---

## Article Writing Order

Write in this exact sequence to maximize hub-and-spoke linking from day one:

### Week 1 — Anchors (build the hubs first)
1. **GTA 6 Complete Hub JackArticle** — `/video-games/gta-6/release-date`
2. **Nintendo Switch 2 Hub JackArticle** — `/video-games/switch2`
3. **MHA Ultra Rumble Hub JackArticle** — `/video-games/mha/ultra-rumble`

### Week 2 — High-volume spokes
4. GTA 6 PC release window NewsArticle
5. Switch 2 vs Steam Deck OLED NewsArticle
6. MHA Ultra Rumble Season 17 preview NewsArticle
7. Dragon Ball Xenoverse 3 Hub JackArticle

### Week 3 — Tech + anime expansion
8. Best GPUs for gaming 2026 JackArticle
9. Top Anime Battle Royale Games 2026 JackArticle
10. Intel vs AMD 2026 JackArticle

### Week 4+ — Spokes and quick news
- Fill each cluster with 3-5 news spokes per hub
- Prioritize articles with real search demand (verified with Google Trends)
- Every spoke links back to its hub within the first 3 paragraphs

---

## Interlinking Map (Required Before Publishing)

Every new article must include these links:

**Gaming articles:**
- Link to `/video-games` (vertical hub) in first paragraph
- Link to cluster hub (e.g., `/video-games/gta-6`) within first 3 paragraphs
- Link to 2 sibling cluster articles in body
- Link to `/authors/jack-sterling` (or relevant author)

**Anime articles:**
- Link to `/anime` (vertical hub)
- Link to `/video-games/mha/ultra-rumble` (if MHA-related)
- Cross-link to owire.org for character/culture coverage

**Tech/Hardware articles:**
- Link to `/tech` (vertical hub) in first paragraph
- Link to `/nvidia` or `/open-ai` if AI-adjacent
- Link to Newegg source article externally (as already done in the 9950X3D2 article)

---

## Publish Checklist (Run Before Every Article)

```bash
# 1. Confirm no force-dynamic regressions
grep -r "force-dynamic" app/ --include="*.tsx" | grep -v "admin\|auth\|api\|route.ts"
# Expected: 0 results

# 2. After wiki:publish on any JackArticle, enrich static JSON
npm run jack:enrich

# 3. Confirm static file was created
ls content/static/jack_articles/[your-slug].json

# 4. Validate no canonical errors
npm run prebuild

# 5. Check article appears in registry
npm run wiki:status
```

---

*ObjectWire Content Plan v1.0 — Tech, Gaming, Anime Verticals — May 2026*
