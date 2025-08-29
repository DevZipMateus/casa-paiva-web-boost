
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductCarousel = () => {
  const images = [
    {
      src: "/lovable-uploads/59a0e19b-a63a-4bd1-b583-ecf3a8874ca3.png",
      alt: "Kit De Pontas E Brocas Para Furar E Parafusar Em Titânio Bosch X-line 70 Peças - R$ 179,90"
    },
    {
      src: "/lovable-uploads/d94e0387-3ed6-4ec0-823e-38f03341ed7a.png",
      alt: "Mangueira emborrachada de 1/2 com 3 camadas Tramontina - R$ 3,90 o metro"
    },
    {
      src: "/lovable-uploads/14671948-e274-44a8-b524-c39ece6dced1.png",
      alt: "Prateleira com suporte e perfil emborrachado de canto - R$ 35,00"
    },
    {
      src: "/lovable-uploads/8a2dc27f-0266-4c78-a4c4-2d749626f9c5.png",
      alt: "Tinta interna latão 15l - A partir de R$ 74,00"
    },
    {
      src: "/lovable-uploads/72470b79-9ac5-45a9-a520-d9af62dfa300.png",
      alt: "Sapateira estilo industrial P/ 06 pares - R$ 79,90"
    },
    {
      src: "/lovable-uploads/e8e0a6ce-3a3c-43f6-82b4-fcf1ff0b83ae.png",
      alt: "Kit de Pintura Rolo e Bandeja - R$ 19,90"
    },
    {
      src: "/lovable-uploads/8920d533-da32-4eeb-9cd4-127fc1d67bde.png",
      alt: "Chave Bóia Automática de Nível Fertak Tools"
    },
    {
      src: "/lovable-uploads/941ad0fe-8117-4376-a9ea-db638b6d026d.png",
      alt: "Pás e ferramentas Tramontina"
    },
    {
      src: "/lovable-uploads/ea17bfed-7f2c-46ab-b96a-d527ad32560b.png",
      alt: "Materiais hidráulicos e sanitários"
    },
    {
      src: "/lovable-uploads/f6070056-6d6c-439a-ab72-8ce5d671c2ae.png",
      alt: "Furadeira Bosch Professional GSB 450 RE"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
        
        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
          aria-label="Imagem anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
          aria-label="Próxima imagem"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      
      {/* Indicators */}
      <div className="flex justify-center space-x-2 py-4 bg-gray-50">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-red-600' : 'bg-gray-300'
            }`}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
