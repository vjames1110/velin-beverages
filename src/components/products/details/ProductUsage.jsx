import { motion } from "framer-motion";
import {
  FaGlassCheers,
  FaCocktail,
  FaBirthdayCake,
  FaUtensils,
  FaPlane,
  FaSun,
} from "react-icons/fa";

import "./ProductUsage.css";

const icons = [
  FaGlassCheers,
  FaCocktail,
  FaBirthdayCake,
  FaUtensils,
  FaPlane,
  FaSun,
];

export default function ProductUsage({
  usage,
  title = "Perfect For Every Occasion",
}) {
  return (
    <section className="product-usage">

      <div className="product-usage-container">

        <motion.div
          className="usage-heading"
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
          <span className="usage-tag">
            PERFECT FOR
          </span>

          <h2>
            {title}
          </h2>

          <p>
            Designed to complement every moment,
            from celebrations and dining to travel
            and everyday refreshment.
          </p>
        </motion.div>

        <div className="usage-grid">

          {usage.map(
            (item, index) => {
              const Icon =
                icons[
                  index % icons.length
                ];

              return (
                <motion.div
                  key={index}
                  className="usage-card"
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
                      index * 0.08,
                  }}
                >
                  <div className="usage-icon">
                    <Icon />
                  </div>

                  <h3>
                    {item.title}
                  </h3>
                </motion.div>
              );
            }
          )}

        </div>

      </div>

    </section>
  );
}