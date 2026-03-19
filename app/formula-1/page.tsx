import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { NewsArticleSchema, OrganizationSchema } from '@/components/NewsArticleSchema';

export const metadata: Metadata = {
  title: "Formula 1 - FIA Formula One World Championship | ObjectWire",
  description: "Comprehensive guide to Formula 1, the pinnacle of motorsport. Explore F1 history, 2026 teams and drivers, race calendar, regulations, and the global phenomenon of Grand Prix racing.",
  alternates: {
    canonical: 'https://www.objectwire.org/formula-1',
  },
  keywords: ['Formula 1', 'F1', 'Grand Prix', 'Formula One', 'Max Verstappen', 'Lewis Hamilton', 'Ferrari', 'Mercedes', 'Red Bull Racing', 'motorsport'],
};

export default function Formula1WikiPage() {
  const breadcrumbItems = [
    { name: 'Home', item: '/' },
    { name: 'Formula 1', item: '/formula-1' },
  ];

  return (
    <>
      {/* SEO Schemas */}
      <NewsArticleSchema
        title="Formula 1 - FIA Formula One World Championship"
        description="Comprehensive guide to Formula 1, the pinnacle of motorsport. Explore F1 history, 2026 teams and drivers, race calendar, regulations, and Grand Prix racing."
        author="Alfansa - ObjectWire Editorial"
        publishedTime="2026-02-19"
        modifiedTime="2026-02-19"
        articleUrl="https://www.objectwire.org/formula-1"
        section="Sports"
        keywords={['Formula 1', 'F1', 'Grand Prix', 'motorsport', 'Max Verstappen', 'Lewis Hamilton']}
      />
      <OrganizationSchema />

      <div className="min-h-screen bg-white">
        {/* Breadcrumb Navigation */}
        <div className="container mx-auto px-4 pt-4 max-w-6xl">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        {/* Wikipedia-Style Header */}
        <header className="border-b border-gray-200 pb-6 mb-6">
          <div className="container mx-auto px-4 max-w-6xl">
            <h1 className="text-4xl font-serif mb-2">Formula One</h1>
            <p className="text-gray-600 italic">
              From ObjectWire, the verification-first intelligence platform
            </p>
          </div>
        </header>

        <div className="container mx-auto px-4 max-w-6xl pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content - Wikipedia Style */}
            <main className="lg:col-span-8">
              {/* Lead Paragraph */}
              <p className="text-lg leading-relaxed mb-6">
                <strong>Formula One (F1)</strong> is the highest class of international single-seater <Link href="/auto-racing" className="text-blue-600 hover:underline">auto racing</Link> sanctioned by the <strong>Fédération Internationale de l'Automobile (FIA)</strong>. Featuring purpose-built open-cockpit cars capable of speeds exceeding 350 km/h (217 mph), F1 represents the pinnacle of motorsport technology, driver skill, and team engineering. The <strong>FIA Formula One World Championship</strong>, contested annually since 1950, crowns both a Drivers' Champion and a Constructors' Champion across a calendar of Grands Prix held on purpose-built circuits and public roads worldwide.
              </p>

              {/* Table of Contents */}
              <nav className="bg-gray-50 border border-gray-200 p-4 mb-8 rounded-lg">
                <h2 className="font-bold text-gray-900 mb-3 border-b border-gray-300 pb-2">Contents</h2>
                <ol className="space-y-1 text-sm">
                  <li><a href="#overview" className="text-blue-600 hover:underline">1 Overview</a></li>
                  <li><a href="#history" className="text-blue-600 hover:underline">2 History</a></li>
                  <li><a href="#regulations" className="text-blue-600 hover:underline">3 Regulations</a></li>
                  <li><a href="#teams-2026" className="text-blue-600 hover:underline">4 2026 Teams and Drivers</a></li>
                  <li><a href="#calendar" className="text-blue-600 hover:underline">5 Race Calendar</a></li>
                  <li><a href="#champions" className="text-blue-600 hover:underline">6 World Champions</a></li>
                  <li><a href="#business" className="text-blue-600 hover:underline">7 Business Model</a></li>
                  <li><a href="#controversies" className="text-blue-600 hover:underline">8 Controversies</a></li>
                  <li><a href="#technology" className="text-blue-600 hover:underline">9 Technology</a></li>
                  <li><a href="#seealso" className="text-blue-600 hover:underline">10 See Also</a></li>
                  <li><a href="#references" className="text-blue-600 hover:underline">11 References</a></li>
                </ol>
              </nav>

              {/* Overview Section */}
              <section id="overview" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Overview</h2>
                
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold w-1/3">Category</th>
                        <td className="p-3">Open-wheel single-seater auto racing</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold">Sanctioning Body</th>
                        <td className="p-3">Fédération Internationale de l'Automobile (FIA)</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold">First Championship</th>
                        <td className="p-3">1950 (British Grand Prix, Silverstone)</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold">2026 Teams</th>
                        <td className="p-3">11 teams, 22 drivers</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold">Engine Suppliers</th>
                        <td className="p-3">Mercedes, Ferrari, Red Bull, Honda, Alpine, Audi</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold">Tyre Supplier</th>
                        <td className="p-3">Pirelli</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <th className="bg-gray-50 p-3 text-left font-semibold">Fuel</th>
                        <td className="p-3">Sustainable fuel (E10 ethanol blend)</td>
                      </tr>
                      <tr>
                        <th className="bg-gray-50 p-3 text-left font-semibold">Reigning Champions</th>
                        <td className="p-3">Lando Norris (Driver), McLaren-Mercedes (Constructor)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* History Section */}
              <section id="history" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">History</h2>
                
                <h3 className="text-lg font-semibold mb-3">Origins (1920s–1949)</h3>
                <p className="mb-4 leading-relaxed">
                  Grand Prix racing emerged in Europe during the 1920s and 1930s, with the <strong>European Drivers' Championship</strong> (1931–1939) representing an early attempt at organized competition. World War II halted racing development, but the post-war period saw renewed efforts to standardize international motorsport.
                </p>

                <h3 className="text-lg font-semibold mb-3">The Birth of F1 (1950)</h3>
                <p className="mb-4 leading-relaxed">
                  The <strong>FIA Formula One World Championship</strong> was officially established in 1950, with the inaugural race held at <strong>Silverstone Circuit</strong> in the United Kingdom on <strong>May 13, 1950</strong>. The race was won by Italian driver <strong>Giuseppe "Nino" Farina</strong> driving for Alfa Romeo. The 1950 season consisted of seven races, including six in Europe and the Indianapolis 500 in the United States.
                </p>

                <p className="mb-4 leading-relaxed">
                  Farina would go on to become the first-ever <strong>Formula One World Drivers' Champion</strong>, narrowly defeating his teammate Juan Manuel Fangio. The Constructors' Championship was not introduced until 1958.
                </p>

                <h3 className="text-lg font-semibold mb-3">Evolution and Innovation</h3>
                <p className="mb-4 leading-relaxed">
                  F1 has been defined by constant innovation. The 1958 season saw <strong>Cooper</strong> introduce the first successful rear-engine car, revolutionizing the sport. The 1970s brought ground effect aerodynamics, while the 1980s saw the rise of turbocharged engines. Safety has been an ongoing priority, particularly following the tragic deaths of Ayrton Senna (1994) and Roland Ratzenberger (1994), which prompted comprehensive safety reforms.
                </p>

                <h3 className="text-lg font-semibold mb-3">Modern Era</h3>
                <p className="leading-relaxed">
                  The 21st century has seen intense rivalries between multiple teams. <strong>Michael Schumacher</strong> and Ferrari dominated the early 2000s, followed by the rise of Red Bull and Sebastian Vettel. The hybrid era (2014–present) ushered in complex power units and Mercedes dominance, with Lewis Hamilton tying Schumacher's seven championships. The current era features closer competition following cost cap implementation in 2021.
                </p>
              </section>

              {/* Regulations Section */}
              <section id="regulations" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Regulations</h2>
                
                <h3 className="text-lg font-semibold mb-3">The Formula</h3>
                <p className="mb-4 leading-relaxed">
                  The "formula" in Formula One refers to the set of rules governing car design and competition. These regulations cover every aspect of the vehicle:
                </p>

                <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                  <li><strong>Chassis:</strong> Carbon fiber composite monocoque, minimum weight 798kg (including driver)</li>
                  <li><strong>Engines:</strong> 1.6L V6 turbo-hybrid power units with Energy Recovery Systems (ERS)</li>
                  <li><strong>Aerodynamics:</strong> Complex wings, floor tunnels, and DRS (Drag Reduction System) for overtaking</li>
                  <li><strong>Safety:</strong> Halo cockpit protection device, HANS device, survival cell requirements</li>
                  <li><strong>Tires:</strong> Pirelli supplies five dry compounds (C1-C5) plus intermediates and wets</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3">2026 Regulations</h3>
                <p className="mb-4 leading-relaxed">
                  The 2026 season introduces significant changes to both cars and power units:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                  <li><strong>Active Aerodynamics:</strong> Movable front and rear wings for reduced drag on straights</li>
                  <li><strong>Simplified Power Unit:</strong> Removal of MGU-H (Motor Generator Unit-Heat), retaining MGU-K</li>
                  <li><strong>Increased Electrical Power:</strong> 350kW from the electric motor (up from 120kW)</li>
                  <li><strong>Smaller Cars:</strong> Narrower and shorter dimensions for better racing</li>
                  <li><strong>100% Sustainable Fuel:</strong> Synthetic fuels to maintain combustion engines while reducing emissions</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3">Race Weekend Format</h3>
                <p className="leading-relaxed">
                  A traditional Grand Prix weekend spans three days:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                  <li><strong>Friday:</strong> Two free practice sessions (FP1, FP2)</li>
                  <li><strong>Saturday:</strong> Final practice (FP3) and Qualifying (Q1, Q2, Q3 sessions)</li>
                  <li><strong>Sunday:</strong> Grand Prix race (305km/190 miles minimum, ~1.5-2 hours)</li>
                </ul>
                <p className="mb-4 leading-relaxed">
                  Sprint weekends feature a shorter race on Saturday that sets the grid for Sunday's main event, adding strategic complexity.
                </p>

                <h3 className="text-lg font-semibold mb-3">Points System</h3>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-300">
                        <th className="p-3 text-left font-semibold">Position</th>
                        <th className="p-3 text-left font-semibold">Points</th>
                        <th className="p-3 text-left font-semibold">Position</th>
                        <th className="p-3 text-left font-semibold">Points</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-medium">1st</td>
                        <td className="p-3">25</td>
                        <td className="p-3 font-medium">6th</td>
                        <td className="p-3">8</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-medium">2nd</td>
                        <td className="p-3">18</td>
                        <td className="p-3 font-medium">7th</td>
                        <td className="p-3">6</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-medium">3rd</td>
                        <td className="p-3">15</td>
                        <td className="p-3 font-medium">8th</td>
                        <td className="p-3">4</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-medium">4th</td>
                        <td className="p-3">12</td>
                        <td className="p-3 font-medium">9th</td>
                        <td className="p-3">2</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">5th</td>
                        <td className="p-3">10</td>
                        <td className="p-3 font-medium">10th</td>
                        <td className="p-3">1</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed">
                  An additional point is awarded for the fastest lap (if the driver finishes in the top 10).
                </p>
              </section>

              {/* 2026 Teams Section */}
              <section id="teams-2026" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">2026 Teams and Drivers</h2>
                
                <p className="mb-4 leading-relaxed">
                  The 2026 Formula 1 season features <strong>11 teams</strong> competing with 22 drivers. Notable changes include <strong>General Motors' Cadillac</strong> entering as the 11th team, while existing teams have shuffled driver lineups significantly.
                </p>

                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-300">
                        <th className="p-3 text-left font-semibold">Team</th>
                        <th className="p-3 text-left font-semibold">Driver 1</th>
                        <th className="p-3 text-left font-semibold">Driver 2</th>
                        <th className="p-3 text-left font-semibold">Engine</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-medium">McLaren</td>
                        <td className="p-3">Lando Norris</td>
                        <td className="p-3">Oscar Piastri</td>
                        <td className="p-3">Mercedes</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-medium">Mercedes</td>
                        <td className="p-3">Kimi Antonelli</td>
                        <td className="p-3">George Russell</td>
                        <td className="p-3">Mercedes</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-medium">Red Bull Racing</td>
                        <td className="p-3">Max Verstappen</td>
                        <td className="p-3">Isack Hadjar</td>
                        <td className="p-3">Red Bull</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-medium">Ferrari</td>
                        <td className="p-3">Charles Leclerc</td>
                        <td className="p-3">Lewis Hamilton</td>
                        <td className="p-3">Ferrari</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-medium">Williams</td>
                        <td className="p-3">Alex Albon</td>
                        <td className="p-3">Carlos Sainz</td>
                        <td className="p-3">Mercedes</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-medium">Aston Martin</td>
                        <td className="p-3">Fernando Alonso</td>
                        <td className="p-3">Lance Stroll</td>
                        <td className="p-3">Honda</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-medium">Racing Bulls</td>
                        <td className="p-3">Liam Lawson</td>
                        <td className="p-3">Arvid Lindblad</td>
                        <td className="p-3">Red Bull</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-medium">Haas</td>
                        <td className="p-3">Esteban Ocon</td>
                        <td className="p-3">Ollie Bearman</td>
                        <td className="p-3">Ferrari</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-medium">Alpine</td>
                        <td className="p-3">Pierre Gasly</td>
                        <td className="p-3">Franco Colapinto</td>
                        <td className="p-3">Alpine</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3 font-medium">Audi</td>
                        <td className="p-3">Nico Hulkenberg</td>
                        <td className="p-3">Gabriel Bortoleto</td>
                        <td className="p-3">Audi</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Cadillac</td>
                        <td className="p-3">Sergio Perez</td>
                        <td className="p-3">Valtteri Bottas</td>
                        <td className="p-3">Ferrari</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-semibold mb-3">Notable Driver Changes for 2026</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                  <li><strong>Lewis Hamilton:</strong> Moves from Mercedes to Ferrari after 12 seasons with the Silver Arrows</li>
                  <li><strong>Carlos Sainz:</strong> Joins Williams after losing his Ferrari seat to Hamilton</li>
                  <li><strong>Kimi Antonelli:</strong> Mercedes rookie replaces Hamilton, making F1 debut</li>
                  <li><strong>Cadillac:</strong> New team brings Sergio Perez and Valtteri Bottas back to the grid</li>
                  <li><strong>Audi:</strong> Full works team entry with Nico Hulkenberg and rookie Gabriel Bortoleto</li>
                </ul>
              </section>

              {/* Calendar Section */}
              <section id="calendar" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">2026 Race Calendar</h2>
                
                <p className="mb-4 leading-relaxed">
                  The 2026 FIA Formula One World Championship features a record <strong>24 Grands Prix</strong> across 21 countries, with the season opening in Australia and concluding in Abu Dhabi.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6 not-prose">
                  <div className="space-y-2">
                    <h4 className="font-bold text-gray-900">Opening Rounds</h4>
                    <ul className="text-sm space-y-1">
                      <li>1. <strong>Australian GP</strong> - Melbourne (March)</li>
                      <li>2. <strong>Chinese GP</strong> - Shanghai</li>
                      <li>3. <strong>Japanese GP</strong> - Suzuka</li>
                      <li>4. <strong>Bahrain GP</strong> - Sakhir</li>
                      <li>5. <strong>Saudi Arabian GP</strong> - Jeddah</li>
                      <li>6. <strong>Miami GP</strong> - USA</li>
                      <li>7. <strong>Emilia Romagna GP</strong> - Imola</li>
                      <li>8. <strong>Monaco GP</strong> - Monte Carlo</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-gray-900">European Season</h4>
                    <ul className="text-sm space-y-1">
                      <li>9. <strong>Spanish GP</strong> - Barcelona</li>
                      <li>10. <strong>Canadian GP</strong> - Montreal</li>
                      <li>11. <strong>Austrian GP</strong> - Spielberg</li>
                      <li>12. <strong>British GP</strong> - Silverstone</li>
                      <li>13. <strong>Belgian GP</strong> - Spa-Francorchamps</li>
                      <li>14. <strong>Hungarian GP</strong> - Budapest</li>
                      <li>15. <strong>Dutch GP</strong> - Zandvoort</li>
                      <li>16. <strong>Italian GP</strong> - Monza</li>
                    </ul>
                  </div>
                </div>

                <p className="leading-relaxed">
                  The calendar continues with races in Azerbaijan, Singapore, United States (Austin), Mexico, Brazil, Las Vegas, Qatar, and concludes with the Abu Dhabi Grand Prix in December.
                </p>
              </section>

              {/* Champions Section */}
              <section id="champions" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">World Champions</h2>
                
                <h3 className="text-lg font-semibold mb-3">Most Successful Drivers</h3>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-300">
                        <th className="p-3 text-left font-semibold">Rank</th>
                        <th className="p-3 text-left font-semibold">Driver</th>
                        <th className="p-3 text-left font-semibold">Titles</th>
                        <th className="p-3 text-left font-semibold">Years</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="p-3">1</td>
                        <td className="p-3 font-medium">Michael Schumacher</td>
                        <td className="p-3">7</td>
                        <td className="p-3">1994-95, 2000-04</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3">=1</td>
                        <td className="p-3 font-medium">Lewis Hamilton</td>
                        <td className="p-3">7</td>
                        <td className="p-3">2008, 2014-15, 2017-20</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3">3</td>
                        <td className="p-3 font-medium">Juan Manuel Fangio</td>
                        <td className="p-3">5</td>
                        <td className="p-3">1951, 1954-57</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3">=3</td>
                        <td className="p-3 font-medium">Max Verstappen</td>
                        <td className="p-3">5</td>
                        <td className="p-3">2021-2025</td>
                      </tr>
                      <tr>
                        <td className="p-3">5</td>
                        <td className="p-3 font-medium">Alain Prost</td>
                        <td className="p-3">4</td>
                        <td className="p-3">1985-86, 1989, 1993</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-semibold mb-3">Most Successful Constructors</h3>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full border-collapse border border-gray-300 text-sm">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-300">
                        <th className="p-3 text-left font-semibold">Rank</th>
                        <th className="p-3 text-left font-semibold">Constructor</th>
                        <th className="p-3 text-left font-semibold">Titles</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="p-3">1</td>
                        <td className="p-3 font-medium">Ferrari</td>
                        <td className="p-3">16</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3">2</td>
                        <td className="p-3 font-medium">McLaren</td>
                        <td className="p-3">9</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="p-3">3</td>
                        <td className="p-3 font-medium">Mercedes</td>
                        <td className="p-3">8</td>
                      </tr>
                      <tr>
                        <td className="p-3">4</td>
                        <td className="p-3 font-medium">Red Bull</td>
                        <td className="p-3">6</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Business Model Section */}
              <section id="business" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Business Model</h2>
                
                <h3 className="text-lg font-semibold mb-3">Commercial Rights</h3>
                <p className="mb-4 leading-relaxed">
                  Formula 1's commercial rights are owned by <strong>Liberty Media</strong>, which acquired the sport from CVC Capital Partners in 2017 for $4.6 billion. Liberty has transformed F1's commercial approach, expanding digital presence and targeting new markets—particularly the United States.
                </p>

                <h3 className="text-lg font-semibold mb-3">Revenue Streams</h3>
                <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                  <li><strong>Broadcast Rights:</strong> Global TV deals worth billions annually</li>
                  <li><strong>Race Promoter Fees:</strong> Circuits pay hosting fees (newer venues pay premium rates)</li>
                  <li><strong>Sponsorship:</strong> Global partners include Rolex, Pirelli, DHL, Crypto.com</li>
                  <li><strong>Hospitality:</strong> Paddock Club and VIP experiences</li>
                  <li><strong>Merchandising:</strong> Official F1 store and team products</li>
                </ul>

                <h3 className="text-lg font-semibold mb-3">Prize Money Distribution</h3>
                <p className="leading-relaxed">
                  The Concorde Agreement (commercial agreement between FIA, FOM, and teams) governs prize money distribution. Teams receive payments based on championship position, with additional bonuses for:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                  <li><strong>Column 1 Payments:</strong> Equal share for all teams that completed two of previous three seasons</li>
                  <li><strong>Column 2 Payments:</strong> Performance-based (championship position)</li>
                  <li><strong>Long-Standing Team Bonus:</strong> Ferrari receives additional payment as the only ever-present team</li>
                  <li><strong>Constructors' Championship Bonus:</strong> Additional payments for top three finishers</li>
                </ul>
                <p className="leading-relaxed">
                  Total prize fund exceeds <strong>$1 billion annually</strong>, with the championship-winning team receiving approximately $100-150 million.
                </p>
              </section>

              {/* Controversies Section */}
              <section id="controversies" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Controversies</h2>
                
                <h3 className="text-lg font-semibold mb-3">Safety Debates</h3>
                <p className="mb-4 leading-relaxed">
                  Despite massive safety improvements, F1 continues to face scrutiny following serious incidents. The introduction of the <strong>Halo</strong> device in 2018 was initially controversial but has since saved multiple lives, including Lewis Hamilton at Monza 2021 and Zhou Guanyu at Silverstone 2022.
                </p>

                <h3 className="text-lg font-semibold mb-3">Team Orders</h3>
                <p className="mb-4 leading-relaxed">
                  The 2002 Austrian Grand Prix saw Ferrari order Rubens Barrichello to cede victory to Michael Schumacher, sparking outrage and a ban on team orders (later rescinded). Similar controversies erupted at Multi 21 (Red Bull, 2013) and various Mercedes team orders during the Hamilton-Rosberg era.
                </p>

                <h3 className="text-lg font-semibold mb-3">Budget Cap Breaches</h3>
                <p className="mb-4 leading-relaxed">
                  The 2022 season saw Red Bull found in minor breach of the $145 million cost cap for 2021, resulting in a $7 million fine and reduced wind tunnel time. The case highlighted enforcement challenges in monitoring team spending across complex multinational operations.
                </p>

                <h3 className="text-lg font-semibold mb-3">Red Bull Dual Team Ownership</h3>
                <p className="leading-relaxed">
                  Red Bull's ownership of two F1 teams (Red Bull Racing and Racing Bulls) continues to generate debate. Critics argue the arrangement allows inappropriate information sharing and creates a voting bloc in F1 governance, while Red Bull maintains the teams operate independently.
                </p>
              </section>

              {/* Technology Section */}
              <section id="technology" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">Technology</h2>
                
                <p className="mb-4 leading-relaxed">
                  Formula 1 has pioneered numerous technologies that have transferred to road cars:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-6 ml-4">
                  <li><strong>Carbon Fiber:</strong> First used in F1, now common in high-performance road cars</li>
                  <li><strong>Hybrid Systems:</strong> KERS and ERS technology influenced road car hybrids</li>
                  <li><strong>Aerodynamics:</strong> Underbody airflow management, DRS concepts</li>
                  <li><strong>Safety:</strong> Carbon fiber survival cell, crash structures, HANS device</li>
                  <li><strong>Data Analytics:</strong> Real-time telemetry processing, predictive modeling</li>
                </ul>
                <p className="leading-relaxed">
                  The 2026 regulations push for greater road relevance with 100% sustainable fuels and simplified hybrid systems that could inform future production vehicles.
                </p>
              </section>

              {/* See Also Section */}
              <section id="seealso" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">See Also</h2>
                <div className="columns-2 gap-8">
                  <ul>
                    <li><Link href="/redbull" className="text-blue-600 hover:underline">Red Bull Racing</Link></li>
                    <li><Link href="/ferrari" className="text-blue-600 hover:underline">Scuderia Ferrari</Link></li>
                    <li><Link href="/mercedes" className="text-blue-600 hover:underline">Mercedes-AMG F1</Link></li>
                    <li><Link href="/max-verstappen" className="text-blue-600 hover:underline">Max Verstappen</Link></li>
                  </ul>
                  <ul>
                    <li><Link href="/lewis-hamilton" className="text-blue-600 hover:underline">Lewis Hamilton</Link></li>
                    <li><Link href="/motorsport" className="text-blue-600 hover:underline">Motorsport</Link></li>
                    <li><Link href="/grand-prix" className="text-blue-600 hover:underline">Grand Prix Racing</Link></li>
                    <li><Link href="/fia" className="text-blue-600 hover:underline">FIA</Link></li>
                  </ul>
                </div>
              </section>

              {/* References Section */}
              <section id="references" className="mb-10">
                <h2 className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4">References</h2>
                <ol className="text-sm text-gray-600 space-y-2">
                  <li>"The History of Formula 1: From Its Origins to Modern-Day Glory." <em>Belushis</em>, belushis.com.</li>
                  <li>"F1 History | F1 History From 1950." <em>Formula One History</em>, formulaonehistory.com.</li>
                  <li>"A Brief History of F1." <em>F1 Arcade</em>, f1arcade.com.</li>
                  <li>"Formula One." <em>Wikipedia</em>, en.wikipedia.org/wiki/Formula_One.</li>
                  <li>"Formula One (F1) | History, Drivers, Teams." <em>Britannica</em>, britannica.com.</li>
                  <li>"Who are the 2026 Formula 1 drivers?" <em>Formula1.com</em>, formula1.com.</li>
                  <li>"Every 2026 F1 driver line-up ranked from worst to best." <em>The Race</em>, the-race.com.</li>
                  <li>"2026 Formula One World Championship." <em>Wikipedia</em>, en.wikipedia.org/wiki/2026_Formula_One_World_Championship.</li>
                  <li>"F1 2026 Bahrain week two pre-season testing driver line-ups." <em>Racing News 365</em>, racingnews365.com.</li>
                  <li>"Bahrain F1 2026 second test: When is each driver in the car?" <em>The Race</em>, the-race.com.</li>
                </ol>
              </section>
            </main>

            {/* Wikipedia-Style Info Box Sidebar */}
            <aside className="lg:col-span-4">
              <div className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden sticky top-4">
                <div className="bg-gray-100 p-3 border-b border-gray-200">
                  <h2 className="font-bold text-center text-gray-900">Formula One</h2>
                </div>
                
                <div className="p-4 space-y-4 text-sm">
                  {/* Logo Placeholder */}
                  <div className="bg-white border border-gray-200 p-4 text-center">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-red-600 to-black rounded-lg flex items-center justify-center mb-2">
                      <span className="text-white font-bold text-2xl">F1</span>
                    </div>
                    <p className="text-xs text-gray-500">FIA Formula One World Championship</p>
                  </div>

                  {/* Quick Facts */}
                  <div>
                    <h3 className="font-bold text-gray-900 border-b border-gray-200 pb-1 mb-2">Quick Facts</h3>
                    <dl className="space-y-2">
                      <div>
                        <dt className="text-gray-500 text-xs">Category</dt>
                        <dd>Open-wheel racing</dd>
                      </div>
                      <div>
                        <dt className="text-gray-500 text-xs">Founded</dt>
                        <dd>1950</dd>
                      </div>
                      <div>
                        <dt className="text-gray-500 text-xs">First Race</dt>
                        <dd>British GP, May 13, 1950</dd>
                      </div>
                      <div>
                        <dt className="text-gray-500 text-xs">2026 Teams</dt>
                        <dd>11 teams, 22 drivers</dd>
                      </div>
                      <div>
                        <dt className="text-gray-500 text-xs">2026 Races</dt>
                        <dd>24 Grands Prix</dd>
                      </div>
                      <div>
                        <dt className="text-gray-500 text-xs">Reigning Champions</dt>
                        <dd>Norris (D), McLaren (C)</dd>
                      </div>
                    </dl>
                  </div>

                  {/* Top Teams */}
                  <div>
                    <h3 className="font-bold text-gray-900 border-b border-gray-200 pb-1 mb-2">Top Teams 2026</h3>
                    <ul className="space-y-1 text-xs">
                      <li>• McLaren (Mercedes)</li>
                      <li>• Ferrari (Ferrari)</li>
                      <li>• Red Bull (Red Bull)</li>
                      <li>• Mercedes (Mercedes)</li>
                      <li>• Aston Martin (Honda)</li>
                    </ul>
                  </div>

                  {/* Star Drivers */}
                  <div>
                    <h3 className="font-bold text-gray-900 border-b border-gray-200 pb-1 mb-2">Star Drivers</h3>
                    <ul className="space-y-1 text-xs">
                      <li>• Max Verstappen</li>
                      <li>• Lewis Hamilton</li>
                      <li>• Lando Norris</li>
                      <li>• Charles Leclerc</li>
                      <li>• Fernando Alonso</li>
                    </ul>
                  </div>

                  {/* Official */}
                  <div>
                    <h3 className="font-bold text-gray-900 border-b border-gray-200 pb-1 mb-2">Official Website</h3>
                    <a href="https://www.formula1.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-xs">
                      formula1.com
                    </a>
                  </div>

                  {/* Related Links */}
                  <div>
                    <h3 className="font-bold text-gray-900 border-b border-gray-200 pb-1 mb-2">Related</h3>
                    <ul className="space-y-1">
                      <li>
                        <Link href="/redbull" className="text-blue-600 hover:underline text-xs">Red Bull Racing</Link>
                      </li>
                      <li>
                        <Link href="/ferrari" className="text-blue-600 hover:underline text-xs">Scuderia Ferrari</Link>
                      </li>
                      <li>
                        <Link href="/max-verstappen" className="text-blue-600 hover:underline text-xs">Max Verstappen</Link>
                      </li>
                      <li>
                        <Link href="/lewis-hamilton" className="text-blue-600 hover:underline text-xs">Lewis Hamilton</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-200 bg-gray-50 py-8">
          <div className="container mx-auto px-4 max-w-6xl text-center text-sm text-gray-600">
            <p>
              This article is part of <Link href="/" className="text-blue-600 hover:underline">ObjectWire</Link>'s sports coverage.
              Last updated: February 19, 2026.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
