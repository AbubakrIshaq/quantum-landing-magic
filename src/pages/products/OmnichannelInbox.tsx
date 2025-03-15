
import React from 'react';
import PageTemplate from '@/components/common/PageTemplate';

const OmnichannelInbox = () => {
  return (
    <PageTemplate 
      title="Omnichannel Inbox" 
      subtitle="Centralize all your customer conversations across multiple channels in one unified inbox."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold mb-6">Streamline your customer communications</h2>
          <p className="text-lg mb-6 text-muted-foreground">
            With SocialFlow's Omnichannel Inbox, you can manage messages from WhatsApp, Facebook Messenger, Instagram, Telegram, and more - all in one place.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-1">✓</div>
              <p>Centralize customer conversations across all channels</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-1">✓</div>
              <p>Seamless context switching between platforms</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-1">✓</div>
              <p>Assign conversations to team members</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-1">✓</div>
              <p>Never miss a customer message again</p>
            </li>
          </ul>
        </div>
        <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center">
          <p className="text-gray-500">Image placeholder</p>
        </div>
      </div>
      
      <div className="text-center mb-20">
        <h2 className="text-3xl font-bold mb-8">How it works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg border border-accent bg-white shadow-sm">
            <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">1</div>
            <h3 className="text-xl font-semibold mb-3">Connect your channels</h3>
            <p className="text-muted-foreground">Link your social media accounts and messaging platforms to SocialFlow</p>
          </div>
          <div className="p-6 rounded-lg border border-accent bg-white shadow-sm">
            <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">2</div>
            <h3 className="text-xl font-semibold mb-3">Organize your team</h3>
            <p className="text-muted-foreground">Set up departments and assign team members to handle specific channels</p>
          </div>
          <div className="p-6 rounded-lg border border-accent bg-white shadow-sm">
            <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">3</div>
            <h3 className="text-xl font-semibold mb-3">Engage with customers</h3>
            <p className="text-muted-foreground">Reply to all customer messages from a single, unified interface</p>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default OmnichannelInbox;
