import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/video-games/007-first-light/news/amazon-mgm-takes-publishing-control-future-bond-games';
const ARTICLE_URL = `https://www.OzoneNews.org${SLUG}`;

export const metadata: Metadata = {
  title: "Amazon MGM Takes Publishing Control | Future Bond Games 2026",
  description: "Amazon Game Studios and MGM will publish all future James Bond games, stripping IO Interactive of self-publishing rights. A legal loophole let 007 First",
  keywords: [
    'Amazon MGM Bond games publishing',
    'IO Interactive self-publishing rights Bond',
    '007 First Light sequel publisher',
    'Amazon Game Studios James Bond',
    'Jeff Gattis Amazon gaming interview',
    'James Bond game trilogy IO Interactive',
    'Amazon MGM James Bond franchise',
    'IO Interactive Bond sequel',
    '007 First Light Amazon',
    'James Bond game future 2026',
    'MGM Amazon gaming Bond',
    'IO Interactive Project 007',
    'Amazon Bond franchise control',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: "Amazon MGM Takes Publishing Control | Future Bond Games 2026",
    description: "IO Interactive's self-publishing deal predated Amazon's $8.45B MGM acquisition. Jeff Gattis confirms Amazon Game Studios will fund and publish all future",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'OzoneNews',
    authors: ['OzoneNews Editorial Team'],
    publishedTime: '2026-06-04T14:00:00-05:00',
    modifiedTime: '2026-06-04T14:00:00-05:00',
    section: 'Gaming',
    tags: ['007 First Light', 'IO Interactive', 'Amazon', 'MGM', 'James Bond', 'Gaming Industry'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amazon Takes the Keys to Bond Gaming | IO Loses',
    description: '007 First Light shipped under an old self-pub deal. Amazon now controls all future sequels. 88 Metacritic, 1.5M day-one sales, and a new corporate',
  },
};

export default function AmazonMGMBondPublishingPage() {
  return <NewsArticleDB slug="video-games-007-first-light-news-amazon-mgm-takes-publishing-control-future-bond-games" />;
}
