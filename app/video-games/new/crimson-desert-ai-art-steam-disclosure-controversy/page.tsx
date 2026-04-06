import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/video-games/new/crimson-desert-ai-art-steam-disclosure-controversy';
const FULL_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = 'https://www.objectwire.org/video-games/thumbnail.PNG';

export const metadata: Metadata = {
  title: 'Crimson Desert Players Flag Suspected AI Art, Raising Steam Disclosure Questions',
  description:
    'Crimson Desert players have identified in-game artwork they believe was created using generative AI, days after the Pearl Abyss RPG\u2019s March 19 launch',
  keywords: [
    'Crimson Desert AI art controversy',
    'Crimson Desert AI generated artwork Steam',
    'Pearl Abyss AI art disclosure 2026',
    'Steam AI art disclosure requirement 2026',
    'Crimson Desert Steam page AI content',
    'AI art video games 2026',
    'Steam generative AI policy',
    'Pearl Abyss Crimson Desert controversy',
    'AI generated game art disclosure',
    'Crimson Desert March 2026 launch controversy',
  ],
  alternates: {
    canonical: FULL_URL,
  },
  openGraph: {
    title: 'Crimson Desert Players Flag Suspected AI Art, Raising Steam Disclosure Questions',
    description:
      'Days after its March 19 launch, players have flagged suspected AI-generated artwork inside Crimson Desert. The Steam page carries no disclosure \u2014',
    type: 'article',
    url: FULL_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-24T20:00:00Z',
    modifiedTime: '2026-03-24T20:00:00Z',
    section: 'Gaming',
    tags: [
      'Crimson Desert', 'Pearl Abyss', 'AI Art', 'Steam',
      'Generative AI', 'Gaming', 'AI Disclosure', 'Video Games',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crimson Desert Players Flag Suspected AI Art \u2014 Steam Has No Disclosure',
    description:
      'Just days after its March 19 launch, Crimson Desert is contending with player-identified AI artwork and a Steam page with no generative AI disclosure.',
    images: [IMAGE_URL],
  },
  other: {
    news_keywords:
      'Crimson Desert AI art 2026, Steam AI disclosure controversy, Pearl Abyss generative AI artwork, AI art video games Steam 2026',
  },
};

export default function CrimsonDesertAIArtPage() {
  return <NewsArticleDB slug="video-games-new-crimson-desert-ai-art-steam-disclosure-controversy" />;
}
