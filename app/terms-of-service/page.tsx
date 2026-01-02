import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "ObjectWire Terms of Service - Rules and guidelines for using our platform",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none space-y-8">
          <div className="text-sm text-gray-600 mb-8">
            <p>Last Updated: December 25, 2025</p>
            <p>Effective Date: December 25, 2025</p>
          </div>

          <section>
            <p className="text-lg leading-relaxed">
              Welcome to ObjectWire. These Terms of Service ("Terms") constitute a legally binding 
              agreement between you and ObjectWire governing your access to and use of ObjectWire.org, 
              our API services, newsletter subscriptions, and any related services (collectively, the "Services").
            </p>
            <p className="text-lg leading-relaxed mt-4">
              By accessing or using our Services, you acknowledge that you have read, understood, and 
              agree to be bound by these Terms. If you do not agree, you must not use our Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4">1. Acceptance of Terms</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">1.1 Binding Agreement</h3>
            <p className="mb-4">
              By creating an account, accessing our Services, or using any portion of our platform, 
              you enter into a binding legal agreement with ObjectWire and agree to comply with these 
              Terms, our Privacy Policy, Editorial Standards, and all applicable laws and regulations.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">1.2 Age Requirements</h3>
            <p className="mb-4">
              You must be at least 18 years of age to use our Services. By using the Services, you 
              represent and warrant that you meet this age requirement.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">1.3 Modifications to Terms</h3>
            <p>
              We reserve the right to modify these Terms at any time. We will notify you of material 
              changes at least 30 days before they take effect. Your continued use after changes 
              constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4">2. Description of Services</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">2.1 Service Overview</h3>
            <p className="mb-4">ObjectWire is a verification-first intelligence platform that provides:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Verified business and technology news with primary source citations</li>
              <li>Event-driven reporting on business, technology, and policy</li>
              <li>Newsletter subscriptions and content alerts</li>
              <li>API access to verified intelligence data</li>
              <li>Citation-grade content for research and decision workflows</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">2.2 Editorial Mission</h3>
            <p>
              ObjectWire operates as a credibility engine, not a content aggregator. All published 
              content undergoes rigorous verification using primary sources and language model 
              processing trained for fact-checking and citation validation.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">2.3 No Investment Advice</h3>
            <p className="font-semibold mb-2">
              OBJECTWIRE IS AN INFORMATION PLATFORM ONLY.
            </p>
            <p>
              We do not provide investment, financial, legal, or tax advice. Content is for 
              informational purposes only and should not be construed as recommendations. Consult 
              qualified professionals before making decisions based on our content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4">3. User Accounts</h2>
            <p className="mb-4">When you create an account:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must provide accurate and complete information</li>
              <li>You are responsible for maintaining the security of your account</li>
              <li>You must notify us immediately of any unauthorized use</li>
              <li>You are responsible for all activities under your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4">4. Acceptable Use</h2>
            <p className="mb-4">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use the Services for any illegal purpose</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit viruses, malware, or harmful code</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Scrape, crawl, or use automated means to access content without permission</li>
              <li>Interfere with or disrupt the Services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4">5. Intellectual Property</h2>
            <p className="mb-4">
              All content, features, and functionality on ObjectWire are owned by ObjectWire and 
              protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p>
              You may access and use our content for personal, non-commercial purposes. Any other 
              use requires our prior written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4">6. Disclaimer of Warranties</h2>
            <p className="font-semibold mb-2">
              THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND.
            </p>
            <p>
              We do not guarantee that the Services will be uninterrupted, secure, or error-free. 
              We are not responsible for the accuracy, reliability, or completeness of any content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4">7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, ObjectWire shall not be liable for any 
              indirect, incidental, special, consequential, or punitive damages arising from your 
              use of the Services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4">8. Termination</h2>
            <p className="mb-4">
              We may terminate or suspend your access to the Services immediately, without prior 
              notice, for any reason, including breach of these Terms.
            </p>
            <p>
              You may terminate your account at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-12 mb-4">9. Contact Information</h2>
            <p className="mb-4">
              For questions about these Terms, contact us at:
            </p>
            <p className="font-medium">
              Email: legal@objectwire.org<br />
              Address: ObjectWire News Network
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
