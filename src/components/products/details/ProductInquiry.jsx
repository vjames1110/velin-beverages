import { motion } from "framer-motion";
import "./ProductInquiry.css";

export default function ProductInquiry({
  productName,
}) {
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
          <form className="inquiry-form">

            <input
              type="hidden"
              value={productName}
            />

            <div className="form-grid">

              <input
                type="text"
                placeholder="Full Name"
              />

              <input
                type="tel"
                placeholder="Mobile Number"
              />

              <input
                type="email"
                placeholder="Email Address"
              />

              <input
                type="text"
                placeholder="City"
              />

              <select defaultValue="">
                <option value="" disabled>
                  Business Type
                </option>

                <option>
                  Distributor
                </option>

                <option>
                  Retailer
                </option>

                <option>
                  Restaurant
                </option>

                <option>
                  Hotel
                </option>

                <option>
                  Cafe
                </option>

                <option>
                  Wholesaler
                </option>

                <option>
                  Other
                </option>
              </select>

              <input
                type="text"
                placeholder="Company Name"
              />

            </div>

            <textarea
              rows="6"
              placeholder="Tell us about your requirement..."
            />

            <button
              type="submit"
              className="inquiry-submit-btn"
            >
              Send Enquiry
            </button>

          </form>
        </motion.div>

      </div>
    </section>
  );
}