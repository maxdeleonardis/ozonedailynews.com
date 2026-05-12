/**
 * feed-utils.ts — On-prem RSS feed utilities.
 *
 * Reads entirely from content/static/content_registry.json.
 * NO Supabase. Zero network calls.
 */

import { readFileSync } from 'fs';
import { join } from 'path';
import { SITE_CONFIG } from '@/lib/site-config';

export interface RegistryEntry {
  slug: string;
  title: string;
  description?: string;
  publish_date?: string;
  published_at?: string;
  category?: string;
  tags?: string[];
  author?: string;
  image_url?: string;
  image_width?: number;
  image_height?: number;
  image_alt?: string;
}

let _cache: RegistryEntry[] | null = null;

export function loadRegistry(): RegistryEntry[] {
  if (_cache) return _cache;
  try {
    const filePath = join(process.cwd(), 'content', 'static', 'content_registry.json');
    const raw = readFileSync(filePath, 'utf-8');
    _cache = JSON.parse(raw) as RegistryEntry[];
    return _cache;
  } catch (err) {
    console.error('[feed-utils] Failed to load content_registry.json:', err);
    return [];
  }
}

export function escapeXml(unsafe: string): string {
  if (!unsafe) return '';
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/**
 * Build a category RSS feed from the on-prem content registry.
 * @param category  The registry `category` value to filter by (case-insensitive match)
 * @param selfUrl   The canonical URL of this feed endpoint
 * @param limit     Max items to include
 */
export function buildCategoryFeed(category: string, selfUrl: string, limit = 100): string {
  const baseUrl = SITE_CONFIG.url;
  const label = category.charAt(0).toUpperCase() + category.slice(1);

  const allRows = loadRegistry();

  const rows = allRows
    .filter(r => {
      if ((r.category || '').toLowerCase() !== category.toLowerCase()) return false;
      const parts = r.slug.split('/').filter(Boolean);
      if (parts.length < 2) return false;
      if ((r.description || '').length < 60) return false;
      return true;
    })
    .sort((a, b) => {
      const dateA = a.published_at || a.publish_date || '';
      const dateB = b.published_at || b.publish_date || '';
      return new Date(dateB).getTime() - new Date(dateA).getTime();
    })
    .slice(0, limit);

  const items = rows
    .map(row => {
      const slug = row.slug.startsWith('/') ? row.slug.substring(1) : row.slug;
      const articleUrl = `${baseUrl}/${slug}`;
      const pubDateRaw = row.published_at || row.publish_date || '';
      const pubDate = pubDateRaw ? new Date(pubDateRaw).toUTCString() : new Date().toUTCString();
      const author = row.author || 'ObjectWire Editorial';
      const tags = Array.isArray(row.tags) ? row.tags : [];
      const imgUrl = row.image_url ? escapeXml(row.image_url) : '';
      const imgWidth = row.image_width || 1200;
      const imgHeight = row.image_height || 675;
      const mediaTag = imgUrl
        ? `\n      <media:content url="${imgUrl}" medium="image" width="${imgWidth}" height="${imgHeight}"/>
      <media:thumbnail url="${imgUrl}" width="${imgWidth}" height="${imgHeight}"/>`
        : '';
      return `
    <item>
      <title><![CDATA[${row.title}]]></title>
      <link>${articleUrl}</link>
      <guid isPermaLink="true">${articleUrl}</guid>
      <description><![CDATA[${row.description || ''}]]></description>
      <pubDate>${pubDate}</pubDate>
      <dc:creator>${escapeXml(author)}</dc:creator>
      <author>${SITE_CONFIG.email} (${escapeXml(author)})</author>
      <category>${escapeXml(row.category || 'News')}</category>${tags.map(tag => `
      <category>${escapeXml(tag)}</category>`).join('')}${mediaTag}
    </item>`;
    })
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:media="http://search.yahoo.com/mrss/"
  xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(SITE_CONFIG.name)} - ${escapeXml(label)}</title>
    <link>${baseUrl}</link>
    <description>${escapeXml(label)} coverage from ${escapeXml(SITE_CONFIG.name)}.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${selfUrl}" rel="self" type="application/rss+xml"/>${items}
  </channel>
</rss>`;
}
