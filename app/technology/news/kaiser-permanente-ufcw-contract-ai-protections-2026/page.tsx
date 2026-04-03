import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/technology/news/kaiser-permanente-ufcw-contract-ai-protections-2026';
const OG_IMAGE = 'https://images.unsplash.com/photo-1676286168358-9b4ce60384d4?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Kaiser Permanente Workers Ratify Contract with AI Protections | ObjectWire',
  description:
    'More than 4,000 Kaiser Permanente pharmacy and lab workers ratified a four-year UFCW contract with AI safeguards and up to 30% wage increases through March 2030.',
  keywords: [
    'Kaiser Permanente UFCW contract 2026',
    'Kaiser Permanente AI protections workers',
    'UFCW Kaiser Permanente ratify',
    'healthcare workers AI contract',
    'Kaiser Permanente wage increase 2026',
    'pharmacy lab technicians contract',
    'Kaiser Permanente strike 2026',
    'healthcare labor AI safeguards',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    type: 'article',
    title: 'Kaiser Permanente Workers Ratify Contract with AI Protections | ObjectWire',
    description:
      'More than 4,000 Kaiser Permanente pharmacy and lab workers in Southern and Central California ratified a four-year UFCW contract that includes AI job protections and up to 30% in total compensation increases.',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Healthcare workers in a hospital setting' }],
    publishedTime: '2026-03-30T14:00:00Z',
    modifiedTime: '2026-03-30T14:00:00Z',
    section: 'Technology',
    tags: ['Kaiser Permanente', 'UFCW', 'AI', 'Labor', 'Healthcare', 'Contract', 'California'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kaiser Permanente Workers Ratify Contract with AI Protections',
    description:
      'More than 4,000 pharmacy and lab workers ratified a UFCW contract with AI safeguards and up to 30% wage increases through March 2030.',
    images: [OG_IMAGE],
  },
};

export default function TechnologyNewsKaiserPermanenteUfcwContractAiProtections2026Page() {
  return <NewsArticleDB slug="technology-news-kaiser-permanente-ufcw-contract-ai-protections-2026" />;
}
