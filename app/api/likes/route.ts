/**
 * GET  /api/likes?slug=...   — returns { count: number, liked: boolean }
 * POST /api/likes            — toggles like for authenticated user
 *                              body: { slug, title?, url? }
 *                              returns { count: number, liked: boolean }
 */

import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

// ── Helpers ───────────────────────────────────────────────────────────────────

async function getUser() {
  const supabase = await createClient();
  if (!supabase) return { supabase: null, user: null };
  const { data: { user } } = await supabase.auth.getUser();
  return { supabase, user };
}

async function getLikeCount(supabase: NonNullable<Awaited<ReturnType<typeof createClient>>>, slug: string): Promise<number> {
  const { count } = await supabase
    .from('article_likes')
    .select('*', { count: 'exact', head: true })
    .eq('slug', slug);
  return count ?? 0;
}

// ── GET /api/likes?slug= ──────────────────────────────────────────────────────

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get('slug');
  if (!slug) return NextResponse.json({ count: 0, liked: false });

  const { supabase, user } = await getUser();
  if (!supabase) return NextResponse.json({ count: 0, liked: false });

  const count = await getLikeCount(supabase, slug);

  let liked = false;
  if (user) {
    const { data } = await supabase
      .from('article_likes')
      .select('id')
      .eq('slug', slug)
      .eq('user_id', user.id)
      .maybeSingle();
    liked = !!data;
  }

  return NextResponse.json({ count, liked });
}

// ── POST /api/likes ───────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  const { supabase, user } = await getUser();
  if (!supabase || !user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json().catch(() => ({}));
  const slug: string = body.slug ?? '';
  if (!slug) return NextResponse.json({ error: 'Missing slug' }, { status: 400 });

  // Check if already liked
  const { data: existing } = await supabase
    .from('article_likes')
    .select('id')
    .eq('slug', slug)
    .eq('user_id', user.id)
    .maybeSingle();

  if (existing) {
    // Unlike
    await supabase.from('article_likes').delete().eq('id', existing.id);
    const count = await getLikeCount(supabase, slug);
    return NextResponse.json({ liked: false, count });
  } else {
    // Like
    await supabase.from('article_likes').insert({
      slug,
      user_id: user.id,
      title: body.title ?? null,
      url: body.url ?? null,
      created_at: new Date().toISOString(),
    });
    const count = await getLikeCount(supabase, slug);
    return NextResponse.json({ liked: true, count });
  }
}
