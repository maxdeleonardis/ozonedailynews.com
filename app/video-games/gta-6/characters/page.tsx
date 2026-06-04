import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/video-games/gta-6/characters';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'GTA 6 Characters | Jason Duval, Lucia Caminos, Every',
  description:
    'Full breakdown of GTA 6 characters: Jason Duval and Lucia Caminos confirmed by Rockstar. Lucia is the first female protagonist in mainline GTA history.',
  keywords: [
    'GTA 6 characters',
    'GTA 6 protagonists',
    'Jason GTA 6',
    'Lucia GTA 6',
    'GTA 6 Jason Duval',
    'GTA 6 Lucia Caminos',
    'GTA 6 female protagonist',
    'GTA 6 dual protagonists',
    'Lucia Caminos GTA 6',
    'Jason Duval GTA 6',
    'GTA 6 Bonnie and Clyde',
    'GTA 6 story characters',
    'Grand Theft Auto 6 characters',
    'GTA 6 character names',
    'GTA 6 protagonist',
    'GTA 6 cast',
    'GTA 6 voice actors',
    'GTA 6 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'GTA 6 Characters | Jason Duval, Lucia Caminos, Every',
    description:
      'Jason Duval and Lucia Caminos are GTA 6\'s dual protagonists. Lucia is the first female lead in mainline GTA history. "We\'re like Bonnie and Clyde, but',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'OzoneNews',
    authors: ['Jack Sterling'],
    publishedTime: '2026-05-25T15:00:00Z',
    modifiedTime: '2026-05-25T15:00:00Z',
    section: 'Gaming',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'GTA 6 characters Jason Duval and Lucia Caminos protagonists' }],
    tags: ['GTA 6', 'Rockstar Games', 'Jason Duval', 'Lucia Caminos', 'Grand Theft Auto'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GTA 6 Characters | Jason, Lucia, and the Bonnie and Clyde',
    description:
      'Lucia Caminos is the first female protagonist in mainline GTA history. Jason Duval is her partner. Everything confirmed from Trailer 1 and Trailer 2.',
    images: [OG_IMAGE],
  },
};

export default function GTA6CharactersPage() {
  return <JackArticleDB slug="video-games-gta-6-characters-jason-duval-lucia-caminos-2026" />;
}
