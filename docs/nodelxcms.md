# NodeLX CMS | Architecture Reference
**OzoneNews Git + Supabase Headless CMS**
**Last updated:** May 29, 2026
**Status:** Production

---

## What This Is

A headless CMS where Git is the source of truth for article content and Supabase is the write layer for metadata, engagement, and live registry queries. No WordPress. No Contentful. No Sanity subscription. Editors log in at `/admin`, fill out a form, and click Publish. That single click does everything — uploads media, commits to GitHub, updates the database, and makes the article live to readers in milliseconds.

---

## The Full Publish Flow

```
Editor clicks "Publish to GitHub"
         │
         ▼
  E-E-A-T gate
  (300+ words, named author, ISO-8601 timestamp, description 130-155 chars,
   no AI boilerplate phrases, at least one <h2>, no em dashes)
         │  fails → error list shown, nothing commits
         ▼
  ┌──────────────────────────────────────────────────────────┐
  │  ATOMIC GIT COMMIT (Git Trees API, retry 3x on collision)│
  │  ├── content/static/articles/{slug}.json                 │
  │  └── content/static/content_registry.json               │
  │                                                          │
  │  If commit fails AND a Supabase Storage image was        │
  │  uploaded → DELETE the image (media rollback)           │
  └──────────────────────────────────────────────────────────┘
         │
         ▼
  ┌──────────────────────────────────────────────────────────┐
  │  SUPABASE WRITES (concurrent-safe, no merge conflicts)   │
  │  ├── articles row: status → 'published'                  │
  │  └── content_registry UPSERT (slug is primary key)      │
  └──────────────────────────────────────────────────────────┘
         │
         ▼
  revalidatePath('/')                   ← homepage live in milliseconds
  revalidatePath('/{category}/{slug}')  ← article page live in milliseconds
  revalidatePath('/{category}')         ← category hub live in milliseconds
         │
         ▼
  Article is live to readers NOW.
  Railway Git deploy runs in background (~90s) as a persistent content backup.
```

---

## The Three-Layer Data Architecture

```
LAYER 1 — Git (content/static/*.json)
  Fastest: filesystem reads, 0 network, 0 latency, deployed with the build.
  Most reliable: no external dependency, survives Supabase outages.
  Used for: article body rendering (NewsArticleDB, JackArticleDB, etc.)

LAYER 2 — Supabase (PostgreSQL + RLS)
  Write layer: admin editor writes here first.
  Live registry: getLatestArticlesLive() queries content_registry for
                 articles published since the last deploy.
  Engagement: reactions, view counts, saves — never in Git.
  Auth: admin login sessions via Supabase Auth.

LAYER 3 — Next.js ISR (revalidate = 60 + revalidatePath)
  revalidatePath called on every publish → instant cache bust for the
  article page, homepage, and category hub.
  revalidate = 60 on app/[...slug]/page.tsx → ISR fallback so even if
  revalidatePath is skipped, pages refresh within 60 seconds.
```

---

## Dynamic Routing (No Page Stubs)

All articles are served by a single catch-all route:

```
app/[...slug]/page.tsx
```

This file handles every URL pattern — flat (`/my-article`), nested (`/tech/meta/my-article`), and deep (`/tech/meta/sub/my-article`) — without any per-article `page.tsx` file being generated or committed.

**Why this matters at scale:** Whether you have 10 articles or 10,000, the file tree never grows. Build times stay constant. The publish API never commits route files — only data files.

The catch-all resolves articles in this order:
1. Joined slug: `['tech','meta','my-article']` → tries `tech-meta-my-article.json`
2. Last segment only: tries `my-article.json`
3. Full URL scan: reads all articles and matches by the `url` field path

---

## Concurrency Safety

The Git Trees API commit uses an optimistic concurrency pattern:

1. Fetch the latest branch tip SHA
2. Build the new tree and commit object
3. Advance the branch ref with `force: false`

If step 3 fails (another editor committed between steps 1 and 3), the API retries up to 3 times with exponential backoff (200ms, 400ms, 800ms), re-fetching the latest ref each time.

The `content_registry.json` file is included in every commit. Because the Supabase `content_registry` table uses PostgreSQL `UPSERT ON CONFLICT (slug)`, concurrent publishes to the database never conflict — only the Git file can collide, and the retry loop resolves it.

---

## Media Pipeline

Thumbnails are uploaded to Supabase Storage before the Git commit. The public CDN URL is written into `thumbnail_src` in the article JSON.

- **Bucket:** `media` (public, 10 MB limit, JPEG/PNG/WebP/GIF)
- **Storage path:** `thumbnails/{slug}/{timestamp}-{filename}`
- **CDN URL format:** `{SUPABASE_URL}/storage/v1/object/public/media/thumbnails/{slug}/{filename}`

**Rollback:** If the Git commit fails after the upload succeeds, the API issues a `DELETE` to Supabase Storage to remove the orphaned file. The editor sees a clean error and can retry.

---

## Registry Architecture

### Two sources, one interface

| Query | Source | Why |
|---|---|---|
| Article body render | `content/static/articles/{slug}.json` | Filesystem, microseconds, 0 network hops |
| Homepage carousel (live) | `getLatestArticlesLive()` → Supabase SQL | Shows articles published since last deploy immediately |
| Sitemap generation | `content_registry.json` → Supabase fallback | Stable, cached, fast at build time |
| JSON-LD structured data | `getEntry(slug)` → local registry cache | In-memory after first read, zero I/O per request |
| Concurrent writes | Supabase `UPSERT ON CONFLICT slug` | PostgreSQL handles it — no Git merge conflicts |

### Registry file vs Supabase table

The `content/static/content_registry.json` file is committed on every publish. It is the primary source for `getAllEntries()` (used by sitemap and JSON-LD) because filesystem reads are ~1000x faster than a network query.

The `content_registry` Supabase table is the primary source for `getLatestArticlesLive()` because it reflects publishes instantly, without waiting for a build or file refresh.

Both are always kept in sync by the publish API.

---

## On-Demand Revalidation vs ISR vs Deploy

| Mechanism | Latency | When used |
|---|---|---|
| `revalidatePath` (on publish) | Milliseconds | Every publish — instant cache bust |
| `revalidate = 60` on `[...slug]` | Up to 60 seconds | Safety net if revalidatePath is skipped |
| Railway Git deploy | ~90 seconds | Background — updates the static JSON files on disk |

The article is live to readers before the Railway deploy finishes. The deploy is a backup sync, not a gate.

---

## E-E-A-T Gate (OStandard)

Every article passes this gate before anything is committed. Failures return a readable error list to the editor — nothing goes to GitHub until all are fixed.

| Check | Rule |
|---|---|
| Author | `author_name` and `author_slug` required, slug must be in `KNOWN_AUTHORS` |
| Timestamp | `published_at` must match `\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}[+-]\d{2}:\d{2}` |
| Word count | `content_html` must be 300+ words (tags stripped) |
| Em/en dashes | Zero tolerance in title or body — replace with `|` or comma |
| Description | `metadata.description` must be 130-155 characters |
| Canonical | `metadata.alternates.canonical` must start with `https://` |
| Heading | At least one `<h2>` in `content_html` |
| AI boilerplate | 11 banned phrases (e.g. "In conclusion", "Delve into", "In today's fast-paced world") |

---

## File Map

| What you want to change | File |
|---|---|
| Publish API (Git commit + Supabase writes + revalidation) | `app/api/cms/publish/route.ts` |
| Article editor form (admin UI) | `components/admin/AdminArticleForm.tsx` |
| Media upload widget (Supabase Storage) | `components/admin/MediaUpload.tsx` |
| Universal article route (catch-all) | `app/[...slug]/page.tsx` |
| Registry read logic (local-first + live query) | `lib/registry-service.ts` |
| Article read logic (filesystem + Supabase fallback) | `lib/article-service.ts` |
| All article static JSON | `content/static/articles/{slug}.json` |
| Master registry index | `content/static/content_registry.json` |
| Supabase schema | `supabase/schema.sql` |
| E-E-A-T validator (standalone) | `scripts/alfasa-sentinel.ts` |

---

## Environment Variables Required

```bash
# GitHub write access
GITHUB_TOKEN=github_pat_...        # Fine-grained PAT, contents:write on this repo only
GITHUB_OWNER=aMarketology
GITHUB_REPO=ozonedailynews.com
GITHUB_DEFAULT_BRANCH=master

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://...supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...   # safe to expose — anon read + react only
SUPABASE_SERVICE_ROLE_KEY=eyJ...       # server-only, never NEXT_PUBLIC

# Site identity
NEXT_PUBLIC_SITE_NAME=OzoneDaily
NEXT_PUBLIC_SITE_URL=https://www.ozonedailynews.com
```

---

## Brand → Git Branch Map

Each ONN sub-brand deploys from its own branch. Same codebase, different content.

| Brand slug | Git branch | Domain |
|---|---|---|
| `ozone` | `master` | ozonedailynews.com |
| `basil` | `basil` | basilnews.com |
| `obsidian` | `obsidian` | obsidianpaper.com |
| `honey` | `honey` | honeynewspaper.com |
| `onyx` | `onyx` | onyxtimes.com |
| `clover` | `clover` | cloverheadlines.com |
| `content` | `content` | contentnewsnow.com |
| `objective` | `objective` | objectivewire.org |

---

## What Was Deliberately NOT Built

| Rejected pattern | Reason |
|---|---|
| Per-article `page.tsx` stubs | Bloats file tree, slows builds at scale. Catch-all handles everything. |
| WordPress / Contentful / Sanity | External dependency, monthly cost, slower than filesystem reads |
| Supabase as primary article read source | 100-400ms network round-trip vs microsecond filesystem read |
| `content_registry.json` as the only write path | Concurrent publishes cause Git merge conflicts on a shared file |
| Single Git commit per file (Contents API) | Can't commit multiple files atomically. Replaced with Git Trees API. |

---

*Document: `docs/nodelxcms.md`*
*See also: `docs/GITREALTIMESUPABASE.md`, `docs/GIT_HEADLESS_CMS.md`, `docs/ozone-cms.md`*
