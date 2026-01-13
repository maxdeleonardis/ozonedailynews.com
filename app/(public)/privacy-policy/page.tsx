import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "ObjectWire Privacy Policy - How we collect, use, and protect your information",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none space-y-8">
          <div className="text-sm text-gray-600 mb-8">
            <p>Last Updated: December 25, 2025</p>
            <p>Effective Date: December 25, 2025</p>
          </div>

          <section>
            <p className="text-lg leading-relaxed mb-6">
              ObjectWire ("we," "our," or "us") operates as a verification-first intelligence platform 
              providing cited business and technology analysis. This Privacy Policy describes how we 
              collect, use, disclose, and protect your personal information when you access or use our 
              services, including ObjectWire.org, our API services, newsletter subscriptions, and any 
              related services (collectively, the "Services").
            </p>
            <p className="text-lg leading-relaxed">
              By accessing or using our Services, you acknowledge that you have read, understood, and 
              agree to this Privacy Policy. If you do not agree with any part of this Privacy Policy, 
              you must not use our Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4">1. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">1.1 Information You Provide Directly</h3>
            <p className="mb-4">We collect information you voluntarily provide when you:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Register for an account or newsletter subscription</li>
              <li>Submit content, feedback, or error reports</li>
              <li>Subscribe to newsletters or content alerts</li>
              <li>Contact customer support or editorial team</li>
              <li>Participate in surveys or reader engagement activities</li>
            </ul>
            <p className="mb-4">This information may include:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name, email address</li>
              <li>Username and password (encrypted)</li>
              <li>Payment information (processed securely through third-party payment processors)</li>
              <li>Professional affiliation, job title, company name (optional)</li>
              <li>Communication preferences and content interests</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">1.2 Information Collected Automatically</h3>
            <p className="mb-4">When you access our Services, we automatically collect:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
              <li><strong>Usage Data:</strong> Pages visited, articles viewed, time spent, click patterns</li>
              <li><strong>Location Data:</strong> Approximate geographic location from IP address (city/region level)</li>
              <li><strong>Cookies:</strong> See our Cookie Policy for details</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use collected information to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve our Services</li>
              <li>Process transactions and send related information</li>
              <li>Send newsletters, alerts, and communications you've subscribed to</li>
              <li>Respond to your comments, questions, and customer service requests</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Detect, prevent, and address technical issues and security threats</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4">3. Information Sharing</h2>
            <p className="mb-4">We do not sell your personal information. We may share information with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Service Providers:</strong> Third-party vendors who perform services on our behalf</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4">4. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access and receive a copy of your personal information</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Object to processing of your personal information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction. However, 
              no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4">6. Contact Us</h2>
            <p className="mb-4">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <p className="font-medium">
              Email: privacy@objectwire.org<br />
              Address: ObjectWire News Network
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
