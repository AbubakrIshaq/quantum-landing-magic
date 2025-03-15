
import React from 'react';
import PageTemplate from '@/components/common/PageTemplate';

const About = () => {
  return (
    <PageTemplate 
      title="About SocialFlow" 
      subtitle="We're on a mission to revolutionize how businesses connect with customers through modern messaging."
    >
      <div className="prose max-w-3xl mx-auto">
        <p>Content about SocialFlow company, history, mission, and values will be placed here.</p>
      </div>
    </PageTemplate>
  );
};

export default About;
