import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beast Games - MrBeast's Reality Competition Series | ObjectWire",
  description: "Complete coverage of Beast Games, the groundbreaking reality competition show by MrBeast. Latest news, episodes, contestants, prizes, and behind-the-scenes insights.",
  keywords: ["Beast Games", "MrBeast", "Jimmy Donaldson", "reality competition", "game show", "Amazon Prime Video"],
  alternates: {
    canonical: 'https://www.objectwire.org/beastgames',
  },
};

export default function BeastGamesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-900 via-orange-900 to-yellow-900 text-white">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Main Info */}
            <div className="md:col-span-2">
              <p className="text-orange-200 text-sm font-mono tracking-wider mb-4">REALITY COMPETITION • AMAZON PRIME VIDEO</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
                Beast Games
              </h1>
              <p className="text-xl text-gray-100 mb-6 leading-relaxed">
                The world's largest reality competition show created by <strong className="text-white">MrBeast (Jimmy Donaldson)</strong>, 
                featuring the biggest prizes in television history and pushing the boundaries of entertainment.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">1000+</p>
                  <p className="text-sm text-gray-100">Contestants</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">$5M</p>
                  <p className="text-sm text-gray-100">Grand Prize (S1)</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">10</p>
                  <p className="text-sm text-gray-100">Episodes (S1)</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">2024</p>
                  <p className="text-sm text-gray-100">Premiere Year</p>
                </div>
              </div>
            </div>

            {/* Quick Facts Card */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
              <h3 className="font-bold text-lg mb-4 text-white">Show Details</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-gray-200">Born</dt>
                  <dd className="font-medium text-white">MrBeast (Jimmy Donaldson)</dd>
                </div>
                <div>
                  <dt className="text-gray-200">Platform</dt>
                  <dd className="font-medium text-white">Amazon Prime Video</dd>
                </div>
                <div>
                  <dt className="text-gray-200">Genre</dt>
                  <dd className="font-medium text-white">Reality Competition</dd>
                </div>
                <div>
                  <dt className="text-gray-200">Season 1 Release</dt>
                  <dd className="font-medium text-white">December 19, 2024</dd>
                </div>
                <div>
                  <dt className="text-gray-200">Production Budget</dt>
                  <dd className="font-medium text-white">$100M+ (Season 1)</dd>
                </div>
                <div>
                  <dt className="text-gray-200">Status</dt>
                  <dd className="font-medium text-green-300">Renewed for Season 2</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        
        {/* Latest News Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8 pb-4 border-b-2 border-orange-600">
            <h2 className="text-3xl font-bold text-gray-900">Latest News</h2>
            <Link href="/blog?tag=beast-games" className="text-orange-600 hover:text-orange-700 font-medium">
              View All →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* News Card 1 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-orange-600 h-48 flex items-center justify-center">
                <span className="text-white text-6xl">🎮</span>
              </div>
              <div className="p-6">
                <p className="text-xs text-gray-500 mb-2">January 15, 2026</p>
                <h3 className="font-bold text-lg mb-2">Season 2 Officially Announced</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Amazon Prime Video confirms Beast Games Season 2 with even bigger prizes and challenges.
                </p>
                <Link href="/beast-games/season-2" className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                  Read More →
                </Link>
              </div>
            </div>

            {/* News Card 2 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-red-600 h-48 flex items-center justify-center">
                <span className="text-white text-6xl">🏆</span>
              </div>
              <div className="p-6">
                <p className="text-xs text-gray-500 mb-2">December 30, 2024</p>
                <h3 className="font-bold text-lg mb-2">Season 1 Finale Breaks Records</h3>
                <p className="text-gray-600 text-sm mb-4">
                  The Season 1 finale becomes one of the most-watched reality show finales in streaming history.
                </p>
                <Link href="/blog/beast-games-season-1-finale" className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                  Read More →
                </Link>
              </div>
            </div>

            {/* News Card 3 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-yellow-600 h-48 flex items-center justify-center">
                <span className="text-white text-6xl">💰</span>
              </div>
              <div className="p-6">
                <p className="text-xs text-gray-500 mb-2">December 19, 2024</p>
                <h3 className="font-bold text-lg mb-2">Historic $5M Prize Awarded</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Beast Games awards the largest single prize in reality TV history to Season 1 winner.
                </p>
                <Link href="/blog/beast-games-prize-record" className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-orange-600">
            About Beast Games
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="prose prose-lg max-w-none">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Concept</h3>
              <p className="text-gray-700 mb-4">
                Beast Games is a revolutionary reality competition series that represents MrBeast's leap from YouTube to traditional streaming platforms. The show features over 1,000 contestants competing in increasingly difficult physical and mental challenges for life-changing prizes.
              </p>
              <p className="text-gray-700 mb-4">
                With a production budget exceeding $100 million for its first season, Beast Games set new standards for scale and spectacle in reality television. Each episode eliminates contestants through creative and elaborate challenges that test teamwork, strategy, endurance, and luck.
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Production & Impact</h3>
              <p className="text-gray-700 mb-4">
                Filmed over several months in 2024, Beast Games brought MrBeast's signature high-production-value content to Amazon Prime Video. The show combines elements from classic game shows, reality competitions, and viral YouTube challenges.
              </p>
              <p className="text-gray-700 mb-4">
                The series has been praised for its production quality, innovative challenges, and unprecedented prize money. It marks a significant moment in the evolution of content creators transitioning to mainstream entertainment platforms.
              </p>
            </div>
          </div>
        </section>

        {/* Season Overview */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-orange-600">
            Seasons
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Season 1 */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 border-2 border-orange-200">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Season 1</h3>
                  <p className="text-gray-600">December 19, 2024</p>
                </div>
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Complete
                </span>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Episodes:</span>
                  <span className="text-gray-900 font-bold">10</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Contestants:</span>
                  <span className="text-gray-900 font-bold">1,000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Grand Prize:</span>
                  <span className="text-gray-900 font-bold">$5,000,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Total Prizes:</span>
                  <span className="text-gray-900 font-bold">$14,000,000+</span>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">
                The inaugural season that brought MrBeast's vision to life with record-breaking prizes and challenges that pushed contestants to their limits.
              </p>
              
              <Link 
                href="/blog?tag=beast-games-season-1" 
                className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-medium"
              >
                Season 1 Coverage
              </Link>
            </div>

            {/* Season 2 */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-8 border-2 border-yellow-200">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Season 2</h3>
                  <p className="text-gray-600">Coming 2026</p>
                </div>
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Upcoming
                </span>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Episodes:</span>
                  <span className="text-gray-900 font-bold">TBA</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Contestants:</span>
                  <span className="text-gray-900 font-bold">TBA</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Grand Prize:</span>
                  <span className="text-gray-900 font-bold">TBA</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Status:</span>
                  <span className="text-green-600 font-bold">Confirmed</span>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6">
                Following the massive success of Season 1, Amazon Prime Video has confirmed a second season with promises of even bigger challenges and prizes.
              </p>
              
              <Link 
                href="/beast-games/season-2" 
                className="inline-block bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition-colors font-medium"
              >
                Season 2 Details →
              </Link>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-orange-600">
            What Makes Beast Games Unique
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-orange-400 transition-colors">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Record Prizes</h3>
              <p className="text-gray-700">
                Featuring the largest prizes in reality TV history, with the Season 1 grand prize of $5 million setting a new benchmark for the industry.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-orange-400 transition-colors">
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Epic Scale</h3>
              <p className="text-gray-700">
                Over 1,000 contestants, massive sets, and elaborate challenges that would be impossible on traditional television budgets.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-orange-400 transition-colors">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovative Challenges</h3>
              <p className="text-gray-700">
                Creative challenges that blend physical competition, mental strategy, teamwork, and pure entertainment in unprecedented ways.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-orange-400 transition-colors">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">YouTube DNA</h3>
              <p className="text-gray-700">
                Brings the fast-paced, high-energy style of viral YouTube content to the streaming format with quick cuts and constant excitement.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-orange-400 transition-colors">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Appeal</h3>
              <p className="text-gray-700">
                Leveraging MrBeast's worldwide fanbase of over 250 million subscribers to create instant global buzz and viewership.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-orange-400 transition-colors">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Production Quality</h3>
              <p className="text-gray-700">
                Hollywood-level production values with a $100M+ budget ensuring every episode feels like a blockbuster event.
              </p>
            </div>
          </div>
        </section>

        {/* Behind the Creator */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-orange-600">
            The Creator: MrBeast
          </h2>
          
          <div className="bg-gradient-to-r from-gray-50 to-orange-50 rounded-xl p-8 border border-gray-200">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Jimmy Donaldson (MrBeast)</h3>
                <p className="text-gray-700 mb-4">
                  Jimmy Donaldson, known online as MrBeast, is one of the most successful content creators in internet history. With over 250 million subscribers across his YouTube channels, he has redefined viral content through elaborate challenges, massive giveaways, and philanthropic stunts.
                </p>
                <p className="text-gray-700 mb-4">
                  Beast Games represents MrBeast's transition from digital-first content to mainstream entertainment, partnering with Amazon Prime Video to bring his unique brand of high-stakes competition to a global streaming audience.
                </p>
                <p className="text-gray-700 mb-6">
                  Known for giving away millions of dollars in his YouTube videos, MrBeast has built a reputation for pushing boundaries and creating content at a scale previously unseen on digital platforms.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="https://www.youtube.com/@MrBeast" 
                    target="_blank"
                    className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
                  >
                    YouTube Channel →
                  </Link>
                  <Link 
                    href="/blog?tag=mrbeast" 
                    className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-medium"
                  >
                    MrBeast News →
                  </Link>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h4 className="font-bold text-lg mb-4">Quick Stats</h4>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-gray-500">YouTube Subscribers</dt>
                    <dd className="font-bold text-gray-900">250M+</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Total Video Views</dt>
                    <dd className="font-bold text-gray-900">40B+</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Money Given Away</dt>
                    <dd className="font-bold text-gray-900">$100M+</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Business Ventures</dt>
                    <dd className="font-bold text-gray-900">Feastables, MrBeast Burger</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Age</dt>
                    <dd className="font-bold text-gray-900">27 (Born May 7, 1998)</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* Watch Now CTA */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Watch Beast Games</h2>
            <p className="text-xl mb-8 text-orange-100">
              Stream all episodes exclusively on Amazon Prime Video
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
                href="/beast-games/season-2" 
                className="inline-block bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors font-bold text-lg"
              >
                Season 2 Info →
              </Link>
            </div>
          </div>
        </section>

        {/* Related Coverage */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-orange-600">
            Related Coverage
          </h2>
          
          <div className="grid md:grid-cols-4 gap-4">
            <Link href="/blog?tag=reality-tv" className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg border border-gray-200 transition-colors">
              <p className="font-bold text-gray-900 mb-2">Reality TV News</p>
              <p className="text-sm text-gray-600">Latest updates from the reality television industry</p>
            </Link>
            <Link href="/blog?tag=streaming" className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg border border-gray-200 transition-colors">
              <p className="font-bold text-gray-900 mb-2">Streaming Platforms</p>
              <p className="text-sm text-gray-600">Amazon Prime Video and streaming news</p>
            </Link>
            <Link href="/blog?tag=content-creators" className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg border border-gray-200 transition-colors">
              <p className="font-bold text-gray-900 mb-2">Content Creators</p>
              <p className="text-sm text-gray-600">YouTube stars and digital media personalities</p>
            </Link>
            <Link href="/blog?tag=entertainment" className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg border border-gray-200 transition-colors">
              <p className="font-bold text-gray-900 mb-2">Entertainment</p>
              <p className="text-sm text-gray-600">Broader entertainment industry coverage</p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
