// Audit script: find content_registry entries missing image data
// Usage: npx tsx --env-file=.env.local scripts/audit-registry-images.ts

import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function main() {
  // Get all entries
  const { data: all, error: allErr } = await supabase
    .from('content_registry')
    .select('slug, title, image_url, category, priority')
    .order('priority', { ascending: false });

  if (allErr) { console.error(allErr); return; }

  const missing = (all || []).filter(
    (r) => !r.image_url || r.image_url.trim() === ''
  );

  console.log(`\n=== CONTENT REGISTRY IMAGE AUDIT ===`);
  console.log(`Total entries: ${all?.length || 0}`);
  console.log(`Missing image_url: ${missing.length}`);
  console.log(`Coverage: ${(((all!.length - missing.length) / all!.length) * 100).toFixed(1)}%\n`);

  if (missing.length > 0) {
    console.log(`--- TOP 50 MISSING (by priority) ---\n`);
    missing.slice(0, 50).forEach((r, i) => {
      console.log(`${i + 1}. [${r.priority}] ${r.category} | ${r.slug}`);
      console.log(`   Title: ${r.title}`);
    });
  }

  // Also check articles table for missing thumbnail_src
  const { data: articles, error: artErr } = await supabase
    .from('articles')
    .select('slug, title, thumbnail_src, category')
    .or('thumbnail_src.is.null,thumbnail_src.eq.');

  if (artErr) { console.error(artErr); return; }

  console.log(`\n=== ARTICLES TABLE THUMBNAIL AUDIT ===`);
  console.log(`Articles missing thumbnail_src: ${articles?.length || 0}\n`);
  (articles || []).slice(0, 30).forEach((a, i) => {
    console.log(`${i + 1}. ${a.category} | ${a.slug} | ${a.title}`);
  });
}

main();
