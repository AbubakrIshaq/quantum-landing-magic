
import React, { useEffect, useRef } from 'react';
import { MessageSquare, Users, BarChart, Zap, Globe, Shield } from 'lucide-react';

const features = [
  {
    icon: <MessageSquare className="w-10 h-10 text-primary" />,
    title: 'Unified Messaging',
    description: 'Connect all your communication channels in one powerful dashboard.',
  },
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: 'Team Collaboration',
    description: 'Enhance teamwork with shared spaces, file sharing, and real-time editing.',
  },
  {
    icon: <BarChart className="w-10 h-10 text-primary" />,
    title: 'Advanced Analytics',
    description: 'Gain insights with detailed communication metrics and performance data.',
  },
  {
    icon: <Zap className="w-10 h-10 text-primary" />,
    title: 'AI Automation',
    description: 'Save time with smart automated workflows and intelligent responses.',
  },
  {
    icon: <Globe className="w-10 h-10 text-primary" />,
    title: 'Global Connectivity',
    description: 'Communicate seamlessly across borders with multi-language support.',
  },
  {
    icon: <Shield className="w-10 h-10 text-primary" />,
    title: 'Enterprise Security',
    description: 'Keep your data protected with end-to-end encryption and compliance tools.',
  },
];

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.feature-item');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('opacity-100', 'translate-y-0');
                el.classList.remove('opacity-0', 'translate-y-10');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);

  return (
    <section id="features" className="section-padding bg-accent/50" ref={featuresRef}>
      <div className="max-container">
        <div className="text-center mb-20">
          <span className="inline-block px-3 py-1 bg-primary text-white text-sm font-medium rounded-full mb-4">
            Features
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Everything you need in one <span className="text-gradient">quantum leap</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Our platform brings all your team's communication, tasks, and tools together in one place, 
            enabling seamless collaboration regardless of location.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-item opacity-0 translate-y-10 transition-all duration-500 glass-card hover-card p-8 flex flex-col items-start"
            >
              <div className="mb-5 rounded-full bg-accent p-3 inline-flex">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
