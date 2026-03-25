import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/video-games/forza-horizon-6';

export const metadata: Metadata = {
  title: 'Forza Horizon 6: Release Date, Map, Cars & Everything Known — March 2026 | ObjectWire',
  description:
    'Forza Horizon 6 releases May 19, 2026 on Xbox Series X|S, PC, and later PlayStation 5. Japan open world, 550+ cars, Toyota GR GT cover vehicle, early access May 15 for Premium Edition owners. Everything confirmed as of March 2026.',
  keywords: [
    'Forza Horizon 6',
    'Forza Horizon 6 release date',
    'Forza Horizon 6 Japan',
    'Forza Horizon 6 May 2026',
    'Forza Horizon 6 PS5',
    'Forza Horizon 6 Xbox',
    'Forza Horizon 6 PC Steam',
    'Forza Horizon 6 car list',
    'Forza Horizon 6 Toyota GR GT',
    'Forza Horizon 6 map size',
    'Forza Horizon 6 early access',
    'Playground Games 2026',
    'Xbox Game Pass Forza Horizon 6',
    'Forza Horizon 6 price',
    'Forza Horizon 6 editions',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: 'Forza Horizon 6 — May 19, 2026 | Japan Map, 550+ Cars, PS5 Confirmed',
    description:
      "Everything confirmed about Forza Horizon 6: Japan open world five times larger than Edinburgh, 550+ cars, Toyota GR GT cover vehicle, early access May 15 for Premium Edition. Day-one on Game Pass.",
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['Connan Boyle'],
    publishedTime: '2026-03-02T00:00:00Z',
    modifiedTime: '2026-03-02T00:00:00Z',
    section: 'Video Games',
    tags: ['Forza Horizon 6', 'Xbox', 'Playground Games', 'Racing Games', 'Xbox Game Pass'],
    images: [{ url: 'https://www.objectwire.org/entertainment/forza_horizon_6.PNG', width: 1200, height: 675, alt: 'Forza Horizon 6' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forza Horizon 6 — May 19, 2026 | Japan, 550+ Cars & Game Pass Day One',
    description:
      'Everything confirmed about Forza Horizon 6 as of March 2026 — Japan open world, early access May 15, PS5 later in 2026.',
  },
};

export default function ForzaHorizon6Page() {
  return <NewsArticleDB slug="video-games-forza-horizon-6" />;
}
