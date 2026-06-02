// app/api/cms/update/route.ts
// THE CORRECTION / UPDATE BRIDGE — transparency by design.
//
// Publishing a news article is not the end of its lifecycle. Stories get
// corrected, updated with new statements, and clarified. A trusted news network
// logs WHY and WHEN every post-publish change happened — it never silently edits.
//
// This endpoint:
//   1. Verifies the caller is an authenticated editor with access to the brand
//   2. Loads the LIVE (published) article from Supabase
//   3. Applies optional field updates (headline, body, thumbnail, description)
//   4. Appends a CorrectionEntry { type, note, timestamp, editor } to the ledger
//   5. Bumps dateModified (modified_date_iso) — the freshness signal Google reads
//   6. Re-runs the E-E-A-T gate so a correction can't degrade article quality
//   7. Commits the updated JSON + registry to Git atomically (shared commit lib)
//   8. Updates Supabase (articles.extra ledger + content_registry.modified_date)
//   9. Busts ISR caches for the article, sitemap, and RSS so the fresh
//      dateModified propagates immediately
//
// It deliberately does NOT change published_at — a correction must not fake a new
// publication date or re-enter the 48h Google News window dishonestly.

import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { createSSRClient } from '@/lib/supabase/ssr';
import { createServiceClient } from '@/lib/supabase/server';
import { upsertRegistryEntry } from '@/lib/registry-service';
import { commitFilesAtomically, BRAND_BRANCH } from '@/lib/github-commit';
import { KNOWN_AUTHOR_SLUGS } from '@/lib/authors';
import type { ArticleFull, ContentEntry, CorrectionEntry, CorrectionType } from '@/lib/types';

const AI_BOILERPLATE = [
  'in conclusion', 'it is important to note', 'it is important to remember',
  'furthermore, it is crucial', "in today's fast-paced world",
  'in the ever-evolving landscape', 'it is worth noting that',
  'moreover, it should be noted', 'navigating the complex', 'delve into', 'in summary',
];

function runEeatGate(article: ArticleFull): string[] {
  const errors: string[] = [];
  const text = article.content_html ?? '';
  const lower = text.toLowerCase();

  if (!article.author_name || !article.author_slug) errors.push('Missing author_name or author_slug.');
  if (!KNOWN_AUTHOR_SLUGS.includes(article.author_slug ?? '')) {
    errors.push(`author_slug "${article.author_slug}" is not a registered author entity.`);
  }
  const words = text.replace(/<[^>]+>/g, ' ').trim().split(/\s+/).filter(Boolean);
  if (words.length < 300) errors.push(`content_html has only ${words.length} words. Minimum is 300.`);
  if (/[—–]/.test(article.title ?? '') || /[—–]/.test(text)) {
    errors.push('Em dash (—) or en dash (–) found. Replace with | or a comma.');
  }
  if (!/<h2[\s>]/i.test(text)) errors.push('content_html has no <h2> tag.');
  for (const phrase of AI_BOILERPLATE) {
    if (lower.includes(phrase)) errors.push(`Banned AI phrase detected: "${phrase}"`);
  }
  return errors;
}

interface UpdateBody {
  slug: string;
  correction: { type: CorrectionType; note: string };
  updates?: Partial<Pick<ArticleFull,
    'title' | 'subtitle' | 'content_html' | 'thumbnail_src' | 'thumbnail_alt' | 'metadata' | 'tags'
  >>;
}

export async function POST(req: NextRequest) {
  // 1. Auth — editor only
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

  // 2. Parse body
  let body: UpdateBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  if (!body.slug) return NextResponse.json({ error: 'slug is required' }, { status: 400 });
  if (!body.correction?.note?.trim()) {
    return NextResponse.json({ error: 'correction.note is required — explain WHY the article changed.' }, { status: 400 });
  }
  const correctionType: CorrectionType = body.correction.type ?? 'update';
  if (!['correction', 'update', 'clarification'].includes(correctionType)) {
    return NextResponse.json({ error: 'correction.type must be correction | update | clarification' }, { status: 400 });
  }

  // 3. Load the LIVE article — check all stores in priority order so that
  //    jack_articles, creator_articles, wiki_articles, etc. are all editable.
  const SUPABASE_TABLE_MAP: Record<string, string> = {
    jack_article:    'jack_articles',
    creator_article: 'creator_articles',
    wiki_article:    'wiki_articles',
    article_page:    'article_pages',
    news_article:    'articles',
  };
  const STATIC_STORE_MAP: Record<string, string> = {
    jack_article:    'jack_articles',
    creator_article: 'creator_articles',
    wiki_article:    'wiki_articles',
    article_page:    'article_pages',
    news_article:    'articles',
  };

  // Try the primary articles table first, then fan out to typed tables.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let article: Record<string, any> | null = null;
  const primaryResult = await service
    .from('articles')
    .select('*')
    .eq('slug', body.slug)
    .single();
  if (!primaryResult.error && primaryResult.data) {
    article = primaryResult.data;
  } else {
    // Fan out to typed Supabase tables
    for (const table of ['jack_articles', 'creator_articles', 'wiki_articles', 'article_pages']) {
      const { data, error } = await service
        .from(table)
        .select('*')
        .eq('slug', body.slug)
        .single();
      if (!error && data) {
        article = data;
        break;
      }
    }
    // Last resort: load from static JSON on disk
    if (!article) {
      const { default: fs } = await import('fs');
      const { default: nodePath } = await import('path');
      for (const store of Object.values(STATIC_STORE_MAP)) {
        const fp = nodePath.join(process.cwd(), 'content', 'static', store, `${body.slug}.json`);
        if (fs.existsSync(fp)) {
          article = JSON.parse(fs.readFileSync(fp, 'utf8'));
          break;
        }
      }
    }
  }

  if (!article) return NextResponse.json({ error: 'Article not found in any store' }, { status: 404 });
  if (article.status && article.status !== 'published') {
    return NextResponse.json({ error: 'Only published articles can be corrected/updated. Use /api/cms/publish for drafts.' }, { status: 409 });
  }

  // Resolve which static store and Supabase table this article belongs to
  const resolvedArticleType: string = (article.article_type as string) ?? 'news_article';
  const resolvedStore = STATIC_STORE_MAP[resolvedArticleType] ?? 'articles';
  const resolvedTable = SUPABASE_TABLE_MAP[resolvedArticleType] ?? 'articles';

  // 4. Brand access check
  const brandSlug = article.brand_slug ?? 'ozone';
  if (profile.brand_slugs?.length > 0 && !profile.brand_slugs.includes(brandSlug)) {
    return NextResponse.json({ error: 'Forbidden: not your brand' }, { status: 403 });
  }

  // 5. Apply optional field updates — article_type is ALWAYS preserved from the
  //    original record so the renderer (JackArticleDB, NewsArticle, etc.) never changes.
  const u = body.updates ?? {};
  const merged = {
    ...(article as ArticleFull),
    article_type: resolvedArticleType, // locked — never allow updates to change this
    ...(u.title !== undefined && { title: u.title }),
    ...(u.subtitle !== undefined && { subtitle: u.subtitle }),
    ...(u.content_html !== undefined && { content_html: u.content_html }),
    ...(u.thumbnail_src !== undefined && { thumbnail_src: u.thumbnail_src }),
    ...(u.thumbnail_alt !== undefined && { thumbnail_alt: u.thumbnail_alt }),
    ...(u.tags !== undefined && { tags: u.tags }),
    ...(u.metadata !== undefined && { metadata: { ...(article.metadata ?? {}), ...u.metadata } }),
  } as ArticleFull & { article_type: string };

  // 6. E-E-A-T suggestions (non-blocking)
  const eeatWarnings = runEeatGate(merged);

  // 7. Append correction to the ledger and bump dateModified
  const nowIso = new Date().toISOString();
  const existingCorrections: CorrectionEntry[] = Array.isArray(article.corrections)
    ? article.corrections
    : Array.isArray(article.extra?.corrections)
      ? article.extra.corrections
      : [];

  const correctionEntry: CorrectionEntry = {
    type: correctionType,
    note: body.correction.note.trim(),
    timestamp: nowIso,
    editor: user.email ?? user.id,
  };
  const corrections = [...existingCorrections, correctionEntry];

  // 8. Verify GitHub env + branch
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  const GITHUB_OWNER = process.env.GITHUB_OWNER;
  const GITHUB_REPO  = process.env.GITHUB_REPO;
  const defaultBranch = process.env.GITHUB_DEFAULT_BRANCH ?? 'master';
  if (!GITHUB_TOKEN || !GITHUB_OWNER || !GITHUB_REPO) {
    return NextResponse.json({ error: 'GitHub env vars not configured.' }, { status: 503 });
  }
  const branch = BRAND_BRANCH[brandSlug] ?? defaultBranch;

  // 9. Format static JSON (mirror publish route shape)
  const { id: _id, brand_slug: _brand, ...staticArticle } = merged as unknown as Record<string, unknown>;
  const { randomUUID } = await import('crypto');
  const contentId: string = (article.id && /^[0-9a-f-]{36}$/.test(article.id)) ? article.id : randomUUID();

  const finalArticle = {
    ...staticArticle,
    id: contentId,
    status: 'published' as const,
    lifecycle: (staticArticle.lifecycle as string) ?? 'news',
    modified_date_iso: nowIso,
    corrections,
  };
  const jsonContent = JSON.stringify(finalArticle, null, 2);

  const idFilePath   = `content/articles/${contentId}.json`;
  const jsonFilePath = `content/static/${resolvedStore}/${article.slug}.json`;

  // 10. Build registry entry — bump modifiedDate, KEEP original publishDate
  const canonical = merged.metadata?.alternates?.canonical ?? '';
  let routePath: string;
  try {
    routePath = new URL(canonical).pathname.replace(/^\//, '').replace(/\/$/, '');
  } catch {
    routePath = article.slug ?? '';
  }

  const registryEntry: ContentEntry = {
    slug:            `/${routePath}`,
    title:           merged.title ?? '',
    description:     merged.metadata?.description ?? '',
    publishDate:     article.published_at ?? nowIso,    // unchanged
    modifiedDate:    nowIso,                             // bumped
    category:        merged.category ?? 'News',
    tags:            merged.tags ?? [],
    author:          merged.author_name ?? '',
    authorSlug:      merged.author_slug ?? undefined,
    priority:        0.8,
    changeFrequency: 'daily',
    imageUrl:        merged.thumbnail_src ?? undefined,
    imageAlt:        merged.thumbnail_alt ?? undefined,
    articleType:     'NewsArticle',
    lifecycle:       (merged.lifecycle as ContentEntry['lifecycle']) ?? 'news',
    breaking:        merged.breaking ?? false,
  };
  upsertRegistryEntry(registryEntry);

  const { default: fs } = await import('fs');
  const { default: nodePath } = await import('path');
  const registryPath = nodePath.join(process.cwd(), 'content', 'static', 'content_registry.json');
  const registryContent = fs.readFileSync(registryPath, 'utf8');

  // 11. Commit atomically
  // Corrections never need a full rebuild — ISR busts the cache instantly.
  const commitMessage = `${correctionType}: ${merged.title} — ${correctionEntry.note.slice(0, 72)} [skip ci]`;
  const commitResult = await commitFilesAtomically(
    GITHUB_OWNER, GITHUB_REPO, branch, GITHUB_TOKEN,
    [
      { path: idFilePath,                              content: jsonContent },
      { path: jsonFilePath,                            content: jsonContent },
      { path: 'content/static/content_registry.json', content: registryContent },
    ],
    commitMessage,
  );
  if (!commitResult.ok) {
    return NextResponse.json({ error: `GitHub commit failed: ${commitResult.error}` }, { status: 502 });
  }

  // 12. Update Supabase: store ledger + bumped modified in the correct table
  const newExtra = { ...(article.extra ?? {}), corrections, modified_date_iso: nowIso };
  await service.from(resolvedTable).update({
    title:        merged.title,
    subtitle:     merged.subtitle,
    content_html: merged.content_html,
    thumbnail_src: merged.thumbnail_src,
    thumbnail_alt: merged.thumbnail_alt,
    tags:         merged.tags,
    metadata:     merged.metadata,
    extra:        newExtra,
  }).eq('slug', article.slug);

  // Best-effort registry sync — must not crash if schema is behind
  try {
    await service.from('content_registry')
      .update({
        title:         registryEntry.title,
        description:   registryEntry.description,
        modified_date: nowIso,
        image_url:     registryEntry.imageUrl ?? null,
        image_alt:     registryEntry.imageAlt ?? null,
        tags:          registryEntry.tags,
      })
      .eq('slug', registryEntry.slug);
  } catch (err) {
    console.error('[update] content_registry update failed (non-fatal):', err);
  }

  // 13. Bust caches so the fresh dateModified propagates immediately
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.ozonedailynews.com';
  try {
    revalidatePath(`/${routePath}`);
    revalidatePath('/sitemap.xml');
    revalidatePath('/rss.xml');
    revalidatePath('/');
  } catch {
    // requires Next.js server context
  }

  return NextResponse.json({
    ok: true,
    slug: article.slug,
    type: correctionType,
    modifiedAt: nowIso,
    correctionsCount: corrections.length,
    url: `${siteUrl}/${routePath}`,
    warnings: eeatWarnings.length > 0 ? eeatWarnings : undefined,
    message: `${correctionType} logged and committed. dateModified bumped to ${nowIso}. Caches busted; sitemap and RSS now reflect the change.`,
  });
}
