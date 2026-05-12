import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/nvidia/gpus/rtx-50-blackwell-review';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE =
  'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'NVIDIA RTX 50 Series Review 2026 | Blackwell, DLSS 4, Performance Verdict',
  description:
    'Full review of the NVIDIA GeForce RTX 50 Series Blackwell architecture in 2026. RTX 5090, 5080, 5070 Ti, 5070, 5060 Ti benchmarks, DLSS 4 Multi Frame Generation analysis, power draw, and value verdict across all tiers.',
  keywords: [
    'NVIDIA RTX 50 Series review 2026',
    'RTX 5090 review',
    'RTX 5080 review',
    'RTX 5070 Ti review',
    'RTX 5060 Ti review',
    'Blackwell GPU architecture 2026',
    'DLSS 4 Multi Frame Generation',
    'RTX 5090 benchmarks',
    'RTX 5090 vs RTX 4090',
    'NVIDIA GeForce Blackwell GDDR7',
    'RTX 50 Series VRAM bandwidth',
    'RTX 50 Series power draw TDP',
    'NVIDIA neural rendering 2026',
    'best GPU for 4K gaming 2026',
    'RTX 5080 value 2026',
    'NVIDIA RTX 5090 32GB GDDR7',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'NVIDIA RTX 50 Series Review 2026 | Blackwell Architecture Full Verdict',
    description:
      'RTX 5090 hits 2x RTX 4090 in ray tracing and AI workloads. DLSS 4 Multi Frame Generation doubles frame rates. Full tier-by-tier verdict on the Blackwell GPU lineup for 2026.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-05-11T22:00:00Z',
    modifiedTime: '2026-05-11T22:00:00Z',
    section: 'Tech',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'NVIDIA RTX 50 Series Blackwell GPU 2026 review' }],
    tags: ['NVIDIA', 'RTX 50 Series', 'Blackwell', 'GPU Review', 'DLSS 4'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NVIDIA RTX 50 Series Review | 5090 hits 2x 4090, DLSS 4 changes the equation',
    description: 'Full Blackwell GPU lineup verdict: RTX 5090 to 5060 Ti. DLSS 4 MFG, ray tracing, 4K benchmarks, power draw, value by tier.',
    images: [OG_IMAGE],
  },
};

export default function RTX50BlackwellReviewPage() {
  return <JackArticleDB slug="nvidia-gpus-rtx-50-blackwell-review" />;
}
