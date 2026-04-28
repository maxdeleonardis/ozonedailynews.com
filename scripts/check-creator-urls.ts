import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);
(async () => {
  const slugs = [
    'influencer-leah-davies','influencer-abby-berner','influencer-colleen-sheehan',
    'influencer-bufalika','influencer-lean-beef-patty','influencer-mika-lafuente',
    'influencer-miranda-marie','influencer-megan-marie'
  ];
  const { data, error } = await sb.from('creator_articles').select('slug, schema_article_url').in('slug', slugs);
  if (error) { console.error(error); process.exit(1); }
  data!.forEach(r => console.log(r.slug.padEnd(36), '|', r.schema_article_url));
})();
