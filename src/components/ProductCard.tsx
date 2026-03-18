import { motion } from "framer-motion";

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
}

const ProductCard = ({ name, description, image }: ProductCardProps) => (
  <motion.div
    whileHover={{ y: -8 }}
    transition={{ duration: 0.3 }}
    className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-300 group"
  >
    <div className="aspect-square overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        loading="lazy"
      />
    </div>
    <div className="p-5">
      <h3 className="font-display text-xl font-semibold text-foreground mb-2">{name}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

export default ProductCard;
