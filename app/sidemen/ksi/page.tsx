import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "KSI (JJ Olatunji) - Sidemen Member Profile | ObjectWire",
  description: "Complete profile of KSI (JJ Olatunji), Sidemen member, professional boxer, musician, and entrepreneur. Latest news, career highlights, and achievements.",
  keywords: ["KSI", "JJ Olatunji", "Sidemen", "YouTube boxer", "Prime Hydration", "UK rapper"],
  alternates: {
    canonical: 'https://www.objectwire.org/sidemen/ksi',
  },
};

export default function KSIPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-900 via-black to-red-900 text-white">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <Link href="/sidemen" className="text-red-300 hover:text-white mb-4 inline-flex items-center gap-2">
            ← Back to Sidemen
          </Link>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <p className="text-red-200 text-sm font-mono tracking-wider mb-4">SIDEMEN MEMBER • BOXER • MUSICIAN</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
                KSI (JJ Olatunji)
              </h1>
              <p className="text-xl text-gray-100 mb-6 leading-relaxed">
                The most successful Sidemen member, <strong className="text-white">KSI</strong> is a professional boxer, 
                chart-topping musician, and co-founder of Prime Hydration. From FIFA videos to selling out arenas, JJ has 
                become one of the UK's biggest entertainment exports.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">24M+</p>
                  <p className="text-sm text-gray-100">Subscribers</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">6-1</p>
                  <p className="text-sm text-gray-100">Boxing Record</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">Multi</p>
                  <p className="text-sm text-gray-100">Platinum Artist</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">2009</p>
                  <p className="text-sm text-gray-100">Started YouTube</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
              <h3 className="font-bold text-lg mb-4 text-white">Quick Facts</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-gray-300">Real Name</dt>
                  <dd className="font-semibold text-white">Olajide Olayinka Williams Olatunji</dd>
                </div>
                <div>
                  <dt className="text-gray-300">Born</dt>
                  <dd className="font-semibold text-white">June 19, 1993</dd>
                </div>
                <div>
                  <dt className="text-gray-300">Nationality</dt>
                  <dd className="font-semibold text-white">British-Nigerian</dd>
                </div>
                <div>
                  <dt className="text-gray-300">Known For</dt>
                  <dd className="font-semibold text-white">Boxing, Music, Prime</dd>
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
              KSI started his YouTube journey in 2009, uploading FIFA gaming videos and commentary. His energetic personality 
              and comedic timing helped him build one of the UK's largest YouTube channels. As a founding member of the Sidemen 
              in 2013, KSI helped establish the group that would become Britain's most successful YouTube collective.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Beyond YouTube, KSI has successfully transitioned into professional boxing, music, and business. His boxing matches 
              against Joe Weller and Logan Paul (twice) broke YouTube records and helped legitimize influencer boxing as a sport. 
              His music career has produced multiple platinum records, and Prime Hydration, co-founded with Logan Paul, has become 
              one of the fastest-growing beverage brands globally.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Boxing Career</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              KSI's boxing journey began with a challenge match against fellow YouTuber Joe Weller in 2018, which he won via TKO. 
              This led to two high-profile fights against Logan Paul—a draw in 2018 and a split-decision victory in 2019. These 
              fights generated millions in revenue and millions more in viewership.
            </p>
            <p className="text-gray-700 leading-relaxed">
              After defeating Logan Paul, KSI continued his boxing career with wins over professional fighters, demonstrating his 
              commitment to the sport. His fights regularly sell out arenas and generate massive pay-per-view numbers, proving that 
              influencer boxing has mainstream appeal.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Music Career</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              As a musician, KSI has released multiple albums and achieved chart success with tracks like "Lamborghini," "Down Like That," 
              and "Holiday." He's collaborated with established artists including Lil Wayne, Rick Ross, and Anne-Marie, bridging the gap 
              between YouTube and mainstream music.
            </p>
            <p className="text-gray-700 leading-relaxed">
              His ability to sell out concert tours and achieve platinum certifications demonstrates that his music career is legitimate, 
              not just a vanity project. KSI has proven that YouTube fame can be a launching pad for success in traditional entertainment industries.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Prime Hydration</h2>
            <p className="text-gray-700 leading-relaxed">
              In 2022, KSI and Logan Paul co-founded Prime Hydration, a sports drink that became a global phenomenon. Despite being former 
              rivals, their partnership created one of the most successful celebrity beverage launches ever. Prime products frequently sell 
              out in stores, and the brand has secured partnerships with major sports organizations including the UFC and Arsenal FC.
            </p>
          </section>

          <div className="border-t border-gray-200 pt-8 mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">More Sidemen Members</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/sidemen/miniminter" className="block p-4 border border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all">
                <h4 className="font-bold text-gray-900 mb-2">Miniminter</h4>
                <p className="text-sm text-gray-600">Simon Minter's profile</p>
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
