import type { Metadata } from 'next';
import { WikiArticle } from '@/components/articles/WikiArticle';
// Page renders dynamically — content fetched from Supabase at request time.
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'RBA Completes Real-Money CBDC Trials via Hedera-Linked HashSphere | Project Acacia',
  description: 'The Reserve Bank of Australia confirmed March 5, 2026, that Project Acacia successfully settled real-world assets using HashSphere, a private permissioned',
  keywords: ['RBA CBDC Project Acacia 2026','HashSphere Hedera wholesale CBDC','Reserve Bank Australia digital currency','Hedera HBAR central bank','Project Acacia real money trials','Australian Payments Plus HashSphere','wholesale CBDC blockchain Australia','Hedera Hashgraph RBA settlement','tokenized assets R3 Corda Canvas Connect','DFCRC digital finance Australia','HBAR institutional adoption','central bank digital currency 2026','Hgraph interoperability layer','RBA Payments System Board CBDC','Hedera council member CBDC'],
  alternates: { canonical: 'https://www.objectwire.org/crypto/hbar/rba-cbdc-hashsphere-hedera-project-acacia' },
  openGraph: {
    title: 'RBA Completes Real-Money CBDC Trials via Hedera-Linked HashSphere',
    description: 'Project Acacia tested 24 use cases, 19 with real money, on a private HashSphere network built on Hedera tech.',
    type: 'article',
    url: 'https://www.objectwire.org/crypto/hbar/rba-cbdc-hashsphere-hedera-project-acacia',
    siteName: 'ObjectWire',
    authors: ['Aflansa'],
    publishedTime: '2026-03-06T10:00:00Z',
    modifiedTime: '2026-03-06T10:00:00Z',
    section: 'Finance',
    tags: ['Hedera', 'HBAR', 'CBDC', 'RBA', 'HashSphere', 'Project Acacia', 'Digital Currency', 'Australia'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RBA Completes Real-Money CBDC Trials on Hedera-Linked HashSphere Network',
    description: '24 use cases, 19 with real money. Project Acacia proves wholesale CBDC can settle real assets on a private Hedera-based network.',
  },
};

export default function RBACBDCHashSpherePage() {
  return <WikiArticle slug="crypto-hbar-rba-cbdc-hashsphere-hedera-project-acacia" />;
}
