import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const revalidate = 3600;

const SLUG = '/copyright/news/circle-class-action-drift-protocol-285m-hack-solana';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Circle Class Action | Drift Protocol $285M Hack Solana',
  description: 'Gibbs Mura filed a class action against Circle after $230M in stolen USDC from the $285M Drift Protocol exploit was bridged to Ethereum over eight hours',
  keywords: [
    'Drift Protocol hack 2026',
    'Drift Protocol exploit',
    'Circle class action lawsuit',
    'Circle USDC freeze',
    'Drift Protocol $285 million',
    'Solana DeFi hack',
    'North Korea crypto hack',
    'UNC4736 Drift Protocol',
    'Gibbs Mura Circle lawsuit',
    'CCTP USDC bridge exploit',
    'Anatoly Yakovenko stablecoin',
    'Drift Protocol DRIFT token',
    'Solana TVL collapse 2026',
    'CarbonVote Token exploit',
    'DeFi security 2026',
    'Circle Cross-Chain Transfer Protocol',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Circle Faces Class Action Over Drift Protocol $285M Hack',
    description: 'Attackers drained $285M from Solana\'s largest perp DEX in 12 minutes. $230M in stolen USDC bridged to Ethereum via Circle\'s CCTP without intervention.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-04-17T23:30:00Z',
    modifiedTime: '2026-04-17T23:30:00Z',
    section: 'Crypto',
    tags: ['Circle', 'Drift Protocol', 'Solana', 'USDC', 'DeFi', 'Class Action'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Class action targets Circle over Drift Protocol $285M hack',
    description: '$230M in stolen USDC bridged to Ethereum over 8 hours via Circle\'s own CCTP. Gibbs Mura alleges Circle failed to freeze funds. North Korean hackers',
  },
};

export default function CopyrightNewsCircleClassActionDriftProtocol285mHackSolanaPage() {
  return <JackArticleDB slug="copyright-news-circle-class-action-drift-protocol-285m-hack-solana" />;
}
