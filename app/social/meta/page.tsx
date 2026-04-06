import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Meta Platforms Wiki 2026: Facebook, Instagram & 3.9B Users",
  description: "Complete profile of Meta Platforms (formerly Facebook Inc.) - founded 2004, rebranded 2021. Owns Facebook, Instagram, WhatsApp, serving 3.9 billion users.",
  keywords: [
    "Meta Platforms",
    "Facebook",
    "Instagram",
    "WhatsApp",
    "Mark Zuckerberg",
    "social media",
    "metaverse",
    "virtual reality",
    "Meta Quest",
  ],
  openGraph: {
    title: "Meta Platforms: Complete Company Profile & History",
    description: "From Facebook to Meta - the social media giant's transformation and 3.9B user ecosystem.",
    type: "article",
    url: "https://www.objectwire.org/meta",
    images: [
      {
        url: "https://www.objectwire.org/meta-og.jpg",
        width: 1200,
        height: 630,
        alt: "Meta Platforms Company Profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meta Platforms Wiki 2026: Facebook, Instagram & 3.9B Users",
    description: "Complete profile of the world's largest social media conglomerate.",
  },
  alternates: {
    canonical: 'https://www.objectwire.org/social/meta',
  },
};

export default function MetaPage() {
  return <WikiArticle slug="social-meta" />;
}
