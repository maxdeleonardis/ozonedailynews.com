import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'What Is Bitcoin Halving? | 2024 Halving Explained',
  description: 'Bitcoin halving cuts the block reward miners receive in half every 210,000 blocks. Learn how it works, why it matters for price, and what happened at the',
  keywords: [
    'what is bitcoin halving',
    'bitcoin halving explained',
    'bitcoin halving 2024',
    'bitcoin block reward',
    'bitcoin mining halving',
    'bitcoin halving cycle',
    'bitcoin halving price impact',
    'bitcoin halving date',
    'crypto halving',
    'satoshi halving schedule',
    'bitcoin supply cap',
    '21 million bitcoin',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/define/what-is-bitcoin-halving',
  },
  openGraph: {
    title: 'What Is Bitcoin Halving? | 2024 Halving Explained',
    description: 'Bitcoin halving explained: how the block reward halves every 210,000 blocks, why it matters for price, and the 2024 halving results.',
    type: 'article',
    url: 'https://www.objectwire.org/define/what-is-bitcoin-halving',
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is Bitcoin Halving? | 2024 Halving Explained',
    description: 'Bitcoin halving cuts mining rewards in half every 210,000 blocks. How it works and why it affects price.',
  },
};

export default function WhatIsBitcoinHalvingPage() {
  return <WikiArticle slug="define-what-is-bitcoin-halving" />;
}
