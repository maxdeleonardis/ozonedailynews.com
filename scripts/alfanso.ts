#!/usr/bin/env ts-node
/**
 * scripts/alfanso.ts — Alfanso, the OzoneNews Ghost Writer
 *
 * Scaffolds a complete, OStandard-compliant article JSON in the correct
 * sharded path, pre-wires the full GEO structure (DirectAnswer, KeyTakeaways,
 * CitationBlocks, FAQAccordion, SourcesInterlink), registers the article in
 * content_registry.json, and prints the CMS edit link.
 *
 * ─── Usage ───────────────────────────────────────────────────────────────────
 *
 *   npm run alfanso                                    — interactive prompts
 *
 *   npm run alfanso -- \
 *     --title  "Galaxy-Killing Wind Found by JWST" \
 *     --type   jack \
 *     --cat    Science \
 *     --author max-deleonardis \
 *     --tags   "JWST,Galactic Wind,Supernovae,CRISTAL-02"
 *
 *   --title   "Article title" (required — everything else has defaults)
 *   --slug    custom-slug    (auto-generated from title + category + year if omitted)
 *   --type    news | jack    (default: news)
 *   --cat     Science | Tech | Finance | ... (default: News)
 *   --author  slug from lib/authors.ts (default: simon-minter)
 *   --tags    "Tag1,Tag2,Tag3" (comma-separated, 4–8 proper nouns)
 *   --at      schedule slot  ("2026-11-05T06:00", "tomorrow 6am", "+2h", "2026-11-05")
 *             Sets publish_at + published_at to the slot. The registry gate
 *             (isEntryLive) holds the article until that moment. Must be future.
 *   --dry     Print JSON to stdout, do not write files
 *   --open    Open the created file in $EDITOR after writing
 *
 * ─── What Alfanso generates ──────────────────────────────────────────────────
 *
 *   ✔ Correct sharded file path  (articles/2026/06/slug.json)
 *   ✔ All required OStandard fields (published_at ISO-8601, canonical, author,
 *     thumbnail, metadata.description placeholder)
 *   ✔ Full GEO article structure in content_html:
 *       DirectAnswer → KeyTakeaways → 4× H2 sections with CitationBlocks
 *       → FAQAccordion → SourcesInterlink
 *   ✔ [FILL: ...] markers on every field that needs human content
 *   ✔ Automatic registry sync after writing
 *   ✔ CMS edit link printed at the end
 */

import * as fs   from 'fs';
import * as path from 'path';
import * as rl   from 'readline';
import { execSync } from "child_process";

// ── Constants ─────────────────────────────────────────────────────────────────

const SITE_URL    = 'https://www.ozonedailynews.com';
const STATIC_BASE = path.join(process.cwd(), 'content', 'static');

const VALID_CATEGORIES = [
  'Science', 'Space', 'Earth', 'Tech', 'News', 'World',
] as const;

// Pulled from lib/authors.ts — keep in sync
const AUTHORS: Record<string, { name: string; role: string }> = {
  'max-deleonardis':               { name: 'Max DeLeonardis',            role: 'Founder, Publisher & Editor-in-Chief' },
  'simon-minter':                  { name: 'Simon Alfred Minter',         role: 'Paleontology & Evolutionary Biology Correspondent' },
  'ozonedailynews-editorial-team': { name: 'OzoneNews Editorial Team',    role: 'Editorial Desk' },
  'kaustubh-madiraju':             { name: 'Kaustubh Madiraju',           role: 'Contributing Reporter' },
  'josh-donnelly':                 { name: 'Josh Donnelly',               role: 'Contributing Writer' },
};

const STORE_FOR_TYPE: Record<string, string> = {
  news: 'articles',
  jack: 'jack_articles',
};

// Common words to strip from auto-slugs (SEO stop words)
const STOP_WORDS = new Set([
  'a','an','the','and','or','but','in','on','at','to','for','of',
  'with','by','from','is','was','are','were','has','have','had',
  'be','been','being','that','this','these','those','it','its',
  'as','into','up','about','over','after','before','how','why',
  'what','when','where','which','who',
]);

// ── Arg parsing ───────────────────────────────────────────────────────────────

const argv    = process.argv.slice(2);
const DRY     = argv.includes('--dry');
const OPEN    = argv.includes('--open');

function getFlag(flag: string): string | undefined {
  const i = argv.indexOf(flag);
  return i !== -1 && argv[i + 1] && !argv[i + 1].startsWith('--')
    ? argv[i + 1]
    : undefined;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

/** Title → category-prefixed SEO slug */
function slugify(title: string, category: string, year: number): string {
  const catPrefix = category.toLowerCase();
  const base = title
    .toLowerCase()
    .replace(/['"]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(w => w.length > 1 && !STOP_WORDS.has(w))
    .join('-')
    .replace(/-{2,}/g, '-')
    .replace(/^-|-$/g, '')
    .substring(0, 65)
    .replace(/-$/, '');
  // Avoid double category prefix (e.g. "science-science-...")
  const baseNoCat = base.startsWith(`${catPrefix}-`) ? base.slice(catPrefix.length + 1) : base;
  return `${catPrefix}-${baseNoCat}-${year}`;
}

/** Truncate to 60 chars for metadata.title (no trailing ellipsis, cut at word boundary). */
function metaTitle(title: string): string {
  if (title.length <= 60) return title;
  return title.substring(0, 60).replace(/\s+\S*$/, '');
}

/**
 * Enforce the H1 title standard: sentence case + <=70 chars + front-loaded.
 * Strips a leading "Creative Phrase | " two-part prefix so the title states the
 * point directly (per OStandard H1 rules).
 */
function h1Title(title: string): string {
  let t = title.trim();
  // If title is "Creative Phrase | Actual Point", drop the creative prefix.
  if (t.includes('|')) {
    const parts = t.split('|').map((p) => p.trim());
    // Keep the longer, more descriptive part when the parts look like metaphor|fact
    const [a, b] = parts;
    if (a && b && b.length >= a.length) t = b;
  }
  // Enforce sentence case: lowercase everything, then capitalize first letter.
  // Proper nouns are caller-provided and preserved by not lowercasing known caps.
  if (t === t.toUpperCase() || /^[a-z]/.test(t)) {
    t = t.charAt(0).toUpperCase() + t.slice(1);
  }
  // Only truncate when actually over the 70-char limit. Running the word-trim
  // regex unconditionally stripped the final word from short titles.
  if (t.length > 70) {
    t = t.slice(0, 70).replace(/\s+\S*$/, '');
  }
  return t;
}

/** Full ISO-8601 with CST offset */
function toISO(d: Date): string {
  const p = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}T09:00:00-05:00`;
}

/**
 * Full ISO-8601 with the local timezone offset, preserving the exact time given.
 * Unlike toISO (which pins 09:00), this is used for scheduled publishes where the
 * caller picks a specific slot.
 */
function toISOExact(d: Date): string {
  const p = (n: number) => String(n).padStart(2, '0');
  const offsetMinutes = -d.getTimezoneOffset();
  const sign = offsetMinutes >= 0 ? '+' : '-';
  const absOffset = Math.abs(offsetMinutes);
  const offH = p(Math.floor(absOffset / 60));
  const offM = p(absOffset % 60);
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}T${p(d.getHours())}:${p(d.getMinutes())}:00${sign}${offH}:${offM}`;
}

/**
 * Parse a --at scheduling expression into a Date.
 * Accepted forms:
 *   "2026-11-05T06:00"            full local datetime
 *   "2026-11-05 06:00"            space-separated variant
 *   "2026-11-05"                  date only, defaults to 06:00 local
 *   "tomorrow 6am" | "tomorrow"   relative day, defaults to 06:00 local
 *   "today 18:30"                 today at a specific local time
 *   "+2h" | "+90m"                relative offset from now
 * Returns null when the expression cannot be parsed.
 */
function parseSchedule(expr: string): Date | null {
  const s = expr.trim().toLowerCase();
  const now = new Date();

  // Relative offset: +2h / +90m / +1d
  const rel = s.match(/^\+(\d+)([hmd])$/);
  if (rel) {
    const n = parseInt(rel[1], 10);
    const unit = rel[2];
    const ms = unit === 'h' ? n * 3600e3 : unit === 'm' ? n * 60e3 : n * 86400e3;
    return new Date(now.getTime() + ms);
  }

  // "tomorrow [HHmm|Ham]" or "today [time]"
  const dayWord = s.match(/^(tomorrow|today)(?:\s+(.*))?$/);
  if (dayWord) {
    const base = new Date(now);
    if (dayWord[1] === 'tomorrow') base.setDate(base.getDate() + 1);
    let hh = 6, mm = 0; // default 06:00 local
    const timeStr = (dayWord[2] ?? '').trim();
    if (timeStr) {
      const t = timeStr.match(/^(\d{1,2})(?::(\d{2}))?\s*(am|pm)?$/);
      if (!t) return null;
      hh = parseInt(t[1], 10);
      mm = t[2] ? parseInt(t[2], 10) : 0;
      if (t[3] === 'pm' && hh < 12) hh += 12;
      if (t[3] === 'am' && hh === 12) hh = 0;
      if (hh > 23 || mm > 59) return null;
    }
    base.setHours(hh, mm, 0, 0);
    return base;
  }

  // ISO-ish: "2026-11-05" or "2026-11-05T06:00" or "2026-11-05 06:00"
  const iso = s.match(/^(\d{4})-(\d{2})-(\d{2})(?:[t\s](\d{1,2}):(\d{2}))?$/);
  if (iso) {
    const [, y, mo, d, hhRaw, mmRaw] = iso;
    const hh = hhRaw ? parseInt(hhRaw, 10) : 6;
    const mm = mmRaw ? parseInt(mmRaw, 10) : 0;
    if (hh > 23 || mm > 59) return null;
    const dt = new Date(now);
    dt.setFullYear(parseInt(y, 10), parseInt(mo, 10) - 1, parseInt(d, 10));
    dt.setHours(hh, mm, 0, 0);
    return dt;
  }

  return null;
}

/** Display date: "June 11, 2026" */
function toDisplay(d: Date): string {
  return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

/** Pad month with leading zero */
function twoDigitMonth(d: Date): string {
  return String(d.getMonth() + 1).padStart(2, '0');
}

// ── GEO content_html templates ────────────────────────────────────────────────

function newsContentHTML(title: string, category: string): string {
  const cat = category.toLowerCase();
  return [
    `<DirectAnswer answer="[FILL: 2-4 sentences directly answering the core question this article addresses. Lead with the most important finding. No em dashes. No AI boilerplate.]" />`,
    ``,
    `<KeyTakeaways items={["[FILL: Specific named fact with number, date, or institution]","[FILL: Specific named fact with number, date, or institution]","[FILL: Specific named fact with number, date, or institution]","[FILL: Specific named fact with number, date, or institution]","[FILL: Specific named fact with number, date, or institution]"]} />`,
    ``,
    `<p>[FILL: Opening paragraph. Establish why this matters now. First sentence must contain the primary keyword. 3-5 sentences. No em dashes. No AI boilerplate phrases.]</p>`,
    ``,
    `<h2>[FILL: Specific Sub-Topic | Key Data Point or Named Source]</h2>`,
    ``,
    `<p>[FILL: Section 1 body. Cite specific institutions, dates, and named researchers. 3-5 sentences.]</p>`,
    ``,
    `<p>[FILL: Section 1 continued. Quote or paraphrase a key expert if available. Include at least one <a href="https://[source-url]" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">external source link</a>.]</p>`,
    ``,
    `<CitationBlock question="[FILL: Specific question section 1 answers]" answer="[FILL: 2-3 sentence direct answer with named source and specific data point]" type="stat" stat="[FILL: Key number or measurement]" statLabel="[FILL: Source — Author/Institution, Publication, Year]" source="[FILL: Publication Name, Year]" sourceUrl="[FILL: https://doi.org/...]" />`,
    ``,
    `<h2>[FILL: The Mechanism | How It Actually Works]</h2>`,
    ``,
    `<p>[FILL: Section 2 body. Explain the mechanism, process, or context. Smart non-expert audience. Define any technical terms. 3-5 sentences.]</p>`,
    ``,
    `<p>[FILL: Section 2 continued. A specific example, data point, or analogy to make the mechanism concrete.]</p>`,
    ``,
    `<h2>[FILL: The Implications | Who Is Affected and Why]</h2>`,
    ``,
    `<p>[FILL: Section 3 body. What does this mean practically? 3-5 sentences. Include at least one internal link: <a href="/${cat}/[related-slug]" class="text-blue-600 hover:text-blue-800 underline">Related article title</a>.]</p>`,
    ``,
    `<CitationBlock question="[FILL: Specific question about implications]" answer="[FILL: 2-3 sentence direct answer]" type="definition" source="[FILL: Publication Name, Year]" sourceUrl="[FILL: https://...]" />`,
    ``,
    `<h2>Frequently Asked Questions</h2>`,
    ``,
    `<FAQAccordion items={[{"question":"[FILL: Most common question about this topic]","answer":"[FILL: 2-4 sentence direct answer. No em dashes.]"},{"question":"[FILL: Second most common question]","answer":"[FILL: 2-4 sentence direct answer.]"},{"question":"[FILL: Third common question]","answer":"[FILL: 2-4 sentence direct answer.]"},{"question":"[FILL: Fourth common question]","answer":"[FILL: 2-4 sentence direct answer.]"}]} />`,
    ``,
    `<SourcesInterlink sources={[{"number":1,"url":"[FILL: https://...]","title":"[FILL: Source article title]","author":"[FILL: Publisher or Author Name]","date":"[FILL: Month Year]"},{"number":2,"url":"[FILL: https://...]","title":"[FILL: Source article title]","author":"[FILL: Publisher or Author Name]","date":"[FILL: Month Year]"}]} internalLinks={[{"href":"/${cat}/[FILL: related-slug]","label":"[FILL: Related article title]","category":"${category}"},{"href":"/${cat}/[FILL: related-slug]","label":"[FILL: Related article title]","category":"${category}"},{"href":"/${cat}","label":"All ${category} Coverage | OzoneNews","category":"${category}"}]} />`,
  ].join('\n');
}

function jackContentHTML(title: string, category: string): string {
  const cat = category.toLowerCase();
  return [
    `<DirectAnswer answer="[FILL: 2-4 sentences directly answering the core question. Lead with the most important finding. Include a named source. No em dashes.]" />`,
    ``,
    `<KeyTakeaways items={["[FILL: Specific named fact with number, date, or institution]","[FILL: Specific named fact with number, date, or institution]","[FILL: Specific named fact with number, date, or institution]","[FILL: Specific named fact with number, date, or institution]","[FILL: Specific named fact with number, date, or institution]","[FILL: Specific named fact with number, date, or institution]"]} />`,
    ``,
    `<p>[FILL: Opening paragraph. Establish the story, explain why it matters right now, and end with a statement of what this article will prove or reveal. First sentence must contain the primary keyword. 3-5 sentences. No em dashes. No AI boilerplate.]</p>`,
    ``,
    `<h2>[FILL: Background | What Led to This Discovery]</h2>`,
    ``,
    `<p>[FILL: Section 1 body. Who are the key actors, institutions, and what has happened so far? Specific names, dates, and prior context. 4-6 sentences.]</p>`,
    ``,
    `<p>[FILL: Section 1 continued. What did previous work conclude or get wrong? Sets up why this new development matters. Include one <a href="https://[source-url]" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">external source link</a>.]</p>`,
    ``,
    `<CitationBlock question="[FILL: Specific background question]" answer="[FILL: 2-3 sentence direct answer with named source and specific data point]" type="stat" stat="[FILL: Key number, date, or measurement]" statLabel="[FILL: Source — Author/Institution, Publication, Year]" source="[FILL: Publication Name, Year]" sourceUrl="[FILL: https://doi.org/...]" />`,
    ``,
    `<h2>[FILL: The Core Finding | What Was Discovered or Built]</h2>`,
    ``,
    `<p>[FILL: Section 2 body. Explain the central finding, event, or product in detail. What specifically happened, how, and by whom? 4-6 sentences with specific figures.]</p>`,
    ``,
    `<p>[FILL: Section 2 continued. Explain the mechanism or methodology at a level a smart non-expert can follow. Define technical terms on first use. Analogies welcome.]</p>`,
    ``,
    `<CitationBlock question="[FILL: Specific question about the core finding]" answer="[FILL: 2-3 sentence direct answer]" type="stat" stat="[FILL: Key number]" statLabel="[FILL: Source attribution]" source="[FILL: Publication Name, Year]" sourceUrl="[FILL: https://...]" />`,
    ``,
    `<h2>[FILL: The Implications | Who Is Affected and How]</h2>`,
    ``,
    `<p>[FILL: Section 3 body. What does this mean for the field, industry, or public? Specific affected groups. 4-6 sentences. Include at least two internal links: <a href="/${cat}/[related-slug]" class="text-blue-600 hover:text-blue-800 underline">Related article</a> and <a href="/${cat}/[related-slug-2]" class="text-blue-600 hover:text-blue-800 underline">Another related article</a>.]</p>`,
    ``,
    `<p>[FILL: Section 3 continued. Who benefits, who is threatened, what policies or decisions does this affect?]</p>`,
    ``,
    `<h2>[FILL: What Comes Next | Open Questions or Planned Follow-Up]</h2>`,
    ``,
    `<p>[FILL: Section 4 body. Future work, planned studies, policy responses, or open questions. What do researchers or stakeholders plan to do next? 4-6 sentences.]</p>`,
    ``,
    `<CitationBlock question="[FILL: Specific question about future implications or what changes]" answer="[FILL: 2-3 sentence direct answer]" type="verdict" source="[FILL: Publication Name, Year]" sourceUrl="[FILL: https://...]" />`,
    ``,
    `<h2>Frequently Asked Questions</h2>`,
    ``,
    `<FAQAccordion items={[{"question":"[FILL: Most common question about this topic]","answer":"[FILL: 3-5 sentence direct answer. No em dashes.]"},{"question":"[FILL: Second most common question]","answer":"[FILL: 3-5 sentence direct answer.]"},{"question":"[FILL: Third common question]","answer":"[FILL: 3-5 sentence direct answer.]"},{"question":"[FILL: Fourth common question]","answer":"[FILL: 3-5 sentence direct answer.]"},{"question":"[FILL: Fifth common question]","answer":"[FILL: 3-5 sentence direct answer.]"}]} />`,
    ``,
    `<SourcesInterlink sources={[{"number":1,"url":"[FILL: https://...]","title":"[FILL: Source title]","author":"[FILL: Publisher]","date":"[FILL: Month Year]"},{"number":2,"url":"[FILL: https://...]","title":"[FILL: Source title]","author":"[FILL: Publisher]","date":"[FILL: Month Year]"},{"number":3,"url":"[FILL: https://...]","title":"[FILL: Source title]","author":"[FILL: Publisher]","date":"[FILL: Month Year]"}]} internalLinks={[{"href":"/${cat}/[FILL: related-slug]","label":"[FILL: Related article title]","category":"${category}"},{"href":"/${cat}/[FILL: related-slug]","label":"[FILL: Related article title]","category":"${category}"},{"href":"/${cat}","label":"All ${category} Coverage | OzoneNews","category":"${category}"}]} accentColor="blue" />`,
  ].join('\n');
}

// ── JSON builders ─────────────────────────────────────────────────────────────

interface ScaffoldInput {
  title:      string;
  slug:       string;
  type:       'news' | 'jack';
  category:   string;
  authorSlug: string;
  tags:       string[];
  now:        Date;
  /** Optional scheduled publish slot. When set, publish_at is written explicitly. */
  scheduleAt?: Date;
}

function buildNewsJSON(i: ScaffoldInput): object {
  // Slug has category prefix for filename; URL path uses slug without the prefix
  const urlSlug     = i.slug.replace(new RegExp(`^${i.category.toLowerCase()}-`), '');
  const url         = `${SITE_URL}/${i.category.toLowerCase()}/${urlSlug}`;
  const iso         = i.scheduleAt ? toISOExact(i.scheduleAt) : toISO(i.now);
  const display     = toDisplay(i.scheduleAt ?? i.now);
  const metaTit     = metaTitle(i.title);
  const h1Tit       = h1Title(i.title);
  const html        = newsContentHTML(i.title, i.category);

  return {
    slug:          i.slug,
    url,
    article_type:  'news_article',
    title:         h1Tit,
    subtitle:      `[FILL: 1-2 sentence subtitle. Completes the headline with the key finding. No em dashes.]`,
    category:      i.category,
    status:        'published',
    lifecycle:     'news',
    topic_tag:     i.category.toLowerCase(),
    published_at:  iso,
    // Explicit publish_at drives the registry scheduling gate (isEntryLive).
    // Both fields must carry the same slot for the gate to hold correctly.
    ...(i.scheduleAt ? { publish_at: iso } : {}),
    publish_date:  display,
    author_name:   AUTHORS[i.authorSlug].name,
    author_slug:   i.authorSlug,
    author_role:   AUTHORS[i.authorSlug].role,
    read_time:     '6 min read',
    thumbnail_src: `[FILL: https://images.unsplash.com/photo-XXXXXXXXXX?w=1200&h=675&fit=crop]`,
    thumbnail_alt: `[FILL: Descriptive image alt text — what is shown in the hero image]`,
    tags:          i.tags,
    citations: [
      { title: `[FILL: Source article title]`, url: `[FILL: https://...]`, publisher: `[FILL: Publisher Name]`, datePublished: iso },
      { title: `[FILL: Source article title]`, url: `[FILL: https://...]`, publisher: `[FILL: Publisher Name]`, datePublished: iso },
    ],
    metadata: {
      title:       metaTit,
      description: `[FILL: 130-155 chars. Primary keyword in first 60 chars. No generic phrases or AI boilerplate.]`,
      keywords: [
        `[FILL: primary keyword phrase]`,
        `[FILL: secondary keyword phrase]`,
        `[FILL: long-tail variant]`,
      ],
      alternates: { canonical: url },
      openGraph: {
        title:       metaTit,
        description: `[FILL: Same as metadata.description]`,
        images: [{
          url:    `[FILL: same as thumbnail_src]`,
          width:  1200,
          height: 675,
          alt:    `[FILL: same as thumbnail_alt]`,
        }],
      },
    },
    content_html: html,
  };
}

function buildJackJSON(i: ScaffoldInput): object {
  // Slug has category prefix for filename; URL path uses slug without the prefix
  const urlSlug     = i.slug.replace(new RegExp(`^${i.category.toLowerCase()}-`), '');
  const url         = `${SITE_URL}/${i.category.toLowerCase()}/${urlSlug}`;
  const iso         = i.scheduleAt ? toISOExact(i.scheduleAt) : toISO(i.now);
  const display     = toDisplay(i.scheduleAt ?? i.now);
  const metaTit     = metaTitle(i.title);
  const h1Tit       = h1Title(i.title);
  const html        = jackContentHTML(i.title, i.category);

  return {
    slug:              i.slug,
    article_type:      'jack_article',
    url,
    article_url:       url,
    title:             h1Tit,
    subtitle:          `[FILL: 1-2 sentence subtitle. Provides context the headline cannot. No em dashes.]`,
    category:          i.category,
    category_label:    `${i.category} | [FILL: Subcategory]`,
    department:        i.category,
    layout:            'news',
    accent_color:      'blue',
    status:            'published',
    breaking:          false,
    trending:          true,
    lifecycle:         'news',
    topic_tag:         i.category.toLowerCase(),
    publish_date:      display,
    publish_date_iso:  iso,
    modified_date_iso: iso,
    published_at:      iso,
    author_name:       AUTHORS[i.authorSlug].name,
    author_slug:       i.authorSlug,
    author: {
      name:       AUTHORS[i.authorSlug].name,
      slug:       i.authorSlug,
      department: i.category,
    },
    read_time:     '8 min read',
    thumbnail_src: `[FILL: https://images.unsplash.com/photo-XXXXXXXXXX?w=1200&h=675&fit=crop]`,
    thumbnail_alt: `[FILL: Descriptive image alt text — what is shown in the hero image]`,
    hero_image: {
      src: `[FILL: same as thumbnail_src]`,
      alt: `[FILL: same as thumbnail_alt]`,
    },
    tags:     i.tags,
    citations: [
      { title: `[FILL: Source article title]`, url: `[FILL: https://...]`, publisher: `[FILL: Publisher Name]`, datePublished: iso },
      { title: `[FILL: Source article title]`, url: `[FILL: https://...]`, publisher: `[FILL: Publisher Name]`, datePublished: iso },
      { title: `[FILL: Source article title]`, url: `[FILL: https://...]`, publisher: `[FILL: Publisher Name]`, datePublished: iso },
    ],
    keywords: [`[FILL: primary keyword phrase]`, `[FILL: secondary keyword phrase]`],
    show_corrections:        true,
    show_editorial_standards: true,
    breadcrumbs: [
      { href: '/',                          label: 'Home' },
      { href: `/${i.category.toLowerCase()}`, label: i.category },
    ],
    categories: [{ label: `[FILL: Subcategory]`, color: 'blue' }],
    sources: [
      { number: 1, title: `[FILL: Source title]`, url: `[FILL: https://...]`, author: `[FILL: Publisher]`, date: display },
      { number: 2, title: `[FILL: Source title]`, url: `[FILL: https://...]`, author: `[FILL: Publisher]`, date: display },
      { number: 3, title: `[FILL: Source title]`, url: `[FILL: https://...]`, author: `[FILL: Publisher]`, date: display },
    ],
    related_articles: [
      { url: `/[FILL: category/slug]`, title: `[FILL: Related article title]`, category: i.category, categoryColor: 'text-blue-600' },
      { url: `/[FILL: category/slug]`, title: `[FILL: Related article title]`, category: i.category, categoryColor: 'text-blue-600' },
      { url: `/[FILL: category/slug]`, title: `[FILL: Related article title]`, category: i.category, categoryColor: 'text-blue-600' },
    ],
    footer_tagline: `${i.category} Reporting from OzoneNews`,
    footer_links: [
      { href: `/${i.category.toLowerCase()}`, label: i.category },
      { href: '/about',                label: 'About' },
      { href: '/editorial-standards',  label: 'Editorial Standards' },
    ],
    engagement_slug: i.slug,
    metadata: {
      title:       metaTit,
      description: `[FILL: 130-155 chars. Primary keyword in first 60 chars. No generic phrases or AI boilerplate.]`,
      keywords: [`[FILL: primary keyword phrase]`, `[FILL: secondary keyword phrase]`],
      alternates: { canonical: url },
      openGraph: {
        title:       metaTit,
        description: `[FILL: Same as metadata.description]`,
        images: [{
          url:    `[FILL: same as thumbnail_src]`,
          width:  1200,
          height: 675,
          alt:    `[FILL: same as thumbnail_alt]`,
        }],
      },
    },
    content_html: html,
  };
}

// ── Interactive prompts ───────────────────────────────────────────────────────

function prompt(rl: rl.Interface, question: string): Promise<string> {
  return new Promise(resolve => rl.question(question, resolve));
}

async function runInteractive(): Promise<ScaffoldInput> {
  const iface = rl.createInterface({ input: process.stdin, output: process.stdout });
  console.log('\n  📝  Alfanso — OzoneNews Ghost Writer\n');

  const title      = (await prompt(iface, '  Title:          ')).trim();
  const typeRaw    = (await prompt(iface, '  Type [news/jack] (news): ')).trim().toLowerCase() || 'news';
  const catRaw     = (await prompt(iface, `  Category [${VALID_CATEGORIES.join('/')}] (News): `)).trim() || 'News';
  const authorRaw  = (await prompt(iface, `  Author slug (simon-minter): `)).trim() || 'simon-minter';
  const tagsRaw    = (await prompt(iface, '  Tags (comma-separated proper nouns): ')).trim();
  const customSlug = (await prompt(iface, '  Custom slug (leave blank to auto-generate): ')).trim();

  iface.close();

  const now      = new Date();
  const category = VALID_CATEGORIES.find(c => c.toLowerCase() === catRaw.toLowerCase()) ?? 'News';
  const type     = typeRaw === 'jack' ? 'jack' : 'news';
  const authorSlug = AUTHORS[authorRaw] ? authorRaw : 'simon-minter';
  const tags     = tagsRaw ? tagsRaw.split(',').map(t => t.trim()).filter(Boolean) : [`[FILL: Tag1]`, `[FILL: Tag2]`, `[FILL: Tag3]`, `[FILL: Tag4]`];
  const slug     = customSlug || slugify(title, category, now.getFullYear());

  return { title, slug, type, category, authorSlug, tags, now };
}

// ── Main ──────────────────────────────────────────────────────────────────────

async function main() {
  console.log('\n  🖊️  Alfanso — OzoneNews Ghost Writer\n');

  // ── Gather inputs ───────────────────────────────────────────────────────────
  let input: ScaffoldInput;

  const titleFlag  = getFlag('--title');
  const typeFlag   = getFlag('--type');
  const catFlag    = getFlag('--cat');
  const authorFlag = getFlag('--author');
  const tagsFlag   = getFlag('--tags');
  const slugFlag   = getFlag('--slug');
  const atFlag     = getFlag('--at');

  // Parse the optional schedule slot up front so both modes can use it.
  let scheduleAt: Date | undefined;
  if (atFlag) {
    const parsed = parseSchedule(atFlag);
    if (!parsed) {
      console.error(`  ✗  Could not parse --at "${atFlag}".`);
      console.error(`     Accepted: "2026-11-05T06:00", "2026-11-05", "tomorrow 6am", "today 18:30", "+2h".\n`);
      process.exit(1);
    }
    scheduleAt = parsed;
  }

  if (titleFlag) {
    // Non-interactive mode
    const now      = new Date();
    const category = VALID_CATEGORIES.find(c => c.toLowerCase() === (catFlag ?? '').toLowerCase()) ?? 'News';
    const type     = typeFlag === 'jack' ? 'jack' : 'news';
    const authorSlug = authorFlag && AUTHORS[authorFlag] ? authorFlag : 'simon-minter';
    const tags     = tagsFlag
      ? tagsFlag.split(',').map(t => t.trim()).filter(Boolean)
      : [`[FILL: Tag1]`, `[FILL: Tag2]`, `[FILL: Tag3]`, `[FILL: Tag4]`];
    const slug     = slugFlag || slugify(titleFlag, category, now.getFullYear());
    input = { title: titleFlag, slug, type, category, authorSlug, tags, now, scheduleAt };
  } else {
    // Interactive mode
    input = await runInteractive();
    if (atFlag) input.scheduleAt = scheduleAt;
  }

  // ── Validate ────────────────────────────────────────────────────────────────
  if (!input.title.trim()) {
    console.error('  ✗  Title is required.\n');
    process.exit(1);
  }

  // ── Schedule validation ─────────────────────────────────────────────────────
  if (input.scheduleAt) {
    const slot = input.scheduleAt;
    const nowMs = Date.now();
    if (slot.getTime() <= nowMs) {
      console.error(`  ✗  Schedule slot is in the past: ${slot.toString()}`);
      console.error(`     The publish gate would expose the article immediately.`);
      console.error(`     Use a future time, or omit --at to publish now.\n`);
      process.exit(1);
    }
    const daysAhead = Math.round((slot.getTime() - nowMs) / 86400e3 * 10) / 10;
    console.log(`  ⏱  Scheduled publish: ${slot.toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' })} (${daysAhead} day(s) ahead)`);
    console.log(`     publish_at + published_at both set. The registry gate holds it until then.\n`);
  }

  // ── Build JSON ──────────────────────────────────────────────────────────────
  const json = input.type === 'jack' ? buildJackJSON(input) : buildNewsJSON(input);
  const jsonStr = JSON.stringify(json, null, 2);

  // ── Determine file path ─────────────────────────────────────────────────────
  const store = STORE_FOR_TYPE[input.type];
  const year  = input.now.getFullYear();
  const month = twoDigitMonth(input.now);
  const dir   = path.join(STATIC_BASE, store, String(year), month);
  const file  = path.join(dir, `${input.slug}.json`);

  // ── Summary ─────────────────────────────────────────────────────────────────
  const urlSlug   = input.slug.replace(new RegExp(`^${input.category.toLowerCase()}-`), '');
  const articleUrl = `${SITE_URL}/${input.category.toLowerCase()}/${urlSlug}`;
  const editSlug   = `${input.category.toLowerCase()}-${input.slug}`;

  console.log(`\n  ────────────────────────────────────────────────────────`);
  console.log(`  📄  ${input.type === 'jack' ? 'JackArticle' : 'NewsArticle'}  ·  ${input.category}`);
  console.log(`  Title:   ${input.title}`);
  console.log(`  Slug:    ${input.slug}`);
  console.log(`  Author:  ${AUTHORS[input.authorSlug].name}`);
  console.log(`  Tags:    ${input.tags.join(', ')}`);
  if (input.scheduleAt) {
    console.log(`  Slot:    ${input.scheduleAt.toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' })}  (scheduled)`);
  } else {
    console.log(`  Slot:    immediate (no --at given)`);
  }
  console.log(`  Path:    content/static/${store}/${year}/${month}/${input.slug}.json`);
  console.log(`  URL:     ${articleUrl}`);
  console.log(`  ────────────────────────────────────────────────────────\n`);

  if (DRY) {
    console.log(jsonStr);
    console.log('\n  [dry run — file not written]\n');
    return;
  }

  // ── Write file ──────────────────────────────────────────────────────────────
  if (fs.existsSync(file)) {
    console.error(`  ✗  File already exists: ${file}`);
    console.error(`     Use a different slug or delete the existing file first.\n`);
    process.exit(1);
  }

  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(file, jsonStr, 'utf8');
  console.log(`  ✔  File written → ${file}`);

  // ── Sync registry ───────────────────────────────────────────────────────────
  console.log(`\n  🔄  Syncing content_registry.json...`);
  try {
    execSync(
      `npx ts-node --project tsconfig.scripts.json scripts/sync-registry.ts --write`,
      { stdio: 'pipe', cwd: process.cwd() },
    );
    console.log(`  ✔  Registry updated`);
  } catch (e) {
    console.warn(`  ⚠  Registry sync failed (run npm run wiki:sync manually)`);
  }

  // ── Next steps ───────────────────────────────────────────────────────────────
  console.log(`\n  ─────────────────── Next Steps ──────────────────────────`);
  console.log(`  1. Fill in all [FILL: ...] markers in the JSON file`);
  console.log(`  2. Replace thumbnail_src with a real image URL`);
  console.log(`  3. Write metadata.description (130-155 chars)`);
  console.log(`  4. Run:  npm run publish`);
  console.log(`\n  CMS Edit:  http://localhost:3000/admin/articles/edit/${editSlug}`);
  console.log(`  Live URL:  ${articleUrl}`);
  console.log(`  ────────────────────────────────────────────────────────\n`);

  // ── Open in editor ──────────────────────────────────────────────────────────
  if (OPEN) {
    const editor = process.env.EDITOR ?? 'code';
    try {
      execSync(`${editor} "${file}"`, { stdio: 'ignore' });
    } catch {
      console.log(`  (Could not open in editor — open manually: ${file})`);
    }
  }
}

main().catch(err => {
  console.error('\n  ✗  Alfanso error:', err.message ?? err);
  process.exit(1);
});
