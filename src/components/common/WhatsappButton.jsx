import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButton.css";

export default function WhatsAppButton() {

  const phone = "919238108801";

  const message =
    "Hello Velin, I would like to know more about your products and business opportunities.";

  return (
    <a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-button"
    >
      <FaWhatsapp />
    </a>
  );
}