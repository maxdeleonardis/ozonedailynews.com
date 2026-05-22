import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

export const dynamic = 'force-dynamic';

const SLUG = '/video-games/news/destiny-2-ends-development-bungie-layoffs-2026';
const ARTICLE_URL = `https://www.ozonenetwork.news${SLUG}`;
const OG_IMAGE = 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Destiny 2 Ends Development | Bungie Layoffs, Monument of Triumph June 2026',
  description: 'Bungie confirms Destiny 2 ends active development after June 9, 2026. Monument of Triumph final update restores Director UI, adds The Gauntlet boss rush, upgrades all Exotics to Tier 5. Sony write-downs exceed $700M.',
  keywords: [
    'Destiny 2 ends development',
    'Destiny 2 final update 2026',
    'Bungie layoffs 2026',
    'Monument of Triumph update',
    'Destiny 2 Monument of Triumph June 2026',
    'Bungie Sony write-down',
    'Destiny 2 static archive',
    'Destiny 2 The Gauntlet boss rush',
    'Destiny 2 Exotic armor Tier 5 upgrade',
    'Destiny 2 Director UI restoration',
    'Destiny 2 The Collection',
    'Bungie Marathon sales miss',
    'Destiny 2 servers staying up',
    'live-service game ending 2026',
    'Destiny 2 legacy raid gear set bonuses',
    'Warlock double Nova Bomb',
    'Bungie studio cuts',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Destiny 2 Ends Active Development | Monument of Triumph Final Update Breakdown',
    description: 'Bungie confirms no new Destiny 2 content after June 9. Final patch restores Director UI, opens The Gauntlet boss rush, upgrades all Exotics to Tier 5. Sony has written down $700M+ on the acquisition.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'OzoneNews',
    authors: ['Jack Sterling'],
    publishedTime: '2026-05-21T20:00:00-05:00',
    modifiedTime: '2026-05-21T20:00:00-05:00',
    section: 'Gaming',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Destiny 2 ends development Monument of Triumph final update June 2026' }],
    tags: ['Destiny 2', 'Bungie', 'Monument of Triumph', 'Sony Interactive Entertainment'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Destiny 2 Ends Development | June 9 Final Update, Bungie Layoffs, Sony $700M Write-Down',
    description: 'Monument of Triumph is the last patch. Director UI restored, The Gauntlet opens June 13, all Exotics auto-upgraded to Tier 5.',
    images: [OG_IMAGE],
  },
};

export default function Destiny2EndsDevPage() {
  return <JackArticleDB slug="video-games-news-destiny-2-ends-development-bungie-layoffs-monument-of-triumph-2026" />;
}
