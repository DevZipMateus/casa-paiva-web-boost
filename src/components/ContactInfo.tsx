
import { MapPin, Phone, Clock, Mail, Navigation } from "lucide-react";

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: MapPin,
      title: "Endereço",
      info: "Av. Francisco Mota, 72, Pintos",
      subInfo: "Mossoró, RN - CEP: 59628-300"
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
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-6">Informações de Contato</h2>
        
        <div className="space-y-6">
          {contactDetails.map((contact, index) => (
            <div key={index} className="flex items-start space-x-4 p-6 bg-card rounded-lg shadow-sm border border-border">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <contact.icon className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground mb-1">{contact.title}</h3>
                <p className="text-foreground font-medium">{contact.info}</p>
                <p className="text-muted-foreground text-sm">{contact.subInfo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Schedule */}
      <div className="bg-card rounded-lg p-6 shadow-sm border border-border">
        <h3 className="font-semibold text-card-foreground mb-4 flex items-center">
          <Clock className="w-5 h-5 text-red-600 mr-2" />
          Horário de Funcionamento
        </h3>
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

      {/* Social Media */}
      <div className="bg-red-50 rounded-lg p-6">
        <h3 className="font-semibold text-red-800 mb-4">Siga-nos nas Redes Sociais</h3>
        <div className="space-y-3">
          <a
            href="https://www.instagram.com/casapaivamossoro"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-red-700 hover:text-red-800 transition-colors"
          >
            <span className="font-medium">@casapaivamossoro</span>
          </a>
          <a
            href="https://www.facebook.com/share/15tx8wvMvG/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-red-700 hover:text-red-800 transition-colors"
          >
            <span className="font-medium">Casa Paiva no Facebook</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
