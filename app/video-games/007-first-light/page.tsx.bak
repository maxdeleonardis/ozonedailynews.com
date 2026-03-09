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
  title: "007: First Light - James Bond Game by IO Interactive | ObjectWire",
  description:
    "Everything about 007: First Light, the new James Bond origin story game from IO Interactive. Systemic gameplay meets espionage in the definitive 007 experience.",
  keywords: [
    "007 First Light",
    "James Bond game",
    "IO Interactive",
    "Hitman",
    "Project 007",
    "spy game",
    "espionage",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/007-first-light',
  },
};

export default function JamesBondGamePage() {
  const infoBox = {
    title: "007: First Light",
    items: [
      { label: "Developer", value: "IO Interactive" },
      { label: "Publisher", value: "IO Interactive (Self-Published)" },
      { label: "Platform", value: "Multi-platform" },
      { label: "Genre", value: "Stealth Action, Espionage" },
      { label: "Release Date", value: "TBA (Expected 2026-2027)" },
      { label: "Rating", value: "M for Mature (Expected)" },
      { label: "Engine", value: "Glacier Engine" },
      { label: "Announced", value: "November 2020" },
    ],
  };

  const tableOfContents = [
    { id: "overview", label: "Overview" },
    { id: "gameplay", label: "Expected Gameplay" },
    { id: "story", label: "Story & Setting" },
    { id: "features", label: "Key Features" },
    { id: "development", label: "Development Team" },
    { id: "release", label: "Release Window" },
  ];

  const relatedLinks = [
    {
      href: "/marvels-wolverine",
      label: "Marvels Wolverine",
      description: "Another highly anticipated action game",
    },
    {
      href: "/resident-evil-requiem",
      label: "Resident Evil: Requiem",
      description: "Upcoming survival horror title",
    },
  ];

  return (
    <ArticlePage
      title="007: First Light"
      subtitle="James Bond origin story from the creators of Hitman"
      category="Video Game"
      lastUpdated="January 23, 2026"
      infoBox={infoBox}
      tableOfContents={tableOfContents}
      relatedLinks={relatedLinks}
    >
      <p className="text-xl font-medium text-gray-700 mb-6 leading-relaxed">
        <strong>007: First Light</strong> is an upcoming James Bond game
        developed by <strong>IO Interactive</strong>, the studio behind the
        critically acclaimed <strong>Hitman trilogy</strong>. This game will
        tell an original Bond origin story, exploring the early days of
        Agent 007 before he became the legendary spy.
      </p>

      <Notice type="info">
        Announced in November 2020 as Project 007, the game will feature a
        completely original Bond story with a new actor portraying 007. It marks
        IO Interactives first self-published AAA title.
      </Notice>

      <Section id="overview" title="Overview">
        <p className="text-gray-700 mb-4">
          IO Interactive secured the James Bond license and announced their
          ambitious project to create a definitive 007 gaming experience. Unlike
          previous Bond games tied to specific films or actors, this will be an
          entirely original story exploring how James Bond earned his 00 status.
        </p>
        <p className="text-gray-700 mb-4">
          The game will leverage IO Interactives expertise in creating systemic,
          sandbox-style stealth gameplay seen in their Hitman series, adapted to
          fit the world of espionage, high-stakes missions, and international
          intrigue that defines James Bond.
        </p>
        <p className="text-gray-700">
          As a self-published title, IO Interactive has complete creative
          freedom, allowing them to craft their vision without external pressure.
          The game is being developed for multiple platforms, though specific
          platforms have not been officially announced.
        </p>
      </Section>

      <Section id="gameplay" title="Expected Gameplay">
        <p className="text-gray-700 mb-4">
          While official gameplay details are limited, IO Interactives
          history with the Hitman series provides strong indications of what to
          expect:
        </p>

        <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
          Systemic Stealth Gameplay
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>
            <strong>Sandbox Missions:</strong> Large, open-ended environments
            with multiple approaches to objectives
          </li>
          <li>
            <strong>Improvisation:</strong> Use gadgets, disguises, and
            environmental objects creatively
          </li>
          <li>
            <strong>Social Stealth:</strong> Blend into crowds, manipulate NPCs,
            gather intelligence
          </li>
          <li>
            <strong>Multiple Solutions:</strong> Complete missions through
            stealth, combat, or charm
          </li>
        </ul>

        <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
          Bond-Specific Mechanics
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>Advanced gadgets: Q Branch equipment with creative applications</li>
          <li>
            Charm and persuasion: Social interactions as gameplay mechanics
          </li>
          <li>Vehicle sequences: Cars, boats, and other Bond-style vehicles</li>
          <li>
            Casino and social settings: Poker games, parties, high-society
            infiltration
          </li>
          <li>
            Combat variety: Hand-to-hand, gunplay, and spectacular set pieces
          </li>
        </ul>

        <Quote source="IO Interactive, November 2020">
          Its a huge undertaking to create an entirely original Bond
          story... Were excited to unleash the full power of our Glacier
          engine for this new game.
        </Quote>
      </Section>

      <Section id="story" title="Story & Setting">
        <p className="text-gray-700 mb-4">
          007: First Light will tell an origin story showing how James Bond
          earned his license to kill. Key narrative elements expected:
        </p>

        <DataTable
          headers={["Story Element", "Description"]}
          rows={[
            [
              "Origin Story",
              "How James Bond became 007 and earned his double-0 status",
            ],
            [
              "New Actor",
              "Original portrayal of Bond, not tied to any film actor",
            ],
            [
              "Early Career",
              "Before the legend - Bond learning, making mistakes, developing his style",
            ],
            [
              "MI6 & Allies",
              "First meetings with M, Q, Moneypenny, and other key characters",
            ],
            [
              "Global Locations",
              "Exotic international settings from London to enemy territories",
            ],
            [
              "Villain Arc",
              "New antagonist designed specifically for this story",
            ],
          ]}
        />

        <p className="text-gray-700 mt-4">
          The game will explore themes central to James Bond: loyalty, duty,
          sacrifice, and the cost of the spy lifestyle. Expect a more grounded,
          character-driven narrative alongside the spectacle and action.
        </p>
      </Section>

      <Section id="features" title="Key Features">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Anticipated Features
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>
            <strong>Glacier Engine:</strong> IO Interactives cutting-edge technology
            powering detailed environments and AI
          </li>
          <li>
            <strong>Living Worlds:</strong> Dense crowds, reactive NPCs, dynamic
            events
          </li>
          <li>
            <strong>Replayability:</strong> Multiple paths, hidden secrets,
            challenges, and mastery progression
          </li>
          <li>
            <strong>Gadget System:</strong> Signature Bond gadgets with creative
            gameplay applications
          </li>
          <li>
            <strong>Signature Style:</strong> Suits, tuxedos, and Bonds
            iconic fashion sense
          </li>
          <li>
            <strong>Music & Atmosphere:</strong> Orchestral score evoking the
            Bond film legacy
          </li>
          <li>
            <strong>Global Scope:</strong> Multiple international locations with
            distinct atmospheres
          </li>
          <li>
            <strong>Post-Launch Content:</strong> Potential for episodic
            missions or expansions
          </li>
        </ul>
      </Section>

      <Section id="development" title="Development Team">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          IO Interactive
        </h3>
        <p className="text-gray-700 mb-4">
          Founded in 1998, IO Interactive is a Danish video game developer best
          known for creating the Hitman franchise. The studio became independent
          in 2017 after splitting from Square Enix, retaining the rights to
          Hitman. They successfully self-published Hitman 2 (2018) and Hitman 3
          (2021), both critical and commercial successes.
        </p>

        <DataTable
          headers={["Metric", "Details"]}
          rows={[
            ["Founded", "1998"],
            ["Headquarters", "Copenhagen, Denmark"],
            ["Employees", "200+"],
            ["Status", "Independent (Self-Publishing)"],
            ["Notable Franchises", "Hitman, Kane & Lynch"],
            ["Recent Success", "Hitman World of Assassination Trilogy"],
          ]}
        />

        <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
          Track Record
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
          <li>
            <strong>Hitman Trilogy (2016-2021):</strong> Critically acclaimed,
            multiple GOTY nominations
          </li>
          <li>
            <strong>Systemic Design Mastery:</strong> Industry-leading emergent
            gameplay systems
          </li>
          <li>
            <strong>Post-Launch Support:</strong> Years of content updates and
            player engagement
          </li>
          <li>
            <strong>Technical Excellence:</strong> Glacier engine powers
            detailed, populated worlds
          </li>
        </ul>

        <Notice type="info">
          IO Interactive opened a new studio in Barcelona to support Bond
          development while maintaining their Copenhagen headquarters and
          continuing Hitman support.
        </Notice>
      </Section>

      <Section id="release" title="Release Window">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Current Speculation
        </h3>
        <p className="text-gray-700 mb-4">
          With the game announced in November 2020, the development timeline
          suggests:
        </p>

        <DataTable
          headers={["Window", "Likelihood", "Reasoning"]}
          rows={[
            [
              "Late 2026",
              "Possible",
              "Would be 6 years of development - typical for AAA games of this scope",
            ],
            [
              "2027",
              "Most Likely",
              "Allows for polish and quality assurance for this ambitious project",
            ],
            [
              "2028",
              "Conservative",
              "If IO takes extra time to perfect the game as a self-published title",
            ],
          ]}
        />

        <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">
          What Were Watching
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Major gaming events: Game Awards, Summer Game Fest, Gamescom</li>
          <li>IO Interactive announcements and hiring patterns</li>
          <li>Bond franchise milestones (film releases, anniversaries)</li>
          <li>Industry insider reports and development updates</li>
          <li>Platform holder showcases (PlayStation, Xbox, PC Gaming Show)</li>
        </ul>
      </Section>

      <ExternalLinks
        links={[
          {
            href: "https://www.ioi.dk",
            label: "IO Interactive Official Site",
          },
          {
            href: "https://www.007.com",
            label: "Official James Bond Website",
          },
        ]}
      />
    </ArticlePage>
  );
}
