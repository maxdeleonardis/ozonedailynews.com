import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Difference between HTTP and REST API servers - ObjectWire.org",
  description: "An HTTP server handles requests and responses using the Hypertext Transfer Protocol, the foundation of web communication. It listens for client connections, processes incoming data, and sends back content.",
  alternates: {
    canonical: 'https://www.objectwire.org/difference-between-http-and-rest-api-servers',
  },
};

export default function HttpVsRestApiPage() {
  return <WikiArticle slug="define-difference-between-http-and-rest-api-servers" />;
}
