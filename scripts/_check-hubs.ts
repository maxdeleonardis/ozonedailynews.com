import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const s = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function main() {
  const slugs = ['open-ai', 'elon-musk', 'fortnite', 'saas', 'beastgames'];
  for (const slug of slugs) {
    const { data } = await s.from('article_pages').select('slug, title, status').eq('slug', slug).maybeSingle();
    console.log(slug, '->', data ? `FOUND: ${data.title}` : 'NOT FOUND');
  }
}
main();
