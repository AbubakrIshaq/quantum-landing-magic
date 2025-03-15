
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
            {/* Company Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className={`text-xs py-1 h-auto bg-transparent ${
                isScrolled 
                  ? 'text-foreground opacity-80 hover:opacity-100' 
                  : 'text-foreground opacity-80 hover:opacity-100'
              }`}>
                Company
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white rounded-lg shadow-lg border min-w-[200px] z-[1500]">
                <ul className="p-2">
                  <li>
                    <Link to="/company/about" className="block px-3 py-2 hover:bg-accent rounded-md">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/company/newsroom" className="block px-3 py-2 hover:bg-accent rounded-md">
                      Newsroom
                    </Link>
                  </li>
                  <li>
                    <Link to="/company/careers" className="block px-3 py-2 hover:bg-accent rounded-md">
                      Careers
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            {/* Partnerships Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className={`text-xs py-1 h-auto bg-transparent ${
                isScrolled 
                  ? 'text-foreground opacity-80 hover:opacity-100' 
                  : 'text-foreground opacity-80 hover:opacity-100'
              }`}>
                Partnerships
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white rounded-lg shadow-lg border min-w-[200px] z-[1500]">
                <ul className="p-2">
                  <li>
                    <Link to="/partnerships/reseller" className="block px-3 py-2 hover:bg-accent rounded-md">
                      Reseller Program
                    </Link>
                  </li>
                  <li>
                    <Link to="/partnerships/affiliate" className="block px-3 py-2 hover:bg-accent rounded-md">
                      Affiliate Program
                    </Link>
                  </li>
                  <li>
                    <Link to="/partnerships/integration" className="block px-3 py-2 hover:bg-accent rounded-md">
                      Integration Partners
                    </Link>
                  </li>
                  <li>
                    <Link to="/partnerships/technology" className="block px-3 py-2 hover:bg-accent rounded-md">
                      Technology Partners
                    </Link>
                  </li>
                  <li>
                    <Link to="/partnerships/agency" className="block px-3 py-2 hover:bg-accent rounded-md">
                      Agency Partners
                    </Link>
                  </li>
                  <li>
                    <Link to="/partnerships/ecosystem" className="block px-3 py-2 hover:bg-accent rounded-md">
                      Partner Ecosystem
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            {/* Contact Us Link */}
            <li className="flex items-center">
              <Link to="/contact-us" className={`text-xs ${
                isScrolled 
                  ? 'text-foreground opacity-80 hover:opacity-100' 
                  : 'text-foreground opacity-80 hover:opacity-100'
              }`}>
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
