import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/video-games/news/rainbow-six-siege-operation-silent-hunt-y11s1-solid-snake';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Rainbow Six Siege Operation Silent Hunt | Solid Snake, 1v1 Arcade, Dual Front Exit',
  description:
    'Rainbow Six Siege Y11S1 Operation Silent Hunt adds Solid Snake as an attacker, modernized Coastline, Villa, and Oregon, a public 1v1 Arcade mode, and',
  keywords: [
    'Rainbow Six Siege Operation Silent Hunt',
    'R6 Siege Y11S1',
    'Solid Snake Rainbow Six Siege',
    'Siege 1v1 Arcade mode',
    'Siege Dual Front removal',
    'Siege modernized Coastline Villa Oregon',
    'Siege anti-toxicity update',
    'Rainbow Six Siege 2026',
    'Ubisoft Siege Y11S1',
    'Siege Soliton Radar',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'R6 Siege Operation Silent Hunt | Solid Snake Joins as Attacker',
    description:
      'Y11S1 adds Solid Snake with the TACIT .45 and Soliton Radar Mk. III, modernizes three maps, launches a 1v1 Arcade playlist, and begins phasing out Dual',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Gaming Desk'],
    publishedTime: '2026-03-31T14:00:00Z',
    modifiedTime: '2026-03-31T14:00:00Z',
    section: 'Video Games',
    tags: ['Rainbow Six Siege', 'Solid Snake', 'Ubisoft', 'Operation Silent Hunt', 'Gaming'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Siege Y11S1 | Solid Snake, 1v1 Arcade, Dual Front Farewell',
    description:
      'Operation Silent Hunt shakes up R6 Siege with Solid Snake, three modernized maps, a 1v1 Arcade playlist, and the start of Dual Front removal.',
  },
};

export default function VideoGamesNewsRainbowSixSiegeOperationSilentHuntY11s1SolidSnakePage() {
  return <NewsArticleDB slug="video-games-news-rainbow-six-siege-operation-silent-hunt-y11s1-solid-snake" />;
}
