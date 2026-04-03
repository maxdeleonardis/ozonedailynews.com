import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Waymo - Autonomous Vehicle News & Updates | ObjectWire",
  description: "Complete coverage of Waymo's self-driving technology, safety investigations, robotaxi operations, and the future of autonomous transportation.",
  keywords: ["Waymo", "autonomous vehicles", "self-driving cars", "robotaxi", "Alphabet", "Google", "NTSB", "safety", "autonomous driving"],
  openGraph: {
    title: "Waymo Coverage | ObjectWire",
    description: "In-depth reporting on Waymo's autonomous vehicle technology and operations.",
    type: "website",
  },
  alternates: {
    canonical: 'https://www.objectwire.org/google/waymo',
  },
};

export default function WaymoPage() {
  return <WikiArticle slug="google-waymo" />;
}
