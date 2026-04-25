import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Lifetime Fitness Austin New Location Opening November",
  description: "Lifetime Fitness opens new Austin location at 1301 South Lamar in November 2025. Details on amenities, membership options, and what to expect from the",
  keywords: [
    "Lifetime Fitness Austin",
    "1301 South Lamar",
    "Austin gym opening",
    "Lifetime Athletic",
    "South Austin fitness",
    "premium gym Austin",
    "fitness club Austin"
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/lifetime-fitness-austin-new-location-opening-in-2025-november-1301-south-lamar',
  },
  openGraph: {
    type: "article",
    title: "Lifetime Fitness Opens New Austin Location on South Lamar",
    description: "Premium fitness club opens November 2025 at 1301 South Lamar with state-of-the-art amenities.",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lifetime Fitness Opens New Austin Location on South Lamar',
    description: 'Premium fitness club opens November 2025 at 1301 South Lamar with state-of-the-art amenities.',
  },
};

export default function LifetimeFitnessAustinPage() {
  return <WikiArticle slug="news-texas-lifetime-fitness-austin-new-location-opening-in-2025-november-1301-south-lamar" />;
}
