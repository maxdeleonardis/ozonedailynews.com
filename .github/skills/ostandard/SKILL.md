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

- **Use `|` to separate the article title from the site name** — never `:` or `—`
  - ✅ `Trump Backs Musk on DOGE Cuts | ObjectWire`
  - ❌ `Trump Backs Musk on DOGE Cuts: ObjectWire`
  - ❌ `Trump Backs Musk on DOGE Cuts — ObjectWire`

- **Never use an em dash `—` or en dash `–` anywhere** — in headings, titles, meta titles, or prose
  - Replace with a comma, `|`, or rewrite the clause
  - ✅ `Google Fires 200 Engineers | Layoffs Hit Search Division`
  - ❌ `Google Fires 200 Engineers — Search Division Hit`

- Titles should be **sentence-case** for readability, or **title-case** for breaking/featured pieces
- Keep titles under **65 characters** for full Google SERP display

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

## 11. Publish Checklist

- [ ] Route folder name is **all lowercase** — no `ADL-26`, only `adl-26`
- [ ] Full `<ArticlePage>` (or correct component) with JSX body — **not** a DB stub
- [ ] `title` prop is present on `<ArticlePage>` — it is **required**, the build will fail without it
- [ ] `subtitle`, `tableOfContents`, `infoBox`, `relatedLinks`, `backLink` props all set
- [ ] `infoBox.image.src` points to a real file in `public/` (e.g. `/artist/Yeat-adl.png`)
- [ ] `metadata.title` uses `|`, under 65 chars, no em dashes
- [ ] `metadata.description` is 130–155 chars, primary keyword in first 60 chars
- [ ] `canonical` URL set in `alternates` — lowercase path matching the folder name
- [ ] `openGraph` block complete: title, description, **local image** (1200×675), `publishedTime`, `section`
- [ ] `twitter` block includes `images` array with the same local image path
- [ ] All H2 subheadings are niche and specific — no "Background", "Overview", "Details"
- [ ] No `—` or `–` anywhere in the file
- [ ] `category` is a valid value: `News`, `Tech`, `Finance`, `Entertainment`, `World`, `Politics`, `Science`, `Sports`, `Culture`, `Music`
- [ ] `<Section>` components used for body (not raw `<div className="prose">`)
- [ ] `<Quote>` uses `source="..."` prop (not `attribution="..."`)
- [ ] Ran `npm run wiki:publish -- --file <path>` and got `✅ Published successfully!`
- [ ] Committed: `git add -A && git commit -m "feat: publish /your/path"` and pushed
