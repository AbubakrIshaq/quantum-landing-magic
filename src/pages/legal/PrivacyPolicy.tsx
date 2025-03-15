
import React from 'react';
import PageTemplate from '@/components/common/PageTemplate';

const PrivacyPolicy = () => {
  return (
    <PageTemplate 
      title="Privacy Policy" 
      subtitle="Last updated: June 1, 2023"
    >
      <div className="prose max-w-4xl mx-auto">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
          <p className="mb-4">
            At SocialFlow, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our service.
          </p>
          <p>
            Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
          <p className="mb-4">
            We collect information that you provide directly to us when you register for an account, create or modify your profile, set preferences, or make purchases through the Service.
          </p>
          <p>
            This information may include your name, password, email address, phone number, company name, job title, postal address, payment information, and any other information you choose to provide.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
          <p className="mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide, maintain, and improve our Services</li>
            <li>Send you technical notices, updates, security alerts, and support messages</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Communicate with you about products, services, offers, promotions, and events</li>
            <li>Monitor and analyze trends, usage, and activities in connection with our Services</li>
            <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
            <li>Personalize and improve the Services</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. Sharing of Information</h2>
          <p>
            We may share information about you as follows or as otherwise described in this Privacy Policy:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>With vendors, consultants, and other service providers who need access to such information to carry out work on our behalf</li>
            <li>In response to a request for information if we believe disclosure is in accordance with any applicable law, regulation, or legal process</li>
            <li>If we believe your actions are inconsistent with our user agreements or policies, or to protect the rights, property, and safety of SocialFlow or others</li>
            <li>In connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business by another company</li>
            <li>Between and among SocialFlow and our current and future parents, affiliates, subsidiaries, and other companies under common control and ownership</li>
            <li>With your consent or at your direction</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at privacy@socialflow.com.
          </p>
        </section>
      </div>
    </PageTemplate>
  );
};

export default PrivacyPolicy;
