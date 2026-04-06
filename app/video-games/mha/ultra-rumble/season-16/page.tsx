import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/video-games/mha/ultra-rumble/season-16';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'My Hero Ultra Rumble Season 16: Star and Stripe & 2.5 Anniversary',
  description:
    'My Hero Ultra Rumble Season 16 launched March 25, 2026, introducing Star and Stripe as the first American hero, celebrating the 2.5-year anniversary with',
  keywords: [
    'My Hero Ultra Rumble Season 16',
    'MHUR Season 16 Star and Stripe',
    'My Hero Ultra Rumble 2.5 anniversary',
    'Star and Stripe Ultra Rumble',
    'New Order Quirk Ultra Rumble',
    'MHUR anniversary events 2026',
    'My Hero Ultra Rumble Bakugo Cluster skillset',
    'MHUR free weekly draws anniversary',
    'My Hero Ultra Rumble Season 16 roadmap',
    'Bandai Namco Ultra Rumble March 2026',
    'MHUR Anniversary Select Roll',
    'Ultra Rumble Star and Stripe banner',
    'T.U.N.I.N.G missions Ultra Rumble',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'My Hero Ultra Rumble Season 16: Star and Stripe Arrives for the 2.5 Anniversary',
    description:
      "Season 16 goes Plus Ultra, America's No.1 hero Star and Stripe joins the roster with her New Order Quirk, free weekly 10-draws run through May 27, and",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    publishedTime: '2026-03-25T08:00:00Z',
    modifiedTime: '2026-03-25T08:00:00Z',
    section: 'Video Games',
    tags: ['My Hero Ultra Rumble', 'Season 16', 'Star and Stripe', 'Bandai Namco', 'Gaming', 'Battle Royale', 'Anime Games', '2.5 Anniversary'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Hero Ultra Rumble Season 16 | Star and Stripe is Here',
    description:
      'The first American hero joins MHUR with her New Order Quirk, free weekly draws, Anniversary Select Rolls, and a two-month roadmap packed with events',
  },
};

export default function MHURSeason16Page() {
  return <JackArticleDB slug="video-games-mha-ultra-rumble-season-16" />;
}
