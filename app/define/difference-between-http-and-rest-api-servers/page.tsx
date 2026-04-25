import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Difference between HTTP and REST API servers",
  description: "An HTTP server handles requests and responses using the Hypertext Transfer Protocol, the foundation of web communication. It listens for client",
  alternates: {
    canonical: 'https://www.objectwire.org/difference-between-http-and-rest-api-servers',
  },
  openGraph: {
    title: "Difference between HTTP and REST API servers",
    description: "An HTTP server handles requests and responses using the Hypertext Transfer Protocol, the foundation of web communication. It listens for client",
    type: 'article',
    url: "https://www.objectwire.org/difference-between-http-and-rest-api-servers",
    siteName: 'ObjectWire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Difference between HTTP and REST API servers",
    description: "An HTTP server handles requests and responses using the Hypertext Transfer Protocol, the foundation of web communication. It listens for client",
  },
};

export default function HttpVsRestApiPage() {
  return <WikiArticle slug="define-difference-between-http-and-rest-api-servers" />;
}
