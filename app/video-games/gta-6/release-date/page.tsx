import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/JackArticleDB';

export const revalidate = 3600;

const SLUG = '/video-games/gta-6/release-date';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'GTA 6 Release Date | Everything Confirmed for Fall 2026',
  description:
    'GTA 6 confirmed for Fall 2026 on PS5 and Xbox Series X|S. Full guide: release date, dual protagonists Jason and Lucia, State of Leonida map, expected $80 price, PC release window, and GTA Online successor.',
  keywords: [
    'GTA 6 release date',
    'GTA 6',
    'Grand Theft Auto 6',
    'GTA 6 2026',
    'GTA 6 release date 2026',
    'GTA 6 characters',
    'GTA 6 Jason Lucia',
    'GTA 6 State of Leonida',
    'GTA 6 Vice City',
    'GTA 6 price',
    'GTA 6 PS5',
    'GTA 6 Xbox Series X',
    'GTA 6 PC release',
    'GTA 6 online mode',
    'Rockstar Games GTA 6',
    'Take-Two Interactive GTA 6',
    'GTA 6 Fall 2026',
    'GTA 6 everything confirmed',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'GTA 6 Release Date | Everything Confirmed for Fall 2026',
    description:
      'Rockstar confirmed Fall 2026. Dual protagonists Jason Duval and Lucia Caminos, the State of Leonida open world, expected $80 pricing, and no PC date yet.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-05-11T12:00:00Z',
    modifiedTime: '2026-05-11T12:00:00Z',
    section: 'Gaming',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'GTA 6 release date confirmed Fall 2026 PS5 Xbox' }],
    tags: ['GTA 6', 'Rockstar Games', 'Grand Theft Auto', 'Gaming', 'PS5', 'Xbox Series X'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GTA 6 Release Date | Fall 2026 Confirmed — PS5, Xbox, and Everything Rockstar Has Said',
    description:
      'Jason and Lucia. State of Leonida. Expected $80 price. PC date TBD. Every confirmed GTA 6 detail in one place.',
    images: [OG_IMAGE],
  },
};

export default function GTA6ReleaseDatePage() {
  return <JackArticleDB slug="video-games-gta-6-release-date-everything-confirmed-2026" />;
}
