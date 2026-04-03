import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/finance/private-credit-redemption-crisis-blackstone-blackrock-blue-owl-2026';
const OG_IMAGE = 'https://images.unsplash.com/photo-1468254095679-bbcba94a7066?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Over $4.6B in Investor Capital Trapped in Private Credit Funds | ObjectWire',
  description:
    'The $1.8 trillion private credit market is under pressure. February losses at BCRED and Ares, $13B in Q1 redemption requests, and withdrawal caps at BlackRock, Blue Owl, and Blackstone signal a structural liquidity problem.',
  keywords: [
    'private credit redemption crisis 2026',
    'Blackstone BCRED losses',
    'BlackRock HPS redemption cap',
    'Blue Owl OBDC II',
    'Ares Strategic Income Fund',
    'private credit liquidity',
    'private credit market 2026',
    '$4.6 billion trapped capital',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    type: 'article',
    title: 'Over $4.6B in Investor Capital Trapped in Private Credit Funds | ObjectWire',
    description:
      'Blackstone, BlackRock, Blue Owl, and Ares all faced outsized redemption pressure in Q1 2026. More than $13B in withdrawal requests hit private credit funds but managers returned only about two-thirds of what investors sought.',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Wall Street representing private credit fund redemption crisis 2026' }],
    publishedTime: '2026-03-30T22:30:00Z',
    modifiedTime: '2026-03-30T22:30:00Z',
    section: 'Finance',
    tags: ['Private Credit', 'Blackstone', 'BlackRock', 'Blue Owl', 'Ares', 'Redemption', 'Finance', 'Wall Street'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Over $4.6B in Investor Capital Trapped in Private Credit Funds',
    description:
      'Blackstone BCRED posted its first monthly loss since 2022. BlackRock capped redemptions. Blue Owl eliminated quarterly windows entirely. Over $13B in Q1 withdrawal requests hit private credit funds.',
    images: [OG_IMAGE],
  },
};

export default function FinancePrivateCreditRedemptionCrisisBlackstoneBlackrockBlueOwl2026Page() {
  return <JackArticleDB slug="finance-private-credit-redemption-crisis-blackstone-blackrock-blue-owl-2026" />;
}
