import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/entertainment/marvel/avengers-doomsday-trailer-cinemacon-2026-robert-downey-jr';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Avengers Doomsday Trailer | CinemaCon 2026 Robert Downey Jr Doctor Doom',
  description: 'Marvel debuted the full Avengers: Doomsday trailer at CinemaCon 2026. Robert Downey Jr as Doctor Doom, the X-Men/Avengers face-off, and where to watch the footage when it goes public.',
  keywords: [
    'Avengers Doomsday trailer',
    'Avengers Doomsday trailer CinemaCon',
    'Avengers Doomsday 2026',
    'Robert Downey Jr Doctor Doom',
    'Doctor Doom voice Latverian accent',
    'Avengers Doomsday X-Men',
    'Avengers Endgame re-release 2026',
    'CinemaCon 2026 Marvel',
    'Avengers Doomsday Gambit Shang-Chi',
    'Marvel Phase 7',
    'Avengers Doomsday trailer watch',
    'Thor hammer Doom catch',
    'Avengers Doomsday release date',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Avengers Doomsday Full Trailer Debuted at CinemaCon 2026',
    description: 'Robert Downey Jr speaks as Doctor Doom with a Latverian accent. Thor throws his hammer and Doom catches it. Gambit vs. Shang-Chi. Here is everything shown behind closed doors.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Entertainment Desk'],
    publishedTime: '2026-04-17T23:55:00Z',
    modifiedTime: '2026-04-17T23:55:00Z',
    section: 'Entertainment',
    tags: ['Avengers Doomsday', 'Marvel', 'Robert Downey Jr', 'CinemaCon'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Avengers Doomsday full trailer debuted at CinemaCon 2026',
    description: 'RDJ as Doctor Doom with a Latverian accent. Thor hammer catch. Gambit vs. Shang-Chi. Endgame re-release Sept 25 will include first public screening.',
  },
};

export default function EntertainmentMarvelAvengersDoomsdayTrailerCinemacon2026RobertDowneyJrPage() {
  return <NewsArticleDB slug="entertainment-marvel-avengers-doomsday-trailer-cinemacon-2026-robert-downey-jr" />;
}
