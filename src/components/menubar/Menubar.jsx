import React, { useState, useEffect, useCallback } from "react";
import { List } from "../animate-ui/icons/list";
import { AnimateIcon } from "../animate-ui/icons/icon";
import { X } from "../animate-ui/icons/x";
import "./Menubar.css";

const Menubar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // 🧩 Reusable menu list — edit here anytime
  const menuItems = [
    { name: "About", target: "about" },
    { name: "Services", target: "services" },
    { name: "Contact", target: "footer" },
  ];

  // Shrink navbar when scrolling
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    if (!menuOpen) return;
    const handleClickOutside = (e) => {
      if (
        !e.target.closest(".mobile-menu-inner") &&
        !e.target.closest(".hamburger")
      ) {
        setMenuOpen(false);
      }
    };
    const timeout = setTimeout(
      () => document.addEventListener("click", handleClickOutside),
      150
    );
    return () => {
      clearTimeout(timeout);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  // Smooth scroll helper
  const scrollToSection = useCallback((id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }, []);

  return (
    <>
      {/* === Navbar === */}
      <nav className={`menubar ${isScrolled ? "shrink" : ""}`}>
        <div className="menubar-logo">Crecimiento</div>

        {/* Desktop menu */}
        <div className="menubar-buttons">
          {menuItems.map((item) => (
            <div
              key={item.target}
              onClick={() => scrollToSection(item.target)}
              className="menubar-inner"
            >
              {item.name}
            </div>
          ))}
        </div>

        {/* Hamburger */}
        <div className="hamburger">
          <AnimateIcon
            onClick={() => setMenuOpen((prev) => !prev)}
            animateOnTap
            completeOnStop
          >
            {menuOpen ? <X /> : <List />}
          </AnimateIcon>
        </div>
      </nav>

      {/* === Mobile Menu === */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <div className="mobile-menu-inner">
          {menuItems.map((item) => (
            <div
              key={item.target}
              onClick={() => scrollToSection(item.target)}
              className="mobile-menu-item"
            >
              {item.name}
            </div>
          ))}

          <AnimateIcon onClick={() => setMenuOpen(false)} animateOnHover>
            <div className="mobile-close-btn">
              <X />
            </div>
          </AnimateIcon>
        </div>
      </div>
    </>
  );
};

export default Menubar;
