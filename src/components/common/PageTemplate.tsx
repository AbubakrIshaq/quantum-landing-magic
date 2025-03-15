
import React from 'react';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';

interface PageTemplateProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

const PageTemplate = ({ children, title, subtitle }: PageTemplateProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-36"> {/* Adjusted top padding for both navbars */}
        <div className="max-container px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{title}</h1>
            {subtitle && (
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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
