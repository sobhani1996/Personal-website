import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";
import Home from "@/pages/Home"; // Keep Home eagerly loaded for fast LCP

const About = lazy(() => import("@/pages/About"));
const Blog = lazy(() => import("@/pages/Blog"));
const BlogPost = lazy(() => import("@/pages/BlogPost"));
const OvercomingContentParalysis = lazy(() => import("@/pages/blog/OvercomingContentParalysis"));
const TenHarshTruthsYouTube = lazy(() => import("@/pages/blog/TenHarshTruthsYouTube"));
const Contact = lazy(() => import("@/pages/Contact"));
const Services = lazy(() => import("@/pages/Services"));
const CV = lazy(() => import("@/pages/CV"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const Portfolio = lazy(() => import("@/pages/Portfolio"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("@/pages/TermsOfService"));
const Storytelling = lazy(() => import("@/pages/Storytelling"));
const BookLanding = lazy(() => import("@/pages/BookLanding"));
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieConsent from "@/components/CookieConsent";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";


function Router() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div></div>}>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/about"} component={About} />
        <Route path={"/cv"} component={CV} />
        <Route path={"/portfolio"} component={Portfolio} />
        <Route path={"/story"} component={Storytelling} />
        <Route path={"/book"} component={BookLanding} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={BlogPost} />
        <Route path="/blog/overcoming-content-paralysis" component={OvercomingContentParalysis} />
        <Route path="/blog/10-harsh-truths-youtube" component={TenHarshTruthsYouTube} />
        <Route path="/contact" component={Contact} />
        <Route path="/services" component={Services} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/terms-of-service" component={TermsOfService} />
        <Route path={"/404"} component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <WhatsAppButton />
          <CookieConsent />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
