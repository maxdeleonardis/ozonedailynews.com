/**
 * RSS to Block-Based Articles Importer
 * Converts RSS feed articles to ObjectWire's block-based format
 * Usage: npm run import-blogs
 */

import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';
import * as xml2js from 'xml2js';

interface RSSItem {
  title: string[];
  link: string[];
  description: string[];
  'content:encoded'?: string[];
  pubDate: string[];
  'g-custom:tags'?: string[];
  enclosure?: Array<{ $: { url: string; type: string } }>;
}

interface ArticleBlock {
  id: string;
  type: 'paragraph' | 'heading' | 'summary' | 'stat-grid' | 'key-mechanisms' | 'sources' | 'callout';
  content: string;
  level?: number;
  items?: { num: string; title: string; desc: string }[];
  stats?: { value: string; label: string; color: string }[];
  sources?: string[];
}

interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  blocks: ArticleBlock[];
  category: string;
  status: 'draft' | 'published';
  author: string;
  createdAt: string;
  updatedAt: string;
  readTime: string;
}

const RSS_FEED_URL = 'https://www.objectwire.org/feed/rss2';

const categoryMapping: { [key: string]: string } = {
  'ai': 'Technology',
  'tech': 'Technology',
  'coding': 'Technology',
  'semiconductor': 'Technology',
  'politics': 'Politics',
  'trump': 'Politics',
  'china': 'Geopolitics',
  'investigation': 'Investigation',
  'analysis': 'Analysis',
  'business': 'Business',
  'policy': 'Policy',
  'news': 'News',
};

function fetchRSSFeed(): Promise<string> {
  return new Promise((resolve, reject) => {
    https.get(RSS_FEED_URL, (response) => {
      let data = '';
      response.on('data', (chunk) => data += chunk);
      response.on('end', () => resolve(data));
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

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 100);
}

function estimateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const words = stripHtml(content).split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

function determineCategory(tags: string, title: string): string {
  const text = `${tags} ${title}`.toLowerCase();
  
  for (const [keyword, category] of Object.entries(categoryMapping)) {
    if (text.includes(keyword)) return category;
  }
  
  return 'News';
}

function convertContentToBlocks(content: string, description: string): ArticleBlock[] {
  const blocks: ArticleBlock[] = [];
  let blockId = 1;

  // Add summary block from description
  if (description) {
    blocks.push({
      id: `summary-${blockId++}`,
      type: 'summary',
      content: stripHtml(description).substring(0, 500)
    });
  }

  // Parse HTML content into paragraphs
  const cleanContent = content
    .replace(/<h1[^>]*>(.*?)<\/h1>/gi, '\n## $1\n')
    .replace(/<h2[^>]*>(.*?)<\/h2>/gi, '\n## $1\n')
    .replace(/<h3[^>]*>(.*?)<\/h3>/gi, '\n### $1\n')
    .replace(/<p[^>]*>(.*?)<\/p>/gi, '\n$1\n')
    .replace(/<strong>(.*?)<\/strong>/gi, '**$1**')
    .replace(/<em>(.*?)<\/em>/gi, '*$1*')
    .replace(/<br\s*\/?>/gi, '\n');

  const lines = cleanContent.split('\n').filter(line => line.trim());

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    // Heading detection
    if (trimmed.startsWith('## ')) {
      blocks.push({
        id: `heading-${blockId++}`,
        type: 'heading',
        content: trimmed.replace(/^## /, ''),
        level: 2
      });
    } else if (trimmed.startsWith('### ')) {
      blocks.push({
        id: `heading-${blockId++}`,
        type: 'heading',
        content: trimmed.replace(/^### /, ''),
        level: 3
      });
    } else if (trimmed.length > 20) {
      // Regular paragraph
      blocks.push({
        id: `para-${blockId++}`,
        type: 'paragraph',
        content: stripHtml(trimmed)
      });
    }
  }

  // If no blocks were created, add content as single paragraph
  if (blocks.length === 0) {
    blocks.push({
      id: `para-1`,
      type: 'paragraph',
      content: stripHtml(content).substring(0, 1000)
    });
  }

  return blocks;
}

async function importRSSArticles(): Promise<void> {
  console.log('📡 Fetching RSS feed from objectwire.org...');
  
  try {
    const xmlData = await fetchRSSFeed();
    console.log('✅ RSS feed fetched successfully');

    const parser = new xml2js.Parser({ explicitArray: true, trim: true, normalize: true });
    const result = await parser.parseStringPromise(xmlData);

    if (!result?.rss?.channel?.[0]?.item) {
      throw new Error('Invalid RSS feed structure');
    }

    const items: RSSItem[] = result.rss.channel[0].item;
    console.log(`📊 Found ${items.length} articles in RSS feed`);

    const articles: Article[] = items.map((item, index) => {
      const title = item.title[0];
      const rawContent = item['content:encoded']?.[0] || item.description?.[0] || '';
      const description = stripHtml(item.description?.[0] || '').substring(0, 250);
      const tags = item['g-custom:tags']?.[0] || '';
      const category = determineCategory(tags, title);
      const slug = generateSlug(title);
      const readTime = estimateReadTime(rawContent);
      const blocks = convertContentToBlocks(rawContent, description);
      
      const date = new Date(item.pubDate[0]);
      const formattedDate = date.toISOString().split('T')[0];

      return {
        id: `imported-${Date.now()}-${index}`,
        title,
        slug,
        excerpt: description,
        blocks,
        category,
        status: 'published' as const,
        author: 'ObjectWire Editorial',
        createdAt: formattedDate,
        updatedAt: formattedDate,
        readTime
      };
    });

    // Sort by date descending
    articles.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    // Create data directory if needed
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Generate TypeScript file
    const outputPath = path.join(dataDir, 'imported-articles.ts');
    const tsContent = `// Auto-generated from RSS feed import
// Last updated: ${new Date().toISOString()}
// Total articles: ${articles.length}

import { Article } from '@/lib/admin/articles-context';

export const importedArticles: Article[] = ${JSON.stringify(articles, null, 2)};
`;

    fs.writeFileSync(outputPath, tsContent, 'utf-8');
    console.log(`\n✅ Successfully imported ${articles.length} articles to ${outputPath}`);

    // Generate summary
    const categoryCount: { [key: string]: number } = {};
    articles.forEach(article => {
      categoryCount[article.category] = (categoryCount[article.category] || 0) + 1;
    });

    console.log('\n📈 Import Summary:');
    console.log(`   Total articles: ${articles.length}`);
    console.log(`   Average blocks per article: ${Math.round(articles.reduce((sum, a) => sum + a.blocks.length, 0) / articles.length)}`);
    console.log('\n📁 Categories:');
    Object.entries(categoryCount).forEach(([cat, count]) => {
      console.log(`   ${cat}: ${count} articles`);
    });

    console.log('\n💡 Next steps:');
    console.log('   1. Import in articles-context.tsx:');
    console.log('      import { importedArticles } from "@/data/imported-articles";');
    console.log('   2. Merge with defaultArticles array');
    console.log('   3. Review and edit articles in /admin dashboard');

  } catch (error) {
    console.error('❌ Error importing RSS feed:', error);
    throw error;
  }
}

// Run the import
importRSSArticles().catch(console.error);
