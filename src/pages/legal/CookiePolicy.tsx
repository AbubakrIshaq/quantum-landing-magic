
import React from 'react';
import PageTemplate from '@/components/common/PageTemplate';

const CookiePolicy = () => {
  return (
    <PageTemplate 
      title="Cookie Policy" 
      subtitle="Last updated: June 1, 2023"
    >
      <div className="prose max-w-4xl mx-auto">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">What Are Cookies</h2>
          <p className="mb-4">
            Cookies are small pieces of text sent to your web browser by a website you visit. A cookie file is stored in your web browser and allows the Service or a third-party to recognize you and make your next visit easier and the Service more useful to you.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">How SocialFlow Uses Cookies</h2>
          <p className="mb-4">
            When you use and access the Service, we may place a number of cookie files in your web browser. We use cookies for the following purposes:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>To enable certain functions of the Service</li>
            <li>To provide analytics</li>
            <li>To store your preferences</li>
            <li>To enable advertisements delivery, including behavioral advertising</li>
          </ul>
          <p className="mb-4">
            We use both session and persistent cookies on the Service and we use different types of cookies to run the Service:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Essential cookies. We may use essential cookies to authenticate users and prevent fraudulent use of user accounts.</li>
            <li>Preferences cookies. We may use preferences cookies to remember information that changes the way the Service behaves or looks, such as the "remember me" functionality.</li>
            <li>Analytics cookies. We may use analytics cookies to track information how the Service is used so that we can make improvements.</li>
            <li>Advertising cookies. We may use advertising cookies to collect information about your visit to our Service, the content you viewed, the links you followed and information about your browser, device, and your IP address.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Third-Party Cookies</h2>
          <p className="mb-4">
            In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the Service, deliver advertisements on and through the Service, and so on.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">What Are Your Choices Regarding Cookies</h2>
          <p className="mb-4">
            If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser.
          </p>
          <p className="mb-4">
            Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer, you may not be able to store your preferences, and some of our pages might not display properly.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p>
            If you have any questions about our Cookie Policy, please contact us at privacy@socialflow.com.
          </p>
        </section>
      </div>
    </PageTemplate>
  );
};

export default CookiePolicy;
