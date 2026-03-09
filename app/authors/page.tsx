import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Authors & Contributors | ObjectWire',
  description:
    'Meet the journalists, reporters, and editors behind ObjectWire — covering finance, markets, science, technology, anime, gaming, investigations, and breaking news.',
  alternates: {
    canonical: 'https://www.objectwire.org/authors',
  },
  openGraph: {
    title: 'ObjectWire Authors & Contributors',
    description:
      'Meet the journalists and editors behind ObjectWire — finance, markets, science, technology, anime, gaming, and breaking news.',
    url: 'https://www.objectwire.org/authors',
    siteName: 'ObjectWire',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'ObjectWire Authors & Contributors',
    description: 'Meet the journalists and editors behind ObjectWire.',
  },
};

export default function AuthorsPage() {
  return <WikiArticle slug="authors" />;
}
