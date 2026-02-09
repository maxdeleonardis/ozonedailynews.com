import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ilhan Omar | ObjectWire',
  description: 'Coverage and analysis of Ilhan Omar, her political career, and policy positions.',
  alternates: {
    canonical: 'https://www.objectwire.org/minesoda/Ilhan-Omar',
  },
};

export default function IlhanOmarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
