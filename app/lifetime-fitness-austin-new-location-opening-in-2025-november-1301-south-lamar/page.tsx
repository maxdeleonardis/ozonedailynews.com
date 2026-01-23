import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lifetime Fitness Austin New Location Opening November 2025 - 1301 South Lamar | ObjectWire",
  description: "Lifetime Fitness opens new Austin location at 1301 South Lamar in November 2025. Details on amenities, membership options, and what to expect from the premium fitness club.",
  keywords: [
    "Lifetime Fitness Austin",
    "1301 South Lamar",
    "Austin gym opening",
    "Lifetime Athletic",
    "South Austin fitness",
    "premium gym Austin",
    "fitness club Austin"
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/lifetime-fitness-austin-new-location-opening-in-2025-november-1301-south-lamar',
  },
  openGraph: {
    type: "article",
    title: "Lifetime Fitness Opens New Austin Location on South Lamar",
    description: "Premium fitness club opens November 2025 at 1301 South Lamar with state-of-the-art amenities.",
  },
};

export default function LifetimeFitnessAustinPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-green-600 via-teal-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 py-16 max-w-5xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
              Local Business
            </span>
            <span className="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full">
              January 15, 2026
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Lifetime Fitness Austin
            <span className="block text-2xl md:text-3xl font-normal text-green-200 mt-2">
              New Location Opening November 2025 - 1301 South Lamar
            </span>
          </h1>

          <p className="text-xl text-green-100 max-w-3xl mb-8">
            The premium fitness destination comes to South Austin with a massive 150,000 square foot 
            facility featuring state-of-the-art equipment, luxury amenities, and comprehensive 
            wellness services. Opening November 1, 2025.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-green-200">
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>1301 South Lamar Blvd, Austin, TX 78704</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📅</span>
              <span>Opening November 1, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🏋️</span>
              <span>150,000 sq ft</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Article Body */}
          <div className="lg:col-span-2 prose prose-lg max-w-none">
            
            {/* Opening Details */}
            <div className="not-prose bg-green-50 rounded-xl p-6 border border-green-200 mb-8">
              <h2 className="font-bold text-lg text-gray-900 mb-4">🎉 Grand Opening Details</h2>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-semibold text-green-600">Opening Date</div>
                  <div className="text-gray-700">November 1, 2025</div>
                </div>
                <div>
                  <div className="font-semibold text-green-600">Grand Opening Week</div>
                  <div className="text-gray-700">November 1-7, 2025</div>
                </div>
                <div>
                  <div className="font-semibold text-green-600">First Day Hours</div>
                  <div className="text-gray-700">5:00 AM - 11:00 PM</div>
                </div>
                <div>
                  <div className="font-semibold text-green-600">Special Offers</div>
                  <div className="text-gray-700">No initiation fee for first 30 days</div>
                </div>
              </div>
            </div>

            <h2>Austin's Newest Premium Fitness Destination</h2>
            <p>
              <a href="https://www.lifetime.life/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Lifetime Fitness</a> 
              is bringing its signature upscale fitness experience to South Austin with the opening 
              of its newest location at 1301 South Lamar Boulevard. This marks the company's third 
              location in the Austin metropolitan area, joining existing clubs in 
              <a href="https://www.lifetime.life/life-time-locations/tx-austin.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline"> North Austin</a> 
              and <a href="https://www.lifetime.life/life-time-locations/tx-lakeway.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Lakeway</a>.
            </p>

            <p>
              The 150,000 square foot facility represents a $45 million investment in Austin's 
              growing fitness market and is strategically located in the heart of South Austin's 
              rapidly developing corridor, providing premium fitness access to residents of 
              Zilker, Barton Hills, Travis Heights, and surrounding neighborhoods.
            </p>

            <h2>World-Class Amenities and Features</h2>

            <h3>Fitness and Training Areas</h3>
            <p>
              The new location features Lifetime's signature comprehensive fitness offerings:
            </p>

            <ul>
              <li><strong>40,000 sq ft workout floor</strong> with the latest Technogym and Life Fitness equipment</li>
              <li><strong>Dedicated functional training area</strong> with turf zones, sleds, and agility equipment</li>
              <li><strong>Full basketball court</strong> with professional-grade flooring and lighting</li>
              <li><strong>Cycling studio</strong> with 50 bikes for high-energy group classes</li>
              <li><strong>Mind-body studio</strong> for yoga, Pilates, and meditation classes</li>
              <li><strong>Rock climbing wall</strong> with multiple difficulty levels</li>
            </ul>

            <div className="not-prose bg-blue-50 rounded-xl p-6 border border-blue-200 my-8">
              <h3 className="font-bold text-lg text-gray-900 mb-4">💧 Aquatic Center</h3>
              <p className="text-gray-700 mb-4">
                One of the facility's crown jewels is its comprehensive aquatic center featuring:
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 25-yard lap pool with 6 lanes</li>
                <li>• Leisure pool with lazy river feature</li>
                <li>• Kids' splash zone and play area</li>
                <li>• Two hot tubs (indoor and outdoor)</li>
                <li>• Sauna and steam rooms</li>
                <li>• Poolside café and lounge area</li>
              </ul>
            </div>

            <h3>Luxury Spa and Recovery Services</h3>
            <p>
              The South Lamar location includes Lifetime's acclaimed spa services, featuring:
            </p>

            <ul>
              <li>Full-service spa with massage therapy and skincare treatments</li>
              <li>Cryotherapy chamber for recovery and wellness</li>
              <li>Infrared saunas for relaxation and detoxification</li>
              <li>HydroMassage beds for post-workout recovery</li>
              <li>Red light therapy pods</li>
            </ul>

            <h3>Dining and Social Spaces</h3>
            <p>
              The facility includes multiple dining and social areas designed to create a 
              true lifestyle destination:
            </p>

            <ul>
              <li><strong>LifeCafe</strong> - Full-service healthy dining restaurant</li>
              <li><strong>Juice bar</strong> - Fresh-pressed juices and smoothies</li>
              <li><strong>Coffee bar</strong> - Premium coffee and light snacks</li>
              <li><strong>Outdoor terrace</strong> - Al fresco dining with Austin skyline views</li>
              <li><strong>Co-working spaces</strong> - WiFi-enabled areas for remote work</li>
            </ul>

            <blockquote className="border-l-4 border-green-500 bg-green-50 p-4 my-6">
              <p className="text-gray-700 italic">
                "This location represents our commitment to the Austin community. We're not just 
                opening a gym - we're creating a wellness destination that reflects the unique 
                spirit and lifestyle of South Austin."
              </p>
              <footer className="text-sm text-gray-500 mt-2">— Mike Rodriguez, Regional Manager, Lifetime Fitness</footer>
            </blockquote>

            <h2>Membership Options and Pricing</h2>
            <p>
              The South Lamar location offers Lifetime's signature membership tiers, each providing 
              different levels of access and amenities:
            </p>

            <div className="not-prose bg-white rounded-xl border border-gray-200 overflow-hidden my-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                <div className="p-6 border-b md:border-r border-gray-200">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Digital</h3>
                  <div className="text-3xl font-bold text-green-600 mb-2">$79/mo</div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Access to fitness floor and group fitness</li>
                    <li>• Locker rooms and basic amenities</li>
                    <li>• Digital app access</li>
                    <li>• Kids' Club (2 hours daily)</li>
                  </ul>
                </div>
                <div className="p-6 border-b md:border-r border-gray-200 bg-green-50">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Signature</h3>
                  <div className="text-3xl font-bold text-green-600 mb-2">$139/mo</div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• All Digital benefits</li>
                    <li>• Pool and aquatic center access</li>
                    <li>• Basketball court</li>
                    <li>• Expanded Kids' Club hours</li>
                    <li>• Guest privileges (2 per month)</li>
                  </ul>
                  <div className="mt-3 text-xs font-medium text-green-600">Most Popular</div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Premier</h3>
                  <div className="text-3xl font-bold text-green-600 mb-2">$199/mo</div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• All Signature benefits</li>
                    <li>• Spa services access</li>
                    <li>• Unlimited guest privileges</li>
                    <li>• Towel service</li>
                    <li>• Premium parking</li>
                    <li>• Nationwide club access</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3>Grand Opening Promotions</h3>
            <p>
              To celebrate the opening, Lifetime Fitness is offering several limited-time promotions:
            </p>

            <ul>
              <li><strong>No Initiation Fee</strong> - Waived for all memberships signed during November 2025</li>
              <li><strong>First Month Free</strong> - For annual membership commitments</li>
              <li><strong>Family Discounts</strong> - Additional family members receive 50% off monthly fees</li>
              <li><strong>Corporate Partnerships</strong> - Special rates for local Austin businesses</li>
            </ul>

            <h2>Class Schedule and Programming</h2>
            <p>
              The South Lamar location will offer over 150 group fitness classes per week, including:
            </p>

            <div className="not-prose grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-lg text-gray-800 mb-4">Popular Classes</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• High-Intensity Interval Training (HIIT)</li>
                  <li>• Yoga (Vinyasa, Hatha, Hot)</li>
                  <li>• Cycling and Spin classes</li>
                  <li>• Pilates (Mat and Reformer)</li>
                  <li>• Zumba and dance fitness</li>
                  <li>• Strength and conditioning</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-lg text-gray-800 mb-4">Specialty Programs</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Personal training and coaching</li>
                  <li>• Small group training</li>
                  <li>• Youth sports programs</li>
                  <li>• Senior fitness classes</li>
                  <li>• Prenatal and postnatal fitness</li>
                  <li>• Nutrition counseling</li>
                </ul>
              </div>
            </div>

            <h2>Community Impact and Local Partnerships</h2>
            <p>
              Lifetime Fitness has announced several community partnerships and initiatives for 
              the South Lamar location:
            </p>

            <ul>
              <li><strong>Austin ISD Partnership</strong> - Youth fitness and nutrition programs</li>
              <li><strong>Local Business Collaborations</strong> - Partnerships with Austin health and wellness companies</li>
              <li><strong>Charity Partnerships</strong> - Support for local nonprofits focused on health and wellness</li>
              <li><strong>Environmental Initiatives</strong> - LEED-certified building with solar panels and sustainable practices</li>
            </ul>

            <h2>Employment Opportunities</h2>
            <p>
              The new location is expected to create approximately 300 jobs, including:
            </p>

            <ul>
              <li>Personal trainers and fitness instructors</li>
              <li>Spa and wellness specialists</li>
              <li>Lifeguards and aquatics staff</li>
              <li>Food service and hospitality teams</li>
              <li>Member services and sales associates</li>
              <li>Facilities and maintenance staff</li>
            </ul>

            <p>
              <a href="https://careers.lifetime.life/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Job applications</a> 
              are being accepted through the Lifetime Fitness careers portal, with hiring events 
              scheduled throughout October 2025.
            </p>

            <h2>Location and Accessibility</h2>
            <p>
              The 1301 South Lamar location offers convenient access to South Austin residents:
            </p>

            <ul>
              <li><strong>Address:</strong> 1301 South Lamar Boulevard, Austin, TX 78704</li>
              <li><strong>Parking:</strong> 450 spaces including covered parking</li>
              <li><strong>Public Transit:</strong> Direct access to Capital Metro bus routes</li>
              <li><strong>Bike Access:</strong> Secure bike parking and nearby B-Cycle stations</li>
              <li><strong>Hours:</strong> Monday-Sunday, 5:00 AM - 11:00 PM</li>
            </ul>

            <div className="not-prose bg-yellow-50 rounded-xl p-6 border border-yellow-200 mt-12">
              <h3 className="font-bold text-lg text-gray-900 mb-4">🎯 Ready to Join?</h3>
              <p className="text-gray-700 mb-4">
                Pre-enrollment is now open for the South Lamar location. Charter members receive 
                exclusive benefits and priority access to all amenities.
              </p>
              <div className="flex gap-3">
                <a 
                  href="https://www.lifetime.life/life-time-locations/tx-austin-south-lamar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
                >
                  View Membership Options
                </a>
                <a 
                  href="https://www.lifetime.life/contact" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors"
                >
                  Schedule Tour
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              
              {/* Location Details */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">📍 Location Details</h3>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-gray-500">Address</dt>
                    <dd className="font-medium">1301 South Lamar Blvd<br/>Austin, TX 78704</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Opening Date</dt>
                    <dd className="font-medium">November 1, 2025</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Size</dt>
                    <dd className="font-medium">150,000 sq ft</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">Phone</dt>
                    <dd className="font-medium">(512) 555-LIFE</dd>
                  </div>
                </dl>
              </div>

              {/* Hours */}
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="font-bold text-gray-900 mb-4">🕐 Operating Hours</h3>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Monday - Friday</dt>
                    <dd className="font-medium">5:00 AM - 11:00 PM</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Saturday</dt>
                    <dd className="font-medium">6:00 AM - 10:00 PM</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Sunday</dt>
                    <dd className="font-medium">6:00 AM - 9:00 PM</dd>
                  </div>
                </dl>
              </div>

              {/* Contact Info */}
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="font-bold text-gray-900 mb-4">📞 Contact Information</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <strong>Membership Sales:</strong><br/>
                    <a href="tel:512-555-5433" className="text-blue-600 hover:underline">(512) 555-5433</a>
                  </li>
                  <li>
                    <strong>Group Fitness:</strong><br/>
                    <a href="tel:512-555-5434" className="text-blue-600 hover:underline">(512) 555-5434</a>
                  </li>
                  <li>
                    <strong>Spa Services:</strong><br/>
                    <a href="tel:512-555-5435" className="text-blue-600 hover:underline">(512) 555-5435</a>
                  </li>
                  <li>
                    <strong>General Info:</strong><br/>
                    <a href="mailto:austinsl@lifetime.life" className="text-blue-600 hover:underline">austinsl@lifetime.life</a>
                  </li>
                </ul>
              </div>

              {/* Other Austin Locations */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">🏢 Other Austin Locations</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a href="https://www.lifetime.life/life-time-locations/tx-austin.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                      North Austin →
                    </a>
                    <p className="text-gray-500">2700 W Anderson Ln</p>
                  </li>
                  <li>
                    <a href="https://www.lifetime.life/life-time-locations/tx-lakeway.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">
                      Lakeway →
                    </a>
                    <p className="text-gray-500">1800 RR 620 S</p>
                  </li>
                </ul>
              </div>

              {/* Share */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">📤 Share This News</h3>
                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors">
                    Twitter
                  </button>
                  <button className="flex-1 bg-green-500 text-white py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors">
                    WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}