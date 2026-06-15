import emailjs from "@emailjs/browser";

const SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID;

const CONTACT_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID;

const PRODUCT_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_PRODUCT_TEMPLATE_ID;

const PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const sendContactEmail = async (
  templateParams
) => {
  return emailjs.send(
    SERVICE_ID,
    CONTACT_TEMPLATE_ID,
    templateParams,
    PUBLIC_KEY
  );
};

export const sendProductInquiryEmail = async (
  templateParams
) => {
  return emailjs.send(
    SERVICE_ID,
    PRODUCT_TEMPLATE_ID,
    templateParams,
    PUBLIC_KEY
  );
};

console.log(import.meta.env.VITE_EMAILJS_SERVICE_ID);
console.log(import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID);
console.log(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);