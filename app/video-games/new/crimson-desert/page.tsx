import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

export const dynamic = 'force-dynamic';

const SLUG = '/video-games/new/crimson-desert';

export const metadata: Metadata = {
  title: 'Crimson Desert | Release Date, Story, Gameplay & News 2026',
  description: 'Everything confirmed about Crimson Desert by Pearl Abyss, covering release date, story, gameplay mechanics, map size, platforms, and all the latest news for the open-world action RPG.',
  keywords: [
    'Crimson Desert',
    'Crimson Desert release date',
    'Crimson Desert gameplay',
    'Crimson Desert story',
    'Pearl Abyss Crimson Desert',
    'Crimson Desert PS5',
    'Crimson Desert PC Steam',
    'Crimson Desert map size',
    'Crimson Desert Kliff Greymanes',
    'Crimson Desert open world RPG 2026',
    'Crimson Desert vs Elden Ring',
    'Crimson Desert wishlist Steam',
    'Crimson Desert single player',
    'Crimson Desert 2026',
  ],
  alternates: { canonical: `https://www.OzoneNews.org${SLUG}` },
  openGraph: {
    title: 'Crimson Desert | Release Date, Story & Gameplay 2026',
    description: 'Full hub for Crimson Desert by Pearl Abyss. Release date, map size, story, platforms, and all confirmed details for the open-world action RPG.',
    type: 'article',
    url: `https://www.OzoneNews.org${SLUG}`,
    siteName: 'OzoneNews',
    authors: ['Rudy Sinigur'],
    section: 'Gaming',
    tags: ['Crimson Desert', 'Pearl Abyss', 'Open World RPG', 'PS5', 'Gaming'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crimson Desert | Everything Confirmed So Far',
    description: 'Release date, map twice Skyrim, story, platforms, all confirmed Crimson Desert details in one place.',
  },
};

export default function CrimsonDesertHubPage() {
  return <ArticlePageDB slug="video-games-new-crimson-desert" />;
}
