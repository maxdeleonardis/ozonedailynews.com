import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Minesoda | ObjectWire',
  description: 'Coverage of Minnesota news and investigations.',
  alternates: {
    canonical: 'https://www.objectwire.org/minesoda',
  },
};

export default function MinesodaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
