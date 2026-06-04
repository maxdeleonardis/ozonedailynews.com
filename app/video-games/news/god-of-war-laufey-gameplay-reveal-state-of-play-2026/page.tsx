import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/video-games/news/god-of-war-laufey-gameplay-reveal-state-of-play-2026';
const ARTICLE_URL = `https://www.OzoneNews.org${SLUG}`;

export const metadata: Metadata = {
  title: 'God of War Laufey Gameplay Reveal | Play as Faye, 2027',
  description: "Santa Monica Studio revealed God of War Laufey at Sony's June 2 State of Play. Play as Faye across Norse, Greek, and Mongolian mythologies in a multi-myth",
  keywords: [
    'God of War Laufey',
    'God of War Laufey gameplay reveal',
    'God of War Laufey Faye',
    'God of War Laufey release date 2027',
    'God of War Laufey PS5',
    'Santa Monica Studio God of War',
    'Deborah Ann Woll Faye',
    'God of War Laufey State of Play',
    'God of War Laufey Phranque Jack Quaid',
    'God of War Laufey Begtse boss',
    'God of War Laufey Everywhen',
    'God of War Laufey Mongolian mythology',
    'God of War next game 2026',
    'God of War Laufey single player',
    'God of War Faye protagonist',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'God of War Laufey Revealed | Play as Faye, PS5 Exclusive',
    description: "Santa Monica Studio's next God of War stars Kratos' wife Faye fighting through The Everywhen, a multi-myth afterlife war spanning Norse, Greek, East",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'OzoneNews',
    authors: ['Max DeLeonardis'],
    publishedTime: '2026-06-04T18:00:00-05:00',
    modifiedTime: '2026-06-04T18:00:00-05:00',
    section: 'Gaming',
    tags: ['God of War', 'Santa Monica Studio', 'PlayStation 5', 'State of Play', 'Action Games'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'God of War Laufey | Faye Is the New Protagonist. The',
    description: 'Multi-myth afterlife prison, a talking gelatinous cube companion, Mongolian war gods, and Deborah Ann Woll voicing Faye. PS5 exclusive. No release date',
  },
};

export default function GodOfWarLaufeyRevealPage() {
  return <NewsArticleDB slug="video-games-news-god-of-war-laufey-gameplay-reveal-state-of-play-2026" />;
}
