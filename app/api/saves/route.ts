// =============================================================================
// /api/saves
//
// GET  (no params)          → { saves: SaveEntry[] }  — user's full save list
// GET  ?slug=xxx            → { saved: boolean }       — single-article check
//
// POST { slug, title, url, image?, category? }
//   Requires auth. Toggles the save for the current user.
//   → { saved: boolean }
// =============================================================================

import { NextRequest, NextResponse } from 'next/server';
import { createAuthClient }          from '@/lib/supabase/server';
import { sha256hex }                 from '@/lib/hash';

// ── GET /api/saves ─────────────────────────────────────────────────────────────
export async function GET(req: NextRequest) {
  const supabase = await createAuthClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user?.email) {
    return NextResponse.json({ error: 'Unauthenticated' }, { status: 401 });
  }

  const userHash = await sha256hex(user.email);
  const slug     = req.nextUrl.searchParams.get('slug');

  if (slug) {
    // Single-article saved check
    const { data } = await supabase
      .from('article_saves')
      .select('id')
      .eq('user_hash', userHash)
      .eq('article_slug', slug)
      .maybeSingle();
    return NextResponse.json({ saved: !!data });
  }

  // Full save list
  const { data, error } = await supabase
    .from('article_saves')
    .select('article_slug, article_title, article_url, article_image, article_category, saved_at')
    .eq('user_hash', userHash)
    .order('saved_at', { ascending: false });

  if (error) return NextResponse.json({ error: 'DB error' }, { status: 500 });
  return NextResponse.json({ saves: data ?? [] });
}

// ── POST /api/saves ────────────────────────────────────────────────────────────
export async function POST(req: NextRequest) {
  const supabase = await createAuthClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user?.email) {
    return NextResponse.json({ error: 'Unauthenticated' }, { status: 401 });
  }

  let body: { slug?: string; title?: string; url?: string; image?: string; category?: string };
  try { body = await req.json(); } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }
  const { slug, title, url, image, category } = body;
  if (!slug || !title || !url) {
    return NextResponse.json({ error: 'slug, title, url are required' }, { status: 400 });
  }

  const userHash = await sha256hex(user.email);

  // Check current state
  const { data: existing } = await supabase
    .from('article_saves')
    .select('id')
    .eq('user_hash', userHash)
    .eq('article_slug', slug)
    .maybeSingle();

  if (existing) {
    // Already saved → unsave
    await supabase.from('article_saves').delete().eq('id', existing.id);
    return NextResponse.json({ saved: false });
  }

  // Not saved → save
  await supabase.from('article_saves').insert({
    user_hash:        userHash,
    article_slug:     slug,
    article_title:    title,
    article_url:      url,
    article_image:    image  ?? null,
    article_category: category ?? null,
  });
  return NextResponse.json({ saved: true });
}
