import type { Metadata } from "next";
import "./globals.css";
import { ArticlesProvider } from "@/lib/articles-context";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import ConditionalLayout from "@/components/ConditionalLayout";

export const metadata: Metadata = {
  metadataBase: new URL('https://objectwire.org'),
  title: {
    default: "ObjectWire | Precision Intelligence News Network",
    template: "%s | ObjectWire"
  },
  description: "ObjectWire delivers verified, source-cited intelligence on business, technology, and policy. Precision journalism for professionals who demand accuracy.",
  keywords: ["news", "intelligence", "journalism", "business news", "technology news", "verified news", "fact-checked reporting"],
  authors: [{ name: "ObjectWire Editorial Team" }],
  creator: "ObjectWire",
  publisher: "ObjectWire News Network",
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://objectwire.org",
    siteName: "ObjectWire",
    title: "ObjectWire | Precision Intelligence News Network",
    description: "Verified, source-cited intelligence on business, technology, and policy.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ObjectWire News Network",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ObjectWire | Precision Intelligence News Network",
    description: "Verified, source-cited intelligence on business, technology, and policy.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://objectwire.org" />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        <GoogleAnalytics />
        <ArticlesProvider>
          <ConditionalLayout>{children}</ConditionalLayout>
        </ArticlesProvider>
      </body>
    </html>
  );
}
