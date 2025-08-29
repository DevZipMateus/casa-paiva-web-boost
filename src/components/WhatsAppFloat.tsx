
import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after a small delay for better UX
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/5584988239162"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse hover:animate-none"
        aria-label="Falar no WhatsApp da Casa Paiva"
      >
        {/* Icon only on mobile, with text on larger screens */}
        <div className="flex items-center p-4 sm:pr-2">
          <MessageCircle className="w-6 h-6" />
        </div>
        
        {/* Text visible on larger screens */}
        <div className="hidden sm:block pr-4 font-semibold">
          Fale Conosco
        </div>
      </a>
      
      {/* Ripple effect */}
      <div className="absolute inset-0 rounded-full bg-green-500 opacity-30 animate-ping"></div>
    </div>
  );
};

export default WhatsAppFloat;
