import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quantum Computing News | ObjectWire',
  description: 'Latest news and analysis on quantum computing, breakthroughs, and research.',
  alternates: {
    canonical: 'https://www.objectwire.org/news/quantum-computing',
  },
};

export default function QuantumComputingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
