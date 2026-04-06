import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "NestJS vs Next.js vs Express | How they work together | ObjectWire.org",
  description: "Use NestJS when building large, maintainable backends or microservices where structure matters. Use Next.js when building high-performance React",
  alternates: {
    canonical: 'https://www.objectwire.org/define/nestjs-vs-nextjs-express',
  },
};

export default function NestJsVsNextJsPage() {
  return <WikiArticle slug="define-nestjs-vs-nextjs-express" />;
}
