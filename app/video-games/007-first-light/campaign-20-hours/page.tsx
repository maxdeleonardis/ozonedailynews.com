import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

export const dynamic = 'force-static';
export const revalidate = false;

const SLUG = '/video-games/007-first-light/campaign-20-hours';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title: '007 First Light Campaign Length | 20 Hours Average Playthrough',
  description:
    '007 First Light campaign is reportedly around 20 hours for an average player. Tactical Simulator mode extends playtime with new objectives and post-launch missions. Launches May 27, 2026.',
  keywords: [
    '007 First Light campaign length',
    '007 First Light how long to beat',
    '007 First Light playtime',
    '007 First Light 20 hours',
    'IO Interactive Bond game length',
    '007 First Light Tactical Simulator',
    '007 First Light May 2026',
    '007 First Light PS5',
    '007 First Light story length',
    'James Bond game campaign',
    '007 First Light post launch content',
    'IO Interactive First Light',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: '007 First Light Campaign Length | 20 Hours Average Playthrough',
    description:
      'IO Interactive\'s Bond origin story targets 20 hours for a standard run. Tactical Simulator mode and post-launch missions extend total playtime. Launches May 27, 2026.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['ObjectWire Gaming Desk'],
    publishedTime: '2026-05-04T13:00:00Z',
    modifiedTime: '2026-05-04T13:00:00Z',
    section: 'Gaming',
    tags: ['007 First Light', 'IO Interactive', 'James Bond', 'Gaming'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '007 First Light | 20-Hour Campaign, Tactical Simulator Mode Details',
    description:
      'IO Interactive\'s Bond origin story runs 20 hours for an average player. Post-launch Tactical Simulator missions also confirmed. May 27 launch.',
  },
};

export default function FirstLightCampaign20HoursPage() {
  return <JackArticleDB slug="video-games-007-first-light-campaign-20-hours" />;
}
