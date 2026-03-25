import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Apple Inc. - Company Overview, Products, and Latest News | ObjectWire',
  description: 'Comprehensive overview of Apple Inc., the American multinational technology company. Explore Apple\'s history, products, services, leadership, and latest developments.',
  keywords: [
    'Apple Inc',
    'Apple company',
    'Tim Cook',
    'iPhone',
    'Mac',
    'iPad',
    'Apple Watch',
    'Apple technology',
    'AAPL stock',
    'Cupertino',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/apple',
  },
  openGraph: {
    type: 'article',
    title: 'Apple Inc. - Company Profile',
    description: 'Comprehensive overview of Apple Inc., covering products, services, leadership, and latest news.',
    publishedTime: '2026-01-30T15:00:00Z',
    section: 'Technology',
    tags: ['Apple', 'Technology', 'Company Profile', 'Consumer Electronics'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apple Inc. - Company Profile',
    description: 'Complete guide to Apple: products, services, and latest developments.',
  },
};

export default function AppleCompanyPage() {
  return <WikiArticle slug="apple" />;
}
