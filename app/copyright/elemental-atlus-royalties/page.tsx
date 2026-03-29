import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/copyright/elemental-atlus-royalties';

export const metadata: Metadata = {
  title: 'Elemental Royalty (ELE) Completes Merger, Lists Nasdaq & Offers Tokenized Gold Dividends | ObjectWire',
  description:
    'Elemental Altus Royalties and EMX Royalty completed their merger on November 13, 2025. The merged company now trades as ELE on TSX Venture Exchange and introduced a groundbreaking dividend payable in Tether Gold (XAUT), the first of its kind for a publicly listed gold company.',
  keywords: [
    'Elemental Royalty Corporation',
    'Elemental Altus Royalties',
    'ELE',
    'EMX Royalty',
    'Tether Gold',
    'XAUT',
    'tokenized gold dividend',
    'gold royalty company',
    'TSX Venture Exchange',
    'Tether Investments',
    'ELEMF',
    'gold royalty merger 2025',
    'crypto gold dividend',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/copyright/elemental-atlus-royalties',
  },
  openGraph: {
    title: 'Elemental Royalty Completes Merger & Introduces Tokenized Gold Dividends',
    description:
      'The first publicly listed gold company to pay dividends in tokenized gold. Elemental Royalty (ELE) merged with EMX, raised $100M from Tether Investments, and announced XAUT-denominated quarterly dividends.',
    type: 'article',
    url: 'https://www.objectwire.org/copyright/elemental-atlus-royalties',
    siteName: 'ObjectWire',
    authors: ['ObjectWire Editorial'],
    publishedTime: '2026-02-18T10:00:00Z',
    modifiedTime: '2026-02-18T10:00:00Z',
    section: 'Finance',
    tags: ['Elemental Royalty', 'ELE', 'Tether Gold', 'XAUT', 'Gold Royalty', 'EMX'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elemental Royalty (ELE): Merged, Listed, and Paying Dividends in Tokenized Gold',
    description:
      'Elemental Royalty and EMX completed their merger in Nov 2025. Now they\'re the first public gold company offering dividends in Tether Gold (XAUT). Full breakdown on ObjectWire.',
  },
};

export default function ElementalRoyaltiesPage() {
  return <NewsArticleDB slug="copyright-elemental-atlus-royalties" />;
}
