import { motion } from "framer-motion";
import "./DistributorCTA.css";

export default function DistributorCTA() {
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

                            <button className="primary-btn">
                                Apply Now
                            </button>

                            <button className="secondary-btn">
                                Learn More
                            </button>
                        </div>

            </motion.div>
        </section>
    )
}
