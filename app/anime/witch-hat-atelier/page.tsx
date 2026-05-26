import type { Metadata } from 'next';
import { CreatorArticleDB } from '@/components/articles/CreatorArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/anime/witch-hat-atelier';
const PAGE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Witch Hat Atelier | Review, Staff, Season 2 News 2026',
  description:
    'Witch Hat Atelier (Tongari Boushi no Atelier) is the Spring 2026 AotY frontrunner. BUG FILMS, director Ayumu Watanabe, composer Yuka Kitamura. 13 episodes now airing on Crunchyroll. Season 2 outlook inside.',
  keywords: [
    'Witch Hat Atelier',
    'Tongari Boushi no Atelier',
    'Witch Hat Atelier anime',
    'Witch Hat Atelier 2026',
    'Witch Hat Atelier review',
    'Witch Hat Atelier Season 2',
    'Witch Hat Atelier BUG FILMS',
    'Witch Hat Atelier Crunchyroll',
    'Witch Hat Atelier director',
    'Ayumu Watanabe anime',
    'Yuka Kitamura anime',
    'Kamome Shirahama manga',
    'Spring 2026 anime',
    'anime of the year 2026',
    'Witch Hat Atelier episodes',
    'Witch Hat Atelier characters',
    'Coco witch hat anime',
    'anime 2026',
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Witch Hat Atelier | Spring 2026 Review, Staff & Season 2 News',
    description:
      'BUG FILMS completed all 13 episodes before broadcast. Director Ayumu Watanabe, Elden Ring composer Yuka Kitamura. The AotY frontrunner is airing now on Crunchyroll.',
    type: 'article',
    url: PAGE_URL,
    siteName: 'OzoneNews',
    authors: ['Jack Sterling'],
    publishedTime: '2026-05-25T18:00:00Z',
    modifiedTime: '2026-05-25T18:00:00Z',
    section: 'Anime',
    images: [
      {
        url: IMAGE_URL,
        width: 1200,
        height: 675,
        alt: 'Witch Hat Atelier Spring 2026 anime BUG FILMS',
      },
    ],
    tags: ['Witch Hat Atelier', 'BUG FILMS', 'Anime 2026', 'Crunchyroll', 'Ayumu Watanabe'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Witch Hat Atelier | The Spring 2026 AotY Frontrunner',
    description:
      'BUG FILMS finished all episodes before airing. Director of Summer Time Rendering. Elden Ring composer. The most-watched anime of Spring 2026 — now on Crunchyroll.',
    images: [IMAGE_URL],
  },
};

export default function WitchHatAtelierPage() {
  return <CreatorArticleDB slug="anime-witch-hat-atelier" />;
}
