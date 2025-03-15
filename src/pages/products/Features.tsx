
import React from 'react';
import PageTemplate from '@/components/common/PageTemplate';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <PageTemplate 
      title="SocialFlow Features" 
      subtitle="Discover the powerful features that make SocialFlow the ultimate communication platform"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {[
          {
            title: "Unified Inbox",
            description: "Bring all your communication channels into one streamlined inbox for maximum efficiency."
          },
          {
            title: "AI Assistant",
            description: "Let our AI help you draft responses, categorize messages, and provide insights."
          },
          {
            title: "Team Collaboration",
            description: "Work together seamlessly with shared inboxes, assignments, and real-time updates."
          },
          {
            title: "Analytics Dashboard",
            description: "Gain valuable insights into your team's communication patterns and performance."
          },
          {
            title: "Automation Workflows",
            description: "Create custom workflows to automate repetitive tasks and save time."
          },
          {
            title: "Custom Integrations",
            description: "Connect SocialFlow with your favorite tools and services for a seamless experience."
          }
        ].map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-soft border border-accent/20 hover-card">
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-muted-foreground mb-4">{feature.description}</p>
            <Button variant="link" className="text-primary p-0">
              Learn more →
            </Button>
          </div>
        ))}
      </div>

      <div className="bg-gradient-primary rounded-3xl overflow-hidden p-1 mb-16">
        <div className="bg-white rounded-3xl px-6 py-12 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to experience these features?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start your free trial today and see how SocialFlow can transform your team's communication.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-white"
              asChild
            >
              <Link to="/signup">Start Free Trial</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-accent/10"
              asChild
            >
              <Link to="/book-demo">Book a Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Features;
