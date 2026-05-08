import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const revalidate = 3600;

const SLUG = '/video-games/capcom';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Capcom | Golden Era, RE Engine, 2026 Profile',
  description: 'Capcom company profile: 11 consecutive years of record profits, RE Engine dominance, Resident Evil Requiem, Monster Hunter Wilds, Pragmata, and the Street',
  keywords: [
    'Capcom',
    'Capcom 2026',
    'Capcom company profile',
    'RE Engine',
    'Capcom golden era',
    'Resident Evil Requiem',
    'Monster Hunter Wilds',
    'Pragmata release date',
    'Street Fighter 6 world championship',
    'Capcom financials 2026',
    'Capcom catalog model',
    'Capcom IP rotation',
    'Kenzo Tsujimoto',
    'Haruhiro Tsujimoto',
    'Capcom esports 2026',
    'CAPCOMIX',
    'Capcom Store Taipei',
    'Dino Crisis remake 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    type: 'article',
    title: 'Capcom | Golden Era, RE Engine & 2026 Company Profile',
    description: 'Eleven straight years of record profit. RE Engine. Resident Evil Requiem at 6M units. Monster Hunter Wilds. Full Capcom profile for 2026.',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Capcom 2026 golden era company profile' }],
    publishedTime: '2026-04-21T18:00:00Z',
    modifiedTime: '2026-04-21T18:00:00Z',
    section: 'Gaming',
    tags: ['Capcom', 'Resident Evil', 'Monster Hunter', 'Gaming'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Capcom | 11 Years of Record Profits, RE Engine, 2026',
    description: 'The most efficient publisher in gaming. RE Requiem hit 6M units in one month. Full Capcom 2026 profile.',
    images: [OG_IMAGE],
  },
};

export default function VideoGamesCapcomPage() {
  return <ArticlePageDB slug="video-games-capcom" />;
}
