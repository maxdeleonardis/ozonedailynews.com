import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/claude/news/software-stocks-crater-anthropic-mythos-gatekeep';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1634097537825-b446635b2f7f?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Software Stocks Crater as Anthropic Gatekeeps Mythos',
  description: 'The S&P 500 Software Index fell 2.6% after Anthropic restricted Claude Mythos to 40 defensive partners. Over $2 trillion in market cap has been erased from SaaS stocks in 2026.',
  keywords: [
    'software stocks crash Anthropic Mythos',
    'Claude Mythos model restricted',
    'SaaS stocks selloff 2026',
    'Anthropic Mythos exploit benchmark',
    'Snowflake stock crash',
    'Zscaler stock crash',
    'Cloudflare stock down',
    'ServiceNow stock drop',
    'Michael Burry Palantir',
    'SaaSpocalypse 2026',
    'AI cybersecurity obsolescence',
    'Anthropic 40 defensive partners',
    'Claude Mythos zero-day discovery',
    'software sector $2 trillion erosion',
    'Anthropic ARR $30 billion',
    'Palantir stock crash 2026',
    'AI agents replace SaaS',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Software Stocks Crater as Anthropic Gatekeeps Claude Mythos Model',
    description: 'S&P 500 Software Index drops 2.6% after Anthropic restricts Mythos to 40 partners. Snowflake -11.8%, Zscaler -8.8%, Cloudflare -8.6%. Michael Burry targets Palantir.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-04-11T20:00:00Z',
    modifiedTime: '2026-04-11T20:00:00Z',
    section: 'Finance',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Red stock trading screen showing market sell-off in software sector' }],
    tags: ['Anthropic', 'Claude Mythos', 'Software Stocks', 'Palantir', 'SaaS', 'Michael Burry'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Stocks Crater | Anthropic Restricts Mythos to 40 Partners',
    description: 'Snowflake -11.8%, Zscaler -8.8%, Cloudflare -8.6%. $2T erased from SaaS in 2026. Michael Burry says Anthropic is eating Palantir alive.',
    images: [OG_IMAGE],
  },
};

export default function ClaudeNewsSoftwareStocksCraterAnthropicMythosGatekeepPage() {
  return <NewsArticleDB slug="claude-news-software-stocks-crater-anthropic-mythos-gatekeep" />;
}
