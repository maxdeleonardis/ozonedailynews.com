import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Rocket League | News, Esports, Ranks & Updates | ObjectWire',
  description:
    "Complete Rocket League coverage, Season 17 updates, RLCS esports, ranked meta, car hitboxes, Psyonix news, and the future of rocket-powered soccer on PC, PS5, Xbox, and Switch.",
  keywords: [
    'Rocket League',
    'Rocket League Season 17',
    'RLCS',
    'Rocket League esports',
    'Rocket League ranks',
    'Psyonix',
    'Rocket League updates',
    'Epic Games',
    'car soccer',
    'rocket-powered soccer',
    'RLCS 2026',
    'Grand Champion',
  ],
  openGraph: {
    title: 'Rocket League | News, Esports & Updates | ObjectWire',
    description:
      'Rocket-powered soccer, Season updates, RLCS esports, ranked guides, and the full Psyonix roadmap.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/rocket-league',
  },
};

export default function RocketLeagueHubPage() {
  return <WikiArticle slug="rocket-league" />;
}
