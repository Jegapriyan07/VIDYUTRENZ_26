import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // --- THE MAGIC SCROLL FUNCTION ---
  // This finds the section by ID and forces a smooth scroll to it
  const navigate = useNavigate();
  const location = useLocation();

  // --- THE MAGIC SCROLL FUNCTION ---
  // This finds the section by ID and forces a smooth scroll to it
  const handleScroll = (id) => {
    if (location.pathname === "/") {
      // If we are already on Home, just scroll
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false); // Close mobile menu after clicking
      }
    } else {
      // If we are on another page, navigate to Home first, then scroll
      navigate("/", { state: { scrollTo: id } });
      setIsOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Mobile Toggle */}
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        {/* --- NAVIGATION LINKS (Updated to use onClick) --- */}
        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            {/* We use a button or span styled as a link to prevent default anchor behavior */}
            <span onClick={() => handleScroll("home")} className="nav-links">Home</span>
          </li>
          <li className="nav-item">
            <span onClick={() => handleScroll("about")} className="nav-links">About</span>
          </li>
          <li className="nav-item">
            <span onClick={() => handleScroll("events")} className="nav-links">Events</span>
          </li>
          <li className="nav-item mobile-btn">
            <span onClick={() => handleScroll("contact")} className="nav-links-mobile">Contact</span>
          </li>
        </ul>

        <div className="nav-btn">
          <span onClick={() => handleScroll("contact")} className="btn-gradient">Contact Us</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;