import type { Metadata } from 'next';
import { NewsArticleSchema } from '@/components/NewsArticleSchema';
import {
  DynamicNewsArticle,
  CaseOverview,
  StatisticsBox,
  ProcessDiagram,
} from '@/components/DynamicNewsArticle';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Apple Inc. - Company Overview, Products, and Latest News | ObjectWire',
  description: 'Comprehensive overview of Apple Inc., the American multinational technology company. Explore Apple\'s history, products, services, leadership, and latest developments.',
  keywords: [
    'Apple Inc',
    'Apple company',
    'Tim Cook',
    'iPhone',
    'Mac',
    'iPad',
    'Apple Watch',
    'Apple technology',
    'AAPL stock',
    'Cupertino',
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/apple',
  },
  openGraph: {
    type: 'article',
    title: 'Apple Inc. - Company Profile',
    description: 'Comprehensive overview of Apple Inc., covering products, services, leadership, and latest news.',
    publishedTime: '2026-01-30T15:00:00Z',
    section: 'Technology',
    tags: ['Apple', 'Technology', 'Company Profile', 'Consumer Electronics'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apple Inc. - Company Profile',
    description: 'Complete guide to Apple: products, services, and latest developments.',
  },
};

export default function AppleCompanyPage() {
  return (
    <>
      <NewsArticleSchema
        title="Apple Inc. - Company Overview and Profile"
        description="Comprehensive overview of Apple Inc., the American multinational technology company."
        author="ObjectWire Technology Desk"
        authorUrl="https://objectwire.org/team"
        publishedTime="2026-01-30T15:00:00Z"
        modifiedTime="2026-01-30T15:00:00Z"
        articleUrl="https://objectwire.org/apple"
        section="Company Profile"
        keywords={['Apple', 'Technology', 'iPhone', 'Mac', 'Tim Cook']}
      />

      <DynamicNewsArticle
        breadcrumbs={[
          { href: '/', label: 'Home' },
          { href: '/news', label: 'News' },
        ]}
        categories={[
          { label: 'COMPANY PROFILE', color: 'blue' },
        ]}
        readTime="12 min read"
        title="Apple Inc."
        subtitle="American multinational corporation and technology company headquartered in Cupertino, California, designing and manufacturing consumer electronics, software, and online services"
        author={{
          name: 'ObjectWire Technology Desk',
          department: 'Company Profiles & Analysis',
          initials: 'OW',
        }}
        publishDate="January 30, 2026"
        updatedDate="January 30, 2026"
        relatedArticles={[
          {
            href: '/apple-iphone-18-delay-2027-foldable',
            category: 'BREAKING',
            categoryColor: 'text-red-600',
            title: 'Apple Delays iPhone 18 to 2027, Prioritizing Foldable Launch',
          },
          {
            href: '/apple-google-gemini-partnership',
            category: 'PARTNERSHIP',
            categoryColor: 'text-purple-600',
            title: 'Apple & Google Gemini Partnership',
          },
          {
            href: '/news',
            category: 'TECH NEWS',
            categoryColor: 'text-blue-600',
            title: 'Latest Technology Coverage',
          },
        ]}
        timeline={[
          { date: 'April 1, 1976', description: 'Apple founded by Jobs, Wozniak, and Wayne' },
          { date: '1984', description: 'Macintosh launched' },
          { date: '2001', description: 'iPod revolutionizes music industry' },
          { date: '2007', description: 'iPhone announced, launching smartphone era', highlight: true },
          { date: '2011', description: 'Steve Jobs passes away, Tim Cook becomes CEO' },
          { date: '2015', description: 'Apple Watch introduced' },
          { date: '2020', description: 'Apple Silicon transition begins with M1 chip' },
          { date: '2026', description: 'Foldable iPhone planned', highlight: true },
        ]}
        documents={[
          {
            href: 'https://www.apple.com/',
            label: 'Apple Official Website',
            icon: '🌐',
          },
          {
            href: 'https://investor.apple.com/',
            label: 'Investor Relations',
            icon: '📊',
          },
          {
            href: 'https://www.apple.com/newsroom/',
            label: 'Apple Newsroom',
            icon: '📰',
          },
        ]}
        sources={[
          {
            number: 1,
            url: 'https://www.apple.com/',
            title: 'Apple Inc.',
            description: 'Official company website and product information',
          },
          {
            number: 2,
            url: 'https://investor.apple.com/',
            title: 'Apple Investor Relations',
            description: 'Financial reports and shareholder information',
          },
          {
            number: 3,
            url: 'https://en.wikipedia.org/wiki/Apple_Inc.',
            title: 'Apple Inc. - Wikipedia',
            description: 'Historical background and company information',
          },
        ]}
        showCorrections={true}
        showEditorialStandards={true}
      >
        {/* Company Overview Box */}
        <CaseOverview
          title="COMPANY OVERVIEW"
          color="blue"
          items={[
            { label: 'Founded:', value: 'April 1, 1976 (47 years ago)' },
            { label: 'Founders:', value: 'Steve Jobs, Steve Wozniak, Ronald Wayne' },
            { label: 'Headquarters:', value: 'Cupertino, California, United States' },
            { label: 'CEO:', value: 'Tim Cook (since 2011)' },
            { label: 'Employees:', value: '~161,000 (2024)' },
            { label: 'Market Cap:', value: '$3+ trillion (2024)' },
          ]}
        />

        {/* Introduction */}
        <p className="text-lg leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:leading-none">
          <strong>Apple Inc.</strong> is an American multinational corporation and technology company headquartered in Cupertino, California, in Silicon Valley. Apple is best known for its consumer electronics, software, and online services. The company was founded on April 1, 1976, by Steve Jobs, Steve Wozniak, and Ronald Wayne to develop and sell Wozniak's Apple I personal computer.
        </p>

        <p>
          Apple is the world's largest technology company by revenue and one of the most valuable companies globally. The company's hardware products include the{' '}
          <Link href="/apple-iphone-18-delay-2027-foldable" className="text-blue-600 hover:underline font-medium">
            iPhone
          </Link>{' '}
          smartphone, iPad tablet computer, Mac personal computer, Apple Watch smartwatch, and Apple TV digital media player, among others. Apple's software includes iOS, iPadOS, macOS, watchOS, and tvOS operating systems, as well as creative and productivity software like Final Cut Pro and Logic Pro.
        </p>

        <StatisticsBox
          title="KEY METRICS (2024)"
          color="blue"
          stats={[
            { value: '$394B', label: 'Annual Revenue' },
            { value: '$3.0T+', label: 'Market Cap' },
            { value: '161K', label: 'Employees' },
            { value: '2.2B+', label: 'Active Devices' },
          ]}
        />

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          History
        </h2>

        <h3 className="text-xl font-bold mt-6 mb-3">Founding and Early Years (1976-1984)</h3>

        <p>
          Apple was founded on April 1, 1976, by{' '}
          <strong>Steve Jobs</strong>, <strong>Steve Wozniak</strong>, and <strong>Ronald Wayne</strong> as a partnership to sell the Apple I personal computer kit designed and hand-built by Wozniak. Wayne sold his share back to Jobs and Wozniak for $800 just 12 days later, making it one of the most expensive decisions in business history.
        </p>

        <p>
          The company was incorporated as <strong>Apple Computer, Inc.</strong> on January 3, 1977, and the Apple II was introduced shortly after, becoming one of the first highly successful mass-produced microcomputers. The company went public on December 12, 1980, making Jobs and Wozniak millionaires instantly.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">The Macintosh Era (1984-1997)</h3>

        <p>
          In 1984, Apple launched the <strong>Macintosh</strong>, the first personal computer to popularize the graphical user interface (GUI). The Macintosh was initially a success but eventually led to internal conflicts. Steve Jobs left Apple in 1985 after a power struggle with then-CEO John Sculley.
        </p>

        <p>
          Throughout the 1990s, Apple struggled with high costs, internal conflicts, and competition from Microsoft Windows. By 1997, the company was weeks away from bankruptcy.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">The Return of Jobs and Renaissance (1997-2011)</h3>

        <p>
          Steve Jobs returned to Apple in 1997 as interim CEO after Apple acquired his company NeXT. He immediately began restructuring the company, discontinuing unprofitable products and streamlining the product line. The iMac, introduced in 1998, marked Apple's return to profitability.
        </p>

        <p>
          The early 2000s saw Apple's transformation from a computer company to a consumer electronics powerhouse:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li><strong>2001</strong> — iPod launched, revolutionizing portable music</li>
          <li><strong>2003</strong> — iTunes Store opened, changing music distribution</li>
          <li><strong>2007</strong> — iPhone announced, creating the modern smartphone industry</li>
          <li><strong>2008</strong> — App Store launched with iPhone 3G</li>
          <li><strong>2010</strong> — iPad introduced, creating tablet computing category</li>
          <li><strong>2011</strong> — Steve Jobs passed away on October 5</li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-3">Tim Cook Era (2011-Present)</h3>

        <p>
          <strong>Tim Cook</strong> became CEO in August 2011, shortly before Jobs' death. Under Cook's leadership, Apple has:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Become the first company to reach $1 trillion (2018), $2 trillion (2020), and $3 trillion (2024) market capitalization</li>
          <li>Launched Apple Watch (2015), becoming the world's best-selling watch brand</li>
          <li>Introduced Apple Silicon (M1, M2, M3 chips) starting in 2020</li>
          <li>Expanded services business significantly (Apple Music, Apple TV+, iCloud, etc.)</li>
          <li>Developed Vision Pro mixed reality headset (2024)</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Products and Services
        </h2>

        <h3 className="text-xl font-bold mt-6 mb-3">Hardware Products</h3>

        <ProcessDiagram
          title="MAJOR PRODUCT LINES"
          color="blue"
          steps={[
            {
              title: 'iPhone',
              description: 'Flagship smartphone line, generates majority of revenue. Latest: iPhone 15 series (2024)',
            },
            {
              title: 'Mac',
              description: 'Personal computers including MacBook, iMac, Mac Pro, Mac Studio. Now powered by Apple Silicon',
            },
            {
              title: 'iPad',
              description: 'Tablet computers with various models from entry-level to iPad Pro',
            },
            {
              title: 'Wearables',
              description: 'Apple Watch, AirPods, AirPods Pro, AirPods Max',
            },
            {
              title: 'Apple Vision Pro',
              description: 'Mixed reality headset combining AR and VR (launched 2024)',
            },
          ]}
        />

        <h3 className="text-xl font-bold mt-6 mb-3">Software & Operating Systems</h3>

        <ul className="list-disc pl-6 space-y-2">
          <li><strong>iOS</strong> — Mobile operating system for iPhone</li>
          <li><strong>iPadOS</strong> — Optimized version of iOS for iPad</li>
          <li><strong>macOS</strong> — Desktop operating system for Mac computers</li>
          <li><strong>watchOS</strong> — Operating system for Apple Watch</li>
          <li><strong>tvOS</strong> — Operating system for Apple TV</li>
          <li><strong>visionOS</strong> — Spatial computing OS for Vision Pro</li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-3">Services</h3>

        <p>
          Apple's services business has become increasingly important, generating over $85 billion in annual revenue:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Apple Music</strong> — Music streaming service with 100+ million subscribers</li>
          <li><strong>Apple TV+</strong> — Original video content streaming platform</li>
          <li><strong>Apple Arcade</strong> — Gaming subscription service</li>
          <li><strong>iCloud</strong> — Cloud storage and services</li>
          <li><strong>Apple Pay</strong> — Mobile payment and digital wallet service</li>
          <li><strong>App Store</strong> — Digital distribution platform for iOS/iPadOS apps</li>
          <li><strong>Apple Fitness+</strong> — Fitness subscription service</li>
          <li><strong>Apple News+</strong> — News and magazine subscription</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Recent Developments & News
        </h2>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
          <h4 className="font-bold mb-2">🆕 Latest: iPhone Strategy Shift</h4>
          <p className="text-sm mb-3">
            In January 2026, Apple announced a major strategic change to its iPhone lineup, delaying the standard iPhone 18 until early 2027 while prioritizing premium models including its first-ever foldable iPhone.
          </p>
          <Link 
            href="/apple-iphone-18-delay-2027-foldable"
            className="text-blue-600 hover:underline font-medium text-sm"
          >
            Read full coverage: Apple Delays iPhone 18 to 2027, Prioritizing Foldable Launch →
          </Link>
        </div>

        <h3 className="text-xl font-bold mt-6 mb-3">2024-2026 Key Developments</h3>

        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Vision Pro Launch (2024)</strong> — Apple's first major new product category since Apple Watch</li>
          <li><strong>Apple Silicon Maturation</strong> — M3 and M4 chips bring significant performance gains</li>
          <li><strong>AI Integration</strong> — Apple Intelligence features rolling out across devices</li>
          <li><strong>Foldable iPhone Development</strong> — First foldable device planned for H2 2026 at $1,999</li>
          <li><strong>Supply Chain Challenges</strong> — Memory chip costs rising, impacting margins</li>
          <li><strong>Services Growth</strong> — Continued expansion of subscription offerings</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Leadership
        </h2>

        <h3 className="text-xl font-bold mt-6 mb-3">Current Executive Team</h3>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="border-2 border-black p-4">
            <h4 className="font-bold">Tim Cook</h4>
            <p className="text-sm text-gray-500 mb-2">Chief Executive Officer</p>
            <p className="text-sm">
              CEO since 2011, previously COO. Led Apple to become first $3 trillion company.
            </p>
          </div>

          <div className="border-2 border-gray-200 p-4">
            <h4 className="font-bold">Luca Maestri</h4>
            <p className="text-sm text-gray-500 mb-2">Chief Financial Officer</p>
            <p className="text-sm">
              CFO since 2014, manages Apple's financial operations and investor relations.
            </p>
          </div>

          <div className="border-2 border-gray-200 p-4">
            <h4 className="font-bold">Jeff Williams</h4>
            <p className="text-sm text-gray-500 mb-2">Chief Operating Officer</p>
            <p className="text-sm">
              COO since 2015, oversees Apple's operations, supply chain, and service operations.
            </p>
          </div>

          <div className="border-2 border-gray-200 p-4">
            <h4 className="font-bold">Craig Federighi</h4>
            <p className="text-sm text-gray-500 mb-2">SVP, Software Engineering</p>
            <p className="text-sm">
              Leads development of iOS, iPadOS, macOS, and Apple's software platforms.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Business Model & Strategy
        </h2>

        <p>
          Apple operates on a unique business model in the technology industry, controlling both hardware and software through vertical integration. This approach allows Apple to optimize performance, ensure security, and create a seamless user experience across devices.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Key Strategic Elements</h3>

        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Ecosystem Lock-in</strong> — Products work seamlessly together, encouraging multiple purchases</li>
          <li><strong>Premium Positioning</strong> — High-margin products targeting affluent consumers</li>
          <li><strong>Services Expansion</strong> — Growing recurring revenue through subscriptions</li>
          <li><strong>Privacy as Differentiator</strong> — Emphasizing data protection and user privacy</li>
          <li><strong>Retail Excellence</strong> — Extensive retail store network for customer experience</li>
          <li><strong>Supply Chain Control</strong> — Tight management of manufacturing and component sourcing</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Innovation and R&D
        </h2>

        <p>
          Apple invests heavily in research and development, spending over $29 billion annually. Key innovation areas include:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Apple Silicon</strong> — Custom chip design for Macs, iPhones, iPads</li>
          <li><strong>Artificial Intelligence</strong> — Machine learning, computer vision, natural language processing</li>
          <li><strong>Augmented Reality</strong> — Vision Pro and future spatial computing devices</li>
          <li><strong>Health Technology</strong> — Advanced sensors in Apple Watch for health monitoring</li>
          <li><strong>Autonomous Systems</strong> — Project Titan and other automotive initiatives</li>
          <li><strong>Display Technology</strong> — Foldable displays, MicroLED development</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Challenges and Controversies
        </h2>

        <h3 className="text-xl font-bold mt-6 mb-3">Current Challenges</h3>

        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Supply Chain Pressures</strong> — Rising component costs, particularly memory chips</li>
          <li><strong>Regulatory Scrutiny</strong> — Antitrust investigations in EU and US regarding App Store policies</li>
          <li><strong>China Dependence</strong> — Heavy reliance on Chinese manufacturing and market</li>
          <li><strong>Market Saturation</strong> — Slowing iPhone sales growth in mature markets</li>
          <li><strong>Right to Repair</strong> — Criticism over product repairability and independent repair restrictions</li>
          <li><strong>Labor Practices</strong> — Scrutiny of supplier working conditions</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Market Position & Competition
        </h2>

        <p>
          Apple competes in multiple technology sectors:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Smartphones</strong> — Primary competitor: Samsung; also Xiaomi, Huawei, Google</li>
          <li><strong>Personal Computers</strong> — Competitors: Dell, HP, Lenovo, Microsoft Surface</li>
          <li><strong>Tablets</strong> — Competitors: Samsung, Amazon, Microsoft</li>
          <li><strong>Smartwatches</strong> — Competitors: Samsung, Garmin, Fitbit</li>
          <li><strong>Streaming Services</strong> — Competitors: Netflix, Disney+, Spotify, Amazon</li>
          <li><strong>Mixed Reality</strong> — Competitors: Meta Quest, Microsoft HoloLens</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Corporate Responsibility
        </h2>

        <p>
          Apple has committed to various environmental and social initiatives:
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Carbon Neutrality</strong> — Plans to be carbon neutral across entire business by 2030</li>
          <li><strong>Renewable Energy</strong> — 100% of facilities powered by renewable energy</li>
          <li><strong>Recycling Programs</strong> — iPhone trade-in and recycling through Apple Trade In</li>
          <li><strong>Privacy Advocacy</strong> — Strong stance on user privacy and data protection</li>
          <li><strong>Education Initiatives</strong> — Programs to support education and coding skills</li>
          <li><strong>Supplier Responsibility</strong> — Regular audits of supplier working conditions</li>
        </ul>

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          Related Coverage
        </h2>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <Link href="/apple-iphone-18-delay-2027-foldable" className="block border-2 border-blue-500 p-4 hover:bg-blue-50 transition-colors">
            <span className="text-xs font-bold text-red-600">BREAKING NEWS</span>
            <h4 className="font-bold mt-1">Apple Delays iPhone 18 to 2027, Prioritizing Foldable Launch</h4>
            <p className="text-sm text-gray-600 mt-2">
              Apple shifts strategy to focus on premium models and its first-ever foldable iPhone amid supply chain pressures.
            </p>
            <span className="text-blue-600 text-sm mt-2 inline-block">Read more →</span>
          </Link>

          <Link href="/apple-google-gemini-partnership" className="block border-2 border-gray-300 p-4 hover:bg-gray-50 transition-colors">
            <span className="text-xs font-bold text-purple-600">PARTNERSHIP</span>
            <h4 className="font-bold mt-1">Apple & Google Gemini Partnership</h4>
            <p className="text-sm text-gray-600 mt-2">
              Analysis of the strategic partnership between Apple and Google for AI integration.
            </p>
            <span className="text-blue-600 text-sm mt-2 inline-block">Read more →</span>
          </Link>
        </div>

        <h2 className="text-2xl font-bold mt-10 mb-4 border-b border-gray-200 pb-2">
          External Links
        </h2>

        <ul className="space-y-2">
          <li>
            <a 
              href="https://www.apple.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Apple Official Website
            </a>
          </li>
          <li>
            <a 
              href="https://investor.apple.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Apple Investor Relations
            </a>
          </li>
          <li>
            <a 
              href="https://www.apple.com/newsroom/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Apple Newsroom
            </a>
          </li>
          <li>
            <a 
              href="https://support.apple.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Apple Support
            </a>
          </li>
        </ul>

      </DynamicNewsArticle>
    </>
  );
}
