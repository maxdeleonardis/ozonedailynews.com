import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/video-games/gta-6/gta-6-pre-order-date-price-bonuses-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'GTA 6 Pre-Order Date, Price & Bonuses | 2026 Guide',
  description: 'GTA 6 pre-orders are expected to open before the November 19, 2026 launch. Here is what we know about pricing ($70-$80), editions, and pre-order bonuses',
  keywords: [
    'GTA 6 pre-order',
    'GTA 6 pre-order date 2026',
    'GTA 6 price',
    'GTA 6 how much',
    'GTA 6 $80',
    'GTA 6 $70',
    'GTA 6 pre-order bonuses',
    'GTA 6 editions',
    'GTA 6 collector edition',
    'GTA 6 PS5 pre-order',
    'GTA 6 Xbox pre-order',
    'GTA 6 November 19 2026',
    'Take-Two GTA 6 price',
    'Rockstar Games GTA 6',
    'GTA 6 release date',
    'Grand Theft Auto VI pre-order',
    'GTA 6 digital vs physical',
    'GTA 6 preorder bonus content',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'GTA 6 Pre-Order Date, Price & Bonuses | 2026',
    description: 'Pre-orders expected before November 19 launch. $70-$80 price range confirmed by Take-Two earnings. Editions and bonus content breakdown.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Michael Cripe'],
    publishedTime: '2026-05-12T10:00:00Z',
    modifiedTime: '2026-05-12T10:00:00Z',
    section: 'Gaming',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'GTA 6 pre-order guide 2026' }],
    tags: ['GTA 6', 'Take-Two Interactive', 'Rockstar Games', 'PS5', 'Xbox Series X'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GTA 6 Pre-Order: Date, Price, Editions & Bonuses',
    description: 'Take-Two signals $70-$80 price. Pre-orders expected months before November 19 launch. Everything confirmed so far.',
    images: [OG_IMAGE],
  },
};

export default function GTA6PreOrderPage() {
  return <NewsArticleDB slug="video-games-gta-6-gta-6-pre-order-date-price-bonuses-2026" />;
}
