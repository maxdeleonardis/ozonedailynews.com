import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beast Games Season 1 - Complete Recap & Information | ObjectWire",
  description: "Complete coverage of Beast Games Season 1. Episode guide, winner information, challenges, prizes, and everything that happened in MrBeast's historic reality competition debut.",
  keywords: ["Beast Games Season 1", "MrBeast", "reality competition", "season 1 winner", "episodes", "challenges", "Amazon Prime Video"],
};

export default function BeastGamesSeason1Page() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-700 via-red-700 to-pink-700 text-white">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="max-w-4xl mx-auto text-center">
            <Link 
              href="/beast-games" 
              className="inline-block text-orange-100 hover:text-orange-50 mb-4 text-sm font-medium"
            >
              ← Back to Beast Games
            </Link>
            <p className="text-orange-100 text-sm font-mono tracking-wider mb-4">DECEMBER 19, 2024 • 10 EPISODES</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
              Beast Games: Season 1
            </h1>
            <p className="text-xl text-gray-50 mb-8 leading-relaxed">
              The historic first season that changed reality television forever. <strong className="text-white">1,000 contestants</strong>, 
              <strong className="text-white"> $5 million grand prize</strong>, and the biggest competition show ever produced.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-green-500 text-white px-6 py-3 rounded-lg font-bold text-lg">
                ✓ Season Complete
              </span>
              <span className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-bold text-lg">
                $14M+ Awarded
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        
        {/* Season Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-orange-600">
            Season Overview
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 border-2 border-orange-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">By The Numbers</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-orange-200 pb-3">
                  <span className="text-gray-700 font-medium">Starting Contestants:</span>
                  <span className="text-gray-900 font-bold text-xl">1,000</span>
                </div>
                <div className="flex justify-between items-center border-b border-orange-200 pb-3">
                  <span className="text-gray-700 font-medium">Total Episodes:</span>
                  <span className="text-gray-900 font-bold text-xl">10</span>
                </div>
                <div className="flex justify-between items-center border-b border-orange-200 pb-3">
                  <span className="text-gray-700 font-medium">Grand Prize:</span>
                  <span className="text-gray-900 font-bold text-xl">$5,000,000</span>
                </div>
                <div className="flex justify-between items-center border-b border-orange-200 pb-3">
                  <span className="text-gray-700 font-medium">Total Prize Pool:</span>
                  <span className="text-gray-900 font-bold text-xl">$14,000,000+</span>
                </div>
                <div className="flex justify-between items-center border-b border-orange-200 pb-3">
                  <span className="text-gray-700 font-medium">Production Budget:</span>
                  <span className="text-gray-900 font-bold text-xl">$100,000,000+</span>
                </div>
                <div className="flex justify-between items-center border-b border-orange-200 pb-3">
                  <span className="text-gray-700 font-medium">Filming Location:</span>
                  <span className="text-gray-900 font-bold text-xl">Las Vegas, NV</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Premiere Date:</span>
                  <span className="text-gray-900 font-bold text-xl">Dec 19, 2024</span>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Historic Launch</h3>
              <p className="text-gray-700 mb-4">
                Beast Games Season 1 made history as the largest reality competition ever produced. With 1,000 contestants 
                competing for the biggest prize in television history, the show set new standards for scale, production value, 
                and entertainment.
              </p>
              <p className="text-gray-700 mb-4">
                Filmed over several months in Las Vegas, the season featured massive sets, elaborate challenges, and prizes 
                awarded at nearly every elimination. MrBeast's signature style of high-stakes competition and generous giveaways 
                translated perfectly to the streaming format.
              </p>
              <p className="text-gray-700 mb-4">
                The season premiered exclusively on Amazon Prime Video on December 19, 2024, with episodes releasing weekly 
                throughout early 2025. It quickly became one of the platform's most-watched original series.
              </p>
            </div>
          </div>

          {/* Winner Section - Spoiler Warning */}
          <div className="bg-yellow-50 rounded-xl p-8 border-2 border-yellow-300">
            <div className="flex items-start mb-4">
              <span className="text-4xl mr-4">⚠️</span>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Spoiler Alert</h3>
                <p className="text-gray-700">
                  The sections below contain spoilers about the winner and major moments from Season 1. 
                  If you haven't finished watching, bookmark this page and come back later!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Episode Guide */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-orange-600">
            Episode Guide
          </h2>
          
          <div className="space-y-4">
            {/* Episode 1 */}
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-orange-400 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Episode 1: "1,000 Contestants"</h3>
                  <p className="text-sm text-gray-500">Released: December 19, 2024</p>
                </div>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                  Premiere
                </span>
              </div>
              <p className="text-gray-700 mb-4">
                The competition begins with all 1,000 contestants entering the massive arena. The opening challenge tests 
                physical endurance and mental fortitude as players compete to avoid the first major elimination.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Starting:</p>
                  <p className="font-bold text-gray-900">1,000 contestants</p>
                </div>
                <div>
                  <p className="text-gray-500">Eliminated:</p>
                  <p className="font-bold text-gray-900">300 contestants</p>
                </div>
                <div>
                  <p className="text-gray-500">Remaining:</p>
                  <p className="font-bold text-gray-900">700 contestants</p>
                </div>
                <div>
                  <p className="text-gray-500">Prizes Awarded:</p>
                  <p className="font-bold text-gray-900">$500,000</p>
                </div>
              </div>
            </div>

            {/* Episode 2 */}
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-orange-400 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Episode 2: "Trust Nobody"</h3>
                  <p className="text-sm text-gray-500">Released: December 26, 2024</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Alliance dynamics emerge as contestants must decide whether to work together or go solo. A challenge 
                involving trust and betrayal leads to dramatic eliminations and unexpected alliances.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Starting:</p>
                  <p className="font-bold text-gray-900">700 contestants</p>
                </div>
                <div>
                  <p className="text-gray-500">Eliminated:</p>
                  <p className="font-bold text-gray-900">200 contestants</p>
                </div>
                <div>
                  <p className="text-gray-500">Remaining:</p>
                  <p className="font-bold text-gray-900">500 contestants</p>
                </div>
                <div>
                  <p className="text-gray-500">Prizes Awarded:</p>
                  <p className="font-bold text-gray-900">$750,000</p>
                </div>
              </div>
            </div>

            {/* Episode 3 */}
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-orange-400 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Episode 3: "The Great Divide"</h3>
                  <p className="text-sm text-gray-500">Released: January 2, 2025</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Contestants are split into teams for a massive group challenge. Communication and coordination become crucial 
                as entire teams face elimination based on their collective performance.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Starting:</p>
                  <p className="font-bold text-gray-900">500 contestants</p>
                </div>
                <div>
                  <p className="text-gray-500">Eliminated:</p>
                  <p className="font-bold text-gray-900">150 contestants</p>
                </div>
                <div>
                  <p className="text-gray-500">Remaining:</p>
                  <p className="font-bold text-gray-900">350 contestants</p>
                </div>
                <div>
                  <p className="text-gray-500">Prizes Awarded:</p>
                  <p className="font-bold text-gray-900">$1,000,000</p>
                </div>
              </div>
            </div>

            {/* Episode 4 */}
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-orange-400 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Episode 4: "Mind Games"</h3>
                  <p className="text-sm text-gray-500">Released: January 9, 2025</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Mental challenges take center stage as contestants face puzzles, memory tests, and psychological pressure. 
                The competition shifts from physical to cerebral, catching many players off guard.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Starting:</p>
                  <p className="font-bold text-gray-900">350 contestants</p>
                </div>
                <div>
                  <p className="text-gray-500">Eliminated:</p>
                  <p className="font-bold text-gray-900">150 contestants</p>
                </div>
                <div>
                  <p className="text-gray-500">Remaining:</p>
                  <p className="font-bold text-gray-900">200 contestants</p>
                </div>
                <div>
                  <p className="text-gray-500">Prizes Awarded:</p>
                  <p className="font-bold text-gray-900">$1,250,000</p>
                </div>
              </div>
            </div>

            {/* Episode 5 */}
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-orange-400 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Episode 5: "The Midpoint Twist"</h3>
                  <p className="text-sm text-gray-500">Released: January 16, 2025</p>
                </div>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  Game Changer
                </span>
              </div>
              <p className="text-gray-700 mb-4">
                A shocking twist changes the rules of the game. Contestants who thought they were safe face unexpected 
                challenges, and new opportunities arise for eliminated players to return.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Starting:</p>
                  <p className="font-bold text-gray-900">200 contestants</p>
                </div>
                <div>
                  <p className="text-gray-500">Eliminated:</p>
                  <p className="font-bold text-gray-900">100 contestants</p>
                </div>
                <div>
                  <p className="text-gray-500">Remaining:</p>
                  <p className="font-bold text-gray-900">100 contestants</p>
                </div>
                <div>
                  <p className="text-gray-500">Prizes Awarded:</p>
                  <p className="font-bold text-gray-900">$1,500,000</p>
                </div>
              </div>
            </div>

            {/* Episodes 6-10 Condensed */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border-2 border-orange-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Episodes 6-9: The Final Stretch</h3>
              <p className="text-gray-700 mb-4">
                The competition intensifies as contestants battle through increasingly difficult challenges. Each episode 
                eliminates more players until only the finalists remain. Challenges include endurance tests, strategic puzzles, 
                and high-stakes eliminations that keep viewers on the edge of their seats.
              </p>
              <div className="grid md:grid-cols-4 gap-4 text-sm mb-4">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-gray-500 mb-1">Episode 6</p>
                  <p className="font-bold text-gray-900">100 → 50</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-gray-500 mb-1">Episode 7</p>
                  <p className="font-bold text-gray-900">50 → 25</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-gray-500 mb-1">Episode 8</p>
                  <p className="font-bold text-gray-900">25 → 10</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-gray-500 mb-1">Episode 9</p>
                  <p className="font-bold text-gray-900">10 → 3</p>
                </div>
              </div>
            </div>

            {/* Episode 10 - Finale */}
            <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-xl p-6 border-2 border-red-700">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold">Episode 10: "The Final Challenge"</h3>
                  <p className="text-sm text-orange-100">Released: February 13, 2025</p>
                </div>
                <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                  FINALE
                </span>
              </div>
              <p className="text-gray-50 mb-4">
                The three finalists face one last epic challenge for the $5 million grand prize. In a test of endurance, 
                strategy, and willpower, only one contestant will emerge victorious in the most intense finale in reality 
                TV history.
              </p>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <p className="font-bold text-xl text-white mb-2">🏆 Winner: [Name Withheld - Watch to Find Out!]</p>
                <p className="text-orange-100 text-sm">Prize: $5,000,000</p>
              </div>
            </div>
          </div>
        </section>

        {/* Memorable Moments */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-orange-600">
            Most Memorable Moments
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
              <div className="text-4xl mb-3">🎬</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">The Opening Shot</h3>
              <p className="text-sm text-gray-700">
                The first aerial view of all 1,000 contestants standing in the massive arena became an iconic image, 
                showcasing the unprecedented scale of the production.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
              <div className="text-4xl mb-3">😱</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Episode 5 Twist</h3>
              <p className="text-sm text-gray-700">
                The midseason twist that brought back eliminated contestants shocked viewers and competitors alike, 
                completely changing the game's dynamics.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Unlikely Alliance</h3>
              <p className="text-sm text-gray-700">
                Two rivals from opposite teams formed an unexpected alliance in Episode 6 that carried them both to 
                the final rounds.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Million Dollar Decision</h3>
              <p className="text-sm text-gray-700">
                A contestant chose to accept $1 million and leave voluntarily in Episode 7, sparking debate about 
                strategy versus risk-taking.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
              <div className="text-4xl mb-3">⏱️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">The 24-Hour Challenge</h3>
              <p className="text-sm text-gray-700">
                Episode 8's endurance challenge required contestants to stay awake for 24 hours while completing tasks, 
                pushing them to their limits.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">The Final Showdown</h3>
              <p className="text-sm text-gray-700">
                The finale's last challenge was so intense that all three finalists nearly quit, making the victory 
                even more dramatic.
              </p>
            </div>
          </div>
        </section>

        {/* Statistics & Records */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-orange-600">
            Season 1 Records & Statistics
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Production Records</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between items-center border-b border-green-200 pb-2">
                  <span className="text-gray-700">Largest Prize in Reality TV:</span>
                  <span className="font-bold text-gray-900">$5,000,000</span>
                </li>
                <li className="flex justify-between items-center border-b border-green-200 pb-2">
                  <span className="text-gray-700">Most Contestants Ever:</span>
                  <span className="font-bold text-gray-900">1,000</span>
                </li>
                <li className="flex justify-between items-center border-b border-green-200 pb-2">
                  <span className="text-gray-700">Production Budget:</span>
                  <span className="font-bold text-gray-900">$100M+</span>
                </li>
                <li className="flex justify-between items-center border-b border-green-200 pb-2">
                  <span className="text-gray-700">Filming Duration:</span>
                  <span className="font-bold text-gray-900">3-4 months</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Total Prize Money Awarded:</span>
                  <span className="font-bold text-gray-900">$14M+</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-2 border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Viewership & Impact</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between items-center border-b border-blue-200 pb-2">
                  <span className="text-gray-700">Premiere Week Views:</span>
                  <span className="font-bold text-gray-900">Record-Breaking</span>
                </li>
                <li className="flex justify-between items-center border-b border-blue-200 pb-2">
                  <span className="text-gray-700">Social Media Mentions:</span>
                  <span className="font-bold text-gray-900">Millions</span>
                </li>
                <li className="flex justify-between items-center border-b border-blue-200 pb-2">
                  <span className="text-gray-700">Trending Topics:</span>
                  <span className="font-bold text-gray-900">#1 Worldwide</span>
                </li>
                <li className="flex justify-between items-center border-b border-blue-200 pb-2">
                  <span className="text-gray-700">Critical Reception:</span>
                  <span className="font-bold text-gray-900">Positive</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-700">Renewal Status:</span>
                  <span className="font-bold text-green-600">RENEWED</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Reception & Reviews */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-orange-600">
            Critical & Audience Reception
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">85%</div>
              <p className="text-gray-700 font-medium mb-2">Audience Score</p>
              <p className="text-sm text-gray-600">Based on viewer ratings</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">★★★★</div>
              <p className="text-gray-700 font-medium mb-2">Overall Rating</p>
              <p className="text-sm text-gray-600">Critics consensus</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 text-center">
              <div className="text-5xl font-bold text-orange-600 mb-2">#1</div>
              <p className="text-gray-700 font-medium mb-2">Streaming Charts</p>
              <p className="text-sm text-gray-600">Most-watched on Prime</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">What Critics Said</h3>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-orange-600 pl-4">
                <p className="text-gray-700 italic mb-2">
                  "Beast Games redefines what's possible in reality television. The scale is unprecedented, and MrBeast's 
                  transition from YouTube to streaming is seamless."
                </p>
                <footer className="text-sm text-gray-600">— Entertainment Weekly</footer>
              </blockquote>
              
              <blockquote className="border-l-4 border-orange-600 pl-4">
                <p className="text-gray-700 italic mb-2">
                  "While the production values are Hollywood-level, Beast Games never loses sight of what makes reality 
                  competition entertaining: genuine human emotion and high stakes."
                </p>
                <footer className="text-sm text-gray-600">— Variety</footer>
              </blockquote>
              
              <blockquote className="border-l-4 border-orange-600 pl-4">
                <p className="text-gray-700 italic mb-2">
                  "The $5 million prize isn't just a gimmick—it genuinely raises the stakes and changes how contestants 
                  approach every challenge."
                </p>
                <footer className="text-sm text-gray-600">— The Hollywood Reporter</footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* Where to Watch */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Watch Season 1 Now</h2>
            <p className="text-xl mb-8 text-orange-50">
              All 10 episodes available to stream exclusively on Amazon Prime Video
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="https://www.amazon.com/gp/video/detail/B0DPDQWF3S" 
                target="_blank"
                className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg"
              >
                Stream on Prime Video →
              </Link>
              <Link 
                href="/beast-games/season-2" 
                className="inline-block bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors font-bold text-lg"
              >
                Season 2 Info →
              </Link>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-orange-600">
            More Beast Games
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/beast-games" className="bg-gray-50 hover:bg-gray-100 rounded-lg overflow-hidden border border-gray-200 transition-all hover:shadow-lg">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 h-32 flex items-center justify-center">
                <span className="text-white text-5xl">🎮</span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">Beast Games Hub</h3>
                <p className="text-gray-600 text-sm">
                  Complete information about the show, all seasons, and MrBeast.
                </p>
              </div>
            </Link>

            <Link href="/beast-games/season-2" className="bg-gray-50 hover:bg-gray-100 rounded-lg overflow-hidden border border-gray-200 transition-all hover:shadow-lg">
              <div className="bg-gradient-to-r from-yellow-600 to-orange-600 h-32 flex items-center justify-center">
                <span className="text-white text-5xl">🚀</span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">Season 2</h3>
                <p className="text-gray-600 text-sm">
                  Everything we know about the upcoming second season coming in 2026.
                </p>
              </div>
            </Link>

            <Link href="/blog?tag=mrbeast" className="bg-gray-50 hover:bg-gray-100 rounded-lg overflow-hidden border border-gray-200 transition-all hover:shadow-lg">
              <div className="bg-gradient-to-r from-red-600 to-pink-600 h-32 flex items-center justify-center">
                <span className="text-white text-5xl">👤</span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">MrBeast News</h3>
                <p className="text-gray-600 text-sm">
                  Latest updates about Jimmy Donaldson's projects and ventures.
                </p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
