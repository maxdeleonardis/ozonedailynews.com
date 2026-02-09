import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TBJZL (Tobi Brown) - Sidemen Member Profile | ObjectWire",
  description: "Complete profile of TBJZL (Tobi Brown), Sidemen member known for his positive energy and athletic ability. Career highlights and latest news.",
  keywords: ["TBJZL", "Tobi Brown", "Sidemen", "UK YouTuber", "FIFA content"],
  alternates: {
    canonical: 'https://www.objectwire.org/sidemen/tbjzl',
  },
};

export default function TBJZLPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-green-900 via-green-700 to-green-900 text-white">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <Link href="/sidemen" className="text-green-300 hover:text-white mb-4 inline-flex items-center gap-2">
            ← Back to Sidemen
          </Link>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <p className="text-green-200 text-sm font-mono tracking-wider mb-4">SIDEMEN MEMBER • CONTENT CREATOR</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
                TBJZL (Tobi Brown)
              </h1>
              <p className="text-xl text-gray-100 mb-6 leading-relaxed">
                Known for his infectious laugh and positive energy, <strong className="text-white">TBJZL</strong> brings joy to every 
                Sidemen video. Tobi's athletic ability and competitive spirit make him a standout in challenges and charity football matches.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">5M+</p>
                  <p className="text-sm text-gray-100">Subscribers</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">Positive</p>
                  <p className="text-sm text-gray-100">Vibes</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">Athletic</p>
                  <p className="text-sm text-gray-100">Ability</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">2011</p>
                  <p className="text-sm text-gray-100">Started YouTube</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
              <h3 className="font-bold text-lg mb-4 text-white">Quick Facts</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-gray-300">Real Name</dt>
                  <dd className="font-semibold text-white">Tobit John Brown</dd>
                </div>
                <div>
                  <dt className="text-gray-300">Born</dt>
                  <dd className="font-semibold text-white">April 8, 1993</dd>
                </div>
                <div>
                  <dt className="text-gray-300">Nationality</dt>
                  <dd className="font-semibold text-white">British</dd>
                </div>
                <div>
                  <dt className="text-gray-300">Known For</dt>
                  <dd className="font-semibold text-white">Laugh, Energy, Football</dd>
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
              Tobi Brown joined YouTube in 2011, creating FIFA content and gaming videos. His genuine personality and trademark laugh 
              quickly made him a fan favorite. As a Sidemen member since the group's formation, Tobi brings an essential energy and 
              positivity that balances the group's dynamics.
            </p>
            <p className="text-gray-700 leading-relaxed">
              What makes Tobi special is his authentic joy and enthusiasm in every video. Whether he's playing FIFA, participating in 
              challenges, or simply reacting to content, his genuine reactions and infectious laughter create memorable moments. His 
              competitive spirit shines through in sports-related challenges, where his athletic background gives him an edge.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Content Style</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              TBJZL's content focuses primarily on FIFA and football-related videos, though he also creates reaction videos, challenges, 
              and vlogs. His channel showcases his love for football and gaming, with series that highlight his skills in both areas. 
              Tobi's ability to create entertaining content while maintaining a positive, family-friendly atmosphere has helped him build 
              a loyal fanbase.
            </p>
            <p className="text-gray-700 leading-relaxed">
              In Sidemen videos, Tobi is known for being one of the more competitive members, especially in physical challenges and the 
              annual charity football match. His athletic ability often surprises people, and he's considered one of the best footballers 
              in the group.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Impact & Influence</h2>
            <p className="text-gray-700 leading-relaxed">
              Beyond entertainment, Tobi has used his platform to spread positivity and inspire his audience. His consistent good nature 
              and refusal to engage in drama make him a role model for younger viewers. He's also been open about his faith and values, 
              showing that it's possible to be successful on YouTube while staying true to yourself. Tobi's presence in the Sidemen 
              demonstrates that kindness and positivity can coexist with competitive banter and entertainment.
            </p>
          </section>

          <div className="border-t border-gray-200 pt-8 mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">More Sidemen Members</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/sidemen/behzinga" className="block p-4 border border-gray-200 rounded-lg hover:border-orange-400 hover:shadow-md transition-all">
                <h4 className="font-bold text-gray-900 mb-2">Behzinga</h4>
                <p className="text-sm text-gray-600">Ethan Payne's profile</p>
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
