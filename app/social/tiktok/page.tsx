import type { Metadata } from "next";
import {
  ArticlePage,
  Section,
  DataTable,
  Notice,
  Quote,
  ExternalLinks,
  References,
} from "@/components/ArticlePage";

export const metadata: Metadata = {
  title: "TikTok - Complete Guide, History & Latest News 2026 | ObjectWire",
  description:
    "Complete guide to TikTok: history from Musical.ly merger, algorithm explained, user demographics, controversies, US ban updates, and cultural impact. Latest TikTok news and USDS Joint Venture updates.",
  keywords: [
    "TikTok",
    "TikTok news",
    "TikTok ban",
    "TikTok algorithm",
    "ByteDance",
    "social media",
    "short-form video",
    "Musical.ly",
    "Zhang Yiming",
    "TikTok US ban",
    "TikTok USDS",
    "social network",
    "video sharing",
    "influencer marketing",
    "Gen Z social media",
    "TikTok trends",
    "For You Page",
    "TikTok creator fund",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/tiktok',
  },
  openGraph: {
    title: 'TikTok - Complete Guide, History & Latest News 2026',
    description: 'Everything you need to know about TikTok: algorithm, controversies, US ban updates, and cultural impact',
    url: 'https://www.objectwire.org/tiktok',
    type: 'article',
  },
};

export default function TikTokPage() {
  const infoBox = {
    title: "TikTok",
    items: [
      { label: "Type", value: "Short-form video hosting service" },
      { label: "Owner", value: "ByteDance" },
      { label: "Founded", value: "September 2016 (as Douyin)" },
      { label: "Headquarters", value: "Beijing, China / Los Angeles, USA" },
      { label: "Founder", value: "Zhang Yiming" },
      { label: "CEO", value: "Shou Zi Chew" },
      { label: "Users", value: "1.6 billion+ (2024)" },
      { label: "Revenue", value: "$14.7 billion (2023)" },
      { label: "Employees", value: "150,000+ (2024)" },
    ],
  };

  const tableOfContents = [
    { id: "overview", label: "Overview" },
    { id: "history", label: "History" },
    { id: "features", label: "Features and Functionality" },
    { id: "algorithm", label: "The Algorithm" },
    { id: "monetization", label: "Monetization" },
    { id: "demographics", label: "User Demographics" },
    { id: "controversies", label: "Controversies" },
    { id: "bans", label: "Bans and Restrictions" },
    { id: "cultural-impact", label: "Cultural Impact" },
    { id: "usds-joint-venture", label: "USDS Joint Venture" },
  ];

  const relatedLinks = [
    {
      href: "/tiktok/Announcement-from-the-new-TikTok-USDS-Joint-Venture-LLC",
      label: "TikTok USDS Joint Venture Announcement",
      description: "Latest update on TikTok's US operations",
    },
    {
      href: "/news",
      label: "Social Media News",
      description: "Latest social media industry updates",
    },
    {
      href: "/coding",
      label: "Tech & Development",
      description: "Technology and software development coverage",
    },
    {
      href: "/influencer",
      label: "Influencer Coverage",
      description: "Social media influencer news and analysis",
    },
  ];

  return (
    <ArticlePage
      title="TikTok"
      subtitle="Short-form video hosting service owned by ByteDance"
      category="Technology"
      lastUpdated="January 23, 2026"
      infoBox={infoBox}
      tableOfContents={tableOfContents}
      relatedLinks={relatedLinks}
    >
      <p className="text-xl font-medium text-gray-700 mb-6 leading-relaxed">
        <strong>TikTok</strong>, also known as <strong>Douyin</strong> (抖音) in China, is a
        short-form video hosting service owned by Chinese technology company <a href="https://www.bytedance.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ByteDance</a>. It
        hosts user-submitted videos with durations ranging from 15 seconds to 10 minutes.
      </p>

      <p className="text-gray-700 mb-6 leading-relaxed">
        Since its launch in 2016, TikTok has become one of the world's most popular social
        media platforms, with over <strong>1.6 billion monthly active users</strong> as of 2024. The platform
        is known for its highly personalized algorithm, viral trends, and significant
        influence on popular culture, particularly among younger demographics.
      </p>

      <Quote source="Social Media Analyst">
        "TikTok has fundamentally changed how a generation consumes and creates content. It's not just an app—it's become the primary cultural platform for Gen Z."
      </Quote>

          <Section id="history" title="History">
            <h3 className="text-xl font-bold mt-6 mb-3">Musical.ly Era (2014-2018)</h3>
            <p>
              The story of TikTok begins with Musical.ly, a Chinese social media app launched in
              2014 by Alex Zhu and Luyu Yang. Musical.ly allowed users to create short lip-sync
              videos to popular songs and gained significant popularity among teenagers in the
              United States and other Western markets.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">ByteDance Acquisition (2017)</h3>
            <p>
              In November 2017, ByteDance acquired Musical.ly for approximately $1 billion. At the
              time, ByteDance was already operating Douyin, a similar short-video app that had
              launched in China in September 2016.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Merger and Rebrand (2018)</h3>
            <p>
              On August 2, 2018, ByteDance merged Musical.ly with TikTok, consolidating the user
              base and content. Existing Musical.ly users woke up to find their accounts had been
              transferred to TikTok, creating an instant global presence for the platform.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Explosive Growth (2019-2020)</h3>
            <p>
              TikTok experienced unprecedented growth, becoming the most downloaded app in the
              United States in October 2018. The <a href="/news" className="text-blue-600 hover:underline">COVID-19 pandemic</a> in 2020 further accelerated
              user growth as people sought entertainment during lockdowns. This period saw a massive surge in <a href="/influencer" className="text-blue-600 hover:underline">influencer content</a> and brand partnerships.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">TikTok Growth Milestones</h3>
            <DataTable
              headers={["Year", "Milestone", "Monthly Active Users"]}
              rows={[
                ["2018", "Merger with Musical.ly", "~500 million"],
                ["2019", "Reached 1.5 billion downloads", "~800 million"],
                ["2020", "Most downloaded app globally", "~850 million"],
                ["2021", "Surpassed 1 billion users", "1 billion"],
                ["2023", "Peak user growth", "1.5 billion"],
                ["2024", "Continued dominance", "1.6 billion"],
              ]}
            />
          </Section>

          <Section id="features" title="Features and Functionality">
            <h3 className="text-xl font-bold mt-6 mb-3">Video Creation Tools</h3>
            <p>
              TikTok provides users with extensive video creation and editing tools, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>
                <strong>Filters and Effects:</strong> AR filters, beauty filters, green screen
                effects
              </li>
              <li>
                <strong>Music Library:</strong> Extensive catalog of licensed music and sounds
              </li>
              <li>
                <strong>Speed Controls:</strong> Slow-motion, time-lapse, and playback speed
                adjustments
              </li>
              <li>
                <strong>Text and Stickers:</strong> Customizable text overlays and animated
                stickers
              </li>
              <li>
                <strong>Duets and Stitches:</strong> Collaborative video features
              </li>
              <li>
                <strong>Voiceovers:</strong> Record audio over existing video content
              </li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-3">For You Page (FYP)</h3>
            <p>
              The For You Page is TikTok's main feed, delivering a personalized stream of content
              based on user interactions, viewing patterns, and engagement. Unlike chronological
              feeds on other <a href="/news" className="text-blue-600 hover:underline">social media platforms</a>, the FYP is algorithm-driven and is widely considered the
              key to TikTok's success. This <a href="/coding" className="text-blue-600 hover:underline">algorithmic approach</a> has revolutionized content discovery.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Trending Content</h3>
            <p>
              TikTok features a "Discover" page that highlights trending hashtags, sounds, and
              challenges. This feature has been instrumental in driving viral trends and cultural
              moments.
            </p>
          </Section>

          <Section id="algorithm" title="The Algorithm">
            <p>
              TikTok's recommendation algorithm is widely regarded as one of the most sophisticated
              and effective in the social media industry. While ByteDance keeps the exact mechanics
              proprietary, several factors are known to influence content recommendations:
            </p>

            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>
                <strong>User Interactions:</strong> Videos you like, share, comment on, or create
              </li>
              <li>
                <strong>Video Information:</strong> Captions, sounds, hashtags, and effects used
              </li>
              <li>
                <strong>Device and Account Settings:</strong> Language preference, country setting,
                device type
              </li>
              <li>
                <strong>Watch Time:</strong> How long you watch a video (completion rate is
                crucial)
              </li>
              <li>
                <strong>Rewatches:</strong> Whether users replay videos
              </li>
              <li>
                <strong>Engagement Patterns:</strong> When and how frequently you use the app
              </li>
            </ul>

            <Notice type="info">
              <p className="font-bold mb-2">Algorithmic Fairness</p>
              <p>
                Unlike platforms that heavily favor accounts with large followings, TikTok's
                algorithm gives new creators a chance to go viral. Even users with zero followers
                can have videos reach millions if the content resonates with viewers.
              </p>
            </Notice>
          </Section>

          <Section id="monetization" title="Monetization">
            <h3 className="text-xl font-bold mt-6 mb-3">Creator Fund</h3>
            <p>
              Launched in 2020, the TikTok Creator Fund pays eligible <a href="/influencer" className="text-blue-600 hover:underline">creators</a> based on video
              views and engagement. To qualify, creators must meet minimum follower and view count
              requirements. This has been a game-changer for <a href="/influencer" className="text-blue-600 hover:underline">influencer monetization</a>.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">TikTok Shop</h3>
            <p>
              TikTok Shop, launched in various markets starting in 2021, allows creators and brands
              to sell products directly through the app via live streams and in-feed videos. This <a href="/news" className="text-blue-600 hover:underline">e-commerce integration</a> has transformed social commerce.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Brand Partnerships</h3>
            <p>
              TikTok facilitates brand partnerships through its Creator Marketplace, connecting
              brands with <a href="/influencer" className="text-blue-600 hover:underline">influencers</a> for sponsored content opportunities. Major brands are increasingly shifting <a href="/news" className="text-blue-600 hover:underline">marketing budgets</a> to TikTok campaigns.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Live Gifting</h3>
            <p>
              During live streams, viewers can purchase and send virtual gifts to creators, which
              can be converted to real currency. TikTok takes a commission on these transactions.
            </p>
          </Section>

          <Section id="demographics" title="User Demographics">
            <p>
              TikTok's user base is notably younger compared to other major social media platforms:
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">TikTok User Demographics by Age (2024)</h3>
            <DataTable
              headers={["Age Group", "Percentage of Users", "Notes"]}
              rows={[
                ["10-19", "25%", "Largest demographic"],
                ["20-29", "22.4%", "Key engagement group"],
                ["30-39", "21.7%", "Growing segment"],
                ["40-49", "20.3%", "Fastest growing"],
                ["50+", "10.6%", "Emerging demographic"],
              ]}
            />

            <p className="mt-4">
              <strong>Gender distribution:</strong> Approximately 54% female, 46% male globally,
              though this varies by region.
            </p>
            <p>
              <strong>Geographic reach:</strong> Available in over 150 countries and 75 languages,
              with largest user bases in Asia, North America, and Europe.
            </p>
          </Section>

          <Section id="controversies" title="Controversies">
            <h3 className="text-xl font-bold mt-6 mb-3">Data Privacy Concerns</h3>
            <p>
              TikTok has faced intense scrutiny over its data collection practices and potential
              ties to the Chinese government through parent company ByteDance. Critics argue that
              the app collects excessive user data that could be accessed by Chinese authorities
              under national security laws.
            </p>

            <Notice type="warning">
              <p className="font-bold mb-2">Security Concerns</p>
              <p>
                Multiple governments, including the United States, have raised national security
                concerns about TikTok's data practices. Several countries have banned the app on
                government devices.
              </p>
            </Notice>

            <h3 className="text-xl font-bold mt-6 mb-3">Content Moderation</h3>
            <p>
              TikTok has been criticized for both over-moderation (censorship) and
              under-moderation (allowing harmful content):
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Allegations of censoring content critical of China</li>
              <li>Concerns about exposure of minors to inappropriate content</li>
              <li>Challenges spreading dangerous behaviors (e.g., the "Blackout Challenge")</li>
              <li>Misinformation and conspiracy theories</li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-3">Mental Health Impact</h3>
            <p>
              Research has raised concerns about TikTok's impact on mental health, particularly
              among young users, citing issues like:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Addictive design and excessive screen time</li>
              <li>Body image issues from beauty filters and comparison culture</li>
              <li>Sleep disruption from late-night scrolling</li>
              <li>Anxiety and depression linked to social comparison</li>
            </ul>
          </Section>

          <Section id="bans" title="Bans and Restrictions">
            <h3 className="text-xl font-bold mt-6 mb-3">United States</h3>
            <p>
              The United States has had an on-again, off-again relationship with TikTok regulation:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>
                <strong>2020:</strong> Trump administration attempted to ban TikTok, citing
                national security
              </li>
              <li>
                <strong>2023:</strong> Montana became the first state to ban TikTok (later blocked
                by courts)
              </li>
              <li>
                <strong>2024-2025:</strong> Federal legislation requiring ByteDance to divest or
                face ban
              </li>
              <li>
                <strong>2026:</strong> USDS Joint Venture formed to address security concerns
              </li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-3">India</h3>
            <p>
              In June 2020, India permanently banned TikTok along with dozens of other Chinese
              apps, citing security concerns. India was TikTok's largest market at the time with
              over 200 million users.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Other Countries</h3>
            <p>
              Various countries have implemented partial bans or restrictions on TikTok, primarily
              prohibiting the app on government-issued devices. These include Canada, the UK, New
              Zealand, Australia, and several European Union nations.
            </p>
          </Section>

          <Section id="cultural-impact" title="Cultural Impact">
            <h3 className="text-xl font-bold mt-6 mb-3">Music Industry</h3>
            <p>
              TikTok has become arguably the most powerful force in music discovery and promotion:
            </p>
            <ul className="list-disc pl-6 space-y-2 my-4">
              <li>Viral songs can propel unknown artists to stardom overnight</li>
              <li>Old songs experience resurgence through viral trends</li>
              <li>Record labels actively promote releases on TikTok</li>
              <li>TikTok chart performance influences Billboard and Spotify rankings</li>
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-3">Dance and Choreography</h3>
            <p>
              Dance challenges have become a defining feature of TikTok culture, with choreography
              spreading globally within hours. Professional dancers, celebrities, and everyday
              users participate in trending dance routines.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Language and Memes</h3>
            <p>
              TikTok has significantly influenced internet language, popularizing phrases, slang,
              and meme formats that spread to other platforms and mainstream culture.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Political Activism</h3>
            <p>
              The platform has been used for political organizing and activism, most notably during
              the 2020 Black Lives Matter protests and various youth-led climate movements.
            </p>
          </Section>

          <Section id="usds-joint-venture" title="USDS Joint Venture">
            <p>
              In response to ongoing <a href="/news" className="text-blue-600 hover:underline">national security concerns</a> and legislative pressure in the
              United States, TikTok announced the formation of the <strong>USDS Joint Venture
              LLC</strong> in January 2026. This represents one of the most significant developments in <a href="/news" className="text-blue-600 hover:underline">tech policy</a> and international business relations.
            </p>

            <p>
              The joint venture represents a compromise solution aimed at allowing TikTok to
              continue operating in the United States while addressing government concerns about
              data security and Chinese influence. Read the full details in our <a href="/tiktok/Announcement-from-the-new-TikTok-USDS-Joint-Venture-LLC" className="text-blue-600 hover:underline font-semibold">official USDS Joint Venture announcement</a>.
            </p>

            <Notice type="info">
              <p className="font-bold mb-2">Latest Development</p>
              <p>
                For detailed information about the USDS Joint Venture structure, partners, and
                implications, see the{" "}
                <a href="/tiktok/Announcement-from-the-new-TikTok-USDS-Joint-Venture-LLC" className="text-blue-600 hover:underline font-semibold">full USDS Joint Venture announcement</a>
                . This landmark deal reshapes TikTok's US operations and sets precedent for <a href="/news" className="text-blue-600 hover:underline">foreign tech companies</a> operating in America.
              </p>
            </Notice>
          </Section>

          <ExternalLinks
            links={[
              { href: "https://www.tiktok.com", label: "TikTok Official Website" },
              { href: "https://newsroom.tiktok.com", label: "TikTok Newsroom" },
              {
                href: "https://www.tiktok.com/creators",
                label: "TikTok Creator Portal",
              },
              {
                href: "https://www.tiktok.com/transparency",
                label: "TikTok Transparency Center",
              },
            ]}
          />

          <References>
            <ol className="list-decimal list-inside space-y-2">
              <li>
                ByteDance. 'TikTok Company Overview.' TikTok Newsroom. 2024.{" "}
                <a href="https://newsroom.tiktok.com" className="text-blue-600 hover:underline">
                  Link
                </a>
              </li>
              <li>
                Iqbal, Mansoor. 'TikTok Revenue and Usage Statistics (2024).' Business of Apps.
              </li>
              <li>
                Anderson, Monica. 'A Majority of Teens Have Used TikTok.' Pew Research Center. 2023.
              </li>
              <li>
                Herrman, John. 'How TikTok Is Rewriting the World.' The New York Times. 2019.
              </li>
            </ol>
          </References>
    </ArticlePage>
  );
}
