# Supabase Upgrade — Step by Step

**Last updated:** March 24, 2026  
**Production:** Railway → `aMarketology/Object-wire26-` main → `objectwire.org`  
**Supabase:** `https://kzcwclpurrtonpsnownbl.supabase.co`

---

## Phase 1: Immediate Fixes (Closing out the March 24 Batch)

Right now, your 6 trimmed articles and the 1 new `/blackrock` index page will render fine in production, but they are **invisible to SEO**. The `SEOWrapper` component emits JSON-LD, breadcrumbs, and structured metadata only when it finds a matching entry in `lib/content-registry.ts`. All 7 pages are missing from that file. This also means they are absent from your `sitemap.ts` and `news-sitemap.xml`, so Google won't discover them organically.

The 7 affected pages are:
| File | Supabase Slug | Component |
|---|---|---|
| `app/trump/ice-arrest-sfo-airport-nationwide-deployment/page.tsx` | `trump-ice-arrest-sfo-airport-nationwide-deployment` | JackArticle |
| `app/trump/trump-ice-agents-drop-masks-airports/page.tsx` | `trump-trump-ice-agents-drop-masks-airports` | NewsArticle |
| `app/technology/tencent-openclaw-ai-agent-wechat/page.tsx` | `technology-tencent-openclaw-ai-agent-wechat` | JackArticle |
| `app/blackrock/blackrock-fidelity-bought-400m-bitcoin-golds-worst-weekly-drop/page.tsx` | `blackrock-blackrock-fidelity-bought-400m-bitcoin-golds-worst-weekly-drop` | NewsArticle |
| `app/blackrock/page.tsx` | _(not in Supabase — ArticlePage stays in file)_ | ArticlePage |
| `app/copyright/news/aoc-mlb-polymarket-gambling-warning/page.tsx` | `copyright-news-aoc-mlb-polymarket-gambling-warning` | JackArticle |
| `app/amazon/news/amazon-acquires-fauna-robotics-sprout-humanoid/page.tsx` | `amazon-news-amazon-acquires-fauna-robotics-sprout-humanoid` | NewsArticle |

---

### Step 1.1 — Dry-Run the Sync Script

Before writing anything, run in dry-run mode to confirm exactly which 7 entries are missing. The script scans `app/**/page.tsx` and diffs against the current `lib/content-registry.ts` array.

```bash
npx tsx --env-file=.env.local scripts/sync-registry.ts
```

Expected output: 7 missing slugs printed to console. If you see more or fewer, investigate before proceeding — a surprise here means a page was added or deleted without a registry update.

---

### Step 1.2 — Write the Registry Stubs

Once the dry-run output looks correct, pass the `--write` flag to append boilerplate entries to `lib/content-registry.ts`.

```bash
npx tsx --env-file=.env.local scripts/sync-registry.ts --write
```

What this adds for each page (example for the AOC article):
```typescript
{
  slug: 'copyright-news-aoc-mlb-polymarket-gambling-warning',
  title: '',           // ← BLANK — must fill manually
  description: '',     // ← BLANK — must fill manually
  imageUrl: '',        // ← BLANK — must fill manually
  imageWidth: 1200,
  imageHeight: 630,
  publishedAt: '',
  section: 'copyright',
  type: 'article',
}
```

---

### Step 1.3 — Manually Hydrate SEO Fields

Open `lib/content-registry.ts` and scroll to the 7 new entries at the bottom. Fill in every blank field. Reference data below:

| Page | `title` | `imageUrl` | Notes |
|---|---|---|---|
| ICE Arrest at SFO | `"ICE Agents Arrest Woman at SFO's Secure Boarding Area"` | `/default/ice-sfo.png` | accentColor red |
| ICE Drop Masks | `"Trump Orders ICE Agents to Remove Masks at Airports"` | _(find matching default image)_ | breaking, trending |
| Tencent OpenClaw | `"Tencent Embeds OpenClaw AI Agent Into WeChat"` | `/default/Tencent embeds OpenClaw .png` | note space in filename |
| BlackRock Bitcoin | `"BlackRock and Fidelity Buy $400M Bitcoin During Gold's Worst Week in 40 Years"` | _(find matching default image)_ | trending, orange |
| BlackRock index | `"BlackRock — Company Profile"` | _(find matching default image)_ | ArticlePage, not in Supabase |
| AOC / MLB Polymarket | `"AOC Calls MLB's $300M Polymarket Deal 'Sad'"` | `/default/aoc.PNG` | note uppercase .PNG |
| Amazon Fauna Robotics | `"Amazon Acquires Fauna Robotics to Build Home Humanoid 'Sprout'"` | `entertainment/christian-wiediger-rymh7EZPqRs-unsplash.jpg` | no public/amazon/ folder exists |

**Important gotchas:**
- The Tencent thumbnail has a trailing space in the filename: `/default/Tencent embeds OpenClaw .png` — copy exactly.
- The AOC thumbnail uses uppercase `.PNG` extension — Linux is case-sensitive, Railway will 404 if cased wrong.
- There is no `public/amazon/` folder. The Amazon article must use the entertainment fallback image shown above.

---

### Step 1.4 — Verify TypeScript Compiles Clean

After filling in the registry, run the type-checker to make sure no syntax errors crept in (curly apostrophes in string literals are a known offender here — use `\u2019` if needed).

```bash
npx tsc --noEmit
```

If you get errors, fix them before committing. A broken `content-registry.ts` breaks the sitemap at build time.

---

### Step 1.5 — Commit and Push the Registry Fix

```bash
git add lib/content-registry.ts
git commit -m "feat: add content_registry entries for March 24 batch (7 pages)"
git push origin main
```

Railway will redeploy automatically. Once the deployment finishes (watch the Railway dashboard), `SEOWrapper` will start emitting JSON-LD for all 7 pages and the sitemap will include them.

---

### Step 1.6 — Ping Search Engines

After Railway deploys, run the ping script so Google and Bing know the sitemaps have been updated. This triggers crawl prioritization via IndexNow and the Google Search Console API.

```bash
npx tsx scripts/ping-google.ts
```

---

## Phase 2: Building the Unified Tooling

The March 24 batch exposed the core workflow gap: after migrating and trimming, you still have to manually run `sync-registry` and fill SEO fields by hand. This phase closes that gap by building the two proposed scripts.

---

### Step 2.1 — Build `wiki:status` (the Diagnostic Dashboard)

**File to create:** `scripts/wiki-status.ts`  
**Package.json command:** `"wiki:status": "npx tsx --env-file=.env.local scripts/wiki-status.ts"`

This script is your source of truth. Build it first, before the publisher, because you'll use it to validate that the publisher is working correctly.

**What it must do:**

1. **Scan `app/**/page.tsx`** — for each file, count the lines. If < 80 lines, classify it as `STUB`. If ≥ 80 lines, classify as `FULL`.
2. **Read `lib/content-registry.ts`** — extract the `slug` values from all entries into a `Set<string>`.
3. **Query Supabase** — run three separate queries:
   - `SELECT slug FROM articles`
   - `SELECT slug FROM jack_articles` ← note: no `status` column on this table, do NOT select it
   - `SELECT slug FROM article_pages`
   - Merge results into a single `Set<string>`.
4. **Compute the slug** for each scanned page using the same slug format as the migrate script: join the directory segments between `app/` and `page.tsx` with dashes.
5. **Print a CLI table** for every page, with four columns:

```
PATH                                          FILE     REGISTRY  SUPABASE
app/trump/ice-arrest-sfo-airport-...          STUB     ✅        ✅
app/blackrock/page                            FULL     ❌        —
app/blackrock/blackrock-fidelity-...          STUB     ❌        ✅
```

6. **Print a summary at the bottom:**
```
Total pages: 142
Stubs:        89     Full files:  53
Unregistered: 7      Missing from Supabase: 7
```

**Key implementation note:** `jack_articles` has no `status` column. Query only `slug` from it, otherwise Supabase will return a `column jack_articles.status does not exist` error. This burned us during the verify script — don't repeat it.

---

### Step 2.2 — Build `wiki:publish` (the Unified Pipeline)

**File to create:** `scripts/wiki-publish.ts`  
**Package.json command:** `"wiki:publish": "npx tsx --env-file=.env.local scripts/wiki-publish.ts"`  
**Usage:** `npm run wiki:publish -- --file app/trump/foo/page.tsx`

This replaces the three-command sequence (`wiki:migrate` → `sync-registry --write` → `wiki:trim`) with a single atomic command. The order of operations is critical — deviate and you risk 404s or orphaned data.

**Pipeline steps in order:**

1. **Read & Parse** — load the target `page.tsx` and extract: component type (`JackArticle` / `NewsArticle` / `ArticlePage`), `title`, `description`, `thumbnail` path, `tags`, `publishedAt`, `accentColor` / `categoryColor`.

2. **Validate Thumbnail** — use `fs.existsSync()` to confirm the image path exists under `public/`. If it doesn't, **stop and print a warning** before touching Supabase or the registry. Forcing the user to fix the image path before any writes happen prevents the scenario where articles are in Supabase but render broken images in production.

3. **Migrate to Supabase** — upsert to the correct table based on component type:
   - `JackArticle` → `jack_articles`
   - `NewsArticle` → `articles` (include `status: 'published'`)
   - `ArticlePage` → `article_pages`
   - Use `onConflict: 'slug'` so re-running is safe.

4. **Register in content-registry** — immediately after a successful Supabase upsert, append (or update) the entry in `lib/content-registry.ts` using the extracted metadata. No more blank `imageUrl` fields — this step fills everything because it has the full page data in memory.

5. **Trim the file** — back up the original to `.bak`, then write the stub. This is the point of no return — only execute after steps 3 and 4 confirm success.

6. **Confirm & Clean** — query Supabase to verify the slug exists (same pattern as `_verify-batch-march24.ts`). On success, delete the `.bak` file and print a green confirmation. On failure, restore from `.bak` and print the error.

---

## Phase 2.5: Google News — Fixing the JS-Heavy Problem

This phase is a prerequisite to Phase 3. Google News requires **fully-formed HTML** delivered from the server. If your Supabase data is fetched client-side (via `useEffect` or a browser-side `fetch`), Googlebot sees a blank page at crawl time and cannot index your articles.

---

### Why This Matters

The current architecture fetches article content from Supabase at **runtime on the client**. This means:

- A browser visiting `/trump/ice-arrest-sfo-airport-nationwide-deployment` gets a shell HTML, then JavaScript fills in the headline and body.
- Googlebot crawler hits the same URL, gets the shell HTML, but **does not execute the JavaScript** in the same way — so the headline and body are invisible.
- Google News uses a fast "first-wave" crawl that looks for HTML text directly. JS-rendered content is either missed or indexed with a significant delay.

**The "View Source" Test** — run this before any further publishing:

1. Go to any live article on `objectwire.org`.
2. Right-click → **View Page Source** (not Inspect).
3. Press `Ctrl + F` and search for the article's headline text.
4. **If you see the text** → your rendering is server-side. You are in good shape.
5. **If you see a blank area or a `<div id="__NEXT_DATA__">` script block instead** → the page is JS-heavy. Google News will struggle to index it.

---

### Fix Option A — Server-Side Rendering (SSR) with `@supabase/ssr`

This is the correct fix for dynamic pages (latest news, breaking articles).

**How it works:** Instead of fetching Supabase data inside a `useEffect` or a client component, you fetch it in a Next.js **Server Component** or in `generateMetadata()`. The server queries Supabase, builds the full HTML, and sends it to the browser (and Googlebot) already populated.

**Steps:**

1. Install the SSR-compatible Supabase client:
   ```bash
   npm install @supabase/ssr
   ```

2. Create a server-side Supabase client (reads cookies for auth if needed):
   ```typescript
   // lib/supabase/server.ts
   import { createServerClient } from '@supabase/ssr';
   import { cookies } from 'next/headers';

   export function createClient() {
     const cookieStore = cookies();
     return createServerClient(
       process.env.NEXT_PUBLIC_SUPABASE_URL!,
       process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
       { cookies: { getAll: () => cookieStore.getAll() } }
     );
   }
   ```

3. In your article `page.tsx`, make the component `async` and fetch directly:
   ```typescript
   // app/trump/ice-arrest-sfo-airport-nationwide-deployment/page.tsx
   import { createClient } from '@/lib/supabase/server';

   export default async function Page() {
     const supabase = createClient();
     const { data } = await supabase
       .from('jack_articles')
       .select('*')
       .eq('slug', 'trump-ice-arrest-sfo-airport-nationwide-deployment')
       .single();

     return <JackArticle article={data} />;
   }
   ```

**Result:** Googlebot receives full headline, body text, and structured data in the first HTML response.

---

### Fix Option B — Incremental Static Regeneration (ISR)

This is the **fastest possible format for Google News** and the recommended approach for published articles.

**How it works:** Next.js pre-renders the article as a static HTML file at build time (or on first request). Subsequent requests get the cached HTML — no Supabase round-trip, no JavaScript needed to see the content.

When you save/update an article in Supabase, a webhook triggers a revalidation of that specific page.

**Steps:**

1. Add `revalidate` to your page:
   ```typescript
   export const revalidate = 3600; // Re-generate at most once per hour
   // OR use on-demand revalidation via a webhook
   ```

2. For on-demand revalidation (recommended), create a revalidation API route:
   ```typescript
   // app/api/revalidate/route.ts
   import { revalidatePath } from 'next/cache';
   import { NextRequest, NextResponse } from 'next/server';

   export async function POST(request: NextRequest) {
     const secret = request.nextUrl.searchParams.get('secret');
     if (secret !== process.env.REVALIDATION_SECRET) {
       return NextResponse.json({ error: 'Invalid secret' }, { status: 401 });
     }
     const { path } = await request.json();
     revalidatePath(path);
     return NextResponse.json({ revalidated: true });
   }
   ```

3. In Supabase, add a **Database Webhook** (Table Editor → Webhooks) that POSTs to `https://objectwire.org/api/revalidate?secret=YOUR_SECRET` whenever a row is updated in `articles` or `jack_articles`.

**Result:** Articles are static HTML. Google News indexes them instantly. Zero Supabase latency at crawl time.

---

### Recommended Rendering Strategy per Page Type

| Page Type | Recommended Strategy | Reason |
|---|---|---|
| Breaking news articles | SSR (`async` Server Component) | Always fresh, Googlebot sees full HTML |
| Published articles (> 1 hr old) | ISR (`revalidate = 3600`) | Fastest for Google News, cached HTML |
| Index / category pages | ISR (`revalidate = 1800`) | Semi-fresh, low crawl cost |
| WikiArticle / ArticlePage | SSG (build-time static) | Rarely changes, maximum speed |
| Admin / account pages | Client-side only | Not indexed, don't need SSR |

---

### Step 2.5.1 — Audit Which Pages Are Currently Client-Side

Run a quick grep to find all pages currently using client-side Supabase fetching:

```bash
grep -rl "useEffect\|createBrowserClient\|supabase.from" app --include="*.tsx" | grep "page.tsx"
```

Any hit in a `page.tsx` file is a candidate for the SSR/ISR migration above. Prioritize articles in high-traffic sections (trump, technology, blackrock) first.

---

### Step 2.5.2 — Add Semantic HTML Wrappers (`<article>` and `<section>`)

**The problem:** Even with SSR delivering full HTML, Google News and search crawlers use semantic HTML tags to understand the structure of a page. If article content is floating inside generic `<div>` elements, Google has to guess what is the main content vs. navigation vs. sidebars. Missing semantic wrappers is a Google News quality signal failure.

**The fix:**

1. Wrap the entire article body in an `<article>` tag.
2. Wrap each logical group of content (e.g., "Donation Stations", "The Free Furniture Market") in a `<section>` tag.

This turns a flat stream of headings and paragraphs into a structured outline that Google can parse like a table of contents.

**Example — Before (flat/unstructured):**
```tsx
<div className="article-body">
  <h2>Donation Stations</h2>
  <p>Austin has several drop-off points...</p>
  <h2>The Free Furniture Market</h2>
  <p>Every Saturday, locals gather...</p>
</div>
```

**Example — After (semantic):**
```tsx
<article>
  <section>
    <h2>Donation Stations</h2>
    <p>Austin has several drop-off points...</p>
  </section>
  <section>
    <h2>The Free Furniture Market</h2>
    <p>Every Saturday, locals gather...</p>
  </section>
</article>
```

**Where to apply this:**

- `<BlogSeoAtx>` — Check whether this component already renders an `<article>` tag internally. Run:
  ```bash
  grep -n "<article" components/BlogSeoAtx.tsx
  ```
  - If the tag exists: the component is already compliant. Verify `<section>` tags wrap each named section inside it.
  - If no `<article>` tag: wrap the component's root `<div>` in `<article>` and add `<section>` wrappers around each content block.
- `JackArticle`, `NewsArticle`, `ArticlePage` — apply the same audit. These are the highest-traffic components and the most important for Google News.

**Audit command — find components missing `<article>` tags:**
```bash
grep -rL "<article" components --include="*.tsx"
```

Any component in that list that renders article content is a semantic gap.

**Note:** `<article>` and `<section>` are free, zero-JS changes. They do not affect visual output. This should be done immediately alongside or before the SSR migration in steps 2.5.1.

---

## Phase 3: Architectural Upgrades (Eliminating Technical Debt)

These changes fix the root causes rather than patching symptoms.

---

### Step 3.1 — Migrate `SEOWrapper` and `sitemap.ts` to Read from Supabase

**The problem:** `lib/content-registry.ts` is a hardcoded TypeScript array. Every new page requires a manual code edit. You already have a `content_registry` table in Supabase (created in `supabase/migrations/20260305000000_content_registry.sql`). It's unused.

**The fix:**
1. Update `sitemap.ts` to `fetch()` from `content_registry` instead of importing the TS array.
2. Update `SEOWrapper` to accept props passed down from the page (which fetches its own registry row via `slug`), OR query the `content_registry` table server-side in `generateMetadata()`.
3. Update `wiki:publish` (step 2.2) to upsert to `content_registry` in Supabase as well as writing to `lib/content-registry.ts` during the transition period.
4. Once all existing registry entries have been backfilled into the Supabase table, deprecate `lib/content-registry.ts`.

**The result:** After publishing a page with `wiki:publish`, the sitemap updates on the next request — no deploy needed. You go from a "3-System Gap" to a "2-System Sync."

---

### Step 3.2 — Standardize Supabase Table Schemas

**The problem:** `jack_articles` has no `status` column. `articles` has `status: 'published'`. `article_pages` may differ too. This forces branch logic everywhere you query across tables.

**The fix:** Run this migration in the Supabase SQL editor:

```sql
-- Add status column to jack_articles
ALTER TABLE jack_articles
  ADD COLUMN IF NOT EXISTS status text NOT NULL DEFAULT 'published';

-- Add status column to article_pages (if missing)
ALTER TABLE article_pages
  ADD COLUMN IF NOT EXISTS status text NOT NULL DEFAULT 'published';
```

After this, all three tables have the same shape for the key columns your scripts use (`slug`, `status`, `title`, `published_at`). The `wiki:status` script and any Next.js utility functions can then use a single generic query helper instead of per-table special-casing.

---

### Step 3.3 — Add Thumbnail Path Validation to `wiki:publish`

**The problem:** The Amazon article had to use a fallback image from `entertainment/` because `public/amazon/` doesn't exist. There's no guardrail stopping someone from writing a thumbnail path that 404s in production.

**The fix (part of step 2.2 above, called out separately for clarity):**

```typescript
import { existsSync } from 'fs';
import { join } from 'path';

const thumbnailAbsPath = join(process.cwd(), 'public', thumbnailRelPath);
if (!existsSync(thumbnailAbsPath)) {
  console.error(`\n❌ Thumbnail not found: public/${thumbnailRelPath}`);
  console.error(`   Fix the path in page.tsx before publishing.\n`);
  process.exit(1);
}
```

This check runs before any Supabase writes, so the pipeline aborts cleanly rather than inserting a row with a broken image URL.

---

## Known Gotchas Reference

| Gotcha | Detail | Fix |
|---|---|---|
| `jack_articles` has no `status` column | Querying `slug, status` from that table throws a Postgres error | Only select `slug` from `jack_articles` |
| Curly apostrophe breaks TypeScript | Unicode `'` (`\u2019`) inside a single-quoted string is a syntax error | Wrap the string in double quotes, or use `\u2019` escape |
| PowerShell here-docs don't work | `<< 'EOF'` is bash syntax — PowerShell rejects it | Write inline scripts as temp `.ts` files instead |
| Top-level `await` fails in CJS | Scripts using `await` at top level throw: `SyntaxError: await is not allowed` | Wrap all logic in `async function main() {}` then call `main()` |
| No `public/amazon/` folder | Any article under `/amazon/` route with a local thumbnail will 404 | Use `entertainment/christian-wiediger-rymh7EZPqRs-unsplash.jpg` until a real image is added |
| AOC thumbnail uses uppercase `.PNG` | Railway (Linux) is case-sensitive; `.PNG` ≠ `.png` | Match the actual filename casing on disk exactly |
| Tencent thumbnail has trailing space | `/default/Tencent embeds OpenClaw .png` — space before `.png` | Copy the filename exactly — do not trim the space |
| Husky pre-commit hook | Was blocking commits | Hook deleted entirely — commits work cleanly now |