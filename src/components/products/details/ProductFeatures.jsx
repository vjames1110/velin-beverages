import { motion } from "framer-motion";
import {
  FaBolt,
  FaGem,
  FaAward,
  FaShieldAlt,
  FaStar,
  FaCertificate,
  FaFilter,
  FaHandHoldingWater,
  FaWater,
  FaRegLemon,
  FaSeedling,
  FaThumbsUp,
} from "react-icons/fa";

import {
  GiSparkles,
  GiThermometerCold,
  GiThreeLeaves,
} from "react-icons/gi";

import {
  IoSparklesOutline
} from "react-icons/io5";

import "./ProductFeatures.css";

const featureIcons = {
  
  bolt: FaBolt,
  gem: FaGem,
  award: FaAward,
  sodaShield: FaShieldAlt,
  star: FaStar,
  certificate: FaCertificate,
  filter: FaFilter,
  waterShield: FaShieldAlt,
  droplet: FaHandHoldingWater,
  water:FaWater,
  nibuaRefresh: FaRegLemon,
  nibuaSparkle: GiSparkles,
  nibuaChilled: GiThermometerCold,
  nibuaHygiene: FaShieldAlt,
  nibuaQuality: GiThreeLeaves,
  jeeraAuthentic: FaSeedling,
  jeeraFizz: IoSparklesOutline,
  jeeraPremium: GiThreeLeaves,
  jeeraHygiene: FaShieldAlt,
  jeeraChilled: GiThermometerCold,
  jeeraTraditional: FaThumbsUp
};
  

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
                featureIcons[feature.icon] || FaStar;

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