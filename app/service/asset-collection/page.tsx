import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Photography and Videography as a Service - ObjectWire.org",
  description: "At Objective Wire, we specialize in professional photography and videography services designed for investigative, legal, and private documentation purposes.",
  alternates: {
    canonical: 'https://www.objectwire.org/asset-collection',
  },
};

export default function AssetCollectionPage() {
  return <WikiArticle slug="service-asset-collection" />;
}
