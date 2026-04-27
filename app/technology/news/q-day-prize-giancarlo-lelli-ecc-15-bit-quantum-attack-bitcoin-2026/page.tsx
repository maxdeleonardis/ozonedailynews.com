import type { Metadata } from 'next';
import { NewsArticle } from '@/components/articles/NewsArticle';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

const SLUG = '/technology/news/q-day-prize-giancarlo-lelli-ecc-15-bit-quantum-attack-bitcoin-2026';
const ARTICLE_URL = `https://www.objectwire.org${SLUG}`;
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
  return (
    <NewsArticle
      title="Independent Researcher Wins Q-Day Prize with First 15-Bit ECC Quantum Attack on Record | Bitcoin Cryptography Under Scrutiny"
      subtitle="Giancarlo Lelli broke a 15-bit elliptic curve private key using cloud quantum hardware and a variant of Shor's algorithm, claiming 1 Bitcoin from Project Eleven in the largest public quantum attack ever recorded against the cryptographic standard protecting over $2.5 trillion in digital assets"
      category="Tech"
      categoryColor="blue"
      topicTag="crypto"
      publishDate="April 26, 2026"
      readTime="6 min read"
      breaking={false}
      trending={true}
      author={{
        name: 'Jack Brennan',
        role: 'Tech Reporter',
        authorSlug: 'jack-brennan',
      }}
      thumbnail={{
        src: OG_IMAGE,
        alt: 'Blockchain network visualization representing the quantum computing threat to Bitcoin elliptic curve cryptography',
      }}
      tags={['Quantum Computing', 'Bitcoin', 'ECC', 'Project Eleven', 'Post-Quantum Cryptography']}
      slug="technology-news-q-day-prize-giancarlo-lelli-ecc-15-bit-quantum-attack-bitcoin-2026"
      url={SLUG}
    >
      <div className="prose prose-lg max-w-none">
        <p>
          An independent Italian cryptography researcher has won a 1 Bitcoin prize after becoming the first person to publicly break a 15-bit elliptic curve private key using a cloud-accessible quantum computer. <strong>Giancarlo Lelli</strong>, operating without institutional funding or national laboratory support, submitted his result to <strong>Project Eleven</strong>, a security research organization running the "<strong>Q-Day Prize</strong>," on Friday, April 24, 2026. The company confirmed the win and paid out the 1 BTC reward, valued at approximately $68,000. The result represents a 512-fold increase in search-space complexity over the previous public record, a 6-bit break achieved by engineer <strong>Steve Tippeconnic</strong> in September 2025. For broader context on the quantum computing threat landscape, see the <Link href="/technology" className="text-blue-600 hover:text-blue-800 underline">ObjectWire Technology hub</Link>.
        </p>

        <h2>The Attack | 27 Qubits, Shor's Algorithm, 45 Minutes on Cloud Hardware</h2>
        <p>
          Lelli used a cloud-accessible quantum device with approximately <strong>70 physical qubits</strong>, of which roughly <strong>27 were active</strong> in the computation, and an optimized variant of <strong>Shor's algorithm</strong> designed to minimize qubit overhead during the modular arithmetic phase of elliptic curve discrete logarithm solving. The full computation ran in approximately <strong>45 minutes</strong>, producing the 15-bit private key from its public counterpart with verified correctness.
        </p>
        <p>
          The attack targeted <strong>Elliptic Curve Cryptography (ECC)</strong>, the mathematical foundation underlying Bitcoin, Ethereum, and most modern blockchain address schemes. A 15-bit key has a search space of 32,767 possible values. Bitcoin uses 256-bit keys, which have a search space of approximately 1.15 x 10^77 possibilities, an astronomical gap by any measure. But the significance of Lelli's result lies not in the key size itself, it lies in demonstrating that high-level quantum attacks against ECC are now executable by individuals renting time on commercial cloud quantum platforms, without access to proprietary research hardware.
        </p>

        <h2>Why the Gap Is Shrinking | Google's 1,200-Qubit Paper and the Engineering Shift</h2>
        <p>
          <strong>Project Eleven CEO Alex Pruden</strong> acknowledged that the distance between 15 and 256 bits remains "enormous," but framed the trajectory as an engineering problem rather than a fundamental physics barrier. Three developments have accelerated that framing in recent months.
        </p>
        <p>
          First: <strong>algorithmic efficiency gains</strong>. A March 2026 white paper published by <strong>Google Quantum AI</strong> suggested that a full 256-bit ECC break could theoretically be achieved with fewer than <strong>1,200 logical qubits</strong>, a reduction of roughly 20 times compared to estimates published just three months earlier. That single paper shifted the goalposts on the quantum threat timeline more than any hardware announcement in years.
        </p>
        <p>
          Second: <strong>public accessibility</strong>. Lelli's win establishes that competitive quantum cryptanalysis no longer requires a billion-dollar national program. Cloud quantum platforms, including devices from IBM, Google, and IonQ, are available to any researcher with a credit card. The barrier is now algorithmic skill and optimization, not hardware access.
        </p>
        <p>
          Third: the <strong>"harvest now, decrypt later" window</strong>. Approximately <strong>6.9 million Bitcoin</strong> sit in legacy <strong>P2PK (Pay-to-Public-Key)</strong> or reused address formats where the full public key is already exposed on-chain. These coins are passively harvestable today and become decryptable the moment sufficient quantum hardware exists. Most estimates place that threshold between <strong>2028 and 2032</strong> if current hardware scaling trajectories hold. For related coverage on the crypto policy and regulatory environment, see the <Link href="/crypto" className="text-blue-600 hover:text-blue-800 underline">ObjectWire Crypto hub</Link>.
        </p>

        <h2>Bitcoin's Response | BIP-360 and BIP-361 Fast-Tracked for Quantum-Resistant Addresses</h2>
        <p>
          The Bitcoin developer community has been aware of the theoretical quantum threat for years, but Lelli's practical demonstration accelerated the timeline on two specific protocol improvement proposals. <strong>BIP-360</strong> and <strong>BIP-361</strong> propose new output types that would allow users to voluntarily migrate their funds to addresses secured by <strong>lattice-based cryptography</strong>, specifically the CRYSTALS-Dilithium signature scheme standardized by NIST in 2024, which is currently believed to be resistant to both classical and quantum computational attacks, including Shor's algorithm.
        </p>
        <p>
          Migration would not be automatic or mandatory under either proposal. Users holding funds in vulnerable legacy address formats would need to actively move their coins to the new output types before quantum hardware reaches the 256-bit threshold. The practical challenge is that a significant fraction of the 6.9 million Bitcoin in P2PK addresses belong to early miners who may be deceased, have lost access to their keys, or are operating under pseudonyms with no reachable identity.
        </p>
        <p>
          <strong>Ethereum</strong>, which uses the same ECC curve (secp256k1) as Bitcoin, faces an identical exposure profile. The Ethereum Foundation has published a separate post-quantum roadmap but has not committed to a specific activation timeline. For related reporting on technology infrastructure risks intersecting with the financial sector, see ObjectWire's coverage of the <Link href="/technology/news/helium-crisis-semiconductor-iran-conflict-2026" className="text-blue-600 hover:text-blue-800 underline">helium crisis and semiconductor supply chain vulnerability</Link>.
        </p>
        <p>
          Lelli's 1 BTC prize arrived at a moment when the question of "when" quantum breaks Bitcoin is shifting from theoretical to logistical. The answer is no longer defined by whether it is physically possible, but by how long it takes the engineering to close the remaining gap.
        </p>
      </div>
    </NewsArticle>
  );
}
