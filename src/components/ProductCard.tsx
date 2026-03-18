import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
}

const ProductCard = ({ name, description, image }: ProductCardProps) => (
  <motion.div
    whileHover={{ y: -8 }}
    transition={{ duration: 0.3 }}
    className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-300 group flex flex-col"
  >
    <div className="aspect-square overflow-hidden">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        loading="lazy"
      />
    </div>
    <div className="p-5 flex flex-col flex-1">
      <h3 className="font-display text-xl font-semibold text-foreground mb-2">{name}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed flex-1">{description}</p>
      <Link
        to={`/enquiry?product=${encodeURIComponent(name)}`}
        className="mt-4 block text-center bg-secondary text-secondary-foreground py-2.5 rounded-lg font-body font-semibold text-sm hover:opacity-90 transition-opacity"
      >
        Enquire Now
      </Link>
    </div>
  </motion.div>
);

export default ProductCard;
