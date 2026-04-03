import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "About ObjectWire",
  description: "Learn about ObjectWire's mission to deliver precision intelligence through verified, source-cited reporting.",
  alternates: {
    canonical: 'https://www.objectwire.org/about',
  },
};

export default function AboutPage() {
  return <WikiArticle slug="about" />;
}
