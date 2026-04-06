import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Rocket League | News, Esports, Ranks & Updates',
  description:
    "Complete Rocket League coverage, Season 17 updates, RLCS esports, ranked meta, car hitboxes, Psyonix news, and the future of rocket-powered soccer on PC,",
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
    title: 'Rocket League | News, Esports & Updates',
    description:
      'Rocket-powered soccer, Season updates, RLCS esports, ranked guides, and the full Psyonix roadmap.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/rocket-league',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rocket League | News, Esports & Updates',
    description: 'Rocket-powered soccer, Season updates, RLCS esports, ranked guides, and the full Psyonix roadmap.',
  },
};

export default function RocketLeagueHubPage() {
  return <WikiArticle slug="rocket-league" />;
}
