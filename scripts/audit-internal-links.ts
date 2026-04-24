#!/usr/bin/env tsx
// =============================================================================
// scripts/audit-internal-links.ts
//
// Audits every published article's content_html for internal link density.
// Reports articles below the per-type minimum and groups gaps by SEO pillar.
//
// Per copilot-instructions.md minimums:
//   NewsArticle   (articles)         ≥ 4 internal links
//   JackArticle   (jack_articles)    ≥ 5 internal links
//   ArticlePage   (article_pages)    ≥ 3 internal links
//   CreatorArticle(creator_articles) ≥ 3 internal links
//   AlysaArticle  (alysa_articles)   ≥ 3 internal links
//
// Usage:
//   npx tsx --env-file=.env.local scripts/audit-internal-links.ts
//   npx tsx --env-file=.env.local scripts/audit-internal-links.ts --csv
//   npx tsx --env-file=.env.local scripts/audit-internal-links.ts --pillar "GTA 6"
// =============================================================================

import path from 'path';
import fs from 'fs';
import * as dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';

dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

// ── Config ───────────────────────────────────────────────────────────────────

const EMIT_CSV   = process.argv.includes('--csv');
const PILLAR_ARG = (() => {
  const i = process.argv.indexOf('--pillar');
  return i !== -1 ? process.argv[i + 1] : null;
})();

// Per-type minimum internal link counts (from copilot-instructions.md)
const MINIMUMS: Record<string, number> = {
  articles:         4,
  jack_articles:    5,
  article_pages:    3,
  creator_articles: 3,
  alysa_articles:   3,
};

// Human-readable type label for each table
const TYPE_LABEL: Record<string, string> = {
  articles:         'NewsArticle',
  jack_articles:    'JackArticle',
  article_pages:    'ArticlePage',
  creator_articles: 'CreatorArticle',
  alysa_articles:   'AlysaArticle',
};

// ── SEO Pillars (from copilot-instructions.md priority content pillars) ──────
//
// Order matters: first match wins. More specific paths listed before
// their parent so e.g. /video-games/gta-6 matches before /video-games.

interface Pillar {
  name: string;
  prefixes: string[];
  targetKeyword: string;
  hubUrl: string;
}

const PILLARS: Pillar[] = [
  { name: 'GTA 6',              prefixes: ['/video-games/gta-6'],    targetKeyword: 'GTA 6 (5M+/mo)',        hubUrl: '/video-games/gta-6'    },
  { name: 'Nintendo Switch 2',  prefixes: ['/video-games/switch2'],   targetKeyword: 'Nintendo Switch 2 (2M+/mo)', hubUrl: '/video-games/switch2' },
  { name: 'Video Games',        prefixes: ['/video-games'],           targetKeyword: 'gaming',                hubUrl: '/video-games'          },
  { name: 'OpenAI',             prefixes: ['/open-ai'],               targetKeyword: 'OpenAI (3M+/mo)',       hubUrl: '/open-ai'              },
  { name: 'Google',             prefixes: ['/google'],                targetKeyword: 'Google news (2M+/mo)',  hubUrl: '/google'               },
  { name: 'Apple',              prefixes: ['/apple'],                 targetKeyword: 'Apple news (1M+/mo)',   hubUrl: '/apple'                },
  { name: 'Nvidia',             prefixes: ['/nvidia'],                targetKeyword: 'Nvidia news (800K+/mo)',hubUrl: '/nvidia'               },
  { name: 'Finance',            prefixes: ['/finance', '/crypto'],    targetKeyword: 'finance news (500K+/mo)',hubUrl: '/finance'             },
  { name: 'Entertainment',      prefixes: ['/entertainment'],         targetKeyword: 'streaming / studio',    hubUrl: '/entertainment'        },
  { name: 'Winter Olympics',    prefixes: ['/winter-olympics'],       targetKeyword: '2026 Winter Olympics',  hubUrl: '/winter-olympics'      },
  { name: 'World Cup',          prefixes: ['/world-cup'],             targetKeyword: '2026 World Cup',        hubUrl: '/world-cup'            },
  { name: 'Tech / AI',          prefixes: ['/tech', '/technology', '/microsoft', '/amazon', '/meta', '/claude', '/cloudflare', '/shopify', '/cursor', '/blitzy', '/neurophos'], targetKeyword: 'tech/AI', hubUrl: '/tech' },
  { name: 'Trump / Politics',   prefixes: ['/trump', '/politics'],    targetKeyword: 'Trump / politics',      hubUrl: '/trump'                },
  { name: 'Influencer',         prefixes: ['/influencer', '/artists', '/redbull'], targetKeyword: 'creators', hubUrl: '/influencer' },
  { name: 'YouTube / Sidemen',  prefixes: ['/youtube'],               targetKeyword: 'YouTube',               hubUrl: '/youtube'              },
  { name: 'Other',              prefixes: ['/'],                      targetKeyword: '',                       hubUrl: '/'                     },
];

function classifyPillar(urlPath: string): Pillar {
  for (const pillar of PILLARS) {
    if (pillar.prefixes.some(p => urlPath === p || urlPath.startsWith(p + '/'))) {
      return pillar;
    }
  }
  return PILLARS[PILLARS.length - 1]; // 'Other'
}

// ── Link counting ─────────────────────────────────────────────────────────────

// Match href="/some/path" or href='/some/path' — internal paths only
// Excludes: https://, http://, //, #, mailto:, tel:
const INTERNAL_LINK_RE = /href=["'](?!https?:\/\/|\/\/|#|mailto:|tel:)(\/[^"'?\s#][^"']*?)["']/gi;

function countInternalLinks(html: string): { count: number; hrefs: string[] } {
  const hrefs: string[] = [];
  let match: RegExpExecArray | null;
  // Reset lastIndex each call since we reuse the regex with /g
  INTERNAL_LINK_RE.lastIndex = 0;
  const freshRe = new RegExp(INTERNAL_LINK_RE.source, 'gi');
  while ((match = freshRe.exec(html)) !== null) {
    hrefs.push(match[1]);
  }
  return { count: hrefs.length, hrefs: [...new Set(hrefs)] }; // deduplicate
}

// ── Article record shape ──────────────────────────────────────────────────────

interface ArticleRecord {
  table:       string;
  typeLabel:   string;
  slug:        string;
  url:         string;     // canonical path e.g. /apple/news/xyz
  title:       string;
  linkCount:   number;
  uniqueLinks: string[];
  minimum:     number;
  deficit:     number;     // minimum - linkCount  (negative = passes)
  pillar:      string;
  hubUrl:      string;
}

// ── Fetch helpers ─────────────────────────────────────────────────────────────

const TABLES_CONFIG = [
  { table: 'articles',         urlField: 'url',                titleField: 'title',     contentField: 'content_html' },
  { table: 'jack_articles',    urlField: 'article_url',        titleField: 'title',     contentField: 'content_html' },
  { table: 'article_pages',    urlField: 'url',                titleField: 'title',     contentField: 'content_html' },
  { table: 'creator_articles', urlField: 'schema_article_url', titleField: 'hero_name', contentField: 'content_html' },
  { table: 'alysa_articles',   urlField: 'schema_article_url', titleField: 'hero_name', contentField: 'content_html' },
] as const;

// ── Main ──────────────────────────────────────────────────────────────────────

async function run() {
  console.log('\n🔍  Auditing internal link density across all article tables…\n');

  const allRecords: ArticleRecord[] = [];

  for (const { table, urlField, titleField, contentField } of TABLES_CONFIG) {
    const selectFields = `slug,${titleField},${urlField},${contentField}`;

    const { data, error } = await supabase
      .from(table)
      .select(selectFields)
      .order('slug', { ascending: true });

    if (error) {
      console.warn(`⚠️   Could not query ${table}: ${error.message}`);
      continue;
    }

    const minimum = MINIMUMS[table];
    const typeLabel = TYPE_LABEL[table];
    let tablePass = 0, tableFail = 0;

    for (const row of data || []) {
      const rawUrl     = (row[urlField] as string | null) ?? '';
      const title      = (row[titleField as keyof typeof row] as string | null) ?? '';
      const contentHtml = (row[contentField] as string | null) ?? '';

      // Normalize URL (strip domain if full URL stored)
      const urlPath = rawUrl.replace(/^https?:\/\/[^/]+/, '');
      if (!urlPath) continue; // no URL set — audit-db-coverage handles this

      const { count, hrefs } = countInternalLinks(contentHtml);
      const deficit = minimum - count;
      const pillar  = classifyPillar(urlPath);

      if (deficit <= 0) {
        tablePass++;
      } else {
        tableFail++;
      }

      allRecords.push({
        table,
        typeLabel,
        slug:        row.slug as string,
        url:         urlPath,
        title:       title.substring(0, 80),
        linkCount:   count,
        uniqueLinks: hrefs,
        minimum,
        deficit,
        pillar:      pillar.name,
        hubUrl:      pillar.hubUrl,
      });
    }

    const total = tablePass + tableFail;
    const pct   = total > 0 ? Math.round((tablePass / total) * 100) : 0;
    const icon  = tableFail === 0 ? '✅' : tableFail <= 5 ? '🟡' : '🔴';
    console.log(`  ${icon}  ${table.padEnd(20)} ${tablePass}/${total} pass (${pct}%)  |  ${tableFail} need links`);
  }

  // ── Filter by pillar if requested ─────────────────────────────────────────
  const filtered = PILLAR_ARG
    ? allRecords.filter(r => r.pillar.toLowerCase().includes(PILLAR_ARG.toLowerCase()))
    : allRecords;

  const failing = filtered.filter(r => r.deficit > 0).sort((a, b) => b.deficit - a.deficit);

  console.log(`\n${'─'.repeat(70)}`);
  console.log(`  Total articles audited : ${allRecords.length}`);
  console.log(`  Failing link minimum   : ${allRecords.filter(r => r.deficit > 0).length}`);
  console.log(`  Passing                : ${allRecords.filter(r => r.deficit <= 0).length}`);
  console.log(`${'─'.repeat(70)}\n`);

  if (failing.length === 0) {
    console.log('✅  All articles meet internal link minimums!');
    return;
  }

  // ── Group by pillar ───────────────────────────────────────────────────────
  const byPillar = new Map<string, ArticleRecord[]>();
  for (const rec of failing) {
    if (!byPillar.has(rec.pillar)) byPillar.set(rec.pillar, []);
    byPillar.get(rec.pillar)!.push(rec);
  }

  // Sort pillars by article count descending (biggest gap first)
  const sortedPillars = [...byPillar.entries()].sort((a, b) => b[1].length - a[1].length);

  for (const [pillarName, recs] of sortedPillars) {
    const pillarDef = PILLARS.find(p => p.name === pillarName)!;
    const avgDeficit = Math.round(recs.reduce((s, r) => s + r.deficit, 0) / recs.length * 10) / 10;

    console.log(`\n${'═'.repeat(70)}`);
    console.log(`  📌  ${pillarName.toUpperCase()}`);
    if (pillarDef?.targetKeyword) console.log(`       Target: ${pillarDef.targetKeyword}  |  Hub: ${pillarDef.hubUrl}`);
    console.log(`       ${recs.length} article(s) below minimum  |  avg deficit: ${avgDeficit} link(s)`);
    console.log(`${'═'.repeat(70)}`);

    for (const rec of recs) {
      const deficit = `+${rec.deficit} needed`.padEnd(12);
      const have    = `has ${rec.linkCount}/${rec.minimum}`.padEnd(10);
      console.log(`\n  🔴  [${rec.typeLabel}] ${deficit} ${have}`);
      console.log(`       URL  : ${rec.url}`);
      console.log(`       Title: ${rec.title}`);
      if (rec.uniqueLinks.length > 0) {
        console.log(`       Links found:`);
        rec.uniqueLinks.slice(0, 8).forEach(l => console.log(`         → ${l}`));
        if (rec.uniqueLinks.length > 8) console.log(`         … and ${rec.uniqueLinks.length - 8} more`);
      } else {
        console.log(`       Links found: none`);
      }
    }
  }

  // ── Summary table by pillar ───────────────────────────────────────────────
  console.log(`\n${'─'.repeat(70)}`);
  console.log('  GAP REPORT BY PILLAR\n');
  console.log('  Pillar'.padEnd(30) + 'Failing'.padEnd(10) + 'Total'.padEnd(10) + 'Avg deficit');
  console.log('  ' + '─'.repeat(56));

  for (const [pillarName, recs] of sortedPillars) {
    const total   = allRecords.filter(r => r.pillar === pillarName).length;
    const avgDef  = (recs.reduce((s, r) => s + r.deficit, 0) / recs.length).toFixed(1);
    console.log(
      `  ${pillarName.padEnd(28)} ${String(recs.length).padEnd(10)} ${String(total).padEnd(10)} ${avgDef}`
    );
  }
  console.log();

  // ── CSV export ────────────────────────────────────────────────────────────
  if (EMIT_CSV) {
    const csvPath = path.resolve(__dirname, '../Docs/seo-reports/internal-links-gap.csv');
    fs.mkdirSync(path.dirname(csvPath), { recursive: true });

    const header = 'table,type,slug,url,title,link_count,minimum,deficit,pillar,existing_links';
    const rows = allRecords
      .filter(r => r.deficit > 0)
      .sort((a, b) => b.deficit - a.deficit)
      .map(r => [
        r.table,
        r.typeLabel,
        r.slug,
        r.url,
        `"${r.title.replace(/"/g, '""')}"`,
        r.linkCount,
        r.minimum,
        r.deficit,
        r.pillar,
        `"${r.uniqueLinks.join(' | ')}"`,
      ].join(','));

    fs.writeFileSync(csvPath, [header, ...rows].join('\n'));
    console.log(`📄  CSV written to: ${csvPath}`);
    console.log(`    Open in Excel/Sheets and filter by "pillar" to work cluster by cluster.\n`);
  } else {
    console.log(`  💡  Run with --csv to export a full gap report to Docs/seo-reports/internal-links-gap.csv`);
    console.log(`  💡  Run with --pillar "GTA 6" to filter to a single pillar.\n`);
  }
}

if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
  console.error('❌  Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

run().catch(e => { console.error(e); process.exit(1); });
