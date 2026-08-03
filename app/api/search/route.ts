import { NextRequest, NextResponse } from 'next/server';
import { getAllEntries } from '@/lib/registry-service';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get('q')?.trim().toLowerCase() ?? '';
  const limit = Math.min(parseInt(req.nextUrl.searchParams.get('limit') ?? '20', 10), 50);

  if (!q || q.length < 2) {
    return NextResponse.json({ results: [], total: 0, query: q });
  }

  const all = await getAllEntries();

  const scored = all
    .map((entry) => {
      const title = (entry.title ?? '').toLowerCase();
      const desc = (entry.description ?? '').toLowerCase();
      const cat = (entry.category ?? '').toLowerCase();
      const author = (entry.author ?? '').toLowerCase();
      const tags = (entry.tags ?? []).map((t: string) => t.toLowerCase());
      const slug = (entry.slug ?? '').toLowerCase();

      let score = 0;

      // Exact title match
      if (title === q) score += 100;
      // Title starts with query
      else if (title.startsWith(q)) score += 60;
      // Title contains query
      else if (title.includes(q)) score += 40;

      // Description contains query
      if (desc.includes(q)) score += 20;

      // Category match
      if (cat === q) score += 30;
      else if (cat.includes(q)) score += 15;

      // Author match
      if (author.includes(q)) score += 15;

      // Tag match
      const tagMatch = tags.some((t: string) => t === q || t.includes(q));
      if (tagMatch) score += 25;

      // Slug contains query
      if (slug.includes(q.replace(/\s+/g, '-'))) score += 10;

      return { entry, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ entry }) => ({
      slug: entry.slug,
      title: entry.title,
      description: entry.description,
      category: entry.category,
      author: entry.author,
      authorSlug: entry.authorSlug,
      publishDate: entry.publishDate,
      imageUrl: entry.imageUrl,
      tags: entry.tags ?? [],
    }));

  return NextResponse.json({ results: scored, total: scored.length, query: q });
}
