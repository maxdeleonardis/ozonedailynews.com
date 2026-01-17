import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Miniminter (Simon Minter) - Sidemen Member Profile | ObjectWire",
  description: "Complete profile of Miniminter (Simon Minter), Sidemen member and FIFA content creator. Career highlights, achievements, and latest news.",
  keywords: ["Miniminter", "Simon Minter", "Sidemen", "FIFA YouTuber", "UK content creator"],
};

export default function MiniminterPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <Link href="/sidemen" className="text-blue-300 hover:text-white mb-4 inline-flex items-center gap-2">
            ← Back to Sidemen
          </Link>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <p className="text-blue-200 text-sm font-mono tracking-wider mb-4">SIDEMEN MEMBER • CONTENT CREATOR</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
                Miniminter (Simon Minter)
              </h1>
              <p className="text-xl text-gray-100 mb-6 leading-relaxed">
                Known for his consistency and FIFA expertise, <strong className="text-white">Miniminter</strong> has been a cornerstone 
                of the Sidemen since day one. His dedication to daily uploads and genuine personality have earned him over 10 million 
                loyal subscribers.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">10M+</p>
                  <p className="text-sm text-gray-100">Subscribers</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">Daily</p>
                  <p className="text-sm text-gray-100">Uploads</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">FIFA</p>
                  <p className="text-sm text-gray-100">Main Content</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">2008</p>
                  <p className="text-sm text-gray-100">Started YouTube</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
              <h3 className="font-bold text-lg mb-4 text-white">Quick Facts</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-gray-300">Real Name</dt>
                  <dd className="font-semibold text-white">Simon Edward Minter</dd>
                </div>
                <div>
                  <dt className="text-gray-300">Born</dt>
                  <dd className="font-semibold text-white">September 7, 1992</dd>
                </div>
                <div>
                  <dt className="text-gray-300">Nationality</dt>
                  <dd className="font-semibold text-white">British</dd>
                </div>
                <div>
                  <dt className="text-gray-300">Known For</dt>
                  <dd className="font-semibold text-white">FIFA, Consistency, Sidemen</dd>
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
              Simon Minter started his YouTube journey in 2008, initially uploading FIFA content that showcased his gaming skills 
              and entertaining commentary. His channel name "Miniminter" comes from his surname and his relatively short stature 
              compared to his friends. As one of the original Sidemen members, Simon has been instrumental in the group's success.
            </p>
            <p className="text-gray-700 leading-relaxed">
              What sets Miniminter apart is his incredible work ethic—he's known for uploading videos nearly every single day, 
              maintaining this schedule for years. His consistency has built a loyal fanbase that knows they can rely on him for 
              daily entertainment. Simon's chemistry with the other Sidemen members, particularly his close friendship with JJ (KSI), 
              creates some of the group's most entertaining moments.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Content Style</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Simon's content primarily focuses on FIFA, where he creates various series including pack openings, squad builders, 
              and Ultimate Team challenges. He's also known for his reaction videos, Reddit content, and collaborative videos with 
              other Sidemen members. His approachable personality and genuine reactions make his content relatable to viewers.
            </p>
            <p className="text-gray-700 leading-relaxed">
              In Sidemen videos, Simon often plays the role of the level-headed member, though he's not afraid to engage in banter 
              and competitive challenges. His athletic ability shines in the Sidemen Charity Football Matches, where he's considered 
              one of the better players in the group.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Personal Life & Relationships</h2>
            <p className="text-gray-700 leading-relaxed">
              Simon is in a long-term relationship with Talia Mar, a fellow content creator and singer. Their relationship is often 
              featured in vlogs and social media content, and they're known as one of the YouTube community's favorite couples. Simon's 
              openness about his personal life has helped fans connect with him on a deeper level while still maintaining appropriate 
              boundaries.
            </p>
          </section>

          <div className="border-t border-gray-200 pt-8 mt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">More Sidemen Members</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/sidemen/zerkaa" className="block p-4 border border-gray-200 rounded-lg hover:border-purple-400 hover:shadow-md transition-all">
                <h4 className="font-bold text-gray-900 mb-2">Zerkaa</h4>
                <p className="text-sm text-gray-600">Josh Bradley's profile</p>
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
