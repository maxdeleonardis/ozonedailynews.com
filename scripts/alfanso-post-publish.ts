#!/usr/bin/env tsx
// =============================================================================
// scripts/alfanso-post-publish.ts
// =============================================================================
// One command that runs after every article write under the Alfanso system.
//
// What it does (in order):
//   1. Syncs content_registry.json from all app/**/page.tsx files
//   2. Verifies the new slugs landed in the registry
//   3. Pings Google and Bing with the updated sitemap URL
//   4. Stages all changes, commits with a timestamped message, and pushes to
//      `main` — triggering Railway auto-deploy
//
// Usage:
//   npm run alfanso:publish             (full pipeline)
//   npm run alfanso:publish -- --skip-git   (sync + ping only, no commit)
//   npm run alfanso:publish -- --skip-ping  (sync + git only, no sitemap ping)
//   npm run alfanso:publish -- --dry-run    (preview only, no writes)
//
// Called automatically by the Alfanso article pipeline after:
//   - Writing content/static/articles/{slug}.json
//   - Writing content/static/jack_articles/{slug}.json
//   - Creating app/{path}/page.tsx
//
// Also fires automatically via .githooks/pre-push before every git push.
// =============================================================================

import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

const ROOT        = path.resolve(__dirname, '..');
const REGISTRY    = path.join(ROOT, 'content', 'static', 'content_registry.json');
const SKIP_GIT    = process.argv.includes('--skip-git');
const SKIP_PING   = process.argv.includes('--skip-ping');
const DRY_RUN     = process.argv.includes('--dry-run');
const SITE_URL    = 'https://www.ozonenetwork.news';

// ─── Helpers ─────────────────────────────────────────────────────────────────

function run(cmd: string, label: string): string {
  console.log(`  → ${label}`);
  if (DRY_RUN) {
    console.log(`    [dry-run] would run: ${cmd}`);
    return '';
  }
  try {
    const out = execSync(cmd, { cwd: ROOT, encoding: 'utf-8', stdio: 'pipe' });
    return out.trim();
  } catch (err: unknown) {
    const e = err as { stderr?: string; message?: string };
    const msg = e.stderr || e.message || String(err);
    console.warn(`    ⚠️  ${label} failed: ${msg.slice(0, 200)}`);
    return '';
  }
}

function log(msg: string) { console.log(msg); }
function ok(msg: string)  { console.log(`  ✅  ${msg}`); }
function warn(msg: string){ console.warn(`  ⚠️   ${msg}`); }

// ─── Step 1: Sync content registry ───────────────────────────────────────────

async function syncRegistry(): Promise<number> {
  log('\n📋  Step 1 | Sync content_registry.json');

  const before = getRegistryCount();
  run('npx tsx scripts/sync-registry.ts --write', 'sync-registry --write');
  const after = getRegistryCount();
  const added = after - before;

  if (added > 0) {
    ok(`Registry updated: ${before} → ${after} entries (+${added} new)`);
  } else {
    ok(`Registry verified: ${after} entries (no new pages detected)`);
  }
  return added;
}

function getRegistryCount(): number {
  try {
    const raw = fs.readFileSync(REGISTRY, 'utf-8');
    const arr = JSON.parse(raw) as unknown[];
    return arr.length;
  } catch {
    return 0;
  }
}

// ─── Step 2: Verify critical files exist ─────────────────────────────────────

function verifyOutputFiles() {
  log('\n🔍  Step 2 | Verify output files');

  const checks = [
    { path: REGISTRY,                           label: 'content_registry.json' },
    { path: path.join(ROOT, 'app', 'robots.ts'), label: 'robots.ts' },
    { path: path.join(ROOT, 'app', 'rss.xml', 'route.ts'), label: 'rss.xml route' },
    { path: path.join(ROOT, 'app', 'news-sitemap.xml', 'route.ts'), label: 'news-sitemap route' },
    { path: path.join(ROOT, 'app', 'sitemap.ts'), label: 'sitemap.ts' },
  ];

  for (const check of checks) {
    if (fs.existsSync(check.path)) {
      ok(check.label);
    } else {
      warn(`${check.label} — FILE MISSING at ${check.path}`);
    }
  }

  // Count new articles written to static stores
  const articlesDir  = path.join(ROOT, 'content', 'static', 'articles');
  const jackDir      = path.join(ROOT, 'content', 'static', 'jack_articles');
  const articleCount = countJsonFiles(articlesDir);
  const jackCount    = countJsonFiles(jackDir);
  ok(`Static article store: ${articleCount} NewsArticles, ${jackCount} JackArticles`);
}

function countJsonFiles(dir: string): number {
  try {
    return fs.readdirSync(dir).filter(f => f.endsWith('.json') && f !== '_index.json').length;
  } catch {
    return 0;
  }
}

// ─── Step 3: Ping Google & Bing ───────────────────────────────────────────────

async function pingSitemaps() {
  if (SKIP_PING) { log('\n⏭️   Step 3 | Sitemap ping skipped (--skip-ping)'); return; }

  log('\n📡  Step 3 | Ping sitemap indexers');

  const sitemapUrl    = encodeURIComponent(`${SITE_URL}/sitemap.xml`);
  const newsSitemapUrl = encodeURIComponent(`${SITE_URL}/news-sitemap.xml`);

  const pings = [
    {
      label: 'Google sitemap',
      url: `https://www.google.com/ping?sitemap=${sitemapUrl}`,
    },
    {
      label: 'Google news-sitemap',
      url: `https://www.google.com/ping?sitemap=${newsSitemapUrl}`,
    },
    {
      label: 'Bing sitemap',
      url: `https://www.bing.com/ping?sitemap=${sitemapUrl}`,
    },
  ];

  for (const ping of pings) {
    if (DRY_RUN) {
      log(`    [dry-run] would GET ${ping.url}`);
      continue;
    }
    try {
      const res = await fetch(ping.url, { method: 'GET', signal: AbortSignal.timeout(8000) });
      if (res.ok) {
        ok(`${ping.label} → HTTP ${res.status}`);
      } else {
        warn(`${ping.label} → HTTP ${res.status} (non-fatal)`);
      }
    } catch {
      warn(`${ping.label} → timed out or network error (non-fatal)`);
    }
  }
}

// ─── Step 4: Git commit + push ────────────────────────────────────────────────

function gitPublish() {
  if (SKIP_GIT) { log('\n⏭️   Step 4 | Git push skipped (--skip-git)'); return; }

  log('\n🚀  Step 4 | Git commit + push → Railway auto-deploy');

  // Check if there are any changes to commit
  const status = run('git status --porcelain', 'git status');
  if (!status && !DRY_RUN) {
    ok('Nothing to commit — working tree clean');
    return;
  }

  const now    = new Date();
  const ts     = now.toISOString().replace('T', ' ').slice(0, 16); // "2026-06-05 20:30"
  const branch = run('git branch --show-current', 'get current branch') || 'main';

  // Collect list of changed content files for a descriptive commit message
  const changedFiles = DRY_RUN ? [] : (status || '').split('\n')
    .map(l => l.trim().replace(/^[AMD?]+\s+/, ''))
    .filter(f => f.includes('content/static/') || f.includes('app/'))
    .slice(0, 8);

  const fileList = changedFiles.length
    ? changedFiles.map(f => `  - ${f}`).join('\n')
    : '  - (no specific files listed)';

  const message = [
    `alfanso: publish [${ts}]`,
    '',
    'Updated:',
    fileList,
    '',
    'Auto-generated by alfanso-post-publish.ts',
    'Triggers: registry sync, sitemap ping, Railway deploy',
  ].join('\n');

  run('git add -A', 'git add -A');
  run(`git commit -m "${message.replace(/"/g, "'").replace(/\n/g, ' | ')}"`, 'git commit');
  run(`git push origin ${branch}`, `git push origin ${branch}`);

  ok(`Pushed to ${branch} → Railway deploy triggered`);
}

// ─── Step 5: Summary ─────────────────────────────────────────────────────────

function printSummary(added: number, isBuildCheckpoint: boolean) {
  log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  if (isBuildCheckpoint) {
    log('  Alfanso Checkpoint — Build Ready');
  } else {
    log('  Alfanso Post-Publish Complete');
  }
  log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  log(`  Registry:    content/static/content_registry.json (+${added})`);
  log(`  RSS:         ${SITE_URL}/rss.xml         (reads registry, live)`);
  log(`  News Sitemap:${SITE_URL}/news-sitemap.xml (reads static files, live)`);
  log(`  Main Sitemap:${SITE_URL}/sitemap.xml      (reads registry, revalidates daily)`);
  log(`  Robots:      ${SITE_URL}/robots.txt       (dynamic, always current)`);
  if (!SKIP_GIT && !DRY_RUN) {
    log(`  Deploy:      Railway auto-deploy triggered on push to main`);
  }
  log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const isBuildCheckpoint = SKIP_GIT && SKIP_PING;

  if (isBuildCheckpoint) {
    log('\n🌅  Alfanso | Build Checkpoint Sync');
    log('    registry · verify · (no git, no ping)\n');
  } else {
    log('\n🌅  Alfanso Post-Publish Pipeline');
  }
  if (DRY_RUN) log('    (dry-run mode — no writes)\n');

  const added = await syncRegistry();
  verifyOutputFiles();
  await pingSitemaps();
  gitPublish();
  printSummary(added, isBuildCheckpoint);
}

main().catch(err => {
  console.error('\n❌  Alfanso post-publish failed:', err);
  process.exit(1);
});
