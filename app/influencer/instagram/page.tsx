import type { Metadata } from "next";
import Link from "next/link";
import { NewsArticleSchema } from "@/components/NewsArticleSchema";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Instagram Wiki 2026: History, Meta Acquisition & 2.4B Users",
  description: "Complete profile of Instagram - founded 2010, acquired by Facebook for $1B in 2012. Now serving 2.4 billion monthly users as Meta's photo-sharing platform.",
  keywords: [
    "Instagram",
    "photo sharing",
    "Meta",
    "Facebook",
    "social media",
    "Kevin Systrom",
    "Mike Krieger",
    "Instagram history",
    "Reels",
  ],
  openGraph: {
    title: "Instagram: Complete Company Profile & History | ObjectWire",
    description: "From startup to 2.4B users - Instagram's evolution from 2010 to 2026.",
    type: "article",
    url: "https://www.objectwire.org/instagram",
    images: [
      {
        url: "https://www.objectwire.org/instagram-og.jpg",
        width: 1200,
        height: 630,
        alt: "Instagram Company Profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Instagram Wiki 2026: History, Meta Acquisition & 2.4B Users",
    description: "Complete profile of the world's leading photo-sharing platform.",
  },
};

export default function InstagramPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900">
      <NewsArticleSchema
        title="Instagram: Complete Company Profile & History"
        description="Comprehensive profile of Instagram, the photo and video sharing social media platform owned by Meta. Founded in 2010, serving 2.4 billion monthly active users."
        publishedTime="2024-03-20T00:00:00Z"
        modifiedTime="2026-02-07T00:00:00Z"
        author="ObjectWire Editorial Team"
        imageUrl="https://www.objectwire.org/instagram-company.jpg"
        articleUrl="https://www.objectwire.org/instagram"
        section="Technology"
        keywords={["Instagram", "Meta", "Facebook", "social media", "photo sharing", "Reels", "Stories"]}
      />

      <Breadcrumb
        items={[
          { name: "Home", item: "/" },
          { name: "Instagram", item: "/instagram" },
        ]}
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <header className="mb-12 text-center">
          <div className="inline-block bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            PHOTO & VIDEO PLATFORM
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Instagram
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The World's Premier Photo & Video Sharing Platform — Capturing and Sharing Visual Stories
          </p>
        </header>

        {/* Quick Facts Box */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-12 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-3xl">📸</span>
            Quick Facts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-200">
            <div>
              <p className="text-gray-400 text-sm mb-1">Founded</p>
              <p className="text-xl font-semibold">October 6, 2010</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Founders</p>
              <p className="text-xl font-semibold">Kevin Systrom, Mike Krieger</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Headquarters</p>
              <p className="text-xl font-semibold">Menlo Park, California</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Head of Instagram</p>
              <p className="text-xl font-semibold">Adam Mosseri (Since 2018)</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Parent Company</p>
              <p className="text-xl font-semibold">Meta Platforms Inc.</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Acquisition Price</p>
              <p className="text-xl font-semibold">$1 Billion (2012)</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Monthly Active Users</p>
              <p className="text-xl font-semibold">2.4 Billion (2026)</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Daily Active Users</p>
              <p className="text-xl font-semibold">1.4 Billion (2026)</p>
            </div>
          </div>
        </div>

        {/* Company Overview */}
        <section className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6">Company Overview</h2>
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-gray-300 leading-relaxed mb-4">
              <strong className="text-white">Instagram</strong> is a photo and video sharing social networking 
              service owned by Meta Platforms. Originally launched on October 6, 2010, by Kevin Systrom and 
              Mike Krieger, Instagram has evolved from a simple photo-sharing app with filters into a 
              comprehensive visual social media platform.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The app allows users to upload media that can be edited with filters, organized by hashtags, and 
              associated with locations via geographical tagging. Posts can be shared publicly or with approved 
              followers. Users can browse content through feeds, stories, reels, and can interact through 
              likes, comments, and direct messages.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Facebook (now Meta) acquired Instagram for approximately $1 billion in cash and stock in April 2012, 
              when the app had just 30 million users. Under Meta's ownership, Instagram has grown to 2.4 billion 
              monthly active users, making it one of the most popular social media platforms globally and a 
              crucial part of Meta's business strategy.
            </p>
          </div>
        </section>

        {/* Founding History */}
        <section className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6">Founding & Early History</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-pink-600 pl-6">
              <h3 className="text-xl font-bold text-white mb-3">2010: Burbn to Instagram</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Kevin Systrom initially developed a location-based check-in app called Burbn while working 
                at Nextstop. After securing $500,000 in seed funding, he brought on Mike Krieger to help 
                rebuild the app. They decided to focus solely on photo-sharing with filters, scrapping the 
                check-in features.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The app was renamed Instagram (a portmanteau of "instant camera" and "telegram") and launched 
                exclusively on iOS on October 6, 2010. Within two hours, the app gained 25,000 users. Within 
                a week, it had 100,000 users.
              </p>
            </div>

            <div className="border-l-4 border-pink-600 pl-6">
              <h3 className="text-xl font-bold text-white mb-3">2010-2012: Explosive Growth</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                By December 2010, Instagram had 1 million users. In September 2011, version 2.0 launched with 
                live filters, instant tilt-shift, high-resolution photos, and optional borders. The app reached 
                10 million users by September 2011.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The Android version launched in April 2012, gaining 1 million downloads in less than one day. 
                By the time of Facebook's acquisition announcement on April 9, 2012, Instagram had 30 million 
                users and was adding 5 million new users per week.
              </p>
            </div>

            <div className="border-l-4 border-pink-600 pl-6">
              <h3 className="text-xl font-bold text-white mb-3">2012: Facebook Acquisition</h3>
              <p className="text-gray-300 leading-relaxed">
                On April 9, 2012, Facebook announced it would acquire Instagram for approximately $1 billion 
                in cash and stock. The deal was finalized on September 6, 2012. At the time, Instagram had 
                just 13 employees. The acquisition price was considered astronomical for an app that generated 
                no revenue, but has since been viewed as one of Facebook's smartest deals.
              </p>
            </div>
          </div>
        </section>

        {/* Major Milestones */}
        <section className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6">Major Milestones</h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="text-pink-600 font-bold text-lg min-w-[80px]">2012</div>
              <p className="text-gray-300">Facebook acquires Instagram for $1 billion; 100 million users</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-pink-600 font-bold text-lg min-w-[80px]">2013</div>
              <p className="text-gray-300">Introduces video sharing (15 seconds); Direct messaging launches</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-pink-600 font-bold text-lg min-w-[80px]">2016</div>
              <p className="text-gray-300">Launches Stories feature (inspired by Snapchat); 500 million users</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-pink-600 font-bold text-lg min-w-[80px]">2018</div>
              <p className="text-gray-300">IGTV launches for long-form video; Founders Systrom and Krieger resign</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-pink-600 font-bold text-lg min-w-[80px]">2019</div>
              <p className="text-gray-300">Tests hiding like counts in select countries; 1 billion users</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-pink-600 font-bold text-lg min-w-[80px]">2020</div>
              <p className="text-gray-300">Launches Instagram Reels to compete with TikTok</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-pink-600 font-bold text-lg min-w-[80px]">2021</div>
              <p className="text-gray-300">Adds shopping features and creator monetization tools</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-pink-600 font-bold text-lg min-w-[80px]">2022</div>
              <p className="text-gray-300">Major redesign emphasizing Reels and video content; 2 billion users</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-pink-600 font-bold text-lg min-w-[80px]">2024</div>
              <p className="text-gray-300">Introduces AI-powered features and enhanced creator tools</p>
            </div>
            <div className="flex gap-4 items-start">
              <div className="text-pink-600 font-bold text-lg min-w-[80px]">2026</div>
              <p className="text-gray-300">Reaches 2.4 billion monthly active users; Reels surpasses 200 billion daily plays</p>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6">Leadership History</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-pink-600 pl-6">
              <h3 className="text-xl font-bold text-white mb-2">Kevin Systrom (2010-2018)</h3>
              <p className="text-gray-400 mb-3">Co-founder & CEO</p>
              <p className="text-gray-300 leading-relaxed">
                Former Google and Odeo employee who created Instagram's original vision. Led the company 
                through explosive growth and the Facebook acquisition. Resigned in September 2018 citing 
                disagreements with Facebook leadership over Instagram's direction.
              </p>
            </div>

            <div className="border-l-4 border-pink-600 pl-6">
              <h3 className="text-xl font-bold text-white mb-2">Mike Krieger (2010-2018)</h3>
              <p className="text-gray-400 mb-3">Co-founder & CTO</p>
              <p className="text-gray-300 leading-relaxed">
                Stanford graduate who joined as co-founder and technical lead. Responsible for Instagram's 
                technical infrastructure and product development. Resigned alongside Systrom in 2018.
              </p>
            </div>

            <div className="border-l-4 border-pink-600 pl-6">
              <h3 className="text-xl font-bold text-white mb-2">Adam Mosseri (2018-Present)</h3>
              <p className="text-gray-400 mb-3">Head of Instagram</p>
              <p className="text-gray-300 leading-relaxed">
                Former Facebook executive who took over as Head of Instagram after the founders' departure. 
                Previously led Facebook's News Feed and was VP of Product. Has overseen the shift toward video 
                content, Reels expansion, and increased integration with Meta's broader ecosystem.
              </p>
            </div>
          </div>
        </section>

        {/* Platform Statistics */}
        <section className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6">Platform Statistics (2026)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-pink-600/20 rounded-lg p-6 border border-pink-600/30">
              <div className="text-4xl font-bold text-pink-400 mb-2">2.4B</div>
              <p className="text-gray-300">Monthly Active Users</p>
            </div>
            <div className="bg-pink-600/20 rounded-lg p-6 border border-pink-600/30">
              <div className="text-4xl font-bold text-pink-400 mb-2">1.4B</div>
              <p className="text-gray-300">Daily Active Users</p>
            </div>
            <div className="bg-pink-600/20 rounded-lg p-6 border border-pink-600/30">
              <div className="text-4xl font-bold text-pink-400 mb-2">200B+</div>
              <p className="text-gray-300">Daily Reels Plays</p>
            </div>
            <div className="bg-pink-600/20 rounded-lg p-6 border border-pink-600/30">
              <div className="text-4xl font-bold text-pink-400 mb-2">500M+</div>
              <p className="text-gray-300">Daily Stories Users</p>
            </div>
            <div className="bg-pink-600/20 rounded-lg p-6 border border-pink-600/30">
              <div className="text-4xl font-bold text-pink-400 mb-2">95M+</div>
              <p className="text-gray-300">Photos & Videos Shared Daily</p>
            </div>
            <div className="bg-pink-600/20 rounded-lg p-6 border border-pink-600/30">
              <div className="text-4xl font-bold text-pink-400 mb-2">$50B+</div>
              <p className="text-gray-300">Estimated Annual Revenue (2025)</p>
            </div>
          </div>
        </section>

        {/* Features & Products */}
        <section className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6">Key Features & Products</h2>
          <div className="space-y-4">
            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Instagram Feed</h3>
              <p className="text-gray-300">
                The original photo and video sharing feature with filters, captions, hashtags, and location tags. 
                Users can post square, portrait, or landscape photos and videos up to 60 seconds.
              </p>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Instagram Stories</h3>
              <p className="text-gray-300">
                Ephemeral 24-hour posts launched in 2016. Includes photos, videos, polls, questions, countdowns, 
                and AR filters. Over 500 million users engage with Stories daily.
              </p>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Instagram Reels</h3>
              <p className="text-gray-300">
                Short-form video feature launched in 2020 to compete with TikTok. Supports videos up to 90 seconds 
                with music, effects, and editing tools. Now the platform's fastest-growing feature.
              </p>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Instagram Shopping</h3>
              <p className="text-gray-300">
                E-commerce features allowing businesses to tag products, create shop pages, and enable in-app 
                purchases. Brands can create catalogs and users can discover and buy without leaving the app.
              </p>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Instagram Direct</h3>
              <p className="text-gray-300">
                Private messaging feature for one-on-one and group conversations. Supports photos, videos, 
                voice messages, video calls, and disappearing messages.
              </p>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-3">Instagram Live</h3>
              <p className="text-gray-300">
                Real-time video broadcasting feature launched in 2016. Allows users to stream live to followers, 
                with options for co-hosting, comments, and audience interaction.
              </p>
            </div>
          </div>
        </section>

        {/* Controversies */}
        <section className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6">Controversies & Challenges</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Mental Health Impact</h3>
              <p className="text-gray-300 leading-relaxed">
                Internal Meta research leaked in 2021 revealed Instagram negatively impacts teen mental health, 
                particularly among girls. Studies link the platform to increased anxiety, depression, and body 
                image issues. The company has since introduced features to limit comparisons and hide like counts.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">Algorithm & Content Prioritization</h3>
              <p className="text-gray-300 leading-relaxed">
                Users and creators have criticized Instagram's algorithm changes, particularly the shift away 
                from chronological feeds and toward recommended content. Many feel the platform prioritizes 
                engagement over user connections, showing more content from non-followed accounts.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">Feature Copying</h3>
              <p className="text-gray-300 leading-relaxed">
                Instagram has been accused of copying features from competitors, including Stories (Snapchat), 
                Reels (TikTok), and various UI elements from other platforms. While successful for Instagram, 
                critics argue it stifles innovation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">Privacy & Data Collection</h3>
              <p className="text-gray-300 leading-relaxed">
                As part of Meta, Instagram has faced scrutiny over data collection practices, targeted advertising, 
                and user privacy. The platform has been subject to GDPR violations in Europe and criticism over 
                data sharing with Facebook.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-3">Content Moderation</h3>
              <p className="text-gray-300 leading-relaxed">
                Instagram struggles with moderating harmful content while avoiding over-censorship. Issues include 
                removing legitimate posts (especially related to women's bodies and activism) while missing 
                harmful content like self-harm promotion and misinformation.
              </p>
            </div>
          </div>
        </section>

        {/* Cultural Impact */}
        <section className="bg-white/5 backdrop-blur-sm rounded-xl p-8 mb-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6">Cultural Impact</h2>
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-gray-300 leading-relaxed mb-4">
              Instagram has fundamentally changed how people share experiences, consume media, and present themselves 
              online. The platform popularized the "Instagram aesthetic" – curated, filtered, and perfectly composed 
              images that present idealized versions of life. Terms like "Instagram-worthy," "Instagrammable," and 
              "doing it for the 'gram" have entered common vocabulary.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The platform created the "influencer" industry, with top creators earning millions through sponsored 
              posts, brand partnerships, and product launches. Instagram influencers have disrupted traditional 
              advertising, with brands spending billions on influencer marketing campaigns.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Instagram has also impacted industries from fashion and food to travel and fitness. Restaurants design 
              dishes to be photogenic, travel destinations promote "Instagram spots," and entire businesses exist to 
              serve the platform's visual culture. The app has changed how we document life, prioritizing shareable 
              moments and visual storytelling.
            </p>
          </div>
        </section>

        {/* Related Coverage */}
        <section className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6">Related Coverage</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link 
              href="/meta" 
              className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10"
            >
              <h3 className="text-lg font-semibold text-white mb-2">Meta Platforms</h3>
              <p className="text-gray-400 text-sm">Instagram's parent company (formerly Facebook)</p>
            </Link>
            <Link 
              href="/tiktok" 
              className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10"
            >
              <h3 className="text-lg font-semibold text-white mb-2">TikTok</h3>
              <p className="text-gray-400 text-sm">Major competitor in short-form video</p>
            </Link>
            <Link 
              href="/youtube" 
              className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10"
            >
              <h3 className="text-lg font-semibold text-white mb-2">YouTube</h3>
              <p className="text-gray-400 text-sm">Competitor with YouTube Shorts</p>
            </Link>
            <Link 
              href="/snapchat" 
              className="block p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors border border-white/10"
            >
              <h3 className="text-lg font-semibold text-white mb-2">Snapchat</h3>
              <p className="text-gray-400 text-sm">Original Stories feature creator</p>
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
