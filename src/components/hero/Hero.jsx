import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import heroSlides from "../../data/heroSlides";

import "./Hero.css";

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[current];

  return (
    <section className="hero">
      <AnimatePresence mode="sync">
        <motion.div
          key={slide.id}
          className="hero-slide"
          style={{
            backgroundImage: `url(${slide.image})`,
          }}
          initial={{
            opacity: 0,
            scale: 1.05,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.03,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        >
          <div className="hero-overlay"></div>

          <div className="hero-content">
            <motion.h1
              key={slide.title}
              initial={{
                opacity: 0,
                y: 50,
                filter: "blur(8px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.8,
              }}
            >
              {slide.title}
            </motion.h1>

            <motion.h2
              key={slide.subtitle}
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
            >
              {slide.subtitle}
            </motion.h2>

            <motion.p
              key={slide.description}
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
            >
              {slide.description}
            </motion.p>

            <div className="hero-buttons">
              <a href="#products" className="hero-btn">
                Explore Products
              </a>

              <a href="#contact" className="hero-btn outline">
                Become Distributor
              </a>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="slider-dots">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={current === index ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
}
