import sodaBanner from "../assets/images/products/soda-1920x700.png";
import waterBanner from "../assets/images/products/water-1920x700.png";
import nibuaBanner from "../assets/images/products/nibua-1920x700.png";
import jeeraBanner from "../assets/images/products/jeera-1920x700.png";

import velinSodaImage from "../assets/images/products/velin-soda.jpeg";
import velinWaterImage from "../assets/images/products/velin-water.jpeg";
import velinNibuaImage from "../assets/images/products/velin-nibua.jpeg";
import velinJeeraImage from "../assets/images/products/velin-jeera.jpeg";

import sodaTrustImage from "../assets/images/products/sodaTrust.jpeg";
import waterTrustImage from "../assets/images/products/waterTrust.jpeg";
import nibuaTrustImage from "../assets/images/products/nibuaTrust.jpeg";
import jeeraTrustImage from "../assets/images/products/jeeraTrust.jpeg";

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
      highlights: [
        {
          title: "Premium Quality",
          description: "Manufactured using modern production standards.",
        },
        {
          title: "Strong Carbonation",
          description: "Powerful fizz for a refreshing experience.",
        },
        {
          title: "Trusted Beverage",
          description: "Preferred by restaurants and consumers",
        },
      ],
      sizes: [
        {
          size: "500 ml",
        },
      ],
    },
    sizes: [
      {
        size: "500 ml",
      },
    ],

    features: [
      {
        icon: "bolt",
        title: "Strong Carbonation",
        description: "Powerful fizz for an extra refreshing experience.",
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
        description: "Produced using modern manufacturing standards.",
      },
      {
        icon: "sodaShield",
        title: "Hygienically Packed",
        description: "Processed and packed under strict hygienic conditions.",
      },
      {
        icon: "star",
        title: "Trusted Taste",
        description: "A refreshing taste trusted by customers and businesses.",
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
        label: "Quantity",
        value: "500 ml"
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

    gallery: [velinSodaImage, velinSodaImage, velinSodaImage, velinSodaImage],
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
      highlights: [
        {
          title: "Advanced Purification",
          description: "Multi-Stage purification process for superior quality.",
        },
        {
          title: "ISI Certified",
          description: "Manufactured according to ISI standards.",
        },
        {
          title: "Healthy Hydration",
          description: "Safe and refreshing drinking water for daily use.",
        },
      ],
      sizes: [
        {
          size: "250 ML",
        },
        {
          size: "500 ML",
        },
        {
          size: "1 Litre",
        },
      ],
    },
    sizes: [
      {
        size: "250 ML",
      },
      {
        size: "500 ML",
      },
      {
        size: "1 Litre",
      },
    ],

    features: [
      {
        icon: "certificate",
        title: "ISI Certified Packaged Drinking Water",
        description:
          "Manufactured in accordance with ISI Standards to ensure the highest level of quality and safey.",
      },
      {
        icon: "filter",
        title: "Multi-Stage Purification",
        description:
          "Advanced multi-stage filtiration removes impurities and ensures clean, safe and healthy drinking water.",
      },
      {
        icon: "waterShield",
        title: "Ozonized for Safety",
        description:
          "Ozonization process keeps the water pure, safe and free from harmful microorganisms.",
      },
      {
        icon: "droplet",
        title: "Hygienically Packed",
        description:
          "Packed in a fully automated and hygenic environment to protect purity and freshness.",
      },
      {
        icon: "water",
        title: "Consistend Taste & Quality",
        description:
          "Every bottle of Velin offers consistent quality and a refreshing taste you can trust.",
      },
    ],
    trustImage: waterTrustImage,

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
        title: "STAY HYDRATED",
      },
      {
        icon: "waterOffice",
        title: "OFFICE USAGE",
      },
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
        label: "Quantity",
        value: "250 ml | 500 ml | 1 Litre"
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
      subtitle: "Real Lemon Taste, Real Refreshment",
      description:
        "Velin Nibua is a sparkling lemon beverage crafted to deliver the perfect balance of zesty lemon flavour and refreshing fizz. Made with quality ingredients and packed under hygenic conditions, it provides an instant cooling sensation and a delightful citrus experience.",
      bannerImage: nibuaBanner,
      productImage: velinNibuaImage,
    },
    overview: {
      title: "Velin-Premium Lemon Drink",
      subtitle: "Real Lemon Taste, Real Refreshment",
      description:
        "Velin Nibua is a sparkling lemon beverage crafted to deliver the perfect balance of zesty lemon flavour and refreshing fizz. Made with quality ingredients and packed under hygenic conditions, it provides an instant cooling sensation and a delightful citrus experience.",
      image: velinNibuaImage,
      highlights: [
        {
          title: "Real Lemon Taste",
          description: "Refreshing Lemon flavour in every sip.",
        },
        {
          title: "Instant Refreshment",
          description: "Perfect for beating the heat.",
        },
        {
          title: "Premium Ingredients",
          description: "Made with carefully selected ingredients.",
        },
      ],
      sizes: [
        {
          size: "160 ml",
        },
      ],
    },
    sizes: [
      {
        size: "160 ml",
      },
    ],

    features: [
      {
        icon: "nibuaRefresh",
        title: "Refreshing Lemon Flavour",
        description:
          "Delicious citrus taste that instantly refreshes and energizes.",
      },
      {
        icon: "nibuaSparkle",
        title: "Sparkling Fizz",
        description:
          "Light Carbonation for a lively and enjoyable drinking experience.",
      },
      {
        icon: "nibuaChilled",
        title: "Best Served Chilled",
        description:
          "Delivers maximum freshness and cooling refreshment when served cold.",
      },
      {
        icon: "nibuaHygiene",
        title: "Hygenically Manufactured",
        description:
          "Produced and packed under strict quality and hygiene standards.",
      },
      {
        icon: "nibuaQuality",
        title: "Premium Quality",
        description:
          "Carefully selected ingredients for consistent taste and quality.",
      },
    ],
    trustImage: nibuaTrustImage,

    usage: [
      {
        icon: "nibuaFamily",
        title: "Family Gatherings",
      },
      {
        icon: "nibuaRestaurants",
        title: "Restaurants & Hotels",
      },
      {
        icon: "nibuaRetail",
        title: "Retail Stores",
      },
      {
        icon: "nibuaTravel",
        title: "Travel & Outdoor Activities",
      },
      {
        icon: "nibuaDaily",
        title: "Daily Refreshment",
      },
      {
        icon: "nibuaParty",
        title: "Party",
      },
    ],

    certifications: [
      "Safe & Hygienic",
      "Trusted by Thousands",
      "FSSAI Certified",
      "Made in India",
      "Consistent Taste & Quality",
      "Made with Quality Ingredients",
    ],

    specifications: [
      {
        label: "Product Type",
        value: "Lemon Drink",
      },
      {
        label: "Quantity",
        value: "160 ml"
      },
      {
        label: "Category",
        value: "Coldrink",
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
        value: "Sparkling Fizz",
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
      velinNibuaImage,
      velinNibuaImage,
      velinNibuaImage,
      velinNibuaImage,
    ],
  },

  jeera: {
    slug: "jeera",

    hero: {
      title: "Velin Jeera",
      subtitle: "Desi Jeera Desi Taste",
      description:
        "Velin Jeera is a refreshing cumin based beverage that brings you the perfect blend of authentic Indian taste and refreshing fizz. Made with carefully selected ingredients and packed under hygenic conditions for your safety and satisfaction.",
      bannerImage: jeeraBanner,
      productImage: velinJeeraImage,
    },

    overview: {
      title: "Velin-Premium Jeera Drink",
      subtitle: "Desi Jeera Desi Taste",
      description:
        "Velin Jeera is a refreshing cumin based beverage that brings you the perfect blend of authentic Indian taste and refreshing fizz. Made with carefully selected ingredients and packed under hygenic conditions for your safety and satisfaction.",
      image: velinJeeraImage,
      highlights: [
        {
          title: "Authentic Jeera Flavour",
          description: "Traditional Jeera taste consumers love.",
        },
        {
          title: "Desi Refreshment",
          description: "A perfect blend of taste and refreshment.",
        },
        {
          title: "Quality Assured",
          description: "Manufactured under hygienic conditions.",
        },
      ],
      sizes: [
        {
          size: "160 ml",
        },
      ],
    },

    sizes: [
      {
        size: "160 ml",
      },
    ],

    features: [
      {
        icon: "jeeraAuthentic",
        title: "Authentic Jeera Flavour",
        description:
          "Prepared with the rich taste of trditional cumin for a truly desi experience.",
      },
      {
        icon: "jeeraFizz",
        title: "Refreshing Fizzy Beverage",
        description:
          "Light carbonation provides refreshing and enjoyable drinking experience.",
      },
      {
        icon: "jeeraPremium",
        title: "Premium Quality Ingredients",
        description:
          "Manufactured using quality-approved ingredients and modern processing methods.",
      },
      {
        icon: "jeeraHygiene",
        title: "Hygenically Packed",
        description:
          "Produced and packed in a clean and controlled environment.",
      },
      {
        icon: "jeeraChilled",
        title: "Best Served Chilled",
        description: "Delivers maximum refreshment and taste when served cold",
      },
      {
        icon: "jeeraTraditional",
        title: "Traditional Taste, Modern Quality",
        description:
          "A perfect blend of Indian heritage and modern beverage standards.",
      },
    ],
    trustImage: jeeraTrustImage,

    usage: [
      {
        icon: "jeeraFamily",
        title: "Family Gatherings",
      },
      {
        icon: "jeeraRestaurants",
        title: "Restaurants & Hotels",
      },
      {
        icon: "jeeraRetail",
        title: "Retail Stores & Supermarkets",
      },
      {
        icon: "jeeraTravel",
        title: "Travel & Outdoor Activities",
      },
      {
        icon: "jeeraDaily",
        title: "Daily Refreshment",
      },
      {
        icon: "jeeraParty",
        title: "Party",
      },
    ],

    certifications: [
      "Safe & Hygienic",
      "Trusted by Thousands",
      "FSSAI Certified",
      "Made in India",
      "Consistent Taste & Quality",
      "Made with Quality Ingredients",
    ],

    specifications: [
      {
        label: "Product Type",
        value: "Jeera(Cumin Seed) Drink",
      },
      {
        label: "Quantity",
        value: "160 ml"
      },
      {
        label: "Category",
        value: "Coldrink",
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
        value: "Sparkling Golden Fizz",
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
      velinJeeraImage,
      velinJeeraImage,
      velinJeeraImage,
      velinJeeraImage,
    ],
  },
};

export default productDetails;
