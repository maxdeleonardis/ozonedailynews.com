import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const revalidate = 3600;

const SLUG = '/video-games/forza-horizon-6/news/forza-horizon-6-500k-steam-presales-better-launch-fh5-alinea-2026';
const ARTICLE_URL = `https://www.ozonenetwork.news${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://www.ozonenetwork.news/entertainment/forza_horizon_6.PNG';

export const metadata: Metadata = {
  title: 'Forza Horizon 6 | 500K Steam Pre-Sales One Month Before',
  description: 'Alinea Analytics reports Forza Horizon 6 has pre-sold roughly 500,000 copies on Steam one month before its May 19, 2026 launch, with analysts projecting',
  keywords: [
    'Forza Horizon 6 Steam pre-sales',
    'Forza Horizon 6 500000 pre-orders',
    'Forza Horizon 6 Steam 2026',
    'Alinea Analytics Forza Horizon 6',
    'Forza Horizon 6 launch better than FH5',
    'Forza Horizon 6 May 2026',
    'Forza Horizon 6 Playground Games',
    'Forza Horizon 6 sales forecast',
    'Playground Games racing game 2026',
    'Forza Horizon 6 Steam wishlists',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Forza Horizon 6 Pre-Sells 500K on Steam With a Month to Go',
    description: 'Alinea Analytics data puts Forza Horizon 6 on pace for a better Steam launch than its predecessor. May 19 release. Full breakdown in our deep-dive.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'OzoneNews',
    authors: ['OzoneNews Gaming Desk'],
    publishedTime: '2026-04-21T22:30:00Z',
    modifiedTime: '2026-04-21T22:30:00Z',
    section: 'Gaming',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Forza Horizon 6 Steam pre-sales 500K Alinea Analytics 2026' }],
    tags: ['Forza Horizon 6', 'Playground Games', 'Steam', 'Racing Games'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forza Horizon 6 | 500K Steam Pre-Sales One Month Out.',
    description: 'Alinea Analytics data. Playground Games. May 19, 2026.',
    images: [OG_IMAGE],
  },
};

export default function VideoGamesForzaHorizon6NewsForzaHorizon6500kSteamPresalesBetterLaunchFh5Alinea2026Page() {
  return <NewsArticleDB slug="video-games-forza-horizon-6-news-forza-horizon-6-500k-steam-presales-better-launch-fh5-alinea-2026" />;
}
