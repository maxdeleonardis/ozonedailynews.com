import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });
import { createClient } from '@supabase/supabase-js';

async function main() {
  const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);

  // Sample 5 articles rows to see what image-related columns look like
  const { data } = await sb
    .from('articles')
    .select('slug, hero_image_src, hero_image_alt, content_html')
    .limit(5);

  for (const row of data ?? []) {
    const imgInContent = row.content_html?.match(/<img[^>]+src=["']([^"']+)["']/)?.[1] ?? null;
    console.log({
      slug: row.slug,
      hero_image_src: row.hero_image_src ?? '(null)',
      first_img_in_html: imgInContent ?? '(none)',
    });
  }
}
main().catch(console.error);
