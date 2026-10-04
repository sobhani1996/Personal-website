import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense, useEffect } from "react";
import Home from "@/pages/Home"; // Keep Home eagerly loaded for fast LCP
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieConsent from "@/components/CookieConsent";
import { Route, Router as WouterRouter, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { applyHead } from "./seo/head";
import { headForPath, headForPage, NOT_FOUND_SEO } from "./seo/pages";

const About = lazy(() => import("@/pages/About"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogPost = lazy(() => import("@/pages/BlogPost"));
const Contact = lazy(() => import("@/pages/Contact"));
const Services = lazy(() => import("@/pages/Services"));
const GoogleAds = lazy(() => import("@/pages/GoogleAds"));
const MetaAds = lazy(() => import("@/pages/MetaAds"));
const Pricing = lazy(() => import("@/pages/Pricing"));
const CV = lazy(() => import("@/pages/CV"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const Portfolio = lazy(() => import("@/pages/Portfolio"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("@/pages/TermsOfService"));
const Storytelling = lazy(() => import("@/pages/Storytelling"));
const BookLanding = lazy(() => import("@/pages/BookLanding"));

// Keeps the title, description, canonical and structured data in sync with the
// current page after client-side navigation. Blog posts set their own head.
function SeoManager() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (/^\/blog\/[^/]+\/?$/.test(location)) return;
    applyHead(headForPath(location) ?? headForPage(NOT_FOUND_SEO));
  }, [location]);
  return null;
}

function Routes() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      }
    >
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/services"} component={Services} />
        <Route path={"/google-ads-management"} component={GoogleAds} />
        <Route path={"/meta-ads-management"} component={MetaAds} />
        <Route path={"/pricing"} component={Pricing} />
        <Route path={"/about"} component={About} />
        <Route path={"/cv"} component={CV} />
        <Route path={"/portfolio"} component={Portfolio} />
        <Route path={"/story"} component={Storytelling} />
        <Route path={"/book"} component={BookLanding} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={BlogPost} />
        <Route path="/contact" component={Contact} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-of-service" component={TermsOfService} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

type AppProps = {
  /** Set when pre-rendering pages at build time. */
  ssrPath?: string;
};

function App({ ssrPath }: AppProps) {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <WouterRouter ssrPath={ssrPath}>
            <Toaster />
            <WhatsAppButton />
            <CookieConsent />
            <SeoManager />
            <Routes />
          </WouterRouter>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
