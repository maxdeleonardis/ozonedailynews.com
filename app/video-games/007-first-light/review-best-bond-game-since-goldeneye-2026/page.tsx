import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/video-games/007-first-light/review-best-bond-game-since-goldeneye-2026';
const ARTICLE_URL = `https://www.ozonenetwork.news${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=1200&h=675&fit=crop&q=80';

export const metadata: Metadata = {
  title: '007 First Light Review | Best Bond Game Since GoldenEye 1997',
  description:
    'IO Interactive delivers the best James Bond game since GoldenEye 64. 007 First Light earns a 9/10 from IGN, a Metacritic 91, and a legitimate 2026 Game of the Year case with Glacier Engine RTGI and the Bluff and Lure system.',
  keywords: [
    '007 First Light review',
    '007 First Light best Bond game since GoldenEye',
    '007 First Light score 9/10',
    'IO Interactive James Bond game review',
    '007 First Light game of the year 2026',
    '007 First Light IGN review Luke Reilly',
    '007 First Light Patrick Gibson',
    '007 First Light Glacier Engine performance',
    '007 First Light Digital Foundry',
    '007 First Light PS5 60 FPS RTGI',
    '007 First Light DLSS 4.5',
    '007 First Light PSSR PS5 Pro',
    '007 First Light Aston Martin Valhalla',
    '007 First Light Bluff and Lure system',
    'Zerkaa 007 First Light gameplay',
    'James Bond video game 2026 GOTY',
    'best James Bond game ever made',
    '007 First Light Arkham combat',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: '007 First Light Review | Best Bond Game Since GoldenEye 1997',
    description:
      'IO Interactive earns near-universal 9/10 acclaim with an origin story that ends a 14-year James Bond gaming drought. Patrick Gibson, Glacier Engine RTGI, and a legitimate 2026 GOTY case.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'OzoneNews',
    authors: ['Jack Sterling'],
    publishedTime: '2026-05-29T10:00:00-05:00',
    modifiedTime: '2026-05-29T10:00:00-05:00',
    section: 'Gaming',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: '007 First Light review 2026 IO Interactive best Bond game since GoldenEye' }],
    tags: ['007 First Light', 'IO Interactive', 'James Bond', 'Game of the Year 2026'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '007 First Light | 9/10, Best Bond Game Since GoldenEye 64',
    description: 'IO Interactive ends a 14-year drought. Metacritic 91, Glacier Engine RTGI showcase, and the first Bond game with a real GOTY argument since 1997.',
    images: [OG_IMAGE],
  },
};

export default function BondReviewPage() {
  return (
    <JackArticleDB slug="video-games-007-first-light-review-best-bond-game-since-goldeneye-2026" />
  );
}
