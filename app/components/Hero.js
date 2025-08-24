"use client";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== "undefined") {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    }
  }, []);

  useEffect(() => {
    if (!isClient || typeof window === "undefined") return;

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [isClient]);

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-b from-white to-blue-50/30 relative overflow-hidden min-h-screen">
      {/* Cursor Following Effect - Only on desktop */}
      {isClient && windowSize.width > 768 && (
        <div
          className="fixed pointer-events-none z-10 w-96 h-96 rounded-full opacity-20 blur-3xl transition-all duration-700 ease-out"
          style={{
            background:
              "radial-gradient(circle, rgba(39, 67, 147, 0.3) 0%, rgba(30, 58, 138, 0.2) 50%, transparent 70%)",
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      )}

      {/* Hero Section */}
      <div
        data-aos="fade-up"
        className=" w-full max-w-screen-xl mt-4 sm:mt-8 lg:mt-10 flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-8 mx-auto"
      >
        <div className="font-bold p-4 sm:p-6 lg:p-8 xl:-ml-20 max-w-screen-xl lg:p-20 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <div className="mb-4 sm:mb-6">
            <div className="inline-flex items-center px-3 py-2 sm:px-4 bg-blue-50 rounded-full border border-blue-200">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
              <span className="text-xs sm:text-sm font-medium text-blue-700">
                Available for new projects
              </span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-[#274393] bg-clip-text text-transparent leading-tight mb-1 sm:mb-2">
            We Code the Future.
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#274393] via-blue-700 to-gray-900 bg-clip-text text-transparent leading-tight">
            You Lead it.
          </h1>

          <p className="text-base sm:text-lg lg:text-xl font-light mt-4 sm:mt-6 max-w-2xl lg:max-w-4xl text-gray-600 leading-relaxed">
            <span className="font-medium text-gray-800">Botsix</span> is your
            strategic partner, delivering innovative software solutions that
            drive business growth and digital transformation. We blend
            cutting-edge technology with a deep understanding of your industry
            to create tailored solutions that exceed your expectations. Our team
            of expert developers, designers, and strategists work
            collaboratively to turn your vision into reality, ensuring scalable,
            secure, and future-ready applications that give you a competitive
            edge in today's digital landscape.
          </p>

          <div className="flex items-center justify-center lg:justify-start mt-3 sm:mt-4 mb-4 sm:mb-6 text-xs sm:text-sm text-gray-500">
            <svg
              className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Trusted by 12+ businesses
          </div>

          <div className="gap-3 sm:gap-4 flex mt-4 sm:mt-6 justify-center lg:justify-start flex-col sm:flex-row w-full sm:w-auto">
            <button className="group relative text-sm sm:text-base font-semibold px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#274393] to-[#1e3a8a] border-2 border-transparent text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-200 overflow-hidden w-full sm:w-auto">
              <a href="/contact" className="block">
                <span className="relative z-10 flex items-center justify-center">
                  Get Consultation
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </a>

              <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </button>

            <button className="group text-sm sm:text-base font-semibold px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#274393] border-2 border-[#274393] rounded-lg hover:bg-[#274393] hover:text-white transform hover:scale-105 transition-all duration-200 w-full sm:w-auto">
              <a href="#services" className="block">
                <span className="flex items-center justify-center">
                  Explore Services
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </a>
            </button>
          </div>

          <div className="flex items-center justify-center lg:justify-start mt-6 sm:mt-8 text-xs sm:text-sm text-gray-500">
            <div className="flex -space-x-2">
              {[1, 8, 5, 12].map((i) => (
                <div
                  key={i}
                  className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-medium"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <span className="ml-3">Join 7+ happy clients</span>
          </div>
        </div>

        <div className="relative flex justify-center items-center mt-8 sm:mt-10 lg:mt-0 lg:ml-20 xl:ml-60 w-full lg:w-auto">
          {/* Background decoration */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-3xl"></div>
          <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-10 animate-pulse delay-1000"></div>

          <div
            className="relative bg-white rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8 border border-gray-100 transition-all duration-300 w-full max-w-sm sm:max-w-md lg:max-w-none"
            style={{
              transform:
                isClient && windowSize.width > 768 && windowSize.width > 0
                  ? `perspective(1000px) rotateY(${
                      (mousePosition.x - windowSize.width / 2) * 0.01
                    }deg) rotateX(${
                      (mousePosition.y - windowSize.height / 2) * -0.01
                    }deg)`
                  : "none",
            }}
          >
            <div className="w-full sm:w-[300px] lg:w-[350px] h-[250px] sm:h-[280px] lg:h-[320px] bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl flex items-center justify-center">
              <div className="text-center px-4">
                <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-[#274393] to-[#1e3a8a] rounded-2xl mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                  Innovation Meets Excellence
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Transforming ideas into digital reality
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Counter Section */}
      <div className="w-full max-w-screen-xl mb-8 sm:mb-12 lg:mb-20 mt-8 sm:mt-12 lg:-mt-0 bg-gradient-to-r from-[#274393] via-[#1e3a8a] to-[#274393] md:rounded-2xl px-4 sm:px-6 py-8 sm:py-10 lg:py-12 mx-auto grid grid-cols-2 md:flex md:flex-row items-center justify-between gap-4 sm:gap-6 lg:gap-8 text-white shadow-2xl">
        <CounterBox
          value={7}
          label="Happy Clients"
          mousePosition={mousePosition}
          windowSize={windowSize}
        />
        <div className="hidden md:block w-px h-12 sm:h-16 bg-white/20"></div>
        <CounterBox
          value={12}
          label="Projects Delivered"
          mousePosition={mousePosition}
          windowSize={windowSize}
        />
        <div className="hidden md:block w-px h-12 sm:h-16 bg-white/20"></div>
        <CounterBox
          value={2}
          label="Open Source Contributions"
          mousePosition={mousePosition}
          windowSize={windowSize}
        />
        <div className="hidden md:block w-px h-12 sm:h-16 bg-white/20"></div>
        <CounterBox
          value={4}
          label="Active Projects"
          mousePosition={mousePosition}
          windowSize={windowSize}
        />
      </div>

      <style jsx>{`
        @media (min-width: 769px) {
          .cursor-follow {
            cursor: none;
          }

          .cursor-follow::after {
            content: "";
            position: fixed;
            width: 20px;
            height: 20px;
            background: radial-gradient(
              circle,
              rgba(39, 67, 147, 0.8) 0%,
              rgba(39, 67, 147, 0.4) 50%,
              transparent 100%
            );
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transform: translate(-50%, -50%);
            transition: all 0.1s ease-out;
            left: var(--mouse-x, 0);
            top: var(--mouse-y, 0);
          }
        }
      `}</style>
    </div>
  );
};

const CounterBox = ({ value, label, mousePosition, windowSize }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let start = 0;
    const duration = 2000;
    const interval = 50;
    const step = Math.ceil(value / (duration / interval));

    const counter = setInterval(() => {
      start += step;
      if (start >= value) {
        start = value;
        clearInterval(counter);
      }
      setCount(start);
    }, interval);

    return () => clearInterval(counter);
  }, [value]);

  return (
    <div className="text-center">
      <div
        className="md:rounded-xl p-3 sm:p-4 lg:p-6"
        style={{
          transform:
            windowSize.width > 768 && windowSize.width > 0
              ? `perspective(1000px) rotateY(${
                  (mousePosition.x - windowSize.width / 2) * 0.005
                }deg) rotateX(${
                  (mousePosition.y - windowSize.height / 2) * -0.005
                }deg)`
              : "none",
        }}
      >
        <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-1 sm:mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
          {count}+
        </h1>
        <h2 className="font-light text-blue-100 text-sm sm:text-base lg:text-lg">
          {label}
        </h2>
      </div>
    </div>
  );
};

export default Hero;
