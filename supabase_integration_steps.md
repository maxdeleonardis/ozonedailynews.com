# Supabase Integration — Step-by-Step Plan
**ObjectWire | March 2026 — Updated**

> **Goal:** Publish new articles via the code-first pipeline (TypeScript files → `npm run content:publish` → Supabase → `/blog/[slug]`) with zero disruption to the ~365 existing static pages already indexed and ranking in Google.

> **Workflow decision:** We write articles as `.ts` files in `content/articles/`, not through the admin UI. The admin dashboard/editor exists but is not the primary workflow.

---

## Current State Snapshot (March 9, 2026)

| Layer | Status |
|---|---|
| `@supabase/supabase-js` installed | ✅ In `package.json` |
| `lib/supabase/server.ts` client | ✅ Done |
| `lib/blog-service.ts` CRUD layer | ✅ Done |
| `supabase/setup.sql` schema | ✅ Written — **needs to be run in Supabase dashboard** |
| `app/blog/[slug]/page.tsx` public route | ✅ Done |
| `components/article-renderer.tsx` | ✅ Done (31 block types) |
| `scripts/publish-content.ts` | ✅ Done (`npm run content:publish`) |
| `content/articles/_template.ts` | ✅ Done |
| `.env.local` credentials | ✅ File exists — verify credentials are populated |
| `articles` table in Supabase | ❓ SQL may not have been run yet — verify in Supabase dashboard |
| Google News sitemap — Supabase merge | ✅ Already coded in `app/news-sitemap.xml/route.ts` |
| `app/sitemap.ts` — includes Supabase articles | ❌ Only reads `contentRegistry` — Supabase articles missing |
| Canonical URL in `/blog/[slug]` metadata | ❌ Bug: uses literal `[slug]` string as fallback |
| `NewsArticleSchema` on `/blog/[slug]` | ❌ Missing — needed for Google Top Stories |
| `~5 min read` hardcoded | ❌ Should use `calculateReadTime()` |
| ~365 existing static pages | ✅ Indexed, ranking — DO NOT TOUCH |
| Admin dashboard/editor | ⚪ Exists but not primary workflow — low priority |

---

## Part 1 — Verify the Pipeline Is Connected

Before publishing any article, confirm Supabase is actually connected. These are quick checks, not builds.

---

### Step 1 — Verify `.env.local` Has Real Credentials

**Status:** ✅ File exists. Confirm it has real values (not placeholders).

**Check:** Open `.env.local` — both lines must have real values:
```env
NEXT_PUBLIC_SUPABASE_URL=https://kzcwclprrtonpsnownbl.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...   ← must be the real key, not a placeholder
```

If either value is missing or is a placeholder, go to **Supabase Dashboard → Project Settings → API** and copy the real values.

---

### Step 2 — Run `setup.sql` in the Supabase SQL Editor

**Status:** ❓ Verify this has been run. Go to **Supabase Dashboard → Table Editor** — if an `articles` table exists, skip this step.

**If the table does NOT exist:**
1. Open **Supabase Dashboard → SQL Editor**
2. Open `supabase/setup.sql` locally
3. Copy the full contents → paste into SQL Editor → click **Run**
4. Verify in **Table Editor** that `articles` now appears

**What `setup.sql` creates:**
- `articles` table with all columns (id, slug, title, excerpt, content JSONB, category, author, featured, status, published_at, created_at, updated_at, image_url, view_count)
- Indexes on slug, category, published_at, status
- RLS: public `SELECT` on `status = 'published'`; anon INSERT/UPDATE/DELETE for writes
- Auto-update trigger for `updated_at`
- `increment_view_count(slug)` function

---

### Step 3 — Test the Pipeline End-to-End

**Action:** Write a test draft article and publish it:

```bash
# 1. Copy the template
cp content/articles/_template.ts content/articles/test-article.ts

# 2. Fill in title, slug, status: 'published', add one paragraph block

# 3. Dry run first — no writes
npm run content:dry-run

# 4. Push to Supabase
npm run content:publish
```

Then visit `http://localhost:3000/blog/your-test-slug` — if the article renders, the pipeline is live.

**If you get a Supabase error:** Either `.env.local` credentials are wrong or `setup.sql` was never run.

---

## Part 2 — Admin Dashboard (Low Priority — Code-First Workflow)

> We publish via `npm run content:publish`, not through the admin UI. The steps below only matter if the dashboard is actively being used.

### Step 4 — Dashboard View Link ~~ALREADY FIXED~~

**Status:** ✅ Already correct — `app/(admin)/admin/dashboard/page.tsx` line 214 already has `/blog/${post.slug}`.

### Step 5 — Editor `[id]` Route

**Status:** ⚪ Not built. Not needed for the code-first workflow. Skip unless the admin editor becomes a primary tool.

---

## Part 3 — Preserving Existing Google Rankings (Static Pages)

This is the most critical business concern.

### The Golden Rule: Static Pages Are Untouched Forever

The ~365 pages in `app/**/page.tsx` with their `metadata` exports, `NewsArticleSchema` JSON-LD, and registry entries in `lib/content-registry.ts` **must never be deleted, moved, or modified to redirect** without a carefully planned transition.

**Why:** These pages have existing Google index entries, PageRank signals, potential backlinks, and are in the news sitemap. Any URL change without a 301 would wipe all ranking signals.

### Permanent content types that STAY as static files:
| Content Type | Examples | Why Static |
|---|---|---|
| Author profile pages | `/authors/jack-wang` | Evergreen, SEO authority hub |
| Topic hub pages | `/technology`, `/entertainment` | Internal link anchors for topical authority |
| Company/product profiles | `/technology/cursor`, `/open-ai` | Long-lived reference, structured infobox layouts |
| Definitions | `/define/*` | Evergreen, slow-changing |
| Site structure | `/about`, `/team`, `/privacy-policy` | Never dynamic |
| Any page already indexed with backlinks | Any existing `page.tsx` | Backlinks = PageRank you cannot recreate |

### What goes into Supabase going forward:
| Content Type | Why Supabase |
|---|---|
| Breaking news | Publish without a deploy; 2-day news sitemap window |
| Daily briefings | Volume too high for the registry (~5+/day triggers migration) |
| Event coverage | Time-sensitive; needs instant publish |
| Opinion / editorial | Iterative editing without code deploys |
| Investigative longform | Complex block layouts; author collaboration |

### The Two-URL Strategy

New Supabase articles live at `/blog/[slug]`. Static registry pages live at their original paths. This is **intentional and correct** — do not try to unify them.

The Google News sitemap (`app/news-sitemap.xml/route.ts`) already merges both sources. Google sees all articles regardless of which tier published them.

---

## Part 4 — Google News Sitemap Verification

### Step 6 — Verify the News Sitemap After Setup.sql Is Run

After running `setup.sql`, the news sitemap at `/news-sitemap.xml` will start querying Supabase for published articles. Verify it works before submitting to Google.

**Action:**
1. Start dev server with valid `.env.local`
2. Visit `http://localhost:3000/news-sitemap.xml`
3. Confirm valid XML with both registry entries (within 2 days) and any published Supabase articles

**What to check:**
- No `500` error (would mean Supabase credentials or table missing)
- `<news:publication_date>` values are within 2 days of today (older entries won't appear — this is correct per Google's rules)
- `<loc>` URLs for static pages use the full path (`/trump/kristi-noem`); `/blog/[slug]` for Supabase articles

---

## Part 5 — Security Hardening (Do Before Going to Production)

### Step 7 — Harden Supabase RLS for Admin Writes

**Current risk:** The anon key has unrestricted INSERT/UPDATE/DELETE on the `articles` table. The only protection is the client-side auth check in the admin UI. Anyone who discovers the anon key and Supabase URL can write or delete articles directly via the API.

**Plan (when implementing real auth):**
1. Enable **Supabase Auth** in the dashboard
2. Change the anon INSERT/UPDATE/DELETE policies to require `auth.role() = 'authenticated'`
3. The admin editor will use `supabase.auth.signInWithPassword()` before writes

**For now:** The middleware adds `X-Robots-Tag: noindex, nofollow` to all `/admin` paths, which prevents Google from indexing admin pages. The risk is write abuse, not read abuse.

---

## Part 6 — Progressive Enhancement (After Core Is Working)

These are improvements to make after articles are successfully flowing into Supabase.

### Step 8 — Fix the Canonical URL Bug in `/blog/[slug]/page.tsx`

In `generateMetadata`, the canonical URL falls back to the literal string `'https://www.objectwire.org/blog/[slug]'` (bracket literal) when the article is not found. Since we already return `notFound()` before `generateMetadata` would use this fallback, the bug never fires in production — but it should be cleaned up:

```tsx
// BEFORE (broken fallback):
alternates: { canonical: `https://www.objectwire.org/blog/[slug]` }

// AFTER:
alternates: { canonical: `https://www.objectwire.org/blog/${params.slug}` }
```

### Step 9 — Add `NewsArticleSchema` to `/blog/[slug]/page.tsx`

Static pages emit `NewsArticleSchema` JSON-LD (Google Top Stories eligibility). The Supabase article route currently does not include structured data.

**Action:** Add `<NewsArticleSchema>` to `app/blog/[slug]/page.tsx` using the article's `title`, `excerpt`, `author`, `published_at`, `updated_at`, and `image_url` from the Supabase row.

This is important for Google News placement. **Do this as soon as the core pipeline works.**

### Step 10 — Add `read_time` Calculation to the Public Article Page

`app/blog/[slug]/page.tsx` currently hardcodes `~5 min read`. The `calculateReadTime(blocks)` function in `lib/blog-service.ts` already exists but isn't called.

**Action:**
```tsx
import { calculateReadTime } from '@/lib/blog-service';
// Then in the component:
const readTime = calculateReadTime(article.content || []);
// Replace hardcoded: `~5 min read` with: `~${readTime} min read`
```

### Step 11 — Add Supabase Articles to `sitemap.ts`

`app/sitemap.ts` only reads from `contentRegistry`. Supabase-published articles at `/blog/[slug]` are not in the main sitemap — they only appear in the Google News sitemap (2-day window).

**Action:** Update `app/sitemap.ts` to also query `getPublishedBlogPosts()` and map them into the sitemap array with `priority: 0.7` and `changeFrequency: 'weekly'`.

**Why this matters:** The main sitemap is how Google discovers and re-crawls older articles after they fall outside the 2-day news window.

### Step 12 — Add Image Metadata to Supabase Articles

For **Google Top Stories** and OG previews, images must be at minimum 1200×675px. The static registry enforces this via `imageWidth`/`imageHeight` fields. Supabase articles currently store `image_url` only.

**Recommended:** Add an `image_width` and `image_height` column to the `articles` table via a migration, and surface them in `NewsArticleSchema` for Supabase articles.

---

## Completion Checklist

### Phase 1 — Verify Pipeline Is Live
- [ ] Confirm `.env.local` has real Supabase credentials (not placeholders)
- [ ] Confirm `articles` table exists in Supabase (run `setup.sql` if not)
- [ ] Publish a test article via `npm run content:publish` and verify it renders at `/blog/[slug]`
- [ ] Verify `/news-sitemap.xml` returns valid XML with Supabase articles merged in

### Phase 2 — SEO-Complete (Do before publishing at volume)
- [ ] Fix canonical URL bug in `app/blog/[slug]/page.tsx` (Step 8)
- [ ] Add `NewsArticleSchema` to `app/blog/[slug]/page.tsx` (Step 9)
- [ ] Add Supabase articles to `app/sitemap.ts` (Step 11)
- [ ] Replace hardcoded `~5 min read` with `calculateReadTime()` (Step 10)

### Phase 3 — Harden (Before scaling to 50+ articles)
- [ ] Enable Supabase Auth and update RLS policies to require authenticated role for writes
- [ ] Add `image_width` / `image_height` columns for Top Stories image compliance

---

## What NOT To Do

| Action | Why Dangerous |
|---|---|
| Delete or move any existing `app/**/page.tsx` | Destroys Google ranking signals permanently |
| Remove entries from `lib/content-registry.ts` | Removes pages from sitemap — Google de-indexes them |
| Change existing static page slugs without 301 redirect | PageRank lost; 404 for all existing links |
| Make `/blog/[slug]` a catch-all that intercepts root paths | Conflicts with all 365 existing static pages |
| Commit `.env.local` to the repo | Exposes Supabase credentials publicly |
| Use service role key in client-side code | Full database access from the browser — catastrophic security risk |

---

## File Reference

```
Files that need fixes:
  app/blog/[slug]/page.tsx      ← Fix canonical bug + add NewsArticleSchema (Steps 8, 9)
  app/sitemap.ts                ← Add Supabase articles (Step 11)

Files that DO NOT change:
  lib/content-registry.ts       ← Never delete entries; only add
  app/**/page.tsx               ← All static pages — leave exactly as-is
  supabase/setup.sql            ← Run ONCE; don't re-run or re-create

Files already complete (no changes needed):
  lib/supabase/server.ts
  lib/blog-service.ts
  scripts/publish-content.ts
  content/articles/_template.ts
  app/news-sitemap.xml/route.ts
  components/article-renderer.tsx
  app/(admin)/admin/dashboard/page.tsx   ← View link already correct
  middleware.ts

Not needed (code-first workflow):
  app/(admin)/admin/editor/[id]/page.tsx  ← Skip — we edit .ts files, not the admin UI
```
