import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/tech/news/computex-2026-preview-ai-together-taipei';

export const metadata: Metadata = {
  title: 'Computex 2026 Preview | Jensen Huang, Intel 18A, AMD CUDIMM & AI Together',
  description:
    'Computex 2026 runs June 2 to 5 in Taipei with 1,500 exhibitors and 80,000 professionals. Jensen Huang introduces Vera Rubin, Intel previews Nova Lake on 18A with LGA1954, AMD commits $10B to Taiwan, and Qualcomm extends Snapdragon X into automotive.',
  keywords: [
    'Computex 2026',
    'Computex 2026 keynotes',
    'Computex 2026 AI Together theme',
    'Jensen Huang Computex 2026',
    'NVIDIA Vera Rubin Computex',
    'Intel Nova Lake 18A Computex',
    'Intel LGA1954 socket',
    'Intel Panther Lake handheld gaming',
    'AMD CUDIMM AM5 Computex 2026',
    'AMD $10 billion Taiwan investment',
    'Ryzen AI Max 400 local LLM',
    'Qualcomm Snapdragon X Computex',
    'Snapdragon Digital Chassis automotive',
    'Marvell AI connectivity optical interconnect',
    'Computex 2026 Taipei dates',
    'Computex 2026 exhibitors',
    'Agentic AI sovereign compute 2026',
    'Computex InnoVEX startups',
  ],
  alternates: { canonical: `https://www.ozonenetwork.news${SLUG}` },
  openGraph: {
    title: 'Computex 2026 Preview | Jensen Huang, Intel 18A, AMD CUDIMM & AI Together',
    description:
      'The most consequential Computex in history. Vera Rubin, Nova Lake on 18A, $10B AMD investment, CUDIMM DDR5, and Qualcomm automotive in one week in Taipei.',
    type: 'article',
    url: `https://www.ozonenetwork.news${SLUG}`,
    siteName: 'OzoneNews',
    authors: ['Jack Sterling'],
    publishedTime: '2026-05-29T14:00:00-05:00',
    modifiedTime: '2026-05-29T14:00:00-05:00',
    section: 'Tech',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=675&fit=crop&q=80',
        width: 1200,
        height: 675,
        alt: 'Computex 2026 Taipei AI Together semiconductor hardware conference',
      },
    ],
    tags: ['Computex 2026', 'NVIDIA', 'Intel', 'AMD', 'Qualcomm', 'Taipei', 'AI Computing'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Computex 2026 | Jensen Huang, Intel 18A, AMD $10B, AI Together',
    description:
      'Vera Rubin, Nova Lake on Intel 18A, AMD CUDIMM DDR5, Qualcomm automotive. The full Computex 2026 preview with keynote schedule and architecture breakdown.',
    images: ['https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=675&fit=crop&q=80'],
  },
};

export default function Computex2026PreviewPage() {
  return <NewsArticleDB slug="tech-news-computex-2026-preview-ai-together-taipei" />;
}
