import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/nvidia/news/nvidia-blackwell-b300-data-center-demand-surge-2026';
const FULL_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = '/nvidia/nvidia-blackwell-b300-datacenter.jpg';

export const metadata: Metadata = {
  title: "NVIDIA\u2019s Blackwell B300 Demand Has \u2018Completely Broken\u2019 Data Center Planning Models | ObjectWire",
  description:
    "Hyperscalers are ordering NVIDIA\u2019s Blackwell B300 GPUs at a pace that has left data center operators scrambling. Lead times have stretched to 52 weeks, colocation capacity is sold out through 2027, and power grid planners are calling it a \u2018once-in-a-generation infrastructure shock.\u2019",
  keywords: [
    'NVIDIA Blackwell B300 demand 2026',
    'NVIDIA B300 GPU data center',
    'Blackwell architecture GPU shortage',
    'hyperscaler GPU orders 2026',
    'data center power demand AI 2026',
    'NVIDIA GB300 NVL72 supply',
    'AI chip shortage 2026',
    'NVIDIA data center revenue 2026',
    'cloud GPU capacity AI 2026',
    'NVIDIA Jensen Huang Blackwell',
  ],
  alternates: { canonical: FULL_URL },
  openGraph: {
    title: "NVIDIA\u2019s Blackwell B300 Demand Has \u2018Completely Broken\u2019 Data Center Planning Models",
    description:
      "52-week lead times. Colocation sold out through 2027. Power grids overwhelmed. The Blackwell B300 GPU demand spike is the biggest infrastructure shock the data center industry has ever seen.",
    type: 'article',
    url: FULL_URL,
    siteName: 'ObjectWire',
    images: [{ url: IMAGE_URL }],
    publishedTime: '2026-03-25T14:00:00Z',
    modifiedTime: '2026-03-25T14:00:00Z',
    section: 'Technology',
    tags: ['NVIDIA', 'AI', 'Data Centers', 'Blackwell', 'GPU'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "NVIDIA B300 Demand Has \u2018Broken\u2019 Data Center Planning Models",
    description:
      "52-week lead times, colocation sold out through 2027, power grids maxed. The Blackwell B300 wave is rewriting how the world builds compute infrastructure.",
  },
};

export default function NvidiaBlackwellB300DataCenterDemandSurge2026Page() {
  return <NewsArticleDB slug="nvidia-news-nvidia-blackwell-b300-data-center-demand-surge-2026" />;
}
