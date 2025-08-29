
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">CP</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Casa Paiva</h3>
                <p className="text-muted opacity-80">Construímos Confiança!</p>
              </div>
            </div>
            <p className="text-muted opacity-90 leading-relaxed mb-6 max-w-md">
              A Casa Paiva oferece qualidade, confiança e preços justos no segmento de materiais de construção em Mossoró e região há 8 anos.
            </p>
            <div className="text-sm text-muted opacity-80">
              <p className="mb-1">CNPJ: 43.316.826/0001-77</p>
              <p>Casa Paiva - Todos os direitos reservados</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => document.getElementById('inicio')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted opacity-80 hover:opacity-100 transition-opacity"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted opacity-80 hover:opacity-100 transition-opacity"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted opacity-80 hover:opacity-100 transition-opacity"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-muted opacity-80 hover:opacity-100 transition-opacity"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-muted opacity-90">Av. Francisco Mota, 72</p>
                  <p className="text-muted opacity-80">Pintos, Mossoró/RN</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-red-400 flex-shrink-0" />
                <a 
                  href="https://wa.me/5584988239162" 
                  className="text-sm text-muted opacity-90 hover:opacity-100 transition-opacity"
                >
                  (84) 98823-9162
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-red-400 flex-shrink-0" />
                <a 
                  href="mailto:franciscochagas20@hotmail.com" 
                  className="text-sm text-muted opacity-90 hover:opacity-100 transition-opacity"
                >
                  franciscochagas20@hotmail.com
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted opacity-90">
                  <p>Seg-Sex: 07h-12h / 13h30-17h30</p>
                  <p>Sáb: 07h30-12h / 14h-17h</p>
                  <p>Dom: 07h30-11h30</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="font-semibold mb-3">Siga-nos</h5>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/casapaivamossoro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors"
                  aria-label="Instagram Casa Paiva"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/share/15tx8wvMvG/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors"
                  aria-label="Facebook Casa Paiva"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-muted/20 mt-12 pt-8 text-center">
          <p className="text-sm text-muted opacity-80">
            © 2024 Casa Paiva. Todos os direitos reservados. | Desenvolvido com ❤️ para atender você melhor.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
