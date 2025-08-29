
import ProductCarousel from "./ProductCarousel";

const ProductShowcase = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Produtos em Destaque
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos produtos disponíveis em nossa loja com preços especiais e qualidade garantida.
          </p>
        </div>
        
        <div className="flex justify-center mb-12">
          <ProductCarousel />
        </div>

        {/* Video da furadeira */}
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <video
              className="w-full h-auto rounded-xl shadow-lg"
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              style={{ pointerEvents: 'none' }}
            >
              <source src="/lovable-uploads/furadeira.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
