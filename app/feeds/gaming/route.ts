// Gaming RSS feed — on-prem static JSON, no Supabase.
import { SITE_CONFIG } from '@/lib/site-config';
import { buildCategoryFeed } from '@/lib/feed-utils';

export const dynamic = 'force-dynamic';

export async function GET() {
  const rss = buildCategoryFeed('Gaming', `${SITE_CONFIG.url}/feeds/gaming`);
  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=7200',
    },
  });
}
