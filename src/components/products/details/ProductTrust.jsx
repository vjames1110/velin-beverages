import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaCertificate,
  FaShieldAlt,
} from "react-icons/fa";

import "./ProductTrust.css";

export default function ProductTrust({
  certifications,
  image,
}) {
  return (
    <section className="product-trust">

      <div className="product-trust-container">

        <motion.div
          className="trust-content"
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
            duration: 0.7,
          }}
        >
          <span className="trust-tag">
            TRUST & QUALITY
          </span>

          <h2>
            Quality You Can Trust
          </h2>

          <p>
            Every Velin product is manufactured
            with strict quality controls,
            hygienic processes, and consistent
            standards to ensure customer
            satisfaction and product excellence.
          </p>

          <div className="trust-list">

            {certifications.map(
              (item, index) => (
                <div
                  key={index}
                  className="trust-item"
                >
                  <div className="trust-icon">
                    {index % 3 === 0 ? (
                      <FaCheckCircle />
                    ) : index % 3 === 1 ? (
                      <FaCertificate />
                    ) : (
                      <FaShieldAlt />
                    )}
                  </div>

                  <span>
                    {item}
                  </span>
                </div>
              )
            )}

          </div>

        </motion.div>

        <motion.div
          className="trust-image"
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
            duration: 0.7,
            delay: 0.2,
          }}
        >
          <div className="trust-image-card">

            <img
              src={image}
              alt="Velin Product"
            />

          </div>
        </motion.div>

      </div>

    </section>
  );
}