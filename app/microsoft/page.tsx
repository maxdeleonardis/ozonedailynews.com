import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Microsoft | Azure, Xbox, Windows, Copilot AI News 2026',
  description: "ObjectWire's full coverage hub for Microsoft Corporation. Azure, Xbox, Windows, GitHub, LinkedIn, Copilot AI, Satya Nadella, and all breaking business and",
  keywords: ['Microsoft', 'Azure', 'Xbox', 'Windows', 'GitHub', 'LinkedIn', 'Satya Nadella', 'Copilot AI', 'OpenAI', 'cloud computing', 'AI news', 'tech news'],
  openGraph: {
    title: 'Microsoft | Azure, Xbox, Windows, Copilot AI News 2026',
    description: 'ObjectWire coverage of Microsoft: Azure cloud, Xbox gaming, Windows, GitHub, LinkedIn, Copilot AI, executive leadership, and all breaking news.',
    type: 'website',
    url: 'https://www.objectwire.org/microsoft',
    siteName: 'ObjectWire',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/microsoft',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Microsoft | Azure, Xbox, Windows, Copilot AI',
    description: 'Breaking Microsoft news: Azure, Xbox, Windows 11, GitHub Copilot, Satya Nadella, and OpenAI partnership.',
  },
};

export default function MicrosoftHubPage() {
  return <WikiArticle slug="microsoft" />;
}
