
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import AnimatedGradient from '../ui/AnimatedGradient';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ArrowRight } from 'lucide-react';

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

  return (
    <div ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-16 overflow-hidden bg-primary-50">
      <div className="absolute top-0 -right-40 w-96 h-96 bg-primary-500/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 -left-40 w-96 h-96 bg-primary-300/20 rounded-full filter blur-3xl"></div>
      
      <div className="max-container relative z-10 px-6 py-12 md:py-16 flex flex-col items-center text-center">
        <span className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent text-primary-900 mb-6">
          Revolutionizing Team Communication
        </span>
        
        <Carousel 
          className="w-full max-w-4xl animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200"
          autoplay={true}
          autoplayInterval={5000}
        >
          <CarouselContent>
            <CarouselItem>
              <div className="flex flex-col items-center">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
                  Boost Conversions with <span className="text-gradient">AI Revenue Agent</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl">
                  Empower your enterprise with AI that transforms customer interactions into lasting value.
                </p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex flex-col items-center">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
                  Quantum communications for the <span className="text-gradient">modern workspace</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl">
                  Simplify workflows, boost productivity, and enhance collaboration with our AI-powered platform.
                </p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="flex flex-col items-center">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
                  Unify your channels with <span className="text-gradient">centralized intelligence</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl">
                  One platform for all your messaging, email, and social media interactions — powered by AI.
                </p>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
        
        <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-400 flex flex-col sm:flex-row gap-4 mb-16">
          <Button size="lg" className="btn-primary h-14 px-8 text-base group" asChild>
            <Link to="/signup">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="btn-secondary h-14 px-8 text-base" asChild>
            <Link to="/socialflow-ai">Explore with SocialFlow AI</Link>
          </Button>
        </div>
        
        <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-500 mt-4 relative w-full max-w-6xl mx-auto">
          <AnimatedGradient className="rounded-3xl shadow-2xl overflow-hidden">
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-primary-900/5 to-primary-900/30"></div>
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="SocialFlow Platform Dashboard" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/90 shadow-md cursor-pointer hover:scale-105 transition-transform duration-300">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-primary-900 border-b-8 border-b-transparent ml-1"></div>
                  </div>
                  <p className="mt-4 text-white text-lg font-medium bg-primary-900/70 px-4 py-2 rounded-full">Watch how it works</p>
                </div>
              </div>
            </div>
          </AnimatedGradient>
        </div>
      </div>
    </div>
  );
};

export default Hero;
