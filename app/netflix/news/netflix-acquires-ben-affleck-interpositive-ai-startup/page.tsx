import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Netflix Acquires Ben Affleck AI Startup InterPositive After Dropping Warner Bros. Bid',
  description:
    "Netflix abandons its $111 billion Warner Bros. Discovery pursuit and acquires InterPositive, Ben Affleck's AI filmmaking startup. Breaking down what the deal means for Hollywood, AI in post-production, and the future of streaming.",
  keywords: [
    'Netflix acquires InterPositive',
    'Ben Affleck AI startup',
    'Netflix Warner Bros. deal collapse',
    'AI filmmaking post-production',
    'InterPositive Visual Logic',
    'Netflix streaming strategy 2026',
    'Paramount Skydance Warner Bros. Discovery',
    'Ted Sarandos Netflix pivot',
    'Hollywood AI technology',
    'Netflix acquisition news',
  ],
  openGraph: {
    title: 'Netflix Acquires Ben Affleck AI Startup InterPositive After Dropping Warner Bros. Bid',
    description:
      "Netflix pivots from a $111B Warner Bros. bid to acquire Ben Affleck's AI filmmaking startup InterPositive — bringing 16 engineers and a new vision for AI-assisted post-production into the Netflix ecosystem.",
    url: 'https://www.objectwire.org/netflix/news/netflix-acquires-ben-affleck-interpositive-ai-startup',
    type: 'article',
    images: [{ url: 'https://www.objectwire.org/entertainment/Ben%20Aflecc.PNG', alt: 'Ben Affleck InterPositive Netflix acquisition' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Netflix Acquires Ben Affleck AI Startup InterPositive After Dropping Warner Bros. Bid',
    description:
      "Netflix walks away from a $111B WBD bid — then acquires Ben Affleck's AI filmmaking startup InterPositive days later.",
    images: ['https://www.objectwire.org/entertainment/Ben%20Aflecc.PNG'],
  },
  alternates: { canonical: 'https://www.objectwire.org/netflix/news/netflix-acquires-ben-affleck-interpositive-ai-startup' },
};

export default function NetflixInterPositiveAcquisitionPage() {
  return <WikiArticle slug="netflix-news-netflix-acquires-ben-affleck-interpositive-ai-startup" />;
}
