import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Our Authors | Editorial Standards",
  description: "Objectwire.org is a beacon of truth in a crowded digital landscape, driven by our exceptional team of journalists, analysts, and contributors.",
  alternates: {
    canonical: 'https://www.objectwire.org/editorial-standards/authors',
  },
  openGraph: {
    title: "Our Authors | Editorial Standards",
    description: "Objectwire.org is a beacon of truth in a crowded digital landscape, driven by our exceptional team of journalists, analysts, and contributors.",
    type: 'article',
    url: "https://www.objectwire.org/editorial-standards/authors",
    siteName: 'ObjectWire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Our Authors | Editorial Standards",
    description: "Objectwire.org is a beacon of truth in a crowded digital landscape, driven by our exceptional team of journalists, analysts, and contributors.",
  },
};

export default function AuthorsPage() {
  return <WikiArticle slug="editorial-standards-authors" />;
}
