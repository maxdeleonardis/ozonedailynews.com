#!/usr/bin/env ts-node
/**
 * scripts/rss-digest.ts
 *
 * Fetches RSS/Atom feeds from the OzoneNews source watchlist,
 * filters items published within the last N hours, groups by
 * editorial vertical, and writes a markdown digest to:
 *   content/daily-digest/YYYY-MM-DD.md
 *
 * Usage:
 *   npm run rss:digest                        (last 24 hours, all verticals)
 *   npm run rss:digest -- --hours 48          (extend window)
 *   npm run rss:digest -- --vertical tech     (one vertical only)
 *   npm run rss:digest -- --stdout            (print to terminal, no file)
 *   npm run rss:digest -- --dry               (count items, no output file)
 */

import * as fs from 'fs';
import * as path from 'path';
import { XMLParser } from 'fast-xml-parser';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type Vertical = 'Science' | 'Tech' | 'Space' | 'Energy' | 'Finance' | 'Quantum' | 'Robotics';

interface FeedDef {
  name: string;
  url: string;
  vertical: Vertical;
  /** Optional note shown in digest header */
  note?: string;
}

interface DigestItem {
  title: string;
  url: string;
  source: string;
  vertical: Vertical;
  published: Date;
  summary?: string;
}

// ---------------------------------------------------------------------------
// Feed list — maps to ozonedailynews.md source watchlist
// ---------------------------------------------------------------------------

const FEEDS: FeedDef[] = [
  // --- Science ---
  {
    name: 'NASA Breaking News',
    url: 'https://www.nasa.gov/rss/dyn/breaking_news.rss',
    vertical: 'Science',
  },
  {
    name: 'Space Weather (spaceweather.com)',
    url: 'https://spaceweather.com/news.rss',
    vertical: 'Science',
    note: 'Space weather, solar flares, geomagnetic storms',
  },
  {
    name: 'Science News',
    url: 'https://www.sciencenews.org/feed',
    vertical: 'Science',
  },
  {
    name: 'ScienceAlert',
    url: 'https://www.sciencealert.com/feed',
    vertical: 'Science',
    note: 'Press releases and research news from institutions worldwide',
  },
  {
    name: 'Live Science',
    url: 'https://www.livescience.com/feeds.xml',
    vertical: 'Science',
  },
  {
    name: 'Phys.org',
    url: 'https://phys.org/rss-feed/',
    vertical: 'Science',
  },
  {
    name: 'New Scientist',
    url: 'https://www.newscientist.com/feed/home/',
    vertical: 'Science',
  },
  {
    name: 'Nature News',
    url: 'https://www.nature.com/nature.rss',
    vertical: 'Science',
  },

  // --- Space ---
  {
    name: 'SpaceFlightNow',
    url: 'https://spaceflightnow.com/feed/',
    vertical: 'Space',
  },
  {
    name: 'NASASpaceFlight',
    url: 'https://www.nasaspaceflight.com/feed/',
    vertical: 'Space',
    note: 'Launch vehicles, Starship, Falcon 9 milestones',
  },
  {
    name: 'SpaceNews',
    url: 'https://spacenews.com/feed/',
    vertical: 'Space',
    note: 'Space commerce, launch contracts, policy',
  },
  {
    name: 'Planetary Society',
    url: 'https://www.planetary.org/articles?format=rss',
    vertical: 'Space',
  },

  // Tech ---
  {
    name: "Tom's Hardware",
    url: 'https://www.tomshardware.com/feeds/all',
    vertical: 'Tech',
    note: 'GPU/CPU reviews, NVIDIA, semiconductor news',
  },
  {
    name: 'Ars Technica (Tech)',
    url: 'https://feeds.arstechnica.com/arstechnica/technology-lab',
    vertical: 'Tech',
  },
  {
    name: 'IEEE Spectrum',
    url: 'https://spectrum.ieee.org/feeds/feed.rss',
    vertical: 'Tech',
    note: 'Engineering, semiconductors, advanced materials',
  },
  {
    name: 'The Register',
    url: 'https://www.theregister.com/headlines.atom',
    vertical: 'Tech',
    note: 'Data centers, cloud infrastructure, hardware',
  },
  {
    name: 'NYT Technology',
    url: 'https://rss.nytimes.com/services/xml/rss/nyt/Technology.xml',
    vertical: 'Tech',
  },
  {
    name: 'Next Big Future',
    url: 'https://www.nextbigfuture.com/feed',
    vertical: 'Tech',
    note: 'Advanced tech, nuclear, space, AI hardware',
  },

  // --- Energy ---
  {
    name: 'NRC News',
    url: 'https://www.nrc.gov/reading-rm/doc-collections/news/news.rss/index',
    vertical: 'Energy',
    note: 'Nuclear regulatory decisions, SMR licensing',
  },
  {
    name: 'Power Magazine',
    url: 'https://www.powermag.com/feed/',
    vertical: 'Energy',
    note: 'Power generation, nuclear, grid infrastructure',
  },
  {
    name: 'Canary Media',
    url: 'https://www.canarymedia.com/rss',
    vertical: 'Energy',
    note: 'Clean energy, battery storage, grid',
  },
  {
    name: 'Electrek',
    url: 'https://electrek.co/feed/',
    vertical: 'Energy',
    note: 'EV, solar, battery, energy transition',
  },

  // --- Finance ---
  {
    name: 'NYT Business',
    url: 'https://rss.nytimes.com/services/xml/rss/nyt/Business.xml',
    vertical: 'Finance',
  },
  {
    name: 'NPR Business',
    url: 'https://feeds.npr.org/1006/rss.xml',
    vertical: 'Finance',
  },

  // --- Quantum ---
  {
    name: 'arXiv quant-ph',
    url: 'https://rss.arxiv.org/rss/quant-ph',
    vertical: 'Quantum',
    note: 'Latest quantum computing preprints',
  },
  {
    name: 'arXiv cond-mat',
    url: 'https://rss.arxiv.org/rss/cond-mat',
    vertical: 'Quantum',
    note: 'Condensed matter, topological qubits',
  },

  // --- Robotics ---
  {
    name: 'arXiv cs.RO',
    url: 'https://rss.arxiv.org/rss/cs.RO',
    vertical: 'Robotics',
    note: 'Robotics and physical AI preprints',
  },
];

// ---------------------------------------------------------------------------
// Arg parsing
// ---------------------------------------------------------------------------

const args = process.argv.slice(2);
const getArg = (flag: string): string | undefined => {
  const i = args.indexOf(flag);
  return i !== -1 ? args[i + 1] : undefined;
};
const hasFlag = (flag: string): boolean => args.includes(flag);

const HOURS = parseInt(getArg('--hours') ?? '24', 10);
const VERTICAL_FILTER = getArg('--vertical')?.toLowerCase() as Lowercase<Vertical> | undefined;
const STDOUT_ONLY = hasFlag('--stdout');
const DRY_RUN = hasFlag('--dry');

// ---------------------------------------------------------------------------
// XML parser config
// ---------------------------------------------------------------------------

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '_',
  allowBooleanAttributes: true,
  parseTagValue: true,
  trimValues: true,
  cdataPropName: '__cdata',
});

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function ago(ms: number): string {
  const h = Math.floor(ms / 3_600_000);
  const m = Math.floor((ms % 3_600_000) / 60_000);
  if (h > 0) return `${h}h ${m}m ago`;
  return `${m}m ago`;
}

function truncate(str: string, max: number): string {
  if (!str) return '';
  const clean = str.replace(/<[^>]+>/g, '').replace(/&[a-z]+;/g, ' ').trim();
  return clean.length > max ? clean.slice(0, max - 1) + '…' : clean;
}

function parseDate(raw: string | undefined): Date | null {
  if (!raw) return null;
  const d = new Date(raw);
  return isNaN(d.getTime()) ? null : d;
}

function getText(node: unknown): string {
  if (!node) return '';
  if (typeof node === 'string') return node;
  if (typeof node === 'object' && node !== null) {
    const obj = node as Record<string, unknown>;
    if ('__cdata' in obj) return String(obj.__cdata);
    if ('#text' in obj) return String(obj['#text']);
  }
  return String(node);
}

// ---------------------------------------------------------------------------
// Fetch + parse one feed
// ---------------------------------------------------------------------------

async function fetchFeed(feed: FeedDef, cutoff: Date): Promise<DigestItem[]> {
  const items: DigestItem[] = [];

  let xml: string;
  try {
    const res = await fetch(feed.url, {
      signal: AbortSignal.timeout(10_000),
      headers: { 'User-Agent': 'OzoneNews-RSSDigest/1.0 (+https://www.ozonedailynews.com)' },
    });
    if (!res.ok) {
      process.stderr.write(`  [skip] ${feed.name} → HTTP ${res.status}\n`);
      return [];
    }
    xml = await res.text();
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    process.stderr.write(`  [fail] ${feed.name} → ${msg}\n`);
    return [];
  }

  let parsed: Record<string, unknown>;
  try {
    parsed = parser.parse(xml) as Record<string, unknown>;
  } catch {
    process.stderr.write(`  [fail] ${feed.name} → XML parse error\n`);
    return [];
  }

  // RSS 2.0
  const rss = parsed['rss'] as Record<string, unknown> | undefined;
  if (rss) {
    const channel = rss['channel'] as Record<string, unknown> | undefined;
    if (channel) {
      const rawItems = channel['item'];
      const entries = Array.isArray(rawItems)
        ? rawItems
        : rawItems
          ? [rawItems]
          : [];

      for (const entry of entries as Record<string, unknown>[]) {
        const pubDateStr = getText(entry['pubDate']) || getText(entry['dc:date']);
        const published = parseDate(pubDateStr);
        if (!published || published < cutoff) continue;

        const title = truncate(getText(entry['title']), 120);
        const link =
          getText(entry['link']) ||
          (entry['guid'] ? getText(entry['guid']) : '');
        const desc = truncate(
          getText(entry['description']) || getText(entry['content:encoded']),
          200
        );

        if (!title || !link) continue;

        items.push({
          title,
          url: link.startsWith('http') ? link : `https://${link}`,
          source: feed.name,
          vertical: feed.vertical,
          published,
          summary: desc || undefined,
        });
      }
    }
  }

  // Atom
  const feed_ = parsed['feed'] as Record<string, unknown> | undefined;
  if (feed_) {
    const rawEntries = feed_['entry'];
    const entries = Array.isArray(rawEntries)
      ? rawEntries
      : rawEntries
        ? [rawEntries]
        : [];

    for (const entry of entries as Record<string, unknown>[]) {
      const updatedStr = getText(entry['updated']) || getText(entry['published']);
      const published = parseDate(updatedStr);
      if (!published || published < cutoff) continue;

      const title = truncate(getText(entry['title']), 120);

      // Atom link can be an array of objects or single object
      let link = '';
      const rawLink = entry['link'];
      if (Array.isArray(rawLink)) {
        const altLink = (rawLink as Record<string, unknown>[]).find(
          (l) => l['_rel'] === 'alternate' || !l['_rel']
        );
        link = altLink ? String(altLink['_href'] ?? '') : '';
      } else if (rawLink && typeof rawLink === 'object') {
        link = String((rawLink as Record<string, unknown>)['_href'] ?? '');
      } else {
        link = getText(rawLink);
      }

      const desc = truncate(
        getText(entry['summary']) || getText(entry['content']),
        200
      );

      if (!title || !link) continue;

      items.push({
        title,
        url: link.startsWith('http') ? link : `https://${link}`,
        source: feed.name,
        vertical: feed.vertical,
        published,
        summary: desc || undefined,
      });
    }
  }

  return items;
}

// ---------------------------------------------------------------------------
// Markdown renderer
// ---------------------------------------------------------------------------

const VERTICAL_ORDER: Vertical[] = [
  'Science',
  'Space',
  'Tech',
  'Energy',
  'Quantum',
  'Robotics',
  'Finance',
];

function renderMarkdown(
  items: DigestItem[],
  now: Date,
  hours: number
): string {
  const dateStr = now.toISOString().slice(0, 10);
  const timeStr = now.toISOString().replace('T', ' ').slice(0, 19) + ' UTC';

  const grouped = new Map<Vertical, DigestItem[]>();
  for (const v of VERTICAL_ORDER) grouped.set(v, []);
  for (const item of items) {
    grouped.get(item.vertical)?.push(item);
  }

  const lines: string[] = [
    `# OzoneNews RSS Digest | ${dateStr}`,
    '',
    `**Generated:** ${timeStr}  `,
    `**Window:** last ${hours} hours  `,
    `**Total items:** ${items.length}`,
    '',
    '---',
    '',
  ];

  for (const vertical of VERTICAL_ORDER) {
    const vItems = grouped.get(vertical)!;
    if (!vItems.length) continue;

    const feedsInVertical = FEEDS.filter((f) => f.vertical === vertical);
    const sourceNames = feedsInVertical.map((f) => f.name).join(', ');

    lines.push(`## ${vertical}`);
    lines.push('');
    lines.push(`*Sources monitored: ${sourceNames}*`);
    lines.push('');

    // Sort newest first
    vItems.sort((a, b) => b.published.getTime() - a.published.getTime());

    for (let i = 0; i < vItems.length; i++) {
      const item = vItems[i];
      const elapsed = ago(now.getTime() - item.published.getTime());
      lines.push(`### ${i + 1}. [${item.title}](${item.url})`);
      lines.push('');
      lines.push(`**Source:** ${item.source} | **Published:** ${elapsed} (${item.published.toUTCString()})`);
      if (item.summary) {
        lines.push('');
        lines.push(`> ${item.summary}`);
      }
      lines.push('');
    }

    lines.push('---');
    lines.push('');
  }

  lines.push(`*Generated by \`npm run rss:digest\` | OzoneNews editorial research tool*`);

  return lines.join('\n');
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  const now = new Date();
  const cutoff = new Date(now.getTime() - HOURS * 3_600_000);
  const dateStr = now.toISOString().slice(0, 10);

  const activeFeedDefs = VERTICAL_FILTER
    ? FEEDS.filter((f) => f.vertical.toLowerCase() === VERTICAL_FILTER)
    : FEEDS;

  if (!activeFeedDefs.length) {
    console.error(`No feeds match vertical "${VERTICAL_FILTER}"`);
    console.error(`Valid verticals: ${VERTICAL_ORDER.join(', ')}`);
    process.exit(1);
  }

  console.log(`\n📰 OzoneNews RSS Digest`);
  console.log(`   Window: last ${HOURS} hours (since ${cutoff.toUTCString()})`);
  if (VERTICAL_FILTER) console.log(`   Vertical filter: ${VERTICAL_FILTER}`);
  console.log(`   Fetching ${activeFeedDefs.length} feeds...\n`);

  // Fetch all in parallel
  const results = await Promise.allSettled(
    activeFeedDefs.map((f) => fetchFeed(f, cutoff))
  );

  const allItems: DigestItem[] = results.flatMap((r) =>
    r.status === 'fulfilled' ? r.value : []
  );

  // Deduplicate by URL
  const seen = new Set<string>();
  const dedupedItems = allItems.filter((item) => {
    if (seen.has(item.url)) return false;
    seen.add(item.url);
    return true;
  });

  // Sort newest first overall
  dedupedItems.sort((a, b) => b.published.getTime() - a.published.getTime());

  // Summary
  console.log(`✅ Found ${dedupedItems.length} items (after dedup) across all verticals:\n`);
  const verticalCounts = new Map<Vertical, number>();
  for (const item of dedupedItems) {
    verticalCounts.set(item.vertical, (verticalCounts.get(item.vertical) ?? 0) + 1);
  }
  for (const [v, count] of verticalCounts.entries()) {
    if (count > 0) console.log(`   ${v.padEnd(12)} ${count} items`);
  }
  console.log('');

  if (DRY_RUN) {
    console.log('Dry run — no file written.');
    return;
  }

  const markdown = renderMarkdown(dedupedItems, now, HOURS);

  if (STDOUT_ONLY) {
    process.stdout.write(markdown + '\n');
    return;
  }

  // Write to content/daily-digest/YYYY-MM-DD.md
  const outDir = path.join(process.cwd(), 'content', 'daily-digest');
  fs.mkdirSync(outDir, { recursive: true });

  const outPath = path.join(outDir, `${dateStr}.md`);
  fs.writeFileSync(outPath, markdown, 'utf8');

  console.log(`📄 Digest written to: content/daily-digest/${dateStr}.md`);
  console.log(`   Open with: code ${outPath}\n`);
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
