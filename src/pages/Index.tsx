
import React, { useEffect } from 'react';
import Navbar from '@/components/landing/Navbar';
import Hero from '@/components/landing/Hero';
import Companies from '@/components/landing/Companies';
import Features from '@/components/landing/Features';
import Testimonials from '@/components/landing/Testimonials';
import ProductShowcase from '@/components/landing/ProductShowcase';
import Cta from '@/components/landing/Cta';
import Footer from '@/components/landing/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scroll to section when hash changes
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Handle initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    // Cleanup
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Companies />
      <Features />
      <ProductShowcase />
      <Cta />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
