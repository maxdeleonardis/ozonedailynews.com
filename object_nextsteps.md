# Commit-Deploy Automation Pipeline (Enhanced)
## Execution Plan — ObjectWire
### "Content-as-Code" Approach

**Goal:** Every `git push` to `main` containing new articles automatically
extracts content from full JSX pages, upserts to the correct Supabase table,
trims the page to a lean DB stub, updates the SEO registry, and pings sitemaps.
**No more manual SQL seed files. No wasted CI minutes.**

---

## How to use this doc

- Work top-to-bottom. Each step has a **Done When** checklist — tick every box before moving to the next step.
- Steps marked *(parallel)* can be run at the same time as the adjacent step.
- Steps marked *(manual)* require action outside the codebase (GitHub UI, etc.).
- Check off boxes with `[x]` as you complete each item.

---

## Step 1A — Add `ArticlePage` → `article_pages` extraction

**File:** `scripts/migrate-wiki-content.ts`
**Status:** ✅ COMPLETE

**What was done:**
1. In `findNewsArticlePages()`, added skip guard to prevent re-processing already-migrated pages: `if (source.includes('ArticlePageDB')) continue;`
2. After the JackArticle upsert block, inserted a new extraction path for `<ArticlePage>`.

> **Robustness note:** The extraction uses the same `extractStrProp` / `extractExprProp` helpers
> as the JackArticle path. A future upgrade to use an AST parser like `ts-morph` would make
> this indestructible against unusual JSX formatting. Known caveat: props that span unusual
> whitespace patterns may not parse — the script fails loudly (non-zero exit) rather than
> silently pushing bad data.

**Extraction map:**
- `extractStrProp(propsStr, 'title')` → `title`
- `extractStrProp(propsStr, 'subtitle')` → `subtitle`
- `extractStrProp(propsStr, 'category')` → `category`
- `extractStrProp(propsStr, 'lastUpdated')` → `last_updated`
- `extractStrProp(propsStr, 'url')` → `url`
- `extractExprProp(propsStr, 'infoBox')` → `info_box` (JSONB)
- `extractExprProp(propsStr, 'tableOfContents')` → `table_of_contents` (JSONB)
- `extractExprProp(propsStr, 'relatedLinks')` → `related_links` (JSONB)
- `extractExprProp(propsStr, 'backLink')` → `back_link` (JSONB)
- Children JSX → `jsxToHtml(convertSubComponents(bodyJsx))` → `content_html`

Upsert target: `article_pages` table, `onConflict: 'slug'` (idempotent).

**Done When:**
- [x] `findNewsArticlePages()` skips files that already contain `ArticlePageDB`
- [x] Script exits with non-zero code if extraction produces no title (avoids pushing bad data)
- [x] Running `npm run wiki:migrate -- --dry-run` on an `ArticlePage` file prints `[article page]` with slug + field counts
- [x] No TypeScript errors in `scripts/migrate-wiki-content.ts`

---

## Step 1B — Add `JackArticleDB` + `ArticlePageDB` stubs & Cleanup *(parallel with 1A)*

**File:** `scripts/trim-wiki-pages.ts` + `.gitignore`
**Status:** ✅ COMPLETE

**What was done:**
1. In `findNewsArticlePages()`, added: `if (source.includes('ArticlePageDB')) continue;`
2. In `buildThinFile()`, extended the detection priority chain before the existing `isNewsArticle` check:

```ts
const isJackArticle =
  source.includes("from '@/components/JackArticle'") ||
  source.includes('from "@/components/JackArticle"');

const isArticlePage =
  source.includes("from '@/components/ArticlePage'") ||
  source.includes('from "@/components/ArticlePage"');
```

Priority order (first match wins):
| # | Condition | Import | Return JSX |
|---|---|---|---|
| 1 | `isJackArticle` | `import { JackArticleDB } from '@/components/JackArticleDB';` | `return <JackArticleDB slug="${slug}" />;` |
| 2 | `isArticlePage` | `import { ArticlePageDB } from '@/components/ArticlePageDB';` | `return <ArticlePageDB slug="${slug}" />;` |
| 3 | `isNewsArticle` (existing) | `import { NewsArticleDB } from '@/components/NewsArticleDB';` | `return <NewsArticleDB slug="${slug}" />;` |
| 4 | fallback | `import { WikiArticle } from '@/components/WikiArticle';` | `return <WikiArticle slug="${slug}" />;` |

3. Added `*.bak` to `.gitignore` so backup files never leak into commits.

**Done When:**
- [x] `npm run wiki:trim -- --dry-run` on a `JackArticle` page outputs a `JackArticleDB` stub
- [x] `npm run wiki:trim -- --dry-run` on an `ArticlePage` page outputs an `ArticlePageDB` stub
- [x] Files already containing `ArticlePageDB` are skipped silently
- [x] `*.bak` entries added to `.gitignore`
- [x] No TypeScript errors in `scripts/trim-wiki-pages.ts`

**Implemented:** March 21, 2026

---

## Step 2 — Refine Local Testing Command

**File:** `package.json`
**Status:** ✅ COMPLETE

**What was done:**
Added `pipeline:local` (not `deploy:commit`) to clarify this is a local
testing/manual override tool — GitHub Actions handles real deployment.

```json
"pipeline:local": "npm run wiki:migrate && npm run wiki:trim && npm run registry:write && npx tsx scripts/ping-google.ts"
```

**Done When:**
- [x] `npm run pipeline:local` is listed in `npm run` output
- [x] `npm run wiki:migrate -- --dry-run && npm run wiki:trim -- --dry-run` runs cleanly without DB writes

**Implemented:** March 21, 2026

---

## Step 3A — Add GitHub Secrets *(manual — requires GitHub UI)*

**Where:** `https://github.com/aMarketology/Object-wire26-/settings/secrets/actions`
**Status:** ⬜ PENDING (manual action)

**What to do:**
Add two repository secrets (values from Supabase dashboard → Settings → API):

| Secret Name | Where to find it |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project → Settings → API → Project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase project → Settings → API → service_role key |

> ⚠️ Use the **service_role** key (not the anon key). Service role bypasses RLS,
> which is required for CI to write to `jack_articles` and `article_pages`.

**Done When:**
- [ ] `NEXT_PUBLIC_SUPABASE_URL` appears in the GitHub repo Secrets list
- [ ] `SUPABASE_SERVICE_ROLE_KEY` appears in the GitHub repo Secrets list

---

## Step 3B — Update GitHub Actions Workflow *(depends on 3A)*

**File:** `.github/workflows/seo-registry-sync.yml`
**Status:** ✅ COMPLETE

**What was done:**
Replaced the existing workflow with the enhanced version below.
Key improvements over the original:
- **`paths` filter** — pipeline only runs when `app/**/page.tsx` or `scripts/**` change; CSS/UI updates no longer waste CI minutes or Supabase API quota
- **`permissions: contents: write`** — required for the auto-commit step
- **`env:` block** — Supabase credentials injected from secrets
- **`[skip ci]` in commit message** — prevents the auto-committed stub files from re-triggering this workflow (infinite loop guard)
- Combined `registry:sync && registry:write` into one step

```yaml
name: Content Pipeline & SEO Sync

on:
  push:
    branches:
      - main
    paths:
      - 'app/**/page.tsx'   # new or edited articles
      - 'scripts/**'         # pipeline script changes
  schedule:
    - cron: '0 6 * * 1'     # weekly full-pass safety net
  workflow_dispatch:         # manual trigger from GitHub Actions UI

jobs:
  sync:
    name: Content Pipeline & SEO Sync
    runs-on: ubuntu-latest
    permissions:
      contents: write        # needed for auto-commit step

    env:
      NEXT_PUBLIC_SUPABASE_URL:  ${{ secrets.NEXT_PUBLIC_SUPABASE_URL }}
      SUPABASE_SERVICE_ROLE_KEY: ${{ secrets.SUPABASE_SERVICE_ROLE_KEY }}

    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          token: ${{ secrets.GITHUB_TOKEN }}

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Migrate articles to Supabase
        run: npm run wiki:migrate

      - name: Trim static pages to DB stubs
        run: npm run wiki:trim

      - name: Commit trimmed stubs back to repo
        uses: stefanzweifel/git-auto-commit-action@v5
        with:
          commit_message: 'chore: auto-trim article pages to DB stubs [skip ci]'
          file_pattern: 'app/**/page.tsx'

      - name: Apply registry sync
        run: npm run registry:sync && npm run registry:write

      - name: Ping Google & Bing sitemaps
        run: npx tsx scripts/ping-google.ts
```

**Done When:**
- [x] `paths` filter is active (prevents running on CSS/UI-only pushes)
- [x] `permissions: contents: write` is set
- [x] `env:` block references both Supabase secrets
- [x] `[skip ci]` is present in the auto-commit message
- [x] No YAML syntax errors

**Implemented:** March 21, 2026

---

## Step 4 — End-to-End Verification

**Goal:** Confirm the full pipeline works smoothly and idempotently.
**Status:** ⬜ PENDING

**What to do:**
1. Create a test article using `<ArticlePage>` at `app/blog/test-pipeline/page.tsx`
2. Dry-run locally first:
   ```sh
   npm run wiki:migrate -- --dry-run
   npm run wiki:trim -- --dry-run
   ```
3. Inspect output — confirm `[article page]` detected, slug + field counts printed
4. Run for real:
   ```sh
   npm run pipeline:local
   ```
5. Check Supabase → `article_pages` table — confirm row exists with correct fields
6. Check `app/blog/test-pipeline/page.tsx` — confirm it is now a 3-line `<ArticlePageDB>` stub
7. Push to `main` and watch the GitHub Action run
8. Make a CSS-only change and push — confirm the Action does **not** trigger

**Done When:**
- [ ] `npm run wiki:migrate -- --dry-run` prints `[article page]` for the test file
- [ ] Test article appears in Supabase `article_pages` table with correct fields
- [ ] `app/blog/test-pipeline/page.tsx` trimmed to `ArticlePageDB` stub after pipeline run
- [ ] GitHub Action succeeds on push; auto-commit visible in repo history
- [ ] No second Action run triggered by the auto-commit (confirming `[skip ci]` works)
- [ ] Pushing a CSS-only change does **not** trigger the pipeline (confirming `paths` filter works)
- [ ] Test page loads correctly in production from the DB
- [ ] Cleanup: `Get-ChildItem -Recurse *.bak | Remove-Item`

---

## Supabase Table → Component Routing Reference

| Component | DB Table | DB Stub Component | Status |
|---|---|---|---|
| `<NewsArticle>` | `articles` | `<NewsArticleDB>` | ✅ existed before this plan |
| `<JackArticle>` | `jack_articles` | `<JackArticleDB>` | ✅ added in Steps 1A/1B |
| `<ArticlePage>` | `article_pages` | `<ArticlePageDB>` | ✅ added in Steps 1A/1B |
| `<DynamicNewsArticle>` | `wiki_articles` | `<WikiArticle>` | ✅ existed before this plan |
| Raw JSX layout | `wiki_articles` | `<WikiArticle>` | ✅ existed before this plan |

---

## Quickstart (after all steps are complete)

**Local — manual publish or override:**
```sh
npm run pipeline:local
```

**Single file only:**
```sh
npm run wiki:migrate -- --file app/crypto/my-article/page.tsx
npm run wiki:trim -- --file app/crypto/my-article/page.tsx
```

**Normal workflow (automated):**
```sh
git add .
git commit -m "feat: new article — my topic"
git push origin main
# GitHub Actions handles everything automatically
```

---

## Future Improvements (post-MVP)

- **AST parsing with `ts-morph`** — replace regex prop extraction with a proper TypeScript AST parser for indestructible reliability on any JSX formatting style
- **Changed-files only mode** — pass `git diff HEAD~1 --name-only` to `wiki:migrate` so large repos only process new/edited pages per push instead of scanning all pages
- **Supabase content hash check** — before upserting, compare a hash of the extracted HTML against a stored `content_hash` column; skip if identical (reduces write load on high-frequency pushes)
- **Slack/Discord notification** — post a summary of migrated articles to a webhook after each successful pipeline run

---

*Last updated: March 21, 2026*
*Steps 1A, 1B, 2, 3B: ✅ Implemented | Step 3A: ⬜ Manual action needed (GitHub UI) | Step 4: ⬜ Pending end-to-end verification*
