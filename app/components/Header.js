"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "../contexts/ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const handleToggleTheme = () => {
    console.log("Theme toggle clicked, current theme:", theme);
    toggleTheme();
  };

  return (
    <div className="header sticky px-54 top-0 bg-white text-gray-900 z-1050 flex flex-row justify-between items-center p-5">
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
      <div className="flex flex-row gap-5" data-aos="fade-up">
        <Link className="hover:text-[#274393] transition" href="#services">
          Services
        </Link>
        <Link className="hover:text-[#274393] transition" href="#clientsays">
          Client Says
        </Link>
        <Link className="hover:text-[#274393] transition" href="#about">
          About Us
        </Link>
        {/* <Link className="hover:text-[#274393] transition" href="#blog">
          Blog
        </Link> */}
        <Link className="hover:text-[#274393] transition" href="/projects">
          Projects
        </Link>
      </div>
      <div className="flex flex-row gap-3 items-center" data-aos="fade-right">
        {/* <button
          onClick={handleToggleTheme}
          className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          aria-label="Toggle dark mode"
        >
          {theme === "dark" ? (
            <svg
              className="w-5 h-5 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5 text-gray-700"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button> */}
        <a className="cursor:pointer" href={"/contact"}>
          <button className="bg-[#274393] cursor:pointer  text-white px-4 py-2 rounded">
            Contact Us
          </button>
        </a>
      </div>
    </div>
  );
};

export default Header;
