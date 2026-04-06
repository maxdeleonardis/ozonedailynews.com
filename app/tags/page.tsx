import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'All Topics & Tags',
  description:
    'Browse all topics covered by ObjectWire, technology, gaming, finance, entertainment, sports, and more.',
  alternates: { canonical: 'https://www.objectwire.org/tags' },
  openGraph: {
    title: 'All Topics & Tags',
    description: 'Browse every topic covered by ObjectWire.',
    url: 'https://www.objectwire.org/tags',
    siteName: 'ObjectWire',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All Topics & Tags',
    description: 'Browse every topic covered by ObjectWire.',
  },
};

export default function TagsIndexPage() {
  return <WikiArticle slug="tags" />;
}
