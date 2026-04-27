import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/finance/news/cips-vs-swift-yuan-hormuz-petroyuan-dollar-rails-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE =
  'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'CIPS vs SWIFT | Yuan Replaces Dollar Rails at Hormuz in 2026',
  description:
    'China\'s CIPS payment network processed ¥175.49tn in 2024, up 43%. At least two confirmed yuan payments for Hormuz transit tolls by late March 2026 show where SWIFT\'s dollar rails are losing ground first.',
  keywords: [
    'CIPS vs SWIFT yuan dollar 2026',
    'CIPS cross-border payments network 2026',
    'petroyuan Hormuz transit payments confirmed',
    'Hormuz toll yuan payment CIPS',
    'SWIFT replacement yuan Iran sanctions',
    'China CIPS volume 175 trillion yuan 2024',
    'CIPS 1683 participants 2025',
    'petroyuan goes live Strait of Hormuz',
    'Iran yuan payment confirmed 2026',
    'de-dollarization payment rails 2026',
    'Kunlun Bank CIPS Iran payments',
    'yuan settlement oil trade 2026',
    'SWIFT dollar rails war zones',
    'China cross-border payments sanctions evasion',
    'Iran Hormuz toll formalization draft law',
    'petroyuan vs petrodollar 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'CIPS vs SWIFT | Petroyuan Goes Live as Two Confirmed Yuan Payments Clear Hormuz',
    description:
      'China\'s CIPS network grew 43% to ¥175.49tn in 2024. By late March 2026, at least two oil tankers had settled Hormuz transit tolls in yuan through CIPS-linked banks. Iran is now drafting a law to formalize the $1/barrel fee.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-04-26T23:00:00Z',
    modifiedTime: '2026-04-26T23:00:00Z',
    section: 'Finance',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 675,
        alt: 'Global financial network representing the competition between China\'s CIPS payment system and SWIFT in yuan settlement',
      },
    ],
    tags: ['CIPS', 'SWIFT', 'Yuan', 'Hormuz', 'Petroyuan', 'De-Dollarization'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Petroyuan Goes Live | Two Confirmed Yuan Payments for Hormuz Oil Transit by Late March',
    description:
      'CIPS volume up 43% in 2024 to ¥175.49tn. At least 2 tankers cleared Hormuz tolls in yuan. Iran is formalizing the $1/barrel fee by law. SWIFT still dominates globally, but not at the chokepoints.',
    images: [OG_IMAGE],
  },
};

export default function FinanceNewsCipsVsSwiftYuanHormuzPetroyuanDollarRails2026Page() {
  return <NewsArticleDB slug="finance-news-cips-vs-swift-yuan-hormuz-petroyuan-dollar-rails-2026" />;
}
