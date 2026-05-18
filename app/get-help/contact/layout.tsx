import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | ObjectWire',
  description: 'Get in touch with the ObjectWire team. For news tips, press inquiries, or general questions.',
  alternates: {
    canonical: 'https://www.ozonenetwork.news/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
