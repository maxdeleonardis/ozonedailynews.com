import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Alfansa — Finance & Markets Reporter | ObjectWire',
  description:
    `Alfansa is a Finance & Markets Reporter and Anime & Gaming Editor at ObjectWire. Covering markets, payments, fintech, My Hero Academia, and gaming culture.`,
  alternates: {
    canonical: 'https://www.objectwire.org/authors/alfansa',
  },
  openGraph: {
    title: 'Alfansa | Finance & Markets Reporter at ObjectWire',
    description:
      'Finance & Markets Reporter and Anime & Gaming Editor at ObjectWire. Covering payments, fintech, markets, MHA, and gaming culture.',
    url: 'https://www.objectwire.org/authors/alfansa',
    siteName: 'ObjectWire',
    type: 'profile',
  },
  twitter: {
    card: 'summary',
    title: 'Alfansa — Finance & Markets Reporter',
    description: 'ObjectWire Finance & Markets Reporter and Anime & Gaming Editor. Covering fintech, payments, MHA, and gaming.',
  },
};

export default function AlfansaAuthorPage() {
  return <WikiArticle slug="authors-alfansa" />;
}
