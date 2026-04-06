import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'NGO Investigations | Nonprofits, Foundations, Dark Money',
  description: 'ObjectWire investigates nonprofits, 501(c) entities, charitable foundations, and NGO accountability. Following the money, examining transparency.',
  keywords: [
    'NGO investigations',
    'nonprofit accountability',
    '501c3 organizations',
    '501c4 organizations',
    'charity watchdog',
    'foundation transparency',
    'nonprofit journalism',
    'dark money',
    'NGO watchdog',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/ngos',
  },
  openGraph: {
    type: 'website',
    title: 'NGO Investigations | Nonprofits, Foundations, Dark Money',
    description: 'ObjectWire investigative reporting on nonprofits, foundations, 501(c) entities, and NGO accountability.',
    url: 'https://www.objectwire.org/ngos',
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NGO Investigations | Nonprofits, Foundations, Dark Money',
    description: 'ObjectWire investigates nonprofits, 501(c) entities, foundations, and NGO accountability. Following the money.',
  },
};

export default function NGOsPage() {
  return <WikiArticle slug="ngos" />;
}
