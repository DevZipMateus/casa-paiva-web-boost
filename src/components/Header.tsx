
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { label: "Início", href: "#inicio" },
    { label: "Serviços", href: "#servicos" },
    { label: "Sobre", href: "#sobre" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md shadow-lg border-b border-border"
          : ""
      }`}
      style={{
        backgroundColor: isScrolled ? 'rgba(255, 39, 52, 0.95)' : '#ff2734'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/fe61b619-9375-4ed4-bc94-2fa43cbac9fa.png" 
              alt="Logo Casa Paiva" 
              className="w-12 h-12 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold text-white">Casa Paiva</h1>
              <p className="text-sm text-white/80">Construímos Confiança!</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href.substring(1))}
                className="text-white hover:text-white/80 transition-colors font-medium"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* WhatsApp Button - Desktop */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/5584988239162"
              className="inline-flex items-center px-6 py-3 bg-white text-[#ff2734] rounded-lg hover:bg-white/90 transition-colors font-semibold"
            >
              Falar no WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-white/20"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div 
            className="md:hidden absolute top-full left-0 right-0 border-b border-border shadow-lg"
            style={{ backgroundColor: '#ff2734' }}
          >
            <nav className="px-4 py-6 space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href.substring(1))}
                  className="block w-full text-left text-white hover:text-white/80 transition-colors font-medium py-2"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="https://wa.me/5584988239162"
                className="block w-full text-center bg-white text-[#ff2734] py-3 rounded-lg hover:bg-white/90 transition-colors font-semibold mt-4"
              >
                Falar no WhatsApp
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
