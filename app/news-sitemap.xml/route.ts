// app/news-sitemap.xml/route.ts
// Google News sitemap — articles from last 48h only (1,000 URL max per spec).
// force-dynamic: Googlebot crawls every 15-60 min — must be real-time, not build-time.
// Reads ALL static content stores — articles/, jack_articles/, wiki_articles/,
// creator_articles/, article_pages/ — never Supabase.

import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { SITE_CONFIG } from '@/lib/site-config';
import type { ArticleFull } from '@/lib/types';

export const dynamic = 'force-dynamic';

// All static stores that can produce publishable articles
const STORES = [
  'articles',
  'jack_articles',
  'wiki_articles',
  'creator_articles',
  'article_pages',
  'sterling_articles',
];

function getRecentArticles(): ArticleFull[] {
  const staticBase = path.join(process.cwd(), 'content', 'static');
  const cutoff = new Date(Date.now() - 48 * 60 * 60 * 1000);

  const all: ArticleFull[] = [];

  for (const store of STORES) {
    const dir = path.join(staticBase, store);
    if (!fs.existsSync(dir)) continue;

    const entries = fs
      .readdirSync(dir)
      .filter((f) => f.endsWith('.json') && f !== '_index.json')
      .map((f) => {
        try {
          return JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')) as ArticleFull;
        } catch {
          return null;
        }
      })
      .filter((a): a is ArticleFull => {
        if (!a) return false;
        if (!a.published_at) return false;
        if ((a as ArticleFull & { lifecycle?: string }).lifecycle === 'pruned') return false;
        if ((a as ArticleFull & { status?: string }).status === 'draft') return false;
        return new Date(a.published_at) > cutoff;
      });

    all.push(...entries);
  }

  // Deduplicate by url/article_url then sort newest first
  const seen = new Set<string>();
  return all
    .filter((a) => {
      const key = a.url || (a as ArticleFull & { article_url?: string }).article_url || '';
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime())
    .slice(0, 1000);
}

export async function GET() {
  const articles = getRecentArticles();
  const baseUrl = SITE_CONFIG.url;

  const urlEntries = articles
    .map((a) => {
      // a.url is already an absolute URL in static JSON (e.g. https://www.ozonedailynews.com/nasa/...)
      // Fall back to baseUrl + slug only if url is a relative path.
      const loc = a.url?.startsWith('http') ? a.url : `${baseUrl}${a.url ?? ''}`;
      const pubDate = new Date(a.published_at).toUTCString();
      return `
    <url>
      <loc>${loc}</loc>
      <lastmod>${new Date(a.published_at).toISOString()}</lastmod>
      <news:news>
        <news:publication>
          <news:name>${SITE_CONFIG.name}</news:name>
          <news:language>en</news:language>
        </news:publication>
        <news:publication_date>${pubDate}</news:publication_date>
        <news:title>${escapeXml(a.title)}</news:title>
      </news:news>
    </url>`;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${urlEntries}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'no-store, must-revalidate',
    },
  });
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
