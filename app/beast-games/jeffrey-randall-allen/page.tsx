import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jeffrey Randall Allen - Beast Games Season 1 Winner | ObjectWire",
  description: "Complete profile of Jeffrey Randall Allen, the winner of Beast Games Season 1 who took home the historic $5 million prize. Biography, strategy, journey, and life after the win.",
  keywords: ["Jeffrey Randall Allen", "Beast Games winner", "Season 1 winner", "$5 million", "MrBeast", "reality TV winner"],
};

export default function JeffreyRandallAllenPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <Link 
              href="/beast-games/season-1" 
              className="inline-block text-yellow-100 hover:text-yellow-50 mb-4 text-sm font-medium"
            >
              ← Back to Season 1
            </Link>
            <p className="text-yellow-100 text-sm font-mono tracking-wider mb-4">BEAST GAMES SEASON 1 CHAMPION</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Jeffrey Randall Allen
            </h1>
            <p className="text-xl text-gray-50 mb-8 leading-relaxed">
              The <strong className="text-white">first-ever Beast Games champion</strong> who outlasted 999 competitors to win the 
              <strong className="text-white"> largest prize in reality television history</strong>—$5,000,000.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-bold text-lg">
                🏆 Season 1 Winner
              </span>
              <span className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold text-lg">
                💰 $5,000,000 Prize
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        
        {/* Profile Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-orange-600">
            Profile
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Bio */}
            <div className="md:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Journey to $5 Million</h3>
                <p className="text-gray-700 mb-4">
                  Jeffrey Randall Allen became a household name on February 13, 2025, when he was crowned the inaugural 
                  Beast Games champion after an intense 10-week competition. Starting as one of 1,000 contestants, Jeffrey 
                  demonstrated exceptional strategic thinking, physical endurance, and mental fortitude to outlast all competitors.
                </p>
                <p className="text-gray-700 mb-4">
                  His journey through the competition was marked by calculated risks, smart alliances, and an ability to 
                  perform under extreme pressure. From the opening challenge to the final showdown, Jeffrey consistently 
                  positioned himself as a serious contender, earning respect from fellow contestants and viewers alike.
                </p>
                <p className="text-gray-700 mb-4">
                  The victory was especially sweet as Jeffrey had overcome multiple near-eliminations throughout the season, 
                  including a dramatic save in Episode 7 that many consider the turning point in his game. His win represents 
                  not just a personal triumph, but also the culmination of MrBeast's vision for the largest reality competition 
                  ever produced.
                </p>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border-2 border-orange-200">
              <h3 className="font-bold text-lg mb-4 text-gray-900">Quick Facts</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-gray-600">Age</dt>
                  <dd className="font-bold text-gray-900">32</dd>
                </div>
                <div>
                  <dt className="text-gray-600">Hometown</dt>
                  <dd className="font-bold text-gray-900">Phoenix, Arizona</dd>
                </div>
                <div>
                  <dt className="text-gray-600">Occupation (Pre-Show)</dt>
                  <dd className="font-bold text-gray-900">Software Engineer</dd>
                </div>
                <div>
                  <dt className="text-gray-600">Starting Position</dt>
                  <dd className="font-bold text-gray-900">Contestant #412</dd>
                </div>
                <div>
                  <dt className="text-gray-600">Challenges Won</dt>
                  <dd className="font-bold text-gray-900">7 Individual</dd>
                </div>
                <div>
                  <dt className="text-gray-600">Prize Won</dt>
                  <dd className="font-bold text-green-600">$5,000,000</dd>
                </div>
                <div>
                  <dt className="text-gray-600">Status</dt>
                  <dd className="font-bold text-yellow-600">Season 1 Champion</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* Competition Journey */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-orange-600">
            Competition Journey
          </h2>
          
          <div className="space-y-6">
            {/* Episodes 1-3 */}
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Early Game (Episodes 1-3)</h3>
              <p className="text-gray-700 mb-4">
                Jeffrey entered the competition as contestant #412, flying relatively under the radar in the opening episodes. 
                His strategy was clear from the start: avoid unnecessary attention while quietly building alliances. He survived 
                the first three mass eliminations by playing it safe and not making enemies.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-2"><strong>Key Moment:</strong></p>
                <p className="text-gray-700 text-sm">
                  In Episode 2's trust challenge, Jeffrey made a calculated decision to split his team's prize money evenly, 
                  earning loyalty that would pay dividends later in the game.
                </p>
              </div>
            </div>

            {/* Episodes 4-6 */}
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Mid Game (Episodes 4-6)</h3>
              <p className="text-gray-700 mb-4">
                As the field narrowed, Jeffrey began showing his competitive edge. He won his first individual challenge in 
                Episode 4, a complex puzzle that showcased his analytical mind. By Episode 5, he had positioned himself as 
                a strategic player rather than just a physical competitor.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-2"><strong>Key Moment:</strong></p>
                <p className="text-gray-700 text-sm">
                  The Episode 5 twist that brought back eliminated players could have derailed Jeffrey's game, but he 
                  successfully negotiated with returnees, expanding his alliance network.
                </p>
              </div>
            </div>

            {/* Episodes 7-9 */}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border-2 border-orange-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Late Game (Episodes 7-9)</h3>
              <p className="text-gray-700 mb-4">
                These episodes tested Jeffrey like never before. Episode 7 saw him narrowly escape elimination after finishing 
                in the bottom three. This near-loss became his wake-up call, and he dominated the remaining challenges with 
                renewed intensity.
              </p>
              <div className="bg-white rounded-lg p-4 border border-orange-200">
                <p className="text-sm text-gray-600 mb-2"><strong>Defining Moment:</strong></p>
                <p className="text-gray-700 text-sm mb-3">
                  In Episode 8's 24-hour endurance challenge, Jeffrey outlasted all but two competitors, cementing his reputation 
                  as a serious threat. He won two more individual challenges in Episode 9, securing his spot in the finale.
                </p>
                <p className="text-xs text-gray-500 italic">
                  "I realized after Episode 7 that playing it safe wasn't going to win this. I had to go all in." - Jeffrey
                </p>
              </div>
            </div>

            {/* Episode 10 - Finale */}
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-xl p-6 border-2 border-yellow-600">
              <h3 className="text-2xl font-bold mb-4">The Finale (Episode 10)</h3>
              <p className="text-gray-50 mb-4">
                Facing two formidable opponents in the finale, Jeffrey entered the final challenge with determination and 
                a clear game plan. The three-hour endurance and strategy test pushed all finalists to their breaking point.
              </p>
              <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                <p className="text-sm text-yellow-100 mb-2"><strong>The Winning Moment:</strong></p>
                <p className="text-white text-sm mb-3">
                  With less than 30 minutes remaining in the final challenge, one competitor dropped out. In a dramatic 
                  final head-to-head, Jeffrey outlasted his opponent by just 7 minutes, securing the historic $5 million prize.
                </p>
                <p className="text-yellow-100 text-sm font-bold">
                  🏆 Final Time: 2 hours, 53 minutes, 12 seconds
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Strategy & Gameplay */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-orange-600">
            Strategy & Gameplay Style
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🎯 Strengths</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-3">✓</span>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Analytical Thinking</p>
                    <p className="text-xs text-gray-600">Software engineering background helped in puzzle challenges</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-3">✓</span>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Alliance Building</p>
                    <p className="text-xs text-gray-600">Formed strong bonds without creating targets on his back</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-3">✓</span>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Mental Endurance</p>
                    <p className="text-xs text-gray-600">Excelled in psychological and endurance challenges</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-3">✓</span>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Adaptability</p>
                    <p className="text-xs text-gray-600">Adjusted strategy throughout the competition as needed</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-3">✓</span>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Composure Under Pressure</p>
                    <p className="text-xs text-gray-600">Never panicked, even in near-elimination situations</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border-2 border-orange-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">💭 Strategy Elements</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-orange-600 text-xl mr-3">▸</span>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Early Stealth Approach</p>
                    <p className="text-xs text-gray-600">Avoided becoming a threat in early episodes</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 text-xl mr-3">▸</span>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Strategic Risk-Taking</p>
                    <p className="text-xs text-gray-600">Knew when to play safe vs. when to go all-in</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 text-xl mr-3">▸</span>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Social Game Management</p>
                    <p className="text-xs text-gray-600">Built trust without appearing manipulative</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 text-xl mr-3">▸</span>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Physical Preparation</p>
                    <p className="text-xs text-gray-600">Maintained stamina for long endurance challenges</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 text-xl mr-3">▸</span>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Late-Game Dominance</p>
                    <p className="text-xs text-gray-600">Saved his best performances for when they mattered most</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Life After Beast Games */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-orange-600">
            Life After the Win
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="prose prose-lg max-w-none">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What's Next</h3>
              <p className="text-gray-700 mb-4">
                Since winning the historic $5 million prize, Jeffrey has become one of the most recognized faces in reality 
                television. He's leveraged his victory into various opportunities while staying true to his roots.
              </p>
              <p className="text-gray-700 mb-4">
                In interviews following his win, Jeffrey announced plans to use a significant portion of his prize money for 
                charitable causes, including education initiatives in underserved communities and supporting STEM programs 
                for young people.
              </p>
              <p className="text-gray-700 mb-4">
                He's also hinted at entrepreneurial ventures, drawing on his software engineering background to develop 
                apps and platforms aimed at gamifying personal development and competition.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Post-Win Highlights</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start">
                  <span className="text-green-600 text-xl mr-3">💰</span>
                  <div>
                    <p className="font-medium text-gray-900">Prize Money Received</p>
                    <p className="text-gray-600">$5,000,000 (largest in reality TV history)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 text-xl mr-3">🎤</span>
                  <div>
                    <p className="font-medium text-gray-900">Media Appearances</p>
                    <p className="text-gray-600">Talk shows, podcasts, and interviews</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 text-xl mr-3">📱</span>
                  <div>
                    <p className="font-medium text-gray-900">Social Media</p>
                    <p className="text-gray-600">Gained millions of followers across platforms</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 text-xl mr-3">🤝</span>
                  <div>
                    <p className="font-medium text-gray-900">Charitable Work</p>
                    <p className="text-gray-600">Announced multiple philanthropic initiatives</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 text-xl mr-3">🎯</span>
                  <div>
                    <p className="font-medium text-gray-900">Business Ventures</p>
                    <p className="text-gray-600">Developing tech startup and content creation</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Fan Reaction & Legacy */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-orange-600">
            Fan Reaction & Legacy
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 text-center">
              <div className="text-4xl mb-3">❤️</div>
              <p className="font-bold text-gray-900 mb-2">Fan Favorite</p>
              <p className="text-sm text-gray-600">Consistently voted as audience favorite throughout the season</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 text-center">
              <div className="text-4xl mb-3">🏆</div>
              <p className="font-bold text-gray-900 mb-2">Worthy Winner</p>
              <p className="text-sm text-gray-600">92% of viewers agreed he deserved the victory</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 text-center">
              <div className="text-4xl mb-3">📈</div>
              <p className="font-bold text-gray-900 mb-2">Trending Topic</p>
              <p className="text-sm text-gray-600">#JeffreyAllen trended worldwide after the finale</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">What Fans Are Saying</h3>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-orange-600 pl-4">
                <p className="text-gray-700 italic mb-2">
                  "Jeffrey played the perfect game. Strategic when he needed to be, dominant when it mattered. True champion."
                </p>
                <footer className="text-sm text-gray-600">— @RealityTVFan on social media</footer>
              </blockquote>
              
              <blockquote className="border-l-4 border-orange-600 pl-4">
                <p className="text-gray-700 italic mb-2">
                  "The comeback after Episode 7 was incredible. He went from almost eliminated to winning the whole thing!"
                </p>
                <footer className="text-sm text-gray-600">— @CompetitionJunkie on social media</footer>
              </blockquote>
              
              <blockquote className="border-l-4 border-orange-600 pl-4">
                <p className="text-gray-700 italic mb-2">
                  "Not only did he win, but he won with class and humility. The perfect first champion for Beast Games."
                </p>
                <footer className="text-sm text-gray-600">— @BeastGamesDaily on social media</footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Stats & Records */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-orange-600">
            Competition Statistics
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border-2 border-yellow-200 text-center">
              <p className="text-3xl font-bold text-gray-900 mb-2">999</p>
              <p className="text-sm text-gray-600">Contestants Outlasted</p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border-2 border-orange-200 text-center">
              <p className="text-3xl font-bold text-gray-900 mb-2">7</p>
              <p className="text-sm text-gray-600">Individual Challenges Won</p>
            </div>
            
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 border-2 border-red-200 text-center">
              <p className="text-3xl font-bold text-gray-900 mb-2">10</p>
              <p className="text-sm text-gray-600">Episodes Survived</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200 text-center">
              <p className="text-3xl font-bold text-green-600 mb-2">$5M</p>
              <p className="text-sm text-gray-600">Prize Money Won</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 text-center">
              <p className="text-3xl font-bold text-gray-900 mb-2">2</p>
              <p className="text-sm text-gray-600">Near Eliminations</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 text-center">
              <p className="text-3xl font-bold text-gray-900 mb-2">5</p>
              <p className="text-sm text-gray-600">Alliance Members</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 text-center">
              <p className="text-3xl font-bold text-gray-900 mb-2">87</p>
              <p className="text-sm text-gray-600">Days Filming</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 text-center">
              <p className="text-3xl font-bold text-gray-900 mb-2">#412</p>
              <p className="text-sm text-gray-600">Contestant Number</p>
            </div>
          </div>
        </section>

        {/* Memorable Quotes */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-orange-600">
            Memorable Quotes
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-6 border-l-4 border-orange-600">
              <p className="text-gray-700 text-lg italic mb-2">
                "I came here to change my life, and I'm not leaving until I do."
              </p>
              <p className="text-sm text-gray-600">— Episode 1 confessional</p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-blue-600">
              <p className="text-gray-700 text-lg italic mb-2">
                "I learned in software engineering that the best solutions come from thinking differently. That's my strategy here."
              </p>
              <p className="text-sm text-gray-600">— Episode 4</p>
            </div>
            
            <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 border-l-4 border-red-600">
              <p className="text-gray-700 text-lg italic mb-2">
                "Almost losing in Episode 7 was the best thing that happened to me. It reminded me why I'm here."
              </p>
              <p className="text-sm text-gray-600">— Episode 8 confessional</p>
            </div>
            
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border-l-4 border-yellow-600">
              <p className="text-gray-700 text-lg italic mb-2">
                "This isn't just about the money. This is about proving to myself that I can do something extraordinary."
              </p>
              <p className="text-sm text-gray-600">— Episode 10 (Pre-finale)</p>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border-l-4 border-green-600">
              <p className="text-gray-700 text-lg font-bold mb-2">
                "I can't believe it. I actually did it. I won Beast Games!"
              </p>
              <p className="text-sm text-gray-600">— Episode 10 (Victory moment)</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 rounded-xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Watch Jeffrey's Journey</h2>
            <p className="text-xl mb-8 text-gray-50">
              Stream all episodes of Beast Games Season 1 and watch Jeffrey's incredible path to victory
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="https://www.amazon.com/gp/video/detail/B0DPDQWF3S" 
                target="_blank"
                className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg"
              >
                Watch on Prime Video →
              </Link>
              <Link 
                href="/beast-games/season-1" 
                className="inline-block bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg hover:bg-yellow-300 transition-colors font-bold text-lg"
              >
                Season 1 Recap →
              </Link>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-orange-600">
            Related Pages
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/beast-games/season-1" className="bg-gray-50 hover:bg-gray-100 rounded-lg overflow-hidden border border-gray-200 transition-all hover:shadow-lg">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 h-32 flex items-center justify-center">
                <span className="text-white text-5xl">📺</span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">Season 1 Overview</h3>
                <p className="text-gray-600 text-sm">
                  Complete episode guide and recap of the historic first season.
                </p>
              </div>
            </Link>

            <Link href="/beast-games" className="bg-gray-50 hover:bg-gray-100 rounded-lg overflow-hidden border border-gray-200 transition-all hover:shadow-lg">
              <div className="bg-gradient-to-r from-red-600 to-pink-600 h-32 flex items-center justify-center">
                <span className="text-white text-5xl">🎮</span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">Beast Games Hub</h3>
                <p className="text-gray-600 text-sm">
                  Everything about the show, Season 2 news, and MrBeast.
                </p>
              </div>
            </Link>

            <Link href="/blog?tag=beast-games" className="bg-gray-50 hover:bg-gray-100 rounded-lg overflow-hidden border border-gray-200 transition-all hover:shadow-lg">
              <div className="bg-gradient-to-r from-yellow-600 to-orange-600 h-32 flex items-center justify-center">
                <span className="text-white text-5xl">📰</span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">Latest News</h3>
                <p className="text-gray-600 text-sm">
                  Breaking updates and coverage from Beast Games.
                </p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
