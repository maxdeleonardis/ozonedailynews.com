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

// Common proper nouns and brand names that Unsplash won't have photos for.
// When a title is dominated by these, fall back to the category query instead.
const BRAND_WORDS = new Set([
  'anthropic', 'openai', 'perplexity', 'pokémon', 'pokopia', 'tenstorrent',
  'outersloth', 'sidemen', 'bungie', 'marathon', 'cursor', 'crowdstrike',
  'redbull', 'fortnite', 'youtube', 'tiktok', 'instagram', 'snapchat',
  'discord', 'twitch', 'valkyrae', 'pokimane', 'jackarticle', 'OzoneNews',
]);

// Extract a search query from the title, with category-only fallback.
// Returns [primaryQuery, fallbackQuery] so the caller can try both.
function titleToQueries(title: string, category: string): [string, string] {
  const base = CATEGORY_QUERIES[category] || category.toLowerCase();

  const words = title
    .replace(/[|—–\-:$'"]/g, ' ')
    .replace(/OzoneNews/gi, '')
    .split(/\s+/)
    .filter((w) => w.length > 3 && !BRAND_WORDS.has(w.toLowerCase()))
    .slice(0, 3)
    .join(' ');

  return [words || base, base];
}

interface UnsplashResult {
  imageUrl: string;
  description: string;
}

async function searchUnsplash(query: string): Promise<UnsplashResult | null> {
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=3&orientation=landscape&client_id=${UNSPLASH_KEY}`;
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();
    if (data.results && data.results.length > 0) {
      // Pick the photo with the best description, falling back to first result
      const photo = data.results.find((p: Record<string, unknown>) => p.alt_description) || data.results[0];
      // Use the raw CDN URL with size params — more reliable than constructing from ID
      const rawUrl: string = (photo.urls as Record<string, string>).raw;
      return {
        imageUrl: `${rawUrl}&w=1200&h=675&fit=crop&crop=entropy&q=85&fm=jpg`,
        description: String((photo.alt_description as string) || (photo.description as string) || ''),
      };
    }
    return null;
  } catch {
    return null;
  }
}

async function main() {
  // Optional limit via env: BATCH_LIMIT=50 npx tsx ...
  // Defaults to 500 (all practical sites). Unsplash demo: 50 req/hr — script
  // sleeps 1.2 s between requests, so 500 entries takes ~10 min.
  const limit = process.env.BATCH_LIMIT ? Number(process.env.BATCH_LIMIT) : 500;

  // Get entries missing images, sorted by priority
  const { data: missing, error } = await supabase
    .from('content_registry')
    .select('slug, title, category, priority')
    .or('image_url.is.null,image_url.eq.')
    .order('priority', { ascending: false })
    .limit(limit);

  if (error) { console.error(error); return; }
  if (!missing || missing.length === 0) {
    console.log('No entries missing images!');
    return;
  }

  console.log(`Found ${missing.length} high-priority entries missing images.\n`);

  let updated = 0;
  let failed = 0;

  for (const entry of missing) {
    const [primaryQuery, fallbackQuery] = titleToQueries(entry.title, entry.category);
    console.log(`[${entry.priority}] ${entry.slug}`);
    console.log(`  Query: "${primaryQuery}"`);

    let result = await searchUnsplash(primaryQuery);

    // Retry with category-only query if title-derived query returns nothing
    if (!result && primaryQuery !== fallbackQuery) {
      console.log(`  Retry: "${fallbackQuery}"`);
      result = await searchUnsplash(fallbackQuery);
    }

    if (result) {
      // Use the Unsplash alt_description if available, otherwise fall back to title
      const altText = result.description
        ? `${result.description} — ${entry.title.replace(/\s*\|\s*OzoneNews/g, '')}`
        : entry.title.replace(/\s*\|\s*OzoneNews/g, '');

      const { error: updateErr } = await supabase
        .from('content_registry')
        .update({
          image_url:    result.imageUrl,
          image_width:  1200,
          image_height: 675,
          image_alt:    altText.slice(0, 255),
        })
        .eq('slug', entry.slug);

      if (updateErr) {
        console.log(`  ❌ Update failed: ${updateErr.message}`);
        failed++;
      } else {
        console.log(`  ✅ ${result.imageUrl.slice(0, 72)}…`);
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
