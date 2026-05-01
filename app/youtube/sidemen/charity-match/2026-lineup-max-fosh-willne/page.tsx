import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.


const SLUG = '/youtube/sidemen/charity-match/2026-lineup-max-fosh-willne';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://www.objectwire.org/influncer/sidemne_charity_match_26.png';

export const metadata: Metadata = {
  title: 'Sidemen Charity Match 2026 Lineup | Max Fosh, WillNE',
  description: 'The full Sidemen Charity Match 2026 lineup is confirmed. Max Fosh and WillNE join the YouTube All-Stars squad after contentious dropouts including Logan',
  keywords: [
    'Sidemen Charity Match 2026 lineup',
    'Sidemen Charity Match 2026',
    'Max Fosh Sidemen Charity Match',
    'WillNE Sidemen Charity Match',
    'Logan Paul Sidemen dropout',
    'KSI Sidemen Charity Match 2026',
    'YouTube All-Stars 2026',
    'Sidemen FC 2026',
    'Sidemen Charity Match Wembley',
    'IShowSpeed Sidemen dropout',
    'MrBeast Sidemen Charity Match',
    'Angry Ginge Sidemen 2026',
    'xQc Sidemen Charity Match',
    'Calfreezy manager 2026',
    'Sidemen charity Unicef',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Sidemen Charity Match 2026 Lineup | Max Fosh, WillNE',
    description: 'Full squads revealed: KSI, xQc, Angry Ginge, Max Fosh, and WillNE headline the 2026 Sidemen Charity Match. Logan Paul, IShowSpeed, and MrBeast will not',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Sports Desk'],
    publishedTime: '2026-04-17T19:00:00Z',
    modifiedTime: '2026-04-17T19:00:00Z',
    section: 'Sports',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Sidemen Charity Match 2026 squad lineup' }],
    tags: ['Sidemen', 'KSI', 'Charity Match 2026', 'Wembley'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sidemen Charity Match 2026 full lineup confirmed',
    description: 'Logan Paul out (WrestleMania clash). IShowSpeed out. MrBeast out. Max Fosh and WillNE in. KSI and Angry Ginge back at Wembley.',
    images: [OG_IMAGE],
  },
};

export default function YoutubeSidemenCharityMatch2026LineupMaxFoshWillnePage() {
  return <NewsArticleDB slug="youtube-sidemen-charity-match-2026-lineup-max-fosh-willne" />;
}
