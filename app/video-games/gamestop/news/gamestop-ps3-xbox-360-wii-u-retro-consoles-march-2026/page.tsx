import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/video-games/gamestop/news/gamestop-ps3-xbox-360-wii-u-retro-consoles-march-2026';
const FULL_URL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: "GameStop Classifies PS3, Xbox 360, and Wii U as Retro Consoles | March 16, 2026",
  description:
    "GameStop officially designated the PlayStation 3, Xbox 360, and Nintendo Wii U as 'retro consoles' on March 16, 2026, citing component cables, the lack of",
  keywords: [
    'GameStop retro consoles PS3 Xbox 360 Wii U 2026',
    'GameStop classifies PS3 retro',
    'Xbox 360 retro console GameStop March 2026',
    'Wii U retro designation GameStop',
    'GameStop retro console category 2026',
    'PS3 retro console 2026',
    'Wii U Obama not Bush GameStop error',
    'GameStop X post retro consoles humor',
    'seventh generation consoles retro 2026',
    'GameStop trade-in retro console classification',
  ],
  alternates: {
    canonical: FULL_URL,
  },
  openGraph: {
    title: "GameStop Calls the PS3, Xbox 360, and Wii U 'Retro' | One Presidential Fact Is Wrong",
    description:
      "GameStop moved the PS3, Xbox 360, and Wii U into its retro console category on March 16, 2026. The official X post cited 'component cables, lack of",
    type: 'article',
    url: FULL_URL,
    siteName: 'ObjectWire',
    publishedTime: '2026-03-16T18:00:00Z',
    modifiedTime: '2026-03-16T18:00:00Z',
    section: 'Gaming',
    tags: ['GameStop', 'PS3', 'Xbox 360', 'Wii U', 'Retro Gaming', 'Gaming', 'Nintendo', 'Microsoft', 'Sony'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "GameStop Designates PS3, Xbox 360, and Wii U as Retro Consoles",
    description:
      "GameStop's retro classification criteria: component cables, no Fortnite, and a Bush-era launch. Two out of three ain't bad, the Wii U launched under Obama",
  },
  other: {
    news_keywords:
      'GameStop retro consoles, PS3 retro, Xbox 360 retro, Wii U retro, GameStop March 2026, seventh generation retro gaming',
  },
};

export default function GameStopRetroConsolesPage() {
  return <JackArticleDB slug="video-games-gamestop-news-gamestop-ps3-xbox-360-wii-u-retro-consoles-march-2026" />;
}
