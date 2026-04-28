import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });
const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);
(async () => {
  const { data } = await sb.from('creator_articles').select('slug, content_html').eq('slug', 'influencer-ari-kytsya').single();
  // print just the gallery part
  const html = data?.content_html ?? '';
  const start = html.indexOf('CreatorImageGallery');
  if (start === -1) { console.log('No gallery found'); console.log(html.slice(0, 500)); return; }
  console.log(html.slice(Math.max(0, start - 20), start + 800));
})();
