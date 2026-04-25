import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "David Sacks | All-In Podcast Host, PayPal Mafia, and",
  description: "Complete profile of David Sacks - All-In Podcast co-host, PayPal COO, Yammer founder, Craft Ventures GP. From PayPal Mafia to enterprise SaaS kingmaker",
  keywords: [
    "David Sacks",
    "David O. Sacks",
    "All-In Podcast",
    "PayPal Mafia",
    "Yammer",
    "Craft Ventures",
    "enterprise software",
    "SaaS investor",
    "Silicon Valley",
    "tech policy",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/davos/all-in-podcast/david-sacks',
  },
  openGraph: {
    title: "David Sacks Profile | PayPal Mafia Member & All-In Podcast",
    description: "Inside the career of David Sacks: PayPal COO, Yammer founder, Craft Ventures GP, and All-In Podcast co-host shaping tech policy debates.",
    type: "article",
    url: "https://www.objectwire.org/davos/all-in-podcast/david-sacks",
    images: [
      {
        url: "https://www.objectwire.org/images/david-sacks-og.jpg",
        width: 1200,
        height: 630,
        alt: "David Sacks - All-In Podcast Host",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'David Sacks Profile | PayPal Mafia Member & All-In Podcast',
    description: 'Inside the career of David Sacks: PayPal COO, Yammer founder, Craft Ventures GP, and All-In Podcast co-host shaping tech policy debates.',
  },
};

export default function DavidSacksPage() {
  return <WikiArticle slug="events-davos-all-in-podcast-david-sacks" />;
}
