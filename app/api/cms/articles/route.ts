// app/api/cms/articles/route.ts
// GET  — list all drafts/review articles (editors see all brands they manage)
// POST — create a new draft article in Supabase

import { NextRequest, NextResponse } from 'next/server';
import { createSSRClient } from '@/lib/supabase/ssr';
import { createServiceClient } from '@/lib/supabase/server';

// ─── Auth helper ─────────────────────────────────────────────────────────────

async function getEditorProfile(req: NextRequest) {
  const ssr = await createSSRClient();
  if (!ssr) return null;

  const { data: { user } } = await ssr.auth.getUser();
  if (!user) return null;

  const service = createServiceClient();
  if (!service) return null;

  const { data: profile } = await service
    .from('profiles')
    .select('is_editor, brand_slugs')
    .eq('user_id', user.id)
    .single();

  if (!profile?.is_editor) return null;
  return { user, profile, service };
}

// ─── GET /api/cms/articles ────────────────────────────────────────────────────

export async function GET(req: NextRequest) {
  const auth = await getEditorProfile(req);
  if (!auth) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { profile, service } = auth;
  const { searchParams } = new URL(req.url);
  const statusFilter = searchParams.get('status'); // 'draft' | 'review' | 'published' | null (all)
  const brandFilter  = searchParams.get('brand');

  let query = service
    .from('articles')
    .select('id, slug, title, category, status, brand_slug, author_name, published_at, updated_at')
    .order('updated_at', { ascending: false })
    .limit(100);

  // Scope to brands this editor manages (empty array = all brands)
  if (profile.brand_slugs?.length > 0) {
    query = query.in('brand_slug', profile.brand_slugs);
  }

  if (statusFilter) {
    query = query.eq('status', statusFilter);
  }

  if (brandFilter) {
    query = query.eq('brand_slug', brandFilter);
  }

  const { data, error } = await query;
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ articles: data ?? [] });
}

// ─── POST /api/cms/articles ───────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  const auth = await getEditorProfile(req);
  if (!auth) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { profile, service } = auth;

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  // Validate brand access
  const brandSlug = (body.brand_slug as string) ?? 'ozone';
  if (
    profile.brand_slugs?.length > 0 &&
    !profile.brand_slugs.includes(brandSlug)
  ) {
    return NextResponse.json({ error: 'Forbidden: not your brand' }, { status: 403 });
  }

  const slug = body.slug as string;
  if (!slug || !/^[a-z0-9-]+$/.test(slug)) {
    return NextResponse.json(
      { error: 'slug must be lowercase letters, numbers, and hyphens only' },
      { status: 400 }
    );
  }

  const { data, error } = await service
    .from('articles')
    .insert({
      ...body,
      brand_slug: brandSlug,
      status: 'draft',
    })
    .select('slug')
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ slug: data.slug }, { status: 201 });
}
