import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/tech/perplexity/news/perplexity-computer-agentic-ai-platform-explained-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Perplexity Computer | Agentic AI Platform, Pricing, How It',
  description: 'Perplexity Computer is an agentic AI platform that executes multi-step workflows across your entire software stack. Full explainer: multi-model',
  keywords: [
    'Perplexity Computer',
    'Perplexity Computer 2026',
    'Perplexity agentic AI',
    'Perplexity Computer how it works',
    'Perplexity Computer vs ChatGPT',
    'Perplexity Computer pricing',
    'Perplexity Max subscription',
    'Perplexity Personal Computer Mac Mini',
    'Perplexity AI agent',
    'agentic AI platform 2026',
    'Perplexity Computer enterprise',
    'Perplexity Computer cloud agent',
    'Perplexity Comet browser',
    'multi-model AI orchestration',
    'Perplexity Ask 2026 conference',
    'AI digital coworker 2026',
    'SaaSpocalypse AI 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Perplexity Computer | Agentic AI Platform, Pricing, How It',
    description: 'Perplexity moved from search to autonomous digital worker. Multi-model orchestration, Comet browser, Mac Mini hardware option, and $200/mo pricing. The',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-04-21T23:30:00Z',
    modifiedTime: '2026-04-21T23:30:00Z',
    section: 'Tech',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Perplexity Computer agentic AI platform 2026' }],
    tags: ['Perplexity', 'AI Agents', 'Agentic AI', 'Tech 2026', 'Perplexity Computer'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Perplexity Computer is not a search engine. It is a',
    description: 'Multi-model orchestration. Comet browser. Mac Mini local proxy. $200/mo. The full breakdown of what Perplexity Computer actually is.',
    images: [OG_IMAGE],
  },
};

export default function TechPerplexityNewsPerplexityComputerAgenticAiPlatformExplained2026Page() {
  return <JackArticleDB slug="tech-perplexity-news-perplexity-computer-agentic-ai-platform-explained-2026" />;
}
