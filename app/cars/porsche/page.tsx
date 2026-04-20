import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/cars/porsche';
const PAGE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Porsche | Company Profile, Models, History, 2026',
  description: 'Porsche company profile: Stuttgart heritage, the 911 legacy, Taycan EV leadership, 2026 model lineup, Le Mans motorsport history, financial performance, and the road to full electrification.',
  keywords: [
    'Porsche',
    'Porsche company profile',
    'Porsche 2026',
    'Porsche 911',
    'Porsche Taycan',
    'Porsche history',
    'Porsche models 2026',
    'Porsche EV strategy',
    'Porsche Le Mans',
    'Porsche AG Stuttgart',
    'Porsche financials',
    'Volkswagen Group Porsche',
    'Porsche Macan EV',
    'Porsche motorsport 2026',
    'Porsche 718',
    'Ferry Porsche',
    'Porsche electrification',
    'Porsche Cayenne',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'article',
    title: 'Porsche | Company Profile, Models, History, 2026',
    description: 'From Stuttgart to Le Mans. The 911, the Taycan, and the future. Full Porsche company profile for 2026.',
    url: PAGE_URL,
    siteName: 'ObjectWire',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Porsche company profile 2026' }],
    publishedTime: '2026-04-21T23:45:00Z',
    modifiedTime: '2026-04-21T23:45:00Z',
    section: 'Cars',
    tags: ['Porsche', 'Sports Cars', 'EV', 'Motorsport'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Porsche | 911, Taycan, Le Mans, 2026 Profile',
    description: 'The full Porsche story. Stuttgart heritage, EV pivot, active motorsport program, and 2026 model lineup.',
    images: [OG_IMAGE],
  },
};

export default function CarsPorschePage() {
  return <ArticlePageDB slug="cars-porsche" />;
}
