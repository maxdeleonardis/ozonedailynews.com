import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/bio-hacking/news/science-study-3000-genes-sex-differences-human-brain-decasien-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE = 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&h=675&fit=crop';

export const metadata: Metadata = {
  title: 'Science Study | 3,000 Genes Show Sex Differences in Human Brain',
  description: 'A 2026 Science journal study mapped 3,000 sex-biased genes across 6 cortical regions using snRNA-seq. Findings link to ADHD, Alzheimer\'s, depression, and schizophrenia risk.',
  keywords: [
    'sex differences human brain study 2026',
    'Alex DeCasien brain study',
    'Science journal brain sex differences',
    'snRNA-seq brain study',
    '3000 sex-biased genes brain',
    'cortical sex differences study',
    'sex hormones brain gene expression',
    'ADHD brain sex differences',
    'Alzheimer sex differences brain',
    'NIA NIMH brain study 2026',
    'autosomal sex-biased genes',
    'human brain gene map 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Science Study | 3,000 Genes Show Sex Differences in Human Brain',
    description: 'NIA neurogeneticist Alex DeCasien maps 3,000 sex-biased genes across 6 cortical regions. 133 core genes link to ADHD, Alzheimer\'s, depression risk.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Sterling'],
    publishedTime: '2026-04-18T00:00:00Z',
    modifiedTime: '2026-04-18T00:00:00Z',
    section: 'Science',
    tags: ['Neuroscience', 'Brain Research', 'Genetics', 'Science Journal'],
  },
  twitter: {
    card: 'summary_large_image',
    title: '3,000 genes show sex differences in the human brain, Science study finds',
    description: '133 core genes consistent across all regions. 119 on autosomes, not sex chromosomes. Linked to ADHD, Alzheimer\'s, depression, schizophrenia.',
  },
};

export default function BioHackingNewsScienceStudy3000GenesSexDifferencesHumanBrainDecasien2026Page() {
  return <JackArticleDB slug="bio-hacking-news-science-study-3000-genes-sex-differences-human-brain-decasien-2026" />;
}
