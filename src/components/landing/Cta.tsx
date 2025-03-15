
import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Cta = () => {
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'scale-100');
            entry.target.classList.remove('opacity-0', 'scale-95');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  return (
    <section id="pricing" className="section-padding bg-accent/30">
      <div 
        ref={ctaRef} 
        className="max-container opacity-0 scale-95 transition-all duration-700"
      >
        <div className="bg-gradient-primary rounded-3xl overflow-hidden p-1">
          <div className="bg-white rounded-3xl px-6 py-16 md:p-16 text-center">
            <span className="inline-block px-3 py-1 bg-accent text-primary-900 text-sm font-medium rounded-full mb-6">
              Get Started Today
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to transform your team's <span className="text-gradient">communication</span>?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join thousands of forward-thinking companies that have already made the quantum leap to better team collaboration.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
              <Button size="lg" className="btn-primary h-14 px-8 text-base">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="btn-secondary h-14 px-8 text-base">
                Schedule a Demo
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              No credit card required. 14-day free trial with full access to all features.
            </p>
          </div>
        </div>
        
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 text-center hover-card">
            <div className="text-4xl font-bold mb-2 text-primary">98%</div>
            <p className="text-muted-foreground">Customer satisfaction rating</p>
          </div>
          
          <div className="glass-card p-8 text-center hover-card">
            <div className="text-4xl font-bold mb-2 text-primary">40%</div>
            <p className="text-muted-foreground">Average productivity increase</p>
          </div>
          
          <div className="glass-card p-8 text-center hover-card">
            <div className="text-4xl font-bold mb-2 text-primary">25+</div>
            <p className="text-muted-foreground">Integrated platforms & tools</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
