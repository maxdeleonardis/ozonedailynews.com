import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/technology/news/intel-amd-cpu-prices-surge-15-percent-shortage-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = '/default/pawel-czerwinski-fpZZEV0uQwA-unsplash.jpg';

export const metadata: Metadata = {
  title: 'Intel and AMD CPU Prices Surge Up to 15% as Shortages Hit PC and Server Manufacturers',
  description:
    'Intel and AMD CPU prices have risen 10–15% in Q1 2026 as a deepening supply shortage extends delivery lead times from two weeks to as long as six months,',
  keywords: [
    'Intel CPU shortage 2026',
    'AMD CPU prices 2026',
    'CPU lead times 2026',
    'Xeon EPYC shortage',
    'PC supply chain 2026',
    'semiconductor shortage Q1 2026',
    'Intel Core i9 price increase',
    'AMD Ryzen shortage',
    'TSMC 4nm supply',
    'HP Dell CPU shortage',
    'AI server CPU demand',
    'enterprise CPU delivery delays',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: 'Intel and AMD CPU Prices Surge Up to 15% as Shortages Hit PC and Server Manufacturers',
    description:
      'CPU prices are up 10–15% across Intel and AMD product lines as global supply meets only 65–75% of demand. Lead times have stretched from two weeks to',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-25T12:00:00Z',
    modifiedTime: '2026-03-25T12:00:00Z',
    section: 'Technology',
    tags: ['Intel', 'AMD', 'CPU', 'Semiconductor', 'Supply Chain', 'PC Market', 'Servers', 'TSMC', 'Shortage 2026'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Intel and AMD CPU Prices Up 15% | Lead Times Stretch to 6 Months',
    description:
      'The semiconductor supply chain has a new bottleneck: CPUs. Intel and AMD processors are now harder to source than the memory chips that held up production',
    images: [IMAGE_URL],
  },
};

export default function IntelAmdCpuShortageArticlePage() {
  return <NewsArticleDB slug="technology-news-intel-amd-cpu-prices-surge-15-percent-shortage-2026" />;
}
