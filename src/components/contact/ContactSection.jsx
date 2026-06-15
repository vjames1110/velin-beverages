import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

import { motion } from "framer-motion";

import { sendContactEmail } from "../../services/emailService";

import "./Contact.css";

export default function ContactSection() {

  const initialFormState = {
    from_name: "",
    reply_to: "",
    mobile: "",
    company: "",
    subject: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });


  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };


  const handleSubmit = async (e) => {

    console.log("Form Submitted")

    e.preventDefault();

    setLoading(true);

    setStatus({
      type: "",
      message: "",
    });

    try {

      await sendContactEmail(formData);

      setStatus({
        type: "success",
        message:
          "Thank you for contacting Velin Beverages. Our team will connect with you shortly.",
      });

      setFormData(initialFormState);

    } catch (error) {

      console.error(
        "Contact email error:",
        error
      );

      setStatus({
        type: "error",
        message:
          "Something went wrong. Please try again after some time.",
      });

    } finally {

      setLoading(false);

    }

  };


  return (
    <section
      id="contact"
      className="contact-section"
    >
      <div className="contact-container">

        {/* Left Side */}

        <motion.div
          className="contact-info"
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
        >

          <span className="section-tag">
            CONTACT US
          </span>

          <h2>
            Let's Connect
          </h2>

          <p>
            Have questions about our products,
            distribution network, or business
            opportunities? Get in touch with us.
          </p>

          <div className="info-item">
            <FaPhoneAlt />
            <span>
              +91 92381 08801
            </span>
          </div>

          <div className="info-item">
            <FaEnvelope />
            <span>
              pkpureindustries@gmail.com
            </span>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt />
            <span>
              Jabalpur, India
            </span>
          </div>

          <div className="info-item">
            <FaClock />
            <span>
              Mon - Sat | 9 AM - 6 PM
            </span>
          </div>

        </motion.div>


        {/* Right Side */}

        <motion.div
          className="contact-form-wrapper"
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
        >

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <input
              type="text"
              name="from_name"
              placeholder="Full Name"
              value={formData.from_name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="reply_to"
              placeholder="Email Address"
              value={formData.reply_to}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <textarea
              rows="5"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            />


            {status.message && (
              <p
                className={`form-message ${status.type}`}
              >
                {status.message}
              </p>
            )}


            <button
              type="submit"
              disabled={loading}
            >
              {loading
                ? "Sending..."
                : "Send Enquiry"}
            </button>

          </form>

        </motion.div>

      </div>

    </section>
  );
}