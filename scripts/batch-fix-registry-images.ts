// Batch update content_registry entries with Unsplash images
// Usage: npx tsx --env-file=.env.local scripts/batch-fix-registry-images.ts
//
// Queries Unsplash API for relevant images based on article category/title,
// then updates content_registry.image_url for entries that are missing it.

import { createClient } from '@supabase/supabase-js';

const UNSPLASH_KEY = '-QnuCnH9-8EQpkZafUFroTi6AUVuHR1A5u4FFb66vrQ';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Map categories to good generic Unsplash search terms
const CATEGORY_QUERIES: Record<string, string> = {
  Technology: 'technology computer code',
  Gaming: 'gaming controller esports',
  Finance: 'stock market finance',
  Crypto: 'cryptocurrency blockchain',
  Entertainment: 'cinema film entertainment',
  Politics: 'capitol government politics',
  Sports: 'stadium sports athlete',
  Science: 'laboratory science research',
  News: 'newspaper journalism',
  YouTube: 'video content creator',
  Investigations: 'detective investigation',
  'World Affairs': 'globe diplomacy',
  Legal: 'law court legal',
  Meta: 'social media network',
  Services: 'business professional',
};

// Extract a better search query from the title
function titleToQuery(title: string, category: string): string {
  // Use category default + first 2-3 meaningful words from title
  const base = CATEGORY_QUERIES[category] || category.toLowerCase();
  const words = title
    .replace(/[|—–\-:]/g, ' ')
    .replace(/ObjectWire/gi, '')
    .split(/\s+/)
    .filter((w) => w.length > 3)
    .slice(0, 3)
    .join(' ');
  return words || base;
}

async function searchUnsplash(query: string): Promise<string | null> {
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape&client_id=${UNSPLASH_KEY}`;
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();
    if (data.results && data.results.length > 0) {
      const photo = data.results[0];
      return `https://images.unsplash.com/photo-${photo.id}?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy`;
    }
    return null;
  } catch {
    return null;
  }
}

async function main() {
  // Get entries missing images, sorted by priority
  const { data: missing, error } = await supabase
    .from('content_registry')
    .select('slug, title, category, priority')
    .or('image_url.is.null,image_url.eq.')
    .order('priority', { ascending: false })
    .limit(50);

  if (error) { console.error(error); return; }
  if (!missing || missing.length === 0) {
    console.log('No entries missing images!');
    return;
  }

  console.log(`Found ${missing.length} high-priority entries missing images.\n`);

  let updated = 0;
  let failed = 0;

  for (const entry of missing) {
    const query = titleToQuery(entry.title, entry.category);
    console.log(`[${entry.priority}] ${entry.slug}`);
    console.log(`  Query: "${query}"`);

    const imageUrl = await searchUnsplash(query);

    if (imageUrl) {
      const { error: updateErr } = await supabase
        .from('content_registry')
        .update({
          image_url: imageUrl,
          image_width: 1200,
          image_height: 675,
          image_alt: entry.title.replace(/\s*\|\s*ObjectWire/g, ''),
        })
        .eq('slug', entry.slug);

      if (updateErr) {
        console.log(`  ❌ Update failed: ${updateErr.message}`);
        failed++;
      } else {
        console.log(`  ✅ Updated`);
        updated++;
      }
    } else {
      console.log(`  ⚠️ No Unsplash result`);
      failed++;
    }

    // Unsplash rate limit: 50 req/hr for demo apps
    await new Promise((r) => setTimeout(r, 1200));
  }

  console.log(`\nDone. Updated: ${updated}, Failed: ${failed}`);
}

main();
