'use client';

import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="bg-white text-black">
      {/* Hero/Welcome Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 border-b border-black">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image Column */}
            <div className="hidden lg:block">
              <div 
                className="w-full h-96 rounded-lg bg-cover bg-center border border-black"
                style={{
                  backgroundImage: 'url(https://irp.cdn-website.com/3f0518eb/dms3rep/multi/pexels-photo-3422053.jpeg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            </div>

            {/* Content Column */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Welcome to Objective.Wire
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                ObjectWire operates as a precision intelligence publisher. We produce event-driven analysis only when it meets our internal threshold for relevance and verifiability. Each publication is constructed as a documented claim, supported by primary sources and transparent citations. This approach positions ObjectWire not as a mass-media competitor, but as a reference-grade terminal for professionals who require accuracy over volume.
              </p>

              <div className="pt-4">
                <Link 
                  href="/news"
                  className="inline-block px-8 py-3 bg-black text-white font-semibold hover:bg-gray-800 transition"
                >
                  Browse Articles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Standards Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 border-b border-black bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Editorial Standards</h3>
          
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl">
            ObjectWire publishes only material with strategic relevance, structured for immediate comprehension and professional application. Each release distills complex developments into clear, actionable intelligence, prioritizing context and signal over volume. Our analysis is constructed to expose relationships, causal drivers, and downstream implications, enabling readers to anticipate rather than merely observe events. We emphasize synthesis over aggregation, producing a coherent, cumulative knowledge base rather than disconnected reports. Language is exact and standardized, designed for integration into research processes, decision frameworks, and automated systems without reinterpretation.
          </p>
        </div>
      </section>

      {/* Technology Architecture Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4 md:px-8 border-b border-black">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content Column */}
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Technology Architecture
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                ObjectWire's platform is built as a four-layer system that transforms raw information into actionable intelligence. Data is captured and encoded into embeddings, processed into a dynamic knowledge graph, accessed through a context-aware interface, and automatically distributed when meaningful changes occur. This architecture ensures information moves seamlessly from collection to decision, maintaining precision and speed at every stage.
              </p>

              <div className="pt-4">
                <Link 
                  href="/contact"
                  className="inline-block px-8 py-3 border border-black text-black hover:bg-black hover:text-white font-semibold transition"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Image Column */}
            <div className="order-1 lg:order-2">
              <div className="space-y-4">
                <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center border border-black">
                  <p className="text-gray-600 text-center px-4">Architecture Diagram Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}