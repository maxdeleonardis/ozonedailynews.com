import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/entertainment/beastgames/season-2/news/tyler-lucas-wins-kalshi-priced-in';

export const metadata: Metadata = {
  title: 'Beast Games Season 2 Winner Tyler Lucas (167) Was Priced In on Kalshi Before the Finale Aired | ObjectWire',
  description:
    'Tyler Lucas, contestant 167, won Beast Games Season 2 and $5.1 million on February 25, 2026. On Kalshi, his implied win probability hit 83-94% before the episode streamed. A MrBeast editor was already sanctioned five days earlier for insider trading on Beast Games markets.',
  keywords: [
    'Beast Games Season 2 winner Tyler Lucas',
    'Tyler Lucas 167 Beast Games finale',
    'Kalshi Beast Games Season 2 prediction market',
    'Polymarket Beast Games Tyler Lucas odds',
    'MrBeast Kalshi insider trading 2026',
    'Beast Games prediction market insider information',
    'CFTC MrBeast editor sanction 2026',
    'Beast Games Cory Sims finale February 2026',
    'Tyler Lucas $5.1 million prize Beast Games',
    'Kalshi entertainment market integrity',
    'prediction market reality TV 2026',
    'Kalshi insider trading entertainment',
    'Beast Games Season 2 Kalshi odds',
    'MrBeast editor CFTC referral',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: 'Beast Games Season 2 Winner Tyler Lucas Was Priced In at 83-94% Before the Finale Aired',
    description:
      'Tyler Lucas won Beast Games Season 2 and $5.1M on February 25, 2026. Prediction markets had him as a near-certain winner days before broadcast. A MrBeast editor was sanctioned for insider trading five days before the finale.',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['Connan Boyle'],
    publishedTime: '2026-02-25T23:00:00Z',
    modifiedTime: '2026-02-25T23:00:00Z',
    section: 'Entertainment',
    tags: [
      'Beast Games', 'MrBeast', 'Tyler Lucas', 'Kalshi', 'Polymarket',
      'Prediction Markets', 'Insider Trading', 'CFTC', 'Entertainment',
      'Reality TV', 'Season 2',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beast Games Season 2: Tyler Lucas Priced at 83-94% on Kalshi Before the Finale',
    description:
      'Tyler Lucas (167) wins $5.1M. Kalshi had him at 83%, Polymarket at 89% the night before. Combined volume: $1.2M. One MrBeast editor is already sanctioned for insider trading. The market knew.',
  },
};

export default function TylerLucasKalshiArticlePage() {
  return <NewsArticleDB slug="entertainment-beastgames-season-2-news-tyler-lucas-wins-kalshi-priced-in" />;
}
