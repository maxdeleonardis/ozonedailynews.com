import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Mastercard Shares Fall Below $500 as AI Disruption Note and Tariff Fears Hit Payments | ObjectWire',
  description:
    'Mastercard (NYSE: MA) fell 5.73% on February 23, 2026, closing at $496.40 — its first sub-$500 close since April 2025 — after a viral research note warned AI could displace 15–25% of card transaction volume, while tariff uncertainty rattled cross-border fee projections.',
  keywords: [
    'Mastercard stock drop',
    'MA stock February 2026',
    'Mastercard NYSE MA $495',
    'Mastercard AI disruption',
    'payments sector selloff 2026',
    'Visa AXP drop February 2026',
    'AI payment rails disruption',
    'tariff impact Mastercard',
    'fintech AI research note',
    'card network AI threat',
    'Mastercard shares below $500',
    'American Express AXP selloff',
    'Visa stock drop 2026',
    'payments sector market cap loss',
    'Mastercard forward PE 2026',
    'Mastercard Q4 2025 EPS',
    'cross-border payment uncertainty 2026',
    'agentic AI payment alternatives',
    'peer-to-peer AI transfers',
    'card transaction volume AI',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/copyright/news/mastercard-ai-disruption-selloff',
  },
  openGraph: {
    title: "Mastercard Drops Below $500 as AI Disruption Note and Tariff Fears Rattle Payments Sector",
    description:
      'Mastercard fell 5.73% to $496.40 on February 23, 2026 — the first sub-$500 close since April 2025 — after a viral fintech research note projected AI could displace up to 25% of card volume, compounding tariff-driven sector anxiety.',
    type: 'article',
    url: 'https://www.objectwire.org/copyright/news/mastercard-ai-disruption-selloff',
    siteName: 'ObjectWire',
    authors: ['Alfansa'],
    publishedTime: '2026-02-24T08:00:00Z',
    modifiedTime: '2026-02-24T08:00:00Z',
    section: 'Finance',
    tags: [
      'Mastercard',
      'NYSE: MA',
      'Visa',
      'American Express',
      'AI Payments',
      'Fintech',
      'Tariffs',
      'Stock Market',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mastercard Falls Below $500 — AI Note + Tariff Fears Wipe $18B From Payments Sector | ObjectWire',
    description:
      'Mastercard, Visa, and American Express saw $18.4 billion in combined market value erased on February 23, 2026. The trigger: a viral research note projecting generative AI could disrupt 15–25% of card transaction volume.',
  },
};

export default function MastercardAISelloffPage() {
  return <WikiArticle slug="copyright-news-mastercard-ai-disruption-selloff" />;
}
