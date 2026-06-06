import Navbar from "../../components/layout/Navbar/Navbar";
import Hero from "../../components/hero/Hero";
import About from "../../components/about/About";
import WhyChoose from "../../components/common/WhyChooseVelin";
import ProductSection from "../../components/products/ProductSection";
import Stats from "../../components/stats/Stats";
import DistributorCTA from "../../components/distributor/DistributorCTA";
import ContactSection from "../../components/contact/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhyChoose />
      <ProductSection />

      {/* Wave Divider */}
      <div className="wave-divider">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#0077ff"
            d="M0,192L48,181.3C96,171,192,149,288,133.3C384,117,480,107,576,128C672,149,768,203,864,224C960,245,1056,235,1152,208C1248,181,1344,139,1392,117.3L1440,96L1440,320L0,320Z"
          />
        </svg>
      </div>

      <Stats />
      <DistributorCTA />
      <ContactSection />
    </>
  );
}