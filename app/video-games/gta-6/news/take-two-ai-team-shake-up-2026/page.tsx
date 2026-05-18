import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const revalidate = 3600;

const SLUG = '/video-games/gta-6/news/take-two-ai-team-shake-up-2026';
const OG_IMAGE = '/video-games/gta6.png';

export const metadata: Metadata = {
  title: 'GTA 6 | Take-Two Shakes Up AI Team Despite Zelnick Pledge',
  description:
    'Take-Two Interactive has restructured its internal AI division weeks after CEO Strauss Zelnick pledged "hundreds of pilots" to investors. The move raises',
  keywords: [
    'GTA 6',
    'Take-Two AI restructuring',
    'Strauss Zelnick AI',
    'GTA 6 AI features',
    'Take-Two Interactive 2026',
    'GTA 6 NPC AI',
    'Rockstar Games AI',
    'Take-Two Q3 earnings AI',
    'GTA 6 development 2026',
    'Take-Two AI team shake-up',
    'GTA 6 release date 2026',
    'Kotaku Take-Two',
  ],
  alternates: {
    canonical: `https://www.ozonenetwork.news${SLUG}`,
  },
  openGraph: {
    type: 'article',
    title: 'GTA 6 | Take-Two Shakes Up AI Team Despite CEO Hundreds of',
    description:
      'Take-Two restructures its AI division weeks after Zelnick told investors they were running "hundreds of pilots." What it means for GTA 6 NPC behavior, QA',
    url: `https://www.ozonenetwork.news${SLUG}`,
    siteName: 'OzoneNews',
    authors: ['OzoneNews Gaming'],
    publishedTime: '2026-04-03T12:00:00Z',
    modifiedTime: '2026-04-03T12:00:00Z',
    section: 'Gaming',
    images: [
      {
        url: `https://www.ozonenetwork.news${OG_IMAGE}`,
        width: 1200,
        height: 675,
        alt: 'Grand Theft Auto VI promotional artwork',
      },
    ],
    tags: ['GTA 6', 'Take-Two Interactive', 'Rockstar Games', 'Strauss Zelnick'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Take-Two Reshuffles AI Team While GTA 6 Is in Final Polish',
    description:
      'CEO Strauss Zelnick ran "hundreds of pilots" in Q1 2026, now the team building those pilots is being restructured. What does it mean for GTA 6?',
    images: [`https://www.ozonenetwork.news${OG_IMAGE}`],
  },
};

export default function VideoGamesGta6NewsTakeTwoAiTeamShakeUp2026Page() {
  return <NewsArticleDB slug="video-games-gta-6-news-take-two-ai-team-shake-up-2026" />;
}
