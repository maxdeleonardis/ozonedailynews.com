import type { Metadata } from "next";
import { generateArticleMetadata } from "@/lib/seo-utils";
import {
  ArticlePage,
  Section,
  Notice,
  ExternalLinks,
} from "@/components/ArticlePage";

export const metadata: Metadata = generateArticleMetadata({
  title: "Does DoorDash Accept SNAP EBT? Complete Guide 2026 + Revenue Impact Analysis",
  description: "UPDATED JAN 2026: Yes, DoorDash accepts SNAP EBT in select states. Comprehensive guide on using food stamps for delivery, eligible items, state availability, and how SNAP benefits impact DoorDash's $9B+ annual revenue.",
  keywords: [
    "DoorDash SNAP",
    "DoorDash EBT",
    "DoorDash food stamps",
    "SNAP EBT delivery",
    "food delivery SNAP benefits",
    "DoorDash accepts EBT",
    "SNAP eligible items DoorDash",
    "DoorDash SNAP states",
    "EBT card delivery",
    "food stamps delivery apps",
    "DoorDash revenue SNAP",
    "Big Soda SNAP",
  ],
  canonicalUrl: "https://www.objectwire.org/does-doordash-take-snap",
  publishedTime: "2025-10-28T00:00:00Z",
  modifiedTime: "2026-01-24T00:00:00Z",
  authors: ["ObjectWire Policy & Business Desk"],
  category: "Business Analysis",
  tags: ["DoorDash", "SNAP", "EBT", "Food Delivery", "Government Benefits", "Food Policy"],
});

export default function DoorDashSnapPage() {
  const infoBox = {
    title: "Quick Facts",
    items: [
      { label: "SNAP Accepted?", value: "Yes, in select states" },
      { label: "Program Start", value: "Pilot launched 2022" },
      { label: "Eligible Items", value: "Groceries only (not prepared meals)" },
      { label: "Delivery Fee", value: "Must be paid separately (not SNAP-eligible)" },
      { label: "States Available", value: "Expanding (check DoorDash app)" },
      { label: "DoorDash Revenue", value: "$9.3B (2025)" },
      { label: "SNAP Program Size", value: "$100B+ annually" },
    ],
  };

  const tableOfContents = [
    { id: "overview", label: "Overview" },
    { id: "how-it-works", label: "How SNAP on DoorDash Works" },
    { id: "eligible-items", label: "What You Can Buy" },
    { id: "states", label: "State Availability" },
    { id: "revenue-impact", label: "Revenue Impact on DoorDash" },
    { id: "big-soda", label: "SNAP and Big Soda Connection" },
    { id: "policy-debate", label: "Policy Debate & Criticism" },
    { id: "alternatives", label: "Alternative Delivery Options" },
    { id: "future", label: "Future of SNAP Delivery" },
  ];

  const relatedLinks = [
    { href: "/news", label: "Food Policy News" },
    { href: "/health", label: "Nutrition & Health" },
    { href: "/case", label: "Business Case Studies" },
  ];

  return (
    <ArticlePage
      title="Does DoorDash Accept SNAP EBT?"
      subtitle="Complete guide to using food stamps for delivery, plus revenue analysis of SNAP's impact on DoorDash and Big Soda"
      category="Business Analysis"
      infoBox={infoBox}
      tableOfContents={tableOfContents}
      relatedLinks={relatedLinks}
      lastUpdated="January 24, 2026"
    >
      <div className="bg-green-50 border-l-4 border-green-600 p-6 mb-8">
        <p className="text-sm font-bold text-green-900 mb-2">
          ✅ JANUARY 2026 UPDATE
        </p>
        <p className="text-sm text-gray-800">
          DoorDash continues to expand SNAP EBT acceptance nationwide following successful pilot programs. 
          As of January 2026, the service is available in most major metro areas, with DoorDash partnering 
          with additional grocery retailers. However, prepared restaurant meals remain ineligible except in 
          states with Restaurant Meals Programs (RMP). New USDA reporting shows SNAP benefits generated 
          billions in revenue for food delivery platforms and beverage companies in 2025.
        </p>
      </div>

      <Section id="overview" title="Overview">
        <p>
          <strong>Yes, DoorDash does accept SNAP EBT</strong> (Supplemental Nutrition Assistance Program Electronic 
          Benefits Transfer), but with significant limitations. The food delivery giant began accepting SNAP payments 
          in 2022 through a pilot program and has since expanded to multiple states, allowing low-income Americans 
          to use their food stamp benefits for grocery delivery.
        </p>

        <p>
          However, there are critical restrictions: SNAP benefits can <strong>only</strong> be used for eligible 
          grocery items, not prepared restaurant meals (except in specific states with Restaurant Meals Programs). 
          Additionally, delivery fees, tips, and service charges cannot be paid with SNAP—these must be covered 
          by another payment method.
        </p>

        <Notice type="info">
          <p className="font-bold mb-2">Key Points</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>DoorDash accepts SNAP EBT for grocery delivery in expanding states</li>
            <li>Only SNAP-eligible food items can be purchased (no hot meals, alcohol, tobacco)</li>
            <li>Delivery fees and tips must be paid with non-SNAP payment method</li>
            <li>Not all stores on DoorDash accept EBT—check individual retailer participation</li>
            <li>SNAP revenue represents significant income for delivery platforms and food manufacturers</li>
          </ul>
        </Notice>

        <p>
          According to <a href="https://www.usda.gov/media/press-releases/2023/04/26/usda-announces-expansion-online-snap" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USDA data</a>, 
          over 42 million Americans received SNAP benefits in 2025, with the program distributing approximately 
          $100 billion annually. The expansion of SNAP to delivery platforms like DoorDash has created substantial 
          new revenue streams for both the gig economy companies and food/beverage manufacturers.
        </p>
      </Section>

      <Section id="how-it-works" title="How SNAP on DoorDash Works">
        <h3 className="text-xl font-bold mt-6 mb-3">Step-by-Step Process</h3>
        
        <ol className="list-decimal pl-6 space-y-3 my-4">
          <li>
            <strong>Download the DoorDash app</strong> and create an account (or use existing account)
          </li>
          <li>
            <strong>Add your EBT card</strong> in the payment methods section:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Go to Account → Payment Methods</li>
              <li>Select "Add EBT Card"</li>
              <li>Enter your 16-digit EBT card number and PIN</li>
            </ul>
          </li>
          <li>
            <strong>Find participating stores</strong> that accept SNAP EBT (look for "SNAP EBT" badge on store listings)
          </li>
          <li>
            <strong>Shop for SNAP-eligible items</strong> (groceries, not prepared meals)
          </li>
          <li>
            <strong>At checkout:</strong>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Your SNAP EBT card will cover eligible food items</li>
              <li>You must provide a separate payment method (credit/debit card) for delivery fees, tips, and non-eligible items</li>
            </ul>
          </li>
        </ol>

        <Notice type="warning">
          <p className="font-bold mb-2">Important Limitation</p>
          <p>
            Your EBT card will <strong>NOT</strong> cover delivery fees, service fees, tips, or taxes on non-food items. 
            You must have another payment method on file to complete the order. This is a federal SNAP program requirement, 
            not a DoorDash policy.
          </p>
        </Notice>

        <h3 className="text-xl font-bold mt-6 mb-3">Participating Retailers</h3>
        <p>
          Not all stores on DoorDash accept SNAP EBT. Participating retailers typically include:
        </p>

        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Grocery Chains:</strong> Albertsons, Safeway, Vons, Pavilions, Randalls, Tom Thumb</li>
          <li><strong>Convenience Stores:</strong> Select 7-Eleven, Circle K locations</li>
          <li><strong>Specialty Grocers:</strong> Some health food stores and ethnic markets</li>
          <li><strong>Regional Chains:</strong> Varies by state and market</li>
        </ul>

        <p>
          Check the DoorDash app for the "SNAP EBT" badge on store listings to confirm acceptance before ordering.
        </p>
      </Section>

      <Section id="eligible-items" title="What You Can Buy with SNAP on DoorDash">
        <h3 className="text-xl font-bold mt-6 mb-3">SNAP-Eligible Items</h3>
        <p>
          According to <a href="https://www.fns.usda.gov/snap/eligible-food-items" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USDA guidelines</a>, 
          you can purchase:
        </p>

        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Fruits and vegetables</strong> (fresh, frozen, canned)</li>
          <li><strong>Meat, poultry, and fish</strong></li>
          <li><strong>Dairy products</strong> (milk, cheese, yogurt)</li>
          <li><strong>Bread and cereals</strong></li>
          <li><strong>Snack foods and non-alcoholic beverages</strong> (including soda—see Big Soda section below)</li>
          <li><strong>Seeds and plants</strong> that produce food for household consumption</li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-3">NOT SNAP-Eligible</h3>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>❌ <strong>Hot prepared foods</strong> (rotisserie chicken, deli hot sandwiches)</li>
          <li>❌ <strong>Restaurant meals</strong> (except in RMP states—see below)</li>
          <li>❌ <strong>Alcohol and tobacco products</strong></li>
          <li>❌ <strong>Vitamins and supplements</strong></li>
          <li>❌ <strong>Pet food</strong></li>
          <li>❌ <strong>Cleaning supplies and household items</strong></li>
          <li>❌ <strong>Personal care items</strong> (soap, shampoo, toothpaste)</li>
          <li>❌ <strong>Delivery fees, tips, and service charges</strong></li>
        </ul>

        <Notice type="info">
          <p className="font-bold mb-2">Restaurant Meals Program (RMP)</p>
          <p>
            In select states (California, Arizona, Rhode Island, Illinois, Maryland, Michigan, Virginia), elderly, 
            disabled, or homeless SNAP recipients may be eligible to purchase prepared restaurant meals through the 
            Restaurant Meals Program. Check with your state's SNAP office for eligibility. As of January 2026, 
            DoorDash supports RMP in limited markets.
          </p>
        </Notice>
      </Section>

      <Section id="states" title="State Availability">
        <p>
          DoorDash's SNAP EBT acceptance is not nationwide. The service availability depends on:
        </p>

        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>State participation in USDA's online SNAP purchasing pilot program</li>
          <li>Individual retailer authorization to accept EBT online</li>
          <li>DoorDash's partnership agreements with local stores</li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-3">States with SNAP EBT on DoorDash (2026)</h3>
        <p>
          According to the <a href="https://www.fns.usda.gov/snap/online-purchasing-pilot" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USDA's Online Purchasing Pilot</a>, 
          SNAP EBT is available through DoorDash in most states, with major metro areas prioritized. Confirmed states include:
        </p>

        <div className="bg-gray-50 p-6 rounded-lg my-4">
          <p className="text-sm text-gray-600 mb-3">
            <strong>Full or Partial Coverage (as of January 2026):</strong>
          </p>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
            <li>✅ California</li>
            <li>✅ New York</li>
            <li>✅ Florida</li>
            <li>✅ Texas</li>
            <li>✅ Pennsylvania</li>
            <li>✅ Illinois</li>
            <li>✅ Ohio</li>
            <li>✅ Georgia</li>
            <li>✅ North Carolina</li>
            <li>✅ Michigan</li>
            <li>✅ New Jersey</li>
            <li>✅ Virginia</li>
            <li>✅ Washington</li>
            <li>✅ Arizona</li>
            <li>✅ Massachusetts</li>
            <li>✅ And expanding...</li>
          </ul>
        </div>

        <p>
          <strong>To check availability in your area:</strong> Open the DoorDash app, search for "grocery," and look 
          for stores displaying the "SNAP EBT" badge. If no stores appear, the service may not be available in your 
          location yet.
        </p>
      </Section>

      <Section id="revenue-impact" title="Revenue Impact on DoorDash">
        <p>
          DoorDash's acceptance of SNAP EBT has created a significant new revenue channel. While DoorDash doesn't 
          publicly break down SNAP-specific revenue, financial analysts estimate the impact:
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Financial Analysis</h3>
        <div className="bg-blue-50 p-6 rounded-lg my-4">
          <p className="font-bold text-lg mb-3">DoorDash Revenue Estimates (2025)</p>
          <ul className="space-y-2">
            <li>📊 <strong>Total Revenue:</strong> $9.3 billion (2025)</li>
            <li>📦 <strong>Grocery Delivery:</strong> ~$800M-$1.2B (est. 10-15% of revenue)</li>
            <li>💳 <strong>SNAP-Enabled Orders:</strong> Estimated $200M-$400M (conservative)</li>
            <li>💰 <strong>Commission Rate:</strong> 15-25% from retailers on SNAP purchases</li>
          </ul>
        </div>

        <p>
          However, DoorDash only profits from the <strong>commission on SNAP-eligible items</strong>. Since delivery 
          fees must be paid separately, DoorDash's revenue model depends on:
        </p>

        <ul className="list-disc pl-6 space-y-2 my-4">
          <li><strong>Retail commissions:</strong> 15-30% of SNAP purchase value from partner stores</li>
          <li><strong>Non-SNAP ancillary revenue:</strong> Delivery fees, service fees, DashPass subscriptions</li>
          <li><strong>Order volume:</strong> Increased frequency from SNAP users accessing delivery</li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-3">Why SNAP Matters to DoorDash</h3>
        <p>
          SNAP acceptance provides strategic advantages:
        </p>

        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>
            <strong>Market Expansion:</strong> 42+ million SNAP recipients represent untapped customer base
          </li>
          <li>
            <strong>Competitive Moat:</strong> SNAP requires USDA authorization—complex regulatory barrier to entry
          </li>
          <li>
            <strong>Recurring Revenue:</strong> SNAP benefits refill monthly, creating predictable order patterns
          </li>
          <li>
            <strong>Positive PR:</strong> Positions DoorDash as addressing "food deserts" and access issues
          </li>
        </ul>

        <Notice type="warning">
          <p className="font-bold mb-2">Potential Revenue Loss Risk</p>
          <p>
            DoorDash faces policy risk if SNAP benefits are restricted or delivery eligibility changes. Congressional 
            proposals to limit SNAP purchases (particularly sugary beverages—see below) or exclude delivery services 
            could eliminate hundreds of millions in annual revenue. See our <a href="/news" className="text-blue-600 hover:underline">food policy coverage</a> for updates.
          </p>
        </Notice>
      </Section>

      <Section id="big-soda" title="SNAP and Big Soda: The Billion-Dollar Connection">
        <p>
          One of the most controversial aspects of SNAP is its allowance for <strong>sugary beverages</strong>. 
          According to <a href="https://www.nytimes.com/2017/01/13/well/eat/food-stamp-snap-soda.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">reporting by The New York Times</a> and 
          studies by the <a href="https://www.cbpp.org/research/food-assistance/snap-is-effective-and-efficient" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Center on Budget and Policy Priorities</a>, 
          SNAP recipients spend billions annually on soft drinks and sugary beverages.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">The Numbers</h3>
        <div className="bg-red-50 p-6 rounded-lg my-4">
          <p className="font-bold text-lg mb-3">💰 SNAP Spending on Sugary Drinks</p>
          <ul className="space-y-2">
            <li>📈 <strong>Total SNAP Benefits (2025):</strong> ~$100 billion</li>
            <li>🥤 <strong>Spent on Beverages:</strong> Estimated $4-$6 billion (4-6%)</li>
            <li>🍬 <strong>Sugary Drinks/Soda:</strong> $2-$3 billion annually (conservative estimate)</li>
            <li>🏢 <strong>Major Beneficiaries:</strong> Coca-Cola, PepsiCo, Dr Pepper Snapple Group</li>
          </ul>
        </div>

        <p>
          This means <strong>taxpayer-funded SNAP benefits generate billions in revenue for beverage giants</strong> 
          like Coca-Cola and PepsiCo—companies often criticized for contributing to obesity and diabetes epidemics.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">The Public Health Debate</h3>
        <p>
          Health advocates argue SNAP should exclude sugary drinks to combat obesity:
        </p>

        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>
            <strong>Obesity Rates:</strong> SNAP recipients have higher obesity rates than non-recipients (35.5% vs 28.7%)
          </li>
          <li>
            <strong>Children's Health:</strong> Studies show SNAP children consume more sugary drinks than non-SNAP peers
          </li>
          <li>
            <strong>Healthcare Costs:</strong> Obesity-related conditions cost taxpayers billions in Medicaid spending
          </li>
        </ul>

        <p>
          However, beverage industry lobbying groups and some anti-poverty advocates oppose restrictions, arguing:
        </p>

        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Restricting purchases stigmatizes low-income Americans</li>
          <li>Enforcement would be complex and costly</li>
          <li>Personal choice should be respected regardless of income</li>
          <li>Other foods (candy, chips) would remain eligible while singling out drinks</li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-3">Political Resistance</h3>
        <p>
          Multiple states have requested USDA waivers to ban soda from SNAP purchases, but all have been denied. 
          The beverage industry's lobbying power—spending $40+ million annually on federal lobbying—has successfully 
          blocked legislative efforts to restrict SNAP soda purchases for over a decade.
        </p>

        <Notice type="info">
          <p className="font-bold mb-2">DoorDash's Stake in the Debate</p>
          <p>
            If SNAP were to exclude sugary beverages, DoorDash and other delivery platforms would lose significant 
            revenue. Beverage purchases comprise an estimated 15-20% of grocery orders—a substantial portion of 
            SNAP-funded delivery transactions. This aligns DoorDash's financial interests with Big Soda's lobbying 
            efforts to maintain SNAP eligibility for all food items.
          </p>
        </Notice>
      </Section>

      <Section id="policy-debate" title="Policy Debate & Criticism">
        <h3 className="text-xl font-bold mt-6 mb-3">Arguments FOR SNAP Delivery</h3>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>
            <strong>Food Access:</strong> Helps elderly, disabled, and rural SNAP recipients who can't easily travel to stores
          </li>
          <li>
            <strong>Food Deserts:</strong> Delivery can bring groceries to areas lacking supermarkets
          </li>
          <li>
            <strong>COVID Lessons:</strong> Pandemic showed importance of contactless food access
          </li>
          <li>
            <strong>Convenience Equity:</strong> Why should low-income families be excluded from delivery convenience available to others?
          </li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-3">Arguments AGAINST SNAP Delivery</h3>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>
            <strong>Taxpayer-Funded Fees:</strong> Critics argue SNAP shouldn't subsidize delivery companies' profits
          </li>
          <li>
            <strong>Price Markups:</strong> DoorDash often charges higher prices than in-store, reducing SNAP purchasing power
          </li>
          <li>
            <strong>Dependency Creation:</strong> May encourage reliance on expensive delivery vs. shopping in person
          </li>
          <li>
            <strong>Corporate Welfare:</strong> Expands profits for gig economy companies at taxpayer expense
          </li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-3">Congressional Proposals</h3>
        <p>
          Various legislation has been proposed:
        </p>

        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>
            <strong>SNAP Reform Bills:</strong> Some lawmakers propose excluding online delivery entirely
          </li>
          <li>
            <strong>Soda Tax Bills:</strong> Would ban SNAP purchase of sugary beverages (repeatedly failed)
          </li>
          <li>
            <strong>Delivery Fee Caps:</strong> Proposals to limit fees charged on SNAP orders (not yet passed)
          </li>
        </ul>

        <p>
          As of January 2026, no major restrictions have been enacted, but policy debates continue in Congress.
        </p>
      </Section>

      <Section id="alternatives" title="Alternative Delivery Options with SNAP">
        <p>
          DoorDash isn't the only delivery platform accepting SNAP EBT:
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">Other SNAP-Accepting Delivery Services</h3>
        <ul className="list-disc pl-6 space-y-3 my-4">
          <li>
            <strong><a href="https://www.instacart.com/help/section/360007797952" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Instacart</a>:</strong> 
            Accepts SNAP EBT in most states, partners with more retailers than DoorDash
          </li>
          <li>
            <strong><a href="https://www.amazon.com/snap-ebt/b?ie=UTF8&node=19097398011" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Amazon Fresh</a>:</strong> 
            Accepts SNAP EBT for Amazon Fresh and Whole Foods delivery (requires Prime membership for free delivery, but EBT users get 50% off Prime)
          </li>
          <li>
            <strong><a href="https://www.walmart.com/help/article/walmart-snap-ebt-online/d4b0c7451eaf4e5b8d0c84e059e27c01" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Walmart+</a>:</strong> 
            Accepts SNAP EBT for grocery delivery and pickup
          </li>
          <li>
            <strong>Uber Eats:</strong> Limited SNAP acceptance for participating grocery stores
          </li>
          <li>
            <strong>Shipt:</strong> Target-owned service accepting SNAP in select markets
          </li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-3">Direct Retailer Delivery</h3>
        <p>
          Many grocery chains offer their own delivery services that accept SNAP EBT, often with lower fees than third-party platforms:
        </p>

        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Kroger (and subsidiaries: Ralph's, Fred Meyer, etc.)</li>
          <li>Safeway/Albertsons</li>
          <li>Aldi (via Instacart)</li>
          <li>Target (Shipt)</li>
          <li>Publix (Instacart)</li>
        </ul>
      </Section>

      <Section id="future" title="Future of SNAP Delivery">
        <p>
          The intersection of SNAP benefits and food delivery is evolving rapidly:
        </p>

        <h3 className="text-xl font-bold mt-6 mb-3">2026 Trends & Predictions</h3>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>
            <strong>Nationwide Expansion:</strong> USDA likely to approve SNAP EBT online purchasing in all 50 states by end of 2026
          </li>
          <li>
            <strong>Restaurant Meals Program Growth:</strong> More states may adopt RMP, allowing DoorDash restaurant delivery with SNAP
          </li>
          <li>
            <strong>Increased Competition:</strong> More delivery platforms will add SNAP as table stakes feature
          </li>
          <li>
            <strong>Policy Battles:</strong> Continued debate over sugary drink restrictions and delivery fee regulation
          </li>
          <li>
            <strong>Technology Integration:</strong> Improved EBT card readers and instant benefit verification
          </li>
        </ul>

        <h3 className="text-xl font-bold mt-6 mb-3">Risks & Challenges</h3>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>
            <strong>Legislative Changes:</strong> Congressional Republicans have proposed SNAP cuts that could reduce benefits or eligibility
          </li>
          <li>
            <strong>Fraud Concerns:</strong> Online SNAP purchasing increases potential for benefit trafficking and fraud
          </li>
          <li>
            <strong>Public Opinion:</strong> Negative perception of "welfare recipients using DoorDash" could drive policy restrictions
          </li>
          <li>
            <strong>Economic Recession:</strong> Rising SNAP enrollment during economic downturns strains program funding
          </li>
        </ul>

        <Notice type="info">
          <p className="font-bold mb-2">Bottom Line for DoorDash</p>
          <p>
            SNAP represents a strategic growth opportunity for DoorDash, but one fraught with political and regulatory risk. 
            The company's financial interest in maintaining and expanding SNAP eligibility—including for controversial items 
            like sugary beverages—aligns it with Big Soda's lobbying agenda. Future policy changes could significantly 
            impact DoorDash's revenue, making SNAP policy a key factor in the company's long-term growth prospects.
          </p>
        </Notice>
      </Section>

      <div className="bg-gray-50 border-l-4 border-gray-600 p-6 my-8">
        <p className="text-sm font-semibold text-gray-900 mb-2">
          📖 SOURCES & FURTHER READING
        </p>
        <p className="text-sm text-gray-700 mb-3">
          This analysis draws from USDA program data, DoorDash investor relations, academic research on SNAP purchasing 
          patterns, and investigative reporting on the food policy-corporate revenue connection. For ongoing coverage 
          of food policy and business impact, see our <a href="/news" className="text-blue-600 hover:underline font-semibold">News</a> and{" "}
          <a href="/health" className="text-blue-600 hover:underline font-semibold">Health Policy</a> sections.
        </p>
      </div>

      <ExternalLinks
        links={[
          { href: "https://www.fns.usda.gov/snap/online-purchasing-pilot", label: "USDA SNAP Online Purchasing Pilot" },
          { href: "https://www.fns.usda.gov/snap/eligible-food-items", label: "USDA SNAP Eligible Food Items" },
          { href: "https://help.doordash.com/consumers/s/article/SNAP-EBT-on-DoorDash", label: "DoorDash SNAP EBT Help Center" },
          { href: "https://www.cbpp.org/research/food-assistance/snap-is-effective-and-efficient", label: "Center on Budget and Policy Priorities - SNAP Report" },
          { href: "https://www.nytimes.com/2017/01/13/well/eat/food-stamp-snap-soda.html", label: "NY Times: SNAP and Soda" },
        ]}
      />
    </ArticlePage>
  );
}

