/**
 * GET  /api/saves?slug=...   — returns { saved: boolean }
 * POST /api/saves            — toggles save for authenticated user
 *                              body: { slug, title?, url?, image?, category? }
 *                              returns { saved: boolean }
 */

import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

async function getUser() {
  const supabase = await createClient();
  if (!supabase) return { supabase: null, user: null };
  const { data: { user } } = await supabase.auth.getUser();
  return { supabase, user };
}

// ── GET /api/saves?slug= ─────────────────────────────────────────────────────

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get('slug');
  if (!slug) return NextResponse.json({ saved: false });

  const { supabase, user } = await getUser();
  if (!supabase || !user) return NextResponse.json({ saved: false });

  const { data } = await supabase
    .from('saved_articles')
    .select('id')
    .eq('slug', slug)
    .eq('user_id', user.id)
    .maybeSingle();

  return NextResponse.json({ saved: !!data });
}

// ── POST /api/saves ──────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  const { supabase, user } = await getUser();
  if (!supabase || !user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json().catch(() => ({}));
  const slug: string = body.slug ?? '';
  if (!slug) return NextResponse.json({ error: 'Missing slug' }, { status: 400 });

  const { data: existing } = await supabase
    .from('saved_articles')
    .select('id')
    .eq('slug', slug)
    .eq('user_id', user.id)
    .maybeSingle();

  if (existing) {
    // Unsave
    await supabase.from('saved_articles').delete().eq('id', existing.id);
    return NextResponse.json({ saved: false });
  } else {
    // Save
    await supabase.from('saved_articles').insert({
      slug,
      user_id: user.id,
      title: body.title ?? null,
      url: body.url ?? null,
      image: body.image ?? null,
      category: body.category ?? null,
      saved_at: new Date().toISOString(),
    });
    return NextResponse.json({ saved: true });
  }
}
