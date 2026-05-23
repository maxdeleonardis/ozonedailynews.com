import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/texas/news/draftkings-prizepicks-legal-texas-2026';

export const metadata: Metadata = {
  title: 'DraftKings & PrizePicks Legal in Texas | Daily Fantasy Law 2026',
  description:
    'Texas has not legalized sports betting, yet DraftKings and PrizePicks operate legally via a skill-game carve-out in the Texas Penal Code. Full legal explainer.',
  keywords: [
    'DraftKings Texas legal',
    'PrizePicks Texas legal',
    'is DraftKings legal in Texas',
    'is PrizePicks legal in Texas',
    'daily fantasy sports Texas',
    'Texas sports betting law',
    'Texas Penal Code gambling',
    'DFS skill game Texas',
    'Texas sports betting 2026',
    'UIGEA fantasy sports',
    'online gambling Texas',
    'DraftKings Texas 2026',
    'PrizePicks Texas 2026',
  ],
  alternates: {
    canonical: `https://www.ozonenetwork.news${SLUG}`,
  },
  openGraph: {
    title: 'How DraftKings & PrizePicks Are Legal in Texas | DFS Law Explained',
    description:
      'Texas bans sports betting but allows DraftKings and PrizePicks under a skill-game exemption. Here is the exact statute and legal reasoning behind it.',
    type: 'article',
    url: `https://www.ozonenetwork.news${SLUG}`,
    siteName: 'OzoneNews',
    authors: ['Max DeLeonardis'],
    publishedTime: '2026-05-22T11:00:00-05:00',
    modifiedTime: '2026-05-22T11:00:00-05:00',
    section: 'News',
    tags: ['DraftKings', 'PrizePicks', 'Texas', 'Daily Fantasy Sports'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DraftKings & PrizePicks Are Legal in Texas, Here Is Why',
    description: 'Texas bans sports betting but a skill-game carve-out keeps DFS fully legal. The statute explained.',
  },
};

export default function TexasDFSLegalPage() {
  return <NewsArticleDB slug="texas-news-draftkings-prizepicks-legal-texas-2026" />;
}
