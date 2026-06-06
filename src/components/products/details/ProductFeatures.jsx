import { motion } from "framer-motion";
import {
  FaBolt,
  FaGem,
  FaAward,
  FaShieldAlt,
  FaStar,
} from "react-icons/fa";

import "./ProductFeatures.css";

const icons = [
  FaBolt,
  FaGem,
  FaAward,
  FaShieldAlt,
  FaStar,
];

export default function ProductFeatures({
  features,
  title = "Why Choose Velin Soda",
}) {
  return (
    <section className="product-features">

      <div className="product-features-container">

        <motion.div
          className="features-heading"
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
          <span className="features-tag">
            WHY CHOOSE US
          </span>

          <h2>
            {title}
          </h2>
        </motion.div>

        <div className="features-grid">

          {features.map(
            (feature, index) => {
              const Icon =
                icons[
                  index % icons.length
                ];

              return (
                <motion.div
                  key={index}
                  className="feature-card"
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
                    duration: 0.4,
                    delay:
                      index * 0.1,
                  }}
                >
                  <div className="feature-icon">
                    <Icon />
                  </div>

                  <h3>
                    {feature.title}
                  </h3>

                  <p>
                    {
                      feature.description
                    }
                  </p>
                </motion.div>
              );
            }
          )}

        </div>

      </div>

    </section>
  );
}