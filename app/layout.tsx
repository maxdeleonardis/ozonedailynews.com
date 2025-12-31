import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

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
        {/* Header */}
        <header className="border-b border-gray-200">
          <nav className="container flex justify-between items-center py-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 bg-black flex items-center justify-center">
                <span className="text-white font-bold text-lg">O</span>
              </div>
              <span className="text-xl font-bold tracking-tight">ObjectWire</span>
            </Link>
            
            <div className="flex items-center gap-8">
              <Link href="/blog" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
                News
              </Link>
              <Link href="/editorial-standards" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
                Standards
              </Link>
            </div>
          </nav>
        </header>

        <main>{children}</main>

        {/* Footer */}
        <footer className="border-t border-gray-200 mt-24">
          <div className="container py-12">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
              <div>
                <Link href="/" className="flex items-center gap-2 mb-4">
                  <div className="w-7 h-7 bg-black flex items-center justify-center">
                    <span className="text-white font-bold text-sm">O</span>
                  </div>
                  <span className="font-bold">ObjectWire</span>
                </Link>
                <p className="text-sm text-gray-500 max-w-xs">
                  Precision intelligence for professionals who demand verified, source-cited reporting.
                </p>
              </div>
              
              <div className="flex gap-12">
                <div>
                  <h4 className="font-semibold text-sm mb-3">Navigation</h4>
                  <div className="flex flex-col gap-2">
                    <Link href="/" className="text-sm text-gray-500 hover:text-black">Home</Link>
                    <Link href="/blog" className="text-sm text-gray-500 hover:text-black">News</Link>
                    <Link href="/editorial-standards" className="text-sm text-gray-500 hover:text-black">Editorial Standards</Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-400">© 2025 ObjectWire. All rights reserved.</p>
              <p className="text-xs text-gray-400">Precision Intelligence News Network</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
