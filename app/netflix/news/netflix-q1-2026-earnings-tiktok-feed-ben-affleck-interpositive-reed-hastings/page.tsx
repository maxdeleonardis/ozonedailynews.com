import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/netflix/news/netflix-q1-2026-earnings-tiktok-feed-ben-affleck-interpositive-reed-hastings';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Netflix Q1 2026 | TikTok Feed, Ben Affleck AI Deal, Reed Hastings Exit',
  description: 'Netflix Q1 2026: $12.25B revenue, $5.28B net income, $2.8B WBD termination fee. Ben Affleck AI acquisition, TikTok-style vertical feed, Reed Hastings stepping down.',
  keywords: [
    'Netflix Q1 2026 earnings',
    'Netflix TikTok vertical feed',
    'Netflix Ben Affleck InterPositive',
    'Reed Hastings stepping down Netflix',
    'Netflix $2.8 billion termination fee',
    'Netflix Warner Bros Discovery failed merger',
    'Netflix AI search OpenAI',
    'Netflix InterPositive acquisition',
    'Netflix 325 million subscribers',
    'Netflix Q1 2026 revenue',
    'Netflix video podcast mobile',
    'Netflix 2026 app redesign',
    'Eunice Kim Netflix CPO',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Netflix Q1 2026 | $5.28B Profit, TikTok Feed, Ben Affleck AI Acquisition',
    description: '$12.25B revenue (+16.2% YoY). $2.8B WBD termination fee windfall. Ben Affleck\'s InterPositive acquired for $600M. Reed Hastings exits board after 29 years.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-04-18T00:00:00Z',
    modifiedTime: '2026-04-18T00:00:00Z',
    section: 'Entertainment',
    tags: ['Netflix', 'Earnings', 'Ben Affleck', 'Reed Hastings'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Netflix Q1 2026 | $5.28B profit, TikTok feed, Reed Hastings exits',
    description: '$2.8B WBD termination fee. Ben Affleck AI deal at $600M. TikTok-style vertical feed live end of April. 325M paid members.',
  },
};

export default function NetflixNewsNetflixQ12026EarningsTiktokFeedBenAffleckInterpositiveReedHastingsPage() {
  return <JackArticleDB slug="netflix-news-netflix-q1-2026-earnings-tiktok-feed-ben-affleck-interpositive-reed-hastings" />;
}
