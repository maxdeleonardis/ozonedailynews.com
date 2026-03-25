import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/video-games/news/windrose';
const CANONICAL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Windrose Hits 1M Steam Wishlists — Uzbek Pirate Survival Game Breaks Out | ObjectWire',
  description:
    'Windrose Crew\'s debut pirate survival game from Uzbekistan surpassed 1 million Steam wishlists after a viral Steam Next Fest demo peaking at 22,396 concurrent players.',
  keywords: [
    'Windrose game',
    'Windrose Steam wishlists',
    'Windrose Crew',
    'Uzbekistan indie game',
    'pirate survival game 2026',
    'Windrose Steam Next Fest',
    'Windrose demo',
    'Windrose pirate game',
    'indie pirate game',
    'Windrose Crosswind',
    'Windrose co-op PvE',
    'Steam Next Fest 2026',
  ],
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: 'Windrose Hits 1M Wishlists — Uzbek Pirate Survival Indie Breaks Out',
    description:
      'A small studio from Uzbekistan captured gaming\'s spotlight. Windrose topped Steam Next Fest with 351K wishlists in one week, a 22K player demo peak, and 93% positive reviews.',
    type: 'article',
    url: CANONICAL,
    siteName: 'ObjectWire',
    authors: [AUTHOR_NAME],
    publishedTime: PUBLISH_ISO,
    modifiedTime: PUBLISH_ISO,
    section: 'Gaming',
    tags: ['Windrose', 'Indie Games', 'Pirate', 'Survival', 'Steam', 'Uzbekistan'],
    images: [
      {
        url: 'https://www.objectwire.org/entertainment/windrose.PNG',
        width: 1200,
        height: 675,
        alt: 'Windrose pirate survival game key art',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Windrose Hits 1M Steam Wishlists — Uzbek Indie Pirate Game Goes Viral',
    description:
      'From Tashkent to the top of Steam Next Fest. 1M wishlists, 22K concurrent demo players, 93% positive, and the #1 Next Fest game ahead of Marathon.',
  },
};

export default function WindrosePage() {
  return <NewsArticleDB slug="video-games-new-windrose" />;
}
