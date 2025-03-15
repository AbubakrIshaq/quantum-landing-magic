
import React, { useEffect, useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const companyLogos = [
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" },
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" },
  { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png" },
  { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png" },
  { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" },
  { name: "Tesla", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/2560px-Tesla_Motors.svg.png" },
  { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png" }
];

const Companies = () => {
  const companiesRef = useRef<HTMLDivElement>(null);

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
    
    if (companiesRef.current) {
      observer.observe(companiesRef.current);
    }
    
    return () => {
      if (companiesRef.current) {
        observer.unobserve(companiesRef.current);
      }
    };
  }, []);

  return (
    <section id="companies" className="py-20 bg-white">
      <div 
        ref={companiesRef}
        className="max-container px-6 opacity-0 translate-y-10 transition-all duration-700"
      >
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-foreground">
            AI-powered omnichannel conversation solution <br className="hidden md:block" />
            <span className="text-gradient">trusted by top enterprises</span>
          </h2>
        </div>

        <div className="mx-auto max-w-6xl">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {companyLogos.map((company, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="p-6 h-24 flex items-center justify-center rounded-lg hover:shadow-md transition-all duration-300">
                    <img 
                      src={company.logo} 
                      alt={`${company.name} logo`} 
                      className="max-h-12 max-w-full grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex items-center justify-end gap-2 mt-8">
              <CarouselPrevious className="relative static left-0 right-auto" />
              <CarouselNext className="relative static right-0 left-auto" />
            </div>
          </Carousel>
        </div>

        <div className="mt-16 max-w-4xl mx-auto text-center">
          <p className="text-lg text-muted-foreground">
            Join thousands of innovative businesses using QuantumQuirk to streamline their communication and boost productivity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Companies;
