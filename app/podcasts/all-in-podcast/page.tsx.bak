import type { Metadata } from "next";
import {
  ArticlePage,
  Section,
  DataTable,
  Notice,
  Quote,
  ExternalLinks,
} from "@/components/ArticlePage";

export const metadata: Metadata = {
  title: "All-In Podcast - Tech & Business Insights | ObjectWire",
  description:
    "Complete profile of the All-In Podcast hosted by the Besties: Chamath Palihapitiya, Jason Calacanis, David Sacks, and David Friedberg. Tech, business, and policy analysis.",
  keywords: [
    "All-In Podcast",
    "Chamath Palihapitiya",
    "Jason Calacanis",
    "David Sacks",
    "David Friedberg",
    "tech podcast",
    "venture capital",
    "business",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/podcasts/all-in-podcast',
  },
};

export default function AllInPodcastPage() {
  const tableOfContents = [
    { id: "overview", label: "Overview" },
    { id: "hosts", label: "The Besties" },
    { id: "format", label: "Show Format" },
    { id: "topics", label: "Key Topics" },
    { id: "summit", label: "All-In Summit" },
    { id: "impact", label: "Industry Impact" },
  ];

  return (
    <ArticlePage
      title="All-In Podcast"
      subtitle="Tech, business, and policy insights from Silicon Valley's top minds"
      category="Podcasts"
      lastUpdated="January 23, 2026"
      tableOfContents={tableOfContents}
    >
      <p className="text-xl font-medium text-gray-700 mb-6 leading-relaxed">
        <strong>All-In</strong> is a weekly podcast featuring four prominent
        technology investors and entrepreneurs: <strong>Chamath Palihapitiya</strong>,{" "}
        <strong>Jason Calacanis</strong>, <strong>David Sacks</strong>, and{" "}
        <strong>David Friedberg</strong>. Known as "the Besties," they discuss
        technology, business, economics, science, and politics from Silicon Valley's
        insider perspective.
      </p>

      <Notice type="info">
        The All-In Podcast has become one of the most influential business podcasts,
        with millions of downloads per episode and hosting the annual All-In Summit
        attended by tech's elite.
      </Notice>

      <Section id="overview" title="Overview">
        <p className="text-gray-700 mb-4">
          All-In launched in 2020 during the COVID-19 pandemic as a casual
          conversation among friends. What started as weekly Zoom calls discussing
          markets, tech, and policy quickly evolved into one of the most prominent
          voices in technology and business media.
        </p>
        <p className="text-gray-700 mb-4">
          The podcast is known for its unfiltered debates, insider perspectives on
          Silicon Valley, and willingness to tackle controversial topics. The hosts'
          combined experience spans founding companies, investing billions, and
          advising major tech firms, providing unique insights unavailable elsewhere.
        </p>
        <p className="text-gray-700">
          Episodes typically run 90-120 minutes and cover breaking tech news, market
          analysis, startup strategies, policy debates, and predictions about the
          future of technology and society.
        </p>
      </Section>

      <Section id="hosts" title="The Besties">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Host Profiles</h3>

        <div className="space-y-6 mb-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="text-lg font-bold text-gray-900 mb-2">
              Chamath Palihapitiya
            </h4>
            <p className="text-gray-700 mb-2">
              <strong>Role:</strong> Founder & CEO of Social Capital
            </p>
            <p className="text-gray-700">
              Former Facebook executive who led growth to 1 billion users. Known for
              SPAC investments and outspoken views on capitalism and technology's role
              in society. Controversial figure who challenges Silicon Valley orthodoxy.
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="text-lg font-bold text-gray-900 mb-2">Jason Calacanis</h4>
            <p className="text-gray-700 mb-2">
              <strong>Role:</strong> Founder of LAUNCH and angel investor
            </p>
            <p className="text-gray-700">
              Serial entrepreneur and early investor in Uber, Robinhood, and dozens of
              unicorns. Hosts This Week in Startups and the All-In Summit. Known for
              optimistic takes and startup ecosystem cheerleading.
            </p>
          </div>

          <div className="border-l-4 border-purple-500 pl-4">
            <h4 className="text-lg font-bold text-gray-900 mb-2">David Sacks</h4>
            <p className="text-gray-700 mb-2">
              <strong>Role:</strong> Founder of Craft Ventures
            </p>
            <p className="text-gray-700">
              Former PayPal COO (part of PayPal Mafia) and Yammer founder (sold to
              Microsoft for $1.2B). Conservative voice on the pod, often clashing with
              Chamath. Known for political commentary and startup operational expertise.
            </p>
          </div>

          <div className="border-l-4 border-orange-500 pl-4">
            <h4 className="text-lg font-bold text-gray-900 mb-2">David Friedberg</h4>
            <p className="text-gray-700 mb-2">
              <strong>Role:</strong> Founder & CEO of The Production Board
            </p>
            <p className="text-gray-700">
              Climate tech entrepreneur and investor. Founded The Climate Corporation
              (sold to Monsanto for $1.1B). Provides scientific and data-driven
              analysis on climate, biotech, and complex systems. The moderating voice
              among the Besties.
            </p>
          </div>
        </div>

        <DataTable
          headers={["Host", "Company", "Notable Investments/Exits", "Background"]}
          rows={[
            [
              "Chamath Palihapitiya",
              "Social Capital",
              "Virgin Galactic, Slack, Box",
              "Former FB VP of Growth",
            ],
            [
              "Jason Calacanis",
              "LAUNCH",
              "Uber, Robinhood, Calm",
              "Angel investor, 300+ investments",
            ],
            [
              "David Sacks",
              "Craft Ventures",
              "Yammer ($1.2B), PayPal",
              "PayPal Mafia, SaaS expert",
            ],
            [
              "David Friedberg",
              "The Production Board",
              "The Climate Corp ($1.1B)",
              "Climate tech pioneer",
            ],
          ]}
        />
      </Section>

      <Section id="format" title="Show Format">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Episode Structure</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            <strong>Frequency:</strong> Weekly episodes, typically released Fridays
          </li>
          <li>
            <strong>Duration:</strong> 90-120 minutes of unedited conversation
          </li>
          <li>
            <strong>Format:</strong> Round-table discussion with all four hosts
          </li>
          <li>
            <strong>Video:</strong> Full video available on YouTube and podcast platforms
          </li>
          <li>
            <strong>Production:</strong> Professional studio setup with occasional
            guest appearances
          </li>
        </ul>

        <h3 className="text-xl font-bold text-gray-900 mb-3">Show Segments</h3>
        <p className="text-gray-700 mb-4">
          Each episode typically follows a consistent structure:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>
            <strong>Opening banter:</strong> Personal updates and poker game recaps
          </li>
          <li>
            <strong>Tech news breakdown:</strong> Major industry developments
          </li>
          <li>
            <strong>Market analysis:</strong> Stocks, crypto, and macro economics
          </li>
          <li>
            <strong>Policy debates:</strong> Politics, regulation, and governance
          </li>
          <li>
            <strong>Science & innovation:</strong> Breakthroughs in AI, biotech, climate
          </li>
        </ul>

        <Quote source="Jason Calacanis, All-In Episode #150">
          "We're just four guys talking about the news of the week. The fact that millions listen is wild."
        </Quote>
      </Section>

      <Section id="topics" title="Key Topics">
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          Regular Discussion Areas
        </h3>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <h4 className="font-bold text-gray-900 mb-2">🚀 Technology</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>AI and machine learning</li>
              <li>Cryptocurrency and Web3</li>
              <li>SaaS and enterprise software</li>
              <li>Consumer tech trends</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
            <h4 className="font-bold text-gray-900 mb-2">💰 Business & Markets</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>Venture capital and investing</li>
              <li>IPOs and SPACs</li>
              <li>Market analysis and predictions</li>
              <li>Startup strategy and operations</li>
            </ul>
          </div>

          <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
            <h4 className="font-bold text-gray-900 mb-2">🏛️ Policy & Politics</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>Tech regulation and antitrust</li>
              <li>Government spending and fiscal policy</li>
              <li>Elections and political analysis</li>
              <li>Free speech and content moderation</li>
            </ul>
          </div>

          <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
            <h4 className="font-bold text-gray-900 mb-2">🔬 Science & Future</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>Climate change and energy</li>
              <li>Biotech and longevity</li>
              <li>Space exploration</li>
              <li>Future of work and society</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
          Controversial Moments
        </h3>
        <p className="text-gray-700 mb-4">
          The All-In hosts are known for heated debates and contrarian takes. Notable
          controversial discussions include:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>COVID-19 policy and lockdowns (Chamath vs. Sacks)</li>
          <li>2024 election predictions and political endorsements</li>
          <li>Crypto regulation and SEC enforcement</li>
          <li>Big Tech monopolies and antitrust actions</li>
          <li>Climate policy and carbon markets</li>
        </ul>
      </Section>

      <Section id="summit" title="All-In Summit">
        <p className="text-gray-700 mb-4">
          The <strong>All-In Summit</strong> is an annual invite-only conference that
          brings together technology leaders, investors, policymakers, and
          entrepreneurs. Launched in 2021, it has become one of the most exclusive
          events in tech.
        </p>

        <DataTable
          headers={["Year", "Location", "Attendees", "Highlights"]}
          rows={[
            [
              "2021",
              "Los Angeles, CA",
              "500+",
              "Inaugural event, sold out in hours",
            ],
            [
              "2022",
              "Miami, FL",
              "1,000+",
              "Expanded format, political debates",
            ],
            [
              "2023",
              "Los Angeles, CA",
              "1,500+",
              "AI focus, Sam Altman keynote",
            ],
            [
              "2024",
              "Los Angeles, CA",
              "2,000+",
              "Election coverage, Musk appearance",
            ],
            [
              "2025",
              "Los Angeles, CA",
              "2,500+ (expected)",
              "Climate tech and AGI themes",
            ],
          ]}
        />

        <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Summit Features</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>Keynote speeches from tech CEOs and political leaders</li>
          <li>Panel discussions on AI, crypto, climate, and policy</li>
          <li>Live podcast recording with special guests</li>
          <li>Networking with Silicon Valley's elite</li>
          <li>Poker tournament featuring the Besties</li>
        </ul>

        <Notice type="info">
          Tickets to the All-In Summit typically sell out within minutes, with prices
          ranging from $5,000-$10,000. The event generates millions in revenue and
          has become a major annual gathering for the tech industry.
        </Notice>
      </Section>

      <Section id="impact" title="Industry Impact">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Influence on Tech Discourse
        </h3>
        <p className="text-gray-700 mb-4">
          All-In has become required listening for Silicon Valley insiders,
          investors, and entrepreneurs. The podcast's influence extends beyond
          entertainment:
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            <strong>Market moving:</strong> Comments from hosts can impact stock
            prices and crypto valuations
          </li>
          <li>
            <strong>Thought leadership:</strong> Shapes conversation around tech
            policy and innovation
          </li>
          <li>
            <strong>Political influence:</strong> Hosts have advised campaigns and
            influenced policy debates
          </li>
          <li>
            <strong>Startup ecosystem:</strong> Provides education and strategy for
            founders and investors
          </li>
          <li>
            <strong>Alternative media:</strong> Demonstrates power of creator-owned
            media vs. traditional outlets
          </li>
        </ul>

        <h3 className="text-xl font-bold text-gray-900 mb-3">Revenue Model</h3>
        <p className="text-gray-700 mb-4">
          Unlike traditional podcasts, All-In has maintained editorial independence
          with minimal sponsorships. Revenue sources include:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>Limited premium sponsorships (highly selective)</li>
          <li>All-In Summit ticket sales and sponsorships</li>
          <li>YouTube ad revenue (millions of views per episode)</li>
          <li>Merchandise and branded content</li>
        </ul>

        <Quote source="Tech Media Analyst, The Future of Podcasting Report 2025">
          "All-In represents a new model for media: creator-owned, advertiser-independent, and audience-first."
        </Quote>

        <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
          Legacy & Future
        </h3>
        <p className="text-gray-700 mb-4">
          As one of the most successful business podcasts of the 2020s, All-In has
          proven that deep, unfiltered conversations about complex topics can attract
          massive audiences. The show has inspired countless imitators and
          demonstrated the power of authentic, expert-driven content.
        </p>
        <p className="text-gray-700">
          Looking ahead, the Besties continue to expand their influence through the
          annual summit, strategic investments, and thought leadership on the defining
          issues of our time: AI, climate, governance, and the future of innovation.
        </p>
      </Section>

      <ExternalLinks
        links={[
          {
            label: "Listen on Apple Podcasts",
            href: "https://podcasts.apple.com/us/podcast/all-in-with-chamath-jason-sacks-friedberg/id1502871393",
          },
          {
            label: "Watch on YouTube",
            href: "https://www.youtube.com/@allin",
          },
          {
            label: "All-In Summit Website",
            href: "https://www.allinpodcast.co/summit",
          },
        ]}
      />
    </ArticlePage>
  );
}
