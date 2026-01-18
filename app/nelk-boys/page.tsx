import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "NELK Boys - YouTube Entertainment Group | ObjectWire",
  description: "Complete coverage of the NELK Boys, the controversial YouTube entertainment group. Latest news, member profiles, career highlights, and current ventures including Full Send.",
  keywords: ["NELK Boys", "Full Send", "Kyle Forgeard", "Jesse Sebastiani", "Steve Deleonardis", "SteveWillDoIt", "YouTube pranks", "Happy Dad"],
};

export default function NelkBoysPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 text-white">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Main Info */}
            <div className="md:col-span-2">
              <p className="text-blue-200 text-sm font-mono tracking-wider mb-4">YOUTUBE ENTERTAINMENT • FULL SEND</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
                NELK Boys
              </h1>
              <p className="text-xl text-gray-100 mb-6 leading-relaxed">
                The controversial YouTube entertainment group known for their prank videos, party culture content, 
                and building a massive brand empire including <strong className="text-white">Full Send</strong> merchandise and <strong className="text-white">Happy Dad Hard Seltzer</strong>.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">7.7M+</p>
                  <p className="text-sm text-gray-100">YouTube Subscribers</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">1B+</p>
                  <p className="text-sm text-gray-100">Total Views</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">2010</p>
                  <p className="text-sm text-gray-100">Founded</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">500+</p>
                  <p className="text-sm text-gray-100">Videos Posted</p>
                </div>
              </div>
            </div>

            {/* Quick Facts Card */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
              <h3 className="font-bold text-lg mb-4 text-white">Group Details</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-gray-300">Founded</dt>
                  <dd className="font-semibold text-white">2010</dd>
                </div>
                <div>
                  <dt className="text-gray-300">Headquarters</dt>
                  <dd className="font-semibold text-white">Los Angeles, CA</dd>
                </div>
                <div>
                  <dt className="text-gray-300">Content Type</dt>
                  <dd className="font-semibold text-white">Pranks, Vlogs, Lifestyle</dd>
                </div>
                <div>
                  <dt className="text-gray-300">Brand</dt>
                  <dd className="font-semibold text-white">Full Send Entertainment</dd>
                </div>
                <div>
                  <dt className="text-gray-300">Business Ventures</dt>
                  <dd className="font-semibold text-white">Happy Dad, Full Send Merch</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Overview Section */}
            <section className="bg-white rounded-xl border border-gray-200 p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The NELK Boys Story
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  The NELK Boys began as a Canadian YouTube channel in 2010, founded by Kyle Forgeard and Jesse Sebastiani. 
                  What started as college-style prank videos evolved into one of the most successful entertainment brands on 
                  YouTube, known for pushing boundaries and creating viral content that resonates with their massive Gen Z 
                  and millennial audience.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  The group gained mainstream attention through their "Full Send" mentality and controversial prank videos, 
                  including their famous "Coke Prank on Cops" series and college campus content. Despite facing multiple 
                  YouTube strikes and controversies, NELK Boys successfully pivoted from pure prank content to building 
                  a multi-million dollar lifestyle brand.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Today, NELK operates as Full Send Entertainment, with business ventures including Happy Dad Hard Seltzer, 
                  Full Send merchandise, the Full Send podcast, and various other entrepreneurial endeavors. The brand has 
                  become synonymous with party culture and entrepreneurial success in the creator economy.
                </p>
              </div>
            </section>

            {/* Current Members Section */}
            <section className="bg-white rounded-xl border border-gray-200 p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Current Group Members
              </h2>

              <div className="space-y-6">
                {/* Kyle Forgeard */}
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Kyle Forgeard
                  </h3>
                  <p className="text-purple-600 font-semibold mb-3">Co-Founder & CEO</p>
                  <p className="text-gray-700 leading-relaxed">
                    Kyle is the Canadian-born co-founder and primary face of NELK. As the group's leader and CEO of 
                    Full Send Entertainment, Kyle has transformed the brand from YouTube pranks into a business empire. 
                    He's known for his entrepreneurial mindset and ability to create viral content while building 
                    sustainable business ventures.
                  </p>
                </div>

                {/* Steve Deleonardis */}
                <div className="border-l-4 border-purple-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Steve Deleonardis (SteveWillDoIt)
                  </h3>
                  <p className="text-purple-600 font-semibold mb-3">Content Creator</p>
                  <p className="text-gray-700 leading-relaxed">
                    Steve joined NELK in 2019 and quickly became a fan favorite. Known for his extreme challenge videos 
                    and generous giveaways, Steve brought a unique energy to the group. Despite separating from the main 
                    channel to focus on his own content in recent years, he remains associated with the Full Send brand 
                    and continues to collaborate with the team.
                  </p>
                </div>

                {/* Salim The Dream */}
                <div className="border-l-4 border-pink-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Salim Sirur (Salim The Dream)
                  </h3>
                  <p className="text-purple-600 font-semibold mb-3">Content Creator & Manager</p>
                  <p className="text-gray-700 leading-relaxed">
                    Salim joined NELK as a cameraman and quickly became an integral part of the team. Known for his 
                    loyalty and behind-the-scenes work, Salim has been instrumental in the group's operations and content 
                    creation. He's also involved in managing various aspects of the Full Send business ventures.
                  </p>
                </div>

                {/* Gabriel Poncio */}
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Gabriel "Gabe" Poncio (Gambles)
                  </h3>
                  <p className="text-purple-600 font-semibold mb-3">Content Creator</p>
                  <p className="text-gray-700 leading-relaxed">
                    Gabe joined the NELK crew and brought fresh energy to the group's content. Known for his enthusiasm 
                    and willingness to participate in various challenges and pranks, he's become a regular face in NELK 
                    videos and Full Send content.
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2">Former Members</h4>
                <p className="text-gray-700 text-sm">
                  <strong>Jesse Sebastiani:</strong> Co-founder who left the group in 2020 to pursue other ventures.<br/>
                  <strong>Lucas Gasparini:</strong> Early member who departed to focus on personal projects.<br/>
                  <strong>905 Shooter:</strong> Former member who left the group in the mid-2010s.
                </p>
              </div>
            </section>

            {/* Career Highlights Section */}
            <section className="bg-white rounded-xl border border-gray-200 p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Career Highlights & Milestones
              </h2>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold">
                      2010
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">Channel Founded</h3>
                    <p className="text-gray-600">Kyle Forgeard and Jesse Sebastiani start the NELK YouTube channel in Canada.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-bold">
                      2015
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">Viral Breakthrough</h3>
                    <p className="text-gray-600">"Coke Prank on Cops" videos go viral, establishing NELK as a major prank channel.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="inline-block bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-bold">
                      2019
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">SteveWillDoIt Joins</h3>
                    <p className="text-gray-600">Steve Deleonardis joins the crew, bringing new energy and expanding the audience.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold">
                      2020
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">Full Send Brand Launch</h3>
                    <p className="text-gray-600">Full Send merchandise becomes a multi-million dollar business.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-bold">
                      2021
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">Happy Dad Launch</h3>
                    <p className="text-gray-600">NELK launches Happy Dad Hard Seltzer, entering the beverage industry.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="inline-block bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-bold">
                      2022
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">Full Send Podcast Success</h3>
                    <p className="text-gray-600">The Full Send Podcast becomes one of the top interview shows, featuring celebrities and athletes.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-24 text-right">
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold">
                      2023-2025
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">Business Expansion</h3>
                    <p className="text-gray-600">Full Send Entertainment continues to grow with new ventures, partnerships, and content initiatives.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* What They Do Now Section */}
            <section className="bg-white rounded-xl border border-gray-200 p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What They're Doing Now (2025-2026)
              </h2>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Full Send Entertainment</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The NELK Boys have evolved into Full Send Entertainment, a comprehensive media and lifestyle brand. 
                    While they still create YouTube content, the focus has shifted to building sustainable businesses and 
                    creating multiple revenue streams beyond ad revenue.
                  </p>
                </div>

                <div className="border-l-4 border-purple-600 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Happy Dad Hard Seltzer</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Their alcoholic beverage brand has become one of their biggest successes, competing with major brands 
                    like White Claw and Truly. Happy Dad is now available in stores across North America and continues to 
                    expand distribution.
                  </p>
                </div>

                <div className="border-l-4 border-pink-600 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Full Send Podcast</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The podcast has become a major platform for interviews with celebrities, athletes, and influencers. 
                    Episodes regularly feature A-list guests and generate millions of views across platforms.
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Content Creation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    While prank content has decreased, NELK continues to create vlogs, challenges, and lifestyle content. 
                    They've adapted their content strategy to focus on brand-building and entrepreneurship content while 
                    maintaining their core audience.
                  </p>
                </div>

                <div className="border-l-4 border-purple-600 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Merchandise & Events</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Full Send merchandise drops continue to generate significant revenue. The brand has also expanded into 
                    live events, meet-and-greets, and experiences that connect directly with their fanbase.
                  </p>
                </div>
              </div>
            </section>

            {/* Controversies Section */}
            <section className="bg-white rounded-xl border border-gray-200 p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Controversies & Challenges
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  The NELK Boys have faced numerous controversies throughout their career, including multiple YouTube 
                  strikes for violating community guidelines, criticism for promoting party culture during the COVID-19 
                  pandemic, and backlash over various pranks that some viewed as irresponsible or harmful.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Their content has been demonetized multiple times, leading them to diversify their revenue streams 
                  beyond YouTube ad revenue. This actually pushed them to become more entrepreneurial and build the 
                  Full Send brand empire.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Despite controversies, the group has maintained a loyal fanbase and successfully transitioned from 
                  controversial creators to legitimate business owners, proving that creator-led brands can achieve 
                  long-term success with proper business strategy.
                </p>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-200 p-6">
              <h3 className="font-bold text-lg mb-4 text-gray-900">Channel Statistics</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Subscribers</span>
                  <span className="font-bold text-gray-900">7.7M+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Views</span>
                  <span className="font-bold text-gray-900">1B+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Videos</span>
                  <span className="font-bold text-gray-900">500+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Years Active</span>
                  <span className="font-bold text-gray-900">15+</span>
                </div>
              </div>
            </div>

            {/* Business Ventures */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-lg mb-4 text-gray-900">Business Ventures</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Happy Dad</p>
                    <p className="text-sm text-gray-600">Hard Seltzer Brand</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Full Send Merch</p>
                    <p className="text-sm text-gray-600">Apparel & Accessories</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-pink-600 rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Full Send Podcast</p>
                    <p className="text-sm text-gray-600">Interview Show</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Send Club</p>
                    <p className="text-sm text-gray-600">Membership Platform</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Content */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-lg mb-4 text-gray-900">Related Topics</h3>
              <div className="space-y-2">
                <Link 
                  href="/beastgames" 
                  className="block p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
                >
                  <p className="font-semibold text-gray-900 text-sm">Beast Games</p>
                  <p className="text-xs text-gray-600">MrBeast's Reality Show</p>
                </Link>
                <Link 
                  href="/chicos-toxicos" 
                  className="block p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
                >
                  <p className="font-semibold text-gray-900 text-sm">Chicos Tóxicos</p>
                  <p className="text-xs text-gray-600">Latin YouTuber Group</p>
                </Link>
              </div>
            </div>

            {/* Newsletter CTA */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">Stay Updated</h3>
              <p className="text-sm text-blue-100 mb-4">
                Get the latest news about NELK Boys and creator economy trends.
              </p>
              <Link
                href="/contact"
                className="block w-full bg-white text-blue-600 text-center py-2 px-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Subscribe Now
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 py-12 max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              More Creator News & Analysis
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Explore more stories about digital creators, influencer business ventures, and the evolution of content creation.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/news"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Latest News
              </Link>
              <Link
                href="/blog"
                className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors border border-gray-300"
              >
                Read More Stories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
