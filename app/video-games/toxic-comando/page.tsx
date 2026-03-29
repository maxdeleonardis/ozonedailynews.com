import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/ArticlePageDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "John Carpenter's Toxic Commando | Review Roundup, Launch Day Guide | ObjectWire",
  description:
    "John Carpenter's Toxic Commando launches March 12, 2026 on PS5, Xbox Series X|S, and PC. Developed by Saber Interactive. 74 Metascore, four playable classes, the Swarm Engine, and an original Carpenter synth soundtrack. Full launch day review roundup.",
  keywords: [
    "Toxic Commando",
    "John Carpenter Toxic Commando",
    "Saber Interactive",
    "Toxic Commando review",
    "Toxic Commando metacritic",
    "Toxic Commando PS5",
    "Toxic Commando PC",
    "co-op shooter 2026",
    "zombie game 2026",
    "Swarm Engine",
    "Left 4 Dead spiritual successor",
  ],
  alternates: {
    canonical: "https://www.objectwire.org/video-games/toxic-comando",
  },
  openGraph: {
    title: "John Carpenter's Toxic Commando | Launch Day Review Roundup",
    description:
      "74 Metascore. Gory, gritty, and groovy. Saber Interactive's swarm co-op shooter is out now on PS5, Xbox Series X|S, and PC.",
    type: "article",
    url: "https://www.objectwire.org/video-games/toxic-comando",
    siteName: "ObjectWire",
    section: "Video Games",
  },
  twitter: {
    card: "summary_large_image",
    title: "Toxic Commando Review: John Carpenter's B-Movie Co-op Shooter | ObjectWire",
    description:
      "74 Metascore at launch. Swarm Engine delivers hundreds of Sludge Zombies. Four classes, off-road driving, and a Carpenter synth soundtrack.",
  },
};

export default function ToxicCommandoPage() {
  return <ArticlePageDB slug="video-games-toxic-comando" />;
}
