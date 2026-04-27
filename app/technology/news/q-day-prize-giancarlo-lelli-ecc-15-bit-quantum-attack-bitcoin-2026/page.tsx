import type { Metadata } from 'next';
import { NewsArticleDB } from '@/components/articles/NewsArticleDB';

// Page renders dynamically — content fetched from Supabase at request time.
// Run 'npm run wiki:publish -- --file <path>' to update content in Supabase.
export const dynamic = 'force-dynamic';

const SLUG = '/technology/news/q-day-prize-giancarlo-lelli-ecc-15-bit-quantum-attack-bitcoin-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`; // restored by wiki:publish
const OG_IMAGE =
  'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const metadata: Metadata = {
  title: 'Q-Day Prize | Giancarlo Lelli Breaks ECC 15-Bit Key on Quantum Computer',
  description:
    'Independent researcher Giancarlo Lelli won 1 BTC from Project Eleven after becoming the first person to break a 15-bit ECC private key using a cloud quantum computer, the largest public quantum attack on Bitcoin cryptography ever recorded.',
  keywords: [
    'Q-Day Prize 2026 ECC quantum attack',
    'Giancarlo Lelli quantum cryptography Bitcoin',
    'Project Eleven Q-Day Prize winner',
    'quantum computer breaks ECC private key',
    'Shor\'s algorithm Bitcoin threat 2026',
    '15-bit ECC break quantum computer',
    'Bitcoin quantum vulnerability 2026',
    'BIP-360 BIP-361 quantum resistant Bitcoin',
    'post-quantum cryptography blockchain',
    'Alex Pruden Project Eleven CEO',
    'Google Quantum AI 1200 logical qubits ECC',
    'harvest now decrypt later Bitcoin',
    'P2PK reused address Bitcoin quantum risk',
    'lattice-based cryptography Bitcoin migration',
    'quantum computing threat cryptocurrency',
    'elliptic curve cryptography quantum attack 2026',
  ],
  alternates: { canonical: ARTICLE_URL },
  openGraph: {
    title: 'Q-Day Prize | Independent Researcher Breaks ECC Key on Cloud Quantum Hardware',
    description:
      'Giancarlo Lelli broke a 15-bit ECC private key using roughly 27 physical qubits, winning 1 BTC from Project Eleven. The result is 512x larger than the previous public record and has accelerated Bitcoin\'s BIP-360 quantum-resistant migration.',
    type: 'article',
    url: ARTICLE_URL,
    siteName: 'ObjectWire',
    authors: ['Jack Brennan'],
    publishedTime: '2026-04-26T16:00:00Z',
    modifiedTime: '2026-04-26T16:00:00Z',
    section: 'Tech',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 675,
        alt: 'Cryptocurrency blockchain network representing the quantum computing threat to Bitcoin elliptic curve cryptography',
      },
    ],
    tags: ['Quantum Computing', 'Bitcoin', 'ECC', 'Project Eleven', 'Post-Quantum Cryptography'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Someone Just Broke Bitcoin\'s Cryptography on a Cloud Quantum Computer, Won 1 BTC',
    description:
      'Giancarlo Lelli cracked a 15-bit ECC key in 45 minutes on ~27 qubits. It\'s not 256 bits yet. But a Google paper says 1,200 logical qubits could be enough. Bitcoin\'s BIP-360 migration is now fast-tracked.',
    images: [OG_IMAGE],
  },
};

export default function TechnologyNewsQDayPrizeGiancarloLelliEcc15BitQuantumAttackBitcoin2026Page() {
  return <NewsArticleDB slug="technology-news-q-day-prize-giancarlo-lelli-ecc-15-bit-quantum-attack-bitcoin-2026" />;
}
