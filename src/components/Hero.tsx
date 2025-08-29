
import { ArrowRight, Star, Clock, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-200 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-red-300 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-100 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-semibold mb-8">
            <Star className="w-4 h-4 mr-2" />
            8 anos de confiança no mercado
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Materiais de
            <span className="text-red-600 block">Construção</span>
            com Qualidade
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Na Casa Paiva você encontra tudo para sua obra com preços justos, atendimento personalizado e produtos de primeira linha.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="https://wa.me/5584988239162"
              className="inline-flex items-center px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300 font-semibold text-lg group"
            >
              Falar no WhatsApp
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-4 bg-white text-red-600 border-2 border-red-600 rounded-lg hover:bg-red-50 transition-all duration-300 font-semibold text-lg"
            >
              Ver Produtos
            </button>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-red-100">
              <MapPin className="w-8 h-8 text-red-600 mb-3 mx-auto" />
              <h3 className="font-semibold text-foreground mb-2">Localização</h3>
              <p className="text-sm text-muted-foreground">Av. Francisco Mota, 72<br />Pintos, Mossoró/RN</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-red-100">
              <Clock className="w-8 h-8 text-red-600 mb-3 mx-auto" />
              <h3 className="font-semibold text-foreground mb-2">Horário</h3>
              <p className="text-sm text-muted-foreground">Seg-Sex: 07h-12h / 13h30-17h30<br />Sáb-Dom: Consulte horários</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-red-100">
              <Star className="w-8 h-8 text-red-600 mb-3 mx-auto" />
              <h3 className="font-semibold text-foreground mb-2">Qualidade</h3>
              <p className="text-sm text-muted-foreground">Produtos de primeira linha<br />com garantia e suporte</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
