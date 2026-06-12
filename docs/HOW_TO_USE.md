# OzoneNews | How to Write an Article
## From Idea to Live Page Using Alfanso + Alfasa

**Last updated:** June 11, 2026
**Stack:** Alfanso (scaffold) → JSON → Alfasa (QA) → Satori (thumbnail) → `npm run publish` (deploy)

---

## The Full Pipeline at a Glance

```
IDEA
  │
  ▼
npm run alfanso           ← Scaffolds complete JSON with GEO structure
  │
  ▼
Fill [FILL: ...] markers  ← The only part that requires a human writer
  │
  ▼
npm run alfasa            ← Session briefing, SEO quality check
  │
  ▼
npm run mint:thumbnails   ← Satori generates OG thumbnail from live URL
  │
  ▼
npm run publish           ← Syncs registry, backfills Supabase, commits, pushes
  │
  ▼
LIVE at ozonedailynews.com
```

---

## Step 1 — Scaffold with Alfanso

Alfanso generates a complete, OStandard-compliant article file in under 3 seconds. It writes the correct sharded file path, wires every required GEO component, and registers the article in the content registry.

### Non-interactive (fastest):

```bash
npm run alfanso -- \
  --title  "Article Title Here" \
  --type   jack \
  --cat    Science \
  --author simon-minter \
  --tags   "Tag1,Tag2,Tag3,Tag4"
```

### Interactive (guided prompts):

```bash
npm run alfanso
```

### Flags reference:

| Flag | Values | Default |
|---|---|---|
| `--title` | Any string (required) | — |
| `--type` | `news` or `jack` | `news` |
| `--cat` | See categories below | `News` |
| `--author` | Author slug | `simon-minter` |
| `--tags` | `"Tag1,Tag2,Tag3"` | 4 placeholders |
| `--slug` | Custom slug override | Auto-generated |
| `--dry` | Preview only, no file write | off |
| `--open` | Open in `$EDITOR` after writing | off |

### Valid categories:

`News` · `Tech` · `Finance` · `Entertainment` · `World` · `Politics` · `Science` · `Sports` · `Culture` · `Crypto` · `Gaming`

### When to use `news` vs `jack`:

| Use `news` | Use `jack` |
|---|---|
| Breaking news, short-form (400-800 words) | Long-form investigation, deep analysis (800-2000 words) |
| Single primary source | Multiple numbered sources |
| No timeline or case overview needed | Benefits from structured sections, data tables |
| Standard NewsArticleDB renderer | Premium JackArticleDB renderer with sidebar, breadcrumbs |

---

## Step 2 — Fill the Article

Alfanso outputs a file pre-wired with `[FILL: ...]` markers on every field that needs human content. Open the file and search for `[FILL:` to jump between them.

### Required fields (build will fail without these):

```
✗ title              — Already filled by --title flag
✗ subtitle           — 1-2 sentences. Completes the headline. No em dashes.
✗ thumbnail_src      — Unsplash or other image URL (1200×675)
✗ thumbnail_alt      — Descriptive alt text for the image
✗ metadata.description — 130-155 characters. Primary keyword in first 60 chars.
✗ content_html       — All [FILL: ...] markers replaced with real content
```

### Writing rules (OStandard, non-negotiable):

**Titles and headings**
- Use `|` as separator: `"Galaxy-Killing Wind | JWST Solves Why Early Galaxies Die"`
- Never use `:` as separator in headings
- Never use em dashes (`—`) or en dashes (`–`) anywhere
- Max 60 characters for `metadata.title`
- No `&` in H1/H2/H3 (allowed only in `metadata.title`)
- Banned heading words: "Background", "Overview", "Introduction", "Conclusion"

**metadata.description**
- Hard limits: 130-155 characters
- Primary keyword must appear in the first 60 characters
- No filler phrases: "learn more", "find out", "comprehensive guide"

**Banned AI boilerplate phrases (build fails on any of these):**
- "In conclusion"
- "In summary"
- "It is important to note"
- "Furthermore, it is crucial"
- "In today's fast-paced world"
- "In the ever-evolving landscape"
- "Delve into"
- "Navigating the complex"

**Links (every link must be blue and underlined):**

```html
<!-- Internal -->
<a href="/science/related-article" class="text-blue-600 hover:text-blue-800 underline">
  Link text
</a>

<!-- External -->
<a href="https://source.com" target="_blank" rel="noopener noreferrer"
   class="text-blue-600 hover:text-blue-800 underline">
  Source text
</a>
```

Never render linked text as unstyled or black. Never omit `target="_blank" rel="noopener noreferrer"` on external links.

### Article minimum requirements (every published article must have):

1. `author_name` + `author_slug` (must exist in `lib/authors.ts`)
2. `published_at` in full ISO-8601: `"2026-06-11T09:00:00-05:00"`
3. 300+ words in `content_html`
4. At least one `<h2>` in `content_html`
5. `metadata.description` 130-155 characters
6. Canonical URL in `metadata.alternates.canonical`
7. 4+ internal links in `content_html`
8. 1+ external source link in `content_html`
9. 4-8 tags (proper nouns only)
10. `thumbnail_src` (required for Google Top Stories)

---

## Step 3 — The GEO Structure (What Alfanso Pre-Wires)

Every article scaffolded by Alfanso follows the GEO structure that Google's AI Overviews and AI search engines like Perplexity extract from. **Fill these in order — they are not optional decoration.**

```
1. DirectAnswer      — 2-4 sentences answering the core question immediately.
                       This is what AI systems quote verbatim. Make it count.

2. KeyTakeaways      — 5-6 bullet points with specific facts, numbers, names.
                       Each item must be independently verifiable.

3. Opening paragraph — Why this matters now. Primary keyword in sentence 1.

4. H2 sections (3-4) — Specific titles using | separator.
                       Each section answers one concrete sub-question.

5. CitationBlock     — One per major factual claim. Always include:
                       question + answer + stat (if applicable) + source + sourceUrl

6. FAQAccordion      — 4-5 questions written as "what/how/why" queries.
                       Answers should be 3-5 sentences each.

7. SourcesInterlink  — External numbered sources + internal related links.
                       Always include a link to the category hub (/science, /tech etc.)
```

### How to write a strong DirectAnswer:

**Weak:**
> "This article discusses the recent findings about mycorrhizal fungi networks."

**Strong (OStandard):**
> "A global mapping study led by SPUN has quantified Earth's arbuscular mycorrhizal fungal network at 110 quadrillion kilometers, enough to span roughly 10 percent of the Milky Way's diameter. This living infrastructure supports more than 70 percent of all land plant species and sequesters between 1 billion and 4 billion tons of CO2 annually. Cultivated croplands show fungal network densities 47.3 percent lower than undisturbed ecosystems due to tilling and synthetic fertilizer use."

**Rules:** Named institution. Specific number. Specific consequence. No em dashes. No hedging.

### How to write a strong H2:

**Weak:** `<h2>Overview</h2>` · `<h2>Background</h2>` · `<h2>Conclusion</h2>`

**Strong:**
```html
<h2>The Cosmic Scale | 110 Quadrillion Kilometers of Fungal Hyphae</h2>
<h2>Galaxy-Killing Wind | JWST Catches CRISTAL-02 Being Stripped of Gas</h2>
<h2>What Industrial Agriculture Is Destroying | 47% Loss in Croplands</h2>
```

H2s must be specific enough to answer a question on their own.

### How to write a CitationBlock:

```json
<CitationBlock
  question="How much carbon do mycorrhizal networks store each year?"
  answer="Terrestrial plants pump 1 to 4 billion tons of CO2 annually into mycorrhizal pathways. This represents roughly 11 percent of total global human-caused emissions, locking carbon in deep soil horizons."
  type="stat"
  stat="Up to 4B tons CO2/yr"
  statLabel="Carbon stored via mycorrhizal pathways annually (Stewart, 2025)"
  source="Stewart, FEMS Microbiology Letters, 2025"
  sourceUrl="https://doi.org/10.1093/femsle/fnaf055"
/>
```

`type` values: `stat` · `definition` · `comparison` · `timeline` · `verdict`

---

## Step 4 — SEO Optimization Checklist

Before running `publish`, verify:

```
□ metadata.title        ≤ 60 characters, primary keyword present, no em dashes
□ metadata.description  130-155 characters, keyword in first 60 chars
□ H1 (title)            Specific, keyword-rich, | separator if needed
□ First H2              Appears within first 300 words of content_html
□ DirectAnswer          Names a source, contains a number, answers in ≤ 4 sentences
□ KeyTakeaways          5+ items, every item has a specific fact (not vague)
□ CitationBlocks        At least 2, each with sourceUrl pointing to primary source
□ Internal links        4+ links to other OzoneNews articles
□ External links        1+ links to primary sources (journal, NASA, institution)
□ thumbnail_src         1200×675 image URL (Unsplash is fine until Satori mints)
□ tags                  4-8 proper nouns only (not generic words like "Science")
□ author_slug           Must exist in lib/authors.ts
□ published_at          Full ISO-8601 with timezone: 2026-06-11T09:00:00-05:00
□ canonical URL         Matches the article's live URL exactly
```

---

## Step 5 — Check Quality with Alfasa

```bash
npm run alfasa
```

Alfasa is a session briefing tool. Run it before publishing to get:
- A list of your most recent articles and their E-E-A-T scores
- SEO quality warnings (missing DirectAnswer, short descriptions, etc.)
- Editorial suggestions based on recent content gaps

For a strict E-E-A-T audit of a specific article:

```bash
npm run validate:eeat
npm run validate:geo
```

---

## Step 6 — Generate the Thumbnail with Satori

Satori is a remote image generation API that creates branded OG thumbnails from each article's live URL. The thumbnail appears in Google Search, social media previews, and the article's header.

### Via CLI (after publishing):

```bash
# Mint a single article
npm run mint:thumbnails -- --slug science-my-article-slug-2026

# Force regenerate (overwrite existing thumbnail)
npm run mint:thumbnails -- --slug science-my-article-slug-2026 --force

# Mint ALL articles missing thumbnails
npm run mint:thumbnails

# Preview without writing (dry run)
npm run mint:thumbnails -- --dry
```

### Via CMS (live editor):

1. Open `/admin/articles/edit/[slug]`
2. Scroll to the **Thumbnail** section
3. Click the **purple ⚡ button** ("Mint with Satori")
4. The thumbnail previews in the sidebar
5. Click **Apply** to write the URL into `thumbnail_src`

### How Satori works:

Satori hits the article's live URL (`https://www.ozonedailynews.com/category/slug`), fetches the title, subtitle, and author, and renders a branded 1200×675 OG card via the `/api/og` route. The returned URL (`/api/og?slug=...`) is dynamic — it regenerates on demand from current article metadata.

**Important:** Satori requires the article to be live (deployed) to fetch its metadata. Run `npm run publish` first, wait ~2 minutes for Vercel to deploy, then run `npm run mint:thumbnails`.

---

## Step 7 — Publish

```bash
npm run publish
```

This single command runs the full pipeline in order:

1. `sync-registry.ts --write` — Registers any new JSON files in `content_registry.json`
2. `backfill-articles.ts` — Upserts all articles to Supabase (with `.env.local`)
3. `mint-thumbnails.ts` — Generates missing thumbnails via Satori API
4. `git add -A && git commit && git push` — Commits and pushes to GitHub → triggers Vercel deploy

**Or do each step manually if you need control:**

```bash
npm run wiki:sync           # 1. Sync registry only
npm run backfill            # 2. Push to Supabase only
npm run mint:thumbnails     # 3. Mint thumbnails only
git add -A && git commit -m "publish: My article title" && git push  # 4. Deploy
```

---

## Quick Reference — Writing One Article End to End

### Estimated time: 20-40 minutes

```bash
# 1. Scaffold (30 seconds)
npm run alfanso -- --title "Your Title" --type jack --cat Science --author simon-minter --tags "Tag1,Tag2,Tag3,Tag4"

# 2. Write (15-35 minutes)
# Open the generated file and replace every [FILL: ...] marker
# File path is printed by Alfanso after scaffolding
code content/static/jack_articles/2026/06/science-your-slug-2026.json

# 3. Quality check (1 minute)
npm run alfasa
npm run validate:geo

# 4. Publish (30 seconds)
npm run publish

# 5. Mint thumbnail (1 minute, after Vercel deploys)
npm run mint:thumbnails -- --slug science-your-slug-2026 --force
```

---

## Article Types and When to Use Them

| Type | Command flag | Renderer | Best for |
|---|---|---|---|
| `news` | `--type news` | `NewsArticleDB` | Breaking news, study results, announcements |
| `jack` | `--type jack` | `JackArticleDB` | Deep investigations, explainers, long-form analysis |
| `wiki` | (manual JSON) | `WikiArticle` | Evergreen reference, glossary, topic hubs |
| `article_page` | (manual JSON) | `ArticlePageDB` | Wikipedia-style topic pages (Coral Reef, Sea Stars) |
| `creator` | (manual JSON) | `CreatorArticleDB` | Creator profiles, author spotlights |

---

## Author Slugs

| Slug | Name | Beats |
|---|---|---|
| `simon-minter` | Simon Alfred Minter | Science, Space, Climate, Tech |
| `max-deleonardis` | Max DeLeonardis | Science, Tech, Climate, Space |
| `kaustubh-madiraju` | Kaustubh Madiraju | Technology, Science, Innovation |
| `josh-donnelly` | Josh Donnelly | Community, Mental Health, Nonprofit |
| `ozonedailynews-editorial-team` | OzoneNews Editorial Team | All beats (collaborative/wire coverage) |

To add a new author, edit `lib/authors.ts`. The CMS, E-E-A-T gate, and author profile pages all derive from that single file.

---

## Common Mistakes and How to Fix Them

| Mistake | Fix |
|---|---|
| Em dash in title (`—`) | Replace with `\|` in headings, comma in prose |
| `metadata.description` too short | Must be 130-155 chars. Count with: `echo -n "your desc" \| wc -c` |
| No DirectAnswer in content_html | Add `<DirectAnswer answer="..." />` as the very first element |
| Slug has category double-prefix | Alfanso handles this automatically; if writing manually: `science-jwst-discovery` not `science-science-jwst` |
| Article not showing in CMS | Run `npm run wiki:sync` then `npm run backfill` |
| Satori returns no imageUrl | Article must be live on production. Deploy first, then mint. |
| Build fails on AI phrase | Search `content_html` for banned phrases listed in copilot-instructions.md |
| 404 on edit page | Run `npm run validate:cms` to diagnose |

---

## Environment Setup

These env vars must be in `.env.local` for the full pipeline to work:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://...
SUPABASE_SERVICE_ROLE_KEY=eyJ...
GITHUB_TOKEN=ghp_...
GITHUB_OWNER=aMarketology
GITHUB_REPO=ozonedailynews.com
GITHUB_DEFAULT_BRANCH=master
NEXT_PUBLIC_SITE_URL=https://www.ozonedailynews.com
```

The Satori API (`https://satori-neon.vercel.app`) requires no authentication.

---

## File Structure Reference

```
content/
  static/
    articles/2026/06/          ← NewsArticle JSON (sharded by year/month)
    jack_articles/2026/06/     ← JackArticle JSON (sharded by year/month)
    article_pages/earth/       ← ArticlePage JSON (sharded by category)
    article_pages/science/
    wiki_articles/             ← WikiArticle JSON (flat)
    content_registry.json      ← Master routing table (auto-managed)

scripts/
  alfanso.ts          ← Ghost writer scaffold CLI (this document)
  alfasa-suggest.ts   ← Session briefing / SEO briefing (npm run alfasa)
  mint-thumbnails.ts  ← Satori OG thumbnail generator
  backfill-articles.ts ← Push all static JSON to Supabase
  sync-registry.ts    ← Keep content_registry.json in sync
  validate-cms-routes.ts ← Pre-build CMS route validator
  validate-geo.ts     ← GEO signal audit
  validate-eeat.ts    ← E-E-A-T quality audit
```
