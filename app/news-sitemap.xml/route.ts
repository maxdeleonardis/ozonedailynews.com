import fs from 'fs';
import path from 'path';
import { SITE_CONFIG } from '@/lib/site-config';

export const dynamic = 'force-dynamic';

// Google News Sitemap Protocol: https://developers.google.com/search/docs/crawling-indexing/sitemaps/news-sitemap
//
// Source: on-prem static JSON files in content/static/{articles,jack_articles}/
// force-dynamic is intentional here: Google News requires freshness.

// How many days back to include in the Google News sitemap.
// Google News allows up to 2 days. We use 3 for late-pickup of stories published
// just before midnight UTC. Reduce to 2 if Google flags the sitemap.
const NEWS_WINDOW_DAYS = 3;

const STATIC_BASE = path.join(process.cwd(), 'content', 'static');

function readStaticArticles(table: string): Record<string, unknown>[] {
  try {
    const dir = path.join(STATIC_BASE, table);
    if (!fs.existsSync(dir)) return [];
    return fs.readdirSync(dir)
      .filter(f => f.endsWith('.json') && f !== '_index.json')
      .map(f => {
        try { return JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')); }
        catch { return null; }
      })
      .filter(Boolean);
  } catch { return []; }
}

export async function GET() {
  const baseUrl = SITE_CONFIG.url;
  
  try {
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - NEWS_WINDOW_DAYS);

    // Read from on-prem static files — no Supabase dependency
    const articleRows = [
      ...readStaticArticles('articles'),
      ...readStaticArticles('jack_articles'),
    ];

    const allArticles = articleRows
      .filter(row => {
        if (!row.url && !row.article_url) return false;
        if (!row.title) return false;
        const pubAt = String(row.published_at || '');
        if (!pubAt) return false;
        return new Date(pubAt) >= cutoff;
      })
      .map(row => {
        const rawUrl = String(row.url || row.article_url || '');
        return {
          loc: rawUrl.startsWith('http') ? rawUrl : `${baseUrl}${rawUrl}`,
          title: String(row.title),
          publicationDate: new Date(String(row.published_at)).toISOString(),
          keywords: Array.isArray(row.tags)
            ? (row.tags as string[]).join(', ')
            : String(row.category || ''),
        };
      })
      .sort((a, b) => new Date(b.publicationDate).getTime() - new Date(a.publicationDate).getTime());
    
    // Generate Google News Sitemap XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${allArticles.map(article => `  <url>
    <loc>${escapeXml(article.loc)}</loc>
    <news:news>
      <news:publication>
        <news:name>ObjectWire</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${article.publicationDate}</news:publication_date>
      <news:title>${escapeXml(article.title)}</news:title>${article.keywords ? `
      <news:keywords>${escapeXml(article.keywords)}</news:keywords>` : ''}
    </news:news>
  </url>`).join('\n')}
</urlset>`;
    
    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=900, s-maxage=900, stale-while-revalidate=1800',
        'X-Robots-Tag': 'noindex', // Sitemap itself shouldn't be indexed
      },
    });
  } catch (error) {
    console.error('Error generating news sitemap:', error);
    return new Response('Error generating news sitemap', { status: 500 });
  }
}

// Helper function to escape XML special characters
function escapeXml(unsafe: string): string {
  if (!unsafe) return '';
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
