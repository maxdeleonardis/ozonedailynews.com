import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/anime/news/the-one-piece-wit-studio-netflix-february-2027';
const OG_IMAGE = `https://www.ozonenetwork.news/api/og?slug=${encodeURIComponent('/anime/news/the-one-piece-wit-studio-netflix-february-2027')}&category=Entertainment`;

export const metadata: Metadata = {
  title: 'THE ONE PIECE Remake | WIT Studio Netflix February 2027, 7-Episode East Blue',
  description:
    'WIT Studio\'s THE ONE PIECE premieres February 2027 on Netflix. 7 episodes, 300 minutes, East Blue Saga from chapter 1 to the Baratie arc. Director Masashi Koizuka strips Toei filler for a cinematic entry point.',
  keywords: [
    'THE ONE PIECE WIT Studio Netflix',
    'THE ONE PIECE release date 2027',
    'THE ONE PIECE remake Netflix',
    'One Piece anime remake WIT Studio',
    'Masashi Koizuka One Piece director',
    'THE ONE PIECE East Blue Saga',
    'THE ONE PIECE 7 episodes',
    'THE ONE PIECE February 2027',
    'WIT Studio anime 2027',
    'George Wada WIT One Piece',
    'One Piece anime vs remake',
    'Monkey D Luffy WIT Studio',
    'Baratie arc One Piece remake',
    'Sanji One Piece WIT Netflix',
    'Netflix anime 2027',
    'One Piece 530 million manga sales',
  ],
  alternates: { canonical: `https://www.ozonenetwork.news${SLUG}` },
  openGraph: {
    title: 'THE ONE PIECE | WIT Studio Netflix February 2027, 7-Episode East Blue Drop',
    description:
      '300 minutes, 7 episodes, no filler. Masashi Koizuka directs the Attack on Titan studio\'s cinematic reimagining of the world\'s best-selling manga for a simultaneous worldwide Netflix debut.',
    type: 'article',
    url: `https://www.ozonenetwork.news${SLUG}`,
    siteName: 'OzoneNews',
    authors: ['OzoneNews Editorial Team'],
    publishedTime: '2026-05-29T16:30:00-05:00',
    modifiedTime: '2026-05-29T16:30:00-05:00',
    section: 'Entertainment',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'THE ONE PIECE WIT Studio Netflix anime remake February 2027' }],
    tags: ['THE ONE PIECE', 'WIT Studio', 'Netflix Anime', 'One Piece Remake'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'THE ONE PIECE | WIT Studio, Netflix, February 2027',
    description: '7 episodes. 300 minutes. No filler. Attack on Titan\'s studio takes on the world\'s best-selling manga.',
    images: [OG_IMAGE],
  },
};

export default function TheOnePiecePage() {
  return <NewsArticleDB slug="anime-news-the-one-piece-wit-studio-netflix-february-2027" />;
}
