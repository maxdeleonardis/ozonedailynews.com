import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | OzoneNews News',
  description: 'Latest news, investigations, and insights from OzoneNews reporters.',
  alternates: {
    canonical: 'https://www.ozonenetwork.news/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
