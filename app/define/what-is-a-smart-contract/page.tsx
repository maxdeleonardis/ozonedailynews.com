import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'What Is a Smart Contract? | Ethereum, Solana Explained',
  description: 'A smart contract is self-executing code stored on a blockchain that runs automatically when conditions are met. Learn how smart contracts work, real',
  keywords: [
    'what is a smart contract',
    'smart contract definition',
    'how do smart contracts work',
    'smart contract examples',
    'Ethereum smart contracts',
    'Solana smart contracts',
    'smart contract explained',
    'blockchain smart contract',
    'DeFi smart contracts',
    'NFT smart contracts',
    'smart contract security',
    'Solidity programming',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/define/what-is-a-smart-contract',
  },
  openGraph: {
    title: 'What Is a Smart Contract? | Ethereum, Solana Explained',
    description: 'Smart contracts explained: self-executing blockchain code, how Ethereum and Solana use them, and real-world DeFi and NFT applications.',
    type: 'article',
    url: 'https://www.objectwire.org/define/what-is-a-smart-contract',
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is a Smart Contract? | Blockchain Explained',
    description: 'Smart contracts: self-executing blockchain code that powers DeFi and NFTs on Ethereum and Solana.',
  },
};

export default function WhatIsASmartContractPage() {
  return <WikiArticle slug="define-what-is-a-smart-contract" />;
}
