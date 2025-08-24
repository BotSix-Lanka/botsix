"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "../contexts/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleTheme = () => {
    console.log("Theme toggle clicked, current theme:", theme);
    toggleTheme();
  };

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMobileMenuClick = (href) => {
    // Close menu when clicking on hash links
    if (href.startsWith("#")) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="header sticky px-5 sm:px-10 top-0 bg-white text-gray-900 z-1050 flex flex-row justify-between items-center p-5">
      <div>
        <Link href={"/"}>
          <Image
            src="/images/logo.png"
            data-aos="fade-left"
            alt="Logo"
            width={150}
            height={100}
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden sm:flex flex-row gap-5" data-aos="fade-up">
        <Link className="hover:text-[#274393] transition" href="#services">
          Services
        </Link>
        <Link className="hover:text-[#274393] transition" href="#clientsays">
          Client Says
        </Link>
        <Link className="hover:text-[#274393] transition" href="#about">
          About Us
        </Link>
        <Link className="hover:text-[#274393] transition" href="/projects">
          Projects
        </Link>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100vh",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Link
            href="#services"
            className="hover:text-[#274393] transition"
            style={{ marginBottom: "15px" }}
            onClick={() => handleMobileMenuClick("#services")}
          >
            Services
          </Link>
          <Link
            href="#clientsays"
            className="hover:text-[#274393] transition"
            style={{ marginBottom: "15px" }}
            onClick={() => handleMobileMenuClick("#clientsays")}
          >
            Client Says
          </Link>
          <Link
            href="#about"
            className="hover:text-[#274393] transition"
            style={{ marginBottom: "15px" }}
            onClick={() => handleMobileMenuClick("#about")}
          >
            About Us
          </Link>
          <Link
            href="/projects"
            className="hover:text-[#274393] transition"
            style={{ marginBottom: "15px" }}
            onClick={() => handleMobileMenuClick("/projects")}
          >
            Projects
          </Link>
          <a href={"/contact"}>
            <button
              className="bg-[#274393] text-white px-4 py-2 rounded"
              onClick={() => handleMobileMenuClick("/contact")}
            >
              Contact Us
            </button>
          </a>

          {/* Close Button */}
          <button
            onClick={handleToggleMenu}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "none",
              border: "none",
              fontSize: "30px",
              color: "black",
              cursor: "pointer",
            }}
          >
            &times;
          </button>
        </div>
      )}

      <div className="flex flex-row gap-3 items-center" data-aos="fade-right">
        <a className="cursor:pointer" href={"/contact"}>
          <button className="bg-[#274393] cursor:pointer text-white px-4 py-2 rounded">
            Contact Us
          </button>
        </a>
      </div>

      {/* Mobile Menu Burger Icon */}
      <div className="sm:hidden flex items-center gap-5">
        <button onClick={handleToggleMenu} style={{ cursor: "pointer" }}>
          {/* Burger Icon */}
          <div
            style={{
              width: "20px",
              height: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "4px",
                backgroundColor: "black",
                transform: isMenuOpen ? "rotate(45deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease-in-out",
              }}
            ></div>
            <div
              style={{
                width: "100%",
                height: "4px",
                backgroundColor: "black",
                opacity: isMenuOpen ? "0" : "1",
                transition: "opacity 0.3s ease-in-out",
              }}
            ></div>
            <div
              style={{
                width: "100%",
                height: "4px",
                backgroundColor: "black",
                transform: isMenuOpen ? "rotate(-45deg)" : "rotate(0deg)",
                transition: "transform 0.3s ease-in-out",
              }}
            ></div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Header;
