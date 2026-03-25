import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "The Walt Disney Company - Entertainment Conglomerate | ObjectWire",
  description: "Comprehensive profile of The Walt Disney Company, the world's largest entertainment conglomerate. History, business segments, leadership, theme parks, streaming, and corporate developments.",
  alternates: {
    canonical: 'https://www.objectwire.org/disney',
  },
  keywords: ['Disney', 'Walt Disney Company', 'Disney Parks', 'Disney+', 'Bob Iger', 'Josh D\'Amaro', 'Marvel', 'Pixar', 'Star Wars', 'ESPN'],
};

export default function DisneyWikiPage() {
  return <WikiArticle slug="disney" />;
}
