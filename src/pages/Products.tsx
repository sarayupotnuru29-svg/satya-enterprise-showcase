import AnimatedSection from "@/components/AnimatedSection";
import PageHero from "@/components/PageHero";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import servicesBg from "@/assets/services-bg.jpg";

const Products = () => (
  <div>
    <PageHero title="Our Products" subtitle="Explore our premium range of agricultural and natural products." bgImage={servicesBg} />

    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Premium Agricultural Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Carefully sourced from trusted suppliers to ensure superior quality, purity, and global export standards.
          </p>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <AnimatedSection key={product.name} delay={i * 0.08} direction="scale">
              <ProductCard {...product} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Products;
