
import { MapPin, Phone, Clock, Mail, Navigation } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      info: "Av. Francisco Mota, 72, Pintos",
      subInfo: "Mossoró, RN"
    },
    {
      icon: Phone,
      title: "Telefone",
      info: "(84) 98823-9162",
      subInfo: "WhatsApp disponível"
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "franciscochagas20@hotmail.com",
      subInfo: "Respondemos rapidamente"
    }
  ];

  const schedules = [
    { day: "Segunda a Sexta", time: "07:00 - 12:00 | 13:30 - 17:30" },
    { day: "Sábado", time: "07:30 - 12:00 | 14:00 - 17:00" },
    { day: "Domingo", time: "07:30 - 11:30" }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para atendê-lo. Visite nossa loja, ligue ou mande uma mensagem.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-foreground mb-8">Informações de Contato</h3>
              
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-card rounded-lg shadow-sm border border-border">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <contact.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-1">{contact.title}</h4>
                      <p className="text-foreground font-medium">{contact.info}</p>
                      <p className="text-muted-foreground text-sm">{contact.subInfo}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Schedule */}
              <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
                <h4 className="font-semibold text-card-foreground mb-4 flex items-center">
                  <Clock className="w-5 h-5 text-red-600 mr-2" />
                  Horário de Funcionamento
                </h4>
                <div className="space-y-3">
                  {schedules.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                      <span className="font-medium text-foreground">{schedule.day}</span>
                      <span className="text-muted-foreground text-sm">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <a
                  href="https://wa.me/5584988239162"
                  className="w-full inline-flex items-center justify-center px-6 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Falar no WhatsApp
                </a>
                <a
                  href="https://maps.app.goo.gl/DkTJzLsqAyaHgtCD7?g_st=ic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-6 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
                >
                  <Navigation className="w-5 h-5 mr-2" />
                  Ver no Google Maps
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Nossa Localização</h3>
              <div className="bg-card rounded-lg overflow-hidden shadow-lg border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.0176676507473!2d-37.34424668524613!3d-5.208972995263937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ba22e0b8e0b8e1%3A0x1e2f3c4d5a6b7c8d!2sAv.%20Francisco%20Mota%2C%2072%20-%20Pintos%2C%20Mossor%C3%B3%20-%20RN%2C%2059628-300!5e0!3m2!1spt-BR!2sbr!4v1640995200000!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Casa Paiva"
                  className="w-full"
                />
              </div>
              <div className="bg-red-50 rounded-lg p-6 text-center">
                <h4 className="font-bold text-red-800 mb-2">Fácil Acesso</h4>
                <p className="text-red-700">
                  Estamos localizados na Av. Francisco Mota, no bairro Pintos, com fácil acesso e estacionamento disponível.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
