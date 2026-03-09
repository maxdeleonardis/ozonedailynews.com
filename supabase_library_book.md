# ObjectWire — Supabase Content Library Book

> **This document is evergreen.** Return to it any time you need a refresher on how content is written, structured, and published on ObjectWire. Share it with any new writer or developer joining the team.

---

## Overview

ObjectWire uses **Supabase** as a live article database. Articles are written directly in the codebase as TypeScript files — **not** through any admin dashboard or CMS UI. This means:

- Full autocomplete in VS Code for every field and block type
- Articles are version-controlled in Git — you can see exactly what changed and when
- Publishing is one terminal command: `npm run content:publish`
- No browser UI, no login, no deploy required to publish

**The live article route is:** `https://www.objectwire.org/blog/[slug]`

> **Note:** An admin dashboard exists at `/admin` but it is not the primary workflow. Write `.ts` files, push to Supabase, done.

---

## Supabase Project

| Setting | Value |
|---|---|
| Project URL | `https://kzcwclprrtonpsnownbl.supabase.co` |
| Anon/Publishable Key | in `.env.local` as `NEXT_PUBLIC_SUPABASE_ANON_KEY` |
| Table | `articles` |

Credentials are stored in `.env.local` at the project root. **Never commit `.env.local` to Git.**

---

## File Structure

```
content/
  types.ts                    ← All TypeScript types (Article, ContentBlock, etc.)
  articles/
    _template.ts              ← Copy this to start a new article
    crypto/
      bitcoin-etf-2026.ts     ← Example article
    tech/
      openai-gpt5.ts
    finance/
      fed-rate-cut.ts

scripts/
  publish-content.ts          ← The script that pushes articles to Supabase
  push-articles-to-supabase.ts ← One-time migration script (184 legacy articles)

lib/
  blog-service.ts             ← All Supabase read/write functions (don't edit unless schema changes)

app/
  blog/[slug]/page.tsx        ← The Next.js page that renders Supabase articles
```

---

## Writing an Article — Step by Step

### 1. Copy the template

```bash
# From the project root
cp content/articles/_template.ts content/articles/[category]/your-slug.ts
```

You can organize by category folder (e.g. `crypto/`, `tech/`, `finance/`) or keep them flat. The folder structure does **not** affect the URL — only the `slug` field does.

### 2. Fill in the required fields

Open your new file. At minimum, set these four fields:

```ts
title: 'Your Article Title',
slug: 'your-article-slug',   // URL: /blog/your-article-slug
category: 'crypto',
status: 'draft',             // keep as draft until ready to publish
```

### 3. Write the content blocks

The `content` array is your article body. Each block has a unique `id` (short string like `'p1'`, `'h2'`) and a `type`. See the full block reference below.

### 4. Publish

When the article is ready, change `status: 'draft'` to `status: 'published'` and run:

```bash
npm run content:publish
```

The article is now live at `https://www.objectwire.org/blog/your-article-slug`.

---

## All Commands

| Command | What it does |
|---|---|
| `npm run content:publish` | Push all article files to Supabase |
| `npm run content:dry-run` | Preview what would be pushed — no writes |
| `npm run content:publish -- --file crypto/bitcoin-etf-2026` | Push one specific file |
| `npm run content:publish -- --status published` | Push only articles with `status: 'published'` |

> **Re-running is always safe.** The script uses `upsert` on the `slug` field. If the article already exists in Supabase, it updates it. Nothing is deleted or duplicated.

---

## The Article Object — All Fields

```ts
const article: Article = {

  // ── Required ──────────────────────────────────────────────────────────────

  title: 'Article Title',
  slug: 'article-slug',         // unique — this becomes the URL path
  category: 'tech',             // shown as a badge on the article
  status: 'draft',              // 'draft' (hidden) | 'published' (live)
  content: [ /* blocks */ ],

  // ── Recommended ───────────────────────────────────────────────────────────

  excerpt: 'One or two sentence summary shown in cards and meta descriptions.',
  author_name: 'Jack',
  published_at: '2026-03-07',   // ISO date: "2026-03-07" or "2026-03-07T14:00:00Z"
  image_url: 'https://...',     // hero image
  tags: ['bitcoin', 'etf'],     // for filtering and related content

  // ── Sub-headline & Display ─────────────────────────────────────────────────

  subtitle: 'Optional deck line shown under the title',
  topic_tag: 'Markets',         // short label next to the category badge
  category_color: '#6366f1',    // hex color for the category badge
  read_time: '4 min read',

  // ── Author ────────────────────────────────────────────────────────────────

  author_role: 'Staff Writer',
  author_slug: 'jack',          // links to /authors/jack
  author_avatar: 'https://...',
  author_twitter: '@handle',
  author_bio: 'Jack covers crypto and finance.',

  // ── Images ────────────────────────────────────────────────────────────────

  image_alt: 'Description of the hero image',
  image_caption: 'Caption shown under the hero image',
  image_credit: 'Photo: Reuters',
  thumbnail_url: 'https://...',  // used in article cards if different from hero

  // ── Flags ─────────────────────────────────────────────────────────────────

  featured: false,    // pinned at top of homepage feed
  trending: false,    // shown in trending section
  breaking: false,    // red "BREAKING" badge
  exclusive: false,   // "EXCLUSIVE" badge
};
```

---

## Content Block Reference

Every block needs a unique `id` string (e.g. `'p1'`, `'h2'`, `'q1'`). Use short, sequential IDs.

### Paragraph
The most common block. Supports inline HTML for bold, italic, and links.
```ts
{
  id: 'p1',
  type: 'paragraph',
  content: 'Your text here. <strong>Bold</strong>, <em>italic</em>, and <a href="https://example.com">links</a> all work.',
}
```

### Heading
Section headings. Use `level: 2` for major sections, `level: 3` for sub-sections.
```ts
{
  id: 'h1',
  type: 'heading',
  content: 'Section Heading',
  level: 2,   // 2 | 3 | 4
}
```

### Quote / Blockquote
For pull quotes and attributed statements.
```ts
{
  id: 'q1',
  type: 'quote',
  content: 'The full quote text goes here.',
  author: 'Satoshi Nakamoto',
  role: 'Creator, Bitcoin',
}
```

### List
Bullet or numbered list.
```ts
{
  id: 'l1',
  type: 'list',
  ordered: false,   // true = numbered list, false = bullets
  items: [
    'First item',
    'Second item',
    'Third item',
  ],
}
```

### Image
Inline image within the article body.
```ts
{
  id: 'img1',
  type: 'image',
  src: 'https://example.com/image.jpg',
  alt: 'Description of the image',
  caption: 'Caption shown under the image',
  credit: 'Photo: AP',
}
```

### Divider
A horizontal rule to break sections visually.
```ts
{
  id: 'div1',
  type: 'divider',
}
```

### Callout
A highlighted box for tips, warnings, or important notes.
```ts
{
  id: 'c1',
  type: 'callout',
  content: 'Important note or tip goes here.',
  style: 'info',   // 'info' | 'warning' | 'tip' | 'danger'
}
```

### Stat Grid
A grid of key statistics or data points.
```ts
{
  id: 'sg1',
  type: 'stat-grid',
  stats: [
    { value: '$94,000', label: 'Bitcoin Price', note: 'as of March 7' },
    { value: '21M',     label: 'Max Supply' },
    { value: '19.6M',   label: 'In Circulation' },
  ],
}
```

### Timeline
A chronological list of events.
```ts
{
  id: 'tl1',
  type: 'timeline',
  events: [
    { date: 'Jan 2024', title: 'ETF Approved',      description: 'SEC approves spot Bitcoin ETF.' },
    { date: 'Mar 2024', title: 'All-time High',     description: 'BTC hits $73,000.' },
    { date: 'Mar 2026', title: 'Current',           description: 'BTC consolidates around $94,000.' },
  ],
}
```

### Table
A data table with headers and rows.
```ts
{
  id: 'tb1',
  type: 'table',
  caption: 'Optional table caption',
  headers: ['Asset', 'Price', '24h Change'],
  rows: [
    ['Bitcoin',  '$94,000',  '+2.1%'],
    ['Ethereum', '$3,200',   '+1.4%'],
    ['Solana',   '$180',     '-0.8%'],
  ],
}
```

### Embed
Embed a YouTube video, tweet, or other external content.
```ts
{
  id: 'em1',
  type: 'embed',
  url: 'https://www.youtube.com/watch?v=xxxxx',
  provider: 'youtube',   // 'youtube' | 'twitter' | 'instagram' | 'tiktok'
  caption: 'Optional caption under the embed',
}
```

### Sources
A list of cited sources shown at the bottom of the article.
```ts
{
  id: 'src1',
  type: 'sources',
  items: [
    { label: 'SEC Filing — Bitcoin ETF Approval', url: 'https://sec.gov/...' },
    { label: 'CoinDesk — BTC Price History',      url: 'https://coindesk.com/...' },
  ],
}
```

---

## Full Article Example

```ts
import type { Article } from '../../content/types';

const article: Article = {
  title: 'Bitcoin ETF Hits $10 Billion in Volume on Day One',
  slug: 'bitcoin-etf-10-billion-day-one',
  category: 'crypto',
  status: 'published',
  excerpt: 'The newly approved spot Bitcoin ETF broke records on its first trading day, surpassing all analyst expectations.',
  author_name: 'Jack',
  author_role: 'Staff Writer',
  author_slug: 'jack',
  published_at: '2026-03-07',
  tags: ['bitcoin', 'etf', 'markets'],
  topic_tag: 'Markets',
  category_color: '#f59e0b',
  read_time: '3 min read',
  image_url: 'https://example.com/bitcoin-etf.jpg',
  image_alt: 'Bitcoin ETF trading floor',
  breaking: true,

  content: [
    {
      id: 'p1',
      type: 'paragraph',
      content: 'The spot Bitcoin ETF hit <strong>$10 billion in trading volume</strong> on its first day, making it the largest ETF debut in history.',
    },
    {
      id: 'sg1',
      type: 'stat-grid',
      stats: [
        { value: '$10B',  label: 'Day-one volume' },
        { value: '$94K',  label: 'BTC price at open' },
        { value: '11',    label: 'Competing ETFs launched' },
      ],
    },
    {
      id: 'h1',
      type: 'heading',
      content: 'What This Means for Investors',
      level: 2,
    },
    {
      id: 'p2',
      type: 'paragraph',
      content: 'Retail and institutional investors can now gain direct Bitcoin exposure through traditional brokerage accounts without holding the asset directly.',
    },
    {
      id: 'q1',
      type: 'quote',
      content: 'This is the most significant development in crypto market structure since the launch of Bitcoin futures.',
      author: 'Cathie Wood',
      role: 'CEO, ARK Invest',
    },
    {
      id: 'div1',
      type: 'divider',
    },
    {
      id: 'src1',
      type: 'sources',
      items: [
        { label: 'SEC — ETF Approval Notice', url: 'https://sec.gov' },
        { label: 'Bloomberg — ETF Volume Data', url: 'https://bloomberg.com' },
      ],
    },
  ],
};

export default article;
```

---

## How It All Connects

```
Your article file (content/articles/crypto/bitcoin-etf.ts)
        ↓
npm run content:publish
        ↓
scripts/publish-content.ts  →  Supabase (articles table)
        ↓
app/blog/[slug]/page.tsx    →  https://www.objectwire.org/blog/bitcoin-etf-10-billion-day-one
```

The `lib/blog-service.ts` file handles all reads from Supabase. The `app/blog/[slug]/page.tsx` route fetches the article by slug and renders the `content` block array. You don't need to touch either file to write and publish articles.

---

## The Supabase `articles` Table — Column Reference

| Column | Type | Notes |
|---|---|---|
| `id` | uuid | Auto-generated |
| `title` | text | Required |
| `slug` | text | Required, unique — used as URL |
| `subtitle` | text | Deck line |
| `excerpt` | text | Summary for cards and SEO |
| `content` | jsonb | Array of `ContentBlock` objects |
| `status` | text | `'draft'` or `'published'` |
| `category` | text | e.g. `'crypto'` |
| `category_color` | text | Hex color for badge |
| `topic_tag` | text | Short label |
| `tags` | text[] | Array of tag strings |
| `read_time` | text | e.g. `'4 min read'` |
| `author_name` | text | Display name |
| `author_role` | text | e.g. `'Staff Writer'` |
| `author_avatar` | text | URL |
| `author_twitter` | text | Handle |
| `author_slug` | text | Links to author profile |
| `author_bio` | text | Short bio |
| `image_url` | text | Hero image URL |
| `image_alt` | text | Alt text |
| `image_caption` | text | Caption |
| `image_credit` | text | Photo credit |
| `thumbnail_url` | text | Card thumbnail |
| `featured` | boolean | Pin to top of feed |
| `trending` | boolean | Shows in trending |
| `breaking` | boolean | Red BREAKING badge |
| `exclusive` | boolean | EXCLUSIVE badge |
| `published_at` | timestamptz | Publication date |
| `created_at` | timestamptz | Auto-set on insert |
| `updated_at` | timestamptz | Auto-updated |

---

## Important Notes

- **Slugs are permanent.** Once an article is published, changing the slug will break the URL. Don't change it.
- **`status: 'draft'`** articles are invisible to the public. Use drafts freely while writing.
- **Re-running `npm run content:publish` is always safe.** It upserts on slug — no duplicates.
- **Don't edit `lib/blog-service.ts`** unless the database schema changes. It's the single file that connects the app to Supabase.
- **Content blocks must have unique `id` values** within an article. Short strings work: `'p1'`, `'h1'`, `'q1'`.
- **Inline HTML** is only supported inside `paragraph` block `content` fields. Use `<strong>`, `<em>`, `<a href="">`, `<br>`.
