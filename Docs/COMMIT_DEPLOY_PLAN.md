# Commit-Deploy Automation Pipeline
## Execution Plan | OzoneNews

**Goal:** Every `git push` to `main` automatically extracts article content
from full JSX pages, upserts to the correct Supabase table, trims the page
to a lean DB stub, updates the SEO registry, and pings sitemaps.
**No more manual SQL seed files.**

---

## How to use this doc

- Work top-to-bottom. Each step has a **Done When** checklist, tick every box before moving to the next step.
- Steps marked *(parallel)* can be run at the same time as the adjacent step.
- Steps marked *(manual)* require action outside the codebase (GitHub UI, etc.).

---

## Step 1A | Add `ArticlePage` → `article_pages` extraction

**File:** `scripts/migrate-wiki-content.ts`

**What to do:**
1. In `findNewsArticlePages()` (near line 80), add a skip guard: `if (source.includes('ArticlePageDB')) continue;`
2. After the JackArticle upsert block (around line 860), before the `DynamicNewsArticle` check, insert a new extraction path:
   - Detect `<ArticlePage [\s]` (not `<ArticlePageDB`) via regex
   - Find opening tag end with existing `findOpenTagEnd()` helper
   - Extract props using existing helpers:
     - `extractStrProp(propsStr, 'title')` → `title`
     - `extractStrProp(propsStr, 'subtitle')` → `subtitle`
     - `extractStrProp(propsStr, 'category')` → `category`
     - `extractStrProp(propsStr, 'lastUpdated')` → `last_updated`
     - `extractStrProp(propsStr, 'url')` → `url`
     - `extractExprProp(propsStr, 'infoBox')` → `info_box`
     - `extractExprProp(propsStr, 'tableOfContents')` → `table_of_contents`
     - `extractExprProp(propsStr, 'relatedLinks')` → `related_links`
     - `extractExprProp(propsStr, 'backLink')` → `back_link`
   - Extract children JSX (between `>` and `</ArticlePage>`)
   - Convert: `jsxToHtml(convertSubComponents(bodyJsx))` → `content_html`
   - Upsert to `article_pages` table (slug + all fields above)

**Done When:**
- [ ] `findNewsArticlePages()` skips files that already contain `ArticlePageDB`
- [ ] Running `npm run wiki:migrate -- --dry-run` on an `ArticlePage` file prints `[article page]` with slug + field counts
- [ ] No TypeScript errors in `scripts/migrate-wiki-content.ts`

---

## Step 1B | Add `JackArticleDB` + `ArticlePageDB` stubs to trim script *(parallel with 1A)*

**File:** `scripts/trim-wiki-pages.ts`

**What to do:**
1. In `findNewsArticlePages()` (around line 67), add: `if (source.includes('ArticlePageDB')) continue;`
2. In `buildThinFile()`, extend the detection priority chain **before** the existing `isNewsArticle` check:

```ts
const isJackArticle =
  source.includes("from '@/components/JackArticle'") ||
  source.includes('from "@/components/JackArticle"');

const isArticlePage =
  source.includes("from '@/components/ArticlePage'") ||
  source.includes('from "@/components/ArticlePage"');
```

3. Map each to the correct import + return JSX:

| Condition | Import | Return JSX |
|---|---|---|
| `isJackArticle` | `import { JackArticleDB } from '@/components/JackArticleDB';` | `return <JackArticleDB slug="${slug}" />;` |
| `isArticlePage` | `import { ArticlePageDB } from '@/components/ArticlePageDB';` | `return <ArticlePageDB slug="${slug}" />;` |
| `isNewsArticle` (existing) | `import { NewsArticleDB } from '@/components/NewsArticleDB';` | `return <NewsArticleDB slug="${slug}" />;` |
| fallback | `import { WikiArticle } from '@/components/WikiArticle';` | `return <WikiArticle slug="${slug}" />;` |

**Done When:**
- [ ] Running `npm run wiki:trim -- --dry-run` on a `JackArticle` page shows `JackArticleDB` stub output
- [ ] Running `npm run wiki:trim -- --dry-run` on an `ArticlePage` page shows `ArticlePageDB` stub output
- [ ] Files already containing `ArticlePageDB` are skipped with no output
- [ ] No TypeScript errors in `scripts/trim-wiki-pages.ts`

---

## Step 2 | Add `deploy:commit` shorthand command

**File:** `package.json`

**What to do:**
Add one entry to the `"scripts"` block (after `wiki:trim-dry`):

```json
"deploy:commit": "npm run wiki:migrate && npm run wiki:trim && npm run registry:write && npx tsx scripts/ping-google.ts"
```

**Done When:**
- [ ] `npm run deploy:commit -- --dry-run` prints all 4 pipeline steps without error
  *(Note: `--dry-run` only applies to `wiki:migrate` and `wiki:trim`; pass it explicitly to test: `npm run wiki:migrate -- --dry-run && npm run wiki:trim -- --dry-run`)*
- [ ] `npm run deploy:commit` is listed in `npm run` output

---

## Step 3A | Add GitHub Secrets *(manual | requires GitHub UI)*

**Where:** `https://github.com/aMarketology/Object-wire26-/settings/secrets/actions`

**What to do:**
Add two repository secrets:
1. `NEXT_PUBLIC_SUPABASE_URL`, your Supabase project URL (e.g. `https://xxxx.supabase.co`)
2. `SUPABASE_SERVICE_ROLE_KEY`, the service role key from Supabase dashboard → Settings → API

**Done When:**
- [ ] Both secrets appear in the GitHub repo Secrets list (values hidden, names visible)

---

## Step 3B | Update GitHub Actions workflow *(depends on 3A)*

**File:** `.github/workflows/seo-registry-sync.yml`

**What to do:**
Replace the current `sync` job steps with this updated sequence:

```yaml
jobs:
  sync:
    name: Sync Content Registry & Ping Search Engines
    runs-on: ubuntu-latest
    permissions:
      contents: write   # needed for auto-commit step

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

      - name: Run registry sync (dry-run report)
        run: npm run registry:sync

      - name: Apply registry sync
        run: npm run registry:write

      - name: Ping Google & Bing sitemaps
        run: npx tsx scripts/ping-google.ts
```

> **Critical:** The `[skip ci]` tag in the commit message prevents the auto-committed stub files from re-triggering this workflow and creating an infinite loop.

**Done When:**
- [ ] `.github/workflows/seo-registry-sync.yml` has `permissions: contents: write`
- [ ] Job `env:` block has both Supabase vars referencing secrets
- [ ] `Migrate articles to Supabase` step present (`npm run wiki:migrate`)
- [ ] `Trim static pages to DB stubs` step present (`npm run wiki:trim`)
- [ ] `Commit trimmed stubs back to repo` step uses `stefanzweifel/git-auto-commit-action@v5` with `[skip ci]` in commit message
- [ ] No YAML syntax errors (validate with `yamllint` or paste into GitHub UI)

---

## Step 4 | End-to-end verification

**Goal:** Confirm the full pipeline works before shipping any new article.

**What to do:**
1. Create a test article using `<ArticlePage>` in `app/blog/test-pipeline/page.tsx`
2. Run the pipeline locally:
   ```sh
   npm run wiki:migrate -- --dry-run
   npm run wiki:trim -- --dry-run
   ```
3. Inspect dry-run output, confirm `[article page]` is detected, slug + fields printed
4. Run for real:
   ```sh
   npm run wiki:migrate
   npm run wiki:trim
   ```
5. Check Supabase → `article_pages` table, confirm the test row exists
6. Check `app/blog/test-pipeline/page.tsx`, confirm it's now a 3-line `<ArticlePageDB>` stub
7. Push to `main`, confirm GitHub Action runs, auto-commits stub files, no second trigger

**Done When:**
- [ ] Test article appears in `article_pages` table in Supabase with correct fields
- [ ] `app/blog/test-pipeline/page.tsx` trimmed to `ArticlePageDB` stub after running pipeline
- [ ] GitHub Action succeeds on push, auto-commit visible in repo history
- [ ] No second Action run triggered by the auto-commit (confirming `[skip ci]` works)
- [ ] Test page loads correctly in production from the DB (not from static JSX)
- [ ] Delete test article and `.bak` files: `Get-ChildItem -Recurse *.bak | Remove-Item`

---

## Supabase Table → Component Routing Reference

| Component | DB Table | DB Component | Trimmed stub |
|---|---|---|---|
| `<NewsArticle>` | `articles` | `<NewsArticleDB>` | ✅ already handled |
| `<JackArticle>` | `jack_articles` | `<JackArticleDB>` | ✅ steps 1A/1B |
| `<ArticlePage>` | `article_pages` | `<ArticlePageDB>` | ✅ steps 1A/1B |
| `<DynamicNewsArticle>` | `wiki_articles` | `<WikiArticle>` | ✅ already handled |
| Raw JSX | `wiki_articles` | `<WikiArticle>` | ✅ already handled |

---

## Quickstart (after all steps are complete)

To publish a new article from a full JSX page to production in one command:

```sh
npm run deploy:commit
```

To publish a single file only:

```sh
npm run wiki:migrate -- --file app/crypto/my-article/page.tsx
npm run wiki:trim -- --file app/crypto/my-article/page.tsx
```

---

*Plan status: Steps 1A, 1B, 2, 3B not yet implemented. Step 3A requires manual GitHub UI action.*
