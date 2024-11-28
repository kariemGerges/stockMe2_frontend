import React, { useState } from 'react';
import { FileText, Shield, Cookie } from 'lucide-react';

const LegalDocuments = () => {
  const [activeTab, setActiveTab] = useState('terms');

  const renderTermsOfService = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h2>
      
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h3>
        <p className="text-gray-700">
          By accessing and using StockMe, you agree to be bound by these Terms of Service. 
          If you do not agree with any part of these terms, you may not use our service.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-4">2. User Eligibility</h3>
        <p className="text-gray-700">
          You must be at least 18 years old to use StockMe. By using our service, you represent 
          and warrant that you meet all eligibility requirements and have the legal capacity 
          to enter into these terms.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-4">3. User Account</h3>
        <p className="text-gray-700">
          You are responsible for maintaining the confidentiality of your account and password. 
          You agree to accept responsibility for all activities that occur under your account.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-4">4. Investment Disclaimer</h3>
        <p className="text-gray-700">
          StockMe provides market insights and predictions, but these should not be considered 
          financial advice. All investment decisions are your own responsibility. Past performance 
          does not guarantee future results.
        </p>
      </section>
    </div>
  );

  const renderPrivacyPolicy = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h2>
      
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-4">1. Information We Collect</h3>
        <p className="text-gray-700">
          We collect personal information that you provide directly to us, such as when you 
          create an account, update your profile, or interact with our services.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-4">2. How We Use Your Information</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>To provide and improve our services</li>
          <li>To process transactions and send related information</li>
          <li>To send you technical notices and support messages</li>
          <li>To respond to your comments and questions</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-4">3. Data Security</h3>
        <p className="text-gray-700">
          We implement a variety of security measures to maintain the safety of your personal 
          information. However, no method of transmission over the Internet is 100% secure.
        </p>
      </section>
    </div>
  );

  const renderCookiePolicy = () => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookie Policy</h2>
      
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-4">1. What Are Cookies?</h3>
        <p className="text-gray-700">
          Cookies are small text files that are placed on your computer by websites you visit. 
          They are used to remember your preferences and improve your user experience.
        </p>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-4">2. Types of Cookies We Use</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Essential Cookies: Necessary for the website to function</li>
          <li>Performance Cookies: Help us understand website usage</li>
          <li>Functional Cookies: Enhance website functionality</li>
          <li>Targeting Cookies: Used for personalized advertising</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-4">3. Managing Cookies</h3>
        <p className="text-gray-700">
          You can control and manage cookies through your browser settings. However, 
          disabling cookies may limit your ability to use certain features of our website.
        </p>
      </section>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Tabs */}
        <div className="flex border-b">
          {[
            { 
              name: 'terms', 
              label: 'Terms of Service', 
              icon: FileText 
            },
            { 
              name: 'privacy', 
              label: 'Privacy Policy', 
              icon: Shield 
            },
            { 
              name: 'cookies', 
              label: 'Cookie Policy', 
              icon: Cookie 
            }
          ].map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`
                flex items-center justify-center w-full py-4 transition-colors duration-300
                ${activeTab === tab.name 
                  ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-500' 
                  : 'text-gray-600 hover:bg-gray-100'}
              `}
            >
              <tab.icon className="mr-2 w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="p-8 overflow-y-auto max-h-[600px]">
          {activeTab === 'terms' && renderTermsOfService()}
          {activeTab === 'privacy' && renderPrivacyPolicy()}
          {activeTab === 'cookies' && renderCookiePolicy()}
        </div>

        {/* Last Updated */}
        <div className="bg-gray-100 p-4 text-center text-sm text-gray-600">
          Last Updated: November 26, 2024
        </div>
      </div>
    </div>
  );
};

export default LegalDocuments;