import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/entertainment/news/jack-ryan-ghost-war-trailer-prime-video-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Jack Ryan Ghost War Trailer | John Krasinski Returns May 20',
  description: 'John Krasinski returns as Jack Ryan in Ghost War, a feature film premiering May 20, 2026 on Prime Video. Official trailer debuted April 16, 2026. Sienna',
  keywords: [
    'Jack Ryan Ghost War',
    'Jack Ryan Ghost War trailer',
    'John Krasinski Jack Ryan 2026',
    'Ghost War Prime Video',
    'Jack Ryan movie 2026',
    'Prime Video Jack Ryan feature film',
    'Sienna Miller Emma Marlowe',
    'Wendell Pierce James Greer',
    'Michael Kelly Mike November',
    'Jack Ryan Ghost War release date',
    'Tom Clancy Jack Ryan Ghost War',
    'Amazon Prime Jack Ryan',
    'Jack Ryan Ghost War May 20',
    'Jack Ryan Ghost War cast',
    'Andrew Bernstein Jack Ryan',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Jack Ryan: Ghost War Trailer | John Krasinski Returns May',
    description: 'Prime Video drops the first trailer for Jack Ryan: Ghost War. John Krasinski, Wendell Pierce, and Michael Kelly return May 20, 2026, with Sienna Miller',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Entertainment Desk'],
    publishedTime: '2026-04-19T18:00:00Z',
    modifiedTime: '2026-04-19T18:00:00Z',
    section: 'Entertainment',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Cinematic spy thriller scene' }],
    tags: ['Jack Ryan', 'Prime Video', 'John Krasinski', 'Ghost War', 'Amazon'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jack Ryan: Ghost War | Official Trailer | May 20 on Prime',
    description: 'John Krasinski is back. Ghost War premieres May 20 on Prime Video, with Sienna Miller joining as MI6 officer Emma Marlowe.',
    images: [OG_IMAGE],
  },
};

export default function EntertainmentNewsJackRyanGhostWarTrailerPrimeVideo2026Page() {
  return <NewsArticleDB slug="entertainment-news-jack-ryan-ghost-war-trailer-prime-video-2026" />;
}
