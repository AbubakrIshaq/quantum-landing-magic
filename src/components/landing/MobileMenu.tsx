
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;
  
  return (
    <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg p-5 border-t border-gray-100 animate-fade-in z-50">
      <ul className="flex flex-col space-y-4">
        <li className="border-b border-gray-100 pb-2">
          <button 
            className="flex items-center justify-between w-full text-left font-medium text-foreground"
          >
            Products
            <ChevronDown className="h-4 w-4" />
          </button>
        </li>
        <li className="border-b border-gray-100 pb-2">
          <button 
            className="flex items-center justify-between w-full text-left font-medium text-foreground"
          >
            Industry
            <ChevronDown className="h-4 w-4" />
          </button>
        </li>
        <li className="border-b border-gray-100 pb-2">
          <button 
            className="flex items-center justify-between w-full text-left font-medium text-foreground"
          >
            Resources
            <ChevronDown className="h-4 w-4" />
          </button>
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
      </ul>
      <div className="mt-6 flex flex-col space-y-3">
        <Button 
          variant="outline"
          className="w-full justify-center hover:bg-accent/10 transition-all duration-300 border-primary text-primary"
          asChild
        >
          <Link to="/book-demo">Book a Demo</Link>
        </Button>
        <Button 
          className="w-full justify-center bg-gradient-primary hover:shadow-glow transition-all duration-300 text-white"
          asChild
        >
          <Link to="/signup">Start for Free</Link>
        </Button>
      </div>
    </div>
  );
};

export default MobileMenu;
