import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

export const dynamic = 'force-dynamic';

const SLUG = '/video-games/news/destiny-2-ends-development-bungie-layoffs-2026';

export const metadata: Metadata = {
  title: 'Destiny 2 | End of Development, Bungie Layoffs & Legacy Hub',
  description: 'Complete Destiny 2 reference hub covering the end of active development, Monument of Triumph final update, Bungie layoffs, Sony write-downs, and the',
  keywords: [
    'Destiny 2',
    'Destiny 2 end of development 2026',
    'Destiny 2 Monument of Triumph',
    'Bungie layoffs 2026',
    'Destiny 2 final update June 2026',
    'Sony Bungie write-down',
    'Destiny 2 The Gauntlet',
    'Destiny 2 Exotic Tier 5',
    'Bungie Marathon',
    'Destiny 2 servers 2026',
    'Destiny 2 legacy',
    'Destiny 2 Director UI',
    'live service game ending 2026',
    'Destiny 2 history',
  ],
  alternates: { canonical: `https://www.OzoneNews.org${SLUG}` },
  openGraph: {
    title: 'Destiny 2 | End of Development Hub, Bungie Layoffs & Legacy',
    description: 'Full Destiny 2 reference: Monument of Triumph final patch, Bungie studio history, Sony $700M write-down, The Gauntlet boss rush, and what comes next.',
    type: 'article',
    url: `https://www.OzoneNews.org${SLUG}`,
    siteName: 'OzoneNews',
    authors: ['Jack Sterling'],
    section: 'Gaming',
    tags: ['Destiny 2', 'Bungie', 'Sony Interactive Entertainment', 'Live Service'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Destiny 2 | End of Development, Bungie Layoffs, Full Legacy',
    description: 'Monument of Triumph is the last patch. Full breakdown of Bungie\'s fall, Sony\'s $700M write-down, and what Destiny 2 leaves behind.',
  },
};

export default function Destiny2HubPage() {
  return <ArticlePageDB slug="video-games-news-destiny-2-ends-development-bungie-layoffs-2026" />;
}
