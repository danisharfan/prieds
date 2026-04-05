import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Integration from "./pages/Integration";
import JoinPartner from "./pages/JoinPartner";
import Blog from "./pages/Blog";
import CaseStudy from "./pages/CaseStudy";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ProductWMS from "./pages/ProductWMS";
import ProductSmartRetail from "./pages/ProductSmartRetail";
import ProductDerasRFID from "./pages/ProductDerasRFID";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/integration" element={<Integration />} />
          <Route path="/join-partner" element={<JoinPartner />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/case-study" element={<CaseStudy />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/product/wms" element={<ProductWMS />} />
          <Route path="/product/smart-retail" element={<ProductSmartRetail />} />
          <Route path="/product/deras-rfid" element={<ProductDerasRFID />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
