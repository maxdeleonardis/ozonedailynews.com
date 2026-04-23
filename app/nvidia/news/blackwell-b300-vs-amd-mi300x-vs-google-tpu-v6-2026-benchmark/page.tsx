import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/nvidia/news/blackwell-b300-vs-amd-mi300x-vs-google-tpu-v6-2026-benchmark';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'B300 vs MI300X vs TPU v6 | 2026 AI Chip Comparison',
  description:
    'Nvidia Blackwell B300 vs AMD MI300X vs Google TPU v6 Trillium compared on PFLOPS, VRAM, bandwidth, power, and cost per token for training and inference in',
  keywords: [
    'Nvidia Blackwell B300 vs AMD MI300X benchmark',
    'B300 vs TPU v6 Trillium comparison',
    'AMD MI300X vs Google TPU v6 2026',
    'DGX B300 144 PFLOPS FP4 specs',
    'MI300X 192GB HBM3 inference',
    'TPU v6 Trillium 4.7x compute improvement',
    'AI chip comparison 2026 training inference',
    'Blackwell Ultra SXM specifications',
    'MI300X 5.3 TB/s memory bandwidth',
    'TPU v6 67 percent energy efficient',
    'AI accelerator cost per token 2026',
    'best GPU for LLM training 2026',
    'best chip for AI inference 2026',
    'DGX B300 vs MI300X VRAM comparison',
    'Google Trillium vs Nvidia H200',
    'MLPerf inference benchmark 2026',
    'AI chip power consumption watts per PFLOP',
    'enterprise AI hardware buying guide 2026',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: 'B300 vs MI300X vs TPU v6 | 2026 AI Chip Comparison',
    description:
      'Head-to-head comparison of Nvidia Blackwell B300, AMD MI300X, and Google TPU v6 Trillium on specs, workloads, and cost for AI training and inference.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Technology Desk'],
    publishedTime: '2026-04-01T10:00:00Z',
    modifiedTime: '2026-04-01T10:00:00Z',
    section: 'Tech',
    tags: ['Nvidia', 'AMD', 'Google', 'Blackwell B300', 'MI300X', 'TPU v6', 'AI Chips', 'Benchmark'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'B300 vs MI300X vs TPU v6 | Which AI Chip Wins in 2026?',
    description:
      '144 PFLOPS FP4 vs 192 GB VRAM vs 4.7x efficiency. Nvidia, AMD, and Google compared on the metrics that matter for training and inference.',
  },
};

export default function NvidiaNewsBlackwellB300VsAmdMi300xVsGoogleTpuV62026BenchmarkPage() {
  return <NewsArticleDB slug="nvidia-news-blackwell-b300-vs-amd-mi300x-vs-google-tpu-v6-2026-benchmark" />;
}
