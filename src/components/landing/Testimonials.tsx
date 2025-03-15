
import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "QuantumQuirk has transformed how our team communicates. We've seen a 40% increase in response rates and significantly faster resolution times.",
    author: "Sarah Johnson",
    role: "VP of Operations, TechGlobal",
    avatar: "https://randomuser.me/api/portraits/women/58.jpg",
  },
  {
    quote: "The seamless integration between channels has eliminated the communication gaps we used to struggle with. Our productivity has improved dramatically.",
    author: "David Chen",
    role: "CTO, InnovateX",
    avatar: "https://randomuser.me/api/portraits/men/42.jpg",
  },
  {
    quote: "As a remote-first company, QuantumQuirk has been essential for keeping our global team connected. The AI features save us countless hours every week.",
    author: "Emily Rodriguez",
    role: "Head of Product, RemoteWorks",
    avatar: "https://randomuser.me/api/portraits/women/29.jpg",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleMouseLeave = () => {
    intervalRef.current = setInterval(() => {
      nextTestimonial();
    }, 8000);
  };

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

    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }

    return () => {
      if (testimonialsRef.current) {
        observer.unobserve(testimonialsRef.current);
      }
    };
  }, []);

  return (
    <section className="section-padding bg-white">
      <div 
        ref={testimonialsRef} 
        className="max-container opacity-0 translate-y-10 transition-all duration-700"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-accent text-primary-900 text-sm font-medium rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Trusted by innovative teams
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            See how QuantumQuirk is transforming communication for organizations worldwide.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="transition-all duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              <div className="flex">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-gradient-to-br from-primary-50 to-accent p-1 rounded-2xl shadow-soft">
                      <div className="bg-white rounded-2xl p-8 md:p-12">
                        <Quote className="w-12 h-12 text-secondary opacity-30 mb-6" />
                        <p className="text-lg md:text-xl mb-8 text-foreground italic">
                          "{testimonial.quote}"
                        </p>
                        <div className="flex items-center">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.author} 
                            className="w-14 h-14 rounded-full mr-4 border-2 border-accent"
                          />
                          <div>
                            <h4 className="font-semibold text-foreground">{testimonial.author}</h4>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-10 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-primary w-8' 
                    : 'bg-primary/30'
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:left-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:right-4 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-20 flex flex-wrap justify-center gap-x-16 gap-y-8">
          {['TechGlobal', 'InnovateX', 'RemoteWorks', 'DigitalFlow', 'FutureScale', 'NextWave'].map((company) => (
            <div key={company} className="text-xl md:text-2xl font-bold text-muted-foreground opacity-50 hover:opacity-100 transition-opacity duration-300">
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
