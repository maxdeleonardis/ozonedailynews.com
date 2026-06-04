import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/anime/jujutsu-kaisen/season-3';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'JJK Season 3 | Culling Game Arc, Episode Guide, Where to',
  description:
    'Jujutsu Kaisen Season 3 is airing Spring 2026. Full Culling Game arc guide: new characters Higuruma, Kashimo, Hakari, colony assignments, episode',
  keywords: [
    'Jujutsu Kaisen Season 3',
    'JJK Season 3',
    'JJK Season 3 episodes',
    'Jujutsu Kaisen Culling Game',
    'JJK Culling Game arc',
    'Jujutsu Kaisen Season 3 where to watch',
    'JJK Season 3 2026',
    'Hiromi Higuruma',
    'Hajime Kashimo',
    'Kinji Hakari',
    'Jujutsu Kaisen MAPPA',
    'JJK Season 3 Crunchyroll',
    'Jujutsu Kaisen Season 3 episode guide',
    'JJK Season 4',
    'Shinjuku Showdown',
    'Jujutsu Kaisen new characters',
    'anime 2026',
    'JJK anime 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'JJK Season 3 | Culling Game Arc, Episode Guide, Where to',
    description:
      'MAPPA\'s Jujutsu Kaisen Season 3 is airing now. Culling Game arc, new characters Higuruma and Kashimo, colony structure, and how it sets up the Shinjuku',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'OzoneNews',
    authors: ['Jack Sterling'],
    publishedTime: '2026-05-25T16:00:00Z',
    modifiedTime: '2026-05-25T16:00:00Z',
    section: 'Entertainment',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Jujutsu Kaisen Season 3 Culling Game arc MAPPA 2026' }],
    tags: ['Jujutsu Kaisen', 'MAPPA', 'Anime', 'Crunchyroll', 'Culling Game'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JJK Season 3 | Culling Game, New Characters, and Where to',
    description:
      'Spring 2026. Higuruma, Kashimo, Hakari. Multi-colony battles. The most complex arc in JJK history is now animating on Crunchyroll.',
    images: [OG_IMAGE],
  },
};

export default function JJKSeason3Page() {
  return <JackArticleDB slug="anime-jjk-season-3-culling-game-episode-guide-2026" />;
}
