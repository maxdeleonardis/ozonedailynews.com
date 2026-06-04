import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

export const dynamic = 'force-static';
export const revalidate = false;

const SLUG = '/video-games/gta-6/news/rockstar-gta5-crunch-overtime-pay';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Rockstar GTA 5 Crunch | Developers Were Never Paid Overtime',
  description:
    'Former Rockstar developers who worked 80-100 hour weeks to ship GTA 5 in 2013 say they received no overtime compensation. As GTA 6 approaches a $70-$80',
  keywords: [
    'GTA 5 crunch overtime pay',
    'Rockstar Games crunch',
    'GTA 5 developers unpaid overtime',
    'Rockstar labor',
    'GTA 6 development crunch',
    'Rockstar North crunch',
    'video game developer overtime',
    'games industry crunch',
    'game workers unite Rockstar',
    'Dan Houser 100 hour weeks',
    'GTA 5 development conditions',
    'Rockstar San Diego crunch',
    'games industry labor rights',
    'Take-Two Interactive workers',
    'GTA 5 overtime',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Rockstar GTA 5 Crunch | Developers Were Never Paid Overtime',
    description:
      'GTA 5 generated $8 billion. The developers who crunched 100-hour weeks to build it say they were never compensated.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-05-04T10:00:00Z',
    modifiedTime: '2026-05-04T10:00:00Z',
    section: 'Gaming',
    tags: ['Rockstar Games', 'GTA 5', 'GTA 6', 'Labor'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GTA 5 Made $8 Billion. The Devs Who Crunched to Build It',
    description:
      'Former Rockstar staff describe 100-hour weeks, no overtime pay, and a Rockstar that has never acknowledged the GTA 5 crunch.',
  },
};

export default function RockstarGTA5CrunchOvertimePayPage() {
  return <JackArticleDB slug="video-games-gta-6-news-rockstar-gta5-crunch-overtime-pay" />;
}
