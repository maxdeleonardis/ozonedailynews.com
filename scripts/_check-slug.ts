import { createClient } from '@supabase/supabase-js';

const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function main() {
  const { data, error } = await sb
    .from('articles')
    .select('slug, status, title')
    .ilike('slug', '%tsa%');

  console.log('TSA article:', JSON.stringify(data, null, 2));
  if (error) console.error('Error:', error);

  // Also check what slug the blog route would receive
  // /blog/trump-musk-pay-tsa-workers-shutdown → slug param = "trump-musk-pay-tsa-workers-shutdown"
  const { data: byExact } = await sb
    .from('articles')
    .select('slug, status')
    .eq('slug', 'trump-musk-pay-tsa-workers-shutdown')
    .eq('status', 'published')
    .single();
  console.log('Exact match (blog query):', byExact);
}

main();
