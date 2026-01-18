import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SXSW 2026 - South by Southwest Austin Coverage | ObjectWire",
  description: "Complete coverage of SXSW 2026 in Austin, Texas. Festival dates, speakers, performers, tech showcases, film premieres, and everything you need to know about South by Southwest.",
  keywords: ["SXSW", "South by Southwest", "Austin Texas", "music festival", "tech conference", "film festival", "SXSW 2026"],
};

export default function SXSWPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Main Info */}
            <div className="md:col-span-2">
              <p className="text-orange-100 text-sm font-mono tracking-wider mb-4">MARCH 7-15, 2026 • AUSTIN, TEXAS</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
                SXSW 2026
              </h1>
              <p className="text-xl text-gray-50 mb-6 leading-relaxed">
                <strong className="text-white">South by Southwest</strong> returns to Austin for its landmark convergence of music, 
                film, technology, and innovation. Experience nine days of discovery, creativity, and connection.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">9</p>
                  <p className="text-sm text-gray-50">Days</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">2000+</p>
                  <p className="text-sm text-gray-50">Performers</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">1000+</p>
                  <p className="text-sm text-gray-50">Speakers</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                  <p className="text-3xl font-bold text-white">400K+</p>
                  <p className="text-sm text-gray-50">Attendees</p>
                </div>
              </div>
            </div>

            {/* Quick Facts Card */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
              <h3 className="font-bold text-lg mb-4 text-white">Event Details</h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-gray-100">Dates</dt>
                  <dd className="font-medium text-white">March 7-15, 2026</dd>
                </div>
                <div>
                  <dt className="text-gray-100">Location</dt>
                  <dd className="font-medium text-white">Austin, Texas</dd>
                </div>
                <div>
                  <dt className="text-gray-100">Tracks</dt>
                  <dd className="font-medium text-white">Music, Film, Interactive/Tech</dd>
                </div>
                <div>
                  <dt className="text-gray-100">Badge Sales</dt>
                  <dd className="font-medium text-white">On Sale Now</dd>
                </div>
                <div>
                  <dt className="text-gray-100">Conference Type</dt>
                  <dd className="font-medium text-white">Hybrid (In-Person + Virtual)</dd>
                </div>
                <div>
                  <dt className="text-gray-100">Website</dt>
                  <dd className="font-medium text-white">sxsw.com</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        
        {/* Latest Updates */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8 pb-4 border-b-2 border-orange-600">
            <h2 className="text-3xl font-bold text-gray-900">Latest Updates</h2>
            <Link href="/blog?tag=sxsw" className="text-orange-600 hover:text-orange-700 font-medium">
              View All News →
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Update 1 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 h-48 flex items-center justify-center">
                <span className="text-white text-6xl">🎸</span>
              </div>
              <div className="p-6">
                <p className="text-xs text-gray-500 mb-2">January 14, 2026</p>
                <h3 className="font-bold text-lg mb-2">Music Lineup Announced</h3>
                <p className="text-gray-600 text-sm mb-4">
                  SXSW reveals first wave of music performers featuring breakthrough artists and iconic acts across 100+ venues.
                </p>
                <Link href="/blog/sxsw-2026-music-lineup" className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                  Read More →
                </Link>
              </div>
            </div>

            {/* Update 2 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-48 flex items-center justify-center">
                <span className="text-white text-6xl">🤖</span>
              </div>
              <div className="p-6">
                <p className="text-xs text-gray-500 mb-2">January 10, 2026</p>
                <h3 className="font-bold text-lg mb-2">AI & Tech Summit Details</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Major tech companies confirm attendance. Expect announcements from OpenAI, Google, Microsoft, and more.
                </p>
                <Link href="/blog/sxsw-2026-ai-tech-summit" className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                  Read More →
                </Link>
              </div>
            </div>

            {/* Update 3 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-pink-600 to-red-600 h-48 flex items-center justify-center">
                <span className="text-white text-6xl">🎬</span>
              </div>
              <div className="p-6">
                <p className="text-xs text-gray-500 mb-2">January 8, 2026</p>
                <h3 className="font-bold text-lg mb-2">Film Festival Premieres</h3>
                <p className="text-gray-600 text-sm mb-4">
                  SXSW Film announces world premieres and exclusive screenings from acclaimed directors and emerging filmmakers.
                </p>
                <Link href="/blog/sxsw-2026-film-premieres" className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About SXSW */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-orange-600">
            About South by Southwest
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="prose prose-lg max-w-none">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Festival</h3>
              <p className="text-gray-700 mb-4">
                Since 1987, South by Southwest (SXSW) has grown from a small music festival into a massive cultural phenomenon 
                that celebrates the convergence of the interactive, film, and music industries. Taking place every March in 
                Austin, Texas, SXSW is renowned for launching careers, fostering innovation, and creating unforgettable experiences.
              </p>
              <p className="text-gray-700 mb-4">
                The festival attracts over 400,000 attendees from around the world, including musicians, filmmakers, technologists, 
                entrepreneurs, and creative professionals seeking inspiration, networking, and discovery.
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Austin</h3>
              <p className="text-gray-700 mb-4">
                Austin's vibrant music scene, thriving tech sector, and creative culture make it the perfect host city for SXSW. 
                The city transforms during the festival, with venues, hotels, restaurants, and streets buzzing with activity 
                from morning to night.
              </p>
              <p className="text-gray-700 mb-4">
                SXSW has become a major economic driver for Austin, generating hundreds of millions of dollars in revenue and 
                solidifying the city's reputation as a global hub for creativity and innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Three Tracks */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-orange-600">
            Three Unique Experiences
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Music */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 border-2 border-orange-200">
              <div className="text-5xl mb-4">🎵</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SXSW Music</h3>
              <p className="text-gray-700 mb-6">
                The world's premier destination for music discovery. Over 2,000 performers across 100+ venues spanning 
                every genre imaginable.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span className="text-sm text-gray-700">Showcases across downtown Austin</span>
                </div>
                <div className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span className="text-sm text-gray-700">Day parties and official events</span>
                </div>
                <div className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span className="text-sm text-gray-700">Emerging and established artists</span>
                </div>
                <div className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  <span className="text-sm text-gray-700">Industry panels and workshops</span>
                </div>
              </div>
              
              <p className="text-xs text-gray-600">
                <strong>Dates:</strong> March 10-15, 2026
              </p>
            </div>

            {/* Film & TV */}
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-8 border-2 border-red-200">
              <div className="text-5xl mb-4">🎬</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SXSW Film & TV</h3>
              <p className="text-gray-700 mb-6">
                Celebrating the art of storytelling through cinema, episodic content, and immersive media. World premieres 
                and exclusive screenings.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span className="text-sm text-gray-700">Feature film premieres</span>
                </div>
                <div className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span className="text-sm text-gray-700">Documentary showcases</span>
                </div>
                <div className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span className="text-sm text-gray-700">TV series screenings</span>
                </div>
                <div className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span className="text-sm text-gray-700">Filmmaker Q&As and panels</span>
                </div>
              </div>
              
              <p className="text-xs text-gray-600">
                <strong>Dates:</strong> March 7-14, 2026
              </p>
            </div>

            {/* Tech & Interactive */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 border-2 border-blue-200">
              <div className="text-5xl mb-4">💻</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SXSW Conference</h3>
              <p className="text-gray-700 mb-6">
                Where technology meets culture. Explore AI, startups, gaming, VR/AR, health tech, and the future of innovation 
                with industry leaders.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-sm text-gray-700">Keynote speakers</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-sm text-gray-700">Tech startup showcases</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-sm text-gray-700">Interactive installations</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-sm text-gray-700">Networking events</span>
                </div>
              </div>
              
              <p className="text-xs text-gray-600">
                <strong>Dates:</strong> March 7-14, 2026
              </p>
            </div>
          </div>
        </section>

        {/* Featured Speakers (Placeholder) */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-orange-600">
            Featured Speakers & Performers
          </h2>
          
          <div className="bg-gradient-to-r from-gray-50 to-orange-50 rounded-xl p-8 border border-gray-200">
            <div className="text-center mb-8">
              <p className="text-gray-700 text-lg mb-4">
                SXSW 2026 will feature an incredible lineup of speakers, performers, and creators. Stay tuned as we announce 
                featured guests throughout the coming weeks.
              </p>
              <p className="text-gray-600 mb-6">
                Past SXSW speakers and performers have included: Barack Obama, Lady Gaga, Elon Musk, Lady Bird, 
                Questlove, Michelle Obama, and countless breakthrough artists.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
                <div className="text-4xl mb-3">🎤</div>
                <h4 className="font-bold text-gray-900 mb-2">Tech Innovators</h4>
                <p className="text-sm text-gray-600">CEOs and founders from leading tech companies sharing insights on AI, Web3, and the future.</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
                <div className="text-4xl mb-3">⭐</div>
                <h4 className="font-bold text-gray-900 mb-2">Entertainment Icons</h4>
                <p className="text-sm text-gray-600">Musicians, actors, and filmmakers discussing creativity, culture, and the entertainment industry.</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
                <div className="text-4xl mb-3">🚀</div>
                <h4 className="font-bold text-gray-900 mb-2">Visionary Leaders</h4>
                <p className="text-sm text-gray-600">Thought leaders and change-makers addressing policy, social impact, and global challenges.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Badge Information */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-orange-600">
            Badges & Passes
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Platinum */}
            <div className="bg-gradient-to-br from-purple-900 to-indigo-900 text-white rounded-xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 px-3 py-1 text-xs font-bold">
                PREMIUM
              </div>
              <h3 className="text-2xl font-bold mb-2 mt-4">Platinum</h3>
              <p className="text-3xl font-bold mb-4">$1,850+</p>
              <ul className="space-y-2 text-sm mb-6">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>All events access</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Priority entry</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Exclusive lounges</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Reserved seating</span>
                </li>
              </ul>
            </div>

            {/* Interactive */}
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-2">Interactive</h3>
              <p className="text-3xl font-bold mb-4">$1,395+</p>
              <ul className="space-y-2 text-sm mb-6">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Conference access</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Tech showcases</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Networking events</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Trade show floor</span>
                </li>
              </ul>
            </div>

            {/* Film */}
            <div className="bg-gradient-to-br from-red-600 to-pink-600 text-white rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-2">Film</h3>
              <p className="text-3xl font-bold mb-4">$1,095+</p>
              <ul className="space-y-2 text-sm mb-6">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>All film screenings</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Filmmaker events</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Industry panels</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Q&A sessions</span>
                </li>
              </ul>
            </div>

            {/* Music */}
            <div className="bg-gradient-to-br from-orange-600 to-red-600 text-white rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-2">Music</h3>
              <p className="text-3xl font-bold mb-4">$995+</p>
              <ul className="space-y-2 text-sm mb-6">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>All showcases</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Day parties</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Industry meetups</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Venue access</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-200">
            <p className="text-gray-700 mb-4">
              <strong>💰 Early Bird Pricing:</strong> Save up to $200 by purchasing your badge before February 7, 2026. 
              Student and senior discounts available.
            </p>
            <p className="text-gray-700">
              <strong>🎟️ Wristbands:</strong> Free wristbands provide access to official day parties and select music venues. 
              Available for Austin locals and visitors.
            </p>
          </div>
        </section>

        {/* Austin During SXSW */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-orange-600">
            Navigating Austin During SXSW
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
              <div className="text-4xl mb-4">🏨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Accommodations</h3>
              <p className="text-gray-700 mb-4">
                Book early! Hotels fill up fast and prices surge during SXSW. Consider downtown for walkability or neighborhoods 
                like South Congress, East Austin, or North Loop.
              </p>
              <Link href="/blog/sxsw-2026-hotel-guide" className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                Hotel Guide →
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
              <div className="text-4xl mb-4">🚗</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Transportation</h3>
              <p className="text-gray-700 mb-4">
                Downtown gets congested. Use rideshare, bike rentals, scooters, or Austin's public transportation. 
                Walking between venues is often fastest during peak hours.
              </p>
              <Link href="/blog/sxsw-2026-transportation-tips" className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                Getting Around →
              </Link>
            </div>

            <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
              <div className="text-4xl mb-4">🍔</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Food & Dining</h3>
              <p className="text-gray-700 mb-4">
                Austin's food scene shines during SXSW. From food trucks to fine dining, BBQ to breakfast tacos. 
                Make reservations or expect long waits at popular spots.
              </p>
              <Link href="/blog/sxsw-2026-dining-guide" className="text-orange-600 hover:text-orange-700 font-medium text-sm">
                Dining Guide →
              </Link>
            </div>
          </div>
        </section>

        {/* Survival Tips */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-orange-600">
            SXSW Survival Tips
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border-2 border-orange-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pro Tips</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-orange-600 text-xl mr-3">👟</span>
                  <div>
                    <p className="font-medium text-gray-900">Wear comfortable shoes</p>
                    <p className="text-sm text-gray-600">You'll walk 10+ miles per day</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 text-xl mr-3">🔋</span>
                  <div>
                    <p className="font-medium text-gray-900">Portable charger is essential</p>
                    <p className="text-sm text-gray-600">Your phone will die by noon</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 text-xl mr-3">📱</span>
                  <div>
                    <p className="font-medium text-gray-900">Download the SXSW app</p>
                    <p className="text-sm text-gray-600">Plan your schedule and get real-time updates</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 text-xl mr-3">💧</span>
                  <div>
                    <p className="font-medium text-gray-900">Stay hydrated</p>
                    <p className="text-sm text-gray-600">Austin weather can be unpredictable in March</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 text-xl mr-3">🎫</span>
                  <div>
                    <p className="font-medium text-gray-900">Badge up at will call early</p>
                    <p className="text-sm text-gray-600">Avoid long lines during peak times</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border-2 border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What to Expect</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-3">👥</span>
                  <div>
                    <p className="font-medium text-gray-900">Massive crowds</p>
                    <p className="text-sm text-gray-600">400K+ attendees fill downtown Austin</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-3">⏰</span>
                  <div>
                    <p className="font-medium text-gray-900">Long lines</p>
                    <p className="text-sm text-gray-600">Popular events fill up fast, arrive early</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-3">🌡️</span>
                  <div>
                    <p className="font-medium text-gray-900">Variable weather</p>
                    <p className="text-sm text-gray-600">Layer clothes and bring rain gear</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-3">🎉</span>
                  <div>
                    <p className="font-medium text-gray-900">Serendipity moments</p>
                    <p className="text-sm text-gray-600">Best experiences are often unplanned</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 text-xl mr-3">😴</span>
                  <div>
                    <p className="font-medium text-gray-900">Exhaustion</p>
                    <p className="text-sm text-gray-600">Events run from 11am to 2am daily</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Economic Impact */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-orange-600">
            SXSW's Impact on Austin
          </h2>
          
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border-2 border-green-200">
            <div className="grid md:grid-cols-4 gap-6 mb-6">
              <div className="text-center">
                <p className="text-4xl font-bold text-green-600 mb-2">$280M+</p>
                <p className="text-sm text-gray-700">Economic Impact (2025)</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-green-600 mb-2">400K+</p>
                <p className="text-sm text-gray-700">Total Attendees</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-green-600 mb-2">3,000+</p>
                <p className="text-sm text-gray-700">Jobs Created</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-green-600 mb-2">100+</p>
                <p className="text-sm text-gray-700">Countries Represented</p>
              </div>
            </div>
            
            <p className="text-gray-700 text-center">
              SXSW is one of Austin's biggest annual events, bringing massive economic benefits to local businesses, 
              hotels, restaurants, and the creative community. The festival has helped establish Austin as a global 
              destination for innovation and culture.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Ready for SXSW 2026?</h2>
            <p className="text-xl mb-8 text-orange-50">
              Join us in Austin this March for nine unforgettable days of music, film, and innovation
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="https://www.sxsw.com" 
                target="_blank"
                className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg"
              >
                Buy Badges →
              </Link>
              <Link 
                href="/blog?tag=sxsw" 
                className="inline-block bg-yellow-500 text-gray-900 px-8 py-4 rounded-lg hover:bg-yellow-400 transition-colors font-bold text-lg"
              >
                Read Our Coverage →
              </Link>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-orange-600">
            Related Coverage
          </h2>
          
          <div className="grid md:grid-cols-4 gap-4">
            <Link href="/blog?tag=austin" className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg border border-gray-200 transition-colors">
              <p className="font-bold text-gray-900 mb-2">Austin News</p>
              <p className="text-sm text-gray-600">Latest updates from Texas' capital city</p>
            </Link>
            <Link href="/blog?tag=tech-conferences" className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg border border-gray-200 transition-colors">
              <p className="font-bold text-gray-900 mb-2">Tech Events</p>
              <p className="text-sm text-gray-600">Major technology conferences and summits</p>
            </Link>
            <Link href="/blog?tag=music-festivals" className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg border border-gray-200 transition-colors">
              <p className="font-bold text-gray-900 mb-2">Music Festivals</p>
              <p className="text-sm text-gray-600">Coverage of major music events worldwide</p>
            </Link>
            <Link href="/blog?tag=film-festivals" className="bg-gray-50 hover:bg-gray-100 p-4 rounded-lg border border-gray-200 transition-colors">
              <p className="font-bold text-gray-900 mb-2">Film Festivals</p>
              <p className="text-sm text-gray-600">Independent and mainstream cinema showcases</p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
