import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Stefano Domenicali | CEO of Formula 1: Career, Tenure & Legacy | ObjectWire',
  description:
    'Stefano Domenicali is the President and CEO of Formula One Group since January 2021. Formerly Ferrari Team Principal (2008–2014) and Lamborghini CEO, he has overseen F1\'s transformation into a global entertainment brand, expanding to Miami, Las Vegas, and driving record revenues.',
  alternates: {
    canonical: 'https://www.objectwire.org/formula-1/stefano-domenicali',
  },
  keywords: [
    'Stefano Domenicali',
    'Formula 1 CEO',
    'CEO of Formula 1 2026',
    'Stefano Domenicali Formula One',
    'Formula 1 President',
    'Stefano Domenicali Ferrari',
    'Stefano Domenicali Lamborghini',
    'Formula One Group CEO',
    'who runs Formula 1',
    'F1 chief executive',
    'Domenicali Miami Grand Prix',
    'Domenicali Las Vegas Grand Prix',
    'F1 expansion strategy',
    'Formula 1 leadership',
    'Stefano Domenicali biography',
    'Formula 1 CEO salary',
    'Formula 1 revenue growth',
    'F1 Netflix Drive to Survive CEO',
  ],
  openGraph: {
    title: 'Stefano Domenicali | CEO of Formula 1 | ObjectWire',
    description:
      'From Ferrari Team Principal to Lamborghini CEO to the helm of the world\'s most watched motorsport. The complete biography of Stefano Domenicali.',
    type: 'article',
    publishedTime: '2026-02-24T10:00:00Z',
    url: 'https://www.objectwire.org/formula-1/stefano-domenicali',
    siteName: 'ObjectWire',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stefano Domenicali | CEO of Formula 1 | ObjectWire',
    description:
      'From Ferrari Team Principal to Lamborghini CEO to President of the world\'s premier motorsport series. Full biography and career profile.',
  },
};

export default function StefanoDomenicaliPage() {
  return <WikiArticle slug="formula-1-stefano-domenicali" />;
}
