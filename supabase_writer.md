# Supabase Article Writer — Full Process Guide

How to write an article in code and sync it to Supabase so it renders live via one of the three DB-backed components.

---

## Overview

ObjectWire has three article display components, each backed by its own Supabase table:

| Component | Table | Use Case |
|---|---|---|
| `NewsArticle` → `NewsArticleDB` | `articles` | News stories, features, gaming, tech, breaking news |
| `JackArticle` → `JackArticleDB` | `jack_articles` | Research reports, investigations, long-form CME-style pieces |
| `ArticlePage` → `ArticlePageDB` | `article_pages` | Profile pages, evergreen guides, author bios, info-box-heavy pages |

The flow is always the same:

```
Write article inline in page.tsx
        ↓
Extract content_html (the JSX body rendered as HTML string)
        ↓
Build an INSERT object matching the table schema
        ↓
Run the INSERT via Supabase Dashboard SQL editor or a seed script
        ↓
Swap the inline page.tsx to a 3-line DB stub using the *DB component
```

---

## Step 1 — Identify Which Component to Use

### Use `NewsArticleDB` when the page imports `NewsArticle` and has:
- `publishDate`, `category`, `author` fields at the top of `<NewsArticle>`
- Inline JSX children that are news-style paragraphs, `<HighlightBox>`, tables
- Example: `/fortnite/epic-games-vbucks-shrinkflation-chapter-7-season-2-2026`

### Use `JackArticleDB` when the page imports `JackArticle` and has:
- `layout="report"` or `layout="news"`
- Optional `timeline`, `documents`, `sources`, `relatedArticles` sidebar arrays
- Example: research deep-dives, greenland-style investigations

### Use `ArticlePageDB` when the page imports `ArticlePage` and has:
- An `<InfoBox>` sidebar and `<TableOfContents>`
- `relatedLinks` and `backLink` navigation
- Example: `/influencer/daddywellness`, author profile pages

---

## Step 2 — Extract the `content_html` String

The `content_html` column stores the article body as a raw HTML string. Two ways to get it:

### Option A — Manual copy from inline JSX (small articles)

Take the JSX inside `<NewsArticle>...</NewsArticle>` and convert it to HTML:
- Remove all `{' '}` spacing expressions
- Replace `<strong>` → `<strong>`, `<em>` → `<em>` (already HTML)
- Replace `<Link href="...">` → `<a href="...">`
- Replace custom components like `<HighlightBox>` or `<Section>` with semantic HTML equivalents (`<blockquote>`, `<section>`, `<div>`)
- Self-closing JSX attributes: `<img src="..." />` → `<img src="..." />`

> Tip: For short articles, you can paste the JSX body into an HTML formatter or just write it directly as clean HTML.

### Option B — Use a seed script (batch articles)

See [Step 5 — Batch Seed Script](#step-5--batch-seed-script) below.

---

## Step 3A — INSERT into `articles` (NewsArticle)

### Table: `articles`

Full column reference:

| Column | Type | Required | Notes |
|---|---|---|---|
| `slug` | TEXT | ✅ | URL path slug e.g. `epic-games-vbucks-shrinkflation-chapter-7-season-2-2026` |
| `title` | TEXT | ✅ | Full article headline |
| `subtitle` | TEXT | — | Deck / subheadline below the title |
| `category` | TEXT | ✅ | e.g. `Gaming`, `Tech`, `Finance` |
| `category_color` | TEXT | — | `red` `blue` `green` `purple` `orange` `pink` `yellow` |
| `topic_tag` | TEXT | — | `technology` `news` `finance` `sports` `entertainment` `lifestyle` `investigations` `world` `politics` `science` `gaming` `crypto` `ai` `automotive` `education` `culture` |
| `publish_date` | TEXT | ✅ | Display string — `"March 18, 2026"` |
| `published_at` | TIMESTAMPTZ | — | ISO for sorting — `2026-03-18T18:00:00Z` |
| `read_time` | TEXT | — | `"6 min read"` |
| `author_name` | TEXT | — | `"Conan Boyle"` |
| `author_role` | TEXT | — | `"Gaming Reporter"` |
| `author_avatar` | TEXT | — | Image path e.g. `/authors/conan-boyle.jpg` |
| `author_twitter` | TEXT | — | `"@conanboyle"` |
| `author_slug` | TEXT | — | `"conan-boyle"` → links to `/authors/conan-boyle` |
| `author_bio` | TEXT | — | Short bio sentence |
| `hero_image_src` | TEXT | — | `/fortnite/fortnite-vbucks.jpg` |
| `hero_image_alt` | TEXT | — | Alt text for hero image |
| `hero_image_caption` | TEXT | — | Caption displayed below hero |
| `hero_image_credit` | TEXT | — | Photo credit |
| `thumbnail_src` | TEXT | — | Card thumbnail image path |
| `thumbnail_alt` | TEXT | — | Thumbnail alt text |
| `tags` | TEXT[] | — | `ARRAY['Fortnite','Epic Games','V-Bucks']` |
| `trending` | BOOLEAN | — | Default `false` |
| `breaking` | BOOLEAN | — | Default `false` |
| `exclusive` | BOOLEAN | — | Default `false` |
| `url` | TEXT | — | Full page path `/fortnite/epic-games-vbucks-...` |
| `content_html` | TEXT | ✅ | Full article body as HTML string |

### Example SQL INSERT (NewsArticle)

```sql
INSERT INTO articles (
  slug,
  title,
  subtitle,
  category,
  category_color,
  topic_tag,
  publish_date,
  published_at,
  read_time,
  author_name,
  author_role,
  author_slug,
  author_bio,
  tags,
  trending,
  breaking,
  exclusive,
  url,
  content_html
) VALUES (
  'epic-games-vbucks-shrinkflation-chapter-7-season-2-2026',

  'Epic Games Implements Fortnite ''Shrinkflation'' as V-Bucks Purchasing Power Drops 20–25%',

  'Same price. Fewer bucks. Epic cuts V-Bucks quantities across every bundle as Fortnite Chapter 7 Season 2 launches.',

  'Gaming',
  'purple',
  'gaming',
  'March 18, 2026',
  '2026-03-18T18:00:00Z',
  '6 min read',
  'Conan Boyle',
  'Gaming Reporter',
  'conan-boyle',
  'Conan Boyle is ObjectWire''s founding writer, covering gaming, technology, and emerging culture from Austin, Texas.',

  ARRAY['Fortnite', 'Epic Games', 'V-Bucks', 'Shrinkflation', 'Chapter 7 Season 2', 'Battle Pass', 'Free-to-Play'],

  false,
  false,
  false,

  '/fortnite/epic-games-vbucks-shrinkflation-chapter-7-season-2-2026',

  '<p><strong>Epic Games</strong> has quietly executed the largest single cut to <strong>Fortnite''s</strong> in-game currency since V-Bucks launched in 2017. Effective <strong>March 19, 2026</strong> — the same day as the Fortnite <strong>Chapter 7 Season 2</strong> rollout — every standard V-Bucks bundle now delivers fewer bucks for the same dollar price.</p>
<p>The flagship entry-level pack — $8.99 for 1,000 V-Bucks — now delivers <strong>800 V-Bucks</strong>, a 20% reduction.</p>
<h2>Pack-by-Pack Breakdown</h2>
<table>
  <thead><tr><th>Price</th><th>Before</th><th>After</th><th>Change</th></tr></thead>
  <tbody>
    <tr><td>$8.99</td><td>1,000 V-Bucks</td><td>800 V-Bucks</td><td>−20%</td></tr>
    <tr><td>$22.99</td><td>2,800 V-Bucks</td><td>2,400 V-Bucks</td><td>−14.3%</td></tr>
    <tr><td>$89.99</td><td>13,500 V-Bucks</td><td>12,500 V-Bucks</td><td>−7.4%</td></tr>
  </tbody>
</table>'
);
```

> **Note on single quotes in SQL**: Escape apostrophes by doubling them — `Fortnite''s`, `ObjectWire''s`.

---

## Step 3B — INSERT into `jack_articles` (JackArticle)

### Table: `jack_articles`

Full column reference:

| Column | Type | Notes |
|---|---|---|
| `slug` | TEXT | ✅ Unique route slug |
| `layout` | TEXT | `'report'` (default) or `'news'` |
| `title` | TEXT | ✅ |
| `subtitle` | TEXT | Deck text |
| `subject` | TEXT | Thick left-bar label (report layout) |
| `description` | TEXT | Meta description for SEO |
| `category_label` | TEXT | Single label, e.g. `"Finance"` |
| `categories` | JSONB | `[{"label":"Finance","color":"green"}]` |
| `publish_date` | TEXT | Display string `"February 1, 2026"` |
| `publish_date_iso` | TIMESTAMPTZ | ISO datetime for sorting |
| `modified_date_iso` | TIMESTAMPTZ | For `<lastmod>` in sitemap |
| `read_time` | TEXT | `"12 min read"` |
| `hero_image` | JSONB | `{"src":"...","alt":"...","caption":"...","credit":"..."}` |
| `breadcrumbs` | JSONB | `[{"href":"/finance","label":"Finance"}]` |
| `author` | JSONB | `{"name":"...","slug":"...","avatar":"...","initials":"...","department":"...","url":"..."}` |
| `content_html` | TEXT | ✅ Article body HTML |
| `related_articles` | JSONB | `[{"href":"...","category":"...","categoryColor":"green","title":"..."}]` |
| `timeline` | JSONB | `[{"date":"Jan 2026","description":"Event happened","highlight":true}]` |
| `documents` | JSONB | `[{"href":"...","label":"Source PDF","icon":"pdf"}]` |
| `show_newsletter` | BOOLEAN | Default `false` |
| `newsletter_title` | TEXT | — |
| `newsletter_description` | TEXT | — |
| `sources` | JSONB | `[{"number":1,"url":"...","title":"...","description":"..."}]` |
| `show_corrections` | BOOLEAN | Default `true` |
| `show_editorial_standards` | BOOLEAN | Default `true` |
| `footer_tagline` | TEXT | — |
| `footer_links` | JSONB | `[{"href":"/finance","label":"Research Archive"}]` |
| `accent_color` | TEXT | `gray` `blue` `green` `orange` `red` `purple` `black` |
| `article_url` | TEXT | Canonical URL |
| `section` | TEXT | e.g. `"Finance"` |
| `keywords` | TEXT[] | `ARRAY['keyword1','keyword2']` |
| `uuid` | TEXT | Stable public UUID |
| `version` | TEXT | `"1.2"` |

### Example SQL INSERT (JackArticle)

```sql
INSERT INTO jack_articles (
  slug,
  layout,
  title,
  subtitle,
  subject,
  description,
  category_label,
  categories,
  publish_date,
  publish_date_iso,
  read_time,
  hero_image,
  author,
  related_articles,
  timeline,
  sources,
  accent_color,
  article_url,
  section,
  keywords,
  content_html
) VALUES (
  'greenland-acquisition-trump-2026',
  'report',
  'The Greenland Acquisition: A Full Strategic Analysis',
  'How the Trump administration''s push for Greenland reshaped Arctic geopolitics in 2026.',
  'GEOPOLITICS',
  'A research-grade breakdown of the 2026 Greenland acquisition effort, covering legal framework, NATO implications, and Danish response.',
  'Geopolitics',
  '[{"label":"Geopolitics","color":"blue"},{"label":"Arctic","color":"gray"}]',
  'March 1, 2026',
  '2026-03-01T09:00:00Z',
  '18 min read',
  '{"src":"/world/greenland-arctic.jpg","alt":"Aerial view of Greenland coastline","caption":"Greenland''s northwest coast, March 2026","credit":"NASA/MODIS"}',
  '{"name":"Jack Monroe","slug":"jack-monroe","initials":"JM","department":"Investigations","url":"/authors/jack-monroe"}',
  '[{"href":"/world/trump-nato-2026","category":"Politics","categoryColor":"blue","title":"Trump''s NATO Ultimatum Explained"}]',
  '[{"date":"January 2025","description":"Trump publicly revives Greenland acquisition rhetoric during transition period.","highlight":false},{"date":"March 2026","description":"Formal diplomatic overtures to Copenhagen confirmed.","highlight":true}]',
  '[{"number":1,"url":"https://www.state.gov/greenland","title":"U.S. State Department Arctic Policy","description":"Official policy statement on Arctic territorial interests."}]',
  'blue',
  'https://www.objectwire.org/world/greenland-acquisition-trump-2026',
  'World',
  ARRAY['Greenland', 'Trump', 'Arctic', 'NATO', 'Geopolitics', 'Denmark'],
  '<p>The Trump administration''s renewed push for Greenland control entered a decisive phase in early 2026, moving from campaign rhetoric to active diplomatic channels.</p>
<h2 id="legal-framework">Legal Framework</h2>
<p>The United States has historical precedent for territorial acquisition offers — the 1867 Alaska Purchase and the 1917 Virgin Islands purchase both established that sovereign territory can be negotiated between nations.</p>
<h2 id="nato-implications">NATO Implications</h2>
<p>Greenland hosts Pituffik Space Base (formerly Thule Air Base), the northernmost U.S. military installation, critical to ICBM early warning systems.</p>'
);
```

---

## Step 3C — INSERT into `article_pages` (ArticlePage)

### Table: `article_pages`

Full column reference:

| Column | Type | Notes |
|---|---|---|
| `slug` | TEXT | ✅ Unique slug |
| `title` | TEXT | ✅ Page headline |
| `subtitle` | TEXT | Subheadline |
| `category` | TEXT | e.g. `"Influencer"` |
| `last_updated` | TEXT | Display string `"March 2026"` |
| `info_box` | JSONB | See format below |
| `table_of_contents` | JSONB | `[{"id":"early-life","label":"Early Life","level":1}]` |
| `content_html` | TEXT | ✅ Page body HTML |
| `related_links` | JSONB | `[{"href":"/influencer","label":"All Influencers","description":"..."}]` |
| `back_link` | JSONB | `{"href":"/influencer","label":"← Influencers"}` |

**`info_box` JSONB format:**
```json
{
  "title": "Quick Facts",
  "image": {
    "src": "/influencer/daddy_wellness.jpg",
    "alt": "DaddyWellness",
    "caption": "DaddyWellness, 2024"
  },
  "items": [
    { "label": "Real Name", "value": "Marcus D." },
    { "label": "Platform", "value": "TikTok, Instagram, YouTube" },
    { "label": "Followers", "value": "12.4M Combined" },
    { "label": "Niche", "value": "Men's Fitness & Nutrition" },
    { "label": "Based In", "value": "Austin, Texas" }
  ]
}
```

### Example SQL INSERT (ArticlePage)

```sql
INSERT INTO article_pages (
  slug,
  title,
  subtitle,
  category,
  last_updated,
  info_box,
  table_of_contents,
  related_links,
  back_link,
  content_html
) VALUES (
  'influencer-daddywellness',
  'DaddyWellness',
  'Men''s fitness creator and entrepreneur, known for accessible strength programming and supplement transparency.',
  'Influencer',
  'March 2026',

  '{
    "title": "Quick Facts",
    "image": {"src": "/influncer/daddy_wellness.jpg", "alt": "DaddyWellness", "caption": "DaddyWellness, 2024"},
    "items": [
      {"label": "Platform", "value": "TikTok, Instagram, YouTube"},
      {"label": "Followers", "value": "12.4M Combined"},
      {"label": "Niche", "value": "Men''s Fitness & Nutrition"},
      {"label": "Based In", "value": "Austin, Texas"}
    ]
  }',

  '[
    {"id": "early-life", "label": "Early Life & Background", "level": 1},
    {"id": "rise-to-fame", "label": "Rise to Fame", "level": 1},
    {"id": "ventures", "label": "Business Ventures", "level": 1},
    {"id": "controversy", "label": "Controversy", "level": 1}
  ]',

  '[{"href": "/influencer", "label": "All Influencers"}]',

  '{"href": "/influencer", "label": "← Influencers"}',

  '<h2 id="early-life">Early Life & Background</h2>
<p>DaddyWellness (Marcus D.) grew up in Austin, Texas, and began his fitness journey after a personal health crisis in his late twenties.</p>
<h2 id="rise-to-fame">Rise to Fame</h2>
<p>His viral "21-day strength reset" series on TikTok accumulated 40 million views in 2023, establishing his reputation for evidence-based programming.</p>
<h2 id="ventures">Business Ventures</h2>
<p>In 2024 he launched two supplement products under the brand <strong>DW Nutrition</strong>, generating $3.2M in first-year revenue.</p>'
);
```

---

## Step 4 — Update the `page.tsx` to Use the DB Component

Once the row is in Supabase, replace the entire inline page with a 3-line stub:

### Before (inline, ~200+ lines):
```tsx
import NewsArticle from '@/components/NewsArticle';
// ...hundreds of lines of inline JSX...
export default function Page() {
  return (
    <NewsArticle title="..." publishDate="..." category="...">
      <p>Full article content inline...</p>
    </NewsArticle>
  );
}
```

### After (DB stub, 6 lines):
```tsx
import { NewsArticleDB } from '@/components/NewsArticleDB';

export const dynamic = 'force-dynamic';

export default function Page() {
  return <NewsArticleDB slug="epic-games-vbucks-shrinkflation-chapter-7-season-2-2026" />;
}
```

### For JackArticle:
```tsx
import { JackArticleDB } from '@/components/JackArticleDB';

export const dynamic = 'force-dynamic';

export default function Page() {
  return <JackArticleDB slug="greenland-acquisition-trump-2026" />;
}
```

### For ArticlePage:
```tsx
import { ArticlePageDB } from '@/components/ArticlePageDB';

export const dynamic = 'force-dynamic';

export default function Page() {
  return <ArticlePageDB slug="influencer-daddywellness" />;
}
```

> **Keep your `export const metadata` block.** The `metadata` export stays in the page file — it runs at build time for SEO. Only the render function changes to use the DB component.

### Full slim page example (keeping metadata):
```tsx
import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Epic Games Implements V-Bucks 'Shrinkflation' Explained",
  description: "Epic Games has reduced the V-Bucks included in every paid bundle effective March 19, 2026...",
  // ... rest of metadata
};

export default function Page() {
  return <NewsArticleDB slug="epic-games-vbucks-shrinkflation-chapter-7-season-2-2026" />;
}
```

---

## Step 5 — Batch Seed Script

For syncing many articles at once, use a TypeScript seed script that runs against the Supabase API directly.

### `scripts/seed-articles.ts`

```typescript
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// ─── Define your batch ───────────────────────────────────────────────────────

const articles = [
  {
    slug: 'epic-games-vbucks-shrinkflation-chapter-7-season-2-2026',
    title: "Epic Games Implements Fortnite 'Shrinkflation' as V-Bucks Purchasing Power Drops 20–25%",
    subtitle: 'Same price. Fewer bucks.',
    category: 'Gaming',
    category_color: 'purple',
    topic_tag: 'gaming',
    publish_date: 'March 18, 2026',
    published_at: '2026-03-18T18:00:00Z',
    read_time: '6 min read',
    author_name: 'Conan Boyle',
    author_role: 'Gaming Reporter',
    author_slug: 'conan-boyle',
    tags: ['Fortnite', 'Epic Games', 'V-Bucks', 'Shrinkflation'],
    url: '/fortnite/epic-games-vbucks-shrinkflation-chapter-7-season-2-2026',
    content_html: `
      <p><strong>Epic Games</strong> has quietly executed the largest single cut to Fortnite's
      in-game currency since V-Bucks launched in 2017.</p>
      <h2>Pack-by-Pack Breakdown</h2>
      <table>
        <thead><tr><th>Price</th><th>Before</th><th>After</th><th>Change</th></tr></thead>
        <tbody>
          <tr><td>$8.99</td><td>1,000 V-Bucks</td><td>800 V-Bucks</td><td>−20%</td></tr>
          <tr><td>$22.99</td><td>2,800 V-Bucks</td><td>2,400 V-Bucks</td><td>−14.3%</td></tr>
        </tbody>
      </table>
    `,
  },
  // Add more articles here...
];

// ─── Run the upsert ──────────────────────────────────────────────────────────

async function seed() {
  console.log(`Seeding ${articles.length} articles...`);

  const { data, error } = await supabase
    .from('articles')
    .upsert(articles, { onConflict: 'slug' });   // upsert = insert or update

  if (error) {
    console.error('Seed failed:', error.message);
    process.exit(1);
  }

  console.log(`Done. Rows affected: ${data?.length ?? 'unknown'}`);
}

seed();
```

### Run the script:
```bash
npx tsx scripts/seed-articles.ts
```

### For jack_articles batch:
```typescript
const jackArticles = [
  {
    slug: 'greenland-acquisition-trump-2026',
    layout: 'report',
    title: 'The Greenland Acquisition: A Full Strategic Analysis',
    category_label: 'Geopolitics',
    categories: [{ label: 'Geopolitics', color: 'blue' }],
    publish_date: 'March 1, 2026',
    publish_date_iso: '2026-03-01T09:00:00Z',
    read_time: '18 min read',
    author: { name: 'Jack Monroe', slug: 'jack-monroe', initials: 'JM', department: 'Investigations' },
    hero_image: { src: '/world/greenland-arctic.jpg', alt: 'Aerial view of Greenland coastline' },
    timeline: [
      { date: 'January 2025', description: 'Trump revives Greenland rhetoric.', highlight: false },
      { date: 'March 2026', description: 'Formal diplomatic overtures confirmed.', highlight: true },
    ],
    accent_color: 'blue',
    content_html: '<p>Full article HTML here...</p>',
  },
];

await supabase.from('jack_articles').upsert(jackArticles, { onConflict: 'slug' });
```

### For article_pages batch:
```typescript
const pages = [
  {
    slug: 'influencer-daddywellness',
    title: 'DaddyWellness',
    category: 'Influencer',
    last_updated: 'March 2026',
    info_box: {
      title: 'Quick Facts',
      image: { src: '/influncer/daddy_wellness.jpg', alt: 'DaddyWellness' },
      items: [
        { label: 'Platform', value: 'TikTok, Instagram, YouTube' },
        { label: 'Followers', value: '12.4M Combined' },
      ],
    },
    table_of_contents: [
      { id: 'early-life', label: 'Early Life', level: 1 },
      { id: 'ventures', label: 'Business Ventures', level: 1 },
    ],
    related_links: [{ href: '/influencer', label: 'All Influencers' }],
    back_link: { href: '/influencer', label: '← Influencers' },
    content_html: '<h2 id="early-life">Early Life</h2><p>...</p>',
  },
];

await supabase.from('article_pages').upsert(pages, { onConflict: 'slug' });
```

---

## Step 6 — Run the `article_pages` Migration (One Time)

Before you can insert into `article_pages`, run the migration in Supabase Dashboard:

1. Go to **Supabase Dashboard** → your project → **SQL Editor**
2. Open `supabase/migrations/20260318000000_create_article_pages.sql`
3. Copy the full contents and paste into the SQL editor
4. Click **Run**

The `articles` and `jack_articles` tables already exist from previous migrations.

---

## Step 7 — Verify Live on Any Page

After inserting and updating the page stub:

1. `npm run dev` → visit the route locally
2. If the row is in Supabase and `dynamic = 'force-dynamic'` is set, the page renders from DB
3. If the row is missing, Next.js returns a 404 (this is intentional — never shows blank pages)

---

## Quick Reference — Slug Rules

The `slug` column is the key that links the page stub to the DB row. It must match exactly.

| Page path | Slug |
|---|---|
| `/fortnite/epic-games-vbucks-shrinkflation-chapter-7-season-2-2026` | `epic-games-vbucks-shrinkflation-chapter-7-season-2-2026` |
| `/influencer/daddywellness` | `influencer-daddywellness` |
| `/world/greenland-acquisition-trump-2026` | `greenland-acquisition-trump-2026` |

> **Convention**: for `article_pages`, prefix the slug with the section — `influencer-daddywellness`, `authors-conan-boyle`. For `articles` and `jack_articles`, use only the final path segment.

---

## Content HTML Tips

### Tables
```html
<table>
  <thead>
    <tr><th>Column A</th><th>Column B</th></tr>
  </thead>
  <tbody>
    <tr><td>Value 1</td><td>Value 2</td></tr>
  </tbody>
</table>
```

### Headings (for table of contents anchor links)
```html
<h2 id="section-slug">Section Title</h2>
```
The `id` must match the `id` field in `table_of_contents` JSONB.

### Pull quotes / highlight boxes
```html
<blockquote>
  <p>"The biggest V-Bucks cut since 2017."</p>
</blockquote>
```

### Internal links
```html
<a href="/fortnite">More Fortnite coverage</a>
```

### Images inline in content
```html
<figure>
  <img src="/fortnite/vbucks-chart.png" alt="V-Bucks pricing chart" />
  <figcaption>V-Bucks per dollar across all pack tiers, March 2026.</figcaption>
</figure>
```

---

## Architecture Summary

```
app/fortnite/article-slug/page.tsx
  └── export const dynamic = 'force-dynamic'
  └── return <NewsArticleDB slug="article-slug" />

components/NewsArticleDB.tsx  (server component)
  └── supabase.from('articles').select('*').eq('slug', slug)
  └── maps flat columns → nested props
  └── return <NewsArticle ...props>
        <div dangerouslySetInnerHTML={{ __html: content_html }} />
      </NewsArticle>

components/NewsArticle.tsx    ('use client' display component)
  └── renders the full styled article UI
```

The same pattern applies to `JackArticleDB → jack_articles → JackArticle` and `ArticlePageDB → article_pages → ArticlePage`.
