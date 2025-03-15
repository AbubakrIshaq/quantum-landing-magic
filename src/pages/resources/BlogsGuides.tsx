
import React from 'react';
import PageTemplate from '@/components/common/PageTemplate';

const BlogsGuides = () => {
  return (
    <PageTemplate 
      title="Blogs & Guides" 
      subtitle="Explore our collection of articles and buying guides to help you make the most of SocialFlow."
    >
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="border border-accent rounded-lg overflow-hidden group">
              <div className="bg-gray-100 h-48 flex items-center justify-center">
                <p className="text-gray-500">Featured image</p>
              </div>
              <div className="p-6">
                <p className="text-sm text-primary mb-2">Category</p>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">How to Maximize Your WhatsApp Business Strategy</h3>
                <p className="text-muted-foreground mb-4">Learn the best practices for engaging with customers using WhatsApp Business API.</p>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-200 mr-3"></div>
                  <div>
                    <p className="text-sm font-medium">Author Name</p>
                    <p className="text-xs text-muted-foreground">May 15, 2023 • 5 min read</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Latest Guides</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="flex gap-6 border border-accent rounded-lg p-6 hover:bg-accent/10 transition-colors">
              <div className="w-24 h-24 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
                <p className="text-gray-500">Icon</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Setting Up Your First WhatsApp Campaign</h3>
                <p className="text-muted-foreground mb-3">A step-by-step guide to creating effective WhatsApp marketing campaigns.</p>
                <a href="#" className="text-primary font-medium hover:underline">Read guide →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-accent/20 rounded-xl p-8 md:p-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Subscribe to our newsletter</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Get the latest articles, guides, and industry insights delivered straight to your inbox.</p>
        </div>
        <div className="max-w-md mx-auto">
          <div className="flex gap-3">
            <input type="email" placeholder="Your email address" className="flex-grow px-4 py-2 rounded-md border border-accent focus:outline-none focus:ring-2 focus:ring-primary" />
            <button className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">Subscribe</button>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default BlogsGuides;
