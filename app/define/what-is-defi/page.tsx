import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'What Is DeFi? | Decentralized Finance Explained 2026',
  description: 'DeFi (decentralized finance) uses blockchain smart contracts to replace banks and brokers. Learn how DeFi works, key protocols, risks, and the 2026',
  keywords: [
    'what is DeFi',
    'decentralized finance definition',
    'how does DeFi work',
    'DeFi explained',
    'DeFi protocols',
    'DeFi vs traditional finance',
    'DeFi lending',
    'DeFi yield farming',
    'smart contracts DeFi',
    'Ethereum DeFi',
    'DeFi risks',
    'DeFi 2026',
    'best DeFi protocols',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/define/what-is-defi',
  },
  openGraph: {
    title: 'What Is DeFi? | Decentralized Finance Explained 2026',
    description: 'DeFi explained: how decentralized finance works, key protocols, yield farming, lending, and the risks.',
    type: 'article',
    url: 'https://www.objectwire.org/define/what-is-defi',
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is DeFi? | Decentralized Finance Explained',
    description: 'DeFi explained: blockchain-based finance without banks, how protocols work, and the 2026 landscape.',
  },
};

export default function WhatIsDefiPage() {
  return <WikiArticle slug="define-what-is-defi" />;
}
