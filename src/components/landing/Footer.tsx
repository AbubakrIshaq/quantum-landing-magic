
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-accent">
      <div className="max-container px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Link to="/" className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent inline-block">
                SocialFlow
              </Link>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Revolutionizing team communication with AI-powered solutions that bring all your channels together in one social space.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="GitHub" className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products/features" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/products/solutions" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/products/integrations" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Integrations
                </Link>
              </li>
              <li>
                <Link to="/products/enterprise" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Enterprise
                </Link>
              </li>
              <li>
                <Link to="/products/security" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Security
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/resources/documentation" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/resources/api-reference" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  API Reference
                </Link>
              </li>
              <li>
                <Link to="/resources/guides" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Guides
                </Link>
              </li>
              <li>
                <Link to="/resources/case-studies" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/resources/community" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/resources/webinars" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Webinars
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/company/about" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/company/blog" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/company/careers" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/company/press" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Press
                </Link>
              </li>
              <li>
                <Link to="/book-demo" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/company/partners" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                  Partners
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-accent pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SocialFlow. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/legal/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link to="/legal/terms-of-service" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Terms of Service
            </Link>
            <Link to="/legal/cookie-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
