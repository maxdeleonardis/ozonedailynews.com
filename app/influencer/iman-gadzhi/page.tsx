import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Iman Gadzhi - Digital Marketing Entrepreneur & Educator | OBJECTWIRE',
  description: 'Comprehensive profile of Iman Gadzhi, Russian-British entrepreneur, digital marketing educator, and founder of IAG Media and Educate. From teenage dropout to multi-millionaire business owner.',
  keywords: 'Iman Gadzhi, digital marketing, SMMA, social media marketing agency, IAG Media, Educate, entrepreneur, influencer',
  openGraph: {
    title: 'Iman Gadzhi - Digital Marketing Entrepreneur',
    description: 'From high school dropout to building a digital marketing empire. The story of Iman Gadzhi.',
    type: 'article',
    publishedTime: '2026-02-09T10:00:00Z',
  },
};

export default function ImanGadzhiPage() {
  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-4xl mx-auto px-4 py-8">
        <Breadcrumb items={[
          { name: 'Home', item: '/' },
          { name: 'Influencer', item: '/influencer' },
          { name: 'Iman Gadzhi', item: '/influencer/iman-gadzhi' },
        ]} />

        <header className="mb-8 pb-6 border-b-2 border-gray-900">
          <h1 className="text-5xl font-bold mb-4">Iman Gadzhi</h1>
          <p className="text-xl text-gray-600 italic">
            Russian-British entrepreneur and digital marketing educator
          </p>
        </header>

        <aside className="float-right ml-6 mb-6 w-80 bg-gray-50 border border-gray-300 p-4">
          <div className="text-center mb-4">
            <div className="bg-gray-200 h-64 flex items-center justify-center text-gray-500 mb-2">
              Photo
            </div>
            <p className="text-sm">Iman Gadzhi, 2024</p>
          </div>
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b">
                <td className="font-semibold py-2">Born</td>
                <td className="py-2">January 3, 2000<br />Dagestu, Russia</td>
              </tr>
              <tr className="border-b">
                <td className="font-semibold py-2">Nationality</td>
                <td className="py-2">Russian-British</td>
              </tr>
              <tr className="border-b">
                <td className="font-semibold py-2">Occupation</td>
                <td className="py-2">Entrepreneur, educator, content creator</td>
              </tr>
              <tr className="border-b">
                <td className="font-semibold py-2">Known for</td>
                <td className="py-2">IAG Media, Educate, Agency Navigator</td>
              </tr>
              <tr className="border-b">
                <td className="font-semibold py-2">Years active</td>
                <td className="py-2">2015–present</td>
              </tr>
              <tr>
                <td className="font-semibold py-2">Website</td>
                <td className="py-2">
                  <a href="https://www.imangadzhi.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                    imangadzhi.com
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </aside>

        <div className="prose max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            <strong>Iman Gadzhi</strong> (born January 3, 2000) is a Russian-British entrepreneur, digital marketing educator, 
            and social media influencer. He is best known as the founder of IAG Media, a digital marketing agency, and Educate, 
            an online education platform focused on social media marketing agency (SMMA) training. Gadzhi dropped out of high 
            school at age 17 to pursue entrepreneurship and claims to have built multiple seven-figure businesses before age 20.
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-4 border-b pb-2">Early Life</h2>
          <p className="mb-4">
            Iman Gadzhi was born on January 3, 2000, in Dagestan, Russia, and moved to London, England, with his mother at a 
            young age. He has spoken publicly about growing up in difficult financial circumstances, with his single mother 
            working multiple jobs to support them. These early experiences with financial struggle became a driving force behind 
            his entrepreneurial ambitions.
          </p>
          <p className="mb-4">
            As a teenager, Gadzhi became interested in digital marketing and online business. He started learning about social 
            media advertising, website design, and client acquisition through free online resources and YouTube videos. At age 15, 
            he began taking on small freelance projects, offering social media management services to local businesses.
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-4 border-b pb-2">Career</h2>

          <h3 className="text-2xl font-semibold mt-6 mb-3">Early Ventures (2015-2017)</h3>
          <p className="mb-4">
            Gadzhi's first business ventures included a fitness YouTube channel and various e-commerce experiments. While these 
            initial attempts didn't achieve significant success, they provided valuable lessons in marketing, content creation, 
            and audience building.
          </p>
          <p className="mb-4">
            At age 17, while still in high school, Gadzhi made the controversial decision to drop out and focus full-time on 
            building his digital marketing agency. He has stated that this decision was driven by the belief that traditional 
            education wouldn't provide the practical business skills he needed.
          </p>

          <h3 className="text-2xl font-semibold mt-6 mb-3">IAG Media (2017-present)</h3>
          <p className="mb-4">
            In 2017, Gadzhi founded IAG Media (Iman Ali Gadzhi Media), a digital marketing agency specializing in paid advertising 
            for fitness and health brands. The agency focused on Facebook and Instagram advertising, helping clients generate leads 
            and sales through targeted campaigns.
          </p>
          <p className="mb-4">
            IAG Media reportedly grew rapidly, reaching six-figure monthly revenues within its first year. The agency worked with 
            various clients in the fitness, coaching, and e-commerce spaces. Gadzhi has claimed that the agency achieved over 
            $1 million in annual revenue by the time he was 18.
          </p>

          <h3 className="text-2xl font-semibold mt-6 mb-3">Educate and Agency Navigator (2018-present)</h3>
          <p className="mb-4">
            Building on his agency experience, Gadzhi launched Educate, an online education platform, in 2018. The platform's 
            flagship course, "Agency Navigator," teaches students how to start and scale their own social media marketing agencies. 
            The program includes training on client acquisition, service delivery, pricing strategies, and team building.
          </p>
          <p className="mb-4">
            Agency Navigator quickly became popular among aspiring digital marketers and entrepreneurs, particularly younger 
            individuals seeking alternatives to traditional career paths. The course reportedly generated millions in revenue, 
            with thousands of students enrolled. Pricing has varied over the years, with the program typically costing between 
            $1,000 and $2,000.
          </p>
          <p className="mb-4">
            Educate has expanded to include additional courses and resources, including programs on personal branding, content 
            creation, and business scaling. The platform operates on a combination of one-time payments and subscription models.
          </p>

          <h3 className="text-2xl font-semibold mt-6 mb-3">Content Creation and Personal Brand (2018-present)</h3>
          <p className="mb-4">
            Gadzhi has built a substantial social media following across multiple platforms. His YouTube channel, which features 
            entrepreneurship advice, lifestyle content, and business tutorials, has accumulated over 4 million subscribers as of 
            2026. He also maintains active presence on Instagram, TikTok, and Twitter, where he shares motivational content and 
            business insights.
          </p>
          <p className="mb-4">
            His content often emphasizes themes of financial freedom, rejecting traditional employment, and building location-independent 
            businesses. Gadzhi frequently showcases a luxury lifestyle, including exotic travel, expensive cars, and high-end real 
            estate, which he attributes to his business success.
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-4 border-b pb-2">Business Philosophy</h2>
          <p className="mb-4">
            Gadzhi's business philosophy centers on several core principles:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Self-education:</strong> Emphasizes learning through experience and online resources rather than traditional education</li>
            <li><strong>High-income skills:</strong> Advocates mastering profitable skills like sales, marketing, and copywriting</li>
            <li><strong>Agency model:</strong> Promotes the SMMA business model as accessible to young entrepreneurs with limited capital</li>
            <li><strong>Location independence:</strong> Encourages building businesses that can operate remotely</li>
            <li><strong>Early action:</strong> Stresses starting young and taking risks in one's 20s</li>
          </ul>

          <h2 className="text-3xl font-bold mt-8 mb-4 border-b pb-2">Controversies and Criticism</h2>
          <p className="mb-4">
            Like many high-profile business educators, Gadzhi has faced criticism and controversy:
          </p>
          
          <h3 className="text-2xl font-semibold mt-6 mb-3">Claims Verification</h3>
          <p className="mb-4">
            Critics have questioned the verifiability of Gadzhi's income claims and business success. While he regularly shares 
            screenshots of earnings and client results, independent verification of these figures is limited. Some skeptics suggest 
            that his primary income comes from selling courses rather than agency services.
          </p>

          <h3 className="text-2xl font-semibold mt-6 mb-3">Course Value Debates</h3>
          <p className="mb-4">
            The value proposition of Agency Navigator and similar courses has been debated. Supporters credit the program with 
            helping them launch successful agencies, while critics argue that much of the information is available for free online 
            and that the course oversimplifies the challenges of running an agency.
          </p>

          <h3 className="text-2xl font-semibold mt-6 mb-3">Lifestyle Marketing</h3>
          <p className="mb-4">
            Some critics argue that Gadzhi's content relies heavily on lifestyle marketing—showcasing wealth and luxury to sell 
            educational products. This approach, common among business influencers, has been criticized as potentially misleading 
            about the typical results students can expect.
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-4 border-b pb-2">Philanthropy</h2>
          <p className="mb-4">
            Gadzhi has discussed charitable activities, including building schools in developing countries and supporting his 
            mother financially. He has documented some of these efforts on his YouTube channel, though specific details about 
            donation amounts and ongoing commitments are limited.
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-4 border-b pb-2">Personal Life</h2>
          <p className="mb-4">
            Gadzhi maintains a relatively private personal life despite his public presence. He has mentioned living in various 
            locations including London, Dubai, and Bali, consistent with his emphasis on location-independent business. He 
            practices Brazilian Jiu-Jitsu and has discussed the importance of physical fitness and mental discipline in his content.
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-4 border-b pb-2">Legacy and Impact</h2>
          <p className="mb-4">
            Regardless of controversies, Gadzhi has undeniably influenced a generation of young entrepreneurs interested in digital 
            marketing. His story of dropping out of school and building businesses as a teenager resonates with those seeking 
            alternatives to traditional career paths. Whether his model is sustainable and replicable at scale remains a subject 
            of debate within the entrepreneurship community.
          </p>

          <h2 className="text-3xl font-bold mt-8 mb-4 border-b pb-2">References</h2>
          <ol className="list-decimal pl-6 mb-4 space-y-1 text-sm">
            <li>YouTube: Iman Gadzhi official channel (2018-2026)</li>
            <li>Forbes: "Young Entrepreneurs Reshaping Digital Marketing" (2021)</li>
            <li>Educate website: Course offerings and testimonials (2026)</li>
            <li>Various podcast interviews and media appearances (2019-2026)</li>
          </ol>

          <div className="mt-8 pt-6 border-t text-sm text-gray-600">
            <p>
              <em>This article is for informational purposes. OBJECTWIRE maintains editorial independence and has not received 
              compensation from the subject. Claims about earnings should be independently verified.</em>
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
