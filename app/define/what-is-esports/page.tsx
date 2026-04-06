import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'What Is Esports? | Competitive Gaming Explained 2026',
  description: 'Esports is organized competitive video gaming at a professional level. Learn how esports works, the biggest games, prize pools, 2026 viewership numbers,',
  keywords: [
    'what is esports',
    'esports definition',
    'esports explained',
    'competitive gaming',
    'esports industry',
    'esports 2026',
    'biggest esports games',
    'esports prize pools',
    'esports viewership',
    'how to get into esports',
    'esports teams',
    'esports vs sports',
    'professional gaming',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/define/what-is-esports',
  },
  openGraph: {
    title: 'What Is Esports? | Competitive Gaming Explained 2026',
    description: 'Esports explained: organized competitive gaming, biggest titles, prize pools, 2026 viewership numbers, and how the industry works.',
    type: 'article',
    url: 'https://www.objectwire.org/define/what-is-esports',
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is Esports? | Competitive Gaming Explained',
    description: 'Esports explained: professional competitive gaming, biggest titles, prize pools, and the 2026 industry.',
  },
};

export default function WhatIsEsportsPage() {
  return <WikiArticle slug="define-what-is-esports" />;
}
