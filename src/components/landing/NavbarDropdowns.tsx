
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  NavigationMenuContent
} from "@/components/ui/navigation-menu";

export const ProductsDropdown = () => (
  <NavigationMenuContent className="bg-white p-4 rounded-lg shadow-lg border min-w-[500px] z-[1500]">
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
);

export const IndustryDropdown = () => (
  <NavigationMenuContent className="bg-white p-4 rounded-lg shadow-lg border min-w-[500px] z-[1500]">
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
);

export const ResourcesDropdown = () => (
  <NavigationMenuContent className="bg-white p-4 rounded-lg shadow-lg border min-w-[500px] z-[1500]">
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
);
