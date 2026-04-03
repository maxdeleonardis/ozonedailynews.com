import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Fortnite | News, Seasons, Esports & Updates | ObjectWire',
  description:
    "Complete Fortnite coverage, Chapter 6 season updates, battle pass breakdowns, competitive FNCS, Fortnite Festival, Creative 2.0, Lego Fortnite, Epic Games news, and the cultural phenomenon reshaping gaming.",
  keywords: [
    'Fortnite',
    'Fortnite Chapter 6',
    'Fortnite Season',
    'Fortnite battle pass',
    'FNCS',
    'Fortnite esports',
    'Epic Games',
    'Fortnite Creative',
    'Lego Fortnite',
    'Fortnite Festival',
    'Fortnite map',
    'battle royale',
    'Fortnite OG',
    'Unreal Engine',
  ],
  openGraph: {
    title: 'Fortnite | News, Seasons & Esports | ObjectWire',
    description:
      'Chapter 6 updates, FNCS esports, Creative 2.0, Lego Fortnite, and the complete Epic Games ecosystem.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/fortnite',
  },
};

export default function FortniteHubPage() {
  return <WikiArticle slug="fortnite" />;
}
