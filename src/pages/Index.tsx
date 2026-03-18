import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Wheat, Globe, Package, ShieldCheck } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import heroImg from "@/assets/hero-wheat.jpg";
import aboutImg from "@/assets/about-warehouse.jpg";

const services = [
  { icon: Wheat, title: "Premium Supply", desc: "High-quality grains and agricultural products sourced from trusted farms across India." },
  { icon: Globe, title: "Global Export", desc: "Reliable export services to domestic and international markets with complete documentation." },
  { icon: Package, title: "Custom Packaging", desc: "Flexible packaging solutions including bulk supply, private labeling, and custom options." },
  { icon: ShieldCheck, title: "Quality Assurance", desc: "Strict quality checks, grading, and hygiene standards meeting export-grade requirements." },
];

const Index = () => (
  <div>
    {/* Hero */}
    <section
      className="relative h-screen min-h-[600px] flex items-center overflow-hidden"
      style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="absolute inset-0 bg-foreground/55" />
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Quality <span className="text-gradient-golden">Agricultural Products</span> for Your Business
          </h1>
          <p className="text-primary-foreground/85 text-lg md:text-xl mb-8 font-body leading-relaxed">
            Trusted merchant exporter and supplier of premium grains, spices, and natural products from India to the world.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/products" className="bg-secondary text-secondary-foreground px-8 py-3.5 rounded-lg font-body font-semibold hover:opacity-90 transition-opacity">
              Explore Products
            </Link>
            <Link to="/contact" className="border-2 border-primary-foreground/40 text-primary-foreground px-8 py-3.5 rounded-lg font-body font-semibold hover:bg-primary-foreground/10 transition-colors">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

    {/* About Preview */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img src={aboutImg} alt="About Satya Enterprises" className="w-full h-[400px] object-cover" />
            </div>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">About Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Satya Enterprises</strong> is a trusted merchant exporter and supplier of high-quality agricultural and natural products from India. We specialize in sourcing and supplying premium products to international markets with a strong focus on quality, reliability, and timely delivery.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our product range includes Whole and Powdered Spices, Basmati & Non-Basmati Rice, Wheat, Jowar, Ragi, and more. All products are sourced from reliable growers to ensure consistent quality and authenticity.
            </p>
            <Link to="/about" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-body font-semibold hover:opacity-90 transition-opacity">
              Learn More
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Products */}
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Our Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our premium range of agricultural and natural products, carefully sourced to ensure superior quality, purity, and global export standards.
          </p>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product, i) => (
            <AnimatedSection key={product.name} delay={i * 0.1} direction="scale">
              <ProductCard {...product} />
            </AnimatedSection>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/products" className="bg-secondary text-secondary-foreground px-8 py-3.5 rounded-lg font-body font-semibold hover:opacity-90 transition-opacity inline-block">
            View All Products
          </Link>
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Delivering premium agricultural products with quality assurance, reliability, and global reach.
          </p>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.1} direction="up">
              <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-shadow duration-300 text-center h-full">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <service.icon className="text-primary" size={28} />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-gradient-earth text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
            Looking for bulk orders or export inquiries? Our team is ready to assist you with the best quality and pricing.
          </p>
          <Link to="/contact" className="bg-secondary text-secondary-foreground px-8 py-3.5 rounded-lg font-body font-semibold hover:opacity-90 transition-opacity inline-block">
            Contact Us Today
          </Link>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default Index;
