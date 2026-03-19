import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "19th Century Austin Home Once Owned by Elijah Wood Listed at $3.2M | ObjectWire",
  description:
    "A historic 1890s Austin home previously owned by Lord of the Rings star Elijah Wood hits the market at $3.2 million. Inside the property's storied history and celebrity connection.",
  keywords: [
    "Elijah Wood",
    "Austin real estate",
    "historic home",
    "celebrity home",
    "Travis Heights",
    "Victorian architecture",
    "Austin Texas",
    "luxury real estate",
  ],
  alternates: {
    canonical: "https://www.objectwire.org/austin/19th-century-Austin-home-once-owned-Elijah-Wood-listed-at-3.2M",
  },
};

export default function ElijahWoodAustinHomePage() {
  return <WikiArticle slug="news-texas-austin-19th-century-Austin-home-once-owned-Elijah-Wood-listed-at-3.2M" />;
}
