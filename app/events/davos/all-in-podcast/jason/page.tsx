import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Jason Calacanis: All-In Podcast Host, Angel Investor, and Tech Entrepreneur Profile",
  description: "Complete profile of Jason Calacanis - All-In Podcast co-host, angel investor in Uber and Robinhood, founder of LAUNCH and Inside.com. Career highlights,",
  keywords: [
    "Jason Calacanis",
    "All-In Podcast",
    "angel investor",
    "This Week in Startups",
    "LAUNCH",
    "Uber investor",
    "Robinhood investor",
    "Silicon Valley",
    "tech entrepreneur",
    "startup investor",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/davos/all-in-podcast/jason',
  },
  openGraph: {
    title: "Jason Calacanis Profile | All-In Podcast Host & Angel Investor",
    description: "Inside the career of Jason Calacanis: from Weblogs Inc. to angel investing powerhouse, All-In Podcast co-host, and Silicon Valley kingmaker.",
    type: "article",
    url: "https://www.objectwire.org/davos/all-in-podcast/jason",
    images: [
      {
        url: "https://www.objectwire.org/images/jason-calacanis-og.jpg",
        width: 1200,
        height: 630,
        alt: "Jason Calacanis - All-In Podcast Host",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jason Calacanis Profile | All-In Podcast Host & Angel Investor',
    description: 'Inside the career of Jason Calacanis: from Weblogs Inc. to angel investing powerhouse, All-In Podcast co-host, and Silicon Valley kingmaker.',
  },
};

export default function JasonCalacanisPage() {
  return <WikiArticle slug="events-davos-all-in-podcast-jason" />;
}
