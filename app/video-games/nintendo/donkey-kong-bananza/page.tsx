import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/articles/ArticlePageDB';

export const dynamic = 'force-dynamic';

const SLUG = '/video-games/nintendo/donkey-kong-bananza';

export const metadata: Metadata = {
  title: "Donkey Kong Bananza | 347M Voxels, Switch 2 Launch Title",
  description:
    "Donkey Kong Bananza launches June 5, 2026 on Nintendo Switch 2 at $59.99. Nintendo's GDC 2026 session revealed 347,070,464 individually destructible voxels per level, a dynamic resolution system, and the Restore mechanic. Directed by Kenta Motokura.",
  keywords: [
    "Donkey Kong Bananza",
    "Donkey Kong Bananza release date",
    "Donkey Kong Bananza Switch 2",
    "Donkey Kong Bananza voxels 347 million",
    "Donkey Kong Bananza GDC 2026",
    "Donkey Kong Bananza destructible world",
    "Kenta Motokura Tatsuya Kurihara",
    "Nintendo Switch 2 launch games",
    "Nintendo Switch 2 platformer",
    "Donkey Kong Bananza 60fps",
    "Donkey Kong Bananza restore mechanic",
    "Donkey Kong Bananza canyon layers",
    "Nintendo GDC 2026",
    "Donkey Kong 2026",
  ],
  alternates: {
    canonical: `https://www.ozonenetwork.news${SLUG}`,
  },
  openGraph: {
    title: "Donkey Kong Bananza | 347M Voxels Per Level, Nintendo Switch 2",
    description:
      "Nintendo's Kenta Motokura and Tatsuya Kurihara revealed at GDC 2026 that each Bananza level contains 347,070,464 individually destructible voxels. Launches June 5, 2026 on Nintendo Switch 2 at $59.99.",
    type: "article",
    url: `https://www.ozonenetwork.news${SLUG}`,
    siteName: "OzoneNews",
    authors: ["Max DeLeonardis"],
    publishedTime: "2026-03-12T10:00:00-05:00",
    modifiedTime: "2026-05-20T12:00:00-05:00",
    section: "Gaming",
    tags: ["Donkey Kong Bananza", "Nintendo", "Nintendo Switch 2", "GDC 2026", "Gaming"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Donkey Kong Bananza | 347M Destructible Voxels Per Level",
    description:
      "Each level has 347M individually destructible voxels. Tech originated in Mario Odyssey snow drifts. Moved from Switch 1 to Switch 2. Launches June 5, 2026.",
  },
};

export default function DonkeyKongBananzaPage() {
  return <ArticlePageDB slug="video-games-nintendo-donkey-kong-bananza" />;
}
