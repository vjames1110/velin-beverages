import { useState } from "react";
import { motion } from "framer-motion";

import { sendProductInquiryEmail } from "../../../services/emailService";

import "./ProductInquiry.css";

export default function ProductInquiry({
  productName,
}) {

  const initialFormState = {
    product_name: productName,
    from_name: "",
    mobile: "",
    reply_to: "",
    city: "",
    business_type: "",
    company: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });


  const handleChange = (e) => {

    const {
      name,
      value,
    } = e.target;


    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    setStatus({
      type: "",
      message: "",
    });


    try {

      await sendProductInquiryEmail(formData);


      setStatus({
        type: "success",
        message:
          `Thank you for your interest in ${productName}. Our team will contact you shortly.`,
      });


      setFormData({
        ...initialFormState,
        product_name: productName,
      });


    } catch (error) {

      console.error(
        "Product inquiry error:",
        error
      );


      setStatus({
        type: "error",
        message:
          "Unable to send your enquiry. Please try again later.",
      });

    } finally {

      setLoading(false);

    }

  };


  return (
    <section
      id="product-enquiry"
      className="product-inquiry"
    >

      <div className="product-inquiry-container">

        <motion.div
          className="inquiry-header"
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

          <span className="inquiry-tag">
            PRODUCT ENQUIRY
          </span>


          <h2>
            Enquire About {productName}
          </h2>


          <p>
            Looking for bulk orders,
            dealership opportunities,
            distribution partnerships,
            or product information?
            Get in touch with our team.
          </p>

        </motion.div>


        <motion.div
          className="inquiry-form-wrapper"
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
        >

          <form
            className="inquiry-form"
            onSubmit={handleSubmit}
          >

            <div className="form-grid">


              <input
                type="text"
                name="from_name"
                placeholder="Full Name"
                value={formData.from_name}
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
                type="email"
                name="reply_to"
                placeholder="Email Address"
                value={formData.reply_to}
                onChange={handleChange}
                required
              />


              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                required
              />


              <select
                name="business_type"
                value={formData.business_type}
                onChange={handleChange}
                required
              >

                <option value="">
                  Business Type
                </option>

                <option value="Distributor">
                  Distributor
                </option>

                <option value="Retailer">
                  Retailer
                </option>

                <option value="Restaurant">
                  Restaurant
                </option>

                <option value="Hotel">
                  Hotel
                </option>

                <option value="Cafe">
                  Cafe
                </option>

                <option value="Wholesaler">
                  Wholesaler
                </option>

                <option value="Other">
                  Other
                </option>

              </select>


              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
              />

            </div>


            <textarea
              rows="6"
              name="message"
              placeholder="Tell us about your requirement..."
              value={formData.message}
              onChange={handleChange}
              required
            />


            {
              status.message && (
                <p
                  className={`form-message ${status.type}`}
                >
                  {status.message}
                </p>
              )
            }


            <button
              type="submit"
              className="inquiry-submit-btn"
              disabled={loading}
            >

              {
                loading
                  ? "Sending..."
                  : "Send Enquiry"
              }

            </button>

          </form>

        </motion.div>

      </div>

    </section>
  );
}