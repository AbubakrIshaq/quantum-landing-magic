
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BookDemo from "./pages/BookDemo";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ContactUs from "./pages/ContactUs";
import SocialFlowAI from "./pages/SocialFlowAI";
import Pricing from "./pages/Pricing";

// Product pages
import OmnichannelInbox from "./pages/products/OmnichannelInbox";
import Features from "./pages/products/Features";
import Solutions from "./pages/products/Solutions";

// Industry pages
import Education from "./pages/industry/Education";

// Resources pages
import BlogsGuides from "./pages/resources/BlogsGuides";

// Company pages
import About from "./pages/company/About";
import Newsroom from "./pages/company/Newsroom";
import Careers from "./pages/company/Careers";

// Partnership pages
import ResellerProgram from "./pages/partnerships/ResellerProgram";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Authentication and Demo Routes */}
          <Route path="/book-demo" element={<BookDemo />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/socialflow-ai" element={<SocialFlowAI />} />
          <Route path="/pricing" element={<Pricing />} />
          
          {/* Product Routes */}
          <Route path="/products/omnichannel-inbox" element={<OmnichannelInbox />} />
          <Route path="/products/features" element={<Features />} />
          <Route path="/products/solutions" element={<Solutions />} />
          
          {/* Industry Routes */}
          <Route path="/industry/education" element={<Education />} />
          
          {/* Resources Routes */}
          <Route path="/resources/blogs-guides" element={<BlogsGuides />} />
          
          {/* Company Routes */}
          <Route path="/company/about" element={<About />} />
          <Route path="/company/newsroom" element={<Newsroom />} />
          <Route path="/company/careers" element={<Careers />} />
          
          {/* Partnership Routes */}
          <Route path="/partnerships/reseller" element={<ResellerProgram />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
