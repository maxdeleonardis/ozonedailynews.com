import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Ironspring Ventures | Startups Are Changing Construction",
  description: "Ironspring Ventures backs three innovative construction tech startups, Goodship, Track3D, and FleetPulse, that are revolutionizing the $10 trillion",
  keywords: ["Ironspring Ventures", "construction tech", "Goodship", "Track3D", "FleetPulse", "construction startups", "AI construction", "venture capital"],
  alternates: {
    canonical: 'https://www.objectwire.org/ironspring-ventures-startups-are-changing-construction-goodship-track3d-fleetpulse',
  },
  openGraph: {
    title: "Ironspring Ventures | Startups Are Changing Construction",
    description: "Ironspring Ventures backs three innovative construction tech startups, Goodship, Track3D, and FleetPulse, that are revolutionizing the $10 trillion",
    type: 'article',
    url: "https://www.objectwire.org/ironspring-ventures-startups-are-changing-construction-goodship-track3d-fleetpulse",
    siteName: 'ObjectWire',
    section: "News",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ironspring Ventures | Startups Are Changing Construction",
    description: "Ironspring Ventures backs three innovative construction tech startups, Goodship, Track3D, and FleetPulse, that are revolutionizing the $10 trillion",
  },
};

export default function IronspringVenturesConstructionPage() {
  return <WikiArticle slug="ironspring-ventures-startups-are-changing-construction-goodship-track3d-fleetpulse" />;
}
