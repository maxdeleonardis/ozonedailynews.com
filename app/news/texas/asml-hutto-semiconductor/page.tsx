import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Semiconductor Supplier ASML to Open in Hutto Co-Op District, Texas | ObjectWire",
  description: "Dutch semiconductor equipment giant ASML announces new facility in Hutto's Co-Op District, bringing advanced chip manufacturing technology and jobs to Central Texas.",
  keywords: ["ASML", "semiconductor", "Hutto Texas", "Co-Op District", "chip manufacturing", "EUV lithography", "Austin tech corridor", "semiconductor jobs"],
  alternates: {
    canonical: 'https://www.objectwire.org/semiconductor-supplier-asml-to-open-in-hutto-co-op-district',
  },
};

export default function ASMLHuttoPage() {
  return <WikiArticle slug="news-texas-asml-hutto-semiconductor" />;
}
