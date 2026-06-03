import { motion } from "framer-motion";
import "./Hero.css";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero"
    >
      <div className="hero-content">

        <motion.h1
          initial={{
            opacity:0,
            y:50
          }}
          animate={{
            opacity:1,
            y:0
          }}
          transition={{
            duration:1
          }}
        >
          Refreshing Every Moment
        </motion.h1>

        <p>
          Premium Soda, Pure Water
          & Refreshing Lemon Drinks
        </p>

        <div className="hero-buttons">
          <button>
            Explore Products
          </button>

          <button className="outline">
            Contact Us
          </button>
        </div>

      </div>

      <div className="hero-image">

        <img
          src="https://images.unsplash.com/photo-1629203851122-3726ecdf080e"
          alt="drink"
        />

      </div>

      <div className="bubble b1"></div>
      <div className="bubble b2"></div>
      <div className="bubble b3"></div>

    </section>
  );
}