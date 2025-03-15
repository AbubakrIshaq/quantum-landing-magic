
import React, { useRef, useEffect } from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AnimatedGradient from '../ui/AnimatedGradient';

const ProductShowcase = () => {
  const showcaseRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('opacity-100', 'translate-y-0', 'translate-x-0');
                el.classList.remove('opacity-0', 'translate-y-10', 'translate-x-10', '-translate-x-10');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (showcaseRef.current) {
      observer.observe(showcaseRef.current);
    }

    return () => {
      if (showcaseRef.current) {
        observer.unobserve(showcaseRef.current);
      }
    };
  }, []);
  
  return (
    <section id="solutions" className="section-padding bg-gradient-to-br from-accent to-white" ref={showcaseRef}>
      <div className="max-container">
        {/* Platform Overview */}
        <div className="mb-32 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 animate-on-scroll opacity-0 -translate-x-10 transition-all duration-700">
            <span className="inline-block px-3 py-1 bg-primary text-white text-sm font-medium rounded-full mb-4">
              Seamless Integration
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              All your channels in one <span className="text-gradient">quantum space</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              SocialFlow brings together emails, messages, social media, and customer 
              communication into a unified dashboard, eliminating the need to switch between apps.
            </p>
            
            <ul className="space-y-3 mb-8">
              {['Unified inbox for all platforms', 'Context-aware communication history', 'Seamless file sharing across channels', 'Real-time collaboration tools'].map((item) => (
                <li key={item} className="flex items-start">
                  <span className="mr-3 bg-primary-50 p-1 rounded-full">
                    <Check className="w-4 h-4 text-primary" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <Button className="btn-primary">
              Explore Integrations
            </Button>
          </div>
          
          <div className="md:w-1/2 animate-on-scroll opacity-0 translate-x-10 transition-all duration-700">
            <AnimatedGradient className="rounded-2xl p-1">
              <div className="relative rounded-2xl overflow-hidden border border-white/50 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1" 
                  alt="Unified Dashboard" 
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent"></div>
              </div>
            </AnimatedGradient>
          </div>
        </div>
        
        {/* AI Features */}
        <div className="mb-32 flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="md:w-1/2 animate-on-scroll opacity-0 translate-x-10 transition-all duration-700">
            <span className="inline-block px-3 py-1 bg-secondary text-white text-sm font-medium rounded-full mb-4">
              AI-Powered
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Work smarter with <span className="text-gradient">quantum intelligence</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our advanced AI analyzes communication patterns, automates routine tasks, 
              and provides actionable insights to enhance team productivity.
            </p>
            
            <ul className="space-y-3 mb-8">
              {['Smart message categorization', 'Automated response suggestions', 'Sentiment analysis for better engagement', 'Priority recognition and escalation'].map((item) => (
                <li key={item} className="flex items-start">
                  <span className="mr-3 bg-primary-50 p-1 rounded-full">
                    <Check className="w-4 h-4 text-primary" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <Button className="btn-primary">
              Discover AI Features
            </Button>
          </div>
          
          <div className="md:w-1/2 animate-on-scroll opacity-0 -translate-x-10 transition-all duration-700">
            <AnimatedGradient className="rounded-2xl p-1">
              <div className="relative rounded-2xl overflow-hidden border border-white/50 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  alt="AI Features" 
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent"></div>
              </div>
            </AnimatedGradient>
          </div>
        </div>
        
        {/* Analytics */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 animate-on-scroll opacity-0 -translate-x-10 transition-all duration-700">
            <span className="inline-block px-3 py-1 bg-accent text-primary-900 text-sm font-medium rounded-full mb-4">
              Powerful Analytics
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Gain insights with <span className="text-gradient">quantum analytics</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Track team performance, monitor communication metrics, and identify trends 
              to optimize your workflows and improve customer satisfaction.
            </p>
            
            <ul className="space-y-3 mb-8">
              {['Comprehensive communication metrics', 'Team performance dashboards', 'Customer engagement analytics', 'Trend identification and forecasting'].map((item) => (
                <li key={item} className="flex items-start">
                  <span className="mr-3 bg-primary-50 p-1 rounded-full">
                    <Check className="w-4 h-4 text-primary" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <Button className="btn-primary">
              Explore Analytics
            </Button>
          </div>
          
          <div className="md:w-1/2 animate-on-scroll opacity-0 translate-x-10 transition-all duration-700">
            <AnimatedGradient className="rounded-2xl p-1">
              <div className="relative rounded-2xl overflow-hidden border border-white/50 shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" 
                  alt="Analytics Dashboard" 
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent"></div>
              </div>
            </AnimatedGradient>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
