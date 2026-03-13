import type { Metadata } from 'next';
import { WikiArticle } from '@/components/WikiArticle';
// Page renders dynamically — content fetched from Supabase at request time.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Donkey Kong Bananza — GDC 2026 Tech Reveal: 347M Voxels, Switch 2 Destruction Engine | ObjectWire",
  description:
    "Nintendo's GDC 2026 session revealed Donkey Kong Bananza's 347,070,464 individually destructible voxels per level, dynamic resolution system, and restore mechanic. Producer Kenta Motokura and engineer Tatsuya Kurihara detailed how voxel tech evolved from Super Mario Odyssey's snow to Switch 2's breakable worlds.",
  keywords: [
    "Donkey Kong Bananza GDC 2026",
    "Donkey Kong Bananza voxels 347 million",
    "Donkey Kong Bananza destructible world Switch 2",
    "Kenta Motokura Tatsuya Kurihara GDC",
    "Nintendo Switch 2 voxel engine",
    "Donkey Kong Bananza technical breakdown",
    "Donkey Kong Bananza 60fps voxel",
    "Donkey Kong Bananza restore mechanic",
    "Super Mario Odyssey voxel snow origin",
    "Nintendo GDC 2026 Moscone Center",
    "Donkey Kong Bananza canyon layer",
    "Nintendo destructible world game design",
  ],
  alternates: {
    canonical: "https://www.objectwire.org/video-games/nintendo/donkey-kong-bananza",
  },
  openGraph: {
    title: "Donkey Kong Bananza: 347M Voxels Per Level — Nintendo's GDC 2026 Tech Reveal",
    description:
      "Nintendo's Kenta Motokura and Tatsuya Kurihara revealed at GDC 2026 that each Bananza level contains 347,070,464 individually destructible voxels. The tech traces back to Mario Odyssey snow prototypes and was moved from Switch 1 to Switch 2 because the old hardware couldn't handle it.",
    type: "article",
    url: "https://www.objectwire.org/video-games/nintendo/donkey-kong-bananza",
    siteName: "ObjectWire",
    publishedTime: "2026-03-12T10:00:00Z",
    modifiedTime: "2026-03-12T10:00:00Z",
    section: "Video Games",
    tags: ["Donkey Kong Bananza", "Nintendo", "Switch 2", "GDC 2026", "Voxels", "Video Games"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Donkey Kong Bananza: 347,070,464 Destructible Voxels Per Level — GDC 2026",
    description:
      "Each level has 347M individually destructible voxels. Tech originated in Mario Odyssey snow drifts. Moved from Switch 1 to Switch 2 because the old hardware couldn't cope. Full GDC breakdown.",
  },
};

export default function DonkeyKongBananzaPage() {
  return <WikiArticle slug="/video-games/nintendo/donkey-kong-bananza" />;
}
