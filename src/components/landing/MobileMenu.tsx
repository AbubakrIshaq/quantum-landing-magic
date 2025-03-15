
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface DropdownState {
  products: boolean;
  industry: boolean;
  resources: boolean;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const [dropdownState, setDropdownState] = useState<DropdownState>({
    products: false,
    industry: false,
    resources: false
  });

  const toggleDropdown = (dropdown: keyof DropdownState) => {
    setDropdownState(prev => ({
      ...prev,
      [dropdown]: !prev[dropdown]
    }));
  };

  if (!isOpen) return null;
  
  return (
    <div className="md:hidden fixed top-[60px] left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg p-5 border-t border-gray-100 animate-fade-in z-50 max-h-[80vh] overflow-y-auto">
      <ul className="flex flex-col space-y-4">
        <li className="border-b border-gray-100 pb-2">
          <button 
            className="flex items-center justify-between w-full text-left font-medium text-foreground"
            onClick={() => toggleDropdown('products')}
          >
            Products
            {dropdownState.products ? 
              <ChevronUp className="h-4 w-4" /> : 
              <ChevronDown className="h-4 w-4" />
            }
          </button>
          {dropdownState.products && (
            <div className="mt-2 pl-4 flex flex-col space-y-2">
              <Link to="/products/omnichannel-inbox" className="text-sm text-foreground/80" onClick={onClose}>Omnichannel Inbox</Link>
              <Link to="/products/features" className="text-sm text-foreground/80" onClick={onClose}>Features</Link>
              <Link to="/products/solutions" className="text-sm text-foreground/80" onClick={onClose}>Solutions</Link>
              <Link to="/socialflow-ai" className="text-sm text-foreground/80" onClick={onClose}>SocialFlow AI</Link>
            </div>
          )}
        </li>
        <li className="border-b border-gray-100 pb-2">
          <button 
            className="flex items-center justify-between w-full text-left font-medium text-foreground"
            onClick={() => toggleDropdown('industry')}
          >
            Industry
            {dropdownState.industry ? 
              <ChevronUp className="h-4 w-4" /> : 
              <ChevronDown className="h-4 w-4" />
            }
          </button>
          {dropdownState.industry && (
            <div className="mt-2 pl-4 flex flex-col space-y-2">
              <Link to="/industry/education" className="text-sm text-foreground/80" onClick={onClose}>Education</Link>
              <Link to="/industry/education" className="text-sm text-foreground/80" onClick={onClose}>Healthcare</Link>
              <Link to="/industry/education" className="text-sm text-foreground/80" onClick={onClose}>E-commerce</Link>
            </div>
          )}
        </li>
        <li className="border-b border-gray-100 pb-2">
          <button 
            className="flex items-center justify-between w-full text-left font-medium text-foreground"
            onClick={() => toggleDropdown('resources')}
          >
            Resources
            {dropdownState.resources ? 
              <ChevronUp className="h-4 w-4" /> : 
              <ChevronDown className="h-4 w-4" />
            }
          </button>
          {dropdownState.resources && (
            <div className="mt-2 pl-4 flex flex-col space-y-2">
              <Link to="/resources/blogs-guides" className="text-sm text-foreground/80" onClick={onClose}>Blogs & Guides</Link>
              <Link to="/resources/blogs-guides" className="text-sm text-foreground/80" onClick={onClose}>Webinars</Link>
              <Link to="/resources/blogs-guides" className="text-sm text-foreground/80" onClick={onClose}>Case Studies</Link>
            </div>
          )}
        </li>
        <li>
          <Link 
            to="/customers"
            className="block font-medium text-foreground opacity-80 hover:opacity-100 transition-all duration-300 py-2"
            onClick={onClose}
          >
            Customers
          </Link>
        </li>
        <li>
          <Link 
            to="/pricing"
            className="block font-medium text-foreground opacity-80 hover:opacity-100 transition-all duration-300 py-2"
            onClick={onClose}
          >
            Pricing
          </Link>
        </li>
        <li>
          <Link 
            to="/contact-us"
            className="block font-medium text-foreground opacity-80 hover:opacity-100 transition-all duration-300 py-2"
            onClick={onClose}
          >
            Contact Us
          </Link>
        </li>
        <li>
          <Link 
            to="/login"
            className="block font-medium text-foreground opacity-80 hover:opacity-100 transition-all duration-300 py-2"
            onClick={onClose}
          >
            Login
          </Link>
        </li>
      </ul>
      <div className="mt-6 flex flex-col space-y-3">
        <Button 
          variant="outline"
          className="w-full justify-center hover:bg-accent/10 transition-all duration-300 border-primary text-primary"
          asChild
        >
          <Link to="/book-demo" onClick={onClose}>Book a Demo</Link>
        </Button>
        <Button 
          className="w-full justify-center bg-gradient-primary hover:shadow-glow transition-all duration-300 text-white"
          asChild
        >
          <Link to="/signup" onClick={onClose}>Start for Free</Link>
        </Button>
      </div>
    </div>
  );
};

export default MobileMenu;
