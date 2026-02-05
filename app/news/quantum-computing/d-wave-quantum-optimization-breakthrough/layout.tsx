import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'D-Wave Quantum Optimization Breakthrough | ObjectWire',
  description: 'Analysis of D-Wave\'s latest quantum computing breakthrough and optimization capabilities.',
  alternates: {
    canonical: 'https://www.objectwire.org/news/quantum-computing/d-wave-quantum-optimization-breakthrough',
  },
};

export default function DWaveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
