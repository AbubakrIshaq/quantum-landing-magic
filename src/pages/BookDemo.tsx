
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const BookDemo = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 pt-24 pb-16">
        <div className="max-container px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                See SocialFlow in action
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                Book a personalized demo with our product specialists and discover how SocialFlow can transform your customer communication.
              </p>
              
              <div className="space-y-3 pb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-600">
                    <span className="text-xl">✓</span>
                  </div>
                  <p className="font-medium">Personalized walkthrough of the platform</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-600">
                    <span className="text-xl">✓</span>
                  </div>
                  <p className="font-medium">Custom solutions for your business needs</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center text-primary-600">
                    <span className="text-xl">✓</span>
                  </div>
                  <p className="font-medium">ROI analysis and implementation strategy</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6">Schedule Your Demo</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name*</Label>
                    <Input id="firstName" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name*</Label>
                    <Input id="lastName" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="workEmail">Work Email*</Label>
                  <Input id="workEmail" type="email" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name*</Label>
                  <Input id="company" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="jobTitle">Job Title*</Label>
                  <Input id="jobTitle" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="companySize">Company Size*</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1-10 employees</SelectItem>
                      <SelectItem value="11-50">11-50 employees</SelectItem>
                      <SelectItem value="51-200">51-200 employees</SelectItem>
                      <SelectItem value="201-500">201-500 employees</SelectItem>
                      <SelectItem value="501-1000">501-1000 employees</SelectItem>
                      <SelectItem value="1000+">1000+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="industry">Industry*</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ecommerce">E-commerce</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="realestate">Real Estate</SelectItem>
                      <SelectItem value="travel">Travel & Hospitality</SelectItem>
                      <SelectItem value="financial">Financial Services</SelectItem>
                      <SelectItem value="education">Education</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">What are you looking to achieve with SocialFlow?</Label>
                  <Textarea id="message" rows={4} />
                </div>
                
                <Button type="submit" className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 text-white">
                  Book Your Demo
                </Button>
                
                <p className="text-xs text-muted-foreground mt-4">
                  By submitting this form, you agree to our <a href="/privacy-policy" className="underline">Privacy Policy</a> and 
                  consent to SocialFlow contacting you with relevant information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BookDemo;
