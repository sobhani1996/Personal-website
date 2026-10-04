import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:bottom-4 z-50 pointer-events-none flex justify-end">
      <div className="w-full md:w-[400px] bg-white rounded-xl shadow-xl border border-gray-100 p-4 md:p-5 pointer-events-auto relative animate-in slide-in-from-bottom-5 duration-300">
        <button 
          onClick={handleDecline}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>
        
        <div className="flex flex-col gap-3">
          <div className="pr-6">
            <h3 className="text-base font-bold text-secondary mb-1">We value your privacy</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              We use cookies to enhance your browsing experience and analyze our traffic. Read our <a href="/privacy-policy/" className="text-primary hover:underline">Privacy Policy</a>.
            </p>
          </div>
          
          <div className="flex flex-row gap-2 w-full mt-1">
            <Button 
              variant="outline" 
              onClick={handleDecline}
              className="flex-1 h-8 text-xs rounded-full border-gray-200"
            >
              Decline
            </Button>
            <Button 
              onClick={handleAccept}
              className="flex-1 h-8 text-xs rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
