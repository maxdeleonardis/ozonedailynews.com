import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/nav/Breadcrumb";
import { NewsArticleSchema } from "@/components/articles/NewsArticleSchema";

export const metadata: Metadata = {
  title: "Mozilla Firefox: Open-Source Web Browser & Privacy-Focused Technology | ObjectWire",
  description: "Comprehensive overview of Mozilla Foundation, Firefox web browser, privacy-focused products, market position, and commitment to open-source software development and internet health.",
  keywords: [
    "Mozilla",
    "Firefox",
    "web browser",
    "open source",
    "privacy",
    "internet freedom",
    "nonprofit technology",
    "Gecko engine",
    "browser market share",
    "Mozilla Foundation",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/mozilla-firefox',
  },
  openGraph: {
    title: "Mozilla Firefox: Open-Source Web Browser & Privacy-Focused Technology",
    description: "Complete guide to Mozilla Foundation and Firefox browser, covering history, features, privacy focus, and market position.",
    type: "article",
    url: "https://www.objectwire.org/mozilla-firefox",
    images: [
      {
        url: "https://www.objectwire.org/images/mozilla-firefox-og.jpg",
        width: 1200,
        height: 630,
        alt: "Mozilla Firefox browser",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mozilla Firefox: Open-Source Web Browser",
    description: "Comprehensive overview of Mozilla Foundation and Firefox browser technology.",
    images: ["https://www.objectwire.org/images/mozilla-firefox-twitter.jpg"],
  },
};

export default function MozillaFirefoxPage() {
  const publishedDate = new Date("2026-01-27T20:00:00Z").toISOString();
  
  return (
    <main className="min-h-screen bg-white">
      {/* NewsArticle Schema */}
      <NewsArticleSchema
        title="Mozilla Firefox: Open-Source Web Browser & Privacy-Focused Technology"
        description="Comprehensive encyclopedia article covering Mozilla Foundation, Firefox web browser, privacy initiatives, and open-source software contributions."
        author="ObjectWire Technology Desk"
        publishedTime={publishedDate}
        modifiedTime={publishedDate}
        imageUrl="https://www.objectwire.org/images/mozilla-firefox.jpg"
        articleUrl="https://www.objectwire.org/mozilla-firefox"
        section="Technology & Software"
        keywords={["Mozilla", "Firefox", "web browser", "open source", "privacy"]}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-600 via-red-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-orange-100 text-sm font-mono tracking-wider mb-4">
              TECHNOLOGY ENCYCLOPEDIA
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Mozilla Firefox
            </h1>
            <p className="text-xl text-gray-100 leading-relaxed">
              Open-source web browser and nonprofit organization championing internet privacy, 
              freedom, and accessibility
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { name: "Home", item: "/" },
            { name: "Mozilla Firefox", item: "/mozilla-firefox" },
          ]}
        />

        <article className="prose prose-lg max-w-none">
          
          {/* Quick Facts Box */}
          <div className="not-prose bg-orange-50 border-2 border-orange-200 rounded-lg p-6 mb-8 float-right ml-6 w-full md:w-96">
            <h3 className="text-xl font-bold text-gray-900 mb-4 border-b-2 border-orange-300 pb-2">
              Quick Facts
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-gray-700">Organization Type</p>
                <p className="text-gray-900">Nonprofit Foundation + Corporation</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">Founded</p>
                <p className="text-gray-900">February 28, 1998 (Project)</p>
                <p className="text-gray-900">July 15, 2003 (Foundation)</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">Headquarters</p>
                <p className="text-gray-900">San Francisco, California, USA</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">CEO</p>
                <p className="text-gray-900">Laura Chambers (Interim, 2024-)</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">Key Products</p>
                <p className="text-gray-900">Firefox Browser, Thunderbird, Pocket</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">Browser Market Share</p>
                <p className="text-gray-900">~3.2% globally (2026)</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">Annual Revenue</p>
                <p className="text-gray-900">~$593M (2022)</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">Rendering Engine</p>
                <p className="text-gray-900">Gecko (Firefox), Quantum (modern)</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">Primary Funding</p>
                <p className="text-gray-900">Search partnerships (Google, others)</p>
              </div>
            </div>
          </div>

          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            <strong>Mozilla</strong> is a nonprofit organization and open-source software community best known 
            for developing the <strong>Firefox web browser</strong>. Founded in 1998 as a project emerging from 
            Netscape Communications, Mozilla has become a leading advocate for internet privacy, open standards, 
            and digital rights while maintaining one of the few independent browser engines in an increasingly 
            consolidated web ecosystem.
          </p>

          <section className="mb-8 clear-both">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">History and Origins</h2>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">From Netscape to Mozilla (1998-2003)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Mozilla originated as an open-source project launched by Netscape Communications in 1998, releasing 
              the source code of its Netscape Communicator browser suite. The name "Mozilla" was Netscape's 
              internal codename, combining "Mosaic" (the pioneering web browser) and "Godzilla."
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              After AOL acquired Netscape in 1999, the Mozilla project continued as an independent open-source 
              community. In 2003, the <strong>Mozilla Foundation</strong> was formally established as a nonprofit 
              organization to coordinate development and promote the open web.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Firefox Launch and Growth (2004-2010)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Mozilla Firefox 1.0 launched on November 9, 2004, offering a lightweight, fast alternative to 
              Microsoft's dominant Internet Explorer. Firefox quickly gained popularity through grassroots 
              marketing, innovative features like tabbed browsing and pop-up blocking, and a vast library of 
              community-developed extensions.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              By 2009, Firefox had achieved approximately 30% global browser market share, representing a 
              significant victory for open-source software and breaking Microsoft's near-monopoly on web browsing.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Chrome Competition and Evolution (2010-Present)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              The launch of Google Chrome in 2008 introduced intense competition. Chrome's speed, minimalist 
              design, and aggressive promotion led to Firefox gradually losing market share throughout the 2010s. 
              In response, Mozilla launched major initiatives including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Firefox Quantum (2017):</strong> Complete rewrite prioritizing speed and efficiency</li>
              <li><strong>Enhanced Tracking Protection (2019):</strong> Aggressive privacy features enabled by default</li>
              <li><strong>Multi-account Containers:</strong> Isolation technology preventing cross-site tracking</li>
              <li><strong>WebAssembly:</strong> Co-development of high-performance web standard</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Firefox Browser</h2>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Core Features</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Firefox distinguishes itself through privacy-focused features and customization capabilities:
            </p>

            <div className="bg-orange-50 rounded-lg p-6 my-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Key Firefox Features:</h4>
              <div className="grid md:grid-cols-2 gap-4 text-gray-700 text-sm">
                <div className="border-l-4 border-orange-500 pl-4">
                  <p className="font-semibold mb-1">Enhanced Tracking Protection</p>
                  <p className="text-xs">Blocks third-party trackers, cookies, cryptominers, and fingerprinters by default</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <p className="font-semibold mb-1">Multi-Account Containers</p>
                  <p className="text-xs">Isolate browsing contexts to prevent tracking across different online identities</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <p className="font-semibold mb-1">Firefox Sync</p>
                  <p className="text-xs">End-to-end encrypted synchronization of bookmarks, passwords, and history</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <p className="font-semibold mb-1">Picture-in-Picture</p>
                  <p className="text-xs">Watch videos in floating window while browsing other content</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <p className="font-semibold mb-1">Password Manager</p>
                  <p className="text-xs">Built-in encrypted password storage with breach alerts</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <p className="font-semibold mb-1">Add-ons Ecosystem</p>
                  <p className="text-xs">Extensive library of browser extensions with robust API support</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <p className="font-semibold mb-1">Reader View</p>
                  <p className="text-xs">Distraction-free reading mode stripping ads and clutter</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <p className="font-semibold mb-1">Customizable Interface</p>
                  <p className="text-xs">Extensive theme and toolbar customization options</p>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Technical Architecture</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Firefox uses the <strong>Gecko</strong> rendering engine (branded as <strong>Quantum</strong> in modern 
              versions), one of only three independent browser engines remaining alongside Chromium's Blink and 
              Safari's WebKit. This independence is crucial for maintaining web standards diversity and preventing 
              single-vendor control of the internet.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Mozilla has increasingly adopted <strong>Rust</strong>, a memory-safe systems programming language 
              (created by Mozilla), in Firefox's codebase to improve security and performance. Components like 
              Stylo (CSS engine) and WebRender (graphics engine) are written in Rust.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Platform Availability</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Desktop:</strong> Windows, macOS, Linux (multiple distributions)</li>
              <li><strong>Mobile:</strong> Android (full add-ons support), iOS (using WebKit per App Store requirements)</li>
              <li><strong>Enterprise:</strong> Firefox ESR (Extended Support Release) for organizations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Market Position</h2>
            
            <div className="bg-gray-50 rounded-lg p-6 my-6 overflow-x-auto">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Browser Market Share (2026)</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-gray-300">
                    <th className="text-left py-2 text-gray-900">Browser</th>
                    <th className="text-left py-2 text-gray-900">Desktop Share</th>
                    <th className="text-left py-2 text-gray-900">Mobile Share</th>
                    <th className="text-left py-2 text-gray-900">Overall Share</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-semibold">Google Chrome</td>
                    <td className="py-2">~65%</td>
                    <td className="py-2">~62%</td>
                    <td className="py-2 font-bold">~63%</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-semibold">Safari</td>
                    <td className="py-2">~9%</td>
                    <td className="py-2">~25%</td>
                    <td className="py-2 font-bold">~20%</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-semibold">Microsoft Edge</td>
                    <td className="py-2">~13%</td>
                    <td className="py-2">~1%</td>
                    <td className="py-2 font-bold">~5%</td>
                  </tr>
                  <tr className="border-b border-gray-200 bg-orange-50">
                    <td className="py-2 font-semibold text-orange-700">Mozilla Firefox</td>
                    <td className="py-2 text-orange-700">~6.8%</td>
                    <td className="py-2 text-orange-700">~0.5%</td>
                    <td className="py-2 font-bold text-orange-700">~3.2%</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-semibold">Others</td>
                    <td className="py-2">~6.2%</td>
                    <td className="py-2">~11.5%</td>
                    <td className="py-2 font-bold">~8.8%</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-gray-600 mt-3 italic">
                Source: StatCounter Global Stats, January 2026
              </p>
            </div>

            <p className="text-gray-700 leading-relaxed mb-4">
              While Firefox's market share has declined from its peak, it remains the fourth most-used browser 
              globally and the most popular truly independent browser. Firefox is particularly strong among 
              privacy-conscious users, developers, and Linux desktop users.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Privacy and Security Focus</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Mozilla has positioned Firefox as the privacy-focused alternative to data-collecting browsers. 
              Key initiatives include:
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Enhanced Tracking Protection</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Enabled by default since 2019, this feature blocks over 2,000 known trackers including social media 
              trackers, cross-site tracking cookies, cryptominers, and fingerprinters. Firefox provides detailed 
              reports showing how many trackers were blocked.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">DNS over HTTPS (DoH)</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Firefox pioneered widespread DoH deployment, encrypting DNS queries to prevent ISPs and network 
              observers from tracking browsing patterns.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Total Cookie Protection</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Introduced in 2021, this technology confines cookies to the site that created them, preventing 
              cookies from being used for cross-site tracking while maintaining site functionality.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Mozilla VPN</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              A paid subscription service ($4.99/month) providing device-level VPN protection powered by Mullvad, 
              available across multiple devices and operating systems.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Other Mozilla Products</h2>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Thunderbird</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Open-source email client originally developed by Mozilla, now maintained by the independent MZLA 
              Technologies Corporation. Thunderbird remains popular among power users requiring advanced email 
              management features.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Pocket</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Read-it-later service acquired by Mozilla in 2017, integrated directly into Firefox for saving 
              articles, videos, and web pages for offline viewing. Pocket has over 20 million registered users.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Mozilla Hubs</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Virtual reality social platform built on WebXR standards, allowing users to create and share 
              virtual spaces directly in the browser without downloads or VR hardware requirements.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Common Voice</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Open-source, crowd-sourced voice dataset project helping teach machines how people actually speak. 
              The dataset includes over 30,000 hours of recorded speech in 100+ languages, available for free 
              to developers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Business Model and Funding</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Mozilla's unique structure combines nonprofit and commercial elements:
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Organizational Structure</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Mozilla Foundation:</strong> 501(c)(3) nonprofit governing the overall mission</li>
              <li><strong>Mozilla Corporation:</strong> Wholly owned taxable subsidiary handling commercial activities</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Revenue Sources</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Mozilla's primary revenue (~85-90%) comes from search partnerships, primarily with Google, which 
              pays to be Firefox's default search engine. In 2022, Mozilla reported approximately $593 million 
              in total revenue.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Additional revenue comes from:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Mozilla VPN subscriptions</li>
              <li>Pocket Premium subscriptions</li>
              <li>Licensing and partnerships</li>
              <li>Individual donations</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 my-6 rounded-r-lg">
              <p className="text-sm text-gray-700 mb-2">
                <strong>Note:</strong> Mozilla's dependence on Google for the majority of its funding has raised 
                questions about long-term sustainability, especially as Firefox market share declines. The search 
                deal is renegotiated periodically, most recently renewed through 2024-2026.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Source and Community</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Mozilla remains committed to open-source principles:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Source code:</strong> Firefox and most Mozilla projects released under Mozilla Public License</li>
              <li><strong>Community contributions:</strong> Thousands of volunteer developers contribute code, translations, and testing</li>
              <li><strong>MDN Web Docs:</strong> Comprehensive web development documentation maintained by Mozilla and community</li>
              <li><strong>Web standards advocacy:</strong> Active participation in W3C, IETF, and other standards bodies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Developments (2024-2026)</h2>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Leadership Changes</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              In February 2024, Mitchell Baker stepped down as CEO after two decades of leadership, with Laura 
              Chambers assuming the role as interim CEO while Mozilla conducts a permanent search.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">AI Integration</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Mozilla has begun integrating AI features into Firefox while maintaining privacy principles, 
              including local-first AI summarization and translation tools that process data on-device rather 
              than sending to external servers.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6">Layoffs and Restructuring</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Mozilla has undergone several rounds of layoffs (2020, 2023) and restructuring efforts aimed at 
              focusing resources on core products while exploring new revenue streams to reduce dependence on 
              search partnerships.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Challenges and Future Outlook</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Mozilla faces significant challenges:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li><strong>Market share decline:</strong> Continued erosion of Firefox user base</li>
              <li><strong>Mobile weakness:</strong> Minimal presence on mobile where most browsing occurs</li>
              <li><strong>Revenue concentration:</strong> Heavy reliance on Google search payments</li>
              <li><strong>Web platform consolidation:</strong> Increasing dominance of Chromium-based browsers</li>
              <li><strong>Developer mindshare:</strong> Declining testing and optimization for Firefox</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-4">
              However, Mozilla remains crucial for web ecosystem health as one of the few organizations maintaining 
              an independent browser engine and advocating for user privacy, accessibility, and open standards.
            </p>
          </section>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 my-8">
            <p className="font-semibold text-gray-900 mb-2">Summary:</p>
            <p className="text-gray-700">
              Mozilla and Firefox represent a unique position in the modern internet landscape, a nonprofit-driven, 
              privacy-focused alternative to commercial browsers in an ecosystem increasingly dominated by Big Tech. 
              While facing market share challenges, Mozilla's commitment to open-source development, user privacy, 
              and web standards independence makes it an essential counterweight to browser monoculture. The 
              organization's future depends on diversifying revenue, regaining user trust, and demonstrating that 
              privacy and user agency can compete in the modern web.
            </p>
          </div>

          {/* Related Content */}
          <section className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">External Resources</h2>
            <div className="grid md:grid-cols-2 gap-4 not-prose">
              <a 
                href="https://www.mozilla.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-gray-200 rounded-lg hover:border-orange-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">Mozilla.org →</h4>
                <p className="text-sm text-gray-600">Official Mozilla Foundation website</p>
              </a>
              <a 
                href="https://www.firefox.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-gray-200 rounded-lg hover:border-orange-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">Firefox Browser →</h4>
                <p className="text-sm text-gray-600">Download and learn about Firefox</p>
              </a>
              <a 
                href="https://developer.mozilla.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-gray-200 rounded-lg hover:border-orange-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">MDN Web Docs →</h4>
                <p className="text-sm text-gray-600">Comprehensive web development documentation</p>
              </a>
              <a 
                href="https://blog.mozilla.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-gray-200 rounded-lg hover:border-orange-400 hover:shadow-md transition-all"
              >
                <h4 className="font-bold text-gray-900 mb-2">Mozilla Blog →</h4>
                <p className="text-sm text-gray-600">Latest news and announcements</p>
              </a>
            </div>
          </section>

        </article>
      </div>
    </main>
  );
}
