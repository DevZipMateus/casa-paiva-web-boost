
import { Building2, Target, Users, Award, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    { number: "8+", label: "Anos no Mercado", icon: TrendingUp },
    { number: "1000+", label: "Clientes Satisfeitos", icon: Users },
    { number: "500+", label: "Produtos Disponíveis", icon: Building2 },
    { number: "100%", label: "Qualidade Garantida", icon: Award }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Sobre a Casa Paiva
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              8 anos construindo confiança e oferecendo os melhores materiais de construção em Mossoró e região.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-red-600" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6 flex items-center">
                <Building2 className="mr-3 text-red-600" />
                Nossa História
              </h3>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                A Casa Paiva nasceu com o propósito de oferecer qualidade, confiança e preços justos no segmento de materiais de construção em Mossoró e região. Estamos há 8 anos no mercado, conquistando a confiança de nossos clientes com atendimento próximo, produtos de primeira linha e soluções que atendem desde pequenas reformas até grandes obras.
              </p>
              
              <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-600">
                <h4 className="font-bold text-red-800 mb-2 flex items-center">
                  <Target className="mr-2" size={20} />
                  Nossa Missão
                </h4>
                <p className="text-red-700">
                  Fornecer materiais de construção com qualidade, variedade e preço justo, sempre priorizando o bom atendimento e a satisfação de cada cliente.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-card rounded-lg p-6 shadow-lg">
                <h4 className="font-bold text-card-foreground mb-3 flex items-center">
                  <Award className="mr-2 text-red-600" />
                  Nossos Diferenciais
                </h4>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Atendimento personalizado e consultivo
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Produtos de marcas reconhecidas no mercado
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Preços competitivos e condições especiais
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Localização estratégica e fácil acesso
                  </li>
                </ul>
              </div>

              <div className="bg-red-600 text-white rounded-lg p-6 text-center">
                <h4 className="text-2xl font-bold mb-2">
                  "Construímos Confiança!"
                </h4>
                <p className="opacity-90">
                  Nosso compromisso é com a sua satisfação e o sucesso da sua obra.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
