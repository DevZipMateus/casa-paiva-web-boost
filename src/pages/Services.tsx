import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Wrench, Zap, Palette, Shield, Hammer, Droplets, Cpu, Grid3X3 } from "lucide-react";

const Services = () => {
  const serviceCategories = [
    {
      icon: Droplets,
      title: "Material Hidráulico",
      description: "Tubos, conexões, registros e acessórios para instalações hidráulicas completas."
    },
    {
      icon: Zap,
      title: "Material Elétrico", 
      description: "Fios, cabos, disjuntores, tomadas e componentes elétricos de qualidade."
    },
    {
      icon: Palette,
      title: "Tintas",
      description: "Tintas, vernizes e produtos para pintura de todas as marcas reconhecidas."
    },
    {
      icon: Hammer,
      title: "Máquinas e Ferramentas",
      description: "Ferramentas manuais e elétricas para todos os tipos de trabalho."
    },
    {
      icon: Shield,
      title: "EPI e Segurança",
      description: "Equipamentos de proteção individual e segurança residencial."
    },
    {
      icon: Cpu,
      title: "Eletrônicos",
      description: "Componentes e acessórios eletrônicos para suas necessidades."
    },
    {
      icon: Grid3X3,
      title: "Telas e Lonas",
      description: "Telas de proteção, lonas e materiais para cobertura."
    },
    {
      icon: Wrench,
      title: "Acessórios Diversos",
      description: "Pias, lavanderias, parafusos e miudezas em geral."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Nossos Serviços - Casa Paiva | Materiais de Construção Completos</title>
        <meta name="description" content="Conheça todos os serviços da Casa Paiva: material hidráulico, elétrico, tintas, ferramentas, EPI, segurança residencial e muito mais. Tudo para sua obra em Mossoró/RN." />
        <meta property="og:title" content="Nossos Serviços - Casa Paiva | Materiais de Construção Completos" />
        <meta property="og:description" content="Conheça todos os serviços da Casa Paiva: material hidráulico, elétrico, tintas, ferramentas, EPI, segurança residencial e muito mais. Tudo para sua obra em Mossoró/RN." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.paivacasa.com.br/servicos" />
        <meta property="og:image" content="/lovable-uploads/fe61b619-9375-4ed4-bc94-2fa43cbac9fa.png" />
        <link rel="canonical" href="https://www.paivacasa.com.br/servicos" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Nossos Serviços
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Oferecemos uma linha completa de materiais de construção para atender desde pequenas reformas até grandes obras.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
              {serviceCategories.map((service, index) => (
                <div key={index} className="bg-card rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <service.icon className="w-12 h-12 text-red-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-red-50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-red-800 mb-4">
                Importante: O que NÃO vendemos
              </h2>
              <p className="text-red-700 text-lg">
                Não trabalhamos com material grosseiro como tijolo, areia, arisco e pré-moldados. 
                Focamos em materiais específicos de construção com maior valor agregado.
              </p>
            </div>

            <div className="text-center mt-16">
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                Precisa de Ajuda?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Nossa equipe está pronta para ajudar você a encontrar exatamente o que precisa.
              </p>
              <a
                href="https://wa.me/5584988239162"
                className="inline-flex items-center px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-lg font-semibold"
              >
                Entre em Contato
              </a>
            </div>
          </div>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </>
  );
};

export default Services;
