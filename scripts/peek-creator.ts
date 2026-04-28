import { createClient } from '@supabase/supabase-js';
import * as path from 'path';
import * as dotenv from 'dotenv';
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);
(async () => {
  const slug = process.argv[2] ?? 'influencer-abby-berner';
  const { data } = await supabase.from('creator_articles').select('slug, sidebar_infobox_rows, hero_cta_buttons, schema_title, schema_description, hero_subtitle, hero_description').eq('slug', slug).single();
  console.log(JSON.stringify(data, null, 2));
})();
