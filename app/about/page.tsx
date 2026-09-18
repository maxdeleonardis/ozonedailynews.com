import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About OzoneNews | Science News Network",
  description: "OzoneNews is an independent science news network delivering sourced, verified reporting on Earth science, space exploration, climate, oceans, geology, and archaeology.",
  alternates: { canonical: `${SITE_CONFIG.url}/about` },
};

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="font-serif font-bold text-3xl sm:text-4xl text-gray-900 mb-6">About OzoneNews</h1>
      <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
        <p>
          <strong>OzoneNews</strong> is the flagship science publication of Ozone Network News LLC, an independent digital media company delivering sourced, verified reporting on Earth science, space exploration, climate systems, oceanography, geology, paleontology, and archaeology.
        </p>
        <p>
          We are a science news network run by scientists. Our founder, <Link href="/authors/max-deleonardis" className="text-blue-600 hover:text-blue-800 underline">Max DeLeonardis</Link>, holds a Ph.D. in Biomedical Engineering from North Carolina State University, completed through the joint program with the University of North Carolina at Chapel Hill. Every story published on OzoneNews is produced under our{" "}
          <Link href="/editorial-standards" className="text-blue-600 hover:text-blue-800 underline">Editorial Standards</Link>,
          which require named sourcing, primary-source verification, and author accountability for every published claim.
        </p>

        <h2 className="font-serif font-bold text-xl text-gray-900 mt-10 mb-3">What We Cover</h2>
        <p>
          OzoneNews focuses exclusively on science and the scientific understanding of Earth and the universe. Our coverage spans:
        </p>
        <ul>
          <li><strong>Space Exploration</strong> — NASA missions, SpaceX launches, JWST discoveries, planetary science, and the commercial space industry.</li>
          <li><strong>Earth Science</strong> — Geology, plate tectonics, volcanism, paleontology, and the deep Earth processes that shape the planet.</li>
          <li><strong>Climate Science</strong> — Global temperature data, atmospheric physics, CO₂ monitoring, cryosphere dynamics, and climate modeling.</li>
          <li><strong>Oceanography</strong> — Marine ecosystems, deep-sea exploration, ocean temperature and acidification, coral reef health, and marine conservation.</li>
          <li><strong>Archaeology</strong> — Ancient civilizations, human origins, classical studies, and the material record of humanity's past.</li>
          <li><strong>Physics and Astronomy</strong> — Dark matter, quantum mechanics, exoplanets, cosmology, and fundamental physics.</li>
        </ul>

        <h2 className="font-serif font-bold text-xl text-gray-900 mt-10 mb-3">Our Scientific Approach</h2>
        <p>
          Every article on OzoneNews is built on primary sources: peer-reviewed papers published in scientific journals, data from government agencies (NASA, NOAA, ESA, USGS), institutional press releases, and direct interviews with researchers. We do not publish opinion pieces, speculative content, or unverified claims. Our reporting is data-driven, sourced, and reviewed before publication.
        </p>
        <p>
          Our editorial team includes writers and editors with backgrounds in biomedical engineering, physics, climate science, and journalism. We apply the same standards of evidence and reproducibility that we learned in scientific research to every story we publish.
        </p>

        <h2 className="font-serif font-bold text-xl text-gray-900 mt-10 mb-3">AI Transparency</h2>
        <p>
          <strong>AI-Assisted, Human-Verified.</strong> This publication uses advanced language models for initial research and structural drafting. 100% of factual claims, data points, and analysis are manually cross-checked against primary sources by our editorial team before publication. AI is a tool for efficiency, not a substitute for scientific accuracy.
        </p>

        <h2 className="font-serif font-bold text-xl text-gray-900 mt-10 mb-3">Leadership</h2>
        <p>
          OzoneNews is owned and operated by{" "}
          <Link href="/authors/max-deleonardis" className="text-blue-600 hover:text-blue-800 underline">Max DeLeonardis</Link>,
          Ph.D., Founder and Publisher. Max earned his doctorate in Biomedical Engineering from North Carolina State University and oversees all editorial operations, scientific sourcing standards, and network strategy.
        </p>

        <h2 className="font-serif font-bold text-xl text-gray-900 mt-10 mb-3">Our Network</h2>
        <p>
          OzoneNews is part of the Ozone Network News (ONN) family of digital news brands. Sister publications include <a href="https://www.basilnews.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">BasilNews</a> (finance, markets, and economy), <a href="https://www.obsidianpaper.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">ObsidianPaper</a> (cybersecurity and data privacy), and others covering specialized verticals outside OzoneNews's science focus.
        </p>

        <h2 className="font-serif font-bold text-xl text-gray-900 mt-10 mb-3">Contact</h2>
        <p>
          Editorial inquiries: <a href={`mailto:${SITE_CONFIG.email}`} className="text-blue-600 hover:text-blue-800 underline">{SITE_CONFIG.email}</a>
        </p>
        <div className="flex flex-wrap gap-4 mt-10 pt-8 border-t border-gray-200 text-sm">
          <Link href="/editorial-standards" className="text-blue-600 hover:text-blue-800 underline">Editorial Standards</Link>
          <Link href="/corrections" className="text-blue-600 hover:text-blue-800 underline">Corrections Policy</Link>
          <Link href="/contact" className="text-blue-600 hover:text-blue-800 underline">Contact</Link>
          <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-800 underline">Privacy Policy</Link>
        </div>
      </div>
    </main>
  );
}
