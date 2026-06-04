import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/video-games/007-first-light-everything-we-know-2026';
const ARTICLE_URL = `https://www.ozonenetwork.news${SLUG}`;
const OG_IMAGE = 'https://www.ozonenetwork.news/api/og?title=007+First+Light+%7C+Everything+We+Know+Before+Release&category=Gaming&desc=IO+Interactive+James+Bond+origin+story%2C+Spycraft+mechanics%2C+Patrick+Gibson%2C+May+27+2026&author=Jack+Sterling&date=May+21%2C+2026';

export const metadata: Metadata = {
  title: '007 First Light | Everything We Know Before the May 27',
  description: 'IO Interactive\'s 007 First Light launches May 27, 2026 on PS5, Xbox, and PC. Full breakdown: Patrick Gibson as Bond, Spycraft mechanics, Lenny Kravitz as',
  keywords: [
    '007 First Light release date',
    '007 First Light gameplay',
    '007 First Light review preview',
    'IO Interactive James Bond game',
    '007 First Light story plot',
    '007 First Light Patrick Gibson',
    '007 First Light cast',
    '007 First Light Spycraft mechanics',
    '007 First Light TacSim mode',
    '007 First Light PS5 Xbox PC',
    '007 First Light Switch 2',
    '007 First Light Aston Martin DBS Valhalla',
    '007 First Light Bawma villain Lenny Kravitz',
    '007 First Light Gemma Chan Selina Tan',
    'Project 007 IO Interactive release date 2026',
    'James Bond video game 2026',
    '007 First Light early access May 26',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: '007 First Light | Everything We Know Before Release | IO',
    description: 'May 27 launch on PS5, Xbox, and PC. Patrick Gibson as a 26-year-old Bond, Lenny Kravitz as villain Bawma, Gemma Chan, Spycraft social stealth, Aston',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'OzoneNews',
    authors: ['Jack Sterling'],
    publishedTime: '2026-05-21T23:30:00-05:00',
    modifiedTime: '2026-05-21T23:30:00-05:00',
    section: 'Gaming',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: '007 First Light everything we know before release May 2026' }],
    tags: ['007 First Light', 'IO Interactive', 'James Bond', 'PS5 Games 2026'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '007 First Light Releases May 27 | Full Story, Cast',
    description: 'Patrick Gibson as Bond, Lenny Kravitz as Bawma, Gemma Chan, Aston Martin chases, 20hr campaign. Everything confirmed before launch.',
    images: [OG_IMAGE],
  },
};

export default function FirstLight007EverythingWeKnowPage() {
  return <JackArticleDB slug="video-games-007-first-light-everything-we-know-2026" />;
}
