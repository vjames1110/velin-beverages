import { motion } from "framer-motion";
import "./ProductHero.css";

export default function ProductHero({ hero }) {
  return (
    <section
      className="product-hero"
      style={{
        backgroundImage: `url(${hero.bannerImage})`,
      }}
    >
      <div className="product-hero-overlay"></div>

      <div className="product-hero-container">

        <motion.div
          className="product-hero-content"
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <span className="product-hero-tag">
            PREMIUM BEVERAGE
          </span>

          <h1>
            {hero.title}
          </h1>

          <h2>
            {hero.subtitle}
          </h2>

          <p>
            {hero.description}
          </p>

          <div className="product-hero-buttons">

            <a
              href="#product-enquiry"
              className="hero-primary-btn"
            >
              Enquire Now
            </a>

            <a
              href="https://wa.me/919238108801"
              target="_blank"
              rel="noreferrer"
              className="hero-secondary-btn"
            >
              WhatsApp Us
            </a>

          </div>
        </motion.div>

        <motion.div
          className="product-hero-image"
          initial={{
            opacity: 0,
            x: 50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
        >
          <img
            src={hero.productImage}
            alt={hero.title}
          />
        </motion.div>

      </div>
    </section>
  );
}