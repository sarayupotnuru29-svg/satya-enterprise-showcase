import AnimatedSection from "@/components/AnimatedSection";
import PageHero from "@/components/PageHero";
import { Award, Users, Truck, Leaf } from "lucide-react";
import aboutBg from "@/assets/about-warehouse.jpg";
import servicesBg from "@/assets/services-bg.jpg";

const stats = [
  { icon: Award, label: "Years of Trust", value: "10+" },
  { icon: Users, label: "Happy Clients", value: "500+" },
  { icon: Truck, label: "Shipments Delivered", value: "2000+" },
  { icon: Leaf, label: "Product Varieties", value: "20+" },
];

const About = () => (
  <div>
    <PageHero title="About Us" subtitle="Building trust through quality agricultural products since our inception." bgImage={aboutBg} />

    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Satya Enterprises</strong> is a trusted merchant exporter and supplier of high-quality agricultural and natural products from India. We specialize in sourcing and supplying premium products to international markets with a strong focus on quality, reliability, and timely delivery.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our product range includes Whole and Powdered Spices, Basmati & Non-Basmati Rice, Wheat, Jowar, Ragi, and more. All products are sourced from reliable growers and suppliers to ensure consistent quality and authenticity.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We serve wholesalers, distributors, and global buyers by maintaining strict quality standards, hygienic packaging, and reliable export practices. At Satya Enterprises, we believe in ethical sourcing, transparency, and building long-term partnerships based on trust and excellence.
            </p>
          </AnimatedSection>
          <AnimatedSection direction="right">
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img src={servicesBg} alt="Our products" className="w-full h-[400px] object-cover" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1} direction="scale">
              <div className="bg-card rounded-xl p-6 text-center shadow-card">
                <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <stat.icon className="text-primary" size={28} />
                </div>
                <div className="font-display text-3xl font-bold text-secondary mb-1">{stat.value}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Mission */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            To be a leading supplier of premium agricultural products by maintaining the highest standards of quality, integrity, and customer satisfaction. We aim to bridge the gap between Indian farmers and global markets, ensuring fair trade practices and sustainable growth.
          </p>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default About;
