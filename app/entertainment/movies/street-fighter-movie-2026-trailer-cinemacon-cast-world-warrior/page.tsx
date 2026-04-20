import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/entertainment/movies/street-fighter-movie-2026-trailer-cinemacon-cast-world-warrior';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1547149617-609fafa00a6b?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Street Fighter Movie 2026 | Full Trailer, Cast, Release Date',
  description: 'The Street Fighter live-action reboot debuted its first full trailer at CinemaCon on April 16, 2026. October 16 release, directed by Kitao Sakurai, starring Andrew Koji, Noah Centineo, and Cody Rhodes.',
  keywords: [
    'Street Fighter movie 2026',
    'Street Fighter live action reboot',
    'Street Fighter movie trailer',
    'Street Fighter CinemaCon 2026',
    'Street Fighter movie cast',
    'Andrew Koji Ryu',
    'Noah Centineo Ken Masters',
    'Cody Rhodes Guile',
    'Roman Reigns Akuma',
    'Jason Momoa Blanka',
    'David Dastmalchian Bison',
    'Street Fighter movie release date October 2026',
    'Kitao Sakurai Street Fighter',
    'Paramount Legendary Capcom Street Fighter',
    'Street Fighter World Warrior tournament film',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Street Fighter Movie 2026 | World Warrior Trailer Drops at CinemaCon',
    description: 'The gritty 1993-set Street Fighter reboot has arrived. Cody Rhodes as Guile. Roman Reigns as Akuma. Jason Momoa as Blanka. October 16, 2026. Full cast and plot breakdown.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Entertainment Desk'],
    publishedTime: '2026-04-21T23:30:00Z',
    modifiedTime: '2026-04-21T23:30:00Z',
    section: 'Entertainment',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Street Fighter 2026 movie trailer World Warrior cast' }],
    tags: ['Street Fighter', 'Capcom', 'Movies', 'Paramount Pictures'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Street Fighter 2026: Cody Rhodes as Guile. Roman Reigns as Akuma. Jason Momoa as Blanka.',
    description: 'The World Warrior trailer just dropped at CinemaCon. October 16 release. Full cast and plot inside.',
    images: [OG_IMAGE],
  },
};

export default function EntertainmentMoviesStreetFighterMovie2026TrailerCinemaconCastWorldWarriorPage() {
  return <NewsArticleDB slug="entertainment-movies-street-fighter-movie-2026-trailer-cinemacon-cast-world-warrior" />;
}
