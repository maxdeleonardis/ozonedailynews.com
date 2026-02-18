import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Netflix - Streaming Platform Profile | ObjectWire',
  description: 'Complete profile of Netflix, the world\'s leading streaming entertainment service with over 260 million subscribers worldwide. Original content, movies, TV shows, and documentaries.',
  openGraph: {
    title: 'Netflix - Global Streaming Leader',
    description: 'Netflix streaming platform profile with subscriber stats, original content, and market leadership information.',
    type: 'article',
  },
};

export default function NetflixPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 pt-4">
        <Breadcrumb items={[
          { name: 'Home', item: '/' },
          { name: 'Entertainment', item: '/entertainment' },
          { name: 'Netflix', item: '/entertainment/netflix' },
        ]} />
      </div>
      <article className="max-w-5xl mx-auto px-4 py-12">
        
        {/* HEADER */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">Netflix</h1>
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">Global Leader</span>
          </div>
          <p className="text-2xl text-gray-600 font-light mb-6">World's Leading Streaming Entertainment Service</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">260M+ Subscribers</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">190+ Countries</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">Original Content</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">NASDAQ: NFLX</span>
          </div>

          <div className="border-l-4 border-red-600 pl-6 py-4 bg-red-50 rounded-r-lg">
            <p className="text-lg text-gray-800 leading-relaxed">
              Netflix is the world's leading streaming entertainment service with over 260 million paid memberships in more than 190 countries. The company revolutionized how people watch television and movies, pioneering the subscription streaming model and producing award-winning original content that rivals traditional studios.
            </p>
          </div>
        </header>

        {/* QUICK FACTS */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Quick Facts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <dl className="space-y-3">
                <div className="flex border-b border-gray-200 pb-2">
                  <dt className="font-semibold text-gray-700 w-40">Founded:</dt>
                  <dd className="text-gray-900">August 29, 1997</dd>
                </div>
                <div className="flex border-b border-gray-200 pb-2">
                  <dt className="font-semibold text-gray-700 w-40">Founders:</dt>
                  <dd className="text-gray-900">Reed Hastings, Marc Randolph</dd>
                </div>
                <div className="flex border-b border-gray-200 pb-2">
                  <dt className="font-semibold text-gray-700 w-40">Headquarters:</dt>
                  <dd className="text-gray-900">Los Gatos, California</dd>
                </div>
                <div className="flex border-b border-gray-200 pb-2">
                  <dt className="font-semibold text-gray-700 w-40">CEO:</dt>
                  <dd className="text-gray-900">Ted Sarandos & Greg Peters (Co-CEOs)</dd>
                </div>
              </dl>
            </div>
            <div>
              <dl className="space-y-3">
                <div className="flex border-b border-gray-200 pb-2">
                  <dt className="font-semibold text-gray-700 w-40">Subscribers:</dt>
                  <dd className="text-gray-900">260.3M+ (Q4 2024)</dd>
                </div>
                <div className="flex border-b border-gray-200 pb-2">
                  <dt className="font-semibold text-gray-700 w-40">Revenue (2024):</dt>
                  <dd className="text-gray-900">$36.2B annually</dd>
                </div>
                <div className="flex border-b border-gray-200 pb-2">
                  <dt className="font-semibold text-gray-700 w-40">Price Range:</dt>
                  <dd className="text-gray-900">$6.99-$22.99/month</dd>
                </div>
                <div className="flex border-b border-gray-200 pb-2">
                  <dt className="font-semibold text-gray-700 w-40">Employees:</dt>
                  <dd className="text-gray-900">13,000+</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* TABLE OF CONTENTS */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Contents</h2>
          <ol className="space-y-2 text-red-700">
            <li><a href="#history" className="hover:underline">1. History and Evolution</a></li>
            <li><a href="#business-model" className="hover:underline">2. Business Model</a></li>
            <li><a href="#content" className="hover:underline">3. Content Library</a></li>
            <li><a href="#originals" className="hover:underline">4. Netflix Originals</a></li>
            <li><a href="#technology" className="hover:underline">5. Technology & Innovation</a></li>
            <li><a href="#pricing" className="hover:underline">6. Subscription Plans</a></li>
            <li><a href="#global" className="hover:underline">7. Global Expansion</a></li>
            <li><a href="#competition" className="hover:underline">8. Market Competition</a></li>
            <li><a href="#culture" className="hover:underline">9. Corporate Culture</a></li>
            <li><a href="#future" className="hover:underline">10. Future Outlook</a></li>
          </ol>
        </div>

        {/* HISTORY */}
        <section id="history" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-gray-200 pb-2">History and Evolution</h2>
          
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 mb-6 border border-red-200">
            <h3 className="text-xl font-bold mb-3 text-gray-900">📅 Key Milestones</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-red-600 pl-4">
                <div className="font-bold text-gray-900">1997</div>
                <p className="text-gray-700">Netflix founded as a DVD-by-mail rental service</p>
              </div>
              <div className="border-l-4 border-orange-600 pl-4">
                <div className="font-bold text-gray-900">1999</div>
                <p className="text-gray-700">Launches subscription model with unlimited rentals</p>
              </div>
              <div className="border-l-4 border-yellow-600 pl-4">
                <div className="font-bold text-gray-900">2007</div>
                <p className="text-gray-700">Introduces streaming video on demand</p>
              </div>
              <div className="border-l-4 border-green-600 pl-4">
                <div className="font-bold text-gray-900">2013</div>
                <p className="text-gray-700">Releases first original series: House of Cards</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <div className="font-bold text-gray-900">2016</div>
                <p className="text-gray-700">Expands to 190+ countries (global launch)</p>
              </div>
              <div className="border-l-4 border-purple-600 pl-4">
                <div className="font-bold text-gray-900">2020</div>
                <p className="text-gray-700">Surpasses 200 million subscribers</p>
              </div>
              <div className="border-l-4 border-pink-600 pl-4">
                <div className="font-bold text-gray-900">2022</div>
                <p className="text-gray-700">Launches ad-supported tier</p>
              </div>
              <div className="border-l-4 border-indigo-600 pl-4">
                <div className="font-bold text-gray-900">2023</div>
                <p className="text-gray-700">Ends DVD rental service; cracks down on password sharing</p>
              </div>
            </div>
          </div>

          <p className="text-lg leading-relaxed mb-6 text-gray-800">
            Netflix began as a DVD-by-mail service, founded by Reed Hastings and Marc Randolph in 1997. Legend has it that Hastings conceived the idea after being charged $40 in late fees by Blockbuster. The company's subscription model—offering unlimited DVD rentals with no late fees for a flat monthly rate—was revolutionary and ultimately contributed to Blockbuster's demise.
          </p>

          <p className="text-lg leading-relaxed mb-6 text-gray-800">
            In 2007, Netflix made the pivotal decision to enter streaming video, leveraging improving internet speeds and broadband penetration. This transition from physical media to digital streaming proved visionary, positioning Netflix as a first-mover in what would become a massive industry shift.
          </p>

          <p className="text-lg leading-relaxed mb-6 text-gray-800">
            The company's entry into original content production in 2013 with <em>House of Cards</em> marked another transformative moment. By producing its own content, Netflix gained independence from licensing deals, created unique value for subscribers, and established itself as a legitimate entertainment studio competing with Hollywood's established players.
          </p>
        </section>

        {/* BUSINESS MODEL */}
        <section id="business-model" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-gray-200 pb-2">Business Model</h2>
          
          <p className="text-lg leading-relaxed mb-6 text-gray-800">
            Netflix operates on a subscription-based business model with no advertising (except for the ad-supported tier introduced in 2022). Revenue comes primarily from monthly subscription fees, with pricing varying by market and plan tier.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
              <h3 className="text-xl font-bold mb-3 text-gray-900">💰 Revenue Streams</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span><strong>Subscription Fees:</strong> Primary revenue source (~95%)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span><strong>Advertising:</strong> Ad-tier launched in 2022</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">•</span>
                  <span><strong>Licensing:</strong> Content licensing to third parties</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 border border-blue-200">
              <h3 className="text-xl font-bold mb-3 text-gray-900">📊 Growth Strategy</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>Original Content:</strong> $17B+ annual content spend</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>Global Expansion:</strong> Localized content for markets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span><strong>Password Sharing:</strong> Converting sharers to subscribers</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">📈 Financial Performance (2024)</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">$36.2B</div>
                <p className="text-gray-700 text-sm">Annual Revenue</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">260.3M</div>
                <p className="text-gray-700 text-sm">Paid Subscribers</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">$6.9B</div>
                <p className="text-gray-700 text-sm">Net Income</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">19%</div>
                <p className="text-gray-700 text-sm">Profit Margin</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT LIBRARY */}
        <section id="content" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-gray-200 pb-2">Content Library</h2>
          
          <p className="text-lg leading-relaxed mb-6 text-gray-800">
            Netflix offers thousands of TV shows, movies, documentaries, and specials across virtually every genre. The library varies by region due to licensing agreements, but the company is increasingly focused on original content that can be distributed globally.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Movies</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Extensive film library including Netflix Originals, licensed Hollywood blockbusters, independent films, and international cinema.
              </p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Action & Thriller</li>
                <li>• Drama & Romance</li>
                <li>• Comedy & Documentary</li>
                <li>• International Films</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-4xl mb-4">📺</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">TV Series</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Original series, acquired shows, and international programming spanning all genres from prestige drama to reality TV.
              </p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Drama & Crime</li>
                <li>• Comedy & Sitcoms</li>
                <li>• Sci-Fi & Fantasy</li>
                <li>• Reality & Competition</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-4xl mb-4">🎭</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Specials & Docs</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Stand-up comedy specials, documentary series, true crime, nature documentaries, and educational content.
              </p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Stand-Up Comedy</li>
                <li>• True Crime</li>
                <li>• Nature & Science</li>
                <li>• Music & Sports</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
            <h3 className="text-xl font-bold mb-3 text-gray-900">🌍 Global Content Strategy</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Netflix invests heavily in local-language content for markets worldwide. Shows like <em>Squid Game</em> (Korea), <em>Money Heist</em> (Spain), and <em>Sacred Games</em> (India) have become global phenomena, demonstrating the universal appeal of well-crafted stories regardless of origin.
            </p>
          </div>
        </section>

        {/* NETFLIX ORIGINALS */}
        <section id="originals" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-gray-200 pb-2">Netflix Originals</h2>
          
          <p className="text-lg leading-relaxed mb-6 text-gray-800">
            Netflix has produced hundreds of original series, films, and specials, many of which have become cultural phenomenons and award winners. The company spends over $17 billion annually on content production.
          </p>

          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8 mb-6 border border-red-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">🏆 Iconic Netflix Originals</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3 text-gray-900">Drama Series</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>Stranger Things</strong> (2016-present) - 80s sci-fi horror</li>
                  <li>• <strong>The Crown</strong> (2016-2023) - British royal drama</li>
                  <li>• <strong>Ozark</strong> (2017-2022) - Crime thriller</li>
                  <li>• <strong>Narcos</strong> (2015-2017) - Drug cartel drama</li>
                  <li>• <strong>House of Cards</strong> (2013-2018) - Political drama</li>
                  <li>• <strong>The Witcher</strong> (2019-present) - Fantasy epic</li>
                  <li>• <strong>Squid Game</strong> (2021-present) - Korean survival drama</li>
                  <li>• <strong>Wednesday</strong> (2022-present) - Addams Family spinoff</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-gray-900">Films & Limited Series</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• <strong>Bird Box</strong> (2018) - Thriller</li>
                  <li>• <strong>The Irishman</strong> (2019) - Scorsese epic</li>
                  <li>• <strong>Don't Look Up</strong> (2021) - Satirical comedy</li>
                  <li>• <strong>Glass Onion</strong> (2022) - Murder mystery</li>
                  <li>• <strong>The Queen's Gambit</strong> (2020) - Chess drama</li>
                  <li>• <strong>Inventing Anna</strong> (2022) - True crime</li>
                  <li>• <strong>All of Us Are Dead</strong> (2022) - Korean zombie</li>
                  <li>• <strong>Monster</strong> (2022) - Jeffrey Dahmer series</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-3">🎬 Most-Watched (All-Time)</h4>
              <ol className="space-y-1 text-sm text-gray-700">
                <li>1. Squid Game (1.65B hours)</li>
                <li>2. Wednesday (1.72B hours)</li>
                <li>3. Stranger Things S4 (1.35B hours)</li>
                <li>4. Money Heist Part 5 (792M hours)</li>
                <li>5. Bridgerton S2 (656M hours)</li>
              </ol>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-3">🏅 Award Winners</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>The Crown:</strong> 21 Emmy wins</li>
                <li>• <strong>The Queen's Gambit:</strong> 11 Emmy wins</li>
                <li>• <strong>Squid Game:</strong> 6 Emmy wins</li>
                <li>• <strong>The Irishman:</strong> Oscar nominated</li>
                <li>• <strong>Roma:</strong> 3 Oscar wins</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-3">🎤 Comedy Specials</h4>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Dave Chappelle specials</li>
                <li>• Bo Burnham: Inside</li>
                <li>• Hannah Gadsby: Nanette</li>
                <li>• John Mulaney specials</li>
                <li>• Ali Wong specials</li>
              </ul>
            </div>
          </div>
        </section>

        {/* TECHNOLOGY */}
        <section id="technology" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-gray-200 pb-2">Technology & Innovation</h2>
          
          <p className="text-lg leading-relaxed mb-6 text-gray-800">
            Netflix is as much a technology company as an entertainment company. Its streaming infrastructure, recommendation algorithms, and data analytics are industry-leading innovations that have shaped the entire streaming sector.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">🎯 Recommendation Engine</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Netflix's algorithm analyzes viewing patterns, ratings, and behaviors to personalize recommendations for each user.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Machine learning-powered suggestions</li>
                <li>• Personalized thumbnails for same content</li>
                <li>• Watch history analysis</li>
                <li>• A/B testing for optimization</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">🖥️ Streaming Technology</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Industry-leading video compression and adaptive bitrate streaming ensure smooth playback across connection speeds.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Adaptive bitrate streaming</li>
                <li>• Per-title encoding optimization</li>
                <li>• CDN partnership network</li>
                <li>• Offline download capability</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
            <h3 className="text-xl font-bold mb-3 text-gray-900">💡 Technical Innovations</h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-700">
              <ul className="space-y-2 text-sm">
                <li>• <strong>Open Connect:</strong> Netflix's own CDN</li>
                <li>• <strong>4K Ultra HD:</strong> Up to 4K resolution on Premium</li>
                <li>• <strong>HDR Support:</strong> Dolby Vision & HDR10</li>
                <li>• <strong>Dolby Atmos:</strong> Immersive audio</li>
              </ul>
              <ul className="space-y-2 text-sm">
                <li>• <strong>Smart Downloads:</strong> Auto-download next episodes</li>
                <li>• <strong>Skip Intro:</strong> Auto-skip opening credits</li>
                <li>• <strong>Interactive Content:</strong> Choose-your-own-adventure</li>
                <li>• <strong>Mobile Games:</strong> Free games for subscribers</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-gray-200 pb-2">Subscription Plans (US)</h2>
          
          <div className="grid md:grid-cols-4 gap-6 mb-6">
            <div className="bg-white border-2 border-gray-300 rounded-xl p-6">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">Standard with Ads</h3>
                <div className="text-4xl font-bold text-red-600 my-4">$6.99</div>
                <p className="text-sm text-gray-600">per month</p>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><span>✓</span><span>1080p quality</span></li>
                <li className="flex gap-2"><span>✓</span><span>2 devices</span></li>
                <li className="flex gap-2"><span>✗</span><span>Includes ads</span></li>
                <li className="flex gap-2"><span>✗</span><span>Some titles unavailable</span></li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-300 rounded-xl p-6">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">Standard</h3>
                <div className="text-4xl font-bold text-red-600 my-4">$15.49</div>
                <p className="text-sm text-gray-600">per month</p>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><span>✓</span><span>1080p Full HD</span></li>
                <li className="flex gap-2"><span>✓</span><span>2 devices</span></li>
                <li className="flex gap-2"><span>✓</span><span>No ads</span></li>
                <li className="flex gap-2"><span>✓</span><span>Downloads</span></li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-100 to-orange-100 border-2 border-red-400 rounded-xl p-6 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-xs font-bold">
                MOST POPULAR
              </div>
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">Premium</h3>
                <div className="text-4xl font-bold text-red-600 my-4">$22.99</div>
                <p className="text-sm text-gray-600">per month</p>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><span>✓</span><span>4K Ultra HD</span></li>
                <li className="flex gap-2"><span>✓</span><span>4 devices</span></li>
                <li className="flex gap-2"><span>✓</span><span>No ads</span></li>
                <li className="flex gap-2"><span>✓</span><span>HDR & Spatial Audio</span></li>
              </ul>
            </div>

            <div className="bg-white border-2 border-gray-300 rounded-xl p-6">
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">Extra Member</h3>
                <div className="text-4xl font-bold text-red-600 my-4">$7.99</div>
                <p className="text-sm text-gray-600">per month</p>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2"><span>✓</span><span>Add-on for Standard/Premium</span></li>
                <li className="flex gap-2"><span>✓</span><span>For non-household members</span></li>
                <li className="flex gap-2"><span>✓</span><span>Same benefits as main account</span></li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h4 className="font-bold text-gray-900 mb-2">📝 Password Sharing Policy</h4>
            <p className="text-gray-700 text-sm">
              As of 2023, Netflix requires accounts to be used within one household. Additional members outside the household can be added for $7.99/month (US). This policy aims to convert password sharers into paying subscribers.
            </p>
          </div>
        </section>

        {/* GLOBAL EXPANSION */}
        <section id="global" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-gray-200 pb-2">Global Expansion</h2>
          
          <p className="text-lg leading-relaxed mb-6 text-gray-800">
            Netflix operates in over 190 countries and territories, making it one of the most globally distributed streaming services. The company has invested heavily in local-language content production worldwide.
          </p>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 mb-6 border border-blue-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">🌍 Regional Breakdown (Q4 2024)</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">80.2M</div>
                <p className="text-gray-700">United States & Canada</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">86.9M</div>
                <p className="text-gray-700">Europe, Middle East & Africa</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">45.9M</div>
                <p className="text-gray-700">Latin America</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">47.3M</div>
                <p className="text-gray-700">Asia-Pacific</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">190+</div>
                <p className="text-gray-700">Countries Served</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
                <p className="text-gray-700">Languages Supported</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-3">🎬 Local Content Production</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>India:</strong> Major production hub with local series and films</li>
                <li>• <strong>Korea:</strong> Home to Squid Game, Kingdom, others</li>
                <li>• <strong>Spain:</strong> Money Heist, Elite</li>
                <li>• <strong>Brazil:</strong> 3%, Reality Z</li>
                <li>• <strong>UK:</strong> Sex Education, The Crown</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-3">💰 Market Opportunities</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Large growth potential in Asia-Pacific</li>
                <li>• Increasing penetration in Latin America</li>
                <li>• Mature markets focusing on retention</li>
                <li>• Mobile-first strategies for developing markets</li>
                <li>• Lower-priced mobile-only plans in some regions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* COMPETITION */}
        <section id="competition" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-gray-200 pb-2">Market Competition</h2>
          
          <p className="text-lg leading-relaxed mb-6 text-gray-800">
            Netflix faces intense competition from both established media companies (Disney+, HBO Max/Max, Paramount+) and tech giants (Amazon Prime Video, Apple TV+). Despite increased competition, Netflix maintains market leadership in subscribers and viewership.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-bold text-green-900 mb-2">✓ Competitive Advantages</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Largest subscriber base (260M+)</li>
                <li>• First-mover advantage in streaming</li>
                <li>• Massive content library and production budget</li>
                <li>• Global reach and local content strategies</li>
                <li>• Superior recommendation technology</li>
                <li>• Strong brand recognition</li>
                <li>• No parent company conflicts (pure streaming play)</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-bold text-orange-900 mb-2">⚠ Challenges</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Increasing content costs</li>
                <li>• Competition for subscriber attention</li>
                <li>• No major franchise properties (like Marvel/Star Wars)</li>
                <li>• Saturation in mature markets</li>
                <li>• Subscriber churn concerns</li>
                <li>• Password sharing crackdown backlash</li>
                <li>• Competition from free ad-supported streaming</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CORPORATE CULTURE */}
        <section id="culture" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-gray-200 pb-2">Corporate Culture</h2>
          
          <p className="text-lg leading-relaxed mb-6 text-gray-800">
            Netflix is famous for its unique corporate culture, documented in its widely-circulated "Netflix Culture" deck. The company emphasizes freedom and responsibility, high performance, and radical candor.
          </p>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 mb-6 border border-purple-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">🎯 Cultural Values</h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-800">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <div>
                    <strong>Freedom & Responsibility:</strong> Minimal rules, maximum trust in employees
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <div>
                    <strong>Context, Not Control:</strong> Provide context for decision-making
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <div>
                    <strong>Highly Aligned, Loosely Coupled:</strong> Clear goals, flexible execution
                  </div>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <div>
                    <strong>Pay Top of Market:</strong> Competitive compensation for high performers
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <div>
                    <strong>Unlimited Vacation:</strong> Trust employees to manage their time
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">•</span>
                  <div>
                    <strong>Keeper Test:</strong> Managers ask "Would I fight to keep this person?"
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h4 className="font-bold text-gray-900 mb-2">📚 The Netflix Culture Deck</h4>
            <p className="text-gray-700 text-sm">
              Netflix's culture presentation has been viewed millions of times and influenced countless companies. Sheryl Sandberg (former Facebook COO) called it "the most important document ever to come out of Silicon Valley."
            </p>
          </div>
        </section>

        {/* FUTURE */}
        <section id="future" className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-gray-200 pb-2">Future Outlook</h2>
          
          <p className="text-lg leading-relaxed mb-6 text-gray-800">
            Netflix continues to evolve its business model and content strategy to maintain leadership in the increasingly competitive streaming market.
          </p>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6 border border-red-200">
              <h3 className="text-xl font-bold mb-3 text-gray-900">🎮 Gaming Expansion</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Netflix offers mobile games to all subscribers at no extra cost, with plans to expand into cloud gaming. Games based on popular Netflix IP like Stranger Things and The Queen's Gambit are already available.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 border border-blue-200">
              <h3 className="text-xl font-bold mb-3 text-gray-900">📺 Live Streaming</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Netflix has begun experimenting with live content, including comedy specials, sporting events (WWE), and special events. This represents a new direction for the traditionally on-demand service.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
              <h3 className="text-xl font-bold mb-3 text-gray-900">💰 Advertising Growth</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                The ad-supported tier launched in 2022 represents a significant new revenue stream. Netflix is building out its advertising technology and sales teams to compete with established ad-supported platforms.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
              <h3 className="text-xl font-bold mb-3 text-gray-900">🎬 Upcoming Major Releases (2026)</h3>
              <ul className="grid md:grid-cols-2 gap-2 text-sm text-gray-700">
                <li>• <strong>Stranger Things</strong> Season 5 (Final Season)</li>
                <li>• <strong>Squid Game</strong> Season 3</li>
                <li>• <strong>Wednesday</strong> Season 2</li>
                <li>• <strong>The Witcher</strong> Season 4</li>
                <li>• New Knives Out film</li>
                <li>• Avatar: The Last Airbender Season 2</li>
                <li>• Multiple high-budget films</li>
                <li>• International originals expansion</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Watching Today</h2>
          <p className="text-xl mb-6 text-red-100">
            Join 260 million subscribers streaming unlimited entertainment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://www.netflix.com" className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors">
              Sign Up for Netflix
            </a>
            <a href="https://www.netflix.com/browse" className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-400 transition-colors border-2 border-white/30">
              Browse Content
            </a>
          </div>
        </div>

        {/* RELATED LINKS */}
        <div className="mt-12 pt-8 border-t-2 border-gray-200">
          <h3 className="text-xl font-bold mb-4 text-gray-900">Related Streaming Services</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/entertainment/hbomax" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="text-2xl mb-2">🎬</div>
              <div className="font-semibold text-gray-900">HBO Max</div>
            </Link>
            <Link href="/entertainment/disneyplus" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="text-2xl mb-2">✨</div>
              <div className="font-semibold text-gray-900">Disney+</div>
            </Link>
            <Link href="/entertainment/prime" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="text-2xl mb-2">📦</div>
              <div className="font-semibold text-gray-900">Prime Video</div>
            </Link>
            <Link href="/entertainment" className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="text-2xl mb-2">🎭</div>
              <div className="font-semibold text-gray-900">All Streaming</div>
            </Link>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="border-t-2 border-gray-200 pt-8 mt-12 text-center text-gray-600">
          <p className="text-sm">
            Part of ObjectWire's comprehensive entertainment and streaming directory
          </p>
          <p className="text-sm mt-2">
            Last updated: February 9, 2026
          </p>
        </footer>

      </article>
    </div>
  );
}
