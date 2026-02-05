import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | ObjectWire News',
  description: 'Latest news, investigations, and insights from ObjectWire reporters.',
  alternates: {
    canonical: 'https://www.objectwire.org/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
