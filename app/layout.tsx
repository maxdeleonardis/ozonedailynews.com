import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Inter, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { OrganizationSchema, WebSiteSchema } from "@/components/articles/NewsArticleSchema";
import AuthProvider from "@/components/auth/AuthProvider";
import MobileNav from "@/components/nav/MobileNav";
import TopStripSearch from "@/components/nav/TopStripSearch";
import NavUserButton from "@/components/nav/NavUserButton";
import NavBreakingTicker from "@/components/nav/NavBreakingTicker";
import NewsletterSignupInline from "@/components/newsletter/NewsletterSignupInline";
import FooterAuthorSlot from "@/components/authors/FooterAuthorSlot";
import { FooterAuthorProvider } from "@/lib/footer-author-context";
import TopStrip from "@/components/nav/TopStrip";
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
  authors: [{ name: "ObjectWire News Editorial Team" }],
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
  // NOTE: Do NOT add canonical here. Each page.tsx sets its own via
  // metadata.alternates.canonical. A site-wide canonical in the root layout
  // collapses all pages into homepage duplicates in Google Search.
  alternates: {
    types: {
      'application/rss+xml': `${SITE_CONFIG.url}/rss.xml`,
      'application/feed+json': `${SITE_CONFIG.url}/feed.json`,
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
        {/* Canonical is set per-page via metadata.alternates.canonical.
            Do NOT hardcode a site-wide canonical here — it overrides every
            page's self-canonical and tells Google all pages are duplicates of the homepage. */}
        <link rel="alternate" type="application/rss+xml" title={`${SITE_CONFIG.name} RSS Feed`} href={`${SITE_CONFIG.url}/rss.xml`} />
        <OrganizationSchema />
        <WebSiteSchema />
      </head>
      <body className="bg-[#faf9f6] text-gray-900 antialiased font-sans dark:bg-[#121212] dark:text-gray-100">
        <AuthProvider>
          <ThemeProvider>
            <FooterAuthorProvider>
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
                    OBJECTWIRE NEWS
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
                    {/* Home icon */}
                    <Link
                      href="/"
                      aria-label="Home"
                      className="px-3 md:px-4 py-2.5 hover:bg-black hover:text-white transition-colors shrink-0 flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                        <path d="M10.707 2.293a1 1 0 0 0-1.414 0l-7 7A1 1 0 0 0 3 11h1v6a1 1 0 0 0 1 1h4v-4h2v4h4a1 1 0 0 0 1-1v-6h1a1 1 0 0 0 .707-1.707l-7-7Z" />
                      </svg>
                    </Link>
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
        <footer className="border-t border-gray-200 bg-white dark:bg-gray-950 dark:border-gray-800 mt-24">
          <div className="container max-w-6xl mx-auto px-4 sm:px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_2fr] gap-x-16 gap-y-12">

              {/* Brand */}
              <FooterAuthorSlot />

              {/* Company — narrow */}
              <div className="shrink-0">
                <h4 className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-4">Company</h4>
                <div className="flex flex-col gap-2">
                  <Link href="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white font-medium transition-colors">About</Link>
                  <Link href="/editorial-standards" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white font-medium transition-colors">Editorial Standards</Link>
                  <Link href="/corrections" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white font-medium transition-colors">Corrections</Link>
                  <Link href="/privacy-policy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white font-medium transition-colors">Privacy Policy</Link>
                  <Link href="/terms-of-service" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white font-medium transition-colors">Terms of Service</Link>
                </div>
              </div>

              {/* Newsletter — wide */}
              <div>
                <NewsletterSignupInline />
              </div>

            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-100 dark:border-gray-800 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span>© 2026 ObjectWire News.</span>
                <span className="hidden sm:inline">All rights reserved.</span>
                <span className="text-gray-300 dark:text-gray-600">·</span>
                <span className="text-xs">Verified reporting. Primary sources only.</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
                <span>objectwire.org</span>
              </div>
            </div>
          </div>
        </footer>

            </FooterAuthorProvider>
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
