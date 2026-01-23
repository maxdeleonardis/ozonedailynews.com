import type { Metadata } from "next";
import {
  ArticlePage,
  Section,
  DataTable,
  Notice,
  Quote,
  ExternalLinks,
} from "@/components/ArticlePage";

export const metadata: Metadata = {
  title: "Resident Evil: Requiem - Upcoming Survival Horror Game | ObjectWire",
  description:
    "Everything about Resident Evil: Requiem, the next chapter in Capcoms legendary survival horror franchise. Release date, gameplay details, and latest news.",
  keywords: [
    "Resident Evil Requiem",
    "Resident Evil 9",
    "RE9",
    "Capcom",
    "survival horror",
    "horror game",
  ],
};

export default function ResidentEvilRequiemPage() {
  const infoBox = {
    title: "Resident Evil: Requiem",
    items: [
      { label: "Developer", value: "Capcom" },
      { label: "Publisher", value: "Capcom" },
      { label: "Platform", value: "PS5, Xbox Series X/S, PC" },
      { label: "Genre", value: "Survival Horror" },
      { label: "Release Date", value: "TBA (Expected 2026-2027)" },
      { label: "Rating", value: "M for Mature (Expected)" },
      { label: "Engine", value: "RE Engine" },
      { label: "Series", value: "Resident Evil (Mainline)" },
    ],
  };

  const tableOfContents = [
    { id: "overview", label: "Overview" },
    { id: "story", label: "Story & Setting" },
    { id: "gameplay", label: "Expected Gameplay" },
    { id: "features", label: "Key Features" },
    { id: "development", label: "Development" },
    { id: "release", label: "Release Window" },
  ];

  const relatedLinks = [
    {
      href: "/marvels-wolverine",
      label: "Marvels Wolverine",
      description: "Upcoming PS5 exclusive action game",
    },
    {
      href: "/007-first-light",
      label: "007: First Light",
      description: "James Bond game by IO Interactive",
    },
  ];

  return (
    <ArticlePage
      title="Resident Evil: Requiem"
      subtitle="The next chapter in Capcoms legendary survival horror franchise"
      category="Video Game"
      lastUpdated="January 23, 2026"
      infoBox={infoBox}
      tableOfContents={tableOfContents}
      relatedLinks={relatedLinks}
    >
      <p className="text-xl font-medium text-gray-700 mb-6 leading-relaxed">
        <strong>Resident Evil: Requiem</strong> is the rumored next mainline
        entry in <strong>Capcoms</strong> legendary{" "}
        <strong>Resident Evil</strong> franchise. Building on the success of
        recent remakes and new entries, this game is expected to continue the
        series tradition of intense survival horror, resource management, and
        horrifying creatures.
      </p>

      <Notice type="warning">
        This game has not been officially announced by Capcom. Information is
        based on industry reports, leaks, and insider speculation. Details may
        change or be inaccurate.
      </Notice>

      <Section id="overview" title="Overview">
        <p className="text-gray-700 mb-4">
          Following the critical and commercial success of Resident Evil Village
          (2021) and the Resident Evil 4 Remake (2023), Capcom is reportedly
          working on the next mainline entry in the franchise. Industry insiders
          suggest the game may be titled Resident Evil: Requiem or follow the
          numbering as Resident Evil 9.
        </p>
        <p className="text-gray-700 mb-4">
          The Resident Evil series has sold over 140 million copies worldwide,
          making it one of Capcoms most valuable franchises. The RE Engine, used
          since Resident Evil 7, has proven capable of delivering stunning
          visuals and immersive horror experiences on current-generation
          hardware.
        </p>
        <p className="text-gray-700">
          Capcom has maintained a consistent release cadence, alternating between
          new entries and remakes. With the Resident Evil 4 Remake launched in
          2023, speculation points to a new mainline entry arriving in 2026 or
          2027.
        </p>
      </Section>

      <Section id="story" title="Story & Setting">
        <p className="text-gray-700 mb-4">
          While official story details are unknown, fan speculation and rumored
          leaks suggest several possibilities:
        </p>

        <DataTable
          headers={["Possibility", "Description"]}
          rows={[
            [
              "Chris Redfield Focus",
              "Continue Chris storyline from Village, investigating BSAA corruption",
            ],
            [
              "Jill Valentine Return",
              "First mainline appearance since Resident Evil 5, potentially as protagonist",
            ],
            [
              "New Characters",
              "Fresh protagonists like Ethan Winters in RE7, expanding the universe",
            ],
            [
              "Global Outbreak",
              "Larger-scale bioterrorism event across multiple locations",
            ],
            [
              "Return to Survival Horror",
              "Back to franchise roots with limited resources and atmospheric dread",
            ],
            [
              "Umbrella Corporation",
              "Exploring remaining secrets or new threats from the legendary corporation",
            ],
          ]}
        />

        <p className="text-gray-700 mt-4">
          The title Requiem suggests themes of death, mourning, or finality -
          possibly indicating a conclusion to certain story arcs or a memorial to
          fallen characters from the franchises history.
        </p>
      </Section>

      <Section id="gameplay" title="Expected Gameplay">
        <p className="text-gray-700 mb-4">
          Based on recent Resident Evil entries, the game will likely feature:
        </p>

        <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
          Core Mechanics
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>
            <strong>Resource Management:</strong> Limited ammunition, healing
            items, and inventory space
          </li>
          <li>
            <strong>Combat:</strong> Mix of melee and ranged weapons against
            horrifying creatures
          </li>
          <li>
            <strong>Exploration:</strong> Environmental puzzles, hidden items,
            and backtracking
          </li>
          <li>
            <strong>Atmosphere:</strong> Tension-building through sound design,
            lighting, and pacing
          </li>
        </ul>

        <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
          RE Engine Capabilities
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>Photorealistic graphics with ray tracing support</li>
          <li>Advanced AI for dynamic enemy behavior</li>
          <li>Detailed environmental destruction</li>
          <li>Seamless loading and fast travel</li>
          <li>
            Performance modes: 4K/30fps (fidelity) or 1080p/60fps (performance)
          </li>
        </ul>

        <Quote source="Capcom Executive, 2024 Financial Report">
          Resident Evil remains a cornerstone of our portfolio. We are committed
          to delivering high-quality experiences that honor the franchises legacy
          while embracing innovation.
        </Quote>
      </Section>

      <Section id="features" title="Key Features">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Anticipated Features
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            <strong>Next-Gen Visuals:</strong> Full RE Engine capabilities on
            PS5/Xbox Series X/S
          </li>
          <li>
            <strong>New Creatures:</strong> Original bio-organic weapons and
            horrifying enemy designs
          </li>
          <li>
            <strong>Multiple Endings:</strong> Player choices affecting story
            outcomes
          </li>
          <li>
            <strong>Mercenaries Mode:</strong> Returning arcade-style combat mode
            with leaderboards
          </li>
          <li>
            <strong>New Game+:</strong> Unlockable weapons, costumes, and
            challenges
          </li>
          <li>
            <strong>Co-op Elements:</strong> Potential for cooperative gameplay
            sections
          </li>
          <li>
            <strong>VR Support:</strong> Optional PlayStation VR2 compatibility
          </li>
          <li>
            <strong>DLC Expansions:</strong> Post-launch story content and bonus
            modes
          </li>
        </ul>
      </Section>

      <Section id="development" title="Development">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Capcom</h3>
        <p className="text-gray-700 mb-4">
          Capcom is a Japanese video game developer and publisher founded in
          1979. The company is renowned for creating iconic franchises including
          Resident Evil, Street Fighter, Monster Hunter, Devil May Cry, and Mega
          Man. Resident Evil, launched in 1996, revolutionized the survival
          horror genre.
        </p>

        <DataTable
          headers={["Metric", "Details"]}
          rows={[
            ["Founded", "1979"],
            ["Headquarters", "Osaka, Japan"],
            ["Employees", "3,000+"],
            ["Stock", "Publicly traded (Tokyo Stock Exchange)"],
            ["RE Engine Games", "RE7, RE2 Remake, RE3 Remake, Village, RE4 Remake"],
            ["Franchise Sales", "140+ million copies worldwide"],
          ]}
        />

        <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
          Recent Success
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>
            <strong>Resident Evil 4 Remake (2023):</strong> Over 7 million copies
            sold, multiple awards
          </li>
          <li>
            <strong>Resident Evil Village (2021):</strong> Over 9 million copies
            sold, GOTY nominations
          </li>
          <li>
            <strong>RE Engine Mastery:</strong> Industry-leading proprietary
            engine for horror games
          </li>
          <li>
            <strong>Consistent Quality:</strong> Every mainline RE game since RE7
            critically acclaimed
          </li>
        </ul>

        <Notice type="info">
          Capcom typically announces Resident Evil games 6-12 months before
          release. A State of Play or Capcom Showcase reveal is expected in 2026.
        </Notice>
      </Section>

      <Section id="release" title="Release Window">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Projected Timeline
        </h3>
        <p className="text-gray-700 mb-4">
          Based on Capcoms release patterns and development cycles:
        </p>

        <DataTable
          headers={["Window", "Likelihood", "Reasoning"]}
          rows={[
            [
              "Late 2026",
              "Possible",
              "Would align with 3-year gap between Village (2021) and RE4 Remake (2023)",
            ],
            [
              "2027",
              "Most Likely",
              "Standard development time for mainline entries using RE Engine",
            ],
            [
              "2028",
              "Fallback",
              "If Capcom prioritizes other franchises or extends development",
            ],
          ]}
        />

        <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
          What Were Watching
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Capcom Showcase events and major gaming presentations</li>
          <li>PlayStation State of Play or Xbox showcases</li>
          <li>Capcom investor reports and financial guidance</li>
          <li>Job listings at Capcom related to RE Engine projects</li>
          <li>Trademark filings and domain registrations</li>
          <li>Industry leaks from reliable sources</li>
        </ul>
      </Section>

      <ExternalLinks
        links={[
          {
            href: "https://www.capcom.com",
            label: "Capcom Official Website",
          },
          {
            href: "https://www.residentevil.com",
            label: "Resident Evil Portal",
          },
        ]}
      />
    </ArticlePage>
  );
}
