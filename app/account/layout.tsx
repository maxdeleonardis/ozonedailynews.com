import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Account | OzoneNews',
  description: 'Manage your OzoneNews account, reading history, saved articles, and newsletter preferences all in one place.',
  robots: { index: false, follow: false }, // Auth-gated, never index
};

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
