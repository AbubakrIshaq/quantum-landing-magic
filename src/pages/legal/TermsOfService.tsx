
import React from 'react';
import PageTemplate from '@/components/common/PageTemplate';

const TermsOfService = () => {
  return (
    <PageTemplate 
      title="Terms of Service" 
      subtitle="Last updated: June 1, 2023"
    >
      <div className="prose max-w-4xl mx-auto">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing and using SocialFlow's services, you accept and agree to be bound by the terms and provision of this agreement.
          </p>
          <p>
            If you do not agree to abide by the above, please do not use this service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
          <p className="mb-4">
            SocialFlow provides users with access to a rich collection of resources, including various communications tools, forums, and personalized content. The service is provided as is with no warranties.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. Subscription Terms</h2>
          <p className="mb-4">
            Some parts of the service are billed on a subscription basis. You will be billed in advance on a recurring basis, depending on the type of subscription plan you select.
          </p>
          <p>
            You may cancel your subscription at any time from your account settings. Upon cancellation, you will continue to have access to the service through the end of your billing period.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">4. User Conduct</h2>
          <p className="mb-4">
            You are solely responsible for all information that you submit or transmit through the service. You may not use the service for any illegal or unauthorized purpose.
          </p>
          <p className="mb-4">
            You agree to comply with all local laws regarding online conduct and acceptable content. You are responsible for all of your activity in connection with the service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
          <p className="mb-4">
            The SocialFlow service and its original content, features, and functionality are owned by SocialFlow and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">6. Termination</h2>
          <p className="mb-4">
            We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at legal@socialflow.com.
          </p>
        </section>
      </div>
    </PageTemplate>
  );
};

export default TermsOfService;
