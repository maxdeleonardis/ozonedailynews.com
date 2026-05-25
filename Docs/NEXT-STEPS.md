# OzoneNews | NEXT-STEPS.md

**Last Updated:** May 25, 2026
**Owner:** OzoneNews Engineering + Editorial (Ozone Network News LLC)
**Repo:** `Autolab350/Objectwire-Frontend` â†’ deploys to `ozonenetwork.news`
**Purpose:** Single source of truth for every active task. Update this file at the start and end of every work session. Sub-brand domain work (micanewspaper.com, cloverheadlines.com, etc.) is tracked separately â€” each brand gets its own repo and its own NEXT-STEPS when scaffolded.

---

## Current Status â€” May 25, 2026

| Signal | State |
|---|---|
| Google Search Console impressions | **Suppressed** â€” HCU algorithmic classifier + April 22 canonical bug |
| April 22 canonical bug | âœ… Fixed. Google re-crawl in progress (4â€“8 weeks to reflect). |
| HCU classifier next window | Aug/Sep 2026 core update |
| Registry entries | ~694 |
| Static JSON articles | ~70 NewsArticles, ~25 JackArticles, 17 CreatorArticles |
| Articles with `image_url` in registry | ~195 / 694 (28%) â€” critical gap for Top Stories |
| Site identity | âœ… Rebranded â€” **Gaming Â· Finance Â· Startups** three-pillar model |
| Nav (mobile + desktop) | âœ… Rebuilt â€” Gaming / Finance / Startups / News hubs |
| `/network` page | âœ… Live â€” full 11-brand ONN directory |
| Phase 3 brand changes | â³ **Uncommitted â€” build + commit pending** |
| Last deploy | May 12, 2026 â€” Tesla FSD Cannonball article |

---

## Phase 3 Brand Identity â€” Completed May 25, 2026

All of the following changes are written to disk but **not yet committed or deployed**. Run the build + commit step below before anything else.

| File | Change |
|---|---|
| `components/nav/MobileNav.tsx` | NAV_HUBS rebuilt: Gaming / Finance / Startups / News |
| `components/nav/MainNav.tsx` | HUBS rebuilt: same 4-hub order |
| `lib/site-config.ts` | `tagline` = `"Gaming Â· Finance Â· Startups"`, description updated |
| `app/layout.tsx` | Nameplate tagline, footer subtitle, footer description, Max bio, coverage column, Our Mission block, `/network` footer link |
| `app/about/page.tsx` | Mission copy, Max beat, network teaser (11 brand pills + CTA) |
| `app/network/page.tsx` | New file â€” full ONN 11-brand directory with correct domains |
| `Docs/DOMAINS.md` | All domain names corrected across all tables and section headers |

---

---

## Priority Stack â€” Ordered by Impact

### ðŸ”´ P0 â€” Build + Commit Phase 3 (Do First)

#### 1. Build and Push Phase 3 Brand Changes
**Everything from the May 25 session is uncommitted. Do this before writing any new content.**

```bash
# Verify no build errors from the brand changes
npm run build

# If clean, commit everything
git add -A
git commit -m "feat: rebrand nav + site identity around Gaming Â· Finance Â· Startups | /network page | domain portfolio update"
git push origin main
```

**Files changed in Phase 3:**
- `components/nav/MobileNav.tsx`
- `components/nav/MainNav.tsx`
- `lib/site-config.ts`
- `app/layout.tsx`
- `app/about/page.tsx`
- `app/network/page.tsx` (new file)
- `Docs/DOMAINS.md`
- `Docs/NEXT-STEPS.md`

---

### ðŸ”´ P1 â€” Manual Ops (No Code, High Leverage)

#### 2. Submit News Sitemap to Google Search Console
- **Action:** GSC â†’ Sitemaps â†’ Add `https://www.ozonenetwork.news/news-sitemap.xml`
- **Why:** Required for Google News indexing. Not yet submitted.
- **Time:** 10 minutes

#### 3. Verify in Bing Webmaster Tools + Submit Sitemaps
- **URL:** https://bing.com/webmasters
- **Action:** Verify ownership â†’ submit `/sitemap.xml` + `/news-sitemap.xml`
- **Why:** IndexNow key is live. BWT is the activation step.
- **Time:** 30 minutes

#### 4. Validate RSS Feed (W3C)
- **URL:** `https://validator.w3.org/feed/check.cgi?url=https://www.ozonenetwork.news/rss.xml`
- **Why:** Prerequisite for Bing News and Apple News publisher applications.
- **Time:** 15 minutes

---

### ðŸ”´ P2 â€” Code Fixes (High Leverage, Low Effort)

#### 5. Fix `getArticlesByCategory()` â€” Local-First
**File:** `lib/registry-service.ts`
**Problem:** This function hits Supabase directly instead of reading `content_registry.json` first. Category hub pages (`/tech`, `/crypto`, `/video-games`, etc.) get stale or empty results when Supabase is slow.
**Fix:**
```typescript
export async function getArticlesByCategory(category: string, limit?: number): Promise<ContentEntry[]> {
  const local = loadLocalRegistry();
  if (local && local.length > 0) {
    const filtered = local.filter(e => e.category.toLowerCase() === category.toLowerCase());
    return limit ? filtered.slice(0, limit) : filtered;
  }
  // Supabase fallback only
}
```
**Impact:** Category hubs serve from local JSON (~0ms) instead of Supabase (~200ms+).

#### 6. Add `published_at` to `rowToEntry()` Mapping
**File:** `lib/registry-service.ts`
**Problem:** `rowToEntry()` maps `publish_date` but not `published_at`. News-sitemap and NewsArticle schema need ISO-8601 `published_at`.
**Fix:** Add to `rowToEntry()`:
```typescript
publishedAt: row.published_at ? String(row.published_at) : undefined,
```
Add `publishedAt?: string` to the `ContentEntry` interface in `lib/content-registry.ts`.

#### 7. Verify ISR on Hub Pages (34 pages)
**Check:**
```bash
grep -r "force-dynamic" app/ --include="*.tsx" -l | grep -v "admin\|auth\|api\|search\|sitemap\|news-sitemap"
```
**Expected:** 0 results. If any appear, change to `export const revalidate = 3600`.
**Impact:** Googlebot crawl of hubs goes from ~200ms server-render to ~10ms ISR cache.

---

### ðŸŸ¡ P3 â€” Content | Three Pillars Build-Out

This is what moves the HCU classifier. Every article must have original data, named figures, and at least one primary source link.

**Three pillars. One priority each:**

#### 8. Gaming Pillar â€” Expand GTA 6 Cluster
Hub: `/video-games/gta-6` (5M+/mo search volume â€” highest priority cluster)

**Write next (each a separate NewsArticle):**
- `GTA 6 Map | Every Confirmed Location, Size Comparison, and Fan Findings`
- `GTA 6 Price | $80 Base Game, Deluxe Edition Cost, and Pre-Order Bonuses`
- `GTA 6 Trailer 3 | All Details, Hidden Easter Eggs, and What It Confirms`
- `GTA 6 Multiplayer | GTA Online 2 Confirmed Features`

**Cluster rule:** Every sub-article links back to `/video-games/gta-6` hub in paragraph 1.

#### 9. Startups Pillar â€” OpenAI Cluster
Hub: `/open-ai` (3M+/mo)

**Write next:**
- `OpenAI o3 vs GPT-4o | Benchmark Comparison`
- `OpenAI Codex | What It Does, Pricing, and Developer Access`
- `Sam Altman Net Worth 2026 | Salary, Equity, and Wealth Breakdown`

**Cluster rule:** Every sub-article links back to `/open-ai` hub.

#### 10. Finance Pillar â€” DraftKings / PrizePicks Cluster
Hub: `/finance` + `/crypto`

**Write next:**
- `DraftKings vs FanDuel 2026 | Odds, Promos, and Payout Speed`
- `PrizePicks Free Entry Code May 2026 | Active Promos and How They Work`
- `Bitcoin Price Today | Why It Moves and What Analysts Are Watching`

---

### ðŸŸ¡ P4 â€” Author Pages and E-E-A-T

#### 11. Build Out Max DeLeonardis Author Page
**File:** `app/authors/max-deleonardis/page.tsx`
**Needs:**
- [ ] Bio: "Gaming, Finance & Startups Desk" framing
- [ ] Beat statement: specific expertise, years covering it
- [ ] External link: LinkedIn or Twitter (required for E-E-A-T â€” internal-only bios are weak signals)
- [ ] Recent articles list, linked

#### 12. Build Out Jack Sterling Author Page
**File:** `app/authors/jack-sterling/page.tsx`
**Needs:**
- [ ] External link to Twitter `@jacksterling_on` or LinkedIn
- [ ] Specific beat: crypto/finance/tech/autonomous vehicles
- [ ] Real photo consistent with any external social

**Rule:** Author without an external `sameAs` link must use "OzoneNews Editorial Team" house byline instead.

---

### ðŸŸ  P5 â€” Registry Data Quality (Unlocks Top Stories)

#### 13. Backfill `image_url` for Top 50 Registry Entries

**Why:** 70%+ of registry entries have no `image_url`. No image = ineligible for Google Top Stories and Discover.

**Minimum spec:** 1200Ã—675px, hosted URL. Set `image_width: 1200`, `image_height: 675`, `image_alt`.

**Check missing count:**
```bash
node -e "const r = require('./content/static/content_registry.json'); console.log('Missing image_url:', r.filter(e => !e.image_url).length, '/', r.length)"
```

**Image source:** Unsplash API â€” key in project env.

#### 14. Add `published_at` ISO Field to Legacy Registry Entries

**Pattern for every new entry (always include both):**
```json
"publish_date": "2026-05-25",
"published_at": "2026-05-25T10:00:00-05:00"
```

---

### ðŸ”µ P6 â€” Distribution (Apply After RSS Validates)

#### 15. Bing News Publisher Portal
- **URL:** https://bing.com/news/publisher
- **Prerequisites:** BWT verified (P1 #3), RSS validates (P1 #4)

#### 16. Apple News Publisher
- **URL:** https://news.apple.com/publisher
- **Prerequisites:** RSS validates (P1 #4)

#### 17. Google Publisher Center
- **URL:** https://publishercenter.google.com
- **Required for:** Google News tab distribution

#### 18. ONA + SPJ Memberships
- ONA: https://journalists.org/membership ($100)
- SPJ: https://spj.org/join.asp ($75/author â€” Jack Sterling)
- **Why:** E-E-A-T author credential signals.

---

### ðŸ”µ P7 â€” Sub-Brand Domain Roadmap (Separate Repos â€” NOT This Repo)

The sub-brand domains are separate Railway services and separate GitHub repos. Do not build sub-brand content in this repo. This section is a reference for when each brand is scaffolded.

| Domain | Niche | Status | When to Start |
|---|---|---|---|
| `ozonedailynews.com` | Creator economy, YouTube | Live | Ongoing â€” separate repo |
| `objectivewire.org` | Investigations, civic watchdog | Live | Ongoing â€” separate repo |
| `micanewspaper.com` | Science & Space | Purchased | After first 3 flagship pillars are solid |
| `cloverheadlines.com` | Personal Finance | Purchased | After first 3 flagship pillars are solid |
| `onyxtimes.org` | Luxury & Fashion | Purchased | Phase 2 (late 2026) |
| `basilnews.com` | Food & Agriculture | Purchased | Phase 2 (late 2026) |
| `obsidianpaper.com` | Niche TBD | Purchased | Decide niche first |
| `statusnews.com` | Business & Markets | Buy next | After recovery confirmed |
| `sagenews.com` | Health & Longevity | Buy next | After recovery confirmed |
| `grovenews.com` | Local & Real Estate | Buy later | Phase 3 (2027) |
| `halonews.com` | Cybersecurity | On Hold | Review niche before deploying |

**To scaffold a new sub-brand:**
1. Create a new GitHub repo under `Autolab350/[BrandName]`
2. Clone this repo as the base, update `lib/site-config.ts` env var reads
3. Set Railway env vars: `NEXT_PUBLIC_SITE_NAME`, `NEXT_PUBLIC_SITE_URL`, etc.
4. Create a new Railway service pointed at the new repo
5. Point the domain DNS to the new Railway service
6. Write 15+ articles before launch (minimum threshold for Google discovery)
7. Submit to GSC, BWT, Publisher Center for the new domain

---

## SEO Pipeline Architecture â€” Current State

```
content/static/content_registry.json (~694 entries, on-prem)
        â†“
loadLocalRegistry() â€” in-memory cache at runtime
        â†“
getAllEntries()          â†’ app/sitemap.ts        â†’ /sitemap.xml
getLatestArticles()      â†’ homepage feed         â†’ "More Stories"
getRelatedArticles()     â†’ article sidebar       â†’ related articles
feed-utils.ts            â†’ /rss.xml, /feed.json, /news-sitemap.xml
getArticlesByCategory()  â†’ âš ï¸ still hits Supabase directly (see P2 #5)

Supabase content_registry â† fallback only (no new writes for articles)
```

### Article Storage â€” Where Content Lives

| Type | Static JSON Store | Component | Route Pattern |
|---|---|---|---|
| News, breaking, gaming, tech | `content/static/articles/` | `NewsArticleDB` | Any route |
| Research, investigations, reviews | `content/static/jack_articles/` | `JackArticleDB` | Any route |
| Profiles, wiki-style, evergreen | `content/static/article_pages/` | `ArticlePageDB` | Any route |
| Creator / influencer bios | `content/static/creator_articles/` | `CreatorArticleDB` | `/influencer/` |

### Publishing Workflow (Every New Article)

```
1. Write page.tsx stub at correct route
2. Write static JSON at content/static/{type}/{slug}.json
3. Add entry to content/static/{type}/_index.json
4. Run: npm run wiki:sync -- --write  (adds registry entry with correct date)
5. npm run build (prebuild validates, syncs registry)
6. git add -A && git commit -m "feat: [article title]"
7. git push origin main  â† Railway auto-deploys
```

---

## Recovery Timeline

| Milestone | Target | Status |
|---|---|---|
| April 22 canonical bug fixed | May 2026 | âœ… Fixed |
| Phase 3 brand identity complete | May 25, 2026 | âœ… Done (uncommitted) |
| Phase 3 committed + deployed | May 25, 2026 | â³ Run P0 #1 |
| News sitemap submitted to GSC | May 2026 | â³ Manual action |
| Bing Webmaster Tools verified | May 2026 | â³ Manual action |
| RSS validated (W3C) | May 2026 | â³ Manual action |
| `getArticlesByCategory()` local-first fix | May 2026 | â³ Code task |
| GTA 6 cluster expanded (4 sub-articles) | Jun 2026 | â³ Content |
| OpenAI cluster (3 sub-articles) | Jun 2026 | â³ Content |
| Finance cluster (3 sub-articles) | Jun 2026 | â³ Content |
| Author pages â€” external credentials | Jun 2026 | â³ Content |
| Top 50 registry image_url backfill | Jun 2026 | â³ Data |
| Bing News Publisher application | Jun 2026 | â³ Ops |
| Apple News Publisher application | Jun 2026 | â³ Ops |
| **Google core update â€” HCU re-evaluation** | **Aug/Sep 2026** | â³ Waiting |
| First sub-brand scaffolded (micanewspaper.com or cloverheadlines.com) | Sep 2026 | â³ After recovery |
| Assess partial recovery | Sep 2026 | â³ Waiting |
| **Google core update â€” full recovery assessment** | **Mar 2027** | â³ Waiting |

---

## What NOT To Do

| Action | Why |
|---|---|
| Build sub-brand content in this repo | Each sub-brand is a separate repo + Railway service. This repo = ozonenetwork.news only. |
| Submit individual reindex requests for suppressed pages | Does not re-trigger the domain HCU classifier. |
| Increase publishing volume without quality gate | More marginal content makes the classifier worse. |
| Add content outside Gaming / Finance / Startups to ozonenetwork.news | Dilutes topical authority. All other verticals go to their sub-brand. |
| Push to Railway without running `npm run build` first | Build guard catches em dashes, missing canonicals, bad imports. |
| Add `<link rel="canonical">` to `app/layout.tsx` | Caused the April 22 cliff. Every page sets its own canonical via `metadata.alternates.canonical`. |
| Commit articles without `published_at` ISO field | Breaks news sitemap + NewsArticle schema. Always include ISO-8601 timestamp. |
| Use em dashes (`â€”`) anywhere | Build will fail. Use `|` in headings, `,` in prose. |

---

## Three-Pillar Content Rules (Binding on Every Article)

Every article published to ozonenetwork.news must belong to one of the three pillars:

| Pillar | Hub | What to Cover | What to Redirect Elsewhere |
|---|---|---|---|
| **Gaming** | `/video-games` | GTA 6, Switch 2, Fortnite, Epic, Unreal, MHA, Anime games | Game health guides â†’ sagenews.com |
| **Finance** | `/finance`, `/crypto` | DraftKings, PrizePicks, Bitcoin, BlackRock, ETFs, market news | Deep consumer finance â†’ cloverheadlines.com |
| **Startups** | `/tech`, `/open-ai`, `/nvidia`, `/google`, `/apple`, `/microsoft` | AI product news, funding rounds, earnings, executive moves | Science/research behind the tech â†’ micanewspaper.com |

If a story doesn't fit one of these three pillars, it goes on a sub-brand domain, not here.

---

*Update this file at the start and end of every work session. It supersedes `object_nextsteps.md`, `RECOVERY_PLAN.md`, and `AlfasaAutoSEO-Audit-May2026.md` for active task tracking. Those files remain as reference history.*
