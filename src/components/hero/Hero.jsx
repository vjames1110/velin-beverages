import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import heroSlides from "../../data/heroSlides";

import "./Hero.css";

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent(
        (prev) => (prev + 1) % heroSlides.length
      );
    }, 4000);

    return () => clearInterval(slider);
  }, []);

  const slide = heroSlides[current];

  return (
    <section id="home" className="hero">

      {/* LEFT CONTENT */}
      <div className="hero-content">

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Refreshing Every Moment
          <br />
          With Velin Beverages
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
          }}
        >
          Premium Soda, Packaged Drinking Water,
          Nibua Lemon Drink & Jeera Refreshment.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
          }}
        >
          <button>
            Explore Products
          </button>

          <button className="outline">
            Become Distributor
          </button>
        </motion.div>

      </div>

      {/* RIGHT PRODUCT SHOWCASE */}
      <div className="hero-image">

        <div className="slider-container">

          {/* COLOR GLOW */}
          <motion.div
            key={`glow-${slide.id}`}
            className="glow"
            style={{
              background: slide.color,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.55 }}
            transition={{ duration: 0.6 }}
          />

          {/* PRODUCT IMAGE */}
          <AnimatePresence mode="wait">

            <motion.img
              key={slide.id}
              src={slide.image}
              alt={slide.title}
              className="hero-product"

              initial={{
                opacity: 0,
                scale: 0.85,
                y: 20,
              }}

              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}

              exit={{
                opacity: 0,
                scale: 0.85,
                y: -20,
              }}

              transition={{
                duration: 0.6,
              }}
            />

          </AnimatePresence>

          {/* PRODUCT NAME */}
          <motion.h3
            key={`title-${slide.id}`}
            className="product-title"
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            {slide.title}
          </motion.h3>

          {/* DOTS */}
          <div className="slider-dots">

            {heroSlides.map((_, index) => (
              <button
                key={index}
                type="button"
                className={
                  current === index
                    ? "dot active"
                    : "dot"
                }
                onClick={() =>
                  setCurrent(index)
                }
                aria-label={`Slide ${index + 1}`}
              />
            ))}

          </div>

        </div>

      </div>

      {/* BACKGROUND LIQUID WAVES */}

      <div className="liquid-wave wave1"></div>
      <div className="liquid-wave wave2"></div>

      {/* BACKGROUND CARBONATION PARTICLE */}

      <div className="particle p1"></div>
      <div className="particle p2"></div>
      <div className="particle p3"></div>
      <div className="particle p4"></div>
      <div className="particle p5"></div>

      {/* BACKGROUND BUBBLES */}
      <div className="bubble b1"></div>
      <div className="bubble b2"></div>
      <div className="bubble b3"></div>

    </section>
  );
}