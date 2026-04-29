import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export const runtime = 'nodejs';

function stripDomain(url: string | null | undefined): string | null {
  if (!url) return null;
  try {
    return new URL(url).pathname;
  } catch {
    return url.startsWith('/') ? url : `/${url}`;
  }
}

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get('q')?.trim();
  if (!q || q.length < 2) {
    return NextResponse.json({ suggestions: [] });
  }

  const pattern = `%${q}%`;

  try {
    const supabase = await createClient();

    const [articlesRes, jackRes, creatorRes] = await Promise.all([
      supabase
        .from('articles')
        .select('title, url, category')
        .eq('status', 'published')
        .ilike('title', pattern)
        .order('published_at', { ascending: false })
        .limit(5),

      supabase
        .from('jack_articles')
        .select('title, article_url, section')
        .ilike('title', pattern)
        .limit(3),

      supabase
        .from('creator_articles')
        .select('hero_name, schema_article_url, schema_section')
        .ilike('hero_name', pattern)
        .limit(3),
    ]);

    const suggestions = [
      ...(articlesRes.data ?? []).map(a => ({
        title: a.title as string,
        url: a.url as string,
        category: (a.category as string) ?? 'News',
      })),
      ...(jackRes.data ?? []).map(a => ({
        title: a.title as string,
        url: stripDomain(a.article_url as string) ?? `/${a.title}`,
        category: (a.section as string) ?? 'Analysis',
      })),
      ...(creatorRes.data ?? []).map(a => ({
        title: a.hero_name as string,
        url: stripDomain(a.schema_article_url as string) ?? '/influencer',
        category: (a.schema_section as string) ?? 'Influencer',
      })),
    ].slice(0, 3);

    return NextResponse.json({ suggestions }, {
      headers: { 'Cache-Control': 'no-store' },
    });
  } catch {
    return NextResponse.json({ suggestions: [] });
  }
}
