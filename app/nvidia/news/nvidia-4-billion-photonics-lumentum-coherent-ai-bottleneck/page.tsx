import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';
// Page renders dynamically — content fetched from Supabase at request time.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Nvidia Invests $4 Billion in Photonics | Lumentum & Coherent Deal to Solve AI Bottlenecks | ObjectWire',
  description: 'Nvidia announced a $4 billion investment into silicon photonics leaders Lumentum and Coherent on March 2, 2026, aiming to replace copper interconnects with light-based data links to eliminate AI data center bottlenecks.',
  keywords: ['Nvidia photonics investment $4 billion','Nvidia Lumentum Coherent deal 2026','silicon photonics AI data center','Nvidia copper interconnect bottleneck','co-packaged optics Nvidia GPUs','Lumentum 1.6T laser Nvidia','Coherent Nvidia photonics partnership','AI data center optical interconnect','Nvidia scale-out networking photonics','optical transceiver GPU data center','Nvidia $2 billion Lumentum investment','Nvidia $2 billion Coherent investment','silicon photonics semiconductor 2026','AI bottleneck copper vs fiber optics','Nvidia AI factory networking'],
  alternates: { canonical: 'https://www.objectwire.org/nvidia/news/nvidia-4-billion-photonics-lumentum-coherent-ai-bottleneck' },
  openGraph: {
    title: 'Nvidia Pours $4B into Photonics to Shatter AI Bottlenecks | Lumentum & Coherent',
    description: 'Nvidia splits $4 billion equally between Lumentum and Coherent, securing capacity rights for next-gen 1.6T lasers and co-packaged optics to replace copper in AI data centers.',
    type: 'article',
    url: 'https://www.objectwire.org/nvidia/news/nvidia-4-billion-photonics-lumentum-coherent-ai-bottleneck',
    siteName: 'ObjectWire',
    authors: ['ObjectWire Tech Desk'],
    publishedTime: '2026-03-06T09:00:00Z',
    modifiedTime: '2026-03-06T09:00:00Z',
    section: 'Technology',
    tags: ['Nvidia', 'Photonics', 'Lumentum', 'Coherent', 'AI', 'Data Centers', 'Silicon Photonics', 'Semiconductors'],
    images: [{ url: 'https://www.objectwire.org/images/nvidia-photonics-investment.jpg', width: 1200, height: 675, alt: 'Nvidia silicon photonics chip with laser interconnects in a data center rack' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nvidia Invests $4B in Photonics | Light Replaces Copper in AI Data Centers',
    description: '$2B to Lumentum, $2B to Coherent. Nvidia locks in capacity rights for 1.6T lasers and co-packaged optics as copper hits its physical wall.',
  },
};

export default function NvidiaPhotonicsPage() {
  return <WikiArticle slug="nvidia-news-nvidia-4-billion-photonics-lumentum-coherent-ai-bottleneck" />;
}
