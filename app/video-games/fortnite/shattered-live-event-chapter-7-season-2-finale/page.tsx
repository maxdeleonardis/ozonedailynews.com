import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/video-games/fortnite/shattered-live-event-chapter-7-season-2-finale';
const ARTICLE_URL = `https://www.ozonenetwork.news${SLUG}`;

export const metadata: Metadata = {
  title: 'Fortnite Shattered Live Event | Chapter 7 Season 2 Finale',
  description:
    'The Shattered event ended Fortnite Chapter 7 Season 2 with a branching faction finale, the Geno reveal, and the Zero Point breaking the island apart ahead of Season 3.',
  keywords: [
    'Fortnite Shattered event',
    'Fortnite Chapter 7 Season 2 finale',
    'Fortnite live event 2026',
    'Fortnite Shattered recap',
    'Fortnite Geno reveal',
    'Fortnite Foundation vs Ice King',
    'Fortnite Dark Harvester',
    'Fortnite Zero Point shattered',
    'Fortnite Imagined Order Geno',
    'Fortnite Chapter 7 Season 3',
    'Fortnite Chaos Cutlasses Pickaxe',
    'Fortnite Bark Voyager Sidekick',
    'Fortnite Season 2 ending',
    'Fortnite live event recap June 2026',
    'Epic Games Fortnite',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Fortnite Shattered Live Event | Chapter 7 Season 2 Finale Recap',
    description:
      'Branching faction finale, Geno revealed as the Visitor, the Dark Harvester fires into the Zero Point, and the island physically breaks apart. Full Shattered event recap.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'OzoneNews',
    authors: ['Conan Boyle'],
    publishedTime: '2026-06-05T20:00:00-05:00',
    modifiedTime: '2026-06-05T20:00:00-05:00',
    section: 'Gaming',
    tags: ['Fortnite', 'Fortnite Chapter 7', 'Epic Games', 'Fortnite Live Event', 'Fortnite Shattered'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fortnite Shattered Live Event | Geno Revealed, Island Breaks Apart',
    description:
      'The Visitor was Geno all along. The Dark Harvester fired into the Zero Point. The island shattered. Chapter 7 Season 3 Runners launches June 6.',
  },
};

export default function FortniteShatteredEventPage() {
  return (
    <NewsArticleDB slug="video-games-fortnite-shattered-live-event-chapter-7-season-2-finale" />
  );
}
