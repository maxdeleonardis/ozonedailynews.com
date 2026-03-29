import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Darryl Payne Jr. | Team USA Skeleton | Olympic Profile | ObjectWire',
  description:
    'Full profile of Darryl Payne Jr., the Temple, Texas native and Baylor University track athlete who became the first African American man to compete for the United States in Olympic skeleton at the 2026 Milano Cortina Winter Games.',
  keywords: [
    'Darryl Payne Jr.',
    'Team USA skeleton',
    'first African American skeleton',
    'Milano Cortina 2026',
    'Winter Olympics 2026',
    'USA Skeleton',
    'Baylor University',
    'Temple Texas',
    'Black trailblazers Olympics',
    'skeleton athlete profile',
  ],
  openGraph: {
    title: 'Darryl Payne Jr. | First African American Man in U.S. Olympic Skeleton',
    description:
      'How a track athlete from Temple, Texas became a history-maker at the 2026 Winter Olympics, the first African American man ever to represent the United States in Olympic skeleton.',
    type: 'article',
    publishedTime: '2026-02-19T20:00:00Z',
    authors: ['ObjectWire Olympic Bureau'],
    url: 'https://www.objectwire.org/winter-olympics/usa/darryl-payne-jr',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Darryl Payne Jr. | History Made at Milano Cortina 2026',
    description:
      'The Temple, Texas native breaks barriers as the first African American man to compete for Team USA in Olympic skeleton.',
  },
  alternates: {
    canonical: 'https://www.objectwire.org/winter-olympics/usa/darryl-payne-jr',
  },
};

export default function DarrylPayneJrProfile() {
  return <WikiArticle slug="winter-olympics-usa-darryl-payne-jr" />;
}
