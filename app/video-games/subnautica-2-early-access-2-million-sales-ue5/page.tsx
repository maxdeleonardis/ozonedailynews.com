import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/video-games/subnautica-2-early-access-2-million-sales-ue5';
const OG_IMAGE = 'https://images.unsplash.com/photo-1518547131872-2ebe5eb1d1e8?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Subnautica 2 Early Access | 2 Million Copies in 12 Hours',
  description:
    'Subnautica 2 sold 2 million copies in 12 hours on May 14, 2026, hitting 651,000 concurrent players across all platforms. Built on Unreal Engine 5 with optional four-player co-op.',
  keywords: [
    'Subnautica 2 Early Access',
    'Subnautica 2 sales',
    'Subnautica 2 concurrent players',
    'Subnautica 2 Unreal Engine 5',
    'Subnautica 2 co-op',
    'Subnautica 2 Steam peak',
    'Subnautica 2 Xbox Game Pass',
    'Unknown Worlds Entertainment',
    'Subnautica 2 price',
    'Subnautica 2 release date',
    'Subnautica 2 Krafton',
    'Subnautica 2 2026',
    'Subnautica 2 multiplayer',
    'survival game Early Access 2026',
    'Subnautica 2 review',
    'UE5 survival game',
  ],
  alternates: { canonical: `https://www.ozonenetwork.news${SLUG}` },
  openGraph: {
    title: 'Subnautica 2 Early Access | 2 Million Copies in 12 Hours, 651K Concurrent',
    description:
      'Unknown Worlds launched Subnautica 2 into Early Access on May 14, 2026. 1 million copies in the first hour. 2 million in 12 hours. 651,000 peak concurrent players on Unreal Engine 5.',
    type: 'article',
    url: `https://www.ozonenetwork.news${SLUG}`,
    siteName: 'OzoneNews',
    authors: ['Max DeLeonardis'],
    publishedTime: '2026-05-15T18:00:00Z',
    modifiedTime: '2026-05-15T18:00:00Z',
    section: 'Gaming',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Blue jellyfish bioluminescent underwater — Subnautica 2 alien ocean biomes' }],
    tags: [
      'Subnautica 2',
      'Unknown Worlds Entertainment',
      'Krafton',
      'Unreal Engine 5',
      'Early Access',
      'Survival Game',
      'Xbox Game Pass',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Subnautica 2 | 2M copies in 12 hours, 651K concurrent players on UE5',
    description:
      '1 million sold in hour one. 2 million in 12 hours. 467K Steam peak. Unreal Engine 5 marine physics, optional 4-player co-op, and a corporate comeback story.',
    images: [OG_IMAGE],
  },
};

export default function Subnautica2EarlyAccessPage() {
  return <NewsArticleDB slug="video-games-subnautica-2-early-access-2-million-sales-ue5" />;
}
