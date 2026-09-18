import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Editorial Standards | OzoneNews Science Network",
  description: "OzoneNews editorial standards, scientific sourcing policies, peer-review verification, AI attribution, and correction procedures for all published science content.",
  alternates: { canonical: `${SITE_CONFIG.url}/editorial-standards` },
};

export default function EditorialStandardsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="font-serif font-bold text-3xl sm:text-4xl text-gray-900 mb-6">Editorial Standards</h1>
      <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
        <p>
          OzoneNews is a science news network. We publish only accurate, sourced, and independently verified information grounded in primary scientific sources. These standards apply to every article, update, and analysis published on this platform.
        </p>

        <h2 className="font-serif font-bold text-xl text-gray-900 mt-10 mb-3">Scientific Sourcing Requirements</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Every published claim must be traceable to a primary scientific source: peer-reviewed journal articles, government agency data (NASA, NOAA, ESA, USGS, NSF), institutional research announcements, or on-record statements from named researchers.</li>
          <li>At least one external source link is required per article. Science articles must cite the original research paper or data release where applicable.</li>
          <li>Statistical claims must include the original source of the data, the methodology used, and the uncertainty or confidence interval where reported.</li>
          <li>Anonymous sourcing is disclosed and used only when the source would face credible risk of harm by going on record. Anonymous sourcing is never used for scientific data or research findings.</li>
        </ul>

        <h2 className="font-serif font-bold text-xl text-gray-900 mt-10 mb-3">Peer-Review Verification</h2>
        <p>
          When reporting on new scientific research, OzoneNews verifies that the study has undergone peer review and is published in a recognized scientific journal. Pre-print servers (such as arXiv) are clearly labeled as not yet peer-reviewed. Our reporters read the original paper, not just the press release, before writing.
        </p>

        <h2 className="font-serif font-bold text-xl text-gray-900 mt-10 mb-3">AI Attribution Policy</h2>
        <p>
          <strong>AI-Assisted, Human-Verified.</strong> OzoneNews uses large language models for initial research,
          structural drafting, and formatting. All factual claims, figures, data points, and analysis are manually
          cross-checked against primary sources by a named editor or author before publication.
        </p>
        <p>
          Articles are not published unless a human author or editor has reviewed and approved the final text.
          The author named on a byline is personally accountable for accuracy. AI is a tool for efficiency, not a substitute for scientific accuracy or editorial judgment.
        </p>

        <h2 className="font-serif font-bold text-xl text-gray-900 mt-10 mb-3">Corrections</h2>
        <p>
          Factual errors are corrected promptly with full transparency. Every correction is logged with the date, the nature of the error, and the editor who made the change. See our{" "}
          <Link href="/corrections" className="text-blue-600 hover:text-blue-800 underline">Corrections Policy</Link> for the full procedure.
        </p>

        <h2 className="font-serif font-bold text-xl text-gray-900 mt-10 mb-3">Ownership and Independence</h2>
        <p>
          OzoneNews is operated by {SITE_CONFIG.legalName}. We accept no paid editorial content,
          sponsored stories, or advertiser-influenced news coverage. Our founder, Max DeLeonardis, holds a Ph.D. in Biomedical Engineering and oversees all editorial standards personally.
        </p>

        <div className="flex flex-wrap gap-4 mt-10 pt-8 border-t border-gray-200 text-sm">
          <Link href="/about" className="text-blue-600 hover:text-blue-800 underline">About OzoneNews</Link>
          <Link href="/corrections" className="text-blue-600 hover:text-blue-800 underline">Corrections</Link>
          <Link href="/contact" className="text-blue-600 hover:text-blue-800 underline">Contact</Link>
        </div>
      </div>
    </main>
  );
}
