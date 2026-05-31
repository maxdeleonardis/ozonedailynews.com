// app/api/cms/publish/route.ts
// THE GIT BRIDGE — turns a Supabase draft into a Git commit.
//
// Flow:
//   1. Verify caller is an authenticated editor
//   2. Fetch full draft article from Supabase (service role bypasses RLS)
//   3. Run E-E-A-T gate (same rules as alfasa-sentinel.ts)
//   4. Format to ArticleFull static JSON (the content/static/articles/ format)
//   5. Upsert registry entry in-process (busts in-memory cache immediately)
//   6. Commit 2 files atomically to GitHub: article JSON + updated registry
//      NOTE: page.tsx stubs are NOT generated — app/[...slug]/page.tsx handles
//      all article routing dynamically. Generating stubs would bloat the file
//      tree and slow Railway builds as the site scales.
//   7. If Git commit fails → delete uploaded media from Supabase Storage (rollback)
//   8. Update Supabase row status → 'published'
//   9. Return the live URL
//
// Required env vars:
//   GITHUB_TOKEN          — Fine-grained PAT with contents:write on this repo ONLY
//   GITHUB_OWNER          — e.g. "aMarketology"
//   GITHUB_REPO           — e.g. "ozonedailynews.com"
//   GITHUB_DEFAULT_BRANCH — fallback branch if brand_slug has no mapping (usually "master")
//
// Brand → Branch mapping (extend as you launch new sites):
//   ozone     → master
//   basil     → basil
//   obsidian  → obsidian
//   honey     → honey
//   onyx      → onyx
//   clover    → clover
//   content   → content
//   objective → objective

import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { createSSRClient } from '@/lib/supabase/ssr';
import { createServiceClient } from '@/lib/supabase/server';
import { upsertRegistryEntry } from '@/lib/registry-service';
import { upsertRoute } from '@/lib/routing-service';
import { KNOWN_AUTHOR_SLUGS } from '@/lib/authors';
import { commitFilesAtomically, BRAND_BRANCH } from '@/lib/github-commit';
import type { ArticleFull } from '@/lib/types';
import type { ContentEntry } from '@/lib/types';

// ─── E-E-A-T gate (mirrors alfasa-sentinel.ts) ───────────────────────────────

const AI_BOILERPLATE = [
  'in conclusion',
  'it is important to note',
  'it is important to remember',
  'furthermore, it is crucial',
  "in today's fast-paced world",
  'in the ever-evolving landscape',
  'it is worth noting that',
  'moreover, it should be noted',
  'navigating the complex',
  'delve into',
  'in summary',
];

function runEeatGate(article: ArticleFull): string[] {
  const errors: string[] = [];
  const text = article.content_html ?? '';
  const lower = text.toLowerCase();

  // H1 — author must resolve to a registered entity in lib/authors.ts
  if (!article.author_name || !article.author_slug) {
    errors.push('Missing author_name or author_slug.');
  }
  if (!KNOWN_AUTHOR_SLUGS.includes(article.author_slug ?? '')) {
    errors.push(`author_slug "${article.author_slug}" is not a registered author entity. Add them to lib/authors.ts first.`);
  }

  // H2 — ISO timestamp with timezone
  const isoWithTz = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}[+-]\d{2}:\d{2}/;
  if (!isoWithTz.test(article.published_at ?? '')) {
    errors.push('published_at must be ISO-8601 with timezone offset (e.g. 2026-05-26T14:00:00-05:00). Date-only values are banned.');
  }

  // H3 — word count ≥ 300
  const words = text.replace(/<[^>]+>/g, ' ').trim().split(/\s+/).filter(Boolean);
  if (words.length < 300) {
    errors.push(`content_html has only ${words.length} words. Minimum is 300.`);
  }

  // H4 — no em/en dashes
  if (/[—–]/.test(article.title ?? '') || /[—–]/.test(text)) {
    errors.push('Em dash (—) or en dash (–) found. Replace with | or a comma.');
  }

  // H5 — metadata.description 130-155 chars
  const desc = article.metadata?.description ?? '';
  if (desc.length < 130 || desc.length > 155) {
    errors.push(`metadata.description is ${desc.length} chars. Must be 130-155.`);
  }

  // H6 — canonical URL
  const canonical = article.metadata?.alternates?.canonical ?? '';
  if (!canonical.startsWith('https://')) {
    errors.push('metadata.alternates.canonical is missing or not a full HTTPS URL.');
  }

  // H7 — at least one <h2>
  if (!/<h2[\s>]/i.test(text)) {
    errors.push('content_html has no <h2> tag. At least one is required.');
  }

  // H8 — no AI boilerplate
  for (const phrase of AI_BOILERPLATE) {
    if (lower.includes(phrase)) {
      errors.push(`Banned AI phrase detected: "${phrase}"`);
    }
  }

  return errors;
}

// ─── POST /api/cms/publish ────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  // 1. Auth — must be an editor
  const ssr = await createSSRClient();
  if (!ssr) return NextResponse.json({ error: 'Auth not configured' }, { status: 503 });

  const { data: { user } } = await ssr.auth.getUser();
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const service = createServiceClient();
  if (!service) return NextResponse.json({ error: 'DB not configured' }, { status: 503 });

  const { data: profile } = await service
    .from('profiles')
    .select('is_editor, brand_slugs')
    .eq('user_id', user.id)
    .single();

  if (!profile?.is_editor) {
    return NextResponse.json({ error: 'Forbidden: editor access required' }, { status: 403 });
  }

  // 2. Parse request
  let body: { slug: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  if (!body.slug) {
    return NextResponse.json({ error: 'slug is required' }, { status: 400 });
  }

  // 3. Fetch article from Supabase (service role — reads drafts past RLS)
  const { data: article, error: fetchErr } = await service
    .from('articles')
    .select('*')
    .eq('slug', body.slug)
    .single();

  if (fetchErr || !article) {
    return NextResponse.json({ error: 'Article not found' }, { status: 404 });
  }

  if (article.status === 'published') {
    // Allow re-publishing — this will overwrite the existing static JSON on GitHub.
    // Intentional: editors can update live articles through the CMS.
  }

  // Check brand access
  const brandSlug = article.brand_slug ?? 'ozone';
  if (
    profile.brand_slugs?.length > 0 &&
    !profile.brand_slugs.includes(brandSlug)
  ) {
    return NextResponse.json({ error: 'Forbidden: not your brand' }, { status: 403 });
  }

  // 4. E-E-A-T suggestions (non-blocking — warnings returned alongside the publish result)
  const eeatWarnings = runEeatGate(article as ArticleFull);

  // 5. Verify GitHub env vars
  const GITHUB_TOKEN  = process.env.GITHUB_TOKEN;
  const GITHUB_OWNER  = process.env.GITHUB_OWNER;
  const GITHUB_REPO   = process.env.GITHUB_REPO;
  const defaultBranch = process.env.GITHUB_DEFAULT_BRANCH ?? 'master';

  if (!GITHUB_TOKEN || !GITHUB_OWNER || !GITHUB_REPO) {
    return NextResponse.json(
      { error: 'GitHub env vars not configured (GITHUB_TOKEN, GITHUB_OWNER, GITHUB_REPO).' },
      { status: 503 }
    );
  }

  // 6. Determine target branch
  const branch = BRAND_BRANCH[brandSlug] ?? defaultBranch;

  // 7. Format article to static JSON (strip DB-only fields)
  const { id: _id, brand_slug: _brand, ...staticArticle } = article;

  // Generate or reuse an immutable content_id (UUID).
  // This is the filename in content/articles/[content_id].json.
  // It NEVER changes even if the author renames the article or changes its URL.
  const { randomUUID } = await import('crypto');
  const contentId: string = (article.id && /^[0-9a-f-]{36}$/.test(article.id))
    ? article.id
    : randomUUID();

  const finalArticle = {
    ...staticArticle,
    id: contentId,          // embed the id so the file is self-describing
    status: 'published' as const,
    lifecycle: staticArticle.lifecycle ?? 'news',
  };

  const jsonContent = JSON.stringify(finalArticle, null, 2);

  // Two file paths for full backward compatibility:
  //   1. content/articles/[content_id].json — new ID-addressed path (permanent, never moves)
  //   2. content/static/articles/[slug].json — legacy slug path (existing resolution chain)
  const idFilePath   = `content/articles/${contentId}.json`;
  const jsonFilePath = `content/static/articles/${article.slug}.json`;

  // 8. Build registry entry and upsert locally (busts in-process cache immediately)
  //    app/[...slug]/page.tsx handles all routing — NO page.tsx stubs are generated.
  //    Generating stubs would bloat the file tree and slow builds at scale.
  const canonical = article.metadata?.alternates?.canonical ?? '';
  let routePath: string;
  try {
    routePath = new URL(canonical).pathname.replace(/^\//, '').replace(/\/$/, '');
  } catch {
    routePath = article.slug ?? '';
  }

  const registryEntry: ContentEntry = {
    slug:            `/${routePath}`,
    title:           finalArticle.title ?? '',
    description:     finalArticle.metadata?.description ?? '',
    publishDate:     finalArticle.published_at ?? new Date().toISOString(),
    modifiedDate:    finalArticle.published_at ?? new Date().toISOString(),
    category:        finalArticle.category ?? 'News',
    tags:            finalArticle.tags ?? [],
    author:          finalArticle.author_name ?? '',
    authorSlug:      finalArticle.author_slug ?? undefined,
    priority:        0.8,
    changeFrequency: 'daily',
    imageUrl:        finalArticle.thumbnail_src ?? undefined,
    imageAlt:        finalArticle.thumbnail_alt ?? undefined,
    articleType:     'NewsArticle',
    lifecycle:       finalArticle.lifecycle ?? 'news',
    breaking:        finalArticle.breaking ?? false,
  };

  upsertRegistryEntry(registryEntry);

  // Read the freshly-written registry to include in the atomic commit
  const { default: fs } = await import('fs');
  const { default: nodePath } = await import('path');
  const registryPath = nodePath.join(process.cwd(), 'content', 'static', 'content_registry.json');
  const registryContent = fs.readFileSync(registryPath, 'utf8');

  const filesToCommit: Array<{ path: string; content: string }> = [
    { path: idFilePath,                                         content: jsonContent },
    { path: jsonFilePath,                                       content: jsonContent },
    { path: 'content/static/content_registry.json',            content: registryContent },
  ];

  // 9. Commit all files atomically (retries up to 3x on concurrency collision)
  // New articles get a full Vercel rebuild so static paths and sitemaps refresh.
  // Re-publishes of existing articles skip the rebuild — ISR already made them live.
  const isRepublish = article.status === 'published';
  const commitMessage = isRepublish
    ? `publish: ${article.title} [skip ci]`
    : `publish: ${article.title}`;
  const commitResult = await commitFilesAtomically(
    GITHUB_OWNER,
    GITHUB_REPO,
    branch,
    GITHUB_TOKEN,
    filesToCommit,
    commitMessage
  );

  // 9b. If Git commit failed AND the article has a Supabase Storage thumbnail,
  //     delete it to prevent orphaned media accumulation in the bucket.
  if (!commitResult.ok && finalArticle.thumbnail_src) {
    try {
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
      const storageCdnBase = `${supabaseUrl}/storage/v1/object/public/media/`;
      if (finalArticle.thumbnail_src.startsWith(storageCdnBase)) {
        const storagePath = finalArticle.thumbnail_src.replace(storageCdnBase, '');
        const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? '';
        await fetch(`${supabaseUrl}/storage/v1/object/media/${storagePath}`, {
          method: 'DELETE',
          headers: { Authorization: `Bearer ${serviceKey}`, apikey: serviceKey },
        });
      }
    } catch {
      // Rollback is best-effort — log but don't mask the real commit error
    }
    return NextResponse.json(
      { error: `GitHub commit failed: ${commitResult.error}. Uploaded media was rolled back.` },
      { status: 502 }
    );
  }

  if (!commitResult.ok) {
    return NextResponse.json(
      { error: `GitHub commit failed: ${commitResult.error}` },
      { status: 502 }
    );
  }

  // 10. Update Supabase articles row status → published
  await service
    .from('articles')
    .update({ status: 'published', published_at: article.published_at ?? new Date().toISOString() })
    .eq('slug', article.slug);

  // 11. Upsert the registry entry into Supabase content_registry table.
  //     Best-effort — a schema mismatch here must never crash the response since
  //     the Git commit already succeeded and the article is live via ISR.
  try {
    await service
      .from('content_registry')
      .upsert({
        slug:             registryEntry.slug,
        title:            registryEntry.title,
        description:      registryEntry.description,
        publish_date:     registryEntry.publishDate,
        modified_date:    registryEntry.modifiedDate,
        category:         registryEntry.category,
        tags:             registryEntry.tags,
        author:           registryEntry.author,
        author_slug:      registryEntry.authorSlug ?? null,
        priority:         registryEntry.priority,
        change_frequency: registryEntry.changeFrequency,
        image_url:        registryEntry.imageUrl ?? null,
        image_alt:        registryEntry.imageAlt ?? null,
        article_type:     registryEntry.articleType ?? 'NewsArticle',
        lifecycle:        registryEntry.lifecycle ?? 'news',
        breaking:         registryEntry.breaking ?? false,
        brand_slug:       brandSlug,
      }, { onConflict: 'slug' });
  } catch (err) {
    console.error('[publish] content_registry upsert failed (non-fatal):', err);
  }

  // 11b. Upsert routing_table — maps the article's public URL to its immutable content_id.
  //      This is the core of the decoupled routing layer: the Git file is addressed by
  //      content_id (UUID), while the public URL is a free-form pointer in Supabase.
  //      Authors can change the URL at any time via /api/cms/reroute without moving Git files.
  await upsertRoute(routePath, contentId, 'articles', brandSlug);

  // 12. On-demand ISR cache bust — invalidates the cached page immediately.
  //     The article is live to readers in milliseconds. Railway's Git deploy
  //     runs in parallel as a backup sync but is no longer blocking.
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.ozonedailynews.com';
  const articleUrl = article.url ?? `${siteUrl}/${routePath}`;

  try {
    revalidatePath('/');                                           // homepage carousel
    revalidatePath(`/${routePath}`);                               // article page
    revalidatePath('/sitemap.xml');                                // main sitemap (daily revalidate default)
    revalidatePath('/rss.xml');                                    // RSS feed (1h revalidate default)
    // news-sitemap.xml is force-dynamic — no revalidation needed, always serves live data
    if (registryEntry.category) {
      revalidatePath(`/${registryEntry.category.toLowerCase()}`); // category hub
    }
  } catch {
    // revalidatePath only works in Next.js server context — safe to swallow in tests
  }

  return NextResponse.json({
    ok: true,
    slug: article.slug,
    content_id: contentId,
    branch,
    url: articleUrl,
    filesCommitted: filesToCommit.map((f) => f.path),
    warnings: eeatWarnings.length > 0 ? eeatWarnings : undefined,
    message: isRepublish
      ? `Updated and live instantly via ISR. Git synced (no rebuild — [skip ci]).`
      : `Published. Full site rebuild triggered on ${branch}. Live within ~2 min.`,
  });
}
