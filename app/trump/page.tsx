import type { Metadata } from "next";import type { Metadata } from "next";

import {import {

  ArticlePage,  ArticlePage,

  Section,  PageHeader,

  Quote,  InfoBox,

  DataTable,  TableOfContents,

  Notice,  Section,

  ExternalLinks,  DataTable,

} from "@/components/ArticlePage";  Notice,

  Quote,

export const metadata: Metadata = {  Figure,

  title: "Donald Trump - Complete Biography and Presidency | ObjectWire",  RelatedLinks,

  description:  ExternalLinks,

    "Comprehensive information about Donald J. Trump, 45th and 47th President of the United States. Business career, television, presidency, controversies, and political legacy.",  References,

  keywords: [} from "@/components/ArticlePage";

    "Donald Trump",

    "President Trump",export const metadata: Metadata = {

    "45th President",  title: "Donald Trump - Complete Biography and Presidency | ObjectWire",

    "47th President",  description:

    "Trump Organization",    "Comprehensive information about Donald J. Trump, 45th and 47th President of the United States. Business career, television, presidency, controversies, and political legacy.",

    "The Apprentice",  keywords: [

    "Republican Party",    "Donald Trump",

    "MAGA",    "President Trump",

    "2024 election",    "45th President",

  ],    "47th President",

};    "Trump Organization",

    "The Apprentice",

export default function TrumpPage() {    "Republican Party",

  const infoBox = {    "MAGA",

    title: "Donald J. Trump",    "2024 election",

    image: {  ],

      src: "/images/trump-official.jpg",};

      alt: "President Donald Trump",

      caption: "Official presidential portrait",export default function TrumpPage() {

    },  return (

    items: [    <ArticlePage>

      { label: "Born", value: "June 14, 1946 (age 79)\nQueens, New York City" },      <PageHeader

      {         title="Donald J. Trump"

        label: "Political Party",         subtitle="45th and 47th President of the United States"

        value: "Republican (1987–1999, 2009–2011, 2012–present)"        category="Politics"

      },        lastUpdated="January 23, 2026"

      {         breadcrumbs={[

        label: "Spouse(s)",           { href: "/", label: "Home" },

        value: "Ivana Zelníčková (m. 1977; div. 1990)\nMarla Maples (m. 1993; div. 1999)\nMelania Knauss (m. 2005)"           { href: "/politics", label: "Politics" },

      },          { href: "/presidents", label: "U.S. Presidents" },

      { label: "Children", value: "Donald Jr., Ivanka, Eric, Tiffany, Barron" },        ]}

      { label: "Education", value: "University of Pennsylvania (BS Economics)" },      />

      { label: "Occupation", value: "Politician, Businessman, Television Personality" },

      {      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">

        label: "Presidency",        <div>

        value: "45th President: 2017-2021\n47th President: 2025-present",          <TableOfContents

      },            items={[

      {               { id: "overview", label: "Overview" },

        label: "Vice President(s)",               { id: "early-life", label: "Early Life and Education" },

        value: "Mike Pence (2017-2021)\nJ.D. Vance (2025-present)"               { id: "business-career", label: "Business Career" },

      },              { id: "media-personality", label: "Media and Television" },

      { label: "Net Worth", value: "Est. $2.6 billion (2024)" },              { id: "first-presidency", label: "First Presidency (2017-2021)" },

    ],              { id: "post-presidency", label: "Post-Presidency Period" },

  };              { id: "legal-issues", label: "Legal Challenges" },

              { id: "2024-campaign", label: "2024 Presidential Campaign" },

  const tableOfContents = [              { id: "second-presidency", label: "Second Presidency (2025-Present)" },

    { id: "overview", label: "Overview" },              { id: "political-positions", label: "Political Positions" },

    { id: "early-life", label: "Early Life and Education" },              { id: "controversies", label: "Controversies" },

    { id: "business-career", label: "Business Career" },              { id: "cultural-impact", label: "Cultural Impact and Legacy" },

    { id: "media-personality", label: "Media and Television" },            ]}

    { id: "first-presidency", label: "First Presidency (2017-2021)" },          />

    { id: "post-presidency", label: "Post-Presidency Period" },

    { id: "legal-issues", label: "Legal Challenges" },          <Section id="overview" title="Overview">

    { id: "2024-campaign", label: "2024 Presidential Campaign" },            <p>

    { id: "second-presidency", label: "Second Presidency (2025-Present)" },              <strong>Donald John Trump</strong> (born June 14, 1946) is an American politician,

    { id: "political-positions", label: "Political Positions" },              businessman, and media personality who served as the 45th president of the United

    { id: "controversies", label: "Controversies" },              States from 2017 to 2021, and returned to office as the 47th president in January

    { id: "cultural-impact", label: "Cultural Impact and Legacy" },              2025, becoming only the second person in U.S. history to serve non-consecutive terms

  ];              (after Grover Cleveland).

            </p>

  const relatedLinks = [

    {            <p>

      href: "/joe-biden",              Before entering politics, Trump was a real estate developer and businessman, building

      label: "Joe Biden",              his career on his family's real estate business and expanding it into a global brand

      description: "46th President of the United States",              encompassing hotels, casinos, golf courses, and various licensing deals. He gained

    },              additional fame as a television personality, hosting the reality show{" "}

    {              <em>The Apprentice</em> from 2004 to 2015.

      href: "/republican-party",            </p>

      label: "Republican Party",

      description: "Political party Trump represents",            <p>

    },              Trump's political career has been marked by his unconventional approach, "America

    {              First" policy agenda, and his ability to mobilize a devoted base of supporters. His

      href: "/maga-movement",              presidency and political movement have profoundly shaped American politics, media,

      label: "MAGA Movement",              and culture in the 21st century.

      description: "Make America Great Again political movement",            </p>

    },

    {            <Quote

      href: "/2024-presidential-election",              text="I will be the greatest jobs president that God ever created."

      label: "2024 Presidential Election",              attribution="Donald Trump, Campaign Rally, 2016"

      description: "Trump's return to the presidency",            />

    },          </Section>

  ];

          <Section id="early-life" title="Early Life and Education">

  return (            <h3 className="text-xl font-bold mt-6 mb-3">Family Background</h3>

    <ArticlePage            <p>

      title="Donald J. Trump"              Donald John Trump was born on June 14, 1946, in Queens, New York City, to Frederick

      subtitle="45th and 47th President of the United States"              Christ Trump and Mary Anne MacLeod Trump. He was the fourth of five children. His

      category="Politics"              father, Fred Trump, was a prominent real estate developer in New York City,

      lastUpdated="January 23, 2026"              particularly in Queens and Brooklyn, specializing in middle-class rental housing.

      infoBox={infoBox}            </p>

      tableOfContents={tableOfContents}

      relatedLinks={relatedLinks}            <p>

    >              Trump grew up in the affluent Jamaica Estates neighborhood of Queens. His father's

      <p className="text-xl font-medium text-gray-700 mb-6 leading-relaxed">              success in real estate provided the family with considerable wealth and introduced

        <strong>Donald John Trump</strong> (born June 14, 1946) is an American politician,              young Donald to the construction and property development business from an early age.

        businessman, and media personality who served as the 45th president of the United            </p>

        States from 2017 to 2021, and returned to office as the 47th president in January

        2025, becoming only the second person in U.S. history to serve non-consecutive terms            <h3 className="text-xl font-bold mt-6 mb-3">Education</h3>

        (after Grover Cleveland).            <p>

      </p>              Trump attended the Kew-Forest School in Queens until age 13, when his parents sent

              him to the New York Military Academy, a private boarding school, due to behavioral

      <p className="text-gray-700 mb-6 leading-relaxed">              issues. At the academy, Trump thrived, becoming a student leader and excelling in

        Before entering politics, Trump was a real estate developer and businessman, building              both academics and athletics.

        his career on his family's real estate business and expanding it into a global brand            </p>

        encompassing hotels, casinos, golf courses, and various licensing deals. He gained

        additional fame as a television personality, hosting the reality show{" "}            <p>

        <em>The Apprentice</em> from 2004 to 2015.              He began his higher education at Fordham University in the Bronx, attending for two

      </p>              years before transferring to the Wharton School at the University of Pennsylvania.

              He graduated in 1968 with a Bachelor of Science degree in economics. Trump has

      <Section id="overview" title="Overview">              frequently cited his Wharton education as evidence of his business acumen.

        <p className="text-gray-700 mb-4">            </p>

          Trump's political career has been marked by his unconventional approach, "America          </Section>

          First" policy agenda, and his ability to mobilize a devoted base of supporters. His

          presidency and political movement have profoundly shaped American politics, media,          <Section id="business-career" title="Business Career">

          and culture in the 21st century.            <h3 className="text-xl font-bold mt-6 mb-3">Early Years with Fred Trump</h3>

        </p>            <p>

              After graduating from Wharton, Trump joined his father's real estate company,

        <Quote source="Donald Trump, Campaign Rally, 2016">              Elizabeth Trump & Son. He was given control of the company in 1971 and renamed it

          I will be the greatest jobs president that God ever created.              The Trump Organization. While working with his father, Trump became involved in

        </Quote>              larger building projects and began shifting the company's focus to Manhattan.

      </Section>            </p>



      <Section id="early-life" title="Early Life and Education">            <h3 className="text-xl font-bold mt-6 mb-3">Manhattan Expansion</h3>

        <h3 className="text-xl font-bold mt-6 mb-3">Family Background</h3>            <p>

        <p className="text-gray-700 mb-4">              Trump's first major project in Manhattan was the transformation of the old Commodore

          Donald John Trump was born on June 14, 1946, in Queens, New York City, to Frederick              Hotel near Grand Central Terminal into the Grand Hyatt, completed in 1980 with

          Christ Trump and Mary Anne MacLeod Trump. He was the fourth of five children. His              financial backing and tax abatements from the city. This project established Trump

          father, Fred Trump, was a prominent real estate developer in New York City,              as a significant developer in Manhattan.

          particularly in Queens and Brooklyn, specializing in middle-class rental housing.            </p>

        </p>

            <p>

        <p className="text-gray-700 mb-4">              His signature project, Trump Tower, a 58-story mixed-use skyscraper on Fifth Avenue,

          Trump grew up in the affluent Jamaica Estates neighborhood of Queens. His father's              was completed in 1983. The building's luxurious design and Trump's residence in its

          success in real estate provided the family with considerable wealth and introduced              penthouse became synonymous with his public image of wealth and success.

          young Donald to the construction and property development business from an early age.            </p>

        </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Expansion and Setbacks</h3>

        <h3 className="text-xl font-bold mt-6 mb-3">Education</h3>            <p>

        <p className="text-gray-700 mb-4">              Throughout the 1980s and 1990s, Trump expanded his real estate holdings to include

          Trump attended the Kew-Forest School in Queens until age 13, when his parents sent              casinos in Atlantic City, hotels, and golf courses. However, he also faced

          him to the New York Military Academy, a private boarding school, due to behavioral              significant financial difficulties:

          issues. At the academy, Trump thrived, becoming a student leader and excelling in            </p>

          both academics and athletics.

        </p>            <DataTable

              caption="Major Trump Business Ventures"

        <p className="text-gray-700">              headers={["Property/Business", "Year", "Status/Outcome"]}

          He began his higher education at Fordham University in the Bronx, attending for two              rows={[

          years before transferring to the Wharton School at the University of Pennsylvania.                ["Trump Tower, NYC", "1983", "Active flagship property"],

          He graduated in 1968 with a Bachelor of Science degree in economics. Trump has                ["Trump Plaza Casino, Atlantic City", "1984", "Closed 2014, demolished 2021"],

          frequently cited his Wharton education as evidence of his business acumen.                ["Trump Taj Mahal Casino", "1990", "Bankruptcy 1991, sold 2017"],

        </p>                ["Trump Airlines", "1989-1992", "Failed, sold"],

      </Section>                ["Trump University", "2005-2010", "Closed, legal settlements"],

                ["Trump Vodka", "2006-2011", "Discontinued"],

      <Section id="business-career" title="Business Career">                ["Trump International Hotel, DC", "2016", "Sold 2022"],

        <h3 className="text-xl font-bold mt-6 mb-3">Early Years with Fred Trump</h3>                ["Trump Golf Courses (Multiple)", "2000s-present", "Various worldwide locations"],

        <p className="text-gray-700 mb-4">              ]}

          After graduating from Wharton, Trump joined his father's real estate company,            />

          Elizabeth Trump & Son. He was given control of the company in 1971 and renamed it

          The Trump Organization. While working with his father, Trump became involved in            <Notice type="info" title="Business Bankruptcies">

          larger building projects and began shifting the company's focus to Manhattan.              <p>

        </p>                Trump's businesses filed for Chapter 11 bankruptcy protection six times between

                1991 and 2009, primarily involving his casino and hotel properties in Atlantic

        <h3 className="text-xl font-bold mt-6 mb-3">Manhattan Expansion</h3>                City. Trump has stated these were strategic business decisions that allowed

        <p className="text-gray-700 mb-4">                restructuring while protecting the Trump brand.

          Trump's first major project in Manhattan was the transformation of the old Commodore              </p>

          Hotel near Grand Central Terminal into the Grand Hyatt, completed in 1980 with            </Notice>

          financial backing and tax abatements from the city. This project established Trump

          as a significant developer in Manhattan.            <h3 className="text-xl font-bold mt-6 mb-3">Brand Licensing</h3>

        </p>            <p>

              From the 2000s onward, Trump increasingly focused on licensing his name to

        <p className="text-gray-700 mb-4">              properties and products developed by other companies. The Trump brand was licensed

          His signature project, Trump Tower, a 58-story mixed-use skyscraper on Fifth Avenue,              for residential towers, hotels, clothing lines, steaks, beverages, and various other

          was completed in 1983. The building's luxurious design and Trump's residence in its              products, generating significant revenue through royalty agreements.

          penthouse became synonymous with his public image of wealth and success.            </p>

        </p>          </Section>



        <h3 className="text-xl font-bold mt-6 mb-3">Expansion and Setbacks</h3>          <Section id="media-personality" title="Media and Television">

        <p className="text-gray-700 mb-4">            <h3 className="text-xl font-bold mt-6 mb-3">The Apprentice</h3>

          Throughout the 1980s and 1990s, Trump expanded his real estate holdings to include            <p>

          casinos in Atlantic City, hotels, and golf courses. However, he also faced              In 2004, Trump became the host and executive producer of{" "}

          significant financial difficulties:              <em>The Apprentice</em>, an NBC reality television show where contestants competed

        </p>              for a management job within the Trump Organization. The show was a massive success

              and ran for 14 seasons (including <em>The Celebrity Apprentice</em> spin-off).

        <DataTable            </p>

          headers={["Property/Business", "Year", "Status/Outcome"]}

          rows={[            <p>

            ["Trump Tower, NYC", "1983", "Active flagship property"],              <em>The Apprentice</em> significantly raised Trump's public profile, making him a

            ["Trump Plaza Casino, Atlantic City", "1984", "Closed 2014, demolished 2021"],              household name beyond New York business circles. His catchphrase "You're fired!"

            ["Trump Taj Mahal Casino", "1990", "Bankruptcy 1991, sold 2017"],              became iconic. Reports suggest Trump earned approximately $427 million from the show

            ["Trump Airlines", "1989-1992", "Failed, sold"],              over its run.

            ["Trump University", "2005-2010", "Closed, legal settlements"],            </p>

            ["Trump Vodka", "2006-2011", "Discontinued"],

            ["Trump International Hotel, DC", "2016", "Sold 2022"],            <h3 className="text-xl font-bold mt-6 mb-3">Books and Other Media</h3>

            ["Trump Golf Courses (Multiple)", "2000s-present", "Various worldwide locations"],            <p>

          ]}              Trump has authored or co-authored numerous books, the most famous being{" "}

        />              <em>The Art of the Deal</em> (1987), which became a bestseller and helped establish

              his reputation as a dealmaker. Other books include <em>Think Big and Kick Ass</em>,{" "}

        <Notice type="info">              <em>The Art of the Comeback</em>, and <em>Crippled America</em>.

          <p>            </p>

            <strong>Business Bankruptcies:</strong> Trump's businesses filed for Chapter 11 bankruptcy           </Section>

            protection six times between 1991 and 2009, primarily involving his casino and hotel 

            properties in Atlantic City. Trump has stated these were strategic business decisions           <Section id="first-presidency" title="First Presidency (2017-2021)">

            that allowed restructuring while protecting the Trump brand.            <h3 className="text-xl font-bold mt-6 mb-3">2016 Presidential Campaign</h3>

          </p>            <p>

        </Notice>              Trump announced his candidacy for president on June 16, 2015, descending the

              escalator in Trump Tower to deliver his announcement speech. Running as a

        <h3 className="text-xl font-bold mt-6 mb-3">Brand Licensing</h3>              Republican, he campaigned on promises to "Make America Great Again," build a wall on

        <p className="text-gray-700">              the Mexican border, renegotiate trade deals, and adopt an "America First" foreign

          From the 2000s onward, Trump increasingly focused on licensing his name to              policy.

          properties and products developed by other companies. The Trump brand was licensed            </p>

          for residential towers, hotels, clothing lines, steaks, beverages, and various other

          products, generating significant revenue through royalty agreements.            <p>

        </p>              Despite being initially dismissed by political analysts and facing a crowded

      </Section>              Republican primary field, Trump dominated media coverage and won the nomination. In

              the general election, he faced Democratic nominee Hillary Clinton and won the

      <Section id="media-personality" title="Media and Television">              Electoral College 304-227, though he lost the popular vote by nearly 3 million votes.

        <h3 className="text-xl font-bold mt-6 mb-3">The Apprentice</h3>            </p>

        <p className="text-gray-700 mb-4">

          In 2004, Trump became the host and executive producer of{" "}            <h3 className="text-xl font-bold mt-6 mb-3">Major Policies and Actions</h3>

          <em>The Apprentice</em>, an NBC reality television show where contestants competed            

          for a management job within the Trump Organization. The show was a massive success            <h4 className="text-lg font-bold mt-4 mb-2">Economic Policy</h4>

          and ran for 14 seasons (including <em>The Celebrity Apprentice</em> spin-off).            <ul className="list-disc pl-6 space-y-2 my-4">

        </p>              <li>

                <strong>Tax Cuts and Jobs Act (2017):</strong> Major tax reform reducing

        <p className="text-gray-700 mb-4">                corporate tax rate from 35% to 21%

          <em>The Apprentice</em> significantly raised Trump's public profile, making him a              </li>

          household name beyond New York business circles. His catchphrase "You're fired!"              <li>

          became iconic. Reports suggest Trump earned approximately $427 million from the show                <strong>Deregulation:</strong> Rolled back numerous Obama-era regulations,

          over its run.                particularly environmental and financial regulations

        </p>              </li>

              <li>

        <h3 className="text-xl font-bold mt-6 mb-3">Books and Other Media</h3>                <strong>Trade Policy:</strong> Initiated trade war with China, renegotiated

        <p className="text-gray-700">                NAFTA into USMCA

          Trump has authored or co-authored numerous books, the most famous being{" "}              </li>

          <em>The Art of the Deal</em> (1987), which became a bestseller and helped establish            </ul>

          his reputation as a dealmaker. Other books include <em>Think Big and Kick Ass</em>,{" "}

          <em>The Art of the Comeback</em>, and <em>Crippled America</em>.            <h4 className="text-lg font-bold mt-4 mb-2">Immigration</h4>

        </p>            <ul className="list-disc pl-6 space-y-2 my-4">

      </Section>              <li>

                <strong>Border Wall:</strong> Constructed approximately 450 miles of border

      <Section id="first-presidency" title="First Presidency (2017-2021)">                barrier

        <h3 className="text-xl font-bold mt-6 mb-3">2016 Presidential Campaign</h3>              </li>

        <p className="text-gray-700 mb-4">              <li>

          Trump announced his candidacy for president on June 16, 2015, descending the                <strong>Travel Ban:</strong> Executive orders restricting travel from several

          escalator in Trump Tower to deliver his announcement speech. Running as a                Muslim-majority countries

          Republican, he campaigned on promises to "Make America Great Again," build a wall on              </li>

          the Mexican border, renegotiate trade deals, and adopt an "America First" foreign              <li>

          policy.                <strong>Family Separation Policy:</strong> Controversial "zero tolerance" policy

        </p>                at the border

              </li>

        <p className="text-gray-700 mb-4">            </ul>

          Despite being initially dismissed by political analysts and facing a crowded

          Republican primary field, Trump dominated media coverage and won the nomination. In            <h4 className="text-lg font-bold mt-4 mb-2">Judicial Appointments</h4>

          the general election, he faced Democratic nominee Hillary Clinton and won the            <p>

          Electoral College 304-227, though he lost the popular vote by nearly 3 million votes.              Trump appointed three Supreme Court justices—Neil Gorsuch (2017), Brett Kavanaugh

        </p>              (2018), and Amy Coney Barrett (2020)—creating a 6-3 conservative majority. He also

              appointed over 200 federal judges, reshaping the judiciary for decades.

        <h3 className="text-xl font-bold mt-6 mb-3">Major Policies and Actions</h3>            </p>

        

        <h4 className="text-lg font-bold mt-4 mb-2">Economic Policy</h4>            <h4 className="text-lg font-bold mt-4 mb-2">Foreign Policy</h4>

        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">            <ul className="list-disc pl-6 space-y-2 my-4">

          <li>              <li>Withdrew from Iran nuclear deal and Paris Climate Agreement</li>

            <strong>Tax Cuts and Jobs Act (2017):</strong> Major tax reform reducing              <li>Moved U.S. embassy in Israel to Jerusalem</li>

            corporate tax rate from 35% to 21%              <li>Held historic summit with North Korean leader Kim Jong Un</li>

          </li>              <li>Brokered Abraham Accords normalizing relations between Israel and Arab states</li>

          <li>            </ul>

            <strong>Deregulation:</strong> Rolled back numerous Obama-era regulations,

            particularly environmental and financial regulations            <h3 className="text-xl font-bold mt-6 mb-3">COVID-19 Pandemic</h3>

          </li>            <p>

          <li>              The final year of Trump's first term was dominated by the COVID-19 pandemic. His

            <strong>Trade Policy:</strong> Initiated trade war with China, renegotiated              administration's response was controversial, with critics arguing he downplayed the

            NAFTA into USMCA              virus's severity while supporters credited Operation Warp Speed for accelerating

          </li>              vaccine development.

        </ul>            </p>



        <h4 className="text-lg font-bold mt-4 mb-2">Immigration</h4>            <h3 className="text-xl font-bold mt-6 mb-3">Impeachments</h3>

        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">            <p>

          <li>              Trump became the third U.S. president to be impeached and the only president to be

            <strong>Border Wall:</strong> Constructed approximately 450 miles of border              impeached twice:

            barrier            </p>

          </li>

          <li>            <DataTable

            <strong>Travel Ban:</strong> Executive orders restricting travel from several              caption="Trump Impeachments"

            Muslim-majority countries              headers={["Date", "Charges", "House Vote", "Senate Outcome"]}

          </li>              rows={[

          <li>                [

            <strong>Family Separation Policy:</strong> Controversial "zero tolerance" policy                  "December 2019",

            at the border                  "Abuse of power, obstruction of Congress (Ukraine affair)",

          </li>                  "230-197, 229-198",

        </ul>                  "Acquitted",

                ],

        <h4 className="text-lg font-bold mt-4 mb-2">Judicial Appointments</h4>                [

        <p className="text-gray-700 mb-4">                  "January 2021",

          Trump appointed three Supreme Court justices—Neil Gorsuch (2017), Brett Kavanaugh                  "Incitement of insurrection (January 6 Capitol riot)",

          (2018), and Amy Coney Barrett (2020)—creating a 6-3 conservative majority. He also                  "232-197",

          appointed over 200 federal judges, reshaping the judiciary for decades.                  "Acquitted",

        </p>                ],

              ]}

        <h4 className="text-lg font-bold mt-4 mb-2">Foreign Policy</h4>            />

        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">

          <li>Withdrew from Iran nuclear deal and Paris Climate Agreement</li>            <h3 className="text-xl font-bold mt-6 mb-3">2020 Election and January 6</h3>

          <li>Moved U.S. embassy in Israel to Jerusalem</li>            <p>

          <li>Held historic summit with North Korean leader Kim Jong Un</li>              Trump lost the 2020 presidential election to Joe Biden by 306-232 in the Electoral

          <li>Brokered Abraham Accords normalizing relations between Israel and Arab states</li>              College and by over 7 million popular votes. He refused to concede, claiming without

        </ul>              evidence that the election was "stolen" through widespread fraud.

            </p>

        <h3 className="text-xl font-bold mt-6 mb-3">COVID-19 Pandemic</h3>

        <p className="text-gray-700 mb-4">            <p>

          The final year of Trump's first term was dominated by the COVID-19 pandemic. His              On January 6, 2021, a mob of Trump supporters stormed the U.S. Capitol as Congress

          administration's response was controversial, with critics arguing he downplayed the              was certifying Biden's victory. The riot resulted in five deaths and over 140 police

          virus's severity while supporters credited Operation Warp Speed for accelerating              officers injured. Trump was impeached for incitement of insurrection but acquitted by

          vaccine development.              the Senate.

        </p>            </p>

          </Section>

        <h3 className="text-xl font-bold mt-6 mb-3">Impeachments</h3>

        <p className="text-gray-700 mb-4">          <Section id="post-presidency" title="Post-Presidency Period (2021-2024)">

          Trump became the third U.S. president to be impeached and the only president to be            <h3 className="text-xl font-bold mt-6 mb-3">Mar-a-Lago and Continued Influence</h3>

          impeached twice:            <p>

        </p>              After leaving office, Trump relocated permanently to his Mar-a-Lago resort in Palm

              Beach, Florida. He remained the dominant figure in the Republican Party, endorsing

        <DataTable              candidates in the 2022 midterm elections with mixed results.

          headers={["Date", "Charges", "House Vote", "Senate Outcome"]}            </p>

          rows={[

            [            <h3 className="text-xl font-bold mt-6 mb-3">Truth Social</h3>

              "December 2019",            <p>

              "Abuse of power, obstruction of Congress (Ukraine affair)",              After being banned from major social media platforms following January 6, Trump

              "230-197, 229-198",              launched Truth Social in February 2022, a social media platform owned by Trump Media

              "Acquitted",              & Technology Group. The platform became his primary means of communicating with

            ],              supporters.

            [            </p>

              "January 2021",          </Section>

              "Incitement of insurrection (January 6 Capitol riot)",

              "232-197",          <Section id="legal-issues" title="Legal Challenges (2022-2024)">

              "Acquitted",            <p>

            ],              Trump faced unprecedented legal challenges between 2022 and 2024, including multiple

          ]}              criminal indictments:

        />            </p>



        <h3 className="text-xl font-bold mt-6 mb-3">2020 Election and January 6</h3>            <DataTable

        <p className="text-gray-700 mb-4">              caption="Major Legal Cases (2022-2024)"

          Trump lost the 2020 presidential election to Joe Biden by 306-232 in the Electoral              headers={["Case", "Jurisdiction", "Charges", "Status"]}

          College and by over 7 million popular votes. He refused to concede, claiming without              rows={[

          evidence that the election was "stolen" through widespread fraud.                [

        </p>                  "Classified Documents",

                  "Federal (Florida)",

        <p className="text-gray-700">                  "Willful retention of national defense information",

          On January 6, 2021, a mob of Trump supporters stormed the U.S. Capitol as Congress                  "Dismissed (2024)",

          was certifying Biden's victory. The riot resulted in five deaths and over 140 police                ],

          officers injured. Trump was impeached for incitement of insurrection but acquitted by                [

          the Senate.                  "January 6 / Election Interference",

        </p>                  "Federal (DC)",

      </Section>                  "Conspiracy to defraud the U.S., obstruction",

                  "Dismissed after 2024 victory",

      <Section id="post-presidency" title="Post-Presidency Period (2021-2024)">                ],

        <h3 className="text-xl font-bold mt-6 mb-3">Mar-a-Lago and Continued Influence</h3>                [

        <p className="text-gray-700 mb-4">                  "Georgia Election Case",

          After leaving office, Trump relocated permanently to his Mar-a-Lago resort in Palm                  "Fulton County, GA",

          Beach, Florida. He remained the dominant figure in the Republican Party, endorsing                  "RICO, election interference",

          candidates in the 2022 midterm elections with mixed results.                  "Ongoing (frozen)",

        </p>                ],

                [

        <h3 className="text-xl font-bold mt-6 mb-3">Truth Social</h3>                  "Hush Money Case",

        <p className="text-gray-700">                  "Manhattan, NY",

          After being banned from major social media platforms following January 6, Trump                  "Falsifying business records",

          launched Truth Social in February 2022, a social media platform owned by Trump Media                  "Convicted May 2024, sentencing postponed",

          & Technology Group. The platform became his primary means of communicating with                ],

          supporters.              ]}

        </p>            />

      </Section>

            <Notice type="warning" title="Historic Conviction">

      <Section id="legal-issues" title="Legal Challenges (2022-2024)">              <p>

        <p className="text-gray-700 mb-4">                In May 2024, Trump became the first former U.S. president to be convicted of a

          Trump faced unprecedented legal challenges between 2022 and 2024, including multiple                crime when a New York jury found him guilty on 34 counts of falsifying business

          criminal indictments:                records related to hush money payments. Sentencing was repeatedly postponed and

        </p>                ultimately shelved after his 2024 election victory.

              </p>

        <DataTable            </Notice>

          headers={["Case", "Jurisdiction", "Charges", "Status"]}          </Section>

          rows={[

            [          <Section id="2024-campaign" title="2024 Presidential Campaign">

              "Classified Documents",            <h3 className="text-xl font-bold mt-6 mb-3">Campaign Announcement and Primary</h3>

              "Federal (Florida)",            <p>

              "Willful retention of national defense information",              Trump announced his 2024 presidential campaign on November 15, 2022, making him the

              "Dismissed (2024)",              first candidate to declare. Despite facing multiple indictments and legal challenges

            ],              throughout 2023 and 2024, he dominated the Republican primary, easily securing the

            [              nomination.

              "January 6 / Election Interference",            </p>

              "Federal (DC)",

              "Conspiracy to defraud the U.S., obstruction",            <p>

              "Dismissed after 2024 victory",              His primary opponents included Florida Governor Ron DeSantis, former South Carolina

            ],              Governor Nikki Haley, entrepreneur Vivek Ramaswamy, and several others, but Trump's

            [              grip on the Republican base proved unshakeable.

              "Georgia Election Case",            </p>

              "Fulton County, GA",

              "RICO, election interference",            <h3 className="text-xl font-bold mt-6 mb-3">General Election Campaign</h3>

              "Ongoing (frozen)",            <p>

            ],              Trump's 2024 campaign focused on several key themes:

            [            </p>

              "Hush Money Case",            <ul className="list-disc pl-6 space-y-2 my-4">

              "Manhattan, NY",              <li>Promises of "retribution" against political opponents</li>

              "Falsifying business records",              <li>Mass deportation of undocumented immigrants</li>

              "Convicted May 2024, sentencing postponed",              <li>Criticism of Biden's handling of inflation and the border</li>

            ],              <li>Claims of election interference through his prosecutions</li>

          ]}              <li>Pledge to end the Russia-Ukraine war "within 24 hours"</li>

        />            </ul>



        <Notice type="warning">            <h3 className="text-xl font-bold mt-6 mb-3">Election Victory</h3>

          <p>            <p>

            <strong>Historic Conviction:</strong> In May 2024, Trump became the first former               On November 5, 2024, Trump defeated Democratic nominee Kamala Harris (who had

            U.S. president to be convicted of a crime when a New York jury found him guilty on               replaced Joe Biden after his withdrawal from the race in July 2024). Trump won both

            34 counts of falsifying business records related to hush money payments. Sentencing               the Electoral College and, for the first time in his three campaigns, the popular

            was repeatedly postponed and ultimately shelved after his 2024 election victory.              vote.

          </p>            </p>

        </Notice>

      </Section>            <DataTable

              caption="2024 Presidential Election Results"

      <Section id="2024-campaign" title="2024 Presidential Campaign">              headers={["Candidate", "Party", "Electoral Votes", "Popular Vote"]}

        <h3 className="text-xl font-bold mt-6 mb-3">Campaign Announcement and Primary</h3>              rows={[

        <p className="text-gray-700 mb-4">                ["Donald J. Trump", "Republican", "312", "77.8 million (51.2%)"],

          Trump announced his 2024 presidential campaign on November 15, 2022, making him the                ["Kamala Harris", "Democratic", "226", "74.1 million (48.8%)"],

          first candidate to declare. Despite facing multiple indictments and legal challenges              ]}

          throughout 2023 and 2024, he dominated the Republican primary, easily securing the            />

          nomination.          </Section>

        </p>

          <Section id="second-presidency" title="Second Presidency (2025-Present)">

        <p className="text-gray-700 mb-4">            <h3 className="text-xl font-bold mt-6 mb-3">Inauguration and Early Days</h3>

          His primary opponents included Florida Governor Ron DeSantis, former South Carolina            <p>

          Governor Nikki Haley, entrepreneur Vivek Ramaswamy, and several others, but Trump's              Trump was inaugurated as the 47th President of the United States on January 20,

          grip on the Republican base proved unshakeable.              2025. At 78 years old, he became the oldest person to assume the presidency,

        </p>              surpassing Joe Biden's record. His inauguration speech emphasized themes of national

              renewal and promised swift action on his campaign promises.

        <h3 className="text-xl font-bold mt-6 mb-3">General Election Campaign</h3>            </p>

        <p className="text-gray-700 mb-4">

          Trump's 2024 campaign focused on several key themes:            <h3 className="text-xl font-bold mt-6 mb-3">Cabinet and Administration</h3>

        </p>            <p>

        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">              Trump's second-term cabinet includes a mix of loyalists from his first term, MAGA

          <li>Promises of "retribution" against political opponents</li>              movement figures, and some establishment Republicans who pledged loyalty during the

          <li>Mass deportation of undocumented immigrants</li>              2024 campaign. The administration has signaled a more organized and aggressive

          <li>Criticism of Biden's handling of inflation and the border</li>              approach to implementing Trump's agenda compared to his first term.

          <li>Claims of election interference through his prosecutions</li>            </p>

          <li>Pledge to end the Russia-Ukraine war "within 24 hours"</li>

        </ul>            <h3 className="text-xl font-bold mt-6 mb-3">Early Policy Actions</h3>

            <p>

        <h3 className="text-xl font-bold mt-6 mb-3">Election Victory</h3>              <em>Note: Trump's second presidency is in its early days. Major policy

        <p className="text-gray-700 mb-4">              implementations and their outcomes are still developing.</em>

          On November 5, 2024, Trump defeated Democratic nominee Kamala Harris (who had            </p>

          replaced Joe Biden after his withdrawal from the race in July 2024). Trump won both

          the Electoral College and, for the first time in his three campaigns, the popular            <Notice type="info" title="Developing Story">

          vote.              <p>

        </p>                As Trump's second presidency is less than one week old, this section will be

                continually updated as policies are implemented and their impacts become clear.

        <DataTable              </p>

          headers={["Candidate", "Party", "Electoral Votes", "Popular Vote"]}            </Notice>

          rows={[          </Section>

            ["Donald J. Trump", "Republican", "312", "77.8 million (51.2%)"],

            ["Kamala Harris", "Democratic", "226", "74.1 million (48.8%)"],          <Section id="political-positions" title="Political Positions">

          ]}            <h3 className="text-xl font-bold mt-6 mb-3">Core Ideology</h3>

        />            <p>

      </Section>              Trump's political philosophy, often called "Trumpism," combines elements of populism,

              nationalism, and economic protectionism. Key tenets include:

      <Section id="second-presidency" title="Second Presidency (2025-Present)">            </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Inauguration and Early Days</h3>

        <p className="text-gray-700 mb-4">            <ul className="list-disc pl-6 space-y-2 my-4">

          Trump was inaugurated as the 47th President of the United States on January 20,              <li>

          2025. At 78 years old, he became the oldest person to assume the presidency,                <strong>America First:</strong> Prioritizing U.S. interests in trade, foreign

          surpassing Joe Biden's record. His inauguration speech emphasized themes of national                policy, and immigration

          renewal and promised swift action on his campaign promises.              </li>

        </p>              <li>

                <strong>Economic Nationalism:</strong> Opposition to free trade agreements,

        <h3 className="text-xl font-bold mt-6 mb-3">Cabinet and Administration</h3>                support for tariffs

        <p className="text-gray-700 mb-4">              </li>

          Trump's second-term cabinet includes a mix of loyalists from his first term, MAGA              <li>

          movement figures, and some establishment Republicans who pledged loyalty during the                <strong>Immigration Restrictionism:</strong> Strong border security, reduced legal

          2024 campaign. The administration has signaled a more organized and aggressive                immigration

          approach to implementing Trump's agenda compared to his first term.              </li>

        </p>              <li>

                <strong>Cultural Conservatism:</strong> Opposition to "political correctness" and

        <Notice type="info">                "woke" ideology

          <p>              </li>

            <strong>Developing Story:</strong> As Trump's second presidency is less than one               <li>

            week old, this section will be continually updated as policies are implemented and                 <strong>Skepticism of Institutions:</strong> Criticism of media, intelligence

            their impacts become clear.                agencies, and "deep state"

          </p>              </li>

        </Notice>            </ul>

      </Section>

            <h3 className="text-xl font-bold mt-6 mb-3">Economic Views</h3>

      <Section id="political-positions" title="Political Positions">            <p>

        <h3 className="text-xl font-bold mt-6 mb-3">Core Ideology</h3>              Trump advocates for lower taxes, reduced regulation, and protectionist trade

        <p className="text-gray-700 mb-4">              policies. He has criticized both traditional Republican free-trade orthodoxy and

          Trump's political philosophy, often called "Trumpism," combines elements of populism,              Democratic social spending programs.

          nationalism, and economic protectionism. Key tenets include:            </p>

        </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Foreign Policy</h3>

        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">            <p>

          <li>              Trump's foreign policy emphasizes American sovereignty, skepticism of international

            <strong>America First:</strong> Prioritizing U.S. interests in trade, foreign              institutions and alliances, and transactional bilateral relationships. He has been

            policy, and immigration              critical of NATO allies while expressing admiration for strongman leaders.

          </li>            </p>

          <li>          </Section>

            <strong>Economic Nationalism:</strong> Opposition to free trade agreements,

            support for tariffs          <Section id="controversies" title="Controversies">

          </li>            <p>

          <li>              Trump's career has been marked by numerous controversies spanning business, personal

            <strong>Immigration Restrictionism:</strong> Strong border security, reduced legal              conduct, and political actions:

            immigration            </p>

          </li>

          <li>            <h3 className="text-xl font-bold mt-6 mb-3">Business Controversies</h3>

            <strong>Cultural Conservatism:</strong> Opposition to "political correctness" and            <ul className="list-disc pl-6 space-y-2 my-4">

            "woke" ideology              <li>Trump University fraud allegations and settlements</li>

          </li>              <li>Multiple bankruptcy filings</li>

          <li>              <li>Allegations of discriminatory housing practices (1970s)</li>

            <strong>Skepticism of Institutions:</strong> Criticism of media, intelligence              <li>Conflicts of interest between presidency and business holdings</li>

            agencies, and "deep state"            </ul>

          </li>

        </ul>            <h3 className="text-xl font-bold mt-6 mb-3">Personal Controversies</h3>

            <ul className="list-disc pl-6 space-y-2 my-4">

        <h3 className="text-xl font-bold mt-6 mb-3">Economic Views</h3>              <li>Multiple allegations of sexual misconduct (all denied)</li>

        <p className="text-gray-700 mb-4">              <li>Access Hollywood tape (2016)</li>

          Trump advocates for lower taxes, reduced regulation, and protectionist trade              <li>Three marriages and multiple documented affairs</li>

          policies. He has criticized both traditional Republican free-trade orthodoxy and              <li>Civil fraud verdict in New York (2024)</li>

          Democratic social spending programs.            </ul>

        </p>

            <h3 className="text-xl font-bold mt-6 mb-3">Political Controversies</h3>

        <h3 className="text-xl font-bold mt-6 mb-3">Foreign Policy</h3>            <ul className="list-disc pl-6 space-y-2 my-4">

        <p className="text-gray-700">              <li>Birtherism campaign against Barack Obama</li>

          Trump's foreign policy emphasizes American sovereignty, skepticism of international              <li>Refusal to release tax returns</li>

          institutions and alliances, and transactional bilateral relationships. He has been              <li>Helsinki summit and relationship with Vladimir Putin</li>

          critical of NATO allies while expressing admiration for strongman leaders.              <li>Charlottesville "both sides" comments</li>

        </p>              <li>COVID-19 response and promotion of unproven treatments</li>

      </Section>              <li>2020 election denial and January 6 Capitol attack</li>

            </ul>

      <Section id="controversies" title="Controversies">          </Section>

        <p className="text-gray-700 mb-4">

          Trump's career has been marked by numerous controversies spanning business, personal          <Section id="cultural-impact" title="Cultural Impact and Legacy">

          conduct, and political actions:            <h3 className="text-xl font-bold mt-6 mb-3">Transformation of Republican Party</h3>

        </p>            <p>

              Trump fundamentally reshaped the Republican Party, moving it away from traditional

        <h3 className="text-xl font-bold mt-6 mb-3">Business Controversies</h3>              conservatism toward populist nationalism. The GOP became increasingly centered around

        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">              loyalty to Trump personally, with opponents labeled "RINOs" (Republicans In Name

          <li>Trump University fraud allegations and settlements</li>              Only).

          <li>Multiple bankruptcy filings</li>            </p>

          <li>Allegations of discriminatory housing practices (1970s)</li>

          <li>Conflicts of interest between presidency and business holdings</li>            <h3 className="text-xl font-bold mt-6 mb-3">Media and Communication</h3>

        </ul>            <p>

              Trump's use of Twitter (before his ban) and later Truth Social revolutionized

        <h3 className="text-xl font-bold mt-6 mb-3">Personal Controversies</h3>              political communication, allowing direct engagement with supporters while bypassing

        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">              traditional media. His attacks on media as "fake news" and "enemy of the people"

          <li>Multiple allegations of sexual misconduct (all denied)</li>              significantly eroded trust in journalism among his supporters.

          <li>Access Hollywood tape (2016)</li>            </p>

          <li>Three marriages and multiple documented affairs</li>

          <li>Civil fraud verdict in New York (2024)</li>            <h3 className="text-xl font-bold mt-6 mb-3">Polarization</h3>

        </ul>            <p>

              Political scientists note that American political polarization reached historic

        <h3 className="text-xl font-bold mt-6 mb-3">Political Controversies</h3>              levels during and after Trump's presidency. He remains one of the most divisive

        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">              figures in modern American politics, with strong support from roughly 40-45% of

          <li>Birtherism campaign against Barack Obama</li>              Americans and intense opposition from a similar proportion.

          <li>Refusal to release tax returns</li>            </p>

          <li>Helsinki summit and relationship with Vladimir Putin</li>

          <li>Charlottesville "both sides" comments</li>            <h3 className="text-xl font-bold mt-6 mb-3">MAGA Movement</h3>

          <li>COVID-19 response and promotion of unproven treatments</li>            <p>

          <li>2020 election denial and January 6 Capitol attack</li>              The "Make America Great Again" movement Trump created has outlasted his first

        </ul>              presidency and become a lasting force in American politics. MAGA-aligned candidates

      </Section>              have won numerous Republican primaries, and Trump's endorsement remains highly

              sought after.

      <Section id="cultural-impact" title="Cultural Impact and Legacy">            </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Transformation of Republican Party</h3>

        <p className="text-gray-700 mb-4">            <Quote

          Trump fundamentally reshaped the Republican Party, moving it away from traditional              text="Whether you love him or hate him, Donald Trump changed American politics forever. The Republican Party, the Democratic Party, the media, the way campaigns are run—nothing is the same as it was before 2016."

          conservatism toward populist nationalism. The GOP became increasingly centered around              attribution="Political Analyst Commentary, 2024"

          loyalty to Trump personally, with opponents labeled "RINOs" (Republicans In Name            />

          Only).          </Section>

        </p>

          <RelatedLinks

        <h3 className="text-xl font-bold mt-6 mb-3">Media and Communication</h3>            title="Related Topics"

        <p className="text-gray-700 mb-4">            links={[

          Trump's use of Twitter (before his ban) and later Truth Social revolutionized              { href: "/joe-biden", label: "Joe Biden" },

          political communication, allowing direct engagement with supporters while bypassing              { href: "/republican-party", label: "Republican Party" },

          traditional media. His attacks on media as "fake news" and "enemy of the people"              { href: "/maga-movement", label: "MAGA Movement" },

          significantly eroded trust in journalism among his supporters.              { href: "/2024-presidential-election", label: "2024 Presidential Election" },

        </p>              { href: "/january-6-capitol-attack", label: "January 6 Capitol Attack" },

            ]}

        <h3 className="text-xl font-bold mt-6 mb-3">Polarization</h3>          />

        <p className="text-gray-700 mb-4">

          Political scientists note that American political polarization reached historic          <ExternalLinks

          levels during and after Trump's presidency. He remains one of the most divisive            title="Official Links"

          figures in modern American politics, with strong support from roughly 40-45% of            links={[

          Americans and intense opposition from a similar proportion.              { href: "https://www.whitehouse.gov", label: "White House Official Website" },

        </p>              { href: "https://truthsocial.com/@realDonaldTrump", label: "Trump on Truth Social" },

              {

        <h3 className="text-xl font-bold mt-6 mb-3">MAGA Movement</h3>                href: "https://www.donaldjtrump.com",

        <p className="text-gray-700 mb-4">                label: "Official Campaign Website",

          The "Make America Great Again" movement Trump created has outlasted his first              },

          presidency and become a lasting force in American politics. MAGA-aligned candidates            ]}

          have won numerous Republican primaries, and Trump's endorsement remains highly          />

          sought after.

        </p>          <References

            references={[

        <Quote source="Political Analyst Commentary, 2024">              {

          Whether you love him or hate him, Donald Trump changed American politics forever.                 id: 1,

          The Republican Party, the Democratic Party, the media, the way campaigns are run—nothing                 text: "Kranish, Michael; Fisher, Marc. 'Trump Revealed: The Definitive Biography of the 45th President.' Simon & Schuster, 2017.",

          is the same as it was before 2016.              },

        </Quote>              {

      </Section>                id: 2,

                text: "Wolff, Michael. 'Fire and Fury: Inside the Trump White House.' Henry Holt and Company, 2018.",

      <ExternalLinks              },

        links={[              {

          { href: "https://www.whitehouse.gov", label: "White House Official Website" },                id: 3,

          { href: "https://truthsocial.com/@realDonaldTrump", label: "Trump on Truth Social" },                text: "Woodward, Bob. 'Fear: Trump in the White House.' Simon & Schuster, 2018.",

          { href: "https://www.donaldjtrump.com", label: "Official Campaign Website" },              },

        ]}              {

      />                id: 4,

    </ArticlePage>                text: "Presidential Records and Public Documents. National Archives and Records Administration.",

  );              },

}              {

                id: 5,
                text: "Election Results and Voting Data. Federal Election Commission, 2016-2024.",
              },
            ]}
          />
        </div>

        <aside>
          <InfoBox
            title="Donald J. Trump"
            image={{
              src: "/images/trump-official.jpg",
              alt: "President Donald Trump",
              caption: "Official presidential portrait",
            }}
            items={[
              { label: "Born", value: "June 14, 1946 (age 79)\nQueens, New York City" },
              { label: "Political Party", value: "Republican (1987–1999, 2009–2011, 2012–present)\nReform (1999–2001)\nDemocratic (2001–2009)\nIndependent (2011–2012)" },
              { label: "Spouse(s)", value: "Ivana Zelníčková (m. 1977; div. 1990)\nMarla Maples (m. 1993; div. 1999)\nMelania Knauss (m. 2005)" },
              { label: "Children", value: "Donald Jr., Ivanka, Eric,\nTiffany, Barron" },
              { label: "Education", value: "University of Pennsylvania (BS Economics)" },
              { label: "Occupation", value: "Politician, Businessman,\nTelevision Personality" },
              {
                label: "Presidency",
                value: "45th President: 2017-2021\n47th President: 2025-present",
              },
              { label: "Vice President(s)", value: "Mike Pence (2017-2021)\nJ.D. Vance (2025-present)" },
              { label: "Net Worth", value: "Est. $2.6 billion (2024)" },
            ]}
          />
        </aside>
      </div>
    </ArticlePage>
  );
}
