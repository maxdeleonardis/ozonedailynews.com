import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const revalidate = 3600;

const SLUG = '/video-games/epic/epic-games-vbucks-shrinkflation-chapter-7-season-2-2026';

export const metadata: Metadata = {
  title: "Epic Games Implements V-Bucks 'Shrinkflation' Explained",
  description:
    "Epic Games has reduced the V-Bucks included in every paid bundle effective March 19, 2026, while keeping dollar prices unchanged. The $8.99 pack drops",
  keywords: [
    'Fortnite V-Bucks shrinkflation 2026',
    'Epic Games V-Bucks reduction March 2026',
    'Fortnite V-Bucks price change Chapter 7 Season 2',
    'Fortnite Chapter 7 Season 2 V-Bucks',
    'Epic Games shrinkflation V-Bucks bundles',
    'V-Bucks purchasing power drop 20 percent',
    'Fortnite Battle Pass V-Bucks 800 2026',
    'Epic Games operational costs Fortnite 2026',
    'BoycottVBucks hashtag March 2026',
    'Andre Balta GDC 2026 Fortnite',
    'Fortnite 650 million monthly active players 2026',
    'V-Bucks bundle size reduction 2026',
    'free-to-play currency shrinkflation gaming',
    'Fortnite Crew subscription V-Bucks April 2026',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: "Epic Games Implements Fortnite 'Shrinkflation' | V-Bucks Purchasing Power Drops 20–25%",
    description:
      "Epic keeps prices the same but slashes V-Bucks quantities by up to 20% across every bundle, effective March 19, 2026. The $8.99 starter pack goes from",
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['Connan Boyle'],
    publishedTime: '2026-03-18T18:00:00Z',
    modifiedTime: '2026-03-18T18:00:00Z',
    section: 'Gaming',
    tags: [
      'Fortnite', 'Epic Games', 'V-Bucks', 'Shrinkflation', 'Gaming',
      'Chapter 7 Season 2', 'Battle Pass', 'Copyright', 'Free-to-Play',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Fortnite V-Bucks Shrinkflation: Same Price, 20% Fewer",
    description:
      "Epic Games cuts V-Bucks quantities by 20–25% across all bundles while keeping prices unchanged. The $8.99 pack drops from 1,000 to 800 V-Bucks.",
  },
  other: {
    news_keywords:
      'Fortnite V-Bucks shrinkflation, Epic Games, V-Bucks reduction, Chapter 7 Season 2, Battle Pass, BoycottVBucks, free-to-play gaming 2026, gaming currency inflation',
  },
};

export default function FortniteVBucksShrinkflationPage() {
  return <NewsArticleDB slug="fortnite-epic-games-vbucks-shrinkflation-chapter-7-season-2-2026" />;
}
