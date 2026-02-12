import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleLayout from '@/components/ArticleLayout';

export const metadata: Metadata = {
  title: 'Disney News & Coverage | The Walt Disney Company | Object Wire',
  description: 'Complete coverage of The Walt Disney Company, including theme parks, streaming services, leadership changes, and entertainment industry news.',
  keywords: ['Disney', 'Walt Disney Company', 'Disney Parks', 'Disney+', 'Bob Iger', 'Josh D\'Amaro', 'theme parks', 'entertainment'],
  openGraph: {
    title: 'Disney News & Coverage | Object Wire',
    description: 'Complete coverage of The Walt Disney Company',
    type: 'website',
  },
};

export default function DisneyHubPage() {
  return (
    <ArticleLayout pathname="/disney">
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-6xl mb-6">🏰</div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
                Disney Coverage
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                Breaking news, leadership insights, and comprehensive analysis of The Walt Disney Company
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12 max-w-7xl">
          {/* Breaking News Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-black uppercase tracking-wider bg-gradient-to-r from-red-600 to-red-700 text-white animate-pulse">
                🔴 Breaking News
              </span>
              <h2 className="text-3xl font-black text-gray-900 dark:text-gray-100">Latest from Disney</h2>
            </div>

            <Link 
              href="/disney/news/incoming-ceo-floats-premiering-films-in-fortnite"
              className="block group mb-8"
            >
              <article className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-red-500">
                <div className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="text-6xl">🎮</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="inline-flex items-center px-2 py-1 rounded text-xs font-black uppercase tracking-wider bg-red-600 text-white">
                          Breaking
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">February 11, 2026</span>
                      </div>
                      <h3 className="text-3xl font-black text-gray-900 dark:text-gray-100 mb-3 group-hover:text-blue-600 transition-colors">
                        Disney's Incoming CEO Floats Premiering Films in Fortnite
                      </h3>
                      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        Josh D'Amaro envisions expanded Epic Games partnership including movie premieres, cruise bookings, and Super Bowl experiences inside Fortnite's platform.
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                        <span className="font-semibold">Object Wire Staff</span>
                        <span>•</span>
                        <span>7 min read</span>
                        <span>•</span>
                        <span className="text-blue-600 dark:text-blue-400 font-semibold">Entertainment & Technology</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </section>

          {/* Leadership Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-black mb-8 text-gray-900 dark:text-gray-100">Disney Leadership</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Josh D'Amaro Profile */}
              <Link 
                href="/disney/josh-damaro"
                className="block group"
              >
                <article className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-blue-300 dark:border-blue-700 h-full">
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-5xl">👔</div>
                      <div className="flex-1">
                        <div className="inline-flex items-center px-2 py-1 rounded text-xs font-semibold uppercase tracking-wider bg-blue-600 text-white mb-3">
                          Biography
                        </div>
                        <h3 className="text-2xl font-black text-gray-900 dark:text-gray-100 mb-2 group-hover:text-blue-600 transition-colors">
                          Josh D'Amaro
                        </h3>
                        <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-3">
                          Incoming CEO • March 2026
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      Complete biography of Disney's next chief executive, from his Cornell education through leadership of Disney Parks to his appointment as CEO effective March 2026.
                    </p>
                    <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">Previous Role:</span>
                        <span>Chairman, Disney Parks, Experiences and Products</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">Career Start:</span>
                        <span>Joined Disney in 1998</span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>

              {/* Strategic Vision Card */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg p-8 border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl">🎯</div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 dark:text-gray-100 mb-2">
                      Strategic Direction
                    </h3>
                    <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-3">
                      D'Amaro's Vision for Disney
                    </p>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 mt-1">▸</span>
                    <span>Digital transformation and gaming platform integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 mt-1">▸</span>
                    <span>Expanded Epic Games/Fortnite partnership ($1.5B investment)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 mt-1">▸</span>
                    <span>Reimagining film distribution and content premieres</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 mt-1">▸</span>
                    <span>Meeting younger audiences in virtual spaces</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 dark:text-purple-400 mt-1">▸</span>
                    <span>Technology-enhanced park and cruise experiences</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Key Topics Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-black mb-8 text-gray-900 dark:text-gray-100">Disney Coverage Areas</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Theme Parks */}
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 transition-colors">
                <div className="text-4xl mb-4">🎢</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">Theme Parks</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Disneyland, Walt Disney World, international resorts, new attractions, and park operations
                </p>
              </div>

              {/* Streaming & Entertainment */}
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-purple-500 transition-colors">
                <div className="text-4xl mb-4">📺</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">Streaming & Film</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Disney+, theatrical releases, content strategy, and distribution innovation
                </p>
              </div>

              {/* Business & Finance */}
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-green-500 transition-colors">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">Business & Finance</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Quarterly earnings, strategic partnerships, M&A activity, and investor relations
                </p>
              </div>

              {/* Gaming & Technology */}
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-pink-500 transition-colors">
                <div className="text-4xl mb-4">🎮</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">Gaming & Tech</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Epic Games partnership, Fortnite integrations, metaverse strategy, and digital innovation
                </p>
              </div>

              {/* Cruise Line */}
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-cyan-500 transition-colors">
                <div className="text-4xl mb-4">🚢</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">Cruise Line</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Disney Cruise Line fleet expansion, Lighthouse Point, and vacation experiences
                </p>
              </div>

              {/* Sports & ESPN */}
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-red-500 transition-colors">
                <div className="text-4xl mb-4">🏈</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">Sports & ESPN</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  ESPN strategy, live sports rights, Super Bowl integration, and sports streaming
                </p>
              </div>
            </div>
          </section>

          {/* Context & Background */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border-2 border-blue-300 dark:border-blue-700">
              <h2 className="text-3xl font-black mb-6 text-gray-900 dark:text-gray-100">
                About The Walt Disney Company
              </h2>
              <div className="grid md:grid-cols-2 gap-6 text-gray-700 dark:text-gray-300">
                <div>
                  <p className="mb-4 leading-relaxed">
                    The Walt Disney Company is one of the world's largest entertainment conglomerates, 
                    operating theme parks, film studios, television networks, streaming services, and 
                    consumer products divisions globally.
                  </p>
                  <p className="leading-relaxed">
                    Founded in 1923 by Walt and Roy Disney, the company has grown from an animation 
                    studio to a diversified entertainment empire encompassing Marvel, Pixar, Star Wars, 
                    ESPN, ABC, and more.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-blue-600 dark:text-blue-400">Founded:</span>
                    <span>October 16, 1923</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-blue-600 dark:text-blue-400">Headquarters:</span>
                    <span>Burbank, California</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-blue-600 dark:text-blue-400">Current CEO:</span>
                    <span>Bob Iger (until March 2026)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-blue-600 dark:text-blue-400">Incoming CEO:</span>
                    <span>Josh D'Amaro (March 2026)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-blue-600 dark:text-blue-400">Major Properties:</span>
                    <span>Disney, Marvel, Pixar, Star Wars, ESPN, ABC, Hulu</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Related Coverage */}
          <section>
            <h2 className="text-3xl font-black mb-8 text-gray-900 dark:text-gray-100">Related Coverage</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/entertainment/netflix" className="block p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all border-2 border-gray-200 dark:border-gray-700 hover:border-red-500">
                <div className="text-3xl mb-3">📺</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-gray-100">Streaming Wars</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Disney+ vs Netflix and streaming industry competition</p>
              </Link>
              
              <Link href="/entertainment" className="block p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all border-2 border-gray-200 dark:border-gray-700 hover:border-purple-500">
                <div className="text-3xl mb-3">🎬</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-gray-100">Entertainment News</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Latest from movies, TV, and entertainment industry</p>
              </Link>
              
              <Link href="/technology" className="block p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500">
                <div className="text-3xl mb-3">💻</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-gray-100">Technology Coverage</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Gaming platforms, Epic Games, and digital innovation</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </ArticleLayout>
  );
}
