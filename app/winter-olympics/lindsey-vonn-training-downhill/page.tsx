import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Lindsey Vonn Posts Third-Fastest Training Time Before",
  description: "The 41-year-old American skiing legend posted the third-fastest time in Olympic downhill training just nine days after a crash, finishing 0.37 seconds",
  keywords: [
    "Lindsey Vonn",
    "Olympic downhill",
    "Milano Cortina 2026",
    "alpine skiing",
    "torn ACL",
    "Team USA",
    "Breezy Johnson",
    "Winter Olympics 2026",
  ],
  openGraph: {
    title: "Lindsey Vonn Posts Third-Fastest Time in Olympic",
    description: "41-year-old Vonn skis on torn ACL nine days after crash, posts impressive training time",
    type: "article",
    url: "https://www.objectwire.org/winter-olympics/lindsey-vonn-training-downhill",
    publishedTime: '2026-02-12T12:00:00Z',
    modifiedTime: '2026-02-12T12:00:00Z',
    authors: ['Connan Boyle'],
    images: [
      {
        url: "https://www.objectwire.org/lindsey-vonn-downhill-2026.jpg",
        width: 1200,
        height: 630,
        alt: "Lindsey Vonn skiing in Olympic downhill training",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lindsey Vonn Posts 3rd-Fastest Time in Olympic Training",
    description: "41-year-old skiing legend shows resilience 9 days after crash",
  },
  alternates: {
    canonical: "https://www.objectwire.org/winter-olympics/lindsey-vonn-training-downhill",
  },
};

export default function LindseyVonnTrainingPage() {
  return <NewsArticleDB slug="winter-olympics-lindsey-vonn-training-downhill" />;
}
