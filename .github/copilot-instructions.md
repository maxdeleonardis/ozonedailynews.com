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
- `category` must be one of: `News`, `Tech`, `Finance`, `Entertainment`, `World`, `Politics`, `Science`, `Sports`, `Culture`, `Crypto`, `Gaming`.
- `published_at` must be a full ISO-8601 timestamp (e.g. `2026-03-28T14:00:00Z`).

---

## Article Component Routing

Every article belongs to exactly one Supabase table. Use the correct component or you will query the wrong table:

| Component | Supabase Table | Use For |
|---|---|---|
| `NewsArticleDB` | `articles` | News, breaking, gaming, tech, features, analysis |
| `JackArticleDB` | `jack_articles` | Research reports, investigations, premium long-form |
| `ArticlePageDB` | `article_pages` | Profiles, wiki-style, evergreen reference guides |
| `CreatorArticleDB` | `creator_articles` | Creator profiles, influencer features, athlete bios |
| `AlysaArticleDB` | `alysa_articles` | Winter Olympics / athlete-specific legacy profiles |

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

## Gold Standard JackArticle | `/crypto/news/anchorage-usat-expands-to-celo-network`

**This is the reference article all new `JackArticle` pages must match.**

Live: `https://www.objectwire.org/crypto/news/anchorage-usat-expands-to-celo-network`
Slug: `crypto-news-anchorage-usat-expands-to-celo-network` | Table: `jack_articles` | Component: `JackArticleDB`

### Why it is the standard

1. **Layout** — `layout="news"` with `accentColor` matched to topic (green for crypto/finance, blue for tech, orange for policy)
2. **Full sub-component stack** — every premium article uses: `JackStats`, `JackCardGrid`, `JackCard`, `JackCallout`, `JackSideBlock`, `JackProcess`, `JackIndicatorGrid`, `JackQuote`, `JackSection` (numbered)
3. **Timeline** — 5-7 item chronological `timeline` array showing the story arc
4. **Sources** — numbered `sources` array with real URLs. Every factual claim must be traceable.
5. **Related articles** — 4-6 manually curated `relatedArticles` with accurate `categoryColor`
6. **Author** — always `Jack Sterling` (slug: `jack-sterling`), department varies by beat
7. **Breadcrumbs** — 3 levels: hub, sub-hub, article
8. **Content depth** — specific named figures, percentages, dates. No vague claims.

### `page.tsx` stub pattern (after `wiki:publish`)

```tsx
import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/JackArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/your/path/here';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // REQUIRED — wiki:publish removes this, add it back manually
const OG_IMAGE = 'https://www.objectwire.org/your-image.png';

export const metadata: Metadata = {
  title: 'Primary Keyword | Specific Detail',
  description: '130-155 chars. Primary keyword in first 60 chars.',
  keywords: ['keyword 1', /* 10-18 targeted */],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'OG Title',
    description: 'OG description',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-04-02T16:00:00Z',
    modifiedTime: '2026-04-02T16:00:00Z',
    section: 'Crypto',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Alt text' }],
    tags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
  },
  twitter: { card: 'summary_large_image', title: 'Twitter headline', description: 'Punchy stat.', images: [OG_IMAGE] },
};

export default function YourPage() {
  return <JackArticleDB slug="your-path-slug" />;
}
```

### CRITICAL | Post-`wiki:publish` ARTICLE_URL fix

`wiki:publish` **always removes** the `const ARTICLE_URL = ...` line from the stub but leaves `ARTICLE_URL` references in `metadata.alternates.canonical` and `metadata.openGraph.url`. **After every `wiki:publish` on a JackArticle, manually re-add:**

```ts
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
```

Place it immediately after the `const SLUG = ...` line. This applies to NewsArticle stubs too when they use `ARTICLE_URL`.

---

## Gold Standard CreatorArticle | `/influencer/ari-kytsya`

**This is the reference article all new `CreatorArticle` pages must match.**

Live: `https://www.objectwire.org/influencer/ari-kytsya`
Slug: `influencer-ari-kytsya` | Table: `creator_articles` | Component: `CreatorArticleDB`

### Why it is the standard

1. **Layout** — 2/3 article body + 1/3 sticky sidebar. The sidebar IS the Wikipedia-style infobox. No `RelatedArticles`.
2. **Wikipedia-style infobox** — sidebar portrait image with name/subtitle overlay, followed by a row table: Born, Nationality, Based in, Occupation, all social handles (linked with `href`), business email, agency, follower counts.
3. **Hero CTA buttons** — Instagram, TikTok, YouTube linked from the gradient header. Use `variant: 'secondary'` with emoji icons.
4. **Photo gallery mid-article** — `CreatorImageGallery` placed after the primary content sections, NOT at the top. Put it after the quote block.
5. **Keyword-rich H2s** — Every `CreatorSection heading` includes the subject's full name as primary keyword: `"Ari Kytsya TikTok | 5M Followers from Seattle"`, `"Ari Kytsya and Yung Gravy | Relationship"`. Generic headings like `"Background"` or `"Overview"` are banned.
6. **Full sub-component stack** — `CreatorSection`, `CreatorStat` (3 stats at top), `CreatorCalloutBox`, `CreatorQuote`, `CreatorImageGallery`, `CreatorTable`.
7. **Social links section** — a dedicated `CreatorSection` near the bottom lists all official accounts as `<a>` links + `CreatorTable` with platform, handle, followers, focus.
8. **Engagement footer** — `ArticleViewTracker` + `ArticleFooter` (like/save/share/Discord). No `NewsletterSignupInline`.
9. **15-18 keywords** — includes `[name] age`, `[name] age 2026`, `[name] Instagram`, `[name] TikTok`, `[name] real name`, `[name] 2026`, and topic variants like `notburnttoasthehe TikTok`.
10. **Article Info sidebar card** — below the infobox, a styled card shows Published, Updated, Author, Category in the same row style as the infobox.

### `page.tsx` stub pattern (after `wiki:publish`)

```tsx
import type { Metadata } from 'next';
import { CreatorArticleDB } from '@/components/CreatorArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/influencer/your-creator';
const PAGE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = '/influncer/yourCreator.jpg';  // local public file

export const metadata: Metadata = {
  title: 'Creator Name | Age, TikTok, Instagram, Bio 2026',  // max 60 chars
  description: '130-155 chars. Name + age + platforms + location. Primary keyword in first 60 chars.',
  keywords: [
    'Creator Name',
    'Creator Name age',
    'Creator Name age 2026',
    'Creator Name Instagram',
    'Creator Name TikTok',
    'Creator Name YouTube',
    'Creator Name biography',
    'Creator Name 2026',
    /* 15-18 total */
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Creator Name | Age, TikTok, Instagram & Bio 2026',
    description: 'Full profile: age, platforms, social handles, career history.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Influencer Desk'],
    section: 'Influencer',
    tags: ['Creator Name', 'Influencer', 'City', 'Platform'],
    publishedTime: '2026-04-02T12:00:00Z',
    modifiedTime: '2026-04-02T12:00:00Z',
    images: [{ url: `https://www.objectwire.org${IMAGE_URL}`, width: 1200, height: 675, alt: 'Creator Name portrait' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Creator Name | Platform Followers, Bio',
    description: 'Name, age, social handles, and creator career.',
  },
};

export default function InfluencerYourCreatorPage() {
  return <CreatorArticleDB slug="influencer-your-creator" />;
}
```

### Required `creator_articles` Supabase fields

| Field | Rule |
|---|---|
| `schema_title` | Full name + role, e.g. `"Ari Kytsya | Seattle Model, Influencer & Creator Profile"` |
| `schema_description` | 130-155 chars, name first, platforms + location |
| `schema_author` | `"ObjectWire Influencer Desk"` |
| `schema_article_url` | Full canonical URL |
| `schema_image_url` | Full URL to portrait image (`https://www.objectwire.org/influncer/...`) |
| `schema_section` | `"Influencer"` |
| `schema_keywords` | Array of 15-18 terms matching `page.tsx` keywords |
| `schema_published_time` | ISO-8601 |
| `schema_modified_time` | ISO-8601 |
| `breadcrumbs` | Array: Home → Influencer → Creator Name |
| `hero_image_src` | Local public path (`/influncer/ariK.jpg`) |
| `hero_image_alt` | Descriptive alt text |
| `hero_gradient` | CSS gradient string matching creator brand colors |
| `hero_name` | Display name |
| `hero_subtitle` | Short role line, e.g. `"Model, Influencer, Creator"` |
| `hero_description` | 2-3 sentence bio for the gradient header |
| `hero_badges` | Array: `{ label: 'Seattle', style: 'default' }` etc. |
| `hero_cta_buttons` | Array: `{ href, label, icon, variant: 'secondary' }` for each social platform |
| `sidebar_infobox_image_src` | Same as `hero_image_src` |
| `sidebar_infobox_name` | Display name |
| `sidebar_infobox_subtitle` | Role subtitle |
| `sidebar_infobox_rows` | Wikipedia-style rows: Born, Nationality, Based in, Occupation, social handles (with `href`), business email, follower counts |
| `sidebar_meta_published_date` | Display string: `"April 2, 2026"` |
| `sidebar_meta_updated_date` | Display string or omit |
| `sidebar_meta_author` | `"ObjectWire Influencer Desk"` |
| `sidebar_meta_category` | `"Influencer"` |
| `content_html` | Full component-tagged HTML — see section order below |

### `content_html` section order (gold standard)

1. `<CreatorSection heading="Who Is [Name]">` — 2-paragraph bio
2. `<div>` with 3 `<CreatorStat>` cards (primary platform followers, secondary platform, age)
3. `<CreatorSection heading="[Name] [Platform] | Followers + City">` — platform origin story
4. `<CreatorSection heading="[Name] Content | Topic, Topic, Topic">` — content style
5. `<CreatorCalloutBox heading="Content Categories">` — labeled list
6. `<CreatorSection heading="[Name] [Monetization] | Dual-Platform Model">` — platform economics
7. `<CreatorQuote>` — direct quote with attribution
8. `<CreatorImageGallery>` — 2-3 photos with captions (**here, not at the top**)
9. Notable event sections (lecture, relationship, incident) — one `CreatorSection` each
10. `<CreatorCalloutBox>` for safety / controversy context (color `"red"` if serious)
11. `<CreatorSection heading="[Name] Social Media | Official Accounts 2026">` with `<ul>` of linked handles
12. `<CreatorSection heading="[Name] Social Media Accounts | 2026 Follower Counts">` + `<CreatorTable>`
13. `<CreatorSection heading="[Name] 2026 | Creator Profile Summary">` — closing context

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
- **After every `wiki:publish`, check the stub for `ARTICLE_URL` references.** The trimmer removes the `const` but leaves usages. Re-add `const ARTICLE_URL = \`https://www.objectwire.org${SLUG}\`` after the SLUG line.

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

### Internal Link Styling

All `<Link>` elements (internal) and `<a>` elements (external) inside article body prose must use blue anchor styling matching the browser default hyperlink appearance:
```tsx
<Link href="/path" className="text-blue-600 hover:text-blue-800 underline">anchor text</Link>
<a href="https://external.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">external text</a>
```
Never render internal or external links as unstyled black text. Every hyperlink in article prose must be visually distinguishable — blue, underlined, matching the standard browser default.

### Data Tables in Articles

Use `<PrismTable>` from `@/components/PrismTable` instead of raw HTML `<table>` elements inside article prose. PrismTable is 2-column (label, description). For the label column, combine title + subtitle using JSX. Available accents: `purple`, `blue`, `red`, `green`, `orange`, `cyan`, `yellow`.

```tsx
import { PrismTable } from '@/components/PrismTable';

<PrismTable
  accent="blue"
  headers={['Feature', 'Description']}
  rows={[
    ['Row label', 'Row description text'],
    [<><span className="block font-black">Title</span><span className="block text-xs">Subtitle</span></>, 'Description'],
  ]}
  caption="Optional caption below table"
/>
```

Raw `<table>` is acceptable only inside `<JackSection>` sub-components within JackArticles where PrismTable layout conflicts with the JackArticle column width.

### Homepage Article Pipeline

The homepage (`app/page.tsx`) sources articles from three Supabase tables via `lib/article-service.ts`:
- `articles` — via `getAllArticles()`
- `creator_articles` — via `getCreatorArticles()`
- `jack_articles` — via `getJackArticles()` (added April 2, 2026)

All three are merged and sorted by `publishDate` before display. JackArticles appear on the homepage as long as their `article_url` field is populated with the canonical path.

---

## Git / Deploy Rules

- **Never `git push` unless the user explicitly says to push.**
- **Never commit after every change.** Only commit when the user explicitly says to commit, or at the end of a writing session. Batch all changes into a single commit.
- Never deploy to Railway unless the user explicitly says "deploy" or "push to Railway".
