import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'What Is a Stablecoin? | USDC, USDT & How They Work',
  description: 'A stablecoin is a cryptocurrency pegged to a stable asset like the US dollar. Learn how stablecoins work, types, USDC vs USDT, and the 2026 GENIUS Act',
  keywords: [
    'what is a stablecoin',
    'stablecoin definition',
    'how do stablecoins work',
    'USDC stablecoin',
    'USDT tether',
    'USDC vs USDT',
    'stablecoin regulation',
    'GENIUS Act stablecoin',
    'algorithmic stablecoin',
    'fiat-backed stablecoin',
    'stablecoin explained',
    'crypto stablecoin',
    '2026 stablecoin regulation',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/define/what-is-a-stablecoin',
  },
  openGraph: {
    title: 'What Is a Stablecoin? | USDC, USDT & How They Work',
    description: 'Stablecoins explained: how they work, USDC vs USDT, and what the 2026 GENIUS Act means for the market.',
    type: 'article',
    url: 'https://www.objectwire.org/define/what-is-a-stablecoin',
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is a Stablecoin? | USDC, USDT & 2026 Regulation',
    description: 'Stablecoins explained: how they work, USDC vs USDT, algorithmic vs fiat-backed.',
  },
};

export default function WhatIsAStablecoinPage() {
  return <WikiArticle slug="define-what-is-a-stablecoin" />;
}
