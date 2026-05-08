#!/usr/bin/env npx tsx
/**
 * alfasa-suggest.ts
 *
 * Alfasa session briefing — run this at the start of every writing session.
 *
 *   npm run alfasa
 *
 * Reads ONLY local files. Zero network calls. < 1 second.
 *
 * Output:
 *   1. Last session summary (last 5 published articles)
 *   2. Stale pages (published too long ago relative to category thresholds)
 *   3. Priority content gaps (pillars with low sub-article count)
 *   4. E-E-A-T score distribution across recent publishes
 *   5. Quick OStandard reminders
 */

import * as fs from 'fs';
import * as path from 'path';
import { readSessionLog } from './alfasa-session-log';

// ── Config ────────────────────────────────────────────────────────────────────

const REGISTRY_PATH = path.resolve(process.cwd(), 'content_registry.json');
const THRESHOLDS_PATH = path.resolve(process.cwd(), '.alfasa', 'stale-thresholds.json');
const GA_CACHE_PATH = path.resolve(process.cwd(), '.alfasa', 'ga-cache.json');

// Default stale thresholds in days (how long before a page needs a refresh check)
const DEFAULT_THRESHOLDS: Record<string, number> = {
  news: 7,
  gaming: 14,
  tech: 21,
  finance: 14,
  crypto: 7,
  politics: 7,
  world: 7,
  science: 21,
  entertainment: 14,
  culture: 30,
  sports: 7,
  wiki: 90,
  hub: 30,
  creator: 60,
  service: 180,
  default: 30,
};

// Priority content pillars — used for gap analysis
const PRIORITY_PILLARS: { hub: string; label: string; target: number }[] = [
  { hub: '/video-games/gta-6', label: 'GTA 6', target: 8 },
  { hub: '/video-games/switch2', label: 'Nintendo Switch 2', target: 6 },
  { hub: '/open-ai', label: 'OpenAI', target: 8 },
  { hub: '/google', label: 'Google News', target: 6 },
  { hub: '/apple', label: 'Apple News', target: 6 },
  { hub: '/nvidia', label: 'Nvidia', target: 5 },
  { hub: '/finance', label: 'Finance', target: 5 },
  { hub: '/crypto', label: 'Crypto', target: 5 },
  { hub: '/winter-olympics', label: 'Winter Olympics 2026', target: 8 },
  { hub: '/world-cup', label: 'World Cup 2026', target: 6 },
];

// ── ANSI helpers ─────────────────────────────────────────────────────────────

const c = {
  red:    (s: string) => `\x1b[31m${s}\x1b[0m`,
  yellow: (s: string) => `\x1b[33m${s}\x1b[0m`,
  green:  (s: string) => `\x1b[32m${s}\x1b[0m`,
  cyan:   (s: string) => `\x1b[36m${s}\x1b[0m`,
  bold:   (s: string) => `\x1b[1m${s}\x1b[0m`,
  gray:   (s: string) => `\x1b[90m${s}\x1b[0m`,
  blue:   (s: string) => `\x1b[34m${s}\x1b[0m`,
  white:  (s: string) => `\x1b[37m${s}\x1b[0m`,
};

// ── Registry reader ───────────────────────────────────────────────────────────

interface RegistryEntry {
  slug?: string;
  url?: string;
  title?: string;
  category?: string;
  published_at?: string;
  component?: string;
  wordCount?: number;
}

function readRegistry(): RegistryEntry[] {
  try {
    if (!fs.existsSync(REGISTRY_PATH)) return [];
    const raw = JSON.parse(fs.readFileSync(REGISTRY_PATH, 'utf-8'));
    // Registry may be an object keyed by slug, or an array
    if (Array.isArray(raw)) return raw;
    return Object.values(raw);
  } catch {
    return [];
  }
}

function readThresholds(): Record<string, number> {
  try {
    if (!fs.existsSync(THRESHOLDS_PATH)) return DEFAULT_THRESHOLDS;
    return { ...DEFAULT_THRESHOLDS, ...JSON.parse(fs.readFileSync(THRESHOLDS_PATH, 'utf-8')) };
  } catch {
    return DEFAULT_THRESHOLDS;
  }
}

// ── GA cache reader ───────────────────────────────────────────────────────────

interface GaPageRow {
  path: string;
  sessions: number;
  impressions: number;
  clicks: number;
}

interface GaCache {
  updatedAt: string;
  periodDays: number;
  pages: GaPageRow[];
}

function readGaCache(): { cache: GaCache | null; ageHours: number } {
  try {
    if (!fs.existsSync(GA_CACHE_PATH)) return { cache: null, ageHours: Infinity };
    const cache = JSON.parse(fs.readFileSync(GA_CACHE_PATH, 'utf-8')) as GaCache;
    const ageHours = (Date.now() - new Date(cache.updatedAt).getTime()) / 1000 / 3600;
    return { cache, ageHours };
  } catch {
    return { cache: null, ageHours: Infinity };
  }
}

function gaSessionsForPath(gaPages: GaPageRow[], urlPath: string): number {
  const entry = gaPages.find(p => p.path === urlPath || p.path === urlPath + '/');
  return entry?.sessions ?? 0;
}

// ── Stale detection ───────────────────────────────────────────────────────────

function getThresholdDays(category: string | undefined, thresholds: Record<string, number>): number {
  if (!category) return thresholds.default;
  const key = category.toLowerCase();
  return thresholds[key] ?? thresholds.default;
}

function daysSince(isoDate: string): number {
  const d = new Date(isoDate);
  if (isNaN(d.getTime())) return 0;
  return Math.floor((Date.now() - d.getTime()) / (1000 * 60 * 60 * 24));
}

function formatAge(days: number): string {
  if (days < 7) return `${days}d ago`;
  if (days < 30) return `${Math.round(days / 7)}w ago`;
  if (days < 365) return `${Math.round(days / 30)}mo ago`;
  return `${Math.round(days / 365)}y ago`;
}

// ── Gap analysis ──────────────────────────────────────────────────────────────

function countSubArticles(registry: RegistryEntry[], hubPath: string): number {
  return registry.filter(e => {
    const url = e.url || e.slug || '';
    return url !== hubPath && url.startsWith(hubPath);
  }).length;
}

// ── Score bar ─────────────────────────────────────────────────────────────────

function scoreBar(score: number, width = 20): string {
  const filled = Math.round((score / 100) * width);
  return '█'.repeat(filled) + '░'.repeat(width - filled);
}

// ── Main ──────────────────────────────────────────────────────────────────────

function main() {
  const registry = readRegistry();
  const thresholds = readThresholds();
  const sessions = readSessionLog();
  const { cache: gaCache, ageHours: gaAgeHours } = readGaCache();

  const now = new Date();

  console.log('');
  console.log(c.bold(c.cyan('╔══════════════════════════════════════════════════════════════╗')));
  console.log(c.bold(c.cyan('║           ALFASA  ·  ObjectWire Editorial Briefing           ║')));
  console.log(c.bold(c.cyan(`║           ${now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).padEnd(52)}║`)));
  console.log(c.bold(c.cyan('╚══════════════════════════════════════════════════════════════╝')));
  console.log('');

  // ── 1. Last Session Summary ─────────────────────────────────────────────────
  console.log(c.bold('  RECENT PUBLISHES'));
  console.log(c.gray('  ─────────────────────────────────────────────────────────────'));
  if (sessions.length === 0) {
    console.log(c.gray('  No sessions recorded yet. Run wiki:publish to start tracking.'));
  } else {
    const recent = sessions.slice(0, 5);
    recent.forEach(s => {
      const grade = s.eeaGrade || '?';
      const gradeColor = grade === 'A' ? c.green : grade === 'B' ? c.cyan : grade === 'C' ? c.yellow : c.red;
      const sentinel = s.skippedSentinel ? c.yellow('⚠ skipped') : s.sentinelPassed ? c.green('✓') : c.red('✗ blocked');
      console.log(
        `  ${c.gray(new Date(s.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }))}  ` +
        `${gradeColor(c.bold(`[${grade}]`))}  ` +
        `${c.white((s.url || s.slug || '').slice(0, 52).padEnd(52))}  ` +
        `${sentinel}  ${c.gray(s.warnings ? `${s.warnings}w` : '')}`
      );
    });
  }

  // Score distribution
  if (sessions.length >= 3) {
    const scores = sessions.slice(0, 10).map(s => s.eeaScore).filter(Boolean);
    if (scores.length > 0) {
      const avg = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
      const avgColor = avg >= 70 ? c.green : avg >= 55 ? c.yellow : c.red;
      console.log('');
      console.log(`  ${c.gray('Avg E-E-A-T (last 10):')} ${avgColor(c.bold(`${avg}/100`))}  ${avgColor(scoreBar(avg, 16))}`);
    }
  }

  // ── 2. Stale Pages ──────────────────────────────────────────────────────────
  console.log('');
  console.log(c.bold('  STALE PAGES  (may need refresh or updated data)'));
  if (gaCache) {
    const gaAgeStr = gaAgeHours < 2 ? 'just now' : gaAgeHours < 24 ? `${Math.round(gaAgeHours)}h ago` : `${Math.round(gaAgeHours / 24)}d ago`;
    console.log(c.gray(`  Traffic data: GA ${gaCache.periodDays}d window, synced ${gaAgeStr} — run \`npm run alfasa:sync\` to refresh`));
  } else {
    console.log(c.gray('  No GA traffic data. Run `npm run alfasa:sync` to enable traffic-weighted stale alerts.'));
  }
  console.log(c.gray('  ─────────────────────────────────────────────────────────────'));

  const gaPages = gaCache?.pages ?? [];

  const staleEntries = registry
    .filter(e => e.published_at)
    .map(e => {
      const days = daysSince(e.published_at!);
      const threshold = getThresholdDays(e.category, thresholds);
      const urlPath = e.url || e.slug || '';
      const sessions28d = gaSessionsForPath(gaPages, urlPath);
      return { ...e, days, threshold, overage: days - threshold, sessions28d };
    })
    .filter(e => e.overage > 0)
    .sort((a, b) => {
      // Sort by sessions desc (high-traffic stale pages are highest priority),
      // then by overage desc as tiebreaker
      if (b.sessions28d !== a.sessions28d) return b.sessions28d - a.sessions28d;
      return b.overage - a.overage;
    })
    .slice(0, 8);

  if (staleEntries.length === 0) {
    console.log(c.green('  ✓ No stale pages detected.'));
  } else {
    staleEntries.forEach(e => {
      const ageStr = formatAge(e.days);
      const url = (e.url || e.slug || '').slice(0, 44).padEnd(44);
      const cat = (e.category || 'unknown').slice(0, 12).padEnd(12);
      const overStr = `+${e.overage}d`;
      const trafficStr = gaCache
        ? e.sessions28d > 0
          ? c.cyan(`${e.sessions28d.toLocaleString()}s`)
          : c.gray('no traffic')
        : '';
      console.log(
        `  ${c.yellow('↻')}  ${c.gray(ageStr.padEnd(8))}  ${c.gray(cat)}  ${url}  ${c.yellow(overStr.padEnd(8))}  ${trafficStr}`
      );
    });
    if (staleEntries.length >= 8) {
      const total = registry.filter(e => {
        if (!e.published_at) return false;
        const days = daysSince(e.published_at);
        return days > getThresholdDays(e.category, thresholds);
      }).length;
      if (total > 8) console.log(c.gray(`  ... and ${total - 8} more stale pages`));
    }
  }

  // ── 3. Priority Content Gaps ────────────────────────────────────────────────
  console.log('');
  console.log(c.bold('  CONTENT GAPS  (priority pillars)'));
  console.log(c.gray('  ─────────────────────────────────────────────────────────────'));

  PRIORITY_PILLARS.forEach(pillar => {
    const count = countSubArticles(registry, pillar.hub);
    const ratio = Math.min(count / pillar.target, 1);
    const bar = scoreBar(ratio * 100, 12);
    const statusColor = ratio >= 1 ? c.green : ratio >= 0.5 ? c.yellow : c.red;
    const needed = Math.max(0, pillar.target - count);
    const neededStr = needed > 0 ? c.yellow(` (need ${needed} more)`) : c.green(' ✓');
    console.log(
      `  ${statusColor(bar)}  ${c.white(pillar.label.padEnd(22))}  ${statusColor(`${count}/${pillar.target}`)}${neededStr}`
    );
  });

  // ── 4. OStandard Quick Ref ──────────────────────────────────────────────────
  console.log('');
  console.log(c.bold('  OSTANDARD QUICK REMINDERS'));
  console.log(c.gray('  ─────────────────────────────────────────────────────────────'));
  const reminders = [
    `${c.red('✗')} No em dashes (—) ever. Use | in headings, , in prose.`,
    `${c.red('✗')} No en dashes (–) ever. Use - or rewrite.`,
    `${c.cyan('→')} metadata.title: max 60 chars, no brand suffix, no em dashes.`,
    `${c.cyan('→')} metadata.description: 130-155 chars, keyword in first 60 chars.`,
    `${c.cyan('→')} Every article: 4+ internal links (hub backlink + 2 siblings + author).`,
    `${c.cyan('→')} Links in prose: text-blue-600 hover:text-blue-800 underline — always.`,
    `${c.cyan('→')} published_at must be ISO-8601: 2026-05-05T12:00:00Z`,
    `${c.cyan('→')} tags: 4-8 proper nouns only. No generic terms.`,
  ];
  reminders.forEach(r => console.log(`  ${r}`));

  // ── 5. Footer ───────────────────────────────────────────────────────────────
  console.log('');
  console.log(c.gray('  Commands:'));
  console.log(c.gray('    npm run wiki:publish -- --file app/your/path/page.tsx'));
  console.log(c.gray('    npm run sentinel -- --file app/your/path/page.tsx'));
  console.log(c.gray('    npm run wiki:status'));
  console.log('');
  console.log(c.bold(c.cyan('  ──────────────────────────────────────────────────────────────')));
  console.log('');
}

main();
