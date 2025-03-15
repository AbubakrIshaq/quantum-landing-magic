
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-36">
        <div className="max-container px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We'd love to hear from you. Get in touch with our team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                      <p className="text-muted-foreground mb-2">We'll respond as soon as possible</p>
                      <a href="mailto:hello@socialflow.com" className="text-primary hover:underline">
                        hello@socialflow.com
                      </a>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                      <p className="text-muted-foreground mb-2">Mon-Fri from 8am to 5pm</p>
                      <a href="tel:+18005551234" className="text-primary hover:underline">
                        +1 (800) 555-1234
                      </a>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Visit Us</h3>
                      <p className="text-muted-foreground mb-2">Come say hello at our office</p>
                      <address className="not-italic text-primary">
                        1234 Market Street<br />
                        San Francisco, CA 94103
                      </address>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                  <form className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name*</Label>
                        <Input id="firstName" placeholder="Your first name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name*</Label>
                        <Input id="lastName" placeholder="Your last name" required />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Work Email*</Label>
                      <Input id="email" type="email" placeholder="example@company.com" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+1 (555) 000-0000" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company">Company*</Label>
                      <Input id="company" placeholder="Your company name" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="jobTitle">Job Title*</Label>
                      <Input id="jobTitle" placeholder="Your position" required />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="country">Country/Region*</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="ca">Canada</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="au">Australia</SelectItem>
                          <SelectItem value="sg">Singapore</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="topic">How can we help?*</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select topic" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="demo">Request a demo</SelectItem>
                          <SelectItem value="pricing">Pricing inquiry</SelectItem>
                          <SelectItem value="support">Technical support</SelectItem>
                          <SelectItem value="partnership">Partnership opportunity</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message*</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Please share any additional details about your inquiry..." 
                        className="min-h-[120px]" 
                        required 
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 text-white">
                      Submit
                    </Button>
                    
                    <p className="text-xs text-muted-foreground">
                      By submitting this form, you agree to our <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link> and consent to SocialFlow using your information for contact purposes.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactUs;
