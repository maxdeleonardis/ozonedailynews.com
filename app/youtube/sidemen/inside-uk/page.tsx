import type { Metadata } from 'next';
import { ArticlePageDB } from '@/components/ArticlePageDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Inside | Sidemen Netflix Documentary Series | ObjectWire",
  description: "Complete guide to Inside: The Sidemen's groundbreaking Netflix documentary series exploring YouTube culture, creator life, and the group's journey from bedroom gamers to entertainment empire. 2026 coverage.",
  keywords: [
    "Inside Sidemen Netflix",
    "Sidemen documentary series",
    "Inside Netflix show",
    "Sidemen Netflix 2026",
    "YouTube documentary Netflix",
    "Inside Sidemen episodes",
    "KSI Netflix show",
    "Sidemen streaming series",
    "Inside documentary UK",
    "Sidemen behind the scenes"
  ],
  alternates: {
    canonical: "https://www.objectwire.org/youtube/sidemen/inside-uk",
  },
  openGraph: {
    title: "Inside | Sidemen Netflix Documentary Series",
    description: "Complete guide to the Sidemen's Netflix documentary series: episodes, behind-the-scenes access, YouTube culture exploration, and creator life insights.",
    type: "article",
    url: "https://www.objectwire.org/youtube/sidemen/inside-uk",
    siteName: "ObjectWire",
  },
};

export default function InsidePage() {
  return <ArticlePageDB slug="youtube-sidemen-inside-uk" />;
}
