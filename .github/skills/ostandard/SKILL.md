---
name: ostandard
description: "Use when: writing, editing, or reviewing any ObjectWire article component or Supabase article record. Covers the full publish pipeline, component routing, SEO standards, heading conventions, and content structure. Invoke with: OStandard, article standard, writing standard, article component, Supabase article, wiki:publish, publish article."
---

# OStandard — ObjectWire Article & SEO Writing Standard

Every article component written for ObjectWire, and every article record synced to Supabase, **must** conform to this standard without exception.

---

## 1. Component Routing — Pick the Right Table

Every article belongs to exactly one component and one Supabase table. **Use the wrong component and you will query the wrong table.**

| Component | Supabase Table | Use For |
|---|---|---|
| `<ArticlePage>` | `article_pages` | Profiles, wiki-style pages, evergreen reference guides |
| `<NewsArticle>` | `articles` | Breaking news, tech, gaming, features, analysis |
| `<JackArticle>` | `jack_articles` | Research reports, investigations, premium long-form |
| `<CreatorArticle>` | `creator_articles` | Creator/influencer/artist hubs |
| `<AlysaArticle>` | `alysa_articles` | Alysa-bylined content |

**`jack_articles` has no `status` column.** Never query `status` from it.

The script auto-detects which component you used by scanning the JSX source. No manual configuration needed.

---

## 2. The Correct Publish Pipeline

**NEVER manually write a stub or manually upsert to Supabase.** Always use the publish script.

### Step-by-step

**Step 1 — Write the full `page.tsx`** with real JSX content inside the component:

```tsx
import type { Metadata } from 'next';
import { ArticlePage, Section, Quote } from '@/components/ArticlePage';   // ← full component, NOT ArticlePageDB

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Your Title | ObjectWire',
  description: '140–160 char description with primary keyword in first 60 chars.',
  alternates: { canonical: 'https://www.objectwire.org/your/path' },
  openGraph: {
    type: 'article',
    url: 'https://www.objectwire.org/your/path',
    images: [{ url: 'https://www.objectwire.org/artist/your-image.png', width: 1200, height: 675, alt: '...' }],
  },
};

export default function YourPage() {
  return (
    <ArticlePage
      title="Your Title"              // ← REQUIRED — must be present
      subtitle="One-line description"
      category="Music"
      lastUpdated="March 30, 2026"
      tableOfContents={[
        { id: 'overview', label: 'Overview' },
        { id: 'section-two', label: 'Section Two' },
      ]}
      infoBox={{
        title: 'Sidebar Title',
        image: { src: '/artist/your-image.png', alt: '...', caption: '...' },
        sections: [
          { heading: 'Quick Facts', items: [{ label: 'Key', value: 'Value' }] },
          { heading: 'Known For', list: ['Item one', 'Item two'] },
          { heading: 'Related', links: [{ href: '/hub', label: 'Hub Page' }] },
        ],
      }}
      relatedLinks={[
        { href: '/hub', label: 'Hub Page', description: 'Brief description' },
      ]}
      backLink={{ href: '/hub', label: 'Hub Page' }}
    >
      <Section id="overview" title="Overview">
        <p>Article body here...</p>
        <Quote text="A quote." source="Name, Title, Date" />
      </Section>
      <Section id="section-two" title="Specific Section Heading">
        <p>More content...</p>
      </Section>
    </ArticlePage>
  );
}
```

**Step 2 — Run the publish script:**

```bash
npm run wiki:publish -- --file app/your/path/page.tsx
```

The script automatically:
1. Detects the component type (`ArticlePage`, `NewsArticle`, etc.)
2. Extracts title, category, content_html, and all props from the JSX
3. Upserts the row to the correct Supabase table (`article_pages`, `articles`, etc.)
4. Adds an entry to `content_registry` (slug + route)
5. Trims `page.tsx` to a 3-line stub pointing at `<ArticlePageDB slug="..." />`
6. Verifies the Supabase row exists and prints confirmation

**Step 3 — Dry-run first if unsure:**

```bash
npm run wiki:publish -- --file app/your/path/page.tsx --dry-run
```

Prints the row that would be upserted without writing anything.

### What the slug will be

The slug is derived from the **file path**, not anything inside the file:

```
app/artists/yeat/ADL-26/page.tsx  →  slug: "artists-yeat-ADL-26"
app/trump/foo-bar/page.tsx        →  slug: "trump-foo-bar"
```

The slug in the file's `ArticlePageDB` stub and the Supabase row will be set to this automatically. You do not set it manually.

### Never do this manually

```tsx
// ❌ WRONG — writing a stub before running the script
export default function Page() {
  return <ArticlePageDB slug="artists-yeat-ADL-26" />;
}

// ❌ WRONG — using ArticlePageDB in a full content page
import { ArticlePageDB } from '@/components/ArticlePageDB';
```

---

## 3. Other Wiki Scripts

| Script | Command | When to Use |
|---|---|---|
| `wiki-publish.ts` | `npm run wiki:publish -- --file <path>` | **Default.** Publish a single new or updated article. |
| `sync-wiki-content.ts` | `npm run wiki:sync` | Full bidirectional sync of ALL pages to Supabase. Deletes orphan rows. Use with caution. |
| `trim-wiki-pages.ts` | `npm run wiki:trim` | Bulk-trim many full pages to stubs after a batch migration. |
| `wiki-status.ts` | `npm run wiki:status` | Diagnostic dashboard showing sync state of all pages across filesystem, registry, and Supabase. |

---

## 4. Title Formatting

### `metadata.title` — the SEO page title

- **No brand suffix.** Do not append `| ObjectWire` to `metadata.title`. Google already displays the site name from structured data. Adding it wastes characters.
  - ✅ `DeepLoad Malware | AI Obfuscation, ClickFix, Enterprise Credential Theft`
  - ❌ `DeepLoad Malware | AI Obfuscation and ClickFix | ObjectWire`

- **Max 60 characters.** Google truncates titles at ~60 chars in SERPs. Count before publishing.
  - ✅ `Mario Kart World 1.6.0 | Bob-omb Blast Returns` — 48 chars
  - ❌ `Mario Kart World Version 1.6.0 | Bob-omb Blast Returns on Switch 2 | ObjectWire` — 83 chars

- **Primary keyword must appear in the first 30–40 characters** — before any `|` separator.

- **Use `|` as the separator**, never `:`, `—`, or `–`.
  - ✅ `Square Bitcoin Payments | 4 Million US Merchants`
  - ❌ `Square Enables Bitcoin — 4 Million Merchants`
  - ❌ `Square Bitcoin Payments: What It Means for Merchants`

- **Never use an em dash `—`, en dash `–`** anywhere — headings, titles, meta, prose. Replace with `,`, `|`, or rewrite.
- **`&` is allowed in `metadata.title` and `openGraph.title` only.** Never use `&` in H1/H2/H3 headings or article body prose.
  - ✅ `metadata.title: 'AI Obfuscation & ClickFix | Enterprise Malware Alert'`
  - ✅ `openGraph.title: 'DeepLoad | AI Junk Code & ClickFix Bypass Security'`
  - ❌ `<h2>AI Obfuscation & ClickFix Tactics</h2>` — use `,` instead in headings

- Titles should be **sentence-case** for standard articles, **title-case** for breaking/featured pieces.

---

## 5. Meta Description

- 130–155 characters
- Primary keyword in the **first 60 characters**
- Written as a direct, factual summary — no clickbait phrasing
- No trailing punctuation
- No generic phrases ("learn more", "find out", "click here")

---

## 6. Headings Structure

Every article **must** have multiple niche, specific, and relevant subheadings. Generic headings like "Background" or "Overview" are banned.

### Rules
- **H1** — Article title only. One per article.
- **H2** — Major section breaks. Must be specific and keyword-rich.
- **H3** — Sub-points within an H2 section.
- **Never use `—` or `–` in any heading.** Use `|` or restructure.
- Headings must describe what the section actually contains — a reader skimming only the headings should understand the full narrative arc.

### Good vs Bad Subheadings
| ❌ Avoid | ✅ Use Instead |
|---|---|
| Background | How the Policy Was Drafted in 2024 |
| Overview | What DOGE's Budget Cuts Actually Target |
| Details | The $14B in Spending Musk Has Flagged for Removal |
| Reaction | Senate Democrats Push Back on Musk's Federal Role |
| What Happens Next | Why the Courts May Block Implementation by June |

### Minimum Subheading Count by Length
| Article Length | Minimum H2s | Minimum H3s |
|---|---|---|
| Short (< 600 words) | 2 | 1 |
| Standard (600–1200 words) | 4 | 2 |
| Long-form (1200–2500 words) | 6 | 4 |
| Feature / Investigation (2500+) | 8 | 6 |

---

## 7. SEO — Keyword Usage

- **Primary keyword** must appear in: H1, first 100 words of body, at least one H2, meta description
- **Secondary keywords** (2–4) appear naturally in subheadings and body
- No keyword stuffing — every keyword must read as natural editorial language
- Use niche long-tail variants in H3s (e.g. "how DOGE layoffs affect federal contractors in Virginia")

---

## 8. Content Depth

- Every article must have **specific, verifiable facts** — numbers, names, dates, sources
- Subheadings must match actual content — no filler sections
- **Each H2 section must be self-contained** — a reader jumping directly to it should understand it without reading prior sections
- Every long-form piece must include at least one of:
  - A data table or comparison block
  - A quoted statement or attributed claim (use `, Name, Title` format in blockquote footer — never `—`)
  - A timeline or numbered list of key events

---

## 9. `article_pages` Column Reference

The `article_pages` Supabase table has **no `description` column**. `extractPageContent` in `wiki-publish.ts` must never attempt to write one. All structured fields are now extracted automatically by `wiki:publish` from the JSX props — **do not upsert them manually**.

| Column | Source in JSX |
|---|---|
| `slug` | Auto-derived from file path |
| `title` | `title` prop on `<ArticlePage>` (required) |
| `subtitle` | `subtitle="..."` prop on `<ArticlePage>` |
| `category` | `category="..."` prop on `<ArticlePage>` |
| `last_updated` | `lastUpdated="..."` prop on `<ArticlePage>` |
| `url` | Extracted from `canonical` URL in metadata |
| `content_html` | JSX body inside `<ArticlePage>...</ArticlePage>`, with `<Section>` and `<Quote>` components converted to HTML |
| `table_of_contents` | `tableOfContents={[{ id: '...', label: '...' }]}` prop |
| `related_links` | `relatedLinks={[{ href: '...', label: '...', description: '...' }]}` prop |
| `back_link` | `backLink={{ href: '...', label: '...' }}` prop |
| `info_box` | `infoBox={{ title: '...', sections: [...] }}` prop |

### `infoBox` structure

Use the `sections` array (not flat `items`). Each section has `heading` + one of `items`, `list`, or `links`:

```tsx
infoBox={{
  title: 'ADL',
  image: { src: '/artist/Yeat-adl.png', alt: '...', caption: '...' },
  sections: [
    {
      heading: 'Quick Facts',
      items: [
        { label: 'Artist', value: 'Yeat' },
        { label: 'Released', value: 'March 27, 2026' },
      ],
    },
    {
      heading: 'Known For',
      list: ['Rage rap', 'Twizzy aesthetics'],
    },
    {
      heading: 'Related',
      links: [
        { href: '/artists/yeat', label: 'Yeat Profile' },
      ],
    },
  ],
}}
```

### Thumbnail / image rules

- **Always include a real local image** in the `infoBox.image` prop and in OG/Twitter metadata
- Store images in `public/artist/`, `public/influncer/`, or the relevant subfolder under `public/`
- Path format: `/artist/Yeat-adl.png` (no `/public` prefix — Next.js serves `public/` at root)
- OG image must be at least **1200×675px**
- The `wiki:publish` script warns `⚠️ none detected` if no thumbnail is found — add the image before publishing or add it to the infoBox via a targeted Supabase update after

---

## 10. Slug Conventions

- Derived automatically from the file path by the publish script — segments joined with `-`
- **All folder names must be lowercase** — Railway runs Linux (case-sensitive). A folder named `ADL-26` will 404 when users visit `/adl-26`. Always use `adl-26`.
- Hyphen-only, no stop words
- ✅ `app/artists/yeat/adl-26/page.tsx` → slug `artists-yeat-adl-26`
- ❌ `app/artists/yeat/ADL-26/page.tsx` → deploys but 404s on Linux

**If you accidentally create an uppercase folder:**
```bash
# Two-step git rename (required on macOS — git is case-insensitive by default)
git mv app/artists/yeat/ADL-26 app/artists/yeat/adl-26-tmp
git mv app/artists/yeat/adl-26-tmp app/artists/yeat/adl-26
```
Then delete the stale uppercase Supabase row if one was already created.

---

## 12. Gold Standard Article | `NewsArticle` Template

**Reference:** `https://www.objectwire.org/entertainment/news/fortnite-moves-into-movies`
**Slug:** `entertainment-news-fortnite-moves-into-movies` | **Table:** `articles` | **Component:** `NewsArticleDB`

This is the canonical example of a fully correct ObjectWire `NewsArticle`. Every new article using `NewsArticleDB` must match this standard before publishing.

### What makes it the standard

| Feature | Detail |
|---|---|
| **Layout** | 80/20 grid: article body (left, 80%) + `RelatedArticles` sticky sidebar (right, 20%) |
| **Related Articles** | `RelatedArticles` client component — auto-queries `articles` by category, re-ranks by user `localStorage` history tags. Zero manual curation. |
| **Animated thumbnail header** | `thumbnail_src` in Supabase renders a "genie float" animated image in the gradient header (golden flare sweep, bob animation). Preferred over hero images for news/gaming/tech. |
| **Engagement stack** | `ReactionBar`, `DiscordComments`, `NewsletterSignupInline`, `ArticleViewTracker`, `TagsSection`, author card footer — all automatic |
| **Metadata** | 18 targeted keywords, full `openGraph` with `publishedTime` + `section`, `twitter` card, canonical URL |
| **Content depth** | Named data points, stats, data tables, H2s with numbers and `|`, internal hub links |

### Full `page.tsx` pattern (pre-publish, full content file)

Write this first. Run `npm run wiki:publish -- --file <path>` after. The script trims it to a stub.

```tsx
import type { Metadata } from 'next';
import { NewsArticle } from '@/components/NewsArticle';

export const dynamic = 'force-dynamic';

const SLUG = '/your/category/article-slug';

export const metadata: Metadata = {
  title: 'Primary Keyword in Title | Specific Detail',  // max 60 chars, NO brand suffix, no em dashes, no &
  description: '130-155 chars. Primary keyword in first 60 chars. No generic phrases.',
  keywords: [
    'keyword one',
    'keyword two',
    // 10-18 targeted long-tail variants
  ],
  alternates: { canonical: `https://www.objectwire.org${SLUG}` },
  openGraph: {
    title: 'Article Title Without Brand Suffix',
    description: 'Slightly different — emphasize the data hook or key stat.',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['Author Name'],
    publishedTime: '2026-03-12T00:00:00Z',
    modifiedTime: '2026-03-12T00:00:00Z',
    section: 'Entertainment',
    tags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Twitter headline — hook-first, one key stat or claim',
    description: 'Data-led. Punchy. No generic summary.',
  },
};

export default function YourPage() {
  return (
    <NewsArticle
      title="Primary Keyword Headline | No Em Dashes"
      subtitle="One sentence. Lead with data or a specific claim. No period at end."
      category="Entertainment"
      categoryColor="purple"
      topicTag="entertainment"
      publishDate="March 12, 2026"
      readTime="7 min read"
      breaking={false}
      trending={true}
      author={{
        name: 'Author Name',
        role: 'Staff Writer',
        authorSlug: 'author-slug',
      }}
      thumbnail={{
        src: 'https://hosted-image-url.jpg',
        alt: 'Descriptive alt text',
      }}
      tags={['Tag1', 'Tag2', 'Tag3', 'Tag4', 'Tag5']}
      slug="your-category-article-slug"
      url={SLUG}
    >
      <div className="prose prose-lg max-w-none">
        <p>Lead paragraph. Primary keyword in first 100 words. Specific stat or claim.</p>

        <h2>Niche Specific H2 | Include a Number or Named Entity</h2>
        <p>Section body. Every H2 section must be self-contained.</p>

        {/* Data tables, blockquotes with , Name, Title format, lists */}
        {/* 4-6 internal links to related ObjectWire hub pages */}
        {/* No em dashes, no en dashes anywhere */}
      </div>
    </NewsArticle>
  );
}
```

### Required Supabase `articles` fields checklist

- [ ] `title` — no em dashes, `|` for separators
- [ ] `subtitle` — data-led, one sentence, no trailing period
- [ ] `category` — valid value
- [ ] `status` — `'published'`
- [ ] `topic_tag` — valid `TopicTagType` (e.g. `"gaming"`, `"entertainment"`, `"ai"`)
- [ ] `breaking` / `trending` / `exclusive` — only `true` when genuinely applicable
- [ ] `content_html` — full body in `<div class="prose prose-lg max-w-none">`
- [ ] `publish_date` — `"March 12, 2026"`
- [ ] `published_at` — `2026-03-12T00:00:00Z`
- [ ] `author_name` + `author_slug`
- [ ] `read_time` — `"7 min read"`
- [ ] `thumbnail_src` — real hosted image URL (triggers animated genie header)
- [ ] `thumbnail_alt` — descriptive alt text
- [ ] `tags` — 4-8 proper nouns
- [ ] `url` — full canonical path (e.g. `/entertainment/news/fortnite-moves-into-movies`)

---

## 13. `NewsArticle` Automatic Layout Features

These are built into `NewsArticle` and render automatically. **Never remove them. Never recreate them manually in content_html.**

| Feature | Component | Trigger |
|---|---|---|
| Animated thumbnail in gradient header | `NewsHeader` | `thumbnail_src` set in Supabase — golden flare + bob animation |
| Related articles sticky sidebar | `RelatedArticles` | Always rendered. Queries by `category`, re-ranks by user history tags |
| Reaction bar (like/share/save) | `ReactionBar` | Always rendered below article body |
| Tags section | `TagsSection` | Rendered when `tags` array has 1+ items |
| Discord comment section | `DiscordComments` | Always rendered below tags |
| Author card footer | Inside `NewsArticle` footer | Rendered when `author` object is present |
| Newsletter signup | `NewsletterSignupInline` | Always rendered in footer |
| View history tracker | `ArticleViewTracker` | Fires when `slug` + `url` are both present |

---

## 14. Publish Checklist

### For all article types
- [ ] Route folder name is **all lowercase** — no `ADL-26`, only `adl-26`
- [ ] `metadata.title` uses `|`, max 60 chars, no brand suffix (`| ObjectWire` dropped), no em dashes (`&` allowed here only)
- [ ] `metadata.description` is 130–155 chars, primary keyword in first 60 chars
- [ ] `canonical` URL set in `alternates` — lowercase path matching the folder name
- [ ] `openGraph` block complete: title, description, `publishedTime`, `section`
- [ ] `twitter` block with `summary_large_image` card
- [ ] All H2 subheadings are niche and specific — no "Background", "Overview", "Details"
- [ ] No `—` or `–` anywhere in the file
- [ ] `category` is a valid value: `News`, `Tech`, `Finance`, `Entertainment`, `World`, `Politics`, `Science`, `Sports`, `Culture`, `Music`
- [ ] Ran `npm run wiki:publish -- --file <path>` and got `✅ Published successfully!`
- [ ] Committed: `git add -A && git commit -m "feat: publish /your/path"` and pushed

### Additional checks for `NewsArticle` / `articles` table
- [ ] Full `<NewsArticle>` component with JSX body — **not** a DB stub before running `wiki:publish`
- [ ] `thumbnail_src` is a real hosted image URL — this activates the animated genie header
- [ ] `thumbnail_alt` is a descriptive string (not empty)
- [ ] `topic_tag` is a valid `TopicTagType` value
- [ ] `status` is `'published'`
- [ ] `author_slug` is set (kebab-case, valid `/authors/[slug]` route)
- [ ] `tags` array has 4–8 proper nouns (no generic terms)
- [ ] `url` field matches the canonical path exactly
- [ ] Body `content_html` is wrapped in `<div class="prose prose-lg max-w-none">`
- [ ] At least one data table or stat callout in the content
- [ ] 4–6 internal links to ObjectWire hub pages in the body

### Additional checks for `ArticlePage` / `article_pages` table
- [ ] Full `<ArticlePage>` with JSX body — **not** a DB stub before running `wiki:publish`
- [ ] `title` prop is present on `<ArticlePage>` — it is **required**, the build will fail without it
- [ ] `subtitle`, `tableOfContents`, `infoBox`, `relatedLinks`, `backLink` props all set
- [ ] `infoBox.image.src` points to a real file in `public/` (e.g. `/artist/Yeat-adl.png`)
- [ ] OG image is local path (1200×675), included in both `openGraph.images` and `twitter.images`
- [ ] `<Section>` components used for body (not raw `<div className="prose">`)
- [ ] `<Quote>` uses `source="..."` prop (not `attribution="..."`)
