
import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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
              <Button 
                size="lg" 
                className="btn-primary h-14 px-8 text-base bg-gradient-primary hover:shadow-glow transition-all duration-300 text-white"
                asChild
              >
                <Link to="/signup">Start Free Trial</Link>
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              No credit card required. 14-day free trial with full access to all features.
            </p>
          </div>
        </div>
        
        {/* Creative image added below the Start Free Trial section */}
        <div className="mt-16 mb-16 max-w-5xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-glow">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 mix-blend-overlay"></div>
            <div className="h-[400px] bg-white rounded-2xl p-6 flex items-center justify-center">
              <div className="relative w-full max-w-4xl">
                <div className="absolute -top-12 -left-12 w-24 h-24 bg-accent rounded-full animate-float opacity-80"></div>
                <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-secondary/30 rounded-full animate-float animation-delay-2000 opacity-70"></div>
                
                <div className="relative z-10 bg-white/80 backdrop-blur-10 rounded-2xl border border-accent/50 shadow-soft p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="col-span-1 flex flex-col items-center justify-center p-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2C5.58 2 2 5.58 2 10C2 14.42 5.58 18 10 18C14.42 18 18 14.42 18 10C18 5.58 14.42 2 10 2ZM10 16C6.69 16 4 13.31 4 10C4 6.69 6.69 4 10 4C13.31 4 16 6.69 16 10C16 13.31 13.31 16 10 16ZM11 6H9V11H14V9H11V6Z"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">Seamless Integration</h3>
                    <p className="text-center text-gray-600">Connect with 25+ platforms for a unified workflow</p>
                  </div>
                  
                  <div className="col-span-1 flex flex-col items-center justify-center p-4 border-y md:border-y-0 md:border-x border-accent/30">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6C13 7.65685 11.6569 9 10 9C8.34315 9 7 7.65685 7 6C7 4.34315 8.34315 3 10 3C11.6569 3 13 4.34315 13 6Z"></path>
                        <path d="M18 8C18 9.10457 17.1046 10 16 10C14.8954 10 14 9.10457 14 8C14 6.89543 14.8954 6 16 6C17.1046 6 18 6.89543 18 8Z"></path>
                        <path d="M14 15C14 12.7909 12.2091 11 10 11C7.79086 11 6 12.7909 6 15V18H14V15Z"></path>
                        <path d="M6 8C6 9.10457 5.10457 10 4 10C2.89543 10 2 9.10457 2 8C2 6.89543 2.89543 6 4 6C5.10457 6 6 6.89543 6 8Z"></path>
                        <path d="M16 18V15C16 13.9459 15.7282 12.9552 15.2507 12.0943C15.4902 12.0327 15.7413 12 16 12C17.6569 12 19 13.3431 19 15V18H16Z"></path>
                        <path d="M4.74926 12.0943C4.27185 12.9552 4 13.9459 4 15V18H1V15C1 13.3431 2.34315 12 4 12C4.25871 12 4.50977 12.0327 4.74926 12.0943Z"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">Team Collaboration</h3>
                    <p className="text-center text-gray-600">Manage all communications in a single workspace</p>
                  </div>
                  
                  <div className="col-span-1 flex flex-col items-center justify-center p-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4C3 3.44772 3.44772 3 4 3H16C16.5523 3 17 3.44772 17 4V6C17 6.55228 16.5523 7 16 7H4C3.44772 7 3 6.55228 3 6V4ZM3 10C3 9.44772 3.44772 9 4 9H10C10.5523 9 11 9.44772 11 10V16C11 16.5523 10.5523 17 10 17H4C3.44772 17 3 16.5523 3 16V10ZM13 10C13 9.44772 13.4477 9 14 9H16C16.5523 9 17 9.44772 17 10V16C17 16.5523 16.5523 17 16 17H14C13.4477 17 13 16.5523 13 16V10Z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">Smart Automation</h3>
                    <p className="text-center text-gray-600">AI-powered workflows to save time and resources</p>
                  </div>
                </div>
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl max-h-64 -z-10 bg-gradient-radial opacity-40 blur-xl"></div>
              </div>
            </div>
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
