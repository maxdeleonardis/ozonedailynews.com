import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

const SLUG = '/microsoft';

export const metadata: Metadata = {
  title: 'Microsoft News | Azure, AI & Xbox 2026',
  description: 'Latest Microsoft news: Azure AI, Copilot, Xbox, and enterprise software. Verified reporting from ObjectWire.',
  alternates: { canonical: `https://www.objectwire.org${SLUG}` },
  openGraph: {
    title: 'Microsoft News | Azure, AI & Xbox 2026',
    description: 'Latest Microsoft news: Azure AI, Copilot, Xbox, and enterprise software. Verified reporting from ObjectWire.',
    type: 'website',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Microsoft News | Azure, AI & Xbox 2026',
    description: 'Latest Microsoft news: Azure AI, Copilot, Xbox, and enterprise software. Verified reporting from ObjectWire.',
  },
};

export default function Page() {
  return <ArticlePageDB slug="microsoft" />;
}
