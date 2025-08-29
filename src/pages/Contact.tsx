
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ContactInfo from "@/components/ContactInfo";
import ContactMap from "@/components/ContactMap";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contato - Casa Paiva | Fale Conosco | Mossoró/RN</title>
        <meta name="description" content="Entre em contato com a Casa Paiva. Endereço: Av. Francisco Mota, 72, Pintos, Mossoró/RN. WhatsApp: (84) 98823-9162. Horários de funcionamento e localização." />
        <meta property="og:title" content="Contato - Casa Paiva | Fale Conosco | Mossoró/RN" />
        <meta property="og:description" content="Entre em contato com a Casa Paiva. Endereço: Av. Francisco Mota, 72, Pintos, Mossoró/RN. WhatsApp: (84) 98823-9162. Horários de funcionamento e localização." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.paivacasa.com.br/contato" />
        <meta property="og:image" content="/logo-casa-paiva.png" />
        <link rel="canonical" href="https://www.paivacasa.com.br/contato" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Entre em Contato
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Estamos prontos para atendê-lo. Visite nossa loja, ligue ou mande uma mensagem.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <ContactInfo />
              <ContactMap />
            </div>
          </div>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </>
  );
};

export default Contact;
