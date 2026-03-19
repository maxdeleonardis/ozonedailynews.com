import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Jack Sterling — Journalist & Reporter | ObjectWire',
  description:
    `Jack Sterling is a journalist and reporter at ObjectWire. published articles covering breaking news, investigations, politics, and general assignment reporting.`,
  alternates: {
    canonical: 'https://www.objectwire.org/authors/jack-sterling',
  },
  openGraph: {
    title: 'Jack Sterling | Journalist at ObjectWire',
    description:
      'Breaking news, investigations, and general assignment reporting at ObjectWire.',
    url: 'https://www.objectwire.org/authors/jack-sterling',
    siteName: 'ObjectWire',
    type: 'profile',
  },
  twitter: {
    card: 'summary',
    title: 'Jack Sterling — Journalist',
    description: 'ObjectWire journalist. Breaking news, investigations, general assignment.',
  },
};

export default function JackSterlingAuthorPage() {
  return <WikiArticle slug="authors-jack-sterling" />;
}
