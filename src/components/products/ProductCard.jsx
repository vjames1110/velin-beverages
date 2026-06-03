import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  return (
    <motion.div
      className="product-card"
      whileHover={{
        y: -12,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <div className="product-badge">
        Premium
      </div>

      <div className="product-image-wrapper">
        <img
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className="product-content">
        <h3>{product.name}</h3>

        <p>
          {product.description}
        </p>

        <Link
          to={`/${product.slug}`}
          className="product-btn"
        >
          Explore Product
        </Link>
      </div>
    </motion.div>
  );
}