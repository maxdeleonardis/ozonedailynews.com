import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/video-games/news/warhorse-studios-middle-earth-rpg-kingdom-come-2026';
const ARTICLE_URL = `https://www.ozonenetwork.news${SLUG}`;
const OG_IMAGE = `https://www.ozonenetwork.news/api/og?title=Warhorse+Studios+Confirms+Middle-earth+RPG+%26+New+Kingdom+Come&category=Gaming&author=Max+DeLeonardis&date=May+20+2026`;

export const metadata: Metadata = {
  title: 'Warhorse Studios Confirms Middle-earth RPG | New Kingdom Come Title 2026',
  description:
    'Warhorse Studios confirms an open-world Middle-earth RPG and a new Kingdom Come title on May 20, 2026. Embracer Group reveals Fellowship Entertainment spin-off and SEK 7.2B AAA write-down.',
  keywords: [
    'Warhorse Studios Middle-earth RPG',
    'Warhorse Studios new game 2026',
    'Kingdom Come new game',
    'Kingdom Come Deliverance 3',
    'Embracer Group Fellowship Entertainment',
    'Fellowship Entertainment Nasdaq Stockholm',
    'Embracer Group Q4 2026',
    'Daniel Vávra Kingdom Come film',
    'Middle-earth RPG 2026',
    'Lord of the Rings game Warhorse',
    'Embracer Group AAA write-down',
    'Kingdom Come spin-off',
    'Warhorse Studios Prague',
    'Phil Rogers Embracer CEO',
    'Tomb Raider Fellowship Entertainment',
    'Kingdom Come franchise new title',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Warhorse Studios Confirms Open-World Middle-earth RPG and New Kingdom Come Title',
    description:
      'Double announcement from Warhorse Studios on May 20, 2026: an open-world Middle-earth RPG and a new Kingdom Come entry, revealed during Embracer Group\'s Q4 earnings alongside a SEK 7.2B write-down.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'OzoneNews',
    authors: ['Max DeLeonardis'],
    publishedTime: '2026-05-20T18:00:00-05:00',
    modifiedTime: '2026-05-20T18:00:00-05:00',
    section: 'Gaming',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 675,
        alt: 'Warhorse Studios confirms open-world Middle-earth RPG and new Kingdom Come title alongside Embracer Group Fellowship Entertainment spin-off',
      },
    ],
    tags: ['Warhorse Studios', 'Kingdom Come', 'Middle-earth', 'Embracer Group', 'Fellowship Entertainment'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Warhorse Studios Is Making a Middle-earth RPG. And a New Kingdom Come.',
    description:
      "Prague's most grounded RPG studio is heading to Tolkien's universe. Announced alongside a SEK 7.2B write-down and the Fellowship Entertainment Nasdaq spin-off from Embracer Group.",
    images: [OG_IMAGE],
  },
};

export default function WarhorseMiddleEarthPage() {
  return (
    <NewsArticleDB slug="video-games-news-warhorse-studios-middle-earth-rpg-kingdom-come-2026" />
  );
}
