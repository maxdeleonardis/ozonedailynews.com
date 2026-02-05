import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nick Shirley Fraud Investigation | ObjectWire',
  description: 'Part 2: New revelations in the Nick Shirley fraud investigation.',
  alternates: {
    canonical: 'https://www.objectwire.org/minesoda/nick-shirley-drops-second-part-of-fraud-investigation',
  },
};

export default function NickShirleyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
