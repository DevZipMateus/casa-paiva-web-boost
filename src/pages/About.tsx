import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Building2, Target, Users, Award } from "lucide-react";

const About = () => {
  return (
    <>
      <Helmet>
        <title>Sobre a Casa Paiva - Nossa História e Missão | Materiais de Construção</title>
        <meta name="description" content="Conheça a história da Casa Paiva: 8 anos oferecendo materiais de construção com qualidade e confiança em Mossoró/RN. Nossa missão é construir relacionamentos duradouros." />
        <meta property="og:title" content="Sobre a Casa Paiva - Nossa História e Missão | Materiais de Construção" />
        <meta property="og:description" content="Conheça a história da Casa Paiva: 8 anos oferecendo materiais de construção com qualidade e confiança em Mossoró/RN. Nossa missão é construir relacionamentos duradouros." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.paivacasa.com.br/sobre" />
        <meta property="og:image" content="/lovable-uploads/fe61b619-9375-4ed4-bc94-2fa43cbac9fa.png" />
        <link rel="canonical" href="https://www.paivacasa.com.br/sobre" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-foreground">
                Nossa História
              </h1>
              
              <div className="bg-card rounded-lg shadow-lg p-8 mb-12">
                <h2 className="text-2xl font-semibold mb-6 text-card-foreground flex items-center">
                  <Building2 className="mr-3 text-red-600" />
                  Sobre a Casa Paiva
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                  A Casa Paiva nasceu com o propósito de oferecer qualidade, confiança e preços justos no segmento de materiais de construção em Mossoró e região. Estamos há 8 anos no mercado, conquistando a confiança de nossos clientes com atendimento próximo, produtos de primeira linha e soluções que atendem desde pequenas reformas até grandes obras.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-card rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-card-foreground flex items-center">
                    <Target className="mr-3 text-red-600" />
                    Nossa Missão
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Fornecer materiais de construção com qualidade, variedade e preço justo, sempre priorizando o bom atendimento e a satisfação de cada cliente.
                  </p>
                </div>

                <div className="bg-card rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-card-foreground flex items-center">
                    <Users className="mr-3 text-red-600" />
                    Nossos Valores
                  </h3>
                  <ul className="text-muted-foreground space-y-2">
                    <li>• Qualidade em todos os produtos</li>
                    <li>• Preços justos e competitivos</li>
                    <li>• Atendimento personalizado</li>
                    <li>• Confiança e transparência</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 rounded-lg p-8 text-center">
                <Award className="mx-auto mb-4 text-red-600" size={48} />
                <h3 className="text-2xl font-bold text-red-800 mb-4">
                  "Construímos Confiança!"
                </h3>
                <p className="text-red-700 text-lg">
                  Nosso slogan representa nosso compromisso em construir relacionamentos duradouros baseados na confiança e qualidade.
                </p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </>
  );
};

export default About;
