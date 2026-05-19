import fs from 'fs';
import path from 'path';
import { SITE_CONFIG } from '@/lib/site-config';

export const dynamic = 'force-dynamic';

// Google News Sitemap Protocol: https://developers.google.com/search/docs/crawling-indexing/sitemaps/news-sitemap
//
// Source: on-prem static JSON files in content/static/{articles,jack_articles}/
// force-dynamic is intentional: Google News requires fresh sitemap on every crawl.
//
// Rules enforced here per Google News spec:
// - Only articles published within the last 48 hours (not 72h).
// - Hard cap of 1,000 URLs. Google ignores entries beyond this.
// - Timestamps use ISO 8601 with explicit timezone offset (Central Time),
//   not bare UTC Z — news crawlers weight the offset for freshness scoring.

// Strict 48-hour window. Google News only indexes articles within 48h of publication.
// Do NOT increase this — entries older than 48h are silently ignored by Google News.
const NEWS_WINDOW_HOURS = 48;

// Google News sitemap hard cap.
const MAX_NEWS_ENTRIES = 1000;

// Central Time UTC offset (Austin, TX — America/Chicago).
// Detects DST dynamically: CDT = -05:00 (Mar–Nov), CST = -06:00 (Nov–Mar).
function getCentralTimeOffset(): string {
  const now = new Date();
  // Intl gives us the offset in minutes for the America/Chicago timezone at this moment.
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Chicago',
    timeZoneName: 'shortOffset',
  });
  const parts = formatter.formatToParts(now);
  const tzPart = parts.find(p => p.type === 'timeZoneName')?.value ?? 'GMT-5';
  // tzPart is like "GMT-5" or "GMT-6"
  const match = tzPart.match(/GMT([+-]\d+)/);
  if (!match) return '-05:00';
  const hours = parseInt(match[1], 10);
  const sign = hours >= 0 ? '+' : '-';
  const abs = Math.abs(hours);
  return `${sign}${String(abs).padStart(2, '0')}:00`;
}

/**
 * Format a Date as ISO 8601 with explicit Central Time offset.
 * Example: 2026-05-18T18:00:00-05:00
 * Google News crawlers use this to score freshness. Bare UTC "Z" is valid but
 * an explicit offset signals the article's local publication timezone.
 */
function formatCentralTime(date: Date): string {
  const offset = getCentralTimeOffset();
  // Convert the UTC date to Central Time by adjusting for the offset.
  const offsetHours = parseInt(offset.slice(0, 3), 10); // e.g. -5 or -6
  const adjusted = new Date(date.getTime() + offsetHours * 60 * 60 * 1000);
  const iso = adjusted.toISOString(); // always UTC at this point
  // Replace the trailing Z with the real offset.
  return iso.replace(/\.\d{3}Z$/, offset).replace('Z', offset);
}

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
    const now = new Date();
    const cutoff = new Date(now.getTime() - NEWS_WINDOW_HOURS * 60 * 60 * 1000);

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
        const pubDate = new Date(pubAt);
        if (isNaN(pubDate.getTime())) return false;
        return pubDate >= cutoff && pubDate <= now;
      })
      .map(row => {
        const rawUrl = String(row.url || row.article_url || '');
        const pubDate = new Date(String(row.published_at));
        return {
          loc: rawUrl.startsWith('http') ? rawUrl : `${baseUrl}${rawUrl}`,
          title: String(row.title),
          // Timezone-offset timestamp: signals Central Time publication to news crawlers.
          publicationDate: formatCentralTime(pubDate),
          keywords: Array.isArray(row.tags)
            ? (row.tags as string[]).join(', ')
            : String(row.category || ''),
        };
      })
      .sort((a, b) => new Date(b.publicationDate).getTime() - new Date(a.publicationDate).getTime())
      // Hard cap: Google News ignores entries beyond 1,000.
      .slice(0, MAX_NEWS_ENTRIES);
    
    // Generate Google News Sitemap XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${allArticles.map(article => `  <url>
    <loc>${escapeXml(article.loc)}</loc>
    <news:news>
      <news:publication>
        <news:name>Ozone Network News</news:name>
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
        // News bots expect fresh data. 15-minute cache is the floor.
        // stale-while-revalidate allows serving cached while rebuilding.
        'Cache-Control': 'public, max-age=900, s-maxage=900, stale-while-revalidate=1800',
        'X-Robots-Tag': 'noindex',
      },
    });
  } catch (error) {
    console.error('Error generating news sitemap:', error);
    return new Response('Error generating news sitemap', { status: 500 });
  }
}

// Escape XML special characters
function escapeXml(unsafe: string): string {
  if (!unsafe) return '';
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}


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
        <news:name>OzoneNews</news:name>
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
