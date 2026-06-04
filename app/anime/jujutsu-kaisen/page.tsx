import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

export const dynamic = 'force-dynamic';

const SLUG = '/anime/jujutsu-kaisen';
const PAGE_URL = `https://www.OzoneNews.org${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Jujutsu Kaisen | Series Guide, Arc Breakdown & Anime 2026',
  description: 'Complete Jujutsu Kaisen guide: Yuji Itadori, Gojo, Sukuna, MAPPA anime Season 3, Culling Game arc, cursed energy system, and manga arc chronology. 100M',
  keywords: [
    'Jujutsu Kaisen',
    'Jujutsu Kaisen Season 3',
    'Jujutsu Kaisen anime 2026',
    'Jujutsu Kaisen Culling Game',
    'Yuji Itadori',
    'Satoru Gojo',
    'Ryomen Sukuna',
    'MAPPA anime',
    'Jujutsu Kaisen characters',
    'Jujutsu Kaisen arc guide',
    'Shibuya Incident',
    'cursed energy explained',
    'Jujutsu Kaisen manga',
    'Gege Akutami',
    'anime 2026',
    'shonen anime guide',
    'Jujutsu Kaisen Season 2',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Jujutsu Kaisen | Series Guide, Arc Breakdown & Anime 2026',
    description: '100 million copies sold. MAPPA anime Season 3 airing now. Full guide: characters, arcs, cursed energy system, and manga chronology.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'OzoneNews',
    authors: ['OzoneNews Editorial Team'],
    publishedTime: '2026-05-21T22:00:00-05:00',
    modifiedTime: '2026-05-21T22:00:00-05:00',
    section: 'Entertainment',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Jujutsu Kaisen series guide 2026' }],
    tags: ['Jujutsu Kaisen', 'Anime', 'MAPPA', 'Shonen', 'Manga'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jujutsu Kaisen | Complete Series Guide 2026',
    description: '100M copies. Season 3 airing. Full arc breakdown, character guide, and cursed energy system explained.',
    images: [OG_IMAGE],
  },
};

export default function JujutsuKaisenPage() {
  return <ArticlePageDB slug="anime-jujutsu-kaisen" />;
}
