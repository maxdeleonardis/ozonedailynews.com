import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/anime/news/hunter-x-hunter-volume-39-release-date-july-2026';
const ARTICLE_URL = `https://www.OzoneNews.org${SLUG}`;

export const metadata: Metadata = {
  title: 'Hunter x Hunter Volume 39 | Release Date July 3, 2026',
  description: 'Shueisha confirmed Hunter x Hunter Volume 39 releases July 3, 2026 in Japan, compiling Chapters 401-410 and ending a 22-month print hiatus. English release via VIZ Media to follow.',
  keywords: [
    'Hunter x Hunter Volume 39',
    'Hunter x Hunter Volume 39 release date',
    'HxH Volume 39 July 2026',
    'Hunter x Hunter chapters 401 410',
    'Yoshihiro Togashi Volume 39',
    'Hunter x Hunter hiatus end 2026',
    'Hunter x Hunter Succession Contest Arc',
    'HxH new chapters 2026',
    'Hunter x Hunter July 3 2026',
    'Hunter x Hunter VIZ Media english release',
    'Shueisha Hunter x Hunter 2026',
    'Hunter x Hunter manga return 2026',
    'Hunter x Hunter chapter 411',
    'Togashi back pain chapters',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Hunter x Hunter Volume 39 | Release Date July 3, 2026',
    description: 'Shueisha confirmed Vol. 39 drops July 3 in Japan, compiling Chapters 401-410. Fans are speculating Chapter 411 returns in late July, tying into Shueisha\'s 100th anniversary.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'OzoneNews',
    authors: ['OzoneNews Editorial Team'],
    publishedTime: '2026-06-04T10:00:00-05:00',
    modifiedTime: '2026-06-04T10:00:00-05:00',
    section: 'Anime',
    tags: ['Hunter x Hunter', 'Yoshihiro Togashi', 'Manga', 'Shueisha', 'Anime', 'Shonen Jump'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hunter x Hunter Vol. 39 Confirmed | July 3, 2026 in Japan',
    description: 'The 22-month print hiatus ends. Chapters 401-410, Succession Contest Arc. Chapter 411 could return late July.',
  },
};

export default function HxHVolume39Page() {
  return <NewsArticleDB slug="anime-news-hunter-x-hunter-volume-39-release-date-july-2026" />;
}
