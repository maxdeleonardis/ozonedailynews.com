#!/usr/bin/env ts-node
// scripts/normalize-registry-slugs.ts
// One-time migration: converts full-URL slugs in content_registry.json to relative paths.
//
// Problem:  sync-registry.ts historically stored article.url (full URL) as the slug,
//           e.g. "https://www.ozonedailynews.com/nasa/news/article-slug".
//           sitemap.ts and rss.xml prepend baseUrl to the slug, producing broken
//           double-URLs: "https://www.ozonedailynews.comhttps://...".
//
// Fix:      Strip the origin from all absolute-URL slugs, leaving only the pathname.
//           e.g. "https://www.ozonedailynews.com/nasa/news/article" → "/nasa/news/article"
//
// Usage:
//   npx ts-node --project tsconfig.scripts.json scripts/normalize-registry-slugs.ts
//   (dry run by default — add --write to apply)

import fs from 'fs';
import path from 'path';

const WRITE = process.argv.includes('--write');
const REGISTRY_PATH = path.join(process.cwd(), 'content', 'static', 'content_registry.json');

type RegistryEntry = { slug: string; [key: string]: unknown };

const raw = fs.readFileSync(REGISTRY_PATH, 'utf8');
const entries: RegistryEntry[] = JSON.parse(raw);

let changed = 0;
const normalized = entries.map((entry) => {
  const slug = entry.slug ?? '';
  if (!slug.startsWith('http://') && !slug.startsWith('https://')) return entry; // already relative

  let pathname = slug;
  try {
    pathname = new URL(slug).pathname;
  } catch {
    console.warn(`  WARN  Could not parse slug as URL: ${slug}`);
    return entry;
  }

  if (pathname === slug) return entry; // no change

  changed++;
  console.log(`  ${slug}`);
  console.log(`  → ${pathname}`);
  console.log('');
  return { ...entry, slug: pathname };
});

console.log(`\n  ${changed} slug(s) to normalise out of ${entries.length} total entries.`);

if (changed === 0) {
  console.log('  ✔ Registry slugs are already clean. Nothing to do.\n');
  process.exit(0);
}

if (!WRITE) {
  console.log('\n  Dry run. Run with --write to apply:\n');
  console.log('  npx ts-node --project tsconfig.scripts.json scripts/normalize-registry-slugs.ts --write\n');
  process.exit(0);
}

fs.writeFileSync(REGISTRY_PATH, JSON.stringify(normalized, null, 2) + '\n', 'utf8');
console.log(`\n  ✔ Registry updated. ${changed} slug(s) normalised to relative paths.\n`);
