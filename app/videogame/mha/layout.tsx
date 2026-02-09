import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Hero Academia | ObjectWire',
  description: 'Coverage and analysis of My Hero Academia, the anime and manga series.',
  alternates: {
    canonical: 'https://www.objectwire.org/mha',
  },
};

export default function MhaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
