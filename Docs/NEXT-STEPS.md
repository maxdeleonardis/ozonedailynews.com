# OzoneNews | NEXT-STEPS.md

**Last Updated:** May 16, 2026
**Owner:** OzoneNews Engineering + Editorial
**Purpose:** Single source of truth for every active task. Update this file at the start and end of every work session.

---

## Current Status — May 16, 2026

| Signal | State |
|---|---|
| Google Search Console impressions | **Suppressed** — HCU algorithmic classifier + April 22 canonical bug |
| April 22 canonical bug | ✅ Fixed in code. Google re-crawl in progress (4–8 weeks). |
| HCU classifier | ⏳ Next evaluation window: **Aug/Sep 2026 core update** |
| Registry entries | 661 |
| Static JSON articles | ~70 NewsArticles, ~25 JackArticles, 17 CreatorArticles |
| Articles with `image_url` in registry | ~195 / 661 (30%) — critical gap |
| Registry entries with `published_at` | Partial — new articles have it, legacy entries do not |
| Last deploy | May 12, 2026 — Tesla FSD Cannonball article |

---

## Priority Stack — Ordered by Impact

### 🔴 P0 — Do These Before Anything Else

#### 1. Submit News Sitemap to Google Search Console
- **Action:** GSC → Sitemaps → Add `https://www.OzoneNews.org/news-sitemap.xml`
- **Why:** Required for Google News indexing. Not yet submitted per May 12 audit.
- **Time:** 10 minutes
- **Who:** Manual — needs GSC access

#### 2. Verify Site in Bing Webmaster Tools + Submit Sitemaps
- **URL:** https://bing.com/webmasters
- **Action:** Verify ownership → submit `/sitemap.xml` + `/news-sitemap.xml`
- **Why:** IndexNow key is live and deployed. BWT is the activation step that makes IndexNow pings count.
- **Time:** 30 minutes
- **Who:** Manual — needs BWT access

#### 3. Validate RSS Feed (W3C)
- **URL:** `https://validator.w3.org/feed/check.cgi?url=https://www.OzoneNews.org/rss.xml`
- **Why:** RSS was fixed May 12 (content:encoded, media:thumbnail, dc:creator, enclosure length). Confirm the fix passes W3C before applying for Bing News and Apple News.
- **Time:** 15 minutes
- **Who:** Manual — open URL, check for errors

---

### 🔴 P1 — Code Fixes (High Leverage, Low Effort)

#### 4. Fix `getArticlesByCategory()` — Local-First
**File:** `lib/registry-service.ts`
**Problem:** This function bypasses the local `content_registry.json` and hits Supabase directly. Category hub pages (`/tech`, `/crypto`, `/video-games`, etc.) get stale or empty results when Supabase is slow or unavailable. All other functions use local-first correctly.
**Fix:**
```typescript
export async function getArticlesByCategory(category: string, limit?: number): Promise<ContentEntry[]> {
  // Local first — same pattern as getAllEntries()
  const local = loadLocalRegistry();
  if (local && local.length > 0) {
    const filtered = local.filter(e => e.category.toLowerCase() === category.toLowerCase());
    return limit ? filtered.slice(0, limit) : filtered;
  }
  // Supabase fallback only
  // ... existing Supabase code
}
```
**Impact:** Category hubs serve from local JSON (~0ms) instead of Supabase (~200ms+). Googlebot crawl of hubs improves.

#### 5. Add `published_at` to `rowToEntry()` Mapping
**File:** `lib/registry-service.ts`
**Problem:** `rowToEntry()` maps `publish_date` but not `published_at`. The news-sitemap and NewsArticle schema both need ISO-8601 `published_at`. New articles have it in static JSON but it is not surfaced through the registry service.
**Fix:** Add to `rowToEntry()`:
```typescript
publishedAt: row.published_at ? String(row.published_at) : undefined,
```
And add `publishedAt?: string` to the `ContentEntry` interface in `lib/content-registry.ts`.

#### 6. Confirm 34 Hub Pages Are On `revalidate = 3600`
**File:** Multiple hub `page.tsx` files
**Problem:** May 4 audit found 34 pages on `force-dynamic` that should be ISR. Docs say fixed — verify it held through subsequent deploys.
**Run:** `grep -r "force-dynamic" app/ --include="*.tsx" -l | grep -v "admin\|auth\|api\|search\|sitemap\|news-sitemap"`
**Expected:** 0 results (or only legitimate dynamic pages)
**Impact:** Every Googlebot crawl of a hub currently re-renders. ISR serves from cache in ~10ms.

#### 7. Fix `app/trump/page.tsx` — Confirm `scanAllContent()` Removed
**Run:** `grep -n "scanAllContent" app/trump/page.tsx`
**Expected:** No matches
**If still present:** Replace with `getAllEntries()` filtered by slug prefix, add `revalidate = 3600`

---

### 🟡 P2 — Content Quality (What Moves the HCU Classifier)

These are the actions that actually affect the Aug/Sep 2026 core update outcome. Code fixes help crawlability. These fix the classifier signal.

#### 8. Publish 2–3 Original Investigations Before August 2026

**This is the single most important content action.**

The HCU classifier rewards:
- Primary sources only (FOIA, court filings, named sources)
- Named figures, dates, dollar amounts
- An angle no other outlet has
- Local relevance + public interest

**Model:** `/investigations/minesoda/` — use this as the template for depth and sourcing.

**Pipeline:**
```
File FOIA (Austin city / Travis County / Texas state agency)
        ↓
Publish findings as full investigation (1,200+ words, 2+ named sources)
        ↓
Submit tip to Austin Chronicle / Austin American-Statesman / KXAN / KUT
        ↓
If they cite OzoneNews → legitimate editorial backlink (highest-value SEO signal possible)
```

**Investigation ideas:**
- Austin city budget allocations or contract awards via public records
- Travis County court filings — fraud, civil suits against public figures
- Texas state agency licensing violations or consumer complaints
- Local business harm with documentable evidence

#### 9. Fix All Author Pages — External Credential Links

**Why:** Google quality raters look for author credentials verifiable **outside** the site. A bio referencing only OzoneNews is a weak E-E-A-T signal. A bio linking to prior publication bylines, LinkedIn, or journalism portfolios is a strong one.

**Each `/authors/[slug]` page needs:**
- [ ] Real photo consistent with any external social profile
- [ ] Specific expertise statement: "covers Austin local government and Travis County courts since 2024" — not generic
- [ ] At least one link to external work (prior publication, LinkedIn, journalism portfolio)
- [ ] List of their most recent OzoneNews articles, linked
- [ ] Beat clearly defined

**Authors to prioritize:**
- [ ] `jack-sterling` — crypto / finance / tech / autonomous vehicles
- [ ] `michael-cripe` — entertainment / IP / copyright
- [ ] `OzoneNews-investigative-desk` — PI services / local reporting

#### 10. Noindex Thin Pages

**Rule:** Any page under 600 words with no original reporting should be set to `noindex`.

**How:**
```tsx
// In the page's metadata export:
export const metadata: Metadata = {
  robots: { index: false, follow: false },
  // ... rest unchanged
};
```

**Priority targets for audit:**
- Hub stubs with only navigation and no editorial body content
- Creator/influencer profiles already migrated or planned for owire.org
- Any page that is purely a rewrite of another outlet with no added data or angle

**Track every noindexed page** in `Docs/RECOVERY_PLAN.md` → Noindex Audit Log section.

#### 11. Add `/investigations` to Primary Navigation

**Why:** `/investigations` is the highest-value domain identity signal and is currently buried. Google quality raters check nav structure to understand site identity.

**File:** `components/nav/` — find the main nav component
**Action:** Add "Investigations" link to primary nav, link `/investigations` from homepage with a dedicated module above the fold.

---

### 🟡 P2 — SEO Data Quality (Unlocks Top Stories + Discover)

#### 12. Backfill `image_url` for Top 50 Registry Entries

**Why:** 70% of registry entries have no `image_url`. No image = ineligible for Google Top Stories carousel and Google Discover. These are the two highest-volume traffic sources after standard search.

**Minimum spec:** 1200×675px, hosted URL, set `image_width: 1200`, `image_height: 675`, `image_alt`.

**How to find missing entries:**
```bash
# From project root — count entries with no image_url
node -e "const r = require('./content/static/content_registry.json'); console.log('Missing image:', r.filter(e => !e.image_url).length, '/', r.length)"
```

**Source:** Unsplash API key `Xf48MkOY-E_ughjz6FJ1d_heBKDy0YcF_qpIDoVi1FQ`

#### 13. Backfill `published_at` ISO Field in Registry for Top Articles

**Why:** Google News and Top Stories require machine-readable `published_at` (ISO-8601) in structured data. Registry entries added before May 2026 have `publish_date` only as a display string.

**Pattern for new entries:** Always include both:
```json
"publish_date": "2026-05-12",
"published_at": "2026-05-12T10:00:00Z"
```

**For legacy entries:** Script to backfill — convert `publish_date` string to ISO if in `YYYY-MM-DD` format.

---

### 🟠 P3 — Distribution Channels (Apply After RSS Validates)

#### 14. Bing News Publisher Portal Application
- **URL:** https://bing.com/news/publisher
- **Prerequisites:** BWT verified (P0 #2), RSS validates (P0 #3)
- **Time:** 1 hour
- **Required:** RSS feed URL, site description, editorial contact

#### 15. Apple News Publisher Application
- **URL:** https://news.apple.com/publisher
- **Prerequisites:** RSS validates (P0 #3)
- **Time:** 1 hour

#### 16. Google Publisher Center
- **URL:** https://publishercenter.google.com
- **Required for:** Google News tab distribution
- **Time:** 30 minutes

#### 17. ONA + SPJ Memberships
- ONA: https://journalists.org/membership ($100)
- SPJ: https://spj.org/join.asp ($75/author — Jack Sterling + Michael Cripe)
- **Why:** E-E-A-T author credential signals. Publisher memberships signal legitimate editorial operation.

---

### 🔵 P3 — owire.org Launch (Parallel Track)

Creator/influencer content separated from OzoneNews.org to resolve topical incoherence (HCU signal).

**Technical checklist:**
- [ ] Domain verified in Railway (separate from OzoneNews.org)
- [ ] Next.js project scaffolded — separate repo
- [ ] Supabase project created — separate from OzoneNews.org Supabase
- [ ] Separate GA4 property + measurement ID
- [ ] Separate Search Console property verified
- [ ] `robots.ts` and `sitemap.ts` configured for owire.org domain
- [ ] No mention of OzoneNews.org in nav, footer, or metadata

**Editorial checklist:**
- [ ] Distinct site name, tagline, About page
- [ ] Author bylines defined for owire.org
- [ ] Editorial standards page written
- [ ] Content categories defined

**Content migration:**
- [ ] All creator/influencer `content/static/creator_articles/` pages inventoried
- [ ] `noindex` added to OzoneNews.org versions before owire.org versions go live
- [ ] owire.org versions published with canonical pointing to owire.org URLs
- [ ] Redirect OzoneNews.org → owire.org versions after 90 days

---

## SEO Pipeline Architecture — Current State

```
content/static/content_registry.json (661 entries, on-prem)
        ↓
loadLocalRegistry() — in-memory cache at runtime
        ↓
getAllEntries()          → app/sitemap.ts        → /sitemap.xml
getLatestArticles()      → homepage feed         → "More Stories"
getRelatedArticles()     → article sidebar       → related articles
feed-utils.ts            → /rss.xml, /feed.json, /news-sitemap.xml
getArticlesByCategory()  → ⚠️ still hits Supabase directly (see P1 #4)

Supabase content_registry ← fallback only (no new writes for articles)
lib/content-registry.ts  ← last resort sync fallback (empty / stale)
```

### Article Storage — Where Content Lives

| Type | Static JSON Store | Component | Route Pattern |
|---|---|---|---|
| News, breaking, gaming, tech | `content/static/articles/` | `NewsArticleDB` | Any route |
| Research, investigations, reviews | `content/static/jack_articles/` | `JackArticleDB` | Any route |
| Profiles, wiki-style, evergreen | `content/static/article_pages/` | `ArticlePageDB` | Any route |
| Creator / influencer bios | `content/static/creator_articles/` | `CreatorArticleDB` | `/influencer/` |
| Winter Olympics athlete profiles | `content/static/alysa_articles/` | `AlysaArticleDB` | `/winter-olympics/` |

### Publishing Workflow (Every New Article)

```
1. Write page.tsx stub at correct route
2. Write static JSON at content/static/{type}/{slug}.json
3. Add entry to content/static/{type}/_index.json
4. Add entry to content/static/content_registry.json (with image_url, published_at)
5. npm run build (prebuild runs validate:eeat, validate:news, sync-registry)
6. git add -A && git commit -m "feat: ..."
7. git push origin main  ← Railway auto-deploys
8. After deploy: npm run indexnow:bulk
```

---

## Recovery Timeline

| Milestone | Target | Status |
|---|---|---|
| April 22 canonical bug fixed | May 2026 | ✅ Fixed |
| ISR cache fix on 34 hub pages | May 2026 | ✅ Per audit (verify held) |
| News sitemap submitted to GSC | May 2026 | ⏳ Pending manual action |
| Bing Webmaster Tools verified | May 2026 | ⏳ Pending manual action |
| RSS validated (W3C) | May 2026 | ⏳ Pending manual action |
| `getArticlesByCategory()` local-first fix | May 2026 | ⏳ Pending code |
| Author pages — external credentials added | Jun 2026 | ⏳ Pending |
| `/investigations` in primary nav | May 2026 | ⏳ Pending |
| Investigation #1 published | Jun 15, 2026 | ⏳ Pending |
| Investigation #2 published | Jul 15, 2026 | ⏳ Pending |
| First external citation earned | Jul 31, 2026 | ⏳ Pending |
| Bing News Publisher application | Jun 2026 | ⏳ Pending |
| Apple News Publisher application | Jun 2026 | ⏳ Pending |
| Top 50 registry image_url backfill | Jun 2026 | ⏳ Pending |
| owire.org scaffolded | May 20, 2026 | ⏳ Pending |
| owire.org launched | Jun 1, 2026 | ⏳ Pending |
| **Google core update — HCU re-evaluation** | **Aug/Sep 2026** | ⏳ Waiting |
| Assess partial recovery | Sep 2026 | ⏳ Waiting |
| **Google core update — full recovery assessment** | **Mar 2027** | ⏳ Waiting |

---

## What NOT To Do

| Action | Why |
|---|---|
| Submit individual reindex requests for suppressed pages | Does not re-trigger the domain HCU classifier. Wastes time. |
| Submit a reconsideration request | There is no manual action on file. Nothing to reconsider. |
| Increase publishing volume without quality gate | More marginal content makes the classifier worse. |
| Change domain or redirect | Destroys all existing indexing, backlinks, and SC history. |
| Bulk-delete thin pages | Irreversible. Use `noindex` instead — it is reversible. |
| Cross-link OzoneNews.org ↔ owire.org in nav | Signals same operation to Google, undermines separation. |
| Push to Railway without running `npm run build` first | Build guard catches em dashes, missing canonicals, bad imports. |

---

## What to Check in Search Console (Weekly, Not Daily)

- **Coverage report** — "Crawled, not indexed" count trend. Declining = recovery in progress.
- **Core Web Vitals** — LCP or CLS degradation → fix immediately.
- **Performance** — Track impressions for `/investigations`, `/service`, gaming/tech clusters specifically.
- **Manual Actions** — If one appears, strategy changes entirely. Address immediately.

Do NOT check daily rankings during algorithmic suppression. The classifier evaluates at core updates. Daily variance is noise.

---

*Update this file at the start and end of every session. It supersedes `object_nextsteps.md`, `RECOVERY_PLAN.md`, and `AlfasaAutoSEO-Audit-May2026.md` for active task tracking. Those files remain as reference history.*
