
import React from 'react';
import PageTemplate from '@/components/common/PageTemplate';

const Newsroom = () => {
  return (
    <PageTemplate 
      title="Newsroom" 
      subtitle="The latest news, updates, and announcements from SocialFlow."
    >
      <div className="prose max-w-3xl mx-auto">
        <p>Latest SocialFlow news, press releases, and media coverage will be placed here.</p>
      </div>
    </PageTemplate>
  );
};

export default Newsroom;
