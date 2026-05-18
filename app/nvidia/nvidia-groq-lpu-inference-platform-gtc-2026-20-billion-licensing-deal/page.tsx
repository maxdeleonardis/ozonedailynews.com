import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.


const SLUG =
  '/nvidia/nvidia-groq-lpu-inference-platform-gtc-2026-20-billion-licensing-deal';
const ARTICLE_URL = `https://www.ozonenetwork.news${SLUG}`;
const IMAGE_URL =
  'https://www.ozonenetwork.news/nvidia/nvidia-groq-lpu-inference-gtc-2026.jpg';

export const metadata: Metadata = {
  title:
    'Nvidia Plans Groq-Integrated Inference Processor Unveil',
  description:
    "Nvidia will introduce a new AI inference processor platform at GTC 2026 in San Jose, built on Groq's Language Processing Unit architecture under a $20",
  keywords: [
    'Nvidia GTC 2026 inference processor announcement',
    'Nvidia Groq LPU licensing deal $20 billion',
    'Groq LPX inference platform GTC 2026',
    'Nvidia inference hardware Groq acquisition 2025',
    'Jonathan Ross Groq Nvidia hire',
    'OpenAI 3GW inference capacity Nvidia Groq',
    'LPU language processing unit deterministic inference',
    'Nvidia stock GTC 2026 March',
    'AI inference vs training hardware market 2026',
    'Groq GroqCloud independent operations 2026',
    'Nvidia Groq RealScale ASIC tiles LPX rack',
    'Cerebras SambaNova inference competitors Nvidia',
    'Nvidia Groq deal December 24 2025',
    'Rubin GPU GTC 2026 Nvidia',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title:
      "Nvidia to Unveil Groq-Powered Inference Platform at GTC 2026, $20B Deal, OpenAI's 3GW Commitment",
    description:
      "Nvidia licensed Groq's full LPU patent portfolio and hired founder Jonathan Ross on December 24, 2025 for $20 billion. The result debuts at GTC 2026 in",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'OzoneNews',
    images: [IMAGE_URL],
    publishedTime: '2026-03-01T20:00:00Z',
    modifiedTime: '2026-03-01T22:00:00Z',
    section: 'Technology',
    tags: [
      'Nvidia',
      'Groq',
      'LPU',
      'LPX',
      'GTC 2026',
      'AI Inference',
      'OpenAI',
      'Jonathan Ross',
      'Hardware',
      'Technology',
      'AI Chips',
      'Semiconductor',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      "Nvidia's $20B Groq Deal Debuts at GTC 2026: A Dedicated AI Inference Platform, OpenAI Commits 3GW",
    description:
      "Nvidia licensed Groq's LPU architecture on December 24, 2025 for $20B and hired founder Jonathan Ross. The new LPX inference platform unveils at GTC 2026.",
    images: [IMAGE_URL],
  },
};

export default function NvidiaGroqGTC2026Page() {
  return <JackArticleDB slug="nvidia-nvidia-groq-lpu-inference-platform-gtc-2026-20-billion-licensing-deal" />;
}
