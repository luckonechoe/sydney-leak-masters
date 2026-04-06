import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import { ThemeProvider } from "@/hooks/use-theme";
import { ScrollToTop } from "@/components/ScrollToTop";

// Eagerly load the homepage for fastest LCP
import Index from "./pages/Index";

// Lazy-load all other pages for code splitting
const ShowerRepairs = lazy(() => import("./pages/ShowerRepairs"));
const BalconyRepairs = lazy(() => import("./pages/BalconyRepairs"));
const Strata = lazy(() => import("./pages/Strata"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Contact = lazy(() => import("./pages/Contact"));
const SuburbPage = lazy(() => import("./pages/SuburbPage"));
const CompleteGuide = lazy(() => import("./pages/CompleteGuide"));
const Suburbs = lazy(() => import("./pages/Suburbs"));
const About = lazy(() => import("./pages/About"));
const PreventativeMaintenance = lazy(() => import("./pages/PreventativeMaintenance"));
const NotFound = lazy(() => import("./pages/NotFound"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));

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
            <Suspense fallback={null}>
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
                <Route path="/preventative-maintenance" element={<PreventativeMaintenance />} />
                <Route path="/about" element={<About />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
