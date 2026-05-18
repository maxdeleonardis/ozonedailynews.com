import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const revalidate = 3600;

const SLUG = '/video-games/epic';
const ARTICLE_URL = `https://www.ozonenetwork.news${SLUG}`;
const IMAGE_URL =
  'https://www.ozonenetwork.news/video-games/unreal-engine-epic-games-film-automotive-architecture-2026.jpg';

export const metadata: Metadata = {
  title:
    'Unreal Engine Expands Beyond Gaming Into Film',
  description:
    "Unreal Engine powers more than 28% of PC games released in 2024 and has expanded to 4,826 verified companies across film, automotive, architecture, and",
  keywords: [
    'Unreal Engine non-gaming adoption 2026',
    'Unreal Engine film television automotive architecture',
    'Epic Games Unreal Engine industry expansion 2026',
    'Unreal Engine HMI automotive Ford Rivian Volvo',
    'Unreal Engine 28 percent PC games 2024 Sensor Tower',
    'Unreal Engine 4826 companies Landbase 2026',
    'Unreal Engine StageCraft Mandalorian virtual production',
    'Unreal Engine CES 2026 ADAS digital cockpit',
    'Sebastien Miglio Epic Games diversification',
    'Unreal Engine services market 1.86 billion 2024',
    'Unreal Engine War is Over Academy Award 2024',
    'Unreal Engine architecture visualization simulation',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title:
      "Unreal Engine in 2026 | 28% of PC Games, 35+ Car",
    description:
      "Epic Games' Unreal Engine has grown from a 1998 shooter engine to the backbone of real-time 3D across gaming, film, automotive HMIs, and architectural",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'OzoneNews',
    images: [IMAGE_URL],
    publishedTime: '2026-03-01T20:00:00Z',
    modifiedTime: '2026-03-01T20:00:00Z',
    section: 'Video Games',
    tags: [
      'Unreal Engine',
      'Epic Games',
      'Game Engine',
      'Virtual Production',
      'Automotive HMI',
      'Architecture Visualization',
      'Film',
      'Video Games',
      'Technology',
      'Sebastien Miglio',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      "Unreal Engine Is Now in Car Dashboards, Film Sets, and",
    description:
      "28% of PC games. 35+ car HMIs. 500+ film/TV projects. 4,826 companies across industries. Epic's Unreal Engine expansion by the numbers, 2026.",
    images: [IMAGE_URL],
  },
};

export default function UnrealEngineEpicPage() {
  return <JackArticleDB slug="video-games-epic" />;
}
