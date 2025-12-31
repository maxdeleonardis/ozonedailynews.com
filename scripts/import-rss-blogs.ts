/**
 * RSS Blog Import Script for ObjectWire
 * Fetches blog posts from objectwire.org RSS feed and converts them to local format
 * Usage: npx tsx scripts/import-rss-blogs.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';
import * as xml2js from 'xml2js';

interface RSSItem {
  title: string[];
  link: string[];
  description: string[];
  'content:encoded': string[];
  enclosure: Array<{
    $: {
      url: string;
      type: string;
    };
  }>;
  pubDate: string[];
  guid: string[];
  'g-custom:tags': string[];
}

interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  publishedAt: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    email: string;
  };
  status: 'published';
  featured: boolean;
  readingTime: number;
  hero?: string;
  metadata: {
    sources: string[];
    verificationLevel: 'high' | 'medium' | 'low';
    strategicRelevance: number;
  };
}

const RSS_FEED_URL = 'https://www.objectwire.org/feed/rss2';

// Category mapping based on tags and content
const categoryMapping: { [key: string]: string } = {
  'coding': 'technology',
  'ai': 'technology',
  'semiconductor': 'technology',
  'crypto': 'technology',
  'blockchain': 'technology',
  'trump': 'politics',
  'politics': 'politics',
  'corruption': 'politics',
  'china': 'geopolitics',
  'earth': 'supply-chains',
  'trading': 'markets',
  'money': 'markets',
  'startup': 'technology',
  'vc': 'markets',
  'benefits': 'regulation',
  'austin': 'regional',
  'news': 'intelligence',
};

function fetchRSSFeed(): Promise<string> {
  return new Promise((resolve, reject) => {
    https.get(RSS_FEED_URL, (response) => {
      let data = '';
      response.on('data', (chunk) => {
        data += chunk;
      });
      response.on('end', () => {
        resolve(data);
      });
    }).on('error', reject);
  });
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#\d+;/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function cleanContent(html: string): string {
  // Remove data-rss-type attributes
  let clean = html.replace(/data-rss-type="[^"]*"/g, '');
  
  // Convert basic HTML to Markdown-style
  clean = clean
    .replace(/<h1[^>]*>(.*?)<\/h1>/gi, '\n# $1\n')
    .replace(/<h2[^>]*>(.*?)<\/h2>/gi, '\n## $1\n')
    .replace(/<h3[^>]*>(.*?)<\/h3>/gi, '\n### $1\n')
    .replace(/<h4[^>]*>(.*?)<\/h4>/gi, '\n#### $1\n')
    .replace(/<p[^>]*>(.*?)<\/p>/gi, '\n$1\n')
    .replace(/<strong>(.*?)<\/strong>/gi, '**$1**')
    .replace(/<em>(.*?)<\/em>/gi, '*$1*')
    .replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)')
    .replace(/<li[^>]*>(.*?)<\/li>/gi, '- $1\n')
    .replace(/<ul[^>]*>|<\/ul>/gi, '\n')
    .replace(/<ol[^>]*>|<\/ol>/gi, '\n')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<div[^>]*>|<\/div>/gi, '\n')
    .replace(/<span[^>]*>|<\/span>/gi, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  return clean;
}

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 100);
}

function estimateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = stripHtml(content).split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

function determineCategory(tags: string, title: string, content: string): string {
  const tagsLower = tags.toLowerCase();
  const titleLower = title.toLowerCase();
  const contentLower = content.toLowerCase();

  // Check tags first
  for (const [keyword, category] of Object.entries(categoryMapping)) {
    if (tagsLower.includes(keyword)) {
      return category;
    }
  }

  // Check title and content
  if (titleLower.includes('ai') || titleLower.includes('tech') || contentLower.includes('technology')) {
    return 'technology';
  }
  if (titleLower.includes('china') || titleLower.includes('geopolitic')) {
    return 'geopolitics';
  }
  if (titleLower.includes('trump') || titleLower.includes('politic') || titleLower.includes('election')) {
    return 'politics';
  }
  if (titleLower.includes('trade') || titleLower.includes('market') || titleLower.includes('stock')) {
    return 'markets';
  }

  return 'intelligence';
}

function extractSources(content: string): string[] {
  const sources: string[] = [];
  const urlRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let match;

  while ((match = urlRegex.exec(content)) !== null) {
    if (match[2] && match[2].startsWith('http')) {
      sources.push(match[1] || match[2]);
    }
  }

  return sources.slice(0, 5); // Limit to 5 sources
}

function calculateStrategicRelevance(title: string, content: string, tags: string): number {
  let score = 5;
  const highPriorityKeywords = ['china', 'russia', 'pentagon', 'defense', 'ai', 'quantum', 'semiconductor'];
  const mediumPriorityKeywords = ['tech', 'startup', 'market', 'regulation', 'supply'];

  const text = `${title} ${content} ${tags}`.toLowerCase();

  for (const keyword of highPriorityKeywords) {
    if (text.includes(keyword)) score += 2;
  }

  for (const keyword of mediumPriorityKeywords) {
    if (text.includes(keyword)) score += 1;
  }

  return Math.min(10, score);
}

async function parseRSSAndConvert(): Promise<void> {
  console.log('📡 Fetching RSS feed from objectwire.org...');
  
  try {
    const xmlData = await fetchRSSFeed();
    console.log('✅ RSS feed fetched successfully');

    const parser = new xml2js.Parser({
      explicitArray: true,
      trim: true,
      normalize: true
    });
    const result = await parser.parseStringPromise(xmlData);

    // Debug: log the structure
    console.log('RSS Structure:', JSON.stringify(Object.keys(result), null, 2));
    if (result.rss) {
      console.log('RSS keys:', Object.keys(result.rss));
      if (result.rss.channel) {
        console.log('Channel is array:', Array.isArray(result.rss.channel));
        if (result.rss.channel[0]) {
          console.log('Channel[0] keys:', Object.keys(result.rss.channel[0]));
        }
      }
    }

    if (!result || !result.rss || !result.rss.channel || !result.rss.channel[0].item) {
      throw new Error('Invalid RSS feed structure');
    }

    const items: RSSItem[] = result.rss.channel[0].item;
    console.log(`📊 Found ${items.length} blog posts`);

    const blogPosts: BlogPost[] = items.map((item, index) => {
      const title = item.title[0];
      const rawContent = item['content:encoded']?.[0] || item.description?.[0] || '';
      const cleanedContent = cleanContent(rawContent);
      const description = stripHtml(item.description?.[0] || rawContent).substring(0, 250);
      const tags = item['g-custom:tags']?.[0] || '';
      const tagArray = tags ? tags.split(',').map(t => t.trim()).filter(Boolean) : [];
      
      const category = determineCategory(tags, title, cleanedContent);
      const slug = generateSlug(title);
      const readingTime = estimateReadingTime(cleanedContent);
      const heroImage = item.enclosure?.[0]?.$?.url;
      const sources = extractSources(cleanedContent);
      const strategicRelevance = calculateStrategicRelevance(title, cleanedContent, tags);

      return {
        id: `imported-${index + 1}`,
        slug,
        title,
        description,
        content: cleanedContent,
        publishedAt: new Date(item.pubDate[0]).toISOString(),
        category,
        tags: tagArray.length > 0 ? tagArray : [category],
        author: {
          name: 'ObjectWire Analysis Team',
          email: 'analysis@objectwire.org'
        },
        status: 'published' as const,
        featured: strategicRelevance >= 8,
        readingTime,
        hero: heroImage,
        metadata: {
          sources,
          verificationLevel: 'high' as const,
          strategicRelevance
        }
      };
    });

    // Sort by date descending
    blogPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

    // Generate TypeScript file
    const outputPath = path.join(process.cwd(), 'data', 'imported-blog-posts.ts');
    const tsContent = `// Auto-generated from RSS feed import
// Last updated: ${new Date().toISOString()}
// Total posts: ${blogPosts.length}

import { BlogPost } from '@/lib/types';

export const importedBlogPosts: BlogPost[] = ${JSON.stringify(blogPosts, null, 2)};
`;

    fs.writeFileSync(outputPath, tsContent, 'utf-8');
    console.log(`✅ Imported ${blogPosts.length} blog posts to ${outputPath}`);

    // Generate summary
    const categoryCount: { [key: string]: number } = {};
    blogPosts.forEach(post => {
      categoryCount[post.category] = (categoryCount[post.category] || 0) + 1;
    });

    console.log('\n📈 Import Summary:');
    console.log(`   Total posts: ${blogPosts.length}`);
    console.log(`   Featured posts: ${blogPosts.filter(p => p.featured).length}`);
    console.log('\n📁 Categories:');
    Object.entries(categoryCount).forEach(([cat, count]) => {
      console.log(`   ${cat}: ${count} posts`);
    });

  } catch (error) {
    console.error('❌ Error importing RSS feed:', error);
    throw error;
  }
}

// Run the import
parseRSSAndConvert().catch(console.error);
