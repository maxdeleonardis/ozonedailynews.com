import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Tech | AI, Software, Hardware & Innovation 2026',
  description: 'ObjectWire technology hub covering AI, cloud computing, software, hardware, and cybersecurity. Investigative tech reporting from primary sources.',
  keywords: [
    'tech news',
    'AI news 2026',
    'artificial intelligence',
    'cloud computing',
    'software news',
    'hardware news',
    'cybersecurity',
    'semiconductor news',
    'startup news',
    'big tech',
    'innovation',
    'technology trends',
  ],
  openGraph: {
    title: 'Tech | AI, Software, Hardware & Innovation 2026',
    description: 'ObjectWire tech coverage: AI, cloud, software, hardware, cybersecurity, and startup news from primary sources.',
    type: 'website',
    url: 'https://www.objectwire.org/tech',
    siteName: 'ObjectWire',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/tech',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tech | AI, Software, Hardware & Innovation',
    description: 'ObjectWire tech hub: AI breakthroughs, cloud, software, hardware, and cybersecurity news.',
  },
};

export default function TechPage() {
  return <WikiArticle slug="tech" />;
}
