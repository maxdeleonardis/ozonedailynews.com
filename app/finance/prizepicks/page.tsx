import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

export const dynamic = 'force-dynamic';

const SLUG = '/finance/prizepicks';

export const metadata: Metadata = {
  title: 'PrizePicks | Pick\'em DFS, Legal States & Company Profile 2026',
  description:
    'PrizePicks is a daily fantasy Pick\'em platform with 12M+ users available in 29 states including Texas. Company profile, how it works, and legal status explained.',
  keywords: [
    'PrizePicks',
    'PrizePicks how it works',
    'PrizePicks legal states',
    'PrizePicks Texas',
    'daily fantasy sports',
    'PrizePicks Pick\'em',
    'PrizePicks vs DraftKings',
    'Adam Wexler',
    'daily fantasy apps',
    'PrizePicks app',
    'DFS skill game',
    'PrizePicks over under',
    'PrizePicks 2026',
  ],
  alternates: {
    canonical: `https://www.ozonenetwork.news${SLUG}`,
  },
  openGraph: {
    title: 'PrizePicks | Pick\'em Daily Fantasy, 12M Users & Legal Map 2026',
    description:
      'PrizePicks simplified daily fantasy to a two-pick over/under format and reached 12M+ users across 29 states. Full profile, legal framework, and Texas status.',
    type: 'article',
    url: `https://www.ozonenetwork.news${SLUG}`,
    siteName: 'OzoneNews',
    authors: ['Max DeLeonardis'],
    publishedTime: '2026-05-22T10:30:00-05:00',
    modifiedTime: '2026-05-22T10:30:00-05:00',
    section: 'Finance',
    tags: ['PrizePicks', 'Daily Fantasy Sports', 'Sports Betting', 'Finance'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PrizePicks | 12M Users, Pick\'em Format, 29 States Including Texas',
    description: 'How PrizePicks became the fastest-growing DFS platform, and why it is legal in Texas.',
  },
};

export default function PrizePicksPage() {
  return <ArticlePageDB slug="finance-prizepicks" />;
}
