import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/clothing/gymshark/which-gymshark-leggings-are-best-for-lifting';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1200&h=675&fit=crop&auto=format';

export const metadata: Metadata = {
  title: 'Gymshark Leggings for Lifting | Best Squat-Proof Picks 2026',
  description: 'Best Gymshark leggings for lifting in 2026: Adapt, Vital Seamless, and Flex HR ranked for squat-proof opacity, waistband hold, and deadlift durability.',
  keywords: [
    'Gymshark leggings for lifting',
    'best Gymshark leggings for squats',
    'Gymshark Adapt Marl Seamless leggings',
    'Gymshark Vital Seamless 2.0 lifting',
    'Gymshark Flex HR leggings squats',
    'squat proof Gymshark leggings',
    'Gymshark lifting leggings 2026',
    'Gymshark leggings for deadlifts',
    'best activewear leggings for lifting',
    'Gymshark gym leggings review',
    'high waist lifting leggings',
    'compression leggings for squats',
    'Gymshark leggings review 2026',
    'Gymshark Training leggings',
    'Gymshark Sculpt leggings lifting',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Gymshark Leggings for Lifting | Best Squat-Proof Picks 2026',
    description: 'Adapt, Vital Seamless, and Flex HR head-to-head for heavy training: ranked by waistband hold, squat-proof opacity, and durability against bar contact.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Conan Boyle'],
    publishedTime: '2026-03-31T12:00:00Z',
    modifiedTime: '2026-04-28T12:00:00Z',
    section: 'Culture',
    images: [{ url: OG_IMAGE, width: 1200, height: 675, alt: 'Gymshark leggings worn during a lifting workout in the gym' }],
    tags: ['Gymshark', 'Leggings', 'Lifting', 'Activewear'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Which Gymshark Leggings Are Best for Lifting?',
    description: 'Adapt, Flex HR, and Vital Seamless ranked by squat-proof rating and deadlift durability. The Speed collection is not your friend on leg day.',
    images: [OG_IMAGE],
  },
};

export default function ClothingGymsharkWhichGymsharkLeggingsAreBestForLiftingPage() {
  return <NewsArticleDB slug="clothing-gymshark-which-gymshark-leggings-are-best-for-lifting" />;
}
