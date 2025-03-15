
import React from 'react';
import PageTemplate from '@/components/common/PageTemplate';
import { Button } from '@/components/ui/button';

const Education = () => {
  return (
    <PageTemplate 
      title="SocialFlow for Education" 
      subtitle="Transform how educational institutions communicate with students, parents, and staff using our omnichannel platform."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold mb-6">Enhance education communication</h2>
          <p className="text-lg mb-6 text-muted-foreground">
            Educational institutions face unique challenges in communications. SocialFlow helps schools, colleges, and universities streamline their messaging across all channels.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-1">✓</div>
              <p>Connect with students on their preferred messaging platforms</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-1">✓</div>
              <p>Automate administrative communications</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-1">✓</div>
              <p>Send targeted announcements to specific groups</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary mt-1">✓</div>
              <p>Provide instant support for inquiries</p>
            </li>
          </ul>
          <Button size="lg" className="bg-gradient-primary text-white">Get Started</Button>
        </div>
        <div className="bg-gray-100 rounded-lg h-80 flex items-center justify-center">
          <p className="text-gray-500">Education image placeholder</p>
        </div>
      </div>
      
      <div className="bg-accent/20 rounded-xl p-8 md:p-12 mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Use cases for educational institutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Student Admissions</h3>
            <p className="text-muted-foreground mb-4">Streamline the application process with automated messaging and quick responses to applicant inquiries.</p>
            <Button variant="outline" className="w-full">Learn More</Button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Parent Communications</h3>
            <p className="text-muted-foreground mb-4">Keep parents informed with timely updates about school events, student progress, and important announcements.</p>
            <Button variant="outline" className="w-full">Learn More</Button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Campus Support</h3>
            <p className="text-muted-foreground mb-4">Provide instant assistance for technical issues, facility management, and administrative questions.</p>
            <Button variant="outline" className="w-full">Learn More</Button>
          </div>
        </div>
      </div>
      
      <div className="text-center mb-20">
        <h2 className="text-3xl font-bold mb-6">Trusted by leading educational institutions</h2>
        <div className="flex flex-wrap justify-center gap-12 opacity-60">
          <div className="text-2xl font-bold">University A</div>
          <div className="text-2xl font-bold">College B</div>
          <div className="text-2xl font-bold">Academy C</div>
          <div className="text-2xl font-bold">Institute D</div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Education;
