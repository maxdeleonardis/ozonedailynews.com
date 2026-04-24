#!/usr/bin/env tsx
// =============================================================================
// scripts/validate-public.ts — M6 Public-Override Guard
// =============================================================================
// Fails the build if any file exists in /public that would silently override
// a Next.js App Router route handler.
//
// Background:
//   Next.js serves /public files BEFORE App Router route handlers.
//   A /public/robots.txt overrides app/robots.ts.
//   A /public/sitemap.xml overrides app/sitemap.ts.
//   This caused a production incident on April 22 2026 where the full dynamic
//   robots.ts (AI bot rules, tracking-param disallows) was never served.
//
// Wire-up (already in package.json prebuild):
//   "prebuild": "npx tsx scripts/validate-public.ts && npx tsx scripts/sync-registry.ts --write"
//
// To intentionally skip (emergencies only):
//   OBJECTWIRE_OVERRIDE=true npm run build
// =============================================================================

import fs from 'fs';
import path from 'path';

const OVERRIDE_FLAG = process.env.OBJECTWIRE_OVERRIDE === 'true';
const PUBLIC_DIR = path.join(process.cwd(), 'public');

// Files that must NEVER exist in /public because they override App Router handlers
const BLOCKED_PUBLIC_FILES: { file: string; overrides: string }[] = [
  { file: 'robots.txt',  overrides: 'app/robots.ts' },
  { file: 'sitemap.xml', overrides: 'app/sitemap.ts' },
];

// =============================================================================
// MAIN
// =============================================================================

let violations: string[] = [];

for (const { file, overrides } of BLOCKED_PUBLIC_FILES) {
  const fullPath = path.join(PUBLIC_DIR, file);
  if (fs.existsSync(fullPath)) {
    violations.push(
      `  ✗  public/${file}  →  shadows ${overrides} (delete it — the dynamic handler is the source of truth)`
    );
  }
}

if (violations.length === 0) {
  console.log('✓ validate-public: no conflicting static files found in /public');
  process.exit(0);
}

// ── Violations found ──────────────────────────────────────────────────────────
console.error('\n┌──────────────────────────────────────────────────────────────┐');
console.error('│  validate-public: BUILD BLOCKED — static file override found  │');
console.error('└──────────────────────────────────────────────────────────────┘');
console.error('\nThe following files in /public will silently override App Router handlers:\n');
violations.forEach(v => console.error(v));
console.error('\nFix: delete the listed files from /public and rely on the App Router handlers instead.');
console.error('Override (emergencies only): OBJECTWIRE_OVERRIDE=true npm run build\n');

if (OVERRIDE_FLAG) {
  console.warn('⚠ OBJECTWIRE_OVERRIDE=true — skipping exit(1). PRODUCTION RISK.');
  process.exit(0);
}

process.exit(1);
