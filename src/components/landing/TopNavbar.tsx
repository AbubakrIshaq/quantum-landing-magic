
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
import { ChevronDown } from 'lucide-react';

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
            {/* Company Dropdown */}
            <NavigationMenuItem className="flex items-center">
              <NavigationMenuTrigger className={`text-xs p-0 h-auto bg-transparent hover:bg-transparent text-foreground`}>
                Company
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white p-3 rounded-lg shadow-lg border z-[9999] absolute">
                <div className="flex flex-col space-y-2 min-w-[160px]">
                  <Link 
                    to="/company/about" 
                    className="text-sm px-2 py-1.5 hover:bg-accent rounded-md"
                  >
                    About Us
                  </Link>
                  <Link 
                    to="/company/careers" 
                    className="text-sm px-2 py-1.5 hover:bg-accent rounded-md"
                  >
                    Career
                  </Link>
                  <Link 
                    to="/company/newsroom" 
                    className="text-sm px-2 py-1.5 hover:bg-accent rounded-md"
                  >
                    Newsroom
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            {/* Partnerships Dropdown */}
            <NavigationMenuItem className="flex items-center">
              <NavigationMenuTrigger className={`text-xs p-0 h-auto bg-transparent hover:bg-transparent text-foreground`}>
                Partnerships
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white p-3 rounded-lg shadow-lg border z-[9999] absolute">
                <div className="flex flex-col space-y-2 min-w-[160px]">
                  <Link 
                    to="/partnerships/reseller" 
                    className="text-sm px-2 py-1.5 hover:bg-accent rounded-md"
                  >
                    Reseller Program
                  </Link>
                  <Link 
                    to="/partnerships/affiliate" 
                    className="text-sm px-2 py-1.5 hover:bg-accent rounded-md"
                  >
                    Affiliate Program
                  </Link>
                  <Link 
                    to="/partnerships/technology" 
                    className="text-sm px-2 py-1.5 hover:bg-accent rounded-md"
                  >
                    Technology Partners
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            {/* Contact Us Link */}
            <li className="flex items-center">
              <Link 
                to="/contact-us" 
                className="text-xs text-foreground"
              >
                Contact Us
              </Link>
            </li>
            
            {/* Login Link */}
            <li className="flex items-center ml-6">
              <Link 
                to="/login" 
                className="text-xs font-medium text-foreground"
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
