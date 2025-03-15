
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const heroElements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    heroElements?.forEach((el) => observer.observe(el));
    
    return () => {
      heroElements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const scrollToNextSection = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 overflow-hidden">
      <div className="absolute top-0 -right-40 w-96 h-96 bg-primary-500/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 -left-40 w-96 h-96 bg-primary-300/20 rounded-full filter blur-3xl"></div>
      
      <div className="max-container relative z-10 px-6 py-24 md:py-32 flex flex-col items-center text-center">
        <span className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent text-primary-900 mb-6">
          Revolutionizing Team Communication
        </span>
        
        <h1 className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200 text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl leading-tight tracking-tight">
          Quantum communications for the <span className="text-gradient">modern workspace</span>
        </h1>
        
        <p className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300 text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl">
          Simplify workflows, boost productivity, and enhance collaboration with our AI-powered platform that brings all your communication channels together.
        </p>
        
        <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-400 flex flex-col sm:flex-row gap-4 mb-16">
          <Button size="lg" className="btn-primary h-14 px-8 text-base">
            Start Free Trial
          </Button>
          <Button size="lg" variant="outline" className="btn-secondary h-14 px-8 text-base">
            Book a Demo
          </Button>
        </div>
        
        <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-500 mt-8 relative">
          <div className="px-6 py-8 glass-card max-w-5xl mx-auto">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-accent/50 shadow-soft">
              <div className="absolute inset-0 bg-primary-900/5 backdrop-blur-sm flex items-center justify-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/90 shadow-md cursor-pointer hover:scale-105 transition-transform duration-300">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-primary-900 border-b-8 border-b-transparent ml-1"></div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent"></div>
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="QuantumQuirk Platform" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white/80 rounded-full p-3 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-1 animate-bounce"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-6 h-6 text-primary" />
      </button>
    </div>
  );
};

export default Hero;
