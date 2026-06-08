import { motion } from "framer-motion";
import WhatsAppButton from "../common/WhatsappButton";
import "./DistributorCTA.css";

export default function DistributorCTA({
    applyLink = "/#contact",
}) {
    return (
        <section className="distributor-section">
            <motion.div
                className="distributor-card"
                initial={{ 
                    opacity: 0,
                    y: 50, 
                    }}
                    whileInView={{ 
                        opacity: 1,
                        y: 0, 
                    }}
                    viewport={{ 
                        once: true,
                    }}
                    transition={{ 
                        duration: 0.8 
                    }}>

                        <span className="cta-tag">
                            DISTRIBUTOR OPPORTUNITY
                        </span>

                        <h2>
                            Become a Velin Distributor
                        </h2>
                        <p>
                            Join our growing distribution 
                            network and partner with one of 
                            India's emerging beverage brands.
                        </p>

                        <div className="cta-buttons">

                            <a
                                href={applyLink}
                                className="primary-btn">
                                Apply Now
                            </a>

                            <a
                                href="/#products"
                                className="secondary-btn">
                                Learn More
                            </a>
                        </div>

            </motion.div>
        </section>
    )
}
