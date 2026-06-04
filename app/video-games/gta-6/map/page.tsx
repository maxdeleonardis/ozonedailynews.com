import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/video-games/gta-6/map';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'GTA 6 Map | State of Leonida, Vice City, and Every',
  description:
    'Full breakdown of the GTA 6 map: State of Leonida spans Vice City, the Florida Everglades, beach towns, causeways, and inland communities. Every confirmed',
  keywords: [
    'GTA 6 map',
    'GTA 6 State of Leonida',
    'GTA 6 Vice City',
    'State of Leonida map',
    'GTA 6 map size',
    'GTA 6 locations',
    'GTA 6 Everglades',
    'GTA 6 Vice City map',
    'GTA 6 map vs GTA 5',
    'GTA 6 open world',
    'GTA 6 map 2026',
    'Grand Theft Auto 6 map',
    'GTA 6 confirmed locations',
    'GTA 6 Leonida',
    'GTA 6 Florida map',
    'GTA 6 beach',
    'GTA 6 regions',
    'GTA 6 map details',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'GTA 6 Map | State of Leonida, Vice City, and Every',
    description:
      'State of Leonida is the largest Rockstar open world ever built. Vice City, the Everglades, beach towns, and a Keys analog, all confirmed from trailers.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'OzoneNews',
    authors: ['Jack Sterling'],
    publishedTime: '2026-05-25T14:00:00Z',
    modifiedTime: '2026-05-25T14:00:00Z',
    section: 'Gaming',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'GTA 6 State of Leonida map Vice City confirmed regions' }],
    tags: ['GTA 6', 'Rockstar Games', 'State of Leonida', 'Vice City', 'Open World'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GTA 6 Map | Every Confirmed Location in the State of Leonida',
    description:
      'Vice City, Everglades, beach towns, causeways. Largest map Rockstar has ever built. Full regional breakdown from Trailer 1 + Trailer 2.',
    images: [OG_IMAGE],
  },
};

export default function GTA6MapPage() {
  return <JackArticleDB slug="video-games-gta-6-map-state-of-leonida-2026" />;
}
