import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Upside - Cash Back Rewards Platform Profile | ObjectWire',
  description: 'Complete profile of Upside, the mobile app offering cash back rewards at stores, restaurants, and gas stations. Radical transparency workplace culture with unlimited PTO.',
  openGraph: {
    title: 'Upside - Cash Back Rewards Platform',
    description: 'Mobile app providing cash back rewards with a transparent, engineer-focused workplace culture.',
    type: 'article',
  },
};

export default function UpsidePage() {
  return (
    <div className="min-h-screen bg-white">
      <article className="max-w-5xl mx-auto px-4 py-12">
        
        {/* HEADER */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">Upside</h1>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">We're Hiring</span>
          </div>
          <p className="text-2xl text-gray-600 font-light mb-6">Cash Back Rewards Platform</p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">Fintech</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">Mobile App</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">Rewards & Loyalty</span>
            <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">Consumer Tech</span>
          </div>

          <div className="border-l-4 border-blue-600 pl-6 py-4 bg-blue-50 rounded-r-lg">
            <p className="text-lg text-gray-800 leading-relaxed">
              Upside's mobile app lets users earn cash back rewards when they spend money at select stores, restaurants, and gas stations. The company prioritizes "radical transparency" in the workplace and offers benefits like unlimited PTO and learning and development opportunities to support a team that includes software engineers and product professionals.
            </p>
          </div>
        </header>

        {/* QUICK FACTS */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Quick Facts</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <dl className="space-y-3">
                <div className="flex border-b border-gray-200 pb-2">
                  <dt className="font-semibold text-gray-700 w-40">Founded:</dt>
                  <dd className="text-gray-900">2016</dd>
                </div>
                <div className="flex border-b border-gray-200 pb-2">
                  <dt className="font-semibold text-gray-700 w-40">Headquarters:</dt>
                  <dd className="text-gray-900">Washington, DC</dd>
                </div>
                <div className="flex border-b border-gray-200 pb-2">
                  <dt className="font-semibold text-gray-700 w-40">Industry:</dt>
                  <dd className="text-gray-900">Fintech, Mobile Commerce</dd>
                </div>
              </dl>
            </div>
            <div>
              <dl className="space-y-3">
                <div className="flex border-b border-gray-200 pb-2">
                  <dt className="font-semibold text-gray-700 w-40">Product:</dt>
                  <dd className="text-gray-900">Cash Back Mobile App</dd>
                </div>
                <div className="flex border-b border-gray-200 pb-2">
                  <dt className="font-semibold text-gray-700 w-40">Culture:</dt>
                  <dd className="text-gray-900">Radical Transparency</dd>
                </div>
                <div className="flex border-b border-gray-200 pb-2">
                  <dt className="font-semibold text-gray-700 w-40">Open Positions:</dt>
                  <dd className="text-gray-900">15+ roles</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* COMPANY OVERVIEW */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-gray-200 pb-2">Company Overview</h2>
          
          <p className="text-lg leading-relaxed mb-6 text-gray-800">
            Upside is a fintech company that has revolutionized the way consumers earn rewards on everyday purchases. Through its mobile application, users can discover nearby businesses offering cash back rewards, make purchases, and receive real money deposited directly into their bank accounts or through other payout methods.
          </p>

          <p className="text-lg leading-relaxed mb-6 text-gray-800">
            Founded in 2016, Upside has grown into a major player in the rewards and loyalty space by creating a win-win marketplace that benefits both consumers seeking value and businesses looking to attract profitable customers. The platform operates across three primary categories: gas stations, grocery stores, and restaurants.
          </p>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 mb-6 border border-blue-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">💡 The Upside Model</h3>
            <p className="text-lg text-gray-800 leading-relaxed">
              Unlike traditional rewards programs tied to specific retailers or credit cards, Upside partners with thousands of businesses to offer personalized cash back deals. Users simply claim offers in the app, make purchases as normal, and receive actual cash back—not points or restricted credits. This transparency and simplicity has resonated with millions of users nationwide.
            </p>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-gray-200 pb-2">How Upside Works</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white border-2 border-blue-300 rounded-lg p-6 text-center">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">1. Find Offers</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Open the Upside app to discover cash back offers at nearby gas stations, restaurants, and stores. Offers are personalized based on your location and preferences.
              </p>
            </div>

            <div className="bg-white border-2 border-green-300 rounded-lg p-6 text-center">
              <div className="text-5xl mb-4">💳</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">2. Make Purchase</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Claim an offer in the app, then pay with your linked credit or debit card at the business. No coupons or codes required—just shop normally.
              </p>
            </div>

            <div className="bg-white border-2 border-purple-300 rounded-lg p-6 text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">3. Get Cash Back</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Receive real cash back deposited to your bank account, PayPal, or as a gift card. Cash out anytime once you reach the minimum threshold.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4 text-gray-900">Categories & Partners</h3>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6 border border-red-200">
              <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-2xl">⛽</span> Gas Stations
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Earn cash back on every gallon of gas purchased at thousands of participating stations. This is often Upside's highest value category, with users saving significant amounts on fuel over time.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
              <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-2xl">🛒</span> Grocery Stores
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Get cash back on grocery purchases at select supermarkets and grocery chains. Stackable with existing loyalty programs for maximum savings.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
              <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-2xl">🍽️</span> Restaurants
              </h4>
              <p className="text-gray-700 leading-relaxed">
                Earn rewards dining at local restaurants and national chains. Perfect for everyday meals and special occasions alike.
              </p>
            </div>
          </div>
        </section>

        {/* VALUE PROPOSITION */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-gray-200 pb-2">Value Proposition</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">For Consumers</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong>Real Cash Back:</strong> Actual money, not points or restricted credits
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong>No Extra Steps:</strong> Pay normally with your existing cards
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong>Stackable Rewards:</strong> Use alongside other loyalty programs
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong>Free to Use:</strong> No subscription fees or hidden costs
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">For Businesses</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong>Customer Acquisition:</strong> Attract new customers with targeted offers
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong>Performance-Based:</strong> Only pay for actual transactions
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong>Data Insights:</strong> Understand customer behavior and preferences
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-xl mt-1">✓</span>
                  <div>
                    <strong>Incremental Revenue:</strong> Capture customers who might otherwise go elsewhere
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* COMPANY CULTURE */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-gray-200 pb-2">Company Culture: Radical Transparency</h2>
          
          <p className="text-lg leading-relaxed mb-6 text-gray-800">
            Upside is known in the tech industry for its commitment to "radical transparency"—a philosophy that emphasizes open communication, shared information, and honest feedback at all levels of the organization.
          </p>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 mb-6 border border-purple-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">🌟 What Radical Transparency Means</h3>
            <ul className="space-y-3 text-gray-800">
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">•</span>
                <div>
                  <strong>Open Information Sharing:</strong> Company metrics, financials, and strategic decisions are shared broadly with the team
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">•</span>
                <div>
                  <strong>Direct Feedback Culture:</strong> Candid feedback is encouraged and expected at all levels
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">•</span>
                <div>
                  <strong>Inclusive Decision Making:</strong> Team members have visibility into and input on important decisions
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-600 font-bold text-xl">•</span>
                <div>
                  <strong>Authentic Communication:</strong> Leaders communicate openly about both successes and challenges
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* BENEFITS & PERKS */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-gray-200 pb-2">Benefits & Perks</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-4xl mb-4">🏖️</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Unlimited PTO</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Take the time you need to recharge and maintain work-life balance. Upside trusts team members to manage their time responsibly while meeting their commitments.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Learning & Development</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Access to courses, conferences, books, and other resources to support continuous learning and professional growth. Upside invests in employee development.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Health & Wellness</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Comprehensive health insurance, dental, vision, and wellness programs to keep team members healthy and supported.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Competitive Compensation</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Market-rate salaries plus equity participation, allowing team members to share in the company's success.
              </p>
            </div>
          </div>
        </section>

        {/* CAREERS */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-gray-200 pb-2">Careers at Upside</h2>
          
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 mb-6 border border-green-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">🚀 Open Positions: 15+ Roles</h3>
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              Upside is hiring software engineers, product managers, data scientists, and other technical professionals to help scale the platform and enhance the user experience for millions of consumers and thousands of business partners.
            </p>
          </div>

          <h3 className="text-xl font-bold mb-4 text-gray-900">Software Engineering Focus Areas</h3>
          <div className="space-y-4">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-2">Mobile Development</h4>
              <p className="text-gray-700 leading-relaxed text-sm">
                Build and optimize the iOS and Android apps that millions of users rely on daily. Focus on performance, user experience, and feature innovation.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-2">Backend & Platform Engineering</h4>
              <p className="text-gray-700 leading-relaxed text-sm">
                Develop scalable backend systems, APIs, and data pipelines supporting transaction processing, offer personalization, and business analytics.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h4 className="font-bold text-gray-900 mb-2">Data Science & Machine Learning</h4>
              <p className="text-gray-700 leading-relaxed text-sm">
                Apply ML to personalize offers, predict user behavior, optimize pricing, and detect fraud. Leverage large-scale transaction data to drive insights.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 mt-6">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Why Join Upside?</h3>
            <ul className="space-y-2 text-gray-800">
              <li className="flex items-center gap-2">
                <span className="text-blue-600">✓</span>
                Work in a radically transparent culture
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">✓</span>
                Build products used by millions of consumers
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">✓</span>
                Unlimited PTO and learning opportunities
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">✓</span>
                Tackle interesting technical challenges at scale
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">✓</span>
                Collaborative, feedback-driven environment
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-600">✓</span>
                Make a real impact on consumer savings
              </li>
            </ul>
          </div>
        </section>

        {/* TECHNOLOGY STACK */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b-2 border-gray-200 pb-2">Technology & Scale</h2>
          
          <p className="text-lg leading-relaxed mb-6 text-gray-800">
            Upside operates at significant scale, processing millions of transactions and serving millions of users across thousands of business locations. The engineering team focuses on building reliable, performant systems that handle this volume while providing a seamless user experience.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">📱</div>
              <h4 className="font-bold text-gray-900 mb-2">Mobile-First</h4>
              <p className="text-gray-700 text-sm">Native iOS and Android apps with focus on performance and UX</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">☁️</div>
              <h4 className="font-bold text-gray-900 mb-2">Cloud Infrastructure</h4>
              <p className="text-gray-700 text-sm">Scalable cloud architecture supporting millions of users</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h4 className="font-bold text-gray-900 mb-2">Data & ML</h4>
              <p className="text-gray-700 text-sm">Personalization and optimization powered by machine learning</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join a Transparent Tech Culture</h2>
          <p className="text-xl mb-6 text-blue-100">
            Build the future of cash back rewards at Upside
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              View 15 Open Positions
            </a>
            <a href="#" className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-400 transition-colors border-2 border-white/30">
              Learn More About Upside
            </a>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="border-t-2 border-gray-200 pt-8 mt-12 text-center text-gray-600">
          <p className="text-sm">
            Part of ObjectWire's comprehensive SaaS and technology company directory
          </p>
          <p className="text-sm mt-2">
            Last updated: February 8, 2026
          </p>
        </footer>

      </article>
    </div>
  );
}
