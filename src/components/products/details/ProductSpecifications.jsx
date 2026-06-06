import { motion } from "framer-motion";
import { FaClipboardList } from "react-icons/fa";

import "./ProductSpecifications.css";

export default function ProductSpecifications({
  specifications,
}) {
  return (
    <section className="product-specifications">

      <div className="product-specifications-container">

        <motion.div
          className="specifications-header"
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
          <span className="specifications-tag">
            PRODUCT DETAILS
          </span>

          <h2>
            Product Specifications
          </h2>

          <p>
            Carefully manufactured with quality,
            consistency, and hygiene to deliver
            the best beverage experience.
          </p>
        </motion.div>

        <motion.div
          className="specifications-card"
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
            duration: 0.7,
          }}
        >

          {specifications.map(
            (item, index) => (
              <div
                key={index}
                className="spec-row"
              >
                <div className="spec-label">

                  <FaClipboardList />

                  <span>
                    {item.label}
                  </span>

                </div>

                <div className="spec-value">
                  {item.value}
                </div>
              </div>
            )
          )}

        </motion.div>

      </div>

    </section>
  );
}