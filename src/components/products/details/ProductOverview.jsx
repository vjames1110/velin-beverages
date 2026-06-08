import { motion } from "framer-motion";
import "./ProductOverview.css";

export default function ProductOverview({ overview, sizes = [] }) {
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
          <img src={overview.image} alt={overview.title} />
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
          <span className="overview-tag">PRODUCT OVERVIEW</span>

          <h2>{overview.title}</h2>

          <h3>{overview.subtitle}</h3>

          <p>{overview.description}</p>

          <div className="overview-highlights">
            {overview.highlights?.map((item, index) => (
              <div key={index} className="overview-highlight">
                <strong>{item.title}</strong>

                <span>{item.description}</span>
              </div>
            ))}
          </div>

          {sizes.length > 0 && (
            <div className="overview-sizes">
              <h4>Available Sizes</h4>

              <div className="overview-size-list">
                {sizes.map((item, index) => (
                  <div key={index} className="overview-size-pill">
                    {item.size}
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
