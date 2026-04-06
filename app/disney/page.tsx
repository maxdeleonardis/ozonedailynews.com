import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Disney | Parks, Streaming, Marvel, Star Wars & ESPN',
  description: 'ObjectWire coverage of the Walt Disney Company. Theme parks, Disney+, Marvel, Star Wars, Pixar, ESPN, Bob Iger, and corporate news.',
  alternates: {
    canonical: 'https://www.objectwire.org/disney',
  },
  keywords: ['Disney', 'Walt Disney Company', 'Disney Parks', 'Disney+', 'Bob Iger', "Josh D'Amaro", 'Marvel', 'Pixar', 'Star Wars', 'ESPN'],
  openGraph: {
    title: 'Disney | Parks, Streaming, Marvel, Star Wars & ESPN',
    description: 'ObjectWire Disney coverage: theme parks, Disney+, Marvel, Star Wars, Pixar, ESPN, and Bob Iger leadership news.',
    type: 'website',
    url: 'https://www.objectwire.org/disney',
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Disney | Parks, Marvel, Star Wars, ESPN & Disney+',
    description: 'ObjectWire Disney hub: theme parks, Disney+, Marvel, Star Wars, Pixar, ESPN, and Bob Iger news.',
  },
};

export default function DisneyWikiPage() {
  return <WikiArticle slug="disney" />;
}
