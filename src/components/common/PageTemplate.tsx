
import React from 'react';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import { useIsMobile } from '@/hooks/use-mobile';

interface PageTemplateProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

const PageTemplate = ({ children, title, subtitle }: PageTemplateProps) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-[100px] md:pt-[140px]">
        <div className="max-container px-4 md:px-6 py-8 md:py-16">
          <div className="text-center mb-8 md:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6">{title}</h1>
            {subtitle && (
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                {subtitle}
              </p>
            )}
          </div>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PageTemplate;
