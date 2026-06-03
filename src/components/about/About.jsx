import { motion } from "framer-motion";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about">

      <div className="about-bg-circle"></div>
      <div className="about-bg-circle two"></div>

      <motion.div
        className="about-left"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="section-tag">
          ABOUT VELIN
        </span>

        <h2>
          Refreshing Lives Through
          Quality Beverages
        </h2>

        <p>
          Velin Beverages is committed to
          delivering premium quality
          refreshment through innovative
          beverage products.

          Our mission is to create beverages
          that combine purity, taste and
          trust while serving customers,
          retailers and distributors.
        </p>

      </motion.div>

      <motion.div
        className="about-right"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="glass-card">

          <h3>Director's Message</h3>

          <p>
            We believe every sip should
            reflect quality, purity and
            customer satisfaction.

            Velin aims to become a trusted
            beverage brand across India.
          </p>

        </div>
      </motion.div>

    </section>
  );
}