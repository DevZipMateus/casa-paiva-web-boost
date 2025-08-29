
const ContactMap = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-foreground">Nossa Localização</h2>
      
      <div className="bg-card rounded-lg overflow-hidden shadow-lg border border-border">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.0176676507473!2d-37.34424668524613!3d-5.208972995263937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c7a0f2e0f2e0f2e%3A0x1f2e3d4c5b6a7b8c!2sAv.%20Francisco%20Mota%2C%2072%20-%20Pintos%2C%20Mossor%C3%B3%20-%20RN!5e0!3m2!1spt-BR!2sbr!4v1640995200000!5m2!1spt-BR!2sbr"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização Casa Paiva - Av. Francisco Mota, 72, Pintos, Mossoró/RN"
          className="w-full"
        />
      </div>
      
      <div className="grid gap-4">
        <div className="bg-red-50 rounded-lg p-6 text-center">
          <h3 className="font-bold text-red-800 mb-2">Fácil Acesso</h3>
          <p className="text-red-700">
            Estamos localizados na Av. Francisco Mota, no bairro Pintos, com fácil acesso e estacionamento disponível para nossos clientes.
          </p>
        </div>
        
        <div className="bg-blue-50 rounded-lg p-6 text-center">
          <h3 className="font-bold text-blue-800 mb-2">Referência</h3>
          <p className="text-blue-700">
            Próximo a outros comércios locais, nossa localização é estratégica e de fácil identificação no bairro Pintos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
