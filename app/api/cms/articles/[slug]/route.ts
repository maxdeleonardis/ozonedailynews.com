// app/api/cms/articles/[slug]/route.ts
// GET    — fetch a single article by slug (draft or published)
// PUT    — update a draft article
// DELETE — delete a draft (published articles cannot be deleted here; use prune lifecycle)

import { NextRequest, NextResponse } from 'next/server';
import { createSSRClient } from '@/lib/supabase/ssr';
import { createServiceClient } from '@/lib/supabase/server';

async function getEditorProfile() {
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

// ─── GET /api/cms/articles/[slug] ────────────────────────────────────────────

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const auth = await getEditorProfile();
  if (!auth) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { slug } = await params;
  const { profile, service } = auth;

  const { data, error } = await service
    .from('articles')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error || !data) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  // Check brand access
  if (
    profile.brand_slugs?.length > 0 &&
    !profile.brand_slugs.includes(data.brand_slug)
  ) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  return NextResponse.json({ article: data });
}

// ─── PUT /api/cms/articles/[slug] ────────────────────────────────────────────

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const auth = await getEditorProfile();
  if (!auth) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { slug } = await params;
  const { profile, service } = auth;

  // Fetch existing to confirm brand access
  const { data: existing } = await service
    .from('articles')
    .select('brand_slug, status')
    .eq('slug', slug)
    .single();

  if (!existing) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  if (
    profile.brand_slugs?.length > 0 &&
    !profile.brand_slugs.includes(existing.brand_slug)
  ) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  // Published articles can be edited and re-published — the publish API will
  // overwrite the existing static JSON on GitHub. Only drafts/review are saved
  // as status changes; the 'published' status is preserved by stripping it below.

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  // Strip fields that must not be changed via this route
  const { id: _id, status: _status, brand_slug: _brand, ...updateFields } = body;

  // If the article exists in `articles` — update it.
  // If it only exists in a typed table (jack_articles, etc.) or was manually
  // published via static JSON, INSERT it so it can be edited and re-published
  // via the CMS. This is the fix for the "Blue Origin title not updating" bug.
  const { error } = await service
    .from('articles')
    .upsert(
      {
        ...updateFields,
        slug,
        brand_slug: existing.brand_slug,
        // Preserve published status if already published so publish gate works
        status: existing.status ?? 'draft',
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'slug' }
    );

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ ok: true });
}

// ─── DELETE /api/cms/articles/[slug] ─────────────────────────────────────────

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const auth = await getEditorProfile();
  if (!auth) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { slug } = await params;
  const { profile, service } = auth;

  const { data: existing } = await service
    .from('articles')
    .select('brand_slug, status')
    .eq('slug', slug)
    .single();

  if (!existing) return NextResponse.json({ error: 'Not found' }, { status: 404 });

  if (existing.status === 'published') {
    return NextResponse.json(
      { error: 'Cannot delete a published article. Use lifecycle:prune instead.' },
      { status: 409 }
    );
  }

  if (
    profile.brand_slugs?.length > 0 &&
    !profile.brand_slugs.includes(existing.brand_slug)
  ) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
  }

  const { error } = await service.from('articles').delete().eq('slug', slug);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ ok: true });
}
