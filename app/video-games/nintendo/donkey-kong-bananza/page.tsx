import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Donkey Kong Bananza | GDC 2026 Tech Reveal: 347M Voxels",
  description:
    "Nintendo's GDC 2026 session revealed Donkey Kong Bananza's 347,070,464 individually destructible voxels per level, dynamic resolution system, and restore",
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
    canonical: "https://www.ozonenetwork.news/video-games/nintendo/donkey-kong-bananza",
  },
  openGraph: {
    title: "Donkey Kong Bananza: 347M Voxels Per Level | Nintendo's GDC 2026 Tech Reveal",
    description:
      "Nintendo's Kenta Motokura and Tatsuya Kurihara revealed at GDC 2026 that each Bananza level contains 347,070,464 individually destructible voxels. The",
    type: "article",
    url: "https://www.ozonenetwork.news/video-games/nintendo/donkey-kong-bananza",
    siteName: "ObjectWire",
    publishedTime: "2026-03-12T10:00:00Z",
    modifiedTime: "2026-03-12T10:00:00Z",
    section: "Video Games",
    tags: ["Donkey Kong Bananza", "Nintendo", "Switch 2", "GDC 2026", "Voxels", "Video Games"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Donkey Kong Bananza: 347,070,464 Destructible Voxels Per",
    description:
      "Each level has 347M individually destructible voxels. Tech originated in Mario Odyssey snow drifts. Moved from Switch 1 to Switch 2 because the old",
  },
};

export default function DonkeyKongBananzaPage() {
  return <ArticlePageDB slug="video-games-nintendo-donkey-kong-bananza" />;
}
