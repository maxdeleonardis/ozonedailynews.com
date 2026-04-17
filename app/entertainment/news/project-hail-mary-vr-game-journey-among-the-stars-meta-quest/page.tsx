import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/entertainment/news/project-hail-mary-vr-game-journey-among-the-stars-meta-quest';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = '';

export const metadata: Metadata = {
  title: 'Project Hail Mary VR Game | Journey Among the Stars, Meta Quest 3',
  description: 'Amazon MGM and Maze Theory announce Project Hail Mary: Journey Among the Stars, a canon VR expansion for Meta Quest 3 with an original Andy Weir story.',
  keywords: [
    'Project Hail Mary VR game',
    'Project Hail Mary Journey Among the Stars',
    'Maze Theory Project Hail Mary',
    'Project Hail Mary Meta Quest 3',
    'Andy Weir VR game',
    'Project Hail Mary mixed reality',
    'Ryan Gosling Project Hail Mary game',
    'Rocky Eridian VR',
    'Amazon MGM VR game 2026',
    'Project Hail Mary canonical expansion',
    'Hail Mary movie game',
    'Project Hail Mary Pico VR',
    'immersive VR movie tie-in 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Project Hail Mary VR Game | Canon Expansion for Meta Quest 3',
    description: 'Maze Theory and Amazon MGM announce Journey Among the Stars, a mixed-reality VR game with an original Andy Weir story set during the Hail Mary mission.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Entertainment Desk'],
    publishedTime: '2026-04-17T23:30:00Z',
    modifiedTime: '2026-04-17T23:30:00Z',
    section: 'Entertainment',
    tags: ['Project Hail Mary', 'Maze Theory', 'Meta Quest 3', 'Andy Weir'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Project Hail Mary VR game announced | Canon story by Andy Weir',
    description: 'Mixed-reality experience for Meta Quest 3 and Pico. Original Andy Weir story. Your living room becomes the Hail Mary spacecraft.',
  },
};

export default function EntertainmentNewsProjectHailMaryVrGameJourneyAmongTheStarsMetaQuestPage() {
  return <NewsArticleDB slug="entertainment-news-project-hail-mary-vr-game-journey-among-the-stars-meta-quest" />;
}
