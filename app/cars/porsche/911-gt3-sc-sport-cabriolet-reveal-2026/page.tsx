import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/cars/porsche/911-gt3-sc-sport-cabriolet-reveal-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Porsche 911 GT3 S/C | First GT3 Convertible, 502 hp, $275K',
  description: 'The 2026 Porsche 911 GT3 S/C is the first-ever production GT3 convertible. 502 hp, 9,000 RPM flat-six, manual-only, 3,322 lbs. Full specs, pricing, and',
  keywords: [
    'Porsche 911 GT3 SC',
    'Porsche 911 GT3 S/C 2026',
    'Porsche 911 GT3 Sport Cabriolet',
    'Porsche 911 GT3 convertible',
    'Porsche GT3 SC specs',
    'Porsche 911 GT3 SC price',
    'Porsche 911 GT3 SC 502 hp',
    'Porsche 911 GT3 SC vs GT3',
    'Porsche GT3 SC vs Speedster',
    'Porsche 911 GT3 SC magnesium wheels',
    'Porsche 911 GT3 SC PCCB brakes',
    'Porsche 911 GT3 SC manual gearbox',
    'Porsche 911 GT3 SC Street Style Package',
    '2026 Porsche 911 GT3 reveal',
    'Porsche 9000 RPM flat-six 2026',
    'Porsche 911 GT3 SC $275350',
    'first GT3 cabriolet Porsche',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Porsche 911 GT3 S/C | First GT3 Convertible, 502 hp, $275K',
    description: '502 hp. 9,000 RPM. Manual only. No PDK. Open top. This is the first production GT3 convertible and it costs $275,350.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-04-21T23:00:00Z',
    modifiedTime: '2026-04-21T23:00:00Z',
    section: 'Cars',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Porsche 911 GT3 S/C Sport Cabriolet 2026' }],
    tags: ['Porsche', '911 GT3', 'Sports Cars', 'Convertible', 'Automotive 2026'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Porsche just built the first GT3 convertible | 502 hp',
    description: '9,000 RPM flat-six. Magnesium center-lock wheels standard. PCCB brakes standard. Roof opens in 12 seconds. The 911 GT3 S/C is the real deal.',
    images: [OG_IMAGE],
  },
};

export default function CarsPorsche911Gt3ScSportCabrioletReveal2026Page() {
  return <JackArticleDB slug="cars-porsche-911-gt3-sc-sport-cabriolet-reveal-2026" />;
}
