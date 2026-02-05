import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'World Cup 2026 | ObjectWire',
  description: 'Coverage, analysis, and news about the 2026 FIFA World Cup.',
  alternates: {
    canonical: 'https://www.objectwire.org/world-cup',
  },
};

export default function WorldCupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
