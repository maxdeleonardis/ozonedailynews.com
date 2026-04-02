import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/microsoft/news/nvidia-groq-inference-processor-gtc-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = '';

export const metadata: Metadata = {
  title: 'Nvidia Groq LPU Deal | $20B Inference Chip at GTC 2026',
  description:
    'Nvidia acquired Groq LPU technology for $20 billion in December 2025. New LPX inference platform targets 64-256 LPUs per rack. OpenAI committed 3GW capacity.',
  keywords: [
    'Nvidia Groq $20 billion licensing deal',
    'Groq LPU inference processor',
    'Nvidia GTC 2026 inference chip',
    'LPX inference platform specs',
    'OpenAI 3GW inference capacity Nvidia',
    'Groq Language Processing Unit architecture',
    'Jonathan Ross Groq founder Nvidia',
    'Nvidia inference vs training hardware',
    'deterministic execution SRAM inference chip',
    'Groq 10000 tokens per second demo',
    'Nvidia Mellanox acquisition parallel',
    'Cerebras SambaNova inference competition',
    'Nvidia stock decline Q4 earnings 2025',
    'GroqCloud independent operations',
    'AI inference hardware market 2026',
    'LPU RealScale ASIC tile architecture',
    'Nvidia Blackwell vs LPX inference',
    'agentic AI real-time inference latency',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: 'Nvidia Groq LPU Deal | $20B Inference Chip at GTC 2026',
    description:
      'Nvidia acquired Groq LPU technology for $20B. LPX inference platform with 64-256 LPUs per rack unveiled at GTC 2026. OpenAI committed 3GW.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Technology Desk'],
    publishedTime: '2026-03-05T10:00:00Z',
    modifiedTime: '2026-04-01T10:00:00Z',
    section: 'Tech',
    tags: ['Nvidia', 'Groq', 'GTC 2026', 'LPU', 'AI Inference', 'OpenAI', 'Jensen Huang'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nvidia Acquires Groq LPU for $20B | New Inference Chip at GTC 2026',
    description:
      'LPX platform targets 64-256 LPUs per rack. OpenAI commits 3GW. The biggest inference hardware shift since Nvidia bought Mellanox.',
  },
};

export default function MicrosoftNewsNvidiaGroqInferenceProcessorGtc2026Page() {
  return <NewsArticleDB slug="microsoft-news-nvidia-groq-inference-processor-gtc-2026" />;
}
