import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Minnesota's Tech Hub Growth Threatens Austin's Dominance | ObjectWire",
  description: "Minnesota emerges as a rising tech center, challenging Austin's position. Growth in tech companies, talent attraction, and innovation ecosystem transforms the Land of 10,000 Lakes.",
  keywords: [
    "Minnesota tech hub",
    "Minnesota technology",
    "Minnesota tech companies",
    "Minnesota startup scene",
    "Twin Cities tech",
    "tech industry trends",
    "Minnesota tech growth",
    "tech talent migration"
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/news/texas/austin-tech-hub-decline',
  },
  openGraph: {
    type: "article",
    title: "Minnesota Emerges as Major Tech Hub",
    description: "Growth and innovation challenge traditional tech centers, positioning Minnesota as a tech destination.",
  },
};

export default function AustinTechHubPage() {
  return <WikiArticle slug="news-texas-austin-tech-hub-decline" />;
}
