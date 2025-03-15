
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { ProductsDropdown, IndustryDropdown, ResourcesDropdown } from './NavbarDropdowns';

const DesktopMenu = () => {
  return <div className="hidden md:flex items-center space-x-4">
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList className="flex items-center space-x-8">
          {/* Products Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="relative font-medium text-sm text-foreground opacity-80 hover:opacity-100 transition-all duration-300 py-2 bg-transparent">
              Products
            </NavigationMenuTrigger>
            <ProductsDropdown />
          </NavigationMenuItem>
          
          {/* Industry Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="relative font-medium text-sm text-foreground opacity-80 hover:opacity-100 transition-all duration-300 py-2 bg-transparent">
              Industry
            </NavigationMenuTrigger>
            <IndustryDropdown />
          </NavigationMenuItem>
          
          {/* Resources Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="relative font-medium text-sm text-foreground opacity-80 hover:opacity-100 transition-all duration-300 py-2 bg-transparent">
              Resources
            </NavigationMenuTrigger>
            <ResourcesDropdown />
          </NavigationMenuItem>
          
          {/* Regular Menu Items */}
          <li className="mx-2">
            <a href="/customers" className="relative font-medium text-sm text-foreground opacity-80 hover:opacity-100 transition-all duration-300 py-2">
              Customers
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 hover:w-full"></span>
            </a>
          </li>
          <li className="mx-2">
            <a href="/pricing" className="relative font-medium text-sm text-foreground opacity-80 hover:opacity-100 transition-all duration-300 py-2 my-[5px]">
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 hover:w-full"></span>
            </a>
          </li>
        </NavigationMenuList>
      </NavigationMenu>
      
      <div className="flex items-center ml-6 space-x-6">
        <Button variant="outline" className="hover:bg-accent/10 transition-all duration-300 border-primary text-primary" asChild>
          <Link to="/book-demo">Book a Demo</Link>
        </Button>
        <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-white" asChild>
          <Link to="/signup">Start for Free</Link>
        </Button>
      </div>
    </div>;
};

export default DesktopMenu;
