import type { Metadata } from "next";
import {
  ArticlePage,
  PageHeader,
  InfoBox,
  TableOfContents,
  Section,
  DataTable,
  Notice,
  Quote,
  Figure,
  RelatedLinks,
  ExternalLinks,
  References,
} from "@/components/ArticlePage";

export const metadata: Metadata = {
  title: "TikTok - The Complete Encyclopedia | ObjectWire",
  description:
    "Comprehensive information about TikTok, the short-form video hosting service owned by ByteDance. History, features, controversies, and cultural impact.",
  keywords: [
    "TikTok",
    "ByteDance",
    "social media",
    "short-form video",
    "Musical.ly",
    "Zhang Yiming",
    "social network",
    "video sharing",
  ],
};

export default function TikTokPage() {
  return (
    <ArticlePage title="TikTok">
      <PageHeader
        title="TikTok"
        subtitle="Short-form video hosting service"
        category="Technology"
        lastUpdated="January 23, 2026"
        breadcrumbs={[
          { href: "/", label: "Home" },
          { href: "/technology", label: "Technology" },
          { href: "/social-media", label: "Social Media" },
        ]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
        <div>
          <TableOfContents
            items={[
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
            ]}
          />

          <Section id="overview" title="Overview">
            <p>
              <strong>TikTok</strong>, also known as <strong>Douyin</strong> (抖音) in China, is a
              short-form video hosting service owned by Chinese technology company ByteDance. It
              hosts user-submitted videos with durations ranging from 15 seconds to 10 minutes.
            </p>

            <p>
              Since its launch in 2016, TikTok has become one of the world's most popular social
              media platforms, with over 1 billion monthly active users as of 2024. The platform
              is known for its highly personalized algorithm, viral trends, and significant
              influence on popular culture, particularly among younger demographics.
            </p>

            <Quote source="Social Media Analyst">
              "TikTok has fundamentally changed how a generation consumes and creates content. It's not just an app—it's become the primary cultural platform for Gen Z."
            </Quote>
          </Section>

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
              United States in October 2018. The COVID-19 pandemic in 2020 further accelerated
              user growth as people sought entertainment during lockdowns.
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
              feeds on other platforms, the FYP is algorithm-driven and is widely considered the
              key to TikTok's success.
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
              Launched in 2020, the TikTok Creator Fund pays eligible creators based on video
              views and engagement. To qualify, creators must meet minimum follower and view count
              requirements.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">TikTok Shop</h3>
            <p>
              TikTok Shop, launched in various markets starting in 2021, allows creators and brands
              to sell products directly through the app via live streams and in-feed videos.
            </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Brand Partnerships</h3>
            <p>
              TikTok facilitates brand partnerships through its Creator Marketplace, connecting
              brands with influencers for sponsored content opportunities.
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
              In response to ongoing national security concerns and legislative pressure in the
              United States, TikTok announced the formation of the <strong>USDS Joint Venture
              LLC</strong> in January 2026.
            </p>

            <p>
              The joint venture represents a compromise solution aimed at allowing TikTok to
              continue operating in the United States while addressing government concerns about
              data security and Chinese influence.
            </p>

            <Notice type="info">
              <p className="font-bold mb-2">Latest Development</p>
              <p>
                For detailed information about the USDS Joint Venture structure, partners, and
                implications, see the{" "}
                <a
                  href="/tiktok/Announcement-from-the-new-TikTok-USDS-Joint-Venture-LLC"
                  className="text-blue-600 hover:underline"
                >
                  official announcement article
                </a>
                .
              </p>
            </Notice>
          </Section>

          <RelatedLinks
            links={[
              { href: "/bytedance", label: "ByteDance" },
              { href: "/social-media", label: "Social Media Platforms" },
              { href: "/content-creation", label: "Content Creation" },
              { href: "/algorithm", label: "Recommendation Algorithms" },
            ]}
          />

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
        </div>

        <aside>
          <InfoBox
            title="TikTok"
            image={{
              src: "/images/tiktok-logo.png",
              alt: "TikTok logo",
              caption: "TikTok corporate logo",
            }}
            items={[
              { label: "Type", value: "Private" },
              { label: "Industry", value: "Social Media, Technology" },
              { label: "Founded", value: "September 2016 (as Douyin)\nAugust 2018 (global merger)" },
              { label: "Headquarters", value: "Culver City, California, U.S.\nBeijing, China" },
              { label: "Parent Company", value: "ByteDance" },
              { label: "CEO", value: "Shou Zi Chew" },
              { label: "Users", value: "1.6+ billion monthly active users" },
              { label: "Available in", value: "75 languages" },
              { label: "Website", value: "tiktok.com" },
            ]}
          />
        </aside>
      </div>
    </ArticlePage>
  );
}
