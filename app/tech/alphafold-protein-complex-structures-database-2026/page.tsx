import type { Metadata } from "next";
import {
  ArticlePage,
  Section,
  DataTable,
  Quote,
  ExternalLinks,
} from "@/components/ArticlePage";

const SLUG = "/tech/alphafold-protein-complex-structures-database-2026";
const FULL_URL = `https://www.objectwire.org${SLUG}`;

export const metadata: Metadata = {
  title:
    "AlphaFold Database Adds 1.7 Million Protein Complex Structures in Historic Expansion | ObjectWire",
  description:
    "The AlphaFold Protein Structure Database has added protein complex structures for the first time, with 1.7 million high-confidence homodimer predictions produced by EMBL-EBI, Google DeepMind, NVIDIA, and Seoul National University.",
  keywords: [
    "AlphaFold protein complex structures 2026",
    "EMBL-EBI AlphaFold homodimer database update March 2026",
    "Google DeepMind NVIDIA Seoul National University protein folding",
    "AlphaFold database expansion 1.7 million structures",
    "protein complex homodimer structure prediction AI",
    "structural biology database update 2026",
    "AlphaFold EBI protein interactions",
    "DeepMind protein structure database complex",
  ],
  alternates: {
    canonical: FULL_URL,
  },
  openGraph: {
    title:
      "AlphaFold Database Adds 1.7 Million Protein Complex Structures in Historic Expansion",
    description:
      "A four-way collaboration between EMBL-EBI, Google DeepMind, NVIDIA, and Seoul National University has added 1.7 million homodimer predictions to the AlphaFold database — the first time protein complexes have been included.",
    type: "article",
    url: FULL_URL,
    siteName: "ObjectWire",
    publishedTime: "2026-03-18T10:00:00Z",
    modifiedTime: "2026-03-18T10:00:00Z",
    section: "Technology",
    tags: [
      "AlphaFold",
      "Protein Structure",
      "DeepMind",
      "EMBL-EBI",
      "NVIDIA",
      "Structural Biology",
      "AI",
      "Bioinformatics",
      "Science",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "AlphaFold Database Adds 1.7 Million Protein Complex Structures | ObjectWire",
    description:
      "EMBL-EBI, Google DeepMind, NVIDIA & Seoul National University expand AlphaFold with 1.7M homodimer complex predictions — a first for the landmark structural biology resource.",
  },
  other: {
    news_keywords:
      "AlphaFold protein complex, homodimer structures, EMBL-EBI DeepMind NVIDIA Seoul National University, structural biology 2026",
  },
};

export default function AlphaFoldComplexPage() {
  const infoBox = {
    title: "AlphaFold Protein Structure Database",
    items: [
      { label: "Operated By", value: "EMBL-EBI" },
      { label: "AI Partner", value: "Google DeepMind" },
      { label: "Update Date", value: "March 15, 2026" },
      { label: "New Structures", value: "1.7 million homodimers" },
      {
        label: "Collaboration",
        value: "EMBL-EBI, DeepMind, NVIDIA, Seoul National University",
      },
      { label: "Structure Type", value: "Protein complexes (homodimers)" },
      { label: "Access", value: "Free & open" },
      {
        label: "Database URL",
        value: (
          <a
            href="https://alphafold.ebi.ac.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline break-all"
          >
            alphafold.ebi.ac.uk
          </a>
        ),
      },
    ],
  };

  const tableOfContents = [
    { id: "overview", label: "Overview" },
    { id: "what-changed", label: "What Changed" },
    { id: "homodimers", label: "Understanding Homodimers" },
    { id: "collaboration", label: "Four-Way Collaboration" },
    { id: "significance", label: "Scientific Significance" },
    { id: "whats-next", label: "What Comes Next" },
  ];

  const relatedLinks = [
    {
      href: "/tech",
      label: "Technology",
      description: "Back to tech coverage",
    },
    {
      href: "/nvidia",
      label: "NVIDIA",
      description: "Latest news and coverage on NVIDIA",
    },
    {
      href: "/google",
      label: "Google",
      description: "Coverage of Google and DeepMind",
    },
  ];

  return (
    <ArticlePage
      title="AlphaFold Database Adds Protein Complex Structures for the First Time"
      subtitle="A landmark expansion adds 1.7 million high-confidence homodimer predictions — produced by a four-way collaboration between EMBL-EBI, Google DeepMind, NVIDIA, and Seoul National University — to the world's most-used structural biology resource."
      category="Science & Technology"
      lastUpdated="March 18, 2026"
      infoBox={infoBox}
      tableOfContents={tableOfContents}
      relatedLinks={relatedLinks}
      backLink={{ href: "/tech", label: "Technology" }}
    >
      <p className="text-xl font-medium text-gray-700 mb-6 leading-relaxed">
        The <strong>AlphaFold Protein Structure Database</strong> has for the
        first time added <strong>protein complex structures</strong> to its
        collection, marking the most significant expansion of the resource since
        it launched in 2021. The update went live on{" "}
        <strong>March 15, 2026</strong> and includes{" "}
        <strong>1.7 million high-confidence predictions</strong> of
        homodimers — complexes formed when two identical protein copies bind
        together. The structures were produced through a four-way collaboration
        between{" "}
        <strong>
          EMBL's European Bioinformatics Institute (EMBL-EBI), Google DeepMind,
          NVIDIA, and Seoul National University
        </strong>
        .
      </p>

      <Section id="overview" title="Overview">
        <p className="text-gray-700 mb-4">
          Since its public launch in 2021, the AlphaFold Protein Structure
          Database has become the backbone of modern structural biology,
          providing free, open access to predicted three-dimensional structures
          for hundreds of millions of individual proteins. Until now, however,
          the database contained only single-chain (monomer) predictions —
          snapshots of individual proteins folding in isolation.
        </p>
        <p className="text-gray-700 mb-4">
          Biology rarely works that way. Most proteins carry out their functions
          by physically associating with other proteins, forming complexes that
          range from simple pairs to enormous multi-subunit assemblies. The
          addition of 1.7 million homodimer structures on March 15, 2026 is the
          database's first step toward capturing that real-world complexity, and
          it signals a broader strategic shift toward modelling how proteins
          interact rather than how they fold alone.
        </p>
        <p className="text-gray-700">
          The update was coordinated at database scale by EMBL-EBI, powered by
          Google DeepMind's AlphaFold modelling system, accelerated on NVIDIA
          hardware, and informed by computational expertise from Seoul National
          University.
        </p>
      </Section>

      <Section id="what-changed" title="What Changed">
        <p className="text-gray-700 mb-4">
          Prior to the March 15 update, every entry in the AlphaFold database
          represented a single protein chain. The new release introduces a
          separate, dedicated collection of <strong>complex structures</strong>,
          initially populated exclusively with homodimers — two copies of the
          same protein chain bound together.
        </p>
        <p className="text-gray-700 mb-4">
          The 1.7 million new entries were selected on the basis of
          high-confidence prediction scores and biological relevance. Each entry
          follows the same open-access model as the existing database: freely
          downloadable coordinate files, confidence scores per residue, and
          integrated links to other biological databases.
        </p>
        <DataTable
          headers={["Feature", "Before March 15, 2026", "After March 15, 2026"]}
          rows={[
            [
              "Structure types",
              "Monomer (single chain) only",
              "Monomer + protein complexes",
            ],
            ["Complex coverage", "None", "1.7 million homodimers"],
            ["Collaborating institutions", "EMBL-EBI, DeepMind", "EMBL-EBI, DeepMind, NVIDIA, Seoul National University"],
            ["Access model", "Free & open", "Free & open (unchanged)"],
          ]}
        />
        <p className="text-gray-700 mt-4">
          The database interface at{" "}
          <a
            href="https://alphafold.ebi.ac.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            alphafold.ebi.ac.uk
          </a>{" "}
          has been updated with new search and filtering tools specifically
          designed to query complex structures.
        </p>
      </Section>

      <Section id="homodimers" title="Understanding Homodimers">
        <p className="text-gray-700 mb-4">
          A <strong>homodimer</strong> is a protein complex made up of two
          identical subunits (protomers) that associate non-covalently. Roughly
          one in three known protein structures exists natively as a homodimer,
          making them the single most common type of protein complex in
          structural biology databases.
        </p>
        <p className="text-gray-700 mb-4">
          Homodimerisation is functionally significant across many biological
          contexts:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>
            <strong>Enzyme catalysis:</strong> Many enzymes only become
            catalytically active when dimerised, bringing catalytic residues
            from each subunit into proximity.
          </li>
          <li>
            <strong>Transcription regulation:</strong> Numerous DNA-binding
            proteins — including many zinc-finger and helix-loop-helix factors —
            bind their target sequences as homodimers.
          </li>
          <li>
            <strong>Receptor signalling:</strong> Receptor tyrosine kinases
            frequently homodimerise upon ligand binding as the first step in
            intracellular signal transduction.
          </li>
          <li>
            <strong>Structural roles:</strong> Collagen, a primary structural
            protein, depends on higher-order assemblies whose building blocks
            include homodimerised subunits.
          </li>
        </ul>
        <p className="text-gray-700">
          Because homodimerisation is so pervasive, predicting these structures
          reliably unlocks a large fraction of biology that was previously
          inaccessible from sequence alone.
        </p>
        <Quote source="EMBL-EBI, March 2026 announcement">
          Protein complexes are at the heart of virtually every cellular
          process. Making these structures openly available at scale is the
          logical next step after solving the monomer folding problem.
        </Quote>
      </Section>

      <Section id="collaboration" title="Four-Way Collaboration">
        <p className="text-gray-700 mb-4">
          The expansion was produced through an unusually broad institutional
          partnership, with each partner contributing a distinct component:
        </p>

        <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
          EMBL-EBI
        </h3>
        <p className="text-gray-700 mb-4">
          EMBL's European Bioinformatics Institute hosts and maintains the
          AlphaFold Protein Structure Database. EMBL-EBI curated the set of
          target sequences for complex prediction, managed data integration with
          its wider suite of biological databases (including UniProt, PDBe, and
          InterPro), and built the updated database interface.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
          Google DeepMind
        </h3>
        <p className="text-gray-700 mb-4">
          DeepMind's AlphaFold system — the same AI that won the 2020 Critical
          Assessment of Structure Prediction (CASP14) challenge — was adapted to
          predict multimeric assemblies. The version used for this dataset builds
          on AlphaFold-Multimer methodology, extended and refined for database-scale
          production runs. DeepMind provided the core prediction pipeline and
          confidence scoring.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
          NVIDIA
        </h3>
        <p className="text-gray-700 mb-4">
          Generating 1.7 million complex-structure predictions at publication
          quality required massive computational throughput. NVIDIA provided the
          GPU infrastructure and optimised inference software that made
          database-scale prediction economically and practically feasible.
          NVIDIA's involvement reflects the growing role of accelerated computing
          in large-scale bioinformatics production workloads.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
          Seoul National University
        </h3>
        <p className="text-gray-700 mb-4">
          Researchers at Seoul National University contributed expertise in
          protein complex modelling and validation methodology. Their group
          provided independent assessment of prediction quality and helped define
          the confidence thresholds used to filter the 1.7 million high-confidence
          structures from a broader set of predictions.
        </p>
      </Section>

      <Section id="significance" title="Scientific Significance">
        <p className="text-gray-700 mb-4">
          The AlphaFold database is already used by an estimated 2 million
          researchers worldwide. Adding complex structures expands the database's
          utility across several high-priority research areas:
        </p>

        <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
          Drug Discovery
        </h3>
        <p className="text-gray-700 mb-4">
          Many drug targets are proteins that function as dimers. Anti-cancer
          therapies, antiviral drugs, and treatments for metabolic disease
          frequently aim to disrupt or modulate homodimeric interfaces. Accurate
          structures of these interfaces dramatically accelerate the rational
          design of small-molecule inhibitors and biologics.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
          Protein Engineering
        </h3>
        <p className="text-gray-700 mb-4">
          Synthetic biology and protein design pipelines benefit directly from
          understanding how homodimers pack together. Researchers engineering
          novel enzymes, biosensors, or therapeutic proteins can now use predicted
          dimer geometries as starting templates.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
          Fundamental Biology
        </h3>
        <p className="text-gray-700 mb-4">
          Thousands of proteins whose monomer structures are already in the
          database have unknown complex geometries. The new entries illuminate
          how these proteins assemble, which residues form the dimer interface,
          and how disease-associated mutations might disrupt that interface.
        </p>

        <DataTable
          headers={["Research Area", "Previous Limitation", "New Capability"]}
          rows={[
            [
              "Drug discovery",
              "Interface geometry unknown for most targets",
              "1.7M dimer interfaces now openly available",
            ],
            [
              "Structural biology",
              "Monomer-only predictions",
              "Complex structures included for the first time",
            ],
            [
              "Protein engineering",
              "Manual experimental determination of dimer geometry",
              "Predicted dimer templates free at scale",
            ],
            [
              "Computational biology",
              "Limited training data for complex-aware models",
              "Large open dataset of high-confidence complex structures",
            ],
          ]}
        />
      </Section>

      <Section id="whats-next" title="What Comes Next">
        <p className="text-gray-700 mb-4">
          The addition of homodimers is explicitly framed as a first step. The
          AlphaFold database roadmap, as outlined in the March 15 announcement,
          points toward expanding complex coverage to include:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>
            <strong>Heterodimers:</strong> Complexes formed by two different
            protein chains, which account for a substantial portion of
            protein-protein interactions in the human proteome.
          </li>
          <li>
            <strong>Higher-order assemblies:</strong> Trimers, tetramers, and
            larger oligomers that underpin many enzymatic and structural
            functions.
          </li>
          <li>
            <strong>Protein-nucleic acid complexes:</strong> Structures in which
            proteins bind DNA or RNA — critical for understanding gene
            regulation and developing nucleic-acid-targeting therapies.
          </li>
        </ul>
        <p className="text-gray-700 mb-4">
          The collaboration also carries implications for NVIDIA's positioning in
          scientific AI. As biological datasets grow from millions to billions of
          structures, GPU-accelerated inference pipelines become essential
          infrastructure for every major data-producing institution in the life
          sciences.
        </p>
        <p className="text-gray-700">
          For the structural biology community, the March 15 update represents a
          shift in what a protein structure database is expected to contain. The
          bar has moved from individual chains to functional assemblies — and the
          AlphaFold database, backed by some of the world's most capable
          computing and AI institutions, appears positioned to keep raising it.
        </p>
      </Section>

      <ExternalLinks
        links={[
          {
            href: "https://alphafold.ebi.ac.uk/",
            label: "AlphaFold Protein Structure Database — alphafold.ebi.ac.uk",
          },
          {
            href: "https://www.ebi.ac.uk/",
            label: "EMBL's European Bioinformatics Institute (EMBL-EBI)",
          },
          {
            href: "https://deepmind.google/technologies/alphafold/",
            label: "Google DeepMind — AlphaFold",
          },
        ]}
      />
    </ArticlePage>
  );
}
