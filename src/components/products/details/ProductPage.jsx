import Navbar from "../../layout/Navbar/Navbar";
import Footer from "../../layout/Footer/Footer";

import DistributorCTA from "../../distributor/DistributorCTA";

import WhatsAppButton from "../../common/WhatsappButton";

import ProductHero from "./ProductHero";
import ProductOverview from "./ProductOverview";
import ProductFeatures from "./ProductFeatures";
import ProductUsage from "./ProductUsage";
import ProductTrust from "./ProductTrust";
import ProductSpecifications from "./ProductSpecifications";
import ProductInquiry from "./ProductInquiry";
import RelatedProducts from "./RelatedProducts";

export default function ProductPage({
  product,
}) {
  return (
    <>
      <Navbar />

      <ProductHero
        hero={product.hero}
      />

      <ProductOverview
        overview={product.overview}
        sizes={product.sizes}
      />

      <ProductFeatures
        features={product.features}
        title={`Why Choose ${product.hero.title}`}
      />

      <ProductUsage
        usage={product.usage}
      />

      <ProductTrust
        certifications={
          product.certifications
        }
        image={product.trustImage}
      />

      <ProductSpecifications
        specifications={
          product.specifications
        }
      />

      <DistributorCTA />

      <ProductInquiry
        productName={
          product.hero.title
        }
      />

      <RelatedProducts
        currentProduct={
          product.slug
        }
      />

      <Footer />

      <WhatsAppButton />
    </>
  );
}