import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/microsoft/news/valve-ships-cs2-animation-overhaul-not-cs3-april-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const OG_IMAGE = '';

export const metadata: Metadata = {
  title: 'CS2 Animation Overhaul | Valve Debunks CS3 Rumor, April 2026',
  description:
    'Valve released a CS2 animation overhaul beta on April 1, 2026, not a Counter-Strike 3 announcement. The CS3 on UE5 rumor originated from April Fools jokes referencing a fake "March 32nd" launch date.',
  keywords: [
    'CS2 animation overhaul April 2026',
    'Counter-Strike 3 rumor false',
    'CS3 April Fools 2026',
    'Valve CS2 update April 2026',
    'Counter-Strike 2 animation update',
    'CS3 Unreal Engine 5 fake',
    'Valve animation overhaul beta',
    'CS2 animation system update',
    'Counter-Strike 2 beta 2026',
    'CS3 March 32nd joke',
    'Valve gaming news April 2026',
    'CS2 gameplay update',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Valve Ships CS2 Animation Overhaul | CS3 Rumor Was an April Fools Joke',
    description:
      'Reports of Counter-Strike 3 on UE5 are false. Valve released a CS2 animation overhaul beta on April 1, 2026. The CS3 rumor referenced a "March 32nd" launch date, a date that does not exist.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Gaming Desk'],
    publishedTime: '2026-04-01T18:00:00Z',
    modifiedTime: '2026-04-01T18:00:00Z',
    section: 'Gaming',
    tags: ['Counter-Strike 2', 'Valve', 'CS3', 'April Fools', 'Gaming', 'CS2 Update'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'No, Valve Did Not Announce CS3. Here Is What Actually Happened.',
    description:
      'The CS3 on UE5 rumor was an April Fools joke. Valve actually shipped a CS2 animation overhaul beta on April 1, 2026.',
  },
};

export default function MicrosoftNewsValveShipsCs2AnimationOverhaulNotCs3April2026Page() {
  return <NewsArticleDB slug="microsoft-news-valve-ships-cs2-animation-overhaul-not-cs3-april-2026" />;
}
