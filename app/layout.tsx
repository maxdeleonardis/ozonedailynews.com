import type { Metadata, Viewport } from "next";
import Link from "next/link";
import Image from "next/image";
import { Inter, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { OrganizationSchema, WebSiteSchema } from "@/components/NewsArticleSchema";
import AuthProvider from "@/components/AuthProvider";
import AuthButton from "@/components/AuthButton";
import SearchBar from "@/components/SearchBar";
import MobileNav from "@/components/MobileNav";
import { SITE_CONFIG } from "@/lib/site-config";

// =============================================================================
// FONT OPTIMIZATION - Prevents layout shift (CLS)
// Next.js handles: subsetting, preloading, self-hosting, font-display: swap
// =============================================================================
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-serif',
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains',
  preload: true,
});

// =============================================================================
// VIEWPORT CONFIGURATION - Layout stability
// =============================================================================
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`
  },
  description: SITE_CONFIG.description,
  keywords: ["news", "intelligence", "journalism", "business news", "technology news", "verified news", "fact-checked reporting"],
  authors: [{ name: "ObjectWire Editorial Team" }],
  creator: SITE_CONFIG.name,
  publisher: `${SITE_CONFIG.name} News Network`,
  formatDetection: {
    email: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: SITE_CONFIG.locale,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: SITE_CONFIG.defaultOgImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} News Network`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.defaultOgImage],
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
  alternates: {
    canonical: SITE_CONFIG.url,
    types: {
      'application/rss+xml': `${SITE_CONFIG.url}/rss.xml`,
    },
  },
  other: {
    'llms.txt': `${SITE_CONFIG.url}/llms.txt`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="canonical" href={SITE_CONFIG.url} />
        <link rel="alternate" type="application/rss+xml" title={`${SITE_CONFIG.name} RSS Feed`} href={`${SITE_CONFIG.url}/rss.xml`} />
        {/* Preconnect to external resources for faster loading */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <OrganizationSchema />
        <WebSiteSchema />
      </head>
      <body className="bg-[#faf9f6] text-gray-900 antialiased font-sans">
        <GoogleAnalytics />
        <AuthProvider>
            {/* Header */}
            <header className="border-b bg-white sticky top-0 z-40">
              <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between h-20">
                  <Link href="/" className="flex items-center">
                    <img 
                      src="/objectwire-logo.png" 
                      alt="OBJECTWIRE" 
                      style={{ height: '60px', width: 'auto' }}
                      className="hidden md:block"
                    />
                    <img 
                      src="/objectwire-logo.png" 
                      alt="OBJECTWIRE" 
                      style={{ height: '44px', width: 'auto' }}
                      className="md:hidden"
                    />
                  </Link>
                  
                  {/* Desktop Navigation */}
                  <div className="hidden md:flex items-center gap-6">
                    <Link href="/finance" className="text-sm text-gray-600 hover:text-black hover:underline transition-colors">
                      Finance
                    </Link>
                    <Link href="/tech" className="text-sm text-gray-600 hover:text-black hover:underline transition-colors">
                      Tech
                    </Link>
                    <Link href="/news" className="text-sm text-gray-600 hover:text-black hover:underline transition-colors">
                      News
                    </Link>
                    <Link href="/editorial-standards" className="text-sm text-gray-600 hover:text-black hover:underline transition-colors">
                      Standards
                    </Link>
                    <Link href="/about" className="text-sm text-gray-600 hover:text-black hover:underline transition-colors">
                      About
                    </Link>
                    <SearchBar />
                    <AuthButton />
                  </div>

                  {/* Mobile Navigation */}
                  <MobileNav />
                </nav>
              </div>
            </header>

            <main style={{ marginLeft: '10px', marginRight: '10px' }}>{children}</main>

        {/* Footer */}
        <footer className="border-t border-gray-200 bg-gray-50 mt-24">
          <div className="container py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Brand */}
              <div>
                <Link href="/" className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-black flex items-center justify-center">
                    <span className="text-white font-bold text-base">O</span>
                  </div>
                  <span className="font-bold text-lg">ObjectWire</span>
                </Link>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Precision intelligence for professionals who demand verified, source-cited reporting.
                </p>
              </div>
              
              {/* Useful Links */}
              <div>
                <h4 className="font-semibold text-sm uppercase tracking-wide mb-4">Useful Links</h4>
                <div className="flex flex-col gap-2.5">
                  <Link href="/" className="text-sm text-gray-600 hover:text-black transition-colors">Home</Link>
                  <Link href="/finance" className="text-sm text-gray-600 hover:text-black transition-colors">Finance</Link>
                  <Link href="/technology" className="text-sm text-gray-600 hover:text-black transition-colors">Technology</Link>
                  <Link href="/news" className="text-sm text-gray-600 hover:text-black transition-colors">News</Link>
                  <Link href="/editorial-standards" className="text-sm text-gray-600 hover:text-black transition-colors">Editorial Standards</Link>
                  <Link href="/about" className="text-sm text-gray-600 hover:text-black transition-colors">About</Link>
                </div>
              </div>

              {/* Legal */}
              <div>
                <h4 className="font-semibold text-sm uppercase tracking-wide mb-4">Legal</h4>
                <div className="flex flex-col gap-2.5">
                  <Link href="/privacy-policy" className="text-sm text-gray-600 hover:text-black transition-colors">Privacy Policy</Link>
                  <Link href="/terms-of-service" className="text-sm text-gray-600 hover:text-black transition-colors">Terms of Service</Link>
                  <Link href="/admin" className="text-sm text-gray-600 hover:text-black transition-colors">Admin Portal</Link>
                </div>
              </div>

              {/* Newsletter */}
              <div>
                <h4 className="font-semibold text-sm uppercase tracking-wide mb-4">Stay Updated</h4>
                <p className="text-sm text-gray-600 mb-3">Subscribe to our newsletter for the latest insights.</p>
                <div className="flex flex-col gap-2">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  />
                  <button className="px-4 py-2 text-sm font-medium text-white bg-black hover:bg-gray-800 transition-colors rounded">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
            
            {/* Bottom Bar */}
            <div className="border-t border-gray-300 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500">© 2026 ObjectWire. All rights reserved.</p>
              <div className="flex gap-6 text-sm text-gray-500">
                <a href="#" className="hover:text-black transition-colors">Twitter</a>
                <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-black transition-colors">GitHub</a>
              </div>
            </div>
          </div>
        </footer>
        
        </AuthProvider>
      </body>
    </html>
  );
}
