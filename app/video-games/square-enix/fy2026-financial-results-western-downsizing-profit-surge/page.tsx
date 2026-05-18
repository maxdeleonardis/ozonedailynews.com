import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/video-games/square-enix/fy2026-financial-results-western-downsizing-profit-surge';
const ARTICLE_URL = `https://www.ozonenetwork.news${SLUG}`;

export const metadata: Metadata = {
  title: 'Square Enix FY2026 | 35% Profit Surge, Western Retrenchment',
  description:
    'Square Enix FY2026: income surged 34.9% to 54.7B yen. Western downsizing cut 314 jobs and shrank 11 publishing hubs to four. Net sales declined 8.3%.',
  keywords: [
    'Square Enix FY2026 financial results',
    'Square Enix operating income 2026',
    'Square Enix western restructuring 2026',
    'Square Enix layoffs 2026',
    'Square Enix profit surge 2026',
    'Takashi Kiryu Square Enix strategy',
    'Square Enix selection and concentration',
    'Square Enix HD Games division profit',
    'Final Fantasy Tactics Ivalice Chronicles sales',
    'Dragon Quest HD-2D Remake sales 2026',
    'Square Enix FY2027 guidance',
    'Square Enix annual report May 2026',
    'Square Enix publishing hubs consolidated',
    'Life is Strange Square Enix future',
    'Just Cause Square Enix future',
    'Square Enix Creative Studio Japan',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title:
      'Square Enix FY2026 Financial Results | Western Downsizing Yields 34.9% Operating Income Surge',
    description:
      'Full analysis of Square Enix FY2026: 34.9% income surge to 54.7B yen, western publishing consolidated from 11 hubs to four, and HD Games growing from 3.3B to 14.1B in operating profit.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'OzoneNews',
    authors: ['Jack Sterling'],
    publishedTime: '2026-05-15T10:00:00Z',
    modifiedTime: '2026-05-15T10:00:00Z',
    section: 'Gaming',
    tags: ['Square Enix', 'Gaming Finance', 'Japan Gaming', 'HD Games', 'FY2026'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Square Enix FY2026: Income up 34.9% as Western Downsizing Pays Off',
    description:
      '314 jobs cut, 11 publishing hubs collapsed to four. Operating margin hits 18.4%. Full breakdown.',
  },
};

export default function SquareEnixFY2026Page() {
  return (
    <JackArticleDB slug="video-games-square-enix-fy2026-financial-results-western-downsizing-profit-surge" />
  );
}
