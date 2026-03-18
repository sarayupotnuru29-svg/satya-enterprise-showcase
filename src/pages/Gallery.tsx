import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import PageHero from "@/components/PageHero";
import galleryBg from "@/assets/gallery-bg.jpg";

import maize from "@/assets/product-maize.jpg";
import rice from "@/assets/product-rice.jpg";
import wheat from "@/assets/product-wheat.jpg";
import jowar from "@/assets/product-jowar.jpg";
import ragi from "@/assets/product-ragi.jpg";
import chilli from "@/assets/product-chilli.jpg";
import pulses from "@/assets/product-pulses.jpg";
import heroWheat from "@/assets/hero-wheat.jpg";
import warehouse from "@/assets/about-warehouse.jpg";
import servicesBg from "@/assets/services-bg.jpg";

const images = [
  { src: maize, alt: "Premium Maize" },
  { src: rice, alt: "Basmati Rice" },
  { src: wheat, alt: "Golden Wheat" },
  { src: jowar, alt: "Jowar Millet" },
  { src: ragi, alt: "Ragi Grains" },
  { src: chilli, alt: "Red Chilli" },
  { src: pulses, alt: "Pulses & Lentils" },
  { src: heroWheat, alt: "Wheat Fields" },
  { src: warehouse, alt: "Grain Warehouse" },
  { src: servicesBg, alt: "Grain Varieties" },
];

const Gallery = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div>
      <PageHero title="Gallery" subtitle="A visual showcase of our premium agricultural products and operations." bgImage={galleryBg} />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map((img, i) => (
              <AnimatedSection key={i} delay={i * 0.05} direction="scale">
                <div
                  className="rounded-xl overflow-hidden cursor-pointer group break-inside-avoid"
                  onClick={() => setSelected(i)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button className="absolute top-6 right-6 text-primary-foreground" onClick={() => setSelected(null)}>
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={images[selected].src}
              alt={images[selected].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
