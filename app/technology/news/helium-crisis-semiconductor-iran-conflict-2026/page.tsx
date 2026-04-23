import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/technology/news/helium-crisis-semiconductor-iran-conflict-2026';
const OG_IMAGE = 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Helium Crisis Hits Semiconductor Giants | Iran Conflict Supply Shock',
  description:
    'The U.S.-Israel conflict with Iran has cut off roughly 33% of the world\'s helium supply from Qatar, sending the PHLX Semiconductor Index down 3% and',
  keywords: [
    'helium semiconductor supply crisis 2026',
    'Iran conflict chip supply shock',
    'helium shortage chipmakers 2026',
    'Qatar helium Ras Laffan',
    'PHLX SOX semiconductor index 2026',
    'helium wafer cooling chips',
    'Samsung SK Hynix helium supply',
    'TSMC helium shortage',
    'Strait of Hormuz semiconductor supply',
    'helium non-substitutable semiconductor',
    'helium price surge 2026',
    'chip supply chain Iran war',
    'enterprise hard drive helium shortage',
    'semiconductor fab shutdown risk 2026',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: 'Helium Crisis | Iran Conflict Cuts 33% of Global Chip Supply Input',
    description:
      'The PHLX Semiconductor Index fell 3% as investors realized Iran\'s conflict has physically cut off Qatar\'s helium — a non-substitutable input for every',
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['Connan Boyle'],
    publishedTime: '2026-03-31T16:00:00Z',
    modifiedTime: '2026-03-31T16:00:00Z',
    section: 'Tech',
    tags: ['Semiconductors', 'Helium', 'Iran', 'Supply Chain', 'Samsung', 'TSMC', 'SK Hynix'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Iran conflict has a silent kill switch for chipmaking: helium',
    description:
      '33% of the world\'s helium supply is cut off. Samsung, SK Hynix, and TSMC have 3–6 months of reserves. After that, fab shutdowns become a real scenario.',
  },
};

export default function TechnologyNewsHeliumCrisisSemiconductorIranConflict2026Page() {
  return <NewsArticleDB slug="technology-news-helium-crisis-semiconductor-iran-conflict-2026" />;
}
