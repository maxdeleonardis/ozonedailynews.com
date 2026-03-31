import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

/**
 * GET /api/admin/article?slug=xxx
 * Tries articles, then jack_articles, then article_pages.
 * Returns { table, row }.
 */
export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get('slug');
  if (!slug) return NextResponse.json({ error: 'slug required' }, { status: 400 });

  const supabase = await createClient();

  // Try articles
  const { data: a } = await supabase.from('articles').select('*').eq('slug', slug).single();
  if (a) return NextResponse.json({ table: 'articles', row: a });

  // Try jack_articles
  const { data: j } = await supabase.from('jack_articles').select('*').eq('slug', slug).single();
  if (j) return NextResponse.json({ table: 'jack_articles', row: j });

  // Try article_pages
  const { data: p } = await supabase.from('article_pages').select('*').eq('slug', slug).single();
  if (p) return NextResponse.json({ table: 'article_pages', row: p });

  return NextResponse.json({ error: 'Article not found in any table' }, { status: 404 });
}

/**
 * PATCH /api/admin/article
 * Body: { slug, table, fields: { title, subtitle, ... } }
 * Updates the specified row in the specified table.
 */
export async function PATCH(req: NextRequest) {
  const body = await req.json();
  const { slug, table, fields } = body as {
    slug: string;
    table: 'articles' | 'jack_articles' | 'article_pages';
    fields: Record<string, unknown>;
  };

  if (!slug || !table || !fields) {
    return NextResponse.json({ error: 'slug, table, and fields required' }, { status: 400 });
  }

  const allowed = ['articles', 'jack_articles', 'article_pages'];
  if (!allowed.includes(table)) {
    return NextResponse.json({ error: 'Invalid table' }, { status: 400 });
  }

  const supabase = await createClient();

  const { data, error } = await supabase
    .from(table)
    .update(fields)
    .eq('slug', slug)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, row: data });
}
