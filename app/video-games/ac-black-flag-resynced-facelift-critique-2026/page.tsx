import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/video-games/ac-black-flag-resynced-facelift-critique-2026';
const ARTICLE_URL = `https://www.ozonenetwork.news${SLUG}`;
const OG_IMAGE = 'https://www.ozonenetwork.news/api/og?title=AC+Black+Flag+Resynced+%7C+Glorified+Facelift%2C+Not+a+Remake&category=Gaming&desc=Ubisoft+cuts+multiplayer%2C+Freedom+Cry%2C+and+Abstergo+for+ray-tracing+and+QoL+tweaks&author=Jack+Sterling&date=May+21%2C+2026';

export const metadata: Metadata = {
  title: 'AC Black Flag Resynced Is a Glorified Facelift | Not a Remake',
  description: "Ubisoft's Black Flag Resynced adds ray-tracing and new Blackbeard chapters but cuts multiplayer, Freedom Cry, and the Abstergo modern-day layer. The 2013 skeleton, parkour jank and brain-dead AI intact, runs on a better GPU.",
  keywords: [
    'AC Black Flag Resynced review',
    'Black Flag Resynced facelift not remake',
    'Assassin\'s Creed Black Flag 2026',
    'Black Flag Resynced multiplayer cut',
    'Black Flag Resynced Freedom Cry removed',
    'Black Flag Resynced Abstergo cut',
    'Black Flag Resynced vs original 2013',
    'Ubisoft Black Flag remake critique',
    'Black Flag Resynced ray tracing review',
    'AC Black Flag Resynced Blackbeard Stede Bonnet chapters',
    'Black Flag Resynced enemy AI',
    'Black Flag Resynced parkour jank',
    'Ubisoft Anvil engine remake 2026',
    'AC Black Flag Resynced is it worth it',
    'game remake vs remaster 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'AC Black Flag Resynced Is a Glorified Facelift | The Case Against Calling It a Remake',
    description: 'Multiplayer cut. Freedom Cry gone. Abstergo layer removed. The 2013 parkour jank and brain-dead AI are still there. What Resynced actually is, examined.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'OzoneNews',
    authors: ['Jack Sterling'],
    publishedTime: '2026-05-21T23:00:00-05:00',
    modifiedTime: '2026-05-21T23:00:00-05:00',
    section: 'Gaming',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: "AC Black Flag Resynced facelift critique 2026" }],
    tags: ["Assassin's Creed Black Flag Resynced", 'Ubisoft', 'Game Remakes', 'Gaming Analysis'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Black Flag Resynced: No Multiplayer. No Freedom Cry. Same 2013 AI. Is It Actually a Remake?',
    description: 'Hands-on analysis of what Ubisoft added, what they cut, and whether the ray-tracing justifies the full 2026 price tag.',
    images: [OG_IMAGE],
  },
};

export default function BlackFlagResyncedCritiquePage() {
  return <JackArticleDB slug="video-games-ac-black-flag-resynced-facelift-critique-2026" />;
}
