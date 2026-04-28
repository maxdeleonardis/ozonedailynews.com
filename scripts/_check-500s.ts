import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const s = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const slugs = [
  'apple-news-f1-apple-tv-espn-domenicali',
  'copyright-news-mastercard-ai-disruption-selloff',
  'copyright-elemental-atlus-royalties',
  'news-anthropic-claude-sonnet-4-6-saas-selloff',
  'trump-japan-36-billion-us-energy-critical-minerals',
  'apple-news-apple-video-podcasts-youtube',
];

async function main() {
  for (const slug of slugs) {
    const { data, error } = await s
      .from('articles')
      .select('slug, status, title, content_html, category, author_name, url')
      .eq('slug', slug)
      .single();
    if (data) {
      const nullFields = Object.entries(data)
        .filter(([, v]) => v === null || v === undefined)
        .map(([k]) => k);
      console.log(`✅ FOUND   ${slug}`);
      console.log(`   status: ${data.status} | title: ${data.title ? 'OK' : 'NULL'} | content_html: ${data.content_html ? 'OK' : 'NULL'} | category: ${data.category ?? 'NULL'}`);
      if (nullFields.length) console.log(`   NULL fields: ${nullFields.join(', ')}`);
    } else {
      console.log(`❌ MISSING ${slug}  error: ${error?.message}`);
    }
  }
}

main();
