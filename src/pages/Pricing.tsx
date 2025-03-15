
import React, { useState } from 'react';
import PageTemplate from '@/components/common/PageTemplate';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const PricingToggle = ({ isAnnual, setIsAnnual }: { isAnnual: boolean; setIsAnnual: React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
    <div className="flex items-center justify-center space-x-3 mb-12">
      <span className={cn("text-sm font-medium", !isAnnual ? "text-primary" : "text-muted-foreground")}>Monthly</span>
      <button
        onClick={() => setIsAnnual(!isAnnual)}
        className="relative rounded-full w-14 h-7 bg-primary/20 flex items-center transition-colors duration-300"
      >
        <span 
          className={cn(
            "absolute left-1 bg-primary w-5 h-5 rounded-full transition-transform duration-300", 
            isAnnual && "transform translate-x-7"
          )}
        ></span>
      </button>
      <div className="flex items-center">
        <span className={cn("text-sm font-medium", isAnnual ? "text-primary" : "text-muted-foreground")}>Annual</span>
        <span className="ml-2 text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">Save 20%</span>
      </div>
    </div>
  );
};

const PricingCard = ({ 
  title, 
  price, 
  isAnnual, 
  description, 
  features, 
  isPopular = false,
  buttonText = "Get Started",
  buttonVariant = "default"
}: { 
  title: string; 
  price: { monthly: string; annual: string };
  isAnnual: boolean;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText?: string;
  buttonVariant?: "default" | "outline" | "secondary"
}) => {
  return (
    <div className={cn(
      "relative bg-white rounded-2xl shadow-soft p-8 border border-accent/30 transition-all duration-300",
      isPopular && "transform scale-105 shadow-glow border-primary/50 z-10"
    )}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white text-sm py-1 px-4 rounded-full">
          Most Popular
        </div>
      )}
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="mb-6">
        <div className="flex items-end">
          <span className="text-4xl font-bold">{isAnnual ? price.annual : price.monthly}</span>
          <span className="text-muted-foreground ml-2">/month</span>
        </div>
        {isAnnual && <p className="text-sm text-muted-foreground">Billed annually</p>}
      </div>
      <p className="text-muted-foreground mb-8">{description}</p>
      <Button 
        className={cn(
          "w-full mb-8",
          buttonVariant === "default" && "bg-gradient-primary hover:shadow-glow text-white",
          buttonVariant === "outline" && "bg-white border-primary text-primary hover:bg-accent/10",
          buttonVariant === "secondary" && "bg-secondary text-white hover:bg-secondary/90"
        )}
        asChild
      >
        <Link to="/signup">{buttonText}</Link>
      </Button>
      <div className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
              <Check className="w-3 h-3 text-primary" />
            </div>
            <span className="text-sm">{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <PageTemplate 
      title="Pricing Plans" 
      subtitle="Choose the perfect plan for your business needs"
    >
      <PricingToggle isAnnual={isAnnual} setIsAnnual={setIsAnnual} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        <PricingCard
          title="Starter"
          price={{ monthly: "$29", annual: "$23" }}
          isAnnual={isAnnual}
          description="Perfect for small businesses and individuals just getting started."
          features={[
            "Up to 3 social media accounts",
            "Basic content creation AI",
            "Weekly performance reports",
            "5 scheduled posts per day",
            "Basic analytics dashboard",
            "Email support"
          ]}
          buttonVariant="outline"
        />

        <PricingCard
          title="Professional"
          price={{ monthly: "$79", annual: "$63" }}
          isAnnual={isAnnual}
          description="Ideal for growing businesses with active social presence."
          features={[
            "Up to 10 social media accounts",
            "Advanced AI content creation",
            "Daily performance reports",
            "25 scheduled posts per day",
            "Full analytics dashboard",
            "Competitor analysis",
            "Priority email support",
            "1-on-1 onboarding call"
          ]}
          isPopular={true}
        />

        <PricingCard
          title="Enterprise"
          price={{ monthly: "$199", annual: "$159" }}
          isAnnual={isAnnual}
          description="Complete solution for agencies and large businesses."
          features={[
            "Unlimited social media accounts",
            "Premium AI content creation",
            "Real-time performance analytics",
            "Unlimited scheduled posts",
            "Advanced analytics dashboard",
            "Comprehensive competitor analysis",
            "24/7 priority support",
            "Dedicated account manager",
            "Custom integrations",
            "White-labeling options"
          ]}
          buttonVariant="secondary"
          buttonText="Contact Sales"
        />
      </div>

      {/* FAQ Section */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-soft border border-accent/20">
            <h3 className="text-xl font-bold mb-3">Can I change my plan later?</h3>
            <p className="text-muted-foreground">Yes, you can upgrade or downgrade your plan at any time. When you upgrade, the new features will be immediately available. If you downgrade, the changes will take effect in your next billing cycle.</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-soft border border-accent/20">
            <h3 className="text-xl font-bold mb-3">Is there a free trial available?</h3>
            <p className="text-muted-foreground">Absolutely! We offer a 14-day free trial for all plans, with no credit card required. You can experience all the features of SocialFlow before making a commitment.</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-soft border border-accent/20">
            <h3 className="text-xl font-bold mb-3">How does the AI content generation work?</h3>
            <p className="text-muted-foreground">Our AI analyzes your brand voice, industry trends, and audience preferences to generate engaging content. You can edit and approve all AI-generated content before it goes live.</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-soft border border-accent/20">
            <h3 className="text-xl font-bold mb-3">Can I cancel my subscription anytime?</h3>
            <p className="text-muted-foreground">Yes, you can cancel your subscription at any time from your account settings. There are no long-term contracts or cancellation fees.</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-soft border border-accent/20">
            <h3 className="text-xl font-bold mb-3">What platforms does SocialFlow support?</h3>
            <p className="text-muted-foreground">SocialFlow integrates with all major social media platforms including Facebook, Instagram, Twitter, LinkedIn, TikTok, Pinterest, and YouTube.</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-soft border border-accent/20">
            <h3 className="text-xl font-bold mb-3">Do you offer enterprise solutions?</h3>
            <p className="text-muted-foreground">Yes, our Enterprise plan offers custom solutions for large organizations. Contact our sales team for personalized pricing and features tailored to your specific needs.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-primary rounded-3xl overflow-hidden p-1">
        <div className="bg-white rounded-3xl px-6 py-12 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Still have questions?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our team is here to help you find the perfect solution for your business needs.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-white"
            >
              Contact Sales
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-accent/10"
            >
              Book a Demo
            </Button>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Pricing;
