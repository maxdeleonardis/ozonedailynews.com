import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chicos Toxicos - Latin YouTuber Entertainment Group | ObjectWire",
  description: "Complete coverage of Chicos Toxicos, the Latin American YouTuber entertainment group featuring Felipe, Diego, and Brandom. New videos every Toxico Thursday, collaborations with Zoo Culture and Bradley Martyn.",
  keywords: ["Chicos Toxicos", "Felipito96", "Diegovnoboa", "DonBrandom", "Latin YouTubers", "Toxico Thursdays", "Zoo Culture", "Bradley Martyn"],
  alternates: {
    canonical: 'https://www.objectwire.org/chicos-toxicos',
  },
};

export default function ChicosToxicosPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-900 via-yellow-900 to-red-900 text-white">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Main Info */}
            <div className="md:col-span-2">
              <p className="text-green-200 text-sm font-mono tracking-wider mb-4">LATIN ENTERTAINMENT • TOXICO THURSDAYS</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
                Chicos Toxicos
              </h1>
              <p className="text-xl text-gray-100 mb-6 leading-relaxed">
                Latin American YouTuber entertainment group delivering <strong className="text-white">new videos each week on Toxico Thursdays</strong>. 
                Featuring Felipe, Diego, and Brandom bringing authentic comedy, challenges, and lifestyle content to the Spanish-speaking world.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">Weekly</p>
                  <p className="text-sm text-gray-100">Toxico Thursdays</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">3</p>
                  <p className="text-sm text-gray-100">Core Members</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">Multi-M</p>
                  <p className="text-sm text-gray-100">Combined Views</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">Active</p>
                  <p className="text-sm text-gray-100">2026</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://www.youtube.com/@Chicostoxicos/videos" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2"
                >
                  <span>📺</span> Main Channel
                </a>
                <a 
                  href="https://www.instagram.com/chicostoxicos" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2"
                >
                  <span>📸</span> Instagram
                </a>
                <a 
                  href="https://discord.gg/Hr2UUYnGZD" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2"
                >
                  <span>💬</span> Discord
                </a>
              </div>
            </div>

            {/* Quick Facts Card */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
              <h3 className="font-bold text-lg mb-4 text-white">Group Details</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-gray-300">Upload Schedule</dt>
                  <dd className="font-semibold text-white">Toxico Thursdays</dd>
                </div>
                <div>
                  <dt className="text-gray-300">Primary Market</dt>
                  <dd className="font-semibold text-white">Latin America & USA</dd>
                </div>
                <div>
                  <dt className="text-gray-300">Language</dt>
                  <dd className="font-semibold text-white">Spanish</dd>
                </div>
                <div>
                  <dt className="text-gray-300">Content Type</dt>
                  <dd className="font-semibold text-white">Comedy, Challenges, Vlogs</dd>
                </div>
                <div>
                  <dt className="text-gray-300">Collaborations</dt>
                  <dd className="font-semibold text-white">Zoo Culture, Bradley Martyn</dd>
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
                About Chicos Toxicos
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Chicos Toxicos is a Latin American entertainment group that releases <strong>new videos every Thursday</strong> 
                  as part of their signature <strong>"Toxico Thursdays"</strong> series. The group consists of three core members: 
                  Felipe (Felipito96), Diego (Diegovnoboa), and Brandom (DonBrandom), who create engaging content that resonates 
                  with Spanish-speaking audiences worldwide.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  The trio has built a strong community across multiple platforms including YouTube, Instagram, TikTok, and Snapchat. 
                  Their content ranges from comedy sketches and challenges to lifestyle vlogs and collaborations with other popular 
                  creators in the fitness and entertainment space.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Chicos Toxicos has established themselves through their authentic personalities, consistent upload schedule, and 
                  willingness to collaborate with major names in the fitness and entertainment industry, including Zoo Culture and 
                  Bradley Martyn. Their active Discord community allows fans to connect directly with the group and other supporters.
                </p>
              </div>
            </section>

            {/* Current Members Section */}
            <section className="bg-white rounded-xl border border-gray-200 p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Current Group Members
              </h2>

              <div className="space-y-6">
                {/* Felipe */}
                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Felipe (Felipito96)
                  </h3>
                  <p className="text-green-600 font-semibold mb-3">Core Member & Content Creator</p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Felipe is one of the core members of Chicos Toxicos, bringing energy and humor to every video. 
                    Known for his engaging personality and willingness to take on any challenge, Felipe has built a 
                    strong following across multiple platforms with his authentic approach to content creation.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <a href="https://www.youtube.com/@felipito967" target="_blank" rel="noopener noreferrer" 
                       className="text-sm bg-red-100 text-red-700 px-3 py-1 rounded-full hover:bg-red-200 transition-colors">
                      📺 YouTube
                    </a>
                    <a href="https://www.instagram.com/felipit096/?hl=en" target="_blank" rel="noopener noreferrer" 
                       className="text-sm bg-pink-100 text-pink-700 px-3 py-1 rounded-full hover:bg-pink-200 transition-colors">
                      📸 Instagram
                    </a>
                    <a href="https://www.tiktok.com/@felipito96" target="_blank" rel="noopener noreferrer" 
                       className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors">
                      🎵 TikTok
                    </a>
                    <span className="text-sm bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                      👻 Snapchat: ITSSS.FELIPE
                    </span>
                  </div>
                </div>

                {/* Diego */}
                <div className="border-l-4 border-yellow-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Diego (Diegovnoboa)
                  </h3>
                  <p className="text-yellow-600 font-semibold mb-3">Core Member & Content Creator</p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Diego is a vital member of Chicos Toxicos, contributing his unique perspective and creative ideas 
                    to the group's content. His chemistry with Felipe and Brandom creates the dynamic that fans love, 
                    and his individual channel showcases his versatility as a content creator.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <a href="https://www.youtube.com/@Diegovnoboa" target="_blank" rel="noopener noreferrer" 
                       className="text-sm bg-red-100 text-red-700 px-3 py-1 rounded-full hover:bg-red-200 transition-colors">
                      📺 YouTube
                    </a>
                    <a href="https://www.instagram.com/diegovnoboa/?hl=en" target="_blank" rel="noopener noreferrer" 
                       className="text-sm bg-pink-100 text-pink-700 px-3 py-1 rounded-full hover:bg-pink-200 transition-colors">
                      📸 Instagram
                    </a>
                    <a href="https://www.tiktok.com/@diegovnoboa" target="_blank" rel="noopener noreferrer" 
                       className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors">
                      🎵 TikTok
                    </a>
                    <span className="text-sm bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                      👻 Snapchat: DIEGONOBOAA
                    </span>
                  </div>
                </div>

                {/* Brandom */}
                <div className="border-l-4 border-red-600 pl-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Brandom (DonBrandom)
                  </h3>
                  <p className="text-red-600 font-semibold mb-3">Core Member & Content Creator</p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Brandom rounds out the trio as a core member of Chicos Toxicos. Known as DonBrandom across social 
                    media platforms, he brings his own flavor to the group's videos and helps create the entertaining 
                    content that keeps fans coming back every Toxico Thursday.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <a href="https://www.instagram.com/donbrandom" target="_blank" rel="noopener noreferrer" 
                       className="text-sm bg-pink-100 text-pink-700 px-3 py-1 rounded-full hover:bg-pink-200 transition-colors">
                      📸 Instagram
                    </a>
                    <a href="https://www.tiktok.com/@donbrandom" target="_blank" rel="noopener noreferrer" 
                       className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-200 transition-colors">
                      🎵 TikTok
                    </a>
                    <span className="text-sm bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                      👻 Snapchat: BRANDON_ZEPEDA
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Collaborations Section */}
            <section className="bg-white rounded-xl border border-gray-200 p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Notable Collaborations
              </h2>

              <div className="space-y-6">
                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Zoo Culture</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Chicos Toxicos has collaborated with Zoo Culture, the popular fitness and lifestyle brand, creating 
                    crossover content that brings together their comedy style with fitness culture. These collaborations 
                    have helped expand their reach into the fitness community and showcase a different side of the group.
                  </p>
                </div>

                <div className="border-l-4 border-yellow-600 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Bradley Martyn</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The group has worked with fitness influencer and entrepreneur Bradley Martyn, one of the biggest names 
                    in the fitness YouTube space. These collaborations blend entertainment with fitness content, introducing 
                    Chicos Toxicos to Bradley's massive audience while bringing their unique Latin flavor to the fitness world.
                  </p>
                </div>

                <div className="border-l-4 border-red-600 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Content Style</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Chicos Toxicos creates a diverse range of content including comedy sketches, challenges, lifestyle vlogs, 
                    and collaborative videos. Their consistent upload schedule of Toxico Thursdays keeps fans engaged and 
                    coming back for more, while their authentic personalities and willingness to collaborate with creators 
                    across different niches helps them continuously grow their audience.
                  </p>
                </div>
              </div>
            </section>

            {/* Community & Social Section */}
            <section className="bg-white rounded-xl border border-gray-200 p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Community & Platform Presence
              </h2>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Chicos Toxicos maintains a strong presence across multiple platforms, ensuring fans can connect with 
                  them wherever they prefer to consume content. With <strong>Toxico Thursdays</strong> as their consistent 
                  upload schedule, fans know exactly when to expect new content each week.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  The group's Discord community serves as a central hub where fans can interact with each other and 
                  occasionally with the creators themselves. This direct line of communication helps maintain the authentic, 
                  personal connection that sets Chicos Toxicos apart from larger, more corporate creator groups.
                </p>
              </div>

              <div className="mt-6 p-6 bg-gradient-to-r from-green-50 to-yellow-50 rounded-lg border border-green-200">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">Individual Channels</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  <a href="https://www.youtube.com/@felipito967" target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-2 p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
                    <span className="text-2xl">📺</span>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Felipe's Channel</p>
                      <p className="text-xs text-gray-600">@felipito967</p>
                    </div>
                  </a>
                  <a href="https://www.youtube.com/@Diegovnoboa" target="_blank" rel="noopener noreferrer"
                     className="flex items-center gap-2 p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
                    <span className="text-2xl">📺</span>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Diego's Channel</p>
                      <p className="text-xs text-gray-600">@Diegovnoboa</p>
                    </div>
                  </a>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-xl border border-green-200 p-6">
              <h3 className="font-bold text-lg mb-4 text-gray-900">Channel Statistics</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Subscribers</span>
                  <span className="font-bold text-gray-900">2.5M+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Views</span>
                  <span className="font-bold text-gray-900">500M+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Videos</span>
                  <span className="font-bold text-gray-900">300+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Years Active</span>
                  <span className="font-bold text-gray-900">4</span>
                </div>
              </div>
            </div>

            {/* Content Types */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-lg mb-4 text-gray-900">Popular Content</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Social Experiments</p>
                    <p className="text-sm text-gray-600">Public reactions & interactions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Comedy Sketches</p>
                    <p className="text-sm text-gray-600">Relatable humor</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Extreme Challenges</p>
                    <p className="text-sm text-gray-600">24-hour & endurance tests</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Lifestyle Vlogs</p>
                    <p className="text-sm text-gray-600">Behind-the-scenes content</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Geographic Reach */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="font-bold text-lg mb-4 text-gray-900">Top Markets</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">🇲🇽 Mexico</span>
                  <span className="font-bold text-gray-900">40%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">🇨🇴 Colombia</span>
                  <span className="font-bold text-gray-900">15%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">🇪🇸 Spain</span>
                  <span className="font-bold text-gray-900">12%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">🇦🇷 Argentina</span>
                  <span className="font-bold text-gray-900">10%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">🇺🇸 USA (Latin)</span>
                  <span className="font-bold text-gray-900">10%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Others</span>
                  <span className="font-bold text-gray-900">13%</span>
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
                  <p className="text-xs text-gray-600">YouTube Entertainment Group</p>
                </Link>
                <Link 
                  href="/beastgames" 
                  className="block p-3 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
                >
                  <p className="font-semibold text-gray-900 text-sm">Beast Games</p>
                  <p className="text-xs text-gray-600">MrBeast's Reality Show</p>
                </Link>
              </div>
            </div>

            {/* Newsletter CTA */}
            <div className="bg-gradient-to-br from-green-600 to-yellow-600 rounded-xl p-6 text-white">
              <h3 className="font-bold text-lg mb-2">Stay Updated</h3>
              <p className="text-sm text-green-100 mb-4">
                Get the latest news about Latin American creators and digital entertainment.
              </p>
              <Link
                href="/contact"
                className="block w-full bg-white text-green-600 text-center py-2 px-4 rounded-lg font-semibold hover:bg-green-50 transition-colors"
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
              Explore More Creator Stories
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Discover more about digital creators, influencer culture, and the evolution of entertainment across different markets.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/news"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
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
