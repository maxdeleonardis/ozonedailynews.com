import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "BETS OFF Act Explained: What It Is, What It Bans, and Who It Targets",
  description:
    "Senator Chris Murphy and Representative Greg Casar introduced the BETS OFF Act on March 17, 2026, to ban CFTC-regulated prediction markets from listing",
  keywords: [
    'BETS OFF Act explained 2026',
    'Banning Event Trading on Sensitive Operations Federal Functions Act',
    'Chris Murphy Greg Casar prediction market legislation',
    'CFTC prediction market ban government actions',
    'prediction market politics terrorism assassination ban',
    'Kalshi Polymarket BETS OFF Act',
    'Democratic prediction market regulation 2026',
    'BETS OFF Act stablecoin event contracts',
    'prediction market federal functions ban legislation',
    'CFTC regulated event trading ban 2026',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/define/bets-off-act',
  },
  openGraph: {
    title: "BETS OFF Act Explained: The Democratic Bill to Ban Prediction Markets on Government Actions",
    description:
      "The BETS OFF Act, introduced March 17, 2026, would prohibit CFTC-regulated platforms from listing contracts tied to government actions, terrorism, war,",
    type: 'article',
    url: 'https://www.objectwire.org/define/bets-off-act',
    siteName: 'ObjectWire',
    publishedTime: '2026-03-18T16:00:00Z',
    section: 'Finance',
    tags: ['BETS OFF Act', 'Prediction Markets', 'CFTC', 'Chris Murphy', 'Greg Casar', 'Finance', 'Legislation'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "BETS OFF Act: What It Bans and Who It Targets",
    description:
      "Democrats want to ban prediction market contracts on government actions, terrorism, war, and assassination. Here's what the BETS OFF Act actually says.",
  },
};

export default function BetsOffActPage() {
  return <WikiArticle slug="define-bets-off-act" />;
}
