import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/video-games/playstation-state-of-play-june-2026-preview';
const ARTICLE_URL = `https://www.OzoneNews.org${SLUG}`;

export const metadata: Metadata = {
  title: 'PlayStation State of Play June 2026 | Wolverine',
  description: "Sony's June 2, 2026 State of Play runs over an hour. Marvel's Wolverine gets its biggest gameplay reveal yet. Intergalactic and a new God of War are the",
  keywords: [
    'PlayStation State of Play June 2026',
    'State of Play June 2 2026',
    "Marvel's Wolverine PS5",
    "Marvel's Wolverine release date",
    'Intergalactic The Heretic Prophet gameplay',
    'Naughty Dog new game 2026',
    'God of War new game 2026',
    'PS5 State of Play 2026',
    'Sony showcase June 2026',
    'Insomniac Games Wolverine',
    'State of Play predictions 2026',
    'PlayStation exclusives 2026',
    'Marvel Tokon Fighting Souls',
    'PSVR2 news 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'PlayStation State of Play June 2026 | Wolverine',
    description: "Sony hosts a 60-plus minute State of Play on June 2. Wolverine is confirmed. Intergalactic's gameplay debut and a new God of War are the two biggest",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'OzoneNews',
    authors: ['Jack Wang'],
    publishedTime: '2026-06-01T15:00:00-05:00',
    modifiedTime: '2026-06-01T15:00:00-05:00',
    section: 'Gaming',
    tags: ["Marvel's Wolverine", 'PlayStation', 'State of Play', 'Intergalactic', 'God of War'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "PlayStation State of Play June 2 | Wolverine Confirmed",
    description: "Sony's hour-plus showcase airs June 2 at 5 PM ET. Everything confirmed and rumored.",
  },
};

export default function PlaystationStateOfPlayJune2026Page() {
  return <JackArticleDB slug="video-games-playstation-state-of-play-june-2026-preview" />;
}
