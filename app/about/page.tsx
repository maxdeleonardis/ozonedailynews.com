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
  openGraph: {
    title: "About ObjectWire",
    description: "Learn about ObjectWire",
    type: 'article',
    url: "https://www.objectwire.org/about",
    siteName: 'ObjectWire',
    section: "About",
  },
  twitter: {
    card: 'summary_large_image',
    title: "About ObjectWire",
    description: "Learn about ObjectWire",
  },
};

export default function AboutPage() {
  return <WikiArticle slug="about" />;
}
