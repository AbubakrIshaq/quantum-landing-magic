
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white/80 backdrop-blur-lg shadow-md' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-container flex items-center justify-between px-6 lg:px-10">
        <div className="flex items-center">
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-pulse-slow">
              QuantumQuirk
            </span>
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-1">
          <ul className="flex items-center space-x-8">
            {['Products', 'Industry', 'Resources', 'Customers', 'Pricing'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  className="relative font-medium text-sm text-foreground opacity-80 hover:opacity-100 transition-all duration-300 py-2"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
          <div className="ml-8 flex items-center space-x-4">
            <Button 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-white"
            >
              Get Started
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg p-5 border-t border-gray-100 animate-fade-in">
          <ul className="flex flex-col space-y-4">
            {['Products', 'Industry', 'Resources', 'Customers', 'Pricing'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  className="block font-medium text-foreground opacity-80 hover:opacity-100 transition-all duration-300 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col space-y-3">
            <Button 
              className="w-full justify-center bg-gradient-primary hover:shadow-glow transition-all duration-300 text-white"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
