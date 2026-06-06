import { motion } from "framer-motion";
import "./ProductOverview.css";

export default function ProductOverview({ overview }) {
  return (
    <section className="product-overview">

      <div className="product-overview-container">

        <motion.div
          className="product-overview-image"
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <img
            src={overview.image}
            alt={overview.title}
          />
        </motion.div>

        <motion.div
          className="product-overview-content"
          initial={{
            opacity: 0,
            x: 50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <span className="overview-tag">
            PRODUCT OVERVIEW
          </span>

          <h2>
            {overview.title}
          </h2>

          <h3>
            {overview.subtitle}
          </h3>

          <p>
            {overview.description}
          </p>

          <div className="overview-highlights">

            <div className="overview-highlight">
              <strong>Premium Quality</strong>
              <span>
                Manufactured using modern production standards.
              </span>
            </div>

            <div className="overview-highlight">
              <strong>Reliable Refreshment</strong>
              <span>
                Consistent taste and carbonation every time.
              </span>
            </div>

            <div className="overview-highlight">
              <strong>Trusted Beverage</strong>
              <span>
                Preferred by retailers, restaurants, and consumers.
              </span>
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}