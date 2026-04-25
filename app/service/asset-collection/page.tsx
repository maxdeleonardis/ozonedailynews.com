import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Photography and Videography as a Service",
  description: "At Objective Wire, we specialize in professional photography and videography services designed for investigative, legal, and private documentation",
  alternates: {
    canonical: 'https://www.objectwire.org/asset-collection',
  },
  openGraph: {
    title: "Photography and Videography as a Service",
    description: "At Objective Wire, we specialize in professional photography and videography services designed for investigative, legal, and private documentation",
    type: 'article',
    url: "https://www.objectwire.org/asset-collection",
    siteName: 'ObjectWire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Photography and Videography as a Service",
    description: "At Objective Wire, we specialize in professional photography and videography services designed for investigative, legal, and private documentation",
  },
};

export default function AssetCollectionPage() {
  return <WikiArticle slug="service-asset-collection" />;
}
