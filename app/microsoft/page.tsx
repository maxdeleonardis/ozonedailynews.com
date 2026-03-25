import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Microsoft Corporation â€” Products, News & Analysis | ObjectWire',

  description: "ObjectWire's full coverage hub for Microsoft Corporation â€” Azure, Xbox, Windows, GitHub, LinkedIn, Copilot AI, leadership, history, and all breaking business and technology news.",
  keywords: ['Microsoft', 'Azure', 'Xbox', 'Windows', 'GitHub', 'LinkedIn', 'Satya Nadella', 'Copilot', 'OpenAI', 'cloud computing', 'AI', 'tech news'],
  openGraph: {
    title: 'Microsoft Corporation â€” Products, News & Analysis | ObjectWire',
    description: 'ObjectWire coverage of Microsoft: Azure cloud, Xbox gaming, Windows, GitHub, LinkedIn, Copilot AI, executive leadership, and all breaking news.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/microsoft',
  },
};

export default function MicrosoftHubPage() {
  return <WikiArticle slug="microsoft" />;
}
