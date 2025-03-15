
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-accent">
      <div className="max-container px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <a href="/" className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent inline-block">
                SocialFlow
              </a>
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
              {['Features', 'Solutions', 'Integrations', 'Enterprise', 'Security', 'Pricing'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              {['Documentation', 'API Reference', 'Guides', 'Case Studies', 'Community', 'Webinars'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {['About', 'Blog', 'Careers', 'Press', 'Contact', 'Partners'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-accent pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SocialFlow. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
