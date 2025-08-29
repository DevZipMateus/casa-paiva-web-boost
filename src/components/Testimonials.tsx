
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Adelino Moribe",
      text: "O atendimento é muito bom, os rapazes são muito legais e prestativos. Informam e explicam sobre o produto. Sempre que vou eu encontro o que tô procurando e precisando. Preços bom e justos. Muito melhor que aquelas lojas do centro, que têm péssimo atendimento.",
      rating: 5
    },
    {
      name: "Elton Roberto",
      text: "Excepcional, diferenciado dos demais, atendimento em cliente e vendedores sensacional, a avaliação de 5 estrela é pouco para o que desejo avaliar.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista. Veja alguns depoimentos reais.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-xl p-8 shadow-lg border border-border relative">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-red-200" />
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  "{testimonial.text}"
                </p>
                
                <div className="font-semibold text-card-foreground">
                  {testimonial.name}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center bg-red-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-red-800 mb-4">
              Sua Opinião é Importante!
            </h3>
            <p className="text-red-700 mb-6">
              Compartilhe sua experiência conosco e ajude outros clientes a conhecer nosso trabalho.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.facebook.com/share/15tx8wvMvG/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Avaliar no Facebook
              </a>
              <a
                href="https://wa.me/5584988239162"
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
