import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Sidemen - UK's Biggest YouTube Group | ObjectWire",
  description: "Complete coverage of The Sidemen, the UK's biggest YouTube entertainment group featuring KSI, Miniminter, Zerkaa, TBJZL, Behzinga, Vikkstar123, and W2S. Latest news, videos, and member profiles.",
  keywords: ["Sidemen", "KSI", "Miniminter", "Zerkaa", "TBJZL", "Behzinga", "Vikkstar123", "W2S", "UK YouTubers", "Sidemen Charity Match"],
};

export default function SidemenPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-600 via-black to-yellow-600 text-white">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Main Info */}
            <div className="md:col-span-2">
              <p className="text-yellow-200 text-sm font-mono tracking-wider mb-4">UK'S BIGGEST YOUTUBE GROUP</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
                The Sidemen
              </h1>
              <p className="text-xl text-gray-100 mb-6 leading-relaxed">
                The <strong className="text-white">most successful British YouTube collective</strong>, featuring seven of the UK's 
                biggest content creators: KSI, Miniminter, Zerkaa, TBJZL, Behzinga, Vikkstar123, and W2S. Known for epic challenges, 
                charity football matches, and Sidemen Sundays.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">140M+</p>
                  <p className="text-sm text-gray-100">Combined Subscribers</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">20M+</p>
                  <p className="text-sm text-gray-100">Main Channel Subs</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">2013</p>
                  <p className="text-sm text-gray-100">Founded</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">7</p>
                  <p className="text-sm text-gray-100">Members</p>
                </div>
              </div>
            </div>

            {/* Quick Facts Card */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
              <h3 className="font-bold text-lg mb-4 text-white">Group Details</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-gray-300">Founded</dt>
                  <dd className="font-semibold text-white">October 19, 2013</dd>
                </div>
                <div>
                  <dt className="text-gray-300">Location</dt>
                  <dd className="font-semibold text-white">London, United Kingdom</dd>
                </div>
                <div>
                  <dt className="text-gray-300">Content Type</dt>
                  <dd className="font-semibold text-white">Challenges, Gaming, Football</dd>
                </div>
                <div>
                  <dt className="text-gray-300">Famous For</dt>
                  <dd className="font-semibold text-white">Sidemen Sundays, Charity Match</dd>
                </div>
                <div>
                  <dt className="text-gray-300">Business</dt>
                  <dd className="font-semibold text-white">Sides, XIX Vodka, Restaurant</dd>
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
                The Sidemen Story
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Sidemen are a British YouTube group consisting of seven members: <strong>KSI (JJ Olatunji)</strong>, 
                  <strong>Miniminter (Simon Minter)</strong>, <strong>Zerkaa (Josh Bradley)</strong>, <strong>TBJZL (Tobi Brown)</strong>, 
                  <strong>Behzinga (Ethan Payne)</strong>, <strong>Vikkstar123 (Vikram Barn)</strong>, and <strong>W2S (Harry Lewis)</strong>. 
                  Formed in October 2013, they have become one of the most successful YouTube collectives in history.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  What started as a group of friends playing FIFA together has evolved into a multimedia empire. The Sidemen 
                  are known for their weekly "Sidemen Sunday" videos, which feature elaborate challenges, competitions, and 
                  comedy sketches that regularly attract millions of views. Their content ranges from $10,000 vs $100 holiday 
                  comparisons to extreme hide and seek challenges in massive locations.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Beyond YouTube, the Sidemen have launched successful business ventures including Sides (a restaurant chain), 
                  XIX Vodka, and their clothing brand. Their annual Charity Football Match has raised millions of pounds for 
                  various causes, cementing their status not just as entertainers but as philanthropists making a real difference.
                </p>
              </div>
            </section>

            {/* Members Section */}
            <section className="bg-white rounded-xl border border-gray-200 p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Seven Members
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {/* KSI */}
                <Link href="/sidemen/ksi" className="group block border-2 border-red-200 rounded-lg p-6 hover:border-red-500 hover:shadow-lg transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                      KSI
                    </h3>
                    <span className="text-2xl">👑</span>
                  </div>
                  <p className="text-red-600 font-semibold mb-2">JJ Olatunji</p>
                  <p className="text-gray-600 text-sm mb-3">24M+ subscribers</p>
                  <p className="text-gray-700 text-sm">
                    Boxer, musician, and entrepreneur. The most followed Sidemen member with a global brand.
                  </p>
                </Link>

                {/* Miniminter */}
                <Link href="/sidemen/miniminter" className="group block border-2 border-blue-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-lg transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      Miniminter
                    </h3>
                    <span className="text-2xl">⚽</span>
                  </div>
                  <p className="text-blue-600 font-semibold mb-2">Simon Minter</p>
                  <p className="text-gray-600 text-sm mb-3">10M+ subscribers</p>
                  <p className="text-gray-700 text-sm">
                    FIFA expert and content creator known for his consistency and chemistry with the group.
                  </p>
                </Link>

                {/* Zerkaa */}
                <Link href="/sidemen/zerkaa" className="group block border-2 border-purple-200 rounded-lg p-6 hover:border-purple-500 hover:shadow-lg transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                      Zerkaa
                    </h3>
                    <span className="text-2xl">🎮</span>
                  </div>
                  <p className="text-purple-600 font-semibold mb-2">Josh Bradley</p>
                  <p className="text-gray-600 text-sm mb-3">4.7M+ subscribers</p>
                  <p className="text-gray-700 text-sm">
                    The "dad" of the group, known for GTA RP and being the voice of reason.
                  </p>
                </Link>

                {/* TBJZL */}
                <Link href="/sidemen/tbjzl" className="group block border-2 border-green-200 rounded-lg p-6 hover:border-green-500 hover:shadow-lg transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                      TBJZL
                    </h3>
                    <span className="text-2xl">🎯</span>
                  </div>
                  <p className="text-green-600 font-semibold mb-2">Tobi Brown</p>
                  <p className="text-gray-600 text-sm mb-3">5M+ subscribers</p>
                  <p className="text-gray-700 text-sm">
                    Positive energy and athletic prowess. Known for his infectious laugh and competitive spirit.
                  </p>
                </Link>

                {/* Behzinga */}
                <Link href="/sidemen/behzinga" className="group block border-2 border-orange-200 rounded-lg p-6 hover:border-orange-500 hover:shadow-lg transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                      Behzinga
                    </h3>
                    <span className="text-2xl">💪</span>
                  </div>
                  <p className="text-orange-600 font-semibold mb-2">Ethan Payne</p>
                  <p className="text-gray-600 text-sm mb-3">4.9M+ subscribers</p>
                  <p className="text-gray-700 text-sm">
                    Fitness transformation inspiration and mental health advocate with authentic storytelling.
                  </p>
                </Link>

                {/* Vikkstar123 */}
                <Link href="/sidemen/vikkstar" className="group block border-2 border-yellow-200 rounded-lg p-6 hover:border-yellow-500 hover:shadow-lg transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors">
                      Vikkstar123
                    </h3>
                    <span className="text-2xl">🎲</span>
                  </div>
                  <p className="text-yellow-600 font-semibold mb-2">Vikram Barn</p>
                  <p className="text-gray-600 text-sm mb-3">8M+ subscribers</p>
                  <p className="text-gray-700 text-sm">
                    Gaming legend and entrepreneur. Warzone king and strategic mastermind.
                  </p>
                </Link>

                {/* W2S */}
                <Link href="/sidemen/w2s" className="group block border-2 border-pink-200 rounded-lg p-6 hover:border-pink-500 hover:shadow-lg transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors">
                      W2S
                    </h3>
                    <span className="text-2xl">🔥</span>
                  </div>
                  <p className="text-pink-600 font-semibold mb-2">Harry Lewis</p>
                  <p className="text-gray-600 text-sm mb-3">16M+ subscribers</p>
                  <p className="text-gray-700 text-sm">
                    Chaotic energy and unpredictable content. The wildcard with massive individual success.
                  </p>
                </Link>
              </div>
            </section>

            {/* Sidemen Sundays */}
            <section className="bg-white rounded-xl border border-gray-200 p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Sidemen Sundays
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Every Sunday, the Sidemen release a collaborative video on their main channel featuring all seven members. 
                  These videos are known for their high production value, creative concepts, and massive budgets. Popular 
                  formats include:
                </p>

                <ul className="space-y-3 mb-4">
                  <li className="text-gray-700">
                    <strong>$10,000 vs $100 Challenges:</strong> Comparing luxury vs budget experiences (holidays, meals, hotels)
                  </li>
                  <li className="text-gray-700">
                    <strong>Hide and Seek:</strong> Elaborate hide and seek games in massive locations
                  </li>
                  <li className="text-gray-700">
                    <strong>Among Us IRL:</strong> Real-life versions of popular games
                  </li>
                  <li className="text-gray-700">
                    <strong>Tinder in Real Life:</strong> Dating show-style content with celebrity guests
                  </li>
                  <li className="text-gray-700">
                    <strong>Eating Challenges:</strong> Restaurant competitions and food battles
                  </li>
                </ul>

                <p className="text-gray-700 leading-relaxed">
                  Sidemen Sunday videos regularly achieve 10-20 million views each, making them some of the most-watched 
                  content on YouTube. The production quality and entertainment value rival traditional television, showing 
                  how far YouTube content has evolved.
                </p>
              </div>
            </section>

            {/* Charity Match */}
            <section className="bg-white rounded-xl border border-gray-200 p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Sidemen Charity Football Match
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Since 2016, the Sidemen have hosted an annual charity football match, which has become one of the biggest 
                  events in the YouTube calendar. The matches feature YouTube stars, celebrities, and professional footballers, 
                  with all proceeds going to charity.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6 rounded-r-lg">
                  <h3 className="font-bold text-gray-900 mb-3">Charity Impact:</h3>
                  <ul className="space-y-2 mb-0">
                    <li className="text-gray-700">🎯 <strong>Over £10 million</strong> raised for various charities</li>
                    <li className="text-gray-700">🏟️ <strong>Sold-out stadiums</strong> including the London Stadium</li>
                    <li className="text-gray-700">📺 <strong>Millions of live viewers</strong> on YouTube</li>
                    <li className="text-gray-700">⭐ <strong>Celebrity appearances</strong> from sports and entertainment</li>
                  </ul>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  The charity match showcases the Sidemen's commitment to giving back and using their platform for good. 
                  It has inspired other creators to organize similar charity events, amplifying the positive impact of 
                  the YouTube community.
                </p>
              </div>
            </section>

            {/* Business Ventures */}
            <section className="bg-white rounded-xl border border-gray-200 p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Business Empire
              </h2>

              <div className="space-y-6">
                <div className="border-l-4 border-red-600 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sides Restaurant</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The Sidemen launched their own restaurant chain called Sides, offering sides-focused menu items and 
                    creating a physical space for fans to connect with the brand. Multiple locations across the UK.
                  </p>
                </div>

                <div className="border-l-4 border-yellow-600 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">XIX Vodka</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Named after the group's founding date (19th October), XIX Vodka is the Sidemen's premium vodka brand 
                    that has seen massive success in the UK market, competing with established spirit brands.
                  </p>
                </div>

                <div className="border-l-4 border-blue-600 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sidemen Clothing</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The official Sidemen merchandise line features apparel, accessories, and collectibles that sell out 
                    rapidly with each new drop, demonstrating the group's strong brand loyalty.
                  </p>
                </div>

                <div className="border-l-4 border-purple-600 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">MoreSidemen Channel</h3>
                  <p className="text-gray-700 leading-relaxed">
                    A second channel for behind-the-scenes content, podcasts, and additional videos. The MoreSidemen 
                    channel has over 8 million subscribers and serves as a more casual, unfiltered look at the group.
                  </p>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-xl border border-red-200 p-6">
              <h3 className="font-bold text-lg mb-4 text-gray-900">Channel Statistics</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Main Channel</span>
                  <span className="font-bold text-gray-900">20M+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">MoreSidemen</span>
                  <span className="font-bold text-gray-900">8M+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Combined Subs</span>
                  <span className="font-bold text-gray-900">140M+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Years Active</span>
                  <span className="font-bold text-gray-900">12+</span>
                </div>
              </div>
            </div>

            {/* Popular Content */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-lg mb-4 text-gray-900">Popular Series</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Sidemen Sunday</p>
                    <p className="text-sm text-gray-600">Weekly main channel videos</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Among Us IRL</p>
                    <p className="text-sm text-gray-600">Real-life game recreations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-gray-900">$10K vs $100</p>
                    <p className="text-sm text-gray-600">Luxury vs budget challenges</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Hide and Seek</p>
                    <p className="text-sm text-gray-600">Elaborate location hunts</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Content */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-lg mb-4 text-gray-900">Related Topics</h3>
              <div className="space-y-2">
                <Link 
                  href="/nelk-boys" 
                  className="block p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
                >
                  <p className="font-semibold text-gray-900 text-sm">NELK Boys</p>
                  <p className="text-xs text-gray-600">North American YouTube Group</p>
                </Link>
                <Link 
                  href="/beastgames" 
                  className="block p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
                >
                  <p className="font-semibold text-gray-900 text-sm">Beast Games</p>
                  <p className="text-xs text-gray-600">MrBeast's Reality Competition</p>
                </Link>
              </div>
            </div>

            {/* Newsletter CTA */}
            <div className="bg-gradient-to-br from-red-600 to-yellow-600 rounded-xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">Stay Updated</h3>
              <p className="text-sm text-red-100 mb-4">
                Get the latest news about the Sidemen and UK YouTube culture.
              </p>
              <Link
                href="/contact"
                className="block w-full bg-white text-red-600 text-center py-2 px-4 rounded-lg font-semibold hover:bg-red-50 transition-colors"
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
              Explore Individual Member Profiles
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Learn more about each Sidemen member, their individual channels, and unique contributions to the group.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/sidemen/ksi" className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                KSI
              </Link>
              <Link href="/sidemen/miniminter" className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Miniminter
              </Link>
              <Link href="/sidemen/zerkaa" className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Zerkaa
              </Link>
              <Link href="/sidemen/tbjzl" className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                TBJZL
              </Link>
              <Link href="/sidemen/behzinga" className="bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                Behzinga
              </Link>
              <Link href="/sidemen/vikkstar" className="bg-yellow-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-yellow-700 transition-colors">
                Vikkstar123
              </Link>
              <Link href="/sidemen/w2s" className="bg-pink-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-pink-700 transition-colors">
                W2S
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
