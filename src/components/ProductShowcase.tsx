
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
        
        <div className="flex justify-center">
          <ProductCarousel />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
