import type { Metadata } from "next";
import {
  NewsArticle,
  NewsHeader,
  HighlightBox,
  EmbedBox,
  Timeline,
  TagsSection,
  RelatedStories,
} from "@/components/NewsArticle";

export const metadata: Metadata = {
  title: "TikTok Announces USDS Joint Venture LLC to Address U.S. Security Concerns | ObjectWire",
  description:
    "TikTok unveils groundbreaking joint venture with U.S. technology and security partners, creating USDS LLC to operate the platform domestically while addressing national security concerns.",
  keywords: [
    "TikTok",
    "USDS",
    "joint venture",
    "national security",
    "ByteDance",
    "data security",
    "U.S. government",
    "social media regulation",
  ],
};

export default function TikTokUSDSAnnouncementPage() {
  return (
    <NewsArticle>
      <NewsHeader
        category="BREAKING"
        categoryColor="red"
        badges={["Breaking", "Exclusive"]}
        title="TikTok Announces USDS Joint Venture LLC to Address U.S. Security Concerns"
        subtitle="Platform unveils unprecedented partnership structure with American tech firms and security experts to maintain U.S. operations"
        author={{
          name: "Sarah Chen",
          avatar: "/avatars/sarah-chen.jpg",
          role: "Tech Policy Correspondent",
        }}
        publishDate="January 23, 2026"
        readTime="7 min read"
        heroImage={{
          src: "/images/tiktok-usds-announcement.jpg",
          alt: "TikTok USDS Joint Venture press conference",
          caption: "TikTok executives announce the USDS Joint Venture at Washington D.C. headquarters",
        }}
        breadcrumbs={[
          { href: "/news", label: "News" },
          { href: "/technology", label: "Technology" },
          { href: "/tiktok", label: "TikTok" },
        ]}
      />

      <p className="text-xl leading-relaxed">
        In a historic move to resolve years of regulatory battles, <strong>TikTok</strong> announced
        today the formation of <strong>TikTok USDS Joint Venture LLC</strong>, a new U.S.-based
        entity that will operate the platform domestically through a partnership with American
        technology firms, cybersecurity companies, and independent oversight boards.
      </p>

      <p>
        The announcement, made at a press conference in Washington D.C., represents a compromise
        solution that allows TikTok to continue operating in the United States while addressing
        long-standing national security concerns raised by lawmakers and intelligence agencies.
      </p>

      <HighlightBox type="key-point">
        <h3 className="text-xl font-bold mb-3">🔑 Key Announcement Highlights</h3>
        <ul className="space-y-2">
          <li>
            <strong>New Corporate Structure:</strong> U.S. operations will be managed by USDS LLC,
            a joint venture with majority American ownership
          </li>
          <li>
            <strong>Data Localization:</strong> All U.S. user data will be stored exclusively on
            American soil with no foreign access
          </li>
          <li>
            <strong>Independent Oversight:</strong> Third-party security board will monitor data
            practices and algorithm operations
          </li>
          <li>
            <strong>Source Code Access:</strong> U.S. government agencies will have limited audit
            rights to review security protocols
          </li>
          <li>
            <strong>No Chinese Government Access:</strong> Contractual guarantees preventing data
            sharing with Chinese authorities
          </li>
        </ul>
      </HighlightBox>

      <h2 className="text-3xl font-bold mt-12 mb-6">The Joint Venture Partners</h2>
      
      <p>
        According to the announcement, <strong>TikTok USDS LLC</strong> will be structured with the
        following ownership and partnership arrangements:
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-xl font-bold mb-2">Technology Partners</h3>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Oracle Corporation</strong> - 25% stake, cloud infrastructure</li>
            <li><strong>Microsoft</strong> - 15% stake, AI and content moderation</li>
            <li><strong>Cisco Systems</strong> - 10% stake, network security</li>
          </ul>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="text-xl font-bold mb-2">Security Partners</h3>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Palantir Technologies</strong> - Data monitoring systems</li>
            <li><strong>CrowdStrike</strong> - Threat detection and response</li>
            <li><strong>Mandiant</strong> - Cybersecurity auditing</li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg my-8">
        <h3 className="text-xl font-bold mb-3">Ownership Structure</h3>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span>U.S. Technology Partners</span>
            <span className="font-bold text-blue-600">50%</span>
          </div>
          <div className="w-full bg-gray-300 rounded-full h-3">
            <div className="bg-blue-600 h-3 rounded-full" style={{ width: "50%" }}></div>
          </div>

          <div className="flex justify-between items-center mt-4">
            <span>ByteDance (with transfer restrictions)</span>
            <span className="font-bold text-orange-600">35%</span>
          </div>
          <div className="w-full bg-gray-300 rounded-full h-3">
            <div className="bg-orange-600 h-3 rounded-full" style={{ width: "35%" }}></div>
          </div>

          <div className="flex justify-between items-center mt-4">
            <span>Independent Trust for TikTok Creators</span>
            <span className="font-bold text-green-600">15%</span>
          </div>
          <div className="w-full bg-gray-300 rounded-full h-3">
            <div className="bg-green-600 h-3 rounded-full" style={{ width: "15%" }}></div>
          </div>
        </div>
      </div>

      <HighlightBox type="quote">
        <p className="text-2xl italic">
          "This joint venture represents a new model for how global technology platforms can operate
          in an era of heightened security awareness. We're proving that you can have both innovation
          and security."
        </p>
        <p className="text-right mt-4 font-semibold">— Shou Zi Chew, TikTok CEO</p>
      </HighlightBox>

      <h2 className="text-3xl font-bold mt-12 mb-6">How It Will Work</h2>

      <p>
        Under the new structure, U.S. TikTok operations will function with several key safeguards:
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">1. Data Isolation and Storage</h3>
      <p>
        All U.S. user data—including videos, messages, biometric information, and usage patterns—will
        be stored exclusively in Oracle Cloud data centers located in Texas and Virginia. ByteDance
        employees and Chinese-based servers will have zero access to this data.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">2. Algorithm Transparency</h3>
      <p>
        A newly created <strong>U.S. Algorithm Oversight Board</strong>, staffed by independent
        computer scientists and approved by federal regulators, will have ongoing access to review
        TikTok's recommendation systems. The board can flag and block any algorithm changes that
        raise security or misinformation concerns.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">3. Content Moderation Autonomy</h3>
      <p>
        U.S.-based content moderation decisions will be made by American teams without input from
        ByteDance leadership in China. Moderation policies will comply with U.S. law and First
        Amendment principles rather than Chinese content restrictions.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">4. Independent Board of Directors</h3>
      <p>
        USDS LLC will be governed by a board with majority-American representation, including former
        national security officials, technology executives, and civil liberties advocates.
      </p>

      <Timeline
        title="Road to the Joint Venture"
        events={[
          {
            date: "August 2020",
            title: "Trump Administration Ban Threat",
            description: "President Trump orders ByteDance to sell TikTok or face U.S. ban",
          },
          {
            date: "November 2020",
            title: "Oracle-Walmart Deal Proposed",
            description: "Initial partnership proposal collapses amid legal challenges",
          },
          {
            date: "June 2021",
            title: "Biden Administration Review",
            description: "New administration initiates comprehensive security review",
          },
          {
            date: "March 2023",
            title: "Congressional Hearings",
            description: "CEO Shou Zi Chew testifies before Congress on security concerns",
          },
          {
            date: "December 2024",
            title: "Federal Ban Legislation",
            description: "Congress passes bill requiring divestiture by January 2026",
          },
          {
            date: "January 19, 2026",
            title: "Supreme Court Ruling",
            description: "Court upholds ban but allows extension for divestiture efforts",
          },
          {
            date: "January 23, 2026",
            title: "USDS Joint Venture Announced",
            description: "TikTok unveils joint venture as solution to maintain U.S. presence",
          },
        ]}
      />

      <h2 className="text-3xl font-bold mt-12 mb-6">Government and Political Reactions</h2>

      <p>
        The announcement has received mixed reactions from Washington policymakers:
      </p>

      <div className="space-y-6 my-8">
        <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg">
          <p className="font-bold text-green-800 mb-2">✓ SUPPORTIVE</p>
          <p className="italic">
            "This is exactly the kind of innovative solution we need. American companies will have
            real control, American workers will run operations, and American security standards will
            be enforced. I'm cautiously optimistic."
          </p>
          <p className="text-right mt-2 text-sm font-semibold">
            — Sen. Mark Warner (D-VA), Senate Intelligence Committee Chair
          </p>
        </div>

        <div className="border-l-4 border-yellow-500 bg-yellow-50 p-6 rounded-r-lg">
          <p className="font-bold text-yellow-800 mb-2">⚠ SKEPTICAL</p>
          <p className="italic">
            "The devil is in the details. We need to see the actual contracts, governance
            documents, and technical specifications before we can assess whether this truly
            addresses national security concerns or is just window dressing."
          </p>
          <p className="text-right mt-2 text-sm font-semibold">
            — Sen. Tom Cotton (R-AR), Senate Armed Services Committee
          </p>
        </div>

        <div className="border-l-4 border-red-500 bg-red-50 p-6 rounded-r-lg">
          <p className="font-bold text-red-800 mb-2">✗ OPPOSED</p>
          <p className="italic">
            "Any structure that allows ByteDance to retain even a minority stake is unacceptable.
            The only solution is complete divestiture from Chinese ownership. This is a Trojan horse."
          </p>
          <p className="text-right mt-2 text-sm font-semibold">
            — Rep. Mike Gallagher (R-WI), House China Committee Chair
          </p>
        </div>
      </div>

      <HighlightBox type="stat">
        <h3 className="text-4xl font-bold text-blue-600 mb-2">170 Million</h3>
        <p className="text-xl">
          U.S. TikTok users whose access to the platform depends on regulatory approval of the
          joint venture structure
        </p>
      </HighlightBox>

      <h2 className="text-3xl font-bold mt-12 mb-6">What This Means for Users and Creators</h2>

      <p>
        For the platform's 170 million U.S. users and millions of content creators who depend on
        TikTok for income, the announcement provides relief from the uncertainty of recent months:
      </p>

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl my-8">
        <h3 className="text-2xl font-bold mb-4">User Experience Changes</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-green-700 mb-2">✓ Staying the Same:</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• Core features and functionality</li>
              <li>• Creator monetization programs</li>
              <li>• Video creation tools</li>
              <li>• Following/follower relationships</li>
              <li>• Existing account data</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-blue-700 mb-2">⚡ New or Enhanced:</h4>
            <ul className="space-y-1 text-gray-700">
              <li>• Enhanced privacy controls</li>
              <li>• Transparency reports on algorithm</li>
              <li>• Data portability tools</li>
              <li>• U.S.-based customer support</li>
              <li>• Creator protection programs</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-12 mb-6">The Road Ahead</h2>

      <p>
        The joint venture announcement is just the beginning of what will be a complex
        implementation process:
      </p>

      <ol className="list-decimal pl-6 space-y-3 my-6">
        <li>
          <strong>Regulatory Review (February-March 2026):</strong> The Committee on Foreign
          Investment in the United States (CFIUS) will review and approve the joint venture
          structure
        </li>
        <li>
          <strong>Technical Migration (April-August 2026):</strong> User data will be migrated to
          U.S.-only infrastructure with independent verification
        </li>
        <li>
          <strong>Governance Transition (September 2026):</strong> New board of directors takes
          control, oversight mechanisms activated
        </li>
        <li>
          <strong>Ongoing Monitoring:</strong> Quarterly security audits and annual public
          transparency reports
        </li>
      </ol>

      <HighlightBox type="key-point">
        <h3 className="text-xl font-bold mb-3">📅 Key Dates to Watch</h3>
        <ul className="space-y-2">
          <li><strong>February 15, 2026:</strong> CFIUS review decision deadline</li>
          <li><strong>March 30, 2026:</strong> Congressional oversight hearing scheduled</li>
          <li><strong>May 1, 2026:</strong> Data migration must begin</li>
          <li><strong>September 1, 2026:</strong> Full transition deadline</li>
        </ul>
      </HighlightBox>

      <h2 className="text-3xl font-bold mt-12 mb-6">Industry and Expert Analysis</h2>

      <p>
        Technology policy experts and industry observers are analyzing the implications of this
        unprecedented corporate structure:
      </p>

      <div className="space-y-4 my-8">
        <div className="bg-white border-l-4 border-purple-500 p-6 shadow-sm">
          <p className="italic mb-3">
            "If successful, this could become a template for how other Chinese tech companies
            operate in Western markets. We could see similar structures for platforms like Shein,
            Temu, or even future entrants."
          </p>
          <p className="font-semibold">
            — Dr. James Lewis, Center for Strategic and International Studies
          </p>
        </div>

        <div className="bg-white border-l-4 border-blue-500 p-6 shadow-sm">
          <p className="italic mb-3">
            "The real test will be enforcement. Paper promises are easy. We need to see robust
            technical controls, real-time monitoring, and severe penalties for violations."
          </p>
          <p className="font-semibold">
            — Alex Stamos, Former Facebook Chief Security Officer
          </p>
        </div>

        <div className="bg-white border-l-4 border-green-500 p-6 shadow-sm">
          <p className="italic mb-3">
            "From a business perspective, this is ingenious. TikTok gets to keep its massive U.S.
            user base, American tech companies get equity in one of the world's most valuable
            platforms, and politicians can claim a victory. Everyone wins—if it actually works."
          </p>
          <p className="font-semibold">
            — Ben Thompson, Stratechery
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-8 rounded-xl my-12">
        <h3 className="text-3xl font-bold mb-4">🔴 BREAKING: Live Updates</h3>
        <p className="text-lg mb-4">
          This is a developing story. ObjectWire will continue to update this article as more
          information becomes available about the TikTok USDS Joint Venture implementation.
        </p>
        <p className="text-sm opacity-90">
          Last updated: January 23, 2026, 4:45 PM EST
        </p>
      </div>

      <TagsSection
        tags={[
          "TikTok",
          "USDS Joint Venture",
          "National Security",
          "ByteDance",
          "Social Media Regulation",
          "Tech Policy",
          "Data Privacy",
          "Oracle",
          "Microsoft",
        ]}
      />

      <RelatedStories
        stories={[
          {
            href: "/tiktok",
            image: "/images/tiktok-history.jpg",
            category: "REFERENCE",
            categoryColor: "blue",
            title: "TikTok: Complete Platform History and Overview",
            excerpt: "Comprehensive encyclopedia entry covering TikTok's rise, features, controversies, and cultural impact.",
            readTime: "12 min read",
          },
          {
            href: "/congress-tiktok-ban-legislation",
            image: "/images/congress-tiktok.jpg",
            category: "POLICY",
            categoryColor: "purple",
            title: "How Congress Forced TikTok to the Negotiating Table",
            excerpt: "Inside the legislative battle that led to the divestiture requirement.",
            readTime: "8 min read",
          },
          {
            href: "/creator-economy-tiktok",
            image: "/images/tiktok-creators.jpg",
            category: "BUSINESS",
            categoryColor: "green",
            title: "What TikTok's Future Means for the Creator Economy",
            excerpt: "Analyzing the impact of ownership changes on influencers and content creators.",
            readTime: "6 min read",
          },
        ]}
      />
    </NewsArticle>
  );
}
