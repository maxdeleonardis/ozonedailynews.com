import type { Metadata } from "next";
import {
  InvestigativeArticle,
  CaseOverview,
  StatisticsBox,
  InvestigationQuote,
  KeyFigures,
  SourcesCited,
  CaseTimeline,
  RelatedCoverage,
  KeyDocuments,
  InvestigationNewsletter,
  LeadParagraph,
  InvestigationSection,
} from "@/components/InvestigativeArticle";

export const metadata: Metadata = {
  title: "19th Century Austin Home Once Owned by Elijah Wood Listed at $3.2M | ObjectWire",
  description:
    "A historic 1890s Austin home previously owned by Lord of the Rings star Elijah Wood hits the market at $3.2 million. Inside the property's storied history and celebrity connection.",
  keywords: [
    "Elijah Wood",
    "Austin real estate",
    "historic home",
    "celebrity home",
    "Travis Heights",
    "Victorian architecture",
    "Austin Texas",
    "luxury real estate",
  ],
  alternates: {
    canonical: 'https://www.objectwire.org/austin/19th-century-Austin-home-once-owned-Elijah-Wood-listed-at-3.2M',
  },
};

export default function ElijahWoodAustinHomePage() {
  const sidebar = (
    <>
      <CaseTimeline
        events={[
          { date: "1895", description: "Home originally constructed" },
          { date: "1920s-1990s", description: "Various private owners" },
          { date: "2012", description: "Elijah Wood purchases property" },
          { date: "2015", description: "Major restoration completed" },
          { date: "2018", description: "Wood sells property" },
          { date: "January 2026", description: "Listed at $3.2M", highlight: true },
          { date: "Present", description: "Active listing", current: true },
        ]}
      />

      <RelatedCoverage
        stories={[
          {
            href: "/austin/real-estate",
            category: "REAL ESTATE",
            categoryColor: "text-green-600",
            title: "Austin Housing Market Update: January 2026",
          },
          {
            href: "/austin/historic-homes",
            category: "ARCHITECTURE",
            categoryColor: "text-purple-600",
            title: "Austin's Most Historic Neighborhoods",
          },
          {
            href: "/austin/celebrity-homes",
            category: "CELEBRITY",
            categoryColor: "text-pink-600",
            title: "Celebrity-Owned Properties in Austin",
          },
        ]}
      />

      <KeyDocuments
        documents={[
          {
            label: "Travis County Property Records",
            href: "https://www.traviscad.org/",
          },
          {
            label: "Austin Historic Landmark Registry",
            href: "https://www.austintexas.gov/department/historic-preservation",
          },
        ]}
      />

      <InvestigationNewsletter
        title="Austin Real Estate Alerts"
        description="Get notified about notable property listings and market updates."
      />
    </>
  );

  return (
    <InvestigativeArticle
      title="19th Century Austin Home Once Owned by Elijah Wood Listed at $3.2M"
      subtitle="The meticulously restored 1895 Victorian in Travis Heights carries both architectural significance and Hollywood history as it seeks its next owner."
      category="REAL ESTATE"
      secondaryCategory="CELEBRITY"
      readTime="8 min read"
      author={{
        name: "ObjectWire Austin Bureau",
        department: "Real Estate Desk",
      }}
      publishDate="January 23, 2026"
      breadcrumbs={[
        { href: "/news", label: "News" },
        { href: "/austin", label: "Austin" },
        { href: "/austin/real-estate", label: "Real Estate" },
      ]}
      sidebar={sidebar}
    >
      <CaseOverview
        title="PROPERTY OVERVIEW"
        color="blue"
        items={[
          { label: "$3.2 million", value: "asking price" },
          { label: "1895", value: "year built" },
          { label: "4,200 sq ft", value: "living space" },
          { label: "0.38 acres", value: "lot size" },
          { label: "5 bedrooms,", value: "4 bathrooms" },
          { label: "Travis Heights,", value: "South Austin location" },
        ]}
      />

      <LeadParagraph>
        A stunning piece of Austin history with an unexpected Hollywood connection has just hit 
        the market. The 1895 Victorian home in the coveted Travis Heights neighborhood—once 
        owned by Lord of the Rings star Elijah Wood—is now listed at $3.2 million, offering 
        a rare opportunity to own one of the city's most meticulously preserved historic properties.
      </LeadParagraph>

      <p>
        The property, located just minutes from downtown Austin on a tree-lined street, represents 
        a unique intersection of 19th-century craftsmanship, modern luxury updates, and celebrity 
        provenance that has drawn significant attention from both real estate enthusiasts and 
        architecture preservationists.
      </p>

      <InvestigationSection id="history" title="A Home with Deep Roots">
        <p>
          Built in 1895 during Austin's post-Civil War expansion period, the home stands as one 
          of the finest surviving examples of Victorian residential architecture in Central Texas. 
          The original structure was commissioned by a prominent local merchant whose family 
          occupied the residence for nearly three decades.
        </p>

        <p>
          The home changed hands several times throughout the 20th century, serving variously as 
          a single-family residence, a boarding house during the 1940s, and eventually falling 
          into disrepair by the 1990s. Its salvation came in the early 2000s when a local 
          preservation group flagged it for potential landmark status.
        </p>

        <InvestigationQuote source="Austin Historic Preservation Office" context="2003 Assessment">
          "This property represents an increasingly rare example of intact Victorian architecture 
          in Austin. Its original millwork, wraparound porch, and period details make it worthy 
          of protection and thoughtful restoration."
        </InvestigationQuote>
      </InvestigationSection>

      <InvestigationSection id="elijah-wood" title="The Elijah Wood Chapter">
        <p>
          In 2012, actor <strong>Elijah Wood</strong>—best known for his portrayal of Frodo Baggins 
          in Peter Jackson's Lord of the Rings trilogy—quietly purchased the property for a reported 
          $1.1 million. Wood, who had developed an affinity for Austin's music and film scene, saw 
          potential in the historic home that others had overlooked.
        </p>

        <p>
          During his ownership from 2012 to 2018, Wood undertook a comprehensive restoration project 
          that balanced historical authenticity with modern livability. The actor reportedly worked 
          closely with Austin-based preservation architects to ensure period-appropriate materials 
          and techniques were used throughout the renovation.
        </p>

        <KeyFigures
          figures={[
            {
              name: "Elijah Wood",
              role: "Previous Owner (2012-2018)",
              description:
                "Academy Award-nominated actor known for Lord of the Rings, Sin City, and numerous indie films. Austin resident and DJ under the name Wooden Wisdom.",
            },
            {
              name: "Current Owners",
              role: "Sellers (2018-Present)",
              description:
                "Private buyers who purchased from Wood and have maintained the property's restored condition. Names withheld per seller request.",
            },
          ]}
        />

        <p>
          Wood's restoration reportedly cost upwards of $800,000 and included foundation 
          stabilization, complete electrical and plumbing modernization, HVAC installation 
          (sensitively hidden to preserve aesthetics), and painstaking restoration of original 
          woodwork, windows, and decorative elements.
        </p>

        <InvestigationQuote source="Real Estate Industry Source">
          "Elijah approached this project like he approaches his film roles—with meticulous 
          attention to detail. He wasn't just flipping a house; he was preserving a piece of 
          Austin's story."
        </InvestigationQuote>
      </InvestigationSection>

      <InvestigationSection id="property-details" title="Property Features">
        <p>
          The home offers 4,200 square feet of living space across two stories, featuring five 
          bedrooms and four bathrooms. Original architectural details include 12-foot ceilings, 
          heart pine floors, ornate crown moldings, and a grand central staircase.
        </p>

        <StatisticsBox
          title="PROPERTY SPECIFICATIONS"
          color="blue"
          stats={[
            { value: "4,200", label: "Square Feet" },
            { value: "5", label: "Bedrooms" },
            { value: "4", label: "Bathrooms" },
            { value: "0.38", label: "Acres" },
          ]}
        />

        <p>
          <strong>Key features include:</strong>
        </p>

        <ul className="list-disc pl-6 space-y-2">
          <li>Original wraparound porch with period-appropriate restoration</li>
          <li>Chef's kitchen with Viking appliances and custom cabinetry</li>
          <li>Primary suite with spa bathroom and walk-in closet</li>
          <li>Detached two-car carriage house (converted garage)</li>
          <li>Mature live oak trees and professionally landscaped gardens</li>
          <li>Original fireplaces (3) with restored mantels</li>
          <li>Wine cellar and climate-controlled storage</li>
          <li>Modern security system with smart home integration</li>
        </ul>

        <p>
          The property also includes a 600-square-foot guest cottage at the rear of the lot, 
          which Wood reportedly used as a music studio during his ownership. The cottage has 
          been soundproofed and could serve as a home office, art studio, or additional guest quarters.
        </p>
      </InvestigationSection>

      <InvestigationSection id="market-context" title="Market Context & Pricing">
        <p>
          The $3.2 million asking price positions the property at the upper end of Austin's 
          historic home market but reflects several premium factors: the Travis Heights location, 
          the quality of restoration, the celebrity provenance, and the increasingly rare nature 
          of intact Victorian properties in Central Austin.
        </p>

        <p>
          Travis Heights, one of Austin's oldest planned neighborhoods, has seen significant 
          price appreciation over the past decade. The neighborhood's walkability to South 
          Congress Avenue, proximity to downtown, and established tree canopy make it one 
          of the most sought-after addresses in the city.
        </p>

        <StatisticsBox
          title="TRAVIS HEIGHTS MARKET DATA"
          color="yellow"
          stats={[
            { value: "$1.8M", label: "Median Price" },
            { value: "15%", label: "YoY Growth" },
            { value: "21", label: "Days on Market" },
            { value: "98%", label: "List-to-Sale" },
          ]}
        />

        <InvestigationQuote source="Austin Real Estate Analyst">
          "Historic properties with this level of restoration and celebrity history are 
          essentially irreplaceable inventory. The $3.2 million ask is aggressive but 
          justifiable given the unique combination of factors."
        </InvestigationQuote>
      </InvestigationSection>

      <InvestigationSection id="viewing" title="Viewing Information">
        <p>
          The property is being marketed by a prominent Austin luxury real estate firm with 
          showings available by appointment only. Due to anticipated interest, the listing 
          agents have indicated they may implement an offer deadline if initial response is strong.
        </p>

        <p>
          Prospective buyers will need to demonstrate proof of funds or pre-approval before 
          scheduling private tours. Virtual walkthrough options are available for out-of-state 
          buyers considering relocation to Austin.
        </p>

        <p>
          <em>
            ObjectWire will update this story as the listing progresses. For real estate alerts 
            and Austin market updates, subscribe to our newsletter.
          </em>
        </p>
      </InvestigationSection>

      <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
        <span className="inline-block bg-green-600 text-white text-xs font-bold px-2 py-1 rounded mb-2">
          #real-estate
        </span>
        <p className="text-sm text-gray-600">
          This article is part of ObjectWire's Austin real estate coverage. 
          <a href="/austin/real-estate" className="text-green-600 hover:underline ml-1">
            View all real estate stories →
          </a>
        </p>
      </div>

      <SourcesCited
        sources={[
          {
            label: "Travis County Appraisal District",
            href: "https://www.traviscad.org/",
            description: "Property records and ownership history",
          },
          {
            label: "Austin Historic Landmark Commission",
            href: "https://www.austintexas.gov/",
            description: "Historic designation records",
          },
          {
            label: "Multiple Listing Service (MLS)",
            description: "Active listing data and property specifications",
          },
          {
            label: "Real Estate Industry Sources",
            description: "Background interviews conducted January 2026",
          },
        ]}
      />
    </InvestigativeArticle>
  );
}
