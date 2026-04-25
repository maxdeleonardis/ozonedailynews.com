import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/claude/news/anthropic-coreweave-multiyear-data-center-deal';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://www.objectwire.org/images/claude/anthropic-coreweave-deal.jpg';

export const metadata: Metadata = {
  title: 'Anthropic Signs Multiyear CoreWeave Data Center Deal',
  description: 'Anthropic agreed to lease GPU computing capacity from CoreWeave in a multiyear deal, adding Nvidia chip access as revenue run rate surpasses $30 billion',
  keywords: [
    'Anthropic CoreWeave deal',
    'CoreWeave data center Anthropic',
    'Anthropic GPU infrastructure',
    'CoreWeave Nvidia GPU cloud',
    'Anthropic compute capacity 2026',
    'CoreWeave $87 billion backlog',
    'Anthropic revenue $30 billion run rate',
    'CoreWeave Michael Intrator',
    'Anthropic infrastructure buildout',
    'CoreWeave Meta $21 billion',
    'Anthropic Google Broadcom TPU',
    'CoreWeave Nasdaq IPO',
    'AI data center demand 2026',
    'Anthropic multi-cloud strategy',
    'CoreWeave Nvidia investment',
    'Claude AI compute infrastructure',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Anthropic Signs Multiyear Deal to Rent CoreWeave Data',
    description: 'Anthropic will lease Nvidia GPU capacity from CoreWeave in a multiyear agreement, adding to CoreWeave\'s $87.8 billion revenue backlog as Anthropic\'s run',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-04-11T16:00:00Z',
    modifiedTime: '2026-04-11T16:00:00Z',
    section: 'Tech',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Anthropic and CoreWeave data center deal for GPU compute capacity' }],
    tags: ['Anthropic', 'CoreWeave', 'Data Center', 'Nvidia', 'Claude', 'GPU Cloud'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anthropic Signs Multiyear CoreWeave GPU Deal | $30B Run Rate',
    description: 'Anthropic leases Nvidia chip capacity from CoreWeave. Revenue run rate above $30B, 1,000+ business clients, multi-cloud strategy across AWS, Google, Azure.',
    images: [OG_IMAGE],
  },
};

export default function ClaudeNewsAnthropicCoreweaveMultiyearDataCenterDealPage() {
  return <NewsArticleDB slug="claude-news-anthropic-coreweave-multiyear-data-center-deal" />;
}
