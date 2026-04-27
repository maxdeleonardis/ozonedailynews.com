import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/tech/newegg/amd-ryzen-9-9950x3d2-dual-edition-cooling-build-guide-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE =
  'https://images.unsplash.com/photo-1591405351990-4726e331f141?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Ryzen 9 9950X3D2 Dual Edition | Cooling Guide, 200W TDP 2026',
  description:
    'AMD Ryzen 9 9950X3D2 Dual Edition review and build guide: 200W TDP, 270W PPT, 208MB cache, 2nd-gen 3D V-Cache under-core architecture. Cooling tiers, Eco Mode, and AIO recommendations for April 2026.',
  keywords: [
    'AMD Ryzen 9 9950X3D2 Dual Edition',
    'Ryzen 9 9950X3D2 cooling guide 2026',
    'Ryzen 9 9950X3D2 200W TDP build',
    'AMD 9950X3D2 thermal management',
    '9950X3D2 vs 9950X3D comparison',
    'AMD 2nd gen 3D V-Cache under-core',
    'Ryzen 9 9950X3D2 PPT 270W',
    'Ryzen 9 9950X3D2 AIO cooler recommendation',
    'NZXT Kraken Elite 2026 9950X3D2',
    'Arctic Liquid Freezer IV AM5',
    'Noctua NH-D15 G2 9950X3D2',
    'Ryzen 9 9950X3D2 Eco Mode 170W',
    'AMD PBO Precision Boost Overdrive 95C',
    '9950X3D2 Blender rendering temperature',
    'EKWB AM5 custom loop 9950X3D2',
    'AMD X870E VRM 270W PPT',
    'AMD Ryzen 9 9950X3D2 review',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'AMD Ryzen 9 9950X3D2 Dual Edition | Cooling Guide & Build Review 2026',
    description:
      '200W TDP, 270W PPT, and 208MB of 2nd-gen 3D V-Cache under the cores. The 9950X3D2 runs a new thermal rulebook. Here is what you need to cool it properly.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-04-27T14:00:00Z',
    modifiedTime: '2026-04-27T14:00:00Z',
    section: 'Tech',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 675,
        alt: 'AMD Ryzen 9 9950X3D2 Dual Edition CPU chip representing the 200W TDP 2nd-gen 3D V-Cache flagship processor',
      },
    ],
    tags: ['AMD', 'Ryzen', '9950X3D2', 'CPU', 'PC Build', 'Cooling'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AMD 9950X3D2: 200W TDP, 270W PPT, 208MB Cache. Here Is What It Takes to Cool It.',
    description:
      '2nd-gen 3D V-Cache flips the cache under the cores, raising thermal headroom enough for AMD to push 200W. 360mm AIO is the minimum. Full cooling tier guide inside.',
    images: [OG_IMAGE],
  },
};

export default function TechNeweggAmdRyzen99950x3d2DualEditionCoolingBuildGuide2026Page() {
  return <JackArticleDB slug="tech-newegg-amd-ryzen-9-9950x3d2-dual-edition-cooling-build-guide-2026" />;
}
