import sodaBanner from "../assets/images/hero/velin-soda-banner.png";
import waterBanner from "../assets/images/hero/velin-water-banner.png";
import nibuaBanner from "../assets/images/hero/velin-nibua-banner.png";
import jeeraBanner from "../assets/images/hero/velin-jeera-banner.png";

import velinSodaImage from "../assets/images/products/velin-soda.jpeg";
import velinWaterImage from "../assets/images/products/velin-water.jpeg";
import velinNibuaImage from "../assets/images/products/velin-nibua.jpeg";
import velinJeeraImage from "../assets/images/products/velin-jeera.jpeg";

import sodaTrustImage from "../assets/images/products/sodaTrust.jpeg"

const productDetails = {
  soda: {
    slug: "soda",

    hero: {
      title: "Velin Soda",
      subtitle: "Pure Sparkle. Powerful Refreshment.",
      description:
        "Experience the crisp taste and strong carbonation of Velin Soda. Crafted with quality and consistency for every refreshing moment.",
      bannerImage: sodaBanner,
      productImage: velinSodaImage,
    },

    overview: {
      title: "Premium Carbonated Refreshment",
      subtitle: "Built for Every Occasion",
      description:
        "Velin Soda is a premium carbonated beverage designed to deliver a strong, refreshing fizz with every serving. Produced under strict quality standards and hygienic conditions, it is ideal for homes, restaurants, cafes, catering services, mocktails, cocktails, and special occasions.",
      image: velinSodaImage,
    },

    features: [
      {
        title: "Strong Carbonation",
        description:
          "Powerful fizz for an extra refreshing experience.",
      },
      {
        title: "Crystal Clear",
        description:
          "Purified formulation for exceptional clarity and quality.",
      },
      {
        title: "Premium Quality",
        description:
          "Produced using modern manufacturing standards.",
      },
      {
        title: "Hygienically Packed",
        description:
          "Processed and packed under strict hygienic conditions.",
      },
      {
        title: "Trusted Taste",
        description:
          "A refreshing taste trusted by customers and businesses.",
      },
    ],
    trustImage: sodaTrustImage,

    usage: [
      {
        title: "Mocktails",
      },
      {
        title: "Cocktails",
      },
      {
        title: "Parties",
      },
      {
        title: "Restaurants",
      },
      {
        title: "Travel",
      },
      {
        title: "Daily Refreshment",
      },
    ],

    certifications: [
      "Consistent Quality",
      "Best Taste",
      "Safe & Hygienic",
      "Trusted by Thousands",
      "FSSAI Certified",
      "PET Packaging",
      "Made in India",
    ],

    specifications: [
      {
        label: "Product Type",
        value: "Carbonated Beverage",
      },
      {
        label: "Category",
        value: "Soda Water",
      },
      {
        label: "Packaging",
        value: "Food Grade PET Bottle",
      },
      {
        label: "Quality Standard",
        value: "Hygienically Processed",
      },
      {
        label: "Appearance",
        value: "Crystal Clear",
      },
      {
        label: "Taste Profile",
        value: "Refreshing & Neutral",
      },
      {
        label: "Usage",
        value: "Drinking, Mocktails & Cocktails",
      },
      {
        label: "Storage",
        value: "Store in a Cool & Dry Place",
      },
    ],

    gallery: [
      velinSodaImage,
      velinSodaImage,
      velinSodaImage,
      velinSodaImage,
    ],
  },

  water: {
    slug: "water",

    hero: {
      title: "Velin Packaged Drinking Water",
      subtitle: "Essence of Purity",
      description:
        "Pure, hygienic and carefully packaged drinking water for daily hydration.",
      bannerImage: waterBanner,
      productImage: velinWaterImage,
    },
  },

  nibua: {
    slug: "nibua",

    hero: {
      title: "Velin Nibua",
      subtitle: "Real Taste No Waste",
      description:
        "Tangy lemon flavor crafted for instant refreshment.",
      bannerImage: nibuaBanner,
      productImage: velinNibuaImage,
    },
  },

  jeera: {
    slug: "jeera",

    hero: {
      title: "Velin Jeera",
      subtitle: "Desi Jeera Desi Taste",
      description:
        "The perfect blend of jeera flavor and cooling refreshment.",
      bannerImage: jeeraBanner,
      productImage: velinJeeraImage,
    },
  },
};

export default productDetails;