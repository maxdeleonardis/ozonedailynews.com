import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sir Arthur Conan Doyle — Author Profile | ObjectWire",
  description: "Complete profile of Sir Arthur Conan Doyle, creator of Sherlock Holmes. Biography, major works, literary legacy, and influence on detective fiction.",
  keywords: ["Arthur Conan Doyle", "Sherlock Holmes", "author", "detective fiction", "Victorian literature", "Watson"],
  openGraph: {
    type: "profile",
    title: "Sir Arthur Conan Doyle — Author Profile",
    description: "Creator of Sherlock Holmes. Biography, works, and literary legacy.",
  },
};

export default function ConanDoylePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-amber-900 via-stone-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Main Info */}
            <div className="md:col-span-2">
              <p className="text-amber-300 text-sm font-mono tracking-wider mb-4">AUTHOR • PHYSICIAN • SPIRITUALIST</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Sir Arthur Conan Doyle
              </h1>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                British author and physician best known as the creator of <strong>Sherlock Holmes</strong>, 
                the world's most famous fictional detective whose adventures continue to captivate readers 
                over a century later.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold">56</p>
                  <p className="text-sm text-gray-300">Sherlock Holmes Stories</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold">4</p>
                  <p className="text-sm text-gray-300">Holmes Novels</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold">1887</p>
                  <p className="text-sm text-gray-300">First Holmes Story</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold">1902</p>
                  <p className="text-sm text-gray-300">Knighted</p>
                </div>
              </div>
            </div>

            {/* Quick Facts Card */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
              <h3 className="font-bold text-lg mb-4">Quick Facts</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-gray-400">Born</dt>
                  <dd className="font-medium">May 22, 1859</dd>
                  <dd className="text-gray-300">Edinburgh, Scotland</dd>
                </div>
                <div>
                  <dt className="text-gray-400">Died</dt>
                  <dd className="font-medium">July 7, 1930 (age 71)</dd>
                  <dd className="text-gray-300">Crowborough, East Sussex</dd>
                </div>
                <div>
                  <dt className="text-gray-400">Nationality</dt>
                  <dd className="font-medium">British</dd>
                </div>
                <div>
                  <dt className="text-gray-400">Occupation</dt>
                  <dd className="font-medium">Author, Physician</dd>
                </div>
                <div>
                  <dt className="text-gray-400">Notable Works</dt>
                  <dd className="font-medium">Sherlock Holmes, The Lost World</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Main Content Column */}
          <div className="md:col-span-2 space-y-16">
            
            {/* Biography */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
                Biography
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Sir Arthur Ignatius Conan Doyle</strong> (22 May 1859 – 7 July 1930) was a British 
                  writer and physician. He created the character Sherlock Holmes in 1887 for <em>A Study in 
                  Scarlet</em>, the first of four novels and fifty-six short stories about Holmes and 
                  Dr. Watson.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  The Sherlock Holmes stories are considered milestones in the field of crime fiction, and 
                  Holmes himself has become one of the most iconic literary characters of all time. The 
                  character and stories have had a profound influence on mystery writing and detective 
                  fiction as a whole.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Early Life and Education</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Doyle was born on 22 May 1859 at 11 Picardy Place, Edinburgh, Scotland. His father, 
                  Charles Altamont Doyle, was born in England of Irish descent, and his mother, Mary, 
                  was Irish. He was named Arthur after the legendary King Arthur.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  From 1876 to 1881, Doyle studied medicine at the University of Edinburgh Medical School. 
                  While studying, he began writing short stories. His first published story appeared in 
                  1879. He later worked as a ship's doctor on a whaling ship to the Arctic and a voyage 
                  to West Africa.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Creation of Sherlock Holmes</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  In 1886, Doyle wrote the first Sherlock Holmes story, <em>A Study in Scarlet</em>, which 
                  was published in 1887 in Beeton's Christmas Annual. The character was inspired partly by 
                  Dr. Joseph Bell, under whom Doyle had studied at Edinburgh, who was known for his powers 
                  of observation and deductive reasoning.
                </p>

                <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-6">
                  <p className="text-gray-700 italic">
                    "When you have eliminated the impossible, whatever remains, however improbable, 
                    must be the truth."
                  </p>
                  <footer className="text-sm text-gray-500 mt-2">— Sherlock Holmes, <em>The Sign of Four</em></footer>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Later Works and Legacy</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Beyond Sherlock Holmes, Doyle was a prolific writer in other genres. His science fiction 
                  novel <em>The Lost World</em> (1912) introduced Professor Challenger and has been adapted 
                  numerous times for film and television. He also wrote plays, romances, poetry, non-fiction, 
                  and historical novels.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Doyle was knighted in 1902 for his non-fiction work on the Boer War, <em>The War in South 
                  Africa: Its Cause and Conduct</em>. In his later years, he became a passionate advocate 
                  for spiritualism, writing extensively on the subject.
                </p>
              </div>
            </section>

            {/* Major Works */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
                Major Works
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">🔍 Sherlock Holmes Canon</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• A Study in Scarlet (1887)</li>
                    <li>• The Sign of the Four (1890)</li>
                    <li>• The Hound of the Baskervilles (1902)</li>
                    <li>• The Valley of Fear (1915)</li>
                    <li>• 56 Short Stories (1891-1927)</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">🦖 Professor Challenger</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• The Lost World (1912)</li>
                    <li>• The Poison Belt (1913)</li>
                    <li>• The Land of Mist (1926)</li>
                    <li>• The Disintegration Machine (1929)</li>
                    <li>• When the World Screamed (1928)</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">⚔️ Historical Fiction</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Micah Clarke (1889)</li>
                    <li>• The White Company (1891)</li>
                    <li>• Sir Nigel (1906)</li>
                    <li>• The Refugees (1893)</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">📚 Non-Fiction</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• The Great Boer War (1900)</li>
                    <li>• The History of Spiritualism (1926)</li>
                    <li>• Memories and Adventures (1924)</li>
                    <li>• The Crime of the Congo (1909)</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Portrait placeholder */}
            <div className="bg-amber-100 rounded-xl p-8 text-center border border-amber-200">
              <div className="text-8xl mb-4">🎩</div>
              <p className="text-sm text-gray-600">Sir Arthur Conan Doyle</p>
              <p className="text-xs text-gray-500">1859-1930</p>
            </div>

            {/* Related Articles */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Related Articles</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/james-cameron" className="text-blue-600 hover:underline">
                    James Cameron — Filmmaker Profile
                  </Link>
                </li>
                <li>
                  <Link href="/james-cameron/avatar-fire-and-ash" className="text-blue-600 hover:underline">
                    Avatar: Fire and Ash Review
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="text-blue-600 hover:underline">
                    Latest News →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Fun Fact */}
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <h3 className="font-bold text-gray-900 mb-2">💡 Did You Know?</h3>
              <p className="text-sm text-gray-600">
                Doyle initially killed off Sherlock Holmes in "The Final Problem" (1893) but 
                public outcry was so great that he brought the detective back in "The Adventure 
                of the Empty House" (1903).
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
