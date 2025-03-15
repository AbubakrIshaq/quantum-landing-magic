
import React from 'react';
import PageTemplate from '@/components/common/PageTemplate';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SocialFlowAI = () => {
  return (
    <PageTemplate 
      title="SocialFlow AI" 
      subtitle="Revolutionize your social media strategy with our powerful AI assistant"
    >
      {/* Hero Section */}
      <div className="mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Meet Your AI-Powered Social Media Expert</h2>
            <p className="text-lg text-muted-foreground mb-8">
              SocialFlow AI is an intelligent assistant designed to revolutionize how businesses manage their social media presence. From generating engaging content to analyzing performance metrics, our AI has you covered.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-gradient-primary text-white hover:shadow-glow">
                Get Started Free
              </Button>
              <Button variant="outline" className="border-primary text-primary">
                Schedule a Demo
              </Button>
            </div>
          </div>
          <div className="bg-gradient-to-tr from-primary/10 to-secondary/10 p-8 rounded-2xl">
            <div className="bg-white rounded-xl shadow-soft p-6 border border-accent/50">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-xl">🤖</span>
                </div>
                <h3 className="font-medium">SocialFlow AI</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-accent/20 p-4 rounded-lg">
                  <p>How can SocialFlow AI help improve my social media engagement?</p>
                </div>
                <div className="bg-primary/10 p-4 rounded-lg">
                  <p>I can help you create engaging content, analyze your audience demographics, optimize posting schedules, and provide data-driven recommendations to increase engagement rates by up to 40%. Would you like me to analyze your current social media strategy?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Powerful AI Features</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Leverage cutting-edge AI technology to streamline your social media workflow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-glow transition-all duration-300 border border-accent/20">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">✍️</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Content Generation</h3>
            <p className="text-muted-foreground">Create engaging posts, captions, and hashtags tailored to your brand voice and target audience.</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-glow transition-all duration-300 border border-accent/20">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Performance Analytics</h3>
            <p className="text-muted-foreground">Get AI-driven insights into your content performance and audience engagement metrics.</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-glow transition-all duration-300 border border-accent/20">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Smart Scheduling</h3>
            <p className="text-muted-foreground">Our AI determines the optimal times to post based on your audience's activity patterns.</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-glow transition-all duration-300 border border-accent/20">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Trend Detection</h3>
            <p className="text-muted-foreground">Stay ahead of the curve with AI-powered trend detection and content recommendations.</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-glow transition-all duration-300 border border-accent/20">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🗣️</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Sentiment Analysis</h3>
            <p className="text-muted-foreground">Understand how your audience perceives your brand with detailed sentiment analysis.</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-soft hover:shadow-glow transition-all duration-300 border border-accent/20">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Competitor Analysis</h3>
            <p className="text-muted-foreground">Analyze competitor strategies and identify opportunities to differentiate your brand.</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover how SocialFlow AI has transformed social media strategies for businesses of all sizes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-soft border border-accent/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-xl">👩</span>
              </div>
              <div>
                <h4 className="font-bold">Sarah Johnson</h4>
                <p className="text-sm text-muted-foreground">Marketing Director, TechStart Inc.</p>
              </div>
            </div>
            <p className="text-muted-foreground italic">"SocialFlow AI has completely transformed how we approach social media. The content suggestions are spot-on, and the analytics help us make data-driven decisions. Our engagement has increased by 78% since we started using it!"</p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-soft border border-accent/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-xl">👨</span>
              </div>
              <div>
                <h4 className="font-bold">Michael Rodriguez</h4>
                <p className="text-sm text-muted-foreground">Social Media Manager, Global Retail</p>
              </div>
            </div>
            <p className="text-muted-foreground italic">"As someone who manages multiple social accounts, SocialFlow AI has been a game-changer. The time I save on content creation and analysis lets me focus on strategy and building authentic relationships with our audience."</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-primary rounded-3xl overflow-hidden p-1 mb-12">
        <div className="bg-white rounded-3xl px-6 py-12 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to supercharge your social media?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of social media professionals who are already leveraging the power of AI.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-white"
              asChild
            >
              <Link to="/signup">Start Free Trial</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-accent/10"
            >
              Watch Demo Video
            </Button>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};

export default SocialFlowAI;
