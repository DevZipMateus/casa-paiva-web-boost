
import { Wrench, Zap, Palette, Shield, Hammer, Droplets, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Droplets,
      title: "Material Hidráulico",
      description: "Tubos, conexões, registros e todos os acessórios para instalações hidráulicas.",
      items: ["Tubos PVC e PPR", "Conexões", "Registros", "Torneiras"]
    },
    {
      icon: Zap,
      title: "Material Elétrico",
      description: "Fios, cabos, disjuntores e componentes elétricos de qualidade.",
      items: ["Fios e cabos", "Disjuntores", "Tomadas", "Interruptores"]
    },
    {
      icon: Palette,
      title: "Tintas e Vernizes",
      description: "Tintas de todas as marcas para pintura interna e externa.",
      items: ["Tintas látex", "Esmaltes", "Vernizes", "Pincéis"]
    },
    {
      icon: Hammer,
      title: "Ferramentas",
      description: "Máquinas e ferramentas manuais para todos os trabalhos.",
      items: ["Furadeiras", "Martelos", "Chaves", "Serras"]
    },
    {
      icon: Shield,
      title: "EPI e Segurança",
      description: "Equipamentos de proteção individual e segurança residencial.",
      items: ["Capacetes", "Luvas", "Óculos", "Sistemas de segurança"]
    },
    {
      icon: Wrench,
      title: "Acessórios Diversos",
      description: "Pias, lavanderias, parafusos e miudezas em geral.",
      items: ["Pias", "Lavanderias", "Parafusos", "Miudezas"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nossos Produtos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma linha completa de materiais de construção com qualidade garantida e preços competitivos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="group bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:border-red-200">
              <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-200 transition-colors">
                <service.icon className="w-8 h-8 text-red-600" />
              </div>
              
              <h3 className="text-xl font-bold text-card-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-sm text-muted-foreground">
                    <ArrowRight className="w-4 h-4 text-red-600 mr-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-red-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-red-800 mb-4">
            Não encontrou o que procura?
          </h3>
          <p className="text-red-700 mb-6 text-lg">
            Nossa equipe está pronta para ajudar você a encontrar exatamente o que precisa para sua obra.
          </p>
          <a
            href="https://wa.me/5584988239162"
            className="inline-flex items-center px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold text-lg"
          >
            Consultar Disponibilidade
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
