import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const revalidate = 3600;

const SLUG = '/amazon/news/amazon-acquires-fauna-robotics-sprout-humanoid';
const FULL_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL =
  'https://www.objectwire.org/entertainment/christian-wiediger-rymh7EZPqRs-unsplash.jpg';

export const metadata: Metadata = {
  title: "Amazon Acquires Fauna Robotics to Build 'Friendly' Home Humanoids | ObjectWire",
  description:
    "Amazon has confirmed its acquisition of New York-based startup Fauna Robotics, maker of 'Sprout', a consumer humanoid robot designed for homes and schools. The deal closes as Amazon already operates over 1 million industrial robots in its warehouses, marking a major expansion into the consumer robotics market.",
  keywords: [
    'Amazon Fauna Robotics acquisition 2026',
    'Fauna Robotics Sprout humanoid',
    'Amazon home humanoid robot',
    'Amazon consumer robotics 2026',
    'Sprout robot Fauna',
    'Amazon humanoid robot March 2026',
    'Fauna Robotics New York startup',
    'Amazon robotics expansion',
    'friendly humanoid home robot',
    'Amazon Andy Jassy robotics',
  ],
  alternates: {
    canonical: FULL_URL,
  },
  openGraph: {
    title: "Amazon Acquires Fauna Robotics to Build 'Friendly' Home Humanoids",
    description:
      "Amazon confirmed the acquisition of Fauna Robotics, maker of Sprout, a 'safe, approachable, and fun' humanoid for homes and schools. The deal comes just under two months after Fauna debuted Sprout and signals Amazon's entry into consumer humanoid robotics.",
    url: FULL_URL,
    images: [{ url: IMAGE_URL }],
    type: 'article',
    publishedTime: '2026-03-24T17:00:00Z',
    modifiedTime: '2026-03-24T17:00:00Z',
    section: 'Technology',
    tags: ['Amazon', 'Fauna Robotics', 'Humanoid Robots', 'Robotics', 'Sprout', 'Tech Acquisitions'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Amazon Acquires Fauna Robotics | 'Friendly' Humanoid Sprout Coming to Homes",
    description:
      "Amazon already runs 1M+ warehouse robots. Now it wants one in your living room. Fauna Robotics and its Sprout humanoid are officially Amazon's.",
    images: [IMAGE_URL],
  },
};

export default function AmazonFaunaRoboticsPage() {
  return <NewsArticleDB slug="amazon-news-amazon-acquires-fauna-robotics-sprout-humanoid" />;
}
