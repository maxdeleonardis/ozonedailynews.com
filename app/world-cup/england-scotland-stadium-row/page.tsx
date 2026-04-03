import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "England and Scotland World Cup Stadium Row | ObjectWire",
  description: "Home nations face potential last-minute venue changes as £6 million dispute threatens FIFA World Cup 2026 preparations.",
  keywords: ["World Cup 2026", "England", "Scotland", "FIFA", "Stadium", "Wembley", "Glasgow"],
  authors: [{ name: "ObjectWire Editorial Team" }],
  alternates: {
    canonical: 'https://www.objectwire.org/world-cup/england-scotland-stadium-row',
  },
};

export default function EnglandScotlandStadiumRowPage() {
  return <WikiArticle slug="world-cup-england-scotland-stadium-row" />;
}
