import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vikkstar123 (Vikram Barn) - Sidemen Member Profile | ObjectWire",
  description: "Complete profile of Vikkstar123 (Vikram Barn), Sidemen member, gaming legend, and entrepreneur. Warzone king and business mogul.",
  keywords: ["Vikkstar123", "Vikram Barn", "Sidemen", "Warzone", "gaming entrepreneur"],
  alternates: {
    canonical: 'https://www.objectwire.org/sidemen/vikkstar',
  },
};

export default function VikkstarPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-yellow-900 via-yellow-700 to-yellow-900 text-white">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <Link href="/sidemen" className="text-yellow-300 hover:text-white mb-4 inline-flex items-center gap-2">
            ← Back to Sidemen
          </Link>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <p className="text-yellow-200 text-sm font-mono tracking-wider mb-4">SIDEMEN MEMBER • GAMING LEGEND</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
                Vikkstar123 (Vikram Barn)
              </h1>
              <p className="text-xl text-gray-100 mb-6 leading-relaxed">
                A gaming genius and business mogul, <strong className="text-white">Vikkstar</strong> dominated Warzone and built a 
                gaming empire. Known for his strategic mind and entrepreneurial ventures, Vikk represents the evolution of gaming content 
                creators into serious business leaders.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">8M+</p>
                  <p className="text-sm text-gray-100">Subscribers</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">Warzone</p>
                  <p className="text-sm text-gray-100">King</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">Business</p>
                  <p className="text-sm text-gray-100">Ventures</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">2010</p>
                  <p className="text-sm text-gray-100">Started YouTube</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
              <h3 className="font-bold text-lg mb-4 text-white">Quick Facts</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-gray-300">Real Name</dt>
                  <dd className="font-semibold text-white">Vikram Singh Barn</dd>
                </div>
                <div>
                  <dt className="text-gray-300">Born</dt>
                  <dd className="font-semibold text-white">August 2, 1995</dd>
                </div>
                <div>
                  <dt className="text-gray-300">Nationality</dt>
                  <dd className="font-semibold text-white">British</dd>
                </div>
                <div>
                  <dt className="text-gray-300">Known For</dt>
                  <dd className="font-semibold text-white">Gaming, Strategy, Business</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <article className="prose prose-lg max-w-none">
          
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Career Overview</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Vikram "Vikkstar123" Barn started his YouTube journey in 2010, focusing on Minecraft and Call of Duty content. His exceptional 
              gaming skills and strategic thinking quickly set him apart from other creators. As a founding Sidemen member, Vikk brought a 
              level of gaming expertise that complemented the group's diverse talents.
            </p>
            <p className="text-gray-700 leading-relaxed">
              What makes Vikkstar special is his ability to dominate in competitive gaming while building successful business ventures. 
              During the Warzone era, Vikk was considered one of the best players in the world, regularly competing in and winning 
              high-stakes tournaments. His strategic mind extends beyond gaming into entrepreneurship, where he's invested in and co-founded 
              multiple successful companies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Warzone Dominance</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When Call of Duty: Warzone launched, Vikkstar became one of the game's most dominant players. His streams and videos showcased 
              not just mechanical skill but exceptional game sense and strategy. Vikk regularly competed in Warzone tournaments, often 
              winning or placing highly against professional players and other top creators.
            </p>
            <p className="text-gray-700 leading-relaxed">
              His Warzone content attracted millions of viewers and demonstrated the evolution of gaming content—combining entertainment 
              with genuine high-level gameplay. Vikkstar's ability to explain his strategies while executing them at the highest level 
              made his content both entertaining and educational.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Business Ventures</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Beyond content creation, Vikkstar has established himself as a serious entrepreneur and investor. He's been involved in 
              various business ventures, including esports organizations, tech startups, and other digital media companies. His business 
              acumen has made him one of the wealthiest Sidemen members.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Vikk represents the new generation of content creators who leverage their platforms and understanding of digital media to 
              build business empires. His success demonstrates that gaming content creators can be taken seriously as businesspeople and 
              investors, not just entertainers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Evolution</h2>
            <p className="text-gray-700 leading-relaxed">
              In recent years, Vikkstar has stepped back slightly from daily content creation to focus more on business ventures and 
              selective content projects. He remains an active Sidemen member and participates in group videos, but his focus has expanded 
              beyond YouTube. This evolution showcases the different paths content creators can take as they mature in their careers—some 
              focusing purely on content, others leveraging their success into broader business opportunities.
            </p>
          </section>

          <div className="border-t border-gray-200 pt-8 mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">More Sidemen Members</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/sidemen/w2s" className="block p-4 border border-gray-200 rounded-lg hover:border-pink-400 hover:shadow-md transition-all">
                <h4 className="font-bold text-gray-900 mb-2">W2S</h4>
                <p className="text-sm text-gray-600">Harry Lewis's profile</p>
              </Link>
              <Link href="/sidemen" className="block p-4 border border-gray-200 rounded-lg hover:border-red-400 hover:shadow-md transition-all">
                <h4 className="font-bold text-gray-900 mb-2">All Sidemen</h4>
                <p className="text-sm text-gray-600">Back to main Sidemen page</p>
              </Link>
            </div>
          </div>

        </article>
      </div>
    </main>
  );
}
