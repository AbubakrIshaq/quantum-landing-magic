
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger 
} from "@/components/ui/navigation-menu";
import { ChevronDown } from 'lucide-react';

const TopNavbar = () => {
  return (
    <div className="w-full bg-white border-b border-gray-100">
      <div className="max-container px-6 py-1 flex justify-end items-center text-xs">
        <NavigationMenu className="flex">
          <NavigationMenuList className="flex space-x-4">
            {/* Company Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-xs py-1 h-auto bg-transparent">
                Company <ChevronDown className="h-3 w-3 ml-1" />
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white rounded-lg shadow-lg border min-w-[200px]">
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
              <NavigationMenuTrigger className="text-xs py-1 h-auto bg-transparent">
                Partnerships <ChevronDown className="h-3 w-3 ml-1" />
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white rounded-lg shadow-lg border min-w-[200px]">
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
              <Link to="/contact-us" className="text-xs text-foreground opacity-80 hover:opacity-100">
                Contact Us
              </Link>
            </li>
            
            {/* Login Link */}
            <li className="flex items-center ml-4">
              <Link 
                to="/login" 
                className="text-xs font-medium text-primary hover:underline"
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
