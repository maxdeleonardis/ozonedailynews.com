'use client';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-12 pb-8 border-b-2 border-gray-200">
          <h1 className="text-4xl md:text-5xl font-black text-black mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: May 17, 2024</p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-black text-black mb-4">Overview</h2>
            <p className="text-gray-800 leading-relaxed">
              This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
            </p>
            <p className="text-gray-800 leading-relaxed">
              We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-black mb-4">Interpretation and Definitions</h2>
            <p className="text-gray-800 leading-relaxed">
              The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold text-black mb-3">Key Definitions</h3>
            <ul className="space-y-2 text-gray-800">
              <li><strong>Account:</strong> A unique account created for You to access our Service or parts of our Service.</li>
              <li><strong>Company:</strong> Refers to ObjectMedia, also referred to as "We", "Us" or "Our".</li>
              <li><strong>Cookies:</strong> Small files that are placed on Your computer, mobile device or any other device by a website.</li>
              <li><strong>Country:</strong> Texas, United States</li>
              <li><strong>Device:</strong> Any device that can access the Service such as a computer, a cellphone or a digital tablet.</li>
              <li><strong>Personal Data:</strong> Any information that relates to an identified or identifiable individual.</li>
              <li><strong>Service:</strong> Refers to the Website.</li>
              <li><strong>Website:</strong> ObjectWire accessible from www.objectwire.org</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-black mb-4">Collecting and Using Your Personal Data</h2>
            
            <h3 className="text-xl font-bold text-black mb-3 mt-6">Types of Data Collected</h3>
            
            <h4 className="font-bold text-black mb-2">Personal Data</h4>
            <p className="text-gray-800 leading-relaxed mb-4">
              While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-800 mb-6">
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Phone number</li>
              <li>Usage Data</li>
            </ul>

            <h4 className="font-bold text-black mb-2">Usage Data</h4>
            <p className="text-gray-800 leading-relaxed">
              Usage Data is collected automatically when using the Service. Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, and other diagnostic data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-black mb-4">Tracking Technologies and Cookies</h2>
            <p className="text-gray-800 leading-relaxed mb-4">
              We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service.
            </p>
            <p className="text-gray-800 leading-relaxed">
              Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-black mb-4">Use of Your Personal Data</h2>
            <p className="text-gray-800 leading-relaxed mb-4">
              The Company may use Personal Data for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-800">
              <li>To provide and maintain our Service, including to monitor the usage of our Service</li>
              <li>To manage Your Account and registration as a user of the Service</li>
              <li>For the performance of a contract and any other contract with Us through the Service</li>
              <li>To contact You by email, telephone, SMS, or other electronic communication</li>
              <li>To provide You with news, special offers and general information</li>
              <li>For business transfers and evaluations</li>
              <li>For data analysis, identifying usage trends, and evaluating effectiveness of campaigns</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-black mb-4">Retention of Your Personal Data</h2>
            <p className="text-gray-800 leading-relaxed">
              The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-black mb-4">Security of Your Personal Data</h2>
            <p className="text-gray-800 leading-relaxed">
              The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-black mb-4">Contact Us</h2>
            <p className="text-gray-800 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, You can contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded border border-gray-200">
              <p className="text-gray-800"><strong>Email:</strong> jack@objectwire.org</p>
              <p className="text-gray-800"><strong>Phone:</strong> (575) 495-0323</p>
              <p className="text-gray-800"><strong>Address:</strong> 2921 E 17th St Building 3, Apt 3205, Austin, TX 78702</p>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
