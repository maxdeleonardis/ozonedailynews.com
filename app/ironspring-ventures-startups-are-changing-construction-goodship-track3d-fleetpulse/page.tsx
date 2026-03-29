import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Ironspring Ventures: Startups Are Changing Construction with Goodship, Track3D, and FleetPulse | ObjectWire",
  description: "Ironspring Ventures backs three innovative construction tech startups, Goodship, Track3D, and FleetPulse, that are revolutionizing the $10 trillion construction industry with AI and automation.",
  keywords: ["Ironspring Ventures", "construction tech", "Goodship", "Track3D", "FleetPulse", "construction startups", "AI construction", "venture capital"],
  alternates: {
    canonical: 'https://www.objectwire.org/ironspring-ventures-startups-are-changing-construction-goodship-track3d-fleetpulse',
  },
};

export default function IronspringVenturesConstructionPage() {
  return <WikiArticle slug="ironspring-ventures-startups-are-changing-construction-goodship-track3d-fleetpulse" />;
}
