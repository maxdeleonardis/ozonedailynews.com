import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

export const dynamic = 'force-dynamic';

const SLUG = '/video-games/news/gta6-pre-orders-as-take-two-ausures-sony-microsoft-no-more-delay';

export const metadata: Metadata = {
  title: 'GTA 6 Pre-Orders | Date, Price, Bonuses & Confirmed Details 2026',
  description: 'Full GTA 6 pre-order hub covering confirmed date, Standard and Premium editions, bonuses, Take-Two assurances to Sony and Microsoft, PlayStation Store title IDs, and everything verified so far.',
  keywords: [
    'GTA 6 pre-orders',
    'GTA 6 pre-order date 2026',
    'GTA 6 pre-order bonus',
    'GTA 6 price',
    'Grand Theft Auto VI pre-order',
    'GTA 6 Standard Edition',
    'GTA 6 Premium Edition',
    'GTA 6 PlayStation Store title ID',
    'Take-Two GTA 6 November 2026',
    'GTA 6 release date confirmed',
    'Rockstar Games pre-order',
    'GTA 6 no delay',
    'GTA 6 PS5 Xbox pre-order',
    'GTA VI 2026',
  ],
  alternates: { canonical: `https://www.OzoneNews.org${SLUG}` },
  openGraph: {
    title: 'GTA 6 Pre-Orders | Date, Price & Edition Guide 2026',
    description: 'Everything confirmed about GTA 6 pre-orders: date, editions, bonuses, Take-Two private assurances to Sony and Microsoft, PlayStation backend title IDs.',
    type: 'article',
    url: `https://www.OzoneNews.org${SLUG}`,
    siteName: 'OzoneNews',
    authors: ['Jack Sterling'],
    section: 'Gaming',
    tags: ['GTA 6', 'Rockstar Games', 'Take-Two Interactive', 'Pre-Orders'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GTA 6 Pre-Orders | Everything Confirmed So Far',
    description: 'Pre-order date, editions, bonuses, and the inside story on Take-Two\'s private assurances to Sony and Microsoft. Full hub.',
  },
};

export default function GTA6PreOrdersHubPage() {
  return <ArticlePageDB slug="video-games-news-gta6-pre-orders-as-take-two-ausures-sony-microsoft-no-more-delay" />;
}
