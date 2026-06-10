#!/usr/bin/env ts-node
// scripts/migrate-to-sharded.ts
// Migrates flat article directories to year/month sharded structure
// Usage: npx ts-node --project tsconfig.scripts.json scripts/migrate-to-sharded.ts [--write]

import fs from 'fs';
import path from 'path';

const WRITE = process.argv.includes('--write');
const STATIC_BASE = path.join(process.cwd(), 'content', 'static');

// Stores to migrate with date-based sharding
const DATE_SHARDED_STORES = ['articles', 'jack_articles', 'sterling_articles'];

// Stores to migrate with category-based sharding
const CATEGORY_SHARDED_STORES = ['article_pages'];

interface MigrationPlan {
  oldPath: string;
  newPath: string;
  slug: string;
}

const migrations: MigrationPlan[] = [];

// ─── Phase 1: Date-based sharding (articles, jack_articles, sterling_articles) ────

for (const store of DATE_SHARDED_STORES) {
  const dir = path.join(STATIC_BASE, store);
  if (!fs.existsSync(dir)) continue;

  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.json') && f !== '_index.json');

  for (const file of files) {
    const fullPath = path.join(dir, file);
    
    // Skip if it's already in a subdirectory (already migrated)
    if (fullPath.includes(`${store}/20`)) continue;

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const article: Record<string, any> = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
      
      // Extract date from published_at
      const publishedAt = article.published_at || new Date().toISOString();
      const date = new Date(publishedAt);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');

      const newDir = path.join(STATIC_BASE, store, String(year), month);
      const newPath = path.join(newDir, file);

      migrations.push({
        oldPath: fullPath,
        newPath,
        slug: article.slug || article.url || file,
      });
    } catch (err) {
      console.warn(`  Warning: Failed to parse ${file}:`, err);
    }
  }
}

// ─── Phase 2: Category-based sharding (article_pages) ────────────────────────

for (const store of CATEGORY_SHARDED_STORES) {
  const dir = path.join(STATIC_BASE, store);
  if (!fs.existsSync(dir)) continue;

  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.json') && f !== '_index.json');

  for (const file of files) {
    const fullPath = path.join(dir, file);
    
    // Skip if it's already in a subdirectory (already migrated)
    const relativePath = path.relative(dir, fullPath);
    if (relativePath.includes('/')) continue;

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const article: Record<string, any> = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
      
      // Extract category from article data
      const category = (article.category || 'general').toLowerCase().replace(/\s+/g, '-');

      const newDir = path.join(STATIC_BASE, store, category);
      const newPath = path.join(newDir, file);

      migrations.push({
        oldPath: fullPath,
        newPath,
        slug: article.slug || article.url || file,
      });
    } catch (err) {
      console.warn(`  Warning: Failed to parse ${file}:`, err);
    }
  }
}

// ─── Dry run report ───────────────────────────────────────────────────────────

if (migrations.length === 0) {
  console.log('\n✔ migrate-to-sharded: No files to migrate. Already sharded or empty.\n');
  process.exit(0);
}

console.log(`\n  migrate-to-sharded: Found ${migrations.length} file(s) to migrate:\n`);

// Group by store for cleaner output
const byStore: Record<string, MigrationPlan[]> = {};
migrations.forEach((m) => {
  const store = path.relative(STATIC_BASE, m.oldPath).split('/')[0];
  if (!byStore[store]) byStore[store] = [];
  byStore[store].push(m);
});

Object.entries(byStore).forEach(([store, plans]) => {
  console.log(`  ${store}/ (${plans.length} files)`);
  plans.slice(0, 5).forEach((p) => {
    const oldRel = path.relative(STATIC_BASE, p.oldPath);
    const newRel = path.relative(STATIC_BASE, p.newPath);
    console.log(`    ${oldRel} → ${newRel}`);
  });
  if (plans.length > 5) {
    console.log(`    ... and ${plans.length - 5} more`);
  }
  console.log('');
});

if (!WRITE) {
  console.log('  Dry run. Run with --write to apply changes.\n');
  process.exit(0);
}

// ─── Execute migration ────────────────────────────────────────────────────────

console.log('  Executing migration...\n');

let moved = 0;
let failed = 0;

for (const { oldPath, newPath } of migrations) {
  try {
    const newDir = path.dirname(newPath);
    if (!fs.existsSync(newDir)) {
      fs.mkdirSync(newDir, { recursive: true });
    }
    fs.renameSync(oldPath, newPath);
    moved++;
  } catch (err) {
    console.error(`  ✗ Failed to move ${oldPath}:`, err);
    failed++;
  }
}

console.log(`  ✔ Migration complete: ${moved} moved, ${failed} failed.\n`);

// ─── Update content_registry.json with new filePaths ──────────────────────────

console.log('  Running sync-registry to update filePaths...\n');

// Import and run sync-registry (it will auto-detect new paths)
import('./sync-registry');
