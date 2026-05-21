import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/video-games/ea/news/f1-25-2026-season-pack-audi-cadillac';
const ARTICLE_URL = `https://www.ozonenetwork.news${SLUG}`;
const OG_IMAGE = `https://www.ozonenetwork.news/api/og?title=EA+F1+25+2026+Season+Pack+%7C+Audi+%26+Cadillac+Join+Grid&category=Gaming&date=May+20+2026`;

export const metadata: Metadata = {
  title: 'EA F1 25 2026 Season Pack | Audi, Cadillac, June 3',
  description:
    'EA confirms F1 25: 2026 Season Pack launches June 3 on PS5, Xbox Series X|S, and PC. Audi and Cadillac join the grid, Lewis Hamilton leads cover athletes, and the MADRING Madrid circuit arrives before the real-world race.',
  keywords: [
    'F1 25 2026 Season Pack',
    'EA Sports F1 25 expansion',
    'F1 25 Audi Cadillac',
    'F1 25 June 3 2026',
    'EA F1 25 new teams',
    'Cadillac Formula 1 game',
    'Audi Formula 1 game',
    'Gabriel Bortoleto F1 25',
    'Lewis Hamilton F1 25 cover',
    'MADRING Madrid F1 25',
    'F1 25 2026 season pack price',
    'EA Sports F1 expansion strategy',
    'F1 25 no standalone F1 26',
    'EA F1 annual release pivot',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'EA F1 25 2026 Season Pack | Audi & Cadillac Join Grid June 3',
    description:
      'EA drops the 2026 Season Pack for F1 25 on June 3. Audi replaces Sauber, Cadillac enters as the first major American F1 constructor, and the MADRING Madrid circuit is playable before the real race.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'OzoneNews',
    authors: ['OzoneNews Editorial Team'],
    publishedTime: '2026-05-20T18:00:00-05:00',
    modifiedTime: '2026-05-20T18:00:00-05:00',
    section: 'Gaming',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 675,
        alt: 'EA F1 25 2026 Season Pack announcement with Audi, Cadillac, and MADRING Madrid circuit',
      },
    ],
    tags: ['Electronic Arts', 'F1 25', 'Formula 1', 'Audi', 'Cadillac', 'Gaming'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EA F1 25 Gets Audi, Cadillac, and Madrid. June 3.',
    description:
      '$29.99 console / $24.99 PC. First American F1 constructor in a game, MADRING before the real race, Lewis Hamilton cover. No standalone F1 26, full new title in 2027.',
    images: [OG_IMAGE],
  },
};

export default function F125SeasonPackPage() {
  return (
    <NewsArticleDB slug="video-games-ea-news-f1-25-2026-season-pack-audi-cadillac" />
  );
}
