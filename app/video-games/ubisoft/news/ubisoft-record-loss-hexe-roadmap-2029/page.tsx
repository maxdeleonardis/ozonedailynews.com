import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/video-games/ubisoft/news/ubisoft-record-loss-hexe-roadmap-2029';
const ARTICLE_URL = `https://www.ozonenetwork.news${SLUG}`;
const OG_IMAGE = `https://www.ozonenetwork.news/api/og?title=Ubisoft+Reports+%E2%82%AC1.3B+Record+Operating+Loss&category=Gaming&author=Max+DeLeonardis&date=April+28+2026`;

export const metadata: Metadata = {
  title: 'Ubisoft €1.3B Record Loss | Hexe 2027, Far Cry & Ghost',
  description:
    "Ubisoft's FY 2025-26 results show a €1.30B operating loss and €1.48B net loss. CFO Frédéric Duguet confirms AC Hexe 2027, new Far Cry and Ghost Recon",
  keywords: [
    'Ubisoft FY 2025-26 results',
    'Ubisoft operating loss',
    'Ubisoft record loss 2026',
    'Frédéric Duguet CFO',
    'Assassin\'s Creed Hexe',
    'Assassin\'s Creed Hexe release date',
    'Assassin\'s Creed Hexe 2027',
    'new Far Cry 2029',
    'new Ghost Recon 2029',
    'Ubisoft roadmap 2027 2028 2029',
    'Ubisoft financial results 2026',
    'Ubisoft restructure 2026',
    'Ubisoft Snowdrop engine Far Cry',
    'Ghost Recon first person',
    'Ubisoft Montreal',
    'Ubisoft Creative Houses results',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Ubisoft €1.3B Record Operating Loss | Hexe 2027, Far Cry',
    description:
      'CFO Frédéric Duguet confirms the largest loss in Ubisoft history alongside a 3-franchise pipeline: AC Hexe 2027, new Far Cry and Ghost Recon by March 2029.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'OzoneNews',
    authors: ['Max DeLeonardis'],
    publishedTime: '2026-04-28T22:00:00-05:00',
    modifiedTime: '2026-05-20T10:00:00-05:00',
    section: 'Gaming',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 675,
        alt: 'Ubisoft FY 2025-26 record €1.3B operating loss and confirmed roadmap for Hexe, Far Cry and Ghost Recon',
      },
    ],
    tags: ['Ubisoft', "Assassin's Creed Hexe", 'Far Cry', 'Ghost Recon', 'Frédéric Duguet', 'Gaming'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ubisoft Posts €1.3B Record Loss, Locks In 3-Franchise',
    description:
      'AC Hexe lands 2027. New Far Cry and Ghost Recon before March 2029. CFO Frédéric Duguet confirms the full roadmap alongside the worst annual result in',
    images: [OG_IMAGE],
  },
};

export default function UbisoftRecordLossPage() {
  return (
    <NewsArticleDB slug="video-games-ubisoft-news-ubisoft-record-loss-hexe-roadmap-2029" />
  );
}
