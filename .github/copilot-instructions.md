# ObjectWire Copilot Instructions

These rules apply to **every** GitHub Copilot request in this workspace.

---

## What ObjectWire Is

ObjectWire is a verified news platform built on Next.js 15, React 19, and Tailwind CSS. Article content is stored as on-prem static JSON files in `content/static/`. The editorial mission is accuracy over speed, primary sources only, and transparent corrections. It is not a blog, aggregator, or opinion site. Every article must be verifiable, sourced, and written for real search intent.

Production: Railway → `objectwire.org` | Repo: `Autolab350/Objectwire-Frontend`

---

## OStandard — Always Enforced

Whenever writing or editing any article, component, static JSON record, or editorial copy, follow the full OStandard spec defined in `.github/skills/ostandard/SKILL.md`.

### Core rules (quick reference):

- **No em dashes (`—`) EVER — anywhere.** Not in titles, headings, metadata, prose, JSX strings, Supabase fields, or code comments. Use `|` in headings. Use `,` in prose. Rewrite if needed. Non-negotiable and checked by the build guard.
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

### Em Dash Zero-Tolerance Reference

Never use `—`. Replace every instance with these substitutions:

| Context | Wrong | Correct |
|---|---|---|
| Heading separator | `Title — Subtitle` | `Title \| Subtitle` |
| Prose parenthetical | `The update — which ships Friday — adds X` | `The update, which ships Friday, adds X` |
| Prose break | `It launched — and immediately crashed` | `It launched, and immediately crashed` |
| Quote/attribution footer | `— Jack Sterling` | `, Jack Sterling` |
| OG/Twitter description | `New feature — here's what changed` | `New feature, here is what changed` |
| Article subtitle/description | `Record sales — 5M in 48h` | `Record sales, 5M in 48 hours` |

---

## Article Component Routing

Every article belongs to exactly one static JSON store. Use the correct component or you will read the wrong file:

| Component | Static JSON Store | Use For |
|---|---|---|
| `NewsArticleDB` | `content/static/articles/` | News, breaking, gaming, tech, features, analysis |
| `JackArticleDB` | `content/static/jack_articles/` | Research reports, investigations, premium long-form |
| `ArticlePageDB` | `content/static/article_pages/` | Profiles, wiki-style, evergreen reference guides |
| `CreatorArticleDB` | `content/static/creator_articles/` | Creator profiles, influencer features, athlete bios |
| `AlysaArticleDB` | `content/static/alysa_articles/` | Winter Olympics / athlete-specific legacy profiles |

All fetching is server-side. Every `page.tsx` must export `dynamic = 'force-dynamic'`.

---

## Gold Standard Article | `/entertainment/news/fortnite-moves-into-movies`

**This is the reference article all new `NewsArticle` pages must match.**

Live: `https://www.objectwire.org/entertainment/news/fortnite-moves-into-movies`
Slug: `entertainment-news-fortnite-moves-into-movies` | Store: `content/static/articles/` | Component: `NewsArticleDB`

### Why it is the standard

1. **Layout** — 80/20 grid: main article body left (80%), `RelatedArticles` sticky sidebar right (20%)
2. **Related Articles sidebar** — auto-populated by `RelatedArticles` (client component). Queries `articles` by category, cross-ranks with the user's `localStorage` reading history tags. No manual curation needed. It just works.
3. **Animated thumbnail** — when there is no hero image, a `thumbnail_src` set in the static JSON renders inside the gradient header with the "genie float" animation (golden flare sweep, subtle bob). This is the preferred header style for news/tech/gaming articles.
4. **Full engagement stack** — every article gets: `ReactionBar` (like/share/save), `DiscordComments`, `NewsletterSignupInline`, `ArticleViewTracker`, `TagsSection`, and an author card footer. These are automatic. Do not remove them.
5. **Metadata quality** — 18 targeted keywords, full `openGraph` block with `publishedTime` + `section`, `twitter` card, canonical URL.
6. **Content depth** — specific named figures (153 productions, 65% GDC stat, 44% YoY ICVFX growth), data tables, H2 headings with numbers and `|` separators, internal links to hub pages.
7. **Internal linking** — minimum 4 internal links per article. Must include: hub backlink, 2 cluster sibling links, 1 author page link. All links blue and underlined (see Interlinking Rules section).

### `page.tsx` stub pattern

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
    description: 'Slightly different from meta description, emphasize data/hook.',
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
    description: 'Data-led, punchy, one key stat or claim.',
  },
};

export default function YourPage() {
  return <NewsArticleDB slug="your-path-slug" />;
}
```

### Required `articles` static JSON fields

Every `NewsArticle` article must have ALL of these populated before publishing:

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
Slug: `crypto-news-anchorage-usat-expands-to-celo-network` | Store: `content/static/jack_articles/` | Component: `JackArticleDB`

### Why it is the standard

1. **Layout** — `layout="news"` with `accentColor` matched to topic (green for crypto/finance, blue for tech, orange for policy)
2. **Full sub-component stack** — every premium article uses: `JackStats`, `JackCardGrid`, `JackCard`, `JackCallout`, `JackSideBlock`, `JackProcess`, `JackIndicatorGrid`, `JackQuote`, `JackSection` (numbered)
3. **Timeline** — 5-7 item chronological `timeline` array showing the story arc
4. **Sources** — numbered `sources` array with real URLs. Every factual claim must be traceable.
5. **Related articles** — 4-6 manually curated `relatedArticles` with accurate `categoryColor`
6. **Author** — always `Jack Sterling` (slug: `jack-sterling`), department varies by beat
7. **Breadcrumbs** — 3 levels: hub, sub-hub, article
8. **Content depth** — specific named figures, percentages, dates. No vague claims.
9. **Internal linking** — minimum 5 internal links per JackArticle. Link to cluster hub, 2-3 related sub-articles, and 1 author page. External source links open in `_blank` with `rel="noopener noreferrer"`. All links blue and underlined.

### `page.tsx` stub pattern

```tsx
import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/JackArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/your/path/here';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
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

---

## Gold Standard CreatorArticle | `/influencer/ari-kytsya`

**This is the reference article all new `CreatorArticle` pages must match.**

Live: `https://www.objectwire.org/influencer/ari-kytsya`
Slug: `influencer-ari-kytsya` | Store: `content/static/creator_articles/` | Component: `CreatorArticleDB`

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
11. **Internal linking** — minimum 3 internal links per CreatorArticle. Social handle links in the infobox rows must use `<a href>` with `target="_blank" rel="noopener noreferrer"`. Body links to related profiles and hub pages must be blue and underlined.

### `page.tsx` stub pattern

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

### Required `creator_articles` static JSON fields

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
- The slug in `page.tsx` and the slug in the static JSON filename must be identical.

---

## Publishing Workflows

**All article content is stored on-prem as static JSON files in `content/static/`.** Do not write to Supabase for new articles. Supabase is used as a read fallback only for older or very large articles once they are pruned from the static store.

**Standard workflow for all new article pages:**

1. Write the `page.tsx` stub with full `metadata` and the correct `*DB` component pointing at the slug.
2. Write the static JSON content file directly at `content/static/{type}/{slug}.json`.
3. Update `content/static/{type}/_index.json` to include the new entry.
4. Add a `content_registry` entry (run `npm run wiki:sync` or add manually).

**`wiki:publish` is paused** — do not use it. Write stubs and static JSON manually using the gold standard patterns above.

**Admin editor UI** (`/admin/editor`) — use only for quick edits or non-developer contributors.

### Critical rules
- **Never use `<ArticlePageDB>` (or any `*DB` component) with a slug that has no matching static JSON file.** The page will 404.
- Slug must match the full route path joined with dashes, no leading slash, all lowercase. The `page.tsx` slug prop and the static JSON filename must be identical.
- Every new page must have a `content_registry` entry. Missing entry = invisible to Google (no sitemap, no JSON-LD, no Top Stories).
- Do not write Supabase rows for new articles. Static JSON is the source of truth.

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

## Interlinking Rules — Enforced on Every Article Type

Internal linking is mandatory on every publish. An article without proper internal links is incomplete, regardless of content quality.

### Minimum link counts

| Article Type | Min Internal Links | Min External Source Links |
|---|---|---|
| `NewsArticle` | 4 | 1 |
| `JackArticle` | 5 | 3 (numbered `sources` array) |
| `ArticlePage` / `WikiArticle` | 3 | 1 |
| `CreatorArticle` | 3 | 2 (social handles + official sources) |
| `AlysaArticle` | 3 | 1 |

### Required link types (all article types)

1. **Hub backlink** — every sub-article must link to its parent hub within the first 3 paragraphs. Example: `/video-games/gta-6/release-date` must link to `/video-games/gta-6`.
2. **Cluster cross-links** — link to 2-3 sibling articles in the same cluster.
3. **Author page link** — link to `/authors/[slug]` at least once per article if the author has a profile page.
4. **Pillar hub links** — on first mention of a priority topic (GTA 6, OpenAI, Nintendo Switch 2, etc.), link to the pillar hub.
5. **No orphan pages** — every new page must be linked from at least one existing page (hub, sibling article, or category index).

### Link styling — non-negotiable, applies everywhere

Every link in article prose must be blue and underlined. No exceptions.

```tsx
// Internal (Next.js Link)
<Link href="/video-games/gta-6" className="text-blue-600 hover:text-blue-800 underline">
  GTA 6 release date hub
</Link>

// External source / citation
<a
  href="https://source.com/article"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-600 hover:text-blue-800 underline"
>
  Reuters report
</a>

// Social handle (CreatorArticle infobox)
<a
  href="https://www.instagram.com/handle"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-600 hover:text-blue-800 underline"
>
  @handle
</a>
```

Never:
- Render linked text as unstyled or black (`text-gray-900`, `text-inherit`, or no class on an anchor)
- Use bare `<a href>` with no class inside JSX or `content_html`
- Omit `target="_blank" rel="noopener noreferrer"` on external links

### Links inside `content_html` (raw HTML stored in static JSON)

Use `class=` (not `className=`) in raw HTML strings. Embed the Tailwind classes directly:

```html
<!-- Internal -->
<a href="/video-games/gta-6" class="text-blue-600 hover:text-blue-800 underline">GTA 6 hub</a>

<!-- External source -->
<a href="https://source.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">original source</a>
```

The `prose` Tailwind class applies default link colors but they are overridden by dark mode. Always set explicit blue/underline classes so links look correct in both themes.

### Hub page linking checklist (run before committing a hub update)

- [ ] Hub links to every published sub-article in the cluster
- [ ] Each sub-article links back to the hub
- [ ] Hub is linked from its parent category index
- [ ] At least one recently published article in the cluster links sideways to 1-2 other cluster articles

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
- All static JSON reads go through the `loadStaticRow()` helpers in each `*DB` component.
- Server components fetch data; client components handle interaction only.
- Never hardcode Supabase URLs or keys — use env vars (`NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`) only for legacy read fallbacks.
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

This applies in all contexts:
- JSX in `.tsx` files
- Raw HTML strings in `content_html` static JSON fields (use `class=` not `className=` in raw HTML)
- `<CreatorSection>`, `<JackSection>`, `<WikiArticle>` body content
- Infobox `sidebar_infobox_rows` (social handle hrefs)
- Source citations and footnotes
- CTA buttons styled as links

See the **Interlinking Rules** section for per-article-type minimum link counts and placement requirements.

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

The homepage (`app/page.tsx`) sources articles from three static JSON stores via `lib/article-service.ts`:
- `content/static/articles/` — via `getAllArticles()`
- `content/static/creator_articles/` — via `getCreatorArticles()`
- `content/static/jack_articles/` — via `getJackArticles()` (added April 2, 2026)

All three are merged and sorted by `publishDate` before display. JackArticles appear on the homepage as long as their `article_url` field is populated with the canonical path.

---

## Git / Deploy Rules

- **Never `git push` unless the user explicitly says to push.**
- **Never commit after every change.** Only commit when the user explicitly says to commit, or at the end of a writing session. Batch all changes into a single commit.
- Never deploy to Railway unless the user explicitly says "deploy" or "push to Railway".

---

## SEO System Rules (Updated April 24, 2026)

These rules were added after a production canonical bug caused a major impressions drop on April 22, 2026.

### Canonical URL rules

- **Never add `<link rel="canonical">` to `app/layout.tsx` or any shared layout.** A hardcoded layout canonical overrides every page's self-canonical and tells Google all pages are duplicates of the homepage. This is what caused the April 2026 impressions cliff.
- Every `page.tsx` sets its own canonical via `metadata.alternates.canonical`. No exceptions.
- DB stubs (`*DB` components) must have `alternates: { canonical: ... }` in their exported `metadata` block.
- `generateArticleMetadata` from `@/lib/seo-utils` correctly outputs `alternates.canonical` when `canonicalUrl` is passed.
- `scripts/validate-canonicals.ts` runs at `prebuild` and fails the build if a hardcoded canonical is detected in any layout file.

### Public directory rules

- **Never place `robots.txt` or `sitemap.xml` in `/public`.** Next.js serves `/public` before App Router handlers, so a static file silently overrides the dynamic handler.
- `app/robots.ts` is the single source of truth for robots rules.
- `scripts/validate-public.ts` runs at `prebuild` and fails the build if `public/robots.txt` or `public/sitemap.xml` exist.
- Emergency override: `OBJECTWIRE_OVERRIDE=true npm run build`

### Schema / JSON-LD rules

- All URLs in JSON-LD must use `https://www.objectwire.org` (with www). Non-www URLs cause a canonical mismatch between schema and the canonical tag.
- Author fallback URL resolves to `/authors/[slug]`, not `/team/[slug]`.
- `lib/seo.ts` has been deleted. Do not recreate it. Use `@/lib/seo-utils` or `@/lib/generate-article-metadata`.

### Prebuild pipeline (runs before every `next build`)

1. `validate-public.ts` — blocks if conflicting static files exist in `/public`
2. `validate-canonicals.ts` — blocks if hardcoded canonical found in layouts; warns on missing page canonicals
3. `sync-registry.ts --write` — syncs `content_registry` with filesystem
