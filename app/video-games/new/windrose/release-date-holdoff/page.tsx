import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/video-games/new/windrose/release-date-holdoff';
const CANONICAL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Windrose Dev Holds Off on Release Date Despite 1M Wishlists | ObjectWire',
  description:
    'Windrose Crew says the pirate survival game won\'t get a release date until the studio is confident the build meets its quality bar, despite crossing 1 million Steam wishlists.',
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
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Windrose Dev Holds Off on Release Date Despite 1M Wishlists',
    description:
      'Despite crossing 1M wishlists and going viral at Steam Next Fest, Windrose Crew says they won\'t announce a date until the build is ready.',
    type: 'article',
    url: CANONICAL,
    siteName: 'ObjectWire',
    authors: [AUTHOR_NAME],
    publishedTime: PUBLISH_ISO,
    modifiedTime: PUBLISH_ISO,
    section: 'Gaming',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Windrose Dev Holds Off on Release Date Despite 1M Wishlists',
    description:
      'Windrose Crew prioritizes quality over hype — no release date despite 1M wishlists and a viral Next Fest demo.',
  },
};

export default function WindroseReleaseDatePage() {
  return <NewsArticleDB slug="video-games-new-windrose-release-date-holdoff" />;
}
