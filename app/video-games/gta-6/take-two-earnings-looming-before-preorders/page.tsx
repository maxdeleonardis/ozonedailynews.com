import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content served from on-prem static JSON.
// Run 'npm run wiki:publish -- --file <path>' to update the on-prem static JSON.
export const dynamic = 'force-dynamic';

const SLUG = '/video-games/gta-6/take-two-earnings-looming-before-preorders';
const ARTICLE_URL = `https://www.ozonenetwork.news${SLUG}`; // restored by wiki:publish
const OG_IMAGE = '';

export const metadata: Metadata = {
  title: 'Take-Two Earnings Before GTA VI Preorders | Nov 2026',
  description: 'Take-Two raises $6.7B bookings outlook ahead of GTA VI on November 19, 2026. $1B pre-orders forecast, $80 price debated, 12,900 staff on final polish.',
  keywords: [
    'GTA VI release date November 2026',
    'Take-Two Interactive earnings GTA 6',
    'GTA VI pre-orders $1 billion',
    'GTA 6 November 19 2026 launch',
    'Take-Two net bookings 2026',
    'GTA VI development budget',
    'Rockstar Games GTA 6 price $80',
    'GTA VI launch day sales projection',
    'Take-Two fiscal 2027 outlook',
    'GTA 6 financial roadmap',
    'GTA VI vs GTA V sales comparison',
    'DFC Intelligence GTA 6 forecast',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Take-Two Earnings Before GTA VI Preorders | Nov 2026',
    description: 'Take-Two raises full-year bookings outlook to $6.7B as GTA VI targets November 19, 2026. $1B pre-order forecast, possible $80 price point, 12,900 employees on final polish.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Max DeLeonardis'],
    publishedTime: '2026-05-07T12:00:00Z',
    modifiedTime: '2026-05-07T12:00:00Z',
    section: 'Gaming',
    tags: ['GTA VI', 'Take-Two Interactive', 'Rockstar Games', 'Gaming Finance'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Take-Two Targets $6.7B as GTA VI Hits November 19',
    description: '$1B in pre-orders projected, possible $80 price point, and 12,900 staff on final polish. The full financial picture before the biggest launch in history.',
  },
};

export default function VideoGamesGta6TakeTwoEarningsLoomingBeforePreordersPage() {
  return <NewsArticleDB slug="video-games-gta-6-take-two-earnings-looming-before-preorders" />;
}
