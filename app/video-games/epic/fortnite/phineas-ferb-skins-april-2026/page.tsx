import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const revalidate = 3600;

const SLUG = '/video-games/epic/fortnite/phineas-ferb-skins-april-2026';
const ARTICLE_URL = `https://www.ozonenetwork.news${SLUG}`;
const OG_IMAGE = 'https://www.ozonenetwork.news/video-games/epic/pherb.png';

export const metadata: Metadata = {
  title: 'Fortnite Phineas and Ferb Cup | How to Win the Free Skins',
  description:
    'The Fortnite Phineas and Ferb Cup runs April 3, 2026. Win enough points to unlock Buff Perry the Platypus and Dr. Doofenshmirtz skins before they hit the',
  keywords: [
    'Fortnite Phineas and Ferb Cup',
    'Fortnite Phineas and Ferb skins',
    'Buff Perry the Platypus Fortnite',
    'Dr Doofenshmirtz Fortnite skin',
    'Fortnite Phineas Ferb April 2026',
    'Fortnite Disney crossover 2026',
    'Fortnite Chapter 7 Season 2 skins',
    'Fortnite cup free skin April 2026',
    'how to win Fortnite Phineas Ferb Cup',
    'Fortnite Perry the Platypus skin',
    'Fortnite Item Shop April 4 2026',
    'Fortnite Disney collab Chapter 7',
    'Fortnite tournament free cosmetics',
    'Phineas and Ferb Fortnite release date',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Fortnite Phineas and Ferb Cup | Win Buff Perry',
    description:
      'The Fortnite Phineas and Ferb Cup is live April 3. Earn enough points to claim Buff Perry the Platypus and Dr. Doofenshmirtz before the Item Shop drop on',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'OzoneNews',
    authors: ['OzoneNews Gaming Desk'],
    publishedTime: '2026-04-03T12:00:00Z',
    modifiedTime: '2026-04-03T12:00:00Z',
    section: 'Gaming',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Fortnite Phineas and Ferb Cup promotional image' }],
    tags: ['Fortnite', 'Phineas and Ferb', 'Epic Games', 'Disney', 'Gaming'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fortnite Phineas and Ferb Cup is live. Win Buff Perry +',
    description: 'Hit the points threshold in today\'s cup and you skip the Item Shop paywall. Skins drop Saturday April 4 at 8 p.m. ET.',
    images: [OG_IMAGE],
  },
};

export default function VideoGamesEpicFortnitePhineasFerbSkinsApril2026Page() {
  return <NewsArticleDB slug="video-games-epic-fortnite-phineas-ferb-skins-april-2026" />;
}
