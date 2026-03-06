// =============================================================================
// POST /api/history/track
//
// Records one article view for the currently logged-in user.
// Uses SHA-256 of the user's email as the row key — no PII stored in DB.
//
// Body (JSON):
//   { slug, title, url, image?, category? }
//
// Rules:
//   • Upserts on (user_hash, slug) so revisiting updates viewed_at.
//   • After upsert, prunes rows so each user keeps at most MAX_ROWS.
//   • Rows older than TTL_DAYS are purged in the same request.
// =============================================================================

import { NextRequest, NextResponse } from 'next/server';
import { getServerSession }          from 'next-auth';
import { authOptions }               from '@/lib/auth-options';
import { createClient }              from '@/lib/supabase/server';
import { sha256hex }                 from '@/lib/hash';

const MAX_ROWS  = 50;   // max history items per user
const TTL_DAYS  = 7;    // how long to retain history

export async function POST(req: NextRequest) {
  // ── Auth check ────────────────────────────────────────────────────────────
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthenticated' }, { status: 401 });
  }

  // ── Parse body ────────────────────────────────────────────────────────────
  let body: { slug?: string; title?: string; url?: string; image?: string; category?: string };
  try { body = await req.json(); } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }
  const { slug, title, url, image, category } = body;
  if (!slug || !title || !url) {
    return NextResponse.json({ error: 'slug, title, url are required' }, { status: 400 });
  }

  const userHash = await sha256hex(session.user.email);
  const supabase = await createClient();
  const cutoff   = new Date(Date.now() - TTL_DAYS * 86_400_000).toISOString();

  // ── Upsert current view ───────────────────────────────────────────────────
  const { error: upsertErr } = await supabase
    .from('article_view_history')
    .upsert(
      {
        user_hash:        userHash,
        article_slug:     slug,
        article_title:    title,
        article_url:      url,
        article_image:    image ?? null,
        article_category: category ?? null,
        viewed_at:        new Date().toISOString(),
      },
      { onConflict: 'user_hash,article_slug' },
    );

  if (upsertErr) {
    console.error('[history/track] upsert error:', upsertErr.message);
    return NextResponse.json({ error: 'DB error' }, { status: 500 });
  }

  // ── Prune expired rows ───────────────────────────────────────────────────
  await supabase
    .from('article_view_history')
    .delete()
    .eq('user_hash', userHash)
    .lt('viewed_at', cutoff);

  // ── Prune overflow (keep newest MAX_ROWS) ─────────────────────────────────
  const { data: oldest } = await supabase
    .from('article_view_history')
    .select('id, viewed_at')
    .eq('user_hash', userHash)
    .order('viewed_at', { ascending: false })
    .range(MAX_ROWS, 999); // rows BEYOND the limit

  if (oldest && oldest.length > 0) {
    const ids = oldest.map((r: { id: string }) => r.id);
    await supabase.from('article_view_history').delete().in('id', ids);
  }

  return NextResponse.json({ ok: true });
}
