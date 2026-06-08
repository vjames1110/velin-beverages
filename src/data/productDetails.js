import sodaBanner from "../assets/images/hero/velin-soda-banner.png";
import waterBanner from "../assets/images/hero/velin-water-banner.png";
import nibuaBanner from "../assets/images/hero/velin-nibua-banner.png";
import jeeraBanner from "../assets/images/hero/velin-jeera-banner.png";

import velinSodaImage from "../assets/images/products/velin-soda.jpeg";
import velinWaterImage from "../assets/images/products/velin-water.jpeg";
import velinNibuaImage from "../assets/images/products/velin-nibua.jpeg";
import velinJeeraImage from "../assets/images/products/velin-jeera.jpeg";

import sodaTrustImage from "../assets/images/products/sodaTrust.jpeg"
import waterTrustImage from "../assets/images/products/waterTrust.jpeg"

const productDetails = {
  soda: {
    slug: "soda",

    hero: {
      title: "Velin Soda",
      subtitle: "Light Up the Night",
      description:
        "Velin soda is a crystal clear, strong carbonated beverage that delivers powerful fizz and exceptional refreshment in every sip. Perfect for mixing, mocktails, or whenever you need an instant burst of freshness.",
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
        icon: "bolt",
        title: "Strong Carbonation",
        description:
          "Powerful fizz for an extra refreshing experience.",
      },
      {
        icon: "gem",
        title: "Crystal Clear",
        description:
          "Purified formulation for exceptional clarity and quality.",
      },
      {
        icon: "award",
        title: "Premium Quality",
        description:
          "Produced using modern manufacturing standards.",
      },
      {
        icon: "sodaShield",
        title: "Hygienically Packed",
        description:
          "Processed and packed under strict hygienic conditions.",
      },
      {
        icon: "star",
        title: "Trusted Taste",
        description:
          "A refreshing taste trusted by customers and businesses.",
      },
    ],
    trustImage: sodaTrustImage,

    usage: [
      {
        icon: "sodaMocktails",
        title: "Mocktails",
      },
      {
        icon: "sodaCocktails",
        title: "Cocktails",
      },
      {
        icon: "sodaParty",
        title: "Parties",
      },
      {
        icon: "sodaRestaurant",
        title: "Restaurants",
      },
      {
        icon: "sodaTravel",
        title: "Travel",
      },
      {
        icon: "sodaSun",
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
        "Pure, hygienic and refreshing packaged drinking water processed through advanced purification technology. Every drop is tasted for quality and packed under strict standards.",
      bannerImage: waterBanner,
      productImage: velinWaterImage,
    },
    overview: {
      title: "Velin-Premium Packaged Drinking Water",
      subtitle: "Essence of Purity",
      description:
        "Pure, hygienic and refreshing packaged drinking water processed through advanced purification technology. Every drop is tasted for quality and packed under strict standards.",
      image: velinWaterImage,
    },

    features: [
      {
        icon: "certificate",
        title: "ISI Certified Packaged Drinking Water",
        description:
          "Manufactured in accordance with ISI Standards to ensure the highest level of quality and safey.",
      },
      { icon:"filter",
        title: "Multi-Stage Purification",
        description:
          "Advanced multi-stage filtiration removes impurities and ensures clean, safe and healthy drinking water.",
      },
      { icon:"waterShield",
        title: "Ozonized for Safety",
        description:
          "Ozonization process keeps the water pure, safe and free from harmful microorganisms.",
      },
      { icon:"droplet",
        title: "Hygienically Packed",
        description:
          "Packed in a fully automated and hygenic environment to protect purity and freshness.",
      },
      { icon:"water",
        title: "Consistend Taste & Quality",
        description:
          "Every bottle of Velin offers consistent quality and a refreshing taste you can trust.",
      },
    ],
    trustImage: waterTrustImage,

    sizes: [
      {
        size: "250 ML",
      },
      {
        size: "500 ML",
      },
      {
        size: "1 Litre"
      }
    ],

    usage: [
      {
        icon: "waterCar",
        title: "ON THE GO",
      },
      {
        icon: "waterHome",
        title: "AT HOME",
      },
      {
        icon: "waterUsers",
        title: "PARTIES",
      },
      {
        icon: "waterRestaurant",
        title: "RESTAURANTS",
      },
      {
        icon: "waterDroplet",
        title: "STAY HYDRATED"
      },
      {
        icon: "waterOffice",
        title: "OFFICE USAGE"
      }
    ],

    certifications: [
      "Safe & Hygienic",
      "Trusted by Thousands",
      "FSSAI Certified",
      "Made in India",
    ],

    specifications: [
      {
        label: "Product Type",
        value: "Packaged Drinking Water",
      },
      {
        label: "Category",
        value: "Water",
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
        label: "Usage",
        value: "Drinking",
      },
      {
        label: "Storage",
        value: "Store in a Cool & Dry Place",
      },
    ],

    gallery: [
      velinWaterImage,
      velinWaterImage,
      velinWaterImage,
      velinWaterImage,
    ],
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