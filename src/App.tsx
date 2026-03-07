import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import { ThemeProvider } from "@/hooks/use-theme";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import ShowerRepairs from "./pages/ShowerRepairs";
import BalconyRepairs from "./pages/BalconyRepairs";
import Strata from "./pages/Strata";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import SuburbPage from "./pages/SuburbPage";
import CompleteGuide from "./pages/CompleteGuide";
import Suburbs from "./pages/Suburbs";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Redirect component for old /services/:suburb URLs
function SuburbRedirect() {
  const { suburb } = useParams<{ suburb: string }>();
  if (suburb === "shower-repairs" || suburb === "balcony-repairs") {
    return null; // These are handled by explicit routes
  }
  return <Navigate to={`/leaking-shower-repairs/${suburb}`} replace />;
}

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services/shower-repairs" element={<ShowerRepairs />} />
              <Route path="/services/balcony-repairs" element={<BalconyRepairs />} />
              
              {/* SEO-optimized keyword suburb routes */}
              <Route path="/leaking-shower-repairs/:suburb" element={<SuburbPage serviceType="shower" />} />
              <Route path="/leaking-balcony-repairs/:suburb" element={<SuburbPage serviceType="balcony" />} />
              
              {/* Legacy suburb route - redirects to new keyword URLs */}
              <Route path="/services/:suburb" element={<SuburbRedirect />} />
              
              <Route path="/suburbs" element={<Suburbs />} />
              <Route path="/strata" element={<Strata />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/guides/complete-guide-leak-repairs-sydney" element={<CompleteGuide />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;