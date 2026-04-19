import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/meta/news/meta-broadcom-mtia-chip-partnership-2029-hock-tan';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1678957949479-b1e876bee3f1?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Meta Broadcom MTIA Chip Deal | $2.3B, 2nm Silicon, Extended to 2029',
  description: 'Meta and Broadcom extend their custom AI chip partnership to 2029, covering four MTIA chip generations, $2.3B in 2025 payments, a 1-gigawatt compute commitment, and a 2nm MTIA 500 breakthrough. Hock Tan steps off Meta board.',
  keywords: [
    'Meta Broadcom partnership 2029',
    'Meta MTIA chip Broadcom',
    'Meta custom AI chip 2026',
    'MTIA 500 2nm chip',
    'Broadcom XPU Meta',
    'Meta $2.3 billion Broadcom 2025',
    'Hock Tan Meta board',
    'Meta AI infrastructure 2026',
    'MTIA 400 generative AI inference',
    'Meta RISC-V AI accelerator',
    'Broadcom CoWoS packaging',
    'Meta $135 billion capex 2026',
    'TSMC 2nm Meta chip',
    'Meta AI chip vs Nvidia',
    'Broadcom custom silicon AI',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Meta & Broadcom | $2.3B Custom AI Chip Deal Extended to 2029, 2nm MTIA 500 Confirmed',
    description: 'Four MTIA chip generations. 1 gigawatt compute commitment. $115B-$135B capex. Hock Tan exits Meta board. The full scope of the most ambitious custom silicon roadmap outside of Apple.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Brenen'],
    publishedTime: '2026-04-19T00:00:00Z',
    modifiedTime: '2026-04-19T00:00:00Z',
    section: 'Tech',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'AI semiconductor chip closeup' }],
    tags: ['Meta', 'Broadcom', 'MTIA', 'AI Chips', 'Custom Silicon'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meta paid Broadcom $2.3B in 2025. Now they are locked in to 2029 and a 2nm chip.',
    description: 'Four MTIA generations. 1 gigawatt compute. 25x performance jump. Hock Tan exits Meta board into dedicated advisory role.',
    images: [OG_IMAGE],
  },
};

export default function MetaNewsMetaBroadcomMtiaChipPartnership2029HockTanPage() {
  return <NewsArticleDB slug="meta-news-meta-broadcom-mtia-chip-partnership-2029-hock-tan" />;
}
