import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import TopNavbar from './TopNavbar';

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
    <>
      <TopNavbar />
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-3 bg-white/90 backdrop-blur-lg shadow-md' 
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-container flex items-center justify-between px-6 lg:px-10">
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                SocialFlow<span className="text-indigo-500">✦</span>
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <NavigationMenu className="hidden md:block">
              <NavigationMenuList className="flex items-center space-x-8">
                {/* Products Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="relative font-medium text-sm text-foreground opacity-80 hover:opacity-100 transition-all duration-300 py-2 bg-transparent">
                    Products <ChevronDown className="h-4 w-4 ml-1" />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white p-4 rounded-lg shadow-lg border min-w-[500px]">
                    <div className="grid grid-cols-2 gap-4 p-4">
                      <Link to="/products/omnichannel-inbox" className="group flex gap-2 p-2 hover:bg-accent rounded-md">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">🔄</div>
                        <div>
                          <h3 className="font-medium">Omnichannel Inbox</h3>
                          <p className="text-sm text-muted-foreground">Centralize chats across channels</p>
                        </div>
                      </Link>
                      <Link to="/products/flow-builder" className="group flex gap-2 p-2 hover:bg-accent rounded-md">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">🔄</div>
                        <div>
                          <h3 className="font-medium">Flow Builder</h3>
                          <p className="text-sm text-muted-foreground">Automate messaging workflows</p>
                        </div>
                      </Link>
                      <Link to="/products/social-ai" className="group flex gap-2 p-2 hover:bg-accent rounded-md">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">🤖</div>
                        <div>
                          <h3 className="font-medium">SocialFlow AI</h3>
                          <p className="text-sm text-muted-foreground">Train your own AI revenue agent</p>
                        </div>
                      </Link>
                      <Link to="/products/ticketing-system" className="group flex gap-2 p-2 hover:bg-accent rounded-md">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">🎫</div>
                        <div>
                          <h3 className="font-medium">Ticketing System</h3>
                          <p className="text-sm text-muted-foreground">Track pre-sales inquiries</p>
                        </div>
                      </Link>
                      <Link to="/products/broadcast-campaigns" className="group flex gap-2 p-2 hover:bg-accent rounded-md">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">📢</div>
                        <div>
                          <h3 className="font-medium">Broadcast Campaigns</h3>
                          <p className="text-sm text-muted-foreground">Send personalized bulk messages</p>
                        </div>
                      </Link>
                      <Link to="/products/social-crm" className="group flex gap-2 p-2 hover:bg-accent rounded-md">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">👥</div>
                        <div>
                          <h3 className="font-medium">Social CRM</h3>
                          <p className="text-sm text-muted-foreground">Manage customer data</p>
                        </div>
                      </Link>
                      <Link to="/products/catalog-payment" className="group flex gap-2 p-2 hover:bg-accent rounded-md">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">🛒</div>
                        <div>
                          <h3 className="font-medium">Catalog & Payment Links</h3>
                          <p className="text-sm text-muted-foreground">Sell products and services in chats</p>
                        </div>
                      </Link>
                      <Link to="/products/channels-integrations" className="group flex gap-2 p-2 hover:bg-accent rounded-md">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">🔌</div>
                        <div>
                          <h3 className="font-medium">Channels & Integrations</h3>
                          <p className="text-sm text-muted-foreground">Connect your tech stack</p>
                        </div>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                {/* Industry Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="relative font-medium text-sm text-foreground opacity-80 hover:opacity-100 transition-all duration-300 py-2 bg-transparent">
                    Industry <ChevronDown className="h-4 w-4 ml-1" />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white p-4 rounded-lg shadow-lg border min-w-[500px]">
                    <div className="grid grid-cols-2 gap-4 p-4">
                      <Link to="/industry/education" className="group flex gap-2 p-2 hover:bg-accent rounded-md">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">📚</div>
                        <div>
                          <h3 className="font-medium">Education</h3>
                        </div>
                      </Link>
                      <Link to="/industry/travel" className="group flex gap-2 p-2 hover:bg-accent rounded-md">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">✈️</div>
                        <div>
                          <h3 className="font-medium">Travel</h3>
                        </div>
                      </Link>
                      <Link to="/industry/real-estate" className="group flex gap-2 p-2 hover:bg-accent rounded-md">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">🏢</div>
                        <div>
                          <h3 className="font-medium">Real Estate</h3>
                        </div>
                      </Link>
                      <Link to="/industry/ecommerce" className="group flex gap-2 p-2 hover:bg-accent rounded-md">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">🛍️</div>
                        <div>
                          <h3 className="font-medium">E-commerce</h3>
                        </div>
                      </Link>
                      <Link to="/industry/luxury-retail" className="group flex gap-2 p-2 hover:bg-accent rounded-md">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">👔</div>
                        <div>
                          <h3 className="font-medium">Luxury & Lifestyle Retail</h3>
                        </div>
                      </Link>
                      <Link to="/industry/beauty-wellness" className="group flex gap-2 p-2 hover:bg-accent rounded-md">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">💆</div>
                        <div>
                          <h3 className="font-medium">Beauty & Wellness Services</h3>
                        </div>
                      </Link>
                      <Link to="/industry/finance" className="group flex gap-2 p-2 hover:bg-accent rounded-md">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">💰</div>
                        <div>
                          <h3 className="font-medium">Finance</h3>
                        </div>
                      </Link>
                      <Link to="/industry/automotive" className="group flex gap-2 p-2 hover:bg-accent rounded-md">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">🚗</div>
                        <div>
                          <h3 className="font-medium">Automotive</h3>
                        </div>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                {/* Resources Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="relative font-medium text-sm text-foreground opacity-80 hover:opacity-100 transition-all duration-300 py-2 bg-transparent">
                    Resources <ChevronDown className="h-4 w-4 ml-1" />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white p-4 rounded-lg shadow-lg border min-w-[500px]">
                    <div className="grid grid-cols-2 gap-4 p-4">
                      <div className="col-span-2 mb-2">
                        <h2 className="text-lg font-bold text-blue-600">LEARNING</h2>
                      </div>
                      <Link to="/resources/blogs-guides" className="group flex gap-2 p-2 hover:bg-accent rounded-md">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">📝</div>
                        <div>
                          <h3 className="font-medium">Blogs & Guides</h3>
                          <p className="text-sm text-muted-foreground">Explore articles and buying guides</p>
                        </div>
                      </Link>
                      <Link to="/resources/ai-marketing-expert" className="group flex gap-2 p-2 hover:bg-accent rounded-md">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">🧠</div>
                        <div>
                          <h3 className="font-medium">AI Marketing Expert</h3>
                          <p className="text-sm text-muted-foreground">Get tailored WhatsApp marketing solutions</p>
                        </div>
                      </Link>
                      <Link to="/resources/digital-library" className="group flex gap-2 p-2 hover:bg-accent rounded-md">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">📚</div>
                        <div>
                          <h3 className="font-medium">Digital Resource Library</h3>
                          <p className="text-sm text-muted-foreground">Webinars, eBooks and videos to help you get started</p>
                        </div>
                      </Link>
                      <Link to="/resources/faq" className="group flex gap-2 p-2 hover:bg-accent rounded-md">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">❓</div>
                        <div>
                          <h3 className="font-medium">Frequently Asked Questions</h3>
                          <p className="text-sm text-muted-foreground">Get quick answers to common inquiries</p>
                        </div>
                      </Link>
                      <div className="col-span-2 my-2">
                        <h2 className="text-lg font-bold text-blue-600">TOOLS</h2>
                      </div>
                      <Link to="/resources/whatsapp-pricing" className="group flex gap-2 p-2 hover:bg-accent rounded-md">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">💰</div>
                        <div>
                          <h3 className="font-medium">WhatsApp Pricing Calculator</h3>
                          <p className="text-sm text-muted-foreground">Calculate WhatsApp messaging costs</p>
                        </div>
                      </Link>
                      <Link to="/resources/link-generator" className="group flex gap-2 p-2 hover:bg-accent rounded-md">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">🔗</div>
                        <div>
                          <h3 className="font-medium">WhatsApp Link Generator</h3>
                          <p className="text-sm text-muted-foreground">Chat without saving phone numbers</p>
                        </div>
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                {/* Regular Menu Items */}
                <li>
                  <a 
                    href="/customers"
                    className="relative font-medium text-sm text-foreground opacity-80 hover:opacity-100 transition-all duration-300 py-2"
                  >
                    Customers
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 hover:w-full"></span>
                  </a>
                </li>
                <li className="mr-6">
                  <a 
                    href="/pricing"
                    className="relative font-medium text-sm text-foreground opacity-80 hover:opacity-100 transition-all duration-300 py-2"
                  >
                    Pricing
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 hover:w-full"></span>
                  </a>
                </li>
              </NavigationMenuList>
            </NavigationMenu>
            
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline"
                className="hover:bg-accent/10 transition-all duration-300 border-primary text-primary"
                asChild
              >
                <Link to="/book-demo">Book a Demo</Link>
              </Button>
              <Button 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-white"
                asChild
              >
                <Link to="/signup">Start for Free</Link>
              </Button>
            </div>
          </div>

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
              <li className="border-b border-gray-100 pb-2">
                <button 
                  className="flex items-center justify-between w-full text-left font-medium text-foreground"
                  onClick={() => {}}
                >
                  Products
                  <ChevronDown className="h-4 w-4" />
                </button>
              </li>
              <li className="border-b border-gray-100 pb-2">
                <button 
                  className="flex items-center justify-between w-full text-left font-medium text-foreground"
                  onClick={() => {}}
                >
                  Industry
                  <ChevronDown className="h-4 w-4" />
                </button>
              </li>
              <li className="border-b border-gray-100 pb-2">
                <button 
                  className="flex items-center justify-between w-full text-left font-medium text-foreground"
                  onClick={() => {}}
                >
                  Resources
                  <ChevronDown className="h-4 w-4" />
                </button>
              </li>
              <li>
                <a 
                  href="/customers"
                  className="block font-medium text-foreground opacity-80 hover:opacity-100 transition-all duration-300 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Customers
                </a>
              </li>
              <li>
                <a 
                  href="/pricing"
                  className="block font-medium text-foreground opacity-80 hover:opacity-100 transition-all duration-300 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </a>
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
        )}
      </header>
    </>
  );
};

export default Navbar;
