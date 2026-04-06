import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Xbox | Microsoft Gaming Hub: Consoles, Game Pass & News',
  description:
    'ObjectWire\'s Xbox hub: Xbox Series X|S, Game Pass, Activision Blizzard, Xbox Cloud Gaming, and all news and analysis covering Microsoft\'s gaming',
  keywords: [
    'Xbox news 2026',
    'Xbox Series X',
    'Xbox Series S',
    'Xbox Game Pass',
    'Microsoft Gaming',
    'Activision Blizzard Xbox',
    'Xbox Cloud Gaming',
    'Phil Spencer',
    'Xbox exclusives 2026',
    'Call of Duty Xbox',
    'Halo Xbox',
    'Xbox hardware',
    'Game Pass Ultimate',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/microsoft/xbox',
  },
  openGraph: {
    title: 'Xbox | Microsoft Gaming Hub',
    description:
      'Full Xbox coverage: Series X|S hardware, Game Pass, Activision Blizzard titles, cloud gaming, and all breaking Microsoft gaming news.',
    type: 'website',
    url: 'https://www.objectwire.org/microsoft/xbox',
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xbox | Microsoft Gaming Hub',
    description: 'Full Xbox coverage: Series X|S hardware, Game Pass, Activision Blizzard titles, cloud gaming, and all breaking Microsoft gaming news.',
  },
};

export default function XboxHubPage() {
  return <WikiArticle slug="microsoft-xbox" />;
}
