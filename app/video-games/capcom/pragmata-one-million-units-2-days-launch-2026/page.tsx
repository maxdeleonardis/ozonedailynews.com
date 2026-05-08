import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const revalidate = 3600;

const SLUG = '/video-games/capcom/pragmata-one-million-units-2-days-launch-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Pragmata Hits 1 Million Units in 2 Days | Capcom New IP',
  description: 'Capcom\'s Pragmata sold over one million copies in its first 48 hours, breaking the new IP curse. Switch 2 port praised, Capcom stock jumped 3.2% at launch.',
  keywords: [
    'Pragmata sales',
    'Pragmata one million units',
    'Pragmata launch sales 2026',
    'Capcom new IP success',
    'Pragmata Nintendo Switch 2',
    'Pragmata Metacritic score',
    'Pragmata review',
    'Capcom Pragmata April 2026',
    'Pragmata RE Engine',
    'Capcom stock TYO 9697',
    'Pragmata Hugh Diana',
    'Pragmata gameplay',
    'Capcom golden era',
    'Pragmata multiplatform launch',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Pragmata Hits 1 Million Units in 48 Hours | Capcom New IP',
    description: 'Capcom\'s brand-new sci-fi IP cleared 1M units in two days. Switch 2 port praised as excellent. Capcom stock jumped 3.2%. The new IP curse is broken.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Gaming Desk'],
    publishedTime: '2026-04-21T20:00:00Z',
    modifiedTime: '2026-04-21T20:00:00Z',
    section: 'Gaming',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Pragmata launch Capcom new IP one million units' }],
    tags: ['Pragmata', 'Capcom', 'Nintendo Switch 2', 'Gaming'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pragmata | 1 Million Units in 48 Hours. Capcom Breaks the',
    description: 'Multiplatform demo strategy, Switch 2 momentum, and an 86 Metacritic. The numbers are in.',
    images: [OG_IMAGE],
  },
};

export default function VideoGamesCapcomPragmataOneMillionUnits2DaysLaunch2026Page() {
  return <NewsArticleDB slug="video-games-capcom-pragmata-one-million-units-2-days-launch-2026" />;
}
