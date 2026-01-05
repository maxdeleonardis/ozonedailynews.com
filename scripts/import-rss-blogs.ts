/**
 * RSS Blog Import Script for ObjectWire
 * Fetches blog posts from objectwire.org RSS feed and converts them to local format
 * 
 * Usage: 
 *   npx tsx scripts/import-rss-blogs.ts
 *   npx tsx scripts/import-rss-blogs.ts --file path/to/rss-feed.xml
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
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'application/rss+xml, application/xml, text/xml, */*'
      }
    };
    
    https.get(RSS_FEED_URL, options, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        const redirectUrl = response.headers.location;
        if (redirectUrl) {
          console.log(`↪️  Redirecting to: ${redirectUrl}`);
          https.get(redirectUrl, options, (redirectResponse) => {
            let data = '';
            redirectResponse.on('data', (chunk) => {
              data += chunk;
            });
            redirectResponse.on('end', () => {
              resolve(data);
            });
          }).on('error', reject);
          return;
        }
      }

      // Handle 404 or other error status codes
      if (response.statusCode !== 200) {
        console.log(`⚠️  HTTP Status: ${response.statusCode}`);
        console.log(`\n💡 Tip: The RSS feed may be protected or not yet available.`);
        console.log(`   Try one of these solutions:`);
        console.log(`   1. Download the RSS feed manually and save it as 'rss-feed.xml' in the scripts folder`);
        console.log(`   2. Run: node scripts/import-rss-blogs.ts --file scripts/rss-feed.xml`);
        console.log(`   3. Check if the site is live at https://www.objectwire.org\n`);
        reject(new Error(`HTTP ${response.statusCode}: RSS feed not accessible`));
        return;
      }

      let data = '';
      response.on('data', (chunk) => {
        data += chunk;
      });
      response.on('end', () => {
        // Check if response is HTML instead of XML
        const trimmedData = data.trim();
        if (trimmedData.startsWith('<!DOCTYPE html') || trimmedData.startsWith('<html')) {
          console.log('⚠️  Received HTML instead of XML RSS feed');
          console.log('First 200 chars:', trimmedData.substring(0, 200));
          reject(new Error('RSS feed returned HTML instead of XML. The feed may not be available yet.'));
          return;
        }
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

function createBlogPageFile(post: BlogPost, outputDir: string): void {
  const blogDir = path.join(outputDir, post.slug);
  
  // Create directory for this blog post
  if (!fs.existsSync(blogDir)) {
    fs.mkdirSync(blogDir, { recursive: true });
  }

  // Create page.tsx file with MDX content
  const pageContent = `// Auto-generated from RSS feed import on ${new Date().toISOString()}

import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

export const metadata = {
  title: '${post.title.replace(/'/g, "\\'")} | ObjectWire',
  description: '${post.description.replace(/'/g, "\\'")}',
};

export default function BlogPost() {
  return (
    <>
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 z-50" />

      <article className="py-16 md:py-20 selection:bg-yellow-100 selection:text-yellow-900">
        <div className="max-w-[1150px] mx-auto px-6 md:px-12">
          
          {/* Article Header */}
          <header className="mb-12">
            <div className="mb-6">
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-900 transition-all duration-300 hover:gap-3"
              >
                <span>←</span>
                <span>Back to News</span>
              </Link>
            </div>
            
            <Badge variant="destructive" className="bg-red-500 mb-4">
              ${post.category.toUpperCase()}
            </Badge>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight">
              ${post.title.replace(/'/g, "\\'")}
            </h1>
            
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
              <span className="font-medium">${post.author.name}</span>
              <span>•</span>
              <time dateTime="${post.publishedAt}">
                ${new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
              <span>•</span>
              <span>${post.readingTime} min read</span>
            </div>

            ${post.tags.length > 0 ? `<div className="flex flex-wrap gap-2 mb-8">
              ${post.tags.map(tag => `<span key="${tag}" className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">${tag}</span>`).join('\n              ')}
            </div>` : ''}
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="leading-relaxed text-gray-800" dangerouslySetInnerHTML={{ __html: \`${post.content.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} />
          </div>

          {/* Article Footer */}
          ${post.metadata.sources.length > 0 ? `<footer className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-bold mb-4">Sources</h3>
            <ul className="space-y-2">
              ${post.metadata.sources.map((source, idx) => `<li key="${idx}" className="text-sm text-gray-600">
                <span className="text-red-500 font-mono mr-2">[${idx + 1}]</span>
                ${source}
              </li>`).join('\n              ')}
            </ul>
            <div className="mt-6 text-sm text-gray-500">
              <p><strong>Verification Level:</strong> {post.metadata.verificationLevel}</p>
              <p><strong>Strategic Relevance:</strong> ${post.metadata.strategicRelevance}/10</p>
            </div>
          </footer>` : ''}
        </div>
      </article>
    </>
  );
}
`;

  const pagePath = path.join(blogDir, 'page.tsx');
  fs.writeFileSync(pagePath, pageContent, 'utf-8');
  console.log(`   ✓ Created ${post.slug}/page.tsx`);
}

async function parseRSSAndConvert(xmlSource?: string): Promise<void> {
  let xmlData: string;

  if (xmlSource) {
    // Read from file
    console.log(`📂 Reading RSS feed from file: ${xmlSource}`);
    try {
      xmlData = fs.readFileSync(xmlSource, 'utf-8');
      console.log('✅ RSS feed file read successfully');
    } catch (error) {
      console.error(`❌ Error reading file: ${xmlSource}`);
      throw error;
    }
  } else {
    // Fetch from URL
    console.log('📡 Fetching RSS feed from objectwire.org...');
    try {
      xmlData = await fetchRSSFeed();
      console.log('✅ RSS feed fetched successfully');
    } catch (error) {
      console.error('❌ Failed to fetch RSS feed from URL');
      throw error;
    }
  }

  try {
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

    // Create individual blog post files in app/blog/[slug]/ folders
    const blogOutputDir = path.join(process.cwd(), 'app', 'blog');
    console.log(`\n📝 Creating individual blog post files in ${blogOutputDir}...`);
    
    blogPosts.forEach(post => {
      createBlogPageFile(post, blogOutputDir);
    });

    // Also generate a TypeScript data file for backup/reference
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    const outputPath = path.join(dataDir, 'imported-blog-posts.ts');
    const tsContent = `// Auto-generated from RSS feed import
// Last updated: ${new Date().toISOString()}
// Total posts: ${blogPosts.length}

export const importedBlogPosts = ${JSON.stringify(blogPosts, null, 2)};
`;

    fs.writeFileSync(outputPath, tsContent, 'utf-8');
    console.log(`\n✅ Also created backup data file at ${outputPath}`);

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
    
    console.log('\n✨ All blog posts have been imported as individual files!');
    console.log(`   Each post is now available at /blog/[slug]/page.tsx`);

  } catch (error) {
    console.error('❌ Error importing RSS feed:', error);
    if (error instanceof Error && error.message.includes('404')) {
      console.error('\n⚠️  The RSS feed returned 404. Please verify:');
      console.error('   1. The production site at objectwire.org is deployed and accessible');
      console.error('   2. The RSS feed URL is correct: https://www.objectwire.org/feed/rss2');
      console.error('   3. RSS functionality is enabled on the production site\n');
    }
    throw error;
  }
}

// Run the import
const args = process.argv.slice(2);
const fileArgIndex = args.indexOf('--file');
const inputFile = fileArgIndex !== -1 && args[fileArgIndex + 1] ? args[fileArgIndex + 1] : undefined;

if (inputFile) {
  console.log(`\n🚀 Starting RSS import from file...`);
  parseRSSAndConvert(inputFile).catch(console.error);
} else {
  console.log(`\n🚀 Starting RSS import from URL...`);
  parseRSSAndConvert().catch(console.error);
}
