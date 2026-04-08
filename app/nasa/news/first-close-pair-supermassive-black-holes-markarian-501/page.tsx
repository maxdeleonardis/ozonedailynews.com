import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/nasa/news/first-close-pair-supermassive-black-holes-markarian-501';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = '';

export const metadata: Metadata = {
  title: 'First Close Pair of Supermassive Black Holes Detected Nearing Merger',
  description: 'Astronomers at the Max Planck Institute detected the first reliably imaged close pair of supermassive black holes in galaxy Markarian 501, with a potential merger in as few as 100 years.',
  keywords: [
    'supermassive black hole merger',
    'Markarian 501 black holes',
    'Max Planck Institute black holes 2026',
    'close pair supermassive black holes',
    'black hole binary merger',
    'Silke Britzen Markarian 501',
    'supermassive black hole jets',
    'gravitational waves black holes',
    'LISA gravitational wave detector',
    'galaxy merger black holes',
    'Event Horizon Telescope',
    'supermassive black hole pair 2026',
    'black hole radio observations',
    'Monthly Notices Royal Astronomical Society',
    'nanohertz gravitational waves',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'First Close Pair of Supermassive Black Holes Detected Nearing Merger',
    description: 'Two supermassive black holes orbit each other in Markarian 501, each driving its own relativistic jet. They could merge in as few as 100 years.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-04-08T18:00:00Z',
    modifiedTime: '2026-04-08T18:00:00Z',
    section: 'Science',
    tags: ['Black Holes', 'Markarian 501', 'Max Planck Institute', 'Gravitational Waves', 'Astrophysics'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'First Close Pair of Supermassive Black Holes Found in Markarian 501',
    description: 'Two colossal black holes orbit tightly in one galaxy, each blasting its own jet. Merger could come within 100 years.',
  },
};

export default function NasaNewsFirstClosePairSupermassiveBlackHolesMarkarian501Page() {
  return <NewsArticleDB slug="nasa-news-first-close-pair-supermassive-black-holes-markarian-501" />;
}
