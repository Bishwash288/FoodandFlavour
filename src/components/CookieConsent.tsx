import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show after a short delay for better UX
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50"
        >
          <div className="bg-card border-2 border-border rounded-2xl shadow-float p-6 relative">
            <button
              onClick={declineCookies}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            
            <div className="space-y-4 pr-6">
              <h3 className="text-lg font-bold text-foreground">
                We use cookies
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We may place these for analysis of our visitor data, to improve our website, 
                show personalized content and to give you a great website experience. For more 
                information about the cookies we use, please see our cookie policy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button
                  onClick={declineCookies}
                  variant="outline"
                  className="flex-1 border-2"
                >
                  No, adjust
                </Button>
                <Button
                  onClick={acceptCookies}
                  className="flex-1 bg-foreground text-background hover:bg-foreground/90"
                >
                  Accept all
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
