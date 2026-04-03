import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/video-games/dispatch-adhoc-studio';
const OG_IMAGE = 'https://images.unsplash.com/photo-1620075266917-2c5791f6737b?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Dispatch Xbox Release | AdHoc Studio Superhero Comedy Coming Summer 2026 | ObjectWire',
  description:
    'Dispatch, the superhero workplace comedy from AdHoc Studio, is coming to Xbox Series X|S, Xbox PC, and Xbox Cloud Gaming this summer. Aaron Paul stars.',
  keywords: [
    'Dispatch Xbox release',
    'Dispatch AdHoc Studio Xbox',
    'Dispatch summer 2026',
    'superhero comedy game Xbox',
    'Aaron Paul Dispatch game',
    'Dispatch Xbox Game Pass',
    'AdHoc Studio Telltale',
    'Dispatch Mecha Man game',
    'Dispatch Xbox Partner Preview',
    'Dispatch Xbox Series X',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    type: 'article',
    title: 'Dispatch Xbox Release Date | Superhero Comedy Coming Summer 2026 | ObjectWire',
    description:
      'AdHoc Studio\'s hit superhero workplace comedy Dispatch heads to Xbox this summer. Aaron Paul voices protagonist Mecha Man. Xbox Play Anywhere supported.',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 800,
        alt: 'Dispatch AdHoc Studio superhero comedy game Xbox 2026',
      },
    ],
    publishedTime: '2026-03-30T12:00:00Z',
    section: 'Gaming',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dispatch Xbox | Superhero Comedy Hits Xbox Summer 2026 | ObjectWire',
    description:
      'AdHoc Studio\'s Dispatch, narrated by Aaron Paul, is coming to Xbox Series X|S, Xbox PC, and Xbox Cloud this summer.',
    images: [`https://www.objectwire.org${SLUG}/og`],
  },
};

export default function VideoGamesDispatchAdhocStudioPage() {
  return <ArticlePageDB slug="video-games-dispatch-adhoc-studio" />;
}
