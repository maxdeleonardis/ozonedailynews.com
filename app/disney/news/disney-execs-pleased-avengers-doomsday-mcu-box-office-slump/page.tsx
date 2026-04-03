import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/disney/news/disney-execs-pleased-avengers-doomsday-mcu-box-office-slump';

export const metadata: Metadata = {
  title: "Disney Execs 'Pleased' With Avengers: Doomsday Amid Ongoing Marvel Box Office Slump | ObjectWire",
  description:
    "Disney executives expressed satisfaction with early footage of Avengers: Doomsday in a February 25 Variety report, while rival studio heads privately predict the film will be 2026's highest-grossing release, even as Marvel's box office has fallen sharply since its 2018-2019 peak.",
  keywords: [
    'Avengers Doomsday 2026',
    'Disney Marvel box office slump',
    'MCU box office decline',
    'Avengers Doomsday Robert Downey Jr',
    'Doctor Doom MCU',
    'Russo Brothers Avengers Doomsday',
    'The Marvels box office failure',
    'superhero fatigue box office',
    'Bob Iger Marvel quality',
    'Marvel Cinematic Universe decline',
    'Ant-Man Quantumania box office',
    'Captain America Brave New World',
    'Thunderbolts box office 2025',
    'MCU Phase 5 underperformance',
    'Avengers Doomsday budget',
    'Disney entertainment revenue 2025',
    'Marvel Disney 2026',
  ],
  alternates: {
    canonical: `https://www.objectwire.org${SLUG}`,
  },
  openGraph: {
    title: "Disney Execs 'Pleased' With Avengers: Doomsday as MCU Eyes Comeback From Box Office Slump",
    description:
      "Anonymous Disney insiders tell Variety the MCU's health doesn't hinge on a single film, but the ledger of recent Marvel flops tells a different story heading into December 2026.",
    type: 'article',
    url: `https://www.objectwire.org${SLUG}`,
    siteName: 'ObjectWire',
    authors: ['Alfansa'],
    publishedTime: '2026-02-25T16:00:00Z',
    modifiedTime: '2026-02-25T16:00:00Z',
    section: 'Disney',
    tags: [
      'Disney', 'Marvel', 'Avengers Doomsday', 'MCU', 'Box Office',
      'Robert Downey Jr', 'Russo Brothers', 'Doctor Doom', 'Bob Iger',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Disney Execs 'Pleased' With Avengers: Doomsday: But the Box Office Ledger Still Keeps Score",
    description:
      'Rival studio heads privately predict Doomsday will top 2026 box office. Disney says no single MCU film defines the franchise. The numbers since 2019 say otherwise.',
  },
};

export default function AvengersDoomsdayDisneyBoxOfficePage() {
  return <NewsArticleDB slug="disney-news-disney-execs-pleased-avengers-doomsday-mcu-box-office-slump" />;
}
