import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Valve Corporation | Company Profile 2026',
  description:
    'Complete profile of Valve Corporation: founding, Steam platform, major franchises including Counter-Strike and Dota 2, loot box revenue, and',
  keywords: [
    'Valve Corporation',
    'Gabe Newell',
    'Steam platform',
    'Counter-Strike 2',
    'CS2',
    'Dota 2',
    'Half-Life',
    'Team Fortress 2',
    'loot boxes',
    'video game company',
    'Bellevue Washington',
    'Steam revenue',
  ],
  alternates: {
    canonical: 'https://www.ozonenetwork.news/video-games/valve-corporation',
  },
  openGraph: {
    title: 'Valve Corporation | Company Profile 2026',
    description:
      'Valve Corporation: Steam, Counter-Strike, Dota 2, and the loot box economy. Revenue, history, and key statistics.',
    type: 'article',
    url: 'https://www.ozonenetwork.news/video-games/valve-corporation',
    siteName: 'ObjectWire',
    images: [{ url: '/influncer/valve-ceo-Gabe-Newell.PNG' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Valve Corporation | Company Profile 2026',
    description:
      'Steam, Counter-Strike, loot boxes, and $5B in annual revenue. Full Valve Corporation profile.',
  },
};

export default function ValveCorporationPage() {
  return <WikiArticle slug="video-games-valve-corporation" />;
}
