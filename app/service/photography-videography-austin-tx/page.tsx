import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Photography & Videography Services Austin TX | ObjectWire",
  description: "Professional investigative photography and videography in Austin, Texas. Surveillance documentation, legal evidence, scene photography, witness interviews, and court-admissible video/photo services.",
  keywords: ["Austin photography", "Austin videography", "surveillance photography Austin", "legal documentation Texas", "evidence photography"],
  alternates: {
    canonical: 'https://www.objectwire.org/service/photography-videography-austin-tx',
  },
};

export default function PhotographyVideographyAustinPage() {
  return <WikiArticle slug="service-photography-videography-austin-tx" />;
}
