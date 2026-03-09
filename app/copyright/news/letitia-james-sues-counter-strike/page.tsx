import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "NY AG Letitia James Sues Valve Over Counter-Strike Loot Boxes -- Gabe Newell Responds 'GL HF' | ObjectWire",
  description:
    "New York Attorney General Letitia James has filed a lawsuit against Valve Corporation, alleging that Counter-Strike 2 loot boxes constitute illegal gambling under New York law. Valve CEO Gabe Newell responded in two words: GL HF.",
  keywords: [
    'Letitia James Valve lawsuit 2026',
    'Counter-Strike loot box lawsuit New York',
    'Valve Corporation loot box illegal gambling',
    'NY AG Valve Counter-Strike 2 loot boxes',
    'Gabe Newell GL HF lawsuit response',
    'Counter-Strike skins gambling lawsuit',
    'Valve loot box New York law',
    'CS2 skins market billion dollar value',
    'Letitia James gaming lawsuit',
    'loot box illegal gambling United States',
    'Counter-Strike weapon skins real money',
    'Valve gambling regulation 2026',
    'Dota 2 Team Fortress 2 loot box lawsuit',
    'CS2 skin market $1 million',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/copyright/news/letitia-james-sues-counter-strike',
  },
  openGraph: {
    title: "NY AG Letitia James Sues Valve Over Loot Boxes -- Gabe Newell Responds 'GL HF'",
    description:
      "New York's AG alleges Counter-Strike 2 loot boxes are illegal gambling. Some CS skins have sold for over $1 million. The broader skins market is worth billions. Gabe Newell's official response: 'GL HF'.",
    type: 'article',
    url: 'https://www.objectwire.org/copyright/news/letitia-james-sues-counter-strike',
    siteName: 'ObjectWire',
    publishedTime: '2026-02-25T20:00:00Z',
    modifiedTime: '2026-02-25T20:00:00Z',
    section: 'Law',
    tags: [
      'Valve', 'Counter-Strike 2', 'Loot Boxes', 'Letitia James',
      'New York AG', 'Gambling', 'Gaming Law', 'Gabe Newell',
      'CS2', 'Skins Market', 'Video Game Regulation',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "NY AG Sues Valve Over CS2 Loot Boxes. Gabe Newell Responds: 'GL HF'",
    description:
      "Letitia James says Counter-Strike loot boxes are illegal gambling. Some skins sell for over $1M. The skins market is worth billions. Valve CEO Gabe Newell's full statement: GL HF.",
  },
};

export default function LetitiaJamesValveLawsuitPage() {
  return <WikiArticle slug="copyright-news-letitia-james-sues-counter-strike" />;
}
