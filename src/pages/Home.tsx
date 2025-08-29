
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Casa Paiva - Materiais de Construção em Mossoró | Construímos Confiança</title>
        <meta name="description" content="Casa Paiva oferece materiais de construção com qualidade, variedade e preço justo em Mossoró/RN. Hidráulico, elétrico, tintas, ferramentas e muito mais. 8 anos de confiança!" />
        <meta property="og:title" content="Casa Paiva - Materiais de Construção em Mossoró | Construímos Confiança" />
        <meta property="og:description" content="Casa Paiva oferece materiais de construção com qualidade, variedade e preço justo em Mossoró/RN. Hidráulico, elétrico, tintas, ferramentas e muito mais. 8 anos de confiança!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.paivacasa.com.br" />
        <meta property="og:image" content="/logo-casa-paiva.png" />
        <link rel="canonical" href="https://www.paivacasa.com.br" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <section id="inicio">
            <Hero />
          </section>
          <section id="servicos">
            <Services />
          </section>
          <section id="sobre">
            <About />
          </section>
          <section id="depoimentos">
            <Testimonials />
          </section>
          <section id="contato">
            <Contact />
          </section>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </>
  );
};

export default Home;
