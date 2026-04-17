import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/entertainment/news/super-mario-galaxy-movie-371m-global-box-office-opening';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = '';

export const metadata: Metadata = {
  title: 'Super Mario Galaxy Movie | $371M Global Box Office Opening',
  description: 'The Super Mario Galaxy Movie opened to $371 million globally, setting a 2026 opening day record with $34.5M domestic. Tracking toward $1.2 billion total.',
  keywords: [
    'Super Mario Galaxy Movie',
    'Super Mario Galaxy box office',
    'Mario Galaxy movie opening weekend',
    'Nintendo Cinematic Universe',
    'Illumination Mario sequel',
    'Mario Galaxy movie 2026',
    '$371 million opening',
    'Rosalina Mario movie',
    'Project Hail Mary box office',
    '2026 box office records',
    'Super Mario Bros Movie sequel',
    'Nintendo movie box office',
    'animated movie records 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Super Mario Galaxy Movie | $371M Global Box Office Opening',
    description: 'Record-shattering $371M global debut. $34.5M opening day beats Project Hail Mary. Tracking toward $1.2B final global tally.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-04-17T23:00:00Z',
    modifiedTime: '2026-04-17T23:00:00Z',
    section: 'Entertainment',
    tags: ['Nintendo', 'Super Mario', 'Box Office', 'Illumination'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Super Mario Galaxy Movie shatters records | $371M global opening',
    description: '$34.5M opening day. $371M global launch. Biggest animated opening of 2026. Tracking toward $1.2B.',
  },
};

export default function EntertainmentNewsSuperMarioGalaxyMovie371mGlobalBoxOfficeOpeningPage() {
  return <JackArticleDB slug="entertainment-news-super-mario-galaxy-movie-371m-global-box-office-opening" />;
}
