import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import products from "../../../data/products";

import "./RelatedProducts.css";

export default function RelatedProducts({
  currentProduct,
}) {
  const relatedProducts =
    products.filter(
      (product) =>
        product.slug !== currentProduct
    );

  return (
    <section className="related-products">

      <div className="related-products-container">

        <motion.div
          className="related-products-header"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <span className="related-tag">
            MORE PRODUCTS
          </span>

          <h2>
            Explore More Refreshment
          </h2>

          <p>
            Discover more premium beverages
            from the Velin product family.
          </p>
        </motion.div>

        <div className="related-products-grid">

          {relatedProducts.map(
            (product, index) => (
              <motion.div
                key={product.id}
                className="related-product-card"
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay:
                    index * 0.1,
                }}
              >
                <div className="related-image">

                  <img
                    src={product.image}
                    alt={product.name}
                  />

                </div>

                <div className="related-content">

                  <h3>
                    {product.name}
                  </h3>

                  <p>
                    {
                      product.description
                    }
                  </p>

                  <Link
                    to={`/${product.slug}`}
                    className="related-btn"
                  >
                    Explore Product
                  </Link>

                </div>

              </motion.div>
            )
          )}

        </div>

      </div>
    </section>
  );
}