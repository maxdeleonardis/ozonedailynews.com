import { createClient } from '@supabase/supabase-js';

const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function main() {
  const articles = await sb.from('articles').select('slug').ilike('slug', '%coinbase%');
  console.log('articles table (coinbase):', articles.data);

  const jack = await sb.from('jack_articles').select('slug').ilike('slug', '%bernstein%');
  console.log('jack_articles table (bernstein):', jack.data);

  const jackAll = await sb.from('jack_articles').select('slug').order('slug');
  console.log('ALL jack_articles slugs:', jackAll.data?.map(r => r.slug));
}

main();
