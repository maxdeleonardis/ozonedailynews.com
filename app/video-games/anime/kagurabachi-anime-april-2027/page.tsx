import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

export const dynamic = 'force-static';
export const revalidate = false;

const SLUG = '/video-games/anime/kagurabachi-anime-april-2027';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Kagurabachi Anime | April 2027 Premiere, CygamesPictures',
  description:
    'The Kagurabachi anime adaptation premieres April 2027, produced by CygamesPictures. Based on Takeru Hokazono\'s Weekly Shonen Jump revenge-action manga.',
  keywords: [
    'Kagurabachi anime',
    'Kagurabachi anime release date',
    'Kagurabachi April 2027',
    'CygamesPictures anime',
    'Kagurabachi anime trailer',
    'Kagurabachi Shonen Jump',
    'Takeru Hokazono',
    'Kagurabachi Chihiro Rokuhira',
    'Kagurabachi manga anime adaptation',
    'new anime 2027',
    'Weekly Shonen Jump anime 2027',
    'Kagurabachi teaser trailer',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Kagurabachi Anime | April 2027 Premiere, CygamesPictures',
    description:
      'Official teaser trailer dropped. CygamesPictures producing. April 2027 premiere window confirmed for the hit Weekly Shonen Jump revenge-action manga.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Gaming Desk'],
    publishedTime: '2026-05-04T12:00:00Z',
    modifiedTime: '2026-05-04T12:00:00Z',
    section: 'Gaming',
    tags: ['Kagurabachi', 'Anime', 'Shonen Jump', 'CygamesPictures'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kagurabachi Anime April 2027 | Official Trailer +',
    description:
      'The Shonen Jump revenge-action manga gets its anime. CygamesPictures producing. April 2027.',
  },
};

export default function KagurabachiAnimeApril2027Page() {
  return <JackArticleDB slug="video-games-anime-kagurabachi-anime-april-2027" />;
}
