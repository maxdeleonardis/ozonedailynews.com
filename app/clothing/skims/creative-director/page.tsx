import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Kim Kardashian - SKIMS Creative Director | OBJECTWIRE',
  description: 'Profile of Kim Kardashian as Creative Director and co-founder of SKIMS. Her vision, design philosophy, and impact on the shapewear revolution.',
  keywords: 'Kim Kardashian, SKIMS creative director, fashion designer, celebrity entrepreneur, shapewear',
  openGraph: {
    title: 'Kim Kardashian - Creative Vision Behind SKIMS',
    description: 'How Kim Kardashian transformed her personal frustrations with shapewear into a $4 billion fashion empire.',
    type: 'article',
    publishedTime: '2026-02-09T10:00:00Z',
  },
};

export default function KimKardashianPage() {
  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumbs 
          items={[
            { label: 'Clothing', href: '/clothing' },
            { label: 'SKIMS', href: '/clothing/skims' }
          ]}
          currentPage="Creative Director"
        />

        <header className="mb-8 pb-6 border-b-2 border-gray-900">
          <h1 className="text-5xl font-bold mb-4">Kim Kardashian</h1>
          <p className="text-xl text-gray-600 italic">
            Co-Founder & Creative Director of SKIMS
          </p>
        </header>

        <aside className="float-right ml-6 mb-6 w-72 bg-gray-50 border border-gray-300 p-4">
          <div className="text-center mb-4">
            <div className="bg-gray-200 h-64 flex items-center justify-center text-gray-500 mb-2">
              Photo
            </div>
            <p className="text-sm">Kim Kardashian at SKIMS event, 2023</p>
          </div>
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b">
                <td className="font-semibold py-2">Born</td>
                <td className="py-2">October 21, 1980<br />Los Angeles, California</td>
              </tr>
              <tr className="border-b">
                <td className="font-semibold py-2">Role</td>
                <td className="py-2">Creative Director, Co-Founder</td>
              </tr>
              <tr className="border-b">
                <td className="font-semibold py-2">Company</td>
                <td className="py-2">
                  <Link href="/clothing/skims" className="text-blue-600 hover:underline">SKIMS</Link>
                </td>
              </tr>
              <tr className="border-b">
                <td className="font-semibold py-2">Years active</td>
                <td className="py-2">2019–present (at SKIMS)</td>
              </tr>
              <tr>
                <td className="font-semibold py-2">Partner</td>
                <td className="py-2">
                  <Link href="/clothing/skims/ceo" className="text-blue-600 hover:underline">Jens Grede</Link> (Co-Founder)
                </td>
              </tr>
            </tbody>
          </table>
        </aside>

        <div className="prose max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            <strong>Kimberly Noel Kardashian</strong> (born October 21, 1980) serves as Creative Director and co-founder of 
            <Link href="/clothing/skims" className="text-blue-600 hover:underline"> SKIMS</Link>, the shapewear and loungewear 
            brand she launched in 2019 with business partner <Link href="/clothing/skims/ceo" className="text-blue-600 hover:underline">Jens Grede</Link>. 
            Drawing from her decades of experience in fashion and her frustrations with existing shapewear options, Kardashian has 
            built SKIMS into one of the most successful direct-to-consumer fashion brands, valued at $4 billion as of 2023.
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-4 border-b pb-2">The Vision Behind SKIMS</h2>
          <p className="mb-4">
            Kardashian's entry into the shapewear industry wasn't accidental—it was born from personal necessity. For years, she 
            had been cutting up shapewear garments and dyeing them with tea and coffee to match her skin tone. "I would always cut 
            up my shapewear to make my own things," she explained in numerous interviews. This DIY approach revealed a massive gap 
            in the market: quality shapewear that actually matched diverse skin tones and body types.
          </p>
          <p className="mb-4">
            Her vision for SKIMS centered on three core principles: inclusivity in sizing (XXS to 5XL), diversity in shade offerings 
            (nine core tones), and comfort without sacrificing effectiveness. Unlike traditional shapewear that often felt restrictive, 
            Kardashian insisted on using innovative fabrics that sculpted while remaining breathable and comfortable for all-day wear.
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-4 border-b pb-2">Creative Direction and Design Philosophy</h2>
          <p className="mb-4">
            As Creative Director, Kardashian is deeply involved in every aspect of product development. She personally tests every 
            item, often sharing behind-the-scenes content of fitting sessions and design reviews on social media. Her approach is 
            hands-on: she reviews fabric samples, approves colorways, and ensures each piece meets her exacting standards.
          </p>
          <p className="mb-4">
            Her design philosophy emphasizes minimalism and functionality. SKIMS products feature clean lines, neutral tones, and 
            seamless construction designed to be invisible under clothing. "The best shapewear is shapewear you forget you're wearing," 
            has become something of an unofficial company motto.
          </p>
          <p className="mb-4">
            Kardashian's influence extends beyond product design to marketing and brand positioning. She pioneered the use of diverse 
            models of all body types and ages in campaigns, challenging the traditional beauty standards perpetuated by the fashion 
            industry. Campaigns have featured everyone from plus-size models to women in their 70s, reflecting the brand's genuine 
            commitment to inclusivity.
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-4 border-b pb-2">From Concept to Launch</h2>
          <p className="mb-4">
            The journey to launching SKIMS began in 2018 when Kardashian connected with Jens Grede, who had experience building 
            successful fashion brands. Together, they spent over a year developing the initial collection, perfecting fabrics, and 
            testing products. Kardashian was adamant about getting the details right before launch.
          </p>
          <p className="mb-4">
            The original brand name, "Kimono Intimates," sparked immediate controversy for cultural appropriation. Kardashian's 
            response demonstrated business maturity: she listened to critics, apologized, and quickly pivoted to SKIMS. This ability 
            to adapt while maintaining momentum proved crucial to the brand's success.
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-4 border-b pb-2">Expanding the Brand</h2>
          <p className="mb-4">
            Under Kardashian's creative leadership, SKIMS has evolved far beyond shapewear. She directed the expansion into loungewear 
            during the pandemic, recognizing the cultural shift toward comfort and work-from-home attire. The Cozy Collection became 
            one of the brand's most successful lines, often selling out within hours.
          </p>
          <p className="mb-4">
            In 2023, Kardashian spearheaded SKIMS' entry into menswear and the groundbreaking partnership with the NBA, WNBA, and 
            USA Basketball. The decision to position SKIMS as athletic underwear was bold, putting the brand in competition with 
            established sportswear giants. Her personal relationships with athletes and understanding of sports culture helped secure 
            these partnerships.
          </p>
          <p className="mb-4">
            Most recently, she's overseen the design of SKIMS' first physical retail stores, ensuring they reflect the brand's 
            minimalist aesthetic and inclusive values. The flagship store at The Grove in Los Angeles features a warm, neutral palette 
            and an open layout designed to make shopping comfortable for customers of all body types.
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-4 border-b pb-2">Business Acumen and Market Impact</h2>
          <p className="mb-4">
            While Kardashian's celebrity status undoubtedly helped launch SKIMS, her business acumen has sustained it. She leverages 
            her social media following (over 350 million on Instagram) with sophisticated strategy, creating anticipation for drops 
            and engaging directly with customers about product feedback.
          </p>
          <p className="mb-4">
            Her approach to pricing reflects market savvy: SKIMS products are premium but not luxury-priced, positioned to be accessible 
            to the brand's core demographic. This pricing strategy, combined with the DTC model, has allowed SKIMS to maintain healthy 
            margins while remaining competitive.
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-4 border-b pb-2">Industry Recognition</h2>
          <p className="mb-4">
            Kardashian's work with SKIMS has earned recognition from fashion industry publications and business media. TIME magazine 
            named SKIMS one of the most influential companies, and Kardashian has been profiled by Forbes, The Wall Street Journal, 
            and Vogue for her entrepreneurial success.
          </p>
          <p className="mb-4">
            Fashion critics, once skeptical of celebrity-founded brands, have largely acknowledged SKIMS' genuine innovation and 
            impact on the shapewear category. The brand has been credited with forcing legacy competitors to expand their size and 
            shade ranges.
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-4 border-b pb-2">Leadership Style</h2>
          <p className="mb-4">
            Colleagues and business partners describe Kardashian as detail-oriented and demanding, with high standards for every 
            aspect of the brand. She's known for responding to customer complaints personally and making rapid adjustments based 
            on feedback. This responsiveness has helped SKIMS maintain customer loyalty despite its premium pricing.
          </p>
          <p className="mb-4">
            Her partnership with <Link href="/clothing/skims/ceo" className="text-blue-600 hover:underline">CEO Jens Grede</Link> 
            has been characterized by clear role delineation: Kardashian handles creative, marketing, and brand vision, while Grede 
            manages operations, finance, and business development. This division of labor has allowed both founders to focus on their 
            strengths.
          </p>

          <div className="mt-8 pt-6 border-t">
            <h3 className="text-xl font-semibold mb-4">Related Pages</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/clothing/skims" className="text-blue-600 hover:underline">
                  ← Back to SKIMS Company Profile
                </Link>
              </li>
              <li>
                <Link href="/clothing/skims/ceo" className="text-blue-600 hover:underline">
                  Jens Grede - SKIMS CEO and Co-Founder
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t text-sm text-gray-600">
            <p>
              <em>This profile is for informational purposes. OBJECTWIRE maintains editorial independence in all coverage.</em>
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
