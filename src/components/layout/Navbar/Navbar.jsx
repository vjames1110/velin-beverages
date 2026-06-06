import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className={`navbar ${
        scrolled
          ? "navbar-scrolled"
          : ""
      }`}
    >
      <div className="logo">
        Velin
      </div>

      <ul
        className={`nav-links ${
          menuOpen ? "active" : ""
        }`}
      >
        <li>
          <a
            href="#home"
            onClick={closeMenu}
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#about"
            onClick={closeMenu}
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#products"
            onClick={closeMenu}
          >
            Products
          </a>
        </li>

        <li>
          <a
            href="#contact"
            onClick={closeMenu}
          >
            Contact
          </a>
        </li>
      </ul>

      <div
        className="mobile-menu"
        onClick={() =>
          setMenuOpen(!menuOpen)
        }
      >
        {menuOpen ? (
          <FaTimes />
        ) : (
          <FaBars />
        )}
      </div>
    </nav>
  );
}