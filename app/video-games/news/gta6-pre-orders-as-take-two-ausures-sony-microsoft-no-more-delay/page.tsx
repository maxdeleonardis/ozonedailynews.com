import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const revalidate = 3600;

const SLUG = '/video-games/news/gta6-pre-orders-as-take-two-ausures-sony-microsoft-no-more-delay';

export const metadata: Metadata = {
  title: 'GTA 6 Pre-Orders Near as PlayStation Database Lists',
  description:
    'Two Grand Theft Auto VI title IDs appeared in the PlayStation Store backend on March 1, 2026, signaling imminent pre-orders. Separately, Take-Two',
  keywords: [
    'GTA 6 pre-orders',
    'GTA 6 PlayStation Store',
    'GTA 6 title ID PPSA01547',
    'Grand Theft Auto VI pre-order date',
    'Take-Two GTA 6 no delay',
    'GTA 6 November 2026',
    'GTA 6 release date confirmed',
    'Rockstar Games GTA 6 2026',
    'PlayStation Game Size GTA 6',
    'Take-Two Sony Microsoft assurance',
    'GTA 6 pre-order PS5',
    'GTA VI release date',
  ],
  alternates: {
    canonical: `https://www.ozonenetwork.news${SLUG}`,
  },
  openGraph: {
    title: 'GTA 6 Pre-Orders May Be Imminent | PlayStation Backend',
    description:
      'PlayStation Store backend surfaced two GTA VI title IDs on March 1, 2026. Take-Two has reportedly told Sony and Microsoft the November 19 launch is',
    type: 'article',
    url: `https://www.ozonenetwork.news${SLUG}`,
    siteName: 'OzoneNews',
    authors: ['Connan Boyle'],
    publishedTime: '2026-03-02T00:00:00Z',
    modifiedTime: '2026-03-02T00:00:00Z',
    section: 'Video Games',
    tags: ['GTA 6', 'Rockstar Games', 'Take-Two Interactive', 'Pre-Orders', 'PlayStation', 'Xbox'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GTA 6 Pre-Orders Incoming | PlayStation Database + Take-Two',
    description:
      'Two GTA VI title IDs hit the PlayStation Store backend March 1. Take-Two privately told Sony and Microsoft November 19, 2026 is locked. Full breakdown.',
  },
};

export default function GTA6PreOrdersPage() {
  return <NewsArticleDB slug="video-games-news-gta6-pre-orders-as-take-two-ausures-sony-microsoft-no-more-delay" />;
}
