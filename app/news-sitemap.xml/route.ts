import { getAllBlogPosts } from '@/lib/blog-service';
import { SITE_CONFIG } from '@/lib/site-config';

export const dynamic = 'force-dynamic';

// Static news articles with exact publication dates
// Google News Sitemap Protocol: https://developers.google.com/search/docs/crawling-indexing/sitemaps/news-sitemap
interface StaticNewsArticle {
  url: string;
  title: string;
  publicationDate: string;
  keywords?: string;
}

const STATIC_NEWS_ARTICLES: StaticNewsArticle[] = [
  {
    url: '/news/bank-of-america-nvidia-ai-software-too-hard',
    title: 'Bank of America Tells Nvidia Its AI Software Is Too Hard to Use',
    publicationDate: '2026-01-28T00:00:00-06:00',
    keywords: 'Bank of America, Nvidia, AI software, enterprise AI, usability, complexity, CUDA, deployment',
  },
  {
    url: '/news/mozilla-deploys-1-4b-to-challenge-openai-anthropic',
    title: 'Mozilla Deploys 1.4 Billion Dollar AI Initiative to Challenge OpenAI and Anthropic Dominance',
    publicationDate: '2026-01-27T22:00:00-06:00',
    keywords: 'Mozilla, AI investment, OpenAI, Anthropic, open source AI, llamafile, privacy AI, Mozilla Foundation',
  },
  {
    url: '/news/google-launches-ai-plus-in-us',
    title: 'Google Launches 7.99 Dollar AI Plus Plan in US and 34 Other Countries',
    publicationDate: '2026-01-27T18:00:00-06:00',
    keywords: 'Google, AI Plus, Gemini 3 Pro, subscription, pricing, OpenAI, Anthropic, ChatGPT',
  },
  {
    url: '/news/altman-amodei-condemn-ice-shooting-praise-trump',
    title: 'Sam Altman and Dario Amodei Condemn ICE Shooting of Minneapolis Nurse While Praising Trump as Strong Leader',
    publicationDate: '2026-01-27T19:00:00-06:00',
    keywords: 'Sam Altman, Dario Amodei, ICE, Minneapolis, OpenAI, Anthropic, Trump',
  },
  {
    url: '/news/johns-hopkins-psychedelic-psychiatry-clinical-guidance',
    title: 'Johns Hopkins Releases First Clinical Guidance on Psychedelic Psychiatry',
    publicationDate: '2026-01-27T14:30:00-06:00',
    keywords: 'Johns Hopkins, psychedelic medicine, psychiatry, psilocybin, MDMA, ketamine',
  },
  {
    url: '/nasa/europa/juno-ice-shell-18-miles-thick',
    title: 'NASA Juno Spacecraft Measures Europa Ice Shell at 18 Miles Thick',
    publicationDate: '2026-01-27T21:00:00-06:00',
    keywords: 'NASA, Juno, Europa, Jupiter, ice shell, ocean world, space exploration',
  },
  {
    url: '/google/agentic-vision',
    title: 'Google Launches Agentic Vision for Gemini 3 Flash AI Model',
    publicationDate: '2026-01-26T10:00:00-06:00',
    keywords: 'Google, Gemini, AI, Agentic Vision, computer vision, artificial intelligence',
  },
  {
    url: '/google/agentic-vision/gemini-3-flash',
    title: 'Gemini 3 Flash Technical Deep Dive Into Google Latest Multimodal AI Model',
    publicationDate: '2026-01-26T10:30:00-06:00',
    keywords: 'Google, Gemini 3 Flash, AI model, multimodal AI, technical analysis',
  },
];

export async function GET() {
  const baseUrl = SITE_CONFIG.url;
  
  try {
    // Google News only indexes articles from the last 2 days
    const twoDaysAgo = new Date();
    twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
    
    // Filter static articles to last 2 days
    const recentStaticArticles = STATIC_NEWS_ARTICLES.filter(article => {
      const articleDate = new Date(article.publicationDate);
      return articleDate >= twoDaysAgo;
    });
    
    // Get dynamic posts from database
    const posts = await getAllBlogPosts();
    
    const recentPosts = posts
      ? posts
          .filter((post: any) => post.status === 'published')
          .filter((post: any) => new Date(post.published_at || post.publishedAt || post.created_at || Date.now()) > twoDaysAgo)
      : [];
    
    // Combine static and dynamic articles
    const allArticles = [
      // Static articles
      ...recentStaticArticles.map(article => ({
        loc: `${baseUrl}${article.url}`,
        title: article.title,
        publicationDate: article.publicationDate,
        keywords: article.keywords,
      })),
      // Dynamic posts
      ...recentPosts.map((post: any) => ({
        loc: `${baseUrl}/${post.slug}`,
        title: post.title,
        publicationDate: new Date(post.published_at || post.publishedAt || post.created_at || Date.now()).toISOString(),
        keywords: post.tags?.join(', ') || post.category || '',
      })),
    ];
    
    // Sort by publication date (most recent first)
    allArticles.sort((a, b) => 
      new Date(b.publicationDate).getTime() - new Date(a.publicationDate).getTime()
    );
    
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
