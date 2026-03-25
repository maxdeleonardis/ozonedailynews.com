import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/entertainment/news/fortnite-moves-into-movies';

export const metadata: Metadata = {
  title: 'Unreal Engine Becomes the Backbone of 2026 Entertainment Production | ObjectWire',
  description:
    'Unreal Engine 5.7 now powers over 153 film and TV productions in 2025 alone. From ILM StageCraft to Netflix virtual stages, the same engine behind Fortnite is reshaping Hollywood.',
  keywords: [
    'Unreal Engine 2026 entertainment',
    'Unreal Engine 5.7 film production',
    'virtual production stages 2026',
    'ILM StageCraft Unreal Engine',
    'in-camera VFX Unreal Engine',
    'LED volume virtual production',
    'nDisplay 5.7',
    'MetaHuman Creator 5.7',
    'Epic Games GDC 2026',
    'Unreal Engine film TV projects',
    'Fortnite Unreal Engine movies',
    'real-time rendering Hollywood',
    'The Mandalorian Unreal Engine',
    'The Batman Part II virtual production',
    'Dune Messiah Unreal Engine',
    'Stranger Things Season 5 Unreal Engine',
    'motion capture Unreal Engine Live Link',
    'UEFN entertainment production',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: 'Unreal Engine Becomes the Backbone of 2026 Entertainment Production',
    description:
      '153 films and TV shows in 2025 alone. 500+ cumulative productions. The engine that runs Fortnite now renders Gotham, Arrakis, and the Upside Down — in real time, on set.',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: [AUTHOR_NAME],
    publishedTime: '2026-03-12T00:00:00Z',
    modifiedTime: '2026-03-12T00:00:00Z',
    section: 'Entertainment',
    tags: [
      'Unreal Engine',
      'Virtual Production',
      'Entertainment',
      'Epic Games',
      'Fortnite',
      'Film & TV',
      'Technology',
      'Hollywood',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unreal Engine: The Engine That Runs Fortnite Is Now Running Hollywood',
    description:
      '153 film & TV productions in 2025 alone. 65% of entertainment developers now use Unreal Engine as their primary real-time engine. The Fortnite engine grew up.',
  },
};

export default function UnrealEngineEntertainmentPage() {
  return <NewsArticleDB slug="entertainment-news-fortnite-moves-into-movies" />;
}
