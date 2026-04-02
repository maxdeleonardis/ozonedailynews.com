import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function fix() {
  const { data, error } = await supabase
    .from('creator_articles')
    .update({ url: '/influencer/ari-kytsya' })
    .eq('slug', 'influencer-ari-kytsya')
    .select('slug, url');

  if (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
  console.log('Updated:', data);
}

fix();
