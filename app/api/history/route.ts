// =============================================================================
// GET /api/history
//
// Returns the calling user's article view history, newest first.
// Limited to MAX_ROWS entries within the last TTL_DAYS days.
// =============================================================================

import { NextResponse }    from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions }      from '@/lib/auth-options';
import { createClient }     from '@/lib/supabase/server';
import { sha256hex }        from '@/lib/hash';

const MAX_ROWS = 50;
const TTL_DAYS = 7;

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthenticated' }, { status: 401 });
  }

  const userHash = await sha256hex(session.user.email);
  const supabase = await createClient();
  const cutoff   = new Date(Date.now() - TTL_DAYS * 86_400_000).toISOString();

  const { data, error } = await supabase
    .from('article_view_history')
    .select('article_slug, article_title, article_url, article_image, article_category, viewed_at')
    .eq('user_hash', userHash)
    .gte('viewed_at', cutoff)
    .order('viewed_at', { ascending: false })
    .limit(MAX_ROWS);

  if (error) {
    console.error('[history] fetch error:', error.message);
    return NextResponse.json({ error: 'DB error' }, { status: 500 });
  }

  return NextResponse.json({ history: data ?? [] });
}
