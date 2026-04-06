import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Editorial Standards",
  description: "ObjectWire's editorial standards ensure accuracy, transparency, and accountability in all published content. Learn about our verification process and",
  alternates: {
    canonical: 'https://www.objectwire.org/editorial-standards',
  },
  openGraph: {
    title: "Editorial Standards",
    description: "Our commitment to accuracy, source verification, and transparent journalism.",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Editorial Standards',
    description: 'Our commitment to accuracy, source verification, and transparent journalism.',
  },
};

export default function EditorialStandardsPage() {
  return <WikiArticle slug="editorial-standards" />;
}
