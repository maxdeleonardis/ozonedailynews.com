import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Semiconductor Supplier ASML to Open in Hutto Co-Op",
  description: "Dutch semiconductor equipment giant ASML announces new facility in Hutto's Co-Op District, bringing advanced chip manufacturing technology and jobs to",
  keywords: ["ASML", "semiconductor", "Hutto Texas", "Co-Op District", "chip manufacturing", "EUV lithography", "Austin tech corridor", "semiconductor jobs"],
  alternates: {
    canonical: 'https://www.objectwire.org/semiconductor-supplier-asml-to-open-in-hutto-co-op-district',
  },
  openGraph: {
    title: "Semiconductor Supplier ASML to Open in Hutto Co-Op",
    description: "Dutch semiconductor equipment giant ASML announces new facility in Hutto",
    type: 'article',
    url: "https://www.objectwire.org/semiconductor-supplier-asml-to-open-in-hutto-co-op-district",
    siteName: 'ObjectWire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Semiconductor Supplier ASML to Open in Hutto Co-Op",
    description: "Dutch semiconductor equipment giant ASML announces new facility in Hutto",
  },
};

export default function ASMLHuttoPage() {
  return <WikiArticle slug="news-texas-asml-hutto-semiconductor" />;
}
