import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/video-games/racing/polyphony-gran-turismo';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL = 'https://www.objectwire.org/entertainment/gran_turismo.PNG';

export const metadata: Metadata = {
  title:
    'Gran Turismo 7 Review & Polyphony Digital Now Hiring for Next Gran Turismo',
  description:
    'Gran Turismo 7 remains the benchmark racing simulator on PlayStation, 2 million active players in December 2025. Polyphony Digital posted 18 job openings',
  keywords: [
    'Gran Turismo 7 review',
    'Polyphony Digital hiring 2026',
    'Gran Turismo 8 PlayStation 6',
    'Gran Turismo 7 gameplay',
    'Kazunori Yamauchi new game',
    'Gran Turismo 100 million sales',
    'Polyphony Digital jobs 2026',
    'best racing game PlayStation 5',
    'Gran Turismo 7 car list',
    'GT7 VR review',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title: 'Gran Turismo 7 Review | And Why Polyphony Digital Is Hiring for the Next One',
    description:
      'GT7 still sets the standard for sim racing. Polyphony Digital just posted 18 jobs for next-gen Gran Turismo development, and Kazunori Yamauchi wants',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-03-02T12:00:00Z',
    modifiedTime: '2026-03-02T12:00:00Z',
    section: 'Gaming',
    tags: [
      'Gran Turismo', 'Polyphony Digital', 'Gran Turismo 7', 'PlayStation',
      'Racing Games', 'Simulation', 'Kazunori Yamauchi', 'PlayStation 6', 'Gaming',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gran Turismo 7 Review + Polyphony Digital Is Hiring for What Comes Next',
    description:
      '100M series sales. 2M GT7 active players. 18 new job openings. Kazunori Yamauchi is building the next lap.',
    images: [IMAGE_URL],
  },
};

export default function PolyphonyGranTurismoPage() {
  return <JackArticleDB slug="video-games-racing-polyphony-gran-turismo" />;
}
