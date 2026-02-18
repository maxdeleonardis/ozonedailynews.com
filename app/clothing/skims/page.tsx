import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'SKIMS - Shapewear, Loungewear & Underwear Brand | OBJECTWIRE',
  description: 'Comprehensive history of SKIMS, the revolutionary shapewear and loungewear company founded by Kim Kardashian and Jens Grede. From controversial launch to billion-dollar valuation.',
  keywords: 'SKIMS, Kim Kardashian, Jens Grede, shapewear, loungewear, underwear, fashion brand, body inclusivity',
  openGraph: {
    title: 'SKIMS - The Complete Company History',
    description: 'From Kimono controversy to billion-dollar brand. The story of SKIMS shapewear revolution.',
    type: 'article',
    publishedTime: '2026-02-09T10:00:00Z',
    authors: ['OBJECTWIRE Fashion Desk'],
  },
};

export default function SkimsPage() {
  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb items={[
          { name: 'Home', item: '/' },
          { name: 'Clothing', item: '/clothing' },
          { name: 'SKIMS', item: '/clothing/skims' },
        ]} />

        <header className="mb-8 pb-6 border-b-2 border-gray-900">
          <h1 className="text-5xl font-bold mb-4">SKIMS</h1>
          <p className="text-xl text-gray-600 italic">
            American shapewear and clothing brand
          </p>
        </header>

        {/* Infobox */}
        <aside className="float-right ml-6 mb-6 w-80 bg-gray-50 border border-gray-300 p-4">
          <div className="text-center mb-4">
            <div className="bg-gray-200 h-48 flex items-center justify-center text-gray-500 mb-2">
              SKIMS Logo
            </div>
          </div>
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b">
                <td className="font-semibold py-2">Type</td>
                <td className="py-2">Private</td>
              </tr>
              <tr className="border-b">
                <td className="font-semibold py-2">Industry</td>
                <td className="py-2">Fashion, Apparel</td>
              </tr>
              <tr className="border-b">
                <td className="font-semibold py-2">Founded</td>
                <td className="py-2">September 2019</td>
              </tr>
              <tr className="border-b">
                <td className="font-semibold py-2">Founders</td>
                <td className="py-2">
                  <Link href="/clothing/skims/creative-director" className="text-blue-600 hover:underline">
                    Kim Kardashian
                  </Link>
                  <br />
                  <Link href="/clothing/skims/ceo" className="text-blue-600 hover:underline">
                    Jens Grede
                  </Link>
                </td>
              </tr>
              <tr className="border-b">
                <td className="font-semibold py-2">Headquarters</td>
                <td className="py-2">Los Angeles, California, U.S.</td>
              </tr>
              <tr className="border-b">
                <td className="font-semibold py-2">Key people</td>
                <td className="py-2">
                  Kim Kardashian (Creative Director)<br />
                  Jens Grede (CEO)
                </td>
              </tr>
              <tr className="border-b">
                <td className="font-semibold py-2">Products</td>
                <td className="py-2">Shapewear, loungewear, underwear, swimwear</td>
              </tr>
              <tr className="border-b">
                <td className="font-semibold py-2">Valuation</td>
                <td className="py-2">$4 billion (2023)</td>
              </tr>
              <tr>
                <td className="font-semibold py-2">Website</td>
                <td className="py-2">
                  <a href="https://skims.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    skims.com
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </aside>

        <div className="prose max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            <strong>SKIMS</strong> is an American shapewear and clothing brand co-founded by entrepreneur and media personality 
            <Link href="/clothing/skims/creative-director" className="text-blue-600 hover:underline"> Kim Kardashian</Link> and 
            businessman <Link href="/clothing/skims/ceo" className="text-blue-600 hover:underline">Jens Grede</Link> in 2019. 
            The company offers a range of body-inclusive products including shapewear, loungewear, underwear, and swimwear in a 
            variety of skin tones. As of 2023, SKIMS is valued at approximately $4 billion, making it one of the most successful 
            direct-to-consumer fashion brands of the 2020s.
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-4 border-b pb-2">History</h2>

          <h3 className="text-2xl font-semibold mt-6 mb-3">Foundation and Name Controversy (2019)</h3>
          <p className="mb-4">
            Kim Kardashian announced the launch of her shapewear line in June 2019 under the name "Kimono Intimates." The name 
            immediately sparked widespread criticism and accusations of cultural appropriation, as kimono is a traditional Japanese 
            garment with significant cultural meaning. Critics argued that trademarking the name for commercial shapewear products 
            was disrespectful to Japanese culture.
          </p>
          <p className="mb-4">
            Following backlash from the public and Japanese officials, including Kyoto's mayor, Kardashian announced she would 
            rename the brand. On August 26, 2019, she revealed the new name: SKIMS, a play on "skim" (as in skimming the body) 
            and her initials. The brand officially launched in September 2019.
          </p>

          <h3 className="text-2xl font-semibold mt-6 mb-3">Early Success (2019-2020)</h3>
          <p className="mb-4">
            SKIMS launched with a collection of nine shades of shapewear, emphasizing inclusivity and body positivity. The initial 
            launch sold out within minutes, generating $2 million in revenue. The brand's focus on diverse sizing (XXS to 5XL) and 
            inclusive shade ranges resonated with consumers who felt underserved by traditional shapewear brands.
          </p>
          <p className="mb-4">
            In April 2020, during the COVID-19 pandemic, SKIMS pivoted to produce loungewear and sleepwear, capitalizing on the 
            work-from-home trend. The Cozy Collection became one of the brand's most successful launches, selling out repeatedly.
          </p>

          <h3 className="text-2xl font-semibold mt-6 mb-3">Expansion and Partnerships (2021-2023)</h3>
          <p className="mb-4">
            In January 2022, SKIMS raised $240 million in a Series A funding round led by Lone Pine Capital, valuing the company 
            at $3.2 billion. Just one year later, in January 2023, the company raised additional funding that increased its 
            valuation to $4 billion.
          </p>
          <p className="mb-4">
            The brand expanded its product lines to include swimwear (2022) and menswear (2023). SKIMS also secured high-profile 
            partnerships, becoming the official underwear partner of the NBA, WNBA, and USA Basketball in 2023. This marked a 
            significant moment for the brand, positioning it alongside traditional athletic wear companies.
          </p>
          <p className="mb-4">
            In late 2023, SKIMS opened its first flagship store at The Grove shopping center in Los Angeles, transitioning from 
            a purely digital brand to brick-and-mortar retail.
          </p>

          <h3 className="text-2xl font-semibold mt-6 mb-3">Recent Developments (2024-2026)</h3>
          <p className="mb-4">
            SKIMS has continued its rapid expansion with additional retail locations in New York, Miami, and internationally. 
            The brand has maintained its position as a leader in the shapewear industry through innovative marketing campaigns 
            featuring diverse models and celebrities, including campaigns with soccer star Neymar Jr. and actor Kim Cattrall.
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-4 border-b pb-2">Products</h2>
          <p className="mb-4">
            SKIMS offers several core product lines:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Shapewear:</strong> The brand's original focus, including bodysuits, shorts, and sculpting garments</li>
            <li><strong>Fits Everybody:</strong> A line of everyday underwear and bralettes in nine shades</li>
            <li><strong>Cotton Collection:</strong> Casual basics and loungewear</li>
            <li><strong>Cozy Collection:</strong> Loungewear and sleepwear</li>
            <li><strong>Swim:</strong> Swimwear in various styles and shades</li>
            <li><strong>Mens:</strong> Underwear and basics for men</li>
          </ul>
          <p className="mb-4">
            All products are designed with an emphasis on comfort, inclusivity, and a wide range of sizes and skin tones.
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-4 border-b pb-2">Business Model</h2>
          <p className="mb-4">
            SKIMS operates primarily as a direct-to-consumer (DTC) brand, selling through its website skims.com. This model 
            allows the company to maintain control over pricing, customer relationships, and brand experience. The brand utilizes 
            social media marketing extensively, leveraging Kim Kardashian's massive following (over 350 million Instagram followers) 
            to drive awareness and sales.
          </p>
          <p className="mb-4">
            The company has been praised for its innovative "drop" model, releasing limited collections that create urgency and 
            often sell out quickly. Recent expansion into physical retail has been strategic, with stores designed to offer an 
            immersive brand experience.
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-4 border-b pb-2">Reception and Impact</h2>
          <p className="mb-4">
            SKIMS has been credited with disrupting the shapewear industry, which was previously dominated by brands like Spanx. 
            The company's focus on inclusivity and body positivity has been widely praised, though some critics have questioned 
            whether the brand's messaging conflicts with traditional beauty standards promoted by shapewear.
          </p>
          <p className="mb-4">
            The brand has won numerous awards, including recognition from TIME magazine as one of the most influential companies. 
            Fashion industry analysts have noted SKIMS as a case study in successful celebrity-founder brands, citing its ability 
            to maintain relevance and growth beyond initial hype.
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-4 border-b pb-2">Leadership</h2>
          <p className="mb-4">
            The company is co-founded and led by:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>
              <Link href="/clothing/skims/creative-director" className="text-blue-600 hover:underline font-semibold">
                Kim Kardashian
              </Link> serves as Creative Director and co-founder, overseeing product design, marketing, and brand vision
            </li>
            <li>
              <Link href="/clothing/skims/ceo" className="text-blue-600 hover:underline font-semibold">
                Jens Grede
              </Link> serves as CEO and co-founder, managing business operations, strategy, and growth initiatives
            </li>
          </ul>

          <h2 className="text-3xl font-bold mt-8 mb-4 border-b pb-2">See Also</h2>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li><Link href="/clothing/skims/creative-director" className="text-blue-600 hover:underline">Kim Kardashian - Creative Director</Link></li>
            <li><Link href="/clothing/skims/ceo" className="text-blue-600 hover:underline">Jens Grede - CEO</Link></li>
          </ul>

          <h2 className="text-3xl font-bold mt-8 mb-4 border-b pb-2">References</h2>
          <ol className="list-decimal pl-6 mb-4 space-y-1 text-sm">
            <li>Business Insider: "SKIMS valuation reaches $4 billion" (2023)</li>
            <li>Vogue: "Kim Kardashian's SKIMS is changing the shapewear game" (2021)</li>
            <li>Forbes: "How SKIMS became a billion-dollar brand" (2022)</li>
            <li>The New York Times: "Kimono name controversy" (2019)</li>
            <li>WWD: "SKIMS opens first flagship store" (2023)</li>
            <li>Sports Illustrated: "SKIMS partners with NBA and WNBA" (2023)</li>
          </ol>

          <div className="mt-8 pt-6 border-t text-sm text-gray-600">
            <p>
              <em>This article about a fashion company is informational. OBJECTWIRE maintains editorial independence.</em>
            </p>
            <p className="mt-2">
              <strong>Last updated:</strong> February 9, 2026
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
