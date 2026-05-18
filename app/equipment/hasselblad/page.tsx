import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const revalidate = 3600;

const SLUG = '/equipment/hasselblad';
const ARTICLE_URL = `https://www.ozonenetwork.news${SLUG}`;
const OG_IMAGE = '/equipment-camera-placeholder.jpg';

export const metadata: Metadata = {
  title: 'Hasselblad 907X + CFV 100C | 100MP Medium-Format Camera Review',
  description:
    'Complete guide to the Hasselblad 907X and CFV 100C medium-format digital system. 100MP BSI sensor, 15 stops dynamic range, 1TB built-in storage, PDAF, and',
  keywords: [
    'Hasselblad 907X',
    'Hasselblad CFV 100C',
    'Hasselblad 907X review',
    'Hasselblad 100MP medium format',
    'medium format digital camera',
    'Hasselblad CFV 100C specs',
    'Hasselblad 15 stops dynamic range',
    'Hasselblad 1TB storage',
    'Hasselblad V system compatibility',
    'medium format PDAF',
    'Hasselblad Natural Color Solution',
    'modular digital back camera',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Hasselblad 907X + CFV 100C | 100MP Medium-Format Modular Camera',
    description:
      'The Hasselblad 907X and CFV 100C combine a 100MP BSI sensor, 15 stops of dynamic range, 1TB built-in SSD, and V-system compatibility into a compact',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Tech Desk'],
    publishedTime: '2026-03-31T14:00:00Z',
    modifiedTime: '2026-03-31T14:00:00Z',
    section: 'Tech',
    tags: ['Hasselblad', '907X', 'CFV 100C', 'Medium Format', 'Equipment'],
    images: [{ url: OG_IMAGE, width: 1200, height: 800, alt: 'Hasselblad 907X CFV 100C medium format camera' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hasselblad 907X + CFV 100C | 100MP, 15 Stops, 1TB Built-In',
    description:
      'The Hasselblad 907X and CFV 100C deliver 100MP medium-format imaging, 1TB built-in SSD, and compatibility with V-system film bodies from 1957.',
  },
};

export default function EquipmentHasselbladPage() {
  return <ArticlePageDB slug="equipment-hasselblad" />;
}
