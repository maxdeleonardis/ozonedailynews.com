import type { Metadata } from "next";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "19th Century Austin Home Once Owned by Elijah Wood Listed at $3.2M | ObjectWire",
  description:
    "A historic 1890s Austin home previously owned by Lord of the Rings star Elijah Wood hits the market at $3.2 million. Inside the property's storied history and celebrity connection.",
  keywords: [
    "Elijah Wood",
    "Austin real estate",
    "historic home",
    "celebrity home",
    "Travis Heights",
    "Victorian architecture",
    "Austin Texas",
    "luxury real estate",
  ],
  alternates: {
    canonical: "https://www.objectwire.org/austin/19th-century-Austin-home-once-owned-Elijah-Wood-listed-at-3.2M",
  },
};

export default function ElijahWoodAustinHomePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Breadcrumb
        items={[
          { name: "Home", item: "/" },
          { name: "News", item: "/news" },
          { name: "Austin", item: "/austin" },
          { name: "Real Estate", item: "/austin/real-estate" },
        ]}
      />

      {/* Header */}
      <header className="mb-8">
        <div className="flex gap-2 mb-3">
          <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded uppercase">Real Estate</span>
          <span className="bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded uppercase">Celebrity</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
          19th Century Austin Home Once Owned by Elijah Wood Listed at $3.2M
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed mb-4">
          The meticulously restored 1895 Victorian in Travis Heights carries both architectural significance and Hollywood history as it seeks its next owner.
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-gray-500 border-b pb-4">
          <span>By <strong>ObjectWire Austin Bureau</strong></span>
          <span>Real Estate Desk</span>
          <span>January 23, 2026</span>
          <span>8 min read</span>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <article className="lg:col-span-2 space-y-6 text-gray-800 leading-relaxed">

          {/* Property Overview */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <h2 className="text-sm font-bold text-blue-800 uppercase tracking-wider mb-3">Property Overview</h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "$3.2 million", value: "asking price" },
                { label: "1895", value: "year built" },
                { label: "4,200 sq ft", value: "living space" },
                { label: "0.38 acres", value: "lot size" },
                { label: "5 bedrooms,", value: "4 bathrooms" },
                { label: "Travis Heights,", value: "South Austin location" },
              ].map((item, i) => (
                <div key={i} className="text-sm">
                  <span className="font-bold text-blue-900">{item.label}</span>{" "}
                  <span className="text-blue-700">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Lead Paragraph */}
          <p className="text-lg font-medium text-gray-900 leading-relaxed border-l-4 border-green-500 pl-4">
            A stunning piece of Austin history with an unexpected Hollywood connection has just hit
            the market. The 1895 Victorian home in the coveted Travis Heights neighborhood&mdash;once
            owned by Lord of the Rings star Elijah Wood&mdash;is now listed at $3.2 million, offering
            a rare opportunity to own one of the city&apos;s most meticulously preserved historic properties.
          </p>

          <p>
            The property, located just minutes from downtown Austin on a tree-lined street, represents
            a unique intersection of 19th-century craftsmanship, modern luxury updates, and celebrity
            provenance that has drawn significant attention from both real estate enthusiasts and
            architecture preservationists.
          </p>

          {/* Section: History */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">A Home with Deep Roots</h2>
            <p>
              Built in 1895 during Austin&apos;s post-Civil War expansion period, the home stands as one
              of the finest surviving examples of Victorian residential architecture in Central Texas.
              The original structure was commissioned by a prominent local merchant whose family
              occupied the residence for nearly three decades.
            </p>
            <p className="mt-4">
              The home changed hands several times throughout the 20th century, serving variously as
              a single-family residence, a boarding house during the 1940s, and eventually falling
              into disrepair by the 1990s. Its salvation came in the early 2000s when a local
              preservation group flagged it for potential landmark status.
            </p>
            <blockquote className="my-6 bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r">
              <p className="italic text-gray-700">
                &ldquo;This property represents an increasingly rare example of intact Victorian architecture
                in Austin. Its original millwork, wraparound porch, and period details make it worthy
                of protection and thoughtful restoration.&rdquo;
              </p>
              <footer className="mt-2 text-sm text-gray-500">
                &mdash; Austin Historic Preservation Office, <cite>2003 Assessment</cite>
              </footer>
            </blockquote>
          </section>

          {/* Section: Elijah Wood */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Elijah Wood Chapter</h2>
            <p>
              In 2012, actor <strong>Elijah Wood</strong>&mdash;best known for his portrayal of Frodo Baggins
              in Peter Jackson&apos;s Lord of the Rings trilogy&mdash;quietly purchased the property for a reported
              $1.1 million. Wood, who had developed an affinity for Austin&apos;s music and film scene, saw
              potential in the historic home that others had overlooked.
            </p>
            <p className="mt-4">
              During his ownership from 2012 to 2018, Wood undertook a comprehensive restoration project
              that balanced historical authenticity with modern livability. The actor reportedly worked
              closely with Austin-based preservation architects to ensure period-appropriate materials
              and techniques were used throughout the renovation.
            </p>

            {/* Key Figures */}
            <div className="my-6 space-y-3">
              {[
                {
                  name: "Elijah Wood",
                  role: "Previous Owner (2012-2018)",
                  description:
                    "Academy Award-nominated actor known for Lord of the Rings, Sin City, and numerous indie films. Austin resident and DJ under the name Wooden Wisdom.",
                },
                {
                  name: "Current Owners",
                  role: "Sellers (2018-Present)",
                  description:
                    "Private buyers who purchased from Wood and have maintained the property's restored condition. Names withheld per seller request.",
                },
              ].map((fig, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="font-bold text-gray-900">{fig.name}</div>
                  <div className="text-sm text-green-700 font-medium mb-1">{fig.role}</div>
                  <p className="text-sm text-gray-600">{fig.description}</p>
                </div>
              ))}
            </div>

            <p>
              Wood&apos;s restoration reportedly cost upwards of $800,000 and included foundation
              stabilization, complete electrical and plumbing modernization, HVAC installation
              (sensitively hidden to preserve aesthetics), and painstaking restoration of original
              woodwork, windows, and decorative elements.
            </p>

            <blockquote className="my-6 bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r">
              <p className="italic text-gray-700">
                &ldquo;Elijah approached this project like he approaches his film roles&mdash;with meticulous
                attention to detail. He wasn&apos;t just flipping a house; he was preserving a piece of
                Austin&apos;s story.&rdquo;
              </p>
              <footer className="mt-2 text-sm text-gray-500">&mdash; Real Estate Industry Source</footer>
            </blockquote>
          </section>

          {/* Section: Property Features */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Property Features</h2>
            <p>
              The home offers 4,200 square feet of living space across two stories, featuring five
              bedrooms and four bathrooms. Original architectural details include 12-foot ceilings,
              heart pine floors, ornate crown moldings, and a grand central staircase.
            </p>

            {/* Stats Box */}
            <div className="my-6 bg-blue-50 border border-blue-200 rounded-lg p-5">
              <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wider mb-3">Property Specifications</h3>
              <div className="grid grid-cols-4 gap-3 text-center">
                {[
                  { value: "4,200", label: "Square Feet" },
                  { value: "5", label: "Bedrooms" },
                  { value: "4", label: "Bathrooms" },
                  { value: "0.38", label: "Acres" },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl font-bold text-blue-900">{stat.value}</div>
                    <div className="text-xs text-blue-700">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <p><strong>Key features include:</strong></p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Original wraparound porch with period-appropriate restoration</li>
              <li>Chef&apos;s kitchen with Viking appliances and custom cabinetry</li>
              <li>Primary suite with spa bathroom and walk-in closet</li>
              <li>Detached two-car carriage house (converted garage)</li>
              <li>Mature live oak trees and professionally landscaped gardens</li>
              <li>Original fireplaces (3) with restored mantels</li>
              <li>Wine cellar and climate-controlled storage</li>
              <li>Modern security system with smart home integration</li>
            </ul>

            <p className="mt-4">
              The property also includes a 600-square-foot guest cottage at the rear of the lot,
              which Wood reportedly used as a music studio during his ownership. The cottage has
              been soundproofed and could serve as a home office, art studio, or additional guest quarters.
            </p>
          </section>

          {/* Section: Market Context */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Market Context &amp; Pricing</h2>
            <p>
              The $3.2 million asking price positions the property at the upper end of Austin&apos;s
              historic home market but reflects several premium factors: the Travis Heights location,
              the quality of restoration, the celebrity provenance, and the increasingly rare nature
              of intact Victorian properties in Central Austin.
            </p>
            <p className="mt-4">
              Travis Heights, one of Austin&apos;s oldest planned neighborhoods, has seen significant
              price appreciation over the past decade. The neighborhood&apos;s walkability to South
              Congress Avenue, proximity to downtown, and established tree canopy make it one
              of the most sought-after addresses in the city.
            </p>

            {/* Market Stats */}
            <div className="my-6 bg-yellow-50 border border-yellow-200 rounded-lg p-5">
              <h3 className="text-sm font-bold text-yellow-800 uppercase tracking-wider mb-3">Travis Heights Market Data</h3>
              <div className="grid grid-cols-4 gap-3 text-center">
                {[
                  { value: "$1.8M", label: "Median Price" },
                  { value: "15%", label: "YoY Growth" },
                  { value: "21", label: "Days on Market" },
                  { value: "98%", label: "List-to-Sale" },
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl font-bold text-yellow-900">{stat.value}</div>
                    <div className="text-xs text-yellow-700">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <blockquote className="my-6 bg-gray-50 border-l-4 border-gray-400 p-4 rounded-r">
              <p className="italic text-gray-700">
                &ldquo;Historic properties with this level of restoration and celebrity history are
                essentially irreplaceable inventory. The $3.2 million ask is aggressive but
                justifiable given the unique combination of factors.&rdquo;
              </p>
              <footer className="mt-2 text-sm text-gray-500">&mdash; Austin Real Estate Analyst</footer>
            </blockquote>
          </section>

          {/* Section: Viewing */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Viewing Information</h2>
            <p>
              The property is being marketed by a prominent Austin luxury real estate firm with
              showings available by appointment only. Due to anticipated interest, the listing
              agents have indicated they may implement an offer deadline if initial response is strong.
            </p>
            <p className="mt-4">
              Prospective buyers will need to demonstrate proof of funds or pre-approval before
              scheduling private tours. Virtual walkthrough options are available for out-of-state
              buyers considering relocation to Austin.
            </p>
            <p className="mt-4">
              <em>
                ObjectWire will update this story as the listing progresses. For real estate alerts
                and Austin market updates, subscribe to our newsletter.
              </em>
            </p>
          </section>

          {/* Tag */}
          <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
            <span className="inline-block bg-green-600 text-white text-xs font-bold px-2 py-1 rounded mb-2">
              #real-estate
            </span>
            <p className="text-sm text-gray-600">
              This article is part of ObjectWire&apos;s Austin real estate coverage.{" "}
              <a href="/austin/real-estate" className="text-green-600 hover:underline">
                View all real estate stories &rarr;
              </a>
            </p>
          </div>

          {/* Sources */}
          <div className="mt-8 border-t pt-6">
            <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-3">Sources</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="https://www.traviscad.org/" className="text-blue-600 hover:underline font-medium" target="_blank" rel="noopener noreferrer">
                  Travis County Appraisal District
                </a>
                {" "}&mdash; Property records and ownership history
              </li>
              <li>
                <a href="https://www.austintexas.gov/" className="text-blue-600 hover:underline font-medium" target="_blank" rel="noopener noreferrer">
                  Austin Historic Landmark Commission
                </a>
                {" "}&mdash; Historic designation records
              </li>
              <li>
                <span className="font-medium">Multiple Listing Service (MLS)</span>
                {" "}&mdash; Active listing data and property specifications
              </li>
              <li>
                <span className="font-medium">Real Estate Industry Sources</span>
                {" "}&mdash; Background interviews conducted January 2026
              </li>
            </ul>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Timeline */}
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4">Property Timeline</h3>
            <ol className="space-y-3">
              {[
                { date: "1895", description: "Home originally constructed" },
                { date: "1920s-1990s", description: "Various private owners" },
                { date: "2012", description: "Elijah Wood purchases property" },
                { date: "2015", description: "Major restoration completed" },
                { date: "2018", description: "Wood sells property" },
                { date: "January 2026", description: "Listed at $3.2M", highlight: true },
                { date: "Present", description: "Active listing", current: true },
              ].map((event, i) => (
                <li key={i} className={`flex gap-3 text-sm ${event.current ? "font-bold text-green-700" : event.highlight ? "font-semibold text-blue-700" : "text-gray-700"}`}>
                  <span className="shrink-0 font-mono text-xs mt-0.5 text-gray-400 w-20">{event.date}</span>
                  <span>{event.description}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Related Coverage */}
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4">Related Coverage</h3>
            <ul className="space-y-3">
              {[
                { href: "/austin/real-estate", category: "REAL ESTATE", color: "text-green-600", title: "Austin Housing Market Update: January 2026" },
                { href: "/austin/historic-homes", category: "ARCHITECTURE", color: "text-purple-600", title: "Austin's Most Historic Neighborhoods" },
                { href: "/austin/celebrity-homes", category: "CELEBRITY", color: "text-pink-600", title: "Celebrity-Owned Properties in Austin" },
              ].map((story, i) => (
                <li key={i}>
                  <span className={`text-xs font-bold uppercase ${story.color}`}>{story.category}</span>
                  <a href={story.href} className="block text-sm text-gray-800 hover:text-blue-600 leading-snug mt-0.5">
                    {story.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Documents */}
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-4">Key Documents</h3>
            <ul className="space-y-2">
              {[
                { label: "Travis County Property Records", href: "https://www.traviscad.org/" },
                { label: "Austin Historic Landmark Registry", href: "https://www.austintexas.gov/department/historic-preservation" },
              ].map((doc, i) => (
                <li key={i}>
                  <a href={doc.href} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline flex items-center gap-1">
                    <span>&nearr;</span> {doc.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <h3 className="font-bold text-green-900 mb-1">Austin Real Estate Alerts</h3>
            <p className="text-sm text-green-700 mb-3">Get notified about notable property listings and market updates.</p>
            <a href="/get-help" className="block w-full text-center bg-green-600 hover:bg-green-700 text-white text-sm font-semibold py-2 rounded transition">
              Subscribe
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}