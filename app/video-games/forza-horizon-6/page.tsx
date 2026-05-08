import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const revalidate = 3600;

const SLUG = '/video-games/forza-horizon-6';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://www.objectwire.org/video-games/forza-horizon-6.jpg';

export const metadata: Metadata = {
  title: 'Forza Horizon 6 | Japan Map, Release Date, Developer',
  description:
    'Forza Horizon 6 launches May 19, 2026 on Xbox Series X|S and PC, developed by Playground Games. Japan open world, 550+ cars, Toyota GR GT cover, day one',
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
    'Playground Games Forza Horizon 6',
    'who makes Forza Horizon 6',
    'Xbox Game Pass Forza Horizon 6',
    'Forza Horizon 6 editions',
    'Forza Horizon 6 developer',
    'Microsoft Playground Games Xbox',
    'Forza Horizon 6 review 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Forza Horizon 6 | Japan Map, Release Date & Developer',
    description:
      'Playground Games returns with Forza Horizon 6 on May 19, 2026. Japan open world 5x Edinburgh, 550+ cars, Toyota GR GT cover, day one Game Pass.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Gaming Desk'],
    publishedTime: '2026-04-22T00:00:00Z',
    modifiedTime: '2026-04-22T00:00:00Z',
    section: 'Video Games',
    tags: ['Forza Horizon 6', 'Xbox', 'Playground Games', 'Racing Games', 'Xbox Game Pass'],
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Forza Horizon 6 Japan open world' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forza Horizon 6 | Japan, May 19, 2026, 550+ Cars',
    description: 'Playground Games takes the Horizon series to Japan. May 19, 2026, Xbox Game Pass day one, 550+ cars, Toyota GR GT cover.',
    images: [OG_IMAGE],
  },
};

export default function VideoGamesForzaHorizon6Page() {
  return <ArticlePageDB slug="video-games-forza-horizon-6" />;
}
