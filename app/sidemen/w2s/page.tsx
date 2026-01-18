import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "W2S (Harry Lewis) - Sidemen Member Profile | ObjectWire",
  description: "Complete profile of W2S (Harry Lewis), Sidemen member known for his chaotic energy and massive individual success. The wildcard of the group.",
  keywords: ["W2S", "Harry Lewis", "Wroetoshaw", "Sidemen", "FIFA", "UK YouTuber"],
};

export default function W2SPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-pink-900 via-pink-700 to-pink-900 text-white">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <Link href="/sidemen" className="text-pink-300 hover:text-white mb-4 inline-flex items-center gap-2">
            ← Back to Sidemen
          </Link>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <p className="text-pink-200 text-sm font-mono tracking-wider mb-4">SIDEMEN MEMBER • CONTENT KING</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
                W2S (Harry Lewis)
              </h1>
              <p className="text-xl text-gray-100 mb-6 leading-relaxed">
                The wildcard of the Sidemen, <strong className="text-white">W2S</strong> (Wroetoshaw) brings chaotic energy and 
                unpredictability to every video. With over 16 million subscribers on his main channel, Harry's individual success rivals 
                even KSI's, making him one of the UK's biggest YouTubers.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">16M+</p>
                  <p className="text-sm text-gray-100">Main Channel</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">Chaotic</p>
                  <p className="text-sm text-gray-100">Energy</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">FIFA</p>
                  <p className="text-sm text-gray-100">Pack Openings</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">2012</p>
                  <p className="text-sm text-gray-100">Started YouTube</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
              <h3 className="font-bold text-lg mb-4 text-white">Quick Facts</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-gray-300">Real Name</dt>
                  <dd className="font-semibold text-white">Harold Christopher George Lewis</dd>
                </div>
                <div>
                  <dt className="text-gray-300">Born</dt>
                  <dd className="font-semibold text-white">November 24, 1996</dd>
                </div>
                <div>
                  <dt className="text-gray-300">Nationality</dt>
                  <dd className="font-semibold text-white">British (Guernsey)</dd>
                </div>
                <div>
                  <dt className="text-gray-300">Known For</dt>
                  <dd className="font-semibold text-white">Chaos, Pack Luck, Energy</dd>
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
              Harry Lewis, better known as W2S or Wroetoshaw, joined YouTube in 2012 and quickly became known for his energetic FIFA 
              content, particularly his pack opening videos. Originally from Guernsey, Harry moved to London to be closer to the other 
              Sidemen members and pursue YouTube full-time. His chaotic personality and unpredictable content style made him stand out 
              in the crowded FIFA YouTube space.
            </p>
            <p className="text-gray-700 leading-relaxed">
              What makes Harry special is his genuine reactions and seemingly supernatural pack luck in FIFA games—his pack opening videos 
              regularly feature incredible pulls that have become legendary in the FIFA community. Beyond FIFA, Harry creates a variety of 
              content including reaction videos, challenges, and collaborations, all characterized by his high-energy style and willingness 
              to do or say anything for entertainment.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Wildcard Personality</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Within the Sidemen, Harry is known as the wildcard—unpredictable, chaotic, and always ready to push boundaries. His tendency 
              to break or throw things when frustrated (especially controllers and headsets) has become part of his brand. This unfiltered, 
              raw energy makes his content feel authentic and exciting, as viewers never quite know what he'll do next.
            </p>
            <p className="text-gray-700 leading-relaxed">
              In Sidemen videos, Harry often provides the most memorable moments through his reactions, competitiveness, and willingness 
              to fully commit to any challenge or bit. Whether he's raging at a game, making self-deprecating jokes, or genuinely 
              celebrating a victory, Harry's authenticity shines through.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Individual Success</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              W2S's main channel has over 16 million subscribers, making him the second most-subscribed Sidemen member after KSI. His 
              individual success demonstrates that his chaotic style has massive appeal beyond just Sidemen viewers. Harry's ability to 
              maintain consistent viewership on both his individual content and Sidemen collaborations shows his versatility as a creator.
            </p>
            <p className="text-gray-700 leading-relaxed">
              His second channel, W2SPlays, adds millions more subscribers to his total, and he remains one of the most consistent uploaders 
              in the Sidemen. Despite his on-camera chaos, Harry's work ethic and understanding of what makes entertaining content have 
              made him one of the UK's most successful YouTubers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Evolution & Maturity</h2>
            <p className="text-gray-700 leading-relaxed">
              While Harry maintains his energetic style, viewers have noticed his gradual maturation over the years. He's become more 
              comfortable opening up about personal topics and has shown different sides of his personality beyond just the chaotic gamer. 
              His relationship with Katie Leach and increased willingness to appear in vlogs and behind-the-scenes content have given fans 
              a more well-rounded view of who Harry is off-camera, while still maintaining the entertaining energy that made him famous.
            </p>
          </section>

          <div className="border-t border-gray-200 pt-8 mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">More Sidemen Members</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/sidemen/ksi" className="block p-4 border border-gray-200 rounded-lg hover:border-red-400 hover:shadow-md transition-all">
                <h4 className="font-bold text-gray-900 mb-2">KSI</h4>
                <p className="text-sm text-gray-600">JJ Olatunji's profile</p>
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
