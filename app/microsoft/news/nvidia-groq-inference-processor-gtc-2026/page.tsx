import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/microsoft/news/nvidia-groq-inference-processor-gtc-2026';

export const metadata: Metadata = {
  title: 'Nvidia Plans Groq-Integrated Inference Processor Unveil at GTC 2026 Following $20 Billion Deal | ObjectWire',
  description: 'Nvidia will introduce a new inference processor platform at GTC 2026 incorporating Groq LPU technology from a $20 billion licensing deal. OpenAI committed 3GW of dedicated inference capacity.',
  keywords: ['Nvidia Groq inference processor', 'GTC 2026 Nvidia', 'Groq LPU technology', 'Nvidia $20 billion Groq deal', 'AI inference hardware', 'LPX inference platform', 'OpenAI inference capacity', 'Nvidia GTC March 2026', 'Jonathan Ross Groq'],
  alternates: { canonical: `https://www.objectwire.org${SLUG}` },
  openGraph: {
    title: 'Nvidia Plans Groq-Integrated Inference Processor at GTC 2026',
    description: 'New platform incorporates Groq LPU architecture from $20B licensing deal. OpenAI committed 3GW inference capacity.',
    type: 'article', url: `https://www.objectwire.org${SLUG}`, siteName: 'ObjectWire',
    authors: ['ObjectWire Technology Desk'], publishedTime: '2026-03-05T10:00:00Z', modifiedTime: '2026-03-05T10:00:00Z',
    section: 'Technology', tags: ['Nvidia', 'Groq', 'GTC', 'AI Inference', 'LPU'],
  },
  twitter: { card: 'summary_large_image', title: 'Nvidia Unveiling Groq-Powered Inference Chip at GTC 2026', description: '$20B Groq deal yields new inference platform. OpenAI commits 3GW capacity.' },
};

export default function NvidiaGroqGTCPage() {
  return <NewsArticleDB slug="microsoft-news-nvidia-groq-inference-processor-gtc-2026" />;
}
