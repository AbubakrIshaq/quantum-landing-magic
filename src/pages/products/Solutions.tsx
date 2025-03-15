
import React from 'react';
import PageTemplate from '@/components/common/PageTemplate';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Solutions = () => {
  return (
    <PageTemplate 
      title="SocialFlow Solutions" 
      subtitle="Tailored solutions for businesses of all sizes and industries"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        {[
          {
            title: "For Customer Support Teams",
            description: "Deliver exceptional customer service across all channels with unified views, AI assistance, and powerful analytics.",
            link: "/solutions/customer-support"
          },
          {
            title: "For Marketing Teams",
            description: "Plan, create, and measure your marketing campaigns with advanced social media tools and analytics.",
            link: "/solutions/marketing"
          },
          {
            title: "For Sales Teams",
            description: "Convert leads faster with integrated communication, automated follow-ups, and performance tracking.",
            link: "/solutions/sales"
          },
          {
            title: "For Enterprise Organizations",
            description: "Scale your communication strategy across departments with custom workflows and enterprise-grade security.",
            link: "/products/enterprise"
          },
        ].map((solution, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-soft overflow-hidden border border-accent/20 hover-card">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
              <p className="text-muted-foreground mb-6">{solution.description}</p>
              <Button variant="link" className="text-primary p-0 flex items-center" asChild>
                <Link to={solution.link}>
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Industries We Serve</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "E-commerce", "Financial Services", "Healthcare", 
            "Education", "Real Estate", "Travel & Hospitality",
            "Tech & SaaS", "Retail", "Government"
          ].map((industry, index) => (
            <div key={index} className="bg-accent/50 rounded-xl p-6 text-center hover:bg-accent transition-colors duration-300">
              <h3 className="font-medium text-primary-900">{industry}</h3>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-primary rounded-3xl overflow-hidden p-1">
        <div className="bg-white rounded-3xl px-6 py-12 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Find the right solution for your business</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our experts will help you identify the perfect SocialFlow solution for your unique needs.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-white"
              asChild
            >
              <Link to="/book-demo">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Solutions;
