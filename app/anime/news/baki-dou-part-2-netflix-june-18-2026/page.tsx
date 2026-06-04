import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/anime/news/baki-dou-part-2-netflix-june-18-2026';
const OG_IMAGE = 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1200&h=675&fit=crop&q=80';

export const metadata: Metadata = {
  title: 'BAKI-DOU Part 2 | Netflix Release Date June 18, Episodes',
  description:
    'BAKI-DOU Part 2 premieres June 18, 2026 on Netflix. All 12 episodes (14 through 25) drop simultaneously. Musashi Miyamoto faces Baki, Hanayama, Pickle,',
  keywords: [
    'BAKI-DOU Part 2 release date',
    'BAKI-DOU Part 2 Netflix',
    'BAKI-DOU episode 14 25',
    'BAKI-DOU June 2026',
    'Musashi Miyamoto Baki anime',
    'BAKI-DOU The Invincible Samurai Netflix',
    'TMS Entertainment Baki 2026',
    'Baki Hanma vs Musashi',
    'Kaoru Hanayama Musashi fight',
    'Pickle vs Musashi Baki',
    'Izo Motobe Baki DOU',
    'Keisuke Itagaki manga',
    'Netflix anime June 2026',
    'Toshiki Hirano director Baki',
    'BAKI-DOU episodes binge',
    'Baki anime 2026',
  ],
  alternates: { canonical: `https://www.ozonenetwork.news${SLUG}` },
  openGraph: {
    title: 'BAKI-DOU Part 2 | Netflix Release Date June 18, Episodes',
    description:
      'All 12 episodes drop June 18, 2026. Musashi Miyamoto faces Baki, Hanayama, Pickle, and Motobe in TMS Entertainment\'s most hyper-violent arc yet.',
    type: 'article',
    url: `https://www.ozonenetwork.news${SLUG}`,
    siteName: 'OzoneNews',
    authors: ['OzoneNews Editorial Team'],
    publishedTime: '2026-05-29T16:00:00-05:00',
    modifiedTime: '2026-05-29T16:00:00-05:00',
    section: 'Entertainment',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'BAKI-DOU Part 2 Netflix anime June 18 2026 Musashi Miyamoto' }],
    tags: ['BAKI-DOU', 'Netflix Anime', 'Musashi Miyamoto', 'Anime 2026'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BAKI-DOU Part 2 | June 18 on Netflix, All 12 Episodes at',
    description: 'Musashi vs Baki, Hanayama, Pickle, and Motobe. Episodes 14 to 25. TMS Entertainment confirms the date.',
    images: [OG_IMAGE],
  },
};

export default function BakiDouPart2Page() {
  return <NewsArticleDB slug="anime-news-baki-dou-part-2-netflix-june-18-2026" />;
}
