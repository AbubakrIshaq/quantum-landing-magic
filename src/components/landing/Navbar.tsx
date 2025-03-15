
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import TopNavbar from './TopNavbar';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when resizing from mobile to desktop
  useEffect(() => {
    if (!isMobile && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobile, isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-[990] flex flex-col">
      <TopNavbar />
      <header 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'py-2 md:py-3 bg-white/90 backdrop-blur-lg shadow-md' 
            : 'py-3 md:py-5 bg-transparent'
        }`}
      >
        <div className="max-container flex items-center justify-between px-4 md:px-6 lg:px-10">
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-2">
              <span className="text-xl md:text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                SocialFlow<span className="text-indigo-500">✦</span>
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <DesktopMenu />

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-1 focus:outline-none"
            onClick={toggleMobileMenu}
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
        <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
      </header>
    </div>
  );
};

export default Navbar;
