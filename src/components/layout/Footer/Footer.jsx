import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* COLUMN 1 */}

        <div className="footer-column">
          <h3 className="footer-logo">Velin Beverages</h3>

          <p>
            Refreshing lives through premium quality beverages, innovation and
            trust.
          </p>
        </div>

        {/* COLUMN 2 */}

        <div className="footer-column">
          <h4>Quick Links</h4>

          <ul>
            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <a href="/#about">About</a>
            </li>

            <li>
              <a href="/#products">Products</a>
            </li>

            <li>
              <a href="/#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* COLUMN 3 */}

        <div className="footer-column">
          <h4>Products</h4>

          <ul>
            <li>
              <Link to="/soda">Velin Soda</Link>
            </li>

            <li>
              <Link to="/water">Velin Water</Link>
            </li>

            <li>
              <Link to="/nibua">Velin Nibua</Link>
            </li>

            <li>
              <Link to="/jeera">Velin Jeera</Link>
            </li>
          </ul>
        </div>

        {/* COLUMN 4 */}

        <div className="footer-column">
          <h4>Contact</h4>

          <div className="footer-contact">
            <p>
              <FaPhoneAlt />
              <span>+91 92381 08801</span>
            </p>

            <p>
              <FaEnvelope />
              <a href="mailto:pkpureindustries@gmail.com">
                pkpureindustries@gmail.com
              </a>
            </p>

            <p>
              <FaEnvelope />
              <a href="mailto:info@velinwater.com">info@velinwater.com</a>
            </p>

            <p>
              <FaEnvelope />
              <a href="mailto:sales@velinwater.com">sales@velinwater.com</a>
            </p>

            <p>
              <FaMapMarkerAlt />
              <span>India</span>
            </p>
          </div>

          <div className="footer-social">
            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

            <a href="#">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Velin. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
