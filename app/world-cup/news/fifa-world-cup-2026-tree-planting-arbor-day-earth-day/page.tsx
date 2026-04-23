import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/world-cup/news/fifa-world-cup-2026-tree-planting-arbor-day-earth-day';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'FIFA World Cup 2026 | Tree Planting in All 16 Host Cities',
  description:
    'FIFA and the Arbor Day Foundation are planting 1 million trees through North American reforestation and 12,000+ community trees across all 16 World Cup 2026 host cities, announced on Earth Day 2026.',
  keywords: [
    'FIFA World Cup 2026 tree planting',
    'FIFA Arbor Day Foundation',
    'World Cup 2026 sustainability',
    'FIFA reforestation North America',
    'World Cup 2026 Earth Day',
    'FIFA 1 million trees',
    'World Cup 2026 host cities',
    'FIFA environmental legacy',
    'World Cup 2026 green initiative',
    'FIFA World Cup 2026 community trees',
    'Arbor Day Foundation reforestation',
    'FIFA sustainability 2026',
    'World Cup 2026 Canada Mexico USA',
    'FIFA World Cup 40 days',
    'World Cup 2026 June 11',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'FIFA World Cup 2026 | Tree Planting in All 16 Host Cities',
    description:
      'FIFA and the Arbor Day Foundation are targeting 1 million trees through reforestation and 12,000+ community plantings across all 16 host cities with 40+ days to the World Cup.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Sports Desk'],
    publishedTime: '2026-04-22T14:00:00Z',
    modifiedTime: '2026-04-22T14:00:00Z',
    section: 'Sports',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Hands planting a sapling in soil' }],
    tags: ['World Cup 2026', 'FIFA', 'Arbor Day Foundation', 'Earth Day', 'Sustainability'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FIFA is planting 1 million trees for World Cup 2026',
    description: '12,000+ community trees across all 16 host cities. Arbor Day Foundation partnership. 40+ days to kickoff.',
    images: [OG_IMAGE],
  },
};

export default function WorldCupNewsFifaWorldCup2026TreePlantingArborDayEarthDayPage() {
  return <NewsArticleDB slug="world-cup-news-fifa-world-cup-2026-tree-planting-arbor-day-earth-day" />;
}
