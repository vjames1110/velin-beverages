import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

import { motion } from "framer-motion";

import "./Contact.css";

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Left Side */}

        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <span className="section-tag">CONTACT US</span>

          <h2>Let's Connect</h2>

          <p>
            Have questions about our products, distribution network, or business
            opportunities? Get in Touch with us.
          </p>

          <div className="info-item">
            <FaPhoneAlt />
            <span>+91- 92381 08801</span>
          </div>

          <div className="info-item">
            <FaEnvelope />
            <span>pkpureindustries@gmail.com</span>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt />
            <span>Jabalpur, India</span>
          </div>
          <div className="info-item">
            <FaClock />
            <span>Mon - Sat | 9 AM - 6 PM</span>
          </div>
        </motion.div>

        {/* Right Side */}

        <motion.div
          className="contact-form-wrapper"
          initial={{
            opacity: 0,
            x: 0,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
        >

            <form className="contact-form">
                <input 
                    type="text"
                    placeholder="Full Name"
                />
                <input 
                    type="email"
                    placeholder="Email Address"
                />
                <input 
                    type="tel"
                    placeholder="Mobile Number"
                />
                <input 
                    type="text"
                    placeholder="Company Name"
                />
                <input 
                    type="text"
                    placeholder="Subject"
                />

                <textarea 
                    rows="5"
                    placeholder="Message"
                />

                <button
                    type="submit"
                >
                    Send Enquiry
                </button>
            </form>
        </motion.div>
      </div>
    </section>
  );
}
