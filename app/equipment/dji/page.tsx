import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const revalidate = 3600;

const SLUG = '/equipment/dji';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = '/equipment-drone-gimbal-placeholder.jpg';

export const metadata: Metadata = {
  title: 'DJI Ronin 4D | Full-Frame Cinema Camera System Specs and Review',
  description:
    'Complete guide to the DJI Ronin 4D modular cinema camera. Full-frame sensor, 4-axis stabilization, LiDAR autofocus, ProRes RAW recording, and O3 Pro',
  keywords: [
    'DJI Ronin 4D',
    'DJI Ronin 4D specs',
    'DJI Ronin 4D 8K',
    'DJI Ronin 4D 6K',
    'cinema camera stabilization',
    'DJI O3 Pro transmission',
    'DJI LiDAR autofocus',
    'ProRes RAW cinema camera',
    'DJI Ronin 4D Flex',
    'full-frame cinema gimbal',
    'DJI DL mount',
    'modular cinema camera system',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'DJI Ronin 4D | Modular Full-Frame Cinema Camera System',
    description:
      'The DJI Ronin 4D integrates a full-frame sensor, 4-axis gimbal, LiDAR focus, and O3 Pro wireless transmission into one modular cinema platform. Available',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Tech Desk'],
    publishedTime: '2026-03-31T14:00:00Z',
    modifiedTime: '2026-03-31T14:00:00Z',
    section: 'Tech',
    tags: ['DJI', 'Ronin 4D', 'Cinema Camera', 'Filmmaking', 'Equipment'],
    images: [{ url: OG_IMAGE, width: 1200, height: 1800, alt: 'DJI Ronin 4D cinema camera system' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DJI Ronin 4D | Full-Frame Cinema Camera with 4-Axis Stabilization',
    description:
      'Full specs for the DJI Ronin 4D, 4-axis stabilization, LiDAR autofocus, ProRes RAW recording, and O3 Pro wireless, in one modular cinema platform.',
  },
};

export default function EquipmentDjiPage() {
  return <ArticlePageDB slug="equipment-dji" />;
}
