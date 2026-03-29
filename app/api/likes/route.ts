// =============================================================================
// /api/likes
//
// GET  ?slug=xxx
//   → { count: number, liked: boolean }
//   count is public. liked is false when unauthenticated.
//
// POST { slug, title, url }
//   Requires auth. Toggles the like for the current user.
//   → { liked: boolean, count: number }
// =============================================================================

import { NextRequest, NextResponse } from 'next/server';
import { createAuthClient }          from '@/lib/supabase/server';
import { sha256hex }                 from '@/lib/hash';

// ── GET /api/likes?slug=xxx ───────────────────────────────────────────────────
export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get('slug');
  if (!slug) return NextResponse.json({ error: 'slug required' }, { status: 400 });

  const supabase = await createAuthClient();

  // Public like count
  const { count, error: countErr } = await supabase
    .from('article_likes')
    .select('*', { count: 'exact', head: true })
    .eq('article_slug', slug);

  if (countErr) return NextResponse.json({ error: 'DB error' }, { status: 500 });

  // User-specific like status (optional — only if logged in)
  const { data: { user } } = await supabase.auth.getUser();
  let liked = false;
  if (user?.email) {
    const userHash = await sha256hex(user.email);
    const { data } = await supabase
      .from('article_likes')
      .select('id')
      .eq('user_hash', userHash)
      .eq('article_slug', slug)
      .maybeSingle();
    liked = !!data;
  }

  return NextResponse.json({ count: count ?? 0, liked });
}

// ── POST /api/likes ───────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  const supabase = await createAuthClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user?.email) {
    return NextResponse.json({ error: 'Unauthenticated' }, { status: 401 });
  }

  let body: { slug?: string; title?: string; url?: string };
  try { body = await req.json(); } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }
  const { slug, title, url } = body;
  if (!slug || !title || !url) {
    return NextResponse.json({ error: 'slug, title, url are required' }, { status: 400 });
  }

  const userHash = await sha256hex(user.email);

  // Check current state
  const { data: existing } = await supabase
    .from('article_likes')
    .select('id')
    .eq('user_hash', userHash)
    .eq('article_slug', slug)
    .maybeSingle();

  let likedNow: boolean;

  if (existing) {
    // Already liked → unlike
    await supabase.from('article_likes').delete().eq('id', existing.id);
    likedNow = false;
  } else {
    // Not liked → like
    await supabase.from('article_likes').insert({
      user_hash:     userHash,
      article_slug:  slug,
      article_title: title,
      article_url:   url,
    });
    likedNow = true;
  }

  // Return updated count
  const { count } = await supabase
    .from('article_likes')
    .select('*', { count: 'exact', head: true })
    .eq('article_slug', slug);

  return NextResponse.json({ liked: likedNow, count: count ?? 0 });
}
