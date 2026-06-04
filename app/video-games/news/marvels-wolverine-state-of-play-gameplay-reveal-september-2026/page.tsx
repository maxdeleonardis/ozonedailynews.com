import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/video-games/news/marvels-wolverine-state-of-play-gameplay-reveal-september-2026';
const ARTICLE_URL = `https://www.OzoneNews.org${SLUG}`;

export const metadata: Metadata = {
  title: "Marvel's Wolverine Gameplay Reveal | Release Date September 15, 2026",
  description: "Insomniac Games revealed Marvel's Wolverine at Sony's June 2 State of Play. PS5 exclusive, September 15 2026, rated M. Rage Meter combat, Jean Grey,",
  keywords: [
    "Marvel's Wolverine release date",
    "Marvel's Wolverine gameplay trailer",
    "Marvel's Wolverine September 2026",
    "Insomniac Games Wolverine PS5",
    "Marvel's Wolverine State of Play",
    "Marvel's Wolverine Jean Grey",
    "Marvel's Wolverine Sabretooth",
    "Marvel's Wolverine Reavers Bolivar Trask",
    "Marvel's Wolverine Rage Meter",
    "Marvel's Wolverine rated M",
    "Marvel's Wolverine price $69.99",
    "Marvel's Wolverine Digital Deluxe Edition",
    "Marvel's Wolverine Earth-1048",
    "PlayStation State of Play June 2026",
    "Insomniac Wolverine single player",
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: "Marvel's Wolverine Gameplay Reveal | September 15, 2026 PS5 Exclusive",
    description: "Insomniac's Wolverine goes rated M with Rage Meter combat, limb dismemberment, Jean Grey and Sabretooth as AI companions, and a September 15 release. No",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'OzoneNews',
    authors: ['OzoneNews Editorial Team'],
    publishedTime: '2026-06-04T12:00:00-05:00',
    modifiedTime: '2026-06-04T12:00:00-05:00',
    section: 'Gaming',
    tags: ["Marvel's Wolverine", 'Insomniac Games', 'PlayStation 5', 'State of Play', 'Action Games'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Marvel's Wolverine | Sept 15 Release, Rated M, Jean Grey Confirmed",
    description: "Rage Meter, limb dismemberment, Bolivar Trask villain, no Spider-Man. Insomniac goes full berserker mode.",
  },
};

export default function WolverineGameplayRevealPage() {
  return <NewsArticleDB slug="video-games-news-marvels-wolverine-state-of-play-gameplay-reveal-september-2026" />;
}
