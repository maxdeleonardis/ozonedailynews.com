import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Italy Stuns USA in Men\'s Team Pursuit Speedskating for Gold | Milano Cortina 2026 | ObjectWire',
  description: 'Italy defeated the world-record-holding United States team in men\'s team pursuit speedskating at Milano Cortina 2026, claiming gold in a stunning home-crowd upset, their first gold in the event since Turin 2006.',
  keywords: [
    'Italy speedskating', 'team pursuit gold', 'Milano Cortina 2026', 'men\'s team pursuit',
    'Winter Olympics 2026', 'Italy first gold since 2006', 'USA speedskating', 'Olympic upset',
    'home crowd gold', 'Italian Winter Olympics',
  ],
  openGraph: {
    title: 'Italy Stuns World-Record USA Team in Speedskating Team Pursuit for Olympic Gold',
    description: 'Host nation Italy shocks the defending world-record-holding Americans in men\'s team pursuit speedskating, first Italian gold in the event since Turin 2006.',
    type: 'article',
    publishedTime: '2026-02-10T19:00:00Z',
    authors: ['ObjectWire Olympic Bureau'],
    url: 'https://www.objectwire.org/winter-olympics/italy/speedskating-team-pursuit-gold-2026',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Italy Stuns USA for Speedskating Team Pursuit Gold at Milano Cortina 2026',
    description: 'Host nation pulls off one of the biggest upsets of the Games, defeating the world-record-holding USA squad.',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/winter-olympics/italy/speedskating-team-pursuit-gold-2026',
  },
};

export default function ItalySpeedskatingTeamPursuitPage() {
  return <NewsArticleDB slug="winter-olympics-italy-speedskating-team-pursuit-gold-2026" />;
}
