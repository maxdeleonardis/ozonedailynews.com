import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/google/news/turboquant-llm-kv-cache-compression';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = '/default/pawel-czerwinski-fpZZEV0uQwA-unsplash.jpg';

export const metadata: Metadata = {
  title: 'Google Research Drops "TurboQuant" to Smash LLM Memory Bottleneck | ObjectWire',
  description:
    'Google Research has released TurboQuant, a training-free compression suite that cuts LLM KV cache memory by 6x and delivers up to 8x faster attention computation — eliminating the single greatest obstacle to long-context AI.',
  keywords: [
    'TurboQuant Google Research',
    'LLM KV cache compression',
    'PolarQuant quantization',
    'QJL Quantized Johnson-Lindenstrauss',
    'LLM memory bottleneck',
    'GPU VRAM AI',
    'Google AI research 2026',
    'ICLR 2026 AI',
    'long context LLM',
    'attention speedup AI',
    'training-free quantization',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: 'Google Research Drops "TurboQuant" to Smash LLM Memory Bottleneck',
    description:
      'Google Research\'s TurboQuant compresses LLM KV caches by 6x and speeds up attention by 8x — using a data-oblivious, training-free approach that runs at 3 bits per value with virtually zero accuracy loss.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-25T09:00:00Z',
    modifiedTime: '2026-03-25T09:00:00Z',
    section: 'Technology',
    tags: ['Google', 'AI', 'LLM', 'Quantization', 'KV Cache', 'VRAM', 'TurboQuant', 'ICLR 2026', 'Research'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Google Research Drops "TurboQuant" — 6x Less VRAM, 8x Faster Attention',
    description:
      'A training-free LLM compression breakthrough from Google Research. 3 bits per value, zero accuracy loss, and 8x faster attention — TurboQuant is the memory upgrade long-context AI has been waiting for.',
    images: [IMAGE_URL],
  },
};

export default function TurboQuantArticlePage() {
  return <NewsArticleDB slug="google-news-turboquant-llm-kv-cache-compression" />;
}
