import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Zerkaa (Josh Bradley) - Sidemen Member Profile | ObjectWire",
  description: "Complete profile of Zerkaa (Josh Bradley), Sidemen member and GTA RP content creator. The 'dad' of the Sidemen group.",
  keywords: ["Zerkaa", "Josh Bradley", "Sidemen", "GTA RP", "UK YouTuber"],
  alternates: {
    canonical: 'https://www.objectwire.org/sidemen/zerkaa',
  },
};

export default function ZerkaaPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-purple-900 via-purple-700 to-purple-900 text-white">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <Link href="/sidemen" className="text-purple-300 hover:text-white mb-4 inline-flex items-center gap-2">
            ← Back to Sidemen
          </Link>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <p className="text-purple-200 text-sm font-mono tracking-wider mb-4">SIDEMEN MEMBER • GTA RP CREATOR</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
                Zerkaa (Josh Bradley)
              </h1>
              <p className="text-xl text-gray-100 mb-6 leading-relaxed">
                Often called the "dad" of the Sidemen, <strong className="text-white">Zerkaa</strong> brings maturity and stability 
                to the group. Known for his GTA RP content and being the voice of reason, Josh has built a dedicated fanbase with 
                his genuine personality and gaming expertise.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">4.7M+</p>
                  <p className="text-sm text-gray-100">Subscribers</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">GTA</p>
                  <p className="text-sm text-gray-100">Main Content</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">Dad</p>
                  <p className="text-sm text-gray-100">Of The Group</p>
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
                  <dd className="font-semibold text-white">Joshua Charlie Joseph Bradley</dd>
                </div>
                <div>
                  <dt className="text-gray-300">Born</dt>
                  <dd className="font-semibold text-white">September 4, 1992</dd>
                </div>
                <div>
                  <dt className="text-gray-300">Nationality</dt>
                  <dd className="font-semibold text-white">British</dd>
                </div>
                <div>
                  <dt className="text-gray-300">Known For</dt>
                  <dd className="font-semibold text-white">GTA RP, Maturity, Sidemen</dd>
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
              Josh Bradley, known online as Zerkaa, began his YouTube career in 2010 with gaming content. As one of the founding 
              members of the Sidemen, Josh has been crucial to the group's stability and longevity. His calm demeanor and mature 
              approach have earned him the nickname "dad of the Sidemen," as he often plays mediator in group dynamics.
            </p>
            <p className="text-gray-700 leading-relaxed">
              While Josh may not have the highest subscriber count among the Sidemen, his influence within the group is undeniable. 
              He's known for his business acumen and has been involved in many of the Sidemen's entrepreneurial ventures. His content 
              focuses primarily on GTA RP (roleplay), where he's built a dedicated community around his character interactions and storytelling.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">GTA RP Content</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Zerkaa has become one of the most prominent GTA RP content creators on YouTube. His roleplay streams and videos showcase 
              his creativity and improvisational skills as he inhabits various characters in the GTA world. This content has attracted 
              a dedicated fanbase that appreciates the narrative-driven gameplay and character development.
            </p>
            <p className="text-gray-700 leading-relaxed">
              His GTA RP series has run for years, building complex storylines and relationships with other roleplayers in the community. 
              This consistent, long-form content demonstrates Josh's commitment to quality entertainment and his ability to keep audiences 
              engaged over extended periods.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Role in the Sidemen</h2>
            <p className="text-gray-700 leading-relaxed">
              Within the Sidemen, Josh often serves as the voice of reason and mediator. His maturity and level-headedness balance out 
              the more chaotic personalities in the group. Despite this "dad" persona, Josh participates fully in all Sidemen challenges 
              and isn't afraid to be competitive or engage in banter with his friends. His relationship with Freya, whom he's engaged to, 
              is often referenced in Sidemen videos and adds another dimension to the group's dynamics.
            </p>
          </section>

          <div className="border-t border-gray-200 pt-8 mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">More Sidemen Members</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/sidemen/tbjzl" className="block p-4 border border-gray-200 rounded-lg hover:border-green-400 hover:shadow-md transition-all">
                <h4 className="font-bold text-gray-900 mb-2">TBJZL</h4>
                <p className="text-sm text-gray-600">Tobi Brown's profile</p>
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
