import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/tech/hardware/ddr5-memory-guide-best-kits-2026';

export const metadata: Metadata = {
  title: 'DDR5 Memory Guide | Best Kits for AMD AM5 & Intel LGA1851 2026',
  description:
    'DDR5 is mandatory on AMD AM5 and Intel LGA1851. This guide explains the 4 core engineering changes from DDR4, then reviews the G.Skill Trident Z5 Neo, Corsair Dominator Platinum, Crucial Pro, and G.Skill Trident Z5 RGB for every 2026 build type.',
  keywords: [
    'DDR5 memory guide 2026',
    'best DDR5 RAM 2026',
    'DDR5 AMD AM5',
    'DDR5 Intel LGA1851',
    'G.Skill Trident Z5 Neo DDR5-6000 CL30',
    'Corsair Dominator Platinum DDR5-6400',
    'Crucial Pro DDR5-5600',
    'G.Skill Trident Z5 RGB DDR5-7200',
    'DDR5 vs DDR4 differences',
    'DDR5 PMIC on-stick power management',
    'DDR5 dual 32-bit subchannels',
    'DDR5 On-Die ECC',
    'AMD Infinity Fabric DDR5-6000',
    'DDR5 CAS latency explained',
    'XMP EXPO DDR5 profiles',
    'best RAM for Ryzen 9000',
    'DDR5 SK Hynix A-die',
    'DDR5 kit comparison 2026',
  ],
  alternates: { canonical: `https://www.ozonenetwork.news${SLUG}` },
  openGraph: {
    title: 'DDR5 Memory Guide | Best Kits for AMD AM5 & Intel LGA1851 2026',
    description:
      'The 4 architectural changes that make DDR5 different from DDR4, and a direct verdict on the best reviewed kits for every 2026 build type from budget to enthusiast.',
    type: 'article',
    url: `https://www.ozonenetwork.news${SLUG}`,
    siteName: 'OzoneNews',
    authors: ['Jack Sterling'],
    publishedTime: '2026-05-29T12:00:00-05:00',
    modifiedTime: '2026-05-29T12:00:00-05:00',
    section: 'Tech',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1591799265444-d66432b91588?w=1200&h=675&fit=crop&q=80',
        width: 1200,
        height: 675,
        alt: 'DDR5 RAM modules installed on an AMD AM5 motherboard in 2026',
      },
    ],
    tags: ['DDR5', 'PC Hardware', 'AMD AM5', 'Intel LGA1851', 'RAM Guide'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DDR5 Memory Guide | Best Kits for AM5 and Intel LGA1851',
    description:
      'G.Skill Trident Z5 Neo, Corsair Dominator Platinum, Crucial Pro, and Trident Z5 RGB reviewed. PMIC, dual subchannels, and Infinity Fabric explained.',
    images: ['https://images.unsplash.com/photo-1591799265444-d66432b91588?w=1200&h=675&fit=crop&q=80'],
  },
};

export default function DDR5MemoryGuidePage() {
  return <NewsArticleDB slug="tech-hardware-ddr5-memory-guide-best-kits-2026" />;
}
