#!/usr/bin/env node
// =============================================================================
// scripts/fix-emdash-supabase.mjs
// =============================================================================
// Removes all em dashes (—) from Supabase `articles` table records.
// Replacement rules:
//   • title / meta_title   →  " — " becomes " | "
//   • excerpt / content    →  " — " becomes ", "
//
// Usage:
//   node scripts/fix-emdash-supabase.mjs              -- live run
//   node scripts/fix-emdash-supabase.mjs --dry-run    -- count rows, don't update
// =============================================================================

import path from 'path';
import { fileURLToPath } from 'url';
import { createClient } from '@supabase/supabase-js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ─── Load .env.local manually ────────────────────────────────────────────────
import fs from 'fs';
const envPath = path.resolve(__dirname, '../.env.local');
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, 'utf8').split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx === -1) continue;
    const k = trimmed.slice(0, eqIdx).trim();
    const v = trimmed.slice(eqIdx + 1).trim().replace(/^['"]|['"]$/g, '');
    process.env[k] = v;
  }
}

const DRY_RUN = process.argv.includes('--dry-run');
const EM = '—';

// ─── Supabase client ─────────────────────────────────────────────────────────
const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!url || !key) {
  console.error('❌  Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local');
  process.exit(1);
}

const supabase = createClient(url, key);

// ─── Replacement helpers ─────────────────────────────────────────────────────

function fixTitle(str) {
  if (!str || !str.includes(EM)) return null; // null = no change needed
  return str.replace(/ — /g, ' | ').replace(/—/g, ' | ');
}

function fixProse(str) {
  if (!str || !str.includes(EM)) return null;
  return str.replace(/ — /g, ', ').replace(/—/g, ', ');
}

// ─── Main ─────────────────────────────────────────────────────────────────────

const PAGE_SIZE = 200;
let offset = 0;
let totalUpdated = 0;

console.log(`\n${DRY_RUN ? '[DRY RUN] ' : ''}Starting Supabase em-dash fix...\n`);

while (true) {
  const { data: rows, error } = await supabase
    .from('articles')
    .select('id, title, excerpt, content')
    .range(offset, offset + PAGE_SIZE - 1);

  if (error) { console.error('❌  Fetch error:', error.message); break; }
  if (!rows || rows.length === 0) break;

  for (const row of rows) {
    const patch = {};

    const newTitle   = fixTitle(row.title);
    const newExcerpt = fixProse(row.excerpt);

    // content may be a jsonb object or a plain string
    let newContent = null;
    if (row.content) {
      const raw = typeof row.content === 'string'
        ? row.content
        : JSON.stringify(row.content);
      if (raw.includes(EM)) {
        const fixed = fixProse(raw);
        newContent = typeof row.content === 'string'
          ? fixed
          : JSON.parse(fixed);
      }
    }

    if (newTitle   !== null) patch.title   = newTitle;
    if (newExcerpt !== null) patch.excerpt = newExcerpt;
    if (newContent !== null) patch.content = newContent;

    if (Object.keys(patch).length === 0) continue;

    if (DRY_RUN) {
      console.log(`  [DRY] id=${row.id}  title="${row.title?.slice(0, 60)}"`);
      totalUpdated++;
      continue;
    }

    const { error: updateErr } = await supabase
      .from('articles')
      .update(patch)
      .eq('id', row.id);

    if (updateErr) {
      console.error(`  ❌  id=${row.id} update failed:`, updateErr.message);
    } else {
      console.log(`  ✓  id=${row.id}  "${(newTitle || row.title)?.slice(0, 60)}"`);
      totalUpdated++;
    }
  }

  if (rows.length < PAGE_SIZE) break;
  offset += PAGE_SIZE;
}

console.log(`\n${DRY_RUN ? '[DRY RUN] ' : ''}Updated ${totalUpdated} article(s).`);
