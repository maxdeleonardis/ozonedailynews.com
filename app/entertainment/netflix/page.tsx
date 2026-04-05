import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/entertainment/netflix';
const PAGE_URL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Netflix | Streaming Platform Profile, Subscribers, Shows 2026',
  description: 'Complete profile of Netflix, the world\'s leading streaming service with 260M+ subscribers. Original content, movies, TV shows, documentaries, and subscriber growth data.',
  keywords: [
    'Netflix',
    'Netflix subscribers 2026',
    'Netflix originals',
    'Netflix streaming service',
    'Netflix shows 2026',
    'Netflix movies',
    'Netflix stock',
    'Netflix wiki',
    'Netflix profile',
    'streaming platform',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Netflix | 260M+ Subscribers, Global Streaming Leader',
    description: 'Netflix streaming platform profile with subscriber stats, original content, and market leadership information.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Netflix | Streaming Platform Profile, 260M+ Subscribers',
    description: 'Complete Netflix profile: subscriber count, originals, movies, shows, and competitive positioning in 2026.',
  },
};

export default function NetflixPage() {
  return <WikiArticle slug="entertainment-netflix" />;
}
