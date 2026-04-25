import type { Metadata } from 'next';
import { JackArticleDB } from '@/components/articles/JackArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:migrate' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/bio-hacking/eledon-pharmaceuticals-eldn-cd40l-tegoprubart-transplant-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
const IMAGE_URL =
  'https://www.objectwire.org/bio-hacking/eledon-pharmaceuticals-tegoprubart-cd40l.jpg';

export const metadata: Metadata = {
  title:
    'Eledon Pharmaceuticals (ELDN) | CD40L Pathway, Tegoprubart',
  description:
    "Eledon Pharmaceuticals (Nasdaq: ELDN) is a clinical-stage biotech targeting the CD40L pathway with tegoprubart, an IgG1 anti-CD40L antibody. Phase 2",
  keywords: [
    'Eledon Pharmaceuticals ELDN stock 2026',
    'tegoprubart anti-CD40L antibody transplant',
    'CD40L pathway immunosuppression kidney transplant',
    'BESTOW trial NCT05983770 tegoprubart Phase 2',
    'Eledon islet cell transplant Type 1 diabetes',
    'ELDN Nasdaq clinical-stage biotech 2026',
    'tegoprubart vs tacrolimus kidney function',
    'CD40 ligand monoclonal antibody rejection prevention',
    'Eledon $57.5 million offering 2026',
    'organ transplant rejection CD40L antibody',
    'insulin independence islet transplant CD40L',
    'Eledon Pharmaceuticals ALS CD40L trial',
    'one transplant for life Eledon mission',
    'tegoprubart xenotransplantation eGenesis',
    'calcineurin inhibitor alternative transplant 2026',
  ],
  alternates: {
    canonical: ARTICLE_URL,
  },
  openGraph: {
    title:
      'Eledon Pharmaceuticals (ELDN) | Tegoprubart, CD40L Pathway',
    description:
      "Phase 2 BESTOW kidney data, islet cell insulin independence, $57.5M raise, and Q2 2027 runway, a full overview of Eledon Pharmaceuticals' CD40L pipeline",
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    images: [IMAGE_URL],
    publishedTime: '2026-02-27T12:00:00Z',
    modifiedTime: '2026-03-01T09:00:00Z',
    section: 'Bio-Hacking & Longevity',
    tags: [
      'Eledon Pharmaceuticals',
      'ELDN',
      'Tegoprubart',
      'CD40L',
      'Transplant',
      'Kidney',
      'Islet Cell',
      'Type 1 Diabetes',
      'ALS',
      'Biotech',
      'Clinical Trial',
      'BESTOW',
      'eGenesis',
      'Immunosuppression',
      'Bio-Hacking',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Eledon Pharmaceuticals (ELDN) | Anti-CD40L Antibody Keeps',
    description:
      "Tegoprubart's Phase 2 kidney data and islet insulin-independence results signal a potential new era in transplant medicine. Full company overview,",
    images: [IMAGE_URL],
  },
};

export default function EledonPharmaceuticalsPage() {
  return <JackArticleDB slug="bio-hacking-eledon-pharmaceuticals-eldn-cd40l-tegoprubart-transplant-2026" />;
}
