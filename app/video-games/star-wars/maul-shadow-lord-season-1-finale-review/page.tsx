import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

export const dynamic = 'force-static';
export const revalidate = false;

const SLUG = '/video-games/star-wars/maul-shadow-lord-season-1-finale-review';
const ARTICLE_URL = `https://www.ozonenetwork.news${SLUG}`;

export const metadata: Metadata = {
  title: 'Maul Shadow Lord Season 1 Finale Review | Episodes 9 and 10',
  description:
    'Star Wars: Maul Shadow Lord Season 1 finale review. Episodes 9 and 10 deliver relentless lightsaber action, surprising supporting cast deaths, and a strong close to one of the most kinetic Star Wars series on Disney Plus.',
  keywords: [
    'Maul Shadow Lord review',
    'Star Wars Maul Shadow Lord Season 1 finale',
    'Maul Shadow Lord episodes 9 10',
    'Star Wars Disney Plus 2026',
    'Maul Shadow Lord season 1',
    'Star Wars Maul series review',
    'Maul lightsaber',
    'Star Wars Disney Plus review',
    'Inquisitors Star Wars series',
    'Maul Shadow Lord ending',
    'Star Wars live action 2026',
    'Maul Shadow Lord season 2',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Maul Shadow Lord Season 1 Finale Review | Episodes 9 and 10',
    description:
      'The Season 1 finale kills off its supporting cast and closes on a Dark Side confrontation. A confident cap to the most action-dense Star Wars series on Disney Plus.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Gaming Desk'],
    publishedTime: '2026-05-04T11:00:00Z',
    modifiedTime: '2026-05-04T11:00:00Z',
    section: 'Gaming',
    tags: ['Star Wars', 'Maul', 'Disney Plus', 'Review'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maul Shadow Lord Finale Review | The Show Kills Its Cast and Earns It',
    description:
      'Episodes 9 and 10 deliver the season\'s best action and finally commit to killing supporting characters. A strong end to Season 1.',
  },
};

export default function MaulShadowLordFinaleReviewPage() {
  return <JackArticleDB slug="video-games-star-wars-maul-shadow-lord-season-1-finale-review" />;
}
