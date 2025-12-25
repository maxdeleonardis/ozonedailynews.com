'use client';

import Link from 'next/link';

interface Article {
  slug: string;
  title: string;
  author: string;
  date: string;
  category: string;
  intro: string;
  sections: {
    heading: string;
    content: string[];
  }[];
  relatedArticles: {
    title: string;
    slug: string;
  }[];
}

// Sample article data - matches Silicon Labs structure
const articles: { [key: string]: Article } = {
  'silicon-labs-robotics': {
    slug: 'silicon-labs-robotics',
    title: 'SILICON LABS (SILICON) WHAT ROBOTOS DO THEY WORK ON?',
    author: 'Jack Wang',
    date: 'October 26, 2025',
    category: 'Technology',
    intro: 'Silicon Labs, a fabless semiconductor company founded in 1996 and headquartered in Austin, Texas, specializes in low-power wireless connectivity and microcontrollers (MCUs) that form the backbone of modern robotics. While Silicon Labs doesn\'t build complete robots, its EFR32 Series 2 and 3 SoCs and modules enable intelligent, connected robots by integrating Bluetooth, Zigbee, and Matter protocols for seamless device communication. Its tech powers navigation, sensor fusion, and swarm coordination, reducing power use by 50% in battery-operated bots.',
    sections: [
      {
        heading: 'SILICON LABS\' ROLE IN ROBOTICS: FROM COMPONENTS TO CONNECTIVITY',
        content: [
          'Silicon Labs excels in providing scalable, secure SoCs for robotics, enabling low-latency wireless links essential for real-time control. Its EFR32BG22 and MG26 SoCs, with ARM Cortex-M33 cores and AI/ML accelerators, support multiprotocol connectivity (Bluetooth LE 5.4, Zigbee, Thread), ideal for robots in dynamic environments.',
          'In robotics, this means enabling 100m+ ranges in mesh networks, crucial for collaborative swarms, with 99% uptime via self-healing protocols.'
        ]
      },
      {
        heading: 'KEY SILICON LABS TECHNOLOGIES: nRF52 and EFR32 SoCs for Robotic Interfaces',
        content: [
          'Autonomous Mobile Robots (AMRs): nRF52840 in Fetch Robotics for warehouse navigation, supporting.',
          'Service Robots: MG26 in Diligent Robotics\' Moxi for hospital delivery, with Matter for smart integration.',
          'Humanoid/Assistive Robots: EFR32FG28 for exoskeletons, enabling low-latency feedback in rehab bots.'
        ]
      },
      {
        heading: 'SILICON LABS POWERS ROBOTICS ACROSS SECTORS',
        content: [
          'Industrial Automation: SoCs in AGVs for Amazon warehouses, cutting logistics costs 25% via Zigbee mesh.',
          'Healthcare: Bluetooth LE in surgical robots for real-time telemetry, supporting 5G hybrids.',
          'Consumer Robotics: nRF52 in Roomba vacuums for swarm coordination, extending range 100m.',
          'Agriculture: EFR32 in drones for crop monitoring, processing 1TB data daily with 1µA sleep.',
          'These applications leverage Silicon Labs\' 2.4GHz RF for 12.5dBm Tx power, enabling reliable operation in noisy environments.'
        ]
      },
      {
        heading: 'FUTURE TRENDS: AI-Integrated Robotics with Silicon Labs Tech',
        content: [
          'By 2030, Silicon Labs envisions 1 billion robotic devices, with Series 3 SoCs (e.g., SiXG301, 22nm) integrating AI accelerators for 10x edge processing. Trends include 6G multiprotocol (Bluetooth 6.0 + Wi-Fi 7) for 1ms latency in humanoids and Matter 1.2 for interoperable swarms. Sustainability drives low-power designs, reducing carbon footprints 30%.',
          'Challenges like RF interference spur quantum-secure comms, positioning Silicon Labs for $100 billion IoT robotics market.'
        ]
      }
    ],
    relatedArticles: [
      { title: 'Antonio Brown Apprehended in Dubai', slug: 'antonio-brown-dubai' },
      { title: 'Pegatron Investment in Georgetown, TX', slug: 'pegatron-georgetown' },
      { title: 'Does Amazon Take EBT?', slug: 'amazon-ebt' }
    ]
  }
};

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug];

  if (!article) {
    return (
      <main className="min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Article not found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <Link href="/news" className="text-blue-600 hover:text-blue-800 font-semibold">
            ← Back to News
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Article Header */}
      <article className="max-w-3xl mx-auto px-4 py-16">
        {/* Category Badge */}
        <div className="mb-4">
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded">
            {article.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-black text-black mb-6 leading-tight">
          {article.title}
        </h1>

        {/* Author & Date */}
        <div className="flex items-center gap-4 text-gray-600 text-sm mb-12 pb-8 border-b-2 border-gray-200">
          <span className="font-semibold">{article.author}</span>
          <span>•</span>
          <time>{article.date}</time>
        </div>

        {/* Article Intro */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-lg text-gray-800 leading-relaxed font-medium">
            {article.intro}
          </p>
        </div>

        {/* Article Sections */}
        <div className="prose prose-lg max-w-none space-y-12">
          {article.sections.map((section, idx) => (
            <section key={idx}>
              <h2 className="text-2xl md:text-3xl font-black text-black mb-6">
                {section.heading}
              </h2>
              <div className="space-y-4">
                {section.content.map((paragraph, pIdx) => (
                  <p key={pIdx} className="text-gray-800 leading-relaxed text-base">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8 my-16">
          <h3 className="text-2xl font-bold text-black mb-3">Stay Up to Date</h3>
          <p className="text-gray-700 mb-6">
            Subscribe to The Objective Wire for more in-depth analysis and reporting.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2 rounded transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Related Articles */}
        <div className="mt-16 pt-16 border-t-2 border-gray-200">
          <h3 className="text-2xl font-bold text-black mb-8">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {article.relatedArticles.map((related, idx) => (
              <Link
                key={idx}
                href={`/article/${related.slug}`}
                className="block p-4 border border-gray-300 rounded hover:border-blue-600 hover:bg-blue-50 transition-colors"
              >
                <h4 className="font-bold text-black hover:text-blue-600 line-clamp-2">
                  {related.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>
      </article>

      {/* Back Button */}
      <div className="max-w-3xl mx-auto px-4 pb-16">
        <Link href="/news" className="text-blue-600 hover:text-blue-800 font-semibold">
          ← Back to News
        </Link>
      </div>
    </main>
  );
}
