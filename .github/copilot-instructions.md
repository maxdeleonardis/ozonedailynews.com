# ObjectWire Copilot Instructions

These rules apply to **every** GitHub Copilot request in this workspace.

---

## What ObjectWire Is

ObjectWire is a verified news platform built on Next.js 15, React 19, Supabase (PostgreSQL), and Tailwind CSS. The editorial mission is accuracy over speed, primary sources only, and transparent corrections. It is not a blog, aggregator, or opinion site. Every article must be verifiable, sourced, and written for real search intent.

Production: Railway → `objectwire.org` | Repo: `Autolab350/Objectwire-Frontend`

---

## OStandard — Always Enforced

Whenever writing or editing any article, component, Supabase record, or editorial copy, follow the full OStandard spec defined in `.github/skills/ostandard/SKILL.md`.

### Core rules (quick reference):

- **No em dashes (`—`) ever.** Use `|` in headings/titles. Use `,` in prose.
- **No en dashes (`–`) ever.** Use `-` or rewrite the sentence.
- **No `&` in H1/H2/H3 headings or article body prose.** Use `,` or rewrite. `&` is allowed in `metadata.title` and `openGraph.title` only.
- **Headings use `|`** as a separator, never `:` followed by a dependent clause.
- Subheadings must be niche and specific, not generic (`"Background"`, `"Overview"` are banned).
- Meta description: 130–155 chars, contains primary keyword, no generic phrases.
- `metadata.title` format: `Primary Keyword | Specific Detail` — **no brand suffix** (`| ObjectWire` is dropped). Max 60 chars. No em dashes. `&` allowed.
- Every article slug must be lowercase, hyphen-only, no stop words.
- `tags` must be an array of 4–8 real proper nouns (no generic terms).
- `category` must be one of: `News`, `Tech`, `Finance`, `Entertainment`, `World`, `Politics`, `Science`, `Sports`, `Culture`.
- `published_at` must be a full ISO-8601 timestamp (e.g. `2026-03-28T14:00:00Z`).

---

## Article Component Routing

Every article belongs to exactly one Supabase table. Use the correct component or you will query the wrong table:

| Component | Supabase Table | Use For |
|---|---|---|
| `NewsArticleDB` | `articles` | News, breaking, gaming, tech, features, analysis |
| `JackArticleDB` | `jack_articles` | Research reports, investigations, premium long-form |
| `ArticlePageDB` | `article_pages` | Profiles, wiki-style, evergreen reference guides |

**`jack_articles` has no `status` column.** Never query `status` from it.

All fetching is server-side. Zero client-side Supabase calls in page components. Every `page.tsx` must export `dynamic = 'force-dynamic'`.

---

## Gold Standard Article | `/entertainment/news/fortnite-moves-into-movies`

**This is the reference article all new `NewsArticle` pages must match.**

Live: `https://www.objectwire.org/entertainment/news/fortnite-moves-into-movies`
Slug: `entertainment-news-fortnite-moves-into-movies` | Table: `articles` | Component: `NewsArticleDB`

### Why it is the standard

1. **Layout** — 80/20 grid: main article body left (80%), `RelatedArticles` sticky sidebar right (20%)
2. **Related Articles sidebar** — auto-populated by `RelatedArticles` (client component). Queries `articles` by category, cross-ranks with the user's `localStorage` reading history tags. No manual curation needed. It just works.
3. **Animated thumbnail** — when there is no hero image, a `thumbnail_src` set in Supabase renders inside the gradient header with the "genie float" animation (golden flare sweep, subtle bob). This is the preferred header style for news/tech/gaming articles.
4. **Full engagement stack** — every article gets: `ReactionBar` (like/share/save), `DiscordComments`, `NewsletterSignupInline`, `ArticleViewTracker`, `TagsSection`, and an author card footer. These are automatic. Do not remove them.
5. **Metadata quality** — 18 targeted keywords, full `openGraph` block with `publishedTime` + `section`, `twitter` card, canonical URL.
6. **Content depth** — specific named figures (153 productions, 65% GDC stat, 44% YoY ICVFX growth), data tables, H2 headings with numbers and `|` separators, internal links to hub pages.

### `page.tsx` stub pattern (after `wiki:publish`)

```tsx
import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/your/path/here';

export const metadata: Metadata = {
  title: 'Primary Keyword | Specific Detail',  // max 60 chars, no brand suffix, no em dashes, no &
  description: '130-155 chars. Primary keyword in first 60 chars. No generic phrases.',
  keywords: ['keyword 1', 'keyword 2', /* 10-18 targeted keywords */],
  alternates: { canonical: `https://www.objectwire.org${SLUG}` },
  openGraph: {
    title: 'Article Title Without Brand Suffix',
    description: 'Slightly different from meta description — emphasize data/hook.',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['Author Name'],
    publishedTime: '2026-03-12T00:00:00Z',
    modifiedTime: '2026-03-12T00:00:00Z',
    section: 'Entertainment',   // matches category
    tags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Twitter-optimized headline (hook-first)',
    description: 'Data-led, punchy — one key stat or claim.',
  },
};

export default function YourPage() {
  return <NewsArticleDB slug="your-path-slug" />;
}
```

### Required `articles` Supabase fields

Every `NewsArticle` article must have ALL of these populated before `wiki:publish`:

| Field | Rule |
|---|---|
| `title` | Full headline. No em dashes. `|` for separators. |
| `subtitle` | One sentence. Data-led or hook-led. Ends without period. |
| `category` | Valid category value (see OStandard) |
| `status` | `'published'` |
| `breaking` / `trending` / `exclusive` | `true` only when genuinely applicable |
| `topic_tag` | One of the valid `TopicTagType` values (e.g. `"gaming"`, `"entertainment"`, `"ai"`) |
| `content_html` | Full HTML body wrapped in `<div class="prose prose-lg max-w-none">` |
| `publish_date` | Display string: `"March 12, 2026"` |
| `published_at` | ISO-8601: `2026-03-12T00:00:00Z` |
| `author_name` | Display name |
| `author_slug` | Kebab-case, links to `/authors/[slug]` |
| `read_time` | String, e.g. `"7 min read"` |
| `thumbnail_src` | Real hosted image URL — triggers the animated genie header |
| `thumbnail_alt` | Descriptive alt text for the thumbnail |
| `tags` | Array of 4-8 proper nouns |
| `url` | Full canonical path: `/entertainment/news/fortnite-moves-into-movies` |

---

## Slug Format Rules

- `app/california/my-article/page.tsx` → slug: `california-my-article`
- `app/trump/foo/page.tsx` → slug: `trump-foo`
- Slugs match the full path joined with dashes, no leading slash, all lowercase.
- The slug in `page.tsx` and the slug in the Supabase row must be identical.

---

## Publishing Workflows

**Workflow A — `wiki:publish` (default for ALL new article pages):**

Write the full `page.tsx` with real JSX content inside the correct component (`<ArticlePage>`, `<NewsArticle>`, `<JackArticle>`, `<CreatorArticle>`), then run:
```bash
npm run wiki:publish -- --file app/your/path/page.tsx
```
The script auto-detects the component, upserts to the correct Supabase table, adds a `content_registry` entry, and trims the file to a stub. One command does everything.

**Workflow B — content file → Supabase (for `articles` table only, news format):**
```bash
cp content/articles/_template.ts content/articles/[category]/your-slug.ts
# fill fields and content_html
npm run content:dry-run
npm run content:publish
```

**Workflow C — `/admin/editor` UI** — use only for quick edits or non-developer contributors.

**Workflow D — bulk sync (use with caution):**
```bash
npm run wiki:sync      # upserts all pages + deletes orphan Supabase rows
npm run wiki:status    # diagnostic: shows sync state across filesystem, registry, Supabase
```

### Critical rules
- **Never write a DB stub manually.** Always run `wiki:publish` on the full content file first.
- **Never use `<ArticlePageDB>` (or any `*DB` component) in a full content file.** The `*DB` variants are only for stubs after the script has run.
- Slug is derived automatically from the file path. Do not set it manually in the file.

---

## Required Article Fields (`articles` table)

Every new article must have these populated before publishing:

| Field | Rule |
|---|---|
| `slug` | Full path joined with dashes, no leading slash |
| `title` | Full headline, no em dashes |
| `category` | One of the valid category values (see OStandard) |
| `status` | `'published'` or `'draft'` |
| `content_html` | Full HTML body wrapped in `<div class="prose prose-lg max-w-none">` |
| `publish_date` | Display string: `"March 28, 2026"` |
| `published_at` | ISO-8601: `2026-03-28T14:00:00Z` |
| `author_name` | Display name |
| `author_slug` | Kebab-case, links to `/authors/[slug]` |
| `hero_image_src` | Real hosted image, min 1200px wide |
| `tags` | Array of 4-8 proper nouns |

After publishing, every article also needs a `content_registry` entry. Missing entry = invisible to Google (no sitemap, no JSON-LD, no Top Stories).

---

## SEO Article Requirements (Every Publish)

Every article that ships must have all of the following:

- `metadata.title` — keyword + brand (`"GTA 6 Release Date | ObjectWire"`)
- `metadata.description` — 130-155 chars, primary keyword in first 60 chars
- `canonical` URL set in `alternates`
- `openGraph` block with title, description, image (1200x675), `publishedTime`, `section`
- `NewsArticleSchema` component matching the `content_registry` entry exactly
- `SEOWrapper` wrapping the page, slug pointed at registry
- Breadcrumb at 3-4 levels
- H2 headings (one per major section, keyword-rich)
- 4-6 internal links to related ObjectWire pages
- `imageUrl`, `imageWidth`, `imageHeight` in the registry entry (required for Google Top Stories)

---

## SEO Growth Context

ObjectWire's current SEO state (March 2026): ~330 indexed pages, 25+ topic verticals, full structured-data pipeline (sitemap, news-sitemap, JSON-LD on every page). Growth target: 100K monthly organic sessions within 12 months.

**Priority content pillars and clusters to build or expand:**

| Pillar | Hub URL | Target Keyword |
|---|---|---|
| Gaming | `/video-games/gta-6` | "GTA 6" (5M+/mo) |
| Gaming | `/video-games/switch2` | "Nintendo Switch 2" (2M+/mo) |
| Tech / AI | `/open-ai` | "OpenAI" (3M+/mo) |
| Tech / AI | `/google` | "Google news" (2M+/mo) |
| Tech / AI | `/apple` | "Apple news" (1M+/mo) |
| Tech / AI | `/nvidia` | "Nvidia news" (800K+/mo) |
| Finance | `/finance` | "finance news" (500K+/mo) |
| Entertainment | `/entertainment` | streaming, studio deals |
| Seasonal | `/winter-olympics` | "2026 Winter Olympics" |
| Seasonal | `/world-cup` | "2026 World Cup" |

Sub-articles within a cluster must link to the hub, and the hub must link to all sub-articles. Internal linking is the highest-leverage SEO tactic.

---

## Editorial Principles

1. **Accuracy over speed** — verify before publishing, never chase breaking news without sourcing.
2. **Primary sources only** — cite origins, not aggregators. Every claim must be traceable.
3. **Transparent corrections** — errors corrected publicly, timestamped, original text preserved.
4. **Clear separation** — news vs. opinion labeled, sponsored content disclosed.
5. **Named authors** — all articles must have a byline with a valid `author_slug`.

---

## General Code Standards

- TypeScript strict mode is on — no `any` types without justification.
- All Supabase queries go through `lib/blog-service.ts` or `lib/supabase/`.
- Server components fetch data; client components handle interaction only.
- Never hardcode Supabase URLs or keys — use env vars (`NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`).
- Tailwind only — no inline `style={{}}` unless absolutely necessary.
- File names: kebab-case for pages/routes, PascalCase for components.
- `content_html` bodies must be wrapped in `<div class="prose prose-lg max-w-none">`.
- Blockquote footers use `, Name, Title` format — never start with `—`.

---

## Git / Deploy Rules

- **Never `git push` unless the user explicitly says to push.**
- **Never commit after every change.** Only commit when the user explicitly says to commit, or at the end of a writing session. Batch all changes into a single commit.
- Never deploy to Railway unless the user explicitly says "deploy" or "push to Railway".
