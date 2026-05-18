# What to Write Next and How

> Last updated: April 2, 2026

---

## Highest-Priority Content Gaps

| Priority | Topic | Hub | Search Volume | What's Needed |
|---|---|---|---|---|
| **P1** | **GTA 6** cluster | `/video-games/gta-6` | 5M+/mo | Pre-orders, PC release, system requirements, map details, characters, online features |
| **P1** | **Nintendo Switch 2** cluster | `/video-games/switch2` | 2M+/mo | Specs, launch games, price, backward compatibility, Joy-Con features |
| **P1** | **OpenAI / GPT-5** | `/open-ai` | 3M+/mo | GPT-5 pricing, o1 model updates, government partnerships, enterprise deals (only 3 pages exist) |
| **P1** | **Google Gemini** | `/google` | 2M+/mo | Gemini 3.0, Pixel 11, Project Genie, AI Plus subscription (only 3 pages exist) |
| **P2** | **Nvidia** | `/nvidia` | 800K+/mo | RTX 5090 specs, GTC announcements, CUDA updates, enterprise partnerships (only 2 pages) |
| **P2** | **Apple WWDC 2026** | `/apple` | 1M+/mo | WWDC 2026 preview, iPhone 18 rumors, Core AI framework, M5 MacBook (11 pages, good base) |
| **P2** | **Finance** | `/finance` | 500K+/mo | Fed rate decisions, bank earnings, crypto regulation, market index moves (underpopulated) |
| **P2** | **Entertainment** | `/entertainment` | Seasonal | Streaming subscriber reports, studio deals, Disney/Warner announcements, awards coverage |
| **P3** | **2026 Winter Olympics** | `/winter-olympics` | Seasonal | Athlete profiles, event updates, medal counts, team coverage (32 pages, strong base) |
| **P3** | **2026 World Cup** | `/world-cup` | Seasonal | Team rosters, match previews, qualifying news, historical stats |

---

## Quick Wins Before Writing New Articles

| Action | Impact | Effort |
|---|---|---|
| Fix registry images for top 50 articles | Unlocks **Google Top Stories** (2-3x CTR boost) | 1-2 days |
| Category consolidation (Tech vs Technology, Gaming vs Video Games) | Improves topical signal to Google | 1 day |
| Rewrite generic meta descriptions for top 30 articles by traffic | Better CTR in search results | 1-2 days |
| Populate thin hub pages (`/social/meta`, `/nvidia`, `/google`) | Establishes topical authority | Ongoing |

---

## Available Article Components and Templates

### Component Reference

| Component | Supabase Table | Best For | Visual Style |
|---|---|---|---|
| `NewsArticleDB` | `articles` | News, breaking, gaming, tech, analysis, features | 80/20 grid layout. Article body left (80%), sticky `RelatedArticles` sidebar right (20%). Animated genie thumbnail header with gradient when no hero image. Full engagement stack: `ReactionBar`, `DiscordComments`, `NewsletterSignupInline`, `ArticleViewTracker`, `TagsSection`, author card. |
| `JackArticleDB` | `jack_articles` | Premium investigations, research reports, strategic deep-dives | Dual-layout: `layout="report"` (monochrome, serif, full-width) or `layout="news"` (hero + sidebar). Rich sub-components: `JackCallout`, `JackCard`, `JackCardGrid`, `JackIndicatorGrid`, `JackSideBlock`, `JackSection`, `JackStats`, `JackProcess`, `JackQuote`, `JackImage`, `JackVideo`, `JackTimeline`. No `status` column. |
| `ArticlePageDB` | `article_pages` | Wiki-style reference, company profiles, evergreen indexes, biographical entries | Infobox sidebar (left) + sticky table of contents + main article body. Supports `infoBox` sections, `tableOfContents[]`, `relatedLinks[]`, `backLink`. Best for pages updated regularly. |
| `CreatorArticleDB` / `AlysaArticleDB` | `creator_articles` / `alysa_articles` | Athlete profiles, influencer bios, founder/artist biographies | Hero banner + 2/3 article body + 1/3 sticky sidebar. Rich data: `sidebar_infobox_rows[]`, `sidebar_callout`, `sidebar_timeline`, `CreatorTable[]`, `CreatorCalloutBox`, `CreatorQuote`, `CreatorTikTok` embeds, `CreatorStat` cards. |

### When to Use Which Component

| Scenario | Component | Table |
|---|---|---|
| Daily news, breaking stories, trending analysis | `NewsArticleDB` | `articles` |
| Deep investigation or premium research report | `JackArticleDB` | `jack_articles` |
| Wiki entry, company profile, evergreen reference | `ArticlePageDB` | `article_pages` |
| Athlete/creator biography, influencer profile | `CreatorArticleDB` or `AlysaArticleDB` | `creator_articles` / `alysa_articles` |

### Starter Templates

- `templates/news-article-template.tsx` | Copy for any `NewsArticle` page
- `content/articles/_template.ts` | Content file workflow (alternative to `wiki:publish`)

---

## Gold Standard Article

**Reference**: `/entertainment/news/fortnite-moves-into-movies`

All new `NewsArticle` pages must match this standard:

1. **Layout**: 80/20 grid, main body left, `RelatedArticles` sticky sidebar right
2. **Animated thumbnail**: `thumbnail_src` in Supabase renders with "genie float" animation (golden flare sweep, subtle bob)
3. **Full engagement stack**: `ReactionBar`, `DiscordComments`, `NewsletterSignupInline`, `ArticleViewTracker`, `TagsSection`, author card
4. **Metadata quality**: 18 targeted keywords, full `openGraph` block with `publishedTime` + `section`, `twitter` card, canonical URL
5. **Content depth**: Named figures, data tables, H2 headings with numbers and `|` separators, internal links to hub pages

---

## Publishing Workflows

### Workflow A | `wiki:publish` (Default for ALL new article pages)

Write the full `page.tsx` with real JSX content inside the correct component, then run:

```bash
npm run wiki:publish -- --file app/your/path/page.tsx
```

The script auto-detects the component, upserts to the correct Supabase table, adds a `content_registry` entry, and trims the file to a stub. One command does everything.

### Workflow B | Content file to Supabase (for `articles` table only)

```bash
cp content/articles/_template.ts content/articles/[category]/your-slug.ts
# fill fields and content_html
npm run content:dry-run
npm run content:publish
```

### Workflow C | `/admin/editor` UI

Use only for quick edits or non-developer contributors.

### Workflow D | Bulk sync (use with caution)

```bash
npm run wiki:sync      # upserts all pages + deletes orphan Supabase rows
npm run wiki:status    # diagnostic: shows sync state across filesystem, registry, Supabase
```

### Critical Publishing Rules

- **Never write a DB stub manually.** Always run `wiki:publish` on the full content file first.
- **Never use `<ArticlePageDB>` (or any `*DB` component) in a full content file.** `*DB` variants are only for stubs after the script has run.
- Slug is derived automatically from the file path. Do not set it manually.

---

## `page.tsx` Stub Pattern (After `wiki:publish`)

```tsx
import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/your/path/here';

export const metadata: Metadata = {
  title: 'Primary Keyword | Specific Detail',  // max 60 chars, no brand suffix, no em dashes
  description: '130-155 chars. Primary keyword in first 60 chars. No generic phrases.',
  keywords: ['keyword 1', 'keyword 2', /* 10-18 targeted keywords */],
  alternates: { canonical: `https://www.OzoneNews.org${SLUG}` },
  openGraph: {
    title: 'Article Title Without Brand Suffix',
    description: 'Slightly different from meta description, emphasize data/hook.',
    type: 'article',
    url: `https://www.OzoneNews.org${SLUG}`,
    siteName: 'OzoneNews',
    authors: ['Author Name'],
    publishedTime: '2026-03-12T00:00:00Z',
    modifiedTime: '2026-03-12T00:00:00Z',
    section: 'Entertainment',
    tags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Twitter-optimized headline (hook-first)',
    description: 'Data-led, punchy, one key stat or claim.',
  },
};

export default function YourPage() {
  return <NewsArticleDB slug="your-path-slug" />;
}
```

---

## Required Supabase Fields (`articles` table)

Every `NewsArticle` must have ALL of these populated before publishing:

| Field | Rule |
|---|---|
| `slug` | Full path joined with dashes, no leading slash |
| `title` | Full headline. No em dashes. `\|` for separators. |
| `subtitle` | One sentence. Data-led or hook-led. No ending period. |
| `category` | One of: `News`, `Tech`, `Finance`, `Entertainment`, `World`, `Politics`, `Science`, `Sports`, `Culture` |
| `status` | `'published'` |
| `breaking` / `trending` / `exclusive` | `true` only when genuinely applicable |
| `topic_tag` | One of: `technology`, `news`, `finance`, `sports`, `entertainment`, `gaming`, `crypto`, `ai`, `automotive`, `education`, `culture` |
| `content_html` | Full HTML body wrapped in `<div class="prose prose-lg max-w-none">` |
| `publish_date` | Display string: `"March 12, 2026"` |
| `published_at` | ISO-8601: `2026-03-12T00:00:00Z` |
| `author_name` | Display name |
| `author_slug` | Kebab-case, links to `/authors/[slug]` |
| `read_time` | String, e.g. `"7 min read"` |
| `thumbnail_src` | Real hosted image URL, triggers the animated genie header |
| `thumbnail_alt` | Descriptive alt text for the thumbnail |
| `hero_image_src` | Real hosted image, min 1200px wide |
| `tags` | Array of 4-8 proper nouns |
| `url` | Full canonical path: `/entertainment/news/fortnite-moves-into-movies` |

---

## SEO Checklist (Every Article)

### In `page.tsx` metadata export

- [ ] Title: 60 chars max, primary keyword first, no brand suffix, no em dashes, no `&`
- [ ] Description: 130-155 chars, keyword in first 60 chars, no generic phrases
- [ ] Canonical URL set in `alternates`
- [ ] `openGraph` with title, description, image (1200x675), `publishedTime`, `section`
- [ ] `twitter` card settings

### In Supabase content registry

- [ ] Slug matches file path
- [ ] `imageUrl` (hosted on OzoneNews.org or Supabase, min 1200px wide)
- [ ] `imageWidth: 1200`, `imageHeight: 675`
- [ ] `imageAlt` (descriptive)
- [ ] Description (unique, 130-155 chars, keyword-forward)
- [ ] `tags: []` (4-8 proper nouns, no generic terms)
- [ ] `category` (valid OStandard category)
- [ ] `authorSlug` (links to `/authors/[slug]`)

### In article body

- [ ] Wrapped in `<div class="prose prose-lg max-w-none">`
- [ ] H2 headings (one per major section, keyword-rich, specific not generic)
- [ ] 4-6 internal links to related OzoneNews articles
- [ ] `NewsArticleSchema` component
- [ ] Blockquote footers: `, Name, Title` (never start with em dash)
- [ ] Breadcrumb at 3-4 levels
- [ ] Hero image (1200x675 min) OR animated thumbnail

---

## OStandard Quick Reference

- **No em dashes (`—`) ever.** Use `|` in headings/titles. Use `,` in prose.
- **No en dashes (`–`) ever.** Use `-` or rewrite.
- **No `&` in H1/H2/H3 or article prose.** Use `,` or rewrite. `&` allowed only in `metadata.title` and `openGraph.title`.
- **Headings use `|`** as separator, never `:` followed by a dependent clause.
- Subheadings must be niche-specific, not generic (`"Background"`, `"Overview"` are banned).
- `metadata.title` format: `Primary Keyword | Specific Detail` (max 60 chars, no brand suffix)
- Slugs: lowercase, hyphen-only, no stop words
- `tags`: array of 4-8 real proper nouns
- `published_at`: full ISO-8601 timestamp

---

## Hub + Cluster Architecture

Each pillar needs a **hub page** + **5-7 sub-articles**:

- **Hub page** (e.g., `/video-games/gta-6`) lists all sub-articles, provides overview
- **Sub-articles** each link back to hub + cross-link to sibling articles
- **Internal linking** auto-populated by `RelatedArticles` component (matches `tags[]` in registry)

### Top 5 Clusters to Complete by End of Q2 2026

1. **GTA 6** | 7 sub-articles (price, PC specs, map, characters, online, pre-orders, system requirements)
2. **Forza Horizon 6** | 5 sub-articles (car list, map, editions, race types, PC specs)
3. **Nintendo Switch 2** | 5 sub-articles (specs, launch games, price, backward compat, Joy-Con)
4. **OpenAI** | 4 sub-articles (GPT-5 pricing, o1 updates, partnerships, enterprise)
5. **Google** | 4 sub-articles (Gemini 3.0, Pixel 11, AI Plus, Agentic vision)

---

## Existing Coverage Summary

| Section | Pages | Hub | Status |
|---|---|---|---|
| Winter Olympics | 32 | `/winter-olympics` | Strong seasonal driver. Athlete profiles via `CreatorArticle`. |
| Video Games | 28 | `/video-games` | GTA 6, Fortnite, Nintendo. Gaps: Forza 6, Switch 2. |
| YouTube | 25 | `/youtube` | Profile-heavy, low search intent. Convert to reviews/analysis. |
| News | 24 | `/news` | Breaking stories. Needs topic splitting. |
| Tech (combined) | 54 | `/tech`, `/open-ai`, `/google`, `/apple`, `/nvidia` | Scattered. Big gaps: OpenAI hub, Google/Nvidia coverage. |
| Apple | 11 | `/apple` | Good coverage. Missing WWDC 2026 preview. |
| Google | 3 | `/google` | **Needs expansion.** |
| Nvidia | 2 | `/nvidia` | **Needs expansion.** |
| OpenAI | 3 | `/open-ai` | **Needs expansion.** |

---

## Recommended First Article

**GTA 6 System Requirements** (`/video-games/gta-6/system-requirements/page.tsx`)

- Uses `NewsArticleDB` (most battle-tested component)
- Targets highest-volume keyword cluster (5M+/mo)
- Links back to GTA 6 hub, cross-links to other GTA 6 sub-articles
- Template: copy `templates/news-article-template.tsx`
- Publish: `npm run wiki:publish -- --file app/video-games/gta-6/system-requirements/page.tsx`
