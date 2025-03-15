import React, { useEffect, useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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

const channels = [
  {
    id: "marketing",
    title: "Marketing",
    icon: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    points: [
      "Capture leads and first-party data through click-to-chat links, ads, QR codes, website widgets",
      "Automate marketing campaigns to guide customers from discovery to purchase and foster loyalty",
      "Send retargeting messages at the perfect time with precise segmentation and personalization flows"
    ]
  },
  {
    id: "sales",
    title: "Sales",
    icon: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    points: [
      "Automate lead qualification and routing based on deal size, industry and offline touchpoints",
      "Recommend products using an in-chat catalog and close sales instantly with payment links",
      "Schedule drip campaigns to engage customers, send abandoned cart reminders, and deliver timely offers"
    ]
  },
  {
    id: "support",
    title: "Support",
    icon: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    points: [
      "Create AI chatbots to guide customers through self-service options and collect context for escalation",
      "Auto-route chats to agents, maximizing support efficiency through team collaboration tools",
      "Automate orders, shipping, and survey messages through e-commerce, CRM and API triggers"
    ]
  }
];

const Companies = () => {
  const companiesRef = useRef<HTMLDivElement>(null);
  const channelsRef = useRef<HTMLDivElement>(null);
  const [activeChannel, setActiveChannel] = React.useState("marketing");

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

    if (channelsRef.current) {
      observer.observe(channelsRef.current);
    }
    
    return () => {
      if (companiesRef.current) {
        observer.unobserve(companiesRef.current);
      }
      if (channelsRef.current) {
        observer.unobserve(channelsRef.current);
      }
    };
  }, []);

  return (
    <>
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
                dragFree: true,
              }}
              className="w-full"
              autoplay={true}
            >
              <CarouselContent className="-ml-2 md:-ml-4 animate-carousel">
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
            </Carousel>
          </div>

          <div className="mt-16 max-w-4xl mx-auto text-center">
            <p className="text-lg text-muted-foreground">
              Join thousands of innovative businesses using SocialFlow to streamline their communication and boost productivity.
            </p>
          </div>
        </div>
      </section>

      <section id="channels" className="py-20 bg-accent/30">
        <div 
          ref={channelsRef}
          className="max-container px-6 opacity-0 translate-y-10 transition-all duration-700"
        >
          <div className="text-center mb-16">
            <h3 className="text-lg md:text-xl uppercase font-semibold tracking-wide text-primary-600 mb-4">
              MERGE MULTIPLE CHANNELS INTO ONE PLATFORM
            </h3>
            <h1 className="text-3xl md:text-5xl font-bold mb-12 text-foreground">
              Engage customers your way with an <br className="hidden md:block" />
              <span className="text-gradient">AI-powered omnichannel platform</span>
            </h1>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center gap-4 md:gap-8 flex-wrap md:flex-nowrap mb-12">
              {channels.map((channel) => (
                <button
                  key={channel.id}
                  onClick={() => setActiveChannel(channel.id)}
                  className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                    activeChannel === channel.id
                      ? "bg-primary text-white shadow-md"
                      : "bg-white hover:bg-gray-100 text-gray-700"
                  }`}
                >
                  {channel.title}
                </button>
              ))}
            </div>

            <div className="bg-white rounded-xl shadow-soft p-8 md:p-12">
              {channels.map((channel) => (
                <div 
                  key={channel.id} 
                  className={`transition-all duration-500 ${
                    activeChannel === channel.id ? "block animate-fade-in" : "hidden"
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="mb-8 flex items-center">
                        <div className="w-12 h-12 mr-4 flex items-center justify-center bg-accent rounded-full p-2">
                          <img 
                            src={channel.icon} 
                            alt={`${channel.title} icon`} 
                            className="h-8 w-8 object-cover"
                          />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-primary">{channel.title}</h2>
                      </div>
                      
                      <ul className="space-y-6">
                        {channel.points.map((point, index) => (
                          <li key={index} className="flex">
                            <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center mr-4 mt-1">
                              <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <p className="text-gray-700">{point}</p>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-8">
                        <Button className="bg-primary hover:bg-primary-800 text-white flex items-center gap-2">
                          Learn More <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="relative rounded-xl overflow-hidden shadow-md h-[400px] bg-gradient-to-br from-accent to-white">
                      <img
                        src={channel.icon}
                        alt={`${channel.title} illustration`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Companies;
