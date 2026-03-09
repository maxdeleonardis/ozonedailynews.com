import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Swiss Skier von Allmen Wins Third Gold, Joins All-Time Greats | Breaking News | Object Wire',
  description: 'Switzerland\'s Franjo von Allmen secured his place among Alpine skiing\'s all-time greats, winning the men\'s super-G at Milano Cortina to claim his third gold medal in just five days. He joins Killy and Sailer as only the third male skier to win three events at a single Winter Olympics.',
  keywords: ['Franjo von Allmen', 'Switzerland', 'Alpine skiing', 'super-G', 'Winter Olympics', 'Milano Cortina', 'Jean-Claude Killy', 'Toni Sailer', 'three gold medals'],
  openGraph: {
    title: 'Swiss Skier von Allmen Wins Third Gold, Joins All-Time Greats',
    description: 'Franjo von Allmen joins Killy and Sailer as only the third male Alpine skier to win three events at a single Winter Olympics.',
    type: 'article',
    publishedTime: '2026-02-11T15:45:00Z',
    authors: ['Object Wire Staff'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Swiss Skier von Allmen Wins Third Gold, Joins All-Time Greats',
    description: 'Franjo von Allmen joins Killy and Sailer as only the third male Alpine skier to win three events at a single Winter Olympics.',
  }
};

export default function VonAllmenThirdGoldArticle() {
  return <WikiArticle slug="winter-olympics-swiss-skier-von-allmen-wins-third-gold" />;
}
