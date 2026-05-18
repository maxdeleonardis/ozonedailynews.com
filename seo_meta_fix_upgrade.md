# SEO Meta Fix & Upgrade Plan

**Status:** Active
**Owner:** Editorial / Engineering
**Created:** April 24, 2026
**Last Updated:** April 25, 2026 (M2 production verified ✅ — critical uppercase URL bug discovered)
**Trigger:** Major impressions drop in Google Search Console two days ago (April 22, 2026).
**Goal:** Stop the bleed, restore canonical hygiene, and harden the SEO pipeline so this class of regression cannot recur.

---

## Progress Log — April 24, 2026

| Phase | Milestone | Status | Notes |
|---|---|---|---|
| 0 | Hotfix in working copy | ✅ Done | layout canonical removed, `public/robots.txt` deleted |
| 1 | M1 Deploy hotfix | ✅ Done | All 4 commits pushed → Railway deploying (`847fd21`…`9c15099`) |
| 1 | M2 Verify production | ✅ Done (Apr 25) | robots 122 lines, news-sitemap 37 URLs (3-day), canonical = 1 per page ✅ |
| 1 | M3 GSC reindex | ⏳ Ready (manual) | Submit sitemap + Request Indexing on top 10 traffic articles |
| 2 | M4 Canonical guardrail | ✅ Done | `scripts/validate-canonicals.ts` + prebuild |
| 2 | M5 Sitemap orphan report | ✅ Done | `wiki:status` extended; all 437 articles registry-covered |
| 2 | M6 public/ regression test | ✅ Done | `scripts/validate-public.ts` + prebuild |
| 2 | M7 Production canonical monitor | ⏳ Not started | |
| 3 | M8 News sitemap window 2→3 | ✅ Done | `app/news-sitemap.xml/route.ts` |
| 3 | M9 Metadata audit script | ⏳ Not started | |
| 3 | **M10 Internal link audit** | ✅ Done + initial fixes | See below |
| 3 | M11 Schema validation | ⏳ Not started | |
| 3 | M12 Image SEO pass | ⏳ Not started | |
| 3 | M13 CWV review | ⏳ Not started | |
| 3 | M14 Admin SEO dashboard | ⏳ Not started | |
| 4 | M15-M18 | ⏳ Not started | |
| **🚨** | **M19 Uppercase URL cleanup** | **🔴 NEW — critical** | **6 paths with capital letters — see Critical Issues section** |

### Recent commits — **all pushed to Railway** (April 24, 2026)

| SHA | Description |
|---|---|
| `847fd21` | Dynamic OG, PWA manifest, DB url field fixes (M1 hotfix payload) |
| `eb6904b` | M10 audit script + first gap CSV (`Docs/seo-reports/internal-links-gap.csv`) + npm scripts |
| `9dc5354` | M10 cluster fix: GTA 6 hub, GTA 6 news, Pokémon Pokopia internal links |
| `9c15099` | M8 news sitemap window 2→3 + plan doc update |

---

## 🚨 Critical Issues Discovered (April 25, 2026)

### Issue #1 | Uppercase characters in URL paths (CRITICAL)

**6 article routes use capital letters in their directory names**, which violates the lowercase-only slug rule (`copilot-instructions.md`) and creates real SEO risk:

- Linux/Railway is case-sensitive — `/trump/WLFI-stablecoin` and `/trump/wlfi-stablecoin` are different URLs to the server.
- Google indexes them as separate pages, splitting authority.
- Internal links inconsistent in case will 404 on production but work locally on Windows.
- Sitemap and JSON-LD canonicals reference the uppercase form, locking the bad URL into Google's index.

**Affected paths (git-confirmed, case-sensitive):**

| Filesystem path | Table | DB slug |
|---|---|---|
| `app/finance/articles/NVIDIA-q4-ending-Feb-25/page.tsx` | **ORPHAN** (no DB row, no registry) | needs deletion or proper publish |
| `app/nvidia/news/JensenHuang-AI-Agent-Will-Boost-Enterprise-Software-Value/page.tsx` | `articles` | `nvidia-news-JensenHuang-AI-Agent-Will-Boost-Enterprise-Software-Value` |
| `app/social/tiktok/Announcement-from-the-new-TikTok-USDS-Joint-Venture-LLC/page.tsx` | `articles` | `social-tiktok-Announcement-from-the-new-TikTok-USDS-Joint-Venture-LLC` |
| `app/trump/WLFI-stablecoin/page.tsx` | `article_pages` | `trump-WLFI-stablecoin` |
| `app/video-games/Digital-Foundry/page.tsx` | **ORPHAN** (no DB row, no registry) | needs deletion or proper publish |
| `app/video-games/game-of-the-year-2026-Clair-Obscur/page.tsx` | `articles` | `video-games-game-of-the-year-2026-Clair-Obscur` |

### Issue #2 | Internal link backlog unchanged

`npm run audit:links` (April 25) confirms the 298 failing articles unchanged from yesterday. Nothing has regressed, nothing improved. M10b is still the biggest leverage item.

### Issue #3 | Production health = GREEN ✅

Confirmed live (Googlebot UA, April 25):
- `https://www.OzoneNews.org/robots.txt` → 122 lines (dynamic ✅, not the deleted static)
- `https://www.OzoneNews.org/sitemap.xml` → 700 URLs ✅
- `https://www.OzoneNews.org/news-sitemap.xml` → 37 URLs in 3-day window ✅ (M8 working)
- `/entertainment/news/fortnite-moves-into-movies` canonical = self ✅, count = 1 ✅
- `/influencer/ari-kytsya` canonical count = 1 ✅
- `/crypto/news/anchorage-usat-expands-to-celo-network` canonical count = 1 ✅
- Homepage canonical = `https://www.OzoneNews.org`, count = 1 ✅

The April 22 impressions cliff is now stopped. M3 (GSC reindex) is the user-side action needed to accelerate recovery.

---

## M19 — Uppercase URL Cleanup (NEW, CRITICAL)

**Goal:** Move all 6 uppercase routes to lowercase canonical paths with 301 redirects from the old paths.

**Why critical:**
- SEO duplicate-URL risk (case-sensitive Linux production).
- Violates `copilot-instructions.md` slug rule.
- Could be silently splitting GSC impressions across two URL forms.

**Approach (per article):**
1. `git mv -f app/Old-Path app/old-path-temp && git mv app/old-path-temp app/old-path` (two-step rename for case-only changes on Windows).
2. Update Supabase row: `slug` and `url` to lowercase via `scripts/rename-uppercase-routes.ts`.
3. Update `content_registry` row.
4. Add `middleware.ts` redirect map: `/Old-Path` → `/old-path` (308 permanent).
5. Run `wiki:sync` to verify no orphans.
6. After deploy, GSC URL Inspection on the new lowercase URL.

**Acceptance:**
- `git ls-files app/ | grep '[A-Z]'` returns zero results (or only intentional capitals like `README.md`).
- All 6 old URLs return 308 to lowercase equivalent.
- All 6 new URLs return 200 with canonical = self in lowercase.
- New audit script `scripts/validate-lowercase-urls.ts` wired into `prebuild`.

**Estimated effort:** 1 session (script writes itself, the renames + redirects are mechanical).

---

## M10 Internal Link Audit — Snapshot

**Tooling shipped:**
- `scripts/audit-internal-links.ts` — counts UNIQUE internal link destinations per article, grouped by table.
- `npm run audit:links` — full audit to stdout.
- `npm run audit:links:csv` — writes `Docs/seo-reports/internal-links-gap.csv`.
- `scripts/fix-cluster-links.ts` — pattern-based content_html patcher for cluster fixes (GTA 6, Switch 2 done).

**Minimums enforced (unique internal hrefs):**
- `articles` (NewsArticle): ≥ 4
- `jack_articles` (JackArticle): ≥ 5
- `article_pages` / `creator_articles` / `alysa_articles`: ≥ 3

**Current state (after April 24 cluster fixes):**

| Table | Pass / Total | % | Need links |
|---|---|---|---|
| `articles` | 111 / 287 | 39% | 176 |
| `jack_articles` | 8 / 82 | 10% | 74 |
| `article_pages` | 17 / 39 | 44% | 22 |
| `creator_articles` | 3 / 29 | 10% | 26 |
| `alysa_articles` | 0 / 0 | — | 0 |
| **Total failing** | **298** | | |

**Pillar gap snapshot (failing articles by pillar):**
- Tech / AI: 68
- Other / uncategorized: 67
- Video Games: ~40 (down from 41 after GTA 6 / Switch 2 fixes)
- Influencer / creators: 30
- Finance: 18
- Politics / Trump: 12
- Winter Olympics: 9
- Entertainment / streaming: 8

### Cluster fixes landed (April 24)

| Article | Table | Before | After | Min |
|---|---|---|---|---|
| `/video-games/gta-6` | `article_pages` | 0 | 3 | 3 ✅ |
| `/video-games/gta-6/news/take-two-ai-team-shake-up-2026` | `articles` | 1 | 4 | 4 ✅ |
| `/video-games/switch2/pokemon-pokopia` | `jack_articles` | 1 | 5 | 5 ✅ |

Links added across these three: `/video-games`, `/open-ai`, `/finance`, `/video-games/switch2`, `/video-games/switch2/super-mario-wonder-switch2-edition-bellabel-park`, `/video-games/nintendo/pokemon-pokopia-2-million-copies-4-days-switch-2`.

### Lessons learned (M10 patcher)

- Supabase stores apostrophes as `&apos;` in `content_html` — match against the entity, not the literal `'`.
- `\r\n` line breaks split phrases mid-sentence; search for substrings on one side of the break.
- Audit counts UNIQUE destinations (deduped via `Set`), not total `<a>` tags. A patch that wraps a second occurrence of an already-linked URL adds **zero** new unique links.
- The pattern-replacement approach scales poorly past ~5 articles per script. **Next step (M10b below) is a generalized rewrite.**

---

## M10b — Bulk Internal Link Backfill (NEW)

**Goal:** Drive the 298 failing articles to ≥ minimum without writing a per-article patch script each time.

**Approach:**
1. **Hub-aware link injector** (`scripts/inject-cluster-links.ts`):
   - Read each failing article's tags, category, and pillar.
   - Look up the pillar's hub URL (table mapping seeded from `copilot-instructions.md`).
   - Look up 2-3 sibling articles in the same cluster (same `category` or shared tags).
   - Look up 1 author page.
   - For each missing link, find a natural anchor in `content_html` from a curated keyword list (e.g. category name, pillar keyword, sibling article subject) using a fallback chain.
   - Apply with HTML-entity-aware matching (`&apos;`, `&amp;`, `&quot;`, `\r\n`).
2. **Per-pillar batch runs** so editorial can review in chunks (Tech/AI batch, Video Games batch, etc.).
3. **Re-run audit after each batch** until all tables ≥ 80% pass rate.

**Acceptance:** `npm run audit:links` shows ≤ 50 failing articles within 2 weeks.

**Priority order for batches:**
1. Video Games (priority pillar, 40 failing) — leverages existing GTA 6 / Switch 2 / Nintendo content
2. Tech / AI (priority pillar, 68 failing) — leverages `/open-ai`, `/google`, `/apple`, `/nvidia` hubs
3. Finance (18 failing)
4. Influencer (30 failing)
5. Other (67 failing — assess on case-by-case)



---

## TL;DR — Root Cause

Two production bugs were silently neutering OzoneNews's SEO surface:

1. **Site-wide canonical override.** [app/layout.tsx](app/layout.tsx) hardcoded `<link rel="canonical" href={SITE_CONFIG.url} />` inside `<head>`. Every page emitted **two** canonical tags — its own self-canonical from `metadata.alternates.canonical`, plus a second one pointing to `https://www.OzoneNews.org`. Google's canonicalizer collapsed many article URLs into the homepage, suppressing them from search.
2. **Static `public/robots.txt` shadowing the dynamic [app/robots.ts](app/robots.ts).** Next.js serves files in `/public` before route handlers, so the rich dynamic robots config (AI bots, tracking-param disallows, Bingbot, Applebot, etc.) was never actually live.

Both are fixed in the working copy. This document covers the **deploy, verify, and structural upgrade** plan.

---

## Phase 0 | Hotfix (Already Applied — Pre-Deploy)

Status: code changes complete on `main` working tree, **not yet committed or pushed.**

### 0.1 Remove site-wide canonical override
- File: [app/layout.tsx](app/layout.tsx)
- Removed: `<link rel="canonical" href={SITE_CONFIG.url} />`
- Replaced with code comment explaining why per-page canonicals are now the only source.

### 0.2 Delete static robots.txt
- File: `public/robots.txt` deleted.
- Dynamic [app/robots.ts](app/robots.ts) will now respond on `/robots.txt`.

### Acceptance criteria for Phase 0
- [ ] `git diff app/layout.tsx` shows the canonical line removed only.
- [ ] `git status` shows `public/robots.txt` as deleted.
- [ ] `npm run build` completes with no new errors.
- [ ] Local `curl http://localhost:3000/robots.txt` returns the dynamic version (300+ lines, AI bot rules visible).

---

## Phase 1 | Deploy & Verify Hotfix

### Milestone M1 | Deploy hotfix to Railway
**Owner:** Engineering
**Blocker for everything else.** Until this lands, the canonical bug is still suppressing impressions.

Steps:
1. Run `npm run build` locally to confirm clean build.
2. Commit:
   ```
   git add app/layout.tsx public/robots.txt
   git commit -m "fix(seo): remove site-wide canonical override and static robots.txt"
   ```
3. **User-initiated:** `git push origin main` (per workspace rule: never push without explicit instruction).
4. Confirm Railway deploy succeeds and live container is on the new commit.

### Milestone M2 | Verify production response
After deploy, run these checks (Googlebot UA):

| URL | Expected |
|---|---|
| `https://www.OzoneNews.org/robots.txt` | 300+ line dynamic robots, AI bot rules present |
| `https://www.OzoneNews.org/sitemap.xml` | 200, ~690 URLs, no change |
| `https://www.OzoneNews.org/news-sitemap.xml` | 200, ≥30 URLs in 2-day window |
| `https://www.OzoneNews.org/entertainment/news/fortnite-moves-into-movies` | **Exactly one** `<link rel="canonical">` pointing at self |
| `https://www.OzoneNews.org/crypto/news/anchorage-usat-expands-to-celo-network` | Same |
| `https://www.OzoneNews.org/influencer/ari-kytsya` | Same |

Acceptance: `grep -c 'rel="canonical"'` on each article page returns `1`.

### Milestone M3 | Recovery in Search Console
Within 24h of M2:
1. URL Inspection → Request Indexing on the top 10 traffic articles (use the GSC Performance report from before the drop to pick them).
2. Resubmit `sitemap.xml` and `news-sitemap.xml` in GSC.
3. Monitor the **Pages** report. Expected to see "Duplicate, Google chose different canonical than user" and "Alternate page with proper canonical" classifications drain over 7-14 days.
4. Monitor **Performance > Search Results** for impressions recovery — expected partial recovery within 72h, full recovery within 14d.

---

## Phase 2 | Structural Hardening (Prevent Recurrence)

### Milestone M4 | Canonical guardrail
**Problem:** Nothing today prevents a future contributor from re-adding a global canonical or shipping a page with no canonical at all.

Implementation:
1. Add a build-time validator: `scripts/validate-canonicals.ts`
   - Walk every `app/**/page.tsx`.
   - Parse `metadata.alternates.canonical` — flag pages that lack it.
   - Flag pages where `canonical` does not match the expected URL derived from the file path.
   - Wire into `prebuild` script in `package.json` so a missing/wrong canonical fails the build.
2. Add a runtime guard in [app/layout.tsx](app/layout.tsx) (a code comment block + ESLint rule) banning any literal `rel="canonical"` JSX in `app/layout.tsx` or shared components.

Acceptance: deliberately remove canonical from a test stub → `npm run build` fails with a clear error.

### Milestone M5 | Sitemap correctness audit
**Problem:** The sitemap pulls from `content_registry`. If a writer ships a `page.tsx` but `wiki:publish` isn't run (or fails silently), the page is invisible to Google.

Implementation:
1. Extend `npm run wiki:status` to output an **orphan report**:
   - Pages on filesystem with no `content_registry` row.
   - `content_registry` rows with no matching filesystem page.
   - Pages on filesystem with no Supabase article row in their target table.
2. Run `wiki:status` weekly (or in CI on `main`) and surface results to editorial.
3. Add `--strict` mode that exits non-zero so CI fails on drift.

Acceptance: deliberately create a `page.tsx` without publishing → `wiki:status --strict` fails.

### Milestone M6 | Robots.txt regression test
**Problem:** A future `public/robots.txt` accidentally re-added would silently override `app/robots.ts` again.

Implementation:
1. Add `scripts/validate-public.ts` that fails build if `public/robots.txt` or `public/sitemap.xml` exist.
2. Wire into `prebuild`.

Acceptance: `touch public/robots.txt && npm run build` fails.

### Milestone M7 | Canonical drift monitor (production)
**Problem:** No production-side alarm if canonicals break again.

Implementation:
1. Add a daily Vercel/Railway cron (or external monitor like UptimeRobot keyword check) that:
   - Hits 5 representative article URLs.
   - Asserts exactly one `rel="canonical"` and that it equals the request URL.
   - Asserts `meta robots` is `index, follow`.
   - Asserts `news-sitemap.xml` has ≥1 `<url>` block.
2. Alert to Discord/email on failure.

Acceptance: deliberately break canonical on staging → alert fires within 24h.

---

## Phase 3 | SEO Surface Upgrades

These are improvements unblocked once the hotfix lands. They will compound impressions over the 100K-organic-sessions target.

### Milestone M8 | News sitemap window ✅ Done (April 24, 2026)
- File: [app/news-sitemap.xml/route.ts](app/news-sitemap.xml/route.ts)
- Changed `NEWS_WINDOW_DAYS = 2` → `3`. Google's stated rule is 2 days, but a small buffer protects against timezone and build-timing edges (an article published at 23:50 UTC can fall out of the window before the next build runs).
- Verify `news-sitemap.xml` URL count after deploy (~50% larger).

### Milestone M9 | Per-page metadata audit script
- New script: `scripts/audit-metadata.ts`
- For every `app/**/page.tsx` walk the exported `metadata` and flag:
  - Title missing or > 60 chars.
  - Description missing, < 130 chars, or > 155 chars.
  - Missing `keywords`.
  - Missing or wrong `alternates.canonical`.
  - Missing `openGraph.images` (article + creator pages).
  - Missing `openGraph.publishedTime` on articles.
  - Em dashes (`—`) anywhere in title/description (OStandard violation).
  - `&` in `H1`/headings or article body prose (OStandard violation, runtime check via `content_html`).
- Run as `npm run audit:meta`. Output: CSV of violations grouped by category.

Acceptance: report runs cleanly across all current pages or produces an actionable list.

### Milestone M10 | Internal link density audit ✅ Done (audit shipped April 24, 2026)
- New script: `scripts/audit-internal-links.ts` — counts UNIQUE internal `<Link>` and `<a href="/...">` destinations per article. Set-based dedup so duplicate hrefs count once.
- npm scripts: `audit:links`, `audit:links:csv`.
- Initial gap report: `Docs/seo-reports/internal-links-gap.csv` (301 articles below minimum at audit time).
- Follow-up tracked under **M10b — Bulk Internal Link Backfill** (see Progress Log section).

Acceptance: ✅ produces gap report. Editorial works through it cluster by cluster.

### Milestone M11 | Schema validation
- New script: `scripts/validate-schema.ts`
- Walk every published page, fetch from production (or render via Next.js test runner), extract JSON-LD blocks, validate against schema.org definitions for `NewsArticle`, `WebSite`, `Organization`, `BreadcrumbList`, `Person` (authors), `Place` (creator profiles).
- Flag missing required fields (`datePublished`, `author`, `headline`, `image`).
- Wire as `npm run validate:schema`.

Acceptance: passes for `fortnite-moves-into-movies`, `anchorage-usat-...`, `ari-kytsya` reference pages.

### Milestone M12 | Image SEO pass
**Problem:** OG images and hero images are inconsistent in size, alt text, and presence of dimensions in registry.

Implementation:
1. Audit script: `scripts/audit-images.ts`
   - Every `content_registry` row must have `imageUrl`, `imageWidth`, `imageHeight`. Flag missing.
   - Every article OG image must be ≥ 1200×675.
   - Every `hero_image_alt` must be ≥ 30 chars.
2. Editorial backfill pass on top 50 articles by GSC impressions.

Acceptance: all current top-50 traffic articles pass.

### Milestone M13 | Core Web Vitals review
- Run PageSpeed Insights on:
  - Homepage `/`
  - `/entertainment/news/fortnite-moves-into-movies` (NewsArticle gold standard)
  - `/crypto/news/anchorage-usat-...` (JackArticle gold standard)
  - `/influencer/ari-kytsya` (CreatorArticle gold standard)
  - `/video-games/gta-6` (high-traffic hub)
- Capture LCP, CLS, INP, TBT.
- Targets: LCP < 2.5s, CLS < 0.1, INP < 200ms.
- Surface regressions as separate tickets.

### Milestone M14 | Internal monitoring dashboard
- New page (admin-only, behind `/admin` so already noindex): `/admin/seo-health`
- Pulls from `content_registry`, runs canonical/sitemap checks, displays:
  - Total registered URLs
  - URLs added in last 7 days
  - URLs missing `imageUrl` / `imageWidth`
  - News sitemap URL count
  - Last `wiki:sync` run timestamp
  - GSC API integration (later) for live impressions/clicks per URL
- Reuses existing Supabase client.

Acceptance: page loads, shows accurate counts, surfaces gaps the editorial team can act on.

---

## Phase 4 | Long-Term Editorial SEO Workflow

### Milestone M15 | Pre-publish checklist enforcement
Before any `wiki:publish`, the writer must verify (codified into `wiki:publish` itself):
- Title ≤ 60 chars, no em dash, no `& `in headings.
- Meta description 130-155 chars, primary keyword in first 60 chars.
- 4-8 tags, all proper nouns.
- `published_at` is a real ISO-8601 timestamp.
- `hero_image_src` resolves to a 200 status (script can HEAD-check).
- 4+ internal links in body.
- Canonical URL matches file path.

Implementation: extend `scripts/wiki-publish.ts` to run these checks and refuse to publish on failure (override flag for emergencies).

### Milestone M16 | Author/byline integrity
- All articles need a valid `author_slug` linking to a real `/authors/[slug]` page.
- Audit: `scripts/audit-authors.ts` to find orphan author slugs.
- Backfill missing author pages or reassign articles.

### Milestone M17 | Topic hub linking enforcement
For each pillar in `copilot-instructions.md`:
- Hub page must link to every sub-article in its cluster.
- Every sub-article must link back to its hub.
- Validator: `scripts/audit-clusters.ts`.

### Milestone M18 | Quarterly SEO health report
- Run all audit scripts (M9-M12, M16-M17) once per quarter.
- File a Markdown report under `Docs/seo-reports/YYYY-Qn.md`.
- Editorial reviews, prioritizes top 10 fixes.

---

## Risk Register

| Risk | Mitigation |
|---|---|
| Canonical fix triggers a recanonicalization storm and short-term ranking volatility | Expected; Google typically stabilizes within 14 days. Monitor GSC daily. |
| Removing `public/robots.txt` accidentally exposes a path that was implicitly allowed | None — dynamic `app/robots.ts` allows all by default with stricter disallows than the static file. |
| Build-time validators (M4-M6) block legitimate emergency publishes | Add `--allow-canonical-mismatch` and `--allow-orphan` override flags, restricted to env var `OzoneNews_OVERRIDE=true`. |
| News sitemap window expansion (M8) causes Google to flag stale entries | Window is still well below Google's 30-day NewsArticle freshness limit; safe. |
| Schema validator (M11) flags pages we cannot quickly fix | Run in report-only mode first; promote to build-blocking after backlog cleared. |

---

## Execution Order

The minimum sequence to stop the bleed and prevent recurrence is **M1 → M2 → M3 → M4 → M6**. Everything else is improvement work that can be parallelized or scheduled.

```
PHASE 0 (done in working copy)
   ↓
M1  Deploy hotfix
   ↓
M2  Verify production
   ↓
M3  GSC reindex requests          ← impressions recovery starts here
   ↓
M4  Canonical guardrail (build)   ← prevents recurrence
M6  public/ regression test       ← prevents recurrence
   ↓
M5  Sitemap orphan report
M7  Production canonical monitor
   ↓
M8  News sitemap window
M9  Metadata audit script
M10 Internal-link audit
M11 Schema validation
M12 Image SEO pass
M13 CWV review
   ↓
M14 Admin SEO dashboard
   ↓
M15 wiki:publish checklist enforcement
M16 Author integrity
M17 Cluster linking enforcement
   ↓
M18 Quarterly SEO health report (recurring)
```

---

## Definition of Done (overall)

- [ ] M1 deployed
- [ ] M2 verified — every audited page emits exactly one canonical
- [ ] M3 reindex requests submitted; impressions trending back up week-over-week
- [ ] M4 + M6 wired into `prebuild`; deliberate regressions fail the build
- [ ] M5 + M7 producing weekly + daily reports respectively
- [ ] M8-M13 audit scripts shipped; backlog of issues triaged
- [ ] M14 dashboard live at `/admin/seo-health`
- [ ] M15-M17 enforced in `wiki:publish`
- [ ] First M18 report published

---

## Open Questions (decide before M4 onward)

1. Should validator scripts run in CI (GitHub Actions on PR) or only on `prebuild`? Recommendation: **both** — `prebuild` blocks deploy, CI gives PR-level feedback.
2. Do we want a Slack/Discord webhook for M7 alerts? If yes, which channel?
3. For M14 dashboard, do we want GSC API integration in v1 or v2? v1 is faster; v2 is more useful.
4. For M15, what is the override flag mechanism — env var, CLI flag, or commit message convention?

