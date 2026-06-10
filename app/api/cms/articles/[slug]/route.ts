// app/api/cms/articles/[slug]/route.ts
// GET    — fetch a single article by slug (draft or published)
// PUT    — update a draft article (or static JSON article via GitHub commit)
// DELETE — delete a draft (published articles cannot be deleted here; use prune lifecycle)

import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';
import { createSSRClient } from '@/lib/supabase/ssr';
import { createServiceClient } from '@/lib/supabase/server';
import { commitFilesAtomically, BRAND_BRANCH } from '@/lib/github-commit';

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

  // Try multiple slug variants to match database records
  const slugVariants = [
    slug,                                    // exact: "researchers-find..."
    `/${slug}`,                              // with leading slash: "/researchers-find..."
    slug.replace(/-/, '/'),                  // first dash to slash: "news/researchers-find..."
    `/${slug.replace(/-/, '/')}`,            // leading slash + first dash: "/news/researchers-find..."
  ];

  let data = null;
  for (const variant of slugVariants) {
    const result = await service
      .from('articles')
      .select('*')
      .eq('slug', variant)
      .single();
    
    if (result.data) {
      data = result.data;
      break;
    }
  }

  if (!data) return NextResponse.json({ error: 'Not found' }, { status: 404 });

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

  // Try multiple slug variants to match database records
  const slugVariants = [
    slug,                                    // exact: "researchers-find..."
    `/${slug}`,                              // with leading slash: "/researchers-find..."
    slug.replace(/-/, '/'),                  // first dash to slash: "news/researchers-find..."
    `/${slug.replace(/-/, '/')}`,            // leading slash + first dash: "/news/researchers-find..."
  ];

  let existing = null;
  let matchedSlug = slug;
  for (const variant of slugVariants) {
    const result = await service
      .from('articles')
      .select('brand_slug, status')
      .eq('slug', variant)
      .single();
    
    if (result.data) {
      existing = result.data;
      matchedSlug = variant;
      break;
    }
  }

  // ── Static-JSON fallback ──────────────────────────────────────────────────
  // If the article has no Supabase row it was published as a static jack/wiki/
  // creator/sterling article. In that case, write the changes directly to the
  // static JSON file on GitHub (same mechanism as /api/cms/publish).
  if (!existing) {
    const STATIC_BASE = path.join(process.cwd(), 'content', 'static');
    const ALL_STORES = [
      'articles', 'jack_articles', 'wiki_articles',
      'creator_articles', 'article_pages', 'sterling_articles',
    ] as const;

    let staticPath: string | null = null;
    let store: string | null = null;
    for (const s of ALL_STORES) {
      const fp = path.join(STATIC_BASE, s, `${slug}.json`);
      if (fs.existsSync(fp)) { staticPath = fp; store = s; break; }
    }

    if (!staticPath || !store) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    let body: Record<string, unknown>;
    try { body = await req.json(); } catch {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
    }

    // Merge incoming changes with existing file content
    const existing_json = JSON.parse(fs.readFileSync(staticPath, 'utf8'));
    const merged = { ...existing_json, ...body, slug };
    const fileContent = JSON.stringify(merged, null, 2);

    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    const GITHUB_OWNER = process.env.GITHUB_OWNER;
    const GITHUB_REPO  = process.env.GITHUB_REPO;
    const GITHUB_DEFAULT_BRANCH = process.env.GITHUB_DEFAULT_BRANCH ?? 'master';

    if (!GITHUB_TOKEN || !GITHUB_OWNER || !GITHUB_REPO) {
      return NextResponse.json(
        { error: 'GitHub env vars not configured (GITHUB_TOKEN, GITHUB_OWNER, GITHUB_REPO).' },
        { status: 503 }
      );
    }

    const branch = BRAND_BRANCH[merged.brand_slug as string] ?? GITHUB_DEFAULT_BRANCH;
    const repoPath = `content/static/${store}/${slug}.json`;

    await commitFilesAtomically(
      GITHUB_OWNER, GITHUB_REPO, branch, GITHUB_TOKEN,
      [{ path: repoPath, content: fileContent }],
      `cms: update ${slug}`,
    );

    // Also update local file so dev server sees changes immediately
    fs.writeFileSync(staticPath, fileContent, 'utf8');

    return NextResponse.json({ ok: true });
  }
  // ─────────────────────────────────────────────────────────────────────────

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
        slug: matchedSlug,  // Use the matched slug variant from DB
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

  // Try multiple slug variants to match database records
  const slugVariants = [
    slug,                                    // exact: "researchers-find..."
    `/${slug}`,                              // with leading slash: "/researchers-find..."
    slug.replace(/-/, '/'),                  // first dash to slash: "news/researchers-find..."
    `/${slug.replace(/-/, '/')}`,            // leading slash + first dash: "/news/researchers-find..."
  ];

  let existing = null;
  let matchedSlug = slug;
  for (const variant of slugVariants) {
    const result = await service
      .from('articles')
      .select('brand_slug, status')
      .eq('slug', variant)
      .single();
    
    if (result.data) {
      existing = result.data;
      matchedSlug = variant;
      break;
    }
  }

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

  const { error } = await service.from('articles').delete().eq('slug', matchedSlug);
  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  return NextResponse.json({ ok: true });
}
