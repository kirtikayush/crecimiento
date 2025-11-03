// Menubar.jsx
import React, { useState, useEffect } from "react";
import { List } from "./animate-ui/icons/list";
import { AnimateIcon } from "./animate-ui/icons/icon";
import { X } from "./animate-ui/icons/x";
import "./Menubar.css";

const Menubar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Shrink navbar when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    let timeout;
    let handleClickOutside;

    if (menuOpen) {
      timeout = setTimeout(() => {
        handleClickOutside = (event) => {
          if (
            !event.target.closest(".mobile-menu-inner") &&
            !event.target.closest(".hamburger")
          ) {
            setMenuOpen(false);
          }
        };
        document.addEventListener("click", handleClickOutside);
      }, 150);
    }

    return () => {
      clearTimeout(timeout);
      if (handleClickOutside) {
        document.removeEventListener("click", handleClickOutside);
      }
    };
  }, [menuOpen]);

  return (
    <>
      <div className={`menubar ${isScrolled ? "shrink" : ""}`}>
        <div className="menubar-logo">Crecimiento</div>

        {/* Desktop menu */}
        <div className="menubar-buttons">
          <div className="menubar-inner">About</div>
          <div className="menubar-inner">Service</div>
          <div className="menubar-inner">Contact</div>
        </div>

        {/* Hamburger icon with animation */}
        <div className="hamburger">
          <AnimateIcon
            onClick={() => setMenuOpen((prev) => !prev)}
            // loopDelay={1000}
            completeOnStop
            animateOnTap
          >
            <List />
          </AnimateIcon>
        </div>
      </div>

      {/* Mobile slide‑out menu */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <div className="mobile-menu-inner">
          <div onClick={() => setMenuOpen(false)}>About</div>
          <div onClick={() => setMenuOpen(false)}>Service</div>
          <div onClick={() => setMenuOpen(false)}>Contact</div>
          <AnimateIcon
            onClick={() => setMenuOpen(false)}
            // completeOnStop
            animateOnHover
          >
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
