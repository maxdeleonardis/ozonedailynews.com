import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Clear Cache | ObjectWire',
  description: 'Clear ObjectWire article cache.',
  alternates: {
    canonical: 'https://www.objectwire.org/clear-cache',
  },
};

export default function ClearCacheLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
