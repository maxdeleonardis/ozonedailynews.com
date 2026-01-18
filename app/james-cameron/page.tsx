import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "James Cameron - News, Films & Biography | ObjectWire",
  description: "Complete coverage of James Cameron: director of Avatar, Titanic, and The Terminator. Latest news, filmography, box office records, and deep-sea exploration achievements.",
  keywords: ["James Cameron", "Avatar director", "Titanic movie", "filmmaker", "deep-sea explorer", "highest-grossing films"],
};

export default function JamesCameronPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Main Info */}
            <div className="md:col-span-2">
              <p className="text-blue-300 text-sm font-mono tracking-wider mb-4">FILMMAKER • EXPLORER • INNOVATOR</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                James Cameron
              </h1>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Canadian filmmaker and deep-sea explorer whose films have grossed over <strong>$10 billion worldwide</strong>, 
                making him the second-highest-grossing film director of all time.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold">3</p>
                  <p className="text-sm text-gray-300">Academy Awards</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold">$10B+</p>
                  <p className="text-sm text-gray-300">Box Office Total</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold">4</p>
                  <p className="text-sm text-gray-300">$2B+ Films</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold">#1</p>
                  <p className="text-sm text-gray-300">Avatar (All-Time)</p>
                </div>
              </div>
            </div>

            {/* Quick Facts Card */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
              <h3 className="font-bold text-lg mb-4">Quick Facts</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-gray-400">Born</dt>
                  <dd className="font-medium">August 16, 1954 (age 71)</dd>
                  <dd className="text-gray-300">Kapuskasing, Ontario, Canada</dd>
                </div>
                <div>
                  <dt className="text-gray-400">Nationality</dt>
                  <dd className="font-medium">Canadian</dd>
                </div>
                <div>
                  <dt className="text-gray-400">Occupation</dt>
                  <dd className="font-medium">Film Director, Producer, Screenwriter</dd>
                </div>
                <div>
                  <dt className="text-gray-400">Years Active</dt>
                  <dd className="font-medium">1978–present</dd>
                </div>
                <div>
                  <dt className="text-gray-400">Notable Works</dt>
                  <dd className="font-medium">Avatar, Titanic, The Terminator, Aliens</dd>
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
          <div className="flex items-center justify-between mb-8 pb-4 border-b-2 border-blue-600">
            <h2 className="text-3xl font-bold text-gray-900">Latest News</h2>
            <Link href="/blog?tag=james-cameron" className="text-blue-600 hover:text-blue-700 font-medium">
              View All →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Placeholder news cards */}
            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-blue-600 h-48 flex items-center justify-center">
                <span className="text-white text-6xl">🎬</span>
              </div>
              <div className="p-6">
                <p className="text-xs text-gray-500 mb-2">Latest Update</p>
                <h3 className="font-bold text-lg mb-2">Avatar 3 Production Update</h3>
                <p className="text-gray-600 text-sm mb-4">
                  James Cameron provides update on Avatar 3 production schedule and visual effects innovations.
                </p>
                <Link href="/blog" className="text-blue-600 font-medium text-sm hover:underline">
                  Read More →
                </Link>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-indigo-600 h-48 flex items-center justify-center">
                <span className="text-white text-6xl">🌊</span>
              </div>
              <div className="p-6">
                <p className="text-xs text-gray-500 mb-2">Deep-Sea Exploration</p>
                <h3 className="font-bold text-lg mb-2">Ocean Conservation Initiative</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Cameron's latest environmental documentary explores deep-ocean ecosystems and conservation.
                </p>
                <Link href="/blog" className="text-blue-600 font-medium text-sm hover:underline">
                  Read More →
                </Link>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-purple-600 h-48 flex items-center justify-center">
                <span className="text-white text-6xl">🏆</span>
              </div>
              <div className="p-6">
                <p className="text-xs text-gray-500 mb-2">Industry Recognition</p>
                <h3 className="font-bold text-lg mb-2">Career Achievement Honored</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Film industry honors Cameron's contributions to cinema technology and storytelling.
                </p>
                <Link href="/blog" className="text-blue-600 font-medium text-sm hover:underline">
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </section>

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
                  <strong>James Francis Cameron</strong> (born August 16, 1954) is a Canadian filmmaker and deep-sea 
                  explorer who has become a major figure in the post-New Hollywood era. His films combine cutting-edge 
                  technology with classical filmmaking techniques and have grossed over $10 billion worldwide, making 
                  him the second-highest-grossing film director of all time.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Early Life</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Born in Kapuskasing, Ontario, to Philip Cameron (an electrical engineer) and Shirley Lowe (an artist 
                  and nurse), Cameron is the first of five children. His paternal great-great-great-grandfather emigrated 
                  from Balquhidder, Scotland, in 1825. At age 17, Cameron and his family moved from Chippawa, Ontario, 
                  to Brea, California.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  After high school, Cameron enrolled at Fullerton College in 1973 to study physics before switching 
                  to English. He left college in 1974 and worked odd jobs, including as a truck driver and janitor. 
                  During this period, he learned about special effects by studying film technology at the University 
                  of Southern California library.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Breakthrough: The Terminator (1984)</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  After seeing <em>Star Wars</em> in 1977, Cameron quit his job as a truck driver to enter the film 
                  industry. His career began in 1978 with the short film <em>Xenogenesis</em>, followed by work as 
                  a production assistant, miniature model maker, and visual effects director.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Inspired by <em>Halloween</em> and a nightmare about an invincible robot assassin, Cameron wrote 
                  <em>The Terminator</em>. He sold the script for $1 to Gale Anne Hurd on the condition that he 
                  direct it. Starring Arnold Schwarzenegger, the film exceeded expectations and earned over $78 million 
                  worldwide, launching both their careers.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
                  <p className="text-gray-700 italic">
                    "Cameron laces the action with ironic jokes, but never lets up on hinting that the terror may 
                    strike at any moment." — BBC's George Perry
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Mastering the Craft: Aliens to The Abyss</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Cameron directed <em>Aliens</em> (1986), the sequel to Ridley Scott's <em>Alien</em>, earning 
                  over $130 million and nominations for seven Academy Awards. The film won for Best Sound Editing 
                  and Best Visual Effects, with Sigourney Weaver making the cover of <em>Time</em> magazine.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <em>The Abyss</em> (1989) showcased Cameron's ambition and perfectionism. Based on an idea from 
                  his high school years, the film about oil-rig workers discovering intelligent ocean life was shot 
                  in massive water tanks. Despite the physically and mentally exhausting production, the film earned 
                  $90 million and won the Academy Award for Best Visual Effects.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Technological Revolution: Terminator 2</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <em>Terminator 2: Judgment Day</em> (1991) became one of the most expensive films ever made at 
                  $94 million. The groundbreaking use of CGI for the shape-shifting T-1000 villain (Robert Patrick) 
                  revolutionized visual effects. The film earned over $300 million worldwide and won four Academy 
                  Awards: Best Makeup, Sound Mixing, Sound Editing, and Visual Effects.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Epic Achievement: Titanic (1997)</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Cameron's most ambitious project, <em>Titanic</em>, had a production budget of $200 million—the 
                  most expensive film ever made at the time. Starting in 1995, Cameron took several dives to the 
                  bottom of the Atlantic Ocean to capture footage of the real wreck. A full-scale replica of the 
                  ship was built in Rosarito Beach, Mexico.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Despite making headlines for being over-budget and behind schedule, <em>Titanic</em> became a 
                  cultural phenomenon. The romance between Leonardo DiCaprio and Kate Winslet captivated audiences 
                  worldwide, and the film earned over $2.2 billion, becoming the highest-grossing film of all time 
                  (a record it held until Cameron's own <em>Avatar</em> surpassed it).
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <em>Titanic</em> won 11 Academy Awards, including Best Picture, Best Director, and Best Film 
                  Editing—tying the record for most Oscars won by a single film.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Avatar Era (2009–Present)</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  After a 12-year hiatus from feature films, Cameron returned with <em>Avatar</em> (2009), a 
                  science fiction epic set on the alien world of Pandora. The film pioneered new 3D filming 
                  technology and performance capture techniques, creating a fully immersive alien world.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <em>Avatar</em> became the highest-grossing film of all time, earning over $2.9 billion worldwide. 
                  It won three Academy Awards and was nominated for Best Picture and Best Director.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The long-awaited sequel, <em>Avatar: The Way of Water</em> (2022), arrived 13 years later and 
                  became the third-highest-grossing film of all time with over $2.3 billion. Cameron has three more 
                  <em>Avatar</em> sequels planned through 2031, making it the most ambitious franchise in cinema history.
                </p>
              </div>
            </section>

            {/* Filmography Timeline */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
                Major Films
              </h2>
              
              <div className="space-y-6">
                {/* Avatar: The Way of Water */}
                <div className="flex gap-6 pb-6 border-b border-gray-200">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-36 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
                      2022
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Avatar: The Way of Water</h3>
                    <p className="text-gray-600 mb-3">
                      The long-awaited sequel to Avatar explores Pandora's oceans. Grossed over $2.3 billion, 
                      making it the third-highest-grossing film of all time.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">$2.3B Box Office</span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">#3 All-Time</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Sci-Fi Epic</span>
                    </div>
                  </div>
                </div>

                {/* Avatar */}
                <div className="flex gap-6 pb-6 border-b border-gray-200">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-36 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
                      2009
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Avatar</h3>
                    <p className="text-gray-600 mb-3">
                      Revolutionary 3D sci-fi epic set on Pandora. The highest-grossing film of all time with 
                      $2.9 billion worldwide. Won 3 Academy Awards and pioneered motion-capture technology.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">$2.9B Box Office</span>
                      <span className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full">#1 All-Time</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">3 Oscars</span>
                    </div>
                  </div>
                </div>

                {/* Titanic */}
                <div className="flex gap-6 pb-6 border-b border-gray-200">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-36 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
                      1997
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Titanic</h3>
                    <p className="text-gray-600 mb-3">
                      Epic romance about the RMS Titanic disaster. Most expensive film ever made at the time ($200M). 
                      Won 11 Academy Awards including Best Picture and Best Director. Grossed $2.2 billion.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">$2.2B Box Office</span>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">11 Oscars</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Best Picture</span>
                    </div>
                  </div>
                </div>

                {/* True Lies */}
                <div className="flex gap-6 pb-6 border-b border-gray-200">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-36 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
                      1994
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">True Lies</h3>
                    <p className="text-gray-600 mb-3">
                      Action comedy starring Arnold Schwarzenegger as a secret agent. Earned $146 million domestically. 
                      Jamie Lee Curtis won a Golden Globe for her performance.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">$146M Domestic</span>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">Golden Globe</span>
                      <span className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full">Action Comedy</span>
                    </div>
                  </div>
                </div>

                {/* Terminator 2 */}
                <div className="flex gap-6 pb-6 border-b border-gray-200">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-36 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
                      1991
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Terminator 2: Judgment Day</h3>
                    <p className="text-gray-600 mb-3">
                      Groundbreaking sequel with revolutionary CGI effects. First film to earn over $300 million worldwide. 
                      Won 4 Academy Awards and set new standards for visual effects.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">$300M+ Worldwide</span>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">4 Oscars</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">CGI Pioneer</span>
                    </div>
                  </div>
                </div>

                {/* The Abyss */}
                <div className="flex gap-6 pb-6 border-b border-gray-200">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-36 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
                      1989
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">The Abyss</h3>
                    <p className="text-gray-600 mb-3">
                      Underwater sci-fi thriller about oil-rig workers encountering alien intelligence. Won Academy Award 
                      for Best Visual Effects. Earned $90 million worldwide.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">$90M Worldwide</span>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">Best Visual FX</span>
                      <span className="px-3 py-1 bg-cyan-100 text-cyan-800 text-sm rounded-full">Underwater Epic</span>
                    </div>
                  </div>
                </div>

                {/* Aliens */}
                <div className="flex gap-6 pb-6 border-b border-gray-200">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-36 bg-gradient-to-br from-green-600 to-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
                      1986
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Aliens</h3>
                    <p className="text-gray-600 mb-3">
                      Action-packed sequel to Ridley Scott's Alien. Earned $130 million and 7 Oscar nominations. 
                      Won for Best Sound Editing and Best Visual Effects. Sigourney Weaver made Time's cover.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">$130M Worldwide</span>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">2 Oscars</span>
                      <span className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full">Sci-Fi Horror</span>
                    </div>
                  </div>
                </div>

                {/* The Terminator */}
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-36 bg-gradient-to-br from-red-600 to-rose-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
                      1984
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">The Terminator</h3>
                    <p className="text-gray-600 mb-3">
                      Cameron's breakthrough film starring Arnold Schwarzenegger. Earned $78 million on a modest budget 
                      and launched both their careers. Selected for National Film Registry preservation.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">$78M Worldwide</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Cult Classic</span>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">NFR Preserved</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Deep-Sea Exploration */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
                Deep-Sea Exploration
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Beyond filmmaking, Cameron is a National Geographic explorer-in-residence with a passion for deep-ocean 
                  exploration that rivals his love of cinema. His interest in the ocean led him to make numerous 
                  documentaries and push the boundaries of underwater technology.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 my-6 border border-blue-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Historic Mariana Trench Dive (2012)</h3>
                  <p className="text-gray-700 mb-3">
                    In 2012, Cameron became the first person to complete a <strong>solo descent to the bottom of the 
                    Mariana Trench</strong>—the deepest part of Earth's ocean at nearly 36,000 feet—in the Deepsea 
                    Challenger submersible. He spent over three hours exploring and filming the ocean floor.
                  </p>
                  <p className="text-sm text-gray-600">
                    Only the third manned expedition to the Challenger Deep after the 1960 Trieste dive.
                  </p>
                </div>

                <h4 className="text-lg font-bold text-gray-900 mt-6 mb-3">Documentaries & Contributions</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Ghosts of the Abyss (2003)</strong> — IMAX documentary exploring the wreck of the Titanic</li>
                  <li><strong>Aliens of the Deep (2005)</strong> — Exploration of deep-sea hydrothermal vents</li>
                  <li><strong>Deepsea Challenge 3D (2014)</strong> — Chronicle of the Mariana Trench expedition</li>
                </ul>

                <p className="text-gray-700 leading-relaxed mt-4">
                  Cameron has contributed significantly to underwater filming and remote vehicle technologies, including 
                  helping create the digital 3D Fusion Camera System used in many of his films.
                </p>
              </div>
            </section>

            {/* Environmental Work */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
                Environmental Advocacy
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Cameron is an active environmentalist who runs several sustainability businesses and advocates for 
                  ocean conservation, renewable energy, and climate action. His environmental themes are often woven 
                  into his films, particularly the <em>Avatar</em> franchise.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>Vegan since 2012, promoting plant-based diets for environmental sustainability</li>
                  <li>Co-founded Verdient Foods, a sustainable pea protein company</li>
                  <li>Purchased farmland in New Zealand to convert to organic operations</li>
                  <li>Vocal advocate for renewable energy and reducing carbon emissions</li>
                  <li>Serves on the board of multiple environmental organizations</li>
                </ul>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            
            {/* Awards & Honors */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Awards & Honors</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600">🏆</span>
                  <span><strong>3 Academy Awards</strong><br/>Best Picture, Director, Editing (Titanic)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600">🏆</span>
                  <span><strong>4 Golden Globe Awards</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600">🏆</span>
                  <span><strong>2 Primetime Emmy Awards</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600">🏆</span>
                  <span><strong>6 BAFTA Nominations</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600">⭐</span>
                  <span><strong>Time 100</strong> (2010)<br/>100 Most Influential People</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-600">🎬</span>
                  <span><strong>3 Films in National Film Registry</strong><br/>Terminator, T2, Titanic</span>
                </li>
              </ul>
            </div>

            {/* Box Office Records */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Box Office Records</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">💰</span>
                  <span><strong>#1, #3, #4 All-Time</strong><br/>Avatar, Avatar 2, Titanic</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">💰</span>
                  <span><strong>First $1B Film</strong><br/>Titanic (1997)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">💰</span>
                  <span><strong>First Two $2B Films</strong><br/>Avatar & Titanic</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">💰</span>
                  <span><strong>Only Three $2B+ Films</strong><br/>Avatar 1, 2, and Titanic</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">💰</span>
                  <span><strong>Four Consecutive $1B+ Films</strong><br/>True Lies, Titanic, Avatar 1 & 2</span>
                </li>
              </ul>
            </div>

            {/* Companies Founded */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Companies Founded</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li><strong>Lightstorm Entertainment</strong> (1990)<br/>
                  <span className="text-gray-600">Film production company</span>
                </li>
                <li><strong>Digital Domain</strong> (1993)<br/>
                  <span className="text-gray-600">Visual effects company</span>
                </li>
                <li><strong>Earthship Productions</strong><br/>
                  <span className="text-gray-600">Documentary production</span>
                </li>
                <li><strong>Verdient Foods</strong><br/>
                  <span className="text-gray-600">Sustainable plant protein</span>
                </li>
              </ul>
            </div>

            {/* Did You Know */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Did You Know?</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li>✨ Sold The Terminator script for $1 to ensure he could direct it</li>
                <li>🌊 Made 33 dives to the real Titanic wreck</li>
                <li>🤖 The name "Skynet" came to him in a dream</li>
                <li>🎬 Took a 12-year break between Titanic and Avatar</li>
                <li>🌱 Became vegan in 2012 for environmental reasons</li>
                <li>🚗 Worked as a truck driver before breaking into film</li>
                <li>📚 Dropped out of college to pursue filmmaking</li>
                <li>🎯 Plans 3 more Avatar sequels through 2031</li>
              </ul>
            </div>

            {/* Related Topics */}
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Topics</h3>
              <div className="space-y-2">
                <Link href="/blog?tag=avatar" className="block px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded text-sm font-medium text-gray-700">
                  Avatar Franchise →
                </Link>
                <Link href="/blog?tag=titanic" className="block px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded text-sm font-medium text-gray-700">
                  Titanic →
                </Link>
                <Link href="/blog?tag=visual-effects" className="block px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded text-sm font-medium text-gray-700">
                  Visual Effects Innovation →
                </Link>
                <Link href="/blog?tag=ocean-exploration" className="block px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded text-sm font-medium text-gray-700">
                  Deep-Sea Exploration →
                </Link>
                <Link href="/blog" className="block px-3 py-2 bg-blue-50 hover:bg-blue-100 rounded text-sm font-medium text-blue-700">
                  All News & Articles →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated on James Cameron</h2>
          <p className="text-gray-300 mb-8">
            Follow the latest news, film updates, and deep-sea exploration achievements from one of 
            cinema's most influential directors.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/blog" className="px-8 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Read All Articles
            </Link>
            <Link href="/contact" className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
              Contact Editorial Team
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
