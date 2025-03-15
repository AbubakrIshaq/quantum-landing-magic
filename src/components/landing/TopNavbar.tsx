
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuList, 
  NavigationMenuTrigger 
} from "@/components/ui/navigation-menu";
import { useIsMobile } from '@/hooks/use-mobile';

const TopNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hide TopNavbar on mobile devices
  if (isMobile) {
    return null;
  }

  return (
    <div className={`w-full py-2 transition-all duration-300 relative z-[999] ${
      isScrolled ? 'bg-white' : 'bg-transparent'
    }`}>
      <div className="max-container px-6 flex justify-end items-center text-xs">
        <NavigationMenu className="flex">
          <NavigationMenuList className="flex space-x-6">
            {/* Company Link */}
            <li className="flex items-center">
              <Link 
                to="/company/about" 
                className={`text-xs ${
                  isScrolled 
                    ? 'text-foreground opacity-80 hover:opacity-100' 
                    : 'text-foreground opacity-80 hover:opacity-100'
                }`}
              >
                Company
              </Link>
            </li>
            
            {/* Partnerships Link */}
            <li className="flex items-center">
              <Link 
                to="/partnerships/reseller" 
                className={`text-xs ${
                  isScrolled 
                    ? 'text-foreground opacity-80 hover:opacity-100' 
                    : 'text-foreground opacity-80 hover:opacity-100'
                }`}
              >
                Partnerships
              </Link>
            </li>
            
            {/* Contact Us Link */}
            <li className="flex items-center">
              <Link 
                to="/contact-us" 
                className={`text-xs ${
                  isScrolled 
                    ? 'text-foreground opacity-80 hover:opacity-100' 
                    : 'text-foreground opacity-80 hover:opacity-100'
                }`}
              >
                Contact Us
              </Link>
            </li>
            
            {/* Login Link */}
            <li className="flex items-center ml-6">
              <Link 
                to="/login" 
                className={`text-xs font-medium ${
                  isScrolled 
                    ? 'text-foreground opacity-80 hover:opacity-100' 
                    : 'text-foreground opacity-80 hover:opacity-100'
                }`}
              >
                Login
              </Link>
            </li>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default TopNavbar;
