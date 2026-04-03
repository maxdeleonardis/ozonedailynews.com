import { createClient } from '@supabase/supabase-js';

async function main() {
  const sb = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!);
  const { data } = await sb.from('articles').select('content_html').eq('slug','define-prediction-market-democrats-warn-government-insider-trading-prediction-markets-2026').single();
  const html = data?.content_html ?? '';
  const idx = html.indexOf('iframe');
  if(idx>=0) console.log(html.slice(Math.max(0,idx-200), idx+500));
  else { console.log('NO IFRAME'); const vidIdx = html.indexOf('youtube'); console.log(vidIdx >= 0 ? html.slice(Math.max(0,vidIdx-200), vidIdx+500) : 'no youtube either'); }
}

main().catch(console.error);
