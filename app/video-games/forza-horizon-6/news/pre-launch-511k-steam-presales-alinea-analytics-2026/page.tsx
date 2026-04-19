import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/video-games/forza-horizon-6/news/pre-launch-511k-steam-presales-alinea-analytics-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://www.objectwire.org/entertainment/forza_horizon_6.PNG';

export const metadata: Metadata = {
  title: 'Forza Horizon 6 | 511K Steam Pre-Sales, $30M Revenue Before Launch',
  description: 'Forza Horizon 6 hits 511,000 Steam pre-sales and $30M gross revenue by April 15, 2026, one month before its May 19 launch. Alinea Analytics data shows 3.3M wishlists and a 2M day-one projection.',
  keywords: [
    'Forza Horizon 6 Steam pre-sales',
    'Forza Horizon 6 511000 pre-orders',
    'Forza Horizon 6 $30 million revenue',
    'Alinea Analytics Forza Horizon 6',
    'Forza Horizon 6 2 million day one',
    'Forza Horizon 6 wishlists Steam',
    'Forza Horizon 6 Japan map',
    'Forza Horizon 6 launch date May 2026',
    'Forza Horizon 6 pre-launch sales data',
    'Forza Horizon 6 achievement list solo',
    'Forza Horizon 6 gameplay reveal April 2026',
    'Forza Horizon 6 PS5 late 2026',
    'Playground Games Japan setting',
    'Forza Horizon 6 JDM Touge',
    'Forza Horizon 6 vs Forza Horizon 5',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Forza Horizon 6 | 511K Steam Pre-Sales & $30M Before May Launch',
    description: 'Alinea Analytics: 511K Steam pre-sales, $30M gross revenue, 3.3M wishlists — one month before May 19 launch. Day-one 2M unit projection would be an all-time franchise record.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-04-18T00:00:00Z',
    modifiedTime: '2026-04-18T00:00:00Z',
    section: 'Gaming',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Forza Horizon 6 Japan' }],
    tags: ['Forza Horizon 6', 'Steam', 'Playground Games', 'Xbox', 'Gaming'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forza Horizon 6 hits 511K Steam pre-sales and $30M — one month out',
    description: 'Alinea Analytics data shows a 2M day-one projection, 3.3M wishlists, and 22K peak daily sales on April 13. Japan setting is the clearest driver.',
    images: [OG_IMAGE],
  },
};

export default function VideoGamesForzaHorizon6NewsPreLaunch511kSteamPresalesAlineaAnalytics2026Page() {
  return <JackArticleDB slug="video-games-forza-horizon-6-news-pre-launch-511k-steam-presales-alinea-analytics-2026" />;
}
