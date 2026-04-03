import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Novartis: Swiss Pharmaceutical Company Profile & History | ObjectWire',
  description: 'Complete profile of Novartis AG, one of the world\'s largest pharmaceutical companies. Founded 1996, specializing in cardiovascular, oncology, and immunology drugs with $49B annual revenue.',
  keywords: [
    'Novartis',
    'Novartis AG',
    'Swiss pharmaceutical company',
    'Entresto',
    'cardiovascular drugs',
    'oncology drugs',
    'Novartis history',
    'pharmaceutical industry',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/novartis',
  },
  openGraph: {
    title: 'Novartis: Swiss Pharmaceutical Company Profile & History',
    description: 'Complete profile of Novartis AG, one of the world\'s largest pharmaceutical companies.',
    type: 'article',
    url: 'https://www.objectwire.org/novartis',
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Novartis: Swiss Pharmaceutical Company Profile',
    description: 'One of the world\'s largest pharmaceutical companies specializing in innovative medicines.',
  },
};

export default function NovartisPage() {
  return <WikiArticle slug="saas-novartis" />;
}
