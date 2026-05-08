import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically â€” content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const revalidate = 3600;

const SLUG = '/video-games/new/windrose/release-date-holdoff';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Windrose Dev Holds Off on Release Date Despite 1M Wishlists',
  description:
    'Windrose Crew says the pirate survival game won\'t get a release date until the studio is confident in build quality, despite crossing 1 million Steam wishlists. Quality over hype.',
  keywords: [
    'Windrose release date',
    'Windrose Crew update',
    'Windrose 1 million wishlists',
    'Windrose launch delay',
    'Windrose early access date',
    'Windrose pirate game 2026',
    'Windrose Steam release',
    'indie game release strategy',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Windrose Dev Holds Off on Release Date Despite 1M Wishlists',
    description:
      'Despite crossing 1M wishlists and going viral at Steam Next Fest, Windrose Crew says they won\'t announce a date until the build is ready.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Connan Boyle'],
    publishedTime: '2026-03-01T00:00:00Z',
    modifiedTime: '2026-03-01T00:00:00Z',
    section: 'Gaming',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Windrose Dev Holds Off on Release Date Despite 1M Wishlists',
    description:
      'Windrose Crew prioritizes quality over hype, no release date despite 1M wishlists and a viral Next Fest demo.',
  },
};

export default function WindroseReleaseDatePage() {
  return <NewsArticleDB slug="video-games-new-windrose-release-date-holdoff" />;
}