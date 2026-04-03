import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title:
    'Rainbow Six Siege, News, Operators, Maps & Esports | ObjectWire',
  description:
    "Complete Rainbow Six Siege coverage, Year 11 season updates, new operators, map reworks, ranked meta, esports tournaments, and Ubisoft's tactical FPS roadmap for 2026.",
  keywords: [
    'Rainbow Six Siege',
    'R6 Siege',
    'Rainbow Six Siege Year 11',
    'Rainbow Six Siege operators',
    'Rainbow Six Siege maps',
    'Rainbow Six Siege esports',
    'Siege ranked',
    'Ubisoft',
    'tactical shooter',
    'R6 esports',
    'Six Invitational',
  ],
  openGraph: {
    title: 'Rainbow Six Siege | News, Operators & Esports | ObjectWire',
    description:
      'Year 11 updates, new operators, competitive meta, and esports coverage for Ubisoft\'s tactical FPS.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/video-games/rainbow-6-siege',
  },
};

export default function RainbowSixSiegeHubPage() {
  return <WikiArticle slug="video-games-rainbow-6-siege" />;
}
