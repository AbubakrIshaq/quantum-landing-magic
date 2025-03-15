
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Product pages
import OmnichannelInbox from "./pages/products/OmnichannelInbox";

// Industry pages
import Education from "./pages/industry/Education";

// Resources pages
import BlogsGuides from "./pages/resources/BlogsGuides";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Product Routes */}
          <Route path="/products/omnichannel-inbox" element={<OmnichannelInbox />} />
          
          {/* Industry Routes */}
          <Route path="/industry/education" element={<Education />} />
          
          {/* Resources Routes */}
          <Route path="/resources/blogs-guides" element={<BlogsGuides />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
