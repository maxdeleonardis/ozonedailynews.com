import type { Metadata } from 'next';
import Link from 'next/link';
import { ArticlePage } from '@/components/articles/ArticlePage';
import { Breadcrumb } from '@/components/nav/Breadcrumb';

const SLUG = 'apple';
const PAGE_URL = 'https://www.objectwire.org/apple';
const IMAGE_URL = 'https://images.unsplash.com/photo-1591292784843-aa35ebb7897b?ixlib=rb-4.1.0&w=1200&q=85&fm=jpg&fit=crop&crop=entropy';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Apple Inc. | ObjectWire',
  description: 'Apple Inc. is the world\'s most valuable company, making the iPhone, Mac, iPad, Apple Watch, and Vision Pro. Full profile of products, leadership, and financials.',
  keywords: [
    'Apple Inc',
    'Apple company',
    'Tim Cook',
    'iPhone',
    'Mac',
    'iPad',
    'Apple Watch',
    'Vision Pro',
    'AAPL stock',
    'Cupertino',
    'Apple Park',
    'Apple Intelligence',
  ],
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type: 'article',
    title: 'Apple Inc. | ObjectWire',
    description: 'Full company profile of Apple Inc., the world\'s most valuable technology company. Products, leadership, financials, and latest developments.',
    url: PAGE_URL,
    siteName: 'ObjectWire',
    images: [{ url: IMAGE_URL, width: 1200, height: 675, alt: 'Apple Park headquarters in Cupertino, California' }],
    publishedTime: '2026-01-30T15:00:00Z',
    section: 'Tech',
    tags: ['Apple', 'Tim Cook', 'iPhone', 'AAPL'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apple Inc. | ObjectWire',
    description: 'Full company profile of Apple Inc., the world\'s most valuable technology company.',
    images: [IMAGE_URL],
  },
};

export default function AppleCompanyPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { name: 'Home', item: '/' },
          { name: 'Tech', item: '/tech' },
          { name: 'Apple', item: '/apple' },
        ]}
      />
      <ArticlePage
        title="Apple Inc."
        subtitle="American multinational technology company headquartered in Cupertino, California"
        category="Tech"
        lastUpdated="March 2026"
        slug={SLUG}
        url="/apple"
        backLink={{ href: '/tech', label: 'Tech Hub' }}
        infoBox={{
          title: 'Apple Inc.',
          image: {
            src: IMAGE_URL,
            alt: 'Aerial view of Apple Park headquarters in Cupertino, California',
            caption: 'Apple Park, Cupertino. Photo by Carles Rabada / Unsplash.',
          },
          sections: [
            {
              heading: 'Company Overview',
              items: [
                { label: 'Founded', value: 'April 1, 1976' },
                { label: 'Founders', value: 'Steve Jobs, Steve Wozniak, Ronald Wayne' },
                { label: 'CEO', value: 'Tim Cook (since 2011)' },
                { label: 'Headquarters', value: 'One Apple Park Way, Cupertino, CA' },
                { label: 'Employees', value: '~161,000 (2025)' },
                { label: 'Revenue', value: '$391B (FY 2024)' },
                { label: 'Market Cap', value: '~$3.4T (March 2026)' },
                { label: 'Stock Ticker', value: 'AAPL (NASDAQ)' },
              ],
            },
            {
              heading: 'Key Products',
              list: [
                'iPhone',
                'Mac (MacBook Air, MacBook Pro, iMac, Mac Studio, Mac Pro)',
                'iPad (Air, Pro, mini)',
                'Apple Watch (Series, Ultra)',
                'AirPods (standard, Pro, Max)',
                'Apple Vision Pro',
                'Apple TV 4K',
              ],
            },
            {
              heading: 'Services',
              list: [
                'App Store',
                'Apple Music',
                'Apple TV+',
                'iCloud',
                'Apple Pay',
                'Apple Arcade',
                'Apple Fitness+',
                'Apple Intelligence (AI)',
              ],
            },
            {
              heading: 'Links',
              links: [
                { href: 'https://www.apple.com', label: 'apple.com', external: true },
                { href: '/tech', label: 'Tech Hub' },
                { href: '/google', label: 'Google' },
                { href: '/microsoft', label: 'Microsoft' },
                { href: '/nvidia', label: 'Nvidia' },
              ],
            },
          ],
        }}
        tableOfContents={[
          { id: 'overview', label: 'Overview' },
          { id: 'history', label: 'History' },
          { id: 'products', label: 'Products and Hardware' },
          { id: 'services', label: 'Services Ecosystem' },
          { id: 'apple-intelligence', label: 'Apple Intelligence' },
          { id: 'leadership', label: 'Leadership' },
          { id: 'financials', label: 'Financials and Stock' },
          { id: 'recent-news', label: 'Recent Developments' },
        ]}
        relatedLinks={[
          { href: '/apple/news/apple-google-gemini-partnership', label: 'Apple-Google Gemini Partnership' },
          { href: '/apple/core-ai-framework-replaces-core-ml-wwdc-2026-bloomberg', label: 'Core AI Framework Replaces Core ML' },
          { href: '/apple/apple-iphone-18-delay-2027-foldable', label: 'iPhone 18 Delay and Foldable Plans' },
          { href: '/apple/news/apple-march-2026-products-macbook-iphone-17e-ipad-air-m5', label: 'Apple March 2026 Product Lineup' },
          { href: '/apple/news/f1-apple-tv-espn-domenicali', label: 'F1 on Apple TV and ESPN' },
          { href: '/google', label: 'Google' },
          { href: '/nvidia', label: 'Nvidia' },
          { href: '/open-ai', label: 'OpenAI' },
        ]}
      >
        {/* ── Overview ──────────────────────────────────────────── */}
        <section id="overview" className="mb-10">
          <h2 className="text-2xl font-black tracking-tight mb-4 border-b-2 border-black pb-2">Overview</h2>
          <p className="text-gray-800 leading-relaxed mb-4">
            <strong>Apple Inc.</strong> is an American multinational technology company that designs, develops, and sells consumer electronics, software, and online services. It is the world&apos;s most valuable publicly traded company by market capitalization, consistently exceeding $3 trillion since late 2023.
          </p>
          <p className="text-gray-800 leading-relaxed mb-4">
            Apple&apos;s product ecosystem spans the <strong>iPhone</strong>, <strong>Mac</strong>, <strong>iPad</strong>, <strong>Apple Watch</strong>, <strong>AirPods</strong>, and <strong>Apple Vision Pro</strong>, all tightly integrated through proprietary software including iOS, macOS, watchOS, and visionOS. The company&apos;s services segment, which includes the App Store, Apple Music, Apple TV+, iCloud, and Apple Pay, generates over $96 billion annually and is the fastest-growing part of the business.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Headquartered at <strong>Apple Park</strong> in Cupertino, California, Apple employs approximately 161,000 people worldwide and operates more than 500 retail stores across 25 countries. The company is led by CEO <strong>Tim Cook</strong>, who succeeded co-founder Steve Jobs in August 2011.
          </p>
        </section>

        {/* ── History ───────────────────────────────────────────── */}
        <section id="history" className="mb-10">
          <h2 className="text-2xl font-black tracking-tight mb-4 border-b-2 border-black pb-2">History</h2>
          <p className="text-gray-800 leading-relaxed mb-4">
            Apple was founded on <strong>April 1, 1976</strong>, by Steve Jobs, Steve Wozniak, and Ronald Wayne in Los Altos, California. The company&apos;s first product, the Apple I, was a hand-built circuit board sold without a case, keyboard, or monitor. The <strong>Apple II</strong>, released in 1977, became one of the first mass-produced personal computers and established Apple as a major player in the nascent PC industry.
          </p>
          <p className="text-gray-800 leading-relaxed mb-4">
            The <strong>Macintosh</strong>, introduced in January 1984, was the first commercially successful personal computer to feature a graphical user interface and a mouse. Despite critical acclaim, internal power struggles led to Steve Jobs&apos;s departure from Apple in 1985. The company struggled through the 1990s under a series of CEOs until Jobs returned in 1997 following Apple&apos;s acquisition of NeXT.
          </p>
          <p className="text-gray-800 leading-relaxed mb-4">
            Jobs&apos;s return marked the beginning of Apple&apos;s modern era. The <strong>iMac G3</strong> (1998) revived the brand, the <strong>iPod</strong> (2001) transformed the music industry, and the <strong>iPhone</strong> (2007) redefined mobile computing. The <strong>iPad</strong> (2010) created an entirely new device category. Jobs passed away on October 5, 2011, leaving Tim Cook to steer the company into its current era.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Under Cook, Apple became the first US company to reach a $1 trillion market cap (2018), then $2 trillion (2020), and $3 trillion (2023). The company expanded aggressively into services, wearables, and most recently spatial computing with the <strong>Apple Vision Pro</strong> in February 2024.
          </p>
        </section>

        {/* ── Products ─────────────────────────────────────────── */}
        <section id="products" className="mb-10">
          <h2 className="text-2xl font-black tracking-tight mb-4 border-b-2 border-black pb-2">Products and Hardware</h2>

          <div className="bg-gray-50 border border-gray-200 p-5 mb-5 rounded">
            <h3 className="font-black text-base mb-3">Current Product Lines (2026)</h3>
            <ul className="space-y-2 text-sm text-gray-800">
              {[
                ['iPhone', 'iPhone 17 series', 'Apple\'s flagship, ~52% of total revenue. A19 chip, Apple Intelligence built-in.'],
                ['Mac', 'M4 / M5 silicon', 'MacBook Air, MacBook Pro, iMac, Mac Studio, Mac Pro. All on Apple Silicon since 2022.'],
                ['iPad', 'iPad Air M3, iPad Pro M5', 'Tablets ranging from $349 to $1,599. Pro models rival laptop performance.'],
                ['Apple Watch', 'Series 11, Ultra 3', 'Health-focused wearable. Blood oxygen, ECG, crash detection.'],
                ['AirPods', 'AirPods 4, Pro 3, Max 2', 'Wireless earbuds and headphones. Hearing health features added 2024.'],
                ['Vision Pro', '1st generation', 'Spatial computing headset. $3,499. visionOS platform.'],
              ].map(([product, model, desc]) => (
                <li key={product} className="flex gap-3">
                  <span className="font-black text-black shrink-0 w-28">{product}</span>
                  <span className="text-gray-500 shrink-0 w-36 font-mono text-xs pt-0.5">{model}</span>
                  <span className="text-gray-700">{desc}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-gray-800 leading-relaxed">
            Apple designs its own system-on-chip processors under the <strong>Apple Silicon</strong> brand (M-series for Mac/iPad, A-series for iPhone). The transition from Intel began in November 2020 with the M1 chip and was completed by 2022, delivering substantial performance and efficiency gains across the entire Mac lineup.
          </p>
        </section>

        {/* ── Services ─────────────────────────────────────────── */}
        <section id="services" className="mb-10">
          <h2 className="text-2xl font-black tracking-tight mb-4 border-b-2 border-black pb-2">Services Ecosystem</h2>
          <p className="text-gray-800 leading-relaxed mb-4">
            Apple&apos;s services segment is the company&apos;s second-largest revenue driver and its highest-margin business. In FY 2024, services generated <strong>$96.2 billion</strong> in revenue, up from $85.2 billion the prior year, with gross margins exceeding 70%.
          </p>

          <div className="bg-gray-50 border border-gray-200 p-5 mb-5 rounded">
            <h3 className="font-black text-base mb-3">Major Services</h3>
            <ul className="space-y-1 text-sm text-gray-800">
              <li><strong>App Store</strong> - Digital marketplace for iOS and macOS apps. 1.8M+ apps available.</li>
              <li><strong>Apple Music</strong> - 100M+ song catalog, spatial audio, lossless streaming. 88M+ subscribers.</li>
              <li><strong>Apple TV+</strong> - Original content platform. Emmy and Oscar-winning productions.</li>
              <li><strong>iCloud</strong> - Cloud storage, backup, and sync. 50GB free, up to 12TB paid.</li>
              <li><strong>Apple Pay</strong> - Contactless payment system active in 70+ countries.</li>
              <li><strong>Apple Arcade</strong> - Gaming subscription with 200+ ad-free titles.</li>
              <li><strong>Apple Fitness+</strong> - Workout streaming tied to Apple Watch metrics.</li>
              <li><strong>Apple One</strong> - Bundle of services at a discounted rate.</li>
            </ul>
          </div>

          <p className="text-gray-800 leading-relaxed">
            The services business is strategically critical because it generates recurring revenue from Apple&apos;s installed base of over <strong>2.2 billion active devices</strong>. Analysts view this segment as the primary driver of Apple&apos;s valuation multiple premium over other hardware companies.
          </p>
        </section>

        {/* ── Apple Intelligence ───────────────────────────────── */}
        <section id="apple-intelligence" className="mb-10">
          <h2 className="text-2xl font-black tracking-tight mb-4 border-b-2 border-black pb-2">Apple Intelligence</h2>
          <p className="text-gray-800 leading-relaxed mb-4">
            <strong>Apple Intelligence</strong> is Apple&apos;s personal AI system, announced at WWDC 2024 and rolling out across iOS 18, iPadOS 18, and macOS Sequoia. It combines on-device models with a Private Cloud Compute backend to power features like writing tools, image generation, notification summaries, and a significantly enhanced Siri.
          </p>
          <p className="text-gray-800 leading-relaxed mb-4">
            Apple&apos;s AI strategy differs from competitors by prioritizing <strong>on-device processing</strong> and user privacy. Most Apple Intelligence features run locally on the A17 Pro, M1, or newer chips. When cloud processing is needed, Apple uses its Private Cloud Compute infrastructure, which is designed so that Apple itself cannot access user data.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Apple also partnered with <Link href="/open-ai" className="text-blue-600 hover:underline">OpenAI</Link> to integrate ChatGPT into Siri as an optional fallback for complex queries. At <strong>WWDC 2026</strong>, Apple is expected to introduce <Link href="/apple/core-ai-framework-replaces-core-ml-wwdc-2026-bloomberg" className="text-blue-600 hover:underline">Core AI</Link>, a new framework replacing Core ML that enables third-party apps to leverage Apple&apos;s on-device models directly.
          </p>
        </section>

        {/* ── Leadership ───────────────────────────────────────── */}
        <section id="leadership" className="mb-10">
          <h2 className="text-2xl font-black tracking-tight mb-4 border-b-2 border-black pb-2">Leadership</h2>

          <div className="bg-gray-50 border border-gray-200 p-5 mb-5 rounded">
            <h3 className="font-black text-base mb-3">Executive Team (2026)</h3>
            <ul className="space-y-2 text-sm text-gray-800">
              {[
                ['Tim Cook', 'Chief Executive Officer', 'CEO since August 2011. Previously COO. Oversaw Apple\'s growth past $3T.'],
                ['Luca Maestri', 'CFO (transitioning)', 'CFO since 2014. Kevan Parekh named successor, effective January 2025.'],
                ['Craig Federighi', 'SVP, Software Engineering', 'Leads iOS, macOS, and Apple Intelligence development.'],
                ['John Ternus', 'SVP, Hardware Engineering', 'Leads iPhone, Mac, iPad, and Vision Pro hardware.'],
                ['Jeff Williams', 'COO', 'Oversees Apple Watch, health initiatives, and supply chain.'],
                ['Eddy Cue', 'SVP, Services', 'Leads App Store, Apple Music, Apple TV+, Apple Pay.'],
              ].map(([name, role, desc]) => (
                <li key={name} className="flex gap-3">
                  <span className="font-black text-black shrink-0 w-36">{name}</span>
                  <span className="text-gray-500 shrink-0 w-48 text-xs pt-0.5">{role}</span>
                  <span className="text-gray-700">{desc}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="text-gray-800 leading-relaxed">
            Apple&apos;s board of directors includes former US Vice President Al Gore, former Boeing CEO James McNerney, and Disney CEO Bob Iger (who returned to the board in 2024). Art Levinson serves as chairman of the board.
          </p>
        </section>

        {/* ── Financials ───────────────────────────────────────── */}
        <section id="financials" className="mb-10">
          <h2 className="text-2xl font-black tracking-tight mb-4 border-b-2 border-black pb-2">Financials and Stock</h2>
          <p className="text-gray-800 leading-relaxed mb-4">
            Apple trades on the NASDAQ under the ticker <strong>AAPL</strong>. It is the largest component of the S&P 500 and Dow Jones Industrial Average by market capitalization, consistently valued above $3 trillion.
          </p>

          <div className="bg-gray-50 border border-gray-200 p-5 mb-5 rounded">
            <h3 className="font-black text-base mb-3">FY 2024 Financial Highlights</h3>
            <ul className="space-y-1 text-sm text-gray-800">
              <li><strong>Revenue:</strong> $391 billion (up 2% YoY)</li>
              <li><strong>Net Income:</strong> $101 billion</li>
              <li><strong>Services Revenue:</strong> $96.2 billion (up 13% YoY)</li>
              <li><strong>iPhone Revenue:</strong> $201 billion (~52% of total)</li>
              <li><strong>Gross Margin:</strong> 46.2%</li>
              <li><strong>Cash and Equivalents:</strong> ~$65 billion</li>
              <li><strong>Share Buybacks (FY 2024):</strong> $95 billion</li>
              <li><strong>Dividend:</strong> $1.00/share annually</li>
            </ul>
          </div>

          <p className="text-gray-800 leading-relaxed">
            Apple&apos;s capital return program is the largest in corporate history. Since 2012, the company has returned over <strong>$700 billion</strong> to shareholders through buybacks and dividends. Despite this, Apple maintains a balance sheet with approximately $65 billion in cash and marketable securities.
          </p>
        </section>

        {/* ── Recent Developments ──────────────────────────────── */}
        <section id="recent-news" className="mb-10">
          <h2 className="text-2xl font-black tracking-tight mb-4 border-b-2 border-black pb-2">Recent Developments</h2>
          <ul className="space-y-3 text-gray-800 leading-relaxed">
            <li>
              <strong>March 2026</strong> - Apple announced the <Link href="/apple/news/apple-march-2026-products-macbook-iphone-17e-ipad-air-m5" className="text-blue-600 hover:underline">MacBook Air M5, iPhone 17e, and iPad Air M5</Link> at a spring product event.
            </li>
            <li>
              <strong>February 2026</strong> - Reports indicate Apple is <Link href="/apple/apple-iphone-18-delay-2027-foldable" className="text-blue-600 hover:underline">delaying iPhone 18 features</Link> to prioritize a foldable device for 2027.
            </li>
            <li>
              <strong>January 2026</strong> - Bloomberg reported Apple is developing <Link href="/apple/core-ai-framework-replaces-core-ml-wwdc-2026-bloomberg" className="text-blue-600 hover:underline">Core AI, a successor to Core ML</Link>, expected to debut at WWDC 2026.
            </li>
            <li>
              <strong>2025</strong> - Apple expanded its <Link href="/apple/news/apple-google-gemini-partnership" className="text-blue-600 hover:underline">partnership with Google</Link> to integrate Gemini as an additional AI provider alongside OpenAI&apos;s ChatGPT within Siri.
            </li>
            <li>
              <strong>2025</strong> - Apple TV+ secured <Link href="/apple/news/f1-apple-tv-espn-domenicali" className="text-blue-600 hover:underline">expanded Formula 1 streaming rights</Link> in partnership with ESPN.
            </li>
          </ul>
        </section>
      </ArticlePage>
    </>
  );
}
