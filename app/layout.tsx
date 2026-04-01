import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Inter, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { OrganizationSchema, WebSiteSchema } from "@/components/NewsArticleSchema";
import AuthProvider from "@/components/AuthProvider";
import MobileNav from "@/components/MobileNav";
import TopStripSearch from "@/components/TopStripSearch";
import NavUserButton from "@/components/NavUserButton";
import NavBreakingTicker from "@/components/NavBreakingTicker";
import TopStrip from "@/components/TopStrip";
import ThemeProvider from "@/components/ThemeProvider";
import { getBreakingHeadlines } from "@/lib/article-service";
import { SITE_CONFIG } from "@/lib/site-config";
import Script from "next/script";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-9FM4W3K6GV';

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
  icons: {
    icon: [
      { url: '/Favicon (1).png', type: 'image/png' },
    ],
    shortcut: '/Favicon (1).png',
    apple: '/Favicon (1).png',
  },
  other: {
    'llms.txt': `${SITE_CONFIG.url}/llms.txt`,
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breakingHeadlines = await getBreakingHeadlines();
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="canonical" href={SITE_CONFIG.url} />
        <link rel="alternate" type="application/rss+xml" title={`${SITE_CONFIG.name} RSS Feed`} href={`${SITE_CONFIG.url}/rss.xml`} />
        <OrganizationSchema />
        <WebSiteSchema />
      </head>
      <body className="bg-[#faf9f6] text-gray-900 antialiased font-sans dark:bg-[#121212] dark:text-gray-100">
        <AuthProvider>
          <ThemeProvider>
            {/* ── Newspaper Masthead ─────────────────────────────────────── */}
            <header className="border-b-4 border-black bg-white sticky sm:relative top-0 z-40">

              {/* Top info strip */}
              <div className="border-b border-gray-300 bg-gray-50">
                <div className="container mx-auto px-4 py-1 flex items-center justify-between">
                  <span className="hidden sm:block text-xs font-mono text-gray-500">
                    {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                  <TopStripSearch />
                </div>
              </div>

              {/* Nameplate */}
              <div className="container mx-auto px-4 py-2 md:py-5 text-center">
                <Link href="/" className="inline-block group">
                  <div className="text-[2.4rem] sm:text-5xl md:text-8xl font-black tracking-tighter leading-none font-serif">
                    OBJECTWIRE
                  </div>
                  <div className="flex items-center justify-center gap-4 mt-1.5">
                    <div className="h-px w-10 md:w-28 bg-black" />
                    <p className="text-[8px] tracking-[.25em] uppercase text-gray-500 font-mono whitespace-nowrap">
                      Independent · Verified · In-Depth
                    </p>
                    <div className="h-px w-10 md:w-28 bg-black" />
                  </div>
                </Link>
              </div>

              {/* Section nav bar */}
              <div className="border-t-2 border-black">
                <div className="container mx-auto px-4">
                  <nav className="flex items-center divide-x divide-black">
                    {/* Left: News */}
                    <Link
                      href="/news"
                      className="px-3 md:px-4 py-2.5 text-[10px] font-black tracking-[.12em] uppercase whitespace-nowrap hover:bg-black hover:text-white transition-colors shrink-0"
                    >
                      News
                    </Link>

                    {/* Centre: Breaking ticker */}
                    <NavBreakingTicker headlines={breakingHeadlines} />

                    {/* Right: Index + user */}
                    <div className="flex items-center divide-x divide-black ml-auto">
                      <Link href="/site-index" className="hidden sm:block px-3 md:px-4 py-2.5 text-[10px] font-black tracking-[.12em] uppercase whitespace-nowrap hover:bg-black hover:text-white transition-colors shrink-0">
                        Index
                      </Link>
                      <div className="hidden sm:block">
                        <NavUserButton />
                      </div>
                      {/* Mobile hamburger */}
                      <div className="md:hidden shrink-0">
                        <MobileNav />
                      </div>
                    </div>
                  </nav>
                </div>
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
        
        </ThemeProvider>
        </AuthProvider>
        {/* GA4 — Script tags in server component for guaranteed detection */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        />
        <Script
          id="google-analytics-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', {
                send_page_view: false,
                cookie_flags: 'SameSite=Lax;Secure'
              });
            `,
          }}
        />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
