'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission - in production, connect to your backend
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitted(true);
    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="py-20 md:py-32">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold mb-4">Message Received</h1>
          <p className="text-gray-600 mb-8">
            Thank you for reaching out. Our team will review your message and respond within 24-48 hours.
          </p>
          <Link 
            href="/"
            className="inline-block px-6 py-3 bg-black text-white font-medium rounded hover:bg-gray-800 transition-colors"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Header */}
        <header className="mb-12 pb-8 border-b border-gray-200">
          <p className="text-xs font-mono text-gray-400 mb-4 tracking-wider">GET IN TOUCH</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl">
            Have a news tip, correction, or inquiry? We'd love to hear from you. 
            Our editorial team reviews all messages and responds within 24-48 hours.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                >
                  <option>General Inquiry</option>
                  <option>News Tip</option>
                  <option>Correction Request</option>
                  <option>Press / Media</option>
                  <option>Partnership / Advertising</option>
                  <option>Technical Issue</option>
                  <option>Career Inquiry</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Please include relevant details, links, or documentation..."
                />
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-black text-white font-medium rounded hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                <p className="text-sm text-gray-500">
                  We typically respond within 24-48 hours
                </p>
              </div>
            </form>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-8">
            {/* Direct Contacts */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold mb-4">Direct Contact</h3>
              
              <div className="space-y-4 text-sm">
                <div>
                  <p className="text-gray-500 mb-1">General Inquiries</p>
                  <a href="mailto:hello@objectwire.com" className="text-blue-600 hover:underline">
                    hello@objectwire.com
                  </a>
                </div>
                
                <div>
                  <p className="text-gray-500 mb-1">Editorial / News Tips</p>
                  <a href="mailto:editorial@objectwire.com" className="text-blue-600 hover:underline">
                    editorial@objectwire.com
                  </a>
                </div>
                
                <div>
                  <p className="text-gray-500 mb-1">Corrections</p>
                  <a href="mailto:corrections@objectwire.com" className="text-blue-600 hover:underline">
                    corrections@objectwire.com
                  </a>
                </div>
                
                <div>
                  <p className="text-gray-500 mb-1">Press / Media</p>
                  <a href="mailto:press@objectwire.com" className="text-blue-600 hover:underline">
                    press@objectwire.com
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold mb-4">Location</h3>
              <div className="text-sm text-gray-600">
                <p className="font-medium text-gray-900">ObjectWire Media</p>
                <p>Austin, Texas</p>
                <p>United States</p>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                We are a digital-first publication with remote contributors across Texas.
              </p>
            </div>

            {/* Social */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold mb-4">Follow Us</h3>
              <div className="flex gap-3">
                <a 
                  href="https://twitter.com/object_wire" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-black text-white rounded flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  𝕏
                </a>
                <a 
                  href="https://www.tiktok.com/@object_wire" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-black text-white rounded flex items-center justify-center hover:bg-gray-900 transition-colors font-bold text-xs"
                >
                  TT
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="p-6 border border-gray-200 rounded-lg">
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/team" className="text-blue-600 hover:underline">
                    Our Team →
                  </Link>
                </li>
                <li>
                  <Link href="/editorial-standards" className="text-blue-600 hover:underline">
                    Editorial Standards →
                  </Link>
                </li>
                <li>
                  <Link href="/corrections" className="text-blue-600 hover:underline">
                    Corrections Policy →
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                    Privacy Policy →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Secure Tips Section */}
        <section className="mt-16 pt-12 border-t border-gray-200">
          <div className="bg-gray-900 text-white rounded-xl p-8 md:p-12">
            <div className="md:flex items-center justify-between">
              <div className="mb-6 md:mb-0">
                <h2 className="text-2xl font-bold mb-3">Have a Confidential Tip?</h2>
                <p className="text-gray-300 max-w-xl">
                  If you have sensitive information or need to communicate securely, 
                  we protect the identity of our sources. Contact our investigative team 
                  for secure communication options.
                </p>
              </div>
              <div>
                <a 
                  href="mailto:tips@objectwire.com"
                  className="inline-block px-6 py-3 bg-white text-black font-medium rounded hover:bg-gray-100 transition-colors"
                >
                  tips@objectwire.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
