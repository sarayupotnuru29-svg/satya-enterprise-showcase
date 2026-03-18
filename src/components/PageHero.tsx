import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  bgImage: string;
}

const PageHero = ({ title, subtitle, bgImage }: PageHeroProps) => (
  <section
    className="relative h-[50vh] min-h-[360px] flex items-center justify-center overflow-hidden"
    style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
  >
    <div className="absolute inset-0 bg-foreground/65" />
    <div className="relative z-10 text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-4"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-body text-lg md:text-xl text-primary-foreground/85 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  </section>
);

export default PageHero;
